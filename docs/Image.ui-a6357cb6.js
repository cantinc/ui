import{e as n,C as e}from"./Component-8e718c3a.js";import{I as o}from"./Image-ca104bf7.js";import{I as r}from"./docs-c7a99efa.js";import"./Typography-21d0fa4f.js";var a=[n({id:"default",title:"Default",description:"Elements which inside `Flex` are placed horizontal by default.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Image, Icon } from '@cantinc/ui'\n\nimport background from './background.jpg'\n\ninnet(\n  <Image\n    justify='center'\n    align='center'\n    src={background}\n    radius={70}\n    size={140}>\n    <Icon\n      color='var(--color-100)'\n      size={32}>\n      13\n    </Icon>\n  </Image>,\n  dom,\n)",example:{type:o,props:{justify:"center",align:"center",src:"/ui/assets/background2-d93ba392.jpg",radius:70,size:140},children:[{type:r,props:{color:"var(--color-100)",size:32},children:["13"]}]}})],i=()=>({type:e,props:{component:o,name:"Image",description:"# Image\n\n```typescript\nimport { Image } from '@cantinc/ui'\n```\n\n## Dependencies\n\n- [Flex](/ui/layout/flex)\n",examples:a}});export{i as default};