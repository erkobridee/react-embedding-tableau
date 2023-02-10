import{j as t,F as E,a as m,E as T}from"./index-f7e03397.js";import{r as c,c as M}from"./vendor-8535c4d4.js";import{u as O}from"./index-5dd575dc.js";const L={CustomMarkContextMenuEvent:"custommarkcontextmenu",CustomViewLoaded:"customviewloaded",CustomViewRemoved:"customviewremoved",CustomViewSaved:"customviewsaved",CustomViewSetDefault:"customviewsetdefault",EditButtonClicked:"editbuttonclicked",EditInDesktopButtonClicked:"editindesktopbuttonclicked",FilterChanged:"filterchanged",FirstInteractive:"firstinteractive",FirstVizSizeKnown:"firstvizsizeknown",MarkSelectionChanged:"markselectionchanged",ParameterChanged:"parameterchanged",StoryPointSwitched:"storypointswitched",ToolbarStateChanged:"toolbarstatechanged",TabSwitched:"tabswitched",UrlAction:"urlaction",WorkbookPublished:"workbookpublished",WorkbookPublishedAs:"workbookpublishedas",WorkbookReadyToClose:"workbookreadytoclose"},P=(e,i)=>{const a=c.useRef(!0);c.useEffect(()=>{a.current?a.current=!1:e()},i)},u={IDLE:"idle",LOADING:"loading",READY:"ready",TIMEOUT:"timeout"},w={SET_VIEW_URL:"set-view-url",SET_STATUS:"set-status"},G=(e,i)=>{const{type:a,payload:l}=i;let s=u.IDLE;switch(a){case w.SET_VIEW_URL:return s=u.LOADING,{viewUrl:l,status:s};case w.SET_STATUS:return s=l,{...e,status:s};default:return e}},W=3e3,H=(e,i={})=>{const{initialStatus:a=u.IDLE,statusChangeTimeout:l=W}=i,[s,b]=c.useReducer(G,{viewUrl:e,status:a}),n=o=>{b({type:w.SET_STATUS,payload:o})},d=c.useRef(void 0),v=()=>{const o=d.current;o&&clearTimeout(o)},k=()=>{n(u.TIMEOUT)},h=()=>{v(),d.current=setTimeout(k,l)},g=o=>{h(),b({type:w.SET_VIEW_URL,payload:o})},S=()=>{v(),n(u.READY)};return c.useEffect(()=>{n(u.LOADING);const o=setTimeout(()=>{g(e)},150);return()=>{clearInterval(o)}},[e]),{viewUrl:s.viewUrl,status:s.status,setReady:S}},j=({viewUrl:e,className:i,id:a="tableauViz",instanceIdToClone:l,token:s,toolbar:b,debug:n=!1,hideTabs:d=!1,device:v,filters:k=[],loading:h,onStatusChange:g=()=>{}},S)=>{const{viewUrl:o,status:f,setReady:U}=H(e),I=[`${u.IDLE}`,`${u.LOADING}`].includes(f),p=c.useRef(null);c.useImperativeHandle(S,()=>p.current?p.current:{});const{debug:C,token:D,device:A,toolbar:N,hideTabs:x,loading:_,baseClassName:F}=O(),y=async()=>{setTimeout(()=>{U()},300)};c.useEffect(()=>{const r=p.current;if(r)return r==null||r.addEventListener(L.FirstInteractive,y),()=>{r==null||r.removeEventListener(L.FirstInteractive,y)}},[]),P(()=>{g(f)},[f]);const V=!!(window&&window.matchMedia&&window.matchMedia("(any-pointer:coarse)").matches),R=t("tableau-viz",{ref:p,style:{opacity:I?0:1},src:o,class:M(F,i),id:a,instanceIdToClone:l,device:v||A,toolbar:b||N,token:s||D,debug:n||C?!0:void 0,"hide-tabs":d||x?!0:void 0,"touch-optimize":V?!0:void 0,"data-status":f,children:k.map((r,z)=>t("viz-filter",{...r},z))});return h=h||_,h?m("div",{style:{display:"flex",position:"relative"},children:[t("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,opacity:I?1:0},children:h}),R]}):t(E,{children:R})},B=c.forwardRef(j);B.displayName="TableauEmbed";const q=({tableauUrl:e,githubProfileAccount:i="tableau",githubProfileAccountUrl:a="https://github.com/tableau",githubRepo:l="embedding-api-v3-samples",githubRepoUrl:s="https://github.com/tableau/embedding-api-v3-samples",label:b,url:n,code:d})=>m(E,{children:[m("div",{className:"flex space-x-3",children:[t("div",{className:"font-bold",children:"Public Tableau:"}),t(T,{className:"hover:underline",href:e})]}),m("div",{className:"flex space-x-1",children:[m(T,{className:"hover:underline",href:a,children:["[GitHub] ",i]}),t("span",{children:"/"}),t(T,{className:"hover:underline",href:s,children:l}),n?m(E,{children:[t("span",{children:"/"}),t(T,{className:"hover:underline",href:n,children:b||n}),d?m(E,{children:[t("span",{children:"-"}),t(T,{className:"hover:underline",href:d,children:"code"})]}):null]}):null]})]});export{q as P,B as T,u as a,L as b};