"use strict";
(() => {
var exports = {};
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 3864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ DragDropArea),
/* harmony export */   "s3": () => (/* binding */ toBase64),
/* harmony export */   "y": () => (/* binding */ openFilePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const DragDropArea = ({ children , className , onDrop  })=>{
    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, dragging && "border-2 border-blue-600"),
        onDrop: (evt)=>{
            evt.preventDefault();
            setDragging(false);
            const fileList = [];
            if (evt.dataTransfer.items) {
                const itemList = Array.from(evt.dataTransfer.items);
                itemList.forEach((item, i)=>{
                    if (item.kind === "file") {
                        const file = item.getAsFile();
                        if (file) fileList.push(file);
                    }
                });
            } else {
                fileList.push(...Array.from(evt.dataTransfer.files));
            }
            onDrop(fileList);
        },
        onDragLeave: (evt)=>{
            evt.preventDefault();
            setDragging(false);
        },
        onDragOver: (evt)=>{
            evt.preventDefault();
            setDragging(true);
        },
        children: children
    });
};
const openFilePicker = (onSelect, inputProps // ComponentProps<"input">
)=>{
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = inputProps?.accept || "";
    input.onchange = (evt)=>{
        const fileList = Array.from(input.files || []);
        onSelect(fileList);
    };
    input.click();
};
const toBase64 = (file)=>new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = (error)=>reject(error);
    });



/***/ }),

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

/***/ 9094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ InputFile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(199);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);




// type propsT = ComponentProps<'input'>
const InputFile = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative mt-2 flex h-[150px] w-full items-center justify-center rounded-lg bg-[#F3F2F4]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Upload */ .gq, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-black",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-bold text-arta-secondary underline",
                        children: t("join_us.upload_box")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4 text-xs",
                    children: t("join_us.upload_limitation")
                })
            ]
        })
    });
});
InputFile.displayName = "InputFile";



/***/ }),

/***/ 873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8124);
/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3799);
/* harmony import */ var _InputTextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8816);
/* harmony import */ var _InputFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9094);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7188);
/* harmony import */ var _ButtonAnimated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5909);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9752);
/* harmony import */ var _DragDropArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3864);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6167);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__, html_react_parser__WEBPACK_IMPORTED_MODULE_12__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__, html_react_parser__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const useApplyForm = (t)=>{
    const { handleSubmit , formState: { errors  } , ...formStatus } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        resolver: (data)=>{
            const errors = {};
            if (!data.firstName) errors.firstName = {
                message: t("warning.required")
            };
            if (!data.lastName) errors.lastName = {
                message: t("warning.required")
            };
            if (!data.emailAddress) errors.emailAddress = {
                message: t("warning.required")
            };
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.emailAddress)) errors.emailAddress = {
                message: t("warning.invalid_format")
            };
            if (!data.contactNumber) errors.contactNumber = {
                message: t("warning.required")
            };
            if (!data.lastSalary) errors.lastSalary = {
                message: t("warning.required")
            };
            else if (!/^\d+$/.test(data.lastSalary)) errors.lastSalary = {
                message: t("warning.invalid_format")
            };
            if (!data.expectedSalary) errors.expectedSalary = {
                message: t("warning.required")
            };
            else if (!/^\d+$/.test(data.expectedSalary)) errors.expectedSalary = {
                message: t("warning.invalid_format")
            };
            if (!data.cvUpload) errors.cvUpload = {
                message: t("warning.required")
            };
            if (data.briefIntroduction.length > 500) errors.briefIntroduction = {
                message: t("warning.word_count_500")
            };
            if (!data.acceptedTerms) errors.acceptedTerms = {
                message: t("warning.required")
            };
            return {
                values: data,
                errors
            };
        }
    });
    const submitStatus = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({
        mutationFn: async (data)=>{
            const response = await fetch("/api/enquiry", {
                method: "POST",
                body: JSON.stringify({
                    ...data,
                    enquiryType: "job_apply"
                })
            });
            if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}  `);
        }
    });
    const onSubmit = handleSubmit(async (data)=>submitStatus.mutate(data));
    return {
        onSubmit,
        submitStatus,
        ...formStatus,
        errors
    };
};
const ApplyForm = (props)=>{
    const { job , setShowSuccess  } = props;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("common");
    const [fileSizeError, setFileSizeError] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const { onSubmit , submitStatus , errors , register , watch , setValue , trigger  } = useApplyForm(t);
    if (submitStatus.isSuccess) setShowSuccess(true);
    const cvUploadName = watch("cvUploadName");
    const onFileChange = async (files)=>{
        if (files.length > 0) {
            setFileSizeError("");
            const file = files[0];
            if (!file.type.includes("pdf") && !file.type.includes("word")) {
                console.error("cvUpload", "Please upload a PDF or Word document");
                return;
            }
            if (file.size > 5 * 1024000) {
                setFileSizeError(t("warning.file_size_5mb"));
                return;
            }
            const base64 = await (0,_DragDropArea__WEBPACK_IMPORTED_MODULE_10__/* .toBase64 */ .s3)(file);
            setValue("cvUpload", base64);
            trigger("cvUpload");
            setValue("cvUploadName", file.name);
            trigger("cvUploadName");
        } else {
            setValue("cvUpload", "");
            trigger("cvUpload");
            setValue("cvUploadName", "");
            trigger("cvUploadName");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
            disabled: submitStatus.isLoading,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                        ...register("jobTitle"),
                        defaultValue: job.job_title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: `${_Text__WEBPACK_IMPORTED_MODULE_5__/* .textClass.h2_style2 */ .Y.h2_style2} mb-8`,
                    children: t("join_us.application_form")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.first_name")}*`,
                                error: errors.firstName?.message,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                                    ...register("firstName"),
                                    placeholder: "Tai Man"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.last_name")}*`,
                                error: errors.lastName?.message,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                                    ...register("lastName"),
                                    placeholder: "Chan"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.email_address")}*`,
                                error: errors.emailAddress?.message,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                                    ...register("emailAddress"),
                                    placeholder: "abc@abc.com"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.contact_number")}*`,
                                error: errors.contactNumber?.message,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                                    ...register("contactNumber")
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.linkedin")}`,
                                error: errors.linkedin?.message,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                                    ...register("linkedin")
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.last_salary")}*`,
                                error: errors.lastSalary?.message,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                                    ...register("lastSalary"),
                                    placeholder: t("join_us.dollar")
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.expected_salary")}*`,
                                error: errors.expectedSalary?.message,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText__WEBPACK_IMPORTED_MODULE_2__/* .InputText */ .o, {
                                    ...register("expectedSalary"),
                                    placeholder: t("join_us.dollar")
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DragDropArea__WEBPACK_IMPORTED_MODULE_10__/* .DragDropArea */ .GM, {
                            className: "col-span-full",
                            onDrop: onFileChange,
                            children: cvUploadName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full text-left",
                                type: "button",
                                onClick: ()=>(0,_DragDropArea__WEBPACK_IMPORTED_MODULE_10__/* .openFilePicker */ .y)(onFileChange, {
                                        accept: ".doc,.pdf"
                                    }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative mt-2 flex h-[150px] w-full flex-col items-center justify-center rounded-lg bg-[#F3F2F4]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "break-all px-4 text-lg",
                                        children: cvUploadName
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full text-left",
                                type: "button",
                                onClick: ()=>(0,_DragDropArea__WEBPACK_IMPORTED_MODULE_10__/* .openFilePicker */ .y)(onFileChange, {
                                        accept: ".doc,.pdf"
                                    }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                    label: `${t("join_us.cv_upload")}*`,
                                    error: errors.cvUpload?.message,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputFile__WEBPACK_IMPORTED_MODULE_4__/* .InputFile */ .h, {})
                                })
                            })
                        }),
                        fileSizeError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-full -mt-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `${_Text__WEBPACK_IMPORTED_MODULE_5__/* .textClass.caption */ .Y.caption} text-red-400 my-4`,
                                children: fileSizeError
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: `${t("join_us.brief_introduction")}`,
                                error: errors.briefIntroduction?.message,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputTextArea__WEBPACK_IMPORTED_MODULE_3__/* .InputTextArea */ .z, {
                                        ...register("briefIntroduction")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${_Text__WEBPACK_IMPORTED_MODULE_5__/* .textClass.caption */ .Y.caption} mt-2 font-bold tracking-widest text-arta-sand-100 `,
                                        children: t("join_us.introduction_limitation")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_1__/* .InputField */ .U, {
                                label: "",
                                error: errors.acceptedTerms?.message,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "checkbox",
                                            ...register("acceptedTerms")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `${_Text__WEBPACK_IMPORTED_MODULE_5__/* .textClass.body_regular */ .Y.body_regular} select-none w-[90%] sm:w-auto ml-5`,
                                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_12__["default"])(t("join_us.accept_privacy_policy"))
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-full flex flex-col justify-start gap-2",
                            children: [
                                submitStatus.error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_11__/* .ErrorMessage */ .B, {
                                    error: submitStatus.error
                                }) : null,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ButtonAnimated__WEBPACK_IMPORTED_MODULE_6__/* .ButtonAnimated */ .V, {
                                    extraProps: {
                                        type: "submit"
                                    },
                                    className: `w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px] ${submitStatus.isLoading && "pointer-events-none"}`,
                                    children: [
                                        t("join_us.submit"),
                                        submitStatus.isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "absolute right-2 top-[7px] w-6 h-6",
                                            src: "/images/loading.svg"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5331);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2001);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(887);
/* harmony import */ var _SectionBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9160);
/* harmony import */ var _SectionJobView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3748);
/* harmony import */ var src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(199);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7188);
/* harmony import */ var src_domains_links__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3709);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SectionJobView__WEBPACK_IMPORTED_MODULE_6__]);
_SectionJobView__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const PageJobOpenings = ({ k  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: `${k.job_title} | ARTA TechFin`,
                description: t("page_description.join_us"),
                keywords: t("page_keywords.join_us"),
                gaType: "others",
                gaObj: {
                    event_name: "Job_Openings_Content",
                    content: {
                        Content: k.job_id
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "form-div",
                        className: "bg-arta-eggshell-100 pt-12 pb-[150px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "arta-container mx-auto",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: `mb-4 flex cursor-pointer items-center underline ${src_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                    href: `${src_domains_links__WEBPACK_IMPORTED_MODULE_9__/* .links.joinUs */ .O.joinUs}#job-opening`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Svg_Icon__WEBPACK_IMPORTED_MODULE_7__/* .IconArrowLeft */ .D6, {
                                            fill: "#593725",
                                            className: "mr-2 h-4"
                                        }),
                                        t("join_us.back")
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionJobView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    k: k
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                textColor: "brown"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageJobOpenings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7188);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const SectionBanner = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group/bg relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "easeInOutSine absolute h-full w-full overflow-hidden duration-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/asset-management/top-bg-introduction.png",
                        alt: "",
                        className: "hidden h-full w-full object-cover md:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/asset-management/mobile-top-bg-introduction.jpg",
                        alt: "",
                        className: "h-full w-full object-cover md:hidden"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "arta-container banner-text-shadow relative z-1 mx-auto flex h-[480px] flex-col justify-end py-12 text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: _Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.body_regular_verah */ .Y.body_regular_verah,
                        children: t("page_title.join_us")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `${_Text__WEBPACK_IMPORTED_MODULE_1__/* .textClass.h1_style2 */ .Y.h1_style2} mt-1`,
                        children: t("join_us.job_openings")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionBanner);


/***/ }),

/***/ 3748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(199);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7188);
/* harmony import */ var _ApplyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(873);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2905);
/* harmony import */ var src_domains_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3709);
/* harmony import */ var _ButtonAnimated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5909);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplyForm__WEBPACK_IMPORTED_MODULE_4__, html_react_parser__WEBPACK_IMPORTED_MODULE_6__]);
([_ApplyForm__WEBPACK_IMPORTED_MODULE_4__, html_react_parser__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SectionJobView = ({ k  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("common");
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [showSuccess, setShowSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const seniorityMap = {
        Junior_en: "Junior Level",
        Junior_tc: "初級",
        Junior_sc: "初级",
        Middle_en: "Middle Level",
        Middle_tc: "中級",
        Middle_sc: "中级",
        Senior_en: "Senior Level",
        Senior_tc: "高級",
        Senior_sc: "高级"
    };
    const g = (keyWithoutLang)=>seniorityMap[`${keyWithoutLang}_${locale}`] || "--";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (showSuccess) {
            document.querySelector("#form-div")?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
        showSuccess
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto bg-white shadow-blogPost",
        children: [
            !showSuccess && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-b-2 p-8 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-[2rem] text-arta-secondary",
                                children: k.job_title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `${_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                                children: k.department
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.caption */ .Y.caption} mt-2 flex items-center`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center border-r pr-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Pin */ .lO, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "ml-1",
                                                children: k.work_location
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "pl-6",
                                        children: [
                                            t("join_us.seniority"),
                                            ": ",
                                            g(k.seniority)
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.body_regular */ .Y.body_regular} job-description border-b-2 px-8 py-8`,
                        children: [
                            (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__["default"])(k.job_description),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-arta-secondary`,
                                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__["default"])(t("join_us.apply_statement"))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-8 lg:p-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-w-[756px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ApplyForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                job: k,
                                setShowSuccess: setShowSuccess
                            })
                        })
                    })
                ]
            }),
            showSuccess && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.body_regular_verah */ .Y.body_regular_verah} mb-4`,
                        children: t("join_us.thanks")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${_Text__WEBPACK_IMPORTED_MODULE_3__/* .textClass.body_regular_verah */ .Y.body_regular_verah}`,
                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__["default"])(t("join_us.thanks_message"))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonAnimated__WEBPACK_IMPORTED_MODULE_8__/* .ButtonAnimated */ .V, {
                        as: "a",
                        href: `${src_domains_links__WEBPACK_IMPORTED_MODULE_7__/* .links.joinUs */ .O.joinUs}#job-opening`,
                        className: "mt-4 border-arta-sand-100 text-arta-sand-100",
                        children: t("join_us.back")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionJobView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_PageJobOpenings_PageJobOpenings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6394);
/* harmony import */ var apidata_job_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6799);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_PageJobOpenings_PageJobOpenings__WEBPACK_IMPORTED_MODULE_1__]);
src_components_PageJobOpenings_PageJobOpenings__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const fetchJobData = async (id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/join-us-jobs-openings/${id}`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data[`${keyWithoutLang}_${locale}`]}`;
    return {
        job_id: pageData.data.slug,
        job_title: g("job_title"),
        work_location: g("work_location"),
        department: g("department"),
        job_description: g("job_description"),
        category: pageData.data.category,
        seniority: pageData.data.seniority,
        showing_start_date: pageData.data.showing_start_date,
        showing_end_date: pageData.data.showing_end_date
    };
};
const getServerSideProps = async (context)=>{
    const { locale , query  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const job = useLocalCms ? apidata_job_json__WEBPACK_IMPORTED_MODULE_2__ : await fetchJobData(query.id + "");
    return {
        props: {
            k: massageData(job, locale),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (src_components_PageJobOpenings_PageJobOpenings__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

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

/***/ }),

/***/ 6799:
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"id":1,"attributes":{"job_title_en":"Assistant Client Relations Manager","job_title_tc":"Assistant Client Relations Manager","job_title_sc":"Assistant Client Relations Manager","category":"Front Office","seniority":"Middle","work_location_en":"Wan Chai","work_location_tc":"Wan Chai","work_location_sc":"Wan Chai","department_en":"Department","department_tc":"Department","department_sc":"Department","job_description_en":"<h4><strong>Exciting things that you will be involved in…</strong></h4><ul><li>Provide high quality customer service experience to clients;</li><li>Lead team members performing daily operations duties;</li><li>Perform KYC checking and different account openings;</li><li>Handle clients’ enquiries and offer solutions;</li><li>Participate in different projects, including revamping online platforms, mobile trading application developments and marketing events, etc;</li><li>Support sales teams in different campaigns to develop and maintain good relations with potential and existing clients;</li><li>Report the performance of the department and clients\' feedback to management;</li><li>Perform other ad hoc tasks assigned by management.</li></ul><h4><strong>How will you be qualified?</strong></h4><ul><li>University degree or above;</li><li>5 years’ of relevant experiences;</li><li>Familiar with brokerage firm operations is preferrable;</li><li>Responsible and willing to take challenges;</li><li>Self-motivated and good interpersonal skills;</li><li>Strong customer service and communication skills;</li><li>Fluent in Cantonese and Mandarin, good command of English</li><li>Eager to drive and succeed</li><li>Entrepreneurial spirit</li></ul>","job_description_tc":"<h4><strong>Exciting things that you will be involved in…</strong></h4><ul><li>Provide high quality customer service experience to clients;</li><li>Lead team members performing daily operations duties;</li><li>Perform KYC checking and different account openings;</li><li>Handle clients’ enquiries and offer solutions;</li><li>Participate in different projects, including revamping online platforms, mobile trading application developments and marketing events, etc;</li><li>Support sales teams in different campaigns to develop and maintain good relations with potential and existing clients;</li><li>Report the performance of the department and clients\' feedback to management;</li><li>Perform other ad hoc tasks assigned by management.</li></ul><h4><strong>How will you be qualified?</strong></h4><ul><li>University degree or above;</li><li>5 years’ of relevant experiences;</li><li>Familiar with brokerage firm operations is preferrable;</li><li>Responsible and willing to take challenges;</li><li>Self-motivated and good interpersonal skills;</li><li>Strong customer service and communication skills;</li><li>Fluent in Cantonese and Mandarin, good command of English</li><li>Eager to drive and succeed</li><li>Entrepreneurial spirit</li></ul>","job_description_sc":"<h4><strong>Exciting things that you will be involved in…</strong></h4><ul><li>Provide high quality customer service experience to clients;</li><li>Lead team members performing daily operations duties;</li><li>Perform KYC checking and different account openings;</li><li>Handle clients’ enquiries and offer solutions;</li><li>Participate in different projects, including revamping online platforms, mobile trading application developments and marketing events, etc;</li><li>Support sales teams in different campaigns to develop and maintain good relations with potential and existing clients;</li><li>Report the performance of the department and clients\' feedback to management;</li><li>Perform other ad hoc tasks assigned by management.</li></ul><h4><strong>How will you be qualified?</strong></h4><ul><li>University degree or above;</li><li>5 years’ of relevant experiences;</li><li>Familiar with brokerage firm operations is preferrable;</li><li>Responsible and willing to take challenges;</li><li>Self-motivated and good interpersonal skills;</li><li>Strong customer service and communication skills;</li><li>Fluent in Cantonese and Mandarin, good command of English</li><li>Eager to drive and succeed</li><li>Entrepreneurial spirit</li></ul>","createdAt":"2022-11-23T10:36:58.308Z","updatedAt":"2022-11-24T09:10:10.806Z","publishedAt":"2022-11-23T10:36:59.982Z","showing_start_date":"2022-11-01","showing_end_date":"2023-01-31"}},"meta":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,6662], () => (__webpack_exec__(8106)));
module.exports = __webpack_exports__;

})();