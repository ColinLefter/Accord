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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Registration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Registration() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userName: \"\",\n        email: \"\",\n        tel: \"\",\n        password: \"\"\n    });\n    const handleChange = (evt)=>{\n        const changedField = evt.target.name;\n        const newValue = evt.target.value;\n        setFormData((currData)=>{\n            return {\n                ...currData,\n                [changedField]: newValue\n            };\n        });\n    };\n    const handleSubmit = ()=>{\n        console.log(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        style: {\n                            display: \"block\",\n                            marginBottom: 5\n                        },\n                        children: \"User Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"username\",\n                        value: formData.userName,\n                        onChange: handleChange,\n                        name: \"username\",\n                        id: \"username\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        style: {\n                            display: \"block\",\n                            marginBottom: 5\n                        },\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        placeholder: \"Enter your email\",\n                        value: formData.email,\n                        onChange: handleChange,\n                        id: \"email\",\n                        name: \"email\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"tel\",\n                        style: {\n                            display: \"block\",\n                            marginBottom: 5\n                        },\n                        children: \"Phone number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"tel\",\n                        placeholder: \"Enter your phone number\",\n                        value: formData.tel,\n                        onChange: handleChange,\n                        id: \"tel\",\n                        name: \"tel\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                lineNumber: 52,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        style: {\n                            display: \"block\",\n                            marginBottom: 5\n                        },\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"password\",\n                        value: formData.password,\n                        onChange: handleChange,\n                        id: \"password\",\n                        name: \"password\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n                lineNumber: 64,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\Registration.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n} // export default Registration;\n_s(Registration, \"3RDeoODYcP+sAFc69gnDkjC4mxo=\");\n_c = Registration;\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZS9SZWdpc3RyYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNQO0FBRVgsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUNyQ0ssVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsVUFBVTtJQUNaO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxlQUFlRCxJQUFJRSxNQUFNLENBQUNDLElBQUk7UUFDcEMsTUFBTUMsV0FBV0osSUFBSUUsTUFBTSxDQUFDRyxLQUFLO1FBQ2pDWCxZQUFZLENBQUNZO1lBQ1gsT0FBTztnQkFDTCxHQUFHQSxRQUFRO2dCQUNYLENBQUNMLGFBQWEsRUFBRUc7WUFDbEI7UUFDRjtJQUNGO0lBRUEsTUFBTUcsZUFBZTtRQUNuQkMsUUFBUUMsR0FBRyxDQUFDaEI7SUFDZDtJQUNBLHFCQUNFLDhEQUFDaUI7OzBCQUNDLDhEQUFDQTs7a0NBQ0MsOERBQUNDO3dCQUFNQyxTQUFRO3dCQUFXQyxPQUFPOzRCQUFFQyxTQUFTOzRCQUFTQyxjQUFjO3dCQUFFO2tDQUFHOzs7Ozs7a0NBQ3hFLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWmIsT0FBT1osU0FBU0UsUUFBUTt3QkFDeEJ3QixVQUFVcEI7d0JBQ1ZJLE1BQUs7d0JBQ0xpQixJQUFHO3dCQUNIQyxRQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNYOztrQ0FDQyw4REFBQ0M7d0JBQU1DLFNBQVE7d0JBQVFDLE9BQU87NEJBQUVDLFNBQVM7NEJBQVNDLGNBQWM7d0JBQUU7a0NBQUc7Ozs7OztrQ0FDckUsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaYixPQUFPWixTQUFTRyxLQUFLO3dCQUNyQnVCLFVBQVVwQjt3QkFDVnFCLElBQUc7d0JBQ0hqQixNQUFLO3dCQUNMa0IsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDWDs7a0NBQ0MsOERBQUNDO3dCQUFNQyxTQUFRO3dCQUFNQyxPQUFPOzRCQUFFQyxTQUFTOzRCQUFTQyxjQUFjO3dCQUFFO2tDQUFHOzs7Ozs7a0NBQ25FLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWmIsT0FBT1osU0FBU0ksR0FBRzt3QkFDbkJzQixVQUFVcEI7d0JBQ1ZxQixJQUFHO3dCQUNIakIsTUFBSzt3QkFDTGtCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ1g7O2tDQUNDLDhEQUFDQzt3QkFBTUMsU0FBUTt3QkFBV0MsT0FBTzs0QkFBRUMsU0FBUzs0QkFBU0MsY0FBYzt3QkFBRTtrQ0FBRzs7Ozs7O2tDQUN4RSw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1piLE9BQU9aLFNBQVNLLFFBQVE7d0JBQ3hCcUIsVUFBVXBCO3dCQUNWcUIsSUFBRzt3QkFDSGpCLE1BQUs7d0JBQ0xrQixRQUFROzs7Ozs7a0NBRVYsOERBQUNDO3dCQUFPQyxTQUFTaEI7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQyxFQUNBLCtCQUErQjtHQTVFUGY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RyYXRpb25QYWdlL1JlZ2lzdHJhdGlvbi50c3g/YmI4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RyYXRpb24oKTpKU1guRWxlbWVudHtcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHRlbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZWRGaWVsZCA9IGV2dC50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoKGN1cnJEYXRhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jdXJyRGF0YSxcclxuICAgICAgICAgICAgW2NoYW5nZWRGaWVsZF06IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiA1IH19PlVzZXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206IDUgfX0+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlbFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogNSB9fT5QaG9uZSBudW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudGVsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgaWQ9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206IDUgfX0+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlYWN0IiwiUmVnaXN0cmF0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZXJOYW1lIiwiZW1haWwiLCJ0ZWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImV2dCIsImNoYW5nZWRGaWVsZCIsInRhcmdldCIsIm5hbWUiLCJuZXdWYWx1ZSIsInZhbHVlIiwiY3VyckRhdGEiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImlkIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationPage/Registration.tsx\n"));

/***/ })

});