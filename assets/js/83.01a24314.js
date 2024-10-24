(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{408:function(e,n,t){"use strict";t.r(n);var o=t(14),a=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"undo-redo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#undo-redo"}},[e._v("#")]),e._v(" Undo-redo")]),e._v(" "),n("p",[e._v("HyperFormula supports undo-redo for CRUD and move operations.\nBy default, you can "),n("strong",[e._v("undo 20 actions.")]),e._v(" The "),n("code",[e._v("undoLimit")]),e._v(" can be changed\ninside the "),n("RouterLink",{attrs:{to:"/guide/configuration-options.html"}},[e._v("configuration options")]),e._v(" so you\ncan adapt that number to your needs. Be careful when setting\n"),n("code",[e._v("undoLimit")]),e._v(" to large numbers. It may result in performance issues.")],1),e._v(" "),n("p",[e._v("Undo and redo work together as a synced pair, so each time you\n"),n("strong",[e._v("undo")]),e._v(" some action it is put onto a "),n("strong",[e._v("redo")]),e._v(" stack.")]),e._v(" "),n("p",[n("strong",[e._v("Named expressions")]),e._v(" behave just like any other\n"),n("a",{attrs:{href:"basic-operations"}},[e._v("CRUD operation")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"istheresomething-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#istheresomething-methods"}},[e._v("#")]),e._v(" isThereSomething* methods")]),e._v(" "),n("p",[e._v("There are two methods which can be used to check the actual state\nof the undo-redo stack:"),n("code",[e._v("isThereSomethingToUndo")]),e._v(" and\n"),n("code",[e._v("isThereSomethingToRedo")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"batch-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#batch-operations"}},[e._v("#")]),e._v(" Batch operations")]),e._v(" "),n("p",[e._v("When you "),n("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[e._v("batch several operations")]),e._v(" remember\nthat undo-redo will recognize them as a single cumulative operation.")],1),e._v(" "),n("h2",{attrs:{id:"demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),n("div",{staticClass:"example-container"},[n("style",{pre:!0},[e._v("/* general */\n.example {\n  color: #606c76;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: .01em;\n  line-height: 1.6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.example *,\n.example *::before,\n.example *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n/* buttons */\n\n.example button {\n  border: 0.1em solid #1c49e4;\n  border-radius: .3em;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: .85em;\n  font-family: inherit;\n  font-weight: 700;\n  height: 3em;\n  letter-spacing: .1em;\n  line-height: 3em;\n  padding: 0 3em;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  margin-bottom: 20px;\n  background-color: #1c49e4;\n}\n\n.example button:hover {\n  background-color: #2350ea;\n}\n\n.example button.outline {\n  background-color: transparent;\n  color: #1c49e4;\n}\n\n/* labels */\n\n.example label {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n/* inputs */\n\n.example input, .example select, .example textarea, .example fieldset {\n  margin-bottom: 1.5em;\n  border: 0.1em solid #d1d1d1;\n  border-radius: .4em;\n  height: 3.8em;\n  width: 12em;\n  padding: 0 .5em;\n}\n\n.example input:focus,\n.example select:focus {\n  outline: none;\n  border-color: #1c49e4;\n}\n\n/* message */\n\n.example .message-box {\n  border: 1px solid #1c49e433;\n  background-color: #1c49e405;\n  border-radius: 0.2em;\n  padding: 10px;\n}\n\n.example .message-box span {\n  animation-name: cell-appear;\n  animation-duration: 0.2s;\n  margin: 0;\n}\n\n/* table */\n\n.example table {\n  table-layout: fixed;\n  border-spacing: 0;\n  overflow-x: auto;\n  text-align: left;\n  width: 100%;\n  counter-reset: row-counter col-counter;\n}\n\n.example table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.example table tr td,\n.example table tr th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 0.1em solid #e1e1e1;\n  padding: 0 1em;\n  height: 3.5em;\n}\n\n/* table: header row */\n\n.example table thead tr th span::before {\n  display: inline-block;\n  width: 20px;\n}\n\n.example table.spreadsheet thead tr th span::before {\n  content: counter(col-counter, upper-alpha);\n}\n\n.example table.spreadsheet thead tr th {\n  counter-increment: col-counter;\n}\n\n/* table: first column */\n\n.example table tbody tr td:first-child {\n  text-align: center;\n  padding: 0;\n}\n\n.example table thead tr th:first-child {\n  padding-left: 40px;\n}\n\n.example table tbody tr td:first-child span {\n  width: 100%;\n  display: inline-block;\n  text-align: left;\n  padding-left: 15px;\n  margin-left: 0;\n}\n\n.example table tbody tr td:first-child span::before {\n  content: counter(row-counter);\n  display: inline-block;\n  width: 20px;\n  position: relative;\n  left: -10px;\n}\n\n.example table tbody tr {\n  counter-increment: row-counter;\n}\n\n/* table: summary row */\n\n.example table tbody tr.summary {\n  font-weight: 600;\n}\n\n/* updated-cell animation */\n\n.example table tr td.updated-cell span {\n  animation-name: cell-appear;\n  animation-duration: 0.6s;\n}\n\n@keyframes cell-appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n")]),e._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{"data-preset-type":"hot","data-example-id":"example1"}},[n("div",{pre:!0,attrs:{class:"example"}},[n("button",{pre:!0,attrs:{id:"remove-row",class:"button run"}},[e._v("\n    Remove the second row\n  ")]),e._v(" "),n("button",{pre:!0,attrs:{id:"undo",class:"button button-outline undo"}},[e._v("\n    Undo\n  ")]),e._v(" "),n("p",{pre:!0,attrs:{id:"info-box"}},[e._v(" ")]),e._v(" "),n("table",[n("colgroup",[n("col",{pre:!0,attrs:{style:"width:40%"}}),e._v(" "),n("col",{pre:!0,attrs:{style:"width:60%"}})]),e._v(" "),n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Value")])])]),e._v(" "),n("tbody")])])])]),e._v(" "),n("ScriptLoader",{attrs:{code:"%22use%20strict%22;%0A%0A/**%0A%20*%20Initial%20table%20data.%0A%20*/%0Avar%20tableData%20=%20%5B%5B'Greg',%20'2'%5D,%20%5B'Chris',%20'4'%5D%5D;%0A%0A//%20Create%20an%20empty%20HyperFormula%20instance.%0Avar%20hf%20=%20HyperFormula.buildEmpty(%7B%0A%20%20licenseKey:%20'gpl-v3'%0A%7D);%0A%0A//%20Add%20a%20new%20sheet%20and%20get%20its%20id.%0Avar%20sheetName%20=%20hf.addSheet('main');%0Avar%20sheetId%20=%20hf.getSheetId(sheetName);%0A%0A//%20Fill%20the%20HyperFormula%20sheet%20with%20data.%0Ahf.setCellContents(%7B%0A%20%20row:%200,%0A%20%20col:%200,%0A%20%20sheet:%20sheetId%0A%7D,%20tableData);%0A//%20Clear%20the%20undo%20stack%20to%20prevent%20undoing%20the%20initialization%20steps.%0Ahf.clearUndoStack();%0A%0A/**%0A%20*%20Fill%20the%20HTML%20table%20with%20data.%0A%20*/%0Afunction%20renderTable()%20%7B%0A%20%20var%20tbodyDOM%20=%20document.querySelector('.example%20tbody');%0A%20%20var%20updatedCellClass%20=%20ANIMATION_ENABLED%20?%20'updated-cell'%20:%20'';%0A%20%20var%20_hf$getSheetDimension%20=%20hf.getSheetDimensions(sheetId),%0A%20%20%20%20height%20=%20_hf$getSheetDimension.height,%0A%20%20%20%20width%20=%20_hf$getSheetDimension.width;%0A%20%20var%20newTbodyHTML%20=%20'';%0A%20%20for%20(var%20row%20=%200;%20row%20%3C%20height;%20row++)%20%7B%0A%20%20%20%20for%20(var%20col%20=%200;%20col%20%3C%20width;%20col++)%20%7B%0A%20%20%20%20%20%20var%20cellAddress%20=%20%7B%0A%20%20%20%20%20%20%20%20sheet:%20sheetId,%0A%20%20%20%20%20%20%20%20col:%20col,%0A%20%20%20%20%20%20%20%20row:%20row%0A%20%20%20%20%20%20%7D;%0A%20%20%20%20%20%20var%20cellValue%20=%20hf.getCellValue(cellAddress);%0A%20%20%20%20%20%20newTbodyHTML%20+=%20%22%3Ctd%20class=%5C%22%22.concat(updatedCellClass,%20%22%5C%22%3E%3Cspan%3E%5Cn%20%20%20%20%20%20%22).concat(cellValue,%20%22%5Cn%20%20%20%20%20%20%3C/span%3E%3C/td%3E%22);%0A%20%20%20%20%7D%0A%20%20%20%20newTbodyHTML%20+=%20'%3C/tr%3E';%0A%20%20%7D%0A%20%20tbodyDOM.innerHTML%20=%20newTbodyHTML;%0A%7D%0A%0A/**%0A%20*%20Clear%20the%20existing%20information.%0A%20*/%0Afunction%20clearInfo()%20%7B%0A%20%20var%20infoBoxDOM%20=%20document.querySelector('.example%20#info-box');%0A%20%20infoBoxDOM.innerHTML%20=%20'&nbsp;';%0A%7D%0A%0A/**%0A%20*%20Display%20the%20provided%20message%20in%20the%20info%20box.%0A%20*%0A%20*%20@param%20%7Bstring%7D%20message%20Message%20to%20display.%0A%20*/%0Afunction%20displayInfo(message)%20%7B%0A%20%20var%20infoBoxDOM%20=%20document.querySelector('.example%20#info-box');%0A%20%20infoBoxDOM.innerText%20=%20message;%0A%7D%0A%0A/**%0A%20*%20Bind%20the%20events%20to%20the%20buttons.%0A%20*/%0Afunction%20bindEvents()%20%7B%0A%20%20var%20removeRowButton%20=%20document.querySelector('.example%20#remove-row');%0A%20%20var%20undoButton%20=%20document.querySelector('.example%20#undo');%0A%20%20removeRowButton.addEventListener('click',%20function%20()%20%7B%0A%20%20%20%20removeSecondRow();%0A%20%20%7D);%0A%20%20undoButton.addEventListener('click',%20function%20()%20%7B%0A%20%20%20%20undo();%0A%20%20%7D);%0A%7D%0A%0A/**%0A%20*%20Remove%20the%20second%20row%20from%20the%20table.%0A%20*/%0Afunction%20removeSecondRow()%20%7B%0A%20%20var%20filledRowCount%20=%20hf.getSheetDimensions(sheetId).height;%0A%20%20clearInfo();%0A%20%20if%20(filledRowCount%20%3C%202)%20%7B%0A%20%20%20%20displayInfo(%22There's%20not%20enough%20filled%20rows%20to%20perform%20this%20action.%22);%0A%20%20%20%20return;%0A%20%20%7D%0A%20%20hf.removeRows(sheetId,%20%5B1,%201%5D);%0A%20%20renderTable();%0A%7D%0A%0A/**%0A%20*%20Run%20the%20HF%20undo%20action.%0A%20*/%0Afunction%20undo()%20%7B%0A%20%20clearInfo();%0A%20%20if%20(!hf.isThereSomethingToUndo())%20%7B%0A%20%20%20%20displayInfo(%22There's%20nothing%20to%20undo.%22);%0A%20%20%20%20return;%0A%20%20%7D%0A%20%20hf.undo();%0A%20%20renderTable();%0A%7D%0Avar%20ANIMATION_ENABLED%20=%20true;%0A%0A//%20Bind%20the%20button%20events.%0AbindEvents();%0A//%20Render%20the%20table.%0ArenderTable();"}})],1),e._v(" "),n("div",{staticClass:"example-controls"},[n("form",{staticClass:"form-stackblitz-external",attrs:{action:"https://stackblitz.com/run",method:"post",target:"_blank"}},[n("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][package.json]",readOnly:""}},[e._v('{\n  "name": "hyperformula-demo",\n  "version": "1.0.0",\n  "main": "index.html",\n  "dependencies": {\n    "hyperformula": "latest",\n    "moment": "latest"\n  }\n}')]),e._v(" "),n("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][index.html]",readOnly:""}},[e._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>HyperFormula demo</title>\n  </head>\n\n  <body>\n    <div class="example">\n  <button id="remove-row" class="button run">\n    Remove the second row\n  </button>\n  <button id="undo" class="button button-outline undo">\n    Undo\n  </button>\n  <p id="info-box"> </p>\n  <table>\n    <colgroup>\n      <col style="width:40%" />\n      <col style="width:60%" />\n    </colgroup>\n    <thead>\n    <tr>\n      <th>Name</th>\n      <th>Value</th>\n    </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n</div>\n  </body>\n</html>')]),e._v(" "),n("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][styles.css]",readOnly:""}},[e._v("/* general */\n.example {\n  color: #606c76;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: .01em;\n  line-height: 1.6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.example *,\n.example *::before,\n.example *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n/* buttons */\n\n.example button {\n  border: 0.1em solid #1c49e4;\n  border-radius: .3em;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: .85em;\n  font-family: inherit;\n  font-weight: 700;\n  height: 3em;\n  letter-spacing: .1em;\n  line-height: 3em;\n  padding: 0 3em;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  margin-bottom: 20px;\n  background-color: #1c49e4;\n}\n\n.example button:hover {\n  background-color: #2350ea;\n}\n\n.example button.outline {\n  background-color: transparent;\n  color: #1c49e4;\n}\n\n/* labels */\n\n.example label {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n/* inputs */\n\n.example input, .example select, .example textarea, .example fieldset {\n  margin-bottom: 1.5em;\n  border: 0.1em solid #d1d1d1;\n  border-radius: .4em;\n  height: 3.8em;\n  width: 12em;\n  padding: 0 .5em;\n}\n\n.example input:focus,\n.example select:focus {\n  outline: none;\n  border-color: #1c49e4;\n}\n\n/* message */\n\n.example .message-box {\n  border: 1px solid #1c49e433;\n  background-color: #1c49e405;\n  border-radius: 0.2em;\n  padding: 10px;\n}\n\n.example .message-box span {\n  animation-name: cell-appear;\n  animation-duration: 0.2s;\n  margin: 0;\n}\n\n/* table */\n\n.example table {\n  table-layout: fixed;\n  border-spacing: 0;\n  overflow-x: auto;\n  text-align: left;\n  width: 100%;\n  counter-reset: row-counter col-counter;\n}\n\n.example table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.example table tr td,\n.example table tr th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 0.1em solid #e1e1e1;\n  padding: 0 1em;\n  height: 3.5em;\n}\n\n/* table: header row */\n\n.example table thead tr th span::before {\n  display: inline-block;\n  width: 20px;\n}\n\n.example table.spreadsheet thead tr th span::before {\n  content: counter(col-counter, upper-alpha);\n}\n\n.example table.spreadsheet thead tr th {\n  counter-increment: col-counter;\n}\n\n/* table: first column */\n\n.example table tbody tr td:first-child {\n  text-align: center;\n  padding: 0;\n}\n\n.example table thead tr th:first-child {\n  padding-left: 40px;\n}\n\n.example table tbody tr td:first-child span {\n  width: 100%;\n  display: inline-block;\n  text-align: left;\n  padding-left: 15px;\n  margin-left: 0;\n}\n\n.example table tbody tr td:first-child span::before {\n  content: counter(row-counter);\n  display: inline-block;\n  width: 20px;\n  position: relative;\n  left: -10px;\n}\n\n.example table tbody tr {\n  counter-increment: row-counter;\n}\n\n/* table: summary row */\n\n.example table tbody tr.summary {\n  font-weight: 600;\n}\n\n/* updated-cell animation */\n\n.example table tr td.updated-cell span {\n  animation-name: cell-appear;\n  animation-duration: 0.6s;\n}\n\n@keyframes cell-appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n")]),e._v(" "),n("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][index.ts]",readOnly:""}},[e._v("import './styles.css'\nimport HyperFormula from 'hyperformula';\n\nconsole.log(\n  `%c Using HyperFormula ${HyperFormula.version}`,\n  'color: blue; font-weight: bold'\n);\n\n/**\n * Initial table data.\n */\nconst tableData = [\n  ['Greg', '2'],\n  ['Chris', '4'],\n];\n\n// Create an empty HyperFormula instance.\nconst hf = HyperFormula.buildEmpty({\n  licenseKey: 'gpl-v3',\n});\n\n// Add a new sheet and get its id.\nconst sheetName = hf.addSheet('main');\nconst sheetId = hf.getSheetId(sheetName);\n\n// Fill the HyperFormula sheet with data.\nhf.setCellContents(\n  {\n    row: 0,\n    col: 0,\n    sheet: sheetId,\n  },\n  tableData\n);\n\n// Clear the undo stack to prevent undoing the initialization steps.\nhf.clearUndoStack();\n\n/**\n * Fill the HTML table with data.\n */\nfunction renderTable() {\n  const tbodyDOM = document.querySelector('.example tbody');\n  const updatedCellClass = ANIMATION_ENABLED ? 'updated-cell' : '';\n  const { height, width } = hf.getSheetDimensions(sheetId);\n  let newTbodyHTML = '';\n\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const cellAddress = { sheet: sheetId, col, row };\n      const cellValue = hf.getCellValue(cellAddress);\n\n      newTbodyHTML += `<td class=\"${updatedCellClass}\"><span>\n      ${cellValue}\n      </span></td>`;\n    }\n\n    newTbodyHTML += '</tr>';\n  }\n\n  tbodyDOM.innerHTML = newTbodyHTML;\n}\n\n/**\n * Clear the existing information.\n */\nfunction clearInfo() {\n  const infoBoxDOM = document.querySelector('.example #info-box');\n\n  infoBoxDOM.innerHTML = ' ';\n}\n\n/**\n * Display the provided message in the info box.\n *\n * @param {string} message Message to display.\n */\nfunction displayInfo(message) {\n  const infoBoxDOM = document.querySelector('.example #info-box');\n\n  infoBoxDOM.innerText = message;\n}\n\n/**\n * Bind the events to the buttons.\n */\nfunction bindEvents() {\n  const removeRowButton = document.querySelector('.example #remove-row');\n  const undoButton = document.querySelector('.example #undo');\n\n  removeRowButton.addEventListener('click', () => {\n    removeSecondRow();\n  });\n\n  undoButton.addEventListener('click', () => {\n    undo();\n  });\n}\n\n/**\n * Remove the second row from the table.\n */\nfunction removeSecondRow() {\n  const filledRowCount = hf.getSheetDimensions(sheetId).height;\n\n  clearInfo();\n\n  if (filledRowCount < 2) {\n    displayInfo(\"There's not enough filled rows to perform this action.\");\n\n    return;\n  }\n\n  hf.removeRows(sheetId, [1, 1]);\n  renderTable();\n}\n\n/**\n * Run the HF undo action.\n */\nfunction undo() {\n  clearInfo();\n\n  if (!hf.isThereSomethingToUndo()) {\n    displayInfo(\"There's nothing to undo.\");\n\n    return;\n  }\n\n  hf.undo();\n  renderTable();\n}\n\nconst ANIMATION_ENABLED = true;\n\n// Bind the button events.\nbindEvents();\n\n// Render the table.\nrenderTable();\n")]),e._v(" "),n("input",{attrs:{type:"hidden",name:"project[title]",value:"hyperformula-demo"}}),e._v(" "),n("input",{attrs:{type:"hidden",name:"project[dependencies]",value:'{"hyperformula":"latest", "moment": "latest"}'}}),e._v(" "),n("input",{attrs:{type:"hidden",name:"project[template]",value:"typescript"}}),e._v(" "),n("div",{staticClass:"js-stackblitz-link"},[n("button",{attrs:{type:"submit"}},[n("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"10.43",height:"15",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 368"}},[n("path",{attrs:{fill:"currentColor",d:"M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z"}})]),e._v("\n        Open in Stackblitz\n      ")])])])]),e._v(" "),n("div"),n("div")])}),[],!1,null,null,null);n.default=a.exports}}]);