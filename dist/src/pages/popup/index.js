import{r,j as e,l as a,c as l}from"../../../assets/js/icon128.AQhJ292f.js";const d="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20fill='%2340d401'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='122.877px'%20height='101.052px'%20viewBox='0%200%20122.877%20101.052'%20enable-background='new%200%200%20122.877%20101.052'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281%20c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355%20c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766%20c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004%20c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63%20L4.43,63.63z'/%3e%3c/g%3e%3c/svg%3e",g="/assets/png/content-samples.chunk.png",p="/assets/png/content-usage.chunk.png",x=()=>{const[t,n]=r.useState(!1);return r.useEffect(()=>{o();const s=setInterval(o,3e3);function o(){chrome.tabs.query({active:!0,currentWindow:!0},function(i){chrome.tabs.sendMessage(i[0].id,{type:"__KONVA_DEVTOOLS__REQUEST_DETECTION"},function(c){n(c),c&&clearInterval(s)})})}return()=>{clearInterval(s)}},[]),e.jsx("div",{className:"App",children:t?e.jsxs(e.Fragment,{children:[e.jsxs("b",{children:[e.jsx("img",{className:"check-icon",src:d}),"Konva is detected",e.jsx("br",{})]}),"Open DevTools and look for the Konva panel."]}):e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10},children:[e.jsx("img",{className:"pulse",src:a,width:32}),"Looking for Konva..."]}),e.jsxs("div",{children:["Using ",e.jsx("strong",{style:{color:"#0f83cd"},children:"Konva"}),"?"]}),e.jsx("div",{style:{marginTop:8},children:"After creating Konva app. Make sure to set it to Window object. Try to log it to console:"}),e.jsx("img",{style:{width:"100%"},src:g}),e.jsx("div",{style:{marginTop:8,marginBottom:8},children:"There're 2 ways of using Konva, if you're using the second one (Way 2) please follow as below:"}),e.jsx("img",{style:{width:"100%"},src:p})]})})};function m(){const t=document.querySelector("#app");if(!t)throw new Error("Can not find #app");l(t).render(e.jsx(x,{}))}m();
