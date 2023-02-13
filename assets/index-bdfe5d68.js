import{a as d,j as a}from"./index-4220aa41.js";import{r}from"./vendor-8535c4d4.js";import{F as x}from"./FilterUpdateType-b92c7746.js";import{b as h,T as F,P as D,a as L}from"./PublicTableauInfoFooter-a0e401b0.js";import{S as y}from"./Select-c405d67c.js";import"./index-2a80daf0.js";import"./RoutesContent-a1e5c9f3.js";import"./TailwindTypography-09bc505e.js";const v=[{value:"",label:"All"},{value:"2013",label:"2013"},{value:"2014",label:"2014"}],E="https://public.tableau.com/views/RegionalSampleWorkbook/College",i="Academic Year",s={ACTIVE:"active",DISABLED:"disabled"},C=[{field:i,value:""}],I=()=>{const n=r.useRef(null),[p,c]=r.useState(s.DISABLED),[S,o]=r.useState(v[0].value),g=e=>{c(e!==L.READY?s.DISABLED:s.ACTIVE)},A=async e=>{var f;const t=e.currentTarget.value;o(t);const l=n.current;if(!l||l.getAttribute("data-status")!=="ready")return;const b=(f=l.workbook)==null?void 0:f.activeSheet;c(s.DISABLED),t?await b.applyFilterAsync(i,[t],x.Replace):await b.clearFilterAsync(i)},m=async e=>{var u;const t=await e.detail.getFilterAsync();if(t.fieldName!==i)return;const l=((u=t==null?void 0:t.appliedValues)==null?void 0:u.length)??0;o(l===0?"":`${t.appliedValues[0].value}`),c(s.ACTIVE)};r.useEffect(()=>{const e=n.current;if(e)return e.addEventListener(h.FilterChanged,m),()=>{e.removeEventListener(h.FilterChanged,m)}},[n]);const T=p===s.DISABLED;return d("div",{className:"flex flex-col items-center w-full space-y-3",children:[a("div",{className:"flex space-x-3 items-center",children:d("span",{children:[a("strong",{children:"ui status: "})," ",p]})}),d("div",{className:"flex space-x-3 items-center",children:[a("span",{className:"font-bold",children:i}),a(y,{className:"w-36",disabled:T,value:S,onChange:A,children:v.map(({value:e,label:t},l)=>a("option",{value:e,children:t},l))})]}),a("div",{className:"flex justify-center h-[600px] min-w-[800px]",children:a(F,{ref:n,viewUrl:E,onStatusChange:g,filters:C})}),a(D,{tableauUrl:E,label:"filter",url:"https://tableau.github.io/embedding-api-v3-samples/filter.html",code:"https://github.com/tableau/embedding-api-v3-samples/blob/main/filter.html"})]})},k=I;export{I as PublicFilterExample,k as default};