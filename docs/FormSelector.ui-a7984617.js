import{e,C as o}from"./Component-5b523363.js";import{F as a}from"./FormSelector-c14c98ae.js";import{B as t}from"./Button-3bcd83a4.js";import{a6 as r,J as l}from"./docs-4dbfcb03.js";import"./Typography-fb81b959.js";import"./useField-7507ff0e.js";import"./Selector-21ecb09b.js";import"./DropdownMenu-cef431a6.js";import"./useListener-88926602.js";import"./Dropdown-09e7c46e.js";import"./Input-c4b92b3d.js";import"./Icon-5ae6ae80.js";var i=[e({id:"default",title:"Default",description:"By default, do nothing on click\n",example:{type:r,props:{onsuccess:e=>l(Array.from(e.fields).map((({name:e,state:o})=>`${e}: ${o.value}`)).join("\n\n")),vertical:!0},children:[{type:a,props:{name:"size",label:"Size",exact:!0,values:[{value:"small",label:"Small"},{value:"mid",label:"Mid"},{value:"large",label:"Large"}],required:!0}},{type:a,props:{name:"rotation",label:"Rotation",exact:!0,defaultValue:"horizontal",values:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}},{type:t,children:["Send"]}]}})],n=()=>({type:o,props:{component:a,name:"FormSelector",description:"# FormSelector\n\nUse this component to add a selector.\n\n```typescript\nimport { FormSelector } from '@cantinc/ui'\n```\n",examples:i}});export{n as default};