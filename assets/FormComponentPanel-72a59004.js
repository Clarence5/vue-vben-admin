import{d as g}from"./vuedraggable.umd-74f86f59.js";import f from"./LayoutItem-f3609c5b.js";import{u as _}from"./useFormDesignState-5b1e89df.js";import{ah as h,aQ as v,L as C}from"./antd-2cb51430.js";import{d as y,e as S,a7 as r,_ as F,$ as E,t as I,A as b,f as n,a9 as d,a0 as D,ad as A,ag as P}from"./vue-bfa52d01.js";import{_ as V}from"./index-6a97c842.js";import"./FormNode-8606b346.js";import"./FormNodeOperate-5c898215.js";import"./index-634e8894.js";import"./index-e67c757a.js";import"./formItemConfig-ffa612f1.js";import"./componentMap-3a9923aa.js";import"./useFormItem-bb83f293.js";import"./RadioButtonGroup-c5eadf43.js";import"./index-24d774f8.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uuid-31b8b5a4.js";import"./download-84207253.js";import"./base64Conver-39fc0d26.js";import"./index-69ea2429.js";import"./IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js";import"./useCopyToClipboard-1979fad4.js";import"./index-f58f2bda.js";const $=y({name:"FormComponentPanel",components:{LayoutItem:f,draggable:g,Form:h,Empty:v},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:e}=_(),i=({newIndex:t})=>{e.value.schemas=e.value.schemas||[];const m=e.value.schemas;m[t]=C(m[t]),a("handleSetSelectItem",m[t])},p=t=>{a("handleSetSelectItem",e.value.schemas[t.oldIndex])},l=S(()=>e.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:p,formConfig:e,layoutTag:l}}});const k={class:"form-panel v-form-container"},B={class:"draggable-box"};function L(o,a,e,i,p,l){const t=r("Empty"),m=r("LayoutItem"),c=r("draggable"),u=r("Form");return F(),E("div",k,[I(n(t,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[b,o.formConfig.schemas.length===0]]),n(u,A(P(o.formConfig)),{default:d(()=>[D("div",B,[n(c,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=s=>o.formConfig.schemas=s),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:d(({element:s})=>[n(m,{class:"drag-move",schema:s,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const ro=V($,[["render",L],["__scopeId","data-v-513265b0"]]);export{ro as default};
