"use strict";(self.webpackChunkhospital_management_system=self.webpackChunkhospital_management_system||[]).push([[7069,3481,4123],{3071:(e,l,i)=>{i.d(l,{Z:()=>p});var a=i(7689),s=(i(8329),i(4420)),n=i(7761),d=i(2791),o=i(4294),t=i(5289),r=i(7123),c=i(9157),u=i(1691),m=i(5661),v=i(184);function p(e){let{Style:l}=e;const[i,p]=d.useState(!1),x=()=>{p(!1)},f=(0,s.I0)(),h=(0,a.s0)();return(0,v.jsxs)(d.Fragment,{children:[(0,v.jsx)("button",{className:l,onClick:()=>{p(!0)},children:"Logout"}),(0,v.jsxs)(t.Z,{open:i,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,v.jsx)(m.Z,{id:"alert-dialog-title",children:"LOGOUT"}),(0,v.jsx)(c.Z,{className:"bg-white w-[400px]",children:(0,v.jsx)(u.Z,{id:"alert-dialog-description",children:"Are you sure want to logout?"})}),(0,v.jsxs)(r.Z,{children:[(0,v.jsx)(o.Z,{onClick:x,children:"Disagree"}),(0,v.jsx)(o.Z,{onClick:()=>{f((0,n.bF)(null)),f((0,n.DZ)(null)),f((0,n.CC)(null)),localStorage.removeItem("AdminToken"),x(),h("/")},autoFocus:!0,children:"Agree"})]})]})]})}},2370:(e,l,i)=>{i.d(l,{Z:()=>d});i(2791);var a=i(3543),s=i(9658),n=i(184);function d(e){let{open:l,setOpen:i,severity:d,message:o}=e;const t=(e,l)=>{"clickaway"!==l&&i(!1)};return(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{open:l,autoHideDuration:6e3,onClose:t,children:(0,n.jsx)(s.Z,{onClose:t,severity:d,variant:"filled",sx:{width:"100%"},children:o})})})}},3481:(e,l,i)=>{i.r(l),i.d(l,{default:()=>p});var a=i(2791),s=i(6949),n=i(7689),d=i(7899),o=i(9108),t=i(2202),r=i(4316),c=i(2942),u=i(4330),m=i(2187),v=i(184);function p(e){let{activePage:l}=e;const i=(0,n.s0)(),[p,x]=(0,a.useState)(l),f=[{icon:(0,v.jsx)(o.sfH,{}),name:d.Z.superadmin.internalPages.dashboard},{icon:(0,v.jsx)(t.Xws,{}),name:d.Z.superadmin.internalPages.authenticatedUsers},{icon:(0,v.jsx)(t.Gi7,{}),name:d.Z.superadmin.internalPages.billing},{icon:(0,v.jsx)(r.GWT,{}),name:d.Z.superadmin.internalPages.patients},{icon:(0,v.jsx)(r.JKj,{}),name:d.Z.superadmin.internalPages.appointments},{icon:(0,v.jsx)(r.JnD,{}),name:d.Z.superadmin.internalPages.doctors},{icon:(0,v.jsx)(t.mGS,{}),name:d.Z.superadmin.internalPages.opd},{icon:(0,v.jsx)(t.mGS,{}),name:d.Z.superadmin.internalPages.opdPatients},{icon:(0,v.jsx)(t.mGS,{}),name:d.Z.superadmin.internalPages.ipd},{icon:(0,v.jsx)(t.mGS,{}),name:d.Z.superadmin.internalPages.ipdPatients},{icon:(0,v.jsx)(c.WhK,{}),name:d.Z.superadmin.internalPages.messages},{icon:(0,v.jsx)(t.m17,{}),name:d.Z.superadmin.internalPages.educationContent},{icon:(0,v.jsx)(u.uIr,{}),name:d.Z.superadmin.internalPages.medicineInventory},{icon:(0,v.jsx)(m.CVU,{}),name:d.Z.superadmin.internalPages.settings}],h=null===f||void 0===f?void 0:f.map(((e,l)=>{var a,s,n;return(0,v.jsxs)("div",{onClick:()=>{var l,a,s;x("".concat(null===d.Z||void 0===d.Z||null===(l=d.Z.superadmin)||void 0===l?void 0:l.category,"/").concat(null===e||void 0===e?void 0:e.name));const n=null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.split(" ").join("");i("".concat(null===d.Z||void 0===d.Z||null===(s=d.Z.superadmin)||void 0===s?void 0:s.category,"/").concat(n))},className:p==="".concat(null===d.Z||void 0===d.Z||null===(a=d.Z.superadmin)||void 0===a?void 0:a.category,"/").concat(null===e||void 0===e?void 0:e.name)?"flex flex-row items-center justify-start gap-[1rem] py-[10px] px-[1rem] border-l-[6px] border-l-solid border-[#3497F9] bg-[#E7F3FE] w-full cursor-pointer":"flex flex-row items-center justify-start border-l-[6px] border-l-solid border-transparent gap-[1rem] py-[10px] px-[1rem] w-full cursor-pointer",children:[(0,v.jsx)("div",{className:p==="".concat(null===d.Z||void 0===d.Z||null===(s=d.Z.superadmin)||void 0===s?void 0:s.category,"/").concat(null===e||void 0===e?void 0:e.name)?"text-[30px] text-[#3497F9]":"text-[30px] text-[#7F8F98]",children:null===e||void 0===e?void 0:e.icon}),(0,v.jsx)("p",{className:p==="".concat(null===d.Z||void 0===d.Z||null===(n=d.Z.superadmin)||void 0===n?void 0:n.category,"/").concat(null===e||void 0===e?void 0:e.name)?"text-[#3497F9] font-[400]":"text-[#7F8F98] font-[400]",children:null===e||void 0===e?void 0:e.name})]},"".concat(l,"-").concat(null===e||void 0===e?void 0:e.name))}));return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)(v.Fragment,{children:"..."}),children:(0,v.jsxs)("div",{className:"SideNav flex flex-col items-center",children:[(0,v.jsx)("img",{src:s,alt:"logoImage",className:"w-[200px] h-auto py-[2rem]"}),(0,v.jsx)("div",{className:"sideNavLinks flex flex-col gap-[1rem] w-full items-start overflow-y-scroll",children:h})]})})})}},4123:(e,l,i)=>{i.r(l),i.d(l,{default:()=>f});var a=i(2791),s=i(2202),n=i(657),d=i(4330),o=i(3071),t=i(4420),r=i(697),c=i(890),u=i(5711),m=i(2370),v=i(9245),p=i(7761),x=i(184);function f(){const e=(0,t.I0)(),{Admins:l,adminLoggedIn:i,adminLoggedInData:f,adminRole:h}=(0,t.v9)((e=>e.AdminState)),[g,j]=(0,v.Ie)(),[b,w]=(0,v.eM)();console.log(j);const[Z,N]=(0,a.useState)(""),[S,y]=(0,a.useState)(""),[F,P]=(0,a.useState)(""),[C,D]=(0,a.useState)(""),[k,E]=(0,a.useState)(!1),[I,L]=a.useState(!1),O=()=>L(!1),[B,G]=a.useState(!1),U=()=>G(!1),A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"60%",bgcolor:"background.paper",borderRadius:"8px",border:"none",outline:"none",boxShadow:24,p:4},[R,T]=a.useState(!1),[_,H]=a.useState(""),M=()=>{T(!0)},[q,K]=a.useState(!1),[Y,z]=a.useState(""),J=()=>{K(!0)};(0,a.useEffect)((()=>{var l;if(w.isSuccess)H(null===w||void 0===w||null===(l=w.data)||void 0===l?void 0:l.message),M(),O(),e((0,p.TY)(Math.random()));else if(w.isError){var i;z(null===w||void 0===w||null===(i=w.error)||void 0===i?void 0:i.data),J()}}),[w.isSuccess,w.isError]);(0,a.useEffect)((()=>{var l;if(j.isSuccess)H(null===j||void 0===j||null===(l=j.data)||void 0===l?void 0:l.message),M(),U(),e((0,p.TY)(Math.random()));else if(j.isError){var i;z(null===j||void 0===j||null===(i=j.error)||void 0===i?void 0:i.data),J()}}),[j.isSuccess,j.isError]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(a.Suspense,{fallback:(0,x.jsx)(x.Fragment,{children:"..."}),children:[(0,x.jsxs)("div",{className:"flex flex-row w-full items-center border-b-[1px] border-b-solid relative",children:[(0,x.jsx)("div",{className:"flex p-[1.5rem] w-[70%]",children:(0,x.jsxs)("div",{className:"px-[10px] w-[90%] bg-[#E7EFFF] flex flex-row items-center gap-[10px] rounded-[8px]",children:[(0,x.jsx)(s.U41,{className:"text-[#636D73]"}),(0,x.jsx)("input",{className:"w-full outline-none py-[10px] bg-transparent",placeholder:"Search"})]})}),(0,x.jsxs)("div",{className:"w-[30%] flex gap-[1rem] items-center pr-[1rem]",children:[(0,x.jsxs)("div",{className:"flex relative cursor-pointer",children:[(0,x.jsx)("div",{className:"p-[6px] rounded-md shadow-md w-fit h-fit",children:(0,x.jsx)(s.Ivv,{className:"text-[25px] text-[#2662F0]"})}),(0,x.jsx)(n.Zh5,{className:"text-[#FDCA40] absolute right-0"})]}),(0,x.jsx)(s.BKo,{className:"text-[35px] bg-[#3497F9] text-white p-[4px] rounded-full"}),(0,x.jsxs)("div",{className:"flex flex-col items-start text-[#414D55] cursor-pointer select-none",onClick:()=>E(!k),children:[(0,x.jsx)("p",{className:"font-[500] text-[14px]",children:null===f||void 0===f?void 0:f.adminName}),(0,x.jsx)("p",{children:null===f||void 0===f?void 0:f.adminRole})]}),k?(0,x.jsx)(d.Vmf,{className:"cursor-pointer",onClick:()=>E(!k)}):(0,x.jsx)(d.OId,{className:"cursor-pointer",onClick:()=>E(!k)}),k&&(0,x.jsxs)("div",{className:"absolute px-[3rem] top-[5rem] flex flex-col items-center z-10 fade-in",children:[(0,x.jsx)("div",{className:"border-t-[20px] border-t-transparent w-fit border-b-[20px] border-b-[#3497F9] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent"}),(0,x.jsxs)("div",{className:"bg-[#3497F9] px-[3rem] shadow-md py-[1rem] rounded-md flex flex-col items-start gap-[10px] w-fit",children:[(0,x.jsx)("button",{onClick:()=>{N(null===f||void 0===f?void 0:f.adminName),y(null===f||void 0===f?void 0:f.adminEmail),L(!0)},className:"bg-white text-[14px] text-black p-[4px] rounded-md w-full",children:"My Profile"}),(0,x.jsx)("button",{onClick:()=>G(!0),className:"bg-white text-[14px] text-black p-[4px] rounded-md w-full",children:"Change Password"}),(0,x.jsx)(o.Z,{Style:"bg-[#202020] text-[14px] text-white p-[4px] rounded-md w-full"})]})]})]})]}),(0,x.jsx)(u.Z,{open:I,onClose:O,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,x.jsxs)(r.Z,{sx:A,children:[(0,x.jsx)(c.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:(0,x.jsx)("h1",{className:"headingBottomUnderline w-fit",children:"Edit Profile"})}),(0,x.jsx)(c.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,x.jsxs)("form",{className:"flex flex-col gap-[1rem]",onSubmit:e=>{e.preventDefault(),b({id:null===f||void 0===f?void 0:f.adminId,data:{adminName:Z,adminPassword:"",adminRole:null===f||void 0===f?void 0:f.adminRole}})},children:[(0,x.jsxs)("div",{className:"grid grid-cols-2 gap-[1rem]",children:[(0,x.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,x.jsx)("label",{children:"Full Name"}),(0,x.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",required:!0,type:"text",placeholder:"Enter full name",value:Z,onChange:e=>N(e.target.value)})]}),(0,x.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,x.jsx)("label",{children:"Email"}),(0,x.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",disabled:!0,type:"email",placeholder:"Enter email",value:S,onChange:e=>y(e.target.value)})]})]}),(0,x.jsx)("button",{type:"submit",className:"buttonFilled w-fit",children:"Submit"})]})})]})}),(0,x.jsx)(u.Z,{open:B,onClose:U,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,x.jsxs)(r.Z,{sx:A,children:[(0,x.jsx)(c.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:(0,x.jsx)("h1",{className:"headingBottomUnderline w-fit",children:"Change Password"})}),(0,x.jsx)(c.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,x.jsxs)("form",{className:"flex flex-col gap-[1rem]",onSubmit:e=>{e.preventDefault(),g({id:null===f||void 0===f?void 0:f.adminId,data:{adminOldPassword:F,adminPassword:C}})},children:[(0,x.jsxs)("div",{className:"grid grid-cols-2 gap-[1rem]",children:[(0,x.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,x.jsx)("label",{children:"Old Password"}),(0,x.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",type:"password",required:!0,placeholder:"Enter old password",autoComplete:"new-password",value:F,onChange:e=>P(e.target.value)})]}),(0,x.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,x.jsx)("label",{children:"New Password"}),(0,x.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",type:"password",required:!0,placeholder:"Enter new password",autoComplete:"new-password",value:C,onChange:e=>D(e.target.value)})]})]}),(0,x.jsx)("button",{type:"submit",className:"buttonFilled w-fit",children:"Submit"})]})})]})}),(0,x.jsx)(m.Z,{open:R,setOpen:T,severity:"success",message:_}),(0,x.jsx)(m.Z,{open:q,setOpen:K,severity:"warning",message:Y})]})})}},7069:(e,l,i)=>{i.r(l),i.d(l,{default:()=>g});var a=i(2791),s=i(3481),n=i(4123),d=i(7899),o=i(697),t=i(7482),r=i(4420),c=i(5216),u=i(8374),m=i(7127),v=i(2437),p=i(865),x=i(4795),f=i(184);const h=(0,a.lazy)((()=>Promise.all([i.e(5340),i.e(8720),i.e(1909),i.e(7601),i.e(9261),i.e(9318),i.e(8459)]).then(i.bind(i,8459))));function g(){const e=(0,r.I0)(),l=(0,c.tu)(),i=(0,m.Il)(),g=(0,m.YE)(),j=(0,p.o2)(),{billings:b,createBilling:w,updateBilling:Z,deleteBilling:N}=(0,r.v9)((e=>e.BillingState)),{doctors:S,doctorProfessionalDetails:y,createDoctor:F,updateDoctor:P,deleteDoctor:C}=(0,r.v9)((e=>e.DoctorState)),{patients:D,patientCreate:k,patientUpdate:E,patientDelete:I}=(0,r.v9)((e=>e.PatientState));return a.useEffect((()=>{if((async()=>{const a=await l.refetch();if(a.isSuccess){var s,n;const l=null===a||void 0===a||null===(s=a.data)||void 0===s?void 0:s.map(null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.pop,[...null===a||void 0===a?void 0:a.data]),i=null===l||void 0===l?void 0:l.filter((e=>!1===e.isDeleted&&e));e((0,u.QS)(i))}const d=await i.refetch();if(d.isSuccess){var o,t;const l=null===d||void 0===d||null===(o=d.data)||void 0===o?void 0:o.map(null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.pop,[...null===d||void 0===d?void 0:d.data]),i=null===l||void 0===l?void 0:l.filter((e=>!1===e.isDeleted&&e));e((0,v.lm)(i))}const r=await g.refetch();if(r.isSuccess){var c,m;const l=null===r||void 0===r||null===(c=r.data)||void 0===c?void 0:c.map(null===r||void 0===r||null===(m=r.data)||void 0===m?void 0:m.pop,[...null===r||void 0===r?void 0:r.data]),i=null===l||void 0===l?void 0:l.filter((e=>!1===e.isDeleted&&e));e((0,v.b6)(i))}const p=await j.refetch();if(p.isSuccess){var f,h;const l=null===p||void 0===p||null===(f=p.data)||void 0===f?void 0:f.map(null===p||void 0===p||null===(h=p.data)||void 0===h?void 0:h.pop,[...null===p||void 0===p?void 0:p.data]),i=null===l||void 0===l?void 0:l.filter((e=>!1===e.isDeleted&&e));e((0,x.sH)(i))}})(),l.isSuccess){var a,s;const i=null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.map(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.pop,[...null===l||void 0===l?void 0:l.data]),n=null===i||void 0===i?void 0:i.filter((e=>!1===e.isDeleted&&e));e((0,u.QS)(n))}if(i.isSuccess){var n,d;const l=null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.map(null===i||void 0===i||null===(d=i.data)||void 0===d?void 0:d.pop,[...null===i||void 0===i?void 0:i.data]),a=null===l||void 0===l?void 0:l.filter((e=>!1===e.isDeleted&&e));e((0,v.lm)(a))}if(g.isSuccess){var o,t;const l=null===g||void 0===g||null===(o=g.data)||void 0===o?void 0:o.map(null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.pop,[...null===g||void 0===g?void 0:g.data]),i=null===l||void 0===l?void 0:l.filter((e=>!1===e.isDeleted&&e));e((0,v.b6)(i))}if(j.isSuccess){var r,c;const l=null===j||void 0===j||null===(r=j.data)||void 0===r?void 0:r.map(null===j||void 0===j||null===(c=j.data)||void 0===c?void 0:c.pop,[...null===j||void 0===j?void 0:j.data]),i=null===l||void 0===l?void 0:l.filter((e=>!1===e.isDeleted&&e));e((0,x.sH)(i))}}),[w,Z,N,l.isSuccess,F,P,C,i.isSuccess,g.isSuccess,k,E,I,j.isSuccess]),(0,f.jsx)(f.Fragment,{children:l.isLoading&&g.isLoading&&j.isLoading&&i.isLoading?(0,f.jsx)(o.Z,{sx:{width:"100%"},children:(0,f.jsx)(t.Z,{})}):(0,f.jsxs)("div",{className:"superadmin-main flex flex-row w-full h-screen",children:[(0,f.jsx)("div",{className:"w-[20%] shadow-lg",children:(0,f.jsx)(s.default,{activePage:"".concat(d.Z.superadmin.category,"/").concat(d.Z.superadmin.internalPages.billing)})}),(0,f.jsxs)("div",{className:"superadmin-main-right flex flex-col w-[80%]",children:[(0,f.jsx)(n.default,{}),(0,f.jsx)("div",{className:"superadmin-main-right_dashboard w-full overflow-y-scroll",children:(0,f.jsx)(h,{})})]})]})})}},6949:(e,l,i)=>{e.exports=i.p+"static/media/logo.e6018157ad383ab41871.png"}}]);
//# sourceMappingURL=7069.c9a0ec80.chunk.js.map