import{e as n,C as o}from"./Component-a91cba9b.js";import{T as r}from"./Typography-af300282.js";import{M as e}from"./docs-3e04aeb9.js";var p=[n({id:"default",title:"Default",description:"Override [Markdown](/typography/markdown) to remove spaces around\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Markdown, Typography } from '@cantinc/ui'\n\ninnet(\n  <Typography>\n    <Markdown text='### Markdown header' />\n  </Typography>,\n  dom,\n)",example:{type:r,children:[{type:e,props:{text:"### Markdown header"}}]}})],a=()=>({type:o,props:{component:r,name:"Typography",description:"# Typography\n\nThis component is a container for articles, news or another typography text.\n\n\n```typescript\nimport { Typography } from '@cantinc/ui'\n```\n",examples:p}});export{a as default};