import{C}from"./index-e6dbae31.js";import{u as _}from"./useCopyToClipboard-1979fad4.js";import{b as v,_ as y}from"./index-6a97c842.js";import{P as g}from"./index-8b2d7081.js";import{d as b,k as h,u as l,a7 as a,_ as k,a8 as w,a9 as n,f as s,a0 as x,E as B}from"./vue-bfa52d01.js";import"./index-e84fe5f9.js";import"./antd-2cb51430.js";import"./useContentViewHeight-f324fcc5.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./onMountedOrActivated-6ab1435a.js";const P=b({name:"Copy",components:{CollapseContainer:C,PageWrapper:g},setup(){const e=h(""),{createMessage:o}=v(),{clipboardRef:r,copiedRef:p}=_();function u(){const t=l(e);if(!t){o.warning("请输入要拷贝的内容！");return}r.value=t,l(p)&&o.warning("copy success！")}return{handleCopy:u,value:e}}}),$={class:"flex justify-center"};function F(e,o,r,p,u,t){const i=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),f=a("PageWrapper");return k(),w(f,{title:"文本复制示例"},{default:n(()=>[s(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[x("div",$,[s(i,{placeholder:"请输入",value:e.value,"onUpdate:value":o[0]||(o[0]=d=>e.value=d)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[B(" Copy ")]),_:1},8,["onClick"])])]),_:1})]),_:1})}const U=y(P,[["render",F]]);export{U as default};
