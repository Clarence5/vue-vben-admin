import{D as f}from"./index-c6904547.js";import{B as _}from"./BasicTable-3de5a9db.js";import"./componentMap-3a9923aa.js";import"./TableImg.vue_vue_type_style_index_0_lang-10076b88.js";import{u}from"./useTable-24eefa1f.js";import{P as T}from"./index-8b2d7081.js";import{refundSchema as h,refundData as g,personSchema as b,personData as D,refundTableData as B,refundTableSchema as S,refundTimeTableSchema as v,refundTimeTableData as y}from"./data-a25013e0.js";import{d as C,a7 as a,_ as R,a8 as F,a9 as w,f as t}from"./vue-bfa52d01.js";import{aj as c}from"./antd-2cb51430.js";import{_ as E}from"./index-6a97c842.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./useFormItem-bb83f293.js";import"./RadioButtonGroup-c5eadf43.js";import"./index-24d774f8.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uuid-31b8b5a4.js";import"./download-84207253.js";import"./base64Conver-39fc0d26.js";import"./index-69ea2429.js";import"./IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js";import"./useCopyToClipboard-1979fad4.js";import"./index-f58f2bda.js";import"./BasicForm-9810335b.js";import"./FormItem.vue_vue_type_script_lang-9d87757e.js";import"./uniqBy-03306adf.js";import"./useForm-49cd62cf.js";import"./onMountedOrActivated-6ab1435a.js";import"./sortable.esm-797f0398.js";import"./useContentViewHeight-f324fcc5.js";const P=C({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=u({title:"退货商品",dataSource:B,columns:S,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:s}),[m]=u({title:"退货进度",columns:v,pagination:!1,dataSource:y,showIndexColumn:!1,scroll:{y:300}});function s(p){let r=0,n=0;return p.forEach(o=>{r+=o.t5,n+=o.t6}),[{t1:"总计",t5:r,t6:n}]}return{registerRefundTable:e,registerTimeTable:m,refundSchema:h,refundData:g,personSchema:b,personData:D}}});function $(e,m,s,p,r,n){const o=a("Description"),i=a("a-divider"),l=a("BasicTable"),d=a("PageWrapper");return R(),F(d,{title:"基础详情页",contentBackground:""},{default:w(()=>[t(o,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(i),t(o,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(i),t(l,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(i),t(l,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}const se=E(P,[["render",$],["__scopeId","data-v-53875999"]]);export{se as default};
