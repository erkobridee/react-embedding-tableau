import{j as k,F as I}from"./index-e2d1cd3a.js";import{r as d,c as C}from"./vendor-50e95b69.js";const S="tableau.embedding.3.latest.min.js",w="javascripts/api",A="https://public.tableau.com",D="https://online.tableau.com",E="https://embedding.tableauusercontent.com",P={LATEST:`${A}/${w}/${S}`,PUBLIC:`${A}/${w}/${S}`,CLOUD:`${D}}/${w}/${S}`,"3.4.0":`${E}/tableau.embedding.3.4.0.min.js`,"3.3.0":`${E}/tableau.embedding.3.3.0.min.js`,"3.2.0":`${E}/tableau.embedding.3.2.0.min.js`,"3.1.0":`${E}/tableau.embedding.3.1.0.min.js`,"3.0.0":`${E}/tableau.embedding.3.0.0.min.js`},O="3.4.0",r={IDLE:"idle",LOADING:"loading",READY:"ready",ERROR:"error"},y={},$=n=>{const e=document.querySelector(`script[src="${n}"]`),l=e==null?void 0:e.getAttribute("data-status");return{node:e,status:l}},T=(n,e)=>{const[l,u]=d.useState(()=>!n||e!=null&&e.shouldPreventLoad?r.IDLE:typeof window>"u"?r.LOADING:y[n]??r.LOADING),{onReady:m,onError:v,onUnmount:R,shouldPreventLoad:b,removeOnUnmount:f,asModule:h}=d.useMemo(()=>{const s=()=>{e!=null&&e.onReady&&e.onReady()},i=L=>{e!=null&&e.onError&&e.onError(L)},t=()=>{e!=null&&e.onUnmount&&e.onUnmount()},a=(e==null?void 0:e.shouldPreventLoad)??!1,c=(e==null?void 0:e.removeOnUnmount)??!1,o=(e==null?void 0:e.asModule)??!1;return{onReady:s,onError:i,onUnmount:t,shouldPreventLoad:a,removeOnUnmount:c,asModule:o}},[e]);return d.useEffect(()=>{if(!n||b)return;const s=y[n];if(s===r.READY||s===r.ERROR){u(s);return}const i=$(n);let t=i.node;if(t)u(i.status??s??r.LOADING);else{t=document.createElement("script"),h&&(t.type="module"),t.src=n,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);const c=o=>{const L=o.type==="load"?r.READY:r.ERROR;switch(t==null||t.setAttribute("data-status",L),L){case r.READY:m();break;case r.ERROR:v(o);break}};t.addEventListener("load",c),t.addEventListener("error",c)}const a=c=>{const o=c.type==="load"?r.READY:r.ERROR;switch(u(o),y[n]=o,o){case r.READY:m();break;case r.ERROR:v(c);break}};return t.addEventListener("load",a),t.addEventListener("error",a),()=>{t&&(t.removeEventListener("load",a),t.removeEventListener("error",a),f&&t.remove(),R())}},[n,m,v,R,b,f,h]),l},U={CustomMarkContextMenuEvent:"custommarkcontextmenu",CustomViewLoaded:"customviewloaded",CustomViewRemoved:"customviewremoved",CustomViewSaved:"customviewsaved",CustomViewSetDefault:"customviewsetdefault",EditButtonClicked:"editbuttonclicked",EditInDesktopButtonClicked:"editindesktopbuttonclicked",FilterChanged:"filterchanged",FirstInteractive:"firstinteractive",FirstVizSizeKnown:"firstvizsizeknown",MarkSelectionChanged:"markselectionchanged",ParameterChanged:"parameterchanged",StoryPointSwitched:"storypointswitched",ToolbarStateChanged:"toolbarstatechanged",TabSwitched:"tabswitched",UrlAction:"urlaction",WorkbookPublished:"workbookpublished",WorkbookPublishedAs:"workbookpublishedas",WorkbookReadyToClose:"workbookreadytoclose"},F=({viewUrl:n,embeddingApiVersion:e=O,className:l,id:u="tableauViz",instanceIdToClone:m,token:v,toolbar:R,debug:b=!1,hideTabs:f=!1},h)=>{const s=d.useRef(null);d.useImperativeHandle(h,()=>s.current?s.current:{});const i=d.useMemo(()=>{const a=P[e];return b?a.replace("min.",""):a},[e,b]);T(i,{asModule:!0});const t=async a=>{const c=s.current;c.style={opacity:1}};return d.useEffect(()=>{const a=s.current;return a==null||a.addEventListener(U.FirstInteractive,t),()=>{a==null||a.removeEventListener(U.FirstInteractive,t)}},[u]),k(I,{children:k("tableau-viz",{ref:s,src:n,class:C("transition-opacity motion-reduce:transition-none",l),id:u,instanceIdToClone:m,toolbar:R,"hide-tabs":f,style:{opacity:0}})})},g=d.forwardRef(F);g.displayName="TableauEmbed";const _="https://public.tableau.com/views/DataSchoolproject2_0/Superstore",j=()=>k("div",{className:"flex justify-center w-full",children:k(g,{viewUrl:_,debug:!0})}),B=j;export{j as PublicBasicEmbedExample,B as default};
