import{f as k}from"./index-C_FWhylE.js";import{R as e}from"./index-DJO9vBfz.js";const g="_container_1c5js_1",v="_content_1c5js_20",w="_row_1c5js_25",S="_key_1c5js_28",C="_value_1c5js_31",T="_separator_1c5js_34",x="_marker_1c5js_37",O="_date_1c5js_40",A="_text_1c5js_49",B="_number_1c5js_58",t={container:g,content:v,row:w,key:S,value:C,separator:T,marker:x,date:O,text:A,number:B},c=({jsonData:s,className:f})=>{const D=Array.isArray(s),E=({value:a})=>typeof a=="string"?e.createElement("div",{className:t.text},a):typeof a=="number"?e.createElement("div",{className:t.number},a):a instanceof Date&&!isNaN(a.valueOf())?e.createElement("div",{className:t.date},a.toISOString()):typeof a=="object"?e.createElement(c,{jsonData:a}):e.createElement("div",{className:t.defaultType},a);return D?e.createElement("div",{className:t.container},e.createElement("div",{className:t.marker},"["),s.map((a,b)=>e.createElement(c,{key:b,jsonData:a})),e.createElement("div",{className:t.marker},"]")):e.createElement("div",{className:[t.container,f].join(" ")},e.createElement("div",{className:t.marker},"{"),e.createElement("div",{className:t.content},Object.keys(s).map(a=>e.createElement("div",{key:a,className:t.row},e.createElement("div",{className:t.key},a),e.createElement("div",{className:t.separator},":"),e.createElement("div",{className:t.value},e.createElement(E,{value:s[a]}))))),e.createElement("div",{className:t.marker},"}"))};c.__docgenInfo={description:"",methods:[],displayName:"Nejo"};const I="_custom_o3m2s_1",R={custom:I},y={first_name:"Ivan",last_name:"Huayraña",age:32,status:"Open to work"},h={first_name:"Ivan",last_name:"Huayraña",age:32,status:"Open to work",job_experience:[{company:"R/GA",position:"Tech Lead",from:new Date("2019-04-01T09:00"),to:new Date("2024-09-30T09:00")},{company:"Grava.io",position:"Full Stack Developer",from:new Date("2024-09-30T09:00"),to:new Date("2019-03-30T09:00")}]},F={title:"Nejo Json Viewer",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{jsonData:{control:"object"}},args:{onClick:k()}},r={args:{label:"Basic Data",jsonData:y}},n={args:{label:"Nested",jsonData:h}},o={args:{label:"Custom CSS",jsonData:y,className:R.custom}};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Basic Data',
    jsonData: basicData
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,_,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Nested',
    jsonData: nestedData
  }
}`,...(p=(_=n.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};var u,N,j;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Custom CSS',
    jsonData: basicData,
    className: styles.custom
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const J=["BasicData","Nested","CustomCss"];export{r as BasicData,o as CustomCss,n as Nested,J as __namedExportsOrder,F as default};
