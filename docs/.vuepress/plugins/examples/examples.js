/**
 * Matches into: `example #ID .class :preset --css 2 --html 0 --js 1 --ts 3 --no-edit`.
 *
 * @type {RegExp}
 */
const EXAMPLE_REGEX = /^(example)\s*(#\S*|)\s*(\.\S*|)\s*(:\S*|)\s*([\S|\s]*)$/;
const Token = require('markdown-it/lib/token');
const { buildCode } = require('./code-builder');
const { addCodeForPreset } = require('./add-code-for-preset');
const { stackblitz } = require('./stackblitz');

const parseCode = (content) => {
  if (!content) return '';

  return content
    // Remove the all "/* start:skip-in-preview */" and "/* end:skip-in-preview */" comments
    .replace(/\/\*(\s+)?(start|end):skip-in-preview(\s+)?\*\/\n/gm, '')
    // Remove the code between "/* start:skip-in-compilation */" and "/* end:skip-in-compilation */" expressions
    // eslint-disable-next-line max-len
    .replace(/\/\*(\s+)?start:skip-in-compilation(\s+)?\*\/\n.*?\/\*(\s+)?end:skip-in-compilation(\s+)?\*\/\n/msg, '')
    // Remove /* end-file */
    .replace(/\/\* end-file \*\//gm, '');
};

const parseCodeSandbox = (content) => {
  if (!content) return '';

  return content
    // Remove the all "/* start:skip-in-preview */" and "/* end:skip-in-preview */" comments
    .replace(/\/\*(\s+)?(start|end):skip-in-preview(\s+)?\*\/\n/gm, '')
    // Remove the all "/* start:skip-in-compilation */" and "/* end:skip-in-compilation */" comments
    .replace(/\/\*(\s+)?(start|end):skip-in-compilation(\s+)?\*\/\n/gm, '');
};

module.exports = function(docsVersion, base) {
  return {
    type: 'example',
    render(tokens, index, _opts, env) {
      const token = tokens[index];
      const m = token.info.trim().match(EXAMPLE_REGEX);

      if (token.nesting !== 1 || !m) {
        return '';
      }

      let [, , id, klass, preset, args] = m;

      id = id ? id.substring(1) : 'example1';
      klass = klass ? klass.substring(1) : '';
      preset = preset ? preset.substring(1) : 'hot';
      args = args || '';

      const htmlPos = args.match(/--html (\d*)/)?.[1];
      const htmlIndex = htmlPos ? index + Number.parseInt(htmlPos, 10) : 0;
      const htmlToken = htmlPos ? tokens[htmlIndex] : undefined;
      const htmlContent = htmlToken
        ? htmlToken.content
        : `<div id="${id}" class="hot ${klass}"></div>`;
      const htmlContentRoot = `<div data-preset-type="${preset}" data-example-id="${id}" >${htmlContent}</div>`;

      const cssPos = args.match(/--css (\d*)/)?.[1];
      const cssIndex = cssPos ? index + Number.parseInt(cssPos, 10) : 0;
      const cssToken = cssPos ? tokens[cssIndex] : undefined;
      const cssContent = cssToken ? cssToken.content : '';

      const jsPos = args.match(/--js (\d*)/)?.[1] || 1;
      const jsIndex = jsPos ? index + Number.parseInt(jsPos, 10) : 0;
      const jsToken = jsPos ? tokens[jsIndex] : undefined;

      const tsPos = args.match(/--ts (\d*)/)?.[1];
      const tsIndex = tsPos ? index + Number.parseInt(tsPos, 10) : 0;
      const tsToken = tsPos ? tokens[tsIndex] : undefined;

      // Parse code
      const jsTokenWithBasePath = jsToken?.content?.replaceAll('{{$basePath}}', base);
      const tsTokenWithBasePath = tsToken?.content?.replaceAll('{{$basePath}}', base);
      const codeToCompile = parseCode(jsTokenWithBasePath);
      const tsCodeToCompileSandbox = parseCodeSandbox(tsTokenWithBasePath);

      [htmlIndex, jsIndex, tsIndex, cssIndex].filter(x => !!x).sort().reverse().forEach((x) => {
        tokens.splice(x, 1);
      });

      const newTokens = [
        new Token('container_div_open', 'div', 1),
        new Token('container_div_close', 'div', -1),
        new Token('container_div_open', 'div', 1),
        new Token('container_div_close', 'div', -1),
      ];

      tokens.splice(index + 1, 0, ...newTokens);

      const codeForPreset = addCodeForPreset(codeToCompile, preset, id);
      const code = buildCode(
        id + (preset.includes('angular') ? '.ts' : '.jsx'),
        codeForPreset,
        env.relativePath
      );
      const encodedCode = encodeURI(code);

      return `
        <div class="example-container">
          <style v-pre>${cssContent}</style>
          <div v-pre>${htmlContentRoot}</div>
          <ScriptLoader code="${encodedCode}"></ScriptLoader>
        </div>
        <div class="example-controls">
          <div class="examples-buttons">
            ${stackblitz(
              id,
              htmlContent,
              tsCodeToCompileSandbox,
              cssContent,
              docsVersion,
              preset,
              'TypeScript'
            )}
          </div>
        </div>
      `;
    },
  };
};

// - use HF in demo
// - remove non-needed glue-code
// - runtime requires js, stackblitz should be in ts, so we need the converter script from HOT as well
// - all demos need to be reworked to the 3-file format