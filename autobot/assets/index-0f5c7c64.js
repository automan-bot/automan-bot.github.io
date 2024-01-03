import{cf as kt,d as B,G as mn,c as R,bc as De,l as F,a2 as qe,b5 as Oe,ak as jt,f as c,bs as hn,i as j,J as Se,cv as yt,cw as yn,aB as bn,cx as wn,cy as On,b as ee,al as Ze,p as Ce,a as L,r as ie,_ as se,u as Me,j as le,o as Z,e as $e,n as _t,h as Tn,cp as Je,a5 as Ft,cz as En,ae as Cn,Q as An,cA as Rn,cd as xn,x as Ae,cB as Dt,bh as He,af as Lt,s as ce,v as te,M as Xe,g as Re,b1 as Pn,bu as bt,b8 as Sn,w as Nt,E as wt,c9 as Mn,t as we,a6 as Bn,U as In,b9 as kn,cC as jn,A as _n,k as Fn,cD as Dn,ah as Ln}from"./index-d4898fe2.js";import{i as Nn}from"./isUndefined-aa0326a0.js";const Y=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},Kr=e=>t=>t.pointerType==="mouse"?e(t):void 0,$n=kt({type:B(Boolean),default:null}),Hn=kt({type:B(Function)}),$t=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:$n,[n]:Hn};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:f,onHide:d})=>{const y=mn(),{emit:g}=y,m=y.props,v=R(()=>De(m[n])),T=R(()=>m[e]===null),p=O=>{i.value!==!0&&(i.value=!0,u&&(u.value=O),De(f)&&f(O))},w=O=>{i.value!==!1&&(i.value=!1,u&&(u.value=O),De(d)&&d(O))},E=O=>{if(m.disabled===!0||De(l)&&!l())return;const A=v.value&&Oe;A&&g(t,!0),(T.value||!A)&&p(O)},h=O=>{if(m.disabled===!0||!Oe)return;const A=v.value&&Oe;A&&g(t,!1),(T.value||!A)&&w(O)},C=O=>{jt(O)&&(m.disabled&&O?v.value&&g(t,!1):i.value!==O&&(O?p():w()))},x=()=>{i.value?h():E()};return F(()=>m[e],C),s&&y.appContext.config.globalProperties.$route!==void 0&&F(()=>({...y.proxy.$route}),()=>{s.value&&i.value&&h()}),qe(()=>{C(m[e])}),{hide:h,show:E,toggle:x,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:o}};$t("modelValue");var H="top",z="bottom",K="right",W="left",Ye="auto",Be=[H,z,K,W],fe="start",xe="end",Wn="clippingParents",Ht="viewport",be="popper",qn="reference",Ot=Be.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+xe])},[]),Qe=[].concat(Be,[Ye]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+xe])},[]),zn="beforeRead",Kn="read",Un="afterRead",Vn="beforeMain",Zn="main",Jn="afterMain",Gn="beforeWrite",Xn="write",Yn="afterWrite",Qn=[zn,Kn,Un,Vn,Zn,Jn,Gn,Xn,Yn];function G(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function et(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function eo(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!q(a)||!G(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function to(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=i.reduce(function(s,l){return s[l]="",s},{});!q(r)||!G(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var Wt={name:"applyStyles",enabled:!0,phase:"write",fn:eo,effect:to,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(q(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=ve(n.width)/i||1),a>0&&(r=ve(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function tt(e){var t=ge(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function qt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&et(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Q(e){return U(e).getComputedStyle(e)}function no(e){return["table","td","th"].indexOf(G(e))>=0}function ne(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(et(e)?e.host:null)||ne(e)}function Tt(e){return!q(e)||Q(e).position==="fixed"?null:e.offsetParent}function oo(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&q(e)){var o=Q(e);if(o.position==="fixed")return null}var r=ze(e);for(et(r)&&(r=r.host);q(r)&&["html","body"].indexOf(G(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Ie(e){for(var t=U(e),n=Tt(e);n&&no(n)&&Q(n).position==="static";)n=Tt(n);return n&&(G(n)==="html"||G(n)==="body"&&Q(n).position==="static")?t:n||oo(e)||t}function nt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,n){return ae(e,We(t,n))}function ro(e,t,n){var o=Te(e,t,n);return o>n?n:o}function zt(){return{top:0,right:0,bottom:0,left:0}}function Kt(e){return Object.assign({},zt(),e)}function Ut(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var ao=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Kt(typeof e!="number"?e:Ut(e,Be))};function io(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,u=J(n.placement),s=nt(u),l=[W,K].indexOf(u)>=0,f=l?"height":"width";if(!(!a||!i)){var d=ao(r.padding,n),y=tt(a),g=s==="y"?H:W,m=s==="y"?z:K,v=n.rects.reference[f]+n.rects.reference[s]-i[s]-n.rects.popper[f],T=i[s]-n.rects.reference[s],p=Ie(a),w=p?s==="y"?p.clientHeight||0:p.clientWidth||0:0,E=v/2-T/2,h=d[g],C=w-y[f]-d[m],x=w/2-y[f]/2+E,O=Te(h,x,C),A=s;n.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-x,t)}}function so(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!qt(t.elements.popper,r)||(t.elements.arrow=r))}var lo={name:"arrow",enabled:!0,phase:"main",fn:io,effect:so,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var uo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function po(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(n*r)/r||0}}function Et(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed,y=i.x,g=y===void 0?0:y,m=i.y,v=m===void 0?0:m,T=typeof f=="function"?f({x:g,y:v}):{x:g,y:v};g=T.x,v=T.y;var p=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),E=W,h=H,C=window;if(l){var x=Ie(n),O="clientHeight",A="clientWidth";if(x===U(n)&&(x=ne(n),Q(x).position!=="static"&&u==="absolute"&&(O="scrollHeight",A="scrollWidth")),x=x,r===H||(r===W||r===K)&&a===xe){h=z;var k=d&&x===C&&C.visualViewport?C.visualViewport.height:x[O];v-=k-o.height,v*=s?1:-1}if(r===W||(r===H||r===z)&&a===xe){E=K;var P=d&&x===C&&C.visualViewport?C.visualViewport.width:x[A];g-=P-o.width,g*=s?1:-1}}var M=Object.assign({position:u},l&&uo),D=f===!0?po({x:g,y:v}):{x:g,y:v};if(g=D.x,v=D.y,s){var S;return Object.assign({},M,(S={},S[h]=w?"0":"",S[E]=p?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",S))}return Object.assign({},M,(t={},t[h]=w?v+"px":"",t[E]=p?g+"px":"",t.transform="",t))}function co(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,i=a===void 0?!0:a,u=n.roundOffsets,s=u===void 0?!0:u,l={placement:J(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Et(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Et(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Vt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:co,data:{}},Le={passive:!0};function fo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,i=o.resize,u=i===void 0?!0:i,s=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",n.update,Le)}),u&&s.addEventListener("resize",n.update,Le),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",n.update,Le)}),u&&s.removeEventListener("resize",n.update,Le)}}var Zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fo,data:{}},vo={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return vo[t]})}var go={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return go[t]})}function ot(e){var t=U(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function rt(e){return ge(ne(e)).left+ot(e).scrollLeft}function mo(e){var t=U(e),n=ne(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:i+rt(e),y:u}}function ho(e){var t,n=ne(e),o=ot(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ae(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+rt(e),s=-o.scrollTop;return Q(r||n).direction==="rtl"&&(u+=ae(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function at(e){var t=Q(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Jt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:q(e)&&at(e)?e:Jt(ze(e))}function Ee(e,t){var n;t===void 0&&(t=[]);var o=Jt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=U(o),i=r?[a].concat(a.visualViewport||[],at(o)?o:[]):o,u=t.concat(i);return r?u:u.concat(Ee(ze(i)))}function Ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yo(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function At(e,t){return t===Ht?Ge(mo(e)):de(t)?yo(t):Ge(ho(ne(e)))}function bo(e){var t=Ee(ze(e)),n=["absolute","fixed"].indexOf(Q(e).position)>=0,o=n&&q(e)?Ie(e):e;return de(o)?t.filter(function(r){return de(r)&&qt(r,o)&&G(r)!=="body"}):[]}function wo(e,t,n){var o=t==="clippingParents"?bo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce(function(u,s){var l=At(e,s);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},At(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Gt(e){var t=e.reference,n=e.element,o=e.placement,r=o?J(o):null,a=o?me(o):null,i=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,s;switch(r){case H:s={x:i,y:t.y-n.height};break;case z:s={x:i,y:t.y+t.height};break;case K:s={x:t.x+t.width,y:u};break;case W:s={x:t.x-n.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?nt(r):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case fe:s[l]=s[l]-(t[f]/2-n[f]/2);break;case xe:s[l]=s[l]+(t[f]/2-n[f]/2);break}}return s}function Pe(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,i=a===void 0?Wn:a,u=n.rootBoundary,s=u===void 0?Ht:u,l=n.elementContext,f=l===void 0?be:l,d=n.altBoundary,y=d===void 0?!1:d,g=n.padding,m=g===void 0?0:g,v=Kt(typeof m!="number"?m:Ut(m,Be)),T=f===be?qn:be,p=e.rects.popper,w=e.elements[y?T:f],E=wo(de(w)?w:w.contextElement||ne(e.elements.popper),i,s),h=ge(e.elements.reference),C=Gt({reference:h,element:p,strategy:"absolute",placement:r}),x=Ge(Object.assign({},p,C)),O=f===be?x:h,A={top:E.top-O.top+v.top,bottom:O.bottom-E.bottom+v.bottom,left:E.left-O.left+v.left,right:O.right-E.right+v.right},k=e.modifiersData.offset;if(f===be&&k){var P=k[r];Object.keys(A).forEach(function(M){var D=[K,z].indexOf(M)>=0?1:-1,S=[H,z].indexOf(M)>=0?"y":"x";A[M]+=P[S]*D})}return A}function Oo(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,u=n.flipVariations,s=n.allowedAutoPlacements,l=s===void 0?Qe:s,f=me(o),d=f?u?Ot:Ot.filter(function(m){return me(m)===f}):Be,y=d.filter(function(m){return l.indexOf(m)>=0});y.length===0&&(y=d);var g=y.reduce(function(m,v){return m[v]=Pe(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[J(v)],m},{});return Object.keys(g).sort(function(m,v){return g[m]-g[v]})}function To(e){if(J(e)===Ye)return[];var t=Ne(e);return[Ct(e),t,Ct(t)]}function Eo(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!0:i,s=n.fallbackPlacements,l=n.padding,f=n.boundary,d=n.rootBoundary,y=n.altBoundary,g=n.flipVariations,m=g===void 0?!0:g,v=n.allowedAutoPlacements,T=t.options.placement,p=J(T),w=p===T,E=s||(w||!m?[Ne(T)]:To(T)),h=[T].concat(E).reduce(function(oe,X){return oe.concat(J(X)===Ye?Oo(t,{placement:X,boundary:f,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:v}):X)},[]),C=t.rects.reference,x=t.rects.popper,O=new Map,A=!0,k=h[0],P=0;P<h.length;P++){var M=h[P],D=J(M),S=me(M)===fe,N=[H,z].indexOf(D)>=0,_=N?"width":"height",I=Pe(t,{placement:M,boundary:f,rootBoundary:d,altBoundary:y,padding:l}),b=N?S?K:W:S?z:H;C[_]>x[_]&&(b=Ne(b));var $=Ne(b),V=[];if(a&&V.push(I[D]<=0),u&&V.push(I[b]<=0,I[$]<=0),V.every(function(oe){return oe})){k=M,A=!1;break}O.set(M,V)}if(A)for(var ke=m?3:1,Ke=function(oe){var X=h.find(function(_e){var ye=O.get(_e);if(ye)return ye.slice(0,oe).every(function(ue){return ue})});if(X)return k=X,"break"},he=ke;he>0;he--){var je=Ke(he);if(je==="break")break}t.placement!==k&&(t.modifiersData[o]._skip=!0,t.placement=k,t.reset=!0)}}var Co={name:"flip",enabled:!0,phase:"main",fn:Eo,requiresIfExists:["offset"],data:{_skip:!1}};function Rt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xt(e){return[H,K,z,W].some(function(t){return e[t]>=0})}function Ao(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),s=Rt(i,o),l=Rt(u,r,a),f=xt(s),d=xt(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}var Ro={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ao};function xo(e,t,n){var o=J(e),r=[W,H].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[W,K].indexOf(o)>=0?{x:u,y:i}:{x:i,y:u}}function Po(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,i=Qe.reduce(function(f,d){return f[d]=xo(d,t.rects,a),f},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=i}var So={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Po};function Mo(e){var t=e.state,n=e.name;t.modifiersData[n]=Gt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Xt={name:"popperOffsets",enabled:!0,phase:"read",fn:Mo,data:{}};function Bo(e){return e==="x"?"y":"x"}function Io(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!1:i,s=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.padding,y=n.tether,g=y===void 0?!0:y,m=n.tetherOffset,v=m===void 0?0:m,T=Pe(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:f}),p=J(t.placement),w=me(t.placement),E=!w,h=nt(p),C=Bo(h),x=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,k=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(x){if(a){var S,N=h==="y"?H:W,_=h==="y"?z:K,I=h==="y"?"height":"width",b=x[h],$=b+T[N],V=b-T[_],ke=g?-A[I]/2:0,Ke=w===fe?O[I]:A[I],he=w===fe?-A[I]:-O[I],je=t.elements.arrow,oe=g&&je?tt(je):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:zt(),_e=X[N],ye=X[_],ue=Te(0,O[I],oe[I]),un=E?O[I]/2-ke-ue-_e-P.mainAxis:Ke-ue-_e-P.mainAxis,pn=E?-O[I]/2+ke+ue+ye+P.mainAxis:he+ue+ye+P.mainAxis,Ue=t.elements.arrow&&Ie(t.elements.arrow),cn=Ue?h==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,ut=(S=M==null?void 0:M[h])!=null?S:0,fn=b+un-ut-cn,dn=b+pn-ut,pt=Te(g?We($,fn):$,b,g?ae(V,dn):V);x[h]=pt,D[h]=pt-b}if(u){var ct,vn=h==="x"?H:W,gn=h==="x"?z:K,re=x[C],Fe=C==="y"?"height":"width",ft=re+T[vn],dt=re-T[gn],Ve=[H,W].indexOf(p)!==-1,vt=(ct=M==null?void 0:M[C])!=null?ct:0,gt=Ve?ft:re-O[Fe]-A[Fe]-vt+P.altAxis,mt=Ve?re+O[Fe]+A[Fe]-vt-P.altAxis:dt,ht=g&&Ve?ro(gt,re,mt):Te(g?gt:ft,re,g?mt:dt);x[C]=ht,D[C]=ht-re}t.modifiersData[o]=D}}var ko={name:"preventOverflow",enabled:!0,phase:"main",fn:Io,requiresIfExists:["offset"]};function jo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function _o(e){return e===U(e)||!q(e)?ot(e):jo(e)}function Fo(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Do(e,t,n){n===void 0&&(n=!1);var o=q(t),r=q(t)&&Fo(t),a=ne(t),i=ge(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||at(a))&&(u=_o(t)),q(t)?(s=ge(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=rt(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function Lo(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!n.has(u)){var s=t.get(u);s&&r(s)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function No(e){var t=Lo(e);return Qn.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function $o(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ho(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function it(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?Pt:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},f=[],d=!1,y={state:l,setOptions:function(v){var T=typeof v=="function"?v(l.options):v;m(),l.options=Object.assign({},a,l.options,T),l.scrollParents={reference:de(i)?Ee(i):i.contextElement?Ee(i.contextElement):[],popper:Ee(u)};var p=No(Ho([].concat(o,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),g(),y.update()},forceUpdate:function(){if(!d){var v=l.elements,T=v.reference,p=v.popper;if(St(T,p)){l.rects={reference:Do(T,Ie(p),l.options.strategy==="fixed"),popper:tt(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(A){return l.modifiersData[A.name]=Object.assign({},A.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var E=l.orderedModifiers[w],h=E.fn,C=E.options,x=C===void 0?{}:C,O=E.name;typeof h=="function"&&(l=h({state:l,options:x,name:O,instance:y})||l)}}}},update:$o(function(){return new Promise(function(v){y.forceUpdate(),v(l)})}),destroy:function(){m(),d=!0}};if(!St(i,u))return y;y.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var T=v.name,p=v.options,w=p===void 0?{}:p,E=v.effect;if(typeof E=="function"){var h=E({state:l,name:T,instance:y,options:w}),C=function(){};f.push(h||C)}})}function m(){f.forEach(function(v){return v()}),f=[]}return y}}it();var Wo=[Zt,Xt,Vt,Wt];it({defaultModifiers:Wo});var qo=[Zt,Xt,Vt,Wt,So,Co,ko,lo,Ro],zo=it({defaultModifiers:qo});const Ko=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Uo(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=R(()=>{const{onFirstUpdate:s,placement:l,strategy:f,modifiers:d}=c(n);return{onFirstUpdate:s,placement:l||"bottom",strategy:f||"absolute",modifiers:[...d||[],o,{name:"applyStyles",enabled:!1}]}}),a=hn(),i=j({styles:{popper:{position:c(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return F(r,s=>{const l=c(a);l&&l.setOptions(s)},{deep:!0}),F([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=zo(s,l,c(r)))}),Se(()=>{u()}),{state:R(()=>{var s;return{...((s=c(a))==null?void 0:s.state)||{}}}),styles:R(()=>c(i).styles),attributes:R(()=>c(i).attributes),update:()=>{var s;return(s=c(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=c(a))==null?void 0:s.forceUpdate()},instanceRef:R(()=>c(a))}};function Uo(e){const t=Object.keys(e.elements),n=yt(t.map(r=>[r,e.styles[r]||{}])),o=yt(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function Mt(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return yn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let Bt;const Yt=()=>{const e=wn(),t=On(),n=R(()=>`${e.value}-popper-container-${t.prefix}`),o=R(()=>`#${n.value}`);return{id:n,selector:o}},Vo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Zo=()=>{const{id:e,selector:t}=Yt();return bn(()=>{Oe&&!Bt&&!document.body.querySelector(t.value)&&(Bt=Vo(e.value))}),{id:e,selector:t}},Jo=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Go=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:u}=Mt();return{onOpen:f=>{a(()=>{o(f);const d=c(n);Ze(d)&&d>0&&i(()=>{r(f)},d)},c(e))},onClose:f=>{u(),a(()=>{r(f)},c(t))}}},Qt=Symbol("elForwardRef"),Xo=e=>{Ce(Qt,{setForwardRef:n=>{e.value=n}})},Yo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),st=Symbol("popper"),en=Symbol("popperContent"),Qo=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],tn=ee({role:{type:String,values:Qo,default:"tooltip"}}),er=L({name:"ElPopper",inheritAttrs:!1}),tr=L({...er,props:tn,setup(e,{expose:t}){const n=e,o=j(),r=j(),a=j(),i=j(),u=R(()=>n.role),s={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Ce(st,s),(l,f)=>ie(l.$slots,"default")}});var nr=se(tr,[["__file","popper.vue"]]);const nn=ee({arrowOffset:{type:Number,default:5}}),or=L({name:"ElPopperArrow",inheritAttrs:!1}),rr=L({...or,props:nn,setup(e,{expose:t}){const n=e,o=Me("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=le(en,void 0);return F(()=>n.arrowOffset,u=>{r.value=u}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(Z(),$e("span",{ref_key:"arrowRef",ref:a,class:_t(c(o).e("arrow")),style:Tn(c(i)),"data-popper-arrow":""},null,6))}});var ar=se(rr,[["__file","arrow.vue"]]);const ir="ElOnlyChild",sr=L({name:ir,setup(e,{slots:t,attrs:n}){var o;const r=le(Qt),a=Yo((o=r==null?void 0:r.setForwardRef)!=null?o:Je);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,n);if(!u||u.length>1)return null;const s=on(u);return s?Ft(En(s,n),[[a]]):null}}});function on(e){if(!e)return null;const t=e;for(const n of t){if(Cn(n))switch(n.type){case xn:continue;case Rn:case"svg":return It(n);case An:return on(n.children);default:return n}return It(n)}return null}function It(e){const t=Me("only-child");return Ae("span",{class:t.e("content")},[e])}const rn=ee({virtualRef:{type:B(Object)},virtualTriggering:Boolean,onMouseenter:{type:B(Function)},onMouseleave:{type:B(Function)},onClick:{type:B(Function)},onKeydown:{type:B(Function)},onFocus:{type:B(Function)},onBlur:{type:B(Function)},onContextmenu:{type:B(Function)},id:String,open:Boolean}),lr=L({name:"ElPopperTrigger",inheritAttrs:!1}),ur=L({...lr,props:rn,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=le(st,void 0);Xo(r);const a=R(()=>u.value?n.id:void 0),i=R(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=R(()=>{if(o&&o.value!=="tooltip")return o.value}),s=R(()=>u.value?`${n.open}`:void 0);let l;return qe(()=>{F(()=>n.virtualRef,f=>{f&&(r.value=Dt(f))},{immediate:!0}),F(r,(f,d)=>{l==null||l(),l=void 0,He(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(y=>{var g;const m=n[y];m&&(f.addEventListener(y.slice(2).toLowerCase(),m),(g=d==null?void 0:d.removeEventListener)==null||g.call(d,y.slice(2).toLowerCase(),m))}),l=F([a,i,u,s],y=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Lt(y[m])?f.removeAttribute(g):f.setAttribute(g,y[m])})},{immediate:!0})),He(d)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(y=>d.removeAttribute(y))},{immediate:!0})}),Se(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(f,d)=>f.virtualTriggering?Re("v-if",!0):(Z(),ce(c(sr),Xe({key:0},f.$attrs,{"aria-controls":c(a),"aria-describedby":c(i),"aria-expanded":c(s),"aria-haspopup":c(u)}),{default:te(()=>[ie(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var pr=se(ur,[["__file","trigger.vue"]]);const cr=["fixed","absolute"],fr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:B(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Qe,default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},strategy:{type:String,values:cr,default:"absolute"}}),an=ee({...fr,id:String,style:{type:B([String,Array,Object])},className:{type:B([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:B([String,Array,Object])},popperStyle:{type:B([String,Array,Object])},referenceEl:{type:B(Object)},triggerTargetEl:{type:B(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),dr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},vr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...mr(e),...t]};return hr(a,r==null?void 0:r.modifiers),a},gr=e=>{if(Oe)return Dt(e)};function mr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function hr(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const yr=0,br=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=le(st,void 0),a=j(),i=j(),u=R(()=>({name:"eventListeners",enabled:!!e.visible})),s=R(()=>{var p;const w=c(a),E=(p=c(i))!=null?p:yr;return{name:"arrow",enabled:!Nn(w),options:{element:w,padding:E}}}),l=R(()=>({onFirstUpdate:()=>{m()},...vr(e,[c(s),c(u)])})),f=R(()=>gr(e.referenceEl)||c(o)),{attributes:d,state:y,styles:g,update:m,forceUpdate:v,instanceRef:T}=Ko(f,n,l);return F(T,p=>t.value=p),qe(()=>{F(()=>{var p;return(p=c(f))==null?void 0:p.getBoundingClientRect()},()=>{m()})}),{attributes:d,arrowRef:a,contentRef:n,instanceRef:T,state:y,styles:g,role:r,forceUpdate:v,update:m}},wr=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=Pn(),a=Me("popper"),i=R(()=>c(t).popper),u=j(Ze(e.zIndex)?e.zIndex:r()),s=R(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=R(()=>[{zIndex:c(u)},c(n).popper,e.popperStyle||{}]),f=R(()=>o.value==="dialog"?"false":void 0),d=R(()=>c(n).arrow||{});return{ariaModal:f,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Ze(e.zIndex)?e.zIndex:r()}}},Or=(e,t)=>{const n=j(!1),o=j();return{focusStartRef:o,trapped:n,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!n.value&&(l.target&&(o.value=l.target),n.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Tr=L({name:"ElPopperContent"}),Er=L({...Tr,props:an,emits:dr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:f}=Or(o,n),{attributes:d,arrowRef:y,contentRef:g,styles:m,instanceRef:v,role:T,update:p}=br(o),{ariaModal:w,arrowStyle:E,contentAttrs:h,contentClass:C,contentStyle:x,updateZIndex:O}=wr(o,{styles:m,attributes:d,role:T}),A=le(bt,void 0),k=j();Ce(en,{arrowStyle:E,arrowRef:y,arrowOffset:k}),A&&(A.addInputId||A.removeInputId)&&Ce(bt,{...A,addInputId:Je,removeInputId:Je});let P;const M=(S=!0)=>{p(),S&&O()},D=()=>{M(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return qe(()=>{F(()=>o.triggerTargetEl,(S,N)=>{P==null||P(),P=void 0;const _=c(S||g.value),I=c(N||g.value);He(_)&&(P=F([T,()=>o.ariaLabel,w,()=>o.id],b=>{["role","aria-label","aria-modal","id"].forEach(($,V)=>{Lt(b[V])?_.removeAttribute($):_.setAttribute($,b[V])})},{immediate:!0})),I!==_&&He(I)&&["role","aria-label","aria-modal","id"].forEach(b=>{I.removeAttribute(b)})},{immediate:!0}),F(()=>o.visible,D,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:M,contentStyle:x}),(S,N)=>(Z(),$e("div",Xe({ref_key:"contentRef",ref:g},c(h),{style:c(x),class:c(C),tabindex:"-1",onMouseenter:N[0]||(N[0]=_=>S.$emit("mouseenter",_)),onMouseleave:N[1]||(N[1]=_=>S.$emit("mouseleave",_))}),[Ae(c(Sn),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(g),"focus-start-el":c(r),onFocusAfterTrapped:c(u),onFocusAfterReleased:c(i),onFocusin:c(s),onFocusoutPrevented:c(l),onReleaseRequested:c(f)},{default:te(()=>[ie(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Cr=se(Er,[["__file","content.vue"]]);const Ar=Nt(nr),lt=Symbol("elTooltip"),sn=ee({...Jo,...an,appendTo:{type:B([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:B(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),ln=ee({...rn,disabled:Boolean,trigger:{type:B([String,Array]),default:"hover"},triggerKeys:{type:B(Array),default:()=>[wt.enter,wt.space]}}),{useModelToggleProps:Rr,useModelToggleEmits:xr,useModelToggle:Pr}=$t("visible"),Sr=ee({...tn,...Rr,...sn,...ln,...nn,showArrow:{type:Boolean,default:!0}}),Mr=[...xr,"before-show","before-hide","show","hide","open","close"],Br=(e,t)=>Mn(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{Br(c(e),t)&&n(o)},Ir=L({name:"ElTooltipTrigger"}),kr=L({...Ir,props:ln,setup(e,{expose:t}){const n=e,o=Me("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=le(lt,void 0),f=j(null),d=()=>{if(c(r)||n.disabled)return!0},y=we(n,"trigger"),g=Y(d,pe(y,"hover",u)),m=Y(d,pe(y,"hover",s)),v=Y(d,pe(y,"click",h=>{h.button===0&&l(h)})),T=Y(d,pe(y,"focus",u)),p=Y(d,pe(y,"focus",s)),w=Y(d,pe(y,"contextmenu",h=>{h.preventDefault(),l(h)})),E=Y(d,h=>{const{code:C}=h;n.triggerKeys.includes(C)&&(h.preventDefault(),l(h))});return t({triggerRef:f}),(h,C)=>(Z(),ce(c(pr),{id:c(a),"virtual-ref":h.virtualRef,open:c(i),"virtual-triggering":h.virtualTriggering,class:_t(c(o).e("trigger")),onBlur:c(p),onClick:c(v),onContextmenu:c(w),onFocus:c(T),onMouseenter:c(g),onMouseleave:c(m),onKeydown:c(E)},{default:te(()=>[ie(h.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var jr=se(kr,[["__file","trigger.vue"]]);const _r=L({name:"ElTooltipContent",inheritAttrs:!1}),Fr=L({..._r,props:sn,setup(e,{expose:t}){const n=e,{selector:o}=Yt(),r=Me("tooltip"),a=j(null),i=j(!1),{controlled:u,id:s,open:l,trigger:f,onClose:d,onOpen:y,onShow:g,onHide:m,onBeforeShow:v,onBeforeHide:T}=le(lt,void 0),p=R(()=>n.transition||`${r.namespace.value}-fade-in-linear`),w=R(()=>n.persistent);Se(()=>{i.value=!0});const E=R(()=>c(w)?!0:c(l)),h=R(()=>n.disabled?!1:c(l)),C=R(()=>n.appendTo||o.value),x=R(()=>{var b;return(b=n.style)!=null?b:{}}),O=R(()=>!c(l)),A=()=>{m()},k=()=>{if(c(u))return!0},P=Y(k,()=>{n.enterable&&c(f)==="hover"&&y()}),M=Y(k,()=>{c(f)==="hover"&&d()}),D=()=>{var b,$;($=(b=a.value)==null?void 0:b.updatePopper)==null||$.call(b),v==null||v()},S=()=>{T==null||T()},N=()=>{g(),I=jn(R(()=>{var b;return(b=a.value)==null?void 0:b.popperContentRef}),()=>{if(c(u))return;c(f)!=="hover"&&d()})},_=()=>{n.virtualTriggering||d()};let I;return F(()=>c(l),b=>{b||I==null||I()},{flush:"post"}),F(()=>n.content,()=>{var b,$;($=(b=a.value)==null?void 0:b.updatePopper)==null||$.call(b)}),t({contentRef:a}),(b,$)=>(Z(),ce(kn,{disabled:!b.teleported,to:c(C)},[Ae(In,{name:c(p),onAfterLeave:A,onBeforeEnter:D,onAfterEnter:N,onBeforeLeave:S},{default:te(()=>[c(E)?Ft((Z(),ce(c(Cr),Xe({key:0,id:c(s),ref_key:"contentRef",ref:a},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":c(O),"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,c(x)],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:c(h),"z-index":b.zIndex,onMouseenter:c(P),onMouseleave:c(M),onBlur:_,onClose:c(d)}),{default:te(()=>[i.value?Re("v-if",!0):ie(b.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Bn,c(h)]]):Re("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Dr=se(Fr,[["__file","content.vue"]]);const Lr=["innerHTML"],Nr={key:1},$r=L({name:"ElTooltip"}),Hr=L({...$r,props:Sr,emits:Mr,setup(e,{expose:t,emit:n}){const o=e;Zo();const r=_n(),a=j(),i=j(),u=()=>{var p;const w=c(a);w&&((p=w.popperInstanceRef)==null||p.update())},s=j(!1),l=j(),{show:f,hide:d,hasUpdateHandler:y}=Pr({indicator:s,toggleReason:l}),{onOpen:g,onClose:m}=Go({showAfter:we(o,"showAfter"),hideAfter:we(o,"hideAfter"),autoClose:we(o,"autoClose"),open:f,close:d}),v=R(()=>jt(o.visible)&&!y.value);Ce(lt,{controlled:v,id:r,open:Fn(s),trigger:we(o,"trigger"),onOpen:p=>{g(p)},onClose:p=>{m(p)},onToggle:p=>{c(s)?m(p):g(p)},onShow:()=>{n("show",l.value)},onHide:()=>{n("hide",l.value)},onBeforeShow:()=>{n("before-show",l.value)},onBeforeHide:()=>{n("before-hide",l.value)},updatePopper:u}),F(()=>o.disabled,p=>{p&&s.value&&(s.value=!1)});const T=p=>{var w,E;const h=(E=(w=i.value)==null?void 0:w.contentRef)==null?void 0:E.popperContentRef,C=(p==null?void 0:p.relatedTarget)||document.activeElement;return h&&h.contains(C)};return Dn(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:T,updatePopper:u,onOpen:g,onClose:m,hide:d}),(p,w)=>(Z(),ce(c(Ar),{ref_key:"popperRef",ref:a,role:p.role},{default:te(()=>[Ae(jr,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:te(()=>[p.$slots.default?ie(p.$slots,"default",{key:0}):Re("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ae(Dr,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:te(()=>[ie(p.$slots,"content",{},()=>[p.rawContent?(Z(),$e("span",{key:0,innerHTML:p.content},null,8,Lr)):(Z(),$e("span",Nr,Ln(p.content),1))]),p.showArrow?(Z(),ce(c(ar),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Re("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Wr=se(Hr,[["__file","tooltip.vue"]]);const Ur=Nt(Wr);export{Ur as E,sr as O,ln as a,sn as b,Y as c,Go as u,Kr as w,zo as y};
