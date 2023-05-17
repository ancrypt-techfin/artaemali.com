(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{786:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/job/[id]",function(){return s(9224)}])},6167:function(e,a,s){"use strict";s.d(a,{B:function(){return l}});var r=s(5893);let l=e=>{let{error:a}=e;return a?a instanceof Error?(0,r.jsx)("div",{className:"my-8 text-[1rem]",children:a.message}):"string"==typeof a?(0,r.jsx)("div",{className:"my-8 text-[1rem]",children:a}):(console.error("Unknown error type",a),(0,r.jsx)("div",{children:"Unknown error"})):null}},8124:function(e,a,s){"use strict";s.d(a,{U:function(){return n}});var r=s(5893),l=s(7188);let n=e=>(0,r.jsxs)("label",{className:"flex flex-col text-arta-sand-100"+(e.className?" ".concat(e.className):""),children:[(0,r.jsx)("span",{className:"mb-1 font-bold tracking-widest text-arta-sand-100 ".concat(l.Y.small_text),children:e.label}),e.children,e.error&&(0,r.jsx)("p",{role:"alert",className:"mt-1 text-xs text-red-400",children:e.error})]})},3799:function(e,a,s){"use strict";s.d(a,{o:function(){return t}});var r=s(5893),l=s(7294),n=s(7188);let t=(0,l.forwardRef)((e,a)=>(0,r.jsx)("input",{ref:a,className:"".concat(n.Y.body_regular," border-b border-arta-indigo-100 py-3 text-arta-sand-100 focus:outline-none"),...e}));t.displayName="InputText"},8816:function(e,a,s){"use strict";s.d(a,{z:function(){return t}});var r=s(5893),l=s(7294),n=s(7188);let t=(0,l.forwardRef)((e,a)=>(0,r.jsx)("textarea",{ref:a,className:"".concat(n.Y.body_regular," resize-none border border-arta-indigo-100 py-2 px-2 text-arta-sand-100 focus:outline-none"),rows:4,...e}));t.displayName="InputTextArea"},9224:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSP:function(){return D},default:function(){return O}});var r=s(5893),l=s(1664),n=s.n(l),t=s(5331),i=s(8462),o=s(887),c=s(7188),d=s(7687);let m=()=>{let{t:e}=(0,d.$G)("common");return(0,r.jsxs)("div",{className:"group/bg relative overflow-hidden",children:[(0,r.jsxs)("div",{className:"easeInOutSine absolute h-full w-full overflow-hidden duration-300",children:[(0,r.jsx)("img",{src:"/images/asset-management/top-bg-introduction.png",alt:"",className:"hidden h-full w-full object-cover md:block"}),(0,r.jsx)("img",{src:"/images/asset-management/mobile-top-bg-introduction.jpg",alt:"",className:"h-full w-full object-cover md:hidden"})]}),(0,r.jsxs)("div",{className:"arta-container banner-text-shadow relative z-1 mx-auto flex h-[480px] flex-col justify-end py-12 text-white",children:[(0,r.jsx)("p",{className:c.Y.body_regular_verah,children:e("page_title.join_us")}),(0,r.jsx)("h1",{className:"".concat(c.Y.h1_style2," mt-1"),children:e("join_us.job_openings")})]})]})};var u=s(7294),x=s(199),p=s(8124),j=s(3799),h=s(8816);let f=(0,u.forwardRef)((e,a)=>{let{t:s}=(0,d.$G)("common");return(0,r.jsx)("div",{className:"relative mt-2 flex h-[150px] w-full items-center justify-center rounded-lg bg-[#F3F2F4]",children:(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsx)(x.gq,{}),(0,r.jsx)("p",{className:"text-sm text-black",children:(0,r.jsx)("span",{className:"font-bold text-arta-secondary underline",children:s("join_us.upload_box")})}),(0,r.jsx)("p",{className:"mt-4 text-xs",children:s("join_us.upload_limitation")})]})})});f.displayName="InputFile";var v=s(5909),g=s(7536),b=s(8228),_=s(4184),N=s.n(_);let y=e=>{let{children:a,className:s,onDrop:l}=e,[n,t]=(0,u.useState)(!1);return(0,r.jsx)("div",{className:N()(s,n&&"border-2 border-blue-600"),onDrop(e){e.preventDefault(),t(!1);let a=[];if(e.dataTransfer.items){let s=Array.from(e.dataTransfer.items);s.forEach((e,s)=>{if("file"===e.kind){let r=e.getAsFile();r&&a.push(r)}})}else a.push(...Array.from(e.dataTransfer.files));l(a)},onDragLeave(e){e.preventDefault(),t(!1)},onDragOver(e){e.preventDefault(),t(!0)},children:a})},w=(e,a)=>{let s=document.createElement("input");s.type="file",s.multiple=!0,s.accept=(null==a?void 0:a.accept)||"",s.onchange=a=>{let r=Array.from(s.files||[]);e(r)},s.click()},k=e=>new Promise((a,s)=>{let r=new FileReader;r.readAsDataURL(e),r.onload=()=>a(r.result),r.onerror=e=>s(e)});var S=s(6167),U=s(5935);let T=e=>{let{handleSubmit:a,formState:{errors:s},...r}=(0,g.cI)({resolver(a){let s={};return a.firstName||(s.firstName={message:e("warning.required")}),a.lastName||(s.lastName={message:e("warning.required")}),a.emailAddress?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(a.emailAddress)||(s.emailAddress={message:e("warning.invalid_format")}):s.emailAddress={message:e("warning.required")},a.contactNumber||(s.contactNumber={message:e("warning.required")}),a.lastSalary?/^\d+$/.test(a.lastSalary)||(s.lastSalary={message:e("warning.invalid_format")}):s.lastSalary={message:e("warning.required")},a.expectedSalary?/^\d+$/.test(a.expectedSalary)||(s.expectedSalary={message:e("warning.invalid_format")}):s.expectedSalary={message:e("warning.required")},a.cvUpload||(s.cvUpload={message:e("warning.required")}),a.briefIntroduction.length>500&&(s.briefIntroduction={message:e("warning.word_count_500")}),a.acceptedTerms||(s.acceptedTerms={message:e("warning.required")}),{values:a,errors:s}}}),l=(0,b.D)({async mutationFn(e){let a=await fetch("/api/enquiry",{method:"POST",body:JSON.stringify({...e,enquiryType:"job_apply"})});if(!a.ok)throw Error("Network response was not ok: ".concat(a.statusText,"  "))}}),n=a(async e=>l.mutate(e));return{onSubmit:n,submitStatus:l,...r,errors:s}},A=e=>{var a,s,l,n,t,i,o,m,x,g;let{job:b,setShowSuccess:_}=e,{t:N}=(0,d.$G)("common"),[A,Y]=(0,u.useState)(""),{onSubmit:F,submitStatus:P,errors:q,register:D,watch:O,setValue:E,trigger:I}=T(N);P.isSuccess&&_(!0);let C=O("cvUploadName"),Z=async e=>{if(e.length>0){Y("");let a=e[0];if(!a.type.includes("pdf")&&!a.type.includes("word")){console.error("cvUpload","Please upload a PDF or Word document");return}if(a.size>512e4){Y(N("warning.file_size_5mb"));return}let s=await k(a);E("cvUpload",s),I("cvUpload"),E("cvUploadName",a.name),I("cvUploadName")}else E("cvUpload",""),I("cvUpload"),E("cvUploadName",""),I("cvUploadName")};return(0,r.jsx)("form",{onSubmit:F,children:(0,r.jsxs)("fieldset",{disabled:P.isLoading,children:[(0,r.jsx)("div",{className:"hidden",children:(0,r.jsx)(j.o,{...D("jobTitle"),defaultValue:b.job_title})}),(0,r.jsx)("h2",{className:"".concat(c.Y.h2_style2," mb-8"),children:N("join_us.application_form")}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6",children:[(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.first_name"),"*"),error:null===(a=q.firstName)||void 0===a?void 0:a.message,children:(0,r.jsx)(j.o,{...D("firstName"),placeholder:"Tai Man"})})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.last_name"),"*"),error:null===(s=q.lastName)||void 0===s?void 0:s.message,children:(0,r.jsx)(j.o,{...D("lastName"),placeholder:"Chan"})})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.email_address"),"*"),error:null===(l=q.emailAddress)||void 0===l?void 0:l.message,children:(0,r.jsx)(j.o,{...D("emailAddress"),placeholder:"abc@abc.com"})})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.contact_number"),"*"),error:null===(n=q.contactNumber)||void 0===n?void 0:n.message,children:(0,r.jsx)(j.o,{...D("contactNumber")})})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.linkedin")),error:null===(t=q.linkedin)||void 0===t?void 0:t.message,children:(0,r.jsx)(j.o,{...D("linkedin")})})}),(0,r.jsx)("div",{className:"col-span-1"}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.last_salary"),"*"),error:null===(i=q.lastSalary)||void 0===i?void 0:i.message,children:(0,r.jsx)(j.o,{...D("lastSalary"),placeholder:N("join_us.dollar")})})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.expected_salary"),"*"),error:null===(o=q.expectedSalary)||void 0===o?void 0:o.message,children:(0,r.jsx)(j.o,{...D("expectedSalary"),placeholder:N("join_us.dollar")})})}),(0,r.jsx)(y,{className:"col-span-full",onDrop:Z,children:C?(0,r.jsx)("button",{className:"w-full text-left",type:"button",onClick:()=>w(Z,{accept:".doc,.pdf"}),children:(0,r.jsx)("div",{className:"relative mt-2 flex h-[150px] w-full flex-col items-center justify-center rounded-lg bg-[#F3F2F4]",children:(0,r.jsx)("p",{className:"break-all px-4 text-lg",children:C})})}):(0,r.jsx)("button",{className:"w-full text-left",type:"button",onClick:()=>w(Z,{accept:".doc,.pdf"}),children:(0,r.jsx)(p.U,{label:"".concat(N("join_us.cv_upload"),"*"),error:null===(m=q.cvUpload)||void 0===m?void 0:m.message,children:(0,r.jsx)(f,{})})})}),A&&(0,r.jsx)("div",{className:"col-span-full -mt-8",children:(0,r.jsx)("p",{className:"".concat(c.Y.caption," text-red-400 my-4"),children:A})}),(0,r.jsx)("div",{className:"col-span-full",children:(0,r.jsxs)(p.U,{label:"".concat(N("join_us.brief_introduction")),error:null===(x=q.briefIntroduction)||void 0===x?void 0:x.message,children:[(0,r.jsx)(h.z,{...D("briefIntroduction")}),(0,r.jsx)("span",{className:"".concat(c.Y.caption," mt-2 font-bold tracking-widest text-arta-sand-100 "),children:N("join_us.introduction_limitation")})]})}),(0,r.jsx)("div",{className:"col-span-full",children:(0,r.jsx)(p.U,{label:"",error:null===(g=q.acceptedTerms)||void 0===g?void 0:g.message,children:(0,r.jsxs)("label",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"checkbox",...D("acceptedTerms")}),(0,r.jsx)("p",{className:"".concat(c.Y.body_regular," select-none w-[90%] sm:w-auto ml-5"),children:(0,U.ZP)(N("join_us.accept_privacy_policy"))})]})})}),(0,r.jsxs)("div",{className:"col-span-full flex flex-col justify-start gap-2",children:[P.error?(0,r.jsx)(S.B,{error:P.error}):null,(0,r.jsxs)(v.V,{extraProps:{type:"submit"},className:"w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px] ".concat(P.isLoading&&"pointer-events-none"),children:[N("join_us.submit"),P.isLoading&&(0,r.jsx)("img",{className:"absolute right-2 top-[7px] w-6 h-6",src:"/images/loading.svg"})]})]})]})]})})};var Y=s(3709),F=s(1163);let P=e=>{var a;let{k:s}=e,{t:l}=(0,d.$G)("common"),{locale:n}=(0,F.useRouter)(),[t,i]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{if(t){var e;null===(e=document.querySelector("#form-div"))||void 0===e||e.scrollIntoView({behavior:"smooth"})}},[t]),(0,r.jsxs)("div",{className:"mx-auto bg-white shadow-blogPost",children:[!t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"border-b-2 p-8 ",children:[(0,r.jsx)("h2",{className:"text-[2rem] text-arta-secondary",children:s.job_title}),(0,r.jsx)("p",{className:"".concat(c.Y.body_regular_verah),children:s.department}),(0,r.jsxs)("div",{className:"".concat(c.Y.caption," mt-2 flex items-center"),children:[(0,r.jsxs)("div",{className:"flex items-center border-r pr-6",children:[(0,r.jsx)(x.lO,{}),(0,r.jsx)("div",{className:"ml-1",children:s.work_location})]}),(0,r.jsxs)("div",{className:"pl-6",children:[l("join_us.seniority"),": ",(a=s.seniority,({Junior_en:"Junior Level",Junior_tc:"初級",Junior_sc:"初级",Middle_en:"Middle Level",Middle_tc:"中級",Middle_sc:"中级",Senior_en:"Senior Level",Senior_tc:"高級",Senior_sc:"高级"})["".concat(a,"_").concat(n)]||"--")]})]})]}),(0,r.jsxs)("div",{className:"".concat(c.Y.body_regular," job-description border-b-2 px-8 py-8"),children:[(0,U.ZP)(s.job_description),(0,r.jsx)("p",{className:"text-arta-secondary",children:(0,U.ZP)(l("join_us.apply_statement"))})]}),(0,r.jsx)("div",{className:"p-8 lg:p-12",children:(0,r.jsx)("div",{className:"max-w-[756px]",children:(0,r.jsx)(A,{job:s,setShowSuccess:i})})})]}),t&&(0,r.jsxs)("div",{className:"p-12",children:[(0,r.jsx)("p",{className:"".concat(c.Y.body_regular_verah," mb-4"),children:l("join_us.thanks")}),(0,r.jsx)("p",{className:"".concat(c.Y.body_regular_verah),children:(0,U.ZP)(l("join_us.thanks_message"))}),(0,r.jsx)(v.V,{as:"a",href:"".concat(Y.O.joinUs,"#job-opening"),className:"mt-4 border-arta-sand-100 text-arta-sand-100",children:l("join_us.back")})]})]})},q=e=>{let{k:a}=e,{t:s}=(0,d.$G)("common");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{title:"".concat(a.job_title," | ARTA TechFin"),description:s("page_description.join_us"),keywords:s("page_keywords.join_us"),gaType:"others",gaObj:{event_name:"Job_Openings_Content",content:{Content:a.job_id}}}),(0,r.jsx)(t.Z,{textColor:"white"}),(0,r.jsxs)("main",{className:"flex flex-col bg-arta-page-background text-arta-sand-100",children:[(0,r.jsx)(m,{}),(0,r.jsx)("div",{id:"form-div",className:"bg-arta-eggshell-100 pt-12 pb-[150px]",children:(0,r.jsxs)("div",{className:"arta-container mx-auto",children:[(0,r.jsxs)(n(),{className:"mb-4 flex cursor-pointer items-center underline ".concat(c.Y.body_regular_verah),href:"".concat(Y.O.joinUs,"#job-opening"),children:[(0,r.jsx)(x.D6,{fill:"#593725",className:"mr-2 h-4"}),s("join_us.back")]}),(0,r.jsx)(P,{k:a})]})})]}),(0,r.jsx)(i.Z,{textColor:"brown"})]})};var D=!0,O=q}},function(e){e.O(0,[802,95,935,850,211,774,888,179],function(){return e(e.s=786)}),_N_E=e.O()}]);