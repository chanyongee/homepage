(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{357:function(t,r,n){t.exports=n.p+"img/about_us.38acfeb.jpg"},358:function(t,r,n){t.exports=n.p+"img/조직도.40405b8.png"},361:function(t,r,n){var map={"./about_us.jpg":357,"./cover/mining.jpg":375,"./diagram/환경인허가절차도.png":376,"./house.jpg":236,"./사전재해영향성검토.jpg":377,"./사후환경영향조사.jpg":378,"./수질측정기기절차도.png":379,"./재해영향평가.jpg":380,"./재해영향평가절차도.png":381,"./전기설계및감리.jpg":382,"./전략환경영향평가.png":383,"./조직도.png":358,"./환경영향평가절차도.png":384};function e(t){var r=o(t);return n(r)}function o(t){if(!n.o(map,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=o,t.exports=e,e.id=361},375:function(t,r,n){t.exports=n.p+"img/mining.eab6ad5.jpg"},376:function(t,r,n){t.exports=n.p+"img/환경인허가절차도.122f7d2.png"},377:function(t,r,n){t.exports=n.p+"img/사전재해영향성검토.601b0b5.jpg"},378:function(t,r,n){t.exports=n.p+"img/사후환경영향조사.9fa6a07.jpg"},379:function(t,r,n){t.exports=n.p+"img/수질측정기기절차도.80cbf93.png"},380:function(t,r,n){t.exports=n.p+"img/재해영향평가.7d0c579.jpg"},381:function(t,r,n){t.exports=n.p+"img/재해영향평가절차도.ccbc7a4.png"},382:function(t,r,n){t.exports=n.p+"img/전기설계및감리.3d4a424.jpg"},383:function(t,r,n){t.exports=n.p+"img/전략환경영향평가.274a8ff.png"},384:function(t,r,n){t.exports=n.p+"img/환경영향평가절차도.11dfeb2.png"},386:function(t,r,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("8d2b18f6",content,!0,{sourceMap:!1})},407:function(t,r){t.exports={functional:!0,render(t,r){const{_c:n,_v:e,data:data,children:o=[]}=r,{class:c,staticClass:f,style:style,staticStyle:d,attrs:l={},...v}=data;return n("svg",{class:[c,f],style:[style,d],attrs:Object.assign({width:"20",height:"11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),...v},o.concat([n("path",{attrs:{d:"M3.83 4.6l2.58-2.59L5 .6l-5 5 5 5 1.41-1.41L3.83 6.6H20v-2H3.83z",fill:"#262626"}})]))}}},408:function(t,r,n){"use strict";n(386)},409:function(t,r,n){var e=n(38)(!1);e.push([t.i,".cover-img[data-v-635c32f8]{width:100%}.diagram-img[data-v-635c32f8]{display:block;margin:0 auto;width:60%}.button-wrapper[data-v-635c32f8]{display:flex;justify-content:flex-end;width:100%;margin-top:2rem}.button-wrapper button[data-v-635c32f8]{cursor:pointer;background:hsla(0,0%,100%,.9);font-weight:700;border:1px solid #222;width:12.5rem;height:3rem;transition:all .2s ease}.button-wrapper button[data-v-635c32f8]:hover{background:#222;color:hsla(0,0%,100%,.9)}.button-wrapper button:hover svg path[data-v-635c32f8]{fill:hsla(0,0%,100%,.9)}.button-wrapper button svg[data-v-635c32f8]{transform:rotate(.5turn)}",""]),t.exports=e},456:function(t,r,n){"use strict";n.r(r);n(32),n(25),n(31),n(10),n(41),n(26),n(42);var e=n(16),o=(n(45),n(238),n(75),n(33)),c=n(407);function f(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var l={components:{Arrow:n.n(c).a},props:{data:{type:Object,default:function(){}}},computed:d(d({},Object(o.c)(["breadcrumbs"])),{},{performancePage:function(){var t=this.breadcrumbs.map((function(t){return t.path}));return t.splice(0,1,"performance"),"/"+t.join("/")}})},v=(n(408),n(18)),component=Object(v.a)(l,(function(){var t=this,r=t._self._c;return r("div",[r("h1",[t._v(t._s(t.data.title))]),t._v(" "),t.data.descriptions?r("div",{staticClass:"desc-list"},t._l(t.data.descriptions,(function(desc,n){return r("div",{key:n,domProps:{innerHTML:t._s(desc)}})})),0):t._e(),t._v(" "),t.data.subItems?r("div",{staticClass:"sub-item-list"},t._l(t.data.subItems,(function(n){return r("div",{key:n.title},[r("h3",[t._v("・ "+t._s(n.title))]),t._v(" "),t._l(n.descriptions,(function(desc,n){return r("div",{key:n},[t._v(t._s(desc))])}))],2)})),0):t._e(),t._v(" "),t.data.diagram?r("div",[r("h3",[t._v("・ "+t._s(t.data.diagramName))]),t._v(" "),r("img",{staticClass:"diagram-img",attrs:{src:n(361)("./".concat(t.data.diagram)),alt:""}})]):t._e(),t._v(" "),t.data.cover?r("img",{staticClass:"cover-img",attrs:{src:n(361)("./".concat(t.data.cover)),alt:""}}):t._e(),t._v(" "),r("div",{staticClass:"button-wrapper"},[r("button",{on:{click:function(r){return t.$router.push(t.performancePage)}}},[t._v("\n      실적 보러가기\n      "),r("Arrow")],1)])])}),[],!1,null,"635c32f8",null);r.default=component.exports}}]);