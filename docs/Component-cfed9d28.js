import{_ as e,i as o,c as t,a as n,s,b as l,R as a,S as i,d as r,e as p,f as c,g as d,h as u,o as h,F as v,j as y,u as b,k as g,n as m,D as _,M as x,l as w,H as f}from"./docs-ec277aa5.js";import{T as C}from"./Typography-4afc4693.js";const j=s(l);function k(s={}){var{direction:l="down",style:a,color:i,size:r=18}=s,p=e(s,["direction","style","color","size"]);const c=j();return{type:"span",props:{...p,style:Object.assign(Object.assign({},a),{"--ui-arrow-color":i||"","--ui-arrow-size":o(r,(e=>`${e}px`))}),class:()=>t([c.root,c[n(l)]])}}}const T=s(c);function*O(t={}){var n,{ref:s=new a,style:l,open:c=new i(!1),onToggle:d}=t,u=e(t,["ref","style","open","onToggle"]);const{"":h,summary:v}=r(),y=T(),b=new i(0);let g=0;d=p(c,d),yield{type:"details",props:{...u,style:Object.assign(Object.assign({},l),{height:o(b,(e=>`${e}px`))}),ontoggle:e=>{var o,t,n,l,a;(null===(o=s.value)||void 0===o?void 0:o.open)&&(b.value=(null===(t=s.value)||void 0===t?void 0:t.scrollHeight)||0),null==d||d((null===(n=s.value)||void 0===n?void 0:n.open)||!1),null===(a=(l=u).ontoggle)||void 0===a||a.call(l,e)},ref:s,class:()=>y.root},children:[v&&{type:"summary",props:{onclick:e=>{const o=s.value;(null==o?void 0:o.open)&&(e.preventDefault(),b.value=g,setTimeout((()=>{o.open=!1}),300))},class:()=>y.summary},children:[{type:k,props:{class:()=>y.arrow,size:16,direction:()=>b.value===g?"right":"down"}},v]}," ",h]},g=(null===(n=s.value)||void 0===n?void 0:n.scrollHeight)||0,b.value=g}const $=s(y);function z(s={}){var{onclick:l,clickable:a=!!l,loading:r,preventAnimation:p,width:c,height:y,style:g}=s,m=e(s,["onclick","clickable","loading","preventAnimation","width","height","style"]);const _=b(),x=d(),w=$(),f=u(),C=new i(!1);let j;const k=()=>[w.root,n(a)&&w.clickable,n(r)&&w.loading];if(p)j=()=>t([k,w.show,w.shown]);else{const e=setTimeout((()=>{C.value=!0}),600);h((()=>clearTimeout(e))),j=()=>t([k,f.value&&w.show,C.value&&w.shown,(null==x?void 0:x.value)&&w.hide])}return{type:v,props:{onclick:l,padding:18,...m,style:Object.assign(Object.assign({},g),{"--ui-card-width":o(c,(e=>e?`${e}px`:"")),"--ui-card-height":o(y,(e=>e?`${e}px`:""))}),class:j},children:[{type:"show",props:{state:o(r,(e=>!e))},children:[_]}]}}const A=s(g);function*D(e){var o;const t=A(),n=b(),s=new a;yield{type:v,props:{gap:24,wrap:!0,...e,ref:s,class:t.root},children:[n]},null===(o=s.value)||void 0===o||o.style.setProperty("--ui-cards-top",`${(()=>{var e;return null===(e=s.value)||void 0===e?void 0:e.getBoundingClientRect().top})()}px`)}var H="Component_example__1b2730bb",R="Component_active__1b2730bb",W="Component_exampleWrapper__1b2730bb";function B(e){return e}function E({component:e,examples:o,props:t,description:n}){return console.log(e,t),{type:_,props:{gap:16},children:[n&&{type:C,children:[{type:x,props:{text:n}}]}," ",o&&[{type:"h2",children:["Examples"]},{type:D,children:[o.map((({id:e,example:o,title:t,description:n,code:s})=>({type:z,props:{preventAnimation:!0,class:()=>[H,w.hash===e&&R],vertical:!0,id:e,align:"stretch"},children:[t||n?{type:C,children:[t&&{type:"h3",children:[{type:"a",props:{href:`#${e}`},children:[t]}]}," ",n&&{type:x,props:{text:n}}]}:null,{type:"div",props:{class:W},children:[o]},s&&{type:O,children:[{type:"slot",props:{name:"summary"},children:["Code"]},{type:f,props:{code:s,language:"tsx"}}]}]})))]}]]}}m(".Component_example__1b2730bb{box-sizing:border-box;width:100%}.Component_example__1b2730bb.Component_active__1b2730bb,.Component_example__1b2730bb:target{border:1px solid var(--color-green)}.Component_exampleWrapper__1b2730bb{padding:8px 0}",{});export{k as A,E as C,O as D,z as a,D as b,B as e};