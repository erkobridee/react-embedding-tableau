import{a,j as e}from"./index-f7e03397.js";import{r as s}from"./vendor-8535c4d4.js";import{T as c,P as u,a as m}from"./PublicTableauInfoFooter-66925947.js";import"./index-5dd575dc.js";import"./RoutesContent-1f49d397.js";import"./TailwindTypography-c7e7fa7c.js";const l="https://public.tableau.com/views/RegionalSampleWorkbook/College",t={ACTIVE:"active",DISABLED:"disabled"},p=()=>{const i=s.useRef(null),[n,r]=s.useState(t.DISABLED);return a("div",{className:"flex flex-col items-center w-full space-y-3",children:[e("div",{className:"flex space-x-3 items-center",children:a("span",{children:[e("strong",{children:"TODO:"})," implement the example"]})}),e("div",{className:"flex space-x-3 items-center",children:a("span",{children:[e("strong",{children:"ui status: "})," ",n]})}),e("div",{className:"flex justify-center h-[600px] min-w-[800px]",children:e(c,{ref:i,viewUrl:l,onStatusChange:o=>{r(o!==m.READY?t.DISABLED:t.ACTIVE)}})}),e(u,{tableauUrl:l,label:"Animation",githubProfileAccount:"andre347",githubProfileAccountUrl:"https://github.com/andre347",githubRepo:"tableau-react-jsapi",githubRepoUrl:"https://github.com/andre347/tableau-react-jsapi",url:"https://react-tableau-jsapi.vercel.app/animation",code:"https://github.com/andre347/tableau-react-jsapi/blob/master/src/components/Animation.js"})]})},E=p;export{p as PublicAnimationExample,E as default};