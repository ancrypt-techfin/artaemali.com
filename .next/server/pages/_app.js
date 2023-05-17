(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8890);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_styles_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5601);
/* harmony import */ var src_styles_typography_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_styles_typography_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2786);
/* harmony import */ var src_styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_styles_text_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(285);
/* harmony import */ var src_styles_text_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_styles_text_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1343);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();
function MyApp({ Component , pageProps  }) {
    (0,utils_html__WEBPACK_IMPORTED_MODULE_6__/* .useAppHeight */ .n)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClientProvider, {
        client: queryClient,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "#593725"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useAppHeight)
/* harmony export */ });
/* unused harmony export isTouchDevice */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isTouchDevice() {
    if (true) return null;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
function useAppHeight() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // for mobile devices
        let outerHeight = 0;
        const handleResize = ()=>{
            const root = document.documentElement;
            if (window.outerHeight !== outerHeight) {
                root.style.setProperty(`--app-height`, `${window.innerHeight}px`);
                outerHeight = window.outerHeight;
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
}



/***/ }),

/***/ 2786:
/***/ (() => {



/***/ }),

/***/ 285:
/***/ (() => {



/***/ }),

/***/ 5601:
/***/ (() => {



/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 8890:
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6505));
module.exports = __webpack_exports__;

})();