"use strict";
(() => {
var exports = {};
exports.id = 3690;
exports.ids = [3690];
exports.modules = {

/***/ 3887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fin_calendar),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/PageInvestor/InvestorLayout.tsx
var InvestorLayout = __webpack_require__(4013);
// EXTERNAL MODULE: ./src/components/PageInvestor/CalendarAccordion.tsx
var CalendarAccordion = __webpack_require__(7800);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/PageInvestor/PageFinancialCalendar.tsx



const PageFinancialCalendar = ({ fc  })=>{
    const [openYear, setOpenYear] = (0,external_react_.useState)(fc && fc.sort((a, b)=>b.year - a.year)[0].year || 2022);
    const setOpenYearFunc = (year)=>{
        if (year == openYear) {
            setOpenYear(0);
        } else {
            setOpenYear(year);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-8 flex flex-col",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "arta-container mx-auto",
            children: fc.sort((a, b)=>b.year - a.year).map((yearly, index)=>/*#__PURE__*/ jsx_runtime_.jsx(CalendarAccordion/* CalendarAccordion */.z, {
                    index: index,
                    year: yearly.year,
                    events: yearly.posts.map((r)=>({
                            date: new Date(r.date),
                            title: r.title
                        })),
                    openYear: openYear,
                    setOpenYear: setOpenYearFunc
                }, yearly.year))
        })
    });
};
/* harmony default export */ const PageInvestor_PageFinancialCalendar = (PageFinancialCalendar);

// EXTERNAL MODULE: ./apidata/investor-relation.json
var investor_relation = __webpack_require__(8133);
;// CONCATENATED MODULE: ./apidata/investor-relations-financial-calendars.json
const investor_relations_financial_calendars_namespaceObject = JSON.parse('{"data":[{"id":1,"attributes":{"title_en":"Interim Results Announcement","title_tc":"中期業績公布","title_sc":"中期业绩公布","date":"2021-12-31","createdAt":"2022-11-23T09:39:40.577Z","updatedAt":"2022-11-23T09:39:42.455Z","publishedAt":"2022-11-23T09:39:42.452Z"}},{"id":2,"attributes":{"title_en":"Annual Results Announcement","title_tc":"年度業績公布","title_sc":"年度业绩公布","date":"2022-07-15","createdAt":"2022-11-23T10:00:33.064Z","updatedAt":"2022-11-23T10:00:34.043Z","publishedAt":"2022-11-23T10:00:34.040Z"}},{"id":3,"attributes":{"title_en":"Annual General Meeting","title_tc":"股東周年大會","title_sc":"股东周年大会","date":"2022-08-08","createdAt":"2022-11-23T10:00:58.957Z","updatedAt":"2022-11-23T10:00:59.593Z","publishedAt":"2022-11-23T10:00:59.590Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":3}}}');
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/pages/investor-relations/fin-calendar.tsx







const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relation`);
    const data = await res.json();
    return data;
};
const fetchFcData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relations-financial-calendars`);
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
const fcData = (fcData, locale = "en")=>{
    const getKey = (keyWithoutLang)=>`${`${keyWithoutLang}_${locale}`}`;
    return fcData.sort((a, b)=>a.attributes.date.localeCompare(b.attributes.date)).map(({ attributes: press  })=>({
            year: +press.date.split("-")[0],
            post: {
                date: press.date,
                title: press[getKey("title")]
            }
        })).reduce((acc, curr)=>{
        const last = acc[acc.length - 1];
        if (last && last.year === curr.year) {
            last.posts.push(curr.post);
        } else {
            acc.push({
                year: curr.year,
                posts: [
                    curr.post
                ]
            });
        }
        return acc;
    }, []);
};
// Add get report here if seo is needed
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? investor_relation : await fetchCmsData();
    const datesData = useLocalCms ? investor_relations_financial_calendars_namespaceObject : await fetchFcData();
    return {
        props: {
            k: massageData(pageData, locale),
            fc: fcData(datesData.data, locale),
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
const FinCalendarPage = (props)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_.jsx(InvestorLayout/* default */.Z, {
        k: props.k,
        tabType: InvestorLayout/* TABS.financial_calendar */.G.financial_calendar,
        gaLog: true,
        seo: {
            title: `${t("page_title.investor_relations")} | Arta TechFin`,
            description: t("page_description.investor_relations"),
            keywords: t("page_keywords.investor_relations")
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(PageInvestor_PageFinancialCalendar, {
            fc: props.fc
        })
    });
};
/* harmony default export */ const fin_calendar = (FinCalendarPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,9707,7436,7800], () => (__webpack_exec__(3887)));
module.exports = __webpack_exports__;

})();