"use strict";
exports.id = 3137;
exports.ids = [3137];
exports.modules = {

/***/ 3137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ModuleTextColList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7188);
/* harmony import */ var _ModuleTextColListHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7607);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_2__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// TODO: list body support html
// TODO: animation
// TODO: responsive
// TODO: headerPosition
// TODO: Title can be null or empty string, see Web3Media page
const ModuleTextColList = ({ header , title , list , content , headerPosition  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "arta-container mx-auto relative grid grid-cols-12 md:py-[150px] py-16 lg:py-36",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(`relative flex items-center md:col-span-4 col-span-full`, headerPosition == "left" ? "order-0 md:pr-20 lg:pr-12" : "md:pl-10 md:order-1 md:justify-end"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModuleTextColListHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    header: header,
                    headerPosition: headerPosition
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-span-full mt-6 border-b border-black pb-2 md:col-span-8 md:mt-0",
                children: [
                    title && title.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.h3_style2 */ .Y.h3_style2} mb-6`,
                        children: title
                    }),
                    content && content.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "module-text-col-list",
                        dangerouslySetInnerHTML: {
                            __html: content || ""
                        }
                    }),
                    list && list.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "module-text-col-list",
                        children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.h6 */ .Y.h6}`,
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.body_regular_verah */ .Y.body_regular_verah} mt-4 mb-8 lg:max-w-[80%]`,
                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(item.body)
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;