import{e as t,C as n}from"./Component-d6910b8d.js";import{_ as e,X as a,aD as o,l as p}from"./docs-9c5485ea.js";import{s as i}from"./stringifySearch.es6-badcb67d.js";import{u as r}from"./useChildrenProvider-1b74ddec.js";import{I as s}from"./InputDate-fa819043.js";import"./Typography-794137ee.js";import"./InputMask-065d3261.js";import"./Input-1a0d9d5e.js";function u(t){var{key:n,oninput:u}=t,m=e(t,["key","oninput"]);return r()({type:s,props:{...m,value:()=>a.value[n]?new Date(String(a.value[n])):void 0,oninput:t=>{const e=i(Object.assign(Object.assign({},a.value),{[n]:t&&o(t)}),{addQueryPrefix:!0});p.push(`${p.path}${e}`,-1),null==u||u(t)}}})}var m=[t({id:"default",title:"Default",description:"Try to input something and look at URL.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { SearchInputDate } from '@cantinc/ui'\n\ninnet(\n  <SearchInputDate key='test' />,\n  dom,\n)",example:{type:u,props:{key:"test"}}})],d=()=>({type:n,props:{component:u,name:"SearchInputDate",description:"# SearchInputDate\n\nUse this component to bind input value to search.\n\n```typescript\nimport { SearchInputDate } from '@cantinc/ui'\n```\n\n## Dependencies\n\n- [InputDate](/interaction/input-date)\n",examples:m}});export{d as default};