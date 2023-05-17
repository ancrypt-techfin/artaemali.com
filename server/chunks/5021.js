"use strict";
exports.id = 5021;
exports.ids = [5021];
exports.modules = {

/***/ 5021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(887);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5331);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7188);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2001);






const Layout = (props)=>{
    const { seo , cms , title , children , hideFooter =false , hideMenu =false  } = props;
    const bannerImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_2__/* .Seo */ .p, {
                title: seo.title,
                description: seo.description,
                keywords: seo.keywords
            }),
            !hideMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-eggshell-100 pb-12 text-arta-sand-100 md:pb-[150px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative z-2 h-[50vh] w-full overflow-hidden md:h-[50vh]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                ref: bannerImage,
                                className: "absolute h-[50vh] w-full overflow-hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: cms.heroBanner.image,
                                        alt: "",
                                        className: "hidden h-full w-full object-cover md:block"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: cms.heroBanner.mobileImage,
                                        alt: "",
                                        className: "h-full w-full object-cover object-top md:hidden"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-0 bottom-8 flex flex-col items-center justify-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "arta-container banner-text-shadow text-white",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: `mt-1 ${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h1_style2 */ .Y.h1_style2}`,
                                            children: title
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    children
                ]
            }),
            !hideFooter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                textColor: "brown"
            })
        ]
    });
};



/***/ })

};
;