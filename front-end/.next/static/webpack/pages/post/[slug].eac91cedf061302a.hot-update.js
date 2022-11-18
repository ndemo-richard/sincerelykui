"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": function() { return /* binding */ Post; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/Post.module.scss */ \"./styles/Post.module.scss\");\n/* harmony import */ var _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/date */ \"./components/date.js\");\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/avatar */ \"./components/avatar.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/comments */ \"./components/comments.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/form */ \"./components/form.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_11___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\nvar __N_SSP = true;\nconst Post = (param)=>{\n    let { _id , title , body , image , publishedAt , authorImage , authorName , comments  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const imgUrlBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_11___default()({\n            projectId: \"ogthfjsu\",\n            dataset: \"production\"\n        });\n        setImageUrl(imgUrlBuilder.image(image));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().post_title),\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, undefined),\n                            imageUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().mainImage),\n                                src: imageUrl\n                            }, void 0, false, {\n                                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                lineNumber: 43,\n                                columnNumber: 30\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().body),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    blocks: body\n                                }, void 0, false, {\n                                    fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 20\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().avatar_date),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().avatarContainer),\n                                        children: [\n                                            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().avatarRoundImage),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().avatarRoundImage),\n                                                    src: authorImage\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 29\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                                lineNumber: 50,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().avatarFont),\n                                                children: authorName\n                                            }, void 0, false, {\n                                                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                        lineNumber: 48,\n                                        columnNumber: 14\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        dateString: publishedAt\n                                    }, void 0, false, {\n                                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().commentContainer),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_comments__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            comments: comments\n                                        }, void 0, false, {\n                                            fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                            lineNumber: 61,\n                                            columnNumber: 18\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 18\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            _id: _id\n                                        }, void 0, false, {\n                                            fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 18\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 18\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ndemo/project/sincerelykui/front-end/pages/post/[slug].js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Post, \"9kY4B7iY2fCRk0IKEXnheAKM8VQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ21CO0FBQ0o7QUFDYztBQUNQO0FBQ047QUFDSjtBQUNJO0FBQ1g7QUFDZTtBQUNSO0FBQ0Q7QUFFeEMsU0FBU2EsT0FBUUMsTUFBTSxFQUFFO0lBQ3JCLE9BQU9iLHlEQUFlQSxDQUFDUSwrQ0FBTUEsRUFBRU0sS0FBSyxDQUFDRDtBQUN2Qzs7QUFFSyxNQUFNRSxPQUFPLFNBQWdGO1FBQS9FLEVBQUVDLElBQUcsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVKLE1BQUssRUFBQ0ssWUFBVyxFQUFFQyxZQUFXLEVBQUVDLFdBQVUsRUFBRUMsU0FBUSxFQUFFOztJQUUzRixNQUFNQyxTQUFTWix1REFBU0E7SUFDeEIsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU13QixnQkFBZ0IxQix5REFBZUEsQ0FBQztZQUNsQzJCLFdBQVc7WUFDWEMsU0FBUTtRQUNaO1FBQ0FILFlBQVlDLGNBQWNaLEtBQUssQ0FBQ0E7SUFFcEMsR0FBSSxFQUFFO0lBR04scUJBQ0ksOERBQUNULDBEQUFNQTs7MEJBQ0gsOERBQUNOLGtEQUFJQTs7a0NBQ0QsOERBQUNrQjtrQ0FBT0E7Ozs7OztrQ0FDUiw4REFBQ1k7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFdEMsOERBQUNDO2dCQUFJQyxXQUFXN0IsNEVBQWdCOztrQ0FFNUIsOERBQUM0Qjt3QkFBSUMsV0FBVzdCLHVFQUFXOzswQ0FDdkIsOERBQUNnQztnQ0FBR0gsV0FBVzdCLDZFQUFpQjswQ0FBR2E7Ozs7Ozs0QkFDbENPLDBCQUFZLDhEQUFDYztnQ0FBSUwsV0FBWTdCLDRFQUFnQjtnQ0FBRW9DLEtBQUtoQjs7Ozs7OzBDQUNyRCw4REFBQ1E7Z0NBQUlDLFdBQVc3Qix1RUFBVzswQ0FDeEIsNEVBQUNELHVFQUFZQTtvQ0FBQ3NDLFFBQVF2Qjs7Ozs7Ozs7Ozs7MENBRXpCLDhEQUFDYztnQ0FBSUMsV0FBVzdCLDhFQUFrQjs7a0RBQ3JDLDhEQUFDNEI7d0NBQUlDLFdBQVc3QixrRkFBc0I7OzRDQUNyQ2dCLDZCQUNjLDhEQUFDWTtnREFBSUMsV0FBVzdCLG1GQUF1QjswREFDdkMsNEVBQUNrQztvREFBSUwsV0FBVzdCLG1GQUF1QjtvREFBRW9DLEtBQUtwQjs7Ozs7Ozs7Ozs7MERBR3hELDhEQUFDWTtnREFBSUMsV0FBVzdCLDZFQUFpQjswREFBR2lCOzs7Ozs7Ozs7Ozs7a0RBRXhDLDhEQUFDZix3REFBSUE7d0NBQUN3QyxZQUFZM0I7Ozs7Ozs7Ozs7OzswQ0FHbEIsOERBQUNhO2dDQUFJQyxXQUFXN0IsbUZBQXVCOztrREFDcEMsOERBQUM0QjtrREFDRCw0RUFBQ3ZCLDREQUFRQTs0Q0FBQ2EsVUFBVUE7Ozs7Ozs7Ozs7O2tEQUVwQiw4REFBQ1U7a0RBQ0QsNEVBQUN0Qix3REFBSUE7NENBQUNNLEtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLaEIsOERBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPYixFQUFFO0dBMURXakI7O1FBRU1KLG1EQUFTQTs7O0tBRmZJO0FBcUdiLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1Bvc3QubW9kdWxlLnNjc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRGF0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RhdGUnO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F2YXRhcic7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tZW50cyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG4gIH1cblxuZXhwb3J0IGNvbnN0IFBvc3QgPSAoeyBfaWQsIHRpdGxlLCBib2R5LCBpbWFnZSxwdWJsaXNoZWRBdCwgYXV0aG9ySW1hZ2UsIGF1dGhvck5hbWUsIGNvbW1lbnRzIH0pID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW1nVXJsQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6ICdvZ3RoZmpzdScsXG4gICAgICAgICAgICBkYXRhc2V0Oidwcm9kdWN0aW9uJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEltYWdlVXJsKGltZ1VybEJ1aWxkZXIuaW1hZ2UoaW1hZ2UpKTtcblxuICAgIH0sICBbXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfdGl0bGV9Pnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIHtpbWFnZVVybCAmJiA8aW1nIGNsYXNzTmFtZT17IHN0eWxlcy5tYWluSW1hZ2V9IHNyYz17aW1hZ2VVcmx9IC8+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudCBibG9ja3M9e2JvZHl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJfZGF0ZX0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJDb250YWluZXJ9PlxuICAgICAgICAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJSb3VuZEltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhclJvdW5kSW1hZ2V9IHNyYz17YXV0aG9ySW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyRm9udH0+e2F1dGhvck5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3B1Ymxpc2hlZEF0fS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgIDxDb21tZW50cyBjb21tZW50cz17Y29tbWVudHN9IC8+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8Rm9ybSBfaWQ9e19pZH0gLz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuXG4gICAgKVxufTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyBwYWdlQ29udGV4dCA9PntcbiAgICBjb25zdCBwYWdlU2x1ZyA9IHBhZ2VDb250ZXh0LnF1ZXJ5LnNsdWc7XG4gICAgY29uc29sZS5sb2cocGFnZVNsdWcpO1xuICAgIGlmICghcGFnZVNsdWcpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm90Rm91bmQ6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gXCIke3BhZ2VTbHVnfVwiXXtfaWQsdGl0bGUsYm9keSxtYWluSW1hZ2UscHVibGlzaGVkQXQsXCJhdXRob3JJbWFnZVwiOmF1dGhvci0+aW1hZ2UsXCJhdXRob3JOYW1lXCI6YXV0aG9yLT5uYW1lLCdjb21tZW50cyc6ICpbX3R5cGUgPT0gXCJjb21tZW50XCIgJiYgcG9zdC5fcmVmID09IF4uX2lkICYmIGFwcHJvdmVkID09IHRydWVde1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBjb21tZW50LFxuICAgICAgICBfY3JlYXRlZEF0XG4gICAgfX1gKVxuICAgIGNvbnN0IHVybD0gYGh0dHBzOi8vb2d0aGZqc3UuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9JHtxdWVyeX1gO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICBjb25zdCBwb3N0ID0gcmVzdWx0LnJlc3VsdFswXTtcblxuICAgIGlmKCFwb3N0KXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgbm90Rm91bmQ6dHJ1ZVxuICAgICAgICB9XG4gICAgfSBlbHNle1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICAgICAgYm9keTpwb3N0LmJvZHksXG4gICAgICAgICAgICAgICAgdGl0bGU6cG9zdC50aXRsZSxcbiAgICAgICAgICAgICAgICBpbWFnZTpwb3N0Lm1haW5JbWFnZSxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZWRBdDpwb3N0LnB1Ymxpc2hlZEF0LFxuICAgICAgICAgICAgICAgIGF1dGhvck5hbWU6cG9zdC5hdXRob3JOYW1lLFxuICAgICAgICAgICAgICAgIGF1dGhvckltYWdlOnBvc3QuYXV0aG9ySW1hZ2UsXG4gICAgICAgICAgICAgICAgY29tbWVudHM6cG9zdC5jb21tZW50cyxcbiAgICAgICAgICAgICAgICBfaWQ6cG9zdC5faWRcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbIkhlYWQiLCJpbWFnZVVybEJ1aWxkZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJsb2NrQ29udGVudCIsInN0eWxlcyIsIkxheW91dCIsIkRhdGUiLCJBdmF0YXIiLCJjbGllbnQiLCJDb21tZW50cyIsIkZvcm0iLCJ1c2VSb3V0ZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIlBvc3QiLCJfaWQiLCJ0aXRsZSIsImJvZHkiLCJwdWJsaXNoZWRBdCIsImF1dGhvckltYWdlIiwiYXV0aG9yTmFtZSIsImNvbW1lbnRzIiwicm91dGVyIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImltZ1VybEJ1aWxkZXIiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImgxIiwicG9zdF90aXRsZSIsImltZyIsIm1haW5JbWFnZSIsInNyYyIsImJsb2NrcyIsImF2YXRhcl9kYXRlIiwiYXZhdGFyQ29udGFpbmVyIiwiYXZhdGFyUm91bmRJbWFnZSIsImF2YXRhckZvbnQiLCJkYXRlU3RyaW5nIiwiY29tbWVudENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});