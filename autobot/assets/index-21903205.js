import{b as D,_ as W,a as N,j as Y,u as J,Z as ae,i as h,c as T,J as se,m as x,t as $,o as k,s as M,v as Q,a4 as le,N as O,n as L,f as g,h as A,a5 as oe,U as re,b4 as Z,e as ee,x as I,Q as ne,d as ie,ak as R,I as K,l as F,a9 as ce,B as V,p as ue,a0 as ve,a1 as fe,bt as de,r as me,O as pe,g as he,ad as be,w as ye,bh as ge}from"./index-1be12f33.js";import{B as Se,r as we,G as C}from"./el-scrollbar-e88d9e52.js";const j=Symbol("scrollbarContextKey"),ze=D({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Ee="Thumb",_e=N({__name:"thumb",props:ze,setup(s){const t=s,l=Y(j),o=J("scrollbar");l||ae(Ee,"can not inject scrollbar context");const n=h(),c=h(),u=h({}),v=h(!1);let r=!1,b=!1,y=Z?document.onselectstart:null;const a=T(()=>Se[t.vertical?"vertical":"horizontal"]),i=T(()=>we({size:t.size,move:t.move,bar:a.value})),m=T(()=>n.value[a.value.offset]**2/l.wrapElement[a.value.scrollSize]/t.ratio/c.value[a.value.offset]),p=d=>{var w;if(d.stopPropagation(),d.ctrlKey||[1,2].includes(d.button))return;(w=window.getSelection())==null||w.removeAllRanges(),_(d);const H=d.currentTarget;H&&(u.value[a.value.axis]=H[a.value.offset]-(d[a.value.client]-H.getBoundingClientRect()[a.value.direction]))},E=d=>{if(!c.value||!n.value||!l.wrapElement)return;const w=Math.abs(d.target.getBoundingClientRect()[a.value.direction]-d[a.value.client]),H=c.value[a.value.offset]/2,P=(w-H)*100*m.value/n.value[a.value.offset];l.wrapElement[a.value.scroll]=P*l.wrapElement[a.value.scrollSize]/100},_=d=>{d.stopImmediatePropagation(),r=!0,document.addEventListener("mousemove",S),document.addEventListener("mouseup",f),y=document.onselectstart,document.onselectstart=()=>!1},S=d=>{if(!n.value||!c.value||r===!1)return;const w=u.value[a.value.axis];if(!w)return;const H=(n.value.getBoundingClientRect()[a.value.direction]-d[a.value.client])*-1,P=c.value[a.value.offset]-w,te=(H-P)*100*m.value/n.value[a.value.offset];l.wrapElement[a.value.scroll]=te*l.wrapElement[a.value.scrollSize]/100},f=()=>{r=!1,u.value[a.value.axis]=0,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",f),U(),b&&(v.value=!1)},e=()=>{b=!1,v.value=!!t.size},B=()=>{b=!0,v.value=r};se(()=>{U(),document.removeEventListener("mouseup",f)});const U=()=>{document.onselectstart!==y&&(document.onselectstart=y)};return x($(l,"scrollbarElement"),"mousemove",e),x($(l,"scrollbarElement"),"mouseleave",B),(d,w)=>(k(),M(re,{name:g(o).b("fade"),persisted:""},{default:Q(()=>[le(O("div",{ref_key:"instance",ref:n,class:L([g(o).e("bar"),g(o).is(g(a).key)]),onMousedown:E},[O("div",{ref_key:"thumb",ref:c,class:L(g(o).e("thumb")),style:A(g(i)),onMousedown:p},null,38)],34),[[oe,d.always||v.value]])]),_:1},8,["name"]))}});var q=W(_e,[["__file","thumb.vue"]]);const He=D({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Ce=N({__name:"bar",props:He,setup(s,{expose:t}){const l=s,o=Y(j),n=h(0),c=h(0),u=h(""),v=h(""),r=h(1),b=h(1);return t({handleScroll:i=>{if(i){const m=i.offsetHeight-C,p=i.offsetWidth-C;c.value=i.scrollTop*100/m*r.value,n.value=i.scrollLeft*100/p*b.value}},update:()=>{const i=o==null?void 0:o.wrapElement;if(!i)return;const m=i.offsetHeight-C,p=i.offsetWidth-C,E=m**2/i.scrollHeight,_=p**2/i.scrollWidth,S=Math.max(E,l.minSize),f=Math.max(_,l.minSize);r.value=E/(m-E)/(S/(m-S)),b.value=_/(p-_)/(f/(p-f)),v.value=S+C<m?`${S}px`:"",u.value=f+C<p?`${f}px`:""}}),(i,m)=>(k(),ee(ne,null,[I(q,{move:n.value,ratio:b.value,size:u.value,always:i.always},null,8,["move","ratio","size","always"]),I(q,{move:c.value,ratio:r.value,size:v.value,vertical:"",always:i.always},null,8,["move","ratio","size","always"])],64))}});var Te=W(Ce,[["__file","bar.vue"]]);const Be=D({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ie([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Re={scroll:({scrollTop:s,scrollLeft:t})=>[s,t].every(R)},ke="ElScrollbar",Le=N({name:ke}),Ne=N({...Le,props:Be,emits:Re,setup(s,{expose:t,emit:l}){const o=s,n=J("scrollbar");let c,u;const v=h(),r=h(),b=h(),y=h(),a=T(()=>{const e={};return o.height&&(e.height=K(o.height)),o.maxHeight&&(e.maxHeight=K(o.maxHeight)),[o.wrapStyle,e]}),i=T(()=>[o.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!o.native}]),m=T(()=>[n.e("view"),o.viewClass]),p=()=>{var e;r.value&&((e=y.value)==null||e.handleScroll(r.value),l("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function E(e,B){be(e)?r.value.scrollTo(e):R(e)&&R(B)&&r.value.scrollTo(e,B)}const _=e=>{R(e)&&(r.value.scrollTop=e)},S=e=>{R(e)&&(r.value.scrollLeft=e)},f=()=>{var e;(e=y.value)==null||e.update()};return F(()=>o.noresize,e=>{e?(c==null||c(),u==null||u()):({stop:c}=ce(b,f),u=x("resize",f))},{immediate:!0}),F(()=>[o.maxHeight,o.height],()=>{o.native||V(()=>{var e;f(),r.value&&((e=y.value)==null||e.handleScroll(r.value))})}),ue(j,ve({scrollbarElement:v,wrapElement:r})),fe(()=>{o.native||V(()=>{f()})}),de(()=>f()),t({wrapRef:r,update:f,scrollTo:E,setScrollTop:_,setScrollLeft:S,handleScroll:p}),(e,B)=>(k(),ee("div",{ref_key:"scrollbarRef",ref:v,class:L(g(n).b())},[O("div",{ref_key:"wrapRef",ref:r,class:L(g(i)),style:A(g(a)),onScroll:p},[(k(),M(pe(e.tag),{id:e.id,ref_key:"resizeRef",ref:b,class:L(g(m)),style:A(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:Q(()=>[me(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?he("v-if",!0):(k(),M(Te,{key:0,ref_key:"barRef",ref:y,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Pe=W(Ne,[["__file","scrollbar.vue"]]);const Oe=ye(Pe),z=new Map;let G;Z&&(document.addEventListener("mousedown",s=>G=s),document.addEventListener("mouseup",s=>{for(const t of z.values())for(const{documentHandler:l}of t)l(s,G)}));function X(s,t){let l=[];return Array.isArray(t.arg)?l=t.arg:ge(t.arg)&&l.push(t.arg),function(o,n){const c=t.instance.popperRef,u=o.target,v=n==null?void 0:n.target,r=!t||!t.instance,b=!u||!v,y=s.contains(u)||s.contains(v),a=s===u,i=l.length&&l.some(p=>p==null?void 0:p.contains(u))||l.length&&l.includes(v),m=c&&(c.contains(u)||c.contains(v));r||b||y||a||i||m||t.value(o,n)}}const Ae={beforeMount(s,t){z.has(s)||z.set(s,[]),z.get(s).push({documentHandler:X(s,t),bindingFn:t.value})},updated(s,t){z.has(s)||z.set(s,[]);const l=z.get(s),o=l.findIndex(c=>c.bindingFn===t.oldValue),n={documentHandler:X(s,t),bindingFn:t.value};o>=0?l.splice(o,1,n):l.push(n)},unmounted(s){z.delete(s)}};export{Ae as C,Oe as E};