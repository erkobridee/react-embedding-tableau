import{j as g,r as c,q as x,W as w,c as m,O as C,a as v,R as y,b,d as N}from"./vendor-57f3f943.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const e=g.jsx,l=g.jsxs;const k="/react-embedding-tableau/assets/tableau-0ab90c18.svg",E="/react-embedding-tableau/assets/vite-4a748afd.svg",L="/react-embedding-tableau/assets/react-35ef61ed.svg",M="/react-embedding-tableau/assets/typescript-c92aaa76.svg",S="/react-embedding-tableau/assets/tailwindcss-fee8c494.svg",T=t=>c.createElement("svg",{"aria-hidden":"true",className:"w-5 h-5 sm:w-6 sm:h-6",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},c.createElement("path",{d:"M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z",fill:"currentColor"})),O=t=>c.createElement("svg",{"aria-hidden":"true",className:"w-5 h-5 sm:w-6 sm:h-6",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},c.createElement("path",{d:"M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",fill:"currentColor"})),j=new Date().getFullYear(),p="Erko Bridee",u="POC-R+TEA",f="Proof Of Concept - React.js + Tableau Embedded Analytics",R="Tableau, Embedded Analytics, React, Vite, TypeScript, TailwindCSS",A=[{href:"https://www.tableau.com/",src:k,className:"tableau",alt:"Tableau"},{href:"https://vitejs.dev",src:E,className:"vite",alt:"Vite.js"},{href:"https://reactjs.org",src:L,className:"react",alt:"React"},{href:"https://www.typescriptlang.org/",src:M,className:"typescript",alt:"TypeScript"},{href:"https://tailwindcss.com/",src:S,className:"tailwindcss",alt:"TailwindCSS"}],P=[{href:"https://twitter.com/erkobridee",IconComponent:T,className:"twitter",alt:"Twitter @erkobridee"},{href:"https://github.com/erkobridee/react-embedding-tableau",IconComponent:O,className:"github",alt:"GitHub Repository"}],D={},H=({children:t})=>l(x,{context:D,children:[l(w,{children:[e("meta",{name:"description",content:f}),e("meta",{name:"keywords",content:R}),e("meta",{name:"author",content:p}),e("title",{children:u})]}),t]}),I=({children:t})=>e(H,{children:t}),i={HOME:"home",LANDING:"landing",CONTENT:"content"},B=()=>{const[t,r]=c.useState(!0);return c.useEffect(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)");r(n.matches);const o=()=>r(n.matches);return n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[]),t},V=(t,r)=>{const[n,o]=c.useState(()=>{try{const a=window.localStorage.getItem(t);return a?JSON.parse(a):r}catch{return r}});return[n,a=>{if(a!==void 0)try{window.localStorage.setItem(t,JSON.stringify(a)),o(a)}catch{o(a)}}]},F=()=>{const[t,r]=V("dark-mode",void 0),n=B(),o=t===void 0?n:t;return c.useEffect(()=>{if(window===void 0)return;const s=window.document.documentElement;s.classList.remove(o?"light":"dark"),s.classList.add(o?"dark":"light")},[o]),[o,r]},G=t=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",role:"img",...t},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"{2} ",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})),W=t=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",role:"img",...t},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"{2} ",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})),$=({className:t="hidden mt-1 mb-1 transition-transform ease-in-out focus:outline-none sm:block hover:text-accent hover:-translate-y-1 focus-visible:outline-accent"})=>{const[r,n]=F();return e("button",{"aria-label":r?"Activate Light Mode":"Activate Dark Mode",title:r?"Activate Light Mode":"Activate Dark Mode",onClick:()=>{n(!r)},className:m(t),children:r?e(G,{}):e(W,{})})},q=({type:t=i.CONTENT})=>l("header",{className:"lg:py8 flex items-center space-x-3 py-6 px-3 md:px-6 lg:space-x-6 lg:px-0",children:[e("div",{className:"flex-1",children:t!==i.HOME?e("span",{className:"font-bold",children:u}):null}),e("div",{className:"hidden md:block",children:"menu items"}),e($,{}),e("div",{className:"block lg:hidden",children:"navbar toggle"})]}),z=()=>e("main",{id:"content",role:"main",className:"flex-1 px-3 md:px-6 lg:px-0",children:e(C,{})}),h=c.forwardRef(({target:t,rel:r,href:n,children:o,...s},a)=>(t="_blank",r="noopener noreferrer",e("a",{...s,ref:a,target:t,rel:r,href:n,children:o||n})));h.displayName="ExternalLink";const J=({type:t=i.CONTENT})=>l("footer",{className:"py-6 lg:py-8",children:[t!==i.HOME?e("div",{className:"px-3 md:px-6 lg:px-0",children:"footer - general app info"}):null,e("hr",{className:"my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"}),l("div",{className:"flex flex-col justify-between space-y-6 px-6 md:flex-row md:space-y-0 lg:px-0",children:[l("div",{className:"flex-1 text-center text-sm text-gray-500 dark:text-gray-400 md:text-left",children:["© ",j," ",p,". All Rights Reserved."]}),e("div",{className:"flex justify-center space-x-6 lg:space-x-3",children:P.map(({href:r,IconComponent:n,className:o,alt:s})=>e(h,{href:r,className:m("h-5 w-5 text-gray-400 hover:text-gray-500 sm:h-6 sm:w-6",o),children:e(n,{})},s))})]})]}),Y=({type:t=i.CONTENT})=>l("div",{className:"flex h-full w-full flex-col",children:[e(q,{type:t}),e(z,{}),e(J,{type:t})]});const Z=()=>l("div",{className:"home flex flex-col space-y-5 py-20 text-center lg:h-full lg:justify-center lg:py-0",children:[l("h1",{className:"mb-5 border-b-2 pb-5",children:[e("b",{children:e("i",{children:u})})," ","- ",f]}),e("p",{className:"text-gray-600 dark:text-gray-400",children:"Tech Stack"}),e("div",{className:"flex justify-center space-x-5",children:A.map(({href:t,src:r,className:n,alt:o})=>e(h,{href:t,children:e("img",{src:r,className:m("logo",n),alt:`logo ${o}`})},o))}),e("p",{className:"text-gray-600 dark:text-gray-400",children:"Click on the logos to learn more"})]}),K=v([{path:"/",element:e(Y,{type:i.HOME}),children:[{index:!0,element:e(Z,{})}]}],{basename:"/react-embedding-tableau/"}),Q=()=>e(y,{router:K});b.createRoot(document.getElementById("root")).render(e(N.StrictMode,{children:e(I,{children:e(Q,{})})}));
