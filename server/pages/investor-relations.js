"use strict";
(() => {
var exports = {};
exports.id = 3270;
exports.ids = [3270];
exports.modules = {

/***/ 4561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ investor_relations),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/PageInvestor/InvestorLayout.tsx
var InvestorLayout = __webpack_require__(4013);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/PageInvestor/ReportCard.tsx
var ReportCard = __webpack_require__(7323);
// EXTERNAL MODULE: ./src/domains/links.tsx
var links = __webpack_require__(3709);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/components/Svg/Icon.tsx
var Icon = __webpack_require__(199);
;// CONCATENATED MODULE: ./src/components/PageInvestor/PageInvestorRelations.tsx






const PageInvestorRelations = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-4 md:pt-16",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mb-12 grid sm:grid-cols-12 col-span-full gap-x-8",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "col-span-full col-span-full grid grid-cols-12 sm:mt-0 mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "md:col-span-6 col-span-12 m-2 sm:m-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: links/* links.investorResultAnnouncements */.O.investorResultAnnouncements,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReportCard/* ReportCard */.x, {
                                title: t("investor_relations.results_announcements"),
                                Icon: Icon/* AnnouncementIcon */.HR
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "md:col-span-6 col-span-12 m-2 sm:m-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: links/* links.investorInterimAnnualReports */.O.investorInterimAnnualReports,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReportCard/* ReportCard */.x, {
                                title: t("investor_relations.interim_annual_reports"),
                                Icon: Icon/* AnnouncementIcon */.HR
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "md:col-span-6 col-span-12 m-2 sm:m-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: links/* links.investorAnnouncementsNotices */.O.investorAnnouncementsNotices,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReportCard/* ReportCard */.x, {
                                title: t("investor_relations.announments_noties"),
                                Icon: Icon/* ReportIcon */.cW
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "md:col-span-6 col-span-12 m-2 sm:m-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: links/* links.investorCirculars */.O.investorCirculars,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReportCard/* ReportCard */.x, {
                                title: t("investor_relations.circulars"),
                                Icon: Icon/* ReportIcon */.cW
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "md:col-span-6 col-span-12 m-2 sm:m-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: links/* links.investorListingDocuments */.O.investorListingDocuments,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ReportCard/* ReportCard */.x, {
                                title: t("investor_relations.listing_documents"),
                                Icon: Icon/* ReportIcon */.cW
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const PageInvestor_PageInvestorRelations = (PageInvestorRelations);

// EXTERNAL MODULE: ./apidata/investor-relation.json
var investor_relation = __webpack_require__(8133);
;// CONCATENATED MODULE: ./src/pages/investor-relations/index.tsx






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
        }
    };
};
// Add get report here if seo is needed
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? investor_relation : await fetchCmsData();
    return {
        props: {
            k: massageData(pageData, locale),
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
const InvestorPage = (props)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_.jsx(InvestorLayout/* default */.Z, {
        k: props.k,
        tabType: InvestorLayout/* TABS.announcement */.G.announcement,
        seo: {
            title: `${t("page_title.investor_relations")} | Arta TechFin`,
            description: t("page_description.investor_relations"),
            keywords: t("page_keywords.investor_relations")
        },
        gaLog: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(PageInvestor_PageInvestorRelations, {})
    });
};
/* harmony default export */ const investor_relations = (InvestorPage);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,9707,7436,7323], () => (__webpack_exec__(4561)));
module.exports = __webpack_exports__;

})();