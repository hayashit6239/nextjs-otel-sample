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

/***/ "./src/httpClients/BookClinet.ts":
/*!***************************************!*\
  !*** ./src/httpClients/BookClinet.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bookClient: function() { return /* binding */ bookClient; }\n/* harmony export */ });\nclass BookClientImpl {\n    constructor(){\n        this.getBooks = async ()=>{\n            const url = \"localhost:8000\";\n            const response = await fetch(url, {});\n            const content = await response.json();\n            return content;\n        };\n    }\n}\nBookClientImpl.instance = new BookClientImpl();\nconst bookClient = BookClientImpl.instance;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaHR0cENsaWVudHMvQm9va0NsaW5ldC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBV0EsTUFBTUE7SUFJRixhQUFzQjthQUVOQyxXQUFXO1lBQ3ZCLE1BQU1DLE1BQU07WUFFWixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GLEtBQUssQ0FBQztZQUVuQyxNQUFNRyxVQUFVLE1BQU1GLFNBQVNHLElBQUk7WUFDbkMsT0FBT0Q7UUFDWDtJQVR3QjtBQVU1QjtBQWRNTCxlQUVZTyxXQUFXLElBQUlQO0FBYzFCLE1BQU1RLGFBQXlCUixlQUFlTyxRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2h0dHBDbGllbnRzL0Jvb2tDbGluZXQudHM/ZDYyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2VCb29rQ29udHJhY3QgPSB7ICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGF1dGhvcl9pZDogbnVtYmVyO1xufVxuXG50eXBlIEJvb2tDbGllbnQgPSB7XG4gICAgZ2V0Qm9va3M6ICgpID0+IFByb21pc2U8UmVzcG9uc2VCb29rc0NvbnRyYWN0IHwgdW5kZWZpbmVkPjtcbn1cblxuY2xhc3MgQm9va0NsaWVudEltcGwgaW1wbGVtZW50cyBCb29rQ2xpZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgQm9va0NsaWVudEltcGwoKTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyByZWFkb25seSBnZXRCb29rcyA9IGFzeW5jICgpOiBQcm9taXNlPFJlc3BvbnNlQm9va3NDb250cmFjdCB8IHVuZGVmaW5lZD4gPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBcImxvY2FsaG9zdDo4MDAwXCI7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHt9KTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIFJlc3BvbnNlQm9va3NDb250cmFjdDtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBib29rQ2xpZW50OiBCb29rQ2xpZW50ID0gQm9va0NsaWVudEltcGwuaW5zdGFuY2U7Il0sIm5hbWVzIjpbIkJvb2tDbGllbnRJbXBsIiwiZ2V0Qm9va3MiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiY29udGVudCIsImpzb24iLCJpbnN0YW5jZSIsImJvb2tDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/httpClients/BookClinet.ts\n"));

/***/ })

});