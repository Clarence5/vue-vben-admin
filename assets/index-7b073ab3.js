import{I as $,_ as w}from"./index-6a97c842.js";import{cardList as A}from"./data-d787e9e2.js";import{P}from"./index-8b2d7081.js";import{d as k,a7 as a,_ as i,a8 as p,a9 as o,a2 as c,a0 as s,f as l,$ as d,aa as y,ab as m,a1 as r,E as f,F as b,a3 as S,a4 as L}from"./vue-bfa52d01.js";import{aF as N,aw as _,a9 as h,aa as v}from"./antd-2cb51430.js";import"./useContentViewHeight-f324fcc5.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./onMountedOrActivated-6ab1435a.js";const V=k({components:{Icon:$,Progress:N,PageWrapper:P,[_.name]:_,[_.Item.name]:_.Item,AListItemMeta:_.Item.Meta,[h.name]:h,[v.name]:v},setup(){return{prefixCls:"list-basic",list:A,pagination:{show:!0,pageSize:3}}}});const n=t=>(S("data-v-96c623b7"),t=t(),L(),t),W=n(()=>s("div",null,"我的待办",-1)),z=n(()=>s("p",null,"8个任务",-1)),M=n(()=>s("div",null,"本周任务平均处理时间",-1)),D=n(()=>s("p",null,"32分钟",-1)),O=n(()=>s("div",null,"本周完成任务数",-1)),R=n(()=>s("p",null,"24个任务",-1)),T={key:0,class:"extra"},j={class:"description"},q={class:"info"},G=n(()=>s("span",null,"Owner",-1)),H=n(()=>s("span",null,"开始时间",-1)),J={class:"progress"};function K(t,Q,U,X,Y,Z){const u=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return i(),p(E,{class:c(t.prefixCls),title:"标准列表"},{default:o(()=>[s("div",{class:c(`${t.prefixCls}__top`)},[l(C,{gutter:12},{default:o(()=>[l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[W,z]),_:1},8,["class"]),l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[M,D]),_:1},8,["class"]),l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[O,R]),_:1},8,["class"])]),_:1})],2),s("div",{class:c(`${t.prefixCls}__content`)},[l(B,{pagination:t.pagination},{default:o(()=>[(i(!0),d(b,null,y(t.list,e=>(i(),p(x,{key:e.id,class:"list"},{default:o(()=>[l(I,null,{avatar:o(()=>[e.icon?(i(),p(g,{key:0,class:"icon",icon:e.icon,color:e.color},null,8,["icon","color"])):m("",!0)]),title:o(()=>[s("span",null,r(e.title),1),e.extra?(i(),d("div",T,r(e.extra),1)):m("",!0)]),description:o(()=>[s("div",j,r(e.description),1),s("div",q,[s("div",null,[G,f(r(e.author),1)]),s("div",null,[H,f(r(e.datetime),1)])]),s("div",J,[l(F,{percent:e.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}const is=w(V,[["render",K],["__scopeId","data-v-96c623b7"]]);export{is as default};
