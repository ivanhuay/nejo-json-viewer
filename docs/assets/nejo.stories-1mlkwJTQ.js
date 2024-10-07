import{R as e}from"./index-DJO9vBfz.js";const T="_container_11paq_1",C="_content_11paq_20",L="_row_11paq_25",I="_key_11paq_28",O="_value_11paq_31",B="_separator_11paq_35",H="_marker_11paq_38",R="_date_11paq_41",W="_arrayElm_11paq_50",$="_text_11paq_54",G="_link_11paq_63",V="_number_11paq_72",t={container:T,content:C,row:L,key:I,value:O,separator:B,marker:H,date:R,arrayElm:W,text:$,link:G,number:V},i=({jsonData:s,className:q,endingChar:x=""})=>{const F=Array.isArray(s),p=({value:a,endingChar:r})=>typeof a=="string"?/^(http|https)/.test(a)?e.createElement(e.Fragment,null,e.createElement("a",{href:a,className:t.link},a),r):/\S+@\S+\.\S+/.test(a)?e.createElement(e.Fragment,null,e.createElement("a",{href:`mailto:${a}`,className:t.link},a),r):e.createElement(e.Fragment,null,e.createElement("div",{className:t.text},a),r):typeof a=="number"?e.createElement(e.Fragment,null,e.createElement("div",{className:t.number},a),r):typeof a=="boolean"?e.createElement(e.Fragment,null,e.createElement("div",{className:t.number},a.toString()),r):a instanceof Date&&!isNaN(a.valueOf())?e.createElement(e.Fragment,null,e.createElement("div",{className:t.date},a.toISOString()),r):typeof a=="object"?e.createElement(i,{jsonData:a,endingChar:r}):e.createElement(e.Fragment,null,e.createElement("div",{className:t.defaultType},a),r);if(F)return e.createElement("div",{className:t.container},e.createElement("div",{className:t.marker},"["),s.map((a,r)=>e.createElement("div",{key:r,className:t.arrayElm},Array.isArray(a)||typeof a=="object"?e.createElement(i,{jsonData:a,endingChar:r<s.length-1?",":""}):e.createElement(p,{value:a,endingChar:r<s.length-1?",":""}))),e.createElement("div",{className:t.marker},"]"));if(typeof s!="object")return e.createElement(p,{value:s});const d=Object.keys(s);return e.createElement("div",{className:[t.container,q].join(" ")},e.createElement("div",{className:t.marker},"{"),e.createElement("div",{className:t.content},d.map((a,r)=>e.createElement("div",{key:a,className:t.row},e.createElement("div",{className:t.key},a),e.createElement("div",{className:t.separator},":"),e.createElement("div",{className:t.value},e.createElement(p,{value:s[a],endingChar:r<d.length-1?",":""}))))),e.createElement("div",{className:t.marker},"} ",` ${x}`))};i.__docgenInfo={description:"",methods:[],displayName:"Nejo",props:{endingChar:{defaultValue:{value:"''",computed:!1},required:!1}}};const J="_custom_o3m2s_1",z={custom:J},w={first_name:"Ivan",last_name:"Huayraña",age:32,status:"Open to work"},M={first_name:"Ivan",last_name:"Huayraña",age:32,status:"Open to work",job_experience:[{company:"R/GA",position:"Tech Lead",from:new Date("2019-04-01T09:00"),to:new Date("2024-09-30T09:00")},{company:"Grava.io",position:"Full Stack Developer",from:new Date("2024-09-30T09:00"),to:new Date("2019-03-30T09:00")}]},P={first_name:"Ivan",last_name:"Huayraña",powers:["learning","create_bugs","fix_bugs"]},Q={first_name:"Ivan",last_name:"Huayraña",powers:["learning","create_bugs","fix_bugs"],email:"ivanhuay@gmail.com",website:"https://ivanhuay.ar"},X={title:"Nejo Json Viewer",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{jsonData:{control:"object"}}},n={args:{label:"Basic Data",jsonData:w}},o={args:{label:"Nested",jsonData:M}},c={args:{label:"Custom CSS",jsonData:w,className:z.custom}},m={args:{label:"String Array",jsonData:P}},l={args:{label:"With Links And Email",jsonData:Q}};var u,_,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Basic Data',
    jsonData: basicData
  }
}`,...(g=(_=n.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var y,E,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Nested',
    jsonData: nestedData
  }
}`,...(f=(E=o.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var b,N,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Custom CSS',
    jsonData: basicData,
    className: styles.custom
  }
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var S,A,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'String Array',
    jsonData: stringArray
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var h,j,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'With Links And Email',
    jsonData: withLinksAndEmail
  }
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const Y=["BasicData","Nested","CustomCss","StringArray","WithLinkAndEmail"];export{n as BasicData,c as CustomCss,o as Nested,m as StringArray,l as WithLinkAndEmail,Y as __namedExportsOrder,X as default};
