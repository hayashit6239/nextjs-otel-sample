"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/features/Home/book/BookLayout.tsx":
/*!***********************************************!*\
  !*** ./src/features/Home/book/BookLayout.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _httpClients_BookClinet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/httpClients/BookClinet */ \"./src/httpClients/BookClinet.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst BookLayout = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        className: \"h-1/2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                className: \"text-xl\",\n                children: \"本一覧\"\n            }, void 0, false, {\n                fileName: \"/home/tomonori_hayashi/sample-apps/nextjs-otel-sample/src/features/Home/book/BookLayout.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            loadBooks.map((x)=>{})\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tomonori_hayashi/sample-apps/nextjs-otel-sample/src/features/Home/book/BookLayout.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BookLayout, \"EmvgwIb3cHpoFpeP+WmEDbjx4y4=\");\n_c = BookLayout;\nconst loadBooks = async (setIsLoading)=>{\n    setIsLoading(true);\n    try {\n        const fetchBooks = await _httpClients_BookClinet__WEBPACK_IMPORTED_MODULE_2__.bookClient.getBooks();\n        // console.log(fetchBooks);\n        return fetchBooks.map((x)=>{});\n    } catch (error) {\n        console.error(error);\n    } finally{\n        setIsLoading(false);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookLayout);\nvar _c;\n$RefreshReg$(_c, \"BookLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvSG9tZS9ib29rL0Jvb2tMYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNQO0FBQ2lCO0FBRXJELE1BQU1JLGFBQWlCOztJQUNuQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFFM0MscUJBQ0ksOERBQUNGLCtDQUFJQTtRQUFDTyxXQUFVOzswQkFDWiw4REFBQ04sK0NBQUlBO2dCQUFDTSxXQUFVOzBCQUFVOzs7Ozs7WUFFdEJDLFVBQVVDLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FFZDs7Ozs7OztBQUloQjtHQWJNTjtLQUFBQTtBQWVOLE1BQU1JLFlBQVksT0FDZEY7SUFFQUEsYUFBYTtJQUNiLElBQUk7UUFDQSxNQUFNSyxhQUFhLE1BQU1SLCtEQUFVQSxDQUFDUyxRQUFRO1FBQzVDLDJCQUEyQjtRQUMzQixPQUFPRCxXQUFXRixHQUFHLENBQUNDLENBQUFBLEtBRXRCO0lBQ0osRUFDQSxPQUFPRyxPQUFPO1FBQ1ZDLFFBQVFELEtBQUssQ0FBQ0E7SUFDbEIsU0FDUTtRQUNKUCxhQUFhO0lBQ2pCO0FBQ0o7QUFJQSwrREFBZUYsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvSG9tZS9ib29rL0Jvb2tMYXlvdXQudHN4PzY0MjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgVGV4dCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgYm9va0NsaWVudCB9IGZyb20gXCJAL2h0dHBDbGllbnRzL0Jvb2tDbGluZXRcIlxuXG5jb25zdCBCb29rTGF5b3V0OiBGQyA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cImgtMS8yXCI+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+5pys5LiA6KanPC9UZXh0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRCb29rcy5tYXAoeCA9PiB7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn07XG5cbmNvbnN0IGxvYWRCb29rcyA9IGFzeW5jIChcbiAgICBzZXRJc0xvYWRpbmc6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZCxcbikgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmZXRjaEJvb2tzID0gYXdhaXQgYm9va0NsaWVudC5nZXRCb29rcygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhmZXRjaEJvb2tzKTtcbiAgICAgICAgcmV0dXJuIGZldGNoQm9va3MubWFwKHggPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBCb29rTGF5b3V0OyJdLCJuYW1lcyI6WyJGbGV4IiwiVGV4dCIsInVzZVN0YXRlIiwiYm9va0NsaWVudCIsIkJvb2tMYXlvdXQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjbGFzc05hbWUiLCJsb2FkQm9va3MiLCJtYXAiLCJ4IiwiZmV0Y2hCb29rcyIsImdldEJvb2tzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/Home/book/BookLayout.tsx\n"));

/***/ })

});