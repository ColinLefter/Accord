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

/***/ "(app-pages-browser)/./components/RegistrationPage/RegistrationPage.tsx":
/*!**********************************************************!*\
  !*** ./components/RegistrationPage/RegistrationPage.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Container/Container.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Paper/Paper.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Group/Group.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Select/Select.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Button/Button.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n/* \r\nThe Registration page mostly use the styling from mantine API\r\n\r\n*/ \n\nfunction RegistrationPage() {\n    _s();\n    //The useState for the form object\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userName: \"\",\n        email: \"\",\n        tel: \"\",\n        password: \"\",\n        confirmedPassword: \"\"\n    });\n    const [isPasswordMatched, setIsPasswordMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    //handle submit and handle change method\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(formData);\n    //alert('Form submitted');\n    };\n    const handleChange = (evt)=>{\n        const changedField = evt.target.name;\n        const newValue = evt.target.value;\n        setFormData((currData)=>{\n            return {\n                ...currData,\n                [changedField]: newValue\n            };\n        });\n    };\n    // Months array\n    const months = Array.from({\n        length: 12\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: new Date(0, index).toLocaleString(\"default\", {\n                month: \"long\"\n            })\n        }));\n    // Days array\n    const days = Array.from({\n        length: 31\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: \"\".concat(index + 1)\n        }));\n    // Years array\n    const currentYear = new Date().getFullYear();\n    const years = Array.from({\n        length: 100\n    }, (_, index)=>({\n            value: \"\".concat(currentYear - index),\n            label: \"\".concat(currentYear - index)\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        size: \"xs\",\n        my: 40,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n            withBorder: true,\n            shadow: \"md\",\n            p: 30,\n            mt: 30,\n            radius: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    size: \"lg\",\n                    children: \"Create an account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    onChange: handleChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"EMAIL\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"email\",\n                            name: \"email\",\n                            value: formData.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"PHONE NUMBER (type in 10 digits of your phone number)\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"tel\",\n                            name: \"tel\",\n                            value: formData.tel,\n                            pattern: \"[0-9]{10}\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"DISPLAY NAME\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"userName\",\n                            value: formData.userName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__.PasswordInput, {\n                            label: \"PASSWORD\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"password\",\n                            value: formData.password\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__.PasswordInput, {\n                            label: \"CONFIRM PASSWORD\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"confirmedPassword\",\n                            value: formData.confirmedPassword\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        isPasswordMatched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"xs\",\n                            size: \"xs\",\n                            c: \"red\",\n                            children: \"Please enter the same password you entered above!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"md\",\n                            size: \"sm\",\n                            children: \"DATE OF BIRTH - not required\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            grow: true,\n                            mt: \"xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Month\",\n                                    data: months,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Day\",\n                                    data: days,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Year\",\n                                    data: years,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            mt: \"xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                type: \"submit\",\n                                fullWidth: true,\n                                children: \"Continue\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(RegistrationPage, \"0eNQ/bY4UVcgEtDQJ2HtgTi/Is0=\");\n_c = RegistrationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationPage);\nvar _c;\n$RefreshReg$(_c, \"RegistrationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZS9SZWdpc3RyYXRpb25QYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFHQSxHQUN3RztBQUV2RTtBQUVqQyxTQUFTUzs7SUFDUCxrQ0FBa0M7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQ3ZDSSxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxVQUFVO1FBQ1ZDLG1CQUFtQjtJQUNyQjtJQUNBLE1BQU0sQ0FBQ0MsbUJBQW1CQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFekQsd0NBQXdDO0lBQ3hDLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDcEJBLE1BQU1DLGNBQWM7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ2I7SUFDWiwwQkFBMEI7SUFDNUI7SUFDQSxNQUFNYyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGVBQWVELElBQUlFLE1BQU0sQ0FBQ0MsSUFBSTtRQUNwQyxNQUFNQyxXQUFXSixJQUFJRSxNQUFNLENBQUNHLEtBQUs7UUFDakNuQixZQUFZLENBQUNvQjtZQUNYLE9BQU87Z0JBQ0wsR0FBR0EsUUFBUTtnQkFDWCxDQUFDTCxhQUFhLEVBQUVHO1lBQ2xCO1FBQ0Y7SUFDRjtJQUVBLGVBQWU7SUFDZixNQUFNRyxTQUFTQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUTtJQUFHLEdBQUcsQ0FBQ0MsR0FBR0MsUUFBVztZQUN2RFAsT0FBTyxHQUFhLE9BQVZPLFFBQVE7WUFDbEJDLE9BQU8sSUFBSUMsS0FBSyxHQUFHRixPQUFPRyxjQUFjLENBQUMsV0FBVztnQkFBRUMsT0FBTztZQUFPO1FBQ3RFO0lBRUEsYUFBYTtJQUNiLE1BQU1DLE9BQU9ULE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUcsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3JEUCxPQUFPLEdBQWEsT0FBVk8sUUFBUTtZQUNsQkMsT0FBTyxHQUFhLE9BQVZELFFBQVE7UUFDcEI7SUFFQSxjQUFjO0lBQ2QsTUFBTU0sY0FBYyxJQUFJSixPQUFPSyxXQUFXO0lBQzFDLE1BQU1DLFFBQVFaLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUksR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3ZEUCxPQUFPLEdBQXVCLE9BQXBCYSxjQUFjTjtZQUN4QkMsT0FBTyxHQUF1QixPQUFwQkssY0FBY047UUFDMUI7SUFFQSxxQkFDRSw4REFBQ3JDLDJJQUFTQTtRQUFDOEMsTUFBSztRQUFLQyxJQUFJO2tCQUN2Qiw0RUFBQzlDLHVJQUFLQTtZQUFDK0MsVUFBVTtZQUFDQyxRQUFPO1lBQUtDLEdBQUc7WUFBSUMsSUFBSTtZQUFJQyxRQUFPOzs4QkFDbEQsOERBQUNsRCxzSUFBSUE7b0JBQUM0QyxNQUFLOzhCQUFLOzs7Ozs7OEJBR2hCLDhEQUFDTztvQkFBS0MsVUFBVW5DO29CQUFjb0MsVUFBVS9COztzQ0FDdEMsOERBQUNyQiwySUFBU0E7NEJBQUNtQyxPQUFNOzRCQUFRa0IsUUFBUTs0QkFBQ0wsSUFBRzs0QkFBS00sTUFBSzs0QkFBUTdCLE1BQUs7NEJBQVFFLE9BQU9wQixTQUFTRyxLQUFLOzs7Ozs7c0NBQ3pGLDhEQUFDViwySUFBU0E7NEJBQUNtQyxPQUFNOzRCQUF3RGtCLFFBQVE7NEJBQUNMLElBQUc7NEJBQUtNLE1BQUs7NEJBQU03QixNQUFLOzRCQUFNRSxPQUFPcEIsU0FBU0ksR0FBRzs0QkFBRTRDLFNBQVE7Ozs7OztzQ0FDN0ksOERBQUN2RCwySUFBU0E7NEJBQUNtQyxPQUFNOzRCQUFla0IsUUFBUTs0QkFBQ0wsSUFBRzs0QkFBS3ZCLE1BQUs7NEJBQVdFLE9BQU9wQixTQUFTRSxRQUFROzs7Ozs7c0NBQ3pGLDhEQUFDUiwrSUFBYUE7NEJBQUNrQyxPQUFNOzRCQUFXa0IsUUFBUTs0QkFBQ0wsSUFBRzs0QkFBS3ZCLE1BQUs7NEJBQVdFLE9BQU9wQixTQUFTSyxRQUFROzs7Ozs7c0NBQ3pGLDhEQUFDWCwrSUFBYUE7NEJBQUNrQyxPQUFNOzRCQUFtQmtCLFFBQVE7NEJBQUNMLElBQUc7NEJBQUt2QixNQUFLOzRCQUFvQkUsT0FBT3BCLFNBQVNNLGlCQUFpQjs7Ozs7O3dCQUNsSEMsbUNBQXFCLDhEQUFDZixzSUFBSUE7NEJBQUNpRCxJQUFHOzRCQUFLTCxNQUFLOzRCQUFLYSxHQUFHO3NDQUFPOzs7Ozs7c0NBRXhELDhEQUFDekQsc0lBQUlBOzRCQUFDaUQsSUFBRzs0QkFBS0wsTUFBSztzQ0FBTTs7Ozs7O3NDQUd6Qiw4REFBQ3hDLHVJQUFLQTs0QkFBRXNELElBQUk7NEJBQUNULElBQUc7OzhDQUNkLDhEQUFDNUMsd0lBQU1BO29DQUFDc0QsYUFBWTtvQ0FBUUMsTUFBTTlCO29DQUFRd0IsUUFBUTs7Ozs7OzhDQUNsRCw4REFBQ2pELHdJQUFNQTtvQ0FBQ3NELGFBQVk7b0NBQU1DLE1BQU1wQjtvQ0FBTWMsUUFBUTs7Ozs7OzhDQUM5Qyw4REFBQ2pELHdJQUFNQTtvQ0FBQ3NELGFBQVk7b0NBQU9DLE1BQU1qQjtvQ0FBT1csUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdsRCw4REFBQ2xELHVJQUFLQTs0QkFBQzZDLElBQUc7c0NBQ1IsNEVBQUM5Qyx3SUFBTUE7Z0NBQUNvRCxNQUFLO2dDQUFTTSxTQUFTOzBDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0dBN0VTdEQ7S0FBQUE7QUErRVQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvblBhZ2UvUmVnaXN0cmF0aW9uUGFnZS50c3g/NjZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuLyogXHJcblRoZSBSZWdpc3RyYXRpb24gcGFnZSBtb3N0bHkgdXNlIHRoZSBzdHlsaW5nIGZyb20gbWFudGluZSBBUElcclxuXHJcbiovXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUGFwZXIsIFRleHQsIFRleHRJbnB1dCwgUGFzc3dvcmRJbnB1dCwgQnV0dG9uLCBHcm91cCwgU2VsZWN0IH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBSZWdpc3RyYXRpb25QYWdlKCl7XHJcbiAgLy9UaGUgdXNlU3RhdGUgZm9yIHRoZSBmb3JtIG9iamVjdFxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHRlbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgY29uZmlybWVkUGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2lzUGFzc3dvcmRNYXRjaGVkLCBzZXRJc1Bhc3N3b3JkTWF0Y2hdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgLy9oYW5kbGUgc3VibWl0IGFuZCBoYW5kbGUgY2hhbmdlIG1ldGhvZFxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAvL2FsZXJ0KCdGb3JtIHN1Ym1pdHRlZCcpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgY29uc3QgY2hhbmdlZEZpZWxkID0gZXZ0LnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0Rm9ybURhdGEoKGN1cnJEYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY3VyckRhdGEsXHJcbiAgICAgICAgW2NoYW5nZWRGaWVsZF06IG5ld1ZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gTW9udGhzIGFycmF5XHJcbiAgY29uc3QgbW9udGhzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgdmFsdWU6IGAke2luZGV4ICsgMX1gLFxyXG4gICAgbGFiZWw6IG5ldyBEYXRlKDAsIGluZGV4KS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9KVxyXG4gIH0pKTtcclxuXHJcbiAgLy8gRGF5cyBhcnJheVxyXG4gIGNvbnN0IGRheXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzMSB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICB2YWx1ZTogYCR7aW5kZXggKyAxfWAsXHJcbiAgICBsYWJlbDogYCR7aW5kZXggKyAxfWBcclxuICB9KSk7XHJcblxyXG4gIC8vIFllYXJzIGFycmF5XHJcbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgeWVhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDAgfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgdmFsdWU6IGAke2N1cnJlbnRZZWFyIC0gaW5kZXh9YCxcclxuICAgIGxhYmVsOiBgJHtjdXJyZW50WWVhciAtIGluZGV4fWBcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHNpemU9XCJ4c1wiIG15PXs0MH0+XHJcbiAgICAgIDxQYXBlciB3aXRoQm9yZGVyIHNoYWRvdz1cIm1kXCIgcD17MzB9IG10PXszMH0gcmFkaXVzPVwibWRcIj5cclxuICAgICAgICA8VGV4dCBzaXplPVwibGdcIj5cclxuICAgICAgICAgIENyZWF0ZSBhbiBhY2NvdW50XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIkVNQUlMXCIgcmVxdWlyZWQgbXQ9XCJtZFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH0vPlxyXG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIlBIT05FIE5VTUJFUiAodHlwZSBpbiAxMCBkaWdpdHMgb2YgeW91ciBwaG9uZSBudW1iZXIpXCIgcmVxdWlyZWQgbXQ9XCJtZFwiIHR5cGU9XCJ0ZWxcIiBuYW1lPVwidGVsXCIgdmFsdWU9e2Zvcm1EYXRhLnRlbH0gcGF0dGVybj1cIlswLTldezEwfVwiLz5cclxuICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9XCJESVNQTEFZIE5BTUVcIiByZXF1aXJlZCBtdD1cIm1kXCIgbmFtZT1cInVzZXJOYW1lXCIgdmFsdWU9e2Zvcm1EYXRhLnVzZXJOYW1lfS8+XHJcbiAgICAgICAgICA8UGFzc3dvcmRJbnB1dCBsYWJlbD1cIlBBU1NXT1JEXCIgcmVxdWlyZWQgbXQ9XCJtZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH0vPlxyXG4gICAgICAgICAgPFBhc3N3b3JkSW5wdXQgbGFiZWw9XCJDT05GSVJNIFBBU1NXT1JEXCIgcmVxdWlyZWQgbXQ9XCJtZFwiIG5hbWU9XCJjb25maXJtZWRQYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5jb25maXJtZWRQYXNzd29yZH0vPlxyXG4gICAgICAgICAge2lzUGFzc3dvcmRNYXRjaGVkICYmIDxUZXh0IG10PVwieHNcIiBzaXplPVwieHNcIiBjPXtcInJlZFwifT5QbGVhc2UgZW50ZXIgdGhlIHNhbWUgcGFzc3dvcmQgeW91IGVudGVyZWQgYWJvdmUhPC9UZXh0Pn1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFRleHQgbXQ9XCJtZFwiIHNpemU9XCJzbVwiID5cclxuICAgICAgICAgICAgREFURSBPRiBCSVJUSCAtIG5vdCByZXF1aXJlZFxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEdyb3VwICBncm93IG10PVwieHNcIj5cclxuICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIk1vbnRoXCIgZGF0YT17bW9udGhzfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiRGF5XCIgZGF0YT17ZGF5c30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlllYXJcIiBkYXRhPXt5ZWFyc30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDwvR3JvdXA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxHcm91cCBtdD1cInhsXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aD5Db250aW51ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Hcm91cD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uUGFnZTtcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlBhcGVyIiwiVGV4dCIsIlRleHRJbnB1dCIsIlBhc3N3b3JkSW5wdXQiLCJCdXR0b24iLCJHcm91cCIsIlNlbGVjdCIsInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uUGFnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VyTmFtZSIsImVtYWlsIiwidGVsIiwicGFzc3dvcmQiLCJjb25maXJtZWRQYXNzd29yZCIsImlzUGFzc3dvcmRNYXRjaGVkIiwic2V0SXNQYXNzd29yZE1hdGNoIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJjaGFuZ2VkRmllbGQiLCJ0YXJnZXQiLCJuYW1lIiwibmV3VmFsdWUiLCJ2YWx1ZSIsImN1cnJEYXRhIiwibW9udGhzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwibGFiZWwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImRheXMiLCJjdXJyZW50WWVhciIsImdldEZ1bGxZZWFyIiwieWVhcnMiLCJzaXplIiwibXkiLCJ3aXRoQm9yZGVyIiwic2hhZG93IiwicCIsIm10IiwicmFkaXVzIiwiZm9ybSIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInR5cGUiLCJwYXR0ZXJuIiwiYyIsImdyb3ciLCJwbGFjZWhvbGRlciIsImRhdGEiLCJmdWxsV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationPage/RegistrationPage.tsx\n"));

/***/ })

});