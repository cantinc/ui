import{e,C as t}from"./Component-8e718c3a.js";import{_ as a,Z as n,l as s}from"./docs-c7a99efa.js";import{s as l}from"./stringifySearch.es6-02255cbb.js";import{T as o}from"./Tags-fe4713bb.js";import"./Typography-21d0fa4f.js";function r(e){var{key:t,onchange:r,multiple:i}=e,p=a(e,["key","onchange","multiple"]);return{type:o,props:{...p,multiple:i,value:()=>{const e=n.value[t]||"";return Array.isArray(e)||"object"!=typeof e?i?Array.isArray(e)?e:e?[e]:[]:Array.isArray(e)?e[0]:e:""},onchange:e=>{console.log(e);const a=l(Object.assign(Object.assign({},n.value),{[t]:Array.isArray(e)&&1===e.length?e[0]:e||void 0}),{addQueryPrefix:!0});s.push(`${s.path}${a}`,-1),null==r||r(e)}}}}var i=[e({id:"default",title:"Default",description:"Try to select something and look at URL.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { ITags, SearchTags } from '@cantinc/ui'\n\nconst values: ITags = [\n  { value: '', label: 'None' },\n  { value: 'test1', label: 'Test 1' },\n  { value: 'test2', label: 'Test 2' },\n  { value: 'test3', label: 'Test 3' },\n]\n\ninnet(\n  <SearchTags values={values} key='test' />,\n  dom,\n)",example:{type:r,props:{values:[{value:"",label:"None"},{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"},{value:"test3",label:"Test 3"}],key:"test"}}}),e({id:"multiple",title:"multiple",description:"You can make `multiple` selection.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { ITags, SearchTags } from '@cantinc/ui'\n\nconst values: ITags = [\n  { value: 'test1', label: 'Test 1' },\n  { value: 'test2', label: 'Test 2' },\n  { value: 'test3', label: 'Test 3' },\n]\n\ninnet(\n  <SearchTags multiple values={values} key='multiple' />,\n  dom,\n)",example:{type:r,props:{multiple:!0,values:[{value:"",label:"All"},{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"},{value:"test3",label:"Test 3"}],key:"multiple"}}})],p=()=>({type:t,props:{component:r,name:"SearchTags",description:"# SearchTags\n\nUse this component to bind tags value to search query string.\n\n```typescript\nimport { SearchTags } from '@cantinc/ui'\n```\n\n## Dependencies\n\n- [Tags](/ui/interaction/tags)\n",examples:i}});export{p as default};