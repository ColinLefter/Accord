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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Container/Container.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Paper/Paper.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Group/Group.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Select/Select.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Group,Paper,PasswordInput,Select,Text,TextInput!=!@mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Button/Button.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction RegistrationPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userName: \"\",\n        email: \"\",\n        tel: \"\",\n        password: \"\"\n    });\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        // Here you would handle the form submission, e.g., send data to an API\n        alert(\"Form submitted\");\n    };\n    const handleChange = (evt)=>{\n        const changedField = evt.target.name;\n        const newValue = evt.target.value;\n        setFormData((currData)=>{\n            return {\n                ...currData,\n                [changedField]: newValue\n            };\n        });\n    };\n    // Months array\n    const months = Array.from({\n        length: 12\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: new Date(0, index).toLocaleString(\"default\", {\n                month: \"long\"\n            })\n        }));\n    // Days array\n    const days = Array.from({\n        length: 31\n    }, (_, index)=>({\n            value: \"\".concat(index + 1),\n            label: \"\".concat(index + 1)\n        }));\n    // Years array\n    const currentYear = new Date().getFullYear();\n    const years = Array.from({\n        length: 100\n    }, (_, index)=>({\n            value: \"\".concat(currentYear - index),\n            label: \"\".concat(currentYear - index)\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        size: \"xs\",\n        my: 40,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n            withBorder: true,\n            shadow: \"md\",\n            p: 30,\n            mt: 30,\n            radius: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    size: \"lg\",\n                    children: \"Create an account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    onChange: handleChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"EMAIL\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"email\",\n                            name: \"email\",\n                            value: formData.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"PHONE NUMBER\",\n                            required: true,\n                            mt: \"md\",\n                            type: \"tel\",\n                            name: \"tel\",\n                            value: formData.tel\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                            label: \"DISPLAY NAME\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"userName\",\n                            value: formData.userName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_6__.PasswordInput, {\n                            label: \"PASSWORD\",\n                            required: true,\n                            mt: \"md\",\n                            name: \"phone\",\n                            value: formData.password\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"md\",\n                            size: \"sm\",\n                            children: \"DATE OF BIRTH\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            grow: true,\n                            mt: \"xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Month\",\n                                    data: months,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Day\",\n                                    data: days,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n                                    placeholder: \"Year\",\n                                    data: years,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Group, {\n                            mt: \"xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Group_Paper_PasswordInput_Select_Text_TextInput_mantine_core__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                type: \"submit\",\n                                fullWidth: true,\n                                children: \"Continue\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\toby0\\\\Documents\\\\UBC\\\\COSC 310\\\\Discord Clone\\\\COSC-310-Group-Project\\\\Application\\\\Frontend\\\\components\\\\RegistrationPage\\\\RegistrationPage.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(RegistrationPage, \"ooJXJac75VXLFTaHU5CIILHVXn4=\");\n_c = RegistrationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationPage);\nvar _c;\n$RefreshReg$(_c, \"RegistrationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZS9SZWdpc3RyYXRpb25QYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUV3RztBQUV2RTtBQUVqQyxTQUFTUzs7SUFDUCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7UUFDdkNJLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJBLE1BQU1DLGNBQWM7UUFDcEIsdUVBQXVFO1FBQ3ZFQyxNQUFNO0lBQ1I7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGVBQWVELElBQUlFLE1BQU0sQ0FBQ0MsSUFBSTtRQUNwQyxNQUFNQyxXQUFXSixJQUFJRSxNQUFNLENBQUNHLEtBQUs7UUFDakNmLFlBQVksQ0FBQ2dCO1lBQ1gsT0FBTztnQkFDTCxHQUFHQSxRQUFRO2dCQUNYLENBQUNMLGFBQWEsRUFBRUc7WUFDbEI7UUFDRjtJQUNGO0lBRUEsZUFBZTtJQUNmLE1BQU1HLFNBQVNDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUcsR0FBRyxDQUFDQyxHQUFHQyxRQUFXO1lBQ3ZEUCxPQUFPLEdBQWEsT0FBVk8sUUFBUTtZQUNsQkMsT0FBTyxJQUFJQyxLQUFLLEdBQUdGLE9BQU9HLGNBQWMsQ0FBQyxXQUFXO2dCQUFFQyxPQUFPO1lBQU87UUFDdEU7SUFFQSxhQUFhO0lBQ2IsTUFBTUMsT0FBT1QsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBRyxHQUFHLENBQUNDLEdBQUdDLFFBQVc7WUFDckRQLE9BQU8sR0FBYSxPQUFWTyxRQUFRO1lBQ2xCQyxPQUFPLEdBQWEsT0FBVkQsUUFBUTtRQUNwQjtJQUVBLGNBQWM7SUFDZCxNQUFNTSxjQUFjLElBQUlKLE9BQU9LLFdBQVc7SUFDMUMsTUFBTUMsUUFBUVosTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBSSxHQUFHLENBQUNDLEdBQUdDLFFBQVc7WUFDdkRQLE9BQU8sR0FBdUIsT0FBcEJhLGNBQWNOO1lBQ3hCQyxPQUFPLEdBQXVCLE9BQXBCSyxjQUFjTjtRQUMxQjtJQUVBLHFCQUNFLDhEQUFDakMsMklBQVNBO1FBQUMwQyxNQUFLO1FBQUtDLElBQUk7a0JBQ3ZCLDRFQUFDMUMsdUlBQUtBO1lBQUMyQyxVQUFVO1lBQUNDLFFBQU87WUFBS0MsR0FBRztZQUFJQyxJQUFJO1lBQUlDLFFBQU87OzhCQUNsRCw4REFBQzlDLHNJQUFJQTtvQkFBQ3dDLE1BQUs7OEJBQUs7Ozs7Ozs4QkFHaEIsOERBQUNPO29CQUFLQyxVQUFVbEM7b0JBQWNtQyxVQUFVL0I7O3NDQUN0Qyw4REFBQ2pCLDJJQUFTQTs0QkFBQytCLE9BQU07NEJBQVFrQixRQUFROzRCQUFDTCxJQUFHOzRCQUFLTSxNQUFLOzRCQUFRN0IsTUFBSzs0QkFBUUUsT0FBT2hCLFNBQVNHLEtBQUs7Ozs7OztzQ0FDekYsOERBQUNWLDJJQUFTQTs0QkFBQytCLE9BQU07NEJBQWVrQixRQUFROzRCQUFDTCxJQUFHOzRCQUFLTSxNQUFLOzRCQUFNN0IsTUFBSzs0QkFBTUUsT0FBT2hCLFNBQVNJLEdBQUc7Ozs7OztzQ0FDMUYsOERBQUNYLDJJQUFTQTs0QkFBQytCLE9BQU07NEJBQWVrQixRQUFROzRCQUFDTCxJQUFHOzRCQUFLdkIsTUFBSzs0QkFBV0UsT0FBT2hCLFNBQVNFLFFBQVE7Ozs7OztzQ0FDekYsOERBQUNSLCtJQUFhQTs0QkFBQzhCLE9BQU07NEJBQVdrQixRQUFROzRCQUFDTCxJQUFHOzRCQUFLdkIsTUFBSzs0QkFBUUUsT0FBT2hCLFNBQVNLLFFBQVE7Ozs7OztzQ0FFdEYsOERBQUNiLHNJQUFJQTs0QkFBQzZDLElBQUc7NEJBQUtMLE1BQUs7c0NBQU07Ozs7OztzQ0FHekIsOERBQUNwQyx1SUFBS0E7NEJBQUVnRCxJQUFJOzRCQUFDUCxJQUFHOzs4Q0FDZCw4REFBQ3hDLHdJQUFNQTtvQ0FBQ2dELGFBQVk7b0NBQVFDLE1BQU01QjtvQ0FBUXdCLFFBQVE7Ozs7Ozs4Q0FDbEQsOERBQUM3Qyx3SUFBTUE7b0NBQUNnRCxhQUFZO29DQUFNQyxNQUFNbEI7b0NBQU1jLFFBQVE7Ozs7Ozs4Q0FDOUMsOERBQUM3Qyx3SUFBTUE7b0NBQUNnRCxhQUFZO29DQUFPQyxNQUFNZjtvQ0FBT1csUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdsRCw4REFBQzlDLHVJQUFLQTs0QkFBQ3lDLElBQUc7c0NBQ1IsNEVBQUMxQyx3SUFBTUE7Z0NBQUNnRCxNQUFLO2dDQUFTSSxTQUFTOzBDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0dBeEVTaEQ7S0FBQUE7QUEwRVQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvblBhZ2UvUmVnaXN0cmF0aW9uUGFnZS50c3g/NjZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUGFwZXIsIFRleHQsIFRleHRJbnB1dCwgUGFzc3dvcmRJbnB1dCwgQnV0dG9uLCBHcm91cCwgU2VsZWN0IH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBSZWdpc3RyYXRpb25QYWdlKCl7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgdGVsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBIZXJlIHlvdSB3b3VsZCBoYW5kbGUgdGhlIGZvcm0gc3VibWlzc2lvbiwgZS5nLiwgc2VuZCBkYXRhIHRvIGFuIEFQSVxyXG4gICAgYWxlcnQoJ0Zvcm0gc3VibWl0dGVkJyk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VkRmllbGQgPSBldnQudGFyZ2V0Lm5hbWU7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRGb3JtRGF0YSgoY3VyckRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jdXJyRGF0YSxcclxuICAgICAgICBbY2hhbmdlZEZpZWxkXTogbmV3VmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBNb250aHMgYXJyYXlcclxuICBjb25zdCBtb250aHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICB2YWx1ZTogYCR7aW5kZXggKyAxfWAsXHJcbiAgICBsYWJlbDogbmV3IERhdGUoMCwgaW5kZXgpLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pXHJcbiAgfSkpO1xyXG5cclxuICAvLyBEYXlzIGFycmF5XHJcbiAgY29uc3QgZGF5cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDMxIH0sIChfLCBpbmRleCkgPT4gKHtcclxuICAgIHZhbHVlOiBgJHtpbmRleCArIDF9YCxcclxuICAgIGxhYmVsOiBgJHtpbmRleCArIDF9YFxyXG4gIH0pKTtcclxuXHJcbiAgLy8gWWVhcnMgYXJyYXlcclxuICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCB5ZWFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICB2YWx1ZTogYCR7Y3VycmVudFllYXIgLSBpbmRleH1gLFxyXG4gICAgbGFiZWw6IGAke2N1cnJlbnRZZWFyIC0gaW5kZXh9YFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgc2l6ZT1cInhzXCIgbXk9ezQwfT5cclxuICAgICAgPFBhcGVyIHdpdGhCb3JkZXIgc2hhZG93PVwibWRcIiBwPXszMH0gbXQ9ezMwfSByYWRpdXM9XCJtZFwiPlxyXG4gICAgICAgIDxUZXh0IHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgQ3JlYXRlIGFuIGFjY291bnRcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPVwiRU1BSUxcIiByZXF1aXJlZCBtdD1cIm1kXCIgdHlwZT0nZW1haWwnIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH0vPlxyXG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIlBIT05FIE5VTUJFUlwiIHJlcXVpcmVkIG10PVwibWRcIiB0eXBlPSd0ZWwnIG5hbWU9XCJ0ZWxcIiB2YWx1ZT17Zm9ybURhdGEudGVsfS8+XHJcbiAgICAgICAgICA8VGV4dElucHV0IGxhYmVsPVwiRElTUExBWSBOQU1FXCIgcmVxdWlyZWQgbXQ9XCJtZFwiIG5hbWU9XCJ1c2VyTmFtZVwiIHZhbHVlPXtmb3JtRGF0YS51c2VyTmFtZX0vPlxyXG4gICAgICAgICAgPFBhc3N3b3JkSW5wdXQgbGFiZWw9XCJQQVNTV09SRFwiIHJlcXVpcmVkIG10PVwibWRcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9Lz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFRleHQgbXQ9XCJtZFwiIHNpemU9XCJzbVwiID5cclxuICAgICAgICAgICAgREFURSBPRiBCSVJUSFxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEdyb3VwICBncm93IG10PVwieHNcIj5cclxuICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIk1vbnRoXCIgZGF0YT17bW9udGhzfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiRGF5XCIgZGF0YT17ZGF5c30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlllYXJcIiBkYXRhPXt5ZWFyc30gcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDwvR3JvdXA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxHcm91cCBtdD1cInhsXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aD5Db250aW51ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Hcm91cD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uUGFnZTtcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlBhcGVyIiwiVGV4dCIsIlRleHRJbnB1dCIsIlBhc3N3b3JkSW5wdXQiLCJCdXR0b24iLCJHcm91cCIsIlNlbGVjdCIsInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uUGFnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VyTmFtZSIsImVtYWlsIiwidGVsIiwicGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJjaGFuZ2VkRmllbGQiLCJ0YXJnZXQiLCJuYW1lIiwibmV3VmFsdWUiLCJ2YWx1ZSIsImN1cnJEYXRhIiwibW9udGhzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwibGFiZWwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImRheXMiLCJjdXJyZW50WWVhciIsImdldEZ1bGxZZWFyIiwieWVhcnMiLCJzaXplIiwibXkiLCJ3aXRoQm9yZGVyIiwic2hhZG93IiwicCIsIm10IiwicmFkaXVzIiwiZm9ybSIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInR5cGUiLCJncm93IiwicGxhY2Vob2xkZXIiLCJkYXRhIiwiZnVsbFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationPage/RegistrationPage.tsx\n"));

/***/ })

});