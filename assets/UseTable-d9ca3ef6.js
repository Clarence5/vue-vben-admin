import{B as v}from"./BasicTable-3de5a9db.js";import"./componentMap-3a9923aa.js";import"./TableImg.vue_vue_type_style_index_0_lang-10076b88.js";import{u as A}from"./useTable-24eefa1f.js";import{getBasicColumns as g,getBasicShortColumns as I}from"./tableData-e68ed9fd.js";import{b as M,_ as N}from"./index-6a97c842.js";import{d as V}from"./table-8c6024c3.js";import{d as z,a7 as C,_ as H,$ as U,a0 as p,f as t,a9 as n,E as s}from"./vue-bfa52d01.js";import"./useFormItem-bb83f293.js";import"./antd-2cb51430.js";import"./RadioButtonGroup-c5eadf43.js";import"./index-24d774f8.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uuid-31b8b5a4.js";import"./download-84207253.js";import"./base64Conver-39fc0d26.js";import"./index-69ea2429.js";import"./IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js";import"./useCopyToClipboard-1979fad4.js";import"./index-f58f2bda.js";import"./BasicForm-9810335b.js";import"./FormItem.vue_vue_type_script_lang-9d87757e.js";import"./uniqBy-03306adf.js";import"./useForm-49cd62cf.js";import"./onMountedOrActivated-6ab1435a.js";import"./sortable.esm-797f0398.js";import"./select-9b567941.js";const j=z({components:{BasicTable:v},setup(){const{createMessage:e}=M();function a(){console.log("onChange",arguments)}const[c,{setLoading:l,setProps:i,getColumns:r,getDataSource:o,getRawDataSource:u,reload:m,getPaginationRef:f,setPagination:d,getSelectRows:k,getSelectRowKeys:b,setSelectedRowKeys:w,clearSelectedRowKeys:h}]=A({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:V,columns:g(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:a,rowSelection:{type:"checkbox"},onColumnsChange:$=>{console.log("ColumnsChanged",$)}});function S(){l(!0),setTimeout(()=>{l(!1)},1e3)}function _(){i({columns:I(),rowSelection:{type:"checkbox"},showIndexColumn:!0})}function B(){i({columns:g(),rowSelection:{type:"checkbox"},showIndexColumn:!0}),m({page:1})}function D(){e.info("请在控制台查看！"),console.log(r())}function T(){e.info("请在控制台查看！"),console.log(o())}function R(){e.info("请在控制台查看！"),console.log(u())}function E(){e.info("请在控制台查看！"),console.log(f())}function y(){d({current:2}),m()}function F(){e.info("请在控制台查看！"),console.log(k())}function L(){e.info("请在控制台查看！"),console.log(b())}function K(){w(["0","1","2"])}function P(){h()}return{registerTable:c,changeLoading:S,changeColumns:_,reloadTable:B,getColumn:D,getTableData:T,getTableRawData:R,getPagination:E,setPaginationInfo:y,getSelectRowList:F,getSelectRowKeyList:L,setSelectedRowKeyList:K,clearSelect:P,onChange:a}}}),q={class:"p-4"},G={class:"mb-4"},J={class:"mb-4"};function O(e,a,c,l,i,r){const o=C("a-button"),u=C("BasicTable");return H(),U("div",q,[p("div",G,[t(o,{class:"mr-2",onClick:e.reloadTable},{default:n(()=>[s(" 还原 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeLoading},{default:n(()=>[s(" 开启loading ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeColumns},{default:n(()=>[s(" 更改Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getColumn},{default:n(()=>[s(" 获取Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableData},{default:n(()=>[s(" 获取表格数据 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableRawData},{default:n(()=>[s(" 获取接口原始数据 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setPaginationInfo},{default:n(()=>[s(" 跳转到第2页 ")]),_:1},8,["onClick"])]),p("div",J,[t(o,{class:"mr-2",onClick:e.getSelectRowList},{default:n(()=>[s(" 获取选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:n(()=>[s(" 获取选中行Key ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:n(()=>[s(" 设置选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.clearSelect},{default:n(()=>[s(" 清空选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getPagination},{default:n(()=>[s(" 获取分页信息 ")]),_:1},8,["onClick"])]),t(u,{onRegister:e.registerTable},null,8,["onRegister"])])}const Be=N(j,[["render",O]]);export{Be as default};
