import{a as d,j as a}from"./index-1de50a7b.js";import{r as n}from"./vendor-8535c4d4.js";import{b as h,T as x,P as D,a as F}from"./PublicTableauInfoFooter-3a276223.js";import{S as L}from"./Select-5acc1e15.js";import"./index-990eea70.js";import"./RoutesContent-dde53aac.js";import"./TailwindTypography-1f41d08b.js";const y={Add:"add",All:"all",Remove:"remove",Replace:"replace"},v=[{value:"",label:"All"},{value:"2013",label:"2013"},{value:"2014",label:"2014"}],E="https://public.tableau.com/views/RegionalSampleWorkbook/College",r="Academic Year",s={ACTIVE:"active",DISABLED:"disabled"},C=[{field:r,value:""}],I=()=>{const i=n.useRef(null),[p,c]=n.useState(s.DISABLED),[A,o]=n.useState(v[0].value),S=e=>{c(e!==F.READY?s.DISABLED:s.ACTIVE)},g=async e=>{var f;const t=e.currentTarget.value;o(t);const l=i.current;if(!l||l.getAttribute("data-status")!=="ready")return;const b=(f=l.workbook)==null?void 0:f.activeSheet;c(s.DISABLED),t?await b.applyFilterAsync(r,[t],y.Replace):await b.clearFilterAsync(r)},m=async e=>{var u;const t=await e.detail.getFilterAsync(),l=((u=t==null?void 0:t.appliedValues)==null?void 0:u.length)??0;o(l===0?"":`${t.appliedValues[0].value}`),c(s.ACTIVE)};n.useEffect(()=>{const e=i.current;if(e)return e.addEventListener(h.FilterChanged,m),()=>{e.removeEventListener(h.FilterChanged,m)}},[i]);const T=p===s.DISABLED;return d("div",{className:"flex flex-col items-center w-full space-y-3",children:[a("div",{className:"flex space-x-3 items-center",children:d("span",{children:[a("strong",{children:"ui status: "})," ",p]})}),d("div",{className:"flex space-x-3 items-center",children:[a("span",{className:"font-bold",children:r}),a(L,{className:"w-36",disabled:T,value:A,onChange:g,children:v.map(({value:e,label:t},l)=>a("option",{value:e,children:t},l))})]}),a("div",{className:"flex justify-center h-[600px] min-w-[800px]",children:a(x,{ref:i,viewUrl:E,onStatusChange:S,filters:C})}),a(D,{tableauUrl:E,label:"filter",url:"https://tableau.github.io/embedding-api-v3-samples/filter.html",code:"https://github.com/tableau/embedding-api-v3-samples/blob/main/filter.html"})]})},j=I;export{I as PublicFilterExample,j as default};