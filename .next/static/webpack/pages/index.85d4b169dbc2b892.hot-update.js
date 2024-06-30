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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _httpClients_BookClinet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/httpClients/BookClinet */ \"./src/httpClients/BookClinet.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst BookLayout = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(loadBooks(setIsLoading, setBooks));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        className: \"h-1/2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n            className: \"text-xl\",\n            children: \"本一覧\"\n        }, void 0, false, {\n            fileName: \"/home/tomonori_hayashi/sample-apps/nextjs-otel-sample/src/features/Home/book/BookLayout.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/tomonori_hayashi/sample-apps/nextjs-otel-sample/src/features/Home/book/BookLayout.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BookLayout, \"eH0q8bQRbwNjymwQLlSVj073+uI=\");\n_c = BookLayout;\nconst loadBooks = async (setIsLoading, setBooks)=>{\n    setIsLoading(true);\n    try {\n        const fetchBooks = await _httpClients_BookClinet__WEBPACK_IMPORTED_MODULE_2__.bookClient.getBooks();\n        console.log(fetchBooks);\n    // setBooks(fetchBooks.map(x => {\n    // }));\n    } catch (error) {\n        console.error(error);\n    } finally{\n        setIsLoading(false);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookLayout);\nvar _c;\n$RefreshReg$(_c, \"BookLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvSG9tZS9ib29rL0Jvb2tMYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNJO0FBQ007QUFRckQsTUFBTUssYUFBaUI7O0lBQ25CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQVMsRUFBRTtJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDTlEsUUFBUUMsR0FBRyxDQUFDQyxVQUNSTCxjQUNBRTtJQUVSO0lBRUEscUJBQ0ksOERBQUNULCtDQUFJQTtRQUFDYSxXQUFVO2tCQUNaLDRFQUFDWiwrQ0FBSUE7WUFBQ1ksV0FBVTtzQkFBVTs7Ozs7Ozs7Ozs7QUFHdEM7R0FoQk1SO0tBQUFBO0FBa0JOLE1BQU1PLFlBQVksT0FDZEwsY0FDQUU7SUFFQUYsYUFBYTtJQUNiLElBQUk7UUFDQSxNQUFNTyxhQUFhLE1BQU1WLCtEQUFVQSxDQUFDVyxRQUFRO1FBQzVDTCxRQUFRQyxHQUFHLENBQUNHO0lBQ1osaUNBQWlDO0lBRWpDLE9BQU87SUFDWCxFQUNBLE9BQU9FLE9BQU87UUFDVk4sUUFBUU0sS0FBSyxDQUFDQTtJQUNsQixTQUNRO1FBQ0pULGFBQWE7SUFDakI7QUFDSjtBQUVBLCtEQUFlRixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9Ib21lL2Jvb2svQm9va0xheW91dC50c3g/NjQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBUZXh0IH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGJvb2tDbGllbnQgfSBmcm9tIFwiQC9odHRwQ2xpZW50cy9Cb29rQ2xpbmV0XCJcblxudHlwZSBib29rID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGF1dGhvcklkOiBudW1iZXI7XG59XG5cbmNvbnN0IEJvb2tMYXlvdXQ6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Jvb2tzLCBzZXRCb29rc10gPSB1c2VTdGF0ZTxib29rW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvYWRCb29rcyhcbiAgICAgICAgICAgIHNldElzTG9hZGluZyxcbiAgICAgICAgICAgIHNldEJvb2tzLFxuICAgICAgICApKTtcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cImgtMS8yXCI+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+5pys5LiA6KanPC9UZXh0PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn07XG5cbmNvbnN0IGxvYWRCb29rcyA9IGFzeW5jIChcbiAgICBzZXRJc0xvYWRpbmc6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICBzZXRCb29rczogKHZhbHVlOiBib29rW10pID0+IHZvaWQsXG4pID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmV0Y2hCb29rcyA9IGF3YWl0IGJvb2tDbGllbnQuZ2V0Qm9va3MoKTtcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hCb29rcyk7XG4gICAgICAgIC8vIHNldEJvb2tzKGZldGNoQm9va3MubWFwKHggPT4ge1xuXG4gICAgICAgIC8vIH0pKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb29rTGF5b3V0OyJdLCJuYW1lcyI6WyJGbGV4IiwiVGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYm9va0NsaWVudCIsIkJvb2tMYXlvdXQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJib29rcyIsInNldEJvb2tzIiwiY29uc29sZSIsImxvZyIsImxvYWRCb29rcyIsImNsYXNzTmFtZSIsImZldGNoQm9va3MiLCJnZXRCb29rcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/Home/book/BookLayout.tsx\n"));

/***/ })

});