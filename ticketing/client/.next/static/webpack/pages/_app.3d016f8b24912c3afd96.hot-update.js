/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_build_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/build-client */ \"./helpers/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/app/pages/_app.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar AppComponent = function AppComponent(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      currentUser = _ref.currentUser;\n  console.log(currentUser);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_6__.default, {\n      currentUser: currentUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, {\n        pageProps: pageProps,\n        currentUser: currentUser\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = AppComponent;\n\nAppComponent.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = (0,_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n    var _pageProps, client, _client$get, data;\n\n    return _app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return (0,_helpers_build_client__WEBPACK_IMPORTED_MODULE_5__.default)(context.ctx);\n\n          case 3:\n            client = _context.sent;\n            _client$get = client.get('/api/users/currentuser'), data = _client$get.data;\n            console.log('got data');\n\n            if (!context.Component.getInitialProps) {\n              _context.next = 10;\n              break;\n            }\n\n            _context.next = 9;\n            return context.Component.getInitialProps(context.ctx, client, data.currentUser);\n\n          case 9:\n            _pageProps = _context.sent;\n\n          case 10:\n            console.log('got page props!');\n            return _context.abrupt(\"return\", _objectSpread({\n              pageProps: _pageProps\n            }, data));\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 14]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"AppComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJidWlsZFF1ZXJ5IiwiY3R4IiwiY2xpZW50IiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTJDO0FBQUEsTUFBeENDLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQzlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFBUSxpQkFBVyxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0UsOERBQUMsU0FBRDtBQUFXLGlCQUFTLEVBQUVELFNBQXRCO0FBQWlDLG1CQUFXLEVBQUVDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVZEOztLQUFNSCxZOztBQVlOQSxZQUFZLENBQUNNLGVBQWI7QUFBQSwwTkFBK0IsaUJBQU9DLE9BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHTkMsOERBQVUsQ0FBQ0QsT0FBTyxDQUFDRSxHQUFULENBSEo7O0FBQUE7QUFHckJDLGtCQUhxQjtBQUFBLDBCQUtWQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyx3QkFBWCxDQUxVLEVBS25CQyxJQUxtQixlQUtuQkEsSUFMbUI7QUFNM0JSLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaOztBQU4yQixpQkFPdkJFLE9BQU8sQ0FBQ04sU0FBUixDQUFrQkssZUFQSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQVFQQyxPQUFPLENBQUNOLFNBQVIsQ0FBa0JLLGVBQWxCLENBQ2hCQyxPQUFPLENBQUNFLEdBRFEsRUFFaEJDLE1BRmdCLEVBR2hCRSxJQUFJLENBQUNULFdBSFcsQ0FSTzs7QUFBQTtBQVF6QkQsc0JBUnlCOztBQUFBO0FBYzNCRSxtQkFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFkMkI7QUFnQmxCSCx1QkFBUyxFQUFUQTtBQWhCa0IsZUFnQkpVLElBaEJJOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQWtCcEI7QUFBRVYsdUJBQVMsRUFBVEE7QUFBRixhQWxCb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JBLCtEQUFlRixZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xyXG5pbXBvcnQgYnVpbGRRdWVyeSBmcm9tICcuLi9oZWxwZXJzL2J1aWxkLWNsaWVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5cclxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDb21wb25lbnQgcGFnZVByb3BzPXtwYWdlUHJvcHN9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBwYWdlUHJvcHM7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBidWlsZFF1ZXJ5KGNvbnRleHQuY3R4KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcclxuICAgIGNvbnNvbGUubG9nKCdnb3QgZGF0YScpO1xyXG4gICAgaWYgKGNvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBjb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoXHJcbiAgICAgICAgY29udGV4dC5jdHgsXHJcbiAgICAgICAgY2xpZW50LFxyXG4gICAgICAgIGRhdGEuY3VycmVudFVzZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdnb3QgcGFnZSBwcm9wcyEnKTtcclxuXHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMsIC4uLmRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});