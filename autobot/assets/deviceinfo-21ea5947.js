import{a as V,aK as T,aJ as q,c as z,o as h,e as E,x as e,v as a,ag as f,ah as d,f as n,s as A,g as L,aX as u,aY as p,aZ as N,aW as b,a_ as S,C as F,D as R}from"./index-a1b3cbfa.js";/* empty css                */import{a as J,E as K}from"./el-row-6fa6d471.js";import{E as P}from"./el-card-5d266226.js";import{E as W,a as X}from"./el-descriptions-item-f925379d.js";/* empty css               */import{d as Y}from"./index-75088ebe.js";import{o as Z}from"./index-533dc27d.js";import{E as G}from"./index-7ab6790e.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"version_diff"},M=V({__name:"index",setup(k){const g=T(),{device:r,refreshActiveInfo:C}=g,{deviceActiveInfo:m}=q(g),w=z(()=>{var c;const l=(c=m.value)==null?void 0:c.exptime;return l?Y(l):"--"});async function I(){const l=await N(b("qing-shu-ru-ji-huo-ma"),b("ti-shi")),c=await(r==null?void 0:r.active(l.value));S(c?b("ji-huo-cheng-gong"):b("ji-huo-shi-bai"),c?"success":"error"),C()}function D(){Z("http://shop.tntok.top")}return(l,c)=>{const o=W,B=G,v=F,$=X,y=P,t=J,_=K,s=R;return h(),E("div",H,[e(y,null,{default:a(()=>[e($,{column:2,border:""},{default:a(()=>[e(o,{label:l.$t("she-bei-id"),span:2,align:"center"},{default:a(()=>{var i;return[f(d((i=n(m))==null?void 0:i.uid),1)]}),_:1},8,["label"]),e(o,{label:l.$t("fu-wu-ji-bie"),span:2,align:"center"},{default:a(()=>{var i;return[f(d((i=n(m))!=null&&i.validate?l.$t("vip-ban"):l.$t("mian-fei-ban")),1)]}),_:1},8,["label"]),e(o,{label:l.$t("vip-dao-qi-shi-jian"),span:2,align:"center"},{default:a(()=>{var i;return[f(d(n(w))+" ",1),(i=n(m))!=null&&i.validate?L("",!0):(h(),A(B,{key:0,class:"ml-5px",type:"danger"},{default:a(()=>[f(d(l.$t("yi-guo-qi")),1)]),_:1}))]}),_:1},8,["label"]),e(o,{label:l.$t("cao-zuo"),span:2,align:"center"},{default:a(()=>[e(v,{type:"success",onClick:D},{default:a(()=>[f(d(l.$t("li-ji-gou-mai-vip")),1)]),_:1}),e(v,{type:"danger",onClick:I},{default:a(()=>[f(d(l.$t("shu-ru-vip-ji-huo-ma")),1)]),_:1})]),_:1},8,["label"])]),_:1})]),_:1}),e(y,{class:"mt-20px"},{default:a(()=>[e($,{title:l.$t("vip-ban-vs-mian-fei-ban"),column:2,border:""},{default:a(()=>[e(o,{label:l.$t("ban-ben"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[f(d(l.$t("vip-ban")),1)]),_:1}),e(t,{span:12},{default:a(()=>[f(d(l.$t("mian-fei-ban")),1)]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("tou-ping-kong-zhi"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("xi-tong-xin-xi"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("ping-mu-jie-tu"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_no"},{default:a(()=>[e(n(p))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("bu-ju-fen-xi"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_no"},{default:a(()=>[e(n(p))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("route_ContactsList"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_no"},{default:a(()=>[e(n(p))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("ping-mu-lu-zhi"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_no"},{default:a(()=>[e(n(p))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("route_FileList"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_no"},{default:a(()=>[e(n(p))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),e(o,{label:l.$t("ying-yong-guan-li"),span:2,align:"center"},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{span:12},{default:a(()=>[e(s,{class:"fun_yes"},{default:a(()=>[e(n(u))]),_:1})]),_:1}),e(t,{span:12},{default:a(()=>[e(s,{class:"fun_no"},{default:a(()=>[e(n(p))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"])]),_:1},8,["title"])]),_:1})])}}});const O=j(M,[["__scopeId","data-v-9a7a5193"]]),Q={},U={class:"app-container"};function x(k,g){const r=O;return h(),E("div",U,[e(r)])}const fe=j(Q,[["render",x]]);export{fe as default};