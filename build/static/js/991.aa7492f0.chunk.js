"use strict";(self.webpackChunkhospital_management_system=self.webpackChunkhospital_management_system||[]).push([[991],{991:(e,l,t)=>{t.r(l),t.d(l,{default:()=>x});var s=t(2791),i=t(7689),a=t(6949),n=t(1146),d=t(5216),c=t(7127),r=t(184);function x(){var e,l,t,x,o,p,m,u,h,v,j,N,y,f,g,b,D,C,T,A,F,E,P,I,w,M,B,S,O,Q,_,R,U,L,Y,k,H,V,G,W,J,K,q,z,X,Z,$,ee,le,te,se,ie,ae,ne,de,ce,re,xe,oe,pe,me,ue,he,ve,je,Ne,ye,fe,ge,be,De,Ce,Te,Ae,Fe,Ee,Pe,Ie,we,Me,Be,Se,Oe,Qe,_e,Re;const{billId:Ue}=(0,i.UO)(),[Le,Ye]=(0,s.useState)(""),ke=(0,d.IJ)(Ue),He=(0,c._x)(Le);(0,s.useEffect)((()=>{var e;ke.isSuccess&&Ye(null===ke||void 0===ke||null===(e=ke.currentData)||void 0===e?void 0:e.billingAdmittingDoctorId)}),[ke.isSuccess]),console.log(He);const Ve=e=>new Date(e).toLocaleDateString(),Ge=e=>new Date(e).toLocaleTimeString(),We=(0,s.useRef)(),Je=(0,n.useReactToPrint)({content:()=>We.current});return(0,r.jsx)(r.Fragment,{children:ke.isLoading&&He.isLoading?"Loading...":(0,r.jsx)(s.Fragment,{children:ke.isSuccess&&He.isSuccess?(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("button",{onClick:()=>Je(),className:"buttonFilled",children:"Print"}),(0,r.jsxs)("div",{ref:We,className:"w-full p-[1rem] flex flex-col gap-[1rem]",children:[(0,r.jsx)("style",{children:"@page { margin: ".concat("10px"," ").concat("5px"," ").concat("16px"," ").concat("5px"," !important; }")}),(0,r.jsxs)("div",{className:"flex justify-between items-end",children:[(0,r.jsxs)("div",{className:"flex items-end gap-[1rem]",children:[(0,r.jsx)("img",{src:a,alt:"chtclogo",className:"w-[100px]"}),(0,r.jsx)("h2",{children:"City Hospital and Trauma Centre"})]}),(0,r.jsxs)("div",{className:"flex text-[8px] gap-[10px]",children:[(0,r.jsx)("p",{className:"font-[600]",children:"Address: "}),(0,r.jsx)("p",{className:"w-[200px]",children:"C1-C2 cinder dump complex ,near Alambagh bus stand ,Kanpur road, Lucknow 226005"})]})]}),(0,r.jsx)("h3",{className:"text-center",style:{borderTop:"1px solid #CFCFCF",borderBottom:"1px solid #CFCFCF"},children:"Final Bill"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-[10px] text-[8px] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px] ",children:"Patients Reg ID"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(e=ke.currentData)||void 0===e?void 0:e.billingPatientId})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"OCC Bed Category"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(l=ke.currentData)||void 0===l?void 0:l.billingOccBedCategory})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"MR No. and IP No."}),(0,r.jsx)("p",{children:"".concat(null===ke||void 0===ke||null===(t=ke.currentData)||void 0===t?void 0:t.billing_MR_No," / ").concat(null===ke||void 0===ke||null===(x=ke.currentData)||void 0===x?void 0:x.billing_IP_No)})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Name"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(o=ke.currentData)||void 0===o?void 0:o.billingPatientName})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px] ",children:"Bill Date-Time"}),(0,r.jsx)("p",{children:"".concat(Ve(null===ke||void 0===ke||null===(p=ke.currentData)||void 0===p?void 0:p.billing_BillDateAndTime)," - ").concat(Ge(null===ke||void 0===ke||null===(m=ke.currentData)||void 0===m?void 0:m.billing_BillDateAndTime))})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Admitting Doctor"}),(0,r.jsx)("p",{children:null===He||void 0===He||null===(u=He.currentData)||void 0===u||null===(h=u.DoctorDetails)||void 0===h?void 0:h.doctorName})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Gender"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(v=ke.currentData)||void 0===v?void 0:v.billingPatientGender})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Admission Date-Time"}),(0,r.jsx)("p",{children:"".concat(Ve(null===ke||void 0===ke||null===(j=ke.currentData)||void 0===j?void 0:j.billing_AdmissionDateAndTime)," - ").concat(Ge(null===ke||void 0===ke||null===(N=ke.currentData)||void 0===N?void 0:N.billing_AdmissionDateAndTime))})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px] ",children:"Room No. and Bed No."}),(0,r.jsx)("p",{children:"".concat(null===ke||void 0===ke||null===(y=ke.currentData)||void 0===y?void 0:y.billingRoomNo," / ").concat(null===ke||void 0===ke||null===(f=ke.currentData)||void 0===f?void 0:f.billingBedNo)})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Age"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(g=ke.currentData)||void 0===g?void 0:g.billingPatientAge})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Discharge Date-Time"}),(0,r.jsx)("p",{children:"".concat(Ve(null===ke||void 0===ke||null===(b=ke.currentData)||void 0===b?void 0:b.billing_DischargeDateAndTime)," - ").concat(Ge(null===ke||void 0===ke||null===(D=ke.currentData)||void 0===D?void 0:D.billing_DischargeDateAndTime))})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Admission Category"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(C=ke.currentData)||void 0===C?void 0:C.billing_OPD_IPD_Emergency})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px] ",children:"Patient Category"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(T=ke.currentData)||void 0===T?void 0:T.billingPatientCategory})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Tariff Category"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(A=ke.currentData)||void 0===A?void 0:A.billingTariffCategory})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Bill Bed Category"}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(F=ke.currentData)||void 0===F?void 0:F.billingBedCategory})]}),(0,r.jsxs)("div",{className:"flex justify-start text-start",children:[(0,r.jsx)("p",{className:"font-[600] w-[100px]",children:"Billing Id"}),(0,r.jsx)("p",{children:Ue})]})]}),(null===ke||void 0===ke||null===(E=ke.currentData)||void 0===E||null===(P=E.allItems)||void 0===P?void 0:P.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"ITEM Charges"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(I=ke.currentData)||void 0===I||null===(w=I.allItems)||void 0===w?void 0:w.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(M=ke.currentData)||void 0===M||null===(B=M.allItems)||void 0===B?void 0:B.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(S=ke.currentData)||void 0===S||null===(O=S.allBasicHospitalCharges)||void 0===O?void 0:O.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"Basic Hospital Charges"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(Q=ke.currentData)||void 0===Q||null===(_=Q.allBasicHospitalCharges)||void 0===_?void 0:_.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(R=ke.currentData)||void 0===R||null===(U=R.allBasicHospitalCharges)||void 0===U?void 0:U.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(L=ke.currentData)||void 0===L||null===(Y=L.allBedChargesItems)||void 0===Y?void 0:Y.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"BED Charges"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(k=ke.currentData)||void 0===k||null===(H=k.allBedChargesItems)||void 0===H?void 0:H.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(V=ke.currentData)||void 0===V||null===(G=V.allBedChargesItems)||void 0===G?void 0:G.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(W=ke.currentData)||void 0===W||null===(J=W.allBEDSideProcedures)||void 0===J?void 0:J.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"BED SIDE Procedures"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(K=ke.currentData)||void 0===K||null===(q=K.allBEDSideProcedures)||void 0===q?void 0:q.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(z=ke.currentData)||void 0===z||null===(X=z.allBEDSideProcedures)||void 0===X?void 0:X.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(Z=ke.currentData)||void 0===Z||null===($=Z.allDoctorVisitCharges)||void 0===$?void 0:$.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"Doctor Visit Charges"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(ee=ke.currentData)||void 0===ee||null===(le=ee.allDoctorVisitCharges)||void 0===le?void 0:le.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(te=ke.currentData)||void 0===te||null===(se=te.allDoctorVisitCharges)||void 0===se?void 0:se.reduce(((e,l)=>e+l.itemPrice),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(ie=ke.currentData)||void 0===ie||null===(ae=ie.allLaboratoryInvestigations)||void 0===ae?void 0:ae.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"Laboratory Investigations"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(ne=ke.currentData)||void 0===ne||null===(de=ne.allLaboratoryInvestigations)||void 0===de?void 0:de.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(ce=ke.currentData)||void 0===ce||null===(re=ce.allLaboratoryInvestigations)||void 0===re?void 0:re.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(xe=ke.currentData)||void 0===xe||null===(oe=xe.allMedicines)||void 0===oe?void 0:oe.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"Medicines"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(pe=ke.currentData)||void 0===pe||null===(me=pe.allMedicines)||void 0===me?void 0:me.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(ue=ke.currentData)||void 0===ue||null===(he=ue.allMedicines)||void 0===he?void 0:he.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(ve=ke.currentData)||void 0===ve||null===(je=ve.allOtherMiscCharges)||void 0===je?void 0:je.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"Other Misc Charges"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(Ne=ke.currentData)||void 0===Ne||null===(ye=Ne.allOtherMiscCharges)||void 0===ye?void 0:ye.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(fe=ke.currentData)||void 0===fe||null===(ge=fe.allOtherMiscCharges)||void 0===ge?void 0:ge.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(be=ke.currentData)||void 0===be||null===(De=be.allProcedures)||void 0===De?void 0:De.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"Procedures"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(Ce=ke.currentData)||void 0===Ce||null===(Te=Ce.allProcedures)||void 0===Te?void 0:Te.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(Ae=ke.currentData)||void 0===Ae||null===(Fe=Ae.allProcedures)||void 0===Fe?void 0:Fe.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(null===ke||void 0===ke||null===(Ee=ke.currentData)||void 0===Ee||null===(Pe=Ee.allOtherServiceCharges)||void 0===Pe?void 0:Pe.length)>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"font-[600] text-start text-[12px]",children:"Other Service Charges"}),(0,r.jsxs)("table",{className:"text-[10px]",children:[(0,r.jsxs)("tr",{className:"border-b ",children:[(0,r.jsx)("th",{className:"py-[4px]",children:"S NO"}),(0,r.jsx)("th",{className:"py-[4px]",children:"DATE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"ITEM NAME"}),(0,r.jsx)("th",{className:"py-[4px]",children:"QTY"}),(0,r.jsx)("th",{className:"py-[4px]",children:"PRICE"}),(0,r.jsx)("th",{className:"py-[4px]",children:"AMOUNT"})]}),null===ke||void 0===ke||null===(Ie=ke.currentData)||void 0===Ie||null===(we=Ie.allOtherServiceCharges)||void 0===we?void 0:we.map(((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-center py-[4px]",children:l+1}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.date}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemName}),(0,r.jsx)("td",{className:"text-center py-[4px]",children:null===e||void 0===e?void 0:e.itemQuantity}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemPrice]}),(0,r.jsxs)("td",{className:"text-center py-[4px]",children:["\u20b9 ",null===e||void 0===e?void 0:e.itemTotalAmount]})]},"".concat(null===e||void 0===e?void 0:e.itemName,"-").concat(l))))]}),(0,r.jsxs)("div",{className:"text-[#0495F5] text-[14px] flex items-center gap-[2rem] w-full justify-end px-[2rem] pb-[1rem]",style:{borderBottom:"1px solid #CFCFCF"},children:[(0,r.jsx)("p",{children:"Sub Total"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(Me=ke.currentData)||void 0===Me||null===(Be=Me.allOtherServiceCharges)||void 0===Be?void 0:Be.reduce(((e,l)=>e+l.itemTotalAmount),0).toFixed(2)]})]})]}),(0,r.jsx)("div",{className:"flex items-end px-[2rem] flex-col",children:(0,r.jsxs)("div",{className:"w-[300px] flex flex-col gap-[10px]",children:[(0,r.jsx)("h3",{className:"text-start",children:"Amount Summary"}),(0,r.jsxs)("div",{className:"flex  justify-between border-b text-[12px]",children:[(0,r.jsx)("p",{children:"Grand Total"}),(0,r.jsxs)("p",{children:["\u20b9 ",null===ke||void 0===ke||null===(Se=ke.currentData)||void 0===Se?void 0:Se.billAmount]})]}),(0,r.jsxs)("div",{className:"flex  justify-between border-b text-[12px]",children:[(0,r.jsx)("p",{children:"Credit Note Amount"}),(0,r.jsxs)("p",{children:["\u20b9"," ",null===ke||void 0===ke||null===(Oe=ke.currentData)||void 0===Oe?void 0:Oe.billingCreditNoteAmount]})]}),(0,r.jsxs)("div",{className:"flex  justify-between border-b text-[12px]",children:[(0,r.jsx)("p",{children:"Net Amount"}),(0,r.jsxs)("p",{children:["\u20b9 ",null===ke||void 0===ke||null===(Qe=ke.currentData)||void 0===Qe?void 0:Qe.billNetAmount]})]}),(0,r.jsxs)("div",{className:"flex  justify-between border-b text-[12px]",children:[(0,r.jsx)("p",{children:"Amount Paid"}),(0,r.jsxs)("p",{children:["\u20b9 ",null===ke||void 0===ke||null===(_e=ke.currentData)||void 0===_e?void 0:_e.billingPaidAmount]})]})]})}),(0,r.jsxs)("div",{className:"flex gap-[1rem] text-[12px]",children:[(0,r.jsx)("p",{className:"font-[600]",children:"Amount In Words: "}),(0,r.jsx)("p",{children:null===ke||void 0===ke||null===(Re=ke.currentData)||void 0===Re?void 0:Re.billAmountInWords})]})]})]}):"Not Found"})})}},6949:(e,l,t)=>{e.exports=t.p+"static/media/logo.e6018157ad383ab41871.png"}}]);
//# sourceMappingURL=991.aa7492f0.chunk.js.map