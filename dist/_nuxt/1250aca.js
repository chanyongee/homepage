(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{398:function(e,t,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("82eacc6e",content,!0,{sourceMap:!1})},426:function(e,t,r){"use strict";r(398)},427:function(e,t,r){var c=r(25)(!1);c.push([e.i,".card-list[data-v-6cc5ae42]{display:flex;flex-wrap:wrap;grid-gap:2rem;gap:2rem;width:100%}.card-list .card[data-v-6cc5ae42]{display:flex;flex-direction:column;flex-basis:calc(33.3% - 4rem);padding:2.5rem 2.5rem 1.5rem;transform:translate3d(0,-3.125rem,0);transition:border .3s ease,opacity 2s cubic-bezier(.25,.46,.45,.94),transform .8s cubic-bezier(.25,.46,.45,.94);border:1px solid rgba(0,0,0,.1);box-shadow:0 0 15px 0 rgba(0,0,0,.15);min-height:24.25rem;opacity:0}.card-list .card.fadeIn[data-v-6cc5ae42],.card-list .card.visible[data-v-6cc5ae42]{opacity:1;transform:translateZ(0)}.card-list .card[data-v-6cc5ae42]:hover{border:1px solid #00b4ef;box-shadow:0 0 15px 0 rgba(0,180,239,.15)}.card-list .card:hover .title[data-v-6cc5ae42]{border-top:1px solid #00b4ef}.card-list .card .num[data-v-6cc5ae42]{font-weight:700;font-size:1.125rem}.card-list .card .title[data-v-6cc5ae42]{margin-top:.567vw;padding-top:1.587vw;padding-left:.5rem;border-top:1px solid rgba(0,0,0,.1);font-weight:700;font-size:1.5rem;min-height:3.75rem;word-break:keep-all;transition:border-top .3s ease}.card-list .card .desc-list[data-v-6cc5ae42]{font-weight:500;font-size:.875rem;color:rgba(0,0,0,.5);padding-left:.5rem}.card-list .card .img-wrapper[data-v-6cc5ae42]{height:9.375rem;overflow:hidden}.card-list .card .img-wrapper img[data-v-6cc5ae42]{width:100%;opacity:.7}@media(max-width:767px){.card-list[data-v-6cc5ae42]{grid-gap:.5rem;gap:.5rem}.card-list .card[data-v-6cc5ae42]{flex-basis:100%;min-height:unset;padding:2rem}}",""]),e.exports=c},477:function(e,t,r){"use strict";r.r(t);r(52),r(12),r(27);var c={props:{data:{type:Object,default:function(){}}},computed:{body:function(){return this.data.body}},data:function(){return{fadeIn:!1}},mounted:function(){this.fadeIn=!0;var e=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting?(console.log("intersect"),e.target.className="card visible"):e.target.className="card"}))}));this.$refs.card.forEach((function(t){e.observe(t)}))}},d=(r(426),r(9)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("ul",{staticClass:"card-list"},e._l(e.body,(function(desc,r){return t("li",{key:r,ref:"card",refInFor:!0,staticClass:"card",class:{fadeIn:e.fadeIn}},[t("span",{staticClass:"num"},[e._v(e._s(r+1))]),e._v(" "),t("h3",{staticClass:"title"},[e._v(e._s(desc[0]))]),e._v(" "),t("ul",{staticClass:"desc-list"},e._l(desc.length-1,(function(r){return t("li",{key:r,staticClass:"desc"},[e._v("\n        "+e._s("".concat(e.data.headers[r],": ").concat(desc[r]))+"\n      ")])})),0)])})),0)}),[],!1,null,"6cc5ae42",null);t.default=component.exports}}]);