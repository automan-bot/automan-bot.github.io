import{bq as ue,a1 as Te,ae as ze,_ as ye,a as G,u as ne,j as ee,a3 as be,r as we,p as te,i as D,W as ie,V as Be,D as Le,at as Oe,G as _e,l as T,B as Ee,br as qe,q as U,a5 as he,a6 as fe,o as _,e as O,N as I,s as W,v as w,O as je,n as L,P as F,g as V,x,h as Me,Q as ve,ay as Ne,bc as Fe,a4 as Pe,bs as De,a2 as ke,bt as Re,m as He,E as P,a7 as Ue,H as We,c as Se,bu as Xe,ah as $,bk as Je,f as le,aK as Ve,ag as M,a_ as R,aW as H,C as Ye,bv as Ge}from"./index-a1b3cbfa.js";import{E as Qe}from"./el-card-5d266226.js";import{t as Ze}from"./BaseUtils-c3e287b9.js";import{_ as $e}from"./_plugin-vue_export-helper-c27b6911.js";import{E as et,a as tt}from"./el-form-item-6dc01a2a.js";/* empty css                    */import{c as ce}from"./index-786f605c.js";import{c as nt,q as ot,f as at,e as Ke}from"./index-533dc27d.js";import{_ as st}from"./index-f24190cb.js";import{E as rt}from"./index-be21331c.js";import"./castArray-627c525c.js";const Y="$treeNodeId",xe=function(t,e){!e||e[Y]||Object.defineProperty(e,Y,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},Ce=function(t,e){return t?e[t]:e[Y]},pe=(t,e,o)=>{const a=t.value.currentNode;o();const n=t.value.currentNode;a!==n&&e("current-change",n?n.data:null,n)},ge=t=>{let e=!0,o=!0,a=!0;for(let n=0,s=t.length;n<s;n++){const d=t[n];(d.checked!==!0||d.indeterminate)&&(e=!1,d.disabled||(a=!1)),(d.checked!==!1||d.indeterminate)&&(o=!1)}return{all:e,none:o,allWithoutDisable:a,half:!e&&!o}},se=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:o,half:a}=ge(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):a?(t.checked=!1,t.indeterminate=!0):o&&(t.checked=!1,t.indeterminate=!1);const n=t.parent;!n||n.level===0||t.store.checkStrictly||se(n)},ae=function(t,e){const o=t.store.props,a=t.data||{},n=o[e];if(typeof n=="function")return n(a,t);if(typeof n=="string")return a[n];if(typeof n>"u"){const s=a[e];return s===void 0?"":s}};let dt=0;class X{constructor(e){this.id=dt++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const o in e)ue(e,o)&&(this[o]=e[o]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const o=e.props;if(o&&typeof o.isLeaf<"u"){const s=ae(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||xe(this,this.data),!this.data)return;const a=e.defaultExpandedKeys,n=e.key;n&&a&&a.includes(this.key)&&this.expand(null,e.autoExpandParent),n&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||xe(this,e),this.data=e,this.childNodes=[];let o;this.level===0&&Array.isArray(this.data)?o=this.data:o=ae(this,"children")||[];for(let a=0,n=o.length;a<n;a++)this.insertChild({data:o[a]})}get label(){return ae(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return ae(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return e.childNodes[o+1]}return null}get previousSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return o>0?e.childNodes[o-1]:null}return null}contains(e,o=!0){return(this.childNodes||[]).some(a=>a===e||o&&a.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,o,a){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof X)){if(!a){const n=this.getChildren(!0);n.includes(e.data)||(typeof o>"u"||o<0?n.push(e.data):n.splice(o,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Te(new X(e)),e instanceof X&&e.initialize()}e.level=this.level+1,typeof o>"u"||o<0?this.childNodes.push(e):this.childNodes.splice(o,0,e),this.updateLeafState()}insertBefore(e,o){let a;o&&(a=this.childNodes.indexOf(o)),this.insertChild(e,a)}insertAfter(e,o){let a;o&&(a=this.childNodes.indexOf(o),a!==-1&&(a+=1)),this.insertChild(e,a)}removeChild(e){const o=this.getChildren()||[],a=o.indexOf(e.data);a>-1&&o.splice(a,1);const n=this.childNodes.indexOf(e);n>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(n,1)),this.updateLeafState()}removeChildByData(e){let o=null;for(let a=0;a<this.childNodes.length;a++)if(this.childNodes[a].data===e){o=this.childNodes[a];break}o&&this.removeChild(o)}expand(e,o){const a=()=>{if(o){let n=this.parent;for(;n.level>0;)n.expanded=!0,n=n.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(n=>{n.canFocus=!0})};this.shouldLoadData()?this.loadData(n=>{Array.isArray(n)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||se(this),a())}):a()}doCreateChildren(e,o={}){e.forEach(a=>{this.insertChild(Object.assign({data:a},o),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,o,a,n){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:d,allWithoutDisable:r}=ge(this.childNodes);!this.isLeaf&&!d&&r&&(this.checked=!1,e=!1);const p=()=>{if(o){const N=this.childNodes;for(let i=0,y=N.length;i<y;i++){const v=N[i];n=n||e!==!1;const E=v.disabled?v.checked:n;v.setChecked(E,o,!0,n)}const{half:c,all:l}=ge(N);l||(this.checked=l,this.indeterminate=c)}};if(this.shouldLoadData()){this.loadData(()=>{p(),se(this)},{checked:e!==!1});return}else p()}const s=this.parent;!s||s.level===0||a||se(s)}getChildren(e=!1){if(this.level===0)return this.data;const o=this.data;if(!o)return null;const a=this.store.props;let n="children";return a&&(n=a.children||"children"),o[n]===void 0&&(o[n]=null),e&&!o[n]&&(o[n]=[]),o[n]}updateChildren(){const e=this.getChildren()||[],o=this.childNodes.map(s=>s.data),a={},n=[];e.forEach((s,d)=>{const r=s[Y];!!r&&o.findIndex(N=>N[Y]===r)>=0?a[r]={index:d,data:s}:n.push({index:d,data:s})}),this.store.lazy||o.forEach(s=>{a[s[Y]]||this.removeChildByData(s)}),n.forEach(({index:s,data:d})=>{this.insertChild({data:d},s)}),this.updateLeafState()}loadData(e,o={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(o).length)){this.loading=!0;const a=n=>{this.childNodes=[],this.doCreateChildren(n,o),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,a)}else e&&e.call(this)}}class it{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const o in e)ue(e,o)&&(this[o]=e[o]);this.nodesMap={}}initialize(){if(this.root=new X({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,o=>{this.root.doCreateChildren(o),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const o=this.filterNodeMethod,a=this.lazy,n=function(s){const d=s.root?s.root.childNodes:s.childNodes;if(d.forEach(r=>{r.visible=o.call(r,e,r.data,r),n(r)}),!s.visible&&d.length){let r=!0;r=!d.some(p=>p.visible),s.root?s.root.visible=r===!1:s.visible=r===!1}e&&s.visible&&!s.isLeaf&&(!a||s.loaded)&&s.expand()};n(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof X)return e;const o=ze(e)?Ce(this.key,e):e;return this.nodesMap[o]||null}insertBefore(e,o){const a=this.getNode(o);a.parent.insertBefore({data:e},a)}insertAfter(e,o){const a=this.getNode(o);a.parent.insertAfter({data:e},a)}remove(e){const o=this.getNode(e);o&&o.parent&&(o===this.currentNode&&(this.currentNode=null),o.parent.removeChild(o))}append(e,o){const a=o?this.getNode(o):this.root;a&&a.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],o=this.nodesMap;e.forEach(a=>{const n=o[a];n&&n.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const o=this.key;!e||!e.data||(o?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(a=>{this.deregisterNode(a)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,o=!1){const a=[],n=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(r=>{(r.checked||o&&r.indeterminate)&&(!e||e&&r.isLeaf)&&a.push(r.data),n(r)})};return n(this),a}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(o=>(o||{})[this.key])}getHalfCheckedNodes(){const e=[],o=function(a){(a.root?a.root.childNodes:a.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),o(s)})};return o(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],o=this.nodesMap;for(const a in o)ue(o,a)&&e.push(o[a]);return e}updateChildren(e,o){const a=this.nodesMap[e];if(!a)return;const n=a.childNodes;for(let s=n.length-1;s>=0;s--){const d=n[s];this.remove(d.data)}for(let s=0,d=o.length;s<d;s++){const r=o[s];this.append(r,a.data)}}_setCheckedKeys(e,o=!1,a){const n=this._getAllNodes().sort((p,N)=>p.level-N.level),s=Object.create(null),d=Object.keys(a);n.forEach(p=>p.setChecked(!1,!1));const r=p=>{p.childNodes.forEach(N=>{var c;s[N.data[e]]=!0,(c=N.childNodes)!=null&&c.length&&r(N)})};for(let p=0,N=n.length;p<N;p++){const c=n[p],l=c.data[e].toString();if(!d.includes(l)){c.checked&&!s[l]&&c.setChecked(!1,!1);continue}if(c.childNodes.length&&r(c),c.isLeaf||this.checkStrictly){c.setChecked(!0,!1);continue}if(c.setChecked(!0,!0),o){c.setChecked(!1,!1);const y=function(v){v.childNodes.forEach(K=>{K.isLeaf||K.setChecked(!1,!1),y(K)})};y(c)}}}setCheckedNodes(e,o=!1){const a=this.key,n={};e.forEach(s=>{n[(s||{})[a]]=!0}),this._setCheckedKeys(a,o,n)}setCheckedKeys(e,o=!1){this.defaultCheckedKeys=e;const a=this.key,n={};e.forEach(s=>{n[s]=!0}),this._setCheckedKeys(a,o,n)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(o=>{const a=this.getNode(o);a&&a.expand(null,this.autoExpandParent)})}setChecked(e,o,a){const n=this.getNode(e);n&&n.setChecked(!!o,a)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const o=this.currentNode;o&&(o.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,o=!0){const a=e[this.key],n=this.nodesMap[a];this.setCurrentNode(n),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,o=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const a=this.getNode(e);a&&(this.setCurrentNode(a),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const lt=G({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=ne("tree"),o=ee("NodeInstance"),a=ee("RootTree");return()=>{const n=t.node,{data:s,store:d}=n;return t.renderContent?t.renderContent(be,{_self:o,node:n,data:s,store:d}):we(a.ctx.slots,"default",{node:n,data:s},()=>[be("span",{class:e.be("node","label")},[n.label])])}}});var ct=ye(lt,[["__file","tree-node-content.vue"]]);function Ie(t){const e=ee("TreeNodeMap",null),o={treeNodeExpand:a=>{t.node!==a&&t.node.collapse()},children:[]};return e&&e.children.push(o),te("TreeNodeMap",o),{broadcastExpanded:a=>{if(t.accordion)for(const n of o.children)n.treeNodeExpand(a)}}}const Ae=Symbol("dragEvents");function ut({props:t,ctx:e,el$:o,dropIndicator$:a,store:n}){const s=ne("tree"),d=D({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return te(Ae,{treeNodeDragStart:({event:c,treeNode:l})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(l.node))return c.preventDefault(),!1;c.dataTransfer.effectAllowed="move";try{c.dataTransfer.setData("text/plain","")}catch{}d.value.draggingNode=l,e.emit("node-drag-start",l.node,c)},treeNodeDragOver:({event:c,treeNode:l})=>{const i=l,y=d.value.dropNode;y&&y.node.id!==i.node.id&&ie(y.$el,s.is("drop-inner"));const v=d.value.draggingNode;if(!v||!i)return;let E=!0,K=!0,S=!0,q=!0;typeof t.allowDrop=="function"&&(E=t.allowDrop(v.node,i.node,"prev"),q=K=t.allowDrop(v.node,i.node,"inner"),S=t.allowDrop(v.node,i.node,"next")),c.dataTransfer.dropEffect=K||E||S?"move":"none",(E||K||S)&&(y==null?void 0:y.node.id)!==i.node.id&&(y&&e.emit("node-drag-leave",v.node,y.node,c),e.emit("node-drag-enter",v.node,i.node,c)),E||K||S?d.value.dropNode=i:d.value.dropNode=null,i.node.nextSibling===v.node&&(S=!1),i.node.previousSibling===v.node&&(E=!1),i.node.contains(v.node,!1)&&(K=!1),(v.node===i.node||v.node.contains(i.node))&&(E=!1,K=!1,S=!1);const B=i.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),j=o.value.getBoundingClientRect();let f;const k=E?K?.25:S?.45:1:-1,g=S?K?.75:E?.55:0:1;let A=-9999;const u=c.clientY-B.top;u<B.height*k?f="before":u>B.height*g?f="after":K?f="inner":f="none";const C=i.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=a.value;f==="before"?A=C.top-j.top:f==="after"&&(A=C.bottom-j.top),m.style.top=`${A}px`,m.style.left=`${C.right-j.left}px`,f==="inner"?Be(i.$el,s.is("drop-inner")):ie(i.$el,s.is("drop-inner")),d.value.showDropIndicator=f==="before"||f==="after",d.value.allowDrop=d.value.showDropIndicator||q,d.value.dropType=f,e.emit("node-drag-over",v.node,i.node,c)},treeNodeDragEnd:c=>{const{draggingNode:l,dropType:i,dropNode:y}=d.value;if(c.preventDefault(),c.dataTransfer.dropEffect="move",l&&y){const v={data:l.node.data};i!=="none"&&l.node.remove(),i==="before"?y.node.parent.insertBefore(v,y.node):i==="after"?y.node.parent.insertAfter(v,y.node):i==="inner"&&y.node.insertChild(v),i!=="none"&&n.value.registerNode(v),ie(y.$el,s.is("drop-inner")),e.emit("node-drag-end",l.node,y.node,i,c),i!=="none"&&e.emit("node-drop",l.node,y.node,i,c)}l&&!y&&e.emit("node-drag-end",l.node,null,i,c),d.value.showDropIndicator=!1,d.value.draggingNode=null,d.value.dropNode=null,d.value.allowDrop=!0}}),{dragState:d}}const ht=G({name:"ElTreeNode",components:{ElCollapseTransition:st,ElCheckbox:rt,NodeContent:ct,ElIcon:Le,Loading:Oe},props:{node:{type:X,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const o=ne("tree"),{broadcastExpanded:a}=Ie(t),n=ee("RootTree"),s=D(!1),d=D(!1),r=D(null),p=D(null),N=D(null),c=ee(Ae),l=_e();te("NodeInstance",l),t.node.expanded&&(s.value=!0,d.value=!0);const i=n.props.props.children||"children";T(()=>{const u=t.node.data[i];return u&&[...u]},()=>{t.node.updateChildren()}),T(()=>t.node.indeterminate,u=>{E(t.node.checked,u)}),T(()=>t.node.checked,u=>{E(u,t.node.indeterminate)}),T(()=>t.node.expanded,u=>{Ee(()=>s.value=u),u&&(d.value=!0)});const y=u=>Ce(n.props.nodeKey,u.data),v=u=>{const C=t.props.class;if(!C)return{};let m;if(Fe(C)){const{data:Q}=u;m=C(Q,u)}else m=C;return Pe(m)?{[m]:!0}:m},E=(u,C)=>{(r.value!==u||p.value!==C)&&n.ctx.emit("check-change",t.node.data,u,C),r.value=u,p.value=C},K=u=>{pe(n.store,n.ctx.emit,()=>n.store.value.setCurrentNode(t.node)),n.currentNode.value=t.node,n.props.expandOnClickNode&&q(),n.props.checkOnClickNode&&!t.node.disabled&&B(null,{target:{checked:!t.node.checked}}),n.ctx.emit("node-click",t.node.data,t.node,l,u)},S=u=>{n.instance.vnode.props.onNodeContextmenu&&(u.stopPropagation(),u.preventDefault()),n.ctx.emit("node-contextmenu",u,t.node.data,t.node,l)},q=()=>{t.node.isLeaf||(s.value?(n.ctx.emit("node-collapse",t.node.data,t.node,l),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,l)))},B=(u,C)=>{t.node.setChecked(C.target.checked,!n.props.checkStrictly),Ee(()=>{const m=n.store.value;n.ctx.emit("check",t.node.data,{checkedNodes:m.getCheckedNodes(),checkedKeys:m.getCheckedKeys(),halfCheckedNodes:m.getHalfCheckedNodes(),halfCheckedKeys:m.getHalfCheckedKeys()})})};return{ns:o,node$:N,tree:n,expanded:s,childNodeRendered:d,oldChecked:r,oldIndeterminate:p,getNodeKey:y,getNodeClass:v,handleSelectChange:E,handleClick:K,handleContextMenu:S,handleExpandIconClick:q,handleCheckChange:B,handleChildNodeExpand:(u,C,m)=>{a(C),n.ctx.emit("node-expand",u,C,m)},handleDragStart:u=>{n.props.draggable&&c.treeNodeDragStart({event:u,treeNode:t})},handleDragOver:u=>{u.preventDefault(),n.props.draggable&&c.treeNodeDragOver({event:u,treeNode:{$el:N.value,node:t.node}})},handleDrop:u=>{u.preventDefault()},handleDragEnd:u=>{n.props.draggable&&c.treeNodeDragEnd(u)},CaretRight:qe}}}),ft=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],pt=["aria-expanded"];function gt(t,e,o,a,n,s){const d=U("el-icon"),r=U("el-checkbox"),p=U("loading"),N=U("node-content"),c=U("el-tree-node"),l=U("el-collapse-transition");return he((_(),O("div",{ref:"node$",class:L([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=F((...i)=>t.handleClick&&t.handleClick(...i),["stop"])),onContextmenu:e[2]||(e[2]=(...i)=>t.handleContextMenu&&t.handleContextMenu(...i)),onDragstart:e[3]||(e[3]=F((...i)=>t.handleDragStart&&t.handleDragStart(...i),["stop"])),onDragover:e[4]||(e[4]=F((...i)=>t.handleDragOver&&t.handleDragOver(...i),["stop"])),onDragend:e[5]||(e[5]=F((...i)=>t.handleDragEnd&&t.handleDragEnd(...i),["stop"])),onDrop:e[6]||(e[6]=F((...i)=>t.handleDrop&&t.handleDrop(...i),["stop"]))},[I("div",{class:L(t.ns.be("node","content")),style:Me({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(_(),W(d,{key:0,class:L([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:F(t.handleExpandIconClick,["stop"])},{default:w(()=>[(_(),W(je(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):V("v-if",!0),t.showCheckbox?(_(),W(r,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=F(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):V("v-if",!0),t.node.loading?(_(),W(d,{key:2,class:L([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:w(()=>[x(p)]),_:1},8,["class"])):V("v-if",!0),x(N,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),x(l,null,{default:w(()=>[!t.renderAfterExpand||t.childNodeRendered?he((_(),O("div",{key:0,class:L(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(_(!0),O(ve,null,Ne(t.node.childNodes,i=>(_(),W(c,{key:t.getNodeKey(i),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:i,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,pt)),[[fe,t.expanded]]):V("v-if",!0)]),_:1})],42,ft)),[[fe,t.node.visible]])}var yt=ye(ht,[["render",gt],["__file","tree-node.vue"]]);function vt({el$:t},e){const o=ne("tree"),a=De([]),n=De([]);ke(()=>{d()}),Re(()=>{a.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),T(n,r=>{r.forEach(p=>{p.setAttribute("tabindex","-1")})}),He(t,"keydown",r=>{const p=r.target;if(!p.className.includes(o.b("node")))return;const N=r.code;a.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`));const c=a.value.indexOf(p);let l;if([P.up,P.down].includes(N)){if(r.preventDefault(),N===P.up){l=c===-1?0:c!==0?c-1:a.value.length-1;const y=l;for(;!e.value.getNode(a.value[l].dataset.key).canFocus;){if(l--,l===y){l=-1;break}l<0&&(l=a.value.length-1)}}else{l=c===-1?0:c<a.value.length-1?c+1:0;const y=l;for(;!e.value.getNode(a.value[l].dataset.key).canFocus;){if(l++,l===y){l=-1;break}l>=a.value.length&&(l=0)}}l!==-1&&a.value[l].focus()}[P.left,P.right].includes(N)&&(r.preventDefault(),p.click());const i=p.querySelector('[type="checkbox"]');[P.enter,P.space].includes(N)&&i&&(r.preventDefault(),i.click())});const d=()=>{var r;a.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`)),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const p=t.value.querySelectorAll(`.${o.is("checked")}[role=treeitem]`);if(p.length){p[0].setAttribute("tabindex","0");return}(r=a.value[0])==null||r.setAttribute("tabindex","0")}}const Nt=G({name:"ElTree",components:{ElTreeNode:yt},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Ue}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:o}=We(),a=ne("tree"),n=D(new it({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));n.value.initialize();const s=D(n.value.root),d=D(null),r=D(null),p=D(null),{broadcastExpanded:N}=Ie(t),{dragState:c}=ut({props:t,ctx:e,el$:r,dropIndicator$:p,store:n});vt({el$:r},n);const l=Se(()=>{const{childNodes:h}=s.value;return!h||h.length===0||h.every(({visible:b})=>!b)});T(()=>t.currentNodeKey,h=>{n.value.setCurrentNodeKey(h)}),T(()=>t.defaultCheckedKeys,h=>{n.value.setDefaultCheckedKey(h)}),T(()=>t.defaultExpandedKeys,h=>{n.value.setDefaultExpandedKeys(h)}),T(()=>t.data,h=>{n.value.setData(h)},{deep:!0}),T(()=>t.checkStrictly,h=>{n.value.checkStrictly=h});const i=h=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");n.value.filter(h)},y=h=>Ce(t.nodeKey,h.data),v=h=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const b=n.value.getNode(h);if(!b)return[];const J=[b.data];let Z=b.parent;for(;Z&&Z!==s.value;)J.push(Z.data),Z=Z.parent;return J.reverse()},E=(h,b)=>n.value.getCheckedNodes(h,b),K=h=>n.value.getCheckedKeys(h),S=()=>{const h=n.value.getCurrentNode();return h?h.data:null},q=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const h=S();return h?h[t.nodeKey]:null},B=(h,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");n.value.setCheckedNodes(h,b)},j=(h,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");n.value.setCheckedKeys(h,b)},f=(h,b,J)=>{n.value.setChecked(h,b,J)},k=()=>n.value.getHalfCheckedNodes(),g=()=>n.value.getHalfCheckedKeys(),A=(h,b=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");pe(n,e.emit,()=>n.value.setUserCurrentNode(h,b))},u=(h,b=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");pe(n,e.emit,()=>n.value.setCurrentNodeKey(h,b))},C=h=>n.value.getNode(h),m=h=>{n.value.remove(h)},Q=(h,b)=>{n.value.append(h,b)},z=(h,b)=>{n.value.insertBefore(h,b)},de=(h,b)=>{n.value.insertAfter(h,b)},oe=(h,b,J)=>{N(b),e.emit("node-expand",h,b,J)},me=(h,b)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");n.value.updateChildren(h,b)};return te("RootTree",{ctx:e,props:t,store:n,root:s,currentNode:d,instance:_e()}),te(Xe,void 0),{ns:a,store:n,root:s,currentNode:d,dragState:c,el$:r,dropIndicator$:p,isEmpty:l,filter:i,getNodeKey:y,getNodePath:v,getCheckedNodes:E,getCheckedKeys:K,getCurrentNode:S,getCurrentKey:q,setCheckedNodes:B,setCheckedKeys:j,setChecked:f,getHalfCheckedNodes:k,getHalfCheckedKeys:g,setCurrentNode:A,setCurrentKey:u,t:o,getNode:C,remove:m,append:Q,insertBefore:z,insertAfter:de,handleNodeExpand:oe,updateKeyChildren:me}}});function kt(t,e,o,a,n,s){const d=U("el-tree-node");return _(),O("div",{ref:"el$",class:L([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(_(!0),O(ve,null,Ne(t.root.childNodes,r=>(_(),W(d,{key:t.getNodeKey(r),node:r,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(_(),O("div",{key:0,class:L(t.ns.e("empty-block"))},[we(t.$slots,"empty",{},()=>{var r;return[I("span",{class:L(t.ns.e("empty-text"))},$((r=t.emptyText)!=null?r:t.t("el.tree.emptyText")),3)]})],2)):V("v-if",!0),he(I("div",{ref:"dropIndicator$",class:L(t.ns.e("drop-indicator"))},null,2),[[fe,t.dragState.showDropIndicator]])],2)}var re=ye(Nt,[["render",kt],["__file","tree.vue"]]);re.install=t=>{t.component(re.name,re)};const Ct=re,mt=Ct,bt=["width","height"],Et=G({__name:"index",props:{src:{type:String,default:""},rects:{type:Array,default:function(){return[]}}},setup(t){const e=t,o=D(null);let a=D(0),n=D(0),s=Se(()=>a.value>n.value);async function d(){var i;const{src:p,rects:N}=e,c=(i=o.value)==null?void 0:i.getContext("2d");if(!p||!o.value||!c)return;const l=new Image;l.onload=function(){a.value=l.width,n.value=l.height,c.clearRect(0,0,o.value.width,o.value.height),c.drawImage(l,0,0),c.strokeStyle="rgb(0,255,0)",c.lineWidth=6;let y=e.rects;for(let v of y)c.strokeRect(v.x1,v.y1,v.x2-v.x1,v.y2-v.y1)},l.src=p}T([()=>e.src,()=>e.rects],(p,N)=>{d()});async function r(){await Ze(1e3),d()}return ke(()=>{r()}),Je(()=>{}),(p,N)=>(_(),O("div",{class:L(["cimg",{islandscape:le(s)}])},[I("canvas",{ref_key:"canvas",ref:o,class:"cimg_cav",width:le(a),height:le(n)},null,8,bt)],2))}});const Dt=$e(Et,[["__scopeId","data-v-457ac1ce"]]);const Kt={class:"layout"},xt={class:"layout_control"},wt={class:"layout_screen"},_t={class:"layout_screen_tree"},St={class:"dievice_screen_title"},$t={class:"layout_screen_form"},It={class:"dievice_screen_title"},At=["onClick"],Tt={class:"mb-10px"},zt={class:"layout_screen_resimg"},Bt={class:"dievice_screen_title"},Lt=G({__name:"index",setup(t){const{device:e}=Ve();ke(()=>{o()});function o(){y()}const a=D(""),n=D({children:"children",label:"label"}),s=[{key:"resourceId",val:"resourceId:"},{key:"class",val:"class:"},{key:"clickable",val:"clickable:"},{key:"visibleToUser",val:"visibleToUser:"},{key:"bound",val:"bound:"},{key:"text",val:"text:"}],d=D([]),r=D(),p=D(),N=D(),c=D(),l=D([]);T(r,(f,k)=>{f?l.value=[f.bounds]:l.value=[]});function i(f,k,g){r.value=f,p.value=k,console.log(f,k,g)}async function y(){r.value=null;const f=await(e==null?void 0:e.screenShotBase64()),k=await(e==null?void 0:e.screenJson()),g=await(e==null?void 0:e.screenXml());a.value=f,c.value=JSON.stringify(k,null,4),nt(k),d.value=[k],N.value=g}function v(f){ce(r.value[f.key]),R(H("fu-zhi-cheng-gong"))}const E=D('*[resourceId=""]');function K(f=5){if(!p.value)return;let k=[],g=p.value;for(let u=0;u<f;u++){if(g&&g.data&&g.data.class){let C=`*[class='${g.data.class}']`;if(u===0&&g.data.text){let m=g.data.text;/[\r\n]/.test(m)&&(m=m.split(/[\n\r]/)[0]),C=`${C}[text*='${m}']`}k.push(C)}if(g=g.parent||null,!g)break}const A=k.reverse().join(" > ");E.value=A||'*[resourceId=""]',ce(E.value),R(H("fu-zhi-cheng-gong"))}function S(f=5){if(!p.value)return;let k=[],g=p.value;for(let u=0;u<f;u++){if(g&&g.data){let C="";if(g.data.resourceId?C=`*[resourceId='${g.data.resourceId}']`:g.data.class&&(C=`*[class='${g.data.class}']`),u===0&&g.data.text){let m=g.data.text;/[\r\n]/.test(m)&&(m=m.split(/[\n\r]/)[0]),C=`${C}[text*='${m}']`}k.push(C)}if(g=g.parent||null,!g)break}const A=k.reverse().join(" > ");E.value=A||'*[resourceId=""]',ce(E.value),R(H("fu-zhi-cheng-gong"))}function q(){const f=ot(N.value,E.value),k=f.map(g=>g.bounds);l.value=k,console.log(f)}async function B(){if(await y(),N.value){const f=at(N.value);Ke(f,"screen.xml"),R(H("xia-zai-cheng-gong"))}else R(H("jia-zai-ping-mu-xin-xi-shi-bai"))}async function j(){await y(),c.value?(Ke(c.value,"screen.json"),R(H("xia-zai-cheng-gong"))):R(H("jia-zai-ping-mu-xin-xi-shi-bai"))}return(f,k)=>{const g=Ye,A=mt,u=et,C=Ge,m=tt,Q=Dt;return _(),O("div",Kt,[I("div",xt,[x(g,{type:"primary",size:"default",onClick:y},{default:w(()=>[M($(f.$t("shua-xin-zu-jian-shu")),1)]),_:1}),x(g,{type:"primary",size:"default",onClick:B},{default:w(()=>[M($(f.$t("dao-chu-ping-mu-shu-xml")),1)]),_:1}),x(g,{type:"primary",size:"default",onClick:j},{default:w(()=>[M($(f.$t("dao-chu-ping-mu-shu-json")),1)]),_:1})]),I("div",wt,[I("div",_t,[I("div",St,$(f.$t("zu-jian-shu")),1),x(A,{class:"filter-tree",data:d.value,props:n.value,"expand-on-click-node":!1,"default-expand-all":"",onNodeClick:i},null,8,["data","props"])]),I("div",$t,[I("div",It,$(f.$t("dang-qian-jie-dian-xin-xi")),1),x(m,{ref:"form",class:"mt10","label-width":"100px",size:"small"},{default:w(()=>[(_(),O(ve,null,Ne(s,(z,de)=>x(u,{key:de,label:z.val},{default:w(()=>{var oe;return[I("span",{class:"layout_screen_val",onClick:me=>v(z)},$((oe=r.value)==null?void 0:oe[z.key]),9,At)]}),_:2},1032,["label"])),64)),r.value?(_(),W(u,{key:0,class:"layout_screen_form_selector mt-10px",label:f.$t("fu-zhu-gong-neng")},{default:w(()=>[I("div",Tt,$(f.$t("cong-dang-qian-jie-dian-xiang-shang-sheng-cheng-xuan-ze-qi")),1),x(g,{type:"primary",onClick:k[0]||(k[0]=z=>K(5))},{default:w(()=>[M($(f.$t("xiang-shang-5-ji-xuan-ze-qi-class")),1)]),_:1}),x(g,{type:"primary",onClick:k[1]||(k[1]=z=>S(5))},{default:w(()=>[M($(f.$t("xiang-shang-5-ji-xuan-ze-qi-classid")),1)]),_:1}),x(g,{type:"primary",onClick:k[2]||(k[2]=z=>K(10))},{default:w(()=>[M($(f.$t("xiang-shang-10-ji-xuan-ze-qi-class")),1)]),_:1}),x(g,{type:"primary",onClick:k[3]||(k[3]=z=>S(10))},{default:w(()=>[M($(f.$t("xiang-shang-10-ji-xuan-ze-qi-classid")),1)]),_:1})]),_:1},8,["label"])):V("",!0),x(u,{label:f.$t("qing-shu-ru-xuan-ze-qi")},{default:w(()=>[x(C,{modelValue:E.value,"onUpdate:modelValue":k[4]||(k[4]=z=>E.value=z),type:"textarea",rows:5},null,8,["modelValue"])]),_:1},8,["label"]),x(u,{label:""},{default:w(()=>[x(g,{type:"primary",onClick:q},{default:w(()=>[M($(f.$t("ce-shi-cha-zhao-xiao-guo")),1)]),_:1})]),_:1})]),_:1},512)]),I("div",zt,[I("div",Bt,$(f.$t("cha-zhao-xiao-guo")),1),x(Q,{src:a.value,rects:l.value},null,8,["src","rects"])])])])}}});const Ot=$e(Lt,[["__scopeId","data-v-d0703fe3"]]),qt={class:"app-container"},Yt=G({name:"LayoutAnalysis",inheritAttrs:!1,__name:"index",setup(t){return(e,o)=>{const a=Ot,n=Qe;return _(),O("div",qt,[x(n,null,{default:w(()=>[x(a)]),_:1})])}}});export{Yt as default};