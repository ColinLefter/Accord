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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Container/Container.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Paper/Paper.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Group/Group.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Select/Select.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Button/Button.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n/* \r\nThe Registration page mostly use the styling from mantine API\r\n\r\n*/ \n\nfunction RegistrationPage() {\n    _s();\n    //The useState for the form object\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userName: \"\",\n        email: \"\",\n        tel: \"\",\n        password: \"\",\n        confirmedPassword: \"\"\n    });\n    const [isPasswordMatched, setIsPasswordMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //handle submit and handle change method\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(formData);\n    //alert('Form submitted');\n    };\n    const handleChange = (evt)=>{\n        const changedField = evt.target.name;\n        const newValue = evt.target.value;\n        setFormData((currData)=>{\n            return {\n                ...currData,\n                [changedField]: newValue\n            };\n        });\n    };\n    // Months array\n    const months = Array.from({\n        length: 12\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: new Date(0, index).toLocaleString(\"default\", {\n                month: \"long\"\n            })\n        }));\n    // Days array\n    const days = Array.from({\n        length: 31\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: \"\".concat(index + 1)\n        }));\n    // Years array\n    const currentYear = new Date().getFullYear();\n    const years = Array.from({\n        length: 100\n    }, (_, index)=>({\n            value: \"\".concat(currentYear - index),\n            label: \"\".concat(currentYear - index)\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        size: \"xs\",\n        my: 40,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n            withBorder: true,\n            shadow: \"md\",\n            p: 30,\n            mt: 30,\n            radius: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    size: \"lg\",\n                    children: \"Create an account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    onChange: handleChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"EMAIL\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"email\",\n                            name: \"email\",\n                            value: formData.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"PHONE NUMBER (type in 10 digits of your phone number)\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"tel\",\n                            name: \"tel\",\n                            value: formData.tel,\n                            pattern: \"[0-9]{10}\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"DISPLAY NAME\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"userName\",\n                            value: formData.userName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__.PasswordInput, {\n                            label: \"PASSWORD\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"password\",\n                            value: formData.password\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__.PasswordInput, {\n                            label: \"CONFIRM PASSWORD\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"confirmedPassword\",\n                            value: formData.confirmedPassword\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        isPasswordMatched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"xs\",\n                            size: \"xs\",\n                            c: \"red\",\n                            children: \"Please enter the same password you entered above!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"md\",\n                            size: \"sm\",\n                            children: \"DATE OF BIRTH - not required\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            grow: true,\n                            mt: \"xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Month\",\n                                    data: months,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Day\",\n                                    data: days,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Year\",\n                                    data: years,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            mt: \"xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                type: \"submit\",\n                                fullWidth: true,\n                                children: \"Continue\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(RegistrationPage, \"8tJJOd/gFb25RayHjkQwK7mLKyY=\");\n_c = RegistrationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationPage);\nvar _c;\n$RefreshReg$(_c, \"RegistrationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZS9SZWdpc3RyYXRpb25QYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFHQSxHQUN3RztBQUV2RTtBQUVqQyxTQUFTUzs7SUFDUCxrQ0FBa0M7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQ3ZDSSxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxVQUFVO1FBQ1ZDLG1CQUFtQjtJQUNyQjtJQUNBLE1BQU0sQ0FBQ0MsbUJBQW1CQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFekQsd0NBQXdDO0lBQ3hDLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDcEJBLE1BQU1DLGNBQWM7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ2I7SUFDWiwwQkFBMEI7SUFDNUI7SUFDQSxNQUFNYyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGVBQWVELElBQUlFLE1BQU0sQ0FBQ0MsSUFBSTtRQUNwQyxNQUFNQyxXQUFXSixJQUFJRSxNQUFNLENBQUNHLEtBQUs7UUFDakNuQixZQUFZLENBQUNvQjtZQUNYLE9BQU87Z0JBQ0wsR0FBR0EsUUFBUTtnQkFDWCxDQUFDTCxhQUFhLEVBQUVHO1lBQ2xCO1FBQ0Y7SUFDRjtJQUVBLGVBQWU7SUFDZixNQUFNRyxTQUFTQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUTtJQUFHLEdBQUcsQ0FBQ0MsR0FBR0MsUUFBVztZQUN2RFAsT0FBTyxHQUFhLE9BQVZPLFFBQVE7WUFDbEJDLE9BQU8sSUFBSUMsS0FBSyxHQUFHRixPQUFPRyxjQUFjLENBQUMsV0FBVztnQkFBRUMsT0FBTztZQUFPO1FBQ3RFO0lBRUEsYUFBYTtJQUNiLE1BQU1DLE9BQU9ULE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUcsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3JEUCxPQUFPLEdBQWEsT0FBVk8sUUFBUTtZQUNsQkMsT0FBTyxHQUFhLE9BQVZELFFBQVE7UUFDcEI7SUFFQSxjQUFjO0lBQ2QsTUFBTU0sY0FBYyxJQUFJSixPQUFPSyxXQUFXO0lBQzFDLE1BQU1DLFFBQVFaLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUksR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3ZEUCxPQUFPLEdBQXVCLE9BQXBCYSxjQUFjTjtZQUN4QkMsT0FBTyxHQUF1QixPQUFwQkssY0FBY047UUFDMUI7SUFFQSxxQkFDRSw4REFBQ3JDLDJJQUFTQTtRQUFDOEMsTUFBSztRQUFLQyxJQUFJO2tCQUN2Qiw0RUFBQzlDLHVJQUFLQTtZQUFDK0MsVUFBVTtZQUFDQyxRQUFPO1lBQUtDLEdBQUc7WUFBSUMsSUFBSTtZQUFJQyxRQUFPOzs4QkFDbEQsOERBQUNsRCxzSUFBSUE7b0JBQUM0QyxNQUFLOzhCQUFLOzs7Ozs7OEJBR2hCLDhEQUFDTztvQkFBS0MsVUFBVW5DO29CQUFjb0MsVUFBVS9COztzQ0FDdEMsOERBQUNyQiwySUFBU0E7NEJBQUNtQyxPQUFNOzRCQUFRa0IsUUFBUTs0QkFBQ0wsSUFBRzs0QkFBS00sTUFBSzs0QkFBUTdCLE1BQUs7NEJBQVFFLE9BQU9wQixTQUFTRyxLQUFLOzs7Ozs7c0NBQ3pGLDhEQUFDViwySUFBU0E7NEJBQUNtQyxPQUFNOzRCQUF3RGtCLFFBQVE7NEJBQUNMLElBQUc7NEJBQUtNLE1BQUs7NEJBQU03QixNQUFLOzRCQUFNRSxPQUFPcEIsU0FBU0ksR0FBRzs0QkFBRTRDLFNBQVE7Ozs7OztzQ0FDN0ksOERBQUN2RCwySUFBU0E7NEJBQUNtQyxPQUFNOzRCQUFla0IsUUFBUTs0QkFBQ0wsSUFBRzs0QkFBS3ZCLE1BQUs7NEJBQVdFLE9BQU9wQixTQUFTRSxRQUFROzs7Ozs7c0NBQ3pGLDhEQUFDUiwrSUFBYUE7NEJBQUNrQyxPQUFNOzRCQUFXa0IsUUFBUTs0QkFBQ0wsSUFBRzs0QkFBS3ZCLE1BQUs7NEJBQVdFLE9BQU9wQixTQUFTSyxRQUFROzs7Ozs7c0NBQ3pGLDhEQUFDWCwrSUFBYUE7NEJBQUNrQyxPQUFNOzRCQUFtQmtCLFFBQVE7NEJBQUNMLElBQUc7NEJBQUt2QixNQUFLOzRCQUFvQkUsT0FBT3BCLFNBQVNNLGlCQUFpQjs7Ozs7O3dCQUNsSEMsbUNBQXFCLDhEQUFDZixzSUFBSUE7NEJBQUNpRCxJQUFHOzRCQUFLTCxNQUFLOzRCQUFLYSxHQUFHO3NDQUFPOzs7Ozs7c0NBRXhELDhEQUFDekQsc0lBQUlBOzRCQUFDaUQsSUFBRzs0QkFBS0wsTUFBSztzQ0FBTTs7Ozs7O3NDQUd6Qiw4REFBQ3hDLHVJQUFLQTs0QkFBRXNELElBQUk7NEJBQUNULElBQUc7OzhDQUNkLDhEQUFDNUMsd0lBQU1BO29DQUFDc0QsYUFBWTtvQ0FBUUMsTUFBTTlCO29DQUFRd0IsUUFBUTs7Ozs7OzhDQUNsRCw4REFBQ2pELHdJQUFNQTtvQ0FBQ3NELGFBQVk7b0NBQU1DLE1BQU1wQjtvQ0FBTWMsUUFBUTs7Ozs7OzhDQUM5Qyw4REFBQ2pELHdJQUFNQTtvQ0FBQ3NELGFBQVk7b0NBQU9DLE1BQU1qQjtvQ0FBT1csUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdsRCw4REFBQ2xELHVJQUFLQTs0QkFBQzZDLElBQUc7c0NBQ1IsNEVBQUM5Qyx3SUFBTUE7Z0NBQUNvRCxNQUFLO2dDQUFTTSxTQUFTOzBDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0dBN0VTdEQ7S0FBQUE7QUErRVQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvblBhZ2UvUmVnaXN0cmF0aW9uUGFnZS50c3g/NjZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuLyogXHJcblRoZSBSZWdpc3RyYXRpb24gcGFnZSBtb3N0bHkgdXNlIHRoZSBzdHlsaW5nIGZyb20gbWFudGluZSBBUElcclxuXHJcbiovXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUGFwZXIsIFRleHQsIFRleHRJbnB1dCwgUGFzc3dvcmRJbnB1dCwgQnV0dG9uLCBHcm91cCwgU2VsZWN0IH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBSZWdpc3RyYXRpb25QYWdlKCl7XHJcbiAgLy9UaGUgdXNlU3RhdGUgZm9yIHRoZSBmb3JtIG9iamVjdFxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHRlbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgY29uZmlybWVkUGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2lzUGFzc3dvcmRNYXRjaGVkLCBzZXRJc1Bhc3N3b3JkTWF0Y2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vaGFuZGxlIHN1Ym1pdCBhbmQgaGFuZGxlIGNoYW5nZSBtZXRob2RcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgLy9hbGVydCgnRm9ybSBzdWJtaXR0ZWQnKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldnQpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZWRGaWVsZCA9IGV2dC50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgIHNldEZvcm1EYXRhKChjdXJyRGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmN1cnJEYXRhLFxyXG4gICAgICAgIFtjaGFuZ2VkRmllbGRdOiBuZXdWYWx1ZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIE1vbnRocyBhcnJheVxyXG4gIGNvbnN0IG1vbnRocyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpbmRleCkgPT4gKHtcclxuICAgIHZhbHVlOiBgJHtpbmRleCArIDF9YCxcclxuICAgIGxhYmVsOiBuZXcgRGF0ZSgwLCBpbmRleCkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSlcclxuICB9KSk7XHJcblxyXG4gIC8vIERheXMgYXJyYXlcclxuICBjb25zdCBkYXlzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMzEgfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgdmFsdWU6IGAke2luZGV4ICsgMX1gLFxyXG4gICAgbGFiZWw6IGAke2luZGV4ICsgMX1gXHJcbiAgfSkpO1xyXG5cclxuICAvLyBZZWFycyBhcnJheVxyXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IHllYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwIH0sIChfLCBpbmRleCkgPT4gKHtcclxuICAgIHZhbHVlOiBgJHtjdXJyZW50WWVhciAtIGluZGV4fWAsXHJcbiAgICBsYWJlbDogYCR7Y3VycmVudFllYXIgLSBpbmRleH1gXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBzaXplPVwieHNcIiBteT17NDB9PlxyXG4gICAgICA8UGFwZXIgd2l0aEJvcmRlciBzaGFkb3c9XCJtZFwiIHA9ezMwfSBtdD17MzB9IHJhZGl1cz1cIm1kXCI+XHJcbiAgICAgICAgPFRleHQgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICBDcmVhdGUgYW4gYWNjb3VudFxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9XCJFTUFJTFwiIHJlcXVpcmVkIG10PVwibWRcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybURhdGEuZW1haWx9Lz5cclxuICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9XCJQSE9ORSBOVU1CRVIgKHR5cGUgaW4gMTAgZGlnaXRzIG9mIHlvdXIgcGhvbmUgbnVtYmVyKVwiIHJlcXVpcmVkIG10PVwibWRcIiB0eXBlPVwidGVsXCIgbmFtZT1cInRlbFwiIHZhbHVlPXtmb3JtRGF0YS50ZWx9IHBhdHRlcm49XCJbMC05XXsxMH1cIi8+XHJcbiAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPVwiRElTUExBWSBOQU1FXCIgcmVxdWlyZWQgbXQ9XCJtZFwiIG5hbWU9XCJ1c2VyTmFtZVwiIHZhbHVlPXtmb3JtRGF0YS51c2VyTmFtZX0vPlxyXG4gICAgICAgICAgPFBhc3N3b3JkSW5wdXQgbGFiZWw9XCJQQVNTV09SRFwiIHJlcXVpcmVkIG10PVwibWRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9Lz5cclxuICAgICAgICAgIDxQYXNzd29yZElucHV0IGxhYmVsPVwiQ09ORklSTSBQQVNTV09SRFwiIHJlcXVpcmVkIG10PVwibWRcIiBuYW1lPVwiY29uZmlybWVkUGFzc3dvcmRcIiB2YWx1ZT17Zm9ybURhdGEuY29uZmlybWVkUGFzc3dvcmR9Lz5cclxuICAgICAgICAgIHtpc1Bhc3N3b3JkTWF0Y2hlZCAmJiA8VGV4dCBtdD1cInhzXCIgc2l6ZT1cInhzXCIgYz17XCJyZWRcIn0+UGxlYXNlIGVudGVyIHRoZSBzYW1lIHBhc3N3b3JkIHlvdSBlbnRlcmVkIGFib3ZlITwvVGV4dD59XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxUZXh0IG10PVwibWRcIiBzaXplPVwic21cIiA+XHJcbiAgICAgICAgICAgIERBVEUgT0YgQklSVEggLSBub3QgcmVxdWlyZWRcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxHcm91cCAgZ3JvdyBtdD1cInhzXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJNb250aFwiIGRhdGE9e21vbnRoc30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIkRheVwiIGRhdGE9e2RheXN9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJZZWFyXCIgZGF0YT17eWVhcnN9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8L0dyb3VwPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8R3JvdXAgbXQ9XCJ4bFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBmdWxsV2lkdGg+Q29udGludWU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JvdXA+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJQYXBlciIsIlRleHQiLCJUZXh0SW5wdXQiLCJQYXNzd29yZElucHV0IiwiQnV0dG9uIiwiR3JvdXAiLCJTZWxlY3QiLCJ1c2VTdGF0ZSIsIlJlZ2lzdHJhdGlvblBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlck5hbWUiLCJlbWFpbCIsInRlbCIsInBhc3N3b3JkIiwiY29uZmlybWVkUGFzc3dvcmQiLCJpc1Bhc3N3b3JkTWF0Y2hlZCIsInNldElzUGFzc3dvcmRNYXRjaCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZXZ0IiwiY2hhbmdlZEZpZWxkIiwidGFyZ2V0IiwibmFtZSIsIm5ld1ZhbHVlIiwidmFsdWUiLCJjdXJyRGF0YSIsIm1vbnRocyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsImxhYmVsIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJkYXlzIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsInllYXJzIiwic2l6ZSIsIm15Iiwid2l0aEJvcmRlciIsInNoYWRvdyIsInAiLCJtdCIsInJhZGl1cyIsImZvcm0iLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJ0eXBlIiwicGF0dGVybiIsImMiLCJncm93IiwicGxhY2Vob2xkZXIiLCJkYXRhIiwiZnVsbFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationPage/RegistrationPage.tsx\n"));

/***/ })

});