import{e,C as n}from"./Component-d6910b8d.js";import{_ as o,l as a}from"./docs-9c5485ea.js";import{T as r}from"./ToggleBar-ed46b107.js";import"./Typography-794137ee.js";function t(e){var{key:n}=e,t=o(e,["key"]);return{type:r,props:{...t,value:()=>a.getSearch(n)||"",element:"nav",renderValue:function({value:e,label:o},{className:a,onfocus:r,onblur:t}){return{type:"a",props:{onfocus:r,onblur:t,onmouseenter:r,onmousedown:e=>{e.preventDefault()},class:a,scrollTo:-1,href:e?`?${n}=${e}`:"?"},children:[null!=o?o:e]}}}}}var l=[e({id:"default",title:"Default",description:"Extends [ToggleBar](/interaction/toggle-bar)\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { SearchToggleBar } from '@cantinc/ui'\n\ninnet(\n  <SearchToggleBar\n    key='test'\n    values={[\n      { value: 'on' },\n      { value: '', label: 'auto' },\n      { value: 'off' },\n    ]}\n  />,\n  dom,\n)",example:{type:t,props:{key:"test",values:[{value:"on"},{value:"",label:"auto"},{value:"off"}]}}})],s=()=>({type:n,props:{component:t,name:"SearchToggleBar",description:"# \\<SearchToggleBar />\n\nUse this component to switch between values\n\n```typescript\nimport { SearchToggleBar } from '@cantinc/ui'\n```\n",examples:l}});export{s as default};