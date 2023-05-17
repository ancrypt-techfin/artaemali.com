"use strict";
(() => {
var exports = {};
exports.id = 2193;
exports.ids = [2193];
exports.modules = {

/***/ 4149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const apiEndpoint = process.env.REPORT_ADVANCED_API_ENDPOINT;
async function handler(req, res) {
    const { lang , reportType  } = req.query;
    const endpoint = `${apiEndpoint}/${reportType}_${lang}.php`;
    const response = await fetch(endpoint);
    //   const result = await response.json()
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
var __webpack_exports__ = (__webpack_exec__(4149));
module.exports = __webpack_exports__;

})();