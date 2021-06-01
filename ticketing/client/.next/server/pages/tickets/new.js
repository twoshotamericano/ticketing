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
exports.id = "pages/tickets/new";
exports.ids = ["pages/tickets/new"];
exports.modules = {

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/app/hooks/use-request.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  url,\n  method,\n  body,\n  onSuccess\n}) => {\n  const {\n    0: errors,\n    1: setErrors\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n\n  const doRequest = async () => {\n    try {\n      setErrors(null);\n      const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[method](url, body);\n\n      if (onSuccess) {\n        onSuccess(response.data);\n      }\n\n      return response.data;\n    } catch (err) {\n      console.log(err.response.data.errors);\n      setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"alert alert-danger\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Ooops....\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: \"my-0\",\n          children: err.response.data.errors.map(err => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: err.message\n          }, err.message, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined));\n      throw err;\n    }\n  };\n\n  return {\n    doRequest,\n    errors\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2UtcmVxdWVzdC5qcz9hOThjIl0sIm5hbWVzIjpbInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VTdGF0ZSIsImRvUmVxdWVzdCIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZSxDQUFDO0FBQUVBLEtBQUY7QUFBT0MsUUFBUDtBQUFlQyxNQUFmO0FBQXFCQztBQUFyQixDQUFELEtBQXNDO0FBQ25ELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQyxJQUFELENBQXBDOztBQUVBLFFBQU1DLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFFBQUk7QUFDRkYsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLFlBQU1HLFFBQVEsR0FBRyxNQUFNQyw4Q0FBSyxDQUFDUixNQUFELENBQUwsQ0FBY0QsR0FBZCxFQUFtQkUsSUFBbkIsQ0FBdkI7O0FBQ0EsVUFBSUMsU0FBSixFQUFlO0FBQ2JBLGlCQUFTLENBQUNLLFFBQVEsQ0FBQ0UsSUFBVixDQUFUO0FBQ0Q7O0FBRUQsYUFBT0YsUUFBUSxDQUFDRSxJQUFoQjtBQUNELEtBUkQsQ0FRRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0gsUUFBSixDQUFhRSxJQUFiLENBQWtCTixNQUE5QjtBQUNBQyxlQUFTLGVBQ1A7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsTUFBZDtBQUFBLG9CQUNHTSxHQUFHLENBQUNILFFBQUosQ0FBYUUsSUFBYixDQUFrQk4sTUFBbEIsQ0FBeUJVLEdBQXpCLENBQThCSCxHQUFELGlCQUM1QjtBQUFBLHNCQUF1QkEsR0FBRyxDQUFDSTtBQUEzQixhQUFTSixHQUFHLENBQUNJLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPLENBQVQ7QUFVQSxZQUFNSixHQUFOO0FBQ0Q7QUFDRixHQXZCRDs7QUF5QkEsU0FBTztBQUFFSixhQUFGO0FBQWFIO0FBQWIsR0FBUDtBQUNELENBN0JEIiwiZmlsZSI6Ii4vaG9va3MvdXNlLXJlcXVlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHVybCwgbWV0aG9kLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCBib2R5KTtcclxuICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuICAgICAgc2V0RXJyb3JzKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS0wXCI+XHJcbiAgICAgICAgICAgIHtlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMubWFwKChlcnIpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGRvUmVxdWVzdCwgZXJyb3JzIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/tickets/new.js":
/*!******************************!*\
  !*** ./pages/tickets/new.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/app/pages/tickets/new.js\";\n\n\n\n\nconst NewTicket = () => {\n  const {\n    0: title,\n    1: setTitle\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: price,\n    1: setPrice\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    doRequest,\n    errors\n  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_2__.default)({\n    url: '/api/tickets/create',\n    method: 'post',\n    body: {\n      title,\n      price\n    },\n    onSuccess: function (ticket) {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n    }\n  });\n\n  const onSubmit = event => {\n    event.preventDefault();\n    doRequest();\n  };\n\n  const onBlur = () => {\n    const value = parseFloat(price);\n\n    if (isNaN(value)) {\n      return;\n    }\n\n    setPrice(value.toFixed(2));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Create a Ticket\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), errors, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          value: title,\n          onChange: e => setTitle(e.target.value),\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Price\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          value: price,\n          onBlur: onBlur,\n          onChange: e => setPrice(e.target.value),\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn btn-primary\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewTicket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy90aWNrZXRzL25ldy5qcz9iZjFkIl0sIm5hbWVzIjpbIk5ld1RpY2tldCIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsInByaWNlIiwic2V0UHJpY2UiLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsInRpY2tldCIsIlJvdXRlciIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQmx1ciIsInZhbHVlIiwicGFyc2VGbG9hdCIsImlzTmFOIiwidG9GaXhlZCIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBRUcsYUFBRjtBQUFhQztBQUFiLE1BQXdCQywyREFBVSxDQUFDO0FBQ3ZDQyxPQUFHLEVBQUUscUJBRGtDO0FBRXZDQyxVQUFNLEVBQUUsTUFGK0I7QUFHdkNDLFFBQUksRUFBRTtBQUNKVixXQURJO0FBRUpHO0FBRkksS0FIaUM7QUFPdkNRLGFBQVMsRUFBRSxVQUFVQyxNQUFWLEVBQWtCO0FBQzNCQyw2REFBQSxDQUFZLEdBQVo7QUFDRDtBQVRzQyxHQUFELENBQXhDOztBQVlBLFFBQU1DLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCQSxTQUFLLENBQUNDLGNBQU47QUFDQVgsYUFBUztBQUNWLEdBSEQ7O0FBS0EsUUFBTVksTUFBTSxHQUFHLE1BQU07QUFDbkIsVUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUNoQixLQUFELENBQXhCOztBQUVBLFFBQUlpQixLQUFLLENBQUNGLEtBQUQsQ0FBVCxFQUFrQjtBQUNoQjtBQUNEOztBQUVEZCxZQUFRLENBQUNjLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FBRCxDQUFSO0FBQ0QsR0FSRDs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdmLE1BRkgsZUFHRTtBQUFNLGNBQVEsRUFBRVEsUUFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFDRSxlQUFLLEVBQUVkLEtBRFQ7QUFFRSxrQkFBUSxFQUFHc0IsQ0FBRCxJQUFPckIsUUFBUSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNMLEtBQVYsQ0FGM0I7QUFHRSxtQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFTRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFDRSxlQUFLLEVBQUVmLEtBRFQ7QUFFRSxnQkFBTSxFQUFFYyxNQUZWO0FBR0Usa0JBQVEsRUFBR0ssQ0FBRCxJQUFPbEIsUUFBUSxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNMLEtBQVYsQ0FIM0I7QUFJRSxtQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFrQkU7QUFBUSxpQkFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMEJELENBeEREOztBQTBEQSwrREFBZW5CLFNBQWYiLCJmaWxlIjoiLi9wYWdlcy90aWNrZXRzL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTmV3VGlja2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHsgZG9SZXF1ZXN0LCBlcnJvcnMgfSA9IHVzZVJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS90aWNrZXRzL2NyZWF0ZScsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIGJvZHk6IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgfSxcclxuICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHRpY2tldCkge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb1JlcXVlc3QoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQocHJpY2UpO1xyXG5cclxuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByaWNlKHZhbHVlLnRvRml4ZWQoMikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+Q3JlYXRlIGEgVGlja2V0PC9oMT5cclxuICAgICAge2Vycm9yc31cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGlja2V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tickets/new.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/tickets/new.js"));
module.exports = __webpack_exports__;

})();