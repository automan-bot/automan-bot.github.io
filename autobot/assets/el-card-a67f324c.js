import{b as p,d as y,a as f,u,o as r,e as t,n as o,f as s,r as d,ag as l,ah as n,g as i,N as c,h,_ as m,w as v}from"./index-9d12eb73.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(w){const a=u("card");return(e,$)=>(r(),t("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(s(a).e("header"))},[d(e.$slots,"header",{},()=>[l(n(e.header),1)])],2)):i("v-if",!0),c("div",{class:o([s(a).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[l(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var g=m(C,[["__file","card.vue"]]);const k=v(g);export{k as E};
