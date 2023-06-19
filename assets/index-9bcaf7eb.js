var C=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&B(e,a,t[a]);if(b)for(var a of b(t))I.call(t,a)&&B(e,a,t[a]);return e},F=(e,t)=>w(e,A(t));import{P as V}from"./index-8b2d7081.js";import{aC as L,aq as O,_ as S}from"./index-6a97c842.js";import{d as x,r as N,s as P,e as f,H as W,a7 as r,_ as g,a8 as $,a9 as u,a0 as s,f as l,E as d,a1 as c,$ as k,F as M,aa as R}from"./vue-bfa52d01.js";import{_ as h,a7 as U}from"./antd-2cb51430.js";import"./useContentViewHeight-f324fcc5.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./onMountedOrActivated-6ab1435a.js";const q=x({components:{PageWrapper:V,[h.name]:h,InputTextArea:h.TextArea,Tag:U},setup(){const e=N({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:T,open:D}=L(e.server,{autoReconnect:!1,heartbeat:!0});P(()=>{if(a.value)try{const o=JSON.parse(a.value);e.recordList.push(o)}catch(o){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=f(()=>t.value==="OPEN"),p=f(()=>n.value?"success":"red"),i=f(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function _(){n.value?T():D()}return F(y({status:t,formatToDateTime:O},W(e)),{handlerSend:m,getList:i,toggle:_,getIsOpen:n,getTagColor:p})}}),H={class:"flex"},J={class:"w-1/3 bg-white p-4"},j={class:"flex items-center"},z=s("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),G=s("hr",{class:"my-4"},null,-1),K={class:"flex"},Q=s("p",{class:"text-lg font-medium mt-4"},"设置",-1),X=s("hr",{class:"my-4"},null,-1),Y={class:"w-2/3 bg-white ml-4 p-4"},Z=s("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),ee=s("hr",{class:"my-4"},null,-1),te={class:"max-h-80 overflow-auto"},se={class:"flex items-center"},ae=s("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);function oe(e,t,a,v,T,D){const n=r("Tag"),p=r("a-input"),i=r("a-button"),m=r("InputTextArea"),_=r("PageWrapper");return g(),$(_,{title:"WebSocket 示例"},{default:u(()=>[s("div",H,[s("div",J,[s("div",j,[z,l(n,{color:e.getTagColor},{default:u(()=>[d(c(e.status),1)]),_:1},8,["color"])]),G,s("div",K,[l(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=o=>e.server=o),disabled:""},{addonBefore:u(()=>[d(" 服务地址 ")]),_:1},8,["value"]),l(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:u(()=>[d(c(e.getIsOpen?"关闭连接":"开启连接"),1)]),_:1},8,["type","onClick"])]),Q,X,l(m,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=o=>e.sendValue=o),allowClear:""},null,8,["disabled","value"]),l(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:u(()=>[d(" 发送 ")]),_:1},8,["disabled","onClick"])]),s("div",Y,[Z,ee,s("div",te,[s("ul",null,[(g(!0),k(M,null,R(e.getList,o=>(g(),k("li",{class:"mt-2",key:o.time},[s("div",se,[ae,s("span",null,c(e.formatToDateTime(o.time)),1)]),s("div",null,c(o.res),1)]))),128))])])])])]),_:1})}const me=S(q,[["render",oe]]);export{me as default};
