"use strict";
(() => {
var exports = {};
exports.id = 9729;
exports.ids = [9729];
exports.modules = {

/***/ 9418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7188);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var utils_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6003);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_3__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PageCorporateInformation = ({ k  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const basicInformation = [
        {
            label: t("corporate_information.company_name"),
            value: k.ci_company_name
        },
        {
            label: t("corporate_information.sector"),
            value: k.ci_sector
        },
        {
            label: t("corporate_information.principal_place_of_business"),
            value: k.ci_principal_place
        },
        {
            label: t("corporate_information.registered_office"),
            value: k.ci_register_office
        },
        {
            label: t("corporate_information.website"),
            value: k.ci_web_address,
            isLink: true
        },
        {
            label: t("corporate_information.phone"),
            value: k.ci_phone_number
        },
        {
            label: t("corporate_information.fax"),
            value: k.ci_fax_number
        },
        {
            label: t("corporate_information.financial_year_end"),
            value: k.ci_financial_year_end
        }
    ];
    const boardOfDirectors = [
        {
            label: t("corporate_information.executive_directors"),
            value: k.ci_executive_directors
        },
        {
            label: t("corporate_information.non_executive_directors"),
            value: k.ci_non_executive_directors
        },
        {
            label: t("corporate_information.independent_non_executive_directors"),
            value: k.ci_independent_directors
        }
    ];
    const financeAndAdmin = [
        {
            label: t("corporate_information.company_secretary"),
            value: k.ci_company_secretory
        },
        {
            label: t("corporate_information.principal_bankers"),
            value: k.ci_principal_bankers
        },
        {
            label: t("corporate_information.auditors"),
            value: k.ci_auditors
        }
    ];
    const legalCounsels = [
        {
            label: "",
            value: k.ci_legal_counsels_1
        },
        {
            label: "",
            value: k.ci_legal_counsels_2
        }
    ];
    const shareInformation = [
        {
            label: t("corporate_information.hkex_stock_code"),
            value: k.ci_hkex_stock_code
        },
        {
            label: t("corporate_information.listing_date"),
            value: k.ci_listing_date,
            isDate: true
        },
        {
            label: t("corporate_information.share_registrar"),
            value: k.ci_share_register_transfer_office
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pt-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mb-12 grid sm:grid-cols-12 col-span-full gap-x-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-span-full lg:col-span-8 lg:col-start-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                        children: t("corporate_information.basic_information")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8",
                        children: basicInformation.map((j, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-full sm:col-span-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-base text-arta-sand-100",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `font-bold font-Neue`,
                                            children: j.label
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-breakspace font-Neue",
                                            children: j.isLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "underline",
                                                href: j.value,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: j.value
                                            }) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(j.value)
                                        })
                                    ]
                                })
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                        children: t("corporate_information.board_of_directors")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8",
                        children: boardOfDirectors.map((j, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-full sm:col-span-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-base text-arta-sand-100",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `font-bold font-Neue`,
                                            children: j.label
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-breakspace font-Neue",
                                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(j.value)
                                        })
                                    ]
                                })
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                        children: t("corporate_information.finance_and_admin")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8",
                        children: financeAndAdmin.map((j, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-full sm:col-span-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-base text-arta-sand-100",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `font-bold font-Neue`,
                                            children: j.label
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font-Neue",
                                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(j.value)
                                        })
                                    ]
                                })
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                        children: t("corporate_information.legal_counsels")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8",
                        children: legalCounsels.map((j, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-full sm:col-span-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-base text-arta-sand-100",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `font-bold font-Neue`,
                                            children: j.label
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-breakspace font-Neue",
                                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(j.value)
                                        })
                                    ]
                                })
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                        children: t("corporate_information.share_information")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 mb-8 grid grid-cols-12 gap-y-5 pb-10 sm:gap-y-8",
                        children: shareInformation.map((j, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-full sm:col-span-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-base text-arta-sand-100",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `font-bold font-Neue`,
                                            children: j.label
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-breakspace font-Neue",
                                            children: j.isDate ? (0,utils_date__WEBPACK_IMPORTED_MODULE_4__/* .dateFormat */ .v)(new Date(j.value)) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(j.value)
                                        })
                                    ]
                                })
                            }, i);
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageCorporateInformation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 510:
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
/* harmony import */ var src_components_PageInvestor_PageCorporateInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9418);
/* harmony import */ var apidata_investor_relation_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8133);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageInvestor_PageCorporateInformation__WEBPACK_IMPORTED_MODULE_3__]);
src_components_PageInvestor_PageCorporateInformation__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relation`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    return {
        heroBanner: {
            description: g("description") !== null ? g("description") : "",
            image: "/images/investor-relations/top-banner.jpg",
            mobileImage: "/images/investor-relations/mobile-top-banner.jpg",
            label: ""
        },
        ci_company_name: g("ci_company_name"),
        ci_sector: g("ci_sector"),
        ci_principal_place: g("ci_principal_place"),
        ci_register_office: g("ci_register_office"),
        ci_web_address: pageData.data.attributes["ci_web_address"],
        ci_phone_number: pageData.data.attributes["ci_phone_number"],
        ci_fax_number: pageData.data.attributes["ci_fax_number"],
        ci_financial_year_end: g("ci_financial_year_end"),
        ci_independent_directors: g("ci_independent_directors"),
        ci_company_secretory: g("ci_company_secretory"),
        ci_principal_bankers: g("ci_principal_bankers"),
        ci_auditors: g("ci_auditors"),
        ci_legal_counsels_1: g("ci_legal_counsels_1"),
        ci_legal_counsels_2: g("ci_legal_counsels_2"),
        ci_hkex_stock_code: pageData.data.attributes["ci_hkex_stock_code"],
        ci_listing_date: pageData.data.attributes["ci_listing_date"],
        ci_share_register_transfer_office: g("ci_share_register_transfer_office"),
        ci_executive_directors: g("ci_executive_directors"),
        ci_non_executive_directors: g("ci_non_executive_directors"),
        esg_governance_2: g("esg_governance_2")
    };
};
// Add get report here if seo is needed
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? apidata_investor_relation_json__WEBPACK_IMPORTED_MODULE_4__ : await fetchCmsData();
    return {
        props: {
            k: massageData(pageData, locale),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
const InvestorPage = (props)=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_PageInvestor_InvestorLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        k: props.k,
        tabType: src_components_PageInvestor_InvestorLayout__WEBPACK_IMPORTED_MODULE_2__/* .TABS.corporate_information */ .G.corporate_information,
        gaLog: true,
        seo: {
            title: `${t("page_title.investor_relations")} | Arta TechFin`,
            description: t("page_description.investor_relations"),
            keywords: t("page_keywords.investor_relations")
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_PageInvestor_PageCorporateInformation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            k: props.k
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestorPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ dateFormat)
});

;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./utils/date.ts


function dateFormat(date) {
    const { locale  } = (0,router_.useRouter)();
    if (locale === "en") return (0,external_date_fns_namespaceObject.format)(date, "MMM dd yyyy").toUpperCase();
    return (0,external_date_fns_namespaceObject.format)(date, "yyyy") + "年" + (0,external_date_fns_namespaceObject.format)(date, "MM") + "月" + (0,external_date_fns_namespaceObject.format)(date, "dd") + "日";
}



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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,9707,7436], () => (__webpack_exec__(510)));
module.exports = __webpack_exports__;

})();