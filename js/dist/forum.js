module.exports=function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=4)}([function(t,r){t.exports=flarum.core.compat.app},function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat["components/PostUser"]},function(t,r){t.exports=flarum.core.compat["components/Link"]},function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n),a=e(1),u=e(2),i=e.n(u),c=e(3),f=e.n(c);o.a.initializers.add("clarkwinkelmann-circle-groups",(function(){Object(a.extend)(i.a.prototype,"view",(function(t){var r=this.attrs.post.user();if(r){var e=r.groups().find((function(t){return t.color()}));if(e){var n,o=function(t){return function(r){return r&&r.tag&&r.tag===t}},a=t.children.find(o("h3")).children.find(o(f.a)).children.find((n="Avatar PostUser-avatar",function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className===n}));a.attrs=a.attrs||{},a.attrs.style=a.attrs.style||{},a.attrs.style.borderColor=e.color()}}}))}))}]);
//# sourceMappingURL=forum.js.map