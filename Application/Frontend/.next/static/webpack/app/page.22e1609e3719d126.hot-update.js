"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/RegistrationPage/Registration.tsx":
/*!******************************************************!*\
  !*** ./components/RegistrationPage/Registration.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Registration() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userName: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    const handleChange = (evt)=>{\n        const changedField = evt.target.name;\n        const newValue = evt.target.value;\n        setFormData((currData)=>{\n            return {\n                ...currData,\n                [changedField]: newValue\n            };\n        });\n    };\n    const handleSubmit = ()=>{\n        console.log(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: \"User Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"username\",\n                        value: formData.userName,\n                        onChange: handleChange,\n                        name: \"username\",\n                        id: \"username\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        placeholder: \"Enter your email\",\n                        value: formData.email,\n                        onChange: handleChange,\n                        id: \"email\",\n                        name: \"email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"password\",\n                        value: formData.password,\n                        onChange: handleChange,\n                        id: \"password\",\n                        name: \"password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Registration, \"QG/Si06gVSd/A5RXi7tW9iczn4k=\");\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZS9SZWdpc3RyYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUVqQyxTQUFTQzs7SUFDTCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7UUFDckNJLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGVBQWVELElBQUlFLE1BQU0sQ0FBQ0MsSUFBSTtRQUNwQyxNQUFNQyxXQUFXSixJQUFJRSxNQUFNLENBQUNHLEtBQUs7UUFDakNWLFlBQVksQ0FBQ1c7WUFDWCxPQUFPO2dCQUNMLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0wsYUFBYSxFQUFFRztZQUNsQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlO1FBQ25CQyxRQUFRQyxHQUFHLENBQUNmO0lBQ2Q7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNnQjs7a0NBQ0MsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFXOzs7Ozs7a0NBQzFCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWlYsT0FBT1gsU0FBU0UsUUFBUTt3QkFDeEJvQixVQUFVakI7d0JBQ1ZJLE1BQUs7d0JBQ0xjLElBQUc7Ozs7Ozs7Ozs7OzswQkFHUCw4REFBQ1A7O2tDQUNDLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pWLE9BQU9YLFNBQVNHLEtBQUs7d0JBQ3JCbUIsVUFBVWpCO3dCQUNWa0IsSUFBRzt3QkFDSGQsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDTzs7a0NBQ0MsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFXOzs7Ozs7a0NBQzFCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWlYsT0FBT1gsU0FBU0ksUUFBUTt3QkFDeEJrQixVQUFVakI7d0JBQ1ZrQixJQUFHO3dCQUNIZCxNQUFLOzs7Ozs7a0NBRVAsOERBQUNlO3dCQUFPQyxTQUFTWjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7QUFJM0M7R0EzRFNkO0tBQUFBO0FBNERULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZS9SZWdpc3RyYXRpb24udHN4P2JiODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdHJhdGlvbigpOkpTWC5FbGVtZW50e1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldnQpID0+IHtcclxuICAgICAgICBjb25zdCBjaGFuZ2VkRmllbGQgPSBldnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldEZvcm1EYXRhKChjdXJyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY3VyckRhdGEsXHJcbiAgICAgICAgICAgIFtjaGFuZ2VkRmllbGRdOiBuZXdWYWx1ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZXJOYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImV2dCIsImNoYW5nZWRGaWVsZCIsInRhcmdldCIsIm5hbWUiLCJuZXdWYWx1ZSIsInZhbHVlIiwiY3VyckRhdGEiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImlkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationPage/Registration.tsx\n"));

/***/ })

});