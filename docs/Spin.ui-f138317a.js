import{e,C as t}from"./Component-5b523363.js";import{F as n,C as i}from"./docs-4dbfcb03.js";import"./Typography-fb81b959.js";var p=e({id:"center",title:"Center",description:"By default, shows a spinner\n",code:"<Flex vertical align='stretch' style='width:200px;height:200px;background:var(--color-60)'>\n  <Spin flex align='center' justify='center' />\n</Flex>",example:{type:n,props:{vertical:!0,align:"stretch",style:"width:200px;height:200px;background:var(--color-60)"},children:[{type:i,props:{flex:!0,align:"center",justify:"center"}}]}}),r=e({id:"default",title:"Default",description:"By default, shows a spinner\n",example:{type:i}}),s=e({id:"gap",title:"Gap",description:"By default, shows a spinner\n",example:{type:i,props:{gap:32}}}),a=[r,e({id:"vertical",title:"Vertical",description:"By default, shows a spinner\n",example:{type:i,props:{vertical:!0}}}),s,p],o=()=>({type:t,props:{component:i,name:"Spin",description:"# Spin\n\nUse this component to show a spinner while it's loading\n\n```typescript\nimport { Spin } from '@cantinc/ui'\n```\n",examples:a}});export{o as default};