import{e as n,C as e}from"./Component-a91cba9b.js";import{_ as t,U as o,k as r,I as a}from"./docs-3e04aeb9.js";import{s as p}from"./stringifySearch.es6-87f0eeb4.js";import{u as i}from"./useChildrenProvider-bd76d078.js";import{I as s}from"./InputMask-2bcdab35.js";import"./Typography-af300282.js";import"./Input-a8f874de.js";function m(n){var{key:e,oninput:a}=n,m=t(n,["key","oninput"]);return i()({type:s,props:{...m,value:()=>String(o.value[e]||""),oninput:n=>{const t=p(Object.assign(Object.assign({},o.value),{[e]:n||void 0}),{addQueryPrefix:!0});r.push(`${r.path}${t}`),null==a||a(n)}}})}var c=n({id:"before",title:"before",description:"Use before to add content before.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { SearchInputMask, Icon } from '@cantinc/ui'\n\ninnet(\n  <SearchInputMask mask='+7 (999) 999-99-99' key='before'>\n    <slot name='before'>\n      <Icon />\n    </slot>\n  </SearchInputMask>,\n  dom,\n)",example:{type:m,props:{mask:"+7 (999) 999-99-99",key:"before"},children:[{type:"slot",props:{name:"before"},children:[{type:a}]}]}}),u=[n({id:"default",title:"Default",description:"Try to input something and look at URL.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { SearchInputMask } from '@cantinc/ui'\n\ninnet(\n  <SearchInputMask key='test' />,\n  dom,\n)",example:{type:m,props:{mask:"+7 (999) 999-99-99",key:"test"}}}),c],d=()=>({type:e,props:{component:m,name:"SearchInput",description:"# SearchInputMask\n\nUse this component to bind input value to search.\n\n```typescript\nimport { SearchInputMask } from '@cantinc/ui'\n```\n\n## Extends\n\n- [InputMask](/interaction/input-mask)\n",examples:u}});export{d as default};