import C from"./FormProps-a195df0a.js";import y from"./FormItemProps-7e09731e.js";import b from"./ComponentProps-64273fc5.js";import v from"./FormItemColumnProps-36c277e4.js";import{u as k}from"./useFormDesignState-5b1e89df.js";import{c}from"./formItemConfig-ffa612f1.js";import{ae as F,by as g}from"./antd-2cb51430.js";import{d as T,e as $,a7 as t,_ as e,$ as I,f as s,a9 as r,a8 as n,R as K}from"./vue-bfa52d01.js";import{_ as B}from"./index-6a97c842.js";import"./formItemPropsConfig-29e7a11f.js";import"./RuleProps-4c956c61.js";import"./index-634e8894.js";import"./RadioButtonGroup-c5eadf43.js";import"./useFormItem-bb83f293.js";import"./FormOptions-4f1f5a6e.js";import"./componentMap-3a9923aa.js";import"./index-24d774f8.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uuid-31b8b5a4.js";import"./download-84207253.js";import"./base64Conver-39fc0d26.js";import"./index-69ea2429.js";import"./IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js";import"./useCopyToClipboard-1979fad4.js";import"./index-f58f2bda.js";const E=T({name:"PropsPanel",components:{FormProps:C,FormItemProps:y,ComponentProps:b,ComponentColumnProps:v,Tabs:F,TabPane:g},setup(){const{formConfig:o}=k(),m=$(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:m}}});function S(o,m,i,a,w,A){const u=t("FormProps"),p=t("TabPane"),_=t("FormItemProps"),f=t("ComponentColumnProps"),l=t("ComponentProps"),P=t("Tabs");return e(),I("div",null,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":m[0]||(m[0]=d=>o.formConfig.activeKey=d),tabBarStyle:{margin:0}},{default:r(()=>[(e(),n(p,{key:1,tab:"表单"},{default:r(()=>[s(u)]),_:1})),(e(),n(p,{key:2,tab:"控件"},{default:r(()=>[s(_)]),_:1})),(e(),n(p,{key:3,tab:"栅格"},{default:r(()=>[s(f)]),_:1})),(e(),n(p,{key:4,tab:"组件"},{default:r(()=>[o.slotProps?K(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(e(),n(l,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}const po=B(E,[["render",S],["__scopeId","data-v-7c69978a"]]);export{po as default};
