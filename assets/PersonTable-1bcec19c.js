import{B as h}from"./BasicTable-3de5a9db.js";import{T as C}from"./componentMap-3a9923aa.js";import"./TableImg.vue_vue_type_style_index_0_lang-10076b88.js";import{u as w}from"./useTable-24eefa1f.js";import{d as _,a7 as p,_ as c,$ as T,f as u,a9 as f,a8 as g,ab as B,E}from"./vue-bfa52d01.js";import{_ as N}from"./index-6a97c842.js";import"./useFormItem-bb83f293.js";import"./antd-2cb51430.js";import"./RadioButtonGroup-c5eadf43.js";import"./index-24d774f8.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uuid-31b8b5a4.js";import"./download-84207253.js";import"./base64Conver-39fc0d26.js";import"./index-69ea2429.js";import"./IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js";import"./useCopyToClipboard-1979fad4.js";import"./index-f58f2bda.js";import"./BasicForm-9810335b.js";import"./FormItem.vue_vue_type_script_lang-9d87757e.js";import"./uniqBy-03306adf.js";import"./useForm-49cd62cf.js";import"./onMountedOrActivated-6ab1435a.js";import"./sortable.esm-797f0398.js";const x=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],y=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],A=_({components:{BasicTable:h,TableAction:C},setup(){const[n,{getDataSource:o}]=w({columns:x,showIndexColumn:!1,dataSource:y,actionColumn:{width:160,title:"操作",dataIndex:"action"},scroll:{y:"100%"},pagination:!1});function i(t){var e;(e=t.onEdit)==null||e.call(t,!0)}function m(t){var e;if((e=t.onEdit)==null||e.call(t,!1),t.isNew){const a=o(),b=a.findIndex(k=>k.key===t.key);a.splice(b,1)}}function r(t){var e;(e=t.onEdit)==null||e.call(t,!1,!0)}function d(t){console.log(t)}function l(){const t=o(),e={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(e)}function s(t,e){return t.editable?[{label:"保存",onClick:r.bind(null,t,e)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:m.bind(null,t,e)}}]:[{label:"编辑",onClick:i.bind(null,t)},{label:"删除"}]}return{registerTable:n,handleEdit:i,createActions:s,handleAdd:l,getDataSource:o,handleEditChange:d}}});function I(n,o,i,m,r,d){const l=p("TableAction"),s=p("BasicTable"),t=p("a-button");return c(),T("div",null,[u(s,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{bodyCell:f(({column:e,record:a})=>[e.key==="action"?(c(),g(l,{key:0,actions:n.createActions(a,e)},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:f(()=>[E(" 新增成员 ")]),_:1},8,["onClick"])])}const nt=N(A,[["render",I]]);export{nt as default};
