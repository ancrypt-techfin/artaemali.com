"use strict";
exports.id = 8228;
exports.ids = [8228];
exports.modules = {

/***/ 5909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ButtonAnimated)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const ButtonAnimated = (props)=>{
    const { as ="button" , href ="" , children , className , borderWidth =1 , extraProps , external =false  } = props;
    const Component = as === "a" ? external ? "a" : (next_link__WEBPACK_IMPORTED_MODULE_1___default()) : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        href: href,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("arta-transition-fix", "px-8 py-2 font-Neue text-sm md:text-base", "group relative inline-flex items-center justify-center overflow-hidden", "rounded-full", // 'font-Neue text-[3.6em] text-white',
        // 'py-[0.5em] px-[2em]  lg:px-[3em] lg:text-[1em]',
        // 'transition duration-300 ease-out',
        "disabled:cursor-not-allowed disabled:opacity-50", className?.indexOf("border-arta-sand-100") != -1 ? "group-hover-bg-arta-sand-100" : className?.indexOf("border-arta-black") != -1 ? "group-hover-bg-arta-black" : "group-hover-bg-arta-p4-eggshell", borderWidth === 1 ? "border" : "border-2", className),
        target: external ? "_blank" : "_self",
        ...extraProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "ease flex h-full w-full transform items-center justify-center transition-all duration-300",
            children: children
        })
    });
};



/***/ }),

/***/ 2001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Hr.tsx
var Hr = __webpack_require__(3017);
// EXTERNAL MODULE: ./src/components/Svg/Icon.tsx
var Icon = __webpack_require__(199);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/LanguageSwitcher.tsx



const LanguageSwitcher = ()=>{
    const router = (0,router_.useRouter)();
    const { locale , pathname  } = router;
    const langs = [
        "tc",
        "en",
        "sc"
    ];
    const switchToLocale = (lang)=>{
        const path = router.asPath;
        router.push(path, path, {
            locale: lang
        });
    };
    const langMap = (lang)=>{
        return [
            {
                key: "en",
                name: "EN"
            },
            {
                key: "tc",
                name: "繁"
            },
            {
                key: "sc",
                name: "簡"
            }
        ].find((l)=>l.key === lang)?.name || "";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-row justify-end",
        children: langs.map((lang, i)=>{
            if (lang !== locale) {
                return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "inline-block cursor-pointer mr-4",
                        onClick: ()=>switchToLocale(lang),
                        children: langMap(lang)
                    })
                }, i);
            }
        })
    });
};
/* harmony default export */ const components_LanguageSwitcher = (LanguageSwitcher);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./apidata/contact.json
var contact = __webpack_require__(4805);
// EXTERNAL MODULE: ./src/components/WechatPopup.tsx
var WechatPopup = __webpack_require__(5448);
// EXTERNAL MODULE: ./src/domains/links.tsx
var links = __webpack_require__(3709);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/Footer.tsx












const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/contact-us`);
    const data = await res.json();
    return data;
};
const Footer = (props)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const { textColor ="white" , setShowWechatPopup  } = props;
    const router = (0,router_.useRouter)();
    const { locale  } = router;
    const [openWeChatPopup, setOpenWeChatPopup] = (0,external_react_.useState)(false);
    const [footerData, setFooterData] = (0,external_react_.useState)({});
    const textClass = textColor === "white" ? "text-arta-eggshell-100 decoration-arta-snow-100" : textColor === "black" ? "text-arta-black decoration-arta-black" : "text-arta-sand-100 decoration-arta-sand-100";
    const bgClass = textColor === "white" ? "bg-arta-bistre-100" : textColor === "black" ? "bg-white" : "bg-arta-eggshell-100";
    const borderClass = textColor === "white" ? "border-[#878095]" : textColor === "black" ? "border-[#AAAAAA]" : "border-arta-sand-100/50";
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            const useLocalCms = process.env.NEXT_PUBLIC_USE_LOCAL_CMS_DATA === "true";
            const result = useLocalCms ? contact : await fetchCmsData();
            setFooterData(result.data.attributes);
        };
        fetchData();
    }, []);
    const g = (keyWithoutLang)=>`${footerData[`${keyWithoutLang}_${locale}`]}`;
    const k = {
        address: `Units 1-2, Level 9, \nK11 ATELIER King’s Road, \n728 King’s Road,Quarry Bay,\nHong Kong`,
        socialMediaList: [
            {
                href: footerData.social_media_link_linkedin,
                Component: Icon/* IconLinkedIn */.QQ
            },
            {
                href: footerData.social_media_link_twitter,
                Component: Icon/* IconTwitter */.JD
            },
            {
                href: footerData.social_media_link_facebook,
                Component: Icon/* IconFacebook */.zJ
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: `relative z-2 h-full w-full ${bgClass} ${textClass} will-change-transform`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex max-w-main-contain py-6 px-6 md:px-20 md:py-12 xl:mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full flex-col space-y-9",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-between lg:flex-row lg:space-x-9",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "order-2 flex flex-col space-y-5 text-[16px] md:flex-row md:space-x-5 md:space-y-0 lg:order-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col items-start justify-start space-y-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "font-Verah text-[16px] leading-[24px]",
                                                        children: t("footer.address")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "whitespace-pre font-Neue text-[12px] leading-[20px]",
                                                        children: g("address")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col items-start space-y-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "font-Verah text-[16px] leading-[24px]",
                                                        children: t("footer.contact_us")
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "list-none font-Neue text-[12px] leading-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    title: "Phone number",
                                                                    href: `tel: ${footerData.footer_tel}`,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            t("footer.tel"),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "cursor-pointer hover:underline",
                                                                                children: footerData.footer_tel
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    title: "Fax",
                                                                    href: "fax:+852 2507 2009",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            t("footer.fax"),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "cursor-pointer hover:underline",
                                                                                children: footerData.footer_fax
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    title: "Email Arta",
                                                                    href: `mailto:${footerData.footer_email}`,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            t("footer.email"),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "cursor-pointer hover:underline",
                                                                                children: footerData.footer_email
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col items-start space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                        className: " text-[16px] leading-[24px]",
                                                        children: [
                                                            t("footer.social_media"),
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex space-x-2",
                                                        children: [
                                                            k.socialMediaList.map(({ href , Component  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: external_classnames_default()(textColor == "white" && `text-[#878095] hover:text-white`, textColor == "black" && `text-[#aaa9ab] hover:text-black`, textColor == "brown" && `text-[#878095] hover:text-arta-sand-100`),
                                                                    href: href,
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                                                        className: "h-6 w-6 pr-1 last:pr-0",
                                                                        fill: "currentColor"
                                                                    })
                                                                }, i)),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: external_classnames_default()(`cursor-pointer`, textColor == "white" && `text-[#878095] hover:text-white`, textColor == "black" && `text-[#aaa9ab] hover:text-black`, textColor == "brown" && `text-[#878095] hover:text-arta-sand-100`),
                                                                onClick: ()=>{
                                                                    setOpenWeChatPopup(true);
                                                                    if (setShowWechatPopup) setShowWechatPopup(true);
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* IconWeChat */.kj, {
                                                                    className: "h-6 w-6 pr-1 last:pr-0",
                                                                    fill: "currentColor"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "order-1 mb-4 flex items-start justify-start space-y-3 lg:order-2 lg:mb-0 lg:space-y-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-left text-[32px] leading-[40px] lg:text-right lg:text-[36px] lg:leading-[45px]",
                                            children: t("footer.tagline")
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Hr.Hr, {
                                borderColorClass: borderClass
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-start justify-start space-y-5 font-Neue lg:flex-row lg:items-center lg:justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-around space-x-3 text-[12px] leading-[20px] sm:space-x-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                title: t("page_title.disclaimer"),
                                                href: links/* links.disclaimer */.O.disclaimer,
                                                className: "cursor-pointer hover:underline",
                                                children: t("page_title.disclaimer")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "|"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                title: t("page_title.privacy_policy"),
                                                href: links/* links.privacy_policy */.O.privacy_policy,
                                                className: "cursor-pointer hover:underline",
                                                children: t("page_title.privacy_policy")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "|"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(components_LanguageSwitcher, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-xs leading-[20px]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("footer.copyright")
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            openWeChatPopup && /*#__PURE__*/ jsx_runtime_.jsx(WechatPopup/* WechatPopup */.w, {
                togglePopup: setOpenWeChatPopup,
                qrCode: footerData.social_media_link_wechat.data.attributes.url
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 5331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: ./src/components/ButtonAnimated.tsx
var ButtonAnimated = __webpack_require__(5909);
// EXTERNAL MODULE: ./src/domains/links.tsx
var links = __webpack_require__(3709);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Header/MobileNavbar.tsx







const MobileNavbar = ({ item , index , expand , setActiveMobileNavItem , textColor , setShowMenu  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: " group flex cursor-pointer text-base leading-[24px] ",
                        onClick: ()=>{
                            setActiveMobileNavItem(expand ? -1 : index);
                        },
                        children: [
                            item.href == links/* links.contact */.O.contact && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: links/* links.contact */.O.contact,
                                className: "decoration-[#E5C183] underline-offset-[15px] transition group-hover:underline",
                                children: item.pageName
                            }),
                            item.href !== links/* links.contact */.O.contact && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `${textColor == "black" ? "decoration-arta-black" : "decoration-[#E5C183]"} underline-offset-[15px] transition group-hover:underline`,
                                        children: item.pageName
                                    }),
                                    expand ? /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronUpIcon, {
                                        className: `mt-1 ml-1  h-4 w-4 ${textColor == "black" ? "group-hover:text-arta-black" : "group-hover:text-[#E5C183]"}`
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronDownIcon, {
                                        className: `mt-1 ml-1  h-4 w-4 ${textColor == "black" ? "group-hover:text-arta-black" : "group-hover:text-[#E5C183]"}`
                                    })
                                ]
                            })
                        ]
                    })
                }),
                expand && item.href !== links/* links.contact */.O.contact && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${expand && "scale-y-100 transform opacity-100 transition delay-100"} mt-5 flex transform flex-col items-start justify-start `,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-5 hidden max-w-[500px] text-sm lg:block",
                            children: item.paragraph
                        }),
                        item.buttonText && /*#__PURE__*/ jsx_runtime_.jsx(ButtonAnimated/* ButtonAnimated */.V, {
                            as: "a",
                            href: item.href,
                            className: `mt-6 w-full border-2 p-4 px-6 py-3 font-medium sm:w-[260px] ${textColor == "black" ? "border-arta-black text-arta-black" : "border-white text-white"} shadow-md `,
                            borderWidth: 2,
                            children: item.buttonText
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-3 flex flex-col justify-center space-y-1 pl-6",
                            children: item.pages.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "group",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: " relative -translate-x-6 cursor-pointer list-none py-1 text-base opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100 ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            title: item.title,
                                            href: item.link,
                                            onClick: ()=>{
                                                if (item.link.includes(router.pathname)) {
                                                    setShowMenu(false);
                                                }
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: `/images/${textColor == "black" ? "menu_black_arrow.png" : "menu_arrow.png"}`,
                                                        alt: "arrow",
                                                        className: " ease hidden -translate-x-full pt-[10px] pr-2 duration-300 group-hover:block group-hover:translate-x-0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: item.title
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: `mt-4 h-[2px] w-full border-0 ${textColor == "black" ? "bg-arta-black" : "bg-[#E5C183]"}`
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Header_MobileNavbar = (MobileNavbar);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: ./src/components/Svg/Icon.tsx
var Icon = __webpack_require__(199);
;// CONCATENATED MODULE: ./src/components/Svg/arta-logo.tsx


const ArtaLogo = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "118",
        height: "48",
        viewBox: "0 0 118 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21.7952 21.1556L15.2513 5.95414L8.7339 21.1556H21.7952ZM32.3497 34.8027H26.36C26.0434 32.4316 25.1199 29.7443 24.6977 28.5061C24.1963 27.2415 23.4047 25.2919 22.9298 24.1854C22.8506 23.9746 21.2147 23.2633 19.2357 23.2633C18.2594 23.2633 7.7576 23.2633 7.7576 23.2633C7.7576 23.2633 5.75224 27.8738 5.01342 29.5863C4.2746 31.2987 3.85241 33.3274 3.61494 34.8027H0L15.568 0H17.415L32.3497 34.8027Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M54.7784 8.32526C54.7784 6.37567 54.2771 4.90031 53.3008 3.92552C52.5092 3.13514 51.5857 2.58188 50.4775 2.23939C49.3956 1.89689 47.9444 1.73882 46.1237 1.73882C43.4323 1.73882 41.6116 2.4765 41.6116 2.4765V15.8338L44.435 15.8865C46.4931 15.8865 48.1291 15.7021 49.3428 15.3596C50.583 15.0171 51.6912 14.3321 52.7203 13.3046C54.0924 11.961 54.7784 10.3012 54.7784 8.32526ZM63.5123 34.8027H56.7047C55.3326 32.8268 54.9632 32.2999 53.8549 30.5611C53.3272 29.7443 46.9945 20.2072 45.3585 17.757H41.6644V34.8027H37.1787V0H48.2346C51.6648 0 54.3035 0.553261 56.1241 1.63344C58.2351 2.87169 59.2905 4.87396 59.2905 7.56123C59.2905 10.7491 57.9184 13.2256 55.1742 15.0171C53.4855 16.1236 52.5356 16.3871 50.1608 17.0457L57.5754 28.2953C59.3433 30.8772 61.4806 33.1956 63.5123 34.8027Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M90.0303 3.05611C88.9749 2.66092 86.7848 2.1867 84.885 2.1867C83.0115 2.1867 81.2173 2.21304 78.7897 2.21304V34.8554H74.304V2.23939C71.9293 2.23939 70.3988 2.23939 68.5254 2.23939C66.2298 2.23939 64.0925 2.79265 63.1426 3.08245V0H90.0039V3.05611H90.0303Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M107.366 21.1556L100.823 5.95414L94.3316 21.1556H107.366ZM117.947 34.8027H111.958C111.641 32.4316 110.718 29.7443 110.295 28.5061C109.794 27.2415 109.002 25.2919 108.527 24.1854C108.448 23.9746 106.812 23.2633 104.833 23.2633C103.857 23.2633 93.3553 23.2633 93.3553 23.2633C93.3553 23.2633 91.3499 27.8738 90.6111 29.5863C89.8723 31.2987 89.4501 33.3274 89.2126 34.8027H85.5449L101.139 0H102.986L117.947 34.8027Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M81.1906 39.3079C80.874 39.2288 80.3199 39.0971 79.8185 39.0971C79.3699 39.0971 79.0269 39.0971 78.3936 39.0971V47.6331H77.2063V39.0971C76.573 39.0971 76.3619 39.0971 75.755 39.0971C75.2273 39.0971 74.6204 39.2025 74.251 39.3079V38.4385H81.1906V39.3079Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M85.3863 43.8921C85.3863 43.1544 85.2544 42.6011 85.0169 42.2059C84.7266 41.7581 84.3044 41.5473 83.7239 41.5473C83.0907 41.5473 82.5893 41.8107 82.2463 42.364C81.9561 42.8119 81.8505 43.2598 81.8241 43.8921H85.3863ZM86.4681 44.0501L86.4418 44.419C85.9668 44.419 81.7977 44.419 81.7977 44.419V44.6561C81.8505 45.4728 82.0088 45.9997 82.4046 46.4739C82.8268 46.9482 83.4073 47.1853 84.1461 47.1853C84.4892 47.1853 84.8322 47.1062 85.1752 46.9482C85.5182 46.7901 85.8085 46.553 86.0987 46.2632V46.9745C85.7557 47.2116 85.3863 47.396 84.9905 47.5541C84.5947 47.6858 84.1989 47.7649 83.8031 47.7649C82.8532 47.7649 82.1144 47.4751 81.5339 46.9218C80.927 46.3159 80.6104 45.4991 80.6104 44.4453C80.6104 43.4969 80.8742 42.7328 81.3756 42.1269C81.9297 41.4946 82.6949 41.1521 83.6712 41.1521C84.5419 41.1521 85.228 41.4419 85.7293 42.0215C86.2307 42.5484 86.4681 43.2334 86.4681 44.0501Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M93.0646 41.679L92.6688 42.6011C92.5369 42.3903 92.405 42.2586 92.2994 42.1269C92.1675 41.9951 92.0356 41.8898 91.9036 41.8107C91.587 41.6526 91.2703 41.5736 90.9801 41.5736C90.2677 41.5736 89.7135 41.8371 89.2914 42.3376C88.8692 42.8382 88.6581 43.5232 88.6581 44.3399C88.6581 45.183 88.8692 45.868 89.3178 46.4212C89.7663 46.9745 90.3732 47.2643 91.1384 47.2643C91.5078 47.2643 91.8772 47.1589 92.1939 46.9745C92.3786 46.8691 92.6424 46.6583 92.9591 46.3422V47.0272C92.6688 47.2379 92.3786 47.396 92.0356 47.5277C91.6925 47.6595 91.3231 47.7122 90.9273 47.7122C89.8455 47.7122 89.0011 47.396 88.3942 46.7901C87.7873 46.1841 87.4707 45.3674 87.4707 44.3926C87.4707 43.3388 87.8137 42.5221 88.4998 41.9424C89.133 41.3892 89.951 41.1257 90.9537 41.1257C91.3759 41.1257 91.7189 41.1521 92.0619 41.2311C92.3522 41.3102 92.6952 41.4682 93.0646 41.679Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M100.058 47.6331H98.9758V44.1028C98.9758 43.3124 98.8703 42.7591 98.6856 42.443C98.4745 42.0478 98.1051 41.8634 97.5246 41.8634C96.5483 41.8634 95.7303 42.7328 95.7303 43.971V47.6594H94.6484V38.5175H95.7303V42.522C95.9941 42.0741 96.3108 41.7053 96.6802 41.4945C97.0496 41.2838 97.4454 41.152 97.9203 41.152C98.6856 41.152 99.2133 41.3628 99.5563 41.8107C99.8993 42.2586 100.058 42.9172 100.058 43.7866V47.6331Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M107.049 39.3079C106.733 39.2289 105.915 39.0708 105.281 39.0708H103.461V42.4431H106.733V43.1807C106.733 43.1807 106.152 43.049 105.545 43.049C105.308 43.049 103.461 43.049 103.461 43.049V47.6332H102.273V38.4648H107.049V39.3079Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M110.216 47.6331H109.134V41.2311H110.216V47.6331ZM110.374 38.9126C110.374 39.0971 110.295 39.2551 110.163 39.3869C110.031 39.5186 109.873 39.5976 109.688 39.5976C109.503 39.5976 109.345 39.5186 109.213 39.3869C109.081 39.2551 109.002 39.0971 109.002 38.9126C109.002 38.7282 109.081 38.5702 109.213 38.4384C109.345 38.3067 109.503 38.2277 109.688 38.2277C109.873 38.2277 110.031 38.3067 110.163 38.4384C110.295 38.5702 110.374 38.7282 110.374 38.9126Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M118 47.6331H116.918V43.9447C116.918 43.2334 116.813 42.7065 116.575 42.3376C116.338 41.9688 115.968 41.8107 115.493 41.8107C114.966 41.8107 114.517 42.0478 114.227 42.4167C113.963 42.7855 113.673 43.2861 113.673 44.2345V47.6068H112.591V41.2048H113.673V42.4957C113.884 42.1005 114.2 41.7317 114.543 41.5209C114.939 41.2575 115.335 41.1257 115.863 41.1257C116.628 41.1257 117.182 41.3628 117.525 41.8107C117.842 42.2586 118 42.8382 118 43.6549V47.6331Z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const arta_logo = (ArtaLogo);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./apidata/hover-menu.json
const hover_menu_namespaceObject = JSON.parse('{"data":{"id":1,"attributes":{"about_us_en":"Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”)","about_us_tc":"裕承科金有限公司（下稱「裕承科金」）（0279.HK）成立於2021年10月，是一家總部設於香港的綜合金融服務機構，致力於增強科技在金融領域的應用。我們的目標是建立下一代的金融服務，通過科技改變傳統金融業，打破傳統金融服務的壁壘，減少信息不對稱，降低門檻，提供無障礙、友好、知識驅動的客戶體驗。我們將積極創新區塊鏈基礎設施和應用，連接Web2和Web3，引導用戶以最合規、最安全的方式，通過一站式的混合金融服務進入Web3的世界。","about_us_sc":"裕承科金有限公司（下称“裕承科金”）（0279.HK）成立于2021年10月，是一家总部设于香港的综合金融服务机构，致力于增强科技在金融领域的应用。我们的目标是建立下一代的金融服务，通过科技改变传统金融业，打破传统金融服务的壁垒，减少信息不对称，降低门槛，提供无障碍、友好、知识驱动的客户体验。我们将积极创新区块链基础设施和应用，连接Web2和Web3，提供一站式“传统金融+虚拟金融”的混合型金融服务，引导用户以合规安全的方式，进入Web3的世界。","our_business_en":"Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description","our_business_tc":"Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description","our_business_sc":"Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description Our Businesses Hover Description","investor_relation_en":"RTA TechFin Corporation Limited is a comprehensive financial services institution that aspires to enhance applications in Finance through the use of Technology (\\"Technology in Finance\\" or \\"TechFin\\").","investor_relation_tc":"裕承科金有限公司是一家綜合金融服務機構，致力於通過使用技術（「金融技術」或“TechFin”）來增強金融應用。","investor_relation_sc":"裕承科金有限公司是一家综合金融服务机构，致力于通过使用技术（「金融技术」或“TechFin”）来增强金融应用。","media_centre_en":"MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN ","media_centre_tc":"MediaCentreTC MediaCentreTC\\nMediaCentreTC MediaCentreTC\\nMediaCentreTC MediaCentreTC MediaCentreTC MediaCentreTC\\nMediaCentreTC MediaCentreTC","media_centre_sc":"MediaCentreSC MediaCentreSC\\nMediaCentreSC MediaCentreSC\\nMediaCentreSC MediaCentreSC\\nMediaCentreSC MediaCentreSC","join_us_en":"JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN","join_us_tc":"JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC ","join_us_sc":"JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC","createdAt":"2022-11-29T04:25:42.107Z","updatedAt":"2022-11-29T04:29:34.255Z","publishedAt":"2022-11-29T04:29:34.248Z"}},"meta":{}}');
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx



// import Image from 'next/image'
// import { useRouter } from 'next/router'











const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/hover-menu-description`);
    const data = await res.json();
    return data;
};
const Header = (props)=>{
    const { textColor ="white" , fontSize ="16px" , src ="default"  } = props;
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const router = (0,router_.useRouter)();
    const { locale  } = router;
    const [headerData, setHeaderData] = (0,external_react_.useState)({
        about_us: "",
        investor_relation: "",
        join_us: "",
        media_centre: "",
        our_business: ""
    });
    const textColorClass = textColor == "black" ? "text-arta-black" : textColor === "white" ? "text-arta-snow-100" : "text-arta-russet-100";
    const bgColorClass = textColor == "black" ? "bg-white" : textColor === "white" ? "bg-arta-russet-100/90" : "bg-arta-snow-100/95";
    const borderColorClass = textColor == "black" ? "border-arta-black" : textColor === "white" ? "border-arta-snow-100" : "border-arta-russet-100";
    const mobileMenuBg = textColor == "black" ? "bg-white" : "bg-arta-russet-100";
    // For mobile navbar
    const [showMenu, setShowMenu] = (0,external_react_.useState)(false);
    const [navbarBg, setNavbarBg] = (0,external_react_.useState)(false);
    const [activeMobileNavItem, setActiveMobileNavItem] = (0,external_react_.useState)(-1);
    const [scrollDir, setScrollDir] = (0,external_react_.useState)("scrolling down");
    const pageInfoList = [
        {
            pageName: t("page_title.about_us"),
            title: t("page_title.about_us"),
            paragraph: headerData["about_us"],
            buttonText: t("page_title.about_us"),
            href: links/* links.about */.O.about,
            pages: [
                {
                    title: t("about_us.vision_mission"),
                    link: links/* links.aboutVision */.O.aboutVision
                },
                {
                    title: t("about_us.culture_values"),
                    link: links/* links.aboutCulture */.O.aboutCulture
                },
                {
                    title: t("about_us.leadership"),
                    link: links/* links.aboutLeadership */.O.aboutLeadership
                },
                {
                    title: t("about_us.what_is_techfin"),
                    link: links/* links.aboutTechFin */.O.aboutTechFin
                }
            ]
        },
        {
            pageName: t("page_title.our_businesses"),
            title: t("page_title.our_businesses"),
            paragraph: headerData["our_business"],
            buttonText: "",
            href: "",
            pages: [
                {
                    title: t("page_title.asset_management"),
                    link: links/* links.businessesAssetManagement */.O.businessesAssetManagement
                },
                {
                    title: t("page_title.investment_banking"),
                    link: links/* links.businessesInvestmentBanking */.O.businessesInvestmentBanking
                },
                {
                    title: t("page_title.insurance_brokerage"),
                    link: links/* links.businessesInsuranceBrokerage */.O.businessesInsuranceBrokerage
                },
                {
                    title: t("page_title.global_markets"),
                    link: links/* links.businessesSecuritiesBrokerage */.O.businessesSecuritiesBrokerage
                },
                // { title: t('page_title.esg_advisory'), link: links.businessesEsg },
                {
                    title: t("page_title.artazine"),
                    link: links/* links.businessesArtazine */.O.businessesArtazine
                }
            ]
        },
        {
            pageName: t("page_title.investor_relations"),
            title: t("page_title.investor_relations"),
            paragraph: headerData["investor_relation"],
            buttonText: t("page_title.investor_relations"),
            href: links/* links.investor */.O.investor,
            pages: [
                {
                    title: t("investor_relations.announcements_notices"),
                    link: `${links/* links.investor */.O.investor}#content`
                },
                {
                    title: t("investor_relations.corporate_information"),
                    link: `${links/* links.investorCorporateInformation */.O.investorCorporateInformation}#content`
                },
                {
                    title: t("investor_relations.financial_calendar"),
                    link: `${links/* links.investorFinCalendar */.O.investorFinCalendar}#content`
                },
                {
                    title: t("investor_relations.esg"),
                    link: `${links/* links.investorEsg */.O.investorEsg}#content`
                }
            ]
        },
        {
            pageName: t("page_title.media_centre"),
            title: t("page_title.media_centre"),
            paragraph: headerData["media_centre"],
            buttonText: t("page_title.media_centre"),
            href: links/* links.media */.O.media,
            pages: [
                {
                    title: t("page_title.arta_blog"),
                    link: `${links/* links.media */.O.media}#list`
                },
                {
                    title: t("page_title.press_release"),
                    link: `${links/* links.mediaPress */.O.mediaPress}#list`
                }
            ]
        },
        {
            pageName: t("page_title.join_us"),
            title: t("page_title.join_us"),
            paragraph: headerData["join_us"],
            buttonText: t("page_title.join_us"),
            href: links/* links.joinUs */.O.joinUs,
            pages: [
                {
                    title: t("join_us.work_with_arta"),
                    link: `${links/* links.joinUs */.O.joinUs}#work-with-arta`
                },
                {
                    title: t("join_us.our_values"),
                    link: `${links/* links.joinUs */.O.joinUs}#our-value`
                },
                {
                    title: t("join_us.arta_cares"),
                    link: `${links/* links.joinUs */.O.joinUs}#arta-care`
                },
                {
                    title: t("join_us.job_openings"),
                    link: `${links/* links.joinUs */.O.joinUs}#job-opening`
                }
            ]
        },
        {
            pageName: t("page_title.contact_us"),
            title: t("page_title.contact_us"),
            paragraph: ``,
            buttonText: "",
            href: links/* links.contact */.O.contact,
            pages: []
        }
    ];
    const DEFAULT_TAB_INDEX = -1;
    const [activeTabIndex, _setActiveTabIndex] = (0,external_react_.useState)(DEFAULT_TAB_INDEX);
    const setActiveTabIndex = (index)=>{
        _setActiveTabIndex(index);
        if (selectedTab) return;
        external_gsap_.gsap.fromTo("#fadeIn", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.6,
            delay: 0.3
        });
    };
    const selectedTab = activeTabIndex === DEFAULT_TAB_INDEX ? null : pageInfoList[activeTabIndex];
    (0,external_react_.useEffect)(()=>{
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;
        const updateScrollDir = ()=>{
            const scrollY = window.pageYOffset;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY >= lastScrollY && scrollY !== 0 ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };
        const changeBackground = ()=>{
            // home page no bg is needed. It is working on home page because scrolling is not in home page, its window.scrollY is always 0
            // 66 is just a number that feels good, better than 0
            if (window) setNavbarBg(window?.scrollY >= 66 || false);
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };
        changeBackground();
        window.addEventListener("scroll", changeBackground);
        return ()=>{
            window.removeEventListener("scroll", changeBackground);
        };
    }, [
        scrollDir
    ]);
    (0,external_react_.useEffect)(()=>{
        const g = (pageData, keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
        const fetchData = async ()=>{
            const useLocalCms = process.env.NEXT_PUBLIC_USE_LOCAL_CMS_DATA === "true";
            const result = useLocalCms ? hover_menu_namespaceObject : await fetchCmsData();
            if (result.data?.attributes) {
                setHeaderData({
                    about_us: g(result, "about_us"),
                    investor_relation: g(result, "investor_relation"),
                    join_us: g(result, "join_us"),
                    media_centre: g(result, "media_centre"),
                    our_business: g(result, "our_business")
                });
            }
        };
        fetchData();
    }, [
        locale
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("fixed top-0 z-50 w-full opacity-100 transition-all duration-500", scrollDir == "scrolling down" && "-top-32 opacity-0"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            onMouseLeave: ()=>setActiveTabIndex(DEFAULT_TAB_INDEX),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: external_classnames_default()("mt-0 w-full px-[4em] py-[3em] transition duration-300 xl:pt-[2.6em] xl:pb-[2em] xl:mx-auto", navbarBg && (textColor === "black" ? "bg-white" : "bg-arta-dark-brown") + " bg-opacity-70"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full items-center justify-between xl:space-x-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden items-center justify-center space-x-8 xl:flex",
                                children: pageInfoList.map((page, index)=>{
                                    const selected = index === activeTabIndex;
                                    const ChevronIcon = selected ? outline_.ChevronUpIcon : outline_.ChevronDownIcon;
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `group z-[4] flex cursor-pointer items-center justify-center opacity-70 transition hover:opacity-100 ${textColorClass}`,
                                        onMouseEnter: ()=>page.pages.length > 0 ? setActiveTabIndex(index) : null,
                                        children: [
                                            page.pages.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                title: page.title,
                                                className: "flex items-start",
                                                href: page.href,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        fontSize: `${fontSize}`
                                                    },
                                                    children: page.title
                                                })
                                            }),
                                            page.pages.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            fontSize: `${fontSize}`
                                                        },
                                                        className: `z-[3] leading-[24px] ${textColor === "black" ? "decoration-arta-black" : "decoration-arta-sunray-100"} underline-offset-[20px] transition group-hover:underline` + (selected ? " underline" : ""),
                                                        children: page.pageName
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ChevronIcon, {
                                                        className: `z-[3] ml-1 h-4 w-4 transition ${textColor === "black" ? "group-hover:text-arta-black" : "group-hover:text-arta-sunray-100"}`
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex h-[22px] w-[26px] cursor-pointer flex-col justify-between xl:hidden",
                                onClick: ()=>setShowMenu(!showMenu),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: external_classnames_default()("h-[2px] w-full", textColor == "white" ? "bg-[#F4F1E1]" : textColor == "black" ? "bg-arta-black" : "bg-[#593725]")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: external_classnames_default()("h-[2px] w-full", textColor == "white" ? "bg-[#F4F1E1]" : textColor == "black" ? "bg-arta-black" : "bg-[#593725]")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: external_classnames_default()("h-[2px] w-full", textColor == "white" ? "bg-[#F4F1E1]" : textColor == "black" ? "bg-arta-black" : "bg-[#593725]")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "z-[1] text-right pr-[2px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    title: "Arta TechFin",
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "relative h-[32px] w-[81px] cursor-pointer opacity-100 transition hover:opacity-100 md:h-auto md:w-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(arta_logo, {
                                            className: `${textColorClass} h-full w-full md:h-auto md:w-auto`
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `absolute top-0 left-0 min-h-[100px] w-full ${bgColorClass} py-12 px-[4em] ${src == "homepage" ? "pt-[calc(2.6em+88px)]" : "pt-[calc(2.6em+72px)]"} ${textColorClass} transition-all duration-300 ease-in-out xl:mx-auto` + (selectedTab ? " translate-y-0" : " pointer-events-none -translate-y-full"),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex max-w-main-contain ",
                            id: "fadeIn",
                            children: [
                                selectedTab && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex space-x-8 2xl:w-3/4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex max-w-[400px] flex-col space-y-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "font-Verah text-2xl",
                                                    children: selectedTab.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "font-Neue text-[14px] leading-[20px]",
                                                    children: selectedTab.paragraph
                                                }),
                                                selectedTab.buttonText.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(ButtonAnimated/* ButtonAnimated */.V, {
                                                    href: selectedTab.href,
                                                    as: "a",
                                                    className: `w-[260px] p-4 px-6 py-3 font-medium shadow-md ${textColorClass} ${borderColorClass}`,
                                                    borderWidth: 2,
                                                    children: selectedTab.buttonText
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-col",
                                            children: selectedTab.pages.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    style: {
                                                        fontSize: `${fontSize}`
                                                    },
                                                    className: `group relative -translate-x-4 cursor-pointer list-none py-1 px-2 ${src == "homepage" ? "leading-[" + fontSize + "]" : "leading-[24px]"} opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100`,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        className: "flex items-start pl-5",
                                                        href: item.link,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* IconListItemArrow */.Rc, {
                                                                fill: textColor === "white" ? "#F4F1E1" : textColor === "black" ? "#000000" : "#2E1605",
                                                                className: " ease mr-2 mt-1 hidden h-4 w-4 -translate-x-full duration-300 group-hover:block group-hover:translate-x-0"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.title
                                                            })
                                                        ]
                                                    })
                                                }, index))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: showMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `absolute top-0 left-0 z-[801] flex min-h-[100vh] w-full flex-col ${mobileMenuBg} px-[4em] pt-[6em] xl:pt-[2.8em]`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `h-8 w-8 cursor-pointer pr-2 pb-2 ${textColor == "black" ? "text-arta-black" : "text-arta-eggshell-100"}`,
                                            onClick: ()=>{
                                                setShowMenu(!showMenu);
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.XIcon, {
                                                className: "h-6 w-6"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative h-[32px] w-[81px] cursor-pointer opacity-100 transition hover:opacity-100 md:h-auto md:w-auto",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                title: "Arta TechFin",
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `/images/${textColor == "black" ? "arta-logo_black" : "arta-logo"}.svg`,
                                                    alt: "Arta TechFin",
                                                    className: "object-contain"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `mt-8 ${textColorClass} `,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col items-start justify-start",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex w-full flex-col space-y-8",
                                            children: pageInfoList.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header_MobileNavbar, {
                                                        item: item,
                                                        expand: activeMobileNavItem === index,
                                                        index: index,
                                                        setActiveMobileNavItem: setActiveMobileNavItem,
                                                        textColor: textColor,
                                                        setShowMenu: setShowMenu
                                                    })
                                                }, index))
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 3017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hr": () => (/* binding */ Hr)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Hr = (props)=>{
    const borderColor = props.borderColorClass || "border-arta-sand-100";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: `my-4 w-full ${borderColor}` + (props.className ? ` ${props.className}` : "")
    });
};



/***/ }),

/***/ 887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title ="ARTA WEB" , description ="Arta" , keywords ="" , ga ="" , gaObj ={
    event_name: "",
    content: {}
} , gaType =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:title",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:image",
                content: `${process.env.NEXT_PUBLIC_SITE_URL}/images/artatechfin.png`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "artatechfin.com",
                                "name": "Arta TechFin",
                                "url": "artatechfin.com/",
                                "sameAs": [
                                    "https://www.facebook.com/ARTAtechfin",
                                    "https://www.linkedin.com/company/arta-techfin-corporation-limited",
                                    "https://twitter.com/ARTATechFin"
                                ],
                                "legalName": "ARTA TechFin Corporation Limited",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+852 3513 8279",
                                    "contactType": "Customer service",
                                    "availableLanguage": [
                                        "English",
                                        "Chinese"
                                    ]
                                }
                            },
                            {
                                "@type": "WebSite",
                                "@id": "artatechfin.com",
                                "url": "artatechfin.com",
                                "name": "Arta TechFin",
                                "description": "Arta TechFin",
                                "publisher": {
                                    "@id": "https://artatechfin.com/#organization"
                                },
                                "inLanguage": "en"
                            },
                            {
                                "@type": "WebPage",
                                "@id": "artatechfin.com/#webpage",
                                "url": "artatechfin.com/",
                                "name": "Arta TechFin",
                                "isPartOf": {
                                    "@id": "artatechfin.com/#website"
                                },
                                "description": "ARTA TechFin (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology.",
                                "inLanguage": "en",
                                "potentialAction": [
                                    {
                                        "@type": "ReadAction",
                                        "target": [
                                            "artatechfin.com/"
                                        ]
                                    }
                                ]
                            }
                        ]
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            }); ` + (gaType == "others" ? `gtag('event', '${gaObj.event_name}', 
              ${JSON.stringify(gaObj.content)}
            )` : ga != "" ? `gtag('event', 'Screen_View', {
                Screen: '${ga}',
              })` : "")
                }
            })
        ]
    });
};



/***/ }),

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AW": () => (/* binding */ FinTechCompaniesIcon),
/* harmony export */   "Cd": () => (/* binding */ Circle),
/* harmony export */   "D6": () => (/* binding */ IconArrowLeft),
/* harmony export */   "Ec": () => (/* binding */ IconArrowRight),
/* harmony export */   "HR": () => (/* binding */ AnnouncementIcon),
/* harmony export */   "I1": () => (/* binding */ TopDownArrow),
/* harmony export */   "JD": () => (/* binding */ IconTwitter),
/* harmony export */   "K$": () => (/* binding */ IconArrowRightCircle),
/* harmony export */   "Nu": () => (/* binding */ IconOrganizationsLedByArta),
/* harmony export */   "QQ": () => (/* binding */ IconLinkedIn),
/* harmony export */   "Qn": () => (/* binding */ DownTopArrow),
/* harmony export */   "Rc": () => (/* binding */ IconListItemArrow),
/* harmony export */   "UO": () => (/* binding */ IconTechnologyInternetCompanies),
/* harmony export */   "Y9": () => (/* binding */ HKTycoons),
/* harmony export */   "ZZ": () => (/* binding */ CustomArrowLeft),
/* harmony export */   "aW": () => (/* binding */ FinancialInvestmentPlatformIcon),
/* harmony export */   "bU": () => (/* binding */ IconBanksBasedInHK),
/* harmony export */   "cW": () => (/* binding */ ReportIcon),
/* harmony export */   "fO": () => (/* binding */ RegionalBanksIcon),
/* harmony export */   "gq": () => (/* binding */ Upload),
/* harmony export */   "hJ": () => (/* binding */ CustomArrowRight),
/* harmony export */   "kj": () => (/* binding */ IconWeChat),
/* harmony export */   "lO": () => (/* binding */ Pin),
/* harmony export */   "t0": () => (/* binding */ EducationProfessionalIcon),
/* harmony export */   "zJ": () => (/* binding */ IconFacebook)
/* harmony export */ });
/* unused harmony exports MindSet, Compassionate, Integrity, Value, Diversity, StartUp, FlexiHour, Medical, LeavePlans, Genders, Organization, Food, WorkAttire, TechEnable, Employee */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const IconListItemArrow = (props)=>{
    const fill = props.fill || "#F4F1E1";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "18",
        height: "5",
        viewBox: "0 0 18 5",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.9492 4.05L13.9492 1.81066L16.1886 4.05H13.9492Z",
                fill: fill,
                stroke: fill,
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 3.6001H15V4.8001H0V3.6001Z",
                fill: fill
            })
        ]
    });
};
const IconArrowLeft = (props)=>{
    let fill = props.fill || "#F4F1E1";
    if (props.className?.indexOf("fill-current") != -1) fill = "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "16",
        height: "27",
        viewBox: "0 0 16 27",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M0.789062 12.6875C0.28125 13.1953 0.28125 13.9062 0.789062 14.4141L12.6719 26.1953C13.1797 26.7031 13.9922 26.7031 14.3984 26.1953L15.1094 25.4844C15.6172 24.9766 15.6172 24.2656 15.1094 23.7578L4.75 13.5L15.2109 3.34375C15.6172 2.83594 15.6172 2.125 15.2109 1.61719L14.3984 0.90625C13.9922 0.398438 13.1797 0.398438 12.6719 0.90625L0.789062 12.6875Z",
            fill: fill
        })
    });
};
const IconArrowRight = (props)=>{
    let fill = props.fill || "#F4F1E1";
    if (props.className?.indexOf("fill-current") != -1) fill = "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "16",
        height: "27",
        viewBox: "0 0 16 27",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M15.2109 12.6875C15.7188 13.1953 15.7188 13.9062 15.2109 14.4141L3.32812 26.1953C2.82031 26.7031 2.00781 26.7031 1.60156 26.1953L0.890625 25.4844C0.382812 24.9766 0.382812 24.2656 0.890625 23.7578L11.25 13.5L0.789062 3.34375C0.382812 2.83594 0.382812 2.125 0.789062 1.61719L1.60156 0.90625C2.00781 0.398438 2.82031 0.398438 3.32812 0.90625L15.2109 12.6875Z",
            fill: fill
        })
    });
};
const IconArrowRightCircle = (props)=>{
    const fill = props.fill || "#593725";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "32",
        height: "32",
        fill: "none",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "16",
                cy: "16",
                r: "15.5",
                transform: "rotate(180 16 16)",
                stroke: fill
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13 24C13.0353 23.7981 13.0529 23.5831 13.0529 23.3549C13.0529 23.1092 13.0353 22.8941 13 22.7098L20.7255 16.0197L13 9.39393C13.0353 9.26228 13.0529 9.11747 13.0529 8.95949C13.0529 8.79273 13.0353 8.13165 13 8C15.26 9.89731 22.2632 16.0197 22.2632 16.0197C22.2632 16.0197 15.2094 22.1548 13 24Z",
                fill: fill
            })
        ]
    });
};
const IconFacebook = (props)=>{
    const fill = props.fill || "#878095";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_161_159)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.5 0H2C0.895431 0 0 0.895431 0 2V5.848V12V14C0 15.1046 0.895431 16 2 16H6H8.54667V9.804H6.46133V7.38933H8.54667V5.60867C8.54667 3.542 9.80867 2.41667 11.6527 2.41667C12.536 2.41667 13.2947 2.48267 13.516 2.512V4.672L12.2373 4.67267C11.2347 4.67267 11.0407 5.14933 11.0407 5.848V7.39H13.432L13.1207 9.80467H11.0407V16H14C15.1046 16 16 15.1046 16 14V12V3.5V2C16 0.895431 15.1046 0 14 0H11.5H5.5Z",
                    fill: fill
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_161_159",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
const IconWeChat = (props)=>{
    const fill = props.fill || "#878095";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_161_179)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H3.33333H12.6667H14C15.1046 0 16 0.895431 16 2V3.33333V12.6667V14C16 15.1046 15.1046 16 14 16H12.6667H3.33333H2C0.895431 16 0 15.1046 0 14V12.6667V3.33333V2ZM13.3333 9.32067C13.3333 10.1273 12.9007 10.8533 12.2233 11.344C12.1687 11.3833 12.1333 11.4467 12.1333 11.5187L12.1447 11.5867L12.2893 12.1273L12.3067 12.2053C12.3067 12.2647 12.2587 12.3127 12.1993 12.3127L12.1373 12.2927L11.434 11.8867C11.3813 11.856 11.3253 11.8373 11.2633 11.8373L11.1693 11.8513C10.8413 11.9453 10.4873 11.998 10.1207 11.998C8.346 11.998 6.908 10.7993 6.908 9.32067C6.908 7.842 8.346 6.64333 10.1207 6.64333C11.8947 6.64333 13.3333 7.842 13.3333 9.32067ZM2.66667 6.90067C2.66667 5.126 4.39267 3.68733 6.522 3.68733C8.44533 3.68733 10.0393 4.86133 10.33 6.396L10.1207 6.39067C8.17867 6.39067 6.60467 7.70267 6.60467 9.32067C6.60467 9.59333 6.65 9.85733 6.734 10.108L6.522 10.1133C6.082 10.1133 5.65733 10.05 5.26333 9.93667L5.15 9.92C5.076 9.92 5.00933 9.94267 4.94533 9.97933L4.10133 10.4667L4.02733 10.4907C3.956 10.4907 3.89867 10.4333 3.89867 10.362L3.91933 10.268L4.09333 9.62L4.10667 9.538C4.10667 9.452 4.064 9.37533 3.99867 9.32867C3.186 8.74 2.66667 7.86867 2.66667 6.90067ZM8.62133 8.464C8.62133 8.70067 8.81267 8.892 9.04933 8.892C9.286 8.892 9.478 8.70067 9.478 8.464C9.478 8.22733 9.286 8.03533 9.04933 8.03533C8.81267 8.03533 8.62133 8.22733 8.62133 8.464ZM10.7633 8.464C10.7633 8.70067 10.9547 8.892 11.1913 8.892C11.428 8.892 11.62 8.70067 11.62 8.464C11.62 8.22733 11.428 8.03533 11.1913 8.03533C10.9547 8.03533 10.7633 8.22733 10.7633 8.464ZM4.72267 5.872C4.72267 6.156 4.95333 6.386 5.23667 6.386C5.52067 6.386 5.75133 6.156 5.75133 5.872C5.75133 5.588 5.52067 5.358 5.23667 5.358C4.95333 5.358 4.72267 5.588 4.72267 5.872ZM7.29333 5.872C7.29333 6.156 7.52333 6.386 7.80733 6.386C8.09133 6.386 8.32133 6.156 8.32133 5.872C8.32133 5.588 8.09133 5.358 7.80733 5.358C7.52333 5.358 7.29333 5.588 7.29333 5.872Z",
                    fill: fill
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_161_179",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
const IconTwitter = (props)=>{
    const fill = props.fill || "#878095";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_161_173)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM12.7788 6.53436C12.7788 6.43581 12.7788 6.33817 12.7715 6.24053C13.2531 5.9188 13.6695 5.52057 14 5.0634C13.551 5.24744 13.0742 5.36803 12.5862 5.42113C13.1001 5.1372 13.4847 4.69037 13.6685 4.16436C13.1849 4.42894 12.6564 4.61568 12.1051 4.71602C11.1729 3.80123 9.61341 3.75713 8.62182 4.61748C7.98221 5.17229 7.71115 5.99934 7.90957 6.78859C5.9298 6.69725 4.08556 5.8342 2.83559 4.41454C2.18233 5.45308 2.51578 6.78139 3.59756 7.4487C3.20561 7.4379 2.82243 7.34026 2.4802 7.16432V7.19312C2.4802 8.27485 3.30652 9.20629 4.45509 9.42048C4.09287 9.51182 3.71261 9.52532 3.34357 9.45962C3.6663 10.3852 4.59013 11.0192 5.64363 11.0377C4.77148 11.6699 3.69458 12.0132 2.58598 12.0123C2.39001 12.0119 2.19452 12.0011 2 11.9795C3.12614 12.6463 4.43608 13 5.7738 12.9982V13C10.3023 13 12.7788 9.53702 12.7788 6.53436Z",
                    fill: fill
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_161_173",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
const IconLinkedIn = (props)=>{
    const fill = props.fill || "#878095";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_161_167)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.2222 16H1.77778C0.795938 16 0 15.2041 0 14.2222V1.77778C0 0.795938 0.795938 0 1.77778 0H14.2222C15.2041 0 16 0.795938 16 1.77778V14.2222C16 15.2041 15.2041 16 14.2222 16ZM11.4035 13.7778H13.7778V8.90028C13.7778 6.83656 12.6079 5.83872 10.9739 5.83872C9.33913 5.83872 8.65113 7.11177 8.65113 7.11177V6.07408H6.36297V13.7778H8.65113V9.73381C8.65113 8.65025 9.14992 8.00546 10.1046 8.00546C10.9822 8.00546 11.4035 8.62506 11.4035 9.73381V13.7778ZM2.22223 3.64379C2.22223 4.42882 2.8538 5.06534 3.6332 5.06534C4.41259 5.06534 5.04379 4.42882 5.04379 3.64379C5.04379 2.85875 4.41259 2.22223 3.6332 2.22223C2.8538 2.22223 2.22223 2.85875 2.22223 3.64379ZM4.83765 13.7778H2.45168V6.07408H4.83765V13.7778Z",
                    fill: fill
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_161_167",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
const Circle = (props)=>{
    const fill = props.fill || "#878095";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "576",
        height: "576",
        viewBox: "0 0 576 576",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "288",
                cy: "288",
                r: "287.5",
                stroke: "url(#paint0_linear_183_1178)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_183_1178",
                    x1: "288",
                    y1: "0",
                    x2: "288",
                    y2: "576",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "white"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "#7D592C"
                        })
                    ]
                })
            })
        ]
    });
};
const Pin = (props)=>{
    const fill = props.fill || "#0E022C";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.9999 8C7.60431 8 7.21782 7.88265 6.8889 7.66289C6.55999 7.44313 6.30353 7.13079 6.15215 6.76534C6.00076 6.39989 5.96129 5.99775 6.03847 5.60979C6.11564 5.22183 6.30604 4.86548 6.58576 4.58577C6.86548 4.30607 7.22205 4.11559 7.61003 4.03842C7.99802 3.96125 8.40009 4.00091 8.76556 4.15228C9.13103 4.30366 9.44349 4.5599 9.66326 4.8888C9.88304 5.21769 10 5.60446 10 6.00002C10 6.53045 9.78952 7.0391 9.41442 7.41417C9.03933 7.78923 8.53036 8 7.9999 8ZM7.9999 4.80003C7.76255 4.80003 7.53081 4.87032 7.33346 5.00218C7.13611 5.13403 6.98208 5.32148 6.89125 5.54075C6.80042 5.76001 6.77658 6.00132 6.82288 6.2341C6.86919 6.46687 6.98358 6.68063 7.15142 6.84845C7.31925 7.01627 7.53311 7.13056 7.7659 7.17686C7.99869 7.22317 8.24001 7.19943 8.4593 7.1086C8.67858 7.01778 8.86613 6.86395 8.998 6.66661C9.12986 6.46928 9.19996 6.23735 9.19996 6.00002C9.19996 5.68176 9.07382 5.37653 8.84877 5.15149C8.62371 4.92645 8.31817 4.80003 7.9999 4.80003Z",
                fill: fill
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 16C7.94269 15.9995 7.8863 15.9871 7.83398 15.9637C7.78167 15.9403 7.73466 15.9063 7.69609 15.8639C7.46409 15.592 2 9.20799 2 5.99999C2 4.4087 2.6322 2.88254 3.75742 1.75732C4.88264 0.632105 6.4087 0 8 0C9.5913 0 11.1178 0.632105 12.243 1.75732C13.3682 2.88254 14 4.4087 14 5.99999C14 9.19999 8.5363 15.5999 8.3043 15.8639C8.26637 15.9071 8.21926 15.9417 8.1668 15.9651C8.11434 15.9886 8.05747 16.0005 8 16ZM8 0.799999C6.62152 0.802115 5.30012 1.35056 4.32539 2.32529C3.35066 3.30002 2.80212 4.62152 2.8 5.99999C2.8 8.51199 6.848 13.584 8 14.976C9.152 13.584 13.2 8.51199 13.2 5.99999C13.1979 4.62152 12.6493 3.30002 11.6746 2.32529C10.6999 1.35056 9.37848 0.802115 8 0.799999Z",
                fill: fill
            })
        ]
    });
};
const TopDownArrow = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "52",
        height: "184",
        viewBox: "0 0 52 184",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "10",
                width: "32",
                height: "166",
                fill: "url(#paint0_linear_160_2791)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26 184L3.48334 162.25L48.5167 162.25L26 184Z",
                fill: "#E3D29A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_160_2791",
                    x1: "42.0001",
                    y1: "166",
                    x2: "123.858",
                    y2: "96.7218",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "#E3D29A"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "#AE8D55"
                        })
                    ]
                })
            })
        ]
    });
};
const DownTopArrow = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "52",
        height: "187",
        viewBox: "0 0 52 187",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "42",
                y: "187",
                width: "32",
                height: "166",
                transform: "rotate(-180 42 187)",
                fill: "url(#paint0_linear_160_2785)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26 4.54598e-06L48.5167 21.75L3.48334 21.75L26 4.54598e-06Z",
                fill: "#E3D29A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_160_2785",
                    x1: "74.0001",
                    y1: "353",
                    x2: "155.858",
                    y2: "283.722",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "#E3D29A"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "#AE8D55"
                        })
                    ]
                })
            })
        ]
    });
};
const MindSet = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_275_10134)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M31.3 23.2H40.4C41.5 23.2 42.4 22.3 42.4 21.2V19.2",
                        stroke: "#593726",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M31.3 15.0999H43.4C44.5 15.0999 45.4 15.9999 45.4 17.0999C45.4 18.1999 44.5 19.0999 43.4 19.0999H32.3",
                        stroke: "#593726",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M30.8 27.2998H36.4C37.5 27.2998 38.4 26.3998 38.4 25.2998V23.2998",
                        stroke: "#593726",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M8.09998 25.2H11.1C12.1 25.2 13.7 26.1999 15.3 26.7999",
                        stroke: "#593726",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M8.09998 11.0999H13.1C14.1 11.0999 14.6 10.6999 15.2 9.9999C17 7.9999 19.6 6.0999 21.3 5.4999C24.2 4.6999 27.1 2.9999 29 2.0999C29.2 1.9999 29.4 1.9999 29.5 2.0999C30.9 3.2999 30.4 5.1999 29.3 6.2999C28.3 7.1999 25.2 9.7999 25.2 9.7999C24.6 12.8999 22.9 16.0999 20 16.9999",
                        stroke: "#593726",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M42.4 15.0999V13.0999C42.4 11.9999 41.5 11.0999 40.4 11.0999H25",
                        stroke: "#593726",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M3 27.2999H8.1V9.09985H3",
                        stroke: "#593726",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M34.8 37.1998C33.5 36.5998 31.8 36.8998 30.9 37.8998C31 36.5998 30.1 35.0998 28.7 34.5998C27.1 33.8998 24.9 34.4998 24.2 36.7998C23.2 40.1998 26 43.0998 27.4 45.9998C30.4 45.0998 34.4 45.0998 36.2 41.9998C37.4 39.9998 36.4 37.9998 34.8 37.1998Z",
                        stroke: "#AB8250",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M26.1 24.1999C25.1 23.6999 23.8 23.9999 23.1 24.6999C23.2 23.6999 22.5 22.5999 21.4 22.1999C20.2 21.6999 18.5 22.1999 17.9 23.8999C17.1 26.4999 19.3 28.7999 20.3 30.8999C22.6 30.1999 25.7 30.1999 27.1 27.7999C28.1 26.2999 27.3 24.7999 26.1 24.1999Z",
                        stroke: "#AB8250",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M10.1 37.1C11.2 36.6 12.6 36.8 13.4 37.7C13.3 36.6 14.1 35.4 15.2 34.9C16.6 34.3 18.4 34.8 19 36.8C19.9 39.7 17.5 42.1 16.3 44.5C13.8 43.7 10.3 43.7 8.80002 41.1C7.80002 39.5 8.70002 37.7 10.1 37.1Z",
                        stroke: "#AB8250",
                        strokeWidth: "2.0193",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "clip0_275_10134",
                    children: /*#__PURE__*/ _jsx("rect", {
                        width: "44.4",
                        height: "46",
                        fill: "white",
                        transform: "translate(2 1)"
                    })
                })
            })
        ]
    });
};
const Compassionate = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_275_10137)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M30.1 14.9C27.8 14.9 26 13 26 10.6C26 8.20005 27.9 6.30005 30.1 6.30005C32.4 6.30005 34.2 8.20005 34.2 10.6C34.3 12.9 32.4 14.9 30.1 14.9ZM30.1 7.60005C28.6 7.60005 27.4 8.90005 27.4 10.5C27.4 12.1 28.6 13.4 30.1 13.4C31.6 13.4 32.8 12.1 32.8 10.5C32.8 8.90005 31.6 7.60005 30.1 7.60005Z",
                        fill: "#AB8250",
                        stroke: "#AB8250",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M30.1 45.2C29.7 45.2 29.4 44.9 29.4 44.5V31.9C29.4 31.5 29.7 31.2 30.1 31.2C30.5 31.2 30.8 31.5 30.8 31.9V44.5C30.9 44.9 30.5 45.2 30.1 45.2Z",
                        fill: "#AB8250",
                        stroke: "#AB8250",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M18.2 14.9C15.9 14.9 14.1 13 14.1 10.6C14.1 8.20005 16 6.30005 18.2 6.30005C20.4 6.30005 22.3 8.20005 22.3 10.6C22.4 12.9 20.5 14.9 18.2 14.9ZM18.2 7.60005C16.7 7.60005 15.5 8.90005 15.5 10.5C15.5 12.1 16.7 13.4 18.2 13.4C19.7 13.4 20.9 12.1 20.9 10.5C20.9 8.90005 19.7 7.60005 18.2 7.60005Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M18.2 45.2C17.8 45.2 17.5 44.9 17.5 44.5V31.9C17.5 31.5 17.8 31.2 18.2 31.2C18.6 31.2 18.9 31.5 18.9 31.9V44.5C19 44.9 18.6 45.2 18.2 45.2Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M34 45.2001H26.4C26 45.2001 25.7 44.9001 25.7 44.5V23.3C25.7 22.5 25.1 21.9 24.3 21.9C23.5 21.9 22.9 22.5 22.9 23.3V44.6C22.9 45 22.6 45.3 22.2 45.3H14.6C14.2 45.3 13.9 45 13.9 44.6V21.7C8.30003 20.6 4.50003 17.2 2.80003 14.3C2.20003 13.7 2.10003 12.9 2.30003 12.1C2.50003 11.4 3.10003 10.8 3.80003 10.5C4.80003 10.1 5.90003 10.3 6.80003 11.1C10.3 14.6 13.9 16 14.6 16.3H33.9C34.5 16.1 38.2 14.6 41.7 11.1C42.2 10.6 43 10.3 43.7 10.3C44.5 10.4 45.2 10.7 45.7 11.4C46.3 12.3 46.4 13.5 45.8 14.4C44 17.3 40.2 20.7 34.7 21.8V44.6C34.7 44.9 34.4 45.2001 34 45.2001ZM27 43.8H33.2V21.1C33.2 20.7 33.5 20.4 33.8 20.4C39.2 19.5 42.9 16.3 44.5 13.6C44.8 13.1 44.8 12.6 44.5 12.2C44.3 11.9 43.9 11.7 43.6 11.7C43.2 11.7 42.9 11.8 42.7 12C38.5 16.2 34.4 17.6 34.2 17.6C34.1 17.6 34.1 17.6 34 17.6H14.4C14.3 17.6 14.2 17.6 14.2 17.6C14 17.5 9.90003 16.2 5.80003 12.1C5.40003 11.7 4.80003 11.6 4.40003 11.8C4.10003 11.9 3.80003 12.2 3.70003 12.6C3.60003 12.9 3.60003 13.3 3.80003 13.6C5.50003 16.3 9.10003 19.6 14.5 20.4C14.8 20.5 15.1 20.8 15.1 21.1V43.8H21.3V23.3C21.3 21.7 22.6 20.5 24.1 20.5C25.7 20.5 26.9 21.8 26.9 23.3V43.8H27Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M45.7 11.4C45.2 10.8 44.5 10.4 43.7 10.3C42.9 10.2 42.2 10.5 41.7 11.1C38.1 14.7 34.5 16.1 33.9 16.3H26.7C26.4 16.6 26.1 16.9 25.8 17.2C25.7 17.4 25.5 17.5 25.3 17.7H34C34.1 17.7 34.2 17.7 34.2 17.7C34.4 17.6 38.5 16.2 42.7 12.1C42.9 11.9 43.3 11.7 43.6 11.8C44 11.8 44.3 12 44.5 12.3C44.8 12.7 44.8 13.3 44.5 13.7C42.8 16.4 39.2 19.6 33.8 20.5C33.5 20.6 33.2 20.9 33.2 21.2V43.9H27V23.3C27 21.7 25.7 20.5 24.2 20.5C23.9 20.5 23.5 20.6 23.2 20.7C23.1 21.2 23 21.8 23.1 22.5C23.4 22.2 23.7 22 24.2 22C25 22 25.6 22.6 25.6 23.4V44.7C25.6 45.1 25.9 45.4 26.3 45.4H34C34.4 45.4 34.7 45.1 34.7 44.7V21.7C40.2 20.6 44 17.2 45.8 14.3C46.4 13.4 46.3 12.2 45.7 11.4Z",
                        fill: "#AB8250",
                        stroke: "#AB8250",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22.3 23.0001H22.2C21.8 22.9001 21.6 22.6001 21.6 22.2001C22.4 17.9001 25.8 16.4001 25.9 16.4001C26.3 16.3001 26.7 16.4001 26.8 16.8001C26.9 17.2001 26.8 17.6001 26.4 17.7001C26.3 17.7001 23.6 18.9001 22.9 22.5001C23 22.7001 22.7 23.0001 22.3 23.0001Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M40.3 45.2001H8.10002C7.70002 45.2001 7.40002 44.9 7.40002 44.5C7.40002 44.1 7.70002 43.8 8.10002 43.8H40.3C40.7 43.8 41 44.1 41 44.5C41 44.9 40.7 45.2001 40.3 45.2001Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "clip0_275_10137",
                    children: /*#__PURE__*/ _jsx("rect", {
                        width: "44.4",
                        height: "39.4",
                        fill: "white",
                        transform: "translate(2 6)"
                    })
                })
            })
        ]
    });
};
const Integrity = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_275_10140)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M21 16.2C20.9 16.2 20.7 16.2 20.6 16.1C18 14.2 16.9 12.2 16.5 10.8C16.4 10.4 16.3 9.90005 16.2 9.50005C16.2 9.20005 16.2 9.10005 16.2 9.10005C16.2 6.50005 18.2 4.30005 20.7 4.30005C21.8 4.30005 22.8 4.70005 23.6 5.50005C24.4 4.70005 25.5 4.30005 26.5 4.30005C29 4.30005 31 6.50005 31 9.20005C31 9.20005 31 9.40005 31 9.60005C31 10 30.9 10.5 30.7 10.9C30.3 12.2 29.2 14.3 26.6 16.2C26.3 16.4 25.9 16.3 25.7 16.1C25.5 15.8 25.6 15.4 25.8 15.2C28.1 13.5 29 11.8 29.4 10.6C29.5 10.3 29.6 9.90005 29.6 9.60005C29.6 9.40005 29.6 9.30005 29.6 9.30005C29.6 7.30005 28.2 5.80005 26.4 5.80005C25.5 5.80005 24.6 6.30005 24 7.10005C24.1 6.90005 23.9 7.00005 23.7 7.00005C23.5 7.00005 23.3 6.90005 23.2 6.70005C22.6 5.90005 21.7 5.50005 20.8 5.50005C19.1 5.50005 17.6 7.10005 17.6 9.00005C17.6 9.00005 17.6 9.10005 17.6 9.30005C17.6 9.70005 17.7 10 17.8 10.3C18.2 11.5 19.1 13.2 21.4 14.9C21.7 15.1 21.8 15.5 21.5 15.8C21.4 16.1 21.2 16.2 21 16.2Z",
                        fill: "#AB8250",
                        stroke: "#AB8250",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M11.7 17.2001C9.6 17.2001 8 15.4001 8 13.3001C8 11.1001 9.7 9.40015 11.7 9.40015C13.7 9.40015 15.4 11.2001 15.4 13.3001C15.4 15.4001 13.7 17.2001 11.7 17.2001ZM11.7 10.7001C10.4 10.7001 9.3 11.9001 9.3 13.3001C9.3 14.7001 10.4 15.9001 11.7 15.9001C13 15.9001 14.1 14.7001 14.1 13.3001C14.1 11.9001 13 10.7001 11.7 10.7001Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M11.7 44.4C11.3 44.4 11 44.1 11 43.7V32.4C11 32 11.3 31.7 11.7 31.7C12.1 31.7 12.4 32 12.4 32.4V43.7C12.3 44.1 12 44.4 11.7 44.4Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M8.2 30.7001C7.8 30.7001 7.5 30.4001 7.5 30.0001V24.3001C7.5 23.9001 7.8 23.6001 8.2 23.6001C8.6 23.6001 8.9 23.9001 8.9 24.3001V30.0001C8.9 30.4001 8.6 30.7001 8.2 30.7001Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M35.7 17.2001C33.6 17.2001 32 15.4001 32 13.3001C32 11.1001 33.7 9.40015 35.7 9.40015C37.8 9.40015 39.4 11.2001 39.4 13.3001C39.4 15.4001 37.7 17.2001 35.7 17.2001ZM35.7 10.7001C34.4 10.7001 33.3 11.9001 33.3 13.3001C33.3 14.7001 34.4 15.9001 35.7 15.9001C37 15.9001 38.1 14.7001 38.1 13.3001C38.1 11.9001 37 10.7001 35.7 10.7001Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M35.7 44.4C35.3 44.4 35 44.1 35 43.7V32.4C35 32 35.3 31.7 35.7 31.7C36.1 31.7 36.4 32 36.4 32.4V43.7C36.3 44.1 36 44.4 35.7 44.4Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M39.0999 44.4002H32.2999C31.9 44.4002 31.6 44.1002 31.6 43.7002V23.3002C26.7 22.3002 23.2 19.2002 21.6 16.6002C21 15.6002 21.2 14.3002 22.2 13.5002C23.2 12.8002 24.5 12.8002 25.4 13.7002C28.6 16.9002 31.7999 18.2002 32.4 18.4002H39.0999C41.2999 18.4002 43.0999 20.2002 43.0999 22.4002V30.0002C43.0999 31.3002 42 32.4002 40.7 32.4002C40.3 32.4002 40 32.3002 39.7 32.2002V43.8002C39.7 44.1002 39.3999 44.4002 39.0999 44.4002ZM32.9 43.0002H38.4V30.0002C38.4 29.6002 38.6999 29.3002 39.0999 29.3002C39.4999 29.3002 39.7999 29.6002 39.7999 30.0002C39.7999 30.6002 40.2999 31.0002 40.7999 31.0002C41.4 31.0002 41.7999 30.5002 41.7999 30.0002V22.4002C41.7999 20.9002 40.5999 19.7002 39.0999 19.7002H32.2999C32.1999 19.7002 32.2 19.7002 32.1 19.7002C31.9 19.6002 28.2 18.4002 24.5 14.7002C24.1 14.3002 23.5 14.3002 23.1 14.6002C22.7 14.9002 22.4999 15.5002 22.7999 15.9002C24.2999 18.4002 27.5999 21.3002 32.4 22.1002C32.7 22.2002 33 22.4002 33 22.8002V43.0002H32.9Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M39.1 30.7001C38.7 30.7001 38.4 30.4001 38.4 30.0001V24.3001C38.4 23.9001 38.7 23.6001 39.1 23.6001C39.5 23.6001 39.8 23.9001 39.8 24.3001V30.0001C39.7 30.4001 39.4 30.7001 39.1 30.7001Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M42.5 44.4H4.89995C4.49995 44.4 4.19995 44.1 4.19995 43.7C4.19995 43.3 4.49995 43 4.89995 43H42.5C42.9 43 43.2 43.3 43.2 43.7C43.1 44.1 42.7999 44.4 42.5 44.4Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M23.7 40.3C23.3 40.3 23 40 23 39.6V37.2C23 36.8 23.3 36.5 23.7 36.5C24.1 36.5 24.4 36.8 24.4 37.2V39.6C24.3 40 24 40.3 23.7 40.3Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M18.9999 9.70015C18.5999 9.70015 18.2999 9.40015 18.2999 9.00015C18.2999 7.60015 19.3999 6.40015 20.6999 6.40015H20.7999C21.1999 6.40015 21.3999 6.70015 21.3999 7.10015C21.3999 7.50015 21.0999 7.70015 20.6999 7.70015H20.5999C19.9999 7.70015 19.4999 8.30015 19.4999 8.90015C19.5999 9.40015 19.2999 9.70015 18.9999 9.70015Z",
                        fill: "#AB8250",
                        stroke: "#AB8250",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M23.7 33.7001C23.3 33.7001 23 33.4001 23 33.0001V26.6001C23 26.2001 23.3 25.9001 23.7 25.9001C24.1 25.9001 24.4 26.2001 24.4 26.6001V33.0001C24.3 33.4001 24 33.7001 23.7 33.7001Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M15.1 44.4H8.19998C7.79998 44.4 7.49998 44.1 7.49998 43.7V32.1C7.19998 32.2 6.79998 32.3 6.49998 32.3C5.19998 32.3 4.09998 31.2 4.09998 29.9V22.3C4.09998 20.1 5.89998 18.3 8.09998 18.3H15C15.6 18.1 18.8 16.8 22 13.6C22.4 13.3 23 13 23.7 13C24.1 13 24.4 13.3 24.4 13.7C24.4 14.1 24.1 14.4 23.7 14.4C23.5 14.4 23.3 14.4 23 14.6C22.6 14.9 22.4 15.5 22.7 15.9C23.1 16.5 23.6 17.1 24.1 17.8C24.3 18.1 24.3 18.5 24.1 18.7C22.8 20.1 20 22.5 15.7 23.4V43.8C15.7 44.1 15.4 44.4 15.1 44.4ZM8.89998 43H14.4V22.8C14.4 22.5 14.6 22.2 15 22.1C18.8 21.5 21.4 19.5 22.8 18.2C22.4 17.7 22 17.1 21.6 16.6C21.5 16.4 21.4 16.3 21.4 16.1C18.2 18.7 15.5 19.7 15.3 19.7C15.2 19.7 15.2 19.7 15.1 19.7H8.19998C6.69998 19.7 5.49998 20.9 5.49998 22.4V30C5.49998 30.6 5.99998 31 6.49998 31C6.99998 31 7.49998 30.5 7.49998 30C7.49998 29.6 7.79998 29.3 8.19998 29.3C8.59998 29.3 8.89998 29.6 8.89998 30V43Z",
                        fill: "#593726",
                        stroke: "#593726",
                        strokeWidth: "0.3826",
                        strokeMiterlimit: "10"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "clip0_275_10140",
                    children: /*#__PURE__*/ _jsx("rect", {
                        width: "39.3",
                        height: "40.6",
                        fill: "white",
                        transform: "translate(4 4)"
                    })
                })
            })
        ]
    });
};
const Value = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_275_10143)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M24.5 4V11.6",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M10.9 9.8999L16.1 15.0999",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M5 23.5H12.6",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M10.9 37L16.1 31.8",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M38 37L32.8 31.8",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M43.9001 23.5H36.3",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M38 9.8999L32.8 15.0999",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M27.9 42.1001H27L26.2 42.9001H24.5H22.8L21.9 42.1001H21.1",
                        stroke: "#AB8250",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M19.4 37H29.5",
                        stroke: "#AB8250",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M20.2 39.5H28.7",
                        stroke: "#AB8250",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M28.7 35.3V33.6C28.7 32.1 29.2 30.7 30.3 29.6C31.9 28 32.9 26 32.9 23.5C32.9 18.8 29.1 15 24.4 15C19.7 15 15.9 18.8 15.9 23.5C15.9 26 16.9 28 18.5 29.6C19.6 30.7 20.1 32.1 20.1 33.6V35.3",
                        stroke: "#AB8250",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M18.6 9.3999L19.9 12.4999",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M10.4 17.6001L13.5 18.9001",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M10.4 29.3L13.5 28",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M38.5 29.3L35.4 28",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M38.5 17.6001L35.4 18.9001",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M30.3 9.3999L29 12.4999",
                        stroke: "#593726",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M21.9 26L24.5 27.7L27 26",
                        stroke: "#AB8250",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M24.5 27.7V35.2999",
                        stroke: "#AB8250",
                        strokeWidth: "1.6927",
                        strokeMiterlimit: "10"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "clip0_275_10143",
                    children: /*#__PURE__*/ _jsx("rect", {
                        width: "38.9",
                        height: "39.8",
                        fill: "white",
                        transform: "translate(5 4)"
                    })
                })
            })
        ]
    });
};
const Diversity = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_275_10146)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M4.90002 5.80005C4.90002 5.80005 7.00002 7.80005 7.40002 8.90005C7.80002 10 7.30002 11.1 7.90002 12.8C8.60002 14.7 9.10002 15.2 9.70002 16.8C10.4 18.6 10.6 21.5 11.6 23.9C12.3 24.7 14.8 24 15 22C15.2 20 14.5 18.9 14.6 17.7C14.7 16.9 15 16.2 15.2 15.6C15.4 15.3 16 15.2 16.5 15.1C17.9 15 21.4 15 21.4 15L27.2 16.6L31.5 19.9C32.5 20.6 33.9 20.1 34.3 19.2C34.7 18.3 34.3 17.3 33.5 16.6L29.7 13.2L25.3 9.60005C25.3 9.60005 17.4 6.10005 16.4 5.40005C15.4 4.70005 15.2 3.80005 15.2 3.80005",
                        stroke: "#593726",
                        strokeWidth: "1.776",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22.8 15.5L26.5 19.2C26.5 19.2 28.1 21.7 28.9 22.8C29.5 23.7 30.9 23.9 31.8 23.1C32.6 22.4 32.7 21.2 31.9 20.2",
                        stroke: "#593726",
                        strokeWidth: "1.776",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M18.2001 15.2L21.7001 19.2C21.7001 19.2 23.2001 21.4 24.0001 22.6C24.8001 23.7 25.8001 24 26.8001 23.4C27.8001 22.7 27.9001 21.4 27.3001 20.5",
                        stroke: "#593726",
                        strokeWidth: "1.776",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M42.4 44.6001C42.4 44.6001 40.7 42.2001 40.5 41.1001C40.3 40.0001 41 38.9001 40.7 37.2001C40.3 35.2001 40 34.6001 39.6 32.9001C39.2 30.9001 39.6 28.2001 39 25.5001C38.5 24.6001 36 24.8001 35.4 26.8001C34.8 28.7001 35.3 29.9001 35 31.1001C34.8 31.8001 34.4 32.5001 34 33.0001C33.8 33.3001 33.1 33.3001 32.6 33.2001C31.2 33.0001 27.7 32.4001 27.7 32.4001L22.3 29.7001L18.6 25.7001C17.7 24.8001 16.3 25.0001 15.7 25.9001C15.2 26.7001 15.3 27.8001 16.1 28.6001L19.2 32.7001L22.8 37.0001C22.8 37.0001 29.9 41.9001 30.8 42.8001C31.7 43.7001 31.7 44.6001 31.7 44.6001",
                        stroke: "#AB8250",
                        strokeWidth: "1.776",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M27.7 32.4001L25.5 30.0001C25.5 30.0001 24.3 27.4001 23.6 26.7001C22.7 25.7001 21.7 25.7001 20.6 25.8001C19.6 25.9001 19.1 26.3001 19.1 26.3001",
                        stroke: "#AB8250",
                        strokeWidth: "1.776",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "clip0_275_10146",
                    children: /*#__PURE__*/ _jsx("rect", {
                        width: "39.3",
                        height: "42.5",
                        fill: "white",
                        transform: "translate(4 3)"
                    })
                })
            })
        ]
    });
};
const StartUp = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M26 27.4999L14.8 1.3999",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M29.4 35.7L27.5 31.2",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M33.9 46.7999L31 39.7",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M15.7 29.5999C17.633 29.5999 19.2 28.0329 19.2 26.0999C19.2 24.1669 17.633 22.5999 15.7 22.5999C13.767 22.5999 12.2 24.1669 12.2 26.0999C12.2 28.0329 13.767 29.5999 15.7 29.5999Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M5.70001 33.5999C7.63301 33.5999 9.20001 32.0329 9.20001 30.0999C9.20001 28.1669 7.63301 26.5999 5.70001 26.5999C3.76702 26.5999 2.20001 28.1669 2.20001 30.0999C2.20001 32.0329 3.76702 33.5999 5.70001 33.5999Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M9.20001 46.7998L11.6 35.7998C12 33.9998 13.3 33.0998 15.3 32.6998L21.4 31.6998L27.4 26.2998C27.4 26.2998 29.4 29.6998 27.2 31.7998L22.8 35.9998L16.2 37.9998",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18.3 46.7999L20.3 36.7",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M38.5 32.5999C40.433 32.5999 42 31.0329 42 29.0999C42 27.1669 40.433 25.5999 38.5 25.5999C36.567 25.5999 35 27.1669 35 29.0999C35 31.0329 36.567 32.5999 38.5 32.5999Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M47 46.7999L44.7 38.9C44.3 37.1 43.2 35.7 40 35.7C37.8 35.7 27.9 35.7 27.9 35.7C27.9 35.7 28.6 39.7 31.9 39.7H40",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M39.5 46.7999L37 39.7",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M1 46.7999L2.5 39.7999C2.9 37.9999 4.2 37.1 6.2 36.7L11.2 35.7",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16.4 5.19995L2.5 11.1L7 14.7L6.4 20.4L20.4 14.4",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            })
        ]
    });
};
const FlexiHour = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M11 36V46",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11 42H4L1 29H20L23 42H14",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M27.5 33.0001C29.5 33.0001 31 31.5001 31 29.6001V28.5001C31 26.6001 29.5 25.1001 27.5 25.1001C25.5 25.1001 24 26.6001 24 28.5001V29.6001C24 31.5001 25.5 33.0001 27.5 33.0001Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M41 46H1",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M25 36.1C25.4 36.1 25.8 36 26.2 36H28.6C30.5 36 33 36.5 33.8 38.3C34.7 40.4 35 41.1 35.7 42.7C36.2 44 35.8 46 34.1 46C34.1 46 26.6 46 25.8 46C25.8 44.5 25.8 43 27.6 42.5L31.1 42L30.7 41.2",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M29 8V19H35",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 25C11.3 23.1 11 21.1 11 19C11 9.1 19.1 1 29 1C38.9 1 47 9.1 47 19C47 26.1 42.9 32.2 37 35.1",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
const Medical = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M32 20C30.9 21.5 23.8 24.5 21 24.5C21 29.4 21 32 21 36.2C21 41.2 31.4 46.8 32 46.9C32.6 46.7 43 40.8 43 36.7C43 32.5 43 29.3 43 24.4C40 24.5 33.1 21.5 32 20Z",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M34 31V27H30V31H26V35H30V39H34V35H38V31H34Z",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M19.4 41H5V1H35V18",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 12H28",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 8H28",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 16H28",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 33H17",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
const LeavePlans = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M11.605 35.5654V45.0789",
                stroke: "#593725",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.605 41.3284H4.92723L2 28.8877H20.2037L23.0395 41.3284H14.4407",
                stroke: "#593725",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M27.3388 32.7296C29.2598 32.7296 30.7235 31.266 30.7235 29.4365V28.3388C30.7235 26.5093 29.2598 25.0457 27.3388 25.0457C25.4178 25.0457 23.9542 26.5093 23.9542 28.3388V29.4365C24.0457 31.1746 25.5093 32.7296 27.3388 32.7296Z",
                stroke: "#593725",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M40.3285 45.0791H2",
                stroke: "#593725",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M25.0519 35.6569C25.4178 35.6569 25.8752 35.5654 26.2411 35.5654H28.528C30.266 35.5654 32.7359 36.0228 33.5592 37.7609C34.3824 39.7733 34.7483 40.5051 35.3887 41.9688C35.9375 43.1579 35.4802 45.1704 33.9251 45.1704C33.9251 45.1704 26.6984 45.1704 26.0581 45.1704C26.0581 43.7068 26.0581 42.2432 27.7047 41.8773L30.9978 41.3284L30.6319 40.5966",
                stroke: "#593725",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.605 25.0458V7.84824C11.605 6.75053 12.4283 5.92725 13.526 5.92725H44.079C45.1767 5.92725 46 6.75053 46 7.84824V30.8087C46 31.9065 45.1767 32.7297 44.079 32.7297H34.5655",
                stroke: "#AB8250",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18.2828 3V7.84823",
                stroke: "#AB8250",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M39.3224 3V7.84823",
                stroke: "#AB8250",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.605 13.5198H46",
                stroke: "#AB8250",
                strokeWidth: "2.0909",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
const Genders = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M16 47V33",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11 42H21",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M40 1L29.4 11.6",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M33 1H40V8",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M17.8 15.2C21.9 16 25 19.7 25 24C25 24.1 25 24.3 25 24.4C24.9 26.1 24.4 27.7 23.5 29C21.9 31.4 19.1 33 16 33C11 33 7 29 7 24C7 20.8 8.7 18 11.2 16.4",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M21 26.8C17 25.9 14 22.3 14 18C14 13 18 9 23 9C28 9 32 13 32 18C32 21.2 30.3 24 27.8 25.6",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
const Organization = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M18.4 32.7001C20.6 32.7001 22.5 30.6 22.5 28.6V19.4C22.5 16 15.8 14.3 12.3 14.3C8.8 14.3 2 16 2 19.4V28.6C2 30.6 3.9 32.7001 6.1 32.7001",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M29.6 32.7001C31.6 32.7001 33.7 31.6 33.7 29.6V19.4C33.7 16 27.7 14.3 24.5 14.3C24.2 14.3 22.5 14.3 22.5 14.3",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12.2 11.2C14.6 11.2 16.3 9.5 16.3 7.1V5.1C16.3 2.7 14.6 1 12.2 1C9.80001 1 8.10001 2.7 8.10001 5.1V7.1C8.10001 9.6 9.80001 11.2 12.2 11.2Z",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M29.6 46.9999V21.3999",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18.4 46.9999V21.3999",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.10001 21.3999V46.9999",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12.2 31.7V47",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M24.5 11.2C26.9 11.2 28.6 9.5 28.6 7.1V5.1C28.6 2.7 26.9 1 24.5 1C22.1 1 20.4 2.7 20.4 5.1V7.1C20.4 9.6 22.1 11.2 24.5 11.2Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M41.9 32.7001C43.9 32.7001 46 31.6 46 29.6V19.4C46 16 40 14.3 36.8 14.3C36.5 14.3 34.8 14.3 34.8 14.3",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M41.9 46.9999V21.3999",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M36.8 11.2C39.2 11.2 40.9 9.5 40.9 7.1V5.1C40.9 2.7 39.2 1 36.8 1C34.4 1 32.7 2.7 32.7 5.1V7.1C32.7 9.6 34.4 11.2 36.8 11.2Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            })
        ]
    });
};
const Food = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_275_10124)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M13.3 25.5C13.8 25.9 14.5 26.1 15.4 26.1C16.2 26.1 17 25.9 17.5 25.5",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M15.4 26.1C15.4 26.1 15.4 22.1 15.4 19.8C15.4 17.5 16.8 14.7 19 13.2",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M1 10.3C4.7 9.69999 13.7 11 12.5 18.2C5.7 19.5 2 15 1 10.3Z",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M17.5 40.7H18.5",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M14.4 37.6001H15.4",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M19.6 36.5H20.6",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M12.5 18.2L15.4 19.7999",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M24.8 20.9V8.30005H41.5V32.3V43.8C41.5 45 40.6 45.9001 39.4 45.9001H26.9",
                        stroke: "#593725",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M30 27.1L39.5 2L47.8 1",
                        stroke: "#593725",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M18.5 22.3C24 23.7 28 28.6 28 34.5C28 41.4 22.3 47 15.4 47C8.50002 47 2.90002 41.4 2.90002 34.5C2.90002 28.7 6.90002 23.8 12.3 22.4",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M24.8 16.1999C27.3 15.0999 30.7 15.3999 34 16.4999",
                        stroke: "#593725",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M36.7 17.4C38.8 18.4 40.5 16.2 41.6 16.2",
                        stroke: "#593725",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "clip0_275_10124",
                    children: /*#__PURE__*/ _jsx("rect", {
                        width: "48",
                        height: "48",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
const WorkAttire = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "52",
        height: "48",
        viewBox: "0 0 52 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M9.43331 27.45C9.43331 27.45 5.21664 27.0666 2.34164 23.6166C1.95831 23.1375 1.76664 22.4666 1.95831 21.7958L4.73748 11.4458C5.12081 10.1041 5.69581 8.95412 6.55831 7.99578C7.51664 7.03745 8.85831 5.79162 10.2958 4.83328C11.6375 3.97078 13.4583 3.01245 14.9916 2.34162C16.3333 1.76662 17.7708 1.95828 18.9208 2.82078C20.3583 3.97078 22.7541 5.40828 25.5333 5.40828",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12.2125 16.6208V41.7292C12.2125 42.975 12.9791 44.125 14.225 44.6042C16.2375 45.275 19.7833 46.0417 25.5333 46.0417",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M38.8542 16.6208V41.7292C38.8542 42.975 38.0875 44.125 36.8417 44.6042C34.8292 45.275 31.2833 46.0417 25.5333 46.0417",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M41.5375 27.45C41.5375 27.45 45.7542 27.0666 48.6292 23.6166C49.0125 23.1375 49.2042 22.4666 49.0125 21.7958L46.2333 11.4458C45.85 10.1041 45.275 8.95412 44.4125 7.99578C43.4542 7.03745 42.2083 5.79162 40.675 4.83328C39.3333 3.97078 37.5125 3.01245 35.9792 2.34162C34.6375 1.76662 33.2 1.95828 32.05 2.82078C30.6125 3.97078 28.2167 5.40828 25.4375 5.40828",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16.9083 5.6958C16.9083 5.6958 19.0167 9.91247 25.5333 9.91247C32.05 9.91247 34.1583 5.79163 34.1583 5.79163",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
const TechEnable = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M29 12.2C29.8 12 30.6 12 31.3 12H33.7C35.6 12 38.1 12.5 38.9 14.3C39.8 16.4 40.1 17.1 40.8 18.7C41.3 20 40.9 22 39.2 22C39.2 22 31.7 22 30.9 22C30.9 20.5 30.9 19 32.7 18.5L36.2 18L35.8 17.2",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M32 37V47",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M32 43H39L42 30H23L20 43H29",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14.5 34.0001C12.5 34.0001 11 32.5001 11 30.6001V29.5001C11 27.6001 12.5 26.1001 14.5 26.1001C16.5 26.1001 18 27.6001 18 29.5001V30.6001C18 32.5001 16.5 34.0001 14.5 34.0001Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M3 47H44",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18 37.2C17.2 37 16.4 37 15.7 37H13.3C11.4 37 8.89998 37.5 8.09998 39.3C7.19998 41.4 6.89998 42.1 6.19998 43.7C5.69998 44.9 6.09998 47 7.79998 47C7.79998 47 15.3 47 16.1 47C16.1 45.5 16.1 44 14.3 43.5L10.8 43L11.2 42.2",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M15 12V22",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M15 18H8L5 5H24L27 18H18",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M32.5 9C34.5 9 36 7.5 36 5.6V4.4C36 2.5 34.5 1 32.5 1C30.5 1 29 2.5 29 4.4V5.5C29 7.5 30.5 9 32.5 9Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M44 22H3",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
const Employee = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12.4 28.1999V26.0999L6.10004 18.7999L4.20004 15.5999C3.60004 13.8999 4.40004 10.9999 6.10004 10.3999L9.20004 15.5999L13.4 19.7999C14.1 20.4999 15.5 20.7999 16.4 20.7999H18.7C19.7 20.7999 21 20.3999 21.7 19.7999L25.9 15.5999L29 10.3999C30.7 10.9999 31.6 13.8999 30.9 15.5999L29 18.7999L22.7 26.0999V36.5999",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M17.6 10.3999C19.5 10.3999 20.7 11.7999 20.7 13.4999V14.4999C20.7 16.1999 19.4 17.5999 17.6 17.5999C15.8 17.5999 14.5 16.1999 14.5 14.4999V13.4999C14.5 11.7999 15.7 10.3999 17.6 10.3999Z",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M31.2001 34.5C29.3001 34.5 28.1001 33.1 28.1001 31.4V30.4C28.1001 28.7 29.4001 27.3 31.2001 27.3C33.0001 27.3 34.3001 28.7 34.3001 30.4V31.4C34.4001 33.1 33.1001 34.5 31.2001 34.5Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M25 47V41.7999C25 38.2999 28.7 37.5999 31.2 37.5999H32.4C33.2 37.5999 34.3 37.0999 35.4 36.5999L39.6 34.5L42.7 27.2C44.4 27.8 45.3 31.7 44.6 33.4L42.7 37.5999L36.5 42.7999V47",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14.5 37.5999C16.4 37.5999 17.6 36.1999 17.6 34.4999V33.4999C17.6 31.7999 16.3 30.3999 14.5 30.3999C12.7 30.3999 11.4 31.7999 11.4 33.4999V34.4999C11.4 36.1999 12.6 37.5999 14.5 37.5999Z",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8.20007 47V44.9C8.20007 41.4 11.9001 40.7 14.5001 40.7C17.1001 40.7 20.8001 41.4 20.8001 44.9V47",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M17.6001 6.2V1",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M21.9 7.3001L25 4.1001",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M13.5 7.3001L10.4 4.1001",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            })
        ]
    });
};
const Upload = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "48",
        height: "49",
        viewBox: "0 0 48 49",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M28.7826 32.2318H38.3478H39.3043C43.0348 32.2318 46 29.2666 46 25.5362C46 21.8058 43.0348 18.8405 39.3043 18.8405C38.6348 18.8405 37.8696 18.9362 37.2957 19.1275C37.3913 18.7449 37.3913 18.3623 37.3913 17.884C37.3913 14.1536 34.4261 11.1884 30.6957 11.1884C29.0696 11.1884 27.5391 11.7623 26.2957 12.8145C25.0522 9.08402 21.513 6.40576 17.3043 6.40576C12.0435 6.40576 7.73913 10.7101 7.73913 15.971C7.73913 17.0232 7.93043 17.9797 8.21739 18.8405C4.67826 19.1275 2 21.9971 2 25.5362C2 29.2666 4.96522 32.2318 8.69565 32.2318H17.3043",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.174 42.7536V28.4058H16.3479L23.0436 19.7971L29.7392 28.4058H25.9131V42.7536",
                stroke: "#AB8250",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.2957 12.8145C26.5826 13.484 26.6783 14.2492 26.7739 15.0145",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M37.2957 19.1274C37.1044 19.8927 36.8174 20.6579 36.4348 21.3274",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.21729 18.8406C9.07815 18.7449 9.84337 18.8406 10.7042 19.1275",
                stroke: "#593725",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            })
        ]
    });
};
const IconTechnologyInternetCompanies = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "140",
        height: "140",
        viewBox: "0 0 140 140",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M79.5418 30.3125C79.5418 28.5925 80.9362 27.1981 82.6563 27.1981C84.3764 27.1981 85.7708 28.5925 85.7708 30.3125C85.7708 32.0326 84.3764 33.427 82.6563 33.427C80.9362 33.427 79.5418 32.0326 79.5418 30.3125ZM82.6563 24.677C79.5439 24.677 77.0207 27.2001 77.0207 30.3125C77.0207 32.8829 78.7415 35.0513 81.0938 35.7287V41.0937H72.1875V28.1251H69.0625V41.0937H60.1563V28.1251H57.0313V41.0937H41.0938V57.0314H35.7287C35.0513 54.679 32.8829 52.9582 30.3125 52.9582C27.2001 52.9582 24.677 55.4813 24.677 58.5938C24.677 61.7062 27.2001 64.2293 30.3125 64.2293C32.8828 64.2293 35.0512 62.5086 35.7286 60.1564H41.0938V69.0625H28.1251V72.1875H41.0938V81.2501H28.1251V84.3751H41.0938V100.312H57.0313V105.522C54.679 106.199 52.9582 108.367 52.9582 110.938C52.9582 114.05 55.4814 116.573 58.5938 116.573C61.7062 116.573 64.2293 114.05 64.2293 110.938C64.2293 108.367 62.5086 106.199 60.1563 105.522V100.312H69.0625V113.125H72.1875V100.312H81.2501V113.125H84.3751V100.312H100.313V84.2189H105.521C106.199 86.5712 108.367 88.2919 110.938 88.2919C114.05 88.2919 116.573 85.7687 116.573 82.6563C116.573 79.5439 114.05 77.0208 110.938 77.0208C108.367 77.0208 106.199 78.7415 105.521 81.0939H100.313V72.1875H113.125V69.0625H100.313V60.1564H113.125V57.0314H100.313V41.0937H84.2188V35.7287C86.5711 35.0513 88.2919 32.8829 88.2919 30.3125C88.2919 27.2001 85.7687 24.677 82.6563 24.677ZM44.2188 97.1875V44.2187H97.1875V97.1875H44.2188ZM87.6563 53.75H53.75V87.6562H87.6563V53.75ZM56.875 84.5312V56.875H84.5313V84.5312H56.875ZM55.4793 110.938C55.4793 109.218 56.8737 107.823 58.5938 107.823C60.3139 107.823 61.7082 109.218 61.7082 110.938C61.7082 112.658 60.3139 114.052 58.5938 114.052C56.8737 114.052 55.4793 112.658 55.4793 110.938ZM107.823 82.6563C107.823 80.9362 109.217 79.5418 110.938 79.5418C112.658 79.5418 114.052 80.9362 114.052 82.6563C114.052 84.3764 112.658 85.7708 110.938 85.7708C109.217 85.7708 107.823 84.3764 107.823 82.6563ZM27.1981 58.5938C27.1981 56.8737 28.5925 55.4793 30.3125 55.4793C32.0326 55.4793 33.427 56.8737 33.427 58.5938C33.427 60.3138 32.0326 61.7082 30.3125 61.7082C28.5925 61.7082 27.1981 60.3138 27.1981 58.5938Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "70",
                cy: "70",
                r: "68.5",
                stroke: "currentColor",
                strokeWidth: "3"
            })
        ]
    });
};
const IconOrganizationsLedByArta = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17 12.5V50.975H18.5V30.65H26.45V39.35H27.95V39.05L29.225 39.05L29.7358 39.05L29.7386 39.0501C29.7513 39.0506 29.7685 39.051 29.7897 39.0514C29.8322 39.0521 29.8912 39.0524 29.9645 39.0509L30.003 39.05H46.325V17.975H35.1469C35.1129 16.7398 34.7983 15.7641 34.3005 15.0054C33.7745 14.2036 33.0758 13.6925 32.3972 13.3696C31.723 13.0488 31.0588 12.9086 30.5706 12.8469C30.3245 12.8158 30.1178 12.804 29.9697 12.8001C29.8954 12.7981 29.8355 12.7981 29.7921 12.7987C29.7705 12.799 29.7529 12.7994 29.7397 12.7999L29.7362 12.8H18.5V12.5H17ZM18.5 14.3V29.15H29.7358L29.7386 29.1499C29.7513 29.1494 29.7685 29.149 29.7897 29.1486C29.8322 29.1479 29.8912 29.1476 29.9645 29.1491C30.1107 29.1519 30.3151 29.1616 30.5587 29.1885C31.0418 29.2417 31.7002 29.3648 32.3698 29.6509C32.8279 29.8467 33.3009 30.1233 33.725 30.5131V18.2H33.65C33.65 17.1049 33.3906 16.3528 33.0464 15.8282C32.7005 15.301 32.2367 14.9544 31.7528 14.7241C31.2645 14.4918 30.7662 14.3835 30.3826 14.3351C30.1927 14.3111 30.0361 14.3024 29.9299 14.2996C29.877 14.2982 29.8371 14.2982 29.8123 14.2986L29.7869 14.2991L29.7834 14.2992L29.7681 14.3H18.5ZM35.225 34.625V19.475H44.825V37.55H33.8671C34.0129 37.4029 34.1517 37.2412 34.2806 37.0634C34.7419 36.4273 35.0499 35.6229 35.1295 34.625H35.225ZM30.3944 37.5206C30.2282 37.5389 30.0869 37.5468 29.9819 37.55L29.7681 37.55L29.225 37.55L27.95 37.55V30.65H29.7681L29.7843 30.6492L29.7851 30.6491L29.7881 30.649L29.8147 30.6484C29.8404 30.648 29.8812 30.6477 29.9351 30.6488C30.0432 30.6509 30.202 30.6582 30.3944 30.6794C30.7832 30.7223 31.2873 30.8195 31.7802 31.0302C32.2707 31.2399 32.7292 31.5524 33.0663 32.0172C33.3986 32.4755 33.65 33.1324 33.65 34.1H33.725V34.1H33.65C33.65 35.0675 33.3986 35.7245 33.0663 36.1828C32.7292 36.6476 32.2707 36.9601 31.7802 37.1698C31.2873 37.3805 30.7832 37.4777 30.3944 37.5206Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "31",
                stroke: "currentColor",
                strokeWidth: "2"
            })
        ]
    });
};
const IconBanksBasedInHK = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M42.9445 15.5532H39.725V12.5H38.225V15.5532H34.9945V19.204H32.7445V25.6779H28.3945V32.2249H27.0042V26.0309H25.3542V22.9066H23V20.45H21.5V22.9066H19.1292V26.0309H17.4792V32.2249H14.75V52.2499H29.675V52.2279H35.0196V52.2471H43.0446V52.2279H49.6195V25.6779H45.1945V19.204H42.9445V15.5532ZM34.9945 20.7282H42.9445V20.704H43.6945V25.654H34.2445V20.704H34.9945V20.7282ZM48.1195 50.7279H43.0446V45.0471H35.0196V50.7279H29.8945V27.1779H48.1195V50.7279ZM36.5196 50.7279H41.5446V46.5471H36.5196V50.7279ZM41.4445 19.204H36.4945V17.0532H41.4445V19.204ZM32.525 29.975H35.375V32.825H32.525V29.975ZM40.4 29.975H37.55V32.825H40.4V29.975ZM42.575 29.975H45.425V32.825H42.575V29.975ZM35.375 35.225H32.525V38.075H35.375V35.225ZM37.55 35.225H40.4V38.075H37.55V35.225ZM45.425 35.225H42.575V38.075H45.425V35.225ZM32.525 40.475H35.375V43.325H32.525V40.475ZM40.4 40.475H37.55V43.325H40.4V40.475ZM42.575 40.475H45.425V43.325H42.575V40.475ZM16.25 50.7499V33.7249H28.175V50.7499H16.25ZM25.5042 31.4309V27.5309H18.9792V31.4309H25.5042ZM23.8542 24.4066V25.9816H20.6292V24.4066H23.8542ZM18.275 36.125V50.675H19.775V36.125H18.275ZM21.5 50.675V36.125H23V50.675H21.5ZM24.725 36.125V50.675H26.225V36.125H24.725Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "31",
                stroke: "currentColor",
                strokeWidth: "2"
            })
        ]
    });
};
const HKTycoons = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_1618_9086)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.5 17V14.75H20V17H23.6V18.5H16.775V21.65H23.45V27.875H20V30.05H18.5V27.875H14.9V26.375H21.95V23.15H15.275V17H18.5ZM13.2269 35.6732L49.8269 18.1982L50.4732 19.5518L13.8732 37.0268L13.2269 35.6732ZM41.225 41.2249H51.05V39.7249H41.225V41.2249ZM51.05 45.05H41.225V43.55H51.05V45.05ZM41.225 48.8H51.05V47.3H41.225V48.8ZM51.05 29.825H41.225V28.325H51.05V29.825ZM41.225 33.65H51.05V32.15H41.225V33.65ZM51.05 37.4H41.225V35.9H51.05V37.4ZM27.95 41.2249H37.775V39.7249H27.95V41.2249ZM37.775 45.0499H27.95V43.5499H37.775V45.0499ZM27.95 48.7999H37.775V47.2999H27.95V48.7999ZM37.775 37.4H27.95V35.9H37.775V37.4ZM14.6 41.225H24.5V39.725H14.6V41.225ZM24.5 45.05H14.6V43.55H24.5V45.05ZM14.6 48.8H24.5V47.3H14.6V48.8Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "31",
                stroke: "currentColor",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_1618_9086",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "37.8",
                        height: "34.05",
                        fill: "currentColor",
                        transform: "translate(13.25 14.75)"
                    })
                })
            })
        ]
    });
};
const EducationProfessionalIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.75 15.5C11.75 13.8142 13.0642 12.5 14.75 12.5L14.7509 12.5C16.4362 12.5005 17.75 13.8145 17.75 15.5H11.75ZM17.75 17V24.125V27.725V49.25C17.75 51.6122 19.5029 53.5079 21.8 53.7285V53.75H22.25H49.925H50.075V53.7476C52.4929 53.6713 54.3862 51.7536 54.4244 49.325H54.425V49.2621L54.425 49.25L54.425 47.825H46.925V27.725V27.125V15.5C46.925 13.1636 45.2102 11.2835 42.95 11.0293V11H42.425H14.75C12.2358 11 10.25 12.9858 10.25 15.5V17H17.75ZM49.925 52.25H25.6245C26.3119 51.4751 26.7316 50.4554 26.7494 49.325H52.9241C52.8858 50.9746 51.5857 52.25 49.925 52.25ZM25.25 49.25C25.25 50.9358 23.9358 52.25 22.25 52.25C20.5642 52.25 19.25 50.9358 19.25 49.25V27.725V24.125V15.5C19.25 14.3397 18.8271 13.292 18.1245 12.5L42.425 12.5L42.4259 12.5C44.1113 12.5005 45.425 13.8145 45.425 15.5V27.125V27.725V47.825H25.25V49.25ZM23.225 20.075H42.05V18.575H23.225V20.075ZM42.05 26.525H23.225V25.025H42.05V26.525ZM23.225 33.05H42.05V31.55H23.225V33.05Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "31",
                stroke: "currentColor",
                strokeWidth: "2"
            })
        ]
    });
};
const RegionalBanksIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_286_6831)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.8127 11.071L31.7069 11.0366L31.6818 11.1138L10.25 18.1057V22.0249H14.3V23.4499H11.9V28.1749H14.525V30.7249H16.1V42.4249H14.525V46.3249H11.9V52.8499H51.8V46.3249H49.175V42.4249H47.525V30.7249H49.175V28.1749H51.8V23.4499H49.325V22.0249H49.925V22.0249H53.45V18.1051L31.9423 11.1131L31.9174 11.0369L31.8127 11.071ZM46.025 30.7249H43.7V42.4249H46.025V30.7249ZM42.2 30.7249V42.4249H40.625V46.3249H23.075V42.4249H21.5V30.7249H23.075V28.1749H40.625V30.7249H42.2ZM20 30.7249H17.6V42.4249H20V30.7249ZM47.825 22.0249H15.8V23.4499H47.825V22.0249ZM31.8136 12.6486L11.75 19.1941V20.5249H49.1V20.5249H51.95V19.1947L31.8136 12.6486ZM13.4 24.9499V26.6749H50.3V24.9499H13.4ZM25.625 37.1749C25.625 33.7369 28.412 30.9499 31.85 30.9499C35.288 30.9499 38.075 33.7369 38.075 37.1749C38.075 40.6129 35.288 43.3999 31.85 43.3999C28.412 43.3999 25.625 40.6129 25.625 37.1749ZM31.85 29.4499C27.5836 29.4499 24.125 32.9085 24.125 37.1749C24.125 41.4413 27.5836 44.8999 31.85 44.8999C36.1164 44.8999 39.575 41.4413 39.575 37.1749C39.575 32.9085 36.1164 29.4499 31.85 29.4499ZM31.1 32.3749V33.4999H29.075V37.9249H33.2V39.3499H29.15V40.8499H31.1V41.9749H32.6V40.8499H34.7V36.4249H30.575V34.9999H34.55V33.4999H32.6V32.3749H31.1ZM13.4 51.3499V47.8249H50.3V51.3499H13.4ZM16.025 28.1749V29.2249H21.575V28.1749H16.025ZM16.025 44.9749V43.9249H21.575V44.9749H16.025ZM42.125 28.1749V29.2249H47.675V28.1749H42.125ZM42.125 44.9749V43.9249H47.675V44.9749H42.125Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "31",
                stroke: "currentColor",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_286_6831",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "43.2",
                        height: "41.85",
                        fill: "currentColor",
                        transform: "translate(10.25 11)"
                    })
                })
            })
        ]
    });
};
const FinTechCompaniesIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_286_6838)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21.425 23.675C21.425 17.9174 26.0924 13.25 31.85 13.25C37.6076 13.25 42.275 17.9174 42.275 23.675C42.275 29.4326 37.6076 34.1 31.85 34.1C26.0924 34.1 21.425 29.4326 21.425 23.675ZM31.85 11.75C25.264 11.75 19.925 17.089 19.925 23.675C19.925 30.261 25.264 35.6 31.85 35.6C38.436 35.6 43.775 30.261 43.775 23.675C43.775 17.089 38.436 11.75 31.85 11.75ZM36.2 18.275H32.6V16.025H31.1V18.275H27.875V24.425H34.55V27.65H27.5V29.15H31.1V31.325H32.6V29.15H36.05V22.925H29.375V19.775H36.2V18.275ZM16.7 35.6H9.5V51.275H16.7V49.1001H21.5505C21.6094 49.116 21.6945 49.1392 21.8025 49.1687C22.0251 49.2296 22.3447 49.3177 22.7321 49.4262C23.5072 49.6433 24.5521 49.9419 25.6334 50.2681C26.7162 50.5948 27.8278 50.947 28.7391 51.2715C29.1952 51.4339 29.5928 51.5864 29.9079 51.7228C30.2398 51.8665 30.4264 51.9699 30.5 52.0251C30.9743 52.3808 31.6628 52.5302 32.3221 52.5903C33.0154 52.6536 33.8164 52.6291 34.6264 52.5358C36.22 52.3523 37.9921 51.8852 39.1408 51.1653C40.1766 50.5507 43.5554 48.4106 46.6622 46.4327C48.2236 45.4387 49.7217 44.4822 50.8293 43.7742C51.3832 43.4202 51.8394 43.1283 52.1572 42.925L52.6544 42.6067L52.6603 42.6029L52.666 42.5991L52.25 41.9751C52.666 42.5991 52.6666 42.5987 52.6668 42.5986L52.6699 42.5965L52.6762 42.5923L52.6952 42.5792L52.7205 42.5614L52.7573 42.5351C52.8085 42.4979 52.8787 42.4452 52.9605 42.3791C53.1219 42.2486 53.3391 42.0574 53.5448 41.8231C53.8967 41.4223 54.4861 40.5787 54.0593 39.6431C53.7075 38.8437 53.0645 38.2773 52.2203 38.0379C51.3959 37.8041 50.4408 37.8971 49.4412 38.2711C48.4277 38.6371 46.4748 39.7051 44.8377 40.6393C44.0034 41.1153 43.2286 41.5699 42.6626 41.9052C42.5567 41.968 42.458 42.0266 42.3676 42.0805C42.1955 41.8699 42.0016 41.679 41.801 41.5078C41.144 40.9469 40.2993 40.4949 39.5015 40.1446C38.6959 39.7909 37.8963 39.5231 37.302 39.3444C37.0037 39.2547 36.7546 39.1866 36.5789 39.1407C36.491 39.1177 36.4213 39.1002 36.3729 39.0883L36.3166 39.0747L36.301 39.071L36.2966 39.07L36.2947 39.0695L36.2108 39.0501H36.1248H29.3C27.9364 39.0501 26.8642 38.6071 25.6904 38.0761L25.5755 38.024L25.4644 37.9735C24.3685 37.475 23.1457 36.9187 21.6325 36.8023C20.0652 36.6817 19.0352 36.9368 18.3658 37.2898C18.0672 37.4472 17.8492 37.6197 17.6937 37.7751H16.7V35.6ZM36.125 39.8001L36.2947 39.0695C36.2945 39.0695 36.2943 39.0694 36.125 39.8001ZM52.6544 42.6067C52.6545 42.6067 52.6545 42.6066 52.25 41.9751L52.6544 42.6067ZM16.7 39.2751V47.6001H21.749L21.8445 47.6257L21.9374 47.6508C21.9975 47.6671 22.0857 47.6911 22.1983 47.7219C22.4234 47.7834 22.746 47.8723 23.1367 47.9818C23.9178 48.2006 24.9729 48.502 26.0667 48.832C27.1588 49.1616 28.2972 49.5219 29.2422 49.8584C29.7142 50.0264 30.1462 50.1915 30.5038 50.3463C30.8446 50.4938 31.1736 50.6553 31.4 50.8251C31.5257 50.9193 31.8591 51.0419 32.4584 51.0965C33.0237 51.1481 33.718 51.1305 34.4548 51.0456C35.951 50.8733 37.4738 50.4423 38.3504 49.8904L38.359 49.885L38.3677 49.8799C39.3669 49.2877 42.7281 47.1591 45.8566 45.1674C47.417 44.174 48.9143 43.218 50.0215 42.5103C50.5751 42.1565 51.0311 41.8648 51.3487 41.6615L51.8366 41.3492L51.84 41.3469C51.8474 41.3417 51.8598 41.3331 51.8763 41.321C51.9095 41.2969 51.9588 41.26 52.0176 41.2125C52.1375 41.1156 52.2859 40.9834 52.4177 40.8333C52.7399 40.4663 52.7108 40.3008 52.694 40.2644L52.6909 40.2576L52.6879 40.2507C52.5141 39.8535 52.2208 39.5972 51.811 39.481C51.3804 39.3589 50.7621 39.3778 49.9633 39.6773L49.9541 39.6808C49.0912 39.9914 47.2601 40.984 45.5811 41.9421C44.756 42.4129 43.9886 42.8631 43.4272 43.1957C43.2677 43.2902 43.125 43.3752 43.0023 43.4484C43.0172 43.5545 43.025 43.6634 43.025 43.7751V45.731L42.275 45.7309V46.4001H31.4V44.9001H41.525V43.7751C41.525 43.4585 41.3336 43.081 40.8271 42.6486C40.331 42.2251 39.6382 41.8428 38.8985 41.5181C38.1666 41.1968 37.4287 40.9489 36.8699 40.7808C36.5916 40.6971 36.3603 40.6339 36.1996 40.5919C36.1315 40.5741 36.0762 40.5602 36.0355 40.5501H29.3C27.5886 40.5501 26.2609 39.9805 25.0721 39.4428L24.889 39.3598L24.889 39.3598C23.7571 38.8464 22.758 38.3933 21.5175 38.2979C20.1598 38.1934 19.4273 38.4258 19.0654 38.6166C18.8833 38.7126 18.7834 38.804 18.7372 38.8535C18.7221 38.8696 18.7121 38.8819 18.7064 38.8894L18.5135 39.2751H16.7ZM11 49.775V37.1H15.2V49.775H11Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "31",
                stroke: "currentColor",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_286_6838",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "44.7",
                        height: "40.875",
                        fill: "currentColor",
                        transform: "translate(9.5 11.75)"
                    })
                })
            })
        ]
    });
};
const FinancialInvestmentPlatformIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#clip0_286_6845)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.375 11.75H15.725V18.35H11.75V39.275V46.925V46.925H22.85V50.975H19.7V52.475H22.85V52.55H41.825V52.475H45.05V50.975H41.825V46.925H53V46.925V39.275V18.35H38.375V11.75ZM40.325 50.975V46.925H24.35V50.975H40.325ZM51.5 39.275V19.85H38.375V35.075H15.725V19.85H13.25V39.275H51.5ZM13.25 40.775V45.425H51.5V40.775H13.25ZM17.225 33.575V13.25H36.875V33.575H17.225ZM20.225 15.425H33.95V24.275H20.225V15.425ZM21.725 16.925V22.775H32.45V16.925H21.725ZM34.475 27.875H19.625V26.375H34.475V27.875ZM26.525 31.25H34.475V29.75H26.525V31.25Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "31",
                stroke: "currentColor",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_286_6845",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "41.25",
                        height: "40.725",
                        fill: "currentColor",
                        transform: "translate(11.75 11.75)"
                    })
                })
            })
        ]
    });
};
const AnnouncementIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "44",
        height: "38",
        viewBox: "0 0 44 38",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#clip0_552_2497)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M17.4004 14.9C17.3004 9.7 21.0004 3.9 23.6004 1L34.0004 19.7C31.2004 23.5 29.2004 28.3 28.0004 33.9C31.9004 28.5 36.6004 25.1 42.2004 24.2L31.6004 5.8L29.8004 6.8",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1 17.6C7.1 15.1 13.9 13 17.4 14.9L28 33.8C24.4 31.9 17.4 34.1 11.1 36.7L1 17.6Z",
                        stroke: "#593727",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_552_2497",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "43.2",
                        height: "37.7",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
const ReportIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: props.className,
        width: "38",
        height: "42",
        viewBox: "0 0 38 42",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#clip0_552_2000)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M30.7004 21.7V4.60001H6.40039V21.7",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M28.9002 1.9V1H8.2002V1.9",
                        stroke: "#593727",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M11.7998 17.2H25.2998",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M11.7998 13.6H25.2998",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M11.7998 10H20.7998",
                        stroke: "#AB8250",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M36.1 40.6H1V24.4H11.8L13.6 27.1H23.5L25.4 24.4H36.1V40.6Z",
                        stroke: "#593727",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M3.7 19.9L1 23.5V24.4",
                        stroke: "#593727",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M33.4004 19.9L36.1004 23.5V24.4",
                        stroke: "#593727",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M22.6 31.6H14.5V36.1H22.6V31.6Z",
                        stroke: "#593727",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_552_2000",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "37.1",
                        height: "41.6",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
const CustomArrowRight = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: `${props.className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M27.9991 16.5968C27.925 16.6478 27.854 16.7033 27.7867 16.7629C25.7296 18.801 23.6741 20.8406 21.6201 22.8818C21.5612 22.948 21.5068 23.018 21.4571 23.0913L20.366 22.0104L25.1061 17.3109H4V15.8085H25.0661L20.335 11.1202C20.7217 10.7365 21.069 10.3921 21.4655 10C21.51 10.0776 21.5618 10.1509 21.6201 10.2189C23.6744 12.2604 25.7302 14.3 27.7876 16.3377C27.855 16.3972 27.9259 16.4525 28 16.5034L27.9991 16.5968Z",
            className: "fill-arta-black"
        })
    });
};
const CustomArrowLeft = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: `${props.className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M4.00094 16.5968C4.07505 16.6478 4.14597 16.7033 4.21332 16.7629C6.27041 18.801 8.32593 20.8406 10.3799 22.8818C10.4388 22.948 10.4932 23.018 10.5429 23.0913L11.634 22.0104L6.89393 17.3109H28V15.8085H6.93387L11.665 11.1202C11.2783 10.7365 10.931 10.3921 10.5345 10C10.49 10.0776 10.4382 10.1509 10.3799 10.2189C8.32562 12.2604 6.26978 14.3 4.21238 16.3377C4.14503 16.3972 4.0741 16.4525 4 16.5034L4.00094 16.5968Z",
            className: "fill-arta-black"
        })
    });
};



/***/ }),

/***/ 7188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ textClass)
/* harmony export */ });
/**
 * Only use className for styling
 * Use pure html h1, p, span, ul, li, etc. tags instead of Text component
 */ const textClass = {
    body_regular: `font-Neue text-[1rem] leading-[1.5rem] tracking-wide`,
    body_regular_verah: `font-Verah text-[1rem] leading-[1.5rem] tracking-wide`,
    h1_style2: `font-Verah lg:text-[4.25rem] text-[3rem]  leading-[3.75rem]  lg:leading-[5rem] tracking-wide`,
    h2_style2: `font-Verah lg:text-[3rem] text-[2.25rem] lg:leading-[3.75rem] leading-[3rem] tracking-wide`,
    h3_style2: `font-Verah md:text-[2.25rem] text-[2rem] md:leading-[2.875rem] leading-[2.5rem]`,
    h6: `font-Verah md:text-[1.5rem] text-xl leading-[2rem]`,
    small_text: `font-Neue text-[0.875rem] leading-[1.375rem]`,
    small_text_style2: `font-Verah text-[0.875rem] leading-[1.375rem]`,
    title_style2: `font-Verah md:text-[1.25rem] text-lg md:leading-[1.75rem] leading-[1.5rem] tracking-wide`,
    title: `font-Neue text-[1.25rem] leading-[1.75rem] font-medium`,
    title_verah: `font-Verah md:text-[1.25rem] text-lg leading-[1.75rem] font-medium`,
    caption: `font-Neue text-[0.75rem] leading-[1.25rem]`
} /** This is for autocomplete */  // const className = 'text-[0.75rem] leading-[2rem]'
;


/***/ }),

/***/ 5448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ WechatPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7188);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);




const WechatPopup = ({ togglePopup , qrCode  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed top-0 left-0 w-full h-full z-[60]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>togglePopup(),
                className: "fixed bg-black bg-opacity-70 w-full h-full"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed top-1/2 left-1/2 w-[80%] max-w-[450px] lg:w-[40%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative pt-16 pb-24 px-8 md:px-24 lg:px-32",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            className: "absolute top-6 right-6 cursor-pointer",
                            onClick: ()=>togglePopup(),
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "0.353553",
                                    y1: "0.646447",
                                    x2: "17.3536",
                                    y2: "17.6464",
                                    stroke: "#593725"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "17.3536",
                                    y1: "0.353553",
                                    x2: "0.353553",
                                    y2: "17.3536",
                                    stroke: "#593725"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            alt: "Arta WeChat QR code",
                            src: qrCode || "/images/wechat.jpg",
                            width: 400,
                            height: 400
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `${src_components_Text__WEBPACK_IMPORTED_MODULE_2__/* .textClass.h6 */ .Y.h6} mt-4 text-center text-arta-secondary w-full absolute left-1/2 transform -translate-x-1/2`,
                            children: t("contact_us.scan")
                        })
                    ]
                })
            })
        ]
    });
};



/***/ }),

/***/ 3709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ links)
/* harmony export */ });
const links = {
    home: "/",
    about: "/about-us",
    aboutVision: "/about-us#mission",
    aboutCulture: "/about-us#culture",
    aboutLeadership: "/about-us#leadership",
    aboutTechFin: "/about-us#tech-fin",
    businessesAssetManagement: "/businesses/asset-management",
    businessesInvestmentBanking: "/businesses/investment-banking",
    businessesInsuranceBrokerage: "/businesses/insurance-brokerage",
    businessesSecuritiesBrokerage: "/businesses/global-markets",
    businessesEsg: "/businesses/esg-advisory",
    businessesArtazine: "/businesses/artazine",
    investor: "/investor-relations",
    investorCirculars: "/investor-relations/circulars",
    investorListingDocuments: "/investor-relations/listing-documents",
    investorCorporateInformation: "/investor-relations/corporate-information",
    investorInterimAnnualReports: "/investor-relations/interim-annual-reports",
    investorResultAnnouncements: "/investor-relations/results-announcements",
    investorAnnouncementsNotices: "/investor-relations/announcements-notices",
    investorFinCalendar: "/investor-relations/fin-calendar",
    investorEsg: "/investor-relations/esg",
    media: "/media-centre",
    mediaBlog: "/media-centre",
    mediaPress: "/media-centre/press",
    mediaBlogPost: "/media-centre/blog-post",
    mediaPressPost: "/media-centre/press-post",
    joinUs: "/join-us",
    joinUsFrontOffice: "/join-us/front-office",
    joinUsMiddleAndBackOffice: "/join-us/middle-and-back-office",
    jobOpening: "/job-opening",
    contact: "/contact",
    disclaimer: "/disclaimer",
    privacy_policy: "/privacy-policy"
};


/***/ }),

/***/ 4805:
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"id":1,"attributes":{"description_en":"ContactUsEN ContactUsEN ContactUsEN ContactUsEN\\nContactUsEN ContactUsEN ContactUsEN ContactUsEN","description_tc":"ContactUsTC ContactUsTC ContactUsTC ContactUsTC ContactUsTC ContactUsTC ContactUsTC ContactUsTC ","description_sc":"ContactUsSC ContactUsSC ContactUsSC ContactUsSC ContactUsSC ContactUsSC ContactUsSC ContactUsSC ","address_en":"Units 1-2, Level 9,\\nK11 ATELIER King’s Road,\\n728 King’s Road, Quarry Bay, Hong Kong","address_tc":"香港鰂魚涌英皇道728號\\nK11 ATELIER King’s Road \\n9樓1-2室","address_sc":"香港鲗鱼涌英皇道728号\\nK11 ATELIER King’s Road \\n9楼1-2室","media_email":"marketing@artatechfin.com","recruitment_email":"recruit@artatechfin.com","investor_email":"ir@artatechfin.com","social_media_link_linkedin":"https://www.linkedin.com/company/arta-techfin-corporation-limited/","social_media_link_twitter":"https://twitter.com/ARTATechFin","social_media_link_facebook":"https://www.facebook.com/ARTAtechfin","footer_tel":"(852) 3513 8279","footer_fax":"(852) 2507 2009","footer_email":"marketing@artatechfin.com","createdAt":"2022-11-22T10:15:57.900Z","updatedAt":"2022-11-22T10:16:53.892Z","publishedAt":"2022-11-22T10:16:53.887Z","social_media_link_wechat":{"data":{"id":3,"attributes":{"name":"Screenshot 2022-11-22 at 6.14.02 PM.png","alternativeText":"Screenshot 2022-11-22 at 6.14.02 PM.png","caption":"Screenshot 2022-11-22 at 6.14.02 PM.png","width":209,"height":210,"formats":{"thumbnail":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_Screenshot_2022_11_22_at_6_14_02_PM_81ff5d37a4.png","hash":"thumbnail_Screenshot_2022_11_22_at_6_14_02_PM_81ff5d37a4","mime":"image/png","name":"thumbnail_Screenshot 2022-11-22 at 6.14.02 PM.png","path":null,"size":23.29,"width":155,"height":156}},"hash":"Screenshot_2022_11_22_at_6_14_02_PM_81ff5d37a4","ext":".png","mime":"image/png","size":42.73,"url":"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_11_22_at_6_14_02_PM_81ff5d37a4.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-22T10:14:18.809Z","updatedAt":"2022-11-22T10:14:18.809Z"}}}}},"meta":{}}');

/***/ })

};
;