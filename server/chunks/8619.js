"use strict";
exports.id = 8619;
exports.ids = [8619];
exports.modules = {

/***/ 8619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ FadeUp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




function FadeUp({ children , className , startPos =75  }) {
    const ref = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const [isActive, setIsActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (ref?.current) {
            const tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: `top ${window.innerWidth > 767 ? startPos : 95}%`,
                    onEnter: ()=>{
                        setIsActive(()=>true);
                    }
                }
            });
            ()=>{
                tl.kill();
            };
        }
    }, [
        startPos
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(isActive ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0", className, `transition-all duration-[1.2s] ease-out`),
        ref: ref,
        children: children
    });
}


/***/ })

};
;