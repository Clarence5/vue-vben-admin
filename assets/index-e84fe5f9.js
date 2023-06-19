import{d as l,f as y,ac as c,h as g,l as h}from"./vue-bfa52d01.js";import{v,J as p,K as f}from"./index-6a97c842.js";function n(t,a="top center 0",o){return l({name:t,props:{group:{type:Boolean,default:!1},mode:{type:String,default:o},origin:{type:String,default:a}},setup(s,{slots:d,attrs:r}){const e=i=>{i.style.transformOrigin=s.origin};return()=>{const i=s.group?h:g;return y(i,c({name:t,mode:s.mode},r,{onBeforeEnter:e}),{default:()=>v(d)})}}})}function m(t,a,o="in-out"){return l({name:t,props:{mode:{type:String,default:o}},setup(s,{attrs:d,slots:r}){return()=>y(g,c({name:t,mode:s.mode},d,{onBeforeEnter:a.beforeEnter,onEnter:a.enter,onLeave:a.leave,onAfterLeave:a.afterLeave,onLeaveCancelled:a.afterLeave}),{default:()=>v(r)})}})}function u(t){return t.charAt(0).toUpperCase()+t.slice(1)}function T(t="",a=!1){const o=a?"width":"height",s=`offset${u(o)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[o]:e.style[o]}},enter(e){const i=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{})},afterEnter:r,enterCancelled:r,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[o]:e.style[o]},e.style.overflow="hidden",e.style[o]=`${e[s]}px`,e.offsetHeight,requestAnimationFrame(()=>e.style[o]="0")},afterLeave:d,leaveCancelled:d};function d(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(e){const i=e._initialStyle[o];e.style.overflow=e._initialStyle.overflow,i!=null&&(e.style[o]=i),Reflect.deleteProperty(e,"_initialStyle")}}const B=l({name:"CollapseTransition",setup(){return{on:{beforeEnter(t){p(t,"collapse-transition"),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(p(t,"collapse-transition"),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}}}}),_=n("fade-transition"),E=n("scale-transition"),P=n("slide-y-transition"),x=n("scroll-y-transition"),L=n("slide-y-reverse-transition"),H=n("scroll-y-reverse-transition"),R=n("slide-x-transition"),b=n("scroll-x-transition"),C=n("slide-x-reverse-transition"),F=n("scroll-x-reverse-transition"),O=n("scale-rotate-transition"),X=m("expand-x-transition",T("",!0)),A=m("expand-transition",T(""));export{X as E,_ as F,E as S,B as _,P as a,x as b,L as c,H as d,R as e,b as f,C as g,F as h,O as i,A as j};
