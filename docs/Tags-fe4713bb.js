import{S as e,_ as a,e as l,F as n,ag as u,af as o,a as s,u as r}from"./docs-c7a99efa.js";function c(c={}){var{values:t,multiple:v,value:p=new e(v?[]:""),onchange:i}=c,h=a(c,["values","multiple","value","onchange"]);const d=r();return i=l(p,i),{type:n,props:{gap:8,...h},children:[{type:"for",props:{of:t,key:"value"},children:[e=>{const a=u((()=>e.value));return{type:o,props:{...a,checked:()=>{const e=s(p);return v?a.value?e.includes(a.value):0===e.length:e===a.value},onchange:e=>{var l;i&&(v?e?a.value?i([...s(p),a.value]):i([]):i(s(p).filter((e=>e!==a.value))):i(a.value)),null===(l=a.onchange)||void 0===l||l.call(a,e)},type:v?"checkbox":"radio"}}}]},d]}}export{c as T};