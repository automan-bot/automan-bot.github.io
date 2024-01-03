import{b as K,d as b,a as j,u as I,c as P,cn as Fe,co as ce,ck as Le,aX as pe,aY as fe,bc as ve,a4 as ee,o as g,e as E,n as y,f as e,N,h as M,r as R,ah as z,g as k,s as D,v as _,O as Re,D as q,_ as W,w as ye,$ as x,c9 as me,af as ge,ac as Y,cp as S,H as _e,aq as V,i as he,Q as Te,ay as Ue,as as be,P as H,x as B,cq as De,bM as Oe,bW as Be,aC as Ne,j as je,bs as Q,cr as te,cs as Me,ct as qe,l as se,ar as Ae,J as Ie,p as He,t as Ke,L as ae,M as oe}from"./index-d4898fe2.js";import{o as We,p as ze}from"./BaseUtils-fddb7b15.js";var Ve=1,Xe=4;function ne(a){return We(a,Ve|Xe)}const Ge=K({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:a=>a>=0&&a<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:b(Function),default:a=>`${a}%`}}),Je=["aria-valuenow"],Ye={viewBox:"0 0 100 100"},Qe=["d","stroke","stroke-linecap","stroke-width"],Ze=["d","stroke","opacity","stroke-linecap","stroke-width"],xe={key:0},et=j({name:"ElProgress"}),tt=j({...et,props:Ge,setup(a){const t=a,s={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},u=I("progress"),f=P(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:F(t.percentage)})),c=P(()=>(t.strokeWidth/t.width*100).toFixed(1)),m=P(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(c.value)/2}`,10):0),C=P(()=>{const r=m.value,L=t.type==="dashboard";return`
          M 50 50
          m 0 ${L?"":"-"}${r}
          a ${r} ${r} 0 1 1 0 ${L?"-":""}${r*2}
          a ${r} ${r} 0 1 1 0 ${L?"":"-"}${r*2}
          `}),h=P(()=>2*Math.PI*m.value),$=P(()=>t.type==="dashboard"?.75:1),w=P(()=>`${-1*h.value*(1-$.value)/2}px`),v=P(()=>({strokeDasharray:`${h.value*$.value}px, ${h.value}px`,strokeDashoffset:w.value})),l=P(()=>({strokeDasharray:`${h.value*$.value*(t.percentage/100)}px, ${h.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),o=P(()=>{let r;return t.color?r=F(t.percentage):r=s[t.status]||s.default,r}),d=P(()=>t.status==="warning"?Fe:t.type==="line"?t.status==="success"?ce:Le:t.status==="success"?pe:fe),n=P(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),p=P(()=>t.format(t.percentage));function i(r){const L=100/r.length;return r.map((T,U)=>ee(T)?{color:T,percentage:(U+1)*L}:T).sort((T,U)=>T.percentage-U.percentage)}const F=r=>{var L;const{color:O}=t;if(ve(O))return O(r);if(ee(O))return O;{const T=i(O);for(const U of T)if(U.percentage>r)return U.color;return(L=T[T.length-1])==null?void 0:L.color}};return(r,L)=>(g(),E("div",{class:y([e(u).b(),e(u).m(r.type),e(u).is(r.status),{[e(u).m("without-text")]:!r.showText,[e(u).m("text-inside")]:r.textInside}]),role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(g(),E("div",{key:0,class:y(e(u).b("bar"))},[N("div",{class:y(e(u).be("bar","outer")),style:M({height:`${r.strokeWidth}px`})},[N("div",{class:y([e(u).be("bar","inner"),{[e(u).bem("bar","inner","indeterminate")]:r.indeterminate},{[e(u).bem("bar","inner","striped")]:r.striped},{[e(u).bem("bar","inner","striped-flow")]:r.stripedFlow}]),style:M(e(f))},[(r.showText||r.$slots.default)&&r.textInside?(g(),E("div",{key:0,class:y(e(u).be("bar","innerText"))},[R(r.$slots,"default",{percentage:r.percentage},()=>[N("span",null,z(e(p)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),E("div",{key:1,class:y(e(u).b("circle")),style:M({height:`${r.width}px`,width:`${r.width}px`})},[(g(),E("svg",Ye,[N("path",{class:y(e(u).be("circle","track")),d:e(C),stroke:`var(${e(u).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),fill:"none",style:M(e(v))},null,14,Qe),N("path",{class:y(e(u).be("circle","path")),d:e(C),stroke:e(o),fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),style:M(e(l))},null,14,Ze)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(g(),E("div",{key:2,class:y(e(u).e("text")),style:M({fontSize:`${e(n)}px`})},[R(r.$slots,"default",{percentage:r.percentage},()=>[r.status?(g(),D(e(q),{key:1},{default:_(()=>[(g(),D(Re(e(d))))]),_:1})):(g(),E("span",xe,z(e(p)),1))])],6)):k("v-if",!0)],10,Je))}});var st=W(tt,[["__file","progress.vue"]]);const at=ye(st),ke=Symbol("uploadContextKey"),ot="ElUpload";class nt extends Error{constructor(t,s,u,f){super(t),this.name="UploadAjaxError",this.status=s,this.method=u,this.url=f}}function re(a,t,s){let u;return s.response?u=`${s.response.error||s.response}`:s.responseText?u=`${s.responseText}`:u=`fail to ${t.method} ${a} ${s.status}`,new nt(u,s.status,t.method,a)}function rt(a){const t=a.responseText||a.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const lt=a=>{typeof XMLHttpRequest>"u"&&x(ot,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,s=a.action;t.upload&&t.upload.addEventListener("progress",c=>{const m=c;m.percent=c.total>0?c.loaded/c.total*100:0,a.onProgress(m)});const u=new FormData;if(a.data)for(const[c,m]of Object.entries(a.data))me(m)&&m.length?u.append(c,...m):u.append(c,m);u.append(a.filename,a.file,a.file.name),t.addEventListener("error",()=>{a.onError(re(s,a,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return a.onError(re(s,a,t));a.onSuccess(rt(t))}),t.open(a.method,s,!0),a.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const f=a.headers||{};if(f instanceof Headers)f.forEach((c,m)=>t.setRequestHeader(m,c));else for(const[c,m]of Object.entries(f))ge(m)||t.setRequestHeader(c,String(m));return t.send(u),t},$e=["text","picture","picture-card"];let it=1;const Z=()=>Date.now()+it++,we=K({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:b([Object,Function,Promise]),default:()=>Y({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:b(Array),default:()=>Y([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:$e,default:"text"},httpRequest:{type:b(Function),default:lt},disabled:Boolean,limit:Number}),ut=K({...we,beforeUpload:{type:b(Function),default:S},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:S},onChange:{type:b(Function),default:S},onPreview:{type:b(Function),default:S},onSuccess:{type:b(Function),default:S},onProgress:{type:b(Function),default:S},onError:{type:b(Function),default:S},onExceed:{type:b(Function),default:S}}),dt=K({files:{type:b(Array),default:()=>Y([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:S},listType:{type:String,values:$e,default:"text"}}),ct={remove:a=>!!a},pt=["onKeydown"],ft=["src"],vt=["onClick"],yt=["title"],mt=["onClick"],gt=["onClick"],ht=j({name:"ElUploadList"}),bt=j({...ht,props:dt,emits:ct,setup(a,{emit:t}){const s=a,{t:u}=_e(),f=I("upload"),c=I("icon"),m=I("list"),C=V(),h=he(!1),$=P(()=>[f.b("list"),f.bm("list",s.listType),f.is("disabled",s.disabled)]),w=v=>{t("remove",v)};return(v,l)=>(g(),D(Ne,{tag:"ul",class:y(e($)),name:e(m).b()},{default:_(()=>[(g(!0),E(Te,null,Ue(v.files,o=>(g(),E("li",{key:o.uid||o.name,class:y([e(f).be("list","item"),e(f).is(o.status),{focusing:h.value}]),tabindex:"0",onKeydown:be(d=>!e(C)&&w(o),["delete"]),onFocus:l[0]||(l[0]=d=>h.value=!0),onBlur:l[1]||(l[1]=d=>h.value=!1),onClick:l[2]||(l[2]=d=>h.value=!1)},[R(v.$slots,"default",{file:o},()=>[v.listType==="picture"||o.status!=="uploading"&&v.listType==="picture-card"?(g(),E("img",{key:0,class:y(e(f).be("list","item-thumbnail")),src:o.url,alt:""},null,10,ft)):k("v-if",!0),o.status==="uploading"||v.listType!=="picture-card"?(g(),E("div",{key:1,class:y(e(f).be("list","item-info"))},[N("a",{class:y(e(f).be("list","item-name")),onClick:H(d=>v.handlePreview(o),["prevent"])},[B(e(q),{class:y(e(c).m("document"))},{default:_(()=>[B(e(De))]),_:1},8,["class"]),N("span",{class:y(e(f).be("list","item-file-name")),title:o.name},z(o.name),11,yt)],10,vt),o.status==="uploading"?(g(),D(e(at),{key:0,type:v.listType==="picture-card"?"circle":"line","stroke-width":v.listType==="picture-card"?6:2,percentage:Number(o.percentage),style:M(v.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),N("label",{class:y(e(f).be("list","item-status-label"))},[v.listType==="text"?(g(),D(e(q),{key:0,class:y([e(c).m("upload-success"),e(c).m("circle-check")])},{default:_(()=>[B(e(ce))]),_:1},8,["class"])):["picture-card","picture"].includes(v.listType)?(g(),D(e(q),{key:1,class:y([e(c).m("upload-success"),e(c).m("check")])},{default:_(()=>[B(e(pe))]),_:1},8,["class"])):k("v-if",!0)],2),e(C)?k("v-if",!0):(g(),D(e(q),{key:2,class:y(e(c).m("close")),onClick:d=>w(o)},{default:_(()=>[B(e(fe))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(C)?k("v-if",!0):(g(),E("i",{key:3,class:y(e(c).m("close-tip"))},z(e(u)("el.upload.deleteTip")),3)),v.listType==="picture-card"?(g(),E("span",{key:4,class:y(e(f).be("list","item-actions"))},[N("span",{class:y(e(f).be("list","item-preview")),onClick:d=>v.handlePreview(o)},[B(e(q),{class:y(e(c).m("zoom-in"))},{default:_(()=>[B(e(Oe))]),_:1},8,["class"])],10,mt),e(C)?k("v-if",!0):(g(),E("span",{key:0,class:y(e(f).be("list","item-delete")),onClick:d=>w(o)},[B(e(q),{class:y(e(c).m("delete"))},{default:_(()=>[B(e(Be))]),_:1},8,["class"])],10,gt))],2)):k("v-if",!0)])],42,pt))),128)),R(v.$slots,"append")]),_:3},8,["class","name"]))}});var le=W(bt,[["__file","upload-list.vue"]]);const kt=K({disabled:{type:Boolean,default:!1}}),$t={file:a=>me(a)},wt=["onDrop","onDragover"],Ee="ElUploadDrag",Et=j({name:Ee}),Ct=j({...Et,props:kt,emits:$t,setup(a,{emit:t}){const s=je(ke);s||x(Ee,"usage: <el-upload><el-upload-dragger /></el-upload>");const u=I("upload"),f=he(!1),c=V(),m=h=>{if(c.value)return;f.value=!1,h.stopPropagation();const $=Array.from(h.dataTransfer.files),w=s.accept.value;if(!w){t("file",$);return}const v=$.filter(l=>{const{type:o,name:d}=l,n=d.includes(".")?`.${d.split(".").pop()}`:"",p=o.replace(/\/.*$/,"");return w.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?n===i:/\/\*$/.test(i)?p===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?o===i:!1)});t("file",v)},C=()=>{c.value||(f.value=!0)};return(h,$)=>(g(),E("div",{class:y([e(u).b("dragger"),e(u).is("dragover",f.value)]),onDrop:H(m,["prevent"]),onDragover:H(C,["prevent"]),onDragleave:$[0]||($[0]=H(w=>f.value=!1,["prevent"]))},[R(h.$slots,"default")],42,wt))}});var Pt=W(Ct,[["__file","upload-dragger.vue"]]);const St=K({...we,beforeUpload:{type:b(Function),default:S},onRemove:{type:b(Function),default:S},onStart:{type:b(Function),default:S},onSuccess:{type:b(Function),default:S},onProgress:{type:b(Function),default:S},onError:{type:b(Function),default:S},onExceed:{type:b(Function),default:S}}),Ft=["onKeydown"],Lt=["name","multiple","accept"],Rt=j({name:"ElUploadContent",inheritAttrs:!1}),_t=j({...Rt,props:St,setup(a,{expose:t}){const s=a,u=I("upload"),f=V(),c=Q({}),m=Q(),C=n=>{if(n.length===0)return;const{autoUpload:p,limit:i,fileList:F,multiple:r,onStart:L,onExceed:O}=s;if(i&&F.length+n.length>i){O(n,F);return}r||(n=n.slice(0,1));for(const T of n){const U=T;U.uid=Z(),L(U),p&&h(U)}},h=async n=>{if(m.value.value="",!s.beforeUpload)return w(n);let p,i={};try{const r=s.data,L=s.beforeUpload(n);i=te(s.data)?ne(s.data):s.data,p=await L,te(s.data)&&ze(r,i)&&(i=ne(s.data))}catch{p=!1}if(p===!1){s.onRemove(n);return}let F=n;p instanceof Blob&&(p instanceof File?F=p:F=new File([p],n.name,{type:n.type})),w(Object.assign(F,{uid:n.uid}),i)},$=async(n,p)=>ve(n)?n(p):n,w=async(n,p)=>{const{headers:i,data:F,method:r,withCredentials:L,name:O,action:T,onProgress:U,onSuccess:Ce,onError:Pe,httpRequest:Se}=s;try{p=await $(p??F,n)}catch{s.onRemove(n);return}const{uid:X}=n,G={headers:i||{},withCredentials:L,file:n,data:p,method:r,filename:O,action:T,onProgress:A=>{U(A,n)},onSuccess:A=>{Ce(A,n),delete c.value[X]},onError:A=>{Pe(A,n),delete c.value[X]}},J=Se(G);c.value[X]=J,J instanceof Promise&&J.then(G.onSuccess,G.onError)},v=n=>{const p=n.target.files;p&&C(Array.from(p))},l=()=>{f.value||(m.value.value="",m.value.click())},o=()=>{l()};return t({abort:n=>{Me(c.value).filter(n?([i])=>String(n.uid)===i:()=>!0).forEach(([i,F])=>{F instanceof XMLHttpRequest&&F.abort(),delete c.value[i]})},upload:h}),(n,p)=>(g(),E("div",{class:y([e(u).b(),e(u).m(n.listType),e(u).is("drag",n.drag)]),tabindex:"0",onClick:l,onKeydown:be(H(o,["self"]),["enter","space"])},[n.drag?(g(),D(Pt,{key:0,disabled:e(f),onFile:C},{default:_(()=>[R(n.$slots,"default")]),_:3},8,["disabled"])):R(n.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:m,class:y(e(u).e("input")),name:n.name,multiple:n.multiple,accept:n.accept,type:"file",onChange:v,onClick:p[0]||(p[0]=H(()=>{},["stop"]))},null,42,Lt)],42,Ft))}});var ie=W(_t,[["__file","upload-content.vue"]]);const ue="ElUpload",de=a=>{var t;(t=a.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(a.url)},Tt=(a,t)=>{const s=qe(a,"fileList",void 0,{passive:!0}),u=l=>s.value.find(o=>o.uid===l.uid);function f(l){var o;(o=t.value)==null||o.abort(l)}function c(l=["ready","uploading","success","fail"]){s.value=s.value.filter(o=>!l.includes(o.status))}const m=(l,o)=>{const d=u(o);d&&(console.error(l),d.status="fail",s.value.splice(s.value.indexOf(d),1),a.onError(l,d,s.value),a.onChange(d,s.value))},C=(l,o)=>{const d=u(o);d&&(a.onProgress(l,d,s.value),d.status="uploading",d.percentage=Math.round(l.percent))},h=(l,o)=>{const d=u(o);d&&(d.status="success",d.response=l,a.onSuccess(l,d,s.value),a.onChange(d,s.value))},$=l=>{ge(l.uid)&&(l.uid=Z());const o={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(a.listType==="picture-card"||a.listType==="picture")try{o.url=URL.createObjectURL(l)}catch(d){Ae(ue,d.message),a.onError(d,o,s.value)}s.value=[...s.value,o],a.onChange(o,s.value)},w=async l=>{const o=l instanceof File?u(l):l;o||x(ue,"file to be removed not found");const d=n=>{f(n);const p=s.value;p.splice(p.indexOf(n),1),a.onRemove(n,p),de(n)};a.beforeRemove?await a.beforeRemove(o,s.value)!==!1&&d(o):d(o)};function v(){s.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var o;return l&&((o=t.value)==null?void 0:o.upload(l))})}return se(()=>a.listType,l=>{l!=="picture-card"&&l!=="picture"||(s.value=s.value.map(o=>{const{raw:d,url:n}=o;if(!n&&d)try{o.url=URL.createObjectURL(d)}catch(p){a.onError(p,o,s.value)}return o}))}),se(s,l=>{for(const o of l)o.uid||(o.uid=Z()),o.status||(o.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:f,clearFiles:c,handleError:m,handleProgress:C,handleStart:$,handleSuccess:h,handleRemove:w,submit:v,revokeFileObjectURL:de}},Ut=j({name:"ElUpload"}),Dt=j({...Ut,props:ut,setup(a,{expose:t}){const s=a,u=V(),f=Q(),{abort:c,submit:m,clearFiles:C,uploadFiles:h,handleStart:$,handleError:w,handleRemove:v,handleSuccess:l,handleProgress:o,revokeFileObjectURL:d}=Tt(s,f),n=P(()=>s.listType==="picture-card"),p=P(()=>({...s,fileList:h.value,onStart:$,onProgress:o,onSuccess:l,onError:w,onRemove:v}));return Ie(()=>{h.value.forEach(d)}),He(ke,{accept:Ke(s,"accept")}),t({abort:c,submit:m,clearFiles:C,handleStart:$,handleRemove:v}),(i,F)=>(g(),E("div",null,[e(n)&&i.showFileList?(g(),D(le,{key:0,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(v)},ae({append:_(()=>[B(ie,oe({ref_key:"uploadRef",ref:f},e(p)),{default:_(()=>[i.$slots.trigger?R(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?R(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:_(({file:r})=>[R(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0),!e(n)||e(n)&&!i.showFileList?(g(),D(ie,oe({key:1,ref_key:"uploadRef",ref:f},e(p)),{default:_(()=>[i.$slots.trigger?R(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?R(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),i.$slots.trigger?R(i.$slots,"default",{key:2}):k("v-if",!0),R(i.$slots,"tip"),!e(n)&&i.showFileList?(g(),D(le,{key:3,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(v)},ae({_:2},[i.$slots.file?{name:"default",fn:_(({file:r})=>[R(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0)]))}});var Ot=W(Dt,[["__file","upload.vue"]]);const jt=ye(Ot);export{jt as E};
