"use strict";
(() => {
var exports = {};
exports.id = 3455;
exports.ids = [3455];
exports.modules = {

/***/ 8356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ join_us),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/Header/Header.tsx + 3 modules
var Header = __webpack_require__(5331);
// EXTERNAL MODULE: ./src/components/Footer.tsx + 1 modules
var Footer = __webpack_require__(2001);
// EXTERNAL MODULE: ./src/components/Seo.tsx
var Seo = __webpack_require__(887);
// EXTERNAL MODULE: ./src/components/HeroBanner.tsx
var HeroBanner = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Text.tsx
var Text = __webpack_require__(7188);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/PageJoinUs/SectionWorkWithArta.tsx




const SectionWorkWithArta = ({ k  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group/bg relative overflow-hidden",
        id: "work-with-arta",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/asset-management/bg-introduction.png",
                    alt: "",
                    fill: true,
                    className: "object-cover"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "arta-container relative z-1 mx-auto items-center pt-12 lg:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: `${Text/* textClass.h2_style2 */.Y.h2_style2}`,
                    children: t("join_us.work_with_arta")
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "arta-container relative z-1 mx-auto flex flex-col-reverse items-center pb-12 lg:flex-row lg:space-x-[40px] lg:py-[150px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: `${Text/* textClass.h2_style2 */.Y.h2_style2} hidden lg:block`,
                                children: t("join_us.work_with_arta")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${Text/* textClass.body_regular_verah */.Y.body_regular_verah} mt-4 whitespace-pre-line`,
                                dangerouslySetInnerHTML: {
                                    __html: k.work_with_arta_description
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-[25px] mb-4 flex-1 lg:mt-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/join-us/28531C75-1658-4AFB-8864-C8F6F1AB012A.png",
                            alt: "",
                            width: 714,
                            height: 473,
                            className: "object-cover"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const PageJoinUs_SectionWorkWithArta = ((/* unused pure expression or super */ null && (SectionWorkWithArta)));

// EXTERNAL MODULE: ./src/components/ModuleTextColListHeader.tsx
var ModuleTextColListHeader = __webpack_require__(7607);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/PageJoinUs/SectionOurValues.tsx





const SectionOurValues = ({ k  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const { locale  } = (0,router_.useRouter)();
    const g = (data, keyWithoutLang)=>`${data[`${keyWithoutLang}_${locale}`]}`;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-arta-eggshell-100",
        id: "our-value",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "arta-container relative mx-auto grid grid-cols-12 py-12 md:py-[201px]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:col-span-4 col-span-full flex items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ModuleTextColListHeader/* default */.Z, {
                        header: t("join_us.our_values"),
                        headerPosition: "left"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:col-span-8 col-span-full border-y-[1px] border-arta-russet-100 pt-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${Text/* textClass.body_regular_verah */.Y.body_regular_verah} mx-auto mt-4 whitespace-pre-line`,
                            dangerouslySetInnerHTML: {
                                __html: k.our_values_description
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-10 gird-gap-x-12",
                            children: k.our_values_icons && k.our_values_icons.map((icon, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-span-5 md:col-span-2 flex items-center text-center flex-col p-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: icon.image.data.attributes.url
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `mt-4 ${Text/* textClass.small_text_style2 */.Y.small_text_style2}`,
                                            children: g(icon, "icon_description")
                                        })
                                    ]
                                }, index);
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const PageJoinUs_SectionOurValues = (SectionOurValues);

;// CONCATENATED MODULE: ./src/components/PageJoinUs/SectionCare.tsx





const SectionCare = ({ k  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const { locale  } = (0,router_.useRouter)();
    const g = (data, keyWithoutLang)=>`${data[`${keyWithoutLang}_${locale}`]}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group/bg relative overflow-hidden",
        id: "arta-care",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/asset-management/bg-introduction.png",
                    alt: "",
                    fill: true,
                    className: "object-cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "arta-container relative z-1 mx-auto py-12 md:py-[150px] md:text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: Text/* textClass.h2_style2 */.Y.h2_style2,
                        children: t("join_us.arta_cares")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${Text/* textClass.body_regular_verah */.Y.body_regular_verah} mx-auto mt-4 whitespace-pre-line`,
                        dangerouslySetInnerHTML: {
                            __html: k.arta_cares_description
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-8 grid grid-cols-2 gap-x-8 md:grid-cols-4 lg:grid-cols-5",
                        children: k.our_cares_icons && k.our_cares_icons.map((icon, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-1 flex flex-col items-center p-8 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: icon.image.data.attributes.url
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `mt-4 ${Text/* textClass.small_text_style2 */.Y.small_text_style2}`,
                                        children: g(icon, "icon_description")
                                    })
                                ]
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const PageJoinUs_SectionCare = (SectionCare);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/TabBar.tsx
var TabBar = __webpack_require__(9707);
// EXTERNAL MODULE: ./src/components/Svg/Icon.tsx
var Icon = __webpack_require__(199);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/PageJoinUs/JobCard.tsx






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
const JobCard = ({ id , title , subTitle , seniority , location  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { locale  } = (0,router_.useRouter)();
    const g = (keyWithoutLang)=>seniorityMap[`${keyWithoutLang}_${locale}`] || "--";
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/job/${id}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-full bg-white p-6 shadow-postCard",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex h-full flex-col justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${Text/* textClass.caption */.Y.caption} flex items-center`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icon/* Pin */.lO, {
                                        className: "mr-1"
                                    }),
                                    " ",
                                    location
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* IconArrowRight */.Ec, {
                                fill: "#593725",
                                className: "h-[9.26px] w-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: `${Text/* textClass.h6 */.Y.h6}`,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: Text/* textClass.body_regular_verah */.Y.body_regular_verah,
                                children: subTitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: Text/* textClass.caption */.Y.caption,
                                children: [
                                    t("join_us.seniority"),
                                    ": ",
                                    g(seniority)
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const PageJoinUs_JobCard = (JobCard);

;// CONCATENATED MODULE: ./src/components/PageJoinUs/JobCards.tsx



const JobCards = ({ jobs  })=>{
    const router = (0,router_.useRouter)();
    const { locale  } = router;
    const g = (pageData, keyWithoutLang)=>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-none gap-8 sm:grid-cols-2 md:grid-cols-3",
        children: jobs.map((job, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx(PageJoinUs_JobCard, {
                    id: job.attributes.slug,
                    title: g(job, "job_title"),
                    subTitle: g(job, "department"),
                    location: g(job, "work_location"),
                    seniority: job.attributes.seniority
                })
            }, index))
    });
};
/* harmony default export */ const PageJoinUs_JobCards = (JobCards);

;// CONCATENATED MODULE: ./src/components/PageJoinUs/SectionJobOpenings.tsx






const SectionJobOpenings = ({ k , jobs  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const TABS = {
        all: t("join_us.all"),
        fontOffice: t("join_us.front_office"),
        middleAndBackOffice: t("join_us.back_office")
    };
    const [selectedTab, setSelectedTab] = (0,external_react_.useState)("all");
    const filteredJobs = jobs.filter((job)=>{
        if (selectedTab === "all") return job;
        if (selectedTab === "frontOffice") {
            return job.attributes.category === "Front Office" || job.attributes.category === "All";
        }
        if (selectedTab === "backOffice") {
            return job.attributes.category === "Middle and Back Office" || job.attributes.category === "All";
        }
    }).filter((job)=>{
        if (job.attributes.showing_start_date) {
            return new Date().getTime() - new Date(job.attributes.showing_start_date).getTime() > 0;
        } else {
            return job;
        }
    }).filter((job)=>{
        if (job.attributes.showing_end_date) {
            return new Date(job.attributes.showing_end_date).getTime() - new Date().getTime() > 0;
        } else {
            return job;
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-arta-eggshell-100 py-12 md:py-[150px]",
        id: "job-opening",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "arta-container mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:text-center lg:mx-auto lg:w-3/5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: Text/* textClass.h2_style2 */.Y.h2_style2,
                            children: t("join_us.job_openings")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${Text/* textClass.body_regular_verah */.Y.body_regular_verah} mt-4 whitespace-pre-line`,
                            dangerouslySetInnerHTML: {
                                __html: k.job_openings_description
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "arta-hide-scrollbar -mx-6 overflow-auto py-8 lg:py-16 md:mx-0 ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TabBar/* TabBar */.n, {
                        tabs: [
                            {
                                label: TABS["all"],
                                value: "all"
                            },
                            {
                                label: TABS["fontOffice"],
                                value: "frontOffice"
                            },
                            {
                                label: TABS["middleAndBackOffice"],
                                value: "backOffice"
                            }
                        ],
                        selectedTab: selectedTab,
                        setSelectedTab: setSelectedTab
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PageJoinUs_JobCards, {
                    jobs: filteredJobs
                })
            ]
        })
    });
};
/* harmony default export */ const PageJoinUs_SectionJobOpenings = (SectionJobOpenings);

;// CONCATENATED MODULE: ./src/components/PageJoinUs/JoinUsLayout.tsx










const JoinUsLayout = ({ k , jobs  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* Seo */.p, {
                title: `${t("page_title.join_us")} | Arta TechFin`,
                description: t("page_description.join_us"),
                keywords: t("page_keywords.join_us"),
                ga: "Join Us"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeroBanner/* HeroBanner */.y, {
                        title: t("page_title.join_us"),
                        description: k.heroBanner.description,
                        image: k.heroBanner.image,
                        mobileImage: k.heroBanner.mobileImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionWorkWithArta, {
                        k: k
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageJoinUs_SectionOurValues, {
                        k: k
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageJoinUs_SectionCare, {
                        k: k
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageJoinUs_SectionJobOpenings, {
                        k: k,
                        jobs: jobs
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                textColor: "brown"
            })
        ]
    });
};
/* harmony default export */ const PageJoinUs_JoinUsLayout = (JoinUsLayout);

;// CONCATENATED MODULE: ./apidata/join-us.json
const join_us_namespaceObject = JSON.parse('{"data":{"id":1,"attributes":{"description_en":"JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN JoinUsEN","description_tc":"JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC JoinUsTC ","description_sc":"JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC JoinUsSC ","work_with_arta_description_en":"At ARTA TechFin, our vision is to “Break Barriers for Greatness”. We aim to dismantle conventional financial barriers and consistently create changes. Additionally, we are committed to putting our customers first, understanding their needs to practically innovate and providing an accessible, friendly and knowledge-driven experience.\\n\\nWe label ourselves as a TechFin company, which means we deliver financial services and solutions by thinking like a Tech company. But we are more than that. We think Tech, and we think People. Our people are our greatest asset. We believe that brilliant people working in a great culture will produce the best results. We appreciate and treasure talents who are willing to say no to being second or to the norm, who dare to speak up and give constructive criticism, and who can deliver results together with teammates.","work_with_arta_description_tc":"我們的願景是「打破壁壘，成就輝煌」，突破傳統金融業的障礙，不斷創新。我們把客戶放在首位，了解他們的需求，在實際中創新，提供方便、友好、知識驅動的客戶體驗。\\n\\n我們將自己定位為科技公司，這意味着我們會以科技公司的角度思考如何提供金融服務和解決方案。不僅如此，我們以科技思維服務人。員工是我們最寶貴的資產。我們相信，優秀的人才在良好的工作環境中將會發揮最大的作用。我們欣賞那些勇爭第一、不走尋常路的人才，他們敢於直言不諱，提出建設性的批評意見，並能與團隊成員一起取得成果。","work_with_arta_description_sc":"我们的愿景是 \\"打破壁垒，成就辉煌\\"，突破传统金融业的障碍，不断创新。我们把客户放在首位，了解他们的需求，在实际中创新，提供方便、友好、知识驱动的客户体验。\\n\\n我们将自己定位为科技公司，这意味着我们会以科技公司的角度思考如何提供金融服务和解决方案。不仅如此，我们以科技思维服务人。员工是我们最宝贵的资产。我们相信，优秀的人才在良好的工作环境中将会发挥最大的作用。我们欣赏那些勇争第一、不走寻常路的人才，他们敢于直言不讳，提出建设性的批评意见，并能与团队成员一起取得成果。","our_values_description_en":"Values are the DNA of ARTA to create a kindred spirit in the workplace. We love to work with people sharing the same beliefs and mentality. It is crucial to drive our business forward and go beyond our boundaries.","our_values_description_tc":"我們希望能夠在辦公室營造親切友好的氛圍，希望能與擁有相同價值觀的人一起工作，我們認為這對推動業務發展、突破自我至關重要。","our_values_description_sc":"我们希望能够在办公室营造亲切友好的氛围，希望能与拥有相同价值观的人一起工作，我们认为这对推动业务发展、突破自我至关重要。","arta_cares_description_en":"We value our people. We would love to see you feel engaged together. It is our quest to keep up high morale and motivation. The drive of our work should be joy and excitement.","arta_cares_description_tc":"我們重視員工的發展，樂於看到大家充分投入工作的模樣。我們希望能夠保持高昂的士氣和動力，以工作帶來的快樂和興奮為動力。","arta_cares_description_sc":"我们重视员工的发展，乐于看到大家充分投入工作的模样。我们希望能够保持高昂的士气和动力，以工作带来的快乐和兴奋为动力。","job_openings_description_en":"We are looking for the below positions. If you think this is the right place for you to be your true self, click on the links today. Join us. For further information, please contact our HRBP via recruit@artatechfin.com.","job_openings_description_tc":"我們正在尋找適合以下職位的人才。如果你認為這裡是你理想的工作地點，馬上點擊鏈接，加入我們。如果想要了解更多信息，請通過電郵至recruit@artatechfin.com聯繫我們的人力資本管理部分。","job_openings_description_sc":"我们正在寻找适合以下职位的人才。如果你认为这里是你理想的工作地点，马上点击链接，加入我们。如果想要了解更多信息，请通过电邮至recruit@artatechfin.com联系我们的人力资本管理部分。","createdAt":"2022-11-22T10:20:45.788Z","updatedAt":"2022-11-30T10:40:12.234Z","publishedAt":"2022-11-28T09:43:29.085Z","work_with_arta_image":{"data":{"id":19,"attributes":{"name":"28531C75-1658-4AFB-8864-C8F6F1AB012A.png","alternativeText":"28531C75-1658-4AFB-8864-C8F6F1AB012A.png","caption":"28531C75-1658-4AFB-8864-C8F6F1AB012A.png","width":714,"height":473,"formats":{"small":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/small_28531_C75_1658_4_AFB_8864_C8_F6_F1_AB_012_A_a555b7cb36.png","hash":"small_28531_C75_1658_4_AFB_8864_C8_F6_F1_AB_012_A_a555b7cb36","mime":"image/png","name":"small_28531C75-1658-4AFB-8864-C8F6F1AB012A.png","path":null,"size":239.18,"width":500,"height":331},"thumbnail":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_28531_C75_1658_4_AFB_8864_C8_F6_F1_AB_012_A_a555b7cb36.png","hash":"thumbnail_28531_C75_1658_4_AFB_8864_C8_F6_F1_AB_012_A_a555b7cb36","mime":"image/png","name":"thumbnail_28531C75-1658-4AFB-8864-C8F6F1AB012A.png","path":null,"size":58.82,"width":235,"height":156}},"hash":"28531_C75_1658_4_AFB_8864_C8_F6_F1_AB_012_A_a555b7cb36","ext":".png","mime":"image/png","size":384.31,"url":"https://dhrhnojxde2hk.cloudfront.net/28531_C75_1658_4_AFB_8864_C8_F6_F1_AB_012_A_a555b7cb36.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-28T09:42:23.597Z","updatedAt":"2022-11-28T09:42:23.597Z"}}},"our_values_icons":[{"id":1,"icon_description_en":"Entrepreneurial Mindset","icon_description_tc":"企業家思維","icon_description_sc":"企业家思维","image":{"data":{"id":25,"attributes":{"name":"Group 230.png","alternativeText":"Group 230.png","caption":"Group 230.png","width":48,"height":48,"formats":null,"hash":"Group_230_db0b7da05d","ext":".png","mime":"image/png","size":1.95,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_230_db0b7da05d.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.458Z","updatedAt":"2022-11-30T10:19:12.458Z"}}}},{"id":2,"icon_description_en":"Compassionate","icon_description_tc":"富有同理心","icon_description_sc":"富有同理心","image":{"data":{"id":27,"attributes":{"name":"Group 231.png","alternativeText":"Group 231.png","caption":"Group 231.png","width":48,"height":48,"formats":null,"hash":"Group_231_184989e5bc","ext":".png","mime":"image/png","size":1.54,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_231_184989e5bc.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.462Z","updatedAt":"2022-11-30T10:19:12.462Z"}}}},{"id":3,"icon_description_en":"Integrity and Trust","icon_description_tc":"創造共享價值","icon_description_sc":"创造共享价值","image":{"data":{"id":22,"attributes":{"name":"Group 232.png","alternativeText":"Group 232.png","caption":"Group 232.png","width":48,"height":48,"formats":null,"hash":"Group_232_1680a96242","ext":".png","mime":"image/png","size":1.68,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_232_1680a96242.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.293Z","updatedAt":"2022-11-30T10:31:00.222Z"}}}},{"id":4,"icon_description_en":"Create Shared Value","icon_description_tc":"擁抱多元化","icon_description_sc":"拥抱多元化","image":{"data":{"id":20,"attributes":{"name":"Group 233.png","alternativeText":"Group 233.png","caption":"Group 233.png","width":48,"height":48,"formats":null,"hash":"Group_233_a071e00956","ext":".png","mime":"image/png","size":1.54,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_233_a071e00956.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:11.861Z","updatedAt":"2022-11-30T10:31:46.267Z"}}}},{"id":5,"icon_description_en":"Embrace Diversity","icon_description_tc":"誠實與信任","icon_description_sc":"诚实与信任","image":{"data":{"id":21,"attributes":{"name":"Group 234.png","alternativeText":"Group 234.png","caption":"Group 234.png","width":48,"height":48,"formats":null,"hash":"Group_234_ef4e5e72d2","ext":".png","mime":"image/png","size":1.93,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_234_ef4e5e72d2.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.153Z","updatedAt":"2022-11-30T10:19:12.153Z"}}}}],"our_cares_icons":[{"id":6,"icon_description_en":"Start-up environment","icon_description_tc":"創業公司環境","icon_description_sc":"创业公司环境","image":{"data":{"id":33,"attributes":{"name":"Group 235.png","alternativeText":"Group 235.png","caption":"Group 235.png","width":48,"height":48,"formats":null,"hash":"Group_235_289386eae4","ext":".png","mime":"image/png","size":2.29,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_235_289386eae4.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.538Z","updatedAt":"2022-11-30T10:19:12.538Z"}}}},{"id":7,"icon_description_en":"Flexi-hour","icon_description_tc":"靈活的工作時間安排","icon_description_sc":"灵活的工作时间安排","image":{"data":{"id":23,"attributes":{"name":"Group 236.png","alternativeText":"Group 236.png","caption":"Group 236.png","width":48,"height":48,"formats":null,"hash":"Group_236_04a2e06f56","ext":".png","mime":"image/png","size":1.71,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_236_04a2e06f56.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.453Z","updatedAt":"2022-11-30T10:19:12.453Z"}}}},{"id":8,"icon_description_en":"Medical coverage from day one","icon_description_tc":"入職即提供的醫療保障","icon_description_sc":"入职即提供的医疗保障","image":{"data":{"id":31,"attributes":{"name":"Group 237.png","alternativeText":"Group 237.png","caption":"Group 237.png","width":48,"height":48,"formats":null,"hash":"Group_237_9f71217027","ext":".png","mime":"image/png","size":0.92,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_237_9f71217027.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.534Z","updatedAt":"2022-11-30T10:19:12.534Z"}}}},{"id":10,"icon_description_en":"Generous leave plans","icon_description_tc":"慷慨的假期計劃","icon_description_sc":"慷慨的假期计划","image":{"data":{"id":34,"attributes":{"name":"Group 238.png","alternativeText":"Group 238.png","caption":"Group 238.png","width":48,"height":48,"formats":null,"hash":"Group_238_0a51a2eabc","ext":".png","mime":"image/png","size":1.44,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_238_0a51a2eabc.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.572Z","updatedAt":"2022-11-30T10:19:12.572Z"}}}},{"id":9,"icon_description_en":"Genders inclusive benefits","icon_description_tc":"性別平等的福利","icon_description_sc":"性别平等的福利","image":{"data":{"id":30,"attributes":{"name":"Group 239.png","alternativeText":"Group 239.png","caption":"Group 239.png","width":48,"height":48,"formats":null,"hash":"Group_239_ed52089b40","ext":".png","mime":"image/png","size":1.14,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_239_ed52089b40.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.523Z","updatedAt":"2022-11-30T10:35:42.851Z"}}}},{"id":11,"icon_description_en":"Flat organization structure","icon_description_tc":"扁平化的組織結構","icon_description_sc":"扁平化的组织结构","image":{"data":{"id":28,"attributes":{"name":"Group 240.png","alternativeText":"Group 240.png","caption":"Group 240.png","width":48,"height":48,"formats":null,"hash":"Group_240_8c6e91a2e3","ext":".png","mime":"image/png","size":1.74,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_240_8c6e91a2e3.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.463Z","updatedAt":"2022-11-30T10:19:12.463Z"}}}},{"id":12,"icon_description_en":"Healthy food and snacks","icon_description_tc":"健康的食物和零食","icon_description_sc":"健康的食物和零食","image":{"data":{"id":24,"attributes":{"name":"Group 241.png","alternativeText":"Group 241.png","caption":"Group 241.png","width":48,"height":48,"formats":null,"hash":"Group_241_b482f619cb","ext":".png","mime":"image/png","size":2.07,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_241_b482f619cb.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.455Z","updatedAt":"2022-11-30T10:19:12.455Z"}}}},{"id":13,"icon_description_en":"Casual work attire","icon_description_tc":"休閑的工作服裝要求","icon_description_sc":"休闲的工作服装要求","image":{"data":{"id":26,"attributes":{"name":"Group 242.png","alternativeText":"Group 242.png","caption":"Group 242.png","width":52,"height":48,"formats":null,"hash":"Group_242_2d88e73fe2","ext":".png","mime":"image/png","size":1.57,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_242_2d88e73fe2.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.460Z","updatedAt":"2022-11-30T10:39:25.865Z"}}}},{"id":14,"icon_description_en":"Tech-enabled work","icon_description_tc":"科技化的工作","icon_description_sc":"科技化的工作","image":{"data":{"id":29,"attributes":{"name":"Group 243.png","alternativeText":"Group 243.png","caption":"Group 243.png","width":48,"height":48,"formats":null,"hash":"Group_243_74aaa04d4d","ext":".png","mime":"image/png","size":1.59,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_243_74aaa04d4d.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.519Z","updatedAt":"2022-11-30T10:19:12.519Z"}}}},{"id":15,"icon_description_en":"Employee well-being ","icon_description_tc":"員工福利","icon_description_sc":"员工福利","image":{"data":{"id":32,"attributes":{"name":"Group 244.png","alternativeText":"Group 244.png","caption":"Group 244.png","width":48,"height":48,"formats":null,"hash":"Group_244_f99e37da1c","ext":".png","mime":"image/png","size":2.07,"url":"https://dhrhnojxde2hk.cloudfront.net/Group_244_f99e37da1c.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-30T10:19:12.537Z","updatedAt":"2022-11-30T10:19:12.537Z"}}}}]}},"meta":{}}');
;// CONCATENATED MODULE: ./apidata/join-us-jobs-openings.json
const join_us_jobs_openings_namespaceObject = JSON.parse('{"a":[{"id":1,"attributes":{"job_title_en":"Assistant Client Relations Manager","job_title_tc":"Assistant Client Relations Manager","job_title_sc":"Assistant Client Relations Manager","category":"Front Office","seniority":"Middle","work_location_en":"Wan Chai","work_location_tc":"Wan Chai","work_location_sc":"Wan Chai","department_en":"Department","department_tc":"Department","department_sc":"Department","job_description_en":"<h4><strong>Exciting things that you will be involved in…</strong></h4><ul><li>Provide high quality customer service experience to clients;</li><li>Lead team members performing daily operations duties;</li><li>Perform KYC checking and different account openings;</li><li>Handle clients’ enquiries and offer solutions;</li><li>Participate in different projects, including revamping online platforms, mobile trading application developments and marketing events, etc;</li><li>Support sales teams in different campaigns to develop and maintain good relations with potential and existing clients;</li><li>Report the performance of the department and clients\' feedback to management;</li><li>Perform other ad hoc tasks assigned by management.</li></ul><h4><strong>How will you be qualified?</strong></h4><ul><li>University degree or above;</li><li>5 years’ of relevant experiences;</li><li>Familiar with brokerage firm operations is preferrable;</li><li>Responsible and willing to take challenges;</li><li>Self-motivated and good interpersonal skills;</li><li>Strong customer service and communication skills;</li><li>Fluent in Cantonese and Mandarin, good command of English</li><li>Eager to drive and succeed</li><li>Entrepreneurial spirit</li></ul>","job_description_tc":"<h4><strong>Exciting things that you will be involved in…</strong></h4><ul><li>Provide high quality customer service experience to clients;</li><li>Lead team members performing daily operations duties;</li><li>Perform KYC checking and different account openings;</li><li>Handle clients’ enquiries and offer solutions;</li><li>Participate in different projects, including revamping online platforms, mobile trading application developments and marketing events, etc;</li><li>Support sales teams in different campaigns to develop and maintain good relations with potential and existing clients;</li><li>Report the performance of the department and clients\' feedback to management;</li><li>Perform other ad hoc tasks assigned by management.</li></ul><h4><strong>How will you be qualified?</strong></h4><ul><li>University degree or above;</li><li>5 years’ of relevant experiences;</li><li>Familiar with brokerage firm operations is preferrable;</li><li>Responsible and willing to take challenges;</li><li>Self-motivated and good interpersonal skills;</li><li>Strong customer service and communication skills;</li><li>Fluent in Cantonese and Mandarin, good command of English</li><li>Eager to drive and succeed</li><li>Entrepreneurial spirit</li></ul>","job_description_sc":"<h4><strong>Exciting things that you will be involved in…</strong></h4><ul><li>Provide high quality customer service experience to clients;</li><li>Lead team members performing daily operations duties;</li><li>Perform KYC checking and different account openings;</li><li>Handle clients’ enquiries and offer solutions;</li><li>Participate in different projects, including revamping online platforms, mobile trading application developments and marketing events, etc;</li><li>Support sales teams in different campaigns to develop and maintain good relations with potential and existing clients;</li><li>Report the performance of the department and clients\' feedback to management;</li><li>Perform other ad hoc tasks assigned by management.</li></ul><h4><strong>How will you be qualified?</strong></h4><ul><li>University degree or above;</li><li>5 years’ of relevant experiences;</li><li>Familiar with brokerage firm operations is preferrable;</li><li>Responsible and willing to take challenges;</li><li>Self-motivated and good interpersonal skills;</li><li>Strong customer service and communication skills;</li><li>Fluent in Cantonese and Mandarin, good command of English</li><li>Eager to drive and succeed</li><li>Entrepreneurial spirit</li></ul>","createdAt":"2022-11-23T10:36:58.308Z","updatedAt":"2022-11-24T09:10:10.806Z","publishedAt":"2022-11-23T10:36:59.982Z","showing_start_date":"2022-11-01","showing_end_date":"2023-01-31"}},{"id":2,"attributes":{"job_title_en":"Relationship Manager","job_title_tc":"客戶關係經理","job_title_sc":"客戶關係經理","category":"All","seniority":"Middle","work_location_en":"HK","work_location_tc":"HK","work_location_sc":"HK","department_en":"Investment Banking Division","department_tc":"投資銀行部","department_sc":"投資銀行部","job_description_en":"<p>投資銀行部投資銀行部投資銀行部投資銀行部</p>","job_description_tc":"<p>2017年3月29日 — 在投資銀行中，大家最熟悉的應為<i>IBD</i>，該部門主要負責公開 ... 副總裁（Vice President，簡稱VP）：千萬別被這<i>中文</i>職稱嚇到，因為一個投資銀行可以有十&nbsp;.</p>","job_description_sc":"<p>投資銀行(<i>Investment Banking</i>)，簡稱投行投資銀行是最典型的投資性金融機構，一般認為，投資銀行是在資本市場上為企業發行債券、股票，籌集長期資金提供中介服務的金融&nbsp;..</p>","createdAt":"2022-11-29T03:44:57.067Z","updatedAt":"2022-11-29T03:44:58.435Z","publishedAt":"2022-11-29T03:44:58.432Z","showing_start_date":"2022-11-01","showing_end_date":"2022-12-31"}}]}');
;// CONCATENATED MODULE: ./src/domains/jobs.tsx
const getJobsCms = async ({ lang  })=>{
    // TODO: get cms from api
    return {
        jobs: [
            {
                tag: "fontOffice",
                title: "Analyst",
                subTitle: "Investment Banking Division",
                Seniority: "Junior level",
                location: "Quarry Bay, Hong Kong",
                lists: [
                    {
                        title: "Role And Responsibilities",
                        list: [
                            "Assist on management to define the Group Technology initiative priority & directions with management. Also conduct communication and alignments with all Technology Corporate Services teams and BU ITBP to formulate the detail Technology Strategic focus",
                            "Apart from defining the strategic initiatives, will also lead the implementation of some selected initiatives",
                            "Apart from defining the new strategic focus, timely review current in-placed group technology projects, technology portfolio, and inventories are essential. Target to releasing the resources, cost and time by eliminating the redundant resources and cost spending and make sure we are focusing on the high value and return initiatives (e.g. OnePlatform, Procurement Consolidation, Application Consolidation, Outsourcing, Technology Stack Simplification, etc.)",
                            "Continue to expand the newly established Technology Corporate Services model to more BU, to create more synergies with an expanded scope.",
                            "Formulate and establish practical and scalable PropTech practices and develop related offering for internal NW business units, even external partners. Aims to deliver significant and measurable business benefits to all stakeholders."
                        ]
                    },
                    {
                        title: "Requirements",
                        list: [
                            "Candidate has both consulting and in-house experience is preferred",
                            " Board exposure in various types of technology, with the role for overseeing large scale of projects / program, such as Department Technology strategy or PMO",
                            "Experiences on drive / own end-to-end technology initiative, from strategy, to implementation and operation is an advantage"
                        ]
                    }
                ],
                content: `We are looking for the below positions. If you think this is the right place for you to be your true self, click on the links today. Join us. For further information, please contact our HRBP via recruit@artatechfin.com or apply directly.`
            },
            {
                tag: "fontOffice",
                title: "Quantitative Analyst",
                subTitle: "Asset Management Devision",
                Seniority: "Junior level",
                location: "Remote",
                lists: [
                    {
                        title: "Role And Responsibilities",
                        list: [
                            "Assist on management to define the Group Technology initiative priority & directions with management. Also conduct communication and alignments with all Technology Corporate Services teams and BU ITBP to formulate the detail Technology Strategic focus",
                            "Apart from defining the strategic initiatives, will also lead the implementation of some selected initiatives",
                            "Apart from defining the new strategic focus, timely review current in-placed group technology projects, technology portfolio, and inventories are essential. Target to releasing the resources, cost and time by eliminating the redundant resources and cost spending and make sure we are focusing on the high value and return initiatives (e.g. OnePlatform, Procurement Consolidation, Application Consolidation, Outsourcing, Technology Stack Simplification, etc.)",
                            "Continue to expand the newly established Technology Corporate Services model to more BU, to create more synergies with an expanded scope.",
                            "Formulate and establish practical and scalable PropTech practices and develop related offering for internal NW business units, even external partners. Aims to deliver significant and measurable business benefits to all stakeholders."
                        ]
                    },
                    {
                        title: "Requirements",
                        list: [
                            "Candidate has both consulting and in-house experience is preferred",
                            " Board exposure in various types of technology, with the role for overseeing large scale of projects / program, such as Department Technology strategy or PMO",
                            "Experiences on drive / own end-to-end technology initiative, from strategy, to implementation and operation is an advantage"
                        ]
                    }
                ],
                content: `We are looking for the below positions. If you think this is the right place for you to be your true self, click on the links today. Join us. For further information, please contact our HRBP via recruit@artatechfin.com or apply directly.`
            },
            {
                tag: "middleAndBackOffice",
                title: "Relationship Manager",
                subTitle: "Investment Banking Division",
                Seniority: "Junior level",
                location: "Hong Kong, Singapore",
                lists: [
                    {
                        title: "Role And Responsibilities",
                        list: [
                            "Assist on management to define the Group Technology initiative priority & directions with management. Also conduct communication and alignments with all Technology Corporate Services teams and BU ITBP to formulate the detail Technology Strategic focus",
                            "Apart from defining the strategic initiatives, will also lead the implementation of some selected initiatives",
                            "Apart from defining the new strategic focus, timely review current in-placed group technology projects, technology portfolio, and inventories are essential. Target to releasing the resources, cost and time by eliminating the redundant resources and cost spending and make sure we are focusing on the high value and return initiatives (e.g. OnePlatform, Procurement Consolidation, Application Consolidation, Outsourcing, Technology Stack Simplification, etc.)",
                            "Continue to expand the newly established Technology Corporate Services model to more BU, to create more synergies with an expanded scope.",
                            "Formulate and establish practical and scalable PropTech practices and develop related offering for internal NW business units, even external partners. Aims to deliver significant and measurable business benefits to all stakeholders."
                        ]
                    },
                    {
                        title: "Requirements",
                        list: [
                            "Candidate has both consulting and in-house experience is preferred",
                            " Board exposure in various types of technology, with the role for overseeing large scale of projects / program, such as Department Technology strategy or PMO",
                            "Experiences on drive / own end-to-end technology initiative, from strategy, to implementation and operation is an advantage"
                        ]
                    }
                ],
                content: `We are looking for the below positions. If you think this is the right place for you to be your true self, click on the links today. Join us. For further information, please contact our HRBP via recruit@artatechfin.com or apply directly.`
            },
            {
                tag: "middleAndBackOffice",
                title: "Analyst",
                subTitle: "Investment Banking Division",
                Seniority: "Junior level",
                location: "Quarry Bay, Hong Kong",
                lists: [
                    {
                        title: "Role And Responsibilities",
                        list: [
                            "Assist on management to define the Group Technology initiative priority & directions with management. Also conduct communication and alignments with all Technology Corporate Services teams and BU ITBP to formulate the detail Technology Strategic focus",
                            "Apart from defining the strategic initiatives, will also lead the implementation of some selected initiatives",
                            "Apart from defining the new strategic focus, timely review current in-placed group technology projects, technology portfolio, and inventories are essential. Target to releasing the resources, cost and time by eliminating the redundant resources and cost spending and make sure we are focusing on the high value and return initiatives (e.g. OnePlatform, Procurement Consolidation, Application Consolidation, Outsourcing, Technology Stack Simplification, etc.)",
                            "Continue to expand the newly established Technology Corporate Services model to more BU, to create more synergies with an expanded scope.",
                            "Formulate and establish practical and scalable PropTech practices and develop related offering for internal NW business units, even external partners. Aims to deliver significant and measurable business benefits to all stakeholders."
                        ]
                    },
                    {
                        title: "Requirements",
                        list: [
                            "Candidate has both consulting and in-house experience is preferred",
                            " Board exposure in various types of technology, with the role for overseeing large scale of projects / program, such as Department Technology strategy or PMO",
                            "Experiences on drive / own end-to-end technology initiative, from strategy, to implementation and operation is an advantage"
                        ]
                    }
                ],
                content: `We are looking for the below positions. If you think this is the right place for you to be your true self, click on the links today. Join us. For further information, please contact our HRBP via recruit@artatechfin.com or apply directly.`
            },
            {
                tag: "middleAndBackOffice",
                title: "Quantitative Analyst",
                subTitle: "Asset Management Devision",
                Seniority: "Junior level",
                location: "Remote",
                lists: [
                    {
                        title: "Role And Responsibilities",
                        list: [
                            "Assist on management to define the Group Technology initiative priority & directions with management. Also conduct communication and alignments with all Technology Corporate Services teams and BU ITBP to formulate the detail Technology Strategic focus",
                            "Apart from defining the strategic initiatives, will also lead the implementation of some selected initiatives",
                            "Apart from defining the new strategic focus, timely review current in-placed group technology projects, technology portfolio, and inventories are essential. Target to releasing the resources, cost and time by eliminating the redundant resources and cost spending and make sure we are focusing on the high value and return initiatives (e.g. OnePlatform, Procurement Consolidation, Application Consolidation, Outsourcing, Technology Stack Simplification, etc.)",
                            "Continue to expand the newly established Technology Corporate Services model to more BU, to create more synergies with an expanded scope.",
                            "Formulate and establish practical and scalable PropTech practices and develop related offering for internal NW business units, even external partners. Aims to deliver significant and measurable business benefits to all stakeholders."
                        ]
                    },
                    {
                        title: "Requirements",
                        list: [
                            "Candidate has both consulting and in-house experience is preferred",
                            " Board exposure in various types of technology, with the role for overseeing large scale of projects / program, such as Department Technology strategy or PMO",
                            "Experiences on drive / own end-to-end technology initiative, from strategy, to implementation and operation is an advantage"
                        ]
                    }
                ],
                content: `We are looking for the below positions. If you think this is the right place for you to be your true self, click on the links today. Join us. For further information, please contact our HRBP via recruit@artatechfin.com or apply directly.`
            }
        ]
    };
};

;// CONCATENATED MODULE: ./src/pages/join-us.tsx






const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/join-us`);
    const data = await res.json();
    return data;
};
const fetchJobsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/join-us-jobs-openings`);
    const data = await res.json();
    return data.data;
};
const massageData = (pageData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    return {
        heroBanner: {
            description: g("description") !== null ? g("description") : "",
            image: "/images/join-us/banner.jpg",
            mobileImage: "/images/join-us/mobile-banner.jpg"
        },
        work_with_arta_description: g("work_with_arta_description"),
        our_values_description: g("our_values_description"),
        arta_cares_description: g("arta_cares_description"),
        job_openings_description: g("job_openings_description"),
        our_values_icons: pageData.data.attributes.our_values_icons,
        our_cares_icons: pageData.data.attributes.our_cares_icons,
        work_with_arta_image: pageData.data.attributes.work_with_arta_image.data.attributes.url || ""
    };
};
const PageJoinUs = (props)=>{
    const { k , cms , jobs  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(PageJoinUs_JoinUsLayout, {
        k: k,
        jobs: jobs
    });
};
const getServerSideProps = async (context)=>{
    const { locale  } = context;
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const cms = await getJobsCms({
        lang: "en"
    });
    // CMS join us page is broken
    const pageData = useLocalCms ? join_us_namespaceObject : await fetchCmsData();
    const jobs = useLocalCms ? join_us_jobs_openings_namespaceObject.a : await fetchJobsData();
    // const pageData = joinUsJson
    return {
        props: {
            k: massageData(pageData, locale),
            cms,
            jobs,
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale || "en", [
                "common"
            ])
        }
    };
};
/* harmony default export */ const join_us = (PageJoinUs);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8228,8619,1966,9707,7607], () => (__webpack_exec__(8356)));
module.exports = __webpack_exports__;

})();