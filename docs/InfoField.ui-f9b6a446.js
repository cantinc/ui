import{e,C as n}from"./Component-c6300f87.js";import{_ as o,F as a,s as l,aH as t,u as i}from"./docs-b93caad8.js";import"./Typography-840ee348.js";const p=l(t);function s(e){var{label:n,value:l}=e,t=o(e,["label","value"]);const s=i(),r=p();return{type:a,props:{wrap:!0,...t,class:()=>r.root},children:[{type:"show",props:{when:n},children:[{type:"div",props:{class:()=>r.label},children:[n]}]},l," ",s]}}var r=[e({id:"default",title:"Default",description:"By default, do nothing on click\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { InfoField } from '@cantinc/ui'\n\ninnet(\n  <InfoField label='Label' value='Value' />,\n  dom,\n)",example:{type:s,props:{label:"Label",value:"Value"}}})],c=()=>({type:n,props:{component:s,name:"InfoField",description:"# InfoField\n\nThis component shows a field value.\n\n```typescript\nimport { InfoField } from '@cantinc/ui'\n```\n\n## Dependencies\n\n- [Flex](/ui/layout/flex)\n",examples:r}});export{c as default};