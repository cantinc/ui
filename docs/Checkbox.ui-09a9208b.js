import{e,C as n}from"./Component-5b523363.js";import{Z as t,F as o,S as i}from"./docs-4dbfcb03.js";import"./Typography-fb81b959.js";var a=e({id:"default",title:"Default",description:"You can switch state of checkbox by click.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Checkbox } from '@cantinc/ui'\n\ninnet(\n  <Checkbox />,\n  dom,\n)",example:{type:t}}),c=e({id:"disabled",title:"disabled",description:"`disabled` property makes `Checkbox` disabled.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Checkbox, Flex } from '@cantinc/ui'\n\ninnet(\n  <Flex inline wrap gap={16}>\n    <Checkbox disabled label='Label' />\n    <Checkbox disabled checked label='Label' />\n  </Flex>,\n  dom,\n)",example:{type:o,props:{inline:!0,wrap:!0,gap:16},children:[{type:t,props:{disabled:!0,label:"Label"}},{type:t,props:{disabled:!0,checked:!0,label:"Label"}}]}});const p=new i(!0);var l=[a,e({id:"label",title:"label",description:"`label` property of `Checkbox` adds a content after the checkbox. The content is clickable.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\nimport { State } from 'watch-state'\n\nimport { Checkbox } from '@cantinc/ui'\n\nconst state = new State(true)\n\ninnet(\n  <Checkbox\n    label={() => String(state.value)}\n    value={state}\n  />,\n  dom,\n)",example:{type:t,props:{label:()=>String(p.value),checked:p}}}),c],r=()=>({type:n,props:{component:t,name:"Checkbox",description:"# Checkbox\n\nUse this component to add a checkbox.\n\n```typescript\nimport { Checkbox } from '@cantinc/ui'\n```\n",examples:l}});export{r as default};