"use strict";
(() => {
var exports = {};
exports.id = 9772;
exports.ids = [9772];
exports.modules = {

/***/ 8650:
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








const PageEsgAdvisory = ({ k , locale  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: `${t("page_title.esg_advisory")} | Arta TechFin`,
                description: t("page_description.esg_advisory"),
                keywords: t("page_keywords.esg_advisory"),
                ga: "OB - ESG Advisory"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroBanner__WEBPACK_IMPORTED_MODULE_5__/* .HeroBanner */ .y, {
                        title: t("page_title.esg_advisory"),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageEsgAdvisory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_PageBusinesses_PageEsgAdvisory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8650);
/* harmony import */ var apidata_our_business_web3_media_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2999);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageBusinesses_PageEsgAdvisory__WEBPACK_IMPORTED_MODULE_1__]);
src_components_PageBusinesses_PageEsgAdvisory__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/our-business-esg-advisory`);
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
    const pageData = useLocalCms ? apidata_our_business_web3_media_json__WEBPACK_IMPORTED_MODULE_2__ : await fetchCmsData();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_components_PageBusinesses_PageEsgAdvisory__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

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

/***/ 2999:
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"id":1,"attributes":{"description_en":null,"description_tc":null,"description_sc":null,"createdAt":"2022-11-23T08:31:53.512Z","updatedAt":"2022-11-23T18:18:36.238Z","publishedAt":"2022-11-23T08:31:56.762Z","components":[{"id":6,"__component":"our-business.component-1","title_en":"About Artazine","title_tc":"關於Artazine","title_sc":"关于Artazine","content_en":"<p>Artazine is an online Editorial destination dedicated to bridging the gap between art, culture and Web3. Our exclusive, multiplatform stories and unique insights aim to explore the ways crypto, gaming, NFTs and the latest metaverse projects are empowering a global community of emerging creators. Standing at the intersection of art and technology, we are your authoritative guide to the future of cultural-commerce.</p><ul><li>Committed to curating the most relevant cultural news and features, finding the signal amongst the noise.&nbsp;</li><li>Exclusive interviews with industry leaders, artists, collectors and creatives, both traditional and modern.&nbsp;</li><li>Educational content that breaks down barriers, spreads knowledge and prepares readers for the future.&nbsp;</li><li>Cutting-edge NFT and crypto market analysis to demystify the market and promote mainstream adoption.&nbsp;</li><li>Connecting a global community of discerning individuals across multiple mediums, offering readers seamless access to our interactive, curated content.&nbsp;</li><li>All-around Web3 insights, educational tools and exclusive knowledge to empower the next generation.</li></ul>","content_tc":"<p><a href=\\"https://www.artazine.com/\\">Artazine</a>是一個線上媒體平台，致力於架起藝術、文化和Web3之間的橋樑。我們在多個平台發佈獨家文章和獨特見解，旨在探索加密貨幣、遊戲、NFT和最新的元宇宙項目如何賦予全球新興創作者力量。站在藝術和科技的交叉點上，我們將是您未來文化商業的權威指南。</p>","content_sc":"<p><a href=\\"https://www.artazine.com/\\">Artazine</a>是一个线上媒体平台，致力于架起艺术、文化和Web3之间的桥梁。我们在多个平台发布独家文章和独特见解，旨在探索加密货币、游戏、NFT和最新的元宇宙项目如何赋予全球新兴创作者力量。站在艺术和科技的交叉点上，我们将是您未来文化商业的权威指南。</p>"}]}},"meta":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,7607,3137,5098], () => (__webpack_exec__(6916)));
module.exports = __webpack_exports__;

})();