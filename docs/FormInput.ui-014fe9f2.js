import{e as n,C as t}from"./Component-cfed9d28.js";import{F as e}from"./FormInput-8b4f2375.js";import{an as o,B as i,F as r}from"./docs-ec277aa5.js";import{o as a}from"./useField-2f755769.js";import{m}from"./minLength.es6-421b5898.js";import"./Typography-4afc4693.js";import"./Input-3f46a5c2.js";var p=n({id:"default",title:"Default",description:"By default, do nothing on click\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport {\n  Form,\n  FormInput,\n  Button,\n} from '@cantinc/ui'\n\ninnet(\n  <Form notification='Success' vertical>\n    <FormInput name='name' label='Name' required />\n    <Button>\n      Send\n    </Button>\n  </Form>,\n  dom,\n)",example:{type:o,props:{notification:"Success",vertical:!0},children:[{type:e,props:{name:"name",label:"Name",required:!0}},{type:i,children:["Send"]}]}});const l=a([m(5)]);var c=[p,n({id:"validation",title:"validation",description:"By default, do nothing on click\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Button, Flex, Form, FormInput } from '@cantinc/ui'\nimport { minLength, optional } from '@cantinc/utils'\n\nconst minValidator = optional<any, string>([minLength(5)])\n\ninnet(\n  <Form align='stretch' notification='Success' vertical>\n    <Flex wrap flex gap={16}>\n      <FormInput label='Name' flex required name='name' />\n      <FormInput validation={minValidator} label='Surname' flex name='surname' />\n    </Flex>\n    <Button>\n      Send\n    </Button>\n  </Form>,\n  dom,\n)",example:{type:o,props:{align:"stretch",notification:"Success",vertical:!0},children:[{type:r,props:{wrap:!0,flex:!0,gap:16},children:[{type:e,props:{label:"Name",flex:!0,required:!0,name:"name"}},{type:e,props:{validation:l,label:"Surname",flex:!0,name:"surname"}}]},{type:i,children:["Send"]}]}})],s=()=>({type:t,props:{component:e,name:"FormInput",description:"# FormInput\n\nUse this component to add an input.\n\n```typescript\nimport { FormInput } from '@cantinc/ui'\n```\n",examples:c}});export{s as default};