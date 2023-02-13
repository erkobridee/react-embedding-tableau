import{a as s,j as e,F as x}from"./index-4220aa41.js";import{r}from"./vendor-8535c4d4.js";import{s as E}from"./slugify-7e606d19.js";import{b as f,T as N,P as S,a as T}from"./PublicTableauInfoFooter-a0e401b0.js";import"./index-2a80daf0.js";import"./RoutesContent-a1e5c9f3.js";import"./TailwindTypography-09bc505e.js";const v="https://public.tableau.com/views/RegionalSampleWorkbook/College",m={ACTIVE:"active",DISABLED:"disabled"},k=t=>E(t,{lower:!0,remove:/[*+~.()'"!:@]/g}),y=t=>{const i=t.columns.map(({fieldName:l,dataType:n})=>({fieldId:k(l),fieldName:l,dataType:n}));return t.data.map(l=>i.map((n,c)=>({...n,value:l[c].value})))},C=()=>{const t=r.useRef(null),[i,u]=r.useState(m.DISABLED),[l,n]=r.useState([]),c=a=>{u(a!==T.READY?m.DISABLED:m.ACTIVE)},p=async a=>{const o=await a.detail.getMarksAsync(),d=y(o.data[0]);n(d)};r.useEffect(()=>{const a=t.current;if(a)return a.addEventListener(f.MarkSelectionChanged,p),()=>{a.removeEventListener(f.MarkSelectionChanged,p)}},[]);const h=l.length;return s("div",{className:"flex flex-col items-center w-full space-y-3",children:[e("div",{className:"flex space-x-3 items-center",children:s("span",{children:[e("strong",{children:"ui status: "})," ",i]})}),e("div",{className:"flex justify-center h-[600px] min-w-[800px]",children:e(N,{ref:t,viewUrl:v,onStatusChange:c})}),e(S,{tableauUrl:v,label:"Respond to Events",url:"https://tableau.github.io/embedding-api-v3-samples/respondToEvents.html",code:"https://github.com/tableau/embedding-api-v3-samples/blob/main/respondToEvents.html"}),h>0?s(x,{children:[e("hr",{className:"border-divider my-4 sm:mx-auto lg:my-6 w-full"}),s("div",{className:"flex space-x-3 items-center font-bold",children:["Marks Selected ( ",h," )"]}),e("div",{className:"flex gap-3 items-center flex-wrap",children:l.map((a,b)=>e("div",{className:"p-2 flex flex-col space-y-2 border rounded-md",children:a.map(({fieldId:o,fieldName:d,value:g})=>s("div",{children:[e("span",{className:"font-bold",children:`${d}:`})," ",e("span",{children:g})]},o))},b))})]}):null,e("hr",{className:"border-divider my-4 sm:mx-auto lg:my-6 w-full"}),s("ul",{children:[e("span",{className:"text-lg",children:"Useful events:"}),s("li",{className:"flex gap-2",children:[e("span",{className:"font-bold",children:"First Interactive"}),e("span",{className:"italic",children:"Fired when a viz first becomes interactive"})]}),s("li",{className:"flex gap-2",children:[e("span",{className:"font-bold",children:"Filter Changed"}),e("span",{className:"italic",children:"Raised when any filter has changed state. You can use this event type with TableauViz objects."})]}),s("li",{className:"flex gap-2",children:[e("span",{className:"font-bold",children:"Mark Selection Changed"}),e("span",{className:"italic",children:"The selected marks on a visualization have changed. You can use this event type with TableauViz objects."})]})]})]})},R=C;export{C as MarkSelectionChanged,R as default};