import{V as t,s as e,W as s,u as o,_ as n,d as l,R as a,S as r,I as i,X as c,o as u,c as d,F as p,Y as h}from"./docs-3e04aeb9.js";import{B as v}from"./Button-81a7507a.js";const y=e(s);function b(e){const s=o(),n=y();return{type:t,props:{justify:"center",align:"center",...e,class:()=>n.root},children:[s]}}const w=e(h);let f=0;function m(t={}){var{buttons:e,width:s,style:o,headButtons:h=["close"],buttonProps:y={},onclosed:b,onclose:m,onshow:g,onmousedown:j}=t,B=n(t,["buttons","width","style","headButtons","buttonProps","onclosed","onclose","onshow","onmousedown"]);const T=w(),x=l(),{"":$,title:k,content:O,subTitle:P}=x,_=n(x,["","title","content","subTitle"]),F=new a,I=new r(!1),M=new a,R=null==h?void 0:h.length,S=null==e?void 0:e.length;"button-close"in _||(_["button-close"]={type:i,props:{icon:"cross"}}),setTimeout((()=>{I.value=!0,null==g||g()}),300);const V=t=>{var e;if(null===(e=F.value)||void 0===e?void 0:e.value)return;const s=()=>null==b?void 0:b(t);if(m)return m(t,s);s()};return f||c("hidden"),f++,u((()=>{f--,f||c("")})),{type:"delay",props:{ref:F,hide:300},children:[{type:"div",props:{...B,style:Object.assign(Object.assign({},o),{"--ui-modal-width":s?`${s}px`:""}),ref:M,_close:()=>V,class:()=>{var t;return d([T.root,I.value&&T.show,(null===(t=F.value)||void 0===t?void 0:t.value)&&T.hide])}},children:[k?{type:"header",props:{class:T.header},children:[k||null," ",P&&{type:"div",props:{class:T.subTitle},children:[P]}]}:null," ",R?{type:"div",props:{class:T.headButtons},children:[h.map((t=>({type:"button",props:{...y[t],"data-button":t,onclick:()=>V(t),class:T.headButton},children:[_[`button-${t}`]||t]})))]}:null," ",O&&{type:"div",props:{class:T.content},children:[O]}," ",$," ",S?{type:p,props:{reverse:!0,justify:"center",wrap:!0,padding:16,gap:16},children:[e.map(((t,e)=>({type:v,props:{flex:!0,view:e?"secondary":"primary",...y[t],"data-button":t,onclick:()=>V(t)},children:[_[`button-${t}`]||t]})))]}:null]}]}}export{b as M,m as a};