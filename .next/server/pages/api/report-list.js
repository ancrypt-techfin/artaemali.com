"use strict";
(() => {
var exports = {};
exports.id = 5714;
exports.ids = [5714];
exports.modules = {

/***/ 6705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const apiEndpoint = process.env.REPORT_API_ENDPOINT;
const apiKey = process.env.REPORT_API_KEY;
const pageSizeDefault = 10;
async function handler(req, res) {
    const { page , year , lang , reportType , pageSize  } = req.query // reportType: r, acl
    ;
    const yearOrLatest = year || "latest";
    const pageSizeOrAll = "" // yearOrLatest === 'latest' ? '' : `/${pageSize || pageSizeDefault}`
    ;
    const endpoint = `${apiEndpoint}/${lang}/byType/${reportType}/${yearOrLatest}${pageSizeOrAll}?apikey=${apiKey}&page=${page}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    res.status(response.status).json(result);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6705));
module.exports = __webpack_exports__;

})();