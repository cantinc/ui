import{u as e,R as a,_ as t,S as r,o as s,s as u,a3 as o}from"./docs-4dbfcb03.js";import{I as n}from"./Input-c4b92b3d.js";const i=u(o);function l(u={}){var{resize:o="auto",rows:l=4,inputRef:p=new a}=u,c=t(u,["resize","rows","inputRef"]);const d=i(),v=function(){const a=e();return e=>(a&&(e.children=a),e)}();let f;const m=new r(0),b=()=>{var e;m.value=0,m.value=Number(null===(e=p.value)||void 0===e?void 0:e.scrollHeight)};if(o)if("auto"===o){f=()=>`--ui-textarea-min:${20*l}px;--ui-textarea-autosize:${m.value}px;`;const e=setTimeout(b);s((()=>clearTimeout(e)))}else f=()=>`--ui-textarea-resize:${!0===o?"both":o};`;return v({type:n,props:{inputRef:p,...c,class:d,renderInput:e=>{var{oninput:a}=e,r=t(e,["oninput"]);return{type:"textarea",props:{rows:l,style:f,required:r.required,placeholder:r.placeholder,ref:r.ref,name:r.name,disabled:r.disabled,oninput:e=>{a(e),b()},_value:r._value,"data-value":r["data-value"],class:r.class},children:[r.value]}}}})}export{l as T};