"use strict";
exports.id = 5098;
exports.ids = [5098];
exports.modules = {

/***/ 5098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModuleTextSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8373);
/* harmony import */ var _ModuleTextColList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3137);
/* harmony import */ var _ModuleIconList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModuleTextColList__WEBPACK_IMPORTED_MODULE_3__]);
_ModuleTextColList__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const BusinessPageModules = ({ components , locale  })=>{
    const g = (compData, keyWithoutLang)=>typeof `${compData[`${keyWithoutLang}_${locale}`]}` === null ? "" : compData[`${keyWithoutLang}_${locale}`];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: components.map((component, i)=>{
            switch(component.__component){
                case "our-business.component-1":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModuleTextSection__WEBPACK_IMPORTED_MODULE_2__/* .ModuleTextSection */ .D, {
                        title: g(component, "title"),
                        description: g(component, "content"),
                        bgImage: "/images/asset-management/bg-introduction.png"
                    }, i);
                case "our-business.component-2":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModuleIconList__WEBPACK_IMPORTED_MODULE_4__/* .ModuleIconList */ .u, {
                        padding: component.padding,
                        iconList: [
                            {
                                icon: component.icon_left?.data?.attributes?.url || "",
                                title: g(component, "title_left") || "",
                                body: g(component, "content_left") || ""
                            },
                            {
                                icon: component.icon_right?.data?.attributes?.url || "",
                                title: g(component, "title_right") ?? "",
                                body: g(component, "content_right") ?? ""
                            }
                        ]
                    });
                case "our-business.component-3":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-hidden bg-arta-eggshell-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModuleTextColList__WEBPACK_IMPORTED_MODULE_3__/* .ModuleTextColList */ .J, {
                            headerPosition: "right",
                            header: g(component, "title"),
                            title: g(component, "subtitle"),
                            content: g(component, "content")
                        })
                    }, i);
                case "our-business.component-4":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-hidden bg-arta-eggshell-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModuleTextColList__WEBPACK_IMPORTED_MODULE_3__/* .ModuleTextColList */ .J, {
                            headerPosition: "left",
                            header: g(component, "title"),
                            title: g(component, "subtitle"),
                            content: g(component, "content")
                        })
                    }, i);
                default:
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "5"
                    }, i);
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BusinessPageModules);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ModuleIconList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7188);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const ModuleIconList = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("bg-arta-eggshell-100", props.padding === "Bottom" && "pb-14 md:pb-[140px]", props.padding === "Top" && "pt-14 md:pt-[140px]"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "arta-container mx-auto grid grid-cols-12 md:gap-x-12 md:gap-y-12",
            children: props.iconList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "md:col-span-6 col-span-12 flex my-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "xl:w-[157px] xl:h-[157px] lg:w-[100px] lg:h-[100px] w-[64px] h-[64px] xl:flex-[0_0_157px] lg:flex-[0_0_100px] flex-[0_0_64px] relative md:mt-0 -mt-[15px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.icon,
                                alt: "",
                                className: "mx-auto"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "xl:ml-[40px] ml-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h6 */ .Y.h6,
                                    children: item.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `md:mt-4 mt-8 md:ml-0 -ml-[75px] ${src_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                    children: item.body
                                })
                            ]
                        })
                    ]
                }, index))
        })
    });
};



/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ModuleTextSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7188);
/* harmony import */ var src_components_FadeUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8619);




// TODO: animation
// TODO: responsive
// TODO: bgImage
// TODO: styling
const ModuleTextSection = ({ title , description , bgImage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group/bg relative overflow-hidden",
        id: "mission",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: bgImage,
                    alt: "",
                    fill: true,
                    className: "object-cover"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "arta-container mx-auto max-w-[950px] relative flex flex-col items-center justify-center py-36 text-arta-sand-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_FadeUp__WEBPACK_IMPORTED_MODULE_3__/* .FadeUp */ .N, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h2_style2 */ .Y.h2_style2} mb-6 text-center `,
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `module-text-section ${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.body_regular_verah */ .Y.body_regular_verah} tracking-normal`,
                                dangerouslySetInnerHTML: {
                                    __html: description
                                }
                            })
                        ]
                    })
                })
            })
        ]
    });
};



/***/ })

};
;