import{B as p}from"./BasicTable-3de5a9db.js";import{T as m}from"./componentMap-3a9923aa.js";import"./TableImg.vue_vue_type_style_index_0_lang-10076b88.js";import{u as c}from"./useTable-24eefa1f.js";import{d as b}from"./table-8c6024c3.js";import{d as h,a7 as l,_ as u,$ as f,f as F,a9 as w,a8 as C,ab as T}from"./vue-bfa52d01.js";import{_}from"./index-6a97c842.js";import"./useFormItem-bb83f293.js";import"./antd-2cb51430.js";import"./RadioButtonGroup-c5eadf43.js";import"./index-24d774f8.js";import"./index-e6dbae31.js";import"./index-e84fe5f9.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./uuid-31b8b5a4.js";import"./download-84207253.js";import"./base64Conver-39fc0d26.js";import"./index-69ea2429.js";import"./IconPicker.vue_vue_type_style_index_0_lang-73fc877f.js";import"./useCopyToClipboard-1979fad4.js";import"./index-f58f2bda.js";import"./BasicForm-9810335b.js";import"./FormItem.vue_vue_type_script_lang-9d87757e.js";import"./uniqBy-03306adf.js";import"./useForm-49cd62cf.js";import"./onMountedOrActivated-6ab1435a.js";import"./sortable.esm-797f0398.js";const A=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",width:200,auth:"test"},{title:"状态",dataIndex:"status"},{title:"状态1",dataIndex:"status1"},{title:"状态2",dataIndex:"status2"},{title:"状态3",dataIndex:"status3"},{title:"状态4",dataIndex:"status4"},{title:"状态5",dataIndex:"status5"},{title:"地址",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],I=h({components:{BasicTable:p,TableAction:m},setup(){const[t]=c({title:"TableAction组件及固定列示例",api:b,columns:A,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function n(o){console.log("点击了编辑",o)}function i(o){console.log("点击了删除",o)}function a(o){console.log("点击了启用",o)}return{registerTable:t,handleEdit:n,handleDelete:i,handleOpen:a}}}),x={class:"p-4"};function g(t,n,i,a,o,k){const r=l("TableAction"),s=l("BasicTable");return u(),f("div",x,[F(s,{onRegister:t.registerTable},{bodyCell:w(({column:d,record:e})=>[d.key==="action"?(u(),C(r,{key:0,actions:[{label:"编辑",onClick:t.handleEdit.bind(null,e),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,e),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:t.handleOpen.bind(null,e)},ifShow:B=>e.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:t.handleOpen.bind(null,e)},ifShow:()=>e.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:t.handleOpen.bind(null,e)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):T("",!0)]),_:1},8,["onRegister"])])}const et=_(I,[["render",g]]);export{et as default};
