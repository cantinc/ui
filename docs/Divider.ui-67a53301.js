import{e as n,C as i}from"./Component-a91cba9b.js";import{l as t}from"./docs-3e04aeb9.js";import{B as e}from"./Button-81a7507a.js";import"./Typography-af300282.js";var o=n({id:"button",title:"Button",description:"Divider can have children\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Divider, Button } from '@cantinc/ui'\n\ninnet(\n  <Divider>\n    <Button>\n      Content\n    </Button>\n  </Divider>,\n  dom,\n)",example:{type:t,children:[{type:e,children:["Content"]}]}}),r=n({id:"content",title:"Content",description:"Divider can have children\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Divider } from '@cantinc/ui'\n\ninnet(\n  <Divider>\n    Content\n  </Divider>,\n  dom,\n)",example:{type:t,children:["Content"]}}),d=[n({id:"default",title:"Default",description:"By default, shows a usual divider\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Divider } from '@cantinc/ui'\n\ninnet(\n  <Divider />,\n  dom,\n)",example:{type:t}}),r,o],m=()=>({type:i,props:{component:t,name:"Divider",description:"# Divider\n\nUse this component to add horizontal rule.\n\n```typescript\nimport { Divider } from '@cantinc/ui'\n```\n",examples:d}});export{m as default};