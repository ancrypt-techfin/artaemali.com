"use strict";
exports.id = 8339;
exports.ids = [8339];
exports.modules = {

/***/ 8339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ReportSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReportCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7323);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7188);



const ReportSection = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-span-full mb-12 grid gap-x-8 sm:grid-cols-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `col-span-full border-t-2 border-arta-sand-300 pt-4 text-black sm:col-span-2 ${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h6 */ .Y.h6}`,
                children: props.year
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "col-span-full mt-4 grid grid-cols-12 gap-4 sm:col-span-10 sm:mt-0 sm:gap-8",
                children: props.reports.map((report, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "col-span-12 md:col-span-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            title: report.headline,
                            href: report.url,
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportCard__WEBPACK_IMPORTED_MODULE_1__/* .ReportCard */ .x, {
                                title: report.headline
                            })
                        })
                    }, index);
                })
            })
        ]
    });
};



/***/ })

};
;