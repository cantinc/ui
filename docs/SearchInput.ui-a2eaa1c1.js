import{e as n,C as t}from"./Component-c2d1f5f9.js";import{_ as e,Z as o,l as r,I as i}from"./docs-dcf3a74d.js";import{s as p}from"./stringifySearch.es6-57a8e9c6.js";import{u as a}from"./useChildrenProvider-a3a18efd.js";import{I as s}from"./Input-a4bcaf42.js";import"./Typography-0005af32.js";function m(n){var{key:t,oninput:i}=n,m=e(n,["key","oninput"]);return a()({type:s,props:{...m,value:()=>String(o.value[t]||""),oninput:n=>{const e=p(Object.assign(Object.assign({},o.value),{[t]:n||void 0}),{addQueryPrefix:!0});r.push(`${r.path}${e}`,-1),null==i||i(n)}}})}var c=n({id:"before",title:"before",description:"Try to input something and look at URL.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { SearchInput, Icon } from '@cantinc/ui'\n\ninnet(\n  <SearchInput key='test'>\n    <slot name='before'>\n      <Icon />\n    </slot>\n  </SearchInput>,\n  dom,\n)",example:{type:m,props:{key:"test"},children:[{type:"slot",props:{name:"before"},children:[{type:i}]}]}}),u=[n({id:"default",title:"Default",description:"Try to input something and look at URL.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { SearchInput } from '@cantinc/ui'\n\ninnet(\n  <SearchInput key='test' />,\n  dom,\n)",example:{type:m,props:{key:"test"}}}),c],d=()=>({type:t,props:{component:m,name:"SearchInput",description:"# SearchInput\n\nUse this component to bind input value to search.\n\n```typescript\nimport { SearchInput } from '@cantinc/ui'\n```\n\n## Dependencies\n\n- [Input](/interaction/input)\n",examples:u}});export{d as default};