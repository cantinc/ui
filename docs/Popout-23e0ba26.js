import{_ as e,R as t,g as o,h as n,a5 as s,a6 as a,S as u,a7 as r,a8 as l,o as d,c as i,F as c,u as p,e as h,s as v,a9 as y}from"./docs-9c5485ea.js";const w=v(y);let g=0;const b=()=>{const e=document.createElement("span").style;return e.setProperty("border-radius","20px"),e};function f(h){var{element:v,style:y,contentStyle:f,onhide:m,rootRef:$=new t}=h,x=e(h,["element","style","contentStyle","onhide","rootRef"]);const R=p(),S=o(),j=n(),C=n(200),{touched:O,touchHide:T,handleTouchStart:k,handleTouchMove:E,handleTouchEnd:H}=s({hide:m,touchStart(){B.value=P()}}),M=w();a(m);const P=()=>{var e;return(null===(e=null==v?void 0:v.value)||void 0===e?void 0:e.isConnected)?{rect:v.value.getBoundingClientRect(),styles:window.getComputedStyle(v.value)}:{rect:new DOMRect(window.innerWidth/2,window.innerHeight/2,0,0),styles:b()}},B=new u(P());return S&&new r((()=>{S.value&&(B.value=P())})),g||l("hidden"),g++,d((()=>{g--,g||l("")})),{type:"div",props:{ref:$,style:Object.assign(Object.assign({},y),{"--ui-popout-top":()=>`${B.value.rect.top}px`,"--ui-popout-left":()=>`${B.value.rect.left}px`,"--ui-popout-width":()=>`${B.value.rect.width}px`,"--ui-popout-height":()=>`${B.value.rect.height}px`,"--ui-popout-radius":()=>`${B.value.styles.borderRadius}`,"--ui-popout-border":()=>`${B.value.styles.border}`,"--ui-popout-touch-hide":()=>`${T.value}`,"--ui-popout-background":()=>`${B.value.styles.background}`}),ontouchstart:k,ontouchmove:E,ontouchend:H,class:()=>i([M.root,j.value&&M.preshow,C.value&&M.show,(null==S?void 0:S.value)&&M.hide,O.value&&M.touch])},children:[{type:c,props:{...x,style:f,class:()=>M.content},children:[R]}]}}function m(o){var{show:n=!0,onhide:s}=o,a=e(o,["show","onhide"]);const u=p(),r=new t,l=h(n,s);return{type:"show",props:{state:n},children:[{type:"portal",props:{parent:document.body},children:[{type:"delay",props:{ref:r,hide:600},children:[{type:f,props:{onhide:()=>null==l?void 0:l(!1),...a},children:[u]}]}]}]}}export{m as P};