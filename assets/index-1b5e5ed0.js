import{a as D,p as M,f as $,k as U,j as b,o as N,_ as O}from"./index-6a97c842.js";import{D as S}from"./siteSetting-efd6ab5b.js";import{c as v,u as A}from"./index-9b784134.js";import{b as x}from"./index-24d774f8.js";import{h as E}from"./header-55b09394.js";import{d as P,e as R,a7 as t,_ as n,$ as V,f as r,a9 as d,a8 as f,ab as _,a0 as a,a2 as s,a1 as B,F as T}from"./vue-bfa52d01.js";import{X as F,W as y}from"./antd-2cb51430.js";import"./index-e84fe5f9.js";import"./index-e6dbae31.js";import"./useRootSetting-ab616a4c.js";import"./index-7db3e726.js";import"./useContentViewHeight-f324fcc5.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uniqBy-03306adf.js";import"./lock-8e9a08ad.js";const W=P({name:"UserDropdown",components:{Dropdown:F,Menu:y,MenuItem:v(()=>D(()=>import("./DropMenuItem-b8079aca.js"),["assets/DropMenuItem-b8079aca.js","assets/index-6a97c842.js","assets/vue-bfa52d01.js","assets/antd-2cb51430.js","assets/index-5a382029.css"])),MenuDivider:y.Divider,LockAction:v(()=>D(()=>import("./LockModal-9fe04426.js"),["assets/LockModal-9fe04426.js","assets/index-6a97c842.js","assets/vue-bfa52d01.js","assets/antd-2cb51430.js","assets/index-5a382029.css","assets/index-24d774f8.js","assets/index-e6dbae31.js","assets/index-e84fe5f9.js","assets/index-2c133100.css","assets/useWindowSizeFn-f3eb2b9f.js","assets/index-8110f779.css","assets/BasicForm-9810335b.js","assets/FormItem.vue_vue_type_script_lang-9d87757e.js","assets/componentMap-3a9923aa.js","assets/useFormItem-bb83f293.js","assets/RadioButtonGroup-c5eadf43.js","assets/uuid-31b8b5a4.js","assets/download-84207253.js","assets/base64Conver-39fc0d26.js","assets/index-69ea2429.js","assets/index-ba72e6bd.css","assets/IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js","assets/useCopyToClipboard-1979fad4.js","assets/IconPicker-1c049e65.css","assets/index-f58f2bda.js","assets/index-7f5b8959.css","assets/componentMap-afd9a640.css","assets/uniqBy-03306adf.js","assets/BasicForm-dd0d74d8.css","assets/useForm-49cd62cf.js","assets/lock-8e9a08ad.js","assets/header-55b09394.js","assets/LockModal-ca58db68.css"]))},props:{theme:M.oneOf(["dark","light"])},setup(){const{prefixCls:e}=$("header-user-dropdown"),{t:g}=b(),{getShowDoc:k,getUseLockPage:h}=A(),i=U(),C=R(()=>{const{realName:u="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:u,avatar:L||E,desc:I}}),[o,{openModal:c}]=x();function l(){c(!0)}function p(){i.confirmLoginOut()}function m(){N(S)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}});const j=["src"];function z(e,g,k,h,i,C){const o=t("MenuItem"),c=t("MenuDivider"),l=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),V(T,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(l,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(c,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},B(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}const se=O(W,[["render",z]]);export{se as default};
