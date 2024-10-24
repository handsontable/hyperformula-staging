(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{407:function(t,e,a){"use strict";a.r(e);var l=a(14),n=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"volatile-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile-functions"}},[t._v("#")]),t._v(" Volatile functions")]),t._v(" "),e("p",[t._v("If you work with spreadsheet software regularly, then you've probably\nheard about Volatile Functions. They are distinctive because they\naffect the way the calculation engine works. "),e("strong",[t._v("Every cell\ndependent on a volatile function is recalculated upon every worksheet\nchange triggered by the operations listed below\n(volatile actions).")])]),t._v(" "),e("p",[t._v("HyperFormula uses a dependency tree to keep track of all related\ncells and ranges of cells. On top of that, it constructs a\ncalculation chain which determines the order in which the recalculation\nprocess should be done.")]),t._v(" "),e("p",[t._v('Usually, only cells marked as "dirty" are calculated\nselectively. However, this is not the case when a volatile function\nexists somewhere within the workbook. Volatile functions are always\ntreated as "dirty" and recalculated on most actions.')]),t._v(" "),e("p",[t._v("Depending on how many cells are dependent directly or indirectly on\nthe volatile function, it may impact the engine's performance. Use them with caution, especially in large workbooks.")]),t._v(" "),e("h2",{attrs:{id:"volatile-functions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile-functions-2"}},[t._v("#")]),t._v(" Volatile functions")]),t._v(" "),e("p",[t._v("Volatile functions are recalculated on every volatile action, regardless of the arguments passed in the function call.\nFunctions that depend on the structure of the sheet act as if they were volatile but only on operations on the sheet structure, such as adding or removing rows or columns.")]),t._v(" "),e("h4",{attrs:{id:"built-in-volatile-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#built-in-volatile-functions"}},[t._v("#")]),t._v(" Built-in volatile functions:")]),t._v(" "),e("ul",[e("li",[t._v("RAND")]),t._v(" "),e("li",[t._v("RANDBETWEEN")]),t._v(" "),e("li",[t._v("NOW")]),t._v(" "),e("li",[t._v("TODAY")])]),t._v(" "),e("h4",{attrs:{id:"built-in-functions-that-depend-on-the-structure-of-the-sheet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#built-in-functions-that-depend-on-the-structure-of-the-sheet"}},[t._v("#")]),t._v(" Built-in functions that depend on the structure of the sheet:")]),t._v(" "),e("ul",[e("li",[t._v("COLUMN")]),t._v(" "),e("li",[t._v("ROW")]),t._v(" "),e("li",[t._v("COLUMNS")]),t._v(" "),e("li",[t._v("ROWS")]),t._v(" "),e("li",[t._v("FORMULATEXT")])]),t._v(" "),e("p",[t._v("See the complete "),e("RouterLink",{attrs:{to:"/guide/built-in-functions.html"}},[t._v("list of functions")]),t._v(" available.")],1),t._v(" "),e("h2",{attrs:{id:"volatile-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile-actions"}},[t._v("#")]),t._v(" Volatile actions")]),t._v(" "),e("p",[t._v("These actions trigger the recalculation process of volatile functions:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Related method")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Recalculate on demand")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("rebuildAndRecalculate")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Resume an automatic recalculation mode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("resumeEvaluation")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Batch operations")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("batch")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Modify cell content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("setCellContents")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Modify sheet content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("setSheetContent")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Clear sheet content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("clearSheet")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Insert a row")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("addRows")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Remove a row")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("removeRows")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Insert a column")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("addColumns")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Remove a column")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("removeColumns")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Move a cell")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("moveCells")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Move a row")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("moveRows")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Move a column")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("moveColumns")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Add a defined name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("addNamedExpression")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Modify a defined name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("changeNamedExpression")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Remove a defined name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("removeNamedExpression")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Add a sheet")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("addSheet")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Remove a sheet")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("removeSheet")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Rename a sheet")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("renameSheet")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Undo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("undo")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Redo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("redo")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Cut")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("cut")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Paste")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("paste")])])])])]),t._v(" "),e("h2",{attrs:{id:"tweaking-performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tweaking-performance"}},[t._v("#")]),t._v(" Tweaking performance")]),t._v(" "),e("p",[t._v("The extensive use of volatile functions may cause a performance drop.\nTo reduce the negative effect, you can try\n"),e("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[t._v("batching these operations")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"volatile-custom-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile-custom-functions"}},[t._v("#")]),t._v(" Volatile custom functions")]),t._v(" "),e("p",[t._v("There is a way to mark a custom function as volatile:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is an example of how the RAND function is implemented")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can do the same with a custom function")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'RAND'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rand'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isVolatile")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("You can find more information about creating custom functions in\n"),e("a",{attrs:{href:"custom-functions"}},[t._v("this section")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);