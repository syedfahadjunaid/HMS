"use strict";(self.webpackChunkhospital_management_system=self.webpackChunkhospital_management_system||[]).push([[10],{5743:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(2791),n=a(8720),o=a(184);function l(e){let{page:t,handleChangePage:a,rowsPerPage:r,handleChangeRowsPerPage:l,data:s}=e;return(0,o.jsx)(n.Z,{style:{backgroundColor:"white"},rowsPerPageOptions:[5,10,20,50],component:"div",count:s.length,page:t,onPageChange:a,rowsPerPage:r,onRowsPerPageChange:l})}const s=function(e){var t;let{data:a,config:n,keyFn:s}=e;const[i,d]=(0,r.useState)(0),[c,p]=(0,r.useState)(5),x=null===n||void 0===n?void 0:n.map((e=>e.header?(0,o.jsx)(r.Fragment,{children:e.header()},e.label):(0,o.jsx)("th",{className:"text-center px-[4px] border-b-[1px] p-[10px]",children:e.label},e.label))),A=null===a||void 0===a||null===(t=a.slice(i*c,i*c+c))||void 0===t?void 0:t.map(((e,t)=>{const a=null===n||void 0===n?void 0:n.map(((t,a)=>(0,o.jsx)("td",{className:"justify-center text-[12px] py-4 px-[4px] text-center border-b-[1px]",children:t.render(e)},"column-".concat(a))));return(0,o.jsx)("tr",{className:"",children:a},s(e))}));return(0,o.jsxs)("div",{children:[(0,o.jsxs)("table",{className:"w-full table-auto border-spacing-2 text-[#595959] font-[300]",children:[(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{className:"border-b-[1px]",children:x})}),(0,o.jsx)("tbody",{children:A})]}),(0,o.jsx)(l,{page:i,rowsPerPage:c,handleChangePage:(e,t)=>{d(t)},handleChangeRowsPerPage:e=>{p(parseInt(e.target.value,10)),d(0)},data:a})]})}},7745:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(2791),n=a(5743),o=a(4330);const l="data:image/jpeg;base64,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";var s=a(184);function i(){const e=[{id:"1",time:"12:00",date:"21-01-2024",patientName:"Arman",patientPicture:l,doctor:"Dr. Stone"},{id:"2",time:"12:00",date:"21-01-2024",patientName:"Arman",patientPicture:l,doctor:"Dr. Stone"}],t=[{label:"Time",render:e=>e.time},{label:"Date",render:e=>e.date},{label:"Patient Name",render:e=>(0,s.jsxs)("div",{className:"flex gap-[10px] justify-center items-center",children:[(0,s.jsx)("img",{src:e.patientPicture,alt:"patientPicture"+e.id,className:"rounded-full w-[50px] h-[50px]"}),(0,s.jsx)("p",{children:e.patientName})]})},{label:"Doctor",render:e=>e.doctor}];return(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)(s.Fragment,{children:"..."}),children:(0,s.jsxs)("div",{className:"appointment-dashboard-table flex flex-col py-[1rem] px-[1rem] gap-[10px] border rounded-[12px]",children:[(0,s.jsxs)("div",{className:"flex flex-row justify-between items-center ",children:[(0,s.jsx)("p",{className:"text-[20px] border-t-[4px] border-[#3497F9] pt-[1rem]",children:"New Appointments"}),(0,s.jsxs)("button",{className:"bg-[#2196F3] text-white p-[10px] rounded-[8px] flex flex-row items-center gap-[10px]",children:[(0,s.jsx)("p",{children:"See More"}),(0,s.jsx)(o.hjJ,{})]})]}),(0,s.jsx)(n.Z,{data:e,config:t,keyFn:e=>e.patientName})]})})}},3400:(e,t,a)=>{a.d(t,{Z:()=>Q});var r=a(3366),n=a(7462),o=a(2791),l=a(3733),s=a(4419),i=a(4402),d=a(6934),c=a(1402),p=a(2982),x=a(4036),A=a(5878),u=a(1217);function m(e){return(0,u.ZP)("MuiIconButton",e)}const b=(0,A.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var v=a(184);const h=["edge","children","className","color","disabled","disableFocusRipple","size"],E=(0,d.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"default"!==a.color&&t["color".concat((0,x.Z)(a.color))],a.edge&&t["edge".concat((0,x.Z)(a.edge))],t["size".concat((0,x.Z)(a.size))]]}})((e=>{let{theme:t,ownerState:a}=e;return(0,n.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})}),(e=>{let{theme:t,ownerState:a}=e;var r;const o=null==(r=(t.vars||t).palette)?void 0:r[a.color];return(0,n.Z)({},"inherit"===a.color&&{color:"inherit"},"inherit"!==a.color&&"default"!==a.color&&(0,n.Z)({color:null==o?void 0:o.main},!a.disableRipple&&{"&:hover":(0,n.Z)({},o&&{backgroundColor:t.vars?"rgba(".concat(o.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(o.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===a.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===a.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{["&.".concat(b.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})})),Q=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiIconButton"}),{edge:o=!1,children:i,className:d,color:p="default",disabled:A=!1,disableFocusRipple:u=!1,size:b="medium"}=a,Q=(0,r.Z)(a,h),j=(0,n.Z)({},a,{edge:o,color:p,disabled:A,disableFocusRipple:u,size:b}),f=(e=>{const{classes:t,disabled:a,color:r,edge:n,size:o}=e,l={root:["root",a&&"disabled","default"!==r&&"color".concat((0,x.Z)(r)),n&&"edge".concat((0,x.Z)(n)),"size".concat((0,x.Z)(o))]};return(0,s.Z)(l,m,t)})(j);return(0,v.jsx)(E,(0,n.Z)({className:(0,l.Z)(f.root,d),centerRipple:!0,focusRipple:!u,disabled:A,ref:t,ownerState:j},Q,{children:i}))}))}}]);
//# sourceMappingURL=10.fbadadae.chunk.js.map