import{e as n,C as e}from"./Component-d6910b8d.js";import{I as t}from"./InputNumber-5967c46e.js";import"./docs-9c5485ea.js";import"./Typography-794137ee.js";import"./Input-1a0d9d5e.js";var p=n({id:"default",title:"Default",description:"Default view.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { InputNumber } from '@cantinc/ui'\n\ninnet(\n  <InputNumber />,\n  dom,\n)",example:{type:t}}),o=n({id:"label",title:"label",description:"You can use `label` from [Input](/interaction/input#labelPlaceholder)\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { InputNumber } from '@cantinc/ui'\n\ninnet(\n  <InputNumber label='Label' />,\n  dom,\n)",example:{type:t,props:{label:"Label"}}}),m=[p,n({id:"step",title:"step",description:"Use `step` to control step of changes by icons.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { InputNumber } from '@cantinc/ui'\n\ninnet(\n  <InputNumber step={0.1} />,\n  dom,\n)",example:{type:t,props:{step:.1}}}),o],i=()=>({type:e,props:{component:t,name:"InputNumber",description:"# InputNumber\n\nUse the component to add input number element.\n\n```typescript\nimport { InputNumber } from '@cantinc/ui'\n```\n\n## Dependencies\n\n- [Input](/interaction/input)\n\n## Dependents\n\n- [FormInputNumber](/forms/input-number)\n- [SearchInputNumber](/search/input-number)\n",examples:m}});export{i as default};