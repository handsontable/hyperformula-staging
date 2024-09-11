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

const tab = (tabName, token, id) => {
  if (!token) return [];

  const openTSDivToken = new Token('html_block', '', 1);
  const closeDivToken = new Token('html_block', '', -1);

  openTSDivToken.content = `<tab id="${tabName.toLowerCase()}-tab-${id}" name="${tabName}">`;
  closeDivToken.content = '</tab>';

  return [
    openTSDivToken,
    token,
    closeDivToken
  ];
};

const parsePreview = (content) => {
  if (!content) return '';

  return content
    // Remove the all "/* start:skip-in-compilation */" and "/* end:skip-in-compilation */" comments
    .replace(/\/\*(\s+)?(start|end):skip-in-compilation(\s+)?\*\/\n/gm, '')
    // Remove the code between "/* start:skip-in-preview */" and "/* end:skip-in-preview */" expressions
    .replace(/\/\*(\s+)?start:skip-in-preview(\s+)?\*\/\n.*?\/\*(\s+)?end:skip-in-preview(\s+)?\*\/\n/msg, '')
    // Remove /* end-file */
    .replace(/\/\* end-file \*\//gm, '')
    .trim();
};

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

const getCodeToken = (jsToken, tsToken) => {
  const code = new Token('inline', '', 1);
  const openJSDivToken = new Token('container_div_open', 'div', 1);
  const openTSDivToken = new Token('container_div_open', 'div', 1);
  const closeDivToken = new Token('container_div_close', 'div', -1);

  openJSDivToken.attrSet('class', 'tab-content-js');
  openJSDivToken.attrSet('v-if', '$parent.$parent.selectedLang === \'JavaScript\'');
  openTSDivToken.attrSet('class', 'tab-content-ts');
  openTSDivToken.attrSet('v-if', '$parent.$parent.selectedLang === \'TypeScript\'');

  code.children = [
    openJSDivToken,
    jsToken,
    closeDivToken
  ];

  if (tsToken) {
    code.children.push(openTSDivToken);
    code.children.push(tsToken);
    code.children.push(closeDivToken);
  }

  return code;
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
      const tsCodeToCompile = parseCode(tsTokenWithBasePath);
      const codeToCompileSandbox = parseCodeSandbox(jsTokenWithBasePath);
      const tsCodeToCompileSandbox = parseCodeSandbox(tsTokenWithBasePath);
      const codeToPreview = parsePreview(jsTokenWithBasePath);
      const tsCodeToPreview = parsePreview(tsTokenWithBasePath);

      // Replace token content
      if (jsToken) jsToken.content = codeToPreview;

      if (tsToken) tsToken.content = tsCodeToPreview;

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
      const tsCodeForPreset = addCodeForPreset(tsCodeToCompile, preset, id);
      const code = buildCode(
        id + (preset.includes('angular') ? '.ts' : '.jsx'),
        codeForPreset,
        env.relativePath
      );
      const encodedCode = encodeURI(
        `useHandsontable('${docsVersion}', function(){${code}}, '${preset}')`
      );
      const activeTab = `${args.match(/--tab (code|html|css|preview)/)?.[1] ?? 'preview'}-tab-${id}`;
      const noEdit = !!args.match(/--no-edit/)?.[0];
      const selectedLang = '$parent.$parent.selectedLang';
      const isJavaScript = preset.includes('hot');
      const isReact = preset.includes('react');
      const isReactOrJavaScript = isJavaScript || isReact;

      return `
        <div class="example-container">
          <style v-pre>${cssContent}</style>
          <div v-pre>${htmlContentRoot}</div>
<!--          <ScriptLoader code="${encodedCode}"></ScriptLoader>-->
        </div>
      `;
    },
  };
};
