import{e as n,C as o}from"./Component-c6300f87.js";import{T as r}from"./Typography-840ee348.js";import{M as e}from"./docs-b93caad8.js";var p=[n({id:"default",title:"Default",description:"Override [Markdown](/ui/typography/markdown) to remove spaces around\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Markdown, Typography } from '@cantinc/ui'\n\ninnet(\n  <Typography>\n    <Markdown text='### Markdown header' />\n  </Typography>,\n  dom,\n)",example:{type:r,children:[{type:e,props:{text:"### Markdown header"}}]}})],t=()=>({type:o,props:{component:r,name:"Typography",description:"# Typography\n\nThis component is a container for articles, news or another typography text.\n\n\n```typescript\nimport { Typography } from '@cantinc/ui'\n```\n",examples:p}});export{t as default};