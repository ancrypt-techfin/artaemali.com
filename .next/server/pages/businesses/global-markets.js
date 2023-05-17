"use strict";
(() => {
var exports = {};
exports.id = 1313;
exports.ids = [1313];
exports.modules = {

/***/ 9125:
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








const cms = {
    heroBanner: {
        title: "Securities Banking",
        description: `We offer trading services on an all-in-one platform on various products as well as comprehensive risk management.`,
        image: "/images/asset-management/banner.png",
        mobileImage: "/images/asset-management/mobile-banner.png",
        label: "Our Businesses"
    },
    section1: {
        title: "Trading",
        body: `Our Trading division provides trading platform services supporting different products which include stocks, futures, options, fixed income, funds, CFD, swap, structured products and virtual assets. Our clients include financial institutions, family offices, high-net-worth investors and retail investors. We also manage credit and market risk of clients’ and house positions.`,
        bgImage: "/images/asset-management/bg-introduction.png"
    },
    section2: {
        iconList: [
            {
                icon: "/images/asset-management/icons/1.png",
                title: "Agency Services",
                body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`
            },
            {
                icon: "/images/asset-management/icons/2.png",
                title: "Trading Services",
                body: `We provide flow wealth management products, including ELN, Accumulator/Decummulator and Range Accrual on single and baskets of various asset classes on different markets.  We will tailor-make products to satisfy the needs of sophisticated investors, including institutions and corporates. We also source liquidity and facilitate clients on fixed incomes and virtual assets trading.`
            },
            {
                icon: "/images/asset-management/icons/3.png",
                title: "Risk Management",
                body: `We are the first line of defence in managing credit and market risk exposure. We proactively manage our house positions and hedge dynamically to secure our sales margin and maintain our risk exposure within the limit.`
            },
            {
                icon: "/images/asset-management/icons/1.png",
                title: "Agency Services",
                body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`
            },
            {
                icon: "/images/asset-management/icons/1.png",
                title: "Agency Services",
                body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`
            },
            {
                icon: "/images/asset-management/icons/1.png",
                title: "Agency Services",
                body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`
            }
        ]
    },
    section3: {
        title: "Prime Services",
        body: `Our Prime Services division offers fund managers, family offices and institutional asset managers tailored solutions, including trading & execution services, portfolio financing, capital introduction and more. Backed by innovative technology, experienced client services team, and comprehensive risk management, we aspire to provide clients with an all-in-one platform and a new experience in traditional prime finance.`,
        bgImage: "/images/asset-management/bg-introduction.png"
    },
    section4: {
        headerPosition: "right",
        header: "Prime Services",
        title: "Prime services title",
        list: [
            {
                title: "Trading & Execution Services",
                body: `We provide trading services & facilities on a wide range of investment products, including global equities, fixed income, swaps/CFDs, F&O, FX, structured products & virtual assets. We offer clients the flexibility to place orders through our application, connecting to their OEMS, along with supporting bespoke orders reinforced by our 24/5 trading team and best execution practice. `
            },
            {
                title: "Portfolio Financing",
                body: `We provide our clients with short-locate and flexible financing solutions, supported by an easy-to-use platform, along with cross-assets margin capabilities. Our SBL & Risk team prides to manage inventories and our financing desk efficiently to enhance our clients’ capabilities to generate additional alpha in their portfolios.`
            },
            {
                title: "Capital Introduction",
                body: `With our extensive ecosystem and pedigree of family offices and investor networks, we invite our clients to leverage our network and events to present their products to potential investors. We leverage blockchain technology for our clients to digitalize fund data and showcase performances, strategies and market views to our community and potential investors in a controlled and diligent environment. `
            }
        ]
    }
};
const PageSecurities = ({ k , locale  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: `${t("page_title.global_markets")} | Arta TechFin`,
                description: t("page_description.global_markets"),
                keywords: t("page_keywords.global_markets"),
                ga: "OB - Securities Brokerage"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroBanner__WEBPACK_IMPORTED_MODULE_5__/* .HeroBanner */ .y, {
                        title: t("page_title.global_markets"),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSecurities);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_PageBusinesses_PageSecurities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9125);
/* harmony import */ var apidata_our_business_securities_brokerage_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7260);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageBusinesses_PageSecurities__WEBPACK_IMPORTED_MODULE_1__]);
src_components_PageBusinesses_PageSecurities__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/our-business-securities-brokerage`);
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
    const pageData = useLocalCms ? apidata_our_business_securities_brokerage_json__WEBPACK_IMPORTED_MODULE_2__ : await fetchCmsData();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_components_PageBusinesses_PageSecurities__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

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

/***/ 7260:
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"id":1,"attributes":{"description_en":"Demo data","description_tc":"Demo data","description_sc":"Demo data","createdAt":"2022-11-23T03:50:13.033Z","updatedAt":"2022-11-30T04:39:57.919Z","publishedAt":"2022-11-23T03:50:43.225Z","components":[{"id":4,"__component":"our-business.component-1","title_en":"Trading & Brokerage","title_tc":"交易與經紀","title_sc":"交易与经纪 ","content_en":"Our Trading division provides trading platform services to support different products including stocks, futures & options, fixed income, funds, structured products, virtual assets and more. We also manage credit and market risk of clients’ and house positions.","content_tc":"我們的交易業務提供交易平台服務，支持股票、期貨、固定收益、基金、結構性產品、虛擬資產等不同產品的交易。另外，我們亦協助客戶管理其投資資產的信貸風險和市場風險。","content_sc":"我们的交易业务提供交易平台服务，支持股票、期货、固定收益、基金、结构性产品、虚拟资产等不同产品的交易。另外，我们亦协助客户管理其投资资产的信贷风险和市场风险。\\n"},{"id":1,"__component":"our-business.component-2","title_left_en":"Agency Services","title_left_tc":"代理服務","title_left_sc":"代理服务","content_left_en":"We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in a one-stop platform. ","content_left_tc":"我們為客戶提供不同市場的各類投資產品，以實現他們的財富管理目標。我們亦為客戶提供移動端和網頁端應用，使得他們能夠在一站式平台上追蹤投資表現或重組投資組合。","content_left_sc":"我们为客户提供不同市场的各类投资产品，以实现他们的财富管理目标。我们亦为客户提供移动端和网页端应用，使得他们能够在一站式平台上追踪投资表现或重组投资组合。","title_right_en":"Risk Management","title_right_tc":"風險管理","title_right_sc":"风险管理","content_right_en":"We are the first line of defence in managing credit and market risk exposure. We proactively manage our house positions and hedge dynamically to secure our sales margin and maintain our risk exposure within the limit. ","content_right_tc":"我們是信貸管理和市場風險的第一道防線。我們積極主動地管理投資資產，並進行動態對沖，以確保獲利，並將風險維持在可接受的限度內。","content_right_sc":"我们是信贷管理和市场风险的第一道防线。我们积极主动地管理投资资产，并进行动态对冲，以确保获利，并将风险维持在可接受的限度内。","padding":"Top","icon_left":{"data":{"id":4,"attributes":{"name":"image 94.png","alternativeText":"image 94.png","caption":"image 94.png","width":102,"height":93,"formats":null,"hash":"image_94_e3f5342b1f","ext":".png","mime":"image/png","size":19.31,"url":"https://dhrhnojxde2hk.cloudfront.net/image_94_e3f5342b1f.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T08:49:16.083Z","updatedAt":"2022-11-23T08:49:16.083Z"}}},"icon_right":{"data":{"id":8,"attributes":{"name":"corp_5 3.png","alternativeText":"corp_5 3.png","caption":"corp_5 3.png","width":110,"height":110,"formats":null,"hash":"corp_5_3_c8944d2376","ext":".png","mime":"image/png","size":18.56,"url":"https://dhrhnojxde2hk.cloudfront.net/corp_5_3_c8944d2376.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T08:49:16.469Z","updatedAt":"2022-11-23T08:49:30.296Z"}}}},{"id":3,"__component":"our-business.component-2","title_left_en":"Trading Services","title_left_tc":"交易服務","title_left_sc":"交易服务","content_left_en":"We provide flow wealth management products, including ELN, Accumulator/Decummulator and Range Accrual on single and baskets of various asset classes on different markets. We will tailor-make products to satisfy the needs of sophisticated investors. ","content_left_tc":"我們提供各類流動財富管理產品，涵蓋不同市場上的各類單一資產和一籃子資產類型，包括資產掛鈎票據（ELN）、累計期權/累沽期權、區間債券等。我們將為客戶量身定製產品，以滿足資深投資者的需求。我們還為客戶尋求流動資金，並協助客戶進行固定收益和虛擬資產交易。","content_left_sc":"我们提供各类流动财富管理产品，涵盖不同市场上的各类单一资产和一篮子资产类型，包括资产挂钩票据（ELN）、累计期权/累沽期权、区间债券等。我们将为客户量身定制产品，以满足资深投资者的需求。我们还为客户寻求流动资金，并协助客户进行固定收益和虚拟资产交易。","title_right_en":null,"title_right_tc":null,"title_right_sc":null,"content_right_en":null,"content_right_tc":null,"content_right_sc":null,"padding":"Bottom","icon_left":{"data":{"id":6,"attributes":{"name":"image 102.png","alternativeText":"image 102.png","caption":"image 102.png","width":109,"height":94,"formats":null,"hash":"image_102_f5ea3a0457","ext":".png","mime":"image/png","size":17.67,"url":"https://dhrhnojxde2hk.cloudfront.net/image_102_f5ea3a0457.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T08:49:16.224Z","updatedAt":"2022-11-23T08:49:16.224Z"}}},"icon_right":{"data":null}},{"id":5,"__component":"our-business.component-1","title_en":"Prime Services","title_tc":"主經紀商業務","title_sc":"主经纪商业务","content_en":"Our Prime Services division - a key component of our Global Markets Division - offers a full spectrum of tailored solutions to hedge funds, family offices and high-net-worth individuals. ","content_tc":"我們的主經紀商業務是環球市場業務的重要組成部分，為對沖基金、家族辦公室、及高凈值人士提供全面的定製化解決方案。","content_sc":"我们的主经纪商业务是环球市场业务的重要组成部分,为对冲基金、家族办公室和高净值人士提供全面的定制化解决方案。"},{"id":2,"__component":"our-business.component-2","title_left_en":"Trading & Execution Services","title_left_tc":"交易與執行","title_left_sc":"交易与执行","content_left_en":"We provide competitive pricing and facilitation on traditional financial products. As part of our value-add solutions, our clients will be able to get access to a trading platform (Web & App) for easy low-touch execution, along with bespoke interfaces to connect to their infrastructures (API & FIX).","content_left_tc":"針對傳統的金融產品，如全球股票、固定收益、結構性產品、期貨期權等，我們提供極具競爭力的價格和便捷的服務。我們的交易平台可通過網頁或手機應用程序操作，方便客戶自助執行交易。我們提供平台定製接口（API&FIX），客戶可將自己的平台直接接入我們的服務器。此外，我們還提供受監管的虛擬資產相關產品，使得客戶能夠獲得「Web2+Web3」的混合型解決方案。","content_left_sc":"针对传统的金融产品，如全球股票、固定收益、结构性产品、期货期权等，我们提供极具竞争力的价格和便捷的服务。我们的交易平台可通过网页或手机应用程序操作，方便客户自助执行交易。我们提供平台定制接口（API&FIX），客户可将自己的平台直接接入我们的服务器。此外，我们还提供受监管的虚拟资产相关产品，使得客户能够获得“Web2+Web3”的混合型解决方案。","title_right_en":"Margin & Financing","title_right_tc":"融資服務","title_right_sc":"融资服务","content_right_en":"We provide bespoke financing solutions for our clients to utilize leverage effectively and increase the flexibility of capital. On both security and portfolio levels, we aim to enhance buying power to enable treasury optimization and alpha enhancement of our clients.","content_right_tc":"我們為客戶提供定製化的融資解決方案，幫助他們有效利用槓桿，提高資本的靈活性。我們致力於幫助客戶提高證券和投資組合的購買力，助其實現財務優化並提高超額收益。","content_right_sc":"我们为客户提供定制化的融资解决方案，帮助他们有效利用杠杆，提高资本的灵活性。我们致力于帮助客户提高证券和投资组合的购买力，助其实现财务优化并提高超额收益。","padding":"Top","icon_left":{"data":{"id":9,"attributes":{"name":"corp_5 4.png","alternativeText":"corp_5 4.png","caption":"corp_5 4.png","width":120,"height":120,"formats":null,"hash":"corp_5_4_e8d3bf7731","ext":".png","mime":"image/png","size":16.63,"url":"https://dhrhnojxde2hk.cloudfront.net/corp_5_4_e8d3bf7731.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T08:49:16.526Z","updatedAt":"2022-11-23T08:49:16.526Z"}}},"icon_right":{"data":{"id":7,"attributes":{"name":"image 99.png","alternativeText":"image 99.png","caption":"image 99.png","width":75,"height":87,"formats":null,"hash":"image_99_2fac94f919","ext":".png","mime":"image/png","size":8.61,"url":"https://dhrhnojxde2hk.cloudfront.net/image_99_2fac94f919.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T08:49:16.242Z","updatedAt":"2022-11-23T08:49:16.242Z"}}}},{"id":4,"__component":"our-business.component-2","title_left_en":"Capital Introduction","title_left_tc":"資本引介","title_left_sc":"资本引介","content_left_en":"We invite our clients to be part of the capital introduction network to help facilitate meaningful introductions between funds and investors. We work closely with our clients to learn and understand their strategy, fundraising goals, and track records, in order to provide the right introduction.","content_left_tc":"我們擁有廣泛的機構投資者和家族辦公室網絡，並邀請客戶加入其中，以促進基金和投資者之間的溝通聯繫。我們與客戶緊密合作，了解他們的戰略計劃、融資目標和投資往績，以確保在資本引介的過程中提供準確的信息。","content_left_sc":"我们拥有广泛的机构投资者和家族办公室网络，并邀请客户加入其中，以促进基金和投资者之间的沟通联系。我们与客户紧密合作，了解他们的战略计划、融资目标和投资往绩，以确保在资本引介的过程中提供准确的信息。","title_right_en":"Custody","title_right_tc":"託管服務","title_right_sc":"托管服务","content_right_en":"Clients’ safety and security are our top priorities. With a transparent structure backed by investment-grade custodians and technology, we ensure clients’ assets are safely kept in a regulated and segregated manner. ","content_right_tc":"保障客戶資產的安全是我們的首要任務。在投資級的託管服務商和技術的支持下，我們建立了一個透明的結構體系，確保客戶的資產以受監管的方式被安全獨立地保管。","content_right_sc":"保障客户资产的安全是我们的首要任务。在投资级的托管服务商和技术的支持下，我们建立了一个透明的结构体系，确保客户的资产以受监管的方式被安全独立地保管。","padding":"Bottom","icon_left":{"data":{"id":5,"attributes":{"name":"image 104.png","alternativeText":"image 104.png","caption":"image 104.png","width":87,"height":99,"formats":null,"hash":"image_104_6dd890ad72","ext":".png","mime":"image/png","size":13.03,"url":"https://dhrhnojxde2hk.cloudfront.net/image_104_6dd890ad72.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T08:49:16.100Z","updatedAt":"2022-11-23T08:50:44.482Z"}}},"icon_right":{"data":null}}]}},"meta":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,7607,3137,5098], () => (__webpack_exec__(2973)));
module.exports = __webpack_exports__;

})();