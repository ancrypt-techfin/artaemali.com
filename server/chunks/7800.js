"use strict";
exports.id = 7800;
exports.ids = [7800];
exports.modules = {

/***/ 7800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ CalendarAccordion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svg_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7188);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







gsap__WEBPACK_IMPORTED_MODULE_5___default().config({
    nullTargetWarn: false
});
const CalendarAccordion = ({ index , year , events , openYear , setOpenYear  })=>{
    const togglerIcon = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const listWrapper = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const list = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [isFirstVisit, setIsFirstVisit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (year === openYear) {
            gsap__WEBPACK_IMPORTED_MODULE_5___default().to(togglerIcon.current, {
                rotate: -180,
                duration: 0.7
            });
            gsap__WEBPACK_IMPORTED_MODULE_5___default().to(listWrapper.current, {
                height: list.current?.clientHeight,
                duration: 0.7
            });
            if (!isFirstVisit) {
                setTimeout(()=>{
                    if (year !== 0) {
                        const scrollDiv = (document.getElementById(`year-${openYear}`)?.offsetTop || 0) - 170;
                        window.scrollTo({
                            top: scrollDiv,
                            behavior: "smooth"
                        });
                    }
                }, 800);
            }
        } else {
            gsap__WEBPACK_IMPORTED_MODULE_5___default().to(togglerIcon.current, {
                rotate: 0,
                duration: 0.7
            });
            gsap__WEBPACK_IMPORTED_MODULE_5___default().to(listWrapper.current, {
                height: 0,
                duration: 0.7
            });
        }
        setIsFirstVisit(false);
    }, [
        openYear
    ]);
    if (events.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: `year-${year}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(`mb-6 bg-white transition-all transition shadow-lg hover:brightness-[98%]`),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex cursor-pointer items-center justify-between p-6 lg:p-8",
                onClick: ()=>setOpenYear(year),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h6 */ .Y.h6} text-arta-sand-100`,
                        children: year
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        ref: togglerIcon,
                        className: "h-6 w-6",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M20 16.2632C19.7981 16.2279 19.5831 16.2102 19.3549 16.2102C19.1092 16.2102 18.8941 16.2279 18.7098 16.2632L12.0197 8.53763L5.39393 16.2632C5.26228 16.2279 5.11747 16.2102 4.95949 16.2102C4.79273 16.2102 4.13165 16.2279 4 16.2632C5.89731 14.0032 12.0197 7 12.0197 7C12.0197 7 18.1548 14.0538 20 16.2632Z",
                            fill: "#593725"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: listWrapper,
                className: "h-0 overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    ref: list,
                    className: "px-6 pb-6 lg:px-8 lg:pb-8",
                    children: events.sort((a, b)=>b.date - a.date).map((event, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "arta-eventItem cursor-pointer border-b border-solid border-arta-sand-200 py-6",
                            onClick: ()=>{
                                if (event.postPageUrl) {
                                    next_router__WEBPACK_IMPORTED_MODULE_6___default().push(`${event.postPageUrl}`);
                                }
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                title: event.title,
                                href: event.url,
                                target: "_blank",
                                className: "flex md:items-center",
                                rel: "noreferrer",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mr-2 flex-[0_0_48px] text-center md:flex-[0_0_80px] lg:mr-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h3_style2 */ .Y.h3_style2} text-[#878095]`,
                                                children: event.date.toDateString().slice(7, 10)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.title_style2 */ .Y.title_style2} text-[#878095]`,
                                                children: event.date.toDateString().slice(3, 7)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.title */ .Y.title} mr-4 font-Neue text-arta-sand-100`,
                                        children: event.title
                                    }),
                                    (event.postPageUrl || event.url) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_1__/* .IconArrowRightCircle */ .K$, {
                                        className: "ml-auto hidden flex-[0_0_32px] sm:block"
                                    })
                                ]
                            })
                        }, index);
                    })
                })
            })
        ]
    });
};



/***/ })

};
;