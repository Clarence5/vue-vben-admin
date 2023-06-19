import{C,M as l,J as R}from"./index-1b6c4a40.js";import{P as B}from"./index-8b2d7081.js";import{d as D,k as c,u as b,n as k,a7 as n,_ as P,a8 as S,a9 as o,f as a,E as i}from"./vue-bfa52d01.js";import{ax as h,ad as y,O as f}from"./antd-2cb51430.js";import{_ as j}from"./index-6a97c842.js";import"./useWindowSizeFn-f3eb2b9f.js";import"./useContentViewHeight-f324fcc5.js";import"./onMountedOrActivated-6ab1435a.js";const v='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',J=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,M=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,O=D({components:{CodeEditor:C,PageWrapper:B,RadioButton:h.Button,RadioGroup:h.Group,ASpace:y},setup(){const t=c(l.JSON),e=c(v);function s(p){const u=p.target.value;if(u===l.JSON){e.value=v;return}if(u===l.HTML){e.value=M;return}if(u===l.JS){e.value=J;return}}function d(){b(t)==="application/json"?f.info({title:"编辑器当前值",content:k(R,{data:JSON.parse(e.value)})}):f.info({title:"编辑器当前值",content:e.value})}return{value:e,modeValue:t,handleModeChange:s,showData:d}}});function A(t,e,s,d,p,u){const _=n("a-button"),r=n("RadioButton"),w=n("RadioGroup"),E=n("a-space"),g=n("CodeEditor"),x=n("PageWrapper");return P(),S(x,{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(E,{size:"middle"},{default:o(()=>[a(_,{onClick:t.showData,type:"primary"},{default:o(()=>[i("获取数据")]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:t.modeValue,"onUpdate:value":e[0]||(e[0]=m=>t.modeValue=m),onChange:t.handleModeChange},{default:o(()=>[a(r,{value:"application/json"},{default:o(()=>[i(" json数据 ")]),_:1}),a(r,{value:"htmlmixed"},{default:o(()=>[i(" html代码 ")]),_:1}),a(r,{value:"javascript"},{default:o(()=>[i(" javascript代码 ")]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(g,{value:t.value,"onUpdate:value":e[1]||(e[1]=m=>t.value=m),mode:t.modeValue},null,8,["value","mode"])]),_:1})}const I=j(O,[["render",A]]);export{I as default};
