import{a as n,j as e}from"./index-caa3f7ec.js";import{r as m}from"./vendor-8535c4d4.js";import{T as B,P as I,a as L}from"./PublicTableauInfoFooter-e835ae19.js";import{B as T}from"./Button-1812f1ec.js";import"./index-9af660a3.js";import"./RoutesContent-b3669859.js";import"./TailwindTypography-980c8104.js";const f="https://public.tableau.com/views/RegionalSampleWorkbook/Stocks",h={ACTIVE:"active",DISABLED:"disabled"},t={min:400,max:1200},s={min:300,max:900},w="p-2 rounded-md w-20",k=()=>{const N=m.useRef(null),[u,v]=m.useState(h.DISABLED),[l,S]=m.useState({width:900,height:700}),[c,p]=m.useState(l.width),[r,b]=m.useState(l.height),E=i=>{v(i!==L.READY?h.DISABLED:h.ACTIVE)},x=i=>{const{name:o,valueAsNumber:a}=i.currentTarget;switch(o){case"width":p(a);break;case"height":b(a);break}},g=i=>{const{name:o,valueAsNumber:a}=i.target;switch(o){case"width":p(a<t.min?t.min:a>t.max?t.max:a);break;case"height":b(a<s.min?s.min:a>s.max?s.max:a);break}},A=i=>()=>{S(i)},d=u!==h.ACTIVE,C=d||c===l.width&&r===l.height;return n("div",{className:"flex flex-col items-center w-full space-y-3",children:[n("div",{className:"flex gap-3 items-center",children:[e("span",{className:"font-bold",children:"ui status:"}),e("span",{children:u})]}),n("div",{className:"flex flex-col gap-3",children:[n("div",{className:"flex gap-3 items-center",children:[e("span",{className:"font-bold w-12 text-right",children:"Width"}),e("input",{type:"number",name:"width",value:c,onChange:x,onBlur:g,className:w,min:t.min,max:t.max,step:10,disabled:d}),e("span",{className:"text-sm",children:"Limits"}),e("span",{className:"text-sm italic",children:`min: ${t.min} and max: ${t.max}`})]}),n("div",{className:"flex gap-3 items-center",children:[e("span",{className:"font-bold w-12 text-right",children:"Height"}),e("input",{type:"number",name:"height",value:r,onChange:x,onBlur:g,className:w,min:s.min,max:s.max,step:10,disabled:d}),e("span",{className:"text-sm",children:"Limits"}),e("span",{className:"text-sm italic",children:`min: ${s.min} and max: ${s.max}`})]}),n("div",{className:"flex gap-3 items-center justify-center w-full",children:[e("span",{children:`${c} x ${r} px`}),e(T,{disabled:C,onClick:A({width:c,height:r}),children:"Apply"})]})]}),e("div",{className:"flex justify-center w-full",children:e(B,{ref:N,viewUrl:f,onStatusChange:E,height:l.height,width:l.width})}),e(I,{tableauUrl:f,label:"Resize",url:"https://tableau.github.io/embedding-api-v3-samples/resize.html",code:"https://github.com/tableau/embedding-api-v3-samples/blob/main/resize.html"})]})},U=k;export{k as PublicResizeExample,U as default};
