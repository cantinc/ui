import{e as n,C as e}from"./Component-c2d1f5f9.js";import{_ as o,d as t,aw as a,a as r,au as i,B as s,X as p}from"./docs-dcf3a74d.js";import{u as m}from"./useField-ded75185.js";import{I as l}from"./InputMask-d826065d.js";import{c as d}from"./createFormData-4b97ea13.js";import"./Typography-0005af32.js";import"./useChildrenProvider-a3a18efd.js";import"./Input-a4bcaf42.js";function c(n){var{inputRef:e,onchange:i,disabled:s,validation:p}=n,d=o(n,["inputRef","onchange","disabled","validation"]);const{before:c,after:u,hint:f}=t(),{loading:h}=a(),{state:v,error:y,element:F}=m("",e);return{type:l,props:{...d,inputRef:F,oninput:n=>{v.value=n,y.value="",null==i||i(n)},error:()=>Boolean(y.value),value:()=>v.value,disabled:()=>{var n;return null!==(n=r(s))&&void 0!==n?n:h.value}},children:[c&&{type:"slot",props:{name:"before"},children:[c]}," ",u&&{type:"slot",props:{name:"after"},children:[u]},{type:"slot",props:{name:"hint"},children:[()=>y.value||f]}]}}var u=[n({id:"default",title:"Default",description:"By default, do nothing on click\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport {\n  Form,\n  FormInputMask,\n  Button,\n  Notifications,\n  notify,\n  createFormDate,\n} from '@cantinc/ui'\n\nconst handleSuccess = (form: FormContext) => {\n  notify(`Phone: ${createFormDate(form).get('phone')}`)\n}\n\ninnet(\n  <>\n    <Form onsuccess={handleSuccess} vertical>\n      <FormInputMask\n        mask='+7 (999) 999-99-99'\n        name='phone'\n        label='Phone'\n        required\n        clearable\n      />\n      <Button>\n        Send\n      </Button>\n    </Form>\n    <Notifications />\n  </>,\n  dom,\n)",example:{type:i,props:{onsuccess:n=>{p(`Phone: ${d(n).get("phone")}`)},vertical:!0},children:[{type:c,props:{mask:"+7 (999) 999-99-99",name:"phone",label:"Phone",required:!0,clearable:!0}},{type:s,children:["Send"]}]}})],f=()=>({type:e,props:{component:c,name:"FormInput",description:"# FormInputMask\n\nUse this component to add an input.\n\n```typescript\nimport { FormInputMask } from '@cantinc/ui'\n```\n",examples:u}});export{f as default};