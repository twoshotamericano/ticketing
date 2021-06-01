/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/app/pages/index.js\";\n\nconst LandingPage = ({\n  currentUser,\n  tickets\n}) => {\n  console.log(`currentUser is ${currentUser}`);\n  const ticketList = tickets === null || tickets === void 0 ? void 0 : tickets.map(ticket => {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: ticket.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: ticket.price\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined)]\n    }, ticket.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, undefined);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Tickets\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n      className: \"table\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Title\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Price\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: ticketList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\nLandingPage.getInitialProps = async (context, client, currentUser) => {\n  const {\n    data\n  } = await client.get('/api/tickets');\n  return {\n    tickets: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJ0aWNrZXRzIiwiY29uc29sZSIsImxvZyIsInRpY2tldExpc3QiLCJtYXAiLCJ0aWNrZXQiLCJ0aXRsZSIsInByaWNlIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY2xpZW50IiwiZGF0YSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsYUFBRjtBQUFlQztBQUFmLENBQUQsS0FBOEI7QUFDaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGtCQUFpQkgsV0FBWSxFQUExQztBQUNBLFFBQU1JLFVBQVUsR0FBR0gsT0FBSCxhQUFHQSxPQUFILHVCQUFHQSxPQUFPLENBQUVJLEdBQVQsQ0FBY0MsTUFBRCxJQUFZO0FBQzFDLHdCQUNFO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0EsTUFBTSxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLGtCQUFLRCxNQUFNLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLE9BQVNGLE1BQU0sQ0FBQ0csRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU1ELEdBUGtCLENBQW5CO0FBU0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU8sZUFBUyxFQUFDLE9BQWpCO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQUEsa0JBQVFMO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFjRCxDQXpCRDs7QUEyQkFMLFdBQVcsQ0FBQ1csZUFBWixHQUE4QixPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixFQUF3QlosV0FBeEIsS0FBd0M7QUFDcEUsUUFBTTtBQUFFYTtBQUFGLE1BQVcsTUFBTUQsTUFBTSxDQUFDRSxHQUFQLENBQVcsY0FBWCxDQUF2QjtBQUVBLFNBQU87QUFBRWIsV0FBTyxFQUFFWTtBQUFYLEdBQVA7QUFDRCxDQUpEOztBQU1BLCtEQUFlZCxXQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyLCB0aWNrZXRzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhgY3VycmVudFVzZXIgaXMgJHtjdXJyZW50VXNlcn1gKTtcclxuICBjb25zdCB0aWNrZXRMaXN0ID0gdGlja2V0cz8ubWFwKCh0aWNrZXQpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e3RpY2tldC5pZH0+XHJcbiAgICAgICAgPHRkPnt0aWNrZXQudGl0bGV9PC90ZD5cclxuICAgICAgICA8dGQ+e3RpY2tldC5wcmljZX08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5UaWNrZXRzPC9oMT5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT57dGlja2V0TGlzdH08L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0LCBjbGllbnQsIGN1cnJlbnRVc2VyKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3RpY2tldHMnKTtcclxuXHJcbiAgcmV0dXJuIHsgdGlja2V0czogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();