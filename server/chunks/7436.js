"use strict";
exports.id = 7436;
exports.ids = [7436];
exports.modules = {

/***/ 4013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ TABS),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5331);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2001);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(887);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1966);
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9707);
/* harmony import */ var src_domains_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3709);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* eslint-disable */ 










const TABS = {
    announcement: "announcement",
    corporate_information: "corporate_information",
    financial_calendar: "financial_calendar",
    esg: "esg"
};
const InvestorLayout = ({ seo , k , cms , simpleHeader =false , tabType , hideTab =false , children , gaLog =false  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const tabInfoMap = {
        [TABS.announcement]: {
            title: t("investor_relations.announcements_notices"),
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_7__/* .links.investor */ .O.investor,
            value: "announcement"
        },
        [TABS.corporate_information]: {
            title: t("investor_relations.corporate_information"),
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_7__/* .links.investorCorporateInformation */ .O.investorCorporateInformation,
            value: "corporate_information"
        },
        [TABS.financial_calendar]: {
            title: t("investor_relations.financial_calendar"),
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_7__/* .links.investorFinCalendar */ .O.investorFinCalendar,
            value: "financial_calendar"
        },
        [TABS.esg]: {
            title: t("investor_relations.esg"),
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_7__/* .links.investorEsg */ .O.investorEsg,
            value: "esg"
        }
    };
    const tabList = Object.values(tabInfoMap);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tabType === "esg" && document.getElementById("tab")) {
            // @ts-ignore
            document.getElementById("tab").scrollLeft = document.getElementById("tab")?.scrollWidth;
        }
        if (tabType === "financial_calendar" && document.getElementById("tab")) {
            // @ts-ignore
            document.getElementById("tab").scrollLeft = document.getElementById("tab")?.scrollWidth - 100;
        }
        if (tabType === "corporate_information" && document.getElementById("tab")) {
            // @ts-ignore
            document.getElementById("tab").scrollLeft = 100;
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: seo.title || "",
                description: seo.description || "",
                keywords: seo.keywords || "",
                ga: gaLog ? tabType == TABS.announcement ? "IR - Announcements & Reports" : tabType == TABS.corporate_information ? "IR - Corporate Information" : tabType == TABS.financial_calendar ? "IR - Financial Calendar" : tabType == TABS.esg ? "IR - ESG" : "" : ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-page-background text-arta-sand-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroBanner__WEBPACK_IMPORTED_MODULE_5__/* .HeroBanner */ .y, {
                        title: seo.title.replace(" | Arta TechFin", ""),
                        description: k.heroBanner.description,
                        image: k.heroBanner.image,
                        mobileImage: k.heroBanner.mobileImage,
                        label: simpleHeader ? t("page_title.investor_relations") : "",
                        simpleHeader: simpleHeader
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[206px]",
                        id: "content",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "arta-container mx-auto",
                            children: [
                                !hideTab && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "tab",
                                    className: "arta-hide-scrollbar -mx-6 overflow-scroll md:mx-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TabBar__WEBPACK_IMPORTED_MODULE_6__/* .TabBar */ .n, {
                                        className: `${locale == "en" ? "min-w-[750px] lg:min-w-[650px]" : "min-w-[550px] lg:min-w-[500px]"} pl-6`,
                                        tabs: tabList.map((t)=>{
                                            return {
                                                label: t.title,
                                                value: t.value
                                            };
                                        }),
                                        selectedTab: tabType,
                                        setSelectedTab: (_, index)=>next_router__WEBPACK_IMPORTED_MODULE_8___default().push(tabList[index].link, undefined, {
                                                scroll: false
                                            })
                                    })
                                }),
                                children
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestorLayout);


/***/ }),

/***/ 8133:
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"id":1,"attributes":{"description_en":"ARTA TechFin Corporation Limited is a comprehensive financial services institution that aspires to enhance applications in Finance through the use of Technology (\\"Technology in Finance\\" or \\"TechFin\\").","description_tc":"裕承科金有限公司是一家綜合金融服務機構，致力於通過使用技術（「金融技術」或“TechFin”）來增強金融應用。","description_sc":"裕承科金有限公司是一家综合金融服务机构，致力于通过使用技术（「金融技术」或“TechFin”）来增强金融应用。","esg_environmental_en":"<p>Acting responsibly to our planet earth, we devote great efforts to preventing pollution, minimizing energy consumption and reducing physical waste. At ARTA TechFin’s offices, we promote environmentally responsive virtue. Staff at our office are encouraged to have their recyclable waste categorized by paper, metals and plastics at our recycling facilities.&nbsp;</p><p>We have our offices located in K11 Atelier certified green offices. As an environmentally responsible tenant, we have an eco-lighting system installed to ensure electricity will be utilized only when it is necessary at the workstations and rooms; water-saving taps are installed and water will run with a lot more bubbles so that net water volume will be pared. By 2025, we aim to gradually reduce our electricity usage per square foot by 40% and water usage by 50% compared to 2021.&nbsp;</p><p>We also take a prudent approach to ensure our business is not a threat to the environment. In every investment strategy and service provider selection, we shall take sustainability into consideration.&nbsp;</p>","esg_environmental_tc":"<p>為了對環境負責，我們致力於防止污染，儘可能減少能源消耗和物品浪費。我們提倡在辦公室內貫徹環保理念，鼓勵垃圾分類，並可回收垃圾棄於廢物回收箱內。</p><p>我們的辦公室位於K11 Atelier，該寫字樓已取得國際性綠色建築標準認證。作為一個對環境負責的租戶，我們安裝了生態照明系統，確保只有在有人員活動時才開啟。我們還設置了節水水龍頭，增加水中的氣泡，以減少凈出水量。我們希望到2025年，辦公室每平方英尺的用電量能比2021年減少40%，用水量減少50%。</p><p>除此之外，我們時刻採取審慎的態度，確保公司業務不會對環境造成負面影響。我們將可持續性發展的理念融入每一個投資策略以及服務提供商的選擇中。</p>","esg_environmental_sc":"<p>为了对环境负责，我们致力于防止污染，尽可能减少能源消耗和物品浪费。我们提倡在办公室内贯彻环保理念，鼓励垃圾分类，并可回收垃圾弃于废物回收箱内。</p><p>我们的办公室位于K11 Atelier，该写字楼已取得国际性绿色建筑标准认证。作为一个对环境负责的租户，我们安装了生态照明系统，确保只有在有人员活动时才开启。我们还设置了节水水龙头，增加水中的气泡，以减少净出水量。我们希望到2025年，办公室每平方英尺的用电量能比2021年减少40%，用水量减少50%。</p><p>除此之外，我们时刻采取审慎的态度，确保公司业务不会对环境造成负面影响。我们将可持续性发展的理念融入每一个投资策略以及服务提供商的选择中。</p>","esg_social_en":"<h4><strong>Employee care</strong></h4><p>To nurture an equal, engaged and productive working environment, we have adopted flexible working hours. Our performance evaluation is result oriented so that staff can utilize their hours to achieve work-life balance.<br><br>We respect and stand up for the rights and dignity of staff of different races, genders and sexual orientations. People at ARTA TechFin are treated equally and fairly. We evaluate our staff by performance instead of identity.</p><p>Regarding talent management, we adhere to a ‘people-oriented’ principle while striving to provide an equal, diverse and respectful work environment for our employees. We have eliminated any trace of discrimination in hiring or treatment regardless of race, religion, gender, age, marital status, or physical and mental disability. To encourage greater workplace diversity and attract global talent from all walks of life, we welcome suitable foreign applicants and encourage employees to work from home remotely from different countries.&nbsp;<br>&nbsp;</p><h4><strong>Community</strong></h4><p>We believe corporations should take responsibility for fostering a sustainable community, given their considerable influence and prominence within society. We continue to show our care for different aspects of local community development, especially in the focus areas of employment promotion, social services, and community technology development.<br><br>We encourage our employees to participate in charitable events to contribute to society. The company will also organize charitable events as well as monetary donations to charities that match ARTA TechFin’s values.<br>Sharing knowledge to the youth and people in need generously is our social obligation. We will organize talks, seminars and courses with different institutions every year. We will offer up-to-date technical and finance know-how, case studies and market information to the interested parties.</p><p>&nbsp;</p>","esg_social_tc":"<h4><strong>員工關懷</strong></h4><p>為了創造一個平等、有參與感和高生產力的工作環境，我們採取靈活的工作時間安排。我們的績效評估以結果為導向，員工可以自由安排工作時間與個人時間，以實現工作和生活的平衡。</p><p>我們尊重並維護不同種族、性別和性取向的員工的權利與尊嚴。我們的員工受到平等和公正的對待。我們根據績效結果來評估員工，而不是身份背景。</p><p>在人才管理方面，我們堅持 \\\\\\"以人為本 \\\\\\"的原則，同時努力為員工提供一個平等、多樣和受尊敬的工作環境。我們拒絕在招聘過程中的任何針對種族、宗教、性別、年齡、婚姻狀況、身體或精神殘疾的歧視行為。為了鼓勵更多元化的工作環境並吸引來自各行各業的各國人才，我們歡迎合適的外國求職者，並允許員工遠程工作。</p><h4><strong>社區</strong></h4><p>鑒於企業往往在社會上具有相當大的影響力和突出地位，我們認為企業應該承擔起培養可持續發展的社區的責任。我們關心社區發展，特別是促進就業、社會服務和社區技術發展等方面。</p><p>我們鼓勵員工參與慈善活動，為社會做出貢獻。我們也將組織慈善活動，同時向符合我們企業價值觀的慈善機構進行捐贈。</p><p>我們認為知識分享是我們的社會義務。我們每年都會與不同的機構合作組織講座、研討會、課程等，與感興趣的人們分享最新的科技和金融知識、案例研究和市場信息。</p>","esg_social_sc":"<h4><strong>员工关怀</strong></h4><p>为了创造一个平等、有参与感和高生产力的工作环境，我们采取灵活的工作时间安排。我们的绩效评估以结果为导向，员工可以自由安排工作时间与个人时间，以实现工作和生活的平衡。</p><p>我们尊重并维护不同种族、性别和性取向的员工的权利与尊严。我们的员工受到平等和公正的对待。我们根据绩效结果来评估员工，而不是身份背景。</p><p>在人才管理方面，我们坚持 \\"以人为本 \\"的原则，同时努力为员工提供一个平等、多样和受尊敬的工作环境。我们拒绝在招聘过程中的任何针对种族、宗教、性别、年龄、婚姻状况、身体或精神残疾的歧视行为。为了鼓励更多元化的工作环境并吸引来自各行各业的各国人才，我们欢迎合适的外国求职者，并允许员工远程工作。</p><h4><strong>社区</strong></h4><p>鉴于企业往往在社会上具有相当大的影响力和突出地位，我们认为企业应该承担起培养可持续发展的社区的责任。我们关心社区发展，特别是促进就业、社会服务和社区技术发展等方面。</p><p>我们鼓励员工参与慈善活动，为社会做出贡献。我们也将组织慈善活动，同时向符合我们企业价值观的慈善机构进行捐赠。</p><p>我们认为知识分享是我们的社会义务。我们每年都会与不同的机构合作组织讲座、研讨会、课程等，与感兴趣的人们分享最新的科技和金融知识、案例研究和市场信息。</p>","esg_governance_1_en":"<p>We believe the growth and sustainability of the Group\'s businesses depend on the maintenance of high standards of corporate governance and business ethics. We value transparency and accountability as the keys to achieving a high standard of corporate governance, earning the confidence of shareholders and the public. In order to achieve this, ARTA TechFin has implemented strict governance procedures to guarantee accountability and transparency for our shareholders\' long-term interests.</p><h4>&nbsp;<strong>The Board</strong></h4><p>The Board currently comprises a total of eight Directors, being three Executive Directors, two Non-Executive Directors and three Independent Non-Executive Directors, with expertise and experience covering a wide range of professions. The number of Independent Non-Executive Directors represents more than one-third of the Board. They have actively participated in the board committees of the Company and have made significant contributions of their skills and expertise to these committees.</p><h4>&nbsp;<strong>Board Committees</strong></h4><p>There are seven committees established directly under the Board to oversee the accountability of the corporate governance framework, including:&nbsp;</p><ul><li>Management Committee&nbsp;</li><li>Executive Committee</li><li>Advisory Committee&nbsp;</li><li>Compensation, Management Development and Succession Committee&nbsp;</li><li>Nominating and Governance Committee&nbsp;</li><li>Audit Committee</li><li>Risk Committee&nbsp;</li><li>Technology Committee&nbsp;</li></ul><h4><strong>Risk management</strong></h4><p>The Group has adopted both the “Top-down” and “Bottom-up” approaches.&nbsp;</p>","esg_governance_1_tc":"<p>我們相信，企業的業務增長和可持續發展需要高水平的企業管治和商業道德，而透明度和問責性是實現高水平企業管治、獲得股東和公眾信任的關鍵。為了實現這一目標，我們實施嚴格的管治程序，以保證股東的長期利益。</p><h4><strong>董事會&nbsp;</strong></h4><p>目前，董事會由八名董事組成，包括三名執行董事、兩名非執行董事及三名獨立非執行董事，他們的專業知識和經驗涵蓋廣泛的專業領域。獨立非執行董事的人數占董事會的三分之一以上。他們積极參與公司董事委員會，並憑技能和專業知識做出貢獻貢獻。</p><h4><strong>董事委员會</strong></h4><p>董事會直接下設七個委員會，負責監督公司管治框架的問責性，其中包括：</p><ul><li>管理委員會&nbsp;</li><li>執行委員會</li><li>諮詢委員會</li><li>薪酬、管理髮展及繼任委員會&nbsp;</li><li>提名及管制委員會</li><li>審核委員會</li><li>風險委員會</li><li>科技委員會&nbsp;</li></ul><h4><strong>風險管理</strong></h4><p>風險管理方面，我們採納「自上而下」和「自下而上」的方法。</p><h4>&nbsp;</h4>","esg_governance_1_sc":"<p>我们相信，企业的业务增长和可持续发展需要高水平的企业管治和商业道德，而透明度和问责性是实现高水平企业管治、获得股东和公众信任的关键。为了实现这一目标，我们实施严格的管治程序，以保证股东的长期利益。</p><h4><strong>董事会&nbsp;</strong></h4><p>目前，董事会由八名董事组成，包括三名执行董事、两名非执行董事及三名独立非执行董事，他们的专业知识和经验涵盖广泛的专业领域。独立非执行董事的人数占董事会的三分之一以上。他们积极参与公司董事委员会，并凭技能和专业知识做出贡献贡献。</p><h4><strong>董事委员会</strong></h4><p>董事会直接下设七个委员会，负责监督公司管治框架的问责性，其中包括：</p><ul><li>管理委员会&nbsp;</li><li>执行委员会</li><li>咨询委员会</li><li>薪酬、管理发展及继任委员会&nbsp;</li><li>提名及管制委员会</li><li>审核委员会</li><li>风险委员会</li><li>科技委员会</li></ul><h4><strong>风险管理</strong></h4><p>风险管理方面，我们采纳“自上而下”和“自下而上”的方法。</p><h4>&nbsp;</h4>","createdAt":"2022-11-24T07:21:53.243Z","updatedAt":"2022-11-25T02:12:45.609Z","publishedAt":"2022-11-24T07:30:32.335Z","ci_company_name_en":"ARTA TechFin Corporation Limited","ci_company_name_tc":"裕承科金有限公司","ci_company_name_cs":"裕承科金有限公司","ci_sector_en":"Consolidated Enterprises","ci_sector_tc":"綜合企業","ci_sector_sc":"综合企业","ci_principal_place_en":"Units 1-2, Level 9\\nK11 ATELIER King\'s Road\\n728 King\'s Road, Quarry Bay\\nHong Kong","ci_principal_place_tc":"香港鰂魚涌\\n英皇道 728 號\\nK11 ATELIER King\'s Road 9 樓 1-2 室","ci_principal_place_sc":"香港鲗鱼涌\\n英皇道 728 号\\nK11 ATELIER King\'s Road 9 楼 1-2 室","ci_register_office_en":"Cricket Square\\nHutchins Drive\\nP.O. Box 2681\\nGrand Cayman KY1-1111\\nCayman Islands","ci_register_office_tc":"Cricket Square\\nHutchins Drive\\nP.O. Box 2681\\nGrand Cayman KY1-1111\\nCayman Islands","ci_register_office_sc":"Cricket Square\\nHutchins Drive\\nP.O. Box 2681\\nGrand Cayman KY1-1111\\nCayman Islands","ci_web_address":"http://www.artatechfin.com","ci_phone_number":"(852) 3513 8279","ci_fax_number":"(852) 2507 2009","ci_financial_year_end_en":"March 31","ci_financial_year_end_tc":"三月三十一日","ci_financial_year_end_sc":"三月三十一日","ci_independent_directors_en":"Ms. Ling Kit Sum Imma\\nMr. Lo Chun Yu Toby\\nDr. Tam Lai Fan Gloria","ci_independent_directors_tc":"凌潔心女士\\n盧震宇先生\\n譚麗芬醫生","ci_independent_directors_sc":"凌洁心女士\\n卢震宇先生\\n谭丽芬医生","ci_company_secretory_en":"Ms. Chau Yuen Ching Ruby","ci_company_secretory_tc":"周宛澄女士","ci_company_secretory_sc":"周宛澄女士","ci_principal_bankers_en":"The Hongkong and Shanghai Banking Corporation Limited","ci_principal_bankers_tc":"香港上海匯豐銀行有限公司","ci_principal_bankers_sc":"香港上海汇丰银行有限公司","ci_auditors_en":"Crowe (HK) CPA Limited","ci_auditors_tc":"國富浩華（香港）會計師事務所有限公司","ci_auditors_sc":"国富浩华（香港）会计师事务所有限公司","ci_legal_counsels_1_en":"Hong Kong\\nReed Smith Richards Butler\\n17/F One Island East\\nTaikoo Place, 18 Westlands Road\\nQuarry Bay, Hong Kong","ci_legal_counsels_1_tc":"香港\\n禮德齊伯禮律師行\\n香港鰂魚涌\\n華蘭路 18 號\\n太古坊港島東中心 17 樓","ci_legal_counsels_1_sc":"香港\\n礼德齐伯礼律师行\\n香港鲗鱼涌\\n华兰路 18 号\\n太古坊港岛东中心 17 楼","ci_legal_counsels_2_en":"Cayman Islands\\nConyers Dill & Pearman\\n29th Floor, One Exchange Square\\n8 Connaught Place\\nCentral, Hong Kong","ci_legal_counsels_2_tc":"開曼群島\\nConyers Dill & Pearman\\n香港中環\\n康樂廣場 8 號\\n交易廣場第一座 29 樓","ci_legal_counsels_2_sc":"开曼群岛\\nConyers Dill & Pearman\\n香港中环\\n康乐广场 8 号\\n交易广场第一座 29 楼","ci_hkex_stock_code":"279","ci_listing_date":"1988-05-11","ci_share_register_transfer_office_en":"Tricor Secretaries Limited\\n17/F, Far East Finance Centre\\n16 Harcourt Road\\nHong Kong","ci_share_register_transfer_office_tc":"卓佳秘書商務有限公司\\n香港\\n夏慤道 16 號\\n遠東金融中心 17 樓","ci_share_register_transfer_office_sc":"卓佳秘书商务有限公司\\n香港\\n夏慤道 16 号\\n远东金融中心 17 楼","ci_executive_directors_en":"Mr. Lau Fu Wing, Eddie (Chief Executive Officer)\\nMs. Yeung Shuet Fan Pamela\\nMs. Li Chuchu, Tracy","ci_executive_directors_tc":"劉富榮先生 （行政總裁）\\n楊雪芬女士\\n李楚楚女士","ci_executive_directors_sc":"刘富荣先生 （行政总裁）\\n杨雪芬女士\\n李楚楚女士","ci_non_executive_directors_en":"Dr. Cheng Chi-Kong, Adrian JP\\nMr. Han Kam Leung, Michael","ci_non_executive_directors_tc":"鄭志剛博士JP\\n韓金樑先生","ci_non_executive_directors_sc":"郑志刚博士JP\\n韩金梁先生","esg_governance_2_en":"<h4><strong>Code of Conduct</strong></h4><p>The Company recognizes that employees play an essential and integral part in the risk management and internal control systems of the corporate structure. During the induction process, employees are required to understand the Company’s objectives, expectations and practices through training and the Compliance Manual.</p>","esg_governance_2_tc":"<h4><strong>行為準則</strong></h4><p>我們認為員工在公司結構的風險管理和內部監控系統中擔任不可或缺的角色。在入職過程中，員工須通過培訓和合規手冊了解公司在該方面的目標、期望和實行方法。</p>","esg_governance_2_sc":"<h4><strong>行为准则</strong></h4><p>我们认为员工在公司结构的风险管理和内部监控系统中担任不可或缺的角色。在入职过程中，员工须通过培训和合规手册了解公司在该方面的目标、期望和实行方法。</p>"}},"meta":{}}');

/***/ })

};
;