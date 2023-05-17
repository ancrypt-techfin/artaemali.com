"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 6376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ InputDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InputDropdown = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ options , className , ...rest }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
        ref: ref,
        className: "w-full border-b border-solid border-arta-indigo-100 bg-transparent py-3 text-base focus:outline-none" + (className ? ` ${className}` : ""),
        ...rest,
        children: options.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: option.value,
                children: option.label
            }, option.value))
    });
});
InputDropdown.displayName = "InputDropdown";



/***/ }),

/***/ 3839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7188);
/* harmony import */ var _Svg_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(199);
/* harmony import */ var src_components_Hr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3017);
/* harmony import */ var src_components_FadeUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8619);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_components_WechatPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_3__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Enquiry = ({ k  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("common");
    const circle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [openWeChatPopup, setOpenWeChatPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(circle.current, {
            x: -200,
            autoAlpha: 0
        });
        const spinTl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
            repeat: -1
        });
        spinTl.pause();
        const tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
            scrollTrigger: {
                trigger: circle.current,
                start: "top center+=200",
                end: "top center+=200",
                toggleActions: "play play reverse  play",
                onEnter: ()=>spinTl.play()
            }
        });
        tl.to(circle.current, {
            x: 0,
            autoAlpha: 1
        });
        spinTl.to(circle.current, {
            duration: 3,
            rotation: 360
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-arta-eggshell-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "arta-container relative mx-auto grid grid-cols-12 py-12 md:py-[150px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `relative col-span-full flex items-center md:col-span-4`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_FadeUp__WEBPACK_IMPORTED_MODULE_7__/* .FadeUp */ .N, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `relative z-10 ${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h2_style2 */ .Y.h2_style2} text-arta-sand-100`,
                                    children: t("contact_us.enquiry")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-col-circle absolute -left-[250px] z-0 will-change-transform",
                                ref: circle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Circle */ .Cd, {
                                    className: "hidden md:block mx-auto w-[30px] md:w-[440px] lg:w-[500px] xl:w-[600px]"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-full mt-6 md:col-span-8 md:mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Hr__WEBPACK_IMPORTED_MODULE_6__.Hr, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                                children: t("contact_us.headquarter")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.body_regular_verah */ .Y.body_regular_verah} mt-4 mb-8 whitespace-pre text-arta-sand-100 lg:max-w-[80%]`,
                                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(k.address)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Hr__WEBPACK_IMPORTED_MODULE_6__.Hr, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                                children: t("contact_us.enquiry")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-4 mb-8 grid grid-cols-12 gap-y-5 sm:gap-y-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-full sm:col-span-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-base text-black",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-bold",
                                                    children: t("contact_us.media")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    title: "Email us",
                                                    href: `mailto:${k.media_email}`,
                                                    className: "underline",
                                                    children: k.media_email
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-full sm:col-span-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-base text-black",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-bold",
                                                    children: t("contact_us.investor_relations")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    title: "Email us",
                                                    href: `mailto:${k.investor_email}`,
                                                    className: "underline",
                                                    children: k.investor_email
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-full sm:col-span-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-base text-black",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-bold",
                                                    children: t("contact_us.recruitment")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    title: "Email us",
                                                    href: `mailto:${k.recruitment_email}`,
                                                    className: "underline",
                                                    children: k.recruitment_email
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Hr__WEBPACK_IMPORTED_MODULE_6__.Hr, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_4__/* .textClass.h6 */ .Y.h6} mt-8 text-arta-sand-100`,
                                children: t("contact_us.follow_us")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-4 flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        title: "Arta Facebook",
                                        href: k.social_media_link_facebook,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "mr-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconFacebook */ .zJ, {
                                            className: "h-8 w-8",
                                            fill: "#593725"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        title: "Arta Twitter",
                                        href: k.social_media_link_twitter,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "mr-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconTwitter */ .JD, {
                                            className: "h-8 w-8",
                                            fill: "#593725"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        title: "Arta LinkedIn",
                                        href: k.social_media_link_linkedin,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "mr-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconLinkedIn */ .QQ, {
                                            className: "h-8 w-8",
                                            fill: "#593725"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        title: "Arta WeChat",
                                        className: "mr-6 cursor-pointer",
                                        onClick: ()=>setOpenWeChatPopup(true),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_5__/* .IconWeChat */ .kj, {
                                            className: "h-8 w-8",
                                            fill: "#593725"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            openWeChatPopup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_WechatPopup__WEBPACK_IMPORTED_MODULE_9__/* .WechatPopup */ .w, {
                togglePopup: setOpenWeChatPopup
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enquiry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ EnquiryForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9752);
/* harmony import */ var _ButtonAnimated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5909);
/* harmony import */ var _InputDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6376);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8124);
/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3799);
/* harmony import */ var _InputTextArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8816);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7188);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const TOPIC_TYPES = {
    default: "",
    media: "Media",
    other: "Other"
};
const useEnquiryForm = (t)=>{
    const { handleSubmit , formState: { errors  } , ...formStatus } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (data)=>{
            const errors = {};
            if (!data.name) errors.name = {
                message: t("warning.required")
            };
            if (!data.email) errors.email = {
                message: t("warning.required")
            };
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) errors.email = {
                message: t("warning.invalid_format")
            };
            if (!data.message) errors.message = {
                message: t("warning.required")
            };
            else if (data.message.length > 500) errors.message = {
                message: t("warning.word_count_500")
            };
            if (data.topic === TOPIC_TYPES.media) {
                if (!data.company) errors.company = {
                    message: t("warning.required")
                };
                if (!data.jobTitle) errors.jobTitle = {
                    message: t("warning.required")
                };
                if (!data.phone) errors.phone = {
                    message: t("warning.required")
                };
            }
            return {
                values: data,
                errors
            };
        }
    });
    const submitStatus = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
        mutationFn: async (data)=>{
            const response = await fetch("/api/enquiry", {
                method: "POST",
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error("Network response was not ok");
        }
    });
    const onSubmit = handleSubmit((data)=>submitStatus.mutate(data));
    return {
        ...formStatus,
        errors,
        onSubmit,
        submitStatus
    };
};
const EnquiryForm = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)("common");
    const { register , errors , watch , onSubmit , submitStatus  } = useEnquiryForm(t);
    const TOPIC_TYPES = {
        default: "",
        media: "Media",
        other: "Other"
    };
    const topicOptions = [
        {
            value: TOPIC_TYPES.default,
            label: t("contact_us.select")
        },
        {
            value: TOPIC_TYPES.media,
            label: t("contact_us.media")
        },
        {
            value: TOPIC_TYPES.other,
            label: t("contact_us.others")
        }
    ];
    const r = {
        title: t("contact_us.enquiry_form"),
        question_topic: t("contact_us.category_question"),
        question_name: t("contact_us.name"),
        question_company: t("contact_us.company_name"),
        question_jobTitle: t("contact_us.job_title"),
        question_email: t("contact_us.email_address"),
        question_phone: t("contact_us.contact_number"),
        question_message: t("contact_us.brief_introduction"),
        question_message_hints: t("contact_us.max_500_characters"),
        question_submit: t("contact_us.submit"),
        success_title: t("contact_us.thanks_title"),
        success_message: t("contact_us.thanks_message")
    };
    const topic = watch("topic") || TOPIC_TYPES.default;
    const isExpanded = topic !== TOPIC_TYPES.default;
    const isMediaTopic = topic === TOPIC_TYPES.media;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (submitStatus.isSuccess) {
            document.querySelector("#form-div")?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
        submitStatus.isSuccess
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group/bg relative overflow-hidden py-4 md:py-[130px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "easeInOutSine absolute inset-0 h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/images/asset-management/bg-introduction.png",
                    alt: "",
                    fill: true,
                    className: "object-cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "form-div",
                className: "arta-container relative z-1 mx-auto py-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `${_Text__WEBPACK_IMPORTED_MODULE_10__/* .textClass.h2_style2 */ .Y.h2_style2} mb-8`,
                        children: r.title
                    }),
                    submitStatus.isSuccess ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-h-[220px] w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: `${_Text__WEBPACK_IMPORTED_MODULE_10__/* .textClass.h6 */ .Y.h6} mb-4`,
                                children: r.success_title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `${_Text__WEBPACK_IMPORTED_MODULE_10__/* .textClass.body_regular */ .Y.body_regular} mb-6`,
                                children: r.success_message
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        onSubmit: onSubmit,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                            disabled: submitStatus.isLoading,
                            className: "flex w-full max-w-[820px] flex-col bg-arta-snow-100 p-6 shadow-2xl transition-all ease-in-out md:pr-0 md:grid md:grid-cols-2" + (isExpanded ? " md:max-h-[1000px]" : " md:max-h-[200px]"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_7__/* .InputField */ .U, {
                                    label: r.question_topic,
                                    className: "md:mr-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputDropdown__WEBPACK_IMPORTED_MODULE_6__/* .InputDropdown */ .j, {
                                        options: topicOptions,
                                        ...register("topic")
                                    })
                                }),
                                isExpanded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_7__/* .InputField */ .U, {
                                            label: r.question_name,
                                            error: errors.name?.message,
                                            className: "mt-10 md:mr-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_8__/* .InputText */ .o, {
                                                ...register("name")
                                            })
                                        }),
                                        isMediaTopic && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_7__/* .InputField */ .U, {
                                                    label: r.question_company,
                                                    error: errors.company?.message,
                                                    className: "mt-10 md:mr-10",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_8__/* .InputText */ .o, {
                                                        ...register("company")
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_7__/* .InputField */ .U, {
                                                    label: r.question_jobTitle,
                                                    error: errors.jobTitle?.message,
                                                    className: "mt-10 md:mr-10",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_8__/* .InputText */ .o, {
                                                        ...register("jobTitle")
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_7__/* .InputField */ .U, {
                                            label: r.question_email,
                                            error: errors.email?.message,
                                            className: "mt-10 md:mr-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_8__/* .InputText */ .o, {
                                                ...register("email")
                                            })
                                        }),
                                        isMediaTopic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_7__/* .InputField */ .U, {
                                            label: r.question_phone,
                                            error: errors.phone?.message,
                                            className: "mt-10 md:mr-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_8__/* .InputText */ .o, {
                                                ...register("phone")
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputField__WEBPACK_IMPORTED_MODULE_7__/* .InputField */ .U, {
                                            label: r.question_message,
                                            error: errors.message?.message,
                                            className: "col-span-2 mt-10 md:mr-10",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputTextArea__WEBPACK_IMPORTED_MODULE_9__/* .InputTextArea */ .z, {
                                                    ...register("message")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `${_Text__WEBPACK_IMPORTED_MODULE_10__/* .textClass.caption */ .Y.caption} mt-2 font-bold tracking-widest text-arta-sand-100 `,
                                                    children: r.question_message_hints
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-span-2 mt-10",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ButtonAnimated__WEBPACK_IMPORTED_MODULE_5__/* .ButtonAnimated */ .V, {
                                                extraProps: {
                                                    type: "submit"
                                                },
                                                className: "w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]",
                                                children: [
                                                    r.question_submit,
                                                    submitStatus.isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "absolute right-2 top-[7px] h-6 w-6",
                                                        src: "/images/loading.svg"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2001);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(887);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1966);
/* harmony import */ var _Enquiry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3839);
/* harmony import */ var _EnquiryForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9852);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Enquiry__WEBPACK_IMPORTED_MODULE_5__, _EnquiryForm__WEBPACK_IMPORTED_MODULE_6__]);
([_Enquiry__WEBPACK_IMPORTED_MODULE_5__, _EnquiryForm__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PageContactPage = ({ k , locale  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_3__/* .Seo */ .p, {
                title: `${t("page_title.contact_us")} | Arta TechFin`,
                description: t("page_description.contact_us"),
                keywords: t("page_keywords.contact_us"),
                ga: "Contact Us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroBanner__WEBPACK_IMPORTED_MODULE_4__/* .HeroBanner */ .y, {
                        title: t("page_title.contact_us"),
                        description: k.heroBanner.description,
                        image: k.heroBanner.image,
                        mobileImage: k.heroBanner.mobileImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-hidden bg-arta-eggshell-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Enquiry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            k: k
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EnquiryForm__WEBPACK_IMPORTED_MODULE_6__/* .EnquiryForm */ .M, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "brown"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContactPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_PageContact_PageContact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9534);
/* harmony import */ var apidata_contact_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4805);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageContact_PageContact__WEBPACK_IMPORTED_MODULE_1__]);
src_components_PageContact_PageContact__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/contact-us`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    return {
        heroBanner: {
            description: g("description") !== null ? g("description") : "",
            image: "/images/contact-us/banner.jpg",
            mobileImage: "/images/contact-us/mobile-banner.jpg"
        },
        address: g("address"),
        ...pageData.data.attributes
    };
};
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? apidata_contact_json__WEBPACK_IMPORTED_MODULE_2__ : await fetchCmsData();
    return {
        props: {
            k: massageData(pageData, locale),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_components_PageContact_PageContact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,6662], () => (__webpack_exec__(1177)));
module.exports = __webpack_exports__;

})();