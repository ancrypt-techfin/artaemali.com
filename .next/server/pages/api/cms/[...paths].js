"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cms/[...paths]";
exports.ids = ["pages/api/cms/[...paths]"];
exports.modules = {

/***/ "(api)/./src/pages/api/cms/[...paths].tsx":
/*!******************************************!*\
  !*** ./src/pages/api/cms/[...paths].tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Try to move to use /api/tunnel/xxx for all requests\nasync function handler(req, res) {\n    let myHeaders = new Headers();\n    myHeaders.append(\"Content-Type\", \"application/json\");\n    const { paths , ...query } = req.query;\n    if (!paths || !(paths instanceof Array)) return res.status(400).json({\n        message: \"Invalid path\"\n    });\n    const requestOptions = {\n        method: \"GET\",\n        headers: myHeaders\n    };\n    let url = `${process.env.CMS_API_ENDPOINT}/` + paths.join(\"/\");\n    try {\n        const response = await fetch(url, requestOptions);\n        const result = await response.json();\n        return res.status(200).json(result);\n    } catch (error) {\n        return res.status(400).json({\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Ntcy9bLi4ucGF0aHNdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsc0RBQXNEO0FBQ3ZDLGVBQWVBLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFFQSxJQUFJQyxZQUFZLElBQUlDO0lBQ3BCRCxVQUFVRSxNQUFNLENBQUMsZ0JBQWdCO0lBRWpDLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdDLE9BQU8sR0FBR04sSUFBSU0sS0FBSztJQUNyQyxJQUFJLENBQUNELFNBQVMsQ0FBRUEsQ0FBQUEsaUJBQWlCRSxLQUFJLEdBQ25DLE9BQU9OLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsU0FBUztJQUFlO0lBRXhELE1BQU1DLGlCQUFpQjtRQUNyQkMsUUFBUTtRQUNSQyxTQUFTWDtJQUNYO0lBRUEsSUFBSVksTUFBTSxDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUdaLE1BQU1hLElBQUksQ0FBQztJQUUxRCxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNTixLQUFLSDtRQUNsQyxNQUFNVSxTQUFTLE1BQU1GLFNBQVNWLElBQUk7UUFDbEMsT0FBT1IsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1k7SUFDOUIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT3JCLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRWE7UUFBTTtJQUN0QztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRhLXdlYi8uL3NyYy9wYWdlcy9hcGkvY21zL1suLi5wYXRoc10udHN4P2Y4YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuLy8gVHJ5IHRvIG1vdmUgdG8gdXNlIC9hcGkvdHVubmVsL3h4eCBmb3IgYWxsIHJlcXVlc3RzXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG5cbiAgbGV0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gIGNvbnN0IHsgcGF0aHMsIC4uLnF1ZXJ5IH0gPSByZXEucXVlcnk7XG4gIGlmICghcGF0aHMgfHwgIShwYXRocyBpbnN0YW5jZW9mIEFycmF5KSlcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgcGF0aFwiIH0pO1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gIH07XG5cbiAgbGV0IHVybCA9IGAke3Byb2Nlc3MuZW52LkNNU19BUElfRU5EUE9JTlR9L2AgKyBwYXRocy5qb2luKFwiL1wiKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJwYXRocyIsInF1ZXJ5IiwiQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJDTVNfQVBJX0VORFBPSU5UIiwiam9pbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/cms/[...paths].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/cms/[...paths].tsx"));
module.exports = __webpack_exports__;

})();