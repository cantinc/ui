import{e as n,C as e}from"./Component-8e718c3a.js";import{aq as t,ah as o,I as s,ar as r,B as a,as as p,_ as d,a as i}from"./docs-c7a99efa.js";import{F as l}from"./FormInput-355f862a.js";import"./Typography-21d0fa4f.js";import"./useField-17e78dd8.js";var m=n({id:"default",title:"Default",description:"Usage with [Input](/ui/interaction/input)\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Set, Input, InputProps, Icon } from '@cantinc/ui'\n\ninnet(\n  <Set<InputProps>\n    element={Input}\n    label='Address'\n    name='address'>\n    <Icon icon='plus' />\n    Add an address\n  </Set>,\n  dom,\n)",example:{type:t,props:{element:o,label:"Address",name:"address"},children:[{type:s,props:{icon:"plus"}},"Add an address"]}}),c=n({id:"form",title:"form",description:"Usage with [FormInput](/ui/forms/input)\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport {\n  Set,\n  Form,\n  FormInput,\n  FormInputProps,\n  Icon,\n  Button,\n} from '@cantinc/ui'\n\ninnet(\n  <Form onsuccess={form => console.log(form.submitData)}>\n    <Set<FormInputProps>\n      element={FormInput}\n      label='Address'\n      required\n      name='address'>\n      <Icon icon='plus' />\n      Add an address\n    </Set>\n    <Button>\n      Send\n    </Button>\n  </Form>,\n  dom,\n)",example:{type:r,props:{onsuccess:n=>console.log(n.submitData)},children:[{type:t,props:{element:l,handleItemProps:n=>Object.assign(Object.assign({},n.value),{label:()=>`${n.value.label} ${n.index+1}`}),label:"Address",required:!0,name:"address"},children:[{type:s,props:{icon:"plus"}},"Add an address"]},{type:a,children:["Send"]}]}});var u=n({id:"setPropsHandler",title:"setPropsHandler",description:"Use `setPropsHandler` to handle any `Set` item props in one place.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport {\n  Set,\n  Input,\n  InputProps,\n  Icon,\n  setPropsHandler,\n} from '@cantinc/ui'\n\nconst handleSetProps: SetPropsHandler<any> = ({\n  index,\n  value,\n}, Component) => {\n  if (Component === Input) {\n    const { label, ...props } = value\n    return ({\n      ...props,\n      label: label\n        ? () => `${use(label)} ${index + 1}`\n        : label,\n    })\n  }\n\n  return value\n}\n\ninnet(\n  <context for={setPropsHandler} set={handleSetProps}>\n    <Set<InputProps>\n      element={Input}\n      label='Address'\n      name='address'>\n      <Icon icon='plus' />\n      Add an address\n    </Set>\n  </context>,\n  dom,\n)",example:{type:"context",props:{for:p,set:({index:n,value:e},t)=>{if(t===o){const{label:t}=e,o=d(e,["label"]);return Object.assign(Object.assign({},o),{label:t?()=>`${i(t)} ${n+1}`:t})}return e}},children:[{type:t,props:{element:o,label:"Address",name:"address"},children:[{type:s,props:{icon:"plus"}},"Add an address"]}]}}),f=[m,c,u],I=()=>({type:e,props:{component:t,name:"Set",description:"# Set\n\nUse the component to add set of elements.\n\n```typescript\nimport { Set } from '@cantinc/ui'\n```\n",examples:f}});export{I as default};