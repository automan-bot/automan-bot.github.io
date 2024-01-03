import{cE as Q,aS as R}from"./index-d4898fe2.js";var G={exports:{}};(function(m,p){(function(b,v){m.exports=v()})(Q,function(){var b=1e3,v=6e4,U=36e5,F="millisecond",_="second",x="minute",Y="hour",y="day",A="week",M="month",E="quarter",g="year",k="date",J="Invalid Date",V=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},I=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},P={s:I,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+I(r,2,"0")+":"+I(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,M),i=t-e<0,a=n.clone().add(r+(i?-1:1),M);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M,y:g,w:A,d:y,D:k,h:Y,m:x,s:_,ms:F,Q:E}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},T="en",S={};S[T]=K;var Z="$isDayjsObject",N=function(s){return s instanceof L||!(!s||!s[Z])},C=function s(n,t,r){var e;if(!n)return T;if(typeof n=="string"){var i=n.toLowerCase();S[i]&&(e=i),t&&(S[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=n.name;S[o]=n,e=o}return!r&&e&&(T=e),e||!r&&T},f=function(s,n){if(N(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new L(t)},u=P;u.l=C,u.i=N,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var L=function(){function s(t){this.$L=C(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Z]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(V);if(a){var o=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,a=u.p(t),o=function(O,$){var D=u.w(e.$u?Date.UTC(e.$y,$,O):new Date(e.$y,$,O),e);return i?D:D.endOf(y)},c=function(O,$){return u.w(e.toDate()[O].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice($)),e)},h=this.$W,d=this.$M,l=this.$D,H="set"+(this.$u?"UTC":"");switch(a){case g:return i?o(1,0):o(31,11);case M:return i?o(1,d):o(0,d+1);case A:var w=this.$locale().weekStart||0,j=(h<w?h+7:h)-w;return o(i?l-j:l+(6-j),d);case y:case k:return c(H+"Hours",0);case Y:return c(H+"Minutes",1);case x:return c(H+"Seconds",2);case _:return c(H+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[y]=a+"Date",e[k]=a+"Date",e[M]=a+"Month",e[g]=a+"FullYear",e[Y]=a+"Hours",e[x]=a+"Minutes",e[_]=a+"Seconds",e[F]=a+"Milliseconds",e)[i],c=i===y?this.$D+(r-this.$W):r;if(i===M||i===g){var h=this.clone().set(k,1);h.$d[o](c),h.init(),this.$d=h.set(k,Math.min(this.$D,h.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=u.p(r),o=function(d){var l=f(i);return u.w(l.date(l.date()+Math.round(d*t)),i)};if(a===M)return this.set(M,this.$M+t);if(a===g)return this.set(g,this.$y+t);if(a===y)return o(1);if(a===A)return o(7);var c=(e={},e[x]=v,e[Y]=U,e[_]=b,e)[a]||1,h=this.$d.getTime()+t*c;return u.w(h,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||J;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,c=this.$m,h=this.$M,d=e.weekdays,l=e.months,H=e.meridiem,w=function($,D,W,B){return $&&($[D]||$(r,i))||W[D].slice(0,B)},j=function($){return u.s(o%12||12,$,"0")},O=H||function($,D,W){var B=$<12?"AM":"PM";return W?B.toLowerCase():B};return i.replace(q,function($,D){return D||function(W){switch(W){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return h+1;case"MM":return u.s(h+1,2,"0");case"MMM":return w(e.monthsShort,h,l,3);case"MMMM":return w(l,h);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return w(e.weekdaysMin,r.$W,d,2);case"ddd":return w(e.weekdaysShort,r.$W,d,3);case"dddd":return d[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return j(1);case"hh":return j(2);case"a":return O(o,c,!0);case"A":return O(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}($)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,o=u.p(r),c=f(t),h=(c.utcOffset()-this.utcOffset())*v,d=this-c,l=function(){return u.m(a,c)};switch(o){case g:i=l()/12;break;case M:i=l();break;case E:i=l()/3;break;case A:i=(d-h)/6048e5;break;case y:i=(d-h)/864e5;break;case Y:i=d/U;break;case x:i=d/v;break;case _:i=d/b;break;default:i=d}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return S[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=C(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),z=L.prototype;return f.prototype=z,[["$ms",F],["$s",_],["$m",x],["$H",Y],["$W",y],["$M",M],["$y",g],["$D",k]].forEach(function(s){z[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,L,f),s.$i=!0),f},f.locale=C,f.isDayjs=N,f.unix=function(s){return f(1e3*s)},f.en=S[T],f.Ls=S,f.p={},f})})(G);var X=G.exports;const tt=R(X);function rt(m,p="YYYY-MM-DD HH:mm"){if(m)return tt(m).format(p)}function st(m=0){if(m===0)return"0 B";const p=["B","KB","MB","GB","TB"],b=1024,v=Math.floor(Math.log(m)/Math.log(b));return`${(m/Math.pow(b,v)).toFixed(2)} ${p[v]}`}const et={34:"14",33:"13",32:"12",31:"12",30:"11",29:"10",28:"9",27:"8.1",26:"8",25:"7.1",24:"7.0",23:"6.0",22:"5.1",21:"5.0",20:"4.4W",19:"4.4",18:"4.3",17:"4.2、4.2.2",16:"4.1、4.1.1",15:"4.0.3、4.0.4",14:"4.0、4.0.1、4.0.2",13:"3.2",12:"3.1.x",11:"3.0.x",10:"2.3.3、2.3.4",9:"2.3、2.3.1、2.3.2",8:"2.2.x",7:"2.1.x",6:"2.0.1",5:"2.0",4:"1.6",3:"1.5",2:"1.1",1:"1.0"};function it(m){const p=et[+m];return p?`Android ${p}`:`sdk>${m}`}export{it as a,tt as b,rt as d,st as f};
