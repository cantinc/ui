import{e as t,a as e,C as n}from"./Component-c2d1f5f9.js";import{_ as i,d as o,F as r,T as a,s as p,q as s,B as l}from"./docs-dcf3a74d.js";import"./Typography-0005af32.js";const c=p(s);function d(t={}){var{title:e,titleProps:n}=t,p=i(t,["title","titleProps"]);const{"":s,title:l}=o(),d=c();return{type:r,props:{element:"section",align:"stretch",vertical:!0,...p,class:()=>d.root},children:[{type:a,props:{h:2,justify:"between",align:"end",...n,text:e,class:()=>d.title},children:[l]},s]}}var m=[t({id:"default",title:"Default",description:"You can use it with [Card](/cards/card).\n\nUse `title` prop to add a title of section.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport { Section, Card } from '@cantinc/ui'\n\ninnet(\n  <Section title='Title'>\n    <Card height={158} />\n  </Section>,\n  dom,\n)",example:{type:d,props:{title:"Title"},children:[{type:e,props:{height:158}}]}}),t({id:"title",title:"title",description:"You can use `title` slot to add something aside the title.\n",code:"import innet from 'innet'\nimport dom from '@innet/dom'\n\nimport {\n  Section,\n  Button,\n  Card,\n} from '@cantinc/ui'\n\ninnet(\n  <Section title='Favourites'>\n    <slot name='title'>\n      <Button<HTMLAnchorElement>\n        element='a'\n        href='/'\n        padding={[8, 24]}\n        view='secondary'>\n        Home\n      </Button>\n    </slot>\n    <Card height={158} />\n  </Section>,\n  dom,\n)",example:{type:d,props:{title:"Favourites"},children:[{type:"slot",props:{name:"title"},children:[{type:l,props:{element:"a",href:"/",padding:[8,24],view:"secondary"},children:["Home"]}]},{type:e,props:{height:158}}]}})],h=()=>({type:n,props:{component:d,name:"Section",description:"# Section\n\nUse this component to add a header or title.\n\n```typescript\nimport { Section } from '@cantinc/ui'\n```\n\n## Dependencies\n\n- [Flex](/layout/flex)\n- [Title](/typography/title)\n",examples:m}});export{h as default};