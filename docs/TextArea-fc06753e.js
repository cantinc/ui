import{R as e,_ as a,S as l,o as u,a0 as t,s as i,ar as s,as as o}from"./docs-b93caad8.js";const r=i(s);function n(i={}){var{resize:s="auto",rows:n=4,style:v,inputRef:d=new e}=i,c=a(i,["resize","rows","style","inputRef"]);const p=r(),b=o(),m=new l(0),f=()=>{var e,a,l,u,t,i;const s=Number(null===(e=d.value)||void 0===e?void 0:e.scrollHeight);if(s!==Number(null===(a=d.value)||void 0===a?void 0:a.clientHeight))m.value=s;else{m.value--;let e=Number(null===(l=d.value)||void 0===l?void 0:l.scrollHeight),a=Number(null===(u=d.value)||void 0===u?void 0:u.clientHeight);if(e===a){for(;(e=Number(null===(t=d.value)||void 0===t?void 0:t.scrollHeight))===(a=Number(null===(i=d.value)||void 0===i?void 0:i.clientHeight));)if(m.value-=10,m.value<0){m.value=0;break}m.value=e}else m.value++}};if("auto"===s){const e=setTimeout(f);u((()=>clearTimeout(e)))}return b({type:t,props:{inputRef:d,...c,class:p,renderInput:e=>{var{oninput:l}=e,u=a(e,["oninput"]);return{type:"textarea",props:{rows:n,style:Object.assign(Object.assign({},v),{"--ui-textarea-resize":s&&"auto"!==s?!0===s?"both":s:"","--ui-textarea-min":s&&"auto"===s?20*n+"px":"","--ui-textarea-autosize":s&&"auto"===s?()=>`${m.value}px`:""}),required:u.required,placeholder:u.placeholder,ref:u.ref,name:u.name,disabled:u.disabled,oninput:e=>{l(e),"auto"===s&&f()},_value:u._value,"data-value":u["data-value"],class:u.class},children:[u.value]}}}})}export{n as T};