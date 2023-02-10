import{a as b,j as l}from"./index-f7e03397.js";import{r as n}from"./vendor-8535c4d4.js";import{b as f,T as x,P as D,a as F}from"./PublicTableauInfoFooter-66925947.js";import{S as L}from"./Select-02762545.js";import"./index-5dd575dc.js";import"./RoutesContent-1f49d397.js";import"./TailwindTypography-c7e7fa7c.js";const y={Add:"add",All:"all",Remove:"remove",Replace:"replace"},v=[{value:"",label:"All"},{value:"2013",label:"2013"},{value:"2014",label:"2014"}],h="https://public.tableau.com/views/RegionalSampleWorkbook/College",r="Academic Year",s={ACTIVE:"active",DISABLED:"disabled"},C=[{field:r,value:""}],I=()=>{const i=n.useRef(null),[E,c]=n.useState(s.DISABLED),[A,o]=n.useState(v[0].value),S=e=>{c(e!==F.READY?s.DISABLED:s.ACTIVE)},g=async e=>{var m;const t=e.currentTarget.value;o(t);const a=i.current;if(!a||a.getAttribute("data-status")!=="ready")return;const p=(m=a.workbook)==null?void 0:m.activeSheet;c(s.DISABLED),t?await p.applyFilterAsync(r,[t],y.Replace):await p.clearFilterAsync(r)},d=async e=>{var u;const t=await e.detail.getFilterAsync(),a=((u=t==null?void 0:t.appliedValues)==null?void 0:u.length)??0;o(a===0?"":`${t.appliedValues[0].value}`),c(s.ACTIVE)};n.useEffect(()=>{const e=i.current;if(e)return e.addEventListener(f.FilterChanged,d),()=>{e.removeEventListener(f.FilterChanged,d)}},[i]);const T=E===s.DISABLED;return b("div",{className:"flex flex-col items-center w-full space-y-3",children:[b("div",{className:"flex space-x-3 items-center",children:[l("span",{className:"font-bold",children:r}),l(L,{className:"w-36",disabled:T,value:A,onChange:g,children:v.map(({value:e,label:t},a)=>l("option",{value:e,children:t},a))})]}),l("div",{className:"flex justify-center h-[600px] min-w-[800px]",children:l(x,{ref:i,viewUrl:h,onStatusChange:S,filters:C})}),l(D,{tableauUrl:h,label:"filter",url:"https://tableau.github.io/embedding-api-v3-samples/filter.html",code:"https://github.com/tableau/embedding-api-v3-samples/blob/main/filter.html"})]})},j=I;export{I as PublicFilterExample,j as default};