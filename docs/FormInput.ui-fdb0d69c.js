import{e as n,C as t}from"./Component-873f34f9.js";import{F as e}from"./FormInput-bb1eaf99.js";import{B as o}from"./Button-afc0b556.js";import{aj as i,F as a}from"./docs-7acb2a50.js";import{o as r,m}from"./minLength.es6-bccfe5b4.js";import"./Typography-96886b32.js";import"./useField-599bc9b1.js";import"./Input-aa500f59.js";var p=n({id:"default",title:"Default",description:"By default, do nothing on click\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport {\n  Form,\n  FormInput,\n  Button,\n} from '@cantinc/ui'\n\ninnet(\n  <Form notification='Success' vertical>\n    <FormInput name='name' label='Name' required />\n    <Button>\n      Send\n    </Button>\n  </Form>,\n  dom,\n)",example:{type:i,props:{notification:"Success",vertical:!0},children:[{type:e,props:{name:"name",label:"Name",required:!0}},{type:o,children:["Send"]}]}});const l=r([m(5)]);var c=[p,n({id:"validation",title:"validation",description:"By default, do nothing on click\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Button, Flex, Form, FormInput } from '@cantinc/ui'\nimport { minLength, optional } from '@cantinc/utils'\n\nconst minValidator = optional<any, string>([minLength(5)])\n\ninnet(\n  <Form align='stretch' notification='Success' vertical>\n    <Flex wrap flex gap={16}>\n      <FormInput label='Name' flex required name='name' />\n      <FormInput validation={minValidator} label='Surname' flex name='surname' />\n    </Flex>\n    <Button>\n      Send\n    </Button>\n  </Form>,\n  dom,\n)",example:{type:i,props:{align:"stretch",notification:"Success",vertical:!0},children:[{type:a,props:{wrap:!0,flex:!0,gap:16},children:[{type:e,props:{label:"Name",flex:!0,required:!0,name:"name"}},{type:e,props:{validation:l,label:"Surname",flex:!0,name:"surname"}}]},{type:o,children:["Send"]}]}})],s=()=>({type:t,props:{component:e,name:"FormInput",description:"# FormInput\n\nUse this component to add an input.\n\n```typescript\nimport { FormInput } from '@cantinc/ui'\n```\n",examples:c}});export{s as default};