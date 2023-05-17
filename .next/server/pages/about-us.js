(() => {
var exports = {};
exports.id = 8552;
exports.ids = [8552];
exports.modules = {

/***/ 8417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/eco_icon1.5b225485.svg","height":140,"width":140});

/***/ }),

/***/ 8940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/leadership_bg.84873714.png","height":773,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAYElEQVR42iXMXQ9AIBiG4f7///K1cYIxIyvLW1FJ4dhrtuvgeU5uAlMC40ezMhh2n/qJezCcaFbJKZU0s2uLHPTRicsD8Ru10B1qMKKRcy5pbkSNlwS7YAGX5pWaCyz/Xo+IVIHz1ZhUAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 9942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/tech_fin_bg.4c640fd9.png","height":1604,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAfklEQVR42h3NgQnDMAwEQL2sxE2gdP8pOkcH6CglsS296uRAIAmex/fz1rIAutb9sb+sboqi3k+GF1ttqdAiN2XS+8HoApUpMyVNtWSynz8t63yGN5KGiwng44QI6T6aSsoEQTIyCbV5GZOSE694jLo9525z7o4AED5GOyLGH33jTj1oOEKvAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 4056:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2001);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(887);
/* harmony import */ var _SectionFullMission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9780);
/* harmony import */ var _SectionCulture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3738);
/* harmony import */ var _SectionLeadership__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2987);
/* harmony import */ var _SectionTechFin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7371);
/* harmony import */ var _SectionTechFinVsFinTech__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3976);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SectionLeadership__WEBPACK_IMPORTED_MODULE_6__, _SectionTechFin__WEBPACK_IMPORTED_MODULE_7__]);
([_SectionLeadership__WEBPACK_IMPORTED_MODULE_6__, _SectionTechFin__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PageAbout = ({ k  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_3__/* .Seo */ .p, {
                title: `${t("page_title.about_us")} | Arta TechFin`,
                description: t("page_description.about_us"),
                keywords: t("page_keywords.about_us"),
                ga: "About Us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionFullMission__WEBPACK_IMPORTED_MODULE_4__/* .SectionFullMission */ .c, {
                        label: t("about_us.vision_mission"),
                        title: k.mission.subtitle1,
                        title2: k.mission.subtitle2,
                        image: k.heroBanner.image,
                        mobileImage: k.heroBanner.mobileImage,
                        description: "null",
                        fullWidth: true,
                        k: k
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionCulture__WEBPACK_IMPORTED_MODULE_5__/* .SectionCulture */ .c, {
                        k: k
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionLeadership__WEBPACK_IMPORTED_MODULE_6__/* .SectionLeadership */ .E, {
                        k: k
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTechFin__WEBPACK_IMPORTED_MODULE_7__/* .SectionTechFin */ .g, {
                        k: k
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTechFinVsFinTech__WEBPACK_IMPORTED_MODULE_8__/* .SectionTechFinVsFinTech */ .z, {
                        k: k
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "brown"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageAbout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ SectionCulture)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/PageAbout/images/culture_bg.png
/* harmony default export */ const culture_bg = ({"src":"/_next/static/media/culture_bg.98ca425d.png","height":791,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AOrm3fLv6u7r49vTw8m9pci9pci8pMi8pADv6+Tn4tjb08Td1cbQxrHIvKTRx7PVy7kA3dbI0si0yr+n0si14NnM3tfJ5eDV5uHXAMi8o8i8pMzBqtDFsdrSwufi1+nk2uDazSYUTTL/dYBnAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./src/components/Text.tsx
var Text = __webpack_require__(7188);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Svg/Icon.tsx
var Icon = __webpack_require__(199);
// EXTERNAL MODULE: ./src/components/Hr.tsx
var Hr = __webpack_require__(3017);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: ./src/components/FadeUp.tsx
var FadeUp = __webpack_require__(8619);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/PageAbout/SectionCulture.tsx












const SectionCulture = (props)=>{
    const { k  } = props;
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const { locale  } = (0,router_.useRouter)();
    const [selectedIndex, _setSelectedIndex] = (0,external_react_.useState)(0);
    const setSelectedIndex = (index)=>{
        _setSelectedIndex(index);
        external_gsap_.gsap.fromTo(".fade-in", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.4,
            delay: 0.2
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group/bg relative z-1 overflow-hidden",
        id: "culture",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: culture_bg,
                    alt: "",
                    fill: true,
                    className: "object-cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "arta-container relative mx-auto grid pt-16 pb-8 md:grid-cols-2 md:py-36",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-12 flex flex-col justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FadeUp/* FadeUp */.N, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: `${Text/* textClass.h2_style2 */.Y.h2_style2} mb-2`,
                                        children: t("about_us.culture_values")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: Text/* textClass.body_regular */.Y.body_regular,
                                        children: k.culture.subtitle1
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:pl-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: Text/* textClass.h3_style2 */.Y.h3_style2,
                                children: k.culture.sectionTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Hr.Hr, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: external_classnames_default()(locale !== "en" && "min-h-[360px] lg:min-h-[340px]"),
                                children: k.culture.valueList.map((value, index)=>{
                                    const isSelected = index === selectedIndex;
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "group/list mb-8 flex flex-col overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "flex items-start overflow-hidden opacity-70 duration-200 ease-out group-hover/list:translate-x-0 group-hover/list:opacity-100" + (isSelected ? " translate-x-0 opacity-100" : " -translate-x-7"),
                                                onMouseEnter: ()=>selectedIndex != index && setSelectedIndex(index),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Icon/* IconListItemArrow */.Rc, {
                                                        className: "h-4 w-4 pt-[10px]",
                                                        fill: "#593725"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `${Text/* textClass.title */.Y.title} ml-3`,
                                                        children: value.title
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `fade-in ${Text/* textClass.body_regular */.Y.body_regular} mt-4` + (isSelected ? "" : " hidden"),
                                                children: value.description
                                            })
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ SectionFullMission)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Text.tsx
var Text = __webpack_require__(7188);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/FadeUp.tsx
var FadeUp = __webpack_require__(8619);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/PageAbout/SectionMission.tsx



const SectionMission = (props)=>{
    const { k  } = props;
    const videoRef = (0,external_react_.useRef)(null);
    const [isPlaying, setIsPlaying] = (0,external_react_.useState)(false);
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const toggleVideo = ()=>{
        if (videoRef.current && !isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "group/bg relative overflow-hidden z-1 max-h-[65vw] md:max-h-[70vw] lg:max-h-[60vw]",
        id: "mission",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "arta-container relative mx-auto flex items-center justify-center px-0 pt-6 md:py-16 md:px-[1.5rem] lg:px-[6rem]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative w-full transition hover:brightness-90",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                        controls: true,
                        "data-keepplaying": true,
                        playsInline: true,
                        ref: videoRef,
                        preload: "true",
                        crossOrigin: "anonymous",
                        className: "w-full cursor-pointer transition will-change-transform",
                        onPlay: ()=>setIsPlaying(true),
                        onPause: ()=>setIsPlaying(false),
                        poster: "https://cdn.indiawealth.in/public/images/transparent-background-mini.png",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                src: "/videos/1017-arta-video-brand-r12_comp.mp4#t=0.001",
                                typeof: "video/mp4"
                            }),
                            "Your browser does not support the video tag."
                        ]
                    }),
                    !isPlaying && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pointer-events-none absolute top-1/2 left-1/2 flex h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer flex-col justify-center rounded-full bg-arta-sand-100 text-center hover:shadow-lg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "ml-5",
                            width: "22",
                            height: "26",
                            viewBox: "0 0 22 26",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M21.9331 12.5733L0.173104 25.1365L0.173105 0.0101748L21.9331 12.5733Z",
                                fill: "#F4F1E1"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute w-[20%] h-[30%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        onClick: ()=>toggleVideo()
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/PageAbout/SectionFullMission.tsx








external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
const SectionFullMission = ({ simpleHeader =false , title , title2 , label , description , image , mobileImage , k , fullWidth =false  })=>{
    const bannerImage = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const tl = external_gsap_.gsap.timeline({
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: bannerImage,
                className: "absolute h-full w-full overflow-hidden z-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: simpleHeader ? "/images/bg-static.jpg" : image,
                        alt: title,
                        className: "hidden h-full w-full object-cover md:block"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: simpleHeader ? "/images/mobile-bg-static.jpg" : mobileImage,
                        alt: title,
                        className: `h-full w-full object-cover md:hidden ${simpleHeader && "object-top"}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()("relative z-2 w-full overflow-hidden", simpleHeader ? "h-[60vh]" : "h-app-height md:h-[0] md:pb-[56.25%]"),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_classnames_default()("absolute inset-0 mb-12 flex flex-col items-center justify-end pt-20 lg:mb-0", simpleHeader ? "lg:bottom-16" : "lg:justify-center"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "arta-container banner-text-shadow text-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FadeUp/* FadeUp */.N, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: external_classnames_default()(simpleHeader || fullWidth ? "" : "md:w-1/2"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: Text/* textClass.title_style2 */.Y.title_style2,
                                        children: label
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: `mt-4 font-Verah text-[1.7rem] leading-[2.25rem]  tracking-wide  lg:text-[4.25rem] lg:leading-[5rem]`,
                                        children: [
                                            title,
                                            " ",
                                            title2 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " ",
                                                    title2
                                                ]
                                            }) : ""
                                        ]
                                    }),
                                    description !== "null" && !simpleHeader && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `mt-4 ${Text/* textClass.body_regular_verah */.Y.body_regular_verah}`,
                                        children: description
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionMission, {
                k: k
            })
        ]
    });
};



/***/ }),

/***/ 2987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SectionLeadership)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_leadership_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8940);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7188);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(199);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const SectionLeadership = (props)=>{
    const { k  } = props;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    // const g = (keyWithoutLang: string) => `${k[`${keyWithoutLang}_${locale}`]}`
    const g = (leader, keyWithoutLang)=>`${leader.attributes[`${keyWithoutLang}_${locale}`]}`;
    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowComponent(true);
    }, []);
    const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group/bg relative z-1 overflow-hidden",
        id: "leadership",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "easeInOutSine absolute h-full w-full overflow-hidden duration-300",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: _images_leadership_bg_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    alt: "",
                    fill: true,
                    className: "object-cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "arta-container relative mx-auto pt-16 pb-[126px] md:py-36 md:pb-[158px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h2_style2 */ .Y.h2_style2} mb-4`,
                        children: t("about_us.leadership")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "arta-leadership-slide relative min-h-[140vw] xs:min-h-[90vw] sm:min-h-[68vw] md:min-h-[49vw] lg:min-h-[33vw]",
                        children: [
                            showComponent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                                loop: false,
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation
                                ],
                                navigation: {
                                    prevEl: prevRef?.current,
                                    nextEl: nextRef?.current
                                },
                                spaceBetween: 32,
                                slidesPerView: 1,
                                breakpoints: {
                                    640: {
                                        slidesPerView: 2
                                    },
                                    768: {
                                        slidesPerView: 3
                                    },
                                    1024: {
                                        slidesPerView: 4
                                    }
                                },
                                children: k.leadership.leaderList.map((leader, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative mb-4 h-0 pb-[133%] w-full overflow-hidden",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: leader.attributes.profile_image.data.attributes.url,
                                                    alt: "",
                                                    className: "absolute h-full w-full object-cover"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.small_text */ .Y.small_text}`,
                                                children: g(leader, "title")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h6 */ .Y.h6,
                                                children: g(leader, "name")
                                            })
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: prevRef,
                                className: `slider-length-${k.leadership.leaderList.length} swiper-button absolute left-1/2 bottom-[-90px] translate-x-[-350%] lg:left-[-56px] lg:top-[37.5%] lg:bottom-[unset] lg:translate-y-[-50%] lg:translate-x-0`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_8__/* .IconArrowLeft */ .D6, {
                                    className: "fill-current"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: nextRef,
                                className: `slider-length-${k.leadership.leaderList.length} swiper-button absolute left-1/2 bottom-[-90px] translate-x-[250%] lg:right-[-56px] lg:top-[37.5%] lg:bottom-[unset] lg:left-[unset] lg:translate-y-[-50%] lg:translate-x-0`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_8__/* .IconArrowRight */ .Ec, {
                                    className: "fill-current"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7371:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ SectionTechFin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_tech_fin_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9942);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7188);
/* harmony import */ var src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(199);
/* harmony import */ var _ModuleTextColList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3137);
/* harmony import */ var src_components_FadeUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8619);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModuleTextColList__WEBPACK_IMPORTED_MODULE_6__, swiper_react__WEBPACK_IMPORTED_MODULE_9__, swiper__WEBPACK_IMPORTED_MODULE_11__]);
([_ModuleTextColList__WEBPACK_IMPORTED_MODULE_6__, swiper_react__WEBPACK_IMPORTED_MODULE_9__, swiper__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const SectionTechFin = (props)=>{
    const { k  } = props;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("common");
    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowComponent(true);
    }, []);
    const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative z-1 flex flex-col overflow-hidden",
        id: "tech-fin",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute h-full w-full overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: _images_tech_fin_bg_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    alt: "",
                    fill: true,
                    className: "object-cover"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModuleTextColList__WEBPACK_IMPORTED_MODULE_6__/* .ModuleTextColList */ .J, {
                header: t("about_us.what_is_techfin"),
                headerPosition: "left",
                title: k.techFin.subtitle,
                list: [
                    {
                        title: k.techFin.section1Title,
                        body: k.techFin.section1Body
                    },
                    {
                        title: k.techFin.section2Title,
                        body: k.techFin.section2Body
                    }
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex flex-col items-center pb-12 md:pb-28",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-12 max-w-3xl text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_FadeUp__WEBPACK_IMPORTED_MODULE_7__/* .FadeUp */ .N, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h3_style2 */ .Y.h3_style2,
                                        children: t("about_us.our_ecosystem")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.body_regular */ .Y.body_regular,
                                        children: k.ecosystem.subtitle
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "our-eco relative pb-28 w-full arta-container overflow-hidden px-16 sm:px-8 lg:px-4",
                        children: [
                            showComponent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_11__.Navigation
                                ],
                                navigation: {
                                    prevEl: prevRef?.current,
                                    nextEl: nextRef?.current
                                },
                                loop: true,
                                centeredSlides: true,
                                spaceBetween: 0,
                                slidesPerView: 1,
                                breakpoints: {
                                    767: {
                                        slidesPerView: 3
                                    },
                                    1200: {
                                        slidesPerView: 5
                                    }
                                },
                                className: "!overflow-visible",
                                children: k.ecosystem.itemList.map((item, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ss-container w-[90%] max-w-[380px] sm:w-4/5 mx-auto lg:w-4/5 rounded-full transition-all duration-300",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-0 pb-[100%]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "absolute w-full h-full flex flex-col items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "ss-circle relative mb-4 h-12 w-12 md:h-16 md:w-16 transition",
                                                            children: [
                                                                index === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconTechnologyInternetCompanies */ .UO, {
                                                                    className: "h-full w-full object-cover"
                                                                }),
                                                                index === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconOrganizationsLedByArta */ .Nu, {
                                                                    className: "h-full w-full object-cover"
                                                                }),
                                                                index === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconBanksBasedInHK */ .bU, {
                                                                    className: "h-full w-full object-cover"
                                                                }),
                                                                index === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .HKTycoons */ .Y9, {
                                                                    className: "h-full w-full object-cover"
                                                                }),
                                                                index === 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .EducationProfessionalIcon */ .t0, {
                                                                    className: "h-full w-full object-cover"
                                                                }),
                                                                index === 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .RegionalBanksIcon */ .fO, {
                                                                    className: "h-full w-full object-cover"
                                                                }),
                                                                index === 6 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .FinTechCompaniesIcon */ .AW, {
                                                                    className: "h-full w-full object-cover"
                                                                }),
                                                                index === 7 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .FinancialInvestmentPlatformIcon */ .aW, {
                                                                    className: "h-full w-full object-cover"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.small_text */ .Y.small_text} max-w-[70%] text-center`,
                                                            children: item.title
                                                        })
                                                    ]
                                                })
                                            })
                                        }, index)
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: prevRef,
                                className: "absolute bottom-8 left-1/2 translate-x-[-350%]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconArrowLeft */ .D6, {
                                    fill: "#593725",
                                    className: "fill-current"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: nextRef,
                                className: "absolute bottom-8 left-1/2 translate-x-[250%]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconArrowRight */ .Ec, {
                                    fill: "#593725",
                                    className: "fill-current"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ SectionTechFinVsFinTech)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7188);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const SectionTechFinVsFinTech = (props)=>{
    const { k  } = props;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `group/bg relative overflow-hidden md:pb-[150px]`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-position-fix-hack"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "arta-container px-6 md:px-12 relative mx-auto grid grid-cols-12 py-20 md:py-[150px] md:py-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-full mb-12 block md:hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h2_style2 */ .Y.h2_style2} mb-4`,
                                children: t("about_us.techfin_vs_fintech")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular */ .Y.body_regular,
                                children: k.techFinVsFinTech.subtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-full flex items-center justify-center md:col-span-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-full flex-col items-center justify-center rounded-full px-6 text-center h-0 pb-[100%] md:translate-y-12 bg-arta-eggshell-100 shadow-blogPost relative",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "absolute w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h2_style2 */ .Y.h2_style2} flex w-full  items-center justify-center rounded-full md:mb-0 `,
                                        children: k.techFinVsFinTech.techFinTitle
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular */ .Y.body_regular} hidden md:mx-auto md:block`,
                                        children: k.techFinVsFinTech.techFinBody
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular */ .Y.body_regular} col-span-full text-center mt-8 mb-4 md:hidden`,
                        children: k.techFinVsFinTech.techFinBody
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-full my-8 flex items-center justify-center md:col-span-2 md:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h1_style2 */ .Y.h1_style2,
                            children: "VS"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-full md:col-span-5 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden md:block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h2_style2 */ .Y.h2_style2} mb-4`,
                                        children: t("about_us.techfin_vs_fintech")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular */ .Y.body_regular,
                                        children: k.techFinVsFinTech.subtitle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex h-0 pb-[100%] w-full flex-col items-center justify-center rounded-full px-6 text-center md:translate-y-12 bg-arta-eggshell-100 shadow-blogPost relative",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "absolute md:w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h2_style2 */ .Y.h2_style2} flex w-full  items-center justify-center rounded-full md:mb-0`,
                                            children: k.techFinVsFinTech.finTechTitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular */ .Y.body_regular} hidden md:mx-auto md:block`,
                                            children: k.techFinVsFinTech.finTechBody
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular */ .Y.body_regular} col-span-full text-center mt-8 mb-4 md:hidden`,
                        children: k.techFinVsFinTech.finTechBody
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_PageAbout_PageAbout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4056);
/* harmony import */ var apidata_about_us_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);
/* harmony import */ var apidata_about_us_leaderships_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7526);
/* harmony import */ var src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageAbout_PageAbout__WEBPACK_IMPORTED_MODULE_1__]);
src_components_PageAbout_PageAbout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/about-us`);
    const data = await res.json();
    return data;
};
const fetchLeadershipData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/about-us-leaderships`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, leadershipData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    return {
        heroBanner: {
            description: g("about_us_description") !== null ? g("about_us_description") : "",
            image: "/images/about/banner.jpg",
            mobileImage: "/images/about/mobile-banner.jpg"
        },
        mission: {
            subtitle1: g("vision_mission_line_1"),
            subtitle2: g("vision_mission_line_2")
        },
        culture: {
            subtitle1: g("culture_value_description"),
            sectionTitle: g("culture_value_subtitle"),
            // prettier-ignore
            valueList: pageData.data.attributes.culture_value_values.map((item)=>({
                    title: item[`value_${locale}`],
                    description: item[`description_${locale}`]
                }))
        },
        leadership: {
            title: "Leadership",
            // prettier-ignore
            leaderList: leadershipData.data.sort((a, b)=>a.attributes.priority - b.attributes.priority)
        },
        techFin: {
            subtitle: g("techfin_title"),
            section1Title: g("techfin_subtitle_1"),
            section1Body: g("techfin_content_1"),
            section2Title: g("techfin_subtitle_2"),
            section2Body: g("techfin_content_2")
        },
        ecosystem: {
            subtitle: g("our_ecosystem_description"),
            itemList: [
                {
                    title: g("our_ecosystem_1"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                },
                {
                    title: g("our_ecosystem_2"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                },
                {
                    title: g("our_ecosystem_3"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                },
                {
                    title: g("our_ecosystem_4"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                },
                {
                    title: g("our_ecosystem_5"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                },
                {
                    title: g("our_ecosystem_6"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                },
                {
                    title: g("our_ecosystem_7"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                },
                {
                    title: g("our_ecosystem_8"),
                    Component: src_components_PageAbout_images_eco_icon1_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                }
            ]
        },
        techFinVsFinTech: {
            subtitle: g("techfin_vs_fintech_description"),
            techFinTitle: g("techfin_vs_fintech_1_title"),
            techFinBody: g("techfin_vs_fintech_1_content"),
            finTechTitle: g("techfin_vs_fintech_2_title"),
            finTechBody: g("techfin_vs_fintech_2_content")
        }
    };
};
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? apidata_about_us_json__WEBPACK_IMPORTED_MODULE_2__ : await fetchCmsData();
    const leadershipData = useLocalCms ? apidata_about_us_leaderships_json__WEBPACK_IMPORTED_MODULE_3__ : await fetchLeadershipData();
    return {
        props: {
            k: massageData(pageData, leadershipData, locale),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_components_PageAbout_PageAbout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8722:
/***/ (() => {



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

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 7526:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":[{"id":2,"attributes":{"name_en":"Mr. Eddie Lau","name_tc":"劉富榮先生","name_sc":"刘富荣先生 ","title_en":"Chief Executive Officer","title_tc":"行政總裁","title_sc":"行政总裁","createdAt":"2022-11-23T10:03:13.207Z","updatedAt":"2022-11-24T09:09:39.026Z","publishedAt":"2022-11-23T10:03:13.806Z","priority":2,"profile_image":{"data":{"id":10,"attributes":{"name":"Leadership - Eddie.jpg","alternativeText":"Leadership - Eddie.jpg","caption":"Leadership - Eddie.jpg","width":5333,"height":3558,"formats":{"large":{"ext":".jpg","url":"https://dhrhnojxde2hk.cloudfront.net/large_Leadership_Eddie_045c70d752.jpg","hash":"large_Leadership_Eddie_045c70d752","mime":"image/jpeg","name":"large_Leadership - Eddie.jpg","path":null,"size":40.06,"width":1000,"height":667},"small":{"ext":".jpg","url":"https://dhrhnojxde2hk.cloudfront.net/small_Leadership_Eddie_045c70d752.jpg","hash":"small_Leadership_Eddie_045c70d752","mime":"image/jpeg","name":"small_Leadership - Eddie.jpg","path":null,"size":12.99,"width":500,"height":333},"medium":{"ext":".jpg","url":"https://dhrhnojxde2hk.cloudfront.net/medium_Leadership_Eddie_045c70d752.jpg","hash":"medium_Leadership_Eddie_045c70d752","mime":"image/jpeg","name":"medium_Leadership - Eddie.jpg","path":null,"size":25.24,"width":750,"height":500},"thumbnail":{"ext":".jpg","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_Leadership_Eddie_045c70d752.jpg","hash":"thumbnail_Leadership_Eddie_045c70d752","mime":"image/jpeg","name":"thumbnail_Leadership - Eddie.jpg","path":null,"size":4.25,"width":234,"height":156}},"hash":"Leadership_Eddie_045c70d752","ext":".jpg","mime":"image/jpeg","size":2310.6,"url":"https://dhrhnojxde2hk.cloudfront.net/Leadership_Eddie_045c70d752.jpg","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T10:02:03.380Z","updatedAt":"2022-11-29T10:22:28.538Z"}}}}},{"id":3,"attributes":{"name_en":"Mr. Adrian Cheng","name_tc":"鄭志剛博士J","name_sc":"郑志刚博士JP","title_en":"Chairman","title_tc":"董事會主席","title_sc":"董事会主席","createdAt":"2022-11-23T10:07:45.636Z","updatedAt":"2022-11-24T09:09:33.113Z","publishedAt":"2022-11-23T10:07:46.197Z","priority":1,"profile_image":{"data":{"id":11,"attributes":{"name":"Screenshot 2022-11-23 at 6.07.23 PM.png","alternativeText":"Screenshot 2022-11-23 at 6.07.23 PM.png","caption":"Screenshot 2022-11-23 at 6.07.23 PM.png","width":469,"height":604,"formats":{"small":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/small_Screenshot_2022_11_23_at_6_07_23_PM_34d61d466b.png","hash":"small_Screenshot_2022_11_23_at_6_07_23_PM_34d61d466b","mime":"image/png","name":"small_Screenshot 2022-11-23 at 6.07.23 PM.png","path":null,"size":489.32,"width":388,"height":500},"thumbnail":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_Screenshot_2022_11_23_at_6_07_23_PM_34d61d466b.png","hash":"thumbnail_Screenshot_2022_11_23_at_6_07_23_PM_34d61d466b","mime":"image/png","name":"thumbnail_Screenshot 2022-11-23 at 6.07.23 PM.png","path":null,"size":54.6,"width":121,"height":156}},"hash":"Screenshot_2022_11_23_at_6_07_23_PM_34d61d466b","ext":".png","mime":"image/png","size":492.18,"url":"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_11_23_at_6_07_23_PM_34d61d466b.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T10:07:42.662Z","updatedAt":"2022-11-23T10:07:42.662Z"}}}}},{"id":4,"attributes":{"name_en":"Ms. Pamela Yeung","name_tc":"楊雪芬女士","name_sc":"杨雪芬女士","title_en":"Chief Finance Officer / Head of Global Markets","title_tc":"首席財務官 / 裕承科金環球市場有限公司負責人","title_sc":"首席财务官 / 裕承科金环球市场有限公司负责人","createdAt":"2022-11-23T10:11:15.918Z","updatedAt":"2022-11-24T09:09:43.588Z","publishedAt":"2022-11-23T10:11:32.192Z","priority":3,"profile_image":{"data":{"id":2,"attributes":{"name":"17C23A77-02DD-472A-9F8B-2877B41A6C34_4_5005_c.jpeg","alternativeText":"17C23A77-02DD-472A-9F8B-2877B41A6C34_4_5005_c.jpeg","caption":"17C23A77-02DD-472A-9F8B-2877B41A6C34_4_5005_c.jpeg","width":160,"height":160,"formats":{"thumbnail":{"ext":".jpeg","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_17_C23_A77_02_DD_472_A_9_F8_B_2877_B41_A6_C34_4_5005_c_ae79fd1da2.jpeg","hash":"thumbnail_17_C23_A77_02_DD_472_A_9_F8_B_2877_B41_A6_C34_4_5005_c_ae79fd1da2","mime":"image/jpeg","name":"thumbnail_17C23A77-02DD-472A-9F8B-2877B41A6C34_4_5005_c.jpeg","path":null,"size":3.51,"width":156,"height":156}},"hash":"17_C23_A77_02_DD_472_A_9_F8_B_2877_B41_A6_C34_4_5005_c_ae79fd1da2","ext":".jpeg","mime":"image/jpeg","size":7.28,"url":"https://dhrhnojxde2hk.cloudfront.net/17_C23_A77_02_DD_472_A_9_F8_B_2877_B41_A6_C34_4_5005_c_ae79fd1da2.jpeg","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-11T08:22:59.304Z","updatedAt":"2022-11-22T10:23:23.641Z"}}}}},{"id":5,"attributes":{"name_en":"testing1","name_tc":"testing1","name_sc":"1","title_en":"testing1111","title_tc":"testing1111","title_sc":"testing1111","createdAt":"2022-12-02T04:56:55.610Z","updatedAt":"2022-12-02T04:57:44.622Z","publishedAt":"2022-12-02T04:57:44.619Z","priority":4,"profile_image":{"data":{"id":42,"attributes":{"name":"Screenshot 2022-12-02 at 11.55.35 AM.png","alternativeText":"Screenshot 2022-12-02 at 11.55.35 AM.png","caption":"Screenshot 2022-12-02 at 11.55.35 AM.png","width":286,"height":195,"formats":{"thumbnail":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_Screenshot_2022_12_02_at_11_55_35_AM_9eb634bef7.png","hash":"thumbnail_Screenshot_2022_12_02_at_11_55_35_AM_9eb634bef7","mime":"image/png","name":"thumbnail_Screenshot 2022-12-02 at 11.55.35 AM.png","path":null,"size":103.92,"width":229,"height":156}},"hash":"Screenshot_2022_12_02_at_11_55_35_AM_9eb634bef7","ext":".png","mime":"image/png","size":103.08,"url":"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_12_02_at_11_55_35_AM_9eb634bef7.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-12-02T03:55:47.357Z","updatedAt":"2022-12-02T03:55:47.357Z"}}}}},{"id":6,"attributes":{"name_en":"testing2","name_tc":"testing2","name_sc":"testing2","title_en":"testing2222","title_tc":"testing2222","title_sc":"testing2222","createdAt":"2022-12-02T04:57:33.825Z","updatedAt":"2022-12-02T04:57:41.492Z","publishedAt":"2022-12-02T04:57:41.490Z","priority":5,"profile_image":{"data":{"id":40,"attributes":{"name":"Screenshot 2022-12-02 at 11.45.20 AM.png","alternativeText":"Screenshot 2022-12-02 at 11.45.20 AM.png","caption":"Screenshot 2022-12-02 at 11.45.20 AM.png","width":1625,"height":1028,"formats":{"large":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/large_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb.png","hash":"large_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb","mime":"image/png","name":"large_Screenshot 2022-12-02 at 11.45.20 AM.png","path":null,"size":1727.13,"width":1000,"height":633},"small":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/small_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb.png","hash":"small_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb","mime":"image/png","name":"small_Screenshot 2022-12-02 at 11.45.20 AM.png","path":null,"size":463.34,"width":500,"height":316},"medium":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/medium_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb.png","hash":"medium_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb","mime":"image/png","name":"medium_Screenshot 2022-12-02 at 11.45.20 AM.png","path":null,"size":1003,"width":750,"height":474},"thumbnail":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb.png","hash":"thumbnail_Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb","mime":"image/png","name":"thumbnail_Screenshot 2022-12-02 at 11.45.20 AM.png","path":null,"size":118.03,"width":245,"height":155}},"hash":"Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb","ext":".png","mime":"image/png","size":2511.49,"url":"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_12_02_at_11_45_20_AM_44d1d40dfb.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-12-02T03:46:18.949Z","updatedAt":"2022-12-02T04:57:26.628Z"}}}}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":5}}}');

/***/ }),

/***/ 4266:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"id":1,"attributes":{"about_us_description_en":"Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).","about_us_description_tc":"裕承科金有限公司（下稱「裕承科金」）（0279.HK）成立於2021年10月，是一家總部設於香港的綜合金融服務機構，致力於增強科技在金融領域的應用。我們的目標是建立下一代的金融服務，通過科技改變傳統金融業，打破傳統金融服務的壁壘，減少信息不對稱，降低門檻，提供無障礙、友好、知識驅動的客戶體驗。我們將積極創新區塊鏈基礎設施和應用，連接Web2和Web3，引導用戶以最合規、最安全的方式，通過一站式的混合金融服務進入Web3的世界。","about_us_description_sc":"裕承科金有限公司（下称“裕承科金”）（0279.HK）成立于2021年10月，是一家总部设于香港的综合金融服务机构，致力于增强科技在金融领域的应用。我们的目标是建立下一代的金融服务，通过科技改变传统金融业，打破传统金融服务的壁垒，减少信息不对称，降低门槛，提供无障碍、友好、知识驱动的客户体验。我们将积极创新区块链基础设施和应用，连接Web2和Web3，提供一站式“传统金融+虚拟金融”的混合型金融服务，引导用户以合规安全的方式，进入Web3的世界。","vision_mission_line_1_en":"Think Tech, Think People","vision_mission_line_1_tc":"以科技思維服務人","vision_mission_line_1_sc":"以科技思维服务人","vision_mission_line_2_en":"Break Barrier for Greatness","vision_mission_line_2_tc":"打破壁壘，成就輝煌","vision_mission_line_2_sc":"打破壁垒，成就辉煌","culture_value_description_en":"We believe that the best results will be produced by the best people working in the best culture. We wish to see these qualities in our people.","culture_value_description_tc":"我們相信優秀的人才在良好的工作環境中將會發揮最大的作用。我們希望在我們的員工身上看到以下品質：","culture_value_description_sc":"我们相信优秀的人才在良好的工作环境中将会发挥最大的作用。我们希望在我们的员工身上看到以下品质：","culture_value_subtitle_en":"Our Core Values","culture_value_subtitle_tc":"我們的價值觀","culture_value_subtitle_sc":"我们的价值观","techfin_title_en":"Technology-enabled Finance Solutions","techfin_title_tc":"科技驅動的金融技術解決方案","techfin_title_sc":"科技驱动的金融技术解决方案","techfin_subtitle_1_en":"Technology-driven Change","techfin_subtitle_1_tc":"科技驅動改變","techfin_subtitle_1_sc":"科技驱动改变","techfin_content_1_en":"We believe that technology is the key to building a happier and more fulfilling future for all. As technology has continually transformed how we live and do business, it is expected that technology-driven change in the financial services sector will be the next wave. And we aim to be at the forefront of this change. ","techfin_content_1_tc":"我們相信科技能夠使人們的未來更快樂充實。隨着技術的進步，我們的生活和工作方式不斷發生改變。我們預計科技驅動的金融服務領域將將成為下一個浪潮，而我們立志於站在這場變革的最前沿。","techfin_content_1_sc":"我们相信科技能够使人们的未来更快乐充实。随着技术的进步，我们的生活和工作方式不断发生改变。我们预计科技驱动的金融服务领域将将成为下一个浪潮，而我们立志于站在这场变革的最前沿。","techfin_subtitle_2_en":"Transform Traditional Finance","techfin_subtitle_2_tc":"改革傳統金融","techfin_subtitle_2_sc":"改革传统金融","techfin_content_2_en":"We use technology to transform the traditional financial industry and expand into new services, products and experiences. By placing technology at the heart of everything, we will consistently change, disrupt, challenge and innovate the financial services industry. In the process, we will deliver richer, more creative, more immersive and more valuable client experiences.","techfin_content_2_tc":"我們使用科技改變傳統金融行業，擴展新的服務、產品和體驗，不斷顛覆、挑戰和創新金融服務。在這個過程中，我們致力於提供更豐富、更有創意、更沉浸式和更有價值的客戶體驗。","techfin_content_2_sc":"我们使用科技改变传统金融行业，扩展新的服务、产品和体验，不断颠覆、挑战和创新金融服务。在这个过程中，我们致力于提供更丰富、更有创意、更沉浸式和更有价值的客户体验。","techfin_vs_fintech_description_en":"Both TechFin and FinTech companies contribute to the financial industry by providing innovative solutions. The difference is mainly in the concept they do business.","techfin_vs_fintech_description_tc":"科技金融和金融科技公司都通過科技為金融業提供創新的解決方案，主要區別在於他們商業理念。","techfin_vs_fintech_description_sc":"科技金融和金融科技公司都通过科技为金融业提供创新的解决方案，主要区别在于他们商业理念。","techfin_vs_fintech_1_title_en":"TechFin","techfin_vs_fintech_1_title_tc":"科技金融","techfin_vs_fintech_1_title_sc":"科技金融","techfin_vs_fintech_1_content_en":"TechFin firms launch new ways to deliver financial services and solutions by thinking like a technology company.","techfin_vs_fintech_1_content_tc":"科技金融則是踏入金融行業的科技公司，通過科技改變行業內的用戶行為。科技金融公司透過科技思維以創新的方式提供金融服務和解決方案。","techfin_vs_fintech_1_content_sc":"科技金融则是踏入金融行业的科技公司，通过科技改变行业内的用户行为。科技金融公司透过科技思维以创新的方式提供金融服务和解决方案。","techfin_vs_fintech_2_title_en":"FinTech","techfin_vs_fintech_2_title_tc":"金融科技","techfin_vs_fintech_2_title_sc":"金融科技","techfin_vs_fintech_2_content_en":"FinTech is where the finance industry starts using technology to offer a better customer experience, while TechFin is where the technology companies enter the finance sector to change how users interact with the industry.","techfin_vs_fintech_2_content_tc":"金融科技公司本質上是金融公司，它們採用新興科技為客戶帶來更好的體驗。","techfin_vs_fintech_2_content_sc":"金融科技公司本质上是金融公司，它们采用新兴科技为客户带来更好的体验。","createdAt":"2022-11-22T07:04:08.224Z","updatedAt":"2022-11-23T07:56:21.684Z","publishedAt":"2022-11-23T07:56:21.673Z","our_ecosystem_1_en":"Technology / Internet Companies","our_ecosystem_1_tc":"科技 / 互聯網公司","our_ecosystem_1_sc":"科技 / 互联网公司","our_ecosystem_2_en":"Organizations Led by ARTA ","our_ecosystem_2_tc":"裕承科金合作組織","our_ecosystem_2_sc":"裕承科金合作组织","our_ecosystem_3_en":"Banks Based in HK","our_ecosystem_3_tc":"香港銀行業","our_ecosystem_3_sc":"香港银行业","our_ecosystem_4_en":"HK Tycoons / Blue Chip Enterprises","our_ecosystem_4_tc":"香港商業巨頭 / 藍籌企業","our_ecosystem_4_sc":"香港商业巨头 / 蓝筹企业","our_ecosystem_5_en":"Education / Professional Organizations","our_ecosystem_5_tc":"教育 / 專業組織","our_ecosystem_5_sc":"教育 / 专业组织","our_ecosystem_6_en":"Regional Banks","our_ecosystem_6_tc":"區域銀行","our_ecosystem_6_sc":"区域银行","our_ecosystem_7_en":"FinTech Companies","our_ecosystem_7_tc":"金融科技公司","our_ecosystem_7_sc":"金融科技公司","our_ecosystem_8_en":"Financial / Investment Platforms","our_ecosystem_8_tc":"金融/投資平台","our_ecosystem_8_sc":"金融 / 投资平台","culture_value_values":[{"id":1,"value_en":"Entrepreneurial mindset","value_tc":"企業家思維","value_sc":"企业家思维","description_en":"We encourage our staff to be decisive and proactive in overcoming challenges, learning new things and striving for success. ","description_tc":"我們鼓勵員工勇於克服挑戰，積極學習新事物，不斷追求卓越","description_sc":"我们鼓励员工勇于克服挑战，积极学习新事物，不断追求卓越"},{"id":2,"value_en":"Compassion","value_tc":"富有同理心","value_sc":"富有同理心","description_en":"To show compassion, we consider how clients feel, their current situation, what they need, and how to help fix the problem.","description_tc":"我們將設身處地地考慮客戶感受，了解他們的情況與需求，並努力協助他們解決問題","description_sc":"我们将设身处地地考虑客户感受，了解他们的情况与需求，并努力协助他们解决问题"},{"id":3,"value_en":"Creating Shared Value","value_tc":"創造共享價值","value_sc":"创造共享价值","description_en":"We would like to connect social progress with our businesses and create shared values with society. ","description_tc":"我們希望將我們的業務與社會發展相聯繫，一起創造共享價值","description_sc":"我们希望将我们的业务与社会发展相联系，一起创造共享价值"},{"id":4,"value_en":"Embracing Diversity","value_tc":"擁抱多元化","value_sc":"拥抱多元化","description_en":"We believe diversity fosters creativity by bringing together people from different backgrounds, showcasing a variety of perspectives.","description_tc":"我們相信多元化的環境能促進人們的創造力，不同背景的人才將帶來各不相同的視角","description_sc":"我们相信多元化的环境能促进人们的创造力，不同背景的人才将带来各不相同的视角"},{"id":5,"value_en":"Integrity & Trust","value_tc":"誠實與信任","value_sc":"诚实与信任","description_en":"We believe there is no room for doubt or suspicion when there is integrity and trust, which leads to simplicity and effectiveness.","description_tc":"我們相信誠實與信任可以消除相互之間的猜疑，由此一切都將變得簡單有效","description_sc":"我们相信诚实与信任可以消除相互之间的猜疑，由此一切都将变得简单有效"}]}},"meta":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,7607,3137], () => (__webpack_exec__(6613)));
module.exports = __webpack_exports__;

})();