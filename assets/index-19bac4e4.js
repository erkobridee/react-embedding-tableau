import{a as t,F as r,j as l,E as i,l as e,_ as a}from"./index-1de50a7b.js";import{I as s,R as c}from"./RoutesContent-dde53aac.js";import{c as m}from"./vendor-8535c4d4.js";import{T as d}from"./TailwindTypography-1f41d08b.js";const p=({className:n,items:o})=>t("div",{className:m("flex flex-col",n),children:[o?t(r,{children:[t("div",{children:["Available examples -"," ",t("span",{children:["data visualizations from the"," ",l(i,{className:"font-medium hover:underline",href:"https://public.tableau.com/app/discover",children:"Tableau Public"})]})]}),l(s,{className:"space-y-3",items:o}),l("hr",{})]}):null,l(d,{className:"max-w-full",children:t("ul",{children:["Useful references:",t("ul",{children:[t("li",{children:[l(i,{href:"https://github.com/tableau/embedding-api-v3-samples#embedding-api-v3-samples",children:"[GitHub] tableau / embedding-api-v3-samples"})," ","- This repository contains samples for the Tableau Embedding API V3."]}),t("li",{children:[l(i,{href:"https://github.com/andre347/tableau-react-jsapi",children:"[GitHub] andre347 / tableau-react-jsapi"})," ","- Playground for React & Tableau JS API"]})]})]})})]}),b=e(()=>a(()=>import("./index-da87c87d.js"),["assets/index-da87c87d.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js"])),u=e(()=>a(()=>import("./index-dd57d642.js"),["assets/index-dd57d642.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js","assets/Button-effc981b.js"])),_=e(()=>a(()=>import("./index-cd2a6b16.js"),["assets/index-cd2a6b16.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js","assets/Button-effc981b.js","assets/Select-5acc1e15.js"])),P=e(()=>a(()=>import("./index-c4332ce9.js"),["assets/index-c4332ce9.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js","assets/Select-5acc1e15.js"])),E=e(()=>a(()=>import("./index-ea9d8829.js"),["assets/index-ea9d8829.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js"])),h=e(()=>a(()=>import("./index-e27201f9.js"),["assets/index-e27201f9.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js"])),g=e(()=>a(()=>import("./index-2fe5d5e6.js"),["assets/index-2fe5d5e6.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js"])),x=e(()=>a(()=>import("./index-6d158c87.js"),["assets/index-6d158c87.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js"])),T=e(()=>a(()=>import("./index-5e20cce4.js"),["assets/index-5e20cce4.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js"])),v=e(()=>a(()=>import("./index-9c4e2f9b.js"),["assets/index-9c4e2f9b.js","assets/index-1de50a7b.js","assets/vendor-8535c4d4.js","assets/index-19e02660.css","assets/PublicTableauInfoFooter-3a276223.js","assets/index-990eea70.js","assets/RoutesContent-dde53aac.js","assets/TailwindTypography-1f41d08b.js"])),f=[{to:"/embedded-tableau",label:"Embedded Tableau"},{to:"/embedded-tableau/public",label:"Public"}],D=[{path:"basic-embed",label:"Basic Embed",PageComponent:b},{path:"dynamic-load",label:"Dynamic Load",PageComponent:u},{path:"export-options",label:"Export Options",PageComponent:_},{path:"filter",label:"Filter",PageComponent:P},{path:"mark-selection",label:"Mark Selection Changed",PageComponent:E},{path:"select-marks",label:"Select Marks",PageComponent:h},{path:"resize",label:"Resize",PageComponent:g},{path:"animation",label:"Animation",PageComponent:x},{path:"get-data",label:"Get Data",PageComponent:T},{path:"get-logical-data",label:"Get Logical Data",PageComponent:v}],A=()=>l(c,{breadcrumbs:f,routes:D,indexPage:{PageComponent:p}}),O=A;export{A as EmbeddedTableauPublicPage,O as default};