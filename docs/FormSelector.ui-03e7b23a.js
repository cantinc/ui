import{e,C as a}from"./Component-5f8800d1.js";import{F as o}from"./FormSelector-90a4ad0c.js";import{B as t}from"./Button-a8aa21bc.js";import{af as r,K as l}from"./docs-6ba3e768.js";import"./Typography-f51bd6cc.js";import"./useField-bbac42d7.js";import"./Selector-ef29daf3.js";import"./DropdownMenu-083e2fac.js";import"./Dropdown-d359f856.js";import"./Input-069180fc.js";import"./Icon-47292068.js";var n=[e({id:"default",title:"Default",description:"By default, do nothing on click\n",example:{type:r,props:{onsuccess:e=>l(Array.from(e.fields).map((({name:e,state:a})=>`${e}: ${a.value}`)).join("\n\n")),vertical:!0},children:[{type:o,props:{name:"size",label:"Size",exact:!0,values:[{value:"small",label:"Small"},{value:"mid",label:"Mid"},{value:"large",label:"Large"}],required:!0}},{type:o,props:{name:"rotation",label:"Rotation",exact:!0,defaultValue:"horizontal",values:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}},{type:t,children:["Send"]}]}})],i=()=>({type:a,props:{component:o,name:"FormSelector",description:"# FormSelector\n\nUse this component to add a selector.\n\n```typescript\nimport { FormSelector } from '@cantinc/ui'\n```\n",examples:n}});export{i as default};