import{e as n,C as e}from"./Component-5b523363.js";import{_ as a,a7 as o,q as t,a as s,a6 as i,J as l}from"./docs-4dbfcb03.js";import{u as r}from"./useField-7507ff0e.js";import{B as m}from"./Button-3bcd83a4.js";import"./Typography-fb81b959.js";function d(n){var{disabled:e,onchange:i,defaultValue:l,validation:m}=n,d=a(n,["disabled","onchange","defaultValue","validation"]);const{loading:u}=o(),{state:p}=r("");return{type:t,props:{...d,value:p,disabled:()=>s(e)||s(u),onchange:n=>{p.value=n,null==i||i(n)}}}}var u=[n({id:"values",title:"values",description:"This example shows the form radio box working.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport {\n  Form,\n  FormRadiobox,\n  Button,\n  notify,\n  Notifications,\n  RadioItem,\n} from '@cantinc/ui'\n\nconst values: RadioItem[] = [\n  { value: '1', label: 'Test 1' },\n  { value: '2', label: 'Test 2' },\n  { value: '3', label: 'Test 3' },\n]\n\ninnet(\n  <>\n    <Form\n      onsuccess={form => notify(\n        Array.from(form.fields)[0].state.value,\n      )}\n      vertical>\n      <FormRadiobox\n        vertical\n        defaultValue='1'\n        values={values}\n        name='values'\n      />\n      <Button>\n        Test\n      </Button>\n    </Form>\n    <Notifications />\n  </>,\n  dom,\n)",example:{type:i,props:{onsuccess:n=>l(Array.from(n.fields)[0].state.value),vertical:!0},children:[{type:d,props:{vertical:!0,defaultValue:"1",values:[{value:"1",label:"Test 1"},{value:"2",label:"Test 2"},{value:"3",label:"Test 3"}],name:"values"}},{type:m,children:["Test"]}]}})],p=()=>({type:e,props:{component:d,name:"FormRadiobox",description:"# FormRadiobox\n\nUse this component to add a radio box in a form.\n\n```typescript\nimport { FormRadiobox } from '@cantinc/ui'\n```\n",examples:u}});export{p as default};