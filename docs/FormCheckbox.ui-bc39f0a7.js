import{e,C as n}from"./Component-d6910b8d.js";import{_ as o,as as r,ac as t,aq as s,V as a,B as i}from"./docs-9c5485ea.js";import{u as c}from"./useField-d1ad76e0.js";import"./Typography-794137ee.js";function m(e){var{ref:n,disabled:s,onchange:a}=e,i=o(e,["ref","disabled","onchange"]);const{loading:m}=r(),{state:p,element:l}=c("false",n);return{type:t,props:{...i,ref:l,checked:()=>"true"===p.value,disabled:s||(()=>m.value),onchange:e=>{p.value=e?"true":"false",null==a||a(p.value)}}}}var p=[e({id:"default",title:"Default",description:"This example shows the form checkbox working.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Form, FormCheckbox, Button, Notifications } from '@cantinc/ui'\n\ninnet(\n  <>\n    <Form\n      onsuccess={form => notify(\n        Array.from(form.fields)[0].state.value,\n      )}\n      vertical>\n      <FormCheckbox\n        label='Subscribe for news'\n        name='subscribe'\n      />\n      <Button>\n        Test\n      </Button>\n    </Form>\n    <Notifications />\n  </>,\n  dom,\n)",example:{type:s,props:{onsuccess:e=>a(Array.from(e.fields)[0].state.value),vertical:!0},children:[{type:m,props:{label:"Subscribe for news",name:"subscribe"}},{type:i,children:["Test"]}]}})],l=()=>({type:n,props:{component:m,name:"FormCheckbox",description:"# FormCheckbox\n\nUse this component to add a checkbox in a form.\n\n```typescript\nimport { FormCheckbox } from '@cantinc/ui'\n```\n",examples:p}});export{l as default};