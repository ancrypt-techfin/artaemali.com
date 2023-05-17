"use strict";
exports.id = 7607;
exports.ids = [7607];
exports.modules = {

/***/ 7607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7188);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Svg_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(199);






const ModuleTextColListHeader = ({ header , headerPosition  })=>{
    const circle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let x = 200;
        if (headerPosition == "left") {
            x = -200;
        }
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(circle.current, {
            x: x,
            autoAlpha: 0
        });
        const spinTl = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
            repeat: -1
        });
        spinTl.pause();
        const tl = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({
            scrollTrigger: {
                trigger: circle.current,
                start: "top center+=200",
                end: "top center+=200",
                toggleActions: "play play reverse  play",
                onEnter: ()=>spinTl.play()
            }
        });
        tl.to(circle.current, {
            x: 0,
            autoAlpha: 1
        });
        spinTl.to(circle.current, {
            duration: 5,
            rotation: 360
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(`relative flex items-center`, headerPosition == "right" && " justify-end text-right"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(`relative z-10 ${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h2_style2 */ .Y.h2_style2} pb-4 lg:pb-0 transform`, headerPosition == "right" ? " translate-x-[10px] lg:translate-x-[40px]" : " translate-x-[-2px] lg:translate-x-[-40px]"),
                children: header
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("text-col-circle absolute z-0 will-change-transform", headerPosition == "left" ? "-left-[240px]" : "-right-[240px]"),
                ref: circle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Circle */ .Cd, {
                    className: "hidden md:block mx-auto md:w-[471px] md:h-[471px] lg:w-[500px] lg:h-[500px] xl:w-[576px] xl:h-[576px]"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModuleTextColListHeader);


/***/ })

};
;