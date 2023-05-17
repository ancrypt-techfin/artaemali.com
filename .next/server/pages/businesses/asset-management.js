"use strict";
(() => {
var exports = {};
exports.id = 2794;
exports.ids = [2794];
exports.modules = {

/***/ 2589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2001);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(887);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1966);
/* harmony import */ var _BusinessPageModules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5098);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BusinessPageModules__WEBPACK_IMPORTED_MODULE_5__]);
_BusinessPageModules__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const PageAssetManagementPage = ({ k , locale  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_3__/* .Seo */ .p, {
                title: `${t("page_title.asset_management")} | Arta TechFin`,
                description: t("page_description.asset_management"),
                keywords: t("page_keywords.asset_management"),
                ga: "OB - Asset Management"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroBanner__WEBPACK_IMPORTED_MODULE_4__/* .HeroBanner */ .y, {
                        title: t("page_title.asset_management"),
                        description: k.heroBanner.description,
                        image: k.heroBanner.image,
                        mobileImage: k.heroBanner.mobileImage,
                        label: t("page_title.our_businesses")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BusinessPageModules__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        locale: locale,
                        components: k.components
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "brown"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageAssetManagementPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6553:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_PageBusinesses_PageAssetManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2589);
/* harmony import */ var apidata_our_business_asset_management_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9982);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageBusinesses_PageAssetManagement__WEBPACK_IMPORTED_MODULE_1__]);
src_components_PageBusinesses_PageAssetManagement__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/our-business-asset-management`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    return {
        heroBanner: {
            description: g("description") !== null ? g("description") : "",
            image: "/images/our-businesses/banner.jpg",
            mobileImage: "/images/our-businesses/mobile-banner.jpg",
            label: "Our Businesses"
        },
        components: pageData.data?.attributes?.components || []
    };
};
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? apidata_our_business_asset_management_json__WEBPACK_IMPORTED_MODULE_2__ : await fetchCmsData();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_components_PageBusinesses_PageAssetManagement__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

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

/***/ 9982:
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"id":1,"attributes":{"description_en":"Our Asset Management division provides professional investment management, advisory, and securities brokerage services primarily to institutional clients and family offices. ","description_tc":"我們的資產管理業務主要為機構客戶和家庭辦公室提供專業的投資管理、顧問和證券經紀服務。","description_sc":"我们的资产管理业务主要为机构客户和家庭办公室提供专业的投资管理、顾问和证券经纪服务。","createdAt":"2022-11-23T03:49:10.833Z","updatedAt":"2022-11-26T16:42:34.122Z","publishedAt":"2022-11-23T03:49:13.862Z","components":[{"id":7,"__component":"our-business.component-1","title_en":"Introduction","title_tc":"Introduction","title_sc":"Introduction","content_en":"<p>Our Asset Management division provides professional investment management, advisory, and securities brokerage services primarily to institutional clients and family offices, allowing them to tap the flexibility and diversity of investment products and asset classes available in Hong Kong and international markets. Our goal is to generate optimal risk-adjusted investment returns, offer balanced asset and liability management (especially for insurance companies) and provide investment solutions customized for our valued clients’ unique needs and risk appetite.</p>","content_tc":"<p>Our Asset Management division provides professional investment management, advisory, and securities brokerage services primarily to institutional clients and family offices, allowing them to tap the flexibility and diversity of investment products and asset classes available in Hong Kong and international markets. Our goal is to generate optimal risk-adjusted investment returns, offer balanced asset and liability management (especially for insurance companies) and provide investment solutions customized for our valued clients’ unique needs and risk appetite.</p>","content_sc":"<p>Our Asset Management division provides professional investment management, advisory, and securities brokerage services primarily to institutional clients and family offices, allowing them to tap the flexibility and diversity of investment products and asset classes available in Hong Kong and international markets. Our goal is to generate optimal risk-adjusted investment returns, offer balanced asset and liability management (especially for insurance companies) and provide investment solutions customized for our valued clients’ unique needs and risk appetite.</p>"},{"id":1,"__component":"our-business.component-3","title_en":"What is Asset Management","title_tc":"什麼是資產管理","title_sc":"什么是资产管理","subtitle_en":"Title","subtitle_tc":"Title","subtitle_sc":"Title","content_en":"#### Investment Advisor & Manager:\\nWe provide tailor-made investment advisory and management services. Our extensive investment experience, exclusive access to certain investment opportunities and global tech-driven and ESG-compliant mindset enable us to identify subtle market trends and intricate investment opportunities in today\'s fast-moving markets.\\n\\n-----\\n\\n#### Fund of Funds (FoF):\\nWe set up co-branded FoF products and services in Hong Kong for local and cross-border businesses. The FoF methodology and system are mutually developed and endorsed by global financial institutions and us, both aiming for an international gold standard.\\n\\n","content_tc":"#### 投資顧問管理\\n我們提供定製化的投資顧問和管理服務。我們具有豐富的投資經驗、市場機會的獨家信息、科技驅動的思維方式、以及符合ESG標準的投資理念，這些使得我們能夠在當今快速發展的市場中精準地發現市場趨勢和投資機會。\\n\\n-----\\n\\n#### 組合型基金 \\n我們為香港本地及跨境企業提供聯名的組合型基金產品服務，組合方法及系統是由我們與其他全球金融機構共同開發認可，皆以國際最高標準為目標。","content_sc":"#### 投资顾问管理\\n我们提供定制化的投资顾问和管理服务。我们具有丰富的投资经验、市场机会的独家信息、科技驱动的思维方式、以及符合ESG标准的投资理念，这些使得我们能够在当今快速发展的市场中精准地发现市场趋势和投资机会。\\n\\n-----\\n\\n#### 组合型基金 \\n我们为香港本地及跨境企业提供联名的組合型基金产品服务，组合方法及系统是由我们与其他全球金融机构共同开发认可，皆以国际最高标准为目标。"}]}},"meta":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,7607,3137,5098], () => (__webpack_exec__(6553)));
module.exports = __webpack_exports__;

})();