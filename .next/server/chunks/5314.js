"use strict";
exports.id = 5314;
exports.ids = [5314];
exports.modules = {

/***/ 2761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ Layout),
/* harmony export */   "g": () => (/* binding */ TABS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(887);
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5331);
/* harmony import */ var src_components_HeroBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1966);
/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2001);
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9707);
/* harmony import */ var src_domains_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3709);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);









const TABS = {
    Blog: "Blog",
    Press_Releases: "Press_Releases"
};
const Layout = (props)=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("common");
    const { seo , cms , children , gaLog , gaObj , gaType  } = props;
    const tabInfoMap = {
        [TABS.Blog]: {
            title: t("page_title.arta_blog"),
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_6__/* .links.mediaBlog */ .O.mediaBlog,
            value: t("page_title.arta_blog")
        },
        [TABS.Press_Releases]: {
            title: t("page_title.press_release"),
            link: src_domains_links__WEBPACK_IMPORTED_MODULE_6__/* .links.mediaPress */ .O.mediaPress,
            value: t("page_title.press_release")
        }
    };
    const tabList = Object.values(tabInfoMap);
    const tabInfo = tabInfoMap[props.tabType || "Blog"];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Seo__WEBPACK_IMPORTED_MODULE_1__/* .Seo */ .p, {
                title: seo.title,
                description: seo.description,
                keywords: seo.keywords,
                ga: gaLog ? gaLog : "",
                gaObj: gaObj,
                gaType: gaType
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                textColor: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col bg-arta-eggshell-100 pb-28 text-arta-sand-100 md:pb-[150px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_HeroBanner__WEBPACK_IMPORTED_MODULE_3__/* .HeroBanner */ .y, {
                        title: t("page_title.media_centre"),
                        description: cms.heroBanner.description,
                        image: cms.heroBanner.image,
                        mobileImage: cms.heroBanner.mobileImage
                    }),
                    props.tabType && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "arta-container mx-auto",
                        id: "list",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "arta-hide-scrollbar -mx-6 overflow-auto py-10 md:mx-0 lg:py-16 ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TabBar__WEBPACK_IMPORTED_MODULE_5__/* .TabBar */ .n, {
                                className: "justify-center",
                                tabs: tabList.map((t)=>{
                                    return {
                                        label: t.title,
                                        value: t.value
                                    };
                                }),
                                selectedTab: tabInfo.title,
                                setSelectedTab: (_, index)=>next_router__WEBPACK_IMPORTED_MODULE_7___default().push(tabList[index].link, undefined, {
                                        scroll: false
                                    })
                            })
                        })
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                textColor: "brown"
            })
        ]
    });
};



/***/ }),

/***/ 4271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ getMediaCms),
  "Q": () => (/* binding */ getSlug)
});

;// CONCATENATED MODULE: ./apidata/media-centre.json
const media_centre_namespaceObject = JSON.parse('{"data":{"id":1,"attributes":{"description_en":"MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN MediaCentreEN ","description_tc":"MediaCentreTC MediaCentreTC MediaCentreTC MediaCentreTC MediaCentreTC MediaCentreTC MediaCentreTC MediaCentreTC ","description_sc":"MediaCentreSC MediaCentreSC MediaCentreSC MediaCentreSC MediaCentreSC MediaCentreSC MediaCentreSC MediaCentreSC ","createdAt":"2022-11-22T10:03:32.005Z","updatedAt":"2022-11-22T10:03:32.901Z","publishedAt":"2022-11-22T10:03:32.898Z"}},"meta":{}}');
;// CONCATENATED MODULE: ./apidata/media-centre-arta-blogs.json
const media_centre_arta_blogs_namespaceObject = JSON.parse('{"data":[{"id":1,"attributes":{"date":"2022-08-15","title_en":"Mid-Autumn Festival Activities","title_tc":"[TC] Mid-Autumn Festival Activities","title_sc":"[SC] Mid-Autumn Festival Activities","content_en":"<p>The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.</p><p><img src=\\"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409.png\\" alt=\\"Screenshot 2022-11-23 at 6.32.37 PM.png\\"></p>","content_tc":"<p>[TC] The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.</p><p><img src=\\"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409.png\\" alt=\\"Screenshot 2022-11-23 at 6.32.37 PM.png\\"></p>","content_sc":"<p>[SC] The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.</p><p><img src=\\"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409.png\\" alt=\\"Screenshot 2022-11-23 at 6.32.37 PM.png\\"></p>","createdAt":"2022-11-23T10:33:15.554Z","updatedAt":"2022-11-23T10:33:17.085Z","publishedAt":"2022-11-23T10:33:17.083Z","thumbnail":{"data":{"id":18,"attributes":{"name":"Screenshot 2022-11-23 at 6.32.37 PM.png","alternativeText":"Screenshot 2022-11-23 at 6.32.37 PM.png","caption":"Screenshot 2022-11-23 at 6.32.37 PM.png","width":552,"height":386,"formats":{"small":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/small_Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409.png","hash":"small_Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409","mime":"image/png","name":"small_Screenshot 2022-11-23 at 6.32.37 PM.png","path":null,"size":469.33,"width":500,"height":350},"thumbnail":{"ext":".png","url":"https://dhrhnojxde2hk.cloudfront.net/thumbnail_Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409.png","hash":"thumbnail_Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409","mime":"image/png","name":"thumbnail_Screenshot 2022-11-23 at 6.32.37 PM.png","path":null,"size":102.57,"width":223,"height":156}},"hash":"Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409","ext":".png","mime":"image/png","size":421.13,"url":"https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_11_23_at_6_32_37_PM_1448b1a409.png","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T10:32:53.046Z","updatedAt":"2022-11-23T10:32:55.360Z"}}}}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":1}}}');
;// CONCATENATED MODULE: ./apidata/media-centre-press-releases.json
const media_centre_press_releases_namespaceObject = JSON.parse('{"data":[{"id":1,"attributes":{"date":"2022-04-06","title_en":"ARTA TechFin Partners with Digital Technology of Insurance (“DTI” )to Create Digital Insurance Platform in Greater Bay Area","title_tc":"裕承科金與燕道數科攜手合作 – 打造以客戶體驗及科技賦能為雙核心的一站式財富管理平台解决方案","title_sc":"裕承科金与燕道数科携手合作 – 打造以客户体验及科技赋能为双核心的一站式财富管理平台解决方案","content_en":"<h4><i><strong>ARTA: Break Barriers for Greatness&nbsp;</strong></i></h4><p>(Hong Kong, 4 April 2022) – Hong Kong’s ARTA TechFin (00279.HK) (“ARTA”) and China’s Digital Technology of Insurance (“DTI”) today announced their partnership to deliver a Greater Bay Area (“GBA”) technology-driven insurance and wealth management resource. The alliance will immediately focus on the GBA insurance brokerage industry by delivering proprietary sales-focused SaaS system, tech-enabled sales support and training services, and plans for an insurance technology innovation centre in the GBA by 2022Q3.&nbsp;</p><p>The ARTA and DTI partnership plans to revolutionize how traditional insurance brokers serve high net-worth clients by enhancing their digital competitiveness. The partnership will enable agents and brokers to streamline their business processes and save time on transaction processing by modularising insurance policy data and applying advanced actuarial modelling and data analytical capabilities from ARTA/DTI. Both parties are committed to offering customers with one-stop wealth management solutions including insurance as well as other Hong Kong financial products and services. Through customer resource sharing and technology empowerment, the goal is to speed up the company’s insurance brokerage business development and revenue growth.&nbsp;</p><p>Fully compliant with all cross-border regulations, the innovative new ARTA/DTI resource will deliver a variety of co-branded products and services to the end-customers, agents and brokers.&nbsp;</p><p>Key advantages of the ARTA-DTI strategic partnership include accessing to one of the most comprehensive cross-border insurance databases, significant reductions in policy processing times and insurance technology innovation in GBA.&nbsp;</p><p>DTI’s insurance database spans 30 years of historical life insurance product data in mainland China. Data scope includes life insurance saving products, protection-based insurance products, and insurance products issued under provincial social security fund regulations.&nbsp;</p><p>DTI is currently the only China-based technology company that has completed data collection, design and structuring of Hong Kong-based insurance policies that are most favoured by Mainland clients. The ARTA/DTI partnership aims to deliver products that greatly improve efficiency and productivity in insurance sales by shortening policy transaction processing time from two weeks to one to two hours.&nbsp;</p><p><strong>Mr. Eddie Lau</strong>, Chief Executive Officer of ARTA TechFin said today, “ARTA aspires to transform traditional financial ecosystem via technology innovation such as Blockchain application and process automation. Our strategic partnership with DTI delivers China cross-border resource and experience.&nbsp;</p><p>Clients will enjoy personalized, immersive and innovative services in insurance and wealth management. Our digital business solutions will empower agents and brokers and digitise customer preferences and profiles with a goal of better serving customers’ needs. Our ultimate goal is to speed up the company’s insurance brokerage business development and revenue growth through customer resource sharing and technology empowerment.”&nbsp;</p><p><strong>Mr. Leo Lou, Chief Executive Officer of DTI</strong> said today, “DTI has always been committed to elevating the insurance industry through actuarial and data technology. We offer innovative services across actuarial consultation, data structuring, professional training and business support. We believe these will strengthen, standardize and evolve the life insurance industry in the GBA.” Previously General Manager, Noah Glory Insurance Broker, Lou is a pioneer in the Chinese actuarial industry and brings a wealth of experience in insurance actuarial, sales and operations.&nbsp;</p><p>&nbsp;</p>","content_tc":"<h4><strong>裕承科金 </strong>– Break Barriers for Greatness</h4><p>&nbsp; (2022年4月4日，香港）– 裕承科金（00279.HK）及保險精算和數據科技專家燕道（寧波）數據科技有限公司（「燕道數科」）今天宣布建立策略性合作夥伴關係，共同打造以客戶體驗及科技賦能為雙核心的一站式財富管理平台解决方案，向高端客戶提供包括保險及其他香港金融產品服務，並以大灣區保險經紀業務發展作為新起點。&nbsp;</p><p>是次合作結合雙方股東的資金實力、科技創新及人才優勢，創立高端客戶數碼化營銷模式，提高保險經紀公司的數碼競爭力 (digital competitiveness)，通過採用「 結合線上線下的O2O融合」商業模式，並在滿足兩地合規的基礎上，憑藉科技創新簡化流程，讓客戶在購買保險的同時，享受豐富有趣的沉浸式體驗。&nbsp;</p><p>裕承科金與燕道數科的策略性合作主要優勢包括：&nbsp;</p><ul><li><strong>最完整的結構化大數據資料庫：</strong>燕道數科具備中國內地近30年最完整的人壽保險產品結構化數據、全國各省社保規則數據及保障領域專業數據，結合自主研發的數碼技術，形成了一站式的壽險銷售系統，賦能代理人及經紀人於不同的業務場景均可以滿足高端客戶的需求，回應粵港澳大灣區內的目標客戶群所需。&nbsp;</li><li><strong>當前市場唯一：</strong>燕道數科是中國內地目前唯一一家將內地客戶偏好的主流香港保單數據結構化的科技公司，並已完成基礎架構設計和數據採集，可將客戶保單整理時間從2週縮短到1-2小時，大幅提高保險銷售的效率及產出。&nbsp;</li><li><strong>聚焦大灣區保險科技創新：</strong>雙方擬成立粵港澳大灣區保險科技創新中心，推出聯名產品及服務，聚焦中港兩地的保險經紀公司，覆蓋多元化的經紀銷售場景，針對客戶需求，打造數碼化業務模式，結合專業的保險經紀人培訓體系，將保險代理的行業標準百萬圓桌（MDRT）管理系統引入保險經紀公司。&nbsp;</li><li><strong>利用科技改變傳統金融業務</strong>：憑藉裕承科金的區塊鏈技術，在粵港澳大灣區與燕道數科一同推廣投資者教育、客戶線上虛擬體驗、金融從業人員職業培訓等。&nbsp;</li></ul><p><strong>燕道數科創始人兼行政總裁婁道永先生</strong>表示：「燕道創業至今，一直致力於『用精算技術和數據科技提升保險業的服務模式』，為壽險行業健康化、規範化、高質量的轉型升級，提供『精算諮詢、數據系統、專業培訓、營銷支持』 各方面上專業、創新、全流程一體化的服務。裕承科金正在構建的區塊鏈金融服務、雲端企業支援、傳統及數碼資產管理和『創造者</p><p>經濟』的理念，與燕道秉承的『以科技創新』為核心動力的企業精神不謀而合，雙方所服務的金融領域有著廣泛的交叉和重合點，具備深度合作、強強聯合的互補基礎和優勢。我們非常期待通過未來的良性合作，帶給保險、金融領域的客戶更高效、智能、沉浸式的體驗，在國家邁向科技強國的征程中，實現企業的社會價值。」婁先生曾在諾亞榮耀保險經紀公司擔任總經理，為中國內地首批精算師，在保險精算、銷售、營運等領域擁有豐富的實戰經驗。&nbsp;</p><p><strong>裕承科金行政總裁劉富榮先生</strong>表示：「裕承科金致力通過科技改造金融生態圈，是次通過與婁道永先生及燕道數科團隊的策略性合作，借助雙方生態體系及合作夥伴，把握中國內地壽險高端客戶對資產配置、家族傳承的巨大需求，為客戶打造沉浸式的保險及財富管理體驗，滿足他們對於產品服務、消費體驗、科技應用等方面，更高標準、更個性化、更定制化的需求。同時，通過雙方的客戶資源對接及科技賦能，加速提升我們保險經紀業務的發展和營收。」&nbsp;</p><p>相關服務預計在2022年第三季正式推出。&nbsp;</p>","content_sc":"<h4><strong>裕承科金 – </strong>Break Barriers for Greatness&nbsp;</h4><p>(2022年4月4日，香港）– 裕承科金（00279.HK）及保险精算和数据科技专家燕道（宁波）数据科技有限公司（「燕道数科」）今天宣布建立战略性合作伙伴关系，共同打造以客户体验及科技赋能为双核心的一站式财富管理平台解决方案，向高端客户提供包括保险及其他香港金融产品服务, 并以大湾区保险经纪业务发展作为新起点。&nbsp;</p><p>是次合作结合双方股东的资金实力、科技创新及人才优势，创立高端客户数字化营销模式，提高保险经纪公司的数字竞争力 (digital competitiveness)，通过采用「 结合线上线下的O2O融合」商业模式，并在满足两地合规的基础上，凭借科技创新简化流程，让客户在购买保险的同时，享受丰富有趣的沉浸式体验。&nbsp;</p><p>裕承科金与燕道数科的战略性合作主要优势包括：&nbsp;</p><ul><li><strong>最完整的结构化大数据数据库：</strong>燕道数科具备中国内地近30年最完整的人寿保险产品结构化数据、全国各省社保规则数据及保障领域专业数据，结合自主研发的数字技术，形成了全流程的专业寿险销售系统，赋能代理人及经纪人于不同的业务场景均可以满足高端客户的需求，响应粤港澳大湾区内的目标客户群所需。&nbsp;</li><li><strong>当前市场唯一：</strong>燕道数科是中国内地目前唯一一家将内地客户偏好的主流香港保单数据结构化的科技公司，并已完成基础架构设计和数据采集，可将客户保单整理时间从2周缩短到1-2小时，大幅提高保险销售的效率及产出。&nbsp;</li><li><strong>聚焦大湾区保险科技创新：</strong>双方拟成立粤港澳大湾区保险科技创新中心，推出联名产品及服务，聚焦中港两地的保险经纪公司，覆盖多元化的经纪销售场景，针对客户需求，打造数字化业务模式，结合专业的保险经纪人培训体系，将保险代理的行业标准百万圆桌（MDRT）管理系统引入保险经纪公司。&nbsp;</li><li><strong>利用科技改变传统金融业务</strong>：利用裕承科金的区块链技术，在粤港澳大湾区与燕道数科一同推广投资者教育、客户在线虚拟体验、金融从业人员职业培训等。&nbsp;</li></ul><p><strong>燕道数科创始人兼行政总裁娄道永先生</strong>表示：“燕道创业至今，一直致力于 ‘用精算技术和数据科技提升保险业的服务模式’ ，为寿险行业健康化、规范化、高质量的转型升级，提供‘精算咨询、数据系统、专业培训、营销支持’ 各方面上专业、创新、全流程一体化的服务。裕承科金正在构建的区块链金融服务、云端企业支持、传统及数字资产管理和 ‘创造者经济’ 的</p><p>理念，与燕道秉承的 ‘以科技创新’ 为核心动力的企业精神不谋而合，双方所服务的金融领域有着广泛的交叉和重合点，具备深度合作、强强联合的互补基础和优势。我们非常期待通过未来的良性合作，带给保险、金融领域的客户更高效、智能、沉浸式的体验，在国家迈向科技强国的征程中，实现企业的社会价值。” 娄先生曾在诺亚荣耀保险经纪公司担任总经理，为中国内地首批精算师，在保险精算、销售、运营等领域拥有丰富的实战经验。&nbsp;</p><p><strong>裕承科金行政总裁刘富荣先生</strong>表示：“裕承科金致力通过科技改造金融生态圈，是次通过与娄道永先生及燕道数科团队的战略性合作，借助双方生态体系及合作伙伴，把握中国内地寿险高端客户对资产配置、家族传承的巨大需求，为客户打造沉浸式的保险及财富管理体验，满足他们对于产品服务、消费体验、科技应用等方面，更高标准、更个性化、更定制化的需求。同时，通过双方的客户资源对接及科技赋能，加速提升我们保险经纪业务的发展和营收。”&nbsp;</p><p>相关服务预计在2022年第三季正式推出。</p>","createdAt":"2022-11-23T10:21:20.406Z","updatedAt":"2022-11-23T10:21:21.869Z","publishedAt":"2022-11-23T10:21:21.854Z","pdf_en":{"data":{"id":12,"attributes":{"name":"ARTA-strategic-partnership-with-DTI_20220404-EN_Final-1.pdf","alternativeText":"ARTA-strategic-partnership-with-DTI_20220404-EN_Final-1.pdf","caption":"ARTA-strategic-partnership-with-DTI_20220404-EN_Final-1.pdf","width":null,"height":null,"formats":null,"hash":"ARTA_strategic_partnership_with_DTI_20220404_EN_Final_1_d8544814f4","ext":".pdf","mime":"application/pdf","size":125.85,"url":"https://dhrhnojxde2hk.cloudfront.net/ARTA_strategic_partnership_with_DTI_20220404_EN_Final_1_d8544814f4.pdf","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T10:19:27.608Z","updatedAt":"2022-11-23T10:19:27.608Z"}}},"pdf_sc":{"data":{"id":14,"attributes":{"name":"ARTA-strategic-partnership-with-DTI_20220404-TC_Final.pdf","alternativeText":"ARTA-strategic-partnership-with-DTI_20220404-TC_Final.pdf","caption":"ARTA-strategic-partnership-with-DTI_20220404-TC_Final.pdf","width":null,"height":null,"formats":null,"hash":"ARTA_strategic_partnership_with_DTI_20220404_TC_Final_8c14b40e0f","ext":".pdf","mime":"application/pdf","size":226.04,"url":"https://dhrhnojxde2hk.cloudfront.net/ARTA_strategic_partnership_with_DTI_20220404_TC_Final_8c14b40e0f.pdf","previewUrl":null,"provider":"aws-s3","provider_metadata":null,"createdAt":"2022-11-23T10:19:27.651Z","updatedAt":"2022-11-23T10:19:27.651Z"}}}}},{"id":2,"attributes":{"date":"2021-12-17","title_en":"ARTA TechFin: Chairman Speech","title_tc":"裕承科金 – 主席演講","title_sc":"裕承科金 – 主席演讲","content_en":"<p>Welcome everyone, friends, welcome to the ARTA TechFin New Journey Celebration, I am thrilled to be seeing all of you here tonight to celebrate together for ARTA TechFin. I want to thank you all for supporting our journey – <strong>a TechFin journey that brings immersive experiences through the power of creativity and innovation.</strong></p><p>As you would have guessed, <strong>our vision is to transform traditional financial services using technology</strong>. From transforming a local brokerage to global, from building up a China cross-border business from ground zero, and from building a One-stop-shop financial experience for our customers, <strong>our wish is to enrich your financial experiences</strong>. <strong>TechFin is different from FinTech. TechFin launches new ways to deliver financial services and solutions by thinking like a Tech company</strong>. We are breaking new ground every day to serve you more efficiently and, most importantly, more creatively.</p><p><strong>Think about virtual reality</strong> – why can’t every customer have his or her own avatar to tell the world who they truly are? Having their own avatars in their own dresses, customers can carry out financial transactions with more fun and personality. Imagine you can deeply feel all the excitement from human interaction and market madness while trading stocks in the VR world, where transactions are executed as normally done in the real world. <strong>Virtual reality and metaverse enable financial services to be much more immersive than what a traditional bank can currently offer.</strong> As a TechFin creator, we aspire to offer you this truly fun but yet highly pragmatic investing experience.</p><p><strong>Customers can also create, share, and exchange what hold very dear to their hearts</strong> – their art creation, their unique moments, their 3D avatar, and any virtual commodity that one can imagine.&nbsp; <strong>Blockchain technology advancement makes this dream possible</strong>. We are going to enable our customers to create NFT or NFR, depending on where and who you are. Our teams are committed to deep diving into the sea of blockchain application, <strong>from permissioned blockchain and Know-your-member for high-frequency financial transactions to decentralized finance that works hand-in-hand with KYC and AML compliance.</strong> Automation and Blockchain are building blocks of future of finance. <strong>Just</strong> <strong>like the Greek philosophers exchanging intellectual conversation in “The School of Athens”, we are forming blockchain alliance with the great minds</strong> to advance knowledge and tackle problems collectively.</p><p><strong>At the core of ARTA TechFin is our passion to make positive social impact and change by examples</strong>. <strong>Our vision is to invigorate global millennials</strong>, particularly those in Hong Kong, to reconnect with creativity and innovation. We lead by examples for the Gen Z to witness that <strong>being bold, open-minded, and different is key to unimaginable success</strong>. The youth shall recognize GBA is the present and future – we are here to help the young generation with GBA integration. Sustainable development via gender equality advancements is also important for us. <strong>We lead by examples with our female board member ratio at 50%, probably one of the highest in Hong Kong and for sure way higher the 13.7% average across 2500+ companies.</strong> Our vision, perseverance, and hard-work, over last 18 months, give us with <strong>a ready-made platform with full suite of financial licenses, exceptional talents, and viable businesses</strong>. We can service our clients immediately and build up our technology initiatives with real-time business application<strong>. I am a firm believer that we need changes. There is a strong need to move away from the orthodox services-provision mindset.We are here to create and innovate the new “creator economy”. We thank you for supporting our “creator economy” journey, making our services more creative, and our society more open and vibrant</strong>.&nbsp; Thank you.</p>","content_tc":"<p>[TC] Welcome everyone, friends, welcome to the ARTA TechFin New Journey Celebration, I am thrilled to be seeing all of you here tonight to celebrate together for ARTA TechFin. I want to thank you all for supporting our journey – <strong>a TechFin journey that brings immersive experiences through the power of creativity and innovation.</strong></p><p>As you would have guessed, <strong>our vision is to transform traditional financial services using technology</strong>. From transforming a local brokerage to global, from building up a China cross-border business from ground zero, and from building a One-stop-shop financial experience for our customers, <strong>our wish is to enrich your financial experiences</strong>. <strong>TechFin is different from FinTech. TechFin launches new ways to deliver financial services and solutions by thinking like a Tech company</strong>. We are breaking new ground every day to serve you more efficiently and, most importantly, more creatively.</p><p><strong>Think about virtual reality</strong> – why can’t every customer have his or her own avatar to tell the world who they truly are? Having their own avatars in their own dresses, customers can carry out financial transactions with more fun and personality. Imagine you can deeply feel all the excitement from human interaction and market madness while trading stocks in the VR world, where transactions are executed as normally done in the real world. <strong>Virtual reality and metaverse enable financial services to be much more immersive than what a traditional bank can currently offer.</strong> As a TechFin creator, we aspire to offer you this truly fun but yet highly pragmatic investing experience.</p><p><strong>Customers can also create, share, and exchange what hold very dear to their hearts</strong> – their art creation, their unique moments, their 3D avatar, and any virtual commodity that one can imagine.&nbsp; <strong>Blockchain technology advancement makes this dream possible</strong>. We are going to enable our customers to create NFT or NFR, depending on where and who you are. Our teams are committed to deep diving into the sea of blockchain application, <strong>from permissioned blockchain and Know-your-member for high-frequency financial transactions to decentralized finance that works hand-in-hand with KYC and AML compliance.</strong> Automation and Blockchain are building blocks of future of finance. <strong>Just</strong> <strong>like the Greek philosophers exchanging intellectual conversation in “The School of Athens”, we are forming blockchain alliance with the great minds</strong> to advance knowledge and tackle problems collectively.</p><p><strong>At the core of ARTA TechFin is our passion to make positive social impact and change by examples</strong>. <strong>Our vision is to invigorate global millennials</strong>, particularly those in Hong Kong, to reconnect with creativity and innovation. We lead by examples for the Gen Z to witness that <strong>being bold, open-minded, and different is key to unimaginable success</strong>. The youth shall recognize GBA is the present and future – we are here to help the young generation with GBA integration. Sustainable development via gender equality advancements is also important for us. <strong>We lead by examples with our female board member ratio at 50%, probably one of the highest in Hong Kong and for sure way higher the 13.7% average across 2500+ companies.</strong> Our vision, perseverance, and hard-work, over last 18 months, give us with <strong>a ready-made platform with full suite of financial licenses, exceptional talents, and viable businesses</strong>. We can service our clients immediately and build up our technology initiatives with real-time business application<strong>. I am a firm believer that we need changes. There is a strong need to move away from the orthodox services-provision mindset.We are here to create and innovate the new “creator economy”. We thank you for supporting our “creator economy” journey, making our services more creative, and our society more open and vibrant</strong>.&nbsp; Thank you.</p>","content_sc":"<p>[SC] Welcome everyone, friends, welcome to the ARTA TechFin New Journey Celebration, I am thrilled to be seeing all of you here tonight to celebrate together for ARTA TechFin. I want to thank you all for supporting our journey – <strong>a TechFin journey that brings immersive experiences through the power of creativity and innovation.</strong></p><p>As you would have guessed, <strong>our vision is to transform traditional financial services using technology</strong>. From transforming a local brokerage to global, from building up a China cross-border business from ground zero, and from building a One-stop-shop financial experience for our customers, <strong>our wish is to enrich your financial experiences</strong>. <strong>TechFin is different from FinTech. TechFin launches new ways to deliver financial services and solutions by thinking like a Tech company</strong>. We are breaking new ground every day to serve you more efficiently and, most importantly, more creatively.</p><p><strong>Think about virtual reality</strong> – why can’t every customer have his or her own avatar to tell the world who they truly are? Having their own avatars in their own dresses, customers can carry out financial transactions with more fun and personality. Imagine you can deeply feel all the excitement from human interaction and market madness while trading stocks in the VR world, where transactions are executed as normally done in the real world. <strong>Virtual reality and metaverse enable financial services to be much more immersive than what a traditional bank can currently offer.</strong> As a TechFin creator, we aspire to offer you this truly fun but yet highly pragmatic investing experience.</p><p><strong>Customers can also create, share, and exchange what hold very dear to their hearts</strong> – their art creation, their unique moments, their 3D avatar, and any virtual commodity that one can imagine.&nbsp; <strong>Blockchain technology advancement makes this dream possible</strong>. We are going to enable our customers to create NFT or NFR, depending on where and who you are. Our teams are committed to deep diving into the sea of blockchain application, <strong>from permissioned blockchain and Know-your-member for high-frequency financial transactions to decentralized finance that works hand-in-hand with KYC and AML compliance.</strong> Automation and Blockchain are building blocks of future of finance. <strong>Just</strong> <strong>like the Greek philosophers exchanging intellectual conversation in “The School of Athens”, we are forming blockchain alliance with the great minds</strong> to advance knowledge and tackle problems collectively.</p><p><strong>At the core of ARTA TechFin is our passion to make positive social impact and change by examples</strong>. <strong>Our vision is to invigorate global millennials</strong>, particularly those in Hong Kong, to reconnect with creativity and innovation. We lead by examples for the Gen Z to witness that <strong>being bold, open-minded, and different is key to unimaginable success</strong>. The youth shall recognize GBA is the present and future – we are here to help the young generation with GBA integration. Sustainable development via gender equality advancements is also important for us. <strong>We lead by examples with our female board member ratio at 50%, probably one of the highest in Hong Kong and for sure way higher the 13.7% average across 2500+ companies.</strong> Our vision, perseverance, and hard-work, over last 18 months, give us with <strong>a ready-made platform with full suite of financial licenses, exceptional talents, and viable businesses</strong>. We can service our clients immediately and build up our technology initiatives with real-time business application<strong>. I am a firm believer that we need changes. There is a strong need to move away from the orthodox services-provision mindset.We are here to create and innovate the new “creator economy”. We thank you for supporting our “creator economy” journey, making our services more creative, and our society more open and vibrant</strong>.&nbsp; Thank you.</p>","createdAt":"2022-12-02T03:57:05.534Z","updatedAt":"2022-12-02T03:57:26.541Z","publishedAt":"2022-12-02T03:57:26.538Z","pdf_en":{"data":null},"pdf_sc":{"data":null}}},{"id":3,"attributes":{"date":"2022-11-30","title_en":"testing ","title_tc":"testing","title_sc":"testing","content_en":"<p>testingtestingtesting</p>","content_tc":"<p>testingtestingtesting</p>","content_sc":"<p>testingtestingtesting</p>","createdAt":"2022-12-02T04:02:09.621Z","updatedAt":"2022-12-02T04:02:11.879Z","publishedAt":"2022-12-02T04:02:11.876Z","pdf_en":{"data":null},"pdf_sc":{"data":null}}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":3}}}');
;// CONCATENATED MODULE: ./src/domains/media.tsx



const getSlug = (title)=>{
    return title.toLowerCase().replace(/[- ]+/g, "-").replace(/[^\w-]+/g, "");
};
const fetchCmsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-center`);
    const data = await res.json();
    return data;
};
const fetchBlogsData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-arta-blogs`);
    const data = await res.json();
    return data;
};
const fetchPressData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-press-releases`);
    const data = await res.json();
    return data;
};
const massageData = (pageData, blogData, pressData, locale = "en")=>{
    const g = (keyWithoutLang)=>`${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`;
    const getKey = (keyWithoutLang)=>`${`${keyWithoutLang}_${locale}`}`;
    return {
        heroBanner: {
            title: "Media Centre",
            description: g("description") !== null ? g("description") : "",
            image: "/images/media-centre/banner.jpg",
            mobileImage: "/images/media-centre/mobile-banner.jpg"
        },
        blogPosts: blogData.data.map(({ attributes: blog  })=>({
                image: blog.thumbnail.data?.attributes.url,
                date: blog.date,
                title: blog[getKey("title")],
                slug: blog.slug,
                text: blog[getKey("content")]
            })),
        pressPosts: pressData.data.sort((a, b)=>a.attributes.date.localeCompare(b.attributes.date)).map(({ attributes: press  })=>({
                year: +press.date.split("-")[0],
                post: {
                    date: press.date,
                    slug: press.slug,
                    title: press[getKey("title")],
                    title_en: press.title_en,
                    text: press[getKey("content")],
                    pdf: press[getKey("pdf")] ?? {}
                }
            })).reduce((acc, curr)=>{
            const last = acc[acc.length - 1];
            if (last && last.year === curr.year) {
                last.posts.push(curr.post);
            } else {
                acc.push({
                    year: curr.year,
                    posts: [
                        curr.post
                    ]
                });
            }
            return acc;
        }, [])
    };
};
const getMediaCms = async ({ lang  })=>{
    const useLocalCms = process.env.USE_LOCAL_CMS_DATA === "true";
    const pageData = useLocalCms ? media_centre_namespaceObject : await fetchCmsData();
    const blogsData = useLocalCms ? media_centre_arta_blogs_namespaceObject : await fetchBlogsData();
    const pressData = useLocalCms ? media_centre_press_releases_namespaceObject : await fetchPressData();
    return massageData(pageData, blogsData, pressData, lang);
};


/***/ })

};
;