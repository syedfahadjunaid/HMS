"use strict";(self.webpackChunkhospital_management_system=self.webpackChunkhospital_management_system||[]).push([[1925,3481,4123],{3071:(e,a,l)=>{l.d(a,{Z:()=>p});var s=l(7689),n=(l(8329),l(4420)),i=l(7761),t=l(2791),d=l(4294),r=l(5289),o=l(7123),c=l(9157),m=l(1691),x=l(5661),u=l(184);function p(e){let{Style:a}=e;const[l,p]=t.useState(!1),v=()=>{p(!1)},h=(0,n.I0)(),g=(0,s.s0)();return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)("button",{className:a,onClick:()=>{p(!0)},children:"Logout"}),(0,u.jsxs)(r.Z,{open:l,onClose:v,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,u.jsx)(x.Z,{id:"alert-dialog-title",children:"LOGOUT"}),(0,u.jsx)(c.Z,{className:"bg-white w-[400px]",children:(0,u.jsx)(m.Z,{id:"alert-dialog-description",children:"Are you sure want to logout?"})}),(0,u.jsxs)(o.Z,{children:[(0,u.jsx)(d.Z,{onClick:v,children:"Disagree"}),(0,u.jsx)(d.Z,{onClick:()=>{h((0,i.bF)(null)),h((0,i.DZ)(null)),h((0,i.CC)(null)),localStorage.removeItem("AdminToken"),v(),g("/")},autoFocus:!0,children:"Agree"})]})]})]})}},2370:(e,a,l)=>{l.d(a,{Z:()=>t});l(2791);var s=l(3543),n=l(9658),i=l(184);function t(e){let{open:a,setOpen:l,severity:t,message:d}=e;const r=(e,a)=>{"clickaway"!==a&&l(!1)};return(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{open:a,autoHideDuration:6e3,onClose:r,children:(0,i.jsx)(n.Z,{onClose:r,severity:t,variant:"filled",sx:{width:"100%"},children:d})})})}},3481:(e,a,l)=>{l.r(a),l.d(a,{default:()=>p});var s=l(2791),n=l(6949),i=l(7689),t=l(7899),d=l(9108),r=l(2202),o=l(4316),c=l(2942),m=l(4330),x=l(2187),u=l(184);function p(e){let{activePage:a}=e;const l=(0,i.s0)(),[p,v]=(0,s.useState)(a),h=[{icon:(0,u.jsx)(d.sfH,{}),name:t.Z.superadmin.internalPages.dashboard},{icon:(0,u.jsx)(r.Xws,{}),name:t.Z.superadmin.internalPages.authenticatedUsers},{icon:(0,u.jsx)(r.Gi7,{}),name:t.Z.superadmin.internalPages.billing},{icon:(0,u.jsx)(o.GWT,{}),name:t.Z.superadmin.internalPages.patients},{icon:(0,u.jsx)(o.JKj,{}),name:t.Z.superadmin.internalPages.appointments},{icon:(0,u.jsx)(o.JnD,{}),name:t.Z.superadmin.internalPages.doctors},{icon:(0,u.jsx)(r.mGS,{}),name:t.Z.superadmin.internalPages.opd},{icon:(0,u.jsx)(r.mGS,{}),name:t.Z.superadmin.internalPages.opdPatients},{icon:(0,u.jsx)(r.mGS,{}),name:t.Z.superadmin.internalPages.ipd},{icon:(0,u.jsx)(r.mGS,{}),name:t.Z.superadmin.internalPages.ipdPatients},{icon:(0,u.jsx)(c.WhK,{}),name:t.Z.superadmin.internalPages.messages},{icon:(0,u.jsx)(r.m17,{}),name:t.Z.superadmin.internalPages.educationContent},{icon:(0,u.jsx)(m.uIr,{}),name:t.Z.superadmin.internalPages.medicineInventory},{icon:(0,u.jsx)(x.CVU,{}),name:t.Z.superadmin.internalPages.settings}],g=null===h||void 0===h?void 0:h.map(((e,a)=>{var s,n,i;return(0,u.jsxs)("div",{onClick:()=>{var a,s,n;v("".concat(null===t.Z||void 0===t.Z||null===(a=t.Z.superadmin)||void 0===a?void 0:a.category,"/").concat(null===e||void 0===e?void 0:e.name));const i=null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.split(" ").join("");l("".concat(null===t.Z||void 0===t.Z||null===(n=t.Z.superadmin)||void 0===n?void 0:n.category,"/").concat(i))},className:p==="".concat(null===t.Z||void 0===t.Z||null===(s=t.Z.superadmin)||void 0===s?void 0:s.category,"/").concat(null===e||void 0===e?void 0:e.name)?"flex flex-row items-center justify-start gap-[1rem] py-[10px] px-[1rem] border-l-[6px] border-l-solid border-[#3497F9] bg-[#E7F3FE] w-full cursor-pointer":"flex flex-row items-center justify-start border-l-[6px] border-l-solid border-transparent gap-[1rem] py-[10px] px-[1rem] w-full cursor-pointer",children:[(0,u.jsx)("div",{className:p==="".concat(null===t.Z||void 0===t.Z||null===(n=t.Z.superadmin)||void 0===n?void 0:n.category,"/").concat(null===e||void 0===e?void 0:e.name)?"text-[30px] text-[#3497F9]":"text-[30px] text-[#7F8F98]",children:null===e||void 0===e?void 0:e.icon}),(0,u.jsx)("p",{className:p==="".concat(null===t.Z||void 0===t.Z||null===(i=t.Z.superadmin)||void 0===i?void 0:i.category,"/").concat(null===e||void 0===e?void 0:e.name)?"text-[#3497F9] font-[400]":"text-[#7F8F98] font-[400]",children:null===e||void 0===e?void 0:e.name})]},"".concat(a,"-").concat(null===e||void 0===e?void 0:e.name))}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)(u.Fragment,{children:"..."}),children:(0,u.jsxs)("div",{className:"SideNav flex flex-col items-center",children:[(0,u.jsx)("img",{src:n,alt:"logoImage",className:"w-[200px] h-auto py-[2rem]"}),(0,u.jsx)("div",{className:"sideNavLinks flex flex-col gap-[1rem] w-full items-start overflow-y-scroll",children:g})]})})})}},4123:(e,a,l)=>{l.r(a),l.d(a,{default:()=>h});var s=l(2791),n=l(2202),i=l(657),t=l(4330),d=l(3071),r=l(4420),o=l(697),c=l(890),m=l(5711),x=l(2370),u=l(9245),p=l(7761),v=l(184);function h(){const e=(0,r.I0)(),{Admins:a,adminLoggedIn:l,adminLoggedInData:h,adminRole:g}=(0,r.v9)((e=>e.AdminState)),[f,j]=(0,u.Ie)(),[b,w]=(0,u.eM)();console.log(j);const[Z,N]=(0,s.useState)(""),[y,F]=(0,s.useState)(""),[S,C]=(0,s.useState)(""),[P,k]=(0,s.useState)(""),[E,I]=(0,s.useState)(!1),[D,O]=s.useState(!1),G=()=>O(!1),[U,A]=s.useState(!1),L=()=>A(!1),R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"60%",bgcolor:"background.paper",borderRadius:"8px",border:"none",outline:"none",boxShadow:24,p:4},[T,_]=s.useState(!1),[H,M]=s.useState(""),q=()=>{_(!0)},[B,K]=s.useState(!1),[z,J]=s.useState(""),V=()=>{K(!0)};(0,s.useEffect)((()=>{var a;if(w.isSuccess)M(null===w||void 0===w||null===(a=w.data)||void 0===a?void 0:a.message),q(),G(),e((0,p.TY)(Math.random()));else if(w.isError){var l;J(null===w||void 0===w||null===(l=w.error)||void 0===l?void 0:l.data),V()}}),[w.isSuccess,w.isError]);(0,s.useEffect)((()=>{var a;if(j.isSuccess)M(null===j||void 0===j||null===(a=j.data)||void 0===a?void 0:a.message),q(),L(),e((0,p.TY)(Math.random()));else if(j.isError){var l;J(null===j||void 0===j||null===(l=j.error)||void 0===l?void 0:l.data),V()}}),[j.isSuccess,j.isError]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(s.Suspense,{fallback:(0,v.jsx)(v.Fragment,{children:"..."}),children:[(0,v.jsxs)("div",{className:"flex flex-row w-full items-center border-b-[1px] border-b-solid relative",children:[(0,v.jsx)("div",{className:"flex p-[1.5rem] w-[70%]",children:(0,v.jsxs)("div",{className:"px-[10px] w-[90%] bg-[#E7EFFF] flex flex-row items-center gap-[10px] rounded-[8px]",children:[(0,v.jsx)(n.U41,{className:"text-[#636D73]"}),(0,v.jsx)("input",{className:"w-full outline-none py-[10px] bg-transparent",placeholder:"Search"})]})}),(0,v.jsxs)("div",{className:"w-[30%] flex gap-[1rem] items-center pr-[1rem]",children:[(0,v.jsxs)("div",{className:"flex relative cursor-pointer",children:[(0,v.jsx)("div",{className:"p-[6px] rounded-md shadow-md w-fit h-fit",children:(0,v.jsx)(n.Ivv,{className:"text-[25px] text-[#2662F0]"})}),(0,v.jsx)(i.Zh5,{className:"text-[#FDCA40] absolute right-0"})]}),(0,v.jsx)(n.BKo,{className:"text-[35px] bg-[#3497F9] text-white p-[4px] rounded-full"}),(0,v.jsxs)("div",{className:"flex flex-col items-start text-[#414D55] cursor-pointer select-none",onClick:()=>I(!E),children:[(0,v.jsx)("p",{className:"font-[500] text-[14px]",children:null===h||void 0===h?void 0:h.adminName}),(0,v.jsx)("p",{children:null===h||void 0===h?void 0:h.adminRole})]}),E?(0,v.jsx)(t.Vmf,{className:"cursor-pointer",onClick:()=>I(!E)}):(0,v.jsx)(t.OId,{className:"cursor-pointer",onClick:()=>I(!E)}),E&&(0,v.jsxs)("div",{className:"absolute px-[3rem] top-[5rem] flex flex-col items-center z-10 fade-in",children:[(0,v.jsx)("div",{className:"border-t-[20px] border-t-transparent w-fit border-b-[20px] border-b-[#3497F9] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent"}),(0,v.jsxs)("div",{className:"bg-[#3497F9] px-[3rem] shadow-md py-[1rem] rounded-md flex flex-col items-start gap-[10px] w-fit",children:[(0,v.jsx)("button",{onClick:()=>{N(null===h||void 0===h?void 0:h.adminName),F(null===h||void 0===h?void 0:h.adminEmail),O(!0)},className:"bg-white text-[14px] text-black p-[4px] rounded-md w-full",children:"My Profile"}),(0,v.jsx)("button",{onClick:()=>A(!0),className:"bg-white text-[14px] text-black p-[4px] rounded-md w-full",children:"Change Password"}),(0,v.jsx)(d.Z,{Style:"bg-[#202020] text-[14px] text-white p-[4px] rounded-md w-full"})]})]})]})]}),(0,v.jsx)(m.Z,{open:D,onClose:G,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsxs)(o.Z,{sx:R,children:[(0,v.jsx)(c.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:(0,v.jsx)("h1",{className:"headingBottomUnderline w-fit",children:"Edit Profile"})}),(0,v.jsx)(c.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,v.jsxs)("form",{className:"flex flex-col gap-[1rem]",onSubmit:e=>{e.preventDefault(),b({id:null===h||void 0===h?void 0:h.adminId,data:{adminName:Z,adminPassword:"",adminRole:null===h||void 0===h?void 0:h.adminRole}})},children:[(0,v.jsxs)("div",{className:"grid grid-cols-2 gap-[1rem]",children:[(0,v.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,v.jsx)("label",{children:"Full Name"}),(0,v.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",required:!0,type:"text",placeholder:"Enter full name",value:Z,onChange:e=>N(e.target.value)})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,v.jsx)("label",{children:"Email"}),(0,v.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",disabled:!0,type:"email",placeholder:"Enter email",value:y,onChange:e=>F(e.target.value)})]})]}),(0,v.jsx)("button",{type:"submit",className:"buttonFilled w-fit",children:"Submit"})]})})]})}),(0,v.jsx)(m.Z,{open:U,onClose:L,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsxs)(o.Z,{sx:R,children:[(0,v.jsx)(c.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:(0,v.jsx)("h1",{className:"headingBottomUnderline w-fit",children:"Change Password"})}),(0,v.jsx)(c.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,v.jsxs)("form",{className:"flex flex-col gap-[1rem]",onSubmit:e=>{e.preventDefault(),f({id:null===h||void 0===h?void 0:h.adminId,data:{adminOldPassword:S,adminPassword:P}})},children:[(0,v.jsxs)("div",{className:"grid grid-cols-2 gap-[1rem]",children:[(0,v.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,v.jsx)("label",{children:"Old Password"}),(0,v.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",type:"password",required:!0,placeholder:"Enter old password",autoComplete:"new-password",value:S,onChange:e=>C(e.target.value)})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-[10px]",children:[(0,v.jsx)("label",{children:"New Password"}),(0,v.jsx)("input",{className:"bg-[#F4F4F4] outline-none p-[1rem] rounded-[8px]",type:"password",required:!0,placeholder:"Enter new password",autoComplete:"new-password",value:P,onChange:e=>k(e.target.value)})]})]}),(0,v.jsx)("button",{type:"submit",className:"buttonFilled w-fit",children:"Submit"})]})})]})}),(0,v.jsx)(x.Z,{open:T,setOpen:_,severity:"success",message:H}),(0,v.jsx)(x.Z,{open:B,setOpen:K,severity:"warning",message:z})]})})}},1925:(e,a,l)=>{l.r(a),l.d(a,{default:()=>p});var s=l(2791),n=l(3481),i=l(4123),t=l(7899),d=l(4420),r=l(865),o=l(4795),c=l(697),m=l(7482),x=l(184);const u=(0,s.lazy)((()=>Promise.all([l.e(5340),l.e(8720),l.e(1909),l.e(9654),l.e(7601),l.e(1134),l.e(6518)]).then(l.bind(l,6518))));function p(){const e=(0,d.I0)(),a=(0,r.o2)(),{patients:l,patientCreate:p,patientUpdate:v,patientDelete:h}=(0,d.v9)((e=>e.PatientState));return(0,s.useEffect)((()=>{if((async()=>{const l=await a.refetch();if(l.isSuccess){var s,n;const a=null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.map(null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n.pop,[...null===l||void 0===l?void 0:l.data]),i=null===a||void 0===a?void 0:a.filter((e=>!1===e.isDeleted&&e));e((0,o.sH)(i))}})(),a.isSuccess){var l,s;const n=null===a||void 0===a||null===(l=a.data)||void 0===l?void 0:l.map(null===a||void 0===a||null===(s=a.data)||void 0===s?void 0:s.pop,[...null===a||void 0===a?void 0:a.data]),i=null===n||void 0===n?void 0:n.filter((e=>!1===e.isDeleted&&e));e((0,o.sH)(i))}}),[p,v,h,a.isSuccess]),(0,x.jsx)(x.Fragment,{children:a.isLoading?(0,x.jsx)(c.Z,{sx:{width:"100%"},children:(0,x.jsx)(m.Z,{})}):(0,x.jsxs)("div",{className:"superadmin-main flex flex-row w-full h-screen",children:[(0,x.jsx)("div",{className:"w-[20%] shadow-lg",children:(0,x.jsx)(n.default,{activePage:"".concat(t.Z.superadmin.category,"/").concat(t.Z.superadmin.internalPages.patients)})}),(0,x.jsxs)("div",{className:"superadmin-main-right flex flex-col w-[80%]",children:[(0,x.jsx)(i.default,{}),(0,x.jsx)("div",{className:"superadmin-main-right_dashboard w-full overflow-y-scroll",children:(0,x.jsx)(u,{})})]})]})})}},6949:(e,a,l)=>{e.exports=l.p+"static/media/logo.e6018157ad383ab41871.png"}}]);
//# sourceMappingURL=1925.163baa69.chunk.js.map