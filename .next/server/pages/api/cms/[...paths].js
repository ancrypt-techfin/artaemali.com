"use strict";
(() => {
var exports = {};
exports.id = 2146;
exports.ids = [2146];
exports.modules = {

/***/ 1432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Try to move to use /api/tunnel/xxx for all requests
async function handler(req, res) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const { paths , ...query } = req.query;
    if (!paths || !(paths instanceof Array)) return res.status(400).json({
        message: "Invalid path"
    });
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };
    let url = `${process.env.CMS_API_ENDPOINT}/` + paths.join("/");
    try {
        const response = await fetch(url, requestOptions);
        const result = await response.json();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
            error
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1432));
module.exports = __webpack_exports__;

})();