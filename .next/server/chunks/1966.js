"use strict";
exports.id = 1966;
exports.ids = [1966];
exports.modules = {

/***/ 1966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ HeroBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7188);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_FadeUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8619);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);







gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);
const HeroBanner = ({ simpleHeader =false , title , title2 , label , description , image , mobileImage , fullWidth =false  })=>{
    const bannerImage = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
            scrollTrigger: {
                trigger: bannerImage.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
        tl.to(bannerImage.current, {
            y: 200
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("relative z-2 w-full overflow-hidden", simpleHeader ? "h-[60vh]" : "h-app-height md:h-[0] md:pb-[56.25%]"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: bannerImage,
                className: "absolute h-full w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: simpleHeader ? "/images/investor-relations/top-inner-banner.jpg" : image,
                        alt: title,
                        className: "hidden h-full w-full object-cover md:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: simpleHeader ? "/images/investor-relations/mobile-top-inner-banner.jpg" : mobileImage,
                        alt: title,
                        className: "h-full w-full object-cover md:hidden"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("absolute inset-0 mb-12 flex flex-col items-center justify-end pt-20 lg:mb-0", simpleHeader ? "lg:bottom-16" : "lg:justify-center"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "arta-container banner-text-shadow text-white",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_FadeUp__WEBPACK_IMPORTED_MODULE_5__/* .FadeUp */ .N, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(simpleHeader || fullWidth ? "" : "md:w-1/2"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.title_style2 */ .Y.title_style2,
                                    children: label
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: `mt-1 ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h1_style2 */ .Y.h1_style2}`,
                                    children: [
                                        title,
                                        " ",
                                        title2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                " ",
                                                title2
                                            ]
                                        }) : ""
                                    ]
                                }),
                                description !== "null" && !simpleHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `mt-4 ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                    children: description
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};



/***/ })

};
;