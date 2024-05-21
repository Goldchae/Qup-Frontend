"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/together",{

/***/ "./pages/together.js":
/*!***************************!*\
  !*** ./pages/together.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.js\");\n/* harmony import */ var _components_TogetherPage_TogetherTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TogetherPage/TogetherTable */ \"./components/TogetherPage/TogetherTable.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst togetherData = [\n    {\n        problemNumber: \"저녁 메뉴 추천 해주세요\",\n        problemTitle: \"2839\",\n        handle: \"yellowsubmarine372\"\n    },\n    {\n        problemNumber: \"출력을 어떻게 하나용\",\n        problemTitle: \"1234\",\n        handle: \"celina324\"\n    }\n];\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n`;\n_c = Container;\nconst WriteButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button`\n  background-color: green;\n  color: white;\n  padding: 0.5rem 1rem;\n  font-size: 1.2rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n`;\n_c1 = WriteButton;\nconst SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].input`\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n`;\n_c2 = SearchInput;\nconst Together = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(togetherData);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleWriteClick = ()=>{\n        router.push(\"/togetherWrite\");\n    };\n    const handleSearchChange = (e)=>{\n        setSearchQuery(e.target.value);\n    };\n    const filteredPosts = posts.filter((post)=>post.problemTitle.toLowerCase().includes(searchQuery.toLowerCase()) || post.problemNumber.toLowerCase().includes(searchQuery.toLowerCase()) || post.handle.toLowerCase().includes(searchQuery.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sentence: \"- 함께 풀어요 -\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WriteButton, {\n                        onClick: handleWriteClick,\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchInput, {\n                        type: \"text\",\n                        placeholder: \"Search\",\n                        value: searchQuery,\n                        onChange: handleSearchChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TogetherPage_TogetherTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                togetherData: filteredPosts\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Together, \"C73j+ncs9I39HIA2zuaPOGaJdCk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c3 = Together;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Together);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"WriteButton\");\n$RefreshReg$(_c2, \"SearchInput\");\n$RefreshReg$(_c3, \"Together\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2dldGhlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1M7QUFDVDtBQUNBO0FBQzZCO0FBQzlCO0FBRXZDLE1BQU1PLGVBQWU7SUFDbkI7UUFDRUMsZUFBZTtRQUNmQyxjQUFjO1FBQ2RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VGLGVBQWU7UUFDZkMsY0FBYztRQUNkQyxRQUFRO0lBQ1Y7Q0FDRDtBQUVELE1BQU1DLFlBQVlMLDZEQUFVLENBQUM7Ozs7O0FBSzdCLENBQUM7S0FMS0s7QUFPTixNQUFNRSxjQUFjUCxnRUFBYSxDQUFDOzs7Ozs7OztBQVFsQyxDQUFDO01BUktPO0FBVU4sTUFBTUUsY0FBY1QsK0RBQVksQ0FBQzs7Ozs7QUFLakMsQ0FBQztNQUxLUztBQU9OLE1BQU1FLFdBQVc7O0lBQ2YsTUFBTUMsU0FBU2Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDTTtJQUNuQyxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1zQixtQkFBbUI7UUFDdkJMLE9BQU9NLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUMscUJBQXFCLENBQUNDO1FBQzFCSixlQUFlSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxNQUFNQyxnQkFBZ0JWLE1BQU1XLE1BQU0sQ0FDaEMsQ0FBQ0MsT0FDQ0EsS0FBS3RCLFlBQVksQ0FBQ3VCLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXLE9BQ2hFRCxLQUFLdkIsYUFBYSxDQUFDd0IsV0FBVyxHQUFHQyxRQUFRLENBQUNaLFlBQVlXLFdBQVcsT0FDakVELEtBQUtyQixNQUFNLENBQUNzQixXQUFXLEdBQUdDLFFBQVEsQ0FBQ1osWUFBWVcsV0FBVztJQUc5RCxxQkFDRSw4REFBQzlCLGlFQUFNQTs7MEJBQ0wsOERBQUNFLHlEQUFLQTtnQkFBQzhCLFVBQVU7Ozs7OzswQkFDakIsOERBQUN2Qjs7a0NBQ0MsOERBQUNFO3dCQUFZc0IsU0FBU1o7a0NBQWtCOzs7Ozs7a0NBQ3hDLDhEQUFDUjt3QkFDQ3FCLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pULE9BQU9QO3dCQUNQaUIsVUFBVWI7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ3BCLDhFQUFhQTtnQkFBQ0UsY0FBY3NCOzs7Ozs7Ozs7Ozs7QUFHbkM7R0FuQ01aOztRQUNXZCxrREFBU0E7OztNQURwQmM7QUFxQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9nZXRoZXIuanM/MDUzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBUb2dldGhlclRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL1RvZ2V0aGVyUGFnZS9Ub2dldGhlclRhYmxlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCB0b2dldGhlckRhdGEgPSBbXG4gIHtcbiAgICBwcm9ibGVtTnVtYmVyOiBcIuyggOuFgSDrqZTribQg7LaU7LKcIO2VtOyjvOyEuOyalFwiLFxuICAgIHByb2JsZW1UaXRsZTogXCIyODM5XCIsXG4gICAgaGFuZGxlOiBcInllbGxvd3N1Ym1hcmluZTM3MlwiLFxuICB9LFxuICB7XG4gICAgcHJvYmxlbU51bWJlcjogXCLstpzroKXsnYQg7Ja065a76rKMIO2VmOuCmOyaqVwiLFxuICAgIHByb2JsZW1UaXRsZTogXCIxMjM0XCIsXG4gICAgaGFuZGxlOiBcImNlbGluYTMyNFwiLFxuICB9LFxuXTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuY29uc3QgV3JpdGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbmA7XG5cbmNvbnN0IFRvZ2V0aGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZSh0b2dldGhlckRhdGEpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVdyaXRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvdG9nZXRoZXJXcml0ZVwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gcG9zdHMuZmlsdGVyKFxuICAgIChwb3N0KSA9PlxuICAgICAgcG9zdC5wcm9ibGVtVGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgcG9zdC5wcm9ibGVtTnVtYmVyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIHBvc3QuaGFuZGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8VGl0bGUgc2VudGVuY2U9e1wiLSDtlajqu5gg7ZKA7Ja07JqUIC1cIn0gLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxXcml0ZUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVXcml0ZUNsaWNrfT7quIDsk7DquLA8L1dyaXRlQnV0dG9uPlxuICAgICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8VG9nZXRoZXJUYWJsZSB0b2dldGhlckRhdGE9e2ZpbHRlcmVkUG9zdHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dldGhlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwidXNlUm91dGVyIiwiVGl0bGUiLCJUb2dldGhlclRhYmxlIiwic3R5bGVkIiwidG9nZXRoZXJEYXRhIiwicHJvYmxlbU51bWJlciIsInByb2JsZW1UaXRsZSIsImhhbmRsZSIsIkNvbnRhaW5lciIsImRpdiIsIldyaXRlQnV0dG9uIiwiYnV0dG9uIiwiU2VhcmNoSW5wdXQiLCJpbnB1dCIsIlRvZ2V0aGVyIiwicm91dGVyIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJoYW5kbGVXcml0ZUNsaWNrIiwicHVzaCIsImhhbmRsZVNlYXJjaENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkUG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlbnRlbmNlIiwib25DbGljayIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/together.js\n"));

/***/ })

});