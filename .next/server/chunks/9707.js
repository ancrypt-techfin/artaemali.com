"use strict";
exports.id = 9707;
exports.ids = [9707];
exports.modules = {

/***/ 9707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ TabBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const TabBar = (props)=>{
    const { tabs , selectedTab , setSelectedTab , className  } = props;
    const ulRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        ref: ulRef,
        className: `flex md:justify-center justify-start mt-4 lg:mt-0 pl-6 border-solid border-b border-arta-sand-200 text-arta-sand-200 ${className}`,
        children: tabs.map((tab, index)=>{
            const isSelected = tab.value === selectedTab;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                onClick: ()=>setSelectedTab(tab.value, index),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pb-2 transition-all md:text-xl text-lg whitespace-pre mr-8 lg:mr-16", isSelected && "text-arta-sand-100  border-solid border-b-2 border-arta-sand-100"),
                    children: tab.label
                })
            }, index);
        })
    });
};



/***/ })

};
;