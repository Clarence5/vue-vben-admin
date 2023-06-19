var w=Object.defineProperty,L=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))O.call(o,t)&&v(e,t,o[t]);if(f)for(var t of f(o))R.call(o,t)&&v(e,t,o[t]);return e},$=(e,o)=>L(e,H(o));import{d as V}from"./vuedraggable.umd-74f86f59.js";import A from"./FormNode-8606b346.js";import B from"./FormNodeOperate-5c898215.js";import{u as D}from"./useFormDesignState-5b1e89df.js";import{d as z,r as _,e as p,H as j,a7 as n,_ as m,a8 as u,a9 as s,$ as k,a2 as q,B as M,f as l,ac as I,F as U,aa as E,ad as G,ag as T}from"./vue-bfa52d01.js";import{a9 as J,aa as K}from"./antd-2cb51430.js";import{_ as Q}from"./index-6a97c842.js";import"./index-e67c757a.js";import"./formItemConfig-ffa612f1.js";import"./componentMap-3a9923aa.js";import"./useFormItem-bb83f293.js";import"./RadioButtonGroup-c5eadf43.js";import"./index-24d774f8.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uuid-31b8b5a4.js";import"./download-84207253.js";import"./base64Conver-39fc0d26.js";import"./index-69ea2429.js";import"./IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js";import"./useCopyToClipboard-1979fad4.js";import"./index-f58f2bda.js";import"./index-634e8894.js";const W=z({name:"LayoutItem",components:{FormNode:A,FormNodeOperate:B,draggable:V,Row:J,Col:K},props:{schema:{type:Object,required:!0},currentItem:{type:Object,required:!0}},emits:["dragStart","handleColAdd","handle-copy","handle-delete"],setup(e){const{formDesignMethods:{handleSetSelectItem:o},formConfig:t}=D(),c=_({}),g=p(()=>{const{colProps:i={}}=e.schema;return i}),h=p(()=>e.schema.columns),d=p(()=>t.value.layout==="horizontal"?"Col":"div");return $(C({},j(c)),{colPropsComputed:g,handleSetSelectItem:o,layoutTag:d,list1:h})}});function X(e,o,t,c,g,h){const d=n("LayoutItem",!0),i=n("draggable"),y=n("Col"),b=n("Row"),F=n("FormNodeOperate"),S=n("FormNode");return m(),u(y,G(T(e.colPropsComputed)),{default:s(()=>[["Grid"].includes(e.schema.component)?(m(),k("div",{key:0,class:q(["grid-box",{active:e.schema.key===e.currentItem.key}]),onClick:o[2]||(o[2]=M(r=>e.handleSetSelectItem(e.schema),["stop"]))},[l(b,I({class:"grid-row"},e.schema.componentProps),{default:s(()=>[(m(!0),k(U,null,E(e.schema.columns,(r,N)=>(m(),u(y,{class:"grid-col",key:N,span:r.span},{default:s(()=>[l(i,I({class:"list-main draggable-box","component-data":{name:"list",tag:"div",type:"transition-group"}},{group:"form-draggable",ghostClass:"moving",animation:180,handle:".drag-move"},{"item-key":"key",modelValue:r.children,"onUpdate:modelValue":a=>r.children=a,onStart:a=>e.$emit("dragStart",a,r.children),onAdd:a=>e.$emit("handleColAdd",a,r.children)}),{item:s(({element:a})=>[l(d,{class:"drag-move",schema:a,"current-item":e.currentItem,onHandleCopy:o[0]||(o[0]=P=>e.$emit("handle-copy")),onHandleDelete:o[1]||(o[1]=P=>e.$emit("handle-delete"))},null,8,["schema","current-item"])]),_:2},1040,["modelValue","onUpdate:modelValue","onStart","onAdd"])]),_:2},1032,["span"]))),128))]),_:1},16),l(F,{schema:e.schema,currentItem:e.currentItem},null,8,["schema","currentItem"])],2)):(m(),u(S,{key:e.schema.key,schema:e.schema,"current-item":e.currentItem,onHandleCopy:o[3]||(o[3]=r=>e.$emit("handle-copy")),onHandleDelete:o[4]||(o[4]=r=>e.$emit("handle-delete"))},null,8,["schema","current-item"]))]),_:1},16)}const Ie=Q(W,[["render",X]]);export{Ie as default};
