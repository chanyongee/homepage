(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{401:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("a94d6880",content,!0,{sourceMap:!1})},427:function(t,e,r){"use strict";var c=r(2),n=r(428).start;c({target:"String",proto:!0,forced:r(429)},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},428:function(t,e,r){var c=r(5),n=r(62),o=r(17),d=r(251),l=r(31),f=c(d),h=c("".slice),m=Math.ceil,v=function(t){return function(e,r,c){var d,v,w=o(l(e)),y=n(r),O=w.length,_=void 0===c?" ":o(c);return y<=O||""==_?w:((v=f(_,m((d=y-O)/_.length))).length>d&&(v=h(v,0,d)),t?w+v:v+w)}};t.exports={start:v(!1),end:v(!0)}},429:function(t,e,r){var c=r(78);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(c)},430:function(t,e,r){"use strict";r(401)},431:function(t,e,r){var c=r(27)(!1);c.push([t.i,".card-list[data-v-49ceefac]{display:flex;flex-wrap:wrap;grid-gap:4rem;gap:4rem;width:100%}.card-list .card[data-v-49ceefac]{display:flex;flex-direction:column;width:calc(30% - 2.66667rem);padding:2.5rem 0 1.5rem 4rem;transform:translate3d(0,-3.125rem,0);transition:border .3s ease,opacity 2s cubic-bezier(.25,.46,.45,.94),transform .8s cubic-bezier(.25,.46,.45,.94);border:1px solid rgba(0,0,0,.1);box-shadow:0 0 15px 0 rgba(0,0,0,.15);opacity:0;min-height:20rem}.card-list .card.visible[data-v-49ceefac]{opacity:1;transform:translateZ(0)}.card-list .card .num[data-v-49ceefac]{font-weight:700;font-size:1.125rem;border-bottom:1px solid rgba(0,0,0,.1)}.card-list .card .title[data-v-49ceefac]{padding-top:1.5rem;padding-bottom:1.5rem;font-weight:700;font-size:1.5rem;min-height:3.5rem;word-break:keep-all;transition:border-top .3s ease;margin-right:2.5rem}.card-list .card .desc-list[data-v-49ceefac]{font-weight:500;font-size:.875rem;color:rgba(0,0,0,.5);margin-right:2.5rem}.card-list .card .desc-list li[data-v-49ceefac]{line-height:1.7}.card-list .card .img-wrapper[data-v-49ceefac]{height:9.375rem;overflow:hidden}.card-list .card .img-wrapper img[data-v-49ceefac]{width:100%;opacity:.7}@media(max-width:1439px){.card-list[data-v-49ceefac]{grid-gap:2.5rem;gap:2.5rem}.card-list .card[data-v-49ceefac]{width:calc(33.3% - 1.66667rem)}.card-list .card .title[data-v-49ceefac]{word-break:break-all}}@media(max-width:767px){.card-list[data-v-49ceefac]{grid-gap:.5rem;gap:.5rem}.card-list .card[data-v-49ceefac]{width:100%;min-height:unset;padding:2rem}}",""]),t.exports=c},477:function(t,e,r){"use strict";r.r(e);r(427),r(52),r(36),r(30),r(23),r(40),r(41);var c=r(16),n=(r(10),r(29),r(24));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{data:{type:Object,default:function(){}}},computed:d(d({},Object(n.c)(["isPhone"])),{},{body:function(){return this.data.body}}),mounted:function(){var t=this.isPhone?" isPhone":"",e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.className="card visible"+t:e.target.className="card"+t}))}));this.$refs.card.forEach((function(t){e.observe(t)}))}},f=(r(430),r(9)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"card-list"},t._l(t.body,(function(desc,r){return e("li",{key:desc[0],ref:"card",refInFor:!0,staticClass:"card",class:{isPhone:t.isPhone}},[e("span",{staticClass:"num"},[t._v(t._s(String(r+1).padStart(2,"0")))]),t._v(" "),e("h3",{staticClass:"title"},[t._v(t._s(desc[0]))]),t._v(" "),e("ul",{staticClass:"desc-list"},[e("li",{staticClass:"desc"},[t._v("\n        "+t._s(desc[1])+"\n      ")]),t._v(" "),t._l(desc.length-3,(function(r){return e("li",{key:r,staticClass:"desc"},[t._v("\n        "+t._s("".concat(t.data.headers[r+1],": ").concat(desc[r+1]))+"\n      ")])})),t._v(" "),e("li",{staticClass:"desc"},[t._v("\n        "+t._s(desc[4])+"\n      ")])],2)])})),0)}),[],!1,null,"49ceefac",null);e.default=component.exports}}]);