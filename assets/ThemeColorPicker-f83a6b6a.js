import{f as m,_ as l}from"./index-6a97c842.js";import{b as c}from"./index-d2b58f59.js";import{d,a7 as f,_ as r,$ as o,F as u,aa as _,a2 as a,af as C,f as k}from"./vue-bfa52d01.js";import{aY as h}from"./antd-2cb51430.js";import"./index-5251a036.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./index-9b784134.js";import"./useRootSetting-ab616a4c.js";import"./index-7db3e726.js";import"./useContentViewHeight-f324fcc5.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uniqBy-03306adf.js";import"./lock-8e9a08ad.js";const v=d({name:"ThemeColorPicker",components:{CheckOutlined:h},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=m("setting-theme-picker");function s(i){e.event&&c(e.event,i)}return{prefixCls:n,handleClick:s}}});const y=["onClick"];function $(e,n,s,i,g,b){const p=f("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(u,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:C({background:t})},[k(p)],14,y))),128))],2)}const Y=l(v,[["render",$]]);export{Y as default};
