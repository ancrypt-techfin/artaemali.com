"use strict";
exports.id = 7323;
exports.ids = [7323];
exports.modules = {

/***/ 7323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ReportCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svg_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7188);



const ReportCard = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-between bg-white py-8 px-8 transition shadow-lg hover:brightness-[98%]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 bottom-0 left-0 w-2 bg-reportCard-gradient"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex",
                children: [
                    props.Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(props.Icon, {
                        className: "self-center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `mx-3 mt-2 ${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.title_verah */ .Y.title_verah}`,
                        children: props.title
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_1__/* .IconArrowRightCircle */ .K$, {
                className: "hidden lg:block flex-[0_0_32px]"
            })
        ]
    });
};



/***/ })

};
;