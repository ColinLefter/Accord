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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Container/Container.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Paper/Paper.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Group/Group.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Select/Select.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Button/Button.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction RegistrationPage() {\n    _s();\n    //The useState for the form object\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userName: \"\",\n        email: \"\",\n        tel: \"\",\n        password: \"\"\n    });\n    //\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(formData);\n    //alert('Form submitted');\n    };\n    const handleChange = (evt)=>{\n        const changedField = evt.target.name;\n        const newValue = evt.target.value;\n        setFormData((currData)=>{\n            return {\n                ...currData,\n                [changedField]: newValue\n            };\n        });\n    };\n    // Months array\n    const months = Array.from({\n        length: 12\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: new Date(0, index).toLocaleString(\"default\", {\n                month: \"long\"\n            })\n        }));\n    // Days array\n    const days = Array.from({\n        length: 31\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: \"\".concat(index + 1)\n        }));\n    // Years array\n    const currentYear = new Date().getFullYear();\n    const years = Array.from({\n        length: 100\n    }, (_, index)=>({\n            value: \"\".concat(currentYear - index),\n            label: \"\".concat(currentYear - index)\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        size: \"xs\",\n        my: 40,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n            withBorder: true,\n            shadow: \"md\",\n            p: 30,\n            mt: 30,\n            radius: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    size: \"lg\",\n                    children: \"Create an account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    onChange: handleChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"EMAIL\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"email\",\n                            name: \"email\",\n                            value: formData.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"PHONE NUMBER (type in 10 digits of your phone number)\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"tel\",\n                            name: \"tel\",\n                            value: formData.tel,\n                            pattern: \"[0-9]{10}\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"DISPLAY NAME\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"userName\",\n                            value: formData.userName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__.PasswordInput, {\n                            label: \"PASSWORD\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"phone\",\n                            value: formData.password\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"md\",\n                            size: \"sm\",\n                            children: \"DATE OF BIRTH - not required\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            grow: true,\n                            mt: \"xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Month\",\n                                    data: months,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Day\",\n                                    data: days,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Year\",\n                                    data: years,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            mt: \"xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                type: \"submit\",\n                                fullWidth: true,\n                                children: \"Continue\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(RegistrationPage, \"ooJXJac75VXLFTaHU5CIILHVXn4=\");\n_c = RegistrationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationPage);\nvar _c;\n$RefreshReg$(_c, \"RegistrationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZS9SZWdpc3RyYXRpb25QYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUV3RztBQUV2RTtBQUVqQyxTQUFTUzs7SUFDUCxrQ0FBa0M7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQ3ZDSSxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxVQUFVO0lBQ1o7SUFFQSxFQUFFO0lBQ0YsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkEsTUFBTUMsY0FBYztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDVjtJQUNaLDBCQUEwQjtJQUM1QjtJQUNBLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTUMsZUFBZUQsSUFBSUUsTUFBTSxDQUFDQyxJQUFJO1FBQ3BDLE1BQU1DLFdBQVdKLElBQUlFLE1BQU0sQ0FBQ0csS0FBSztRQUNqQ2hCLFlBQVksQ0FBQ2lCO1lBQ1gsT0FBTztnQkFDTCxHQUFHQSxRQUFRO2dCQUNYLENBQUNMLGFBQWEsRUFBRUc7WUFDbEI7UUFDRjtJQUNGO0lBRUEsZUFBZTtJQUNmLE1BQU1HLFNBQVNDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUcsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3ZEUCxPQUFPLEdBQWEsT0FBVk8sUUFBUTtZQUNsQkMsT0FBTyxJQUFJQyxLQUFLLEdBQUdGLE9BQU9HLGNBQWMsQ0FBQyxXQUFXO2dCQUFFQyxPQUFPO1lBQU87UUFDdEU7SUFFQSxhQUFhO0lBQ2IsTUFBTUMsT0FBT1QsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBRyxHQUFHLENBQUNDLEdBQUdDLFFBQVc7WUFDckRQLE9BQU8sR0FBYSxPQUFWTyxRQUFRO1lBQ2xCQyxPQUFPLEdBQWEsT0FBVkQsUUFBUTtRQUNwQjtJQUVBLGNBQWM7SUFDZCxNQUFNTSxjQUFjLElBQUlKLE9BQU9LLFdBQVc7SUFDMUMsTUFBTUMsUUFBUVosTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBSSxHQUFHLENBQUNDLEdBQUdDLFFBQVc7WUFDdkRQLE9BQU8sR0FBdUIsT0FBcEJhLGNBQWNOO1lBQ3hCQyxPQUFPLEdBQXVCLE9BQXBCSyxjQUFjTjtRQUMxQjtJQUVBLHFCQUNFLDhEQUFDbEMsMklBQVNBO1FBQUMyQyxNQUFLO1FBQUtDLElBQUk7a0JBQ3ZCLDRFQUFDM0MsdUlBQUtBO1lBQUM0QyxVQUFVO1lBQUNDLFFBQU87WUFBS0MsR0FBRztZQUFJQyxJQUFJO1lBQUlDLFFBQU87OzhCQUNsRCw4REFBQy9DLHNJQUFJQTtvQkFBQ3lDLE1BQUs7OEJBQUs7Ozs7Ozs4QkFHaEIsOERBQUNPO29CQUFLQyxVQUFVbkM7b0JBQWNvQyxVQUFVL0I7O3NDQUN0Qyw4REFBQ2xCLDJJQUFTQTs0QkFBQ2dDLE9BQU07NEJBQVFrQixRQUFROzRCQUFDTCxJQUFHOzRCQUFLTSxNQUFLOzRCQUFRN0IsTUFBSzs0QkFBUUUsT0FBT2pCLFNBQVNHLEtBQUs7Ozs7OztzQ0FDekYsOERBQUNWLDJJQUFTQTs0QkFBQ2dDLE9BQU07NEJBQXdEa0IsUUFBUTs0QkFBQ0wsSUFBRzs0QkFBS00sTUFBSzs0QkFBTTdCLE1BQUs7NEJBQU1FLE9BQU9qQixTQUFTSSxHQUFHOzRCQUFFeUMsU0FBUTs7Ozs7O3NDQUM3SSw4REFBQ3BELDJJQUFTQTs0QkFBQ2dDLE9BQU07NEJBQWVrQixRQUFROzRCQUFDTCxJQUFHOzRCQUFLdkIsTUFBSzs0QkFBV0UsT0FBT2pCLFNBQVNFLFFBQVE7Ozs7OztzQ0FDekYsOERBQUNSLCtJQUFhQTs0QkFBQytCLE9BQU07NEJBQVdrQixRQUFROzRCQUFDTCxJQUFHOzRCQUFLdkIsTUFBSzs0QkFBUUUsT0FBT2pCLFNBQVNLLFFBQVE7Ozs7OztzQ0FFdEYsOERBQUNiLHNJQUFJQTs0QkFBQzhDLElBQUc7NEJBQUtMLE1BQUs7c0NBQU07Ozs7OztzQ0FHekIsOERBQUNyQyx1SUFBS0E7NEJBQUVrRCxJQUFJOzRCQUFDUixJQUFHOzs4Q0FDZCw4REFBQ3pDLHdJQUFNQTtvQ0FBQ2tELGFBQVk7b0NBQVFDLE1BQU03QjtvQ0FBUXdCLFFBQVE7Ozs7Ozs4Q0FDbEQsOERBQUM5Qyx3SUFBTUE7b0NBQUNrRCxhQUFZO29DQUFNQyxNQUFNbkI7b0NBQU1jLFFBQVE7Ozs7Ozs4Q0FDOUMsOERBQUM5Qyx3SUFBTUE7b0NBQUNrRCxhQUFZO29DQUFPQyxNQUFNaEI7b0NBQU9XLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHbEQsOERBQUMvQyx1SUFBS0E7NEJBQUMwQyxJQUFHO3NDQUNSLDRFQUFDM0Msd0lBQU1BO2dDQUFDaUQsTUFBSztnQ0FBU0ssU0FBUzswQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QztHQXpFU2xEO0tBQUFBO0FBMkVULCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RyYXRpb25QYWdlL1JlZ2lzdHJhdGlvblBhZ2UudHN4PzY2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIFBhcGVyLCBUZXh0LCBUZXh0SW5wdXQsIFBhc3N3b3JkSW5wdXQsIEJ1dHRvbiwgR3JvdXAsIFNlbGVjdCB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0cmF0aW9uUGFnZSgpe1xyXG4gIC8vVGhlIHVzZVN0YXRlIGZvciB0aGUgZm9ybSBvYmplY3RcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICB0ZWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuICBcclxuICAvL1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAvL2FsZXJ0KCdGb3JtIHN1Ym1pdHRlZCcpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgY29uc3QgY2hhbmdlZEZpZWxkID0gZXZ0LnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0Rm9ybURhdGEoKGN1cnJEYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY3VyckRhdGEsXHJcbiAgICAgICAgW2NoYW5nZWRGaWVsZF06IG5ld1ZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gTW9udGhzIGFycmF5XHJcbiAgY29uc3QgbW9udGhzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgdmFsdWU6IGAke2luZGV4ICsgMX1gLFxyXG4gICAgbGFiZWw6IG5ldyBEYXRlKDAsIGluZGV4KS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9KVxyXG4gIH0pKTtcclxuXHJcbiAgLy8gRGF5cyBhcnJheVxyXG4gIGNvbnN0IGRheXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzMSB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICB2YWx1ZTogYCR7aW5kZXggKyAxfWAsXHJcbiAgICBsYWJlbDogYCR7aW5kZXggKyAxfWBcclxuICB9KSk7XHJcblxyXG4gIC8vIFllYXJzIGFycmF5XHJcbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgeWVhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDAgfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgdmFsdWU6IGAke2N1cnJlbnRZZWFyIC0gaW5kZXh9YCxcclxuICAgIGxhYmVsOiBgJHtjdXJyZW50WWVhciAtIGluZGV4fWBcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHNpemU9XCJ4c1wiIG15PXs0MH0+XHJcbiAgICAgIDxQYXBlciB3aXRoQm9yZGVyIHNoYWRvdz1cIm1kXCIgcD17MzB9IG10PXszMH0gcmFkaXVzPVwibWRcIj5cclxuICAgICAgICA8VGV4dCBzaXplPVwibGdcIj5cclxuICAgICAgICAgIENyZWF0ZSBhbiBhY2NvdW50XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIkVNQUlMXCIgcmVxdWlyZWQgbXQ9XCJtZFwiIHR5cGU9J2VtYWlsJyBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybURhdGEuZW1haWx9Lz5cclxuICAgICAgICAgIDxUZXh0SW5wdXQgbGFiZWw9XCJQSE9ORSBOVU1CRVIgKHR5cGUgaW4gMTAgZGlnaXRzIG9mIHlvdXIgcGhvbmUgbnVtYmVyKVwiIHJlcXVpcmVkIG10PVwibWRcIiB0eXBlPSd0ZWwnIG5hbWU9XCJ0ZWxcIiB2YWx1ZT17Zm9ybURhdGEudGVsfSBwYXR0ZXJuPVwiWzAtOV17MTB9XCIvPlxyXG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIkRJU1BMQVkgTkFNRVwiIHJlcXVpcmVkIG10PVwibWRcIiBuYW1lPVwidXNlck5hbWVcIiB2YWx1ZT17Zm9ybURhdGEudXNlck5hbWV9Lz5cclxuICAgICAgICAgIDxQYXNzd29yZElucHV0IGxhYmVsPVwiUEFTU1dPUkRcIiByZXF1aXJlZCBtdD1cIm1kXCIgbmFtZT1cInBob25lXCIgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfS8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxUZXh0IG10PVwibWRcIiBzaXplPVwic21cIiA+XHJcbiAgICAgICAgICAgIERBVEUgT0YgQklSVEggLSBub3QgcmVxdWlyZWRcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxHcm91cCAgZ3JvdyBtdD1cInhzXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJNb250aFwiIGRhdGE9e21vbnRoc30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIkRheVwiIGRhdGE9e2RheXN9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJZZWFyXCIgZGF0YT17eWVhcnN9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8L0dyb3VwPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8R3JvdXAgbXQ9XCJ4bFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBmdWxsV2lkdGg+Q29udGludWU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JvdXA+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJQYXBlciIsIlRleHQiLCJUZXh0SW5wdXQiLCJQYXNzd29yZElucHV0IiwiQnV0dG9uIiwiR3JvdXAiLCJTZWxlY3QiLCJ1c2VTdGF0ZSIsIlJlZ2lzdHJhdGlvblBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlck5hbWUiLCJlbWFpbCIsInRlbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJjaGFuZ2VkRmllbGQiLCJ0YXJnZXQiLCJuYW1lIiwibmV3VmFsdWUiLCJ2YWx1ZSIsImN1cnJEYXRhIiwibW9udGhzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwibGFiZWwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImRheXMiLCJjdXJyZW50WWVhciIsImdldEZ1bGxZZWFyIiwieWVhcnMiLCJzaXplIiwibXkiLCJ3aXRoQm9yZGVyIiwic2hhZG93IiwicCIsIm10IiwicmFkaXVzIiwiZm9ybSIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInR5cGUiLCJwYXR0ZXJuIiwiZ3JvdyIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImZ1bGxXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationPage/RegistrationPage.tsx\n"));

/***/ })

});