"use strict";
(() => {
var exports = {};
exports.id = 5022;
exports.ids = [5022];
exports.modules = {

/***/ 840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5331);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2001);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(887);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1966);
/* harmony import */ var _BusinessPageModules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5098);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BusinessPageModules__WEBPACK_IMPORTED_MODULE_6__]);
_BusinessPageModules__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const PageInvestmentBanking = ({ k , locale  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: `${t("page_title.investment_banking")} | Arta TechFin`,
                description: t("page_description.investment_banking"),
                keywords: t("page_keywords.investment_banking"),
                ga: "OB - Investment Banking"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroBanner__WEBPACK_IMPORTED_MODULE_5__/* .HeroBanner */ .y, {
                        title: t("page_title.investment_banking"),
                        description: k.heroBanner.description,
                        image: k.heroBanner.image,
                        mobileImage: k.heroBanner.mobileImage,
                        label: t("page_title.our_businesses")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BusinessPageModules__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        locale: locale,
                        components: k.components
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                textColor: "brown"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageInvestmentBanking);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_PageBusinesses_PageInvestmentBanking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(840);
/* harmony import */ var apidata_our_business_investment_banking_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5883);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageBusinesses_PageInvestmentBanking__WEBPACK_IMPORTED_MODULE_1__]);
src_components_PageBusinesses_PageInvestmentBanking__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/our-business-investment-banking`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    return {
        heroBanner: {
            description: g("description") !== null ? g("description") : "",
            image: "/images/our-businesses/banner.jpg",
            mobileImage: "/images/our-businesses/mobile-banner.jpg"
        },
        components: pageData.data?.attributes?.components || []
    };
};
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? apidata_our_business_investment_banking_json__WEBPACK_IMPORTED_MODULE_2__ : await fetchCmsData();
    return {
        props: {
            k: massageData(pageData, locale),
            locale,
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_components_PageBusinesses_PageInvestmentBanking__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

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

/***/ }),

/***/ 5883:
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"id":1,"attributes":{"description_en":"Our Investment Banking division offers a broad range of products and services including advisory services related to mergers & acquisitions, restructuring, as well as debt and equity offerings.","description_tc":"我們的投資銀行業務提供併購、重組、債券/股票發行等方面的企業諮詢和承銷服務，主要服務家族企業、公司、機構和個人專業投資者。","description_sc":"我们的投资银行业务提供并购、重组、债券/股票发行等方面的企业咨询和承销服务，主要服务家族企业、公司、机构和个人专业投资者。","createdAt":"2022-11-23T03:48:40.928Z","updatedAt":"2022-11-23T08:07:23.145Z","publishedAt":"2022-11-23T03:48:41.999Z","components":[{"id":2,"__component":"our-business.component-3","title_en":"Our Investment Banking ","title_tc":"投資銀行業務","title_sc":"投资银行业务","subtitle_en":null,"subtitle_tc":null,"subtitle_sc":null,"content_en":"#### Mergers & Acquisitions: \\nWe support corporates and institutions in their strategic decision-making process. Our offerings include advice on acquisitions, corporate sales, mergers, spin-offs, restructuring, divestitures, joint ventures, privatizations and more.\\n \\n ----\\n \\n#### Equity Capital Market Solutions: \\nWe provide support in the origination of primary market transactions and manage the structuring, syndication, marketing and distribution of these transactions. We also assist clients with both pre-and post-transaction communications. Our offering ranges from the largest privatizations, initial public offerings and secondary placements to smaller public transactions, private placements and equity-related transactions.\\n \\n-----\\n\\n#### Debt Capital Market Solutions:\\nWe support our clients from plain vanilla financings to liability management advice by providing and implementing tailored solutions to their debt financing needs. Our capabilities span the spectrum of fixed income financing including investment grade and high yield bonds, loans, and securitized products.\\n","content_tc":"#### 併購\\n我們為企業和機構的戰略決策過程提供支持，並提供收購、公司銷售、兼并、分拆、重組、資產剝離、合資、私有化等方面的服務和建議。\\n \\n ------\\n \\n#### 股權資本市場解決方案\\n我們為一級市場交易的發行提供支持，並提供其結構化、銀團化、營銷和承銷等相關服務，同時協助客戶進行交易前和交易後的溝通。服務範圍涵蓋私有化、首次公開發行、二次配售、公開交易、私人配售、及股權相關交易等。\\n \\n -----\\n \\n#### 債券資本市場解決方案\\n我們為客戶提供從普通融資到負債管理建議等各方面支持，為他們的債務融資需求提供並實施定製化的解決方案。我們開展各類固定收益融資相關的業務，包括投資級債券、高收益債券、貸款、及證券化產品。\\n","content_sc":"#### 并购\\n我们为企业和机构的战略决策过程提供支持，并提供收购、公司销售、兼并、分拆、重组、资产剥离、合资、私有化等方面的服务和建议。\\n \\n -----\\n \\n#### 股权资本市场解决方案\\n我们为一级市场交易的发行提供支持，并提供其结构化、银团化、营销和承销等相关服务，同时协助客户进行交易前和交易后的沟通。服务范围涵盖私有化、首次公开发行、二次配售、公开交易、私人配售、及股权相关交易等。\\n \\n -----\\n \\n#### 债券资本市场解决方案\\n我们为客户提供从普通融资到负债管理建议等各方面支持，为他们的债务融资需求提供并实施定制化的解决方案。我们开展各类固定收益融资相关的业务，包括投资级债券、高收益债券、贷款、及证券化产品。\\n"}]}},"meta":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,7607,3137,5098], () => (__webpack_exec__(9846)));
module.exports = __webpack_exports__;

})();