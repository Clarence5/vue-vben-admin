var R=(C,r,i)=>new Promise((u,x)=>{var o=l=>{try{m(i.next(l))}catch(f){x(f)}},w=l=>{try{m(i.throw(l))}catch(f){x(f)}},m=l=>l.done?u(l.value):Promise.resolve(l.value).then(o,w);m((i=i.apply(C,r)).next())});import{d as M,k as S,r as N,e as A,u as e,_ as G,$ as O,t as $,A as L,f as s,a9 as a,E as d,a1 as c,a0 as P,a2 as U,ah as V,F as j}from"./vue-bfa52d01.js";import{u as K,a as q,b as W,L as p,_ as Q}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-ad15d265.js";import{f as Z,k as H,j as J,b as X}from"./index-6a97c842.js";import{ah as T,_ as h,ai as Y,Z as y,aj as ee,ak as se,al as ae,am as te,an as oe,ao as le,aa as ne,a9 as re}from"./antd-2cb51430.js";const fe=M({__name:"LoginForm",setup(C){const r=ne,i=re,u=T.Item,x=h.Password,{t:o}=J(),{notification:w,createErrorModal:m}=X(),{prefixCls:l}=Z("login"),f=H(),{setLoginState:v,getLoginState:D}=K(),{getFormRules:B}=q(),F=S(),k=S(!1),b=S(!1),g=N({account:"vben",password:"123456"}),{validForm:z}=W(F),I=A(()=>e(D)===p.LOGIN);function E(){return R(this,null,function*(){const _=yield z();if(_)try{k.value=!0;const t=yield f.login({password:_.password,username:_.account,mode:"none"});t&&w.success({message:o("sys.login.loginSuccessTitle"),description:`${o("sys.login.loginSuccessDesc")}: ${t.realName}`,duration:3})}catch(t){m({title:o("sys.api.errorTip"),content:t.message||o("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${l}`)||document.body})}finally{k.value=!1}})}return(_,t)=>(G(),O(j,null,[$(s(Q,{class:"enter-x"},null,512),[[L,e(I)]]),$(s(e(T),{class:"p-4 enter-x",model:g,rules:e(B),ref_key:"formRef",ref:F,onKeypress:V(E,["enter"])},{default:a(()=>[s(e(u),{name:"account",class:"enter-x"},{default:a(()=>[s(e(h),{size:"large",value:g.account,"onUpdate:value":t[0]||(t[0]=n=>g.account=n),placeholder:e(o)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(u),{name:"password",class:"enter-x"},{default:a(()=>[s(e(x),{size:"large",visibilityToggle:"",value:g.password,"onUpdate:value":t[1]||(t[1]=n=>g.password=n),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(i),{class:"enter-x"},{default:a(()=>[s(e(r),{span:12},{default:a(()=>[s(e(u),null,{default:a(()=>[s(e(Y),{checked:b.value,"onUpdate:checked":t[2]||(t[2]=n=>b.value=n),size:"small"},{default:a(()=>[d(c(e(o)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),s(e(r),{span:12},{default:a(()=>[s(e(u),{style:{"text-align":"right"}},{default:a(()=>[s(e(y),{type:"link",size:"small",onClick:t[3]||(t[3]=n=>e(v)(e(p).RESET_PASSWORD))},{default:a(()=>[d(c(e(o)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(e(u),{class:"enter-x"},{default:a(()=>[s(e(y),{type:"primary",size:"large",block:"",onClick:E,loading:k.value},{default:a(()=>[d(c(e(o)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),s(e(i),{class:"enter-x"},{default:a(()=>[s(e(r),{md:8,xs:24},{default:a(()=>[s(e(y),{block:"",onClick:t[4]||(t[4]=n=>e(v)(e(p).MOBILE))},{default:a(()=>[d(c(e(o)("sys.login.mobileSignInFormTitle")),1)]),_:1})]),_:1}),s(e(r),{md:8,xs:24,class:"!my-2 !md:my-0 xs:mx-0 md:mx-2"},{default:a(()=>[s(e(y),{block:"",onClick:t[5]||(t[5]=n=>e(v)(e(p).QR_CODE))},{default:a(()=>[d(c(e(o)("sys.login.qrSignInFormTitle")),1)]),_:1})]),_:1}),s(e(r),{md:6,xs:24},{default:a(()=>[s(e(y),{block:"",onClick:t[6]||(t[6]=n=>e(v)(e(p).REGISTER))},{default:a(()=>[d(c(e(o)("sys.login.registerButton")),1)]),_:1})]),_:1})]),_:1}),s(e(ee),{class:"enter-x"},{default:a(()=>[d(c(e(o)("sys.login.otherSignIn")),1)]),_:1}),P("div",{class:U(["flex justify-evenly enter-x",`${e(l)}-sign-in-way`])},[s(e(se)),s(e(ae)),s(e(te)),s(e(oe)),s(e(le))],2)]),_:1},8,["model","rules","onKeypress"]),[[L,e(I)]])],64))}});export{fe as _};
