import{I as L,_ as k}from"./index-6a97c842.js";import{applicationList as x}from"./data-199c263c.js";import{d as y,a7 as e,_ as n,a8 as c,a9 as t,a2 as s,f as i,$ as B,aa as F,a0 as l,ab as _,E as r,a1 as p,F as g}from"./vue-bfa52d01.js";import{aw as d,a8 as A,a9 as f,aa as m}from"./antd-2cb51430.js";const E=y({components:{List:d,ListItem:d.Item,Card:A,Icon:L,[f.name]:f,[m.name]:m},setup(){return{prefixCls:"account-center-application",list:x}}});function N(o,V,h,D,b,z){const u=e("Icon"),C=e("Card"),$=e("ListItem"),w=e("a-col"),v=e("a-row"),I=e("List");return n(),c(I,{class:s(o.prefixCls)},{default:t(()=>[i(v,{gutter:16},{default:t(()=>[(n(!0),B(g,null,F(o.list,a=>(n(),c(w,{key:a.title,span:6},{default:t(()=>[i($,null,{default:t(()=>[i(C,{hoverable:!0,class:s(`${o.prefixCls}__card`)},{default:t(()=>[l("div",{class:s(`${o.prefixCls}__card-title`)},[a.icon?(n(),c(u,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):_("",!0),r(" "+p(a.title),1)],2),l("div",{class:s(`${o.prefixCls}__card-num`)},[r(" 活跃用户："),l("span",null,p(a.active),1),r(" 万 ")],2),l("div",{class:s(`${o.prefixCls}__card-num`)},[r(" 新增用户："),l("span",null,p(a.new),1)],2),a.download?(n(),c(u,{key:0,class:s(`${o.prefixCls}__card-download`),icon:a.download},null,8,["class","icon"])):_("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"])}const q=k(E,[["render",N]]);export{q as default};
