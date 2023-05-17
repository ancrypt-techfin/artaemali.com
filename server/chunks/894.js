"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 6167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ErrorMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ErrorMessage = ({ error  })=>{
    if (!error) return null;
    if (error instanceof Error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-8 text-[1rem]",
        children: error.message
    });
    if (typeof error === "string") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-8 text-[1rem]",
        children: error
    });
    console.error("Unknown error type", error);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Unknown error"
    });
};



/***/ }),

/***/ 1313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loader = ({ isLoading =true  })=>{
    if (!isLoading) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: "w-6 h-6",
            src: "/images/loading.svg"
        })
    });
};



/***/ }),

/***/ 3154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NR": () => (/* binding */ getReportList),
/* harmony export */   "pQ": () => (/* binding */ getAdvancedReportList)
/* harmony export */ });
/* unused harmony export getReportCms */
const host = process.env.NEXT_PUBLIC_HOSTING_PATH;
const reportEndpoint = `${host}/api/report-list`;
const advancedReportEndpoint = `${host}/api/advanced-report-list`;
const fileType = {
    ANN: "Announcement",
    RAN: "Result announcement",
    AR: "Annual report",
    IR: "Interim report",
    ESR: "Environmental and social responsibility report",
    NDR: "Next day disclosure return",
    MR: "Monthly returns",
    PF: "Proxy form",
    CIR: "Circulars",
    LD: "Listing document",
    CD: "Constitutional document"
};
const getReportList = async ({ lang , page , year , reportType  })=>{
    const endpoint = reportEndpoint + `?lang=${lang}&reportType=${reportType}&year=${year || ""}&page=${page}`;
    const res = await fetch(endpoint);
    const result = await res.json();
    if (result.status !== 200) throw new Error(result.message);
    return result;
};
const getAdvancedReportList = async ({ lang , reportType  })=>{
    const endpoint = advancedReportEndpoint + `?lang=${lang}&reportType=${reportType}`;
    const res = await fetch(endpoint);
    const result = await res.json();
    if (result.status !== 200) throw new Error(result.message);
    return result;
};
const getReportCms = async ({ lang  })=>{
    // TODO: get cms from api
    return {
        heroBanner: {
            title: "Investor Relation",
            description: `Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).`,
            image: "/images/investor-relations/top-banner.jpg",
            mobileImage: "/images/investor-relations/mobile-top-banner.png",
            label: ""
        }
    };
};


/***/ })

};
;