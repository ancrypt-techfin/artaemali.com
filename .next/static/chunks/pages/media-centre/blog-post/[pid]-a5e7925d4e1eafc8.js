(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9],{9586:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/media-centre/blog-post/[pid]",function(){return r(2590)}])},8619:function(e,t,r){"use strict";r.d(t,{N:function(){return o}});var l=r(5893),a=r(7294),s=r(990),n=r(4184),i=r.n(n);function o(e){let{children:t,className:r,startPos:n=75}=e,o=a.useRef(null),[c,d]=a.useState(!1);return a.useEffect(()=>{(null==o?void 0:o.current)&&s.p8.timeline({scrollTrigger:{trigger:o.current,start:"top ".concat(window.innerWidth>767?n:95,"%"),onEnter(){d(()=>!0)}}})},[n]),(0,l.jsx)("div",{className:i()(c?"translate-y-0 opacity-100":"translate-y-16 opacity-0",r,"transition-all duration-[1.2s] ease-out"),ref:o,children:t})}},1966:function(e,t,r){"use strict";r.d(t,{y:function(){return u}});var l=r(5893),a=r(7188),s=r(990),n=r(6546),i=r(7294),o=r(8619),c=r(4184),d=r.n(c);s.p8.registerPlugin(n.ScrollTrigger);let u=e=>{let{simpleHeader:t=!1,title:r,title2:n,label:c,description:u,image:m,mobileImage:g,fullWidth:h=!1}=e,p=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=s.p8.timeline({scrollTrigger:{trigger:p.current,start:"top top",end:"bottom top",scrub:!0}});e.to(p.current,{y:200})},[]),(0,l.jsxs)("div",{className:d()("relative z-2 w-full overflow-hidden",t?"h-[60vh]":"h-app-height md:h-[0] md:pb-[56.25%]"),children:[(0,l.jsxs)("div",{ref:p,className:"absolute h-full w-full overflow-hidden",children:[(0,l.jsx)("img",{src:t?"/images/investor-relations/top-inner-banner.jpg":m,alt:r,className:"hidden h-full w-full object-cover md:block"}),(0,l.jsx)("img",{src:t?"/images/investor-relations/mobile-top-inner-banner.jpg":g,alt:r,className:"h-full w-full object-cover md:hidden"})]}),(0,l.jsx)("div",{className:d()("absolute inset-0 mb-12 flex flex-col items-center justify-end pt-20 lg:mb-0",t?"lg:bottom-16":"lg:justify-center"),children:(0,l.jsx)("div",{className:"arta-container banner-text-shadow text-white",children:(0,l.jsx)(o.N,{children:(0,l.jsxs)("div",{className:d()(t||h?"":"md:w-1/2"),children:[(0,l.jsx)("p",{className:a.Y.title_style2,children:c}),(0,l.jsxs)("h1",{className:"mt-1 ".concat(a.Y.h1_style2),children:[r," ",n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("br",{})," ",n]}):""]}),"null"!==u&&!t&&(0,l.jsx)("p",{className:"mt-4 ".concat(a.Y.body_regular_verah),children:u})]})})})})]})}},2761:function(e,t,r){"use strict";r.d(t,{b:function(){return h},g:function(){return g}});var l=r(5893),a=r(887),s=r(5331),n=r(1966),i=r(8462),o=r(9707),c=r(3709),d=r(1163),u=r.n(d),m=r(7687);let g={Blog:"Blog",Press_Releases:"Press_Releases"},h=e=>{let{t}=(0,m.$G)("common"),{seo:r,cms:d,children:h,gaLog:p,gaObj:b,gaType:x}=e,f={[g.Blog]:{title:t("page_title.arta_blog"),link:c.O.mediaBlog,value:t("page_title.arta_blog")},[g.Press_Releases]:{title:t("page_title.press_release"),link:c.O.mediaPress,value:t("page_title.press_release")}},_=Object.values(f),j=f[e.tabType||"Blog"];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.p,{title:r.title,description:r.description,keywords:r.keywords,ga:p||"",gaObj:b,gaType:x}),(0,l.jsx)(s.Z,{textColor:"white"}),(0,l.jsxs)("main",{className:"flex flex-col bg-arta-eggshell-100 pb-28 text-arta-sand-100 md:pb-[150px]",children:[(0,l.jsx)(n.y,{title:t("page_title.media_centre"),description:d.heroBanner.description,image:d.heroBanner.image,mobileImage:d.heroBanner.mobileImage}),e.tabType&&(0,l.jsx)("div",{className:"arta-container mx-auto",id:"list",children:(0,l.jsx)("div",{className:"arta-hide-scrollbar -mx-6 overflow-auto py-10 md:mx-0 lg:py-16 ",children:(0,l.jsx)(o.n,{className:"justify-center",tabs:_.map(e=>({label:e.title,value:e.value})),selectedTab:j.title,setSelectedTab:(e,t)=>u().push(_[t].link,void 0,{scroll:!1})})})}),h]}),(0,l.jsx)(i.Z,{textColor:"brown"})]})}},9707:function(e,t,r){"use strict";r.d(t,{n:function(){return i}});var l=r(5893),a=r(7294),s=r(4184),n=r.n(s);let i=e=>{let{tabs:t,selectedTab:r,setSelectedTab:s,className:i}=e,o=(0,a.useRef)(null);return(0,l.jsx)("ul",{ref:o,className:"flex md:justify-center justify-start mt-4 lg:mt-0 pl-6 border-solid border-b border-arta-sand-200 text-arta-sand-200 ".concat(i),children:t.map((e,t)=>{let a=e.value===r;return(0,l.jsx)("li",{onClick:()=>s(e.value,t),children:(0,l.jsx)("button",{className:n()("pb-2 transition-all md:text-xl text-lg whitespace-pre mr-8 lg:mr-16",a&&"text-arta-sand-100  border-solid border-b-2 border-arta-sand-100"),children:e.label})},t)})})}},2590:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return h},default:function(){return p}});var l=r(5893);r(3454);let a=e=>e.toLowerCase().replace(/[- ]+/g,"-").replace(/[^\w-]+/g,"");var s=r(2761),n=r(1664),i=r.n(n),o=r(7188),c=r(3709),d=r(199),u=r(7687),m=r(3339);let g=e=>{let{cms:t,blog:r}=e,{t:n}=(0,u.$G)("common");return(0,l.jsx)(s.b,{cms:t,seo:{title:"".concat(r.title," | Arta TechFin"),description:n("page_description.arta_blog"),keywords:n("page_keywords.arta_blog")},gaType:"others",gaObj:{event_name:"Arta_Blog_Content",content:{Content:a(r.slug)}},children:(0,l.jsxs)("div",{className:"arta-container mx-auto mt-8",children:[(0,l.jsxs)(i(),{className:"flex cursor-pointer items-center underline ".concat(o.Y.body_regular_verah),href:c.O.mediaBlog,children:[(0,l.jsx)(d.D6,{fill:"#593725",className:"mr-2 h-4"}),n("media.back_blog")]}),(0,l.jsxs)("div",{className:"blog-content mt-4 bg-white p-6 shadow-blogPost md:p-12",children:[(0,l.jsx)("p",{className:"text-xs text-arta-indigo-100",children:(0,m.v)(new Date(r.date))}),(0,l.jsx)("h2",{className:"mt-2 ".concat(o.Y.h3_style2," text-arta-secondary"),children:r.title}),(0,l.jsx)("div",{className:"mt-6 ".concat(o.Y.body_regular_verah," text-black"),dangerouslySetInnerHTML:{__html:r.text}})]})]})})};var h=!0,p=g},3339:function(e,t,r){"use strict";r.d(t,{v:function(){return s}});var l=r(2167),a=r(1163);function s(e){let{locale:t}=(0,a.useRouter)();return"en"===t?(0,l.Z)(e,"MMM dd yyyy").toUpperCase():(0,l.Z)(e,"yyyy")+"年"+(0,l.Z)(e,"MM")+"月"+(0,l.Z)(e,"dd")+"日"}}},function(e){e.O(0,[802,95,546,167,211,774,888,179],function(){return e(e.s=9586)}),_N_E=e.O()}]);