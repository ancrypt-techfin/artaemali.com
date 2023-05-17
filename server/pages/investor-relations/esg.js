"use strict";
(() => {
var exports = {};
exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 7071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7188);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3183);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Svg_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(199);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_8__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__.ScrollToPlugin);
const PageEsg = ({ k , locale  })=>{
    const nav = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const [openNavMenu, setOpenNavMenu] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const sections = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("common");
    const goToSection = (index)=>()=>{
            setOpenNavMenu(false);
            const esgSections = document.querySelectorAll(".esg-section");
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(window, {
                duration: 0.7,
                scrollTo: {
                    y: esgSections[index],
                    offsetY: 130
                }
            });
        };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const esgSections = document.querySelectorAll(".esg-section");
        if (!esgSections.length) return;
        // gsap.to('.arta-gradient-border-inner', { rotate: 360, duration: 3, repeat: -1 })
        gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
            trigger: nav.current,
            start: "top center-=200px",
            endTrigger: sections.current,
            end: "bottom center",
            pin: true,
            pinSpacing: false,
            scrub: 0.5,
            anticipatePin: 1,
            refreshPriority: 1
        });
        esgSections.forEach((esgSection, index)=>{
            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({
                trigger: esgSection,
                start: "top top+=320",
                end: "bottom top+=320",
                onEnter: ()=>setActive(index),
                onEnterBack: ()=>setActive(index),
                onLeave: ()=>unsetActive(index),
                onLeaveBack: ()=>unsetActive(index)
            });
        });
        const navItems = nav.current?.childNodes;
        function setActive(index) {
            if (!navItems) return;
            const activeItem = navItems[index];
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(activeItem, {
                fontWeight: 800
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(activeItem.querySelector("svg"), {
                width: 24
            });
        }
        function unsetActive(index) {
            if (!navItems) return;
            const activeItem = navItems[index];
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(activeItem, {
                fontWeight: 400
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(activeItem.querySelector("svg"), {
                width: 0
            });
        }
        setActive(0);
    }, []);
    const navList = [
        t("investor_relations.environmental"),
        t("investor_relations.social"),
        t("investor_relations.governance")
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative grid grid-cols-12 gap-x-5 pt-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                ref: nav,
                className: "col-span-3 h-[140px] !translate-y-0 md:block hidden",
                children: navList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: `mb-6 flex cursor-pointer items-center text-black ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                        onClick: goToSection(index),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_6__/* .IconListItemArrow */ .Rc, {
                                className: "mr-2 w-0",
                                fill: "#593725"
                            }),
                            item
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-arta-sand-100 absolute lg:hidden top-0 -ml-6 w-[100vw]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white text-[1rem] px-6 py-3 cursor-pointer",
                        onClick: ()=>setOpenNavMenu(!openNavMenu),
                        children: t("investor_relations.environmental")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "absolute top-5 right-6 pointer-events-none",
                        width: "14",
                        height: "8",
                        viewBox: "0 0 14 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M0 2.05092e-08C0.174335 0.030466 0.36004 0.045699 0.557115 0.045699C0.769349 0.045699 0.955054 0.030466 1.11423 2.05092e-08L6.89204 6.67205L12.6143 0C12.728 0.030466 12.8531 0.045699 12.9895 0.045699C13.1335 0.045699 13.7045 0.030466 13.8182 2.05092e-08C12.1796 1.95179 6.89204 8 6.89204 8C6.89204 8 1.59358 1.90812 0 2.05092e-08Z",
                            fill: "white"
                        })
                    }),
                    openNavMenu && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-white h-auto w-full absolute top-12 bg-arta-sand-100 text-[1rem]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "px-6 py-3 cursor-pointer",
                                onClick: goToSection(1),
                                children: t("investor_relations.social")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "px-6 py-3 cursor-pointer",
                                onClick: goToSection(2),
                                children: t("investor_relations.governance")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:col-span-9 col-span-full",
                ref: sections,
                onClick: ()=>setOpenNavMenu(false),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "environmental",
                        className: "esg-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h3_style2 */ .Y.h3_style2}`,
                                children: t("investor_relations.environmental")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `module-etg-text-section ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                dangerouslySetInnerHTML: {
                                    __html: k.esg_environmental
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "social",
                        className: "esg-section md:pt-16 pt-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h3_style2 */ .Y.h3_style2}`,
                                children: t("investor_relations.social")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `module-etg-text-section ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                dangerouslySetInnerHTML: {
                                    __html: k.esg_social
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "Governance",
                        className: "esg-section md:pt-16 pt-12 mb-16 lg:mb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h3_style2 */ .Y.h3_style2}`,
                                children: t("investor_relations.governance")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `module-etg-text-section ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                dangerouslySetInnerHTML: {
                                    __html: k.esg_governance_1
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "arta-gradient-border relative mb-12 overflow-hidden font-Verah text-[1rem] leading-[1.5rem] tracking-wide",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "arta-gradient-border-inner"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "etg-outline relative z-20 flex flex-col lg:flex-row bg-arta-eggshell-100 md:py-12 py-10 md:px-[60px] pl-16 pr-12",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative mb-6 pb-6 flex-1 lg:mb-0 border-b border-arta-secondary lg:border-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "lg:arta-gradient-line-left absolute right-0 h-full"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "md:pr-6 pr-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: `pl-4 text-arta-secondary sm:text-2xl text-sm`,
                                                                children: t("investor_relations.esg_the_board")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: `pl-4 !text-arta-secondary leading-normal sm:text-xs text-[1.5em]`,
                                                                children: t("investor_relations.esg_the_board_subtitle")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "module-text-section",
                                                                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(t("investor_relations.esg_the_board_content"))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative lg:pl-6 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: `pl-4 text-arta-secondary  sm:text-2xl text-sm`,
                                                                children: t("investor_relations.esg_head_of_departments")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: `pl-4 !text-arta-secondary sm:text-xs text-[1.5em] leading-normal`,
                                                                children: t("investor_relations.esg_head_of_departments_subtitle")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "module-text-section",
                                                                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(t("investor_relations.esg_head_of_departments_content"))
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "md:mt-11 mt-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: `pl-4 text-arta-secondary  sm:text-2xl text-sm`,
                                                                children: t("investor_relations.esg_unit")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: `pl-4 !text-arta-secondary sm:text-xs text-[1.5em] leading-normal`,
                                                                children: t("investor_relations.esg_unit_subtitle")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "module-text-section",
                                                                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(t("investor_relations.esg_unit_content"))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " absolute top-0 left-1 lg:scale-100 scale-80",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: " absolute text-lg top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 rotate-90 text-center",
                                                        children: t("investor_relations.esg_top_down")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_6__/* .TopDownArrow */ .I1, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " absolute bottom-0 lg:scale-100 scale-80 right-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: " absolute text-lg top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 -rotate-90 text-center",
                                                        children: t("investor_relations.esg_bottom_up")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_6__/* .DownTopArrow */ .Qn, {})
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `module-etg-text-section ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                dangerouslySetInnerHTML: {
                                    __html: k.esg_governance_2
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageEsg);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_PageInvestor_InvestorLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4013);
/* harmony import */ var src_components_PageInvestor_PageEsg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7071);
/* harmony import */ var apidata_investor_relation_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8133);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageInvestor_PageEsg__WEBPACK_IMPORTED_MODULE_3__]);
src_components_PageInvestor_PageEsg__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relation`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    return {
        heroBanner: {
            title: "Investor Relation",
            description: g("description") !== null ? g("description") : "",
            image: "/images/investor-relations/top-banner.jpg",
            mobileImage: "/images/investor-relations/mobile-top-banner.jpg",
            label: ""
        },
        esg_environmental: g("esg_environmental"),
        esg_social: g("esg_social"),
        esg_governance_1: g("esg_governance_1"),
        esg_governance_2: g("esg_governance_2")
    };
};
const InvestorPage = (props)=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_PageInvestor_InvestorLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        k: props.k,
        tabType: src_components_PageInvestor_InvestorLayout__WEBPACK_IMPORTED_MODULE_2__/* .TABS.esg */ .G.esg,
        gaLog: true,
        seo: {
            title: `${t("page_title.investor_relations")} | Arta TechFin`,
            description: t("page_description.investor_relations"),
            keywords: t("page_keywords.investor_relations")
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_PageInvestor_PageEsg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            k: props.k,
            locale: props.locale
        })
    });
};
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? apidata_investor_relation_json__WEBPACK_IMPORTED_MODULE_4__ : await fetchCmsData();
    return {
        props: {
            k: massageData(pageData, locale),
            locale,
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestorPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 3183:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,9707,7436], () => (__webpack_exec__(8766)));
module.exports = __webpack_exports__;

})();