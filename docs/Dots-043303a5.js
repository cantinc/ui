import{S as e,_ as s,a5 as a,a as o,o as t,G as l,F as n,i as r,c as u,s as c,ae as i,u as p}from"./docs-7acb2a50.js";import{u as v}from"./unwatch.es6-9286931d.js";import{a as d}from"./Component-873f34f9.js";const m=c(i);function g(c){var{ref:i,count:g,autoscroll:f,style:w,size:y=12,progress:h,value:T=new e(0),onchange:j,onend:b,circular:z}=c,$=s(c,["ref","count","autoscroll","style","size","progress","value","onchange","onend","circular"]);const x=m(),O=p();let S;j=d(T,j);let k=!1;const A=new e(.3),C=new e,D=new e(0);new a((()=>{const e=o(T);if(o(f)&&!k&&v((()=>C.value))===e)return C.value=e-1,void setTimeout((()=>{C.value=e}));C.value=e})),new a((()=>{const e=o(f);e?new a((()=>{k=!1,clearTimeout(S);const s=o(T);A.value=.3,D.value=s+1,S=setTimeout((()=>{const s=!0===e?1e4:e;A.value=s/1e3;const a=D.value;C.value=a,S=setTimeout((()=>{k=!0,a===g?(null==b||b(),z&&(null==j||j(0))):null==j||j(a)}),s)}),1e3)})):clearTimeout(S)})),t((()=>clearTimeout(S)));const F=new l((()=>(o(f)?C.value:C.value+1)/g)),G=[...new Array(g)].map(((e,s)=>s));return{type:n,props:{gap:8,...$,ref:i,style:Object.assign(Object.assign({},w),{"--ui-dots-progress":r(F,String),"--ui-dots-size":r(y,(e=>`${e}px`)),"--ui-dots-transition":()=>`${A.value}s`,"--ui-dots-left":h?"0":()=>`calc(100% * ${(o(f)?D.value/g:F.value)-1/g})`}),class:()=>x.root},children:[G.map((e=>({type:"div",props:{class:()=>u([x.dot,o(T)===e&&x.active]),onclick:()=>null==j?void 0:j(e)},children:[null==O?void 0:O[0](e)]}))),{type:n,props:{gap:8,...$,class:()=>x.progress},children:[G.map((e=>({type:"div",props:{class:()=>x.dotProgress},children:[null==O?void 0:O[0](e)]})))]}]}}export{g as D};