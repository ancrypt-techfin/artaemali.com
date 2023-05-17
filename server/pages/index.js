(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 5953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Slides)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7282);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9579);
/* harmony import */ var _breakBarriers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8886);
/* harmony import */ var _techFin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(266);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2001);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_techFin__WEBPACK_IMPORTED_MODULE_5__]);
_techFin__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Slides = ({ k , setShowWechatPopup  })=>{
    const [firstLoad, setFirstLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [disableScroll, setDisableScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentSectionId, setCurrentSectionId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const slideLeaveEvent = (origin, destination, direction)=>{
        if (origin.index === 2 && destination.index === 1) {
            setCurrentSectionById(1.5);
        } else {
            setCurrentSectionById(destination.index);
        }
        setDisableScroll(destination.index === 1);
        const myElement = document.getElementById("break-barriers-video");
        if (myElement != null) {
            if (destination.index === 0 && direction == "up") {
                myElement.style.opacity = "1";
            }
        }
    };
    const setCurrentSectionById = (id)=>{
        setCurrentSectionId(id);
    };
    const afterLoadEvent = (origin, destination, direction)=>{
        const myElement = document.getElementById("break-barriers-video");
        if (myElement != null) {
            if (destination.index === 1 && direction == "down") {
                myElement.style.opacity = "0";
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFirstLoad(false);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default()), {
        //fullpage options
        licenseKey: "KEO76-3R4A7-1FJ48-SVJ58-YVOFN",
        scrollingSpeed: 800,
        onLeave: slideLeaveEvent,
        afterLoad: afterLoadEvent,
        keyboardScrolling: true,
        verticalCentered: false,
        sectionsColor: [
            "#543317",
            "#000000",
            "#653711"
        ],
        render: ({ state , fullpageApi  })=>{
            fullpageApi?.setAllowScrolling(!disableScroll);
            if (firstLoad) {
                fullpageApi?.silentMoveTo(1);
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default().Wrapper), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: "section fixing section home relative box-border flex h-full w-full items-center justify-center text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_breakBarriers__WEBPACK_IMPORTED_MODULE_4__/* .BreakBarriers */ .e, {
                                currentSectionId: currentSectionId
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: "section section double relative box-border flex h-full w-full items-center justify-center will-change-transform",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_techFin__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                k: k,
                                currentSectionId: currentSectionId,
                                setCurrentSectionById: setCurrentSectionById,
                                setTriggerSection: async (id)=>{
                                    setDisableScroll(false);
                                    fullpageApi.setAllowScrolling(true);
                                    if (id == 0) fullpageApi.moveSectionUp();
                                    if (id == 3) fullpageApi.moveSectionDown();
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: "section section double relative box-border flex h-full w-full items-center justify-center text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_about__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                k: k
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section fp-auto-height",
                            id: "section3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                setShowWechatPopup: setShowWechatPopup
                            })
                        })
                    ]
                })
            });
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonAnimated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5909);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);




const About = ({ k  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative z-3 flex h-app-height w-screen bg-[#3c2516] will-change-transform lg:h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "video-container absolute top-0 left-0 h-full w-full overflow-hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                    "data-keepplaying": true,
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    crossOrigin: "anonymous",
                    className: "will-change-transform absolute top-[-12em] left-1/2 transform translate-x-[-28%] max-w-[250%] w-[250%] sm:top-[-14em] sm:w-[180%] md:top-[-12em] md:w-[160%] md:left-0 md:translate-x-0 md:top-0 lg:top-0 lg:w-full lg:h-full lg:object-cover",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                            src: "/videos/landing_about-updated.mp4",
                            typeof: "video/mp4"
                        }),
                        "Your browser does not support the video tag."
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "about-background-gradient absolute bottom-0 left-0 z-1 h-[40vh] w-full lg:hidden"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute left-[3em] bottom-[0] z-1 z-[2] flex w-[77em] -translate-y-1/2 transform self-center sm:left-[1em] lg:left-auto lg:right-[4em] lg:bottom-auto lg:top-1/2 lg:w-[50em] lg:justify-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pl-6 text-left lg:text-right",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-Verah text-[6em] tracking-[0.06em] text-white will-change-transform sm:text-[5em] lg:text-right lg:text-[3.4em]",
                            children: t("home.about_arta")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-[1.5em] max-w-[30em] font-Neue text-[3em] text-white sm:text-[1.8em] lg:text-[1em]",
                            children: k.about_us_description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonAnimated__WEBPACK_IMPORTED_MODULE_2__/* .ButtonAnimated */ .V, {
                            as: "a",
                            href: "/about-us",
                            className: "w-full border-white text-white md:w-auto",
                            children: t("home.show_more")
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 8886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ BreakBarriers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const BreakBarriers = ({ currentSectionId  })=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const sec1TtlRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sec1VideoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sec1Container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [windowDimension, setWindowDimension] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0
    });
    var request = null;
    var mouse = {
        x: 0,
        y: 0
    };
    var cx, cy;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        cx = window?.innerWidth / 50;
        cy = window?.innerHeight / 50;
        setWindowDimension({
            x: cx,
            y: cy
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(sec1TtlRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            x: "0.5em",
            duration: 2,
            ease: "power0",
            delay: 1
        });
    }, []);
    // useEffect(() => {
    //   if (currentSectionId === 1) {
    //     gsap.to(
    //       sec1Container.current,
    //       {
    //         delay: 0.1,
    //         duration: 0.5,
    //         yPercent: 40,
    //         autoAlpha: 0,
    //         ease: "easeInOutCubic"
    //       }
    //     )
    //   } else {
    //     gsap.to(
    //       sec1Container.current,
    //       {
    //         duration: 0.8,
    //         yPercent: 0,
    //         autoAlpha: 1,
    //         ease: "ease"
    //       }
    //     )
    //   }
    // }, [currentSectionId])
    const section1HandleMouseMove = (event)=>{
        mouse.x = event.pageX;
        mouse.y = event.pageY;
        cancelAnimationFrame(request);
        request = requestAnimationFrame(updateSec1TextPos);
    };
    function updateSec1TextPos() {
        if (cx * 2 > 768) {
            var dx = mouse.x - windowDimension.x;
            var dy = mouse.y - windowDimension.y;
            var tiltx = dy / windowDimension.y * 0.7;
            var tilty = -(dx / windowDimension.x) * 0.7;
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1TtlRef.current, {
                duration: 1,
                transform: "translate(" + tilty + "px, " + tiltx + "px)",
                ease: "Power2.easeOut"
            });
        }
    }
    function updateSec1Video() {
        var dx = mouse.x - windowDimension.x;
        var dy = mouse.y - windowDimension.y;
        var tiltx = -(dy / windowDimension.y) * 0.5;
        var tilty = dx / windowDimension.x * 0.5;
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1VideoRef.current, {
            duration: 1,
            transform: "translate(" + tilty + "px, " + tiltx + "px)",
            ease: "Power2.easeOut"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        ref: sec1Container,
        id: "break-barriers",
        className: "tigger-01 relative relative z-3 flex h-app-height w-screen flex-col overflow-hidden bg-[#351e0e] will-change-transform lg:h-screen",
        onMouseMove: (ev)=>section1HandleMouseMove(ev),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-full h-full object-cover",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "w-full h-full object-cover",
                    src: "/images/home-sec1-bg.jpg"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                "data-keepplaying": true,
                ref: sec1VideoRef,
                autoPlay: true,
                muted: true,
                playsInline: true,
                preload: "true",
                crossOrigin: "anonymous",
                id: "break-barriers-video",
                // className="absolute bottom-[15%] left-[-50%] scale-[2.5] transform will-change-transform sm:bottom-0 sm:scale-[1.5] md:relative md:left-[-25%] md:h-full md:w-full md:object-cover lg:left-0 lg:scale-100"
                className: " relative h-full w-full transform object-cover will-change-transform",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                        src: "/videos/landing_top_latest.mp4",
                        typeof: "video/mp4"
                    }),
                    "Your browser does not support the video tag."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " movable-elements-wrapper z-1 flex max-w-main-contain items-start justify-center px-6 xl:mx-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute bottom-[6em] left-[0em] md:left-[5em]",
                    children: [
                        locale === "en" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            id: "animation",
                            ref: sec1TtlRef,
                            className: "movable z-[200] text-left font-Verah text-[10em] leading-[1.02em] text-white will-change-transform sm:text-[7em] md:text-[5em]",
                            children: [
                                "BREAK",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "BARRIERS",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: " mt-[20px] h-[4px] w-[40px] sm:mt-[0.45em] sm:w-[80px]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "pr-3 text-[30px] sm:text-[0.6em]",
                                            children: "for "
                                        }),
                                        " GREATNESS"
                                    ]
                                })
                            ]
                        }),
                        locale === "tc" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            id: "animation",
                            ref: sec1TtlRef,
                            className: "movable z-[200] text-left font-Noto text-[10em] leading-[1.4em] text-white will-change-transform md:mb-10 md:text-[3em]",
                            children: [
                                "打破壁壘",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: " mt-[0.7em] h-[4px] w-[40px] sm:mt-[0.8em] sm:w-[115px]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "pr-3 text-[30px] sm:text-[1.3em]",
                                            children: "成就輝煌"
                                        })
                                    ]
                                })
                            ]
                        }),
                        locale === "sc" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            id: "animation",
                            ref: sec1TtlRef,
                            className: "movable z-[200] text-left font-Noto text-[10em] leading-[1.4em] text-white will-change-transform md:mb-10 md:text-[3em]",
                            children: [
                                "打破壁垒",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: " mt-[0.7em] h-[4px] w-[40px] sm:mt-[0.8em] sm:w-[115px]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "pr-3 text-[30px] sm:text-[1.3em]",
                                            children: "成就辉煌"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ButtonAnimated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5909);
/* harmony import */ var src_domains_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3709);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_7__]);
swiper_react__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const TechFin = ({ k , currentSectionId , setCurrentSectionById , setTriggerSection  })=>{
    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);
    const [windowWidth, setWindowWith] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1000);
    const sec1ContentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const businessRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const circleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sec1MaskCircleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sec1VideoRed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [selectedBusiness, setSelectedBusiness] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [currentSection, setCurrentSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("10");
    const [touchStart, setTouchStart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [lastFireTime, setLastFireTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Date.now());
    const throttle = (fn, delay)=>{
        if (lastFireTime + delay - Date.now() < 0) {
            fn();
            setLastFireTime(Date.now());
        }
    };
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    const businesses = [
        {
            title: t("page_title.asset_management"),
            description: k.our_business_product_description_1,
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_6__/* .links.businessesAssetManagement */ .O.businessesAssetManagement
        },
        {
            title: t("page_title.investment_banking"),
            description: k.our_business_product_description_2,
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_6__/* .links.businessesInvestmentBanking */ .O.businessesInvestmentBanking
        },
        {
            title: t("page_title.insurance_brokerage"),
            description: k.our_business_product_description_3,
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_6__/* .links.businessesInsuranceBrokerage */ .O.businessesInsuranceBrokerage
        },
        {
            title: t("page_title.global_markets"),
            description: k.our_business_product_description_4,
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_6__/* .links.businessesSecuritiesBrokerage */ .O.businessesSecuritiesBrokerage
        },
        // {
        //   title: t('page_title.esg_advisory'),
        //   description: k.our_business_product_description_5,
        //   link: links.businessesEsg,
        // },
        {
            title: t("page_title.artazine"),
            description: k.our_business_product_description_6,
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_6__/* .links.businessesArtazine */ .O.businessesArtazine
        }
    ];
    let throttleDelay = 2000;
    if (false) {}
    const wheel = (event)=>{
        throttle(()=>{
            if (event.nativeEvent.wheelDelta > 0) {
                // Up
                if (currentSectionId === 1) {
                    // From 1 to 0
                    setTriggerSection(0);
                } else {
                    // From 1.5 to 1
                    setCurrentSectionById(1);
                }
            } else {
                // Down
                if (currentSectionId === 1) {
                    // From 1 to 1.5
                    setCurrentSectionById(1.5);
                } else {
                    // From 1.5 to 2
                    setTriggerSection(3);
                }
            }
        }, throttleDelay);
    };
    const fromSec1ToSec0 = ()=>{
        const isMobile = windowWidth < 768;
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(circleRef.current, {
            duration: 1.5,
            autoAlpha: 0.0,
            width: isMobile ? "90em" : "38em",
            height: isMobile ? "90em" : "38em",
            left: "-30%",
            xPercent: -2,
            ease: "slow(0.7, 0.7, false)"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1MaskCircleRef.current, {
            xPercent: 5,
            duration: 1,
            attr: {
                r: "40em"
            },
            ease: "power1.out"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1ContentRef.current, {
            autoAlpha: 0,
            zIndex: 2,
            duration: 1,
            ease: "ease"
        });
    };
    const fromSec0ToSec1 = ()=>{
        const isTablet = windowWidth < 1024;
        setCurrentSection("10");
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(circleRef.current, {
            duration: 1.4,
            autoAlpha: 0.25,
            width: isTablet ? "140em" : "38em",
            height: isTablet ? "140em" : "38em",
            left: isTablet ? "-30%" : "-9%",
            top: isTablet ? "-50%" : "-60%",
            xPercent: -2,
            ease: "slow(0.7, 0.7, false)"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1MaskCircleRef.current, {
            xPercent: 5,
            duration: 1.7,
            attr: {
                r: isTablet ? "120em" : "45em"
            },
            ease: "power1.out"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1ContentRef.current, {
            delay: 0.5,
            autoAlpha: 1,
            zIndex: 3,
            duration: 1.3,
            ease: "ease"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(businessRef.current, {
            delay: 0,
            zIndex: 2,
            autoAlpha: 0,
            duration: 1,
            ease: "ease"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1VideoRed.current, {
            filter: "hue-rotate(0deg)",
            ease: "slow(0.7, 0.7, false)"
        });
    };
    const fromSec1ToSec1_5 = ()=>{
        setCurrentSection("15");
        const isMobile = windowWidth < 768;
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(circleRef.current, {
            duration: 0.9,
            autoAlpha: 0,
            width: "65em",
            height: "65em",
            xPercent: 60,
            top: "-90%",
            ease: "slow(0.7, 0.7, false)"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1MaskCircleRef.current, {
            duration: 0.9,
            attr: {
                r: isMobile ? "120em" : "90em"
            },
            ease: "slow(0.7, 0.7, false)"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1VideoRed.current, {
            filter: "hue-rotate(170deg)",
            ease: "slow(0.7, 0.7, false)"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(sec1ContentRef.current, {
            autoAlpha: 0,
            zIndex: 2,
            duration: 1,
            ease: "ease"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(businessRef.current, {
            delay: 0,
            zIndex: 3,
            autoAlpha: 1,
            duration: 1,
            ease: "ease"
        });
    };
    const fromSec1_5ToSec2 = ()=>{
        setCurrentSection("15");
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(businessRef.current, {
            delay: 0,
            zIndex: 3,
            autoAlpha: 0,
            duration: 1,
            ease: "ease"
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(circleRef.current, {
            duration: 1,
            autoAlpha: 0,
            width: "70em",
            height: "70em",
            xPercent: -115,
            ease: "slow(0.7, 0.7, false)"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setWindowWith(window?.innerWidth || 0);
        if (currentSectionId === 0) {
            fromSec1ToSec0();
            setLastFireTime(Date.now());
        } else if (currentSectionId === 1) {
            fromSec0ToSec1();
            setLastFireTime(Date.now());
        } else if (currentSectionId === 1.5) {
            fromSec1ToSec1_5();
        } else if (currentSectionId === 2) {
            fromSec1_5ToSec2();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentSectionId
    ]);
    const handleTouchStart = (event)=>{
        setTouchStart(event.touches[0].clientY);
    };
    const handleTouchEnd = (event)=>{
        throttle(()=>{
            if (Math.abs(event.changedTouches[0].clientY - touchStart) > 40) {
                if (event.changedTouches[0].clientY > touchStart) {
                    // Up
                    if (currentSectionId === 1) {
                        // From 1 to 0
                        setTriggerSection(0);
                    } else {
                        // From 1.5 to 1
                        setCurrentSectionById(1);
                    }
                } else {
                    // Down
                    if (currentSectionId === 1) {
                        // From 1 to 1.5
                        setCurrentSectionById(1.5);
                    } else {
                        // From 1.5 to 2
                        setTriggerSection(3);
                    }
                }
            }
        }, 2000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-app-height w-[100vw] overflow-hidden lg:h-screen",
        onWheel: (event)=>wheel(event),
        onTouchStart: (event)=>handleTouchStart(event),
        onTouchEnd: (event)=>handleTouchEnd(event),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "video-container absolute top-0 left-0 h-full w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                        ref: sec1VideoRed,
                        "data-keepplaying": true,
                        id: "video",
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        crossOrigin: "anonymous",
                        className: "absolute h-full w-full object-cover opacity-50 will-change-transform",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                src: "/videos/landing_whatis.mp4",
                                typeof: "video/mp4"
                            }),
                            "Your browser does not support the video tag."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        className: "absolute z-1 h-full w-full will-change-transform",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mask", {
                                        id: "sec1Mask",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                x: "0",
                                                y: "0",
                                                r: "200",
                                                width: "100%",
                                                height: "100%",
                                                fill: "#fff"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                ref: sec1MaskCircleRef,
                                                id: "sec1MaskCircleRef",
                                                r: "40em",
                                                fill: "black",
                                                cx: "0",
                                                cy: "50%"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                        id: "sec1MaskGradient",
                                        gradientTransform: "rotate(90)",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "5%",
                                                stopColor: "#241307"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "95%",
                                                stopColor: "#432712"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                mask: "url(#sec1Mask)",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    id: "goAway",
                                    x: "0",
                                    y: "0",
                                    width: "100%",
                                    height: "100%",
                                    fill: "url('#sec1MaskGradient')"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex h-full flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute bottom-[11em] z-3 transform lg:right-[4em] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                id: "sec1ContentRef",
                                ref: sec1ContentRef,
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("flex h-full w-full flex-col justify-center px-[6em] opacity-0 lg:items-end lg:px-0 lg:text-right", currentSection == "15" && "!opacity-0"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-Verah text-[6em] tracking-[0.06em] text-white will-change-transform mb-6 sm:text-[5em] lg:text-[3.4em]",
                                        children: t("about_us.what_is_techfin")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "max-w-[30em] text-left font-Neue text-[3em] text-white will-change-transform mb-6 sm:text-[1.8em] sm:text-[2.4em] lg:text-right lg:text-[1em]",
                                        children: k.what_is_techfin_description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonAnimated__WEBPACK_IMPORTED_MODULE_5__/* .ButtonAnimated */ .V, {
                                        as: "a",
                                        href: "/about-us#tech-fin",
                                        className: "text-white",
                                        children: t("home.explore_more")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "circle",
                                ref: circleRef,
                                className: "innerShadow pointer-events-none absolute -top-[26em] left-[38%] z-0 h-[38em] w-[38em] rounded-full border-2 border-white opacity-0 will-change-transform lg:-left-[2%] lg:-top-[10em]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "home-our-business",
                        ref: businessRef,
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("absolute bottom-[22em] left-[3.8em] z-2 w-[95vw] transform pr-4 text-white opacity-0 transition duration-1000 md:bottom-[20em] lg:bottom-[25vh] lg:left-[6em] lg:left-[4em]", currentSection == "10" && "!opacity-0"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "font-verah mt-0 text-left text-[6em] tracking-[0.06em] sm:text-[5em] lg:text-[3.4em]",
                                children: t("page_title.our_businesses")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hidden max-w-[30em] text-left font-Neue text-[3em] sm:text-[1.8em] md:block md:text-[1.8em] lg:text-[1em]",
                                children: k.our_business_description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto w-[75vw] sm:w-[50vw] md:w-full lg:mx-0 lg:max-w-[82vw]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                    loop: false,
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                    breakpoints: {
                                        768: {
                                            slidesPerView: 3
                                        },
                                        1024: {
                                            loop: false,
                                            centeredSlides: false,
                                            slidesPerView: 6
                                        }
                                    },
                                    className: "!overflow-visible",
                                    children: businesses.map((business, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                            className: "flex min-h-[12em] min-w-[12em] flex-col justify-center text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BusinessCircle, {
                                                index: i,
                                                business: business,
                                                selectedBusiness: selectedBusiness,
                                                setSelectedBusiness: setSelectedBusiness,
                                                label: t("home.learn_more")
                                            }, i)
                                        }, `option-${i}`))
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const BusinessCircle = ({ index , business , selectedBusiness , setSelectedBusiness , label  })=>{
    if (!business) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative mx-auto mt-[4em] flex will-change-transform lg:mt-0",
        onMouseEnter: ()=>setSelectedBusiness(index),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(index === selectedBusiness && "innerShadow !opacity-100 lg:h-[12em] lg:w-[12em]", index !== selectedBusiness && "lg:h-[10.8em] lg:w-[10.8em]", `innerShadowMobile mx-auto flex h-[17.5em] w-[17.5em] items-center justify-center self-center rounded-full border border-white text-[3em] opacity-70 transition-all will-change-transform sm:text-[2.2em] md:h-[12.5em] md:w-[12.5em] md:text-[1.8em] lg:text-[0.95em]`),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: business.link,
                    children: business.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(`absolute bottom-0 left-1/2 flex w-[120%] translate-y-full -translate-x-1/2 transform flex-col  justify-center  transition-all duration-300 md:items-center`, index === selectedBusiness ? "lg:opacity-100" : "lg:opacity-0"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-[1em] hidden w-full text-center font-Neue text-[3em] text-white lg:block lg:text-[0.8em]",
                        children: business.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonAnimated__WEBPACK_IMPORTED_MODULE_5__/* .ButtonAnimated */ .V, {
                        as: "a",
                        href: business.link,
                        className: "cta-btn mt-4 hidden border-white text-white md:block ",
                        children: label
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TechFin);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5331);
/* harmony import */ var src_components_PageHome_PageHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5953);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(887);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageHome_PageHome__WEBPACK_IMPORTED_MODULE_5__]);
src_components_PageHome_PageHome__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Home = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_6__/* .Seo */ .p, {
                title: `${t("page_title.home")} | Arta TechFin`,
                description: t("page_description.home"),
                keywords: t("page_keywords.home"),
                ga: "Homepage"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                fontSize: "1em",
                src: "homepage"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_PageHome_PageHome__WEBPACK_IMPORTED_MODULE_5__/* .Slides */ .M, {
                    k: {},
                    setShowWechatPopup: ()=>{}
                })
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 7282:
/***/ ((module) => {

"use strict";
module.exports = require("@fullpage/react-fullpage");

/***/ }),

/***/ 8768:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();