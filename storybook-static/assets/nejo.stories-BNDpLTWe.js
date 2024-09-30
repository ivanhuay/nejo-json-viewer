import{f as k}from"./index-C_FWhylE.js";import{R as e}from"./index-DJO9vBfz.js";const g="_container_1pywd_13",v="_content_1pywd_22",j="_row_1pywd_27",S="_key_1pywd_30",C="_value_1pywd_33",T="_separator_1pywd_36",x="_marker_1pywd_39",O="_date_1pywd_42",A="_text_1pywd_51",B="_number_1pywd_60",t={container:g,content:v,row:j,key:S,value:C,separator:T,marker:x,date:O,text:A,number:B},c=({jsonData:s,className:w})=>{const D=Array.isArray(s),E=({value:a})=>typeof a=="string"?e.createElement("div",{className:t.text},a):typeof a=="number"?e.createElement("div",{className:t.number},a):a instanceof Date&&!isNaN(a.valueOf())?e.createElement("div",{className:t.date},a.toISOString()):typeof a=="object"?e.createElement(c,{jsonData:a}):e.createElement("div",{className:t.defaultType},a);return D?e.createElement("div",{className:t.container},e.createElement("div",{className:t.marker},"["),s.map((a,b)=>e.createElement(c,{key:b,jsonData:a})),e.createElement("div",{className:t.marker},"]")):e.createElement("div",{className:[t.container,w].join(" ")},e.createElement("div",{className:t.marker},"{"),e.createElement("div",{className:t.content},Object.keys(s).map(a=>e.createElement("div",{key:a,className:t.row},e.createElement("div",{className:t.key},a),e.createElement("div",{className:t.separator},":"),e.createElement("div",{className:t.value},e.createElement(E,{value:s[a]}))))),e.createElement("div",{className:t.marker},"}"))};c.__docgenInfo={description:"",methods:[],displayName:"Nejo"};const I="_custom_o3m2s_1",R={custom:I},f={first_name:"Ivan",last_name:"Huayraña",age:32,status:"Open to work"},h={first_name:"Ivan",last_name:"Huayraña",age:32,status:"Open to work",job_experience:[{company:"R/GA",position:"Tech Lead",from:new Date("2019-04-01T09:00"),to:new Date("2024-09-30T09:00")},{company:"Grava.io",position:"Full Stack Developer",from:new Date("2024-09-30T09:00"),to:new Date("2019-03-30T09:00")}]},F={title:"Nejo Json Viewer",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{jsonData:{control:"object"}},args:{onClick:k()}},r={args:{label:"Basic Data",jsonData:f}},n={args:{label:"Nested",jsonData:h}},o={args:{label:"Custom CSS",jsonData:f,className:R.custom}};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Basic Data',
    jsonData: basicData
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,_;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Nested',
    jsonData: nestedData
  }
}`,...(_=(p=n.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var u,y,N;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Custom CSS',
    jsonData: basicData,
    className: styles.custom
  }
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const J=["BasicData","Nested","CustomCss"];export{r as BasicData,o as CustomCss,n as Nested,J as __namedExportsOrder,F as default};
