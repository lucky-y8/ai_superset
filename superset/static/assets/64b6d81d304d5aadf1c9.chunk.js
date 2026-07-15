/*! For license information please see 64b6d81d304d5aadf1c9.chunk.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5026],{49194(e,t,r){"use strict";function n(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var d=o[s];if(!a(d))return!1;var c=e[d],u=t[d];if(!1===(i=r?r.call(n,c,u,d):void 0)||void 0===i&&c!==u)return!1}return!0}r.d(t,{b:()=>n})},38491(e,t,r){let n;self,n=r(64260),e.exports=(()=>{var e={4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=i.apply(null,r);l&&e.push(l)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=(function(){return i}).apply(t,[]))||(e.exports=r)}()},8552:(e,t,r)=>{e.exports=r(852)(r(5639),"DataView")},1989:(e,t,r)=>{var n=r(1789),i=r(401),o=r(7667),l=r(1327),a=r(1866);function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=l,s.prototype.set=a,e.exports=s},8407:(e,t,r)=>{var n=r(7040),i=r(4125),o=r(2117),l=r(7518),a=r(4705);function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=l,s.prototype.set=a,e.exports=s},7071:(e,t,r)=>{e.exports=r(852)(r(5639),"Map")},3369:(e,t,r)=>{var n=r(4785),i=r(1285),o=r(6e3),l=r(9916),a=r(5265);function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=i,s.prototype.get=o,s.prototype.has=l,s.prototype.set=a,e.exports=s},3818:(e,t,r)=>{e.exports=r(852)(r(5639),"Promise")},8525:(e,t,r)=>{e.exports=r(852)(r(5639),"Set")},8668:(e,t,r)=>{var n=r(3369),i=r(619),o=r(2385);function l(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}l.prototype.add=l.prototype.push=i,l.prototype.has=o,e.exports=l},6384:(e,t,r)=>{var n=r(8407),i=r(7465),o=r(3779),l=r(7599),a=r(4758),s=r(4309);function d(e){var t=this.__data__=new n(e);this.size=t.size}d.prototype.clear=i,d.prototype.delete=o,d.prototype.get=l,d.prototype.has=a,d.prototype.set=s,e.exports=d},2705:(e,t,r)=>{e.exports=r(5639).Symbol},1149:(e,t,r)=>{e.exports=r(5639).Uint8Array},577:(e,t,r)=>{e.exports=r(852)(r(5639),"WeakMap")},4963:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var l=e[r];t(l,r,e)&&(o[i++]=l)}return o}},4636:(e,t,r)=>{var n=r(2545),i=r(5694),o=r(1469),l=r(4144),a=r(5776),s=r(6719),d=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=o(e),c=!r&&i(e),u=!r&&!c&&l(e),h=!r&&!c&&!u&&s(e),p=r||c||u||h,f=p?n(e.length,String):[],m=f.length;for(var g in e)!t&&!d.call(e,g)||p&&("length"==g||u&&("offset"==g||"parent"==g)||h&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||a(g,m))||f.push(g);return f}},2488:e=>{e.exports=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}},2908:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},8470:(e,t,r)=>{var n=r(7813);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return -1}},8866:(e,t,r)=>{var n=r(2488),i=r(1469);e.exports=function(e,t,r){var o=t(e);return i(e)?o:n(o,r(e))}},4239:(e,t,r)=>{var n=r(2705),i=r(9607),o=r(2333),l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?i(e):o(e)}},9454:(e,t,r)=>{var n=r(4239),i=r(7005);e.exports=function(e){return i(e)&&"[object Arguments]"==n(e)}},939:(e,t,r)=>{var n=r(2492),i=r(7005);e.exports=function e(t,r,o,l,a){return t===r||(null!=t&&null!=r&&(i(t)||i(r))?n(t,r,o,l,e,a):t!=t&&r!=r)}},2492:(e,t,r)=>{var n=r(6384),i=r(7114),o=r(8351),l=r(6096),a=r(4160),s=r(1469),d=r(4144),c=r(6719),u="[object Arguments]",h="[object Array]",p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,m,g,v){var b=s(e),y=s(t),x=b?h:a(e),S=y?h:a(t),w=(x=x==u?p:x)==p,C=(S=S==u?p:S)==p,k=x==S;if(k&&d(e)){if(!d(t))return!1;b=!0,w=!1}if(k&&!w)return v||(v=new n),b||c(e)?i(e,t,r,m,g,v):o(e,t,x,r,m,g,v);if(!(1&r)){var $=w&&f.call(e,"__wrapped__"),D=C&&f.call(t,"__wrapped__");if($||D){var I=$?e.value():e,O=D?t.value():t;return v||(v=new n),g(I,O,r,m,v)}}return!!k&&(v||(v=new n),l(e,t,r,m,g,v))}},8458:(e,t,r)=>{var n=r(3560),i=r(5346),o=r(3218),l=r(346),a=/^\[object .+?Constructor\]$/,s=Object.prototype,d=Function.prototype.toString,c=s.hasOwnProperty,u=RegExp("^"+d.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||i(e))&&(n(e)?u:a).test(l(e))}},8749:(e,t,r)=>{var n=r(4239),i=r(1780),o=r(7005),l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Arguments]"]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l["[object Function]"]=l["[object Map]"]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1,e.exports=function(e){return o(e)&&i(e.length)&&!!l[n(e)]}},280:(e,t,r)=>{var n=r(5726),i=r(6916),o=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return i(e);var t=[];for(var r in Object(e))o.call(e,r)&&"constructor"!=r&&t.push(r);return t}},2545:e=>{e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},1717:e=>{e.exports=function(e){return function(t){return e(t)}}},4757:e=>{e.exports=function(e,t){return e.has(t)}},4429:(e,t,r)=>{e.exports=r(5639)["__core-js_shared__"]},7114:(e,t,r)=>{var n=r(8668),i=r(2908),o=r(4757);e.exports=function(e,t,r,l,a,s){var d=1&r,c=e.length,u=t.length;if(c!=u&&!(d&&u>c))return!1;var h=s.get(e),p=s.get(t);if(h&&p)return h==t&&p==e;var f=-1,m=!0,g=2&r?new n:void 0;for(s.set(e,t),s.set(t,e);++f<c;){var v=e[f],b=t[f];if(l)var y=d?l(b,v,f,t,e,s):l(v,b,f,e,t,s);if(void 0!==y){if(y)continue;m=!1;break}if(g){if(!i(t,function(e,t){if(!o(g,t)&&(v===e||a(v,e,r,l,s)))return g.push(t)})){m=!1;break}}else if(v!==b&&!a(v,b,r,l,s)){m=!1;break}}return s.delete(e),s.delete(t),m}},8351:(e,t,r)=>{var n=r(2705),i=r(1149),o=r(7813),l=r(7114),a=r(8776),s=r(1814),d=n?n.prototype:void 0,c=d?d.valueOf:void 0;e.exports=function(e,t,r,n,d,u,h){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!u(new i(e),new i(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var p=a;case"[object Set]":var f=1&n;if(p||(p=s),e.size!=t.size&&!f)break;var m=h.get(e);if(m)return m==t;n|=2,h.set(e,t);var g=l(p(e),p(t),n,d,u,h);return h.delete(e),g;case"[object Symbol]":if(c)return c.call(e)==c.call(t)}return!1}},6096:(e,t,r)=>{var n=r(8234),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,o,l,a){var s=1&r,d=n(e),c=d.length;if(c!=n(t).length&&!s)return!1;for(var u=c;u--;){var h=d[u];if(!(s?h in t:i.call(t,h)))return!1}var p=a.get(e),f=a.get(t);if(p&&f)return p==t&&f==e;var m=!0;a.set(e,t),a.set(t,e);for(var g=s;++u<c;){var v=e[h=d[u]],b=t[h];if(o)var y=s?o(b,v,h,t,e,a):o(v,b,h,e,t,a);if(!(void 0===y?v===b||l(v,b,r,o,a):y)){m=!1;break}g||(g="constructor"==h)}if(m&&!g){var x=e.constructor,S=t.constructor;x==S||!("constructor"in e)||!("constructor"in t)||"function"==typeof x&&x instanceof x&&"function"==typeof S&&S instanceof S||(m=!1)}return a.delete(e),a.delete(t),m}},1957:(e,t,r)=>{e.exports="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g},8234:(e,t,r)=>{var n=r(8866),i=r(9551),o=r(3674);e.exports=function(e){return n(e,o,i)}},5050:(e,t,r)=>{var n=r(7019);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},852:(e,t,r)=>{var n=r(8458),i=r(7801);e.exports=function(e,t){var r=i(e,t);return n(r)?r:void 0}},9607:(e,t,r)=>{var n=r(2705),i=Object.prototype,o=i.hasOwnProperty,l=i.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch{}var i=l.call(e);return n&&(t?e[a]=r:delete e[a]),i}},9551:(e,t,r)=>{var n=r(4963),i=r(479),o=Object.prototype.propertyIsEnumerable,l=Object.getOwnPropertySymbols;e.exports=l?function(e){return null==e?[]:n(l(e=Object(e)),function(t){return o.call(e,t)})}:i},4160:(e,t,r)=>{var n=r(8552),i=r(7071),o=r(3818),l=r(8525),a=r(577),s=r(4239),d=r(346),c="[object Map]",u="[object Promise]",h="[object Set]",p="[object WeakMap]",f="[object DataView]",m=d(n),g=d(i),v=d(o),b=d(l),y=d(a),x=s;(n&&x(new n(new ArrayBuffer(1)))!=f||i&&x(new i)!=c||o&&x(o.resolve())!=u||l&&x(new l)!=h||a&&x(new a)!=p)&&(x=function(e){var t=s(e),r="[object Object]"==t?e.constructor:void 0,n=r?d(r):"";if(n)switch(n){case m:return f;case g:return c;case v:return u;case b:return h;case y:return p}return t}),e.exports=x},7801:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},1789:(e,t,r)=>{var n=r(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=!!t,t}},7667:(e,t,r)=>{var n=r(4536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return i.call(t,e)?t[e]:void 0}},1327:(e,t,r)=>{var n=r(4536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:i.call(t,e)}},1866:(e,t,r)=>{var n=r(4536);e.exports=function(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},5776:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?0x1fffffffffffff:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},7019:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:(e,t,r)=>{var n,i=r(4429),o=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!o&&o in e}},5726:e=>{var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,t,r)=>{var n=r(8470),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():i.call(t,r,1),--this.size,0))}},2117:(e,t,r)=>{var n=r(8470);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},7518:(e,t,r)=>{var n=r(8470);e.exports=function(e){return n(this.__data__,e)>-1}},4705:(e,t,r)=>{var n=r(8470);e.exports=function(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}},4785:(e,t,r)=>{var n=r(1989),i=r(8407),o=r(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(o||i),string:new n}}},1285:(e,t,r)=>{var n=r(5050);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=!!t,t}},6e3:(e,t,r)=>{var n=r(5050);e.exports=function(e){return n(this,e).get(e)}},9916:(e,t,r)=>{var n=r(5050);e.exports=function(e){return n(this,e).has(e)}},5265:(e,t,r)=>{var n=r(5050);e.exports=function(e,t){var r=n(this,e),i=r.size;return r.set(e,t),this.size+=+(r.size!=i),this}},8776:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}},4536:(e,t,r)=>{e.exports=r(852)(Object,"create")},6916:(e,t,r)=>{e.exports=r(5569)(Object.keys,Object)},1167:(e,t,r)=>{e=r.nmd(e);var n=r(1957),i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,l=o&&o.exports===i&&n.process,a=function(){try{return o&&o.require&&o.require("util").types||l&&l.binding&&l.binding("util")}catch{}}();e.exports=a},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:e=>{e.exports=function(e,t){return function(r){return e(t(r))}}},5639:(e,t,r)=>{var n=r(1957),i="object"==typeof self&&self&&self.Object===Object&&self;e.exports=n||i||Function("return this")()},619:e=>{e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(e){return this.__data__.has(e)}},1814:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},7465:(e,t,r)=>{var n=r(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}},7599:e=>{e.exports=function(e){return this.__data__.get(e)}},4758:e=>{e.exports=function(e){return this.__data__.has(e)}},4309:(e,t,r)=>{var n=r(8407),i=r(7071),o=r(3369);e.exports=function(e,t){var r=this.__data__;if(r instanceof n){var l=r.__data__;if(!i||l.length<199)return l.push([e,t]),this.size=++r.size,this;r=this.__data__=new o(l)}return r.set(e,t),this.size=r.size,this}},346:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch{}try{return e+""}catch{}}return""}},7813:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},5694:(e,t,r)=>{var n=r(9454),i=r(7005),o=Object.prototype,l=o.hasOwnProperty,a=o.propertyIsEnumerable;e.exports=n(function(){return arguments}())?n:function(e){return i(e)&&l.call(e,"callee")&&!a.call(e,"callee")}},1469:e=>{e.exports=Array.isArray},8612:(e,t,r)=>{var n=r(3560),i=r(1780);e.exports=function(e){return null!=e&&i(e.length)&&!n(e)}},4144:(e,t,r)=>{e=r.nmd(e);var n=r(5639),i=r(5062),o=t&&!t.nodeType&&t,l=o&&e&&!e.nodeType&&e,a=l&&l.exports===o?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||i;e.exports=s},8446:(e,t,r)=>{var n=r(939);e.exports=function(e,t){return n(e,t)}},3560:(e,t,r)=>{var n=r(4239),i=r(3218);e.exports=function(e){if(!i(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},6719:(e,t,r)=>{var n=r(8749),i=r(1717),o=r(1167),l=o&&o.isTypedArray;e.exports=l?i(l):n},3674:(e,t,r)=>{var n=r(4636),i=r(280),o=r(8612);e.exports=function(e){return o(e)?n(e):i(e)}},8306:(e,t,r)=>{var n=r(3369);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var l=e.apply(this,n);return r.cache=o.set(i,l)||o,l};return r.cache=new(i.Cache||n),r}i.Cache=n,e.exports=i},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},2703:(e,t,r)=>{"use strict";var n=r(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,l){if(l!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9787:e=>{"use strict";e.exports=n}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n](o,o.exports,r),o.loaded=!0,o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch{if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var i={};return(()=>{"use strict";r.r(i),r.d(i,{default:()=>er,expandNodesToLevel:()=>function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(n>r)return[];var i=[];return t.forEach(function(t){t.children&&(i=[].concat(ee(i),[t.value],ee(e(t.children,r,n+1))))}),i}});var e=r(4184),t=r.n(e),n=r(8446),o=r.n(n),l=r(8306),a=r.n(l),s=r(5697),d=r.n(s),c=r(9787),u=r.n(c);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["children","title"];function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&m(i,e);var t,r,n=(r=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var e,t=g(i);if(e=r?Reflect.construct(t,arguments,g(this).constructor):t.apply(this,arguments),e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");if(void 0===this)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return this});function i(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),n.apply(this,arguments)}return t=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.title,n=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,p);return u().createElement("button",f({"aria-label":r,title:r,type:"button"},n),t)}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(i.prototype,t),Object.defineProperty(i,"prototype",{writable:!1}),i}(u().PureComponent);v(b,"propTypes",{children:d().node.isRequired,title:d().string}),v(b,"defaultProps",{title:null});let y="all",x="parent",S="leaf";function w(e){this.message=e,this.stack=Error().stack}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}w.prototype=Object.create(Error.prototype),w.prototype.name="CheckboxTreeError";let k=function(){var e;function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,t),this.props=e,this.flatNodes=r}return e=[{key:"setProps",value:function(e){this.props=e}},{key:"clone",value:function(){var e=this,r={};return Object.keys(this.flatNodes).forEach(function(t){var n=e.flatNodes[t];r[t]=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},n)}),new t(this.props,r)}},{key:"getNode",value:function(e){return this.flatNodes[e]}},{key:"reset",value:function(){this.flatNodes={}}},{key:"flattenNodes",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(Array.isArray(e)&&0!==e.length){var i=this.props,o=i.disabled,l=i.noCascade;e.forEach(function(e,i){var a=t.nodeHasChildren(e);if(void 0!==t.flatNodes[e.value])throw new w("Duplicate value '".concat(e.value,"' detected. All node values must be unique."));t.flatNodes[e.value]={label:e.label,value:e.value,children:e.children,parent:r,isChild:void 0!==r.value,isParent:a,isLeaf:!a,showCheckbox:void 0===e.showCheckbox||e.showCheckbox,disabled:t.getDisabledState(e,r,o,l),treeDepth:n,index:i},t.flattenNodes(e.children,e,n+1)})}}},{key:"nodeHasChildren",value:function(e){return Array.isArray(e.children)}},{key:"getDisabledState",value:function(e,t,r,n){return!!r||!(n||!t.disabled)||!!e.disabled}},{key:"deserializeLists",value:function(e){var t=this,r=["checked","expanded"];Object.keys(this.flatNodes).forEach(function(e){r.forEach(function(r){t.flatNodes[e][r]=!1})}),r.forEach(function(r){e[r].forEach(function(e){void 0!==t.flatNodes[e]&&(t.flatNodes[e][r]=!0)})})}},{key:"serializeList",value:function(e){var t=this,r=[];return Object.keys(this.flatNodes).forEach(function(n){t.flatNodes[n][e]&&r.push(n)}),r}},{key:"expandAllNodes",value:function(e){var t=this;return Object.keys(this.flatNodes).forEach(function(r){t.flatNodes[r].isParent&&(t.flatNodes[r].expanded=e)}),this}},{key:"toggleChecked",value:function(e,t,r,n){var i=this,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],l=this.flatNodes[e.value],a=[x,y].indexOf(r)>-1,s=[S,y].indexOf(r)>-1;if(l.isLeaf||n){if(e.disabled)return this;this.toggleNode(e.value,"checked",t)}else(a||0===l.children.length)&&this.toggleNode(e.value,"checked",t),s&&l.children.forEach(function(e){i.toggleChecked(e,t,r,n,!1)});return o&&!n&&l.isChild&&a&&this.toggleParentStatus(l.parent,r),this}},{key:"toggleParentStatus",value:function(e,t){var r=this.flatNodes[e.value];r.isChild?(t===y&&this.toggleNode(e.value,"checked",this.isEveryChildChecked(r)),this.toggleParentStatus(r.parent,t)):this.toggleNode(e.value,"checked",this.isEveryChildChecked(r))}},{key:"isEveryChildChecked",value:function(e){var t=this;return e.children.every(function(e){return t.getNode(e.value).checked})}},{key:"toggleNode",value:function(e,t,r){return this.flatNodes[e][t]=r,this}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function O(e,t){return(O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&O(i,e);var t,r,n=(r=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var e,t=T(i);if(e=r?Reflect.construct(t,arguments,T(this).constructor):t.apply(this,arguments),e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");if(void 0===this)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return this});function i(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),n.apply(this,arguments)}return t=[{key:"componentDidMount",value:function(){this.updateDeterminateProperty()}},{key:"componentDidUpdate",value:function(){this.updateDeterminateProperty()}},{key:"updateDeterminateProperty",value:function(){var e=this.props.indeterminate;this.checkbox.indeterminate=e}},{key:"render",value:function(){var e=this,t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(t){z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},this.props);return delete t.indeterminate,u().createElement("input",D({},t,{ref:function(t){e.checkbox=t},type:"checkbox"}))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(i.prototype,t),Object.defineProperty(i,"prototype",{writable:!1}),i}(u().PureComponent);z(Y,"propTypes",{indeterminate:d().bool}),z(Y,"defaultProps",{indeterminate:!1});let F=d().shape({check:d().node,uncheck:d().node,halfCheck:d().node,expandClose:d().node,expandOpen:d().node,expandAll:d().node,collapseAll:d().node,parentClose:d().node,parentOpen:d().node,leaf:d().node}),A=d().shape({collapseAll:d().string.isRequired,expandAll:d().string.isRequired,toggle:d().string.isRequired});function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){return(E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&E(o,e);var r,n,i=(n=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var e,t=M(o);if(e=n?Reflect.construct(t,arguments,M(this).constructor):t.apply(this,arguments),e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return P(this)});function o(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).onCheck=t.onCheck.bind(P(t)),t.onCheckboxKeyPress=t.onCheckboxKeyPress.bind(P(t)),t.onCheckboxKeyUp=t.onCheckboxKeyUp.bind(P(t)),t.onClick=t.onClick.bind(P(t)),t.onExpand=t.onExpand.bind(P(t)),t}return r=[{key:"onCheck",value:function(){var e=this.props,t=e.value;(0,e.onCheck)({value:t,checked:this.getCheckState({toggle:!0})})}},{key:"onCheckboxKeyPress",value:function(e){32===e.which&&e.preventDefault()}},{key:"onCheckboxKeyUp",value:function(e){[13,32].includes(e.keyCode)&&this.onCheck()}},{key:"onClick",value:function(){var e=this.props,t=e.expandOnClick,r=e.isParent,n=e.value,i=e.onClick;r&&t&&this.onExpand(),i({value:n,checked:this.getCheckState({toggle:!1})})}},{key:"onExpand",value:function(){var e=this.props,t=e.expanded,r=e.value;(0,e.onExpand)({value:r,expanded:!t})}},{key:"getCheckState",value:function(e){var t=e.toggle,r=this.props,n=r.checked,i=r.optimisticToggle;return!(0!==n||!t)||1===n&&!t||2===n&&i}},{key:"renderCollapseButton",value:function(){var e=this.props,t=e.expandDisabled,r=e.isLeaf,n=e.lang;return r?u().createElement("span",{className:"rct-collapse"},u().createElement("span",{className:"rct-icon"})):u().createElement(b,{className:"rct-collapse rct-collapse-btn",disabled:t,title:n.toggle,onClick:this.onExpand},this.renderCollapseIcon())}},{key:"renderCollapseIcon",value:function(){var e=this.props,t=e.expanded,r=e.icons,n=r.expandClose,i=r.expandOpen;return t?i:n}},{key:"renderCheckboxIcon",value:function(){var e=this.props,t=e.checked,r=e.icons,n=r.uncheck,i=r.check,o=r.halfCheck;return 0===t?n:1===t?i:o}},{key:"renderNodeIcon",value:function(){var e=this.props,t=e.expanded,r=e.icon,n=e.icons,i=n.leaf,o=n.parentClose,l=n.parentOpen,a=e.isLeaf;return null!==r?r:a?i:t?l:o}},{key:"renderBareLabel",value:function(e){var t=this.props,r=t.onClick,n=t.title;return u().createElement("span",{className:"rct-bare-label",title:n},null!==r?u().createElement("span",{className:"rct-node-clickable",onClick:this.onClick,onKeyPress:this.onClick,role:"button",tabIndex:0},e):e)}},{key:"renderCheckboxLabel",value:function(e){var t=this.props,r=t.checked,n=t.disabled,i=t.title,o=t.treeId,l=t.value,a=null!==t.onClick,s="".concat(o,"-").concat(String(l).split(" ").join("_")),d=[u().createElement("label",{key:0,htmlFor:s,title:i},u().createElement(Y,{checked:1===r,disabled:n,id:s,indeterminate:2===r,onClick:this.onCheck,onChange:function(){}}),u().createElement("span",{"aria-checked":1===r,"aria-disabled":n,className:"rct-checkbox",role:"checkbox",tabIndex:0,onKeyPress:this.onCheckboxKeyPress,onKeyUp:this.onCheckboxKeyUp},this.renderCheckboxIcon()),a?null:e)];return a&&d.push(u().createElement("span",{key:1,className:"rct-node-clickable",onClick:this.onClick,onKeyPress:this.onClick,role:"link",tabIndex:0},e)),d}},{key:"renderLabel",value:function(){var e=this.props,t=e.label,r=e.showCheckbox,n=[e.showNodeIcon?u().createElement("span",{key:0,className:"rct-node-icon"},this.renderNodeIcon()):null,u().createElement("span",{key:1,className:"rct-title"},t)];return r?this.renderCheckboxLabel(n):this.renderBareLabel(n)}},{key:"renderChildren",value:function(){return this.props.expanded?this.props.children:null}},{key:"render",value:function(){var e=this.props,r=e.className,n=e.disabled,i=e.expanded,o=e.isLeaf,l=t()({"rct-node":!0,"rct-node-leaf":o,"rct-node-parent":!o,"rct-node-expanded":!o&&i,"rct-node-collapsed":!o&&!i,"rct-disabled":n},r);return u().createElement("li",{className:l},u().createElement("span",{className:"rct-text"},this.renderCollapseButton(),this.renderLabel()),this.renderChildren())}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),o}(u().PureComponent);R(j,"propTypes",{checked:d().number.isRequired,disabled:d().bool.isRequired,expandDisabled:d().bool.isRequired,expanded:d().bool.isRequired,icons:F.isRequired,isLeaf:d().bool.isRequired,isParent:d().bool.isRequired,label:d().node.isRequired,lang:A.isRequired,optimisticToggle:d().bool.isRequired,showNodeIcon:d().bool.isRequired,treeId:d().string.isRequired,value:d().oneOfType([d().string,d().number]).isRequired,onCheck:d().func.isRequired,onExpand:d().func.isRequired,children:d().node,className:d().string,expandOnClick:d().bool,icon:d().node,showCheckbox:d().bool,title:d().string,onClick:d().func}),R(j,"defaultProps",{children:null,className:null,expandOnClick:!1,icon:null,showCheckbox:!0,title:null,onClick:function(){}});let U=d().oneOfType([d().arrayOf(d().string),d().arrayOf(d().number)]);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach(function(t){var n,i,o;n=e,i=t,o=r[t],i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var L={label:d().node.isRequired,value:d().oneOfType([d().string,d().number]).isRequired,disabled:d().bool,icon:d().node,showCheckbox:d().bool,title:d().string};let V=d().oneOfType([d().shape(L),d().shape(H(H({},L),{},{children:d().arrayOf(L).isRequired}))]);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,t){return(K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&K(s,e);var r,n,i,l=(i=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var e,t=X(s);if(e=i?Reflect.construct(t,arguments,X(this).constructor):t.apply(this,arguments),e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return Q(this)});function s(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),t=l.call(this,e);var t,r=new k(e);return r.flattenNodes(e.nodes),r.deserializeLists({checked:e.checked,expanded:e.expanded}),t.state={id:e.id||"rct-".concat(((e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),""))()),model:r,prevProps:e},t.onCheck=t.onCheck.bind(Q(t)),t.onExpand=t.onExpand.bind(Q(t)),t.onNodeClick=t.onNodeClick.bind(Q(t)),t.onExpandAll=t.onExpandAll.bind(Q(t)),t.onCollapseAll=t.onCollapseAll.bind(Q(t)),t.combineMemorized=a()(function(e,t){return W(W({},e),t)}).bind(Q(t)),t}return r=[{key:"onCheck",value:function(e){var t=this.props,r=t.checkModel,n=t.noCascade,i=t.onCheck,o=this.state.model.clone(),l=o.getNode(e.value);o.toggleChecked(e,e.checked,r,n),i(o.serializeList("checked"),W(W({},l),e))}},{key:"onExpand",value:function(e){var t=this.props.onExpand,r=this.state.model.clone(),n=r.getNode(e.value);r.toggleNode(e.value,"expanded",e.expanded),t(r.serializeList("expanded"),W(W({},n),e))}},{key:"onNodeClick",value:function(e){(0,this.props.onClick)(W(W({},this.state.model.getNode(e.value)),e))}},{key:"onExpandAll",value:function(){this.expandAllNodes()}},{key:"onCollapseAll",value:function(){this.expandAllNodes(!1)}},{key:"expandAllNodes",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(0,this.props.onExpand)(this.state.model.clone().expandAllNodes(e).serializeList("expanded"))}},{key:"determineShallowCheckState",value:function(e,t){var r=this.state.model.getNode(e.value);return r.isLeaf||t||0===e.children.length?+!!r.checked:this.isEveryChildChecked(e)?1:2*!!this.isSomeChildChecked(e)}},{key:"isEveryChildChecked",value:function(e){var t=this;return e.children.every(function(e){return 1===t.state.model.getNode(e.value).checkState})}},{key:"isSomeChildChecked",value:function(e){var t=this;return e.children.some(function(e){return t.state.model.getNode(e.value).checkState>0})}},{key:"renderTreeNodes",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.props,i=n.expandDisabled,o=n.expandOnClick,l=n.icons,a=n.lang,d=n.noCascade,c=n.onClick,h=n.onlyLeafCheckboxes,p=n.optimisticToggle,f=n.showNodeTitle,m=n.showNodeIcon,g=this.state,v=g.id,b=g.model,y=s.defaultProps.icons,x=e.map(function(e){var n=e.value,s=b.getNode(e.value),g=s.isParent?t.renderTreeNodes(e.children,e):null;s.checkState=t.determineShallowCheckState(e,d);var x=h?s.isLeaf:s.showCheckbox;return!r.value||b.getNode(r.value).expanded?u().createElement(j,{key:n,checked:s.checkState,className:e.className,disabled:s.disabled,expandDisabled:i,expandOnClick:o,expanded:s.expanded,icon:e.icon,icons:t.combineMemorized(y,l),label:e.label,lang:a,optimisticToggle:p,isLeaf:s.isLeaf,isParent:s.isParent,showCheckbox:x,showNodeIcon:m,title:f?e.title||e.label:e.title,treeId:v,value:e.value,onCheck:t.onCheck,onClick:c&&t.onNodeClick,onExpand:t.onExpand},g):null});return u().createElement("ol",null,x)}},{key:"renderExpandAll",value:function(){var e=this.props,t=e.icons,r=t.expandAll,n=t.collapseAll,i=e.lang;return e.showExpandAll?u().createElement("div",{className:"rct-options"},u().createElement(b,{className:"rct-option rct-option-expand-all",title:i.expandAll,onClick:this.onExpandAll},r),u().createElement(b,{className:"rct-option rct-option-collapse-all",title:i.collapseAll,onClick:this.onCollapseAll},n)):null}},{key:"renderHiddenInput",value:function(){var e=this.props,t=e.name,r=e.nameAsArray;return void 0===t?null:r?this.renderArrayHiddenInput():this.renderJoinedHiddenInput()}},{key:"renderArrayHiddenInput",value:function(){var e=this.props,t=e.checked,r=e.name;return t.map(function(e){return u().createElement("input",{key:e,name:"".concat(r,"[]"),type:"hidden",value:e})})}},{key:"renderJoinedHiddenInput",value:function(){var e=this.props,t=e.checked,r=e.name,n=t.join(",");return u().createElement("input",{name:r,type:"hidden",value:n})}},{key:"render",value:function(){var e,r=this.props,n=r.direction,i=r.disabled,o=r.iconsClass,l=r.nodes,a=r.nativeCheckboxes,s=this.state.id,d=this.renderTreeNodes(l),c=t()((Z(e={"react-checkbox-tree":!0,"rct-disabled":i},"rct-icons-".concat(o),!0),Z(e,"rct-native-display",a),Z(e,"rct-direction-rtl","rtl"===n),e));return u().createElement("div",{className:c,id:s},this.renderExpandAll(),this.renderHiddenInput(),d)}}],n=[{key:"getDerivedStateFromProps",value:function(e,t){var r=t.model,n=t.prevProps,i=e.disabled,l=e.id,a=e.nodes,s=W(W({},t),{},{prevProps:e});return r.setProps(e),o()(n.nodes,a)&&n.disabled===i||(r.reset(),r.flattenNodes(a)),null!==l&&(s=W(W({},s),{},{id:l})),r.deserializeLists({checked:e.checked,expanded:e.expanded}),s}}],r&&G(s.prototype,r),n&&G(s,n),Object.defineProperty(s,"prototype",{writable:!1}),s}(u().Component);function ee(e){return function(e){if(Array.isArray(e))return et(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e){if(e){if("string"==typeof e)return et(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?et(e,void 0):void 0}}(e)||function(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Z(J,"propTypes",{nodes:d().arrayOf(V).isRequired,checkModel:d().oneOf([S,y]),checked:U,direction:d().string,disabled:d().bool,expandDisabled:d().bool,expandOnClick:d().bool,expanded:U,icons:F,iconsClass:d().string,id:d().string,lang:A,name:d().string,nameAsArray:d().bool,nativeCheckboxes:d().bool,noCascade:d().bool,onlyLeafCheckboxes:d().bool,optimisticToggle:d().bool,showExpandAll:d().bool,showNodeIcon:d().bool,showNodeTitle:d().bool,onCheck:d().func,onClick:d().func,onExpand:d().func}),Z(J,"defaultProps",{checkModel:S,checked:[],direction:"ltr",disabled:!1,expandDisabled:!1,expandOnClick:!1,expanded:[],icons:{check:u().createElement("span",{className:"rct-icon rct-icon-check"}),uncheck:u().createElement("span",{className:"rct-icon rct-icon-uncheck"}),halfCheck:u().createElement("span",{className:"rct-icon rct-icon-half-check"}),expandClose:u().createElement("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:u().createElement("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:u().createElement("span",{className:"rct-icon rct-icon-expand-all"}),collapseAll:u().createElement("span",{className:"rct-icon rct-icon-collapse-all"}),parentClose:u().createElement("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:u().createElement("span",{className:"rct-icon rct-icon-parent-open"}),leaf:u().createElement("span",{className:"rct-icon rct-icon-leaf"})},iconsClass:"fa4",id:null,lang:{collapseAll:"Collapse all",expandAll:"Expand all",toggle:"Toggle"},name:void 0,nameAsArray:!1,nativeCheckboxes:!1,noCascade:!1,onlyLeafCheckboxes:!1,optimisticToggle:!0,showExpandAll:!1,showNodeIcon:!0,showNodeTitle:!1,onCheck:function(){},onClick:null,onExpand:function(){}});let er=J})(),i})()},22925(e,t,r){"use strict";r.d(t,{DragLayer:()=>J,DragSource:()=>L,DropTarget:()=>K});var n,i=r(72954);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return"function"==typeof e}function a(){}function s(e){if("object"!==o(e)||null===e)return!1;if(null===Object.getPrototypeOf(e))return!0;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function d(e){var t=e.current;return null==t?null:t.decoratedRef?t.decoratedRef.current:t}function c(e){var t;return e&&e.prototype&&"function"==typeof e.prototype.render||(null==e||null==(t=e.$$typeof)?void 0:t.toString())==="Symbol(react.forward_ref)"}function u(e,t){}var h=r(64260),p=r(49194),f=r(4146),m=r.n(f),g=r(82710);function v(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,r){return t&&b(e.prototype,t),r&&b(e,r),e}var x=((n=function(){function e(t){v(this,e),this.isDisposed=!1,this.action=l(t)?t:a}return y(e,[{key:"dispose",value:function(){this.isDisposed||(this.action(),this.isDisposed=!0)}}],[{key:"isDisposable",value:function(e){return!!(e&&l(e.dispose))}},{key:"_fixup",value:function(t){return e.isDisposable(t)?t:e.empty}},{key:"create",value:function(t){return new e(t)}}]),e}()).empty={dispose:a},n),S=function(){function e(){v(this,e),this.isDisposed=!1;for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];this.disposables=r}return y(e,[{key:"add",value:function(e){this.isDisposed?e.dispose():this.disposables.push(e)}},{key:"remove",value:function(e){var t=!1;if(!this.isDisposed){var r=this.disposables.indexOf(e);-1!==r&&(t=!0,this.disposables.splice(r,1),e.dispose())}return t}},{key:"clear",value:function(){if(!this.isDisposed){for(var e=this.disposables.length,t=Array(e),r=0;r<e;r++)t[r]=this.disposables[r];this.disposables=[];for(var n=0;n<e;n++)t[n].dispose()}}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;for(var e=this.disposables.length,t=Array(e),r=0;r<e;r++)t[r]=this.disposables[r];this.disposables=[];for(var n=0;n<e;n++)t[n].dispose()}}}]),e}(),w=function(){function e(){v(this,e),this.isDisposed=!1}return y(e,[{key:"getDisposable",value:function(){return this.current}},{key:"setDisposable",value:function(e){var t=this.isDisposed;if(!t){var r=this.current;this.current=e,r&&r.dispose()}t&&e&&e.dispose()}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=void 0,e&&e.dispose()}}}]),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e){var t,r=e.DecoratedComponent,n=e.createHandler,o=e.createMonitor,l=e.createConnector,a=e.registerHandler,s=e.containerDisplayName,d=e.getType,u=e.collect,f=e.options.arePropsEqual,v=void 0===f?p.b:f,b=r.displayName||r.name||"Component",y=((t=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");m.prototype=Object.create(e&&e.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),e&&$(m,e);var t,s,f=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}(),function(){var e,r,n,i=D(m);return n=t?Reflect.construct(i,arguments,D(this).constructor):i.apply(this,arguments),e=this,(r=n)&&("object"===C(r)||"function"==typeof r)?r:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)});function m(e){var t;if(!(this instanceof m))throw TypeError("Cannot call a class as a function");return(t=f.call(this,e)).decoratedRef=h.createRef(),t.handleChange=function(){var e=t.getCurrentState();(0,p.b)(e,t.state)||t.setState(e)},t.disposable=new w,t.receiveProps(e),t.dispose(),t}return s=[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return(0,i.V)(this.decoratedRef.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.decoratedRef.current}},{key:"shouldComponentUpdate",value:function(e,t){return!v(e,this.props)||!(0,p.b)(t,this.state)}},{key:"componentDidMount",value:function(){this.disposable=new w,this.currentType=void 0,this.receiveProps(this.props),this.handleChange()}},{key:"componentDidUpdate",value:function(e){v(this.props,e)||(this.receiveProps(this.props),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"receiveProps",value:function(e){this.handler&&(this.handler.receiveProps(e),this.receiveType(d(e)))}},{key:"receiveType",value:function(e){if(this.handlerMonitor&&this.manager&&this.handlerConnector&&e!==this.currentType){this.currentType=e;var t,r=function(e){if(Array.isArray(e))return e}(t=a(e,this.handler,this.manager))||function(e){if("u">typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,n=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),2!==t.length);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return t}}(t)||function(e){if(e){if("string"==typeof e)return k(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,2)}}(t)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),n=r[0],i=r[1];this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var o=this.manager.getMonitor().subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new S(new x(o),new x(i)))}}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector&&this.handlerConnector.receiveHandlerId(null)}},{key:"getCurrentState",value:function(){return this.handlerConnector?u(this.handlerConnector.hooks,this.handlerMonitor,this.props):{}}},{key:"render",value:function(){var e=this;return h.createElement(g.M.Consumer,null,function(t){var n=t.dragDropManager;return e.receiveDragDropManager(n),"u">typeof requestAnimationFrame&&requestAnimationFrame(function(){var t;return null==(t=e.handlerConnector)?void 0:t.reconnect()}),h.createElement(r,Object.assign({},e.props,e.getCurrentState(),{ref:c(r)?e.decoratedRef:null}))})}},{key:"receiveDragDropManager",value:function(e){void 0!==this.manager||((0,i.V)(void 0!==e,"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",b,b),void 0!==e&&(this.manager=e,this.handlerMonitor=o(e),this.handlerConnector=l(e.getBackend()),this.handler=n(this.handlerMonitor,this.decoratedRef)))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(m.prototype,s),m}(h.Component)).DecoratedComponent=r,t.displayName="".concat(s,"(").concat(b,")"),t);return m()(y,r)}function O(e,t,r){var n=r.getRegistry(),i=n.addTarget(e,t);return[i,function(){return n.removeTarget(i)}]}function T(e,t,r){var n=r.getRegistry(),i=n.addSource(e,t);return[i,function(){return n.removeSource(i)}]}var z=!1,Y=!1,F=function(){var e;function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");this.sourceId=null,this.internalMonitor=e.getMonitor()}return e=[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){(0,i.V)(!z,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return z=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{z=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;(0,i.V)(!Y,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Y=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{Y=!1}}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,t){return this.internalMonitor.isOverTarget(e,t)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}();function A(e,t){"function"==typeof e?e(t):e.current=t}function _(e){var t={};return Object.keys(e).forEach(function(r){var n=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{var o=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(0,h.isValidElement)(r))return n(r,o),r;if("string"!=typeof r.type){var l=r.type.displayName||r.type.name||"the component";throw Error("Only native element nodes can now be passed to React DnD connectors."+"You can either wrap ".concat(l," into a <div>, or turn it into a ")+"drag source or a drop target itself.")}return e=o?function(e){return n(e,o)}:n,t=r.ref,((0,i.V)("string"!=typeof t,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),t)?(0,h.cloneElement)(r,{ref:function(r){A(t,r),A(e,r)}}):(0,h.cloneElement)(r,{ref:e})};t[r]=function(){return o}}}),t}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){return null!==e&&"object"===E(e)&&Object.prototype.hasOwnProperty.call(e,"current")}var M=function(){var e;function t(e){var r=this;if(!(this instanceof t))throw TypeError("Cannot call a class as a function");this.hooks=_({dragSource:function(e,t){r.clearDragSource(),r.dragSourceOptions=t||null,P(e)?r.dragSourceRef=e:r.dragSourceNode=e,r.reconnectDragSource()},dragPreview:function(e,t){r.clearDragPreview(),r.dragPreviewOptions=t||null,P(e)?r.dragPreviewRef=e:r.dragPreviewNode=e,r.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}return e=[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"reconnect",value:function(){this.reconnectDragSource(),this.reconnectDragPreview()}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();if(t&&this.disconnectDragSource(),this.handlerId){if(!e){this.lastConnectedDragSource=e;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions))}}},{key:"reconnectDragPreview",value:function(){var e=this.dragPreview,t=this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(t&&this.disconnectDragPreview(),this.handlerId){if(!e){this.lastConnectedDragPreview=e;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=e,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,e,this.dragPreviewOptions))}}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!(0,p.b)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!(0,p.b)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return"string"==typeof e||"symbol"===R(e)||!!t&&Array.isArray(e)&&e.every(function(e){return j(e,!1)})}var U=["canDrag","beginDrag","isDragging","endDrag"],N=["beginDrag"],H=function(){var e;function t(e,r,n){var i=this;if(!(this instanceof t))throw TypeError("Cannot call a class as a function");this.props=null,this.beginDrag=function(){if(i.props)return i.spec.beginDrag(i.props,i.monitor,i.ref.current)},this.spec=e,this.monitor=r,this.ref=n}return e=[{key:"receiveProps",value:function(e){this.props=e}},{key:"canDrag",value:function(){return!!this.props&&(!this.spec.canDrag||this.spec.canDrag(this.props,this.monitor))}},{key:"isDragging",value:function(e,t){return!!this.props&&(this.spec.isDragging?this.spec.isDragging(this.props,this.monitor):t===e.getSourceId())}},{key:"endDrag",value:function(){!this.props||this.spec.endDrag&&this.spec.endDrag(this.props,this.monitor,d(this.ref))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}();function L(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.V)(j(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',e),o=function(){return e}),(0,i.V)(s(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',t);var l=(Object.keys(t).forEach(function(e){(0,i.V)(U.indexOf(e)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',U.join(", "),e),(0,i.V)("function"==typeof t[e],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",e,e,t[e])}),N.forEach(function(e){(0,i.V)("function"==typeof t[e],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",e,e,t[e])}),function(e,r){return new H(t,e,r)});return(0,i.V)("function"==typeof r,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',r),(0,i.V)(s(n),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',r),function(e){return I({containerDisplayName:"DragSource",createHandler:l,registerHandler:T,createConnector:function(e){return new M(e)},createMonitor:function(e){return new F(e)},DecoratedComponent:e,getType:o,collect:r,options:n})}}var V=function(){var e;function t(e){var r=this;if(!(this instanceof t))throw TypeError("Cannot call a class as a function");this.hooks=_({dropTarget:function(e,t){r.clearDropTarget(),r.dropTargetOptions=t,P(e)?r.dropTargetRef=e:r.dropTargetNode=e,r.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}return e=[{key:"reconnect",value:function(){var e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();var t=this.dropTarget;if(this.handlerId){if(!t){this.lastConnectedDropTarget=t;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions))}}},{key:"receiveHandlerId",value:function(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didDropTargetChange",value:function(){return this.lastConnectedDropTarget!==this.dropTarget}},{key:"didOptionsChange",value:function(){return!(0,p.b)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}},{key:"disconnectDropTarget",value:function(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}},{key:"clearDropTarget",value:function(){this.dropTargetRef=null,this.dropTargetNode=null}},{key:"connectTarget",get:function(){return this.dropTarget}},{key:"dropTargetOptions",get:function(){return this.dropTargetOptionsInternal},set:function(e){this.dropTargetOptionsInternal=e}},{key:"dropTarget",get:function(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}(),B=!1,q=function(){var e;function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");this.targetId=null,this.internalMonitor=e.getMonitor()}return e=[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"getHandlerId",value:function(){return this.targetId}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"canDrop",value:function(){if(!this.targetId)return!1;(0,i.V)(!B,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return B=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{B=!1}}},{key:"isOver",value:function(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}(),W=["canDrop","hover","drop"],G=function(){var e;function t(e,r,n){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");this.props=null,this.spec=e,this.monitor=r,this.ref=n}return e=[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"canDrop",value:function(){return!this.spec.canDrop||this.spec.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){this.spec.hover&&this.props&&this.spec.hover(this.props,this.monitor,d(this.ref))}},{key:"drop",value:function(){if(this.spec.drop)return this.spec.drop(this.props,this.monitor,this.ref.current)}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}();function K(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.V)(j(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',e),o=function(){return e}),(0,i.V)(s(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',t);var l=(Object.keys(t).forEach(function(e){(0,i.V)(W.indexOf(e)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',W.join(", "),e),(0,i.V)("function"==typeof t[e],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",e,e,t[e])}),function(e,r){return new G(t,e,r)});return(0,i.V)("function"==typeof r,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',r),(0,i.V)(s(n),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',r),function(e){return I({containerDisplayName:"DropTarget",createHandler:l,registerHandler:O,createMonitor:function(e){return new q(e)},createConnector:function(e){return new V(e)},DecoratedComponent:e,getType:o,collect:r,options:n})}}function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u("DragLayer","collect[, options]"),(0,i.V)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",e),(0,i.V)(s(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',t),function(r){var n,o=t.arePropsEqual,l=void 0===o?p.b:o,a=r.displayName||r.name||"Component",s=((n=function(t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");d.prototype=Object.create(t&&t.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),t&&X(d,t);var n,o,s=(n=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}(),function(){var e,t,r,i=Z(d);return r=n?Reflect.construct(i,arguments,Z(this).constructor):i.apply(this,arguments),e=this,(t=r)&&("object"===Q(t)||"function"==typeof t)?t:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)});function d(){var e;if(!(this instanceof d))throw TypeError("Cannot call a class as a function");return e=s.apply(this,arguments),e.isCurrentlyMounted=!1,e.ref=h.createRef(),e.handleChange=function(){if(e.isCurrentlyMounted){var t=e.getCurrentState();(0,p.b)(t,e.state)||e.setState(t)}},e}return o=[{key:"getDecoratedComponentInstance",value:function(){return(0,i.V)(this.ref.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.ref.current}},{key:"shouldComponentUpdate",value:function(e,t){return!l(e,this.props)||!(0,p.b)(t,this.state)}},{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange&&(this.unsubscribeFromOffsetChange(),this.unsubscribeFromOffsetChange=void 0),this.unsubscribeFromStateChange&&(this.unsubscribeFromStateChange(),this.unsubscribeFromStateChange=void 0)}},{key:"render",value:function(){var e=this;return h.createElement(g.M.Consumer,null,function(t){var n=t.dragDropManager;return void 0===n?null:(e.receiveDragDropManager(n),e.isCurrentlyMounted)?h.createElement(r,Object.assign({},e.props,e.state,{ref:c(r)?e.ref:null})):null})}},{key:"receiveDragDropManager",value:function(e){if(void 0===this.manager){this.manager=e,(0,i.V)("object"===Q(e),"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",a,a);var t=this.manager.getMonitor();this.unsubscribeFromOffsetChange=t.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=t.subscribeToStateChange(this.handleChange)}}},{key:"getCurrentState",value:function(){return this.manager?e(this.manager.getMonitor(),this.props):{}}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(d.prototype,o),d}(h.Component)).displayName="DragLayer(".concat(a,")"),n.DecoratedComponent=r,n);return m()(s,r)}}},89628(e,t,r){"use strict";r.d(t,{DragLayer:()=>i.DragLayer,DragSource:()=>i.DragSource,DropTarget:()=>i.DropTarget});var n=r(74653);r.o(n,"DragLayer")&&r.d(t,{DragLayer:function(){return n.DragLayer}}),r.o(n,"DragSource")&&r.d(t,{DragSource:function(){return n.DragSource}}),r.o(n,"DropTarget")&&r.d(t,{DropTarget:function(){return n.DropTarget}});var i=r(22925)},75241(){},44309(){},74653(e,t,r){"use strict";var n=r(10994);r.o(n,"DragLayer")&&r.d(t,{DragLayer:function(){return n.DragLayer}}),r.o(n,"DragSource")&&r.d(t,{DragSource:function(){return n.DragSource}}),r.o(n,"DropTarget")&&r.d(t,{DropTarget:function(){return n.DropTarget}});var i=r(44309);r.o(i,"DragLayer")&&r.d(t,{DragLayer:function(){return i.DragLayer}}),r.o(i,"DragSource")&&r.d(t,{DragSource:function(){return i.DragSource}}),r.o(i,"DropTarget")&&r.d(t,{DropTarget:function(){return i.DropTarget}});var o=r(35535);r.o(o,"DragLayer")&&r.d(t,{DragLayer:function(){return o.DragLayer}}),r.o(o,"DragSource")&&r.d(t,{DragSource:function(){return o.DragSource}}),r.o(o,"DropTarget")&&r.d(t,{DropTarget:function(){return o.DropTarget}});var l=r(75241);r.o(l,"DragLayer")&&r.d(t,{DragLayer:function(){return l.DragLayer}}),r.o(l,"DragSource")&&r.d(t,{DragSource:function(){return l.DragSource}}),r.o(l,"DropTarget")&&r.d(t,{DropTarget:function(){return l.DropTarget}})},10994(){},35535(){},50246(e,t,r){"use strict";t.HI=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(64260),o=s(i),l=s(r(5556)),a=r(33688);function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");var r=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={searchTerm:r.props.value||""},r.updateSearch=r.updateSearch.bind(r),r.filter=r.filter.bind(r),r}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),n(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.value&&e.value!==this.props.value){var t={target:{value:e.value}};this.updateSearch(t)}}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.onChange,e.caseSensitive,e.sortResults,e.throttle,e.filterKeys,e.value,e.fuzzy,e.inputClassName),n=function(e,t){var r={};for(var n in e)!(t.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["className","onChange","caseSensitive","sortResults","throttle","filterKeys","value","fuzzy","inputClassName"]);return n.type=n.type||"search",n.value=this.state.searchTerm,n.onChange=this.updateSearch,n.className=r,n.placeholder=n.placeholder||"Search",o.default.createElement("div",{className:t},o.default.createElement("input",n))}},{key:"updateSearch",value:function(e){var t=this,r=e.target.value;this.setState({searchTerm:r},function(){t._throttleTimeout&&clearTimeout(t._throttleTimeout),t._throttleTimeout=setTimeout(function(){return t.props.onChange(r)},t.props.throttle)})}},{key:"filter",value:function(e){var t=this.props,r=t.filterKeys,n=t.caseSensitive,i=t.fuzzy,o=t.sortResults;return(0,a.createFilter)(this.state.searchTerm,e||r,{caseSensitive:n,fuzzy:i,sortResults:o})}}]),t}(i.Component);d.defaultProps={className:"",onChange:function(){},caseSensitive:!1,fuzzy:!1,throttle:200},d.propTypes={className:l.default.string,inputClassName:l.default.string,onChange:l.default.func,caseSensitive:l.default.bool,sortResults:l.default.bool,fuzzy:l.default.bool,throttle:l.default.number,filterKeys:l.default.oneOf([l.default.string,l.default.arrayOf(l.default.string)]),value:l.default.string},t.HI=a.createFilter},33688(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValuesForKey=o,t.searchStrings=l,t.createFilter=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(n){if(""===e)return!0;r.caseSensitive||(e=e.toLowerCase());var i=e.split(" ");return t?("string"==typeof t&&(t=[t]),i.every(function(e){var i=void 0;if(-1!==e.indexOf(":")){var a=e.split(":")[0];e=e.split(":")[1],i=t.filter(function(e){return e.toLowerCase().indexOf(a)>-1})}else i=t;return i.some(function(t){return l(o(t,n),e,r)})})):i.every(function(e){return l([n],e,r)})}};var n,i=(n=r(49168))&&n.__esModule?n:{default:n};function o(e,t){var r=e.split("."),n=[t];return r.forEach(function(e){var t=[];n.forEach(function(r){if(r)if(r instanceof Array){var n=parseInt(e,10);if(!isNaN(n))return t.push(r[n]);r.forEach(function(r){t.push(r[e])})}else r&&"function"==typeof r.get?t.push(r.get(e)):t.push(r[e])}),n=t}),(n=function e(t){return t.reduce(function(t,r){return t.concat(Array.isArray(r)?e(r):r)},[])}(n=n.map(function(e){return e&&e.push&&e.toArray?e.toArray():e}))).filter(function(e){return"string"==typeof e||"number"==typeof e})}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.caseSensitive,o=r.fuzzy,l=r.sortResults,a=r.exactMatch;e=e.map(function(e){return e.toString()});try{if(o)return"function"==typeof e.toJS&&(e=e.toJS()),new i.default(e.map(function(e){return{id:e}}),{keys:["id"],id:"id",caseSensitive:n,shouldSort:l}).search(t).length;return e.some(function(e){try{if(n||(e=e.toLowerCase()),a&&(t=RegExp("^"+t+"$","i")),e&&-1!==e.search(t))return!0;return!1}catch{return!1}})}catch{return!1}}},49168(e){e.exports=function(){var e=[function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=r(1),l=r(7),a=l.get,s=(l.deepValue,l.isArray);e.exports=function(){var e,t;function r(e,t){var n=t.location,i=t.distance,o=t.threshold,l=t.maxPatternLength,s=t.caseSensitive,d=t.tokenSeparator,c=t.findAllMatches,u=t.minMatchCharLength,h=t.id,p=t.keys,f=void 0===p?[]:p,m=t.shouldSort,g=t.getFn,v=t.sortFn,b=void 0===v?function(e,t){return e.score-t.score}:v,y=t.tokenize,x=t.matchAllTokens,S=t.includeMatches,w=t.includeScore,C=t.verbose;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.options={location:void 0===n?0:n,distance:void 0===i?100:i,threshold:void 0===o?.6:o,maxPatternLength:void 0===l?32:l,isCaseSensitive:void 0!==s&&s,tokenSeparator:void 0===d?/ +/g:d,findAllMatches:void 0!==c&&c,minMatchCharLength:void 0===u?1:u,id:void 0===h?null:h,keys:f,includeMatches:void 0!==S&&S,includeScore:void 0!==w&&w,shouldSort:void 0===m||m,getFn:void 0===g?a:g,sortFn:b,verbose:void 0!==C&&C,tokenize:void 0!==y&&y,matchAllTokens:void 0!==x&&x},this.setCollection(e),this._processKeys(f)}return e=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,r=e.length;t<r;t+=1){var n=e[t];this._keyWeights[n]=1,this._keyNames.push(n)}else{for(var i=null,o=null,l=0,a=0,s=e.length;a<s;a+=1){var d=e[a];if(!d.hasOwnProperty("name"))throw Error('Missing "name" property in key object');var c=d.name;if(this._keyNames.push(c),!d.hasOwnProperty("weight"))throw Error('Missing "weight" property in key object');var u=d.weight;if(u<0||u>1)throw Error('"weight" property in key must bein the range of [0, 1)');o=null==o?u:Math.max(o,u),i=null==i?u:Math.min(i,u),this._keyWeights[c]=u,l+=u}if(l>1)throw Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log(`---------
Search pattern: "`.concat(e,'"'));var r=this._prepareSearchers(e),n=r.tokenSearchers,i=r.fullSearcher,o=this._search(n,i);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,i=r.length;n<i;n+=1)t.push(new o(r[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=this.list,n={},i=[];if("string"==typeof r[0]){for(var o=0,l=r.length;o<l;o+=1)this._analyze({key:"",value:r[o],record:o,index:o},{resultMap:n,results:i,tokenSearchers:e,fullSearcher:t});return i}for(var a=0,s=r.length;a<s;a+=1)for(var d=r[a],c=0,u=this._keyNames.length;c<u;c+=1){var h=this._keyNames[c];this._analyze({key:h,value:this.options.getFn(d,h),record:d,index:a},{resultMap:n,results:i,tokenSearchers:e,fullSearcher:t})}return i}},{key:"_analyze",value:function(e,t){var r=this,n=e.key,i=e.arrayIndex,o=e.value,l=e.record,a=e.index,d=t.tokenSearchers,c=void 0===d?[]:d,u=t.fullSearcher,h=t.resultMap,p=void 0===h?{}:h,f=t.results,m=void 0===f?[]:f;!function e(t,i,o,l){if(null!=i){if("string"==typeof i){var a=!1,d=-1,h=0;r._log(`
Key: `.concat(""===n?"--":n));var f=u.search(i);if(r._log('Full text: "'.concat(i,'", score: ').concat(f.score)),r.options.tokenize){for(var g=i.split(r.options.tokenSeparator),v=g.length,b=[],y=0,x=c.length;y<x;y+=1){var S=c[y];r._log(`
Pattern: "`.concat(S.pattern,'"'));for(var w=!1,C=0;C<v;C+=1){var k=g[C],$=S.search(k),D={};$.isMatch?(D[k]=$.score,a=!0,w=!0,b.push($.score)):(D[k]=1,r.options.matchAllTokens||b.push(1)),r._log('Token: "'.concat(k,'", score: ').concat(D[k]))}w&&(h+=1)}d=b[0];for(var I=b.length,O=1;O<I;O+=1)d+=b[O];d/=I,r._log("Token score average:",d)}var T=f.score;d>-1&&(T=(T+d)/2),r._log("Score average:",T);var z=!r.options.tokenize||!r.options.matchAllTokens||h>=c.length;if(r._log(`
Check Matches: `.concat(z)),(a||f.isMatch)&&z){var Y={key:n,arrayIndex:t,value:i,score:T};r.options.includeMatches&&(Y.matchedIndices=f.matchedIndices);var F=p[l];F?F.output.push(Y):(p[l]={item:o,output:[Y]},m.push(p[l]))}}else if(s(i))for(var A=0,_=i.length;A<_;A+=1)e(A,i[A],o,l)}}(void 0===i?-1:i,o,l,a)}},{key:"_computeScore",value:function(e){this._log(`

Computing score:
`);for(var t=this._keyWeights,r=!!Object.keys(t).length,n=0,i=e.length;n<i;n+=1){for(var o=e[n],l=o.output,a=l.length,s=1,d=0;d<a;d+=1){var c=l[d],u=c.key,h=r?t[u]:1;s*=Math.pow(0===c.score&&t&&t[u]>0?Number.EPSILON:c.score,h)}o.score=s,this._log(o)}}},{key:"_sort",value:function(e){this._log(`

Sorting....`),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var r=[];this._log(`

Output:

`,JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==r.indexOf(t))return;r.push(t)}return t},2)),r=null}var i=[];this.options.includeMatches&&i.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,i=r.length;n<i;n+=1){var o=r[n];if(0!==o.matchedIndices.length){var l={indices:o.matchedIndices,value:o.value};o.key&&(l.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(l.arrayIndex=o.arrayIndex),t.matches.push(l)}}}),this.options.includeScore&&i.push(function(e,t){t.score=e.score});for(var o=0,l=e.length;o<l;o+=1){var a=e[o];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),i.length){for(var s={item:a.item},d=0,c=i.length;d<c;d+=1)i[d](a,s);t.push(s)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}],i(r.prototype,e),t&&i(r,t),r}()},function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=r(2),o=r(3),l=r(6);e.exports=function(){var e,t;function r(e,t){var n=t.location,i=t.distance,o=t.threshold,a=t.maxPatternLength,s=void 0===a?32:a,d=t.isCaseSensitive,c=void 0!==d&&d,u=t.tokenSeparator,h=t.findAllMatches,p=t.minMatchCharLength,f=t.includeMatches;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.options={location:void 0===n?0:n,distance:void 0===i?100:i,threshold:void 0===o?.6:o,maxPatternLength:s,isCaseSensitive:c,tokenSeparator:void 0===u?/ +/g:u,findAllMatches:void 0!==h&&h,includeMatches:void 0!==f&&f,minMatchCharLength:void 0===p?1:p},this.pattern=c?e:e.toLowerCase(),this.pattern.length<=s&&(this.patternAlphabet=l(this.pattern))}return e=[{key:"search",value:function(e){var t=this.options,r=t.isCaseSensitive,n=t.includeMatches;if(r||(e=e.toLowerCase()),this.pattern===e){var l={isMatch:!0,score:0};return n&&(l.matchedIndices=[[0,e.length-1]]),l}var a=this.options,s=a.maxPatternLength,d=a.tokenSeparator;if(this.pattern.length>s)return i(e,this.pattern,d);var c=this.options,u=c.location,h=c.distance,p=c.threshold,f=c.findAllMatches,m=c.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:u,distance:h,threshold:p,findAllMatches:f,minMatchCharLength:m,includeMatches:n})}}],n(r.prototype,e),t&&n(r,t),r}()},function(e,t){var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,i=new RegExp(t.replace(r,"\\$&").replace(n,"|")),o=e.match(i),l=!!o,a=[];if(l)for(var s=0,d=o.length;s<d;s+=1){var c=o[s];a.push([e.indexOf(c),c.length-1])}return{score:l?.5:1,isMatch:l,matchedIndices:a}}},function(e,t,r){var n=r(4),i=r(5);e.exports=function(e,t,r,o){for(var l=o.location,a=o.distance,s=void 0===a?100:a,d=o.threshold,c=o.findAllMatches,u=void 0!==c&&c,h=o.minMatchCharLength,p=o.includeMatches,f=void 0===l?0:l,m=e.length,g=void 0===d?.6:d,v=e.indexOf(t,f),b=t.length,y=[],x=0;x<m;x+=1)y[x]=0;-1!==v&&(g=Math.min(n(t,{errors:0,currentLocation:v,expectedLocation:f,distance:s}),g),-1!==(v=e.lastIndexOf(t,f+b))&&(g=Math.min(n(t,{errors:0,currentLocation:v,expectedLocation:f,distance:s}),g))),v=-1;for(var S=[],w=1,C=b+m,k=1<<(b<=31?b-1:30),$=0;$<b;$+=1){for(var D=0,I=C;D<I;)n(t,{errors:$,currentLocation:f+I,expectedLocation:f,distance:s})<=g?D=I:C=I,I=Math.floor((C-D)/2+D);C=I;var O=Math.max(1,f-I+1),T=u?m:Math.min(f+I,m)+b,z=Array(T+2);z[T+1]=(1<<$)-1;for(var Y=T;Y>=O;Y-=1){var F=Y-1,A=r[e.charAt(F)];if(A&&(y[F]=1),z[Y]=(z[Y+1]<<1|1)&A,0!==$&&(z[Y]|=(S[Y+1]|S[Y])<<1|1|S[Y+1]),z[Y]&k&&(w=n(t,{errors:$,currentLocation:F,expectedLocation:f,distance:s}))<=g){if(g=w,(v=F)<=f)break;O=Math.max(1,2*f-v)}}if(n(t,{errors:$+1,currentLocation:f,expectedLocation:f,distance:s})>g)break;S=z}var _={isMatch:v>=0,score:0===w?.001:w};return void 0!==p&&p&&(_.matchedIndices=i(y,void 0===h?1:h)),_}},function(e,t){e.exports=function(e,t){var r=t.errors,n=t.currentLocation,i=t.expectedLocation,o=t.distance,l=void 0===o?100:o,a=(void 0===r?0:r)/e.length,s=Math.abs((void 0===i?0:i)-(void 0===n?0:n));return l?a+s/l:s?1:a}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,i=-1,o=0,l=e.length;o<l;o+=1){var a=e[o];a&&-1===n?n=o:a||-1===n||((i=o-1)-n+1>=t&&r.push([n,i]),n=-1)}return e[o-1]&&o-n>=t&&r.push([n,o-1]),r}},function(e,t){e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var i=0;i<r;i+=1)t[e.charAt(i)]|=1<<r-i-1;return t}},function(e,t){var r=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},n=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},i=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var l=[];return function e(t,a){if(a){var s=a.indexOf("."),d=a,c=null;-1!==s&&(d=a.slice(0,s),c=a.slice(s+1));var u=t[d];if(null!=u)if(!c&&(i(u)||o(u)))l.push(n(u));else if(r(u))for(var h=0,p=u.length;h<p;h+=1)e(u[h],c);else c&&e(u,c)}else l.push(t)}(e,t),l},isArray:r,isString:i,isNum:o,toString:n}}],t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,(function(t){return e[t]}).bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}()},43907(e,t,r){"use strict";var n=r(2445),i=r(85614),o=r(65471);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let a=(0,i.styled)(e=>(0,n.Y)(o.Badge,l({},e)))`
  ${({theme:e,color:t,count:r})=>`
    & > sup,
    & > sup.ant-badge-count {
      box-shadow: none;
      ${void 0!==r?`background: ${t||e.colorPrimary};`:""}
    }
  `}
`;r.d(t,["E",0,a])},70524(e,t,r){"use strict";r.d(t,{z:()=>g});var n=r(2445),i=r(27124),o=r(85614),l=r(17437),a=r(64260),s=r(46942),d=r.n(s),c=r(8563),u=r(48158),h=r(65471);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let f=(0,o.styled)(u.T)`
  vertical-align: middle;
`,m=o.styled.span`
  &.editable-title {
    display: inline;
    &.editable-title--editing {
      width: 100%;
    }

    input,
    textarea {
      outline: none;
      background: transparent;
      box-shadow: none;
      cursor: initial;
      font-feature-settings:
        'liga' 0,
        'calt' 0;
      font-variant-ligatures: none;
      font-weight: bold;
    }

    input[type='text'],
    textarea {
      color: ${({theme:e})=>e.colorTextTertiary};
      border-radius: ${({theme:e})=>e.sizeUnit}px;
      font-size: ${({theme:e})=>e.fontSizeLG}px;
      padding: ${({theme:e})=>e.sizeUnit/2}px;
      min-height: 100px;
      width: 95%;
    }

    &.datasource-sql-expression {
      min-width: 315px;
      width: 100%;
    }
  }
`;function g(e){let{canEdit:t=!1,editing:r=!1,extraClasses:o,noPermitTooltip:s,onSaveTitle:u,showTooltip:g=!0,style:v,title:b="",defaultTitle:y="",placeholder:x="",certifiedBy:S,certificationDetails:w,renderLink:C,maxWidth:k,autoSize:$=!0,onEditingChange:D}=e,I=function(e,t){if(null==e)return{};var r,n,i={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)!(t.indexOf(r=o[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,["canEdit","editing","extraClasses","noPermitTooltip","onSaveTitle","showTooltip","style","title","defaultTitle","placeholder","certifiedBy","certificationDetails","renderLink","maxWidth","autoSize","onEditingChange"]),[O,T]=(0,a.useState)(r),[z,Y]=(0,a.useState)(b),[F,A]=(0,a.useState)(b),[_,E]=(0,a.useState)(0),P=(0,a.useRef)(null);function M(){let e=z.trim();if(t){if(T(!1),null==D||D(!1),!e.length)return void Y(F);F!==e&&A(e),b!==e&&u(e)}}(0,a.useLayoutEffect)(()=>{var e,t;let{font:r}=window.getComputedStyle((null==(t=P.current)||null==(e=t.resizableTextArea)?void 0:e.textArea)||document.body);E(Math.min(function(e,t="14px Arial"){let r=document.createElement("canvas").getContext("2d");return r?(r.font=t,r.measureText(e).width):0}(z||"",r)+20,"number"==typeof k?k:1/0))},[z,k]),(0,a.useEffect)(()=>{b!==z&&(A(z),Y(b))},[b]),(0,a.useEffect)(()=>{if(O&&P.current){var e;let t=null==(e=P.current.resizableTextArea)?void 0:e.textArea;if(t){t.focus();let{length:e}=t.value;t.setSelectionRange(e,e),t.scrollTop=t.scrollHeight}}},[O]);let R=z;O||z||(R=y||b);let j=(0,n.Y)(h.Input.TextArea,{size:"small","data-test":"textarea-editable-title-input",ref:P,value:R,className:b?void 0:"text-muted",onChange:function(e){t&&Y(e.target.value)},onBlur:M,onClick:function(){var e,r;if(!t||O)return;let n=null==(r=P.current)||null==(e=r.resizableTextArea)?void 0:e.textArea;if(n){n.focus();let{length:e}=n.value;n.setSelectionRange(e,e)}T(!0),null==D||D(!0)},onKeyDown:function(e){["Backspace","Delete"," ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),M())},onPressEnter:function(e){e.preventDefault(),M()},placeholder:x,variant:O?"outlined":"borderless",autoSize:!!$&&{minRows:1,maxRows:3},css:e=>(0,l.AH)`
        && {
          width: ${_}px;
          min-width: ${10*e.sizeUnit}px;
          transition: auto;
        }
      `});return g&&!O&&(j=(0,n.Y)(c.m,{id:"title-tooltip",placement:"topLeft",title:t?(0,i.t)("Click to edit"):s||(0,i.t)("You don't have the rights to alter this title."),children:(0,n.Y)("span",{children:j})})),t||(j=C?C(R||""):(0,n.Y)("span",{"data-test":"span-title",children:R})),(0,n.FD)(m,p({"data-test":"editable-title",className:d()("editable-title",o,t&&"editable-title--editable",O&&"editable-title--editing"),style:v,editing:O,canEdit:t},I,{children:[S&&(0,n.FD)(n.FK,{children:[(0,n.Y)(f,{certifiedBy:S,details:w,size:"xl"})," "]}),j]}))}},95442(e,t,r){"use strict";r.d(t,{N:()=>i});var n=r(64260);function i(e){let t=(0,n.useRef)(null),[r,i]=(0,n.useState)(!1),o=e=>{let[t]=e;i(t.intersectionRatio<1)};return(0,n.useEffect)(()=>{let r=new IntersectionObserver(o,e),n=t.current;return n&&r.observe(n),()=>{n&&r.unobserve(n)}},[t,e]),[t,r]}},42114(e,t,r){"use strict";var n=r(2445),i=r(33149),o=r(85614),l=r(52234);let a=o.styled.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colorPrimary};
  }

  .sidebar-resizer {
    /* @z-index-above-sticky-header (100) + 1 = 101 */
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`;r.d(t,["A",0,({id:e,initialWidth:t,minWidth:r,maxWidth:o,enable:s,children:d})=>{let[c,u]=(0,l.A)(e,t);return(0,n.FD)(n.FK,{children:[(0,n.Y)(a,{children:(0,n.Y)(i.c,{enable:{right:s},handleClasses:{right:"sidebar-resizer",bottom:"hidden",bottomRight:"hidden",bottomLeft:"hidden"},size:{width:c,height:"100%"},minWidth:r,maxWidth:o,onResizeStop:(e,t,r,n)=>u(c+n.width)})}),d(c)]})}])},68660(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:()=>hs});var i,o,l,a,s,d=r(2445),c=r(46942),u=r.n(c),h=r(64260),p=r(27124),f=r(63721),m=r(95442),g=r(85614),v=r(17437),b=r(61225),y=r(97020),x=r(10020),S=r(13512),w=r(84140),C=r(89920),k=r(82960),$=r(63113),D=r(70713),I=r(91793),O=r(50246),T=r(68292),z=r(29138),Y=r(65471),F=r(80967),A=r(60685),_=r(21804),E=r(52149),P=r(66836),M=r(64741),R=r(41470),j=r(47566),U=r(89495),N=r(51281),H=r(8563),L=r(47349),V=r(6148),B=r(67520);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let W=(0,V.u)("/static/assets/images/chart-card-fallback.svg"),G=e=>{let{children:t,tooltipText:r}=e,n=function(e,t){if(null==e)return{};var r,n,i={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)!(t.indexOf(r=o[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,["children","tooltipText"]),[i,o]=(0,h.useState)(!1),l=(0,h.useRef)(null);(0,h.useEffect)(()=>{o(!!l.current&&l.current.scrollWidth>l.current.clientWidth)},[t]);let a=(0,d.Y)("div",q({},n,{ref:l,css:(0,v.AH)`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `,children:t}));return i?(0,d.Y)(H.m,{title:r||t,children:a}):a},K=({label:e,value:t,tooltipText:r})=>(0,d.FD)("div",{css:e=>(0,v.AH)`
      font-size: ${e.fontSizeSM}px;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: ${e.sizeUnit}px;
      }
    `,children:[(0,d.Y)("span",{css:e=>(0,v.AH)`
        margin-right: ${4*e.sizeUnit}px;
        color: ${e.colorText};
      `,children:e}),(0,d.Y)("span",{css:(0,v.AH)`
        min-width: 0;
      `,children:(0,d.Y)(G,{tooltipText:r,children:t})})]}),Q=({showThumbnails:e,placeholderRef:t})=>(0,d.Y)("div",{ref:t,css:t=>(0,v.AH)`
      /* Display styles */
      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadius}px;
      color: ${t.colorPrimaryText};
      font-size: ${t.fontSizeXS}px;
      letter-spacing: 0.02em;
      padding: ${t.sizeUnit/2}px ${2*t.sizeUnit}px;
      margin-left: ${4*t.sizeUnit}px;
      pointer-events: none;

      /* Position styles */
      visibility: hidden;
      position: ${e?"absolute":"unset"};
      top: ${e?"72px":"unset"};
      left: ${e?"84px":"unset"};
    `,children:(0,p.t)("Added")}),X=({placeholder:e})=>(0,d.Y)("div",{css:t=>(0,v.AH)`
      /* Display styles */
      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadius}px;
      color: ${t.colorPrimaryText};
      font-size: ${t.fontSizeXS}px;
      letter-spacing: 0.02em;
      padding: ${t.sizeUnit/2}px ${2*t.sizeUnit}px;
      margin-left: ${4*t.sizeUnit}px;
      pointer-events: none;

      /* Position styles */
      display: ${e?"unset":"none"};
      position: absolute;
      top: ${e?`${e.offsetTop}px`:"unset"};
      left: ${e?`${e.offsetLeft-2}px`:"unset"};
    `,children:(0,p.t)("Added")}),Z=({datasourceUrl:e,datasourceName:t="-",innerRef:r,isSelected:n=!1,lastModified:i,sliceName:o,style:l={},thumbnailUrl:a,visType:s})=>{let c=(0,N.G7)(N.TO.Thumbnails),[u,f]=(0,h.useState)(),{mountedPluginMetadata:m}=(0,S.Q)(),g=(0,h.useMemo)(()=>{var e;return(null==(e=m[s])?void 0:e.name)||(0,p.t)("Unknown type")},[m,s]);return(0,d.FD)("div",{ref:r,style:l,children:[(0,d.Y)("div",{"data-test":"chart-card",css:e=>(0,v.AH)`
          border: 1px solid ${e.colorBorder};
          border-radius: ${e.borderRadius}px;
          padding: ${4*e.sizeUnit}px;
          margin: 0 ${3*e.sizeUnit}px ${3*e.sizeUnit}px
            ${3*e.sizeUnit}px;
          position: relative;
          cursor: ${n?"not-allowed":"move"};
          white-space: nowrap;
          overflow: hidden;
          line-height: 1.3;
          color: ${e.colorText};

          &:hover {
            /* background: ${e.colorFillTertiary}; */
          }

          opacity: ${n?.4:"unset"};
        `,children:(0,d.FD)("div",{css:(0,v.AH)`
            display: flex;
          `,children:[c?(0,d.FD)("div",{"data-test":"thumbnail",css:(0,v.AH)`
                width: 146px;
                height: 82px;
                flex-shrink: 0;
                margin-right: 16px;
              `,children:[(0,d.Y)(L.$,{src:a||"",fallback:W,position:"top"}),n&&c?(0,d.Y)(Q,{placeholderRef:f,showThumbnails:c}):null]}):null,(0,d.FD)("div",{css:(0,v.AH)`
              flex-grow: 1;
              min-width: 0;
            `,children:[(0,d.FD)("div",{"data-test":"card-title",css:e=>(0,v.AH)`
                margin-bottom: ${2*e.sizeUnit}px;
                font-weight: ${e.fontWeightStrong};
                display: flex;
                justify-content: space-between;
                align-items: center;
              `,children:[(0,d.Y)(G,{children:o}),n&&!c?(0,d.Y)(Q,{placeholderRef:f}):null]}),(0,d.FD)("div",{css:(0,v.AH)`
                display: flex;
                flex-direction: column;
              `,children:[(0,d.Y)(K,{label:(0,p.t)("Viz type"),value:g}),(0,d.Y)(K,{label:(0,B.$s)(),value:e?(0,d.Y)(S.Kt,{to:e,children:t}):t,tooltipText:t}),(0,d.Y)(K,{label:(0,p.t)("Modified"),value:i})]})]})]})}),(0,d.Y)(X,{placeholder:u})]})};var J=r(89628);function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let et={position:"fixed",pointerEvents:"none",top:0,left:0,zIndex:101,width:344},er=(0,J.DragLayer)(e=>({dragItem:e.getItem(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}))(({dragItem:e,slices:t,isDragging:r,currentOffset:n})=>{if(!r||!n||!e||!t)return null;let i=t[e.index];return i&&e.parentType===E.cP&&"CHART"===e.type?(0,d.Y)(Z,{style:ee({},et,{transform:`translate(${n.x}px, ${n.y}px)`}),sliceName:i.slice_name,lastModified:i.changed_on_humanized,visType:i.viz_type,datasourceUrl:i.datasource_url,datasourceName:i.datasource_name}):null});var en=r(74022),ei=r(42311);let eo=(0,en.A)(function(e,t,r){var i,o,l,a,s;let d,c;if(!r.mounted)return;let u=(0,ei.Ay)(t,r);(d="SCROLL_TOP"===(s=(null==r||null==(o=r.props)||null==(i=o.component)?void 0:i.type)==="ROOT"?"SCROLL_TOP":null)&&!n&&0!==document.documentElement.scrollTop,c=n&&("SCROLL_TOP"!==s||0===document.documentElement.scrollTop),d?n=setInterval(()=>{if(0===document.documentElement.scrollTop){clearInterval(n),n=null;return}let e=document.documentElement.scrollTop-120;e<0&&(e=0),window.scroll({top:e,behavior:"smooth"})},50):c&&(clearInterval(n),n=null),u)?(null==r||null==(a=r.props)||null==(l=a.onHover)||l.call(a),r.setState(()=>({dropIndicator:u}))):r.setState(()=>({dropIndicator:null}))},100),el="DRAG_DROPPABLE",ea=[el,{canDrag:e=>!e.disableDragDrop,beginDrag(e){let{component:t,index:r,parentComponent:n}=e;return{type:t.type,id:t.id,meta:t.meta,index:r,parentId:null==n?void 0:n.id,parentType:null==n?void 0:n.type}}},function(e,t){var r,n;return{dragSourceRef:e.dragSource(),dragPreviewRef:e.dragPreview(),isDragging:t.isDragging(),dragComponentType:null==(r=t.getItem())?void 0:r.type,dragComponentId:null==(n=t.getItem())?void 0:n.id}}],es=[el,{canDrop:e=>!e.disableDragDrop,hover(e,t,r){r&&r.mounted&&eo(e,t,r)},drop(e,t,r){let n=t.getDropResult();if((!n||!n.destination)&&r.mounted)return function(e,t){var r,n;if(!t.mounted)return;t.setState(()=>({dropIndicator:null}));let i=(0,ei.Ay)(e,t);if(!i||i===ei.aN)return;let{parentComponent:o,component:l,index:a,onDrop:s,dropToChild:d}=t.props,c=e.getItem(),u={source:{id:null!=(r=c.parentId)?r:l.id,type:null!=(n=c.parentType)?n:l.type,index:c.index},dragging:{id:c.id,type:c.type,meta:c.meta},position:i};if("function"==typeof d?d(c):d)u.destination={id:l.id,type:l.type,index:l.children.length};else if(o){let e=o&&c.parentId===o.id&&c.index<a&&c.type!==l.type;u.destination={id:o.id,type:o.type,index:e?a-1:a}}else u.destination={id:l.id,type:l.type,index:a};return null==s||s(u),(0,ei.Vl)(),u}(t,r)}},function(e,t){return{droppableRef:e.dropTarget(),isDraggingOver:t.isOver(),isDraggingOverShallow:t.isOver({shallow:!0})}}],ed=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    position: relative;

    &.dragdroppable--dragging {
      opacity: 0.2;
    }

    &.dragdroppable-row {
      width: 100%;
    }
    /* workaround to avoid a bug in react-dnd where the drag
      preview expands outside of the bounds of the drag source card, see:
      https://github.com/react-dnd/react-dnd/issues/832 */
    &.dragdroppable-column {
      /* for chrome */
      transform: translate3d(0, 0, 0);
      /* for safari */
      backface-visibility: hidden;
    }

    &.dragdroppable-column .resizable-container span div {
      z-index: 10;
    }

    & {
      .drop-indicator {
        display: block;
        background-color: ${e.colorPrimary};
        position: absolute;
        z-index: 10;
        opacity: 0.3;
        width: 100%;
        height: 100%;
        &.drop-indicator--forbidden {
          background-color: ${e.colorErrorBg};
        }
      }
    }
  `};
`;class ec extends h.PureComponent{componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}componentDidUpdate(e,t){let{onDropIndicatorChange:r,isDraggingOver:n,component:i,index:o,dragComponentId:l,onDragTab:a}=this.props,{dropIndicator:s}=this.state,d="TAB"===i.type,c=s!==t.dropIndicator||n!==e.isDraggingOver||o!==e.index;r&&d&&c&&r({dropIndicator:s,isDraggingOver:n,index:o}),l!==e.dragComponentId&&setTimeout(()=>{null==a||a(l)})}setRef(e){this.ref=e,this.props.useEmptyDragPreview?this.props.dragPreviewRef((s||((s=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),s),{captureDraggingState:!0}):this.props.dragPreviewRef(e),null==this.props.droppableRef||this.props.droppableRef.call(this.props,e)}render(){let{children:e,className:t,orientation:r,dragSourceRef:n,disableDragDrop:i,isDragging:o,isDraggingOver:l,style:a,editMode:s,component:c,dragComponentType:h}=this.props,{dropIndicator:p}=this.state,f=l&&p&&!i?{className:u()("drop-indicator",p===ei.aN&&"drop-indicator--forbidden")}:null,m="TAB"===c.type&&"TAB"===h;return(0,d.Y)(ed,{style:null!=a?a:void 0,ref:this.setRef,"data-test":"dragdroppable-object",className:u()("dragdroppable",s&&"dragdroppable--edit-mode","row"===r&&"dragdroppable-row","column"===r&&"dragdroppable-column",o&&"dragdroppable--dragging",t),children:e(s?{dragSourceRef:n,dropIndicatorProps:f,draggingTabOnTab:m,"data-test":"dragdroppable-content"}:{dropIndicatorProps:null,"data-test":"dragdroppable-content"})})}constructor(e){super(e),this.state={dropIndicator:null},this.mounted=!1,this.ref=null,this.setRef=this.setRef.bind(this)}}ec.defaultProps={className:null,style:null,parentComponent:void 0,disableDragDrop:!1,dropToChild:!1,children(){},onDrop(){},onHover(){},onDropIndicatorChange(){},onDragTab(){},orientation:"row",useEmptyDragPreview:!1,isDragging:!1,isDraggingOver:!1,isDraggingOverShallow:!1,droppableRef(){},dragSourceRef(){},dragPreviewRef(){}};let eu=(0,J.DragSource)(...ea)(ec),eh=(0,J.DropTarget)(...es)(ec),ep=(0,J.DragSource)(...ea)((0,J.DropTarget)(...es)(ec)),ef=["slice_name","viz_type","datasource_name"],em={slice_name:(0,p.t)("name"),viz_type:(0,p.t)("viz type"),datasource_name:(0,B.CI)(),changed_on:(0,p.t)("recent")},eg=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: row;
    padding:
      ${4*e.sizeUnit}px
      ${3*e.sizeUnit}px
      ${4*e.sizeUnit}px
      ${3*e.sizeUnit}px;
  `}
`,ev=(0,g.styled)(T.A)`
  margin-left: ${({theme:e})=>2*e.sizeUnit}px;
  min-width: 150px;
`,eb=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: flex;
    justify-content: flex-end;
    padding: ${3*e.sizeUnit}px ${2*e.sizeUnit}px 0;
  `}
`,ey=(0,g.styled)(z.$n)`
  ${({theme:e})=>(0,v.AH)`
    height: auto;
    & > .anticon > span {
      margin: auto -${e.sizeUnit}px auto 0;
    }
    & > [role='img']:first-of-type {
      padding-bottom: 1px;
      line-height: 0;
    }
  `}
`,ex=g.styled.div`
  flex-grow: 1;
  min-height: 0;
`,eS=(0,b.Ng)(function({sliceEntities:e,dashboardInfo:t,dashboardState:r},n){return{height:n.height,userId:+t.userId,dashboardId:t.id,selectedSliceIds:r.sliceIds,slices:e.slices,isLoading:e.isLoading,errorMessage:e.errorMessage,lastUpdated:e.lastUpdated,editMode:r.editMode}},function(e){return(0,k.zH)({fetchSlices:$.sH,updateSlices:$.Nv},e)})(function({fetchSlices:e,updateSlices:t,isLoading:r,slices:n,errorMessage:i="",userId:o,selectedSliceIds:l=[],editMode:a=!1,dashboardId:s}){let c=(0,g.useTheme)(),u=(0,h.useRef)(),[f,m]=(0,h.useState)(""),[b,y]=(0,h.useState)("changed_on"),[S,w]=(0,h.useState)(()=>new Set(l)),C=(0,h.useRef)(n),k=(0,h.useRef)(S),[$,T]=(0,h.useState)(()=>(0,_.Gq)(_.Hh.DashboardEditorShowOnlyMyCharts,!0)),z=(0,h.useMemo)(()=>{var e,t,r;return new Set(null!=(e=null==(r=(0,U.Ay)())||null==(t=r.common)?void 0:t.user_subjects)?e:[])},[]);(0,h.useEffect)(()=>{C.current=n},[n]),(0,h.useEffect)(()=>{k.current=S},[S]);let N=(0,h.useMemo)(()=>{let e;return Object.values(n).filter(e=>{var t,r;return!$||(null==e||null==(t=e.editors)?void 0:t.find(e=>z.has(e.id)))||(null==e||null==(r=e.created_by)?void 0:r.id)===o}).filter((0,O.HI)(f,ef)).sort((e="changed_on"===b?-1:1,(t,r)=>{var n,i;let o=null!=(n=t[b])?n:Number.MIN_SAFE_INTEGER,l=null!=(i=r[b])?i:Number.MIN_SAFE_INTEGER;return o<l?-1*e:o>l?+e:0}))},[n,f,b,$,o,z]),H=(0,h.useCallback)(()=>$?o:void 0,[$,o]),L=(0,h.useRef)(b),V=(0,h.useRef)(H);(0,h.useEffect)(()=>{L.current=b},[b]),(0,h.useEffect)(()=>{V.current=H},[H]),(0,h.useEffect)(()=>{u.current=e(H(),"",b)},[]),(0,h.useEffect)(()=>{w(new Set(l))},[l]),(0,h.useEffect)(()=>()=>{t((0,R.A)(C.current,e=>k.current.has(e.slice_id))),u.current instanceof AbortController&&u.current.abort()},[t]);let B=(0,h.useCallback)(e=>{m(e)},[]),q=(0,h.useRef)(e);(0,h.useEffect)(()=>{q.current=e},[e]);let W=(0,h.useMemo)(()=>(0,M.A)(e=>{B(e),u.current=q.current(V.current(),e,L.current)},300),[B]);(0,h.useEffect)(()=>()=>{W.cancel()},[W]);let G=(0,h.useCallback)(t=>{y(t),u.current=e(H(),f,t)},[e,f,H]),K=(0,h.useCallback)(t=>{t||(u.current=e(void 0,f,b)),T(t),(0,_.SO)(_.Hh.DashboardEditorShowOnlyMyCharts,t)},[e,f,b]),Q=(0,h.useCallback)(({index:e,style:t})=>{let r=N[e],n=S.has(r.slice_id),i=P.Ie,o={chartId:r.slice_id,sliceName:r.slice_name};return(0,d.Y)(ep,{component:{type:"CHART",id:i,meta:o},parentComponent:{id:P.k0,type:E.cP},index:e,depth:0,disableDragDrop:n,editMode:a,useEmptyDragPreview:!0,style:{},children:({dragSourceRef:e})=>(0,d.Y)(Z,{innerRef:e,style:t,sliceName:r.slice_name,lastModified:r.changed_on_humanized,visType:r.viz_type,datasourceUrl:r.datasource_url,datasourceName:r.datasource_name,thumbnailUrl:r.thumbnail_url,isSelected:n})},r.slice_id)},[N,S,a]);return(0,d.FD)("div",{css:(0,v.AH)`
        height: 100%;
        display: flex;
        flex-direction: column;
        button > span > :first-of-type {
          margin-right: 0;
        }
      `,children:[(0,d.Y)(eb,{children:(0,d.Y)(ey,{buttonStyle:"link",buttonSize:"xsmall",icon:(0,d.Y)(A.F.PlusOutlined,{iconSize:"m",iconColor:c.colorPrimary}),onClick:()=>(0,j.VJ)(`/chart/add?dashboard_id=${s}`,{newWindow:!0}),children:(0,p.t)("Create new chart")})}),(0,d.FD)(eg,{children:[(0,d.Y)(Y.Input,{placeholder:$?(0,p.t)("Filter your charts"):(0,p.t)("Filter charts"),className:"search-input",onChange:e=>W(e.target.value),"data-test":"dashboard-charts-filter-search-input"}),(0,d.Y)(ev,{id:"slice-adder-sortby",value:b,onChange:G,options:Object.entries(em).map(([e,t])=>({label:(0,p.t)("Sort by %s",t),value:e})),placeholder:(0,p.t)("Sort by")})]}),(0,d.FD)("div",{css:e=>(0,v.AH)`
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: ${e.sizeUnit}px;
          padding: 0 ${3*e.sizeUnit}px ${4*e.sizeUnit}px
            ${3*e.sizeUnit}px;
        `,children:[(0,d.Y)(Y.Checkbox,{onChange:e=>K(e.target.checked),checked:$}),(0,p.t)("Show only my charts"),(0,d.Y)(F.I,{placement:"top",tooltip:(0,p.t)(`You can choose to display all charts that you have access to or only the ones you own.
              Your filter selection will be saved and remain active until you choose to change it.`)})]}),r&&(0,d.Y)(x.R,{}),!r&&N.length>0&&(0,d.Y)(ex,{children:(0,d.Y)(D.Ay,{children:({height:e,width:t})=>(0,d.Y)(I.Y1,{width:t,height:e,itemCount:N.length,itemSize:128,itemKey:e=>N[e].slice_id,children:Q})})}),i&&(0,d.Y)("div",{css:(0,v.AH)`
            padding: 16px;
          `,children:i}),(0,d.Y)(er,{slices:N})]})}),ew=((e=[])=>{let t={registry:{},registryKeys:[]},r=(({registryKeys:e,registry:t})=>(r,n)=>{e.push(r),t[r]={key:r,metadata:n.metadata,Component:(0,h.lazy)(n.loadComponent)}})(t);return e.forEach(({key:e,item:t})=>{r(e,t)}),{set:r,get:(({registry:e})=>t=>e[t])(t),delete:(({registryKeys:e,registry:t})=>r=>{e=e.filter(e=>e!==r),delete t[r]})(t),getAll:(({registryKeys:e,registry:t})=>()=>e.map(e=>t[e]))(t)}})([]),eC=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: ${4*e.sizeUnit}px;
    background: ${e.colorBgContainer};
    cursor: move;
    &:not(.static):hover {
      background: ${e.colorFillContentHover};
    }
  `}
`,ek=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    position: relative;
    width: ${10*e.sizeUnit}px;
    height: ${10*e.sizeUnit}px;
    margin-right: ${4*e.sizeUnit}px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e.colorTextLabel};
  `}
`,e$=(0,h.memo)(function({label:e,id:t,type:r,className:n,meta:i,IconComponent:o}){return(0,d.Y)(ep,{component:{type:r,id:t,meta:i},parentComponent:{id:P.k0,type:E.cP},index:0,depth:0,editMode:!0,children:({dragSourceRef:t})=>(0,d.FD)(eC,{ref:t,"data-test":"new-component",children:[(0,d.Y)(ek,{className:u()("new-component-placeholder",n),children:o&&(0,d.Y)(o,{iconSize:"xl"})}),e]})})});function eD(){return(0,d.Y)(e$,{id:P.wN,type:"COLUMN",label:(0,p.t)("Column"),IconComponent:A.F.ColumnWidthOutlined})}function eI(){return(0,d.Y)(e$,{id:P.fB,type:E.n6,label:(0,p.t)("Divider"),IconComponent:A.F.LineOutlined})}function eO(){return(0,d.Y)(e$,{id:P.LH,type:"HEADER",label:(0,p.t)("Header"),IconComponent:A.F.FontColorsOutlined})}let eT=()=>(0,d.Y)(e$,{id:P.KD,type:"ROW",label:(0,p.t)("Row"),IconComponent:A.F.ColumnHeightOutlined});function ez(){return(0,d.Y)(e$,{id:P.IS,type:"TABS",label:(0,p.t)("Tabs"),IconComponent:A.F.DownSquareOutlined})}function eY(){return(0,d.Y)(e$,{id:P.RY,type:E.xY,label:(0,p.t)("Text / Markdown"),IconComponent:A.F.FileMarkdownOutlined})}let eF=({componentKey:e,metadata:t})=>(0,d.Y)(e$,{id:P.nS,type:E.rG,label:t.name,meta:{metadata:t,componentKey:e}}),eA=({topOffset:e=0})=>(0,d.Y)("div",{"data-test":"dashboard-builder-sidepane",css:(0,v.AH)`
      position: sticky;
      right: 0;
      top: ${e}px;
      height: calc(100vh - ${e}px);
      width: ${374}px;
    `,children:(0,d.Y)("div",{css:e=>(0,v.AH)`
        position: absolute;
        height: 100%;
        width: ${374}px;
        box-shadow: -${e.sizeUnit}px 0 ${e.sizeUnit}px 0
          ${(0,w.A)(e.colorBorder).setAlpha(.1).toRgbString()};
        background-color: ${e.colorBgBase};
      `,children:(0,d.Y)(C.Ay,{"data-test":"dashboard-builder-component-pane-tabs-navigation",id:"tabs",css:e=>(0,v.AH)`
          line-height: inherit;
          margin-top: ${2*e.sizeUnit}px;
          height: 100%;

          & .ant-tabs-body-holder {
            height: 100%;
            & .ant-tabs-body {
              height: 100%;
            }
          }
        `,items:[{key:"CHARTS",label:(0,p.t)("Charts"),children:(0,d.Y)("div",{css:(0,v.AH)`
                  height: calc(100vh - ${2*e}px);
                `,children:(0,d.Y)(eS,{})})},{key:"LAYOUT_ELEMENTS",label:(0,p.t)("Layout elements"),children:(0,d.FD)(d.FK,{children:[(0,d.Y)(ez,{}),(0,d.Y)(eT,{}),(0,d.Y)(eD,{}),(0,d.Y)(eO,{}),(0,d.Y)(eY,{}),(0,d.Y)(eI,{}),ew.getAll().map(({key:e,metadata:t})=>(0,d.Y)(eF,{metadata:t,componentKey:e},e))]})}]})})});var e_=r(19202),eE=r(15537),eP=r(426),eM=r(86954),eR=r(12097),ej=r(85991),eU=r(56550);let eN=(0,p.t)("This dashboard is not published, it will not show up in the list of dashboards. Click here to publish this dashboard."),eH=(0,p.t)("This dashboard is not published which means it will not show up in the list of dashboards. Favorite it to see it there or access it by using the URL directly."),eL=(0,p.t)("This dashboard is published. Click to make it a draft.");function eV({dashboardId:e,userCanEdit:t,userCanSave:r,isPublished:n,savePublished:i}){let o=(0,h.useCallback)(()=>{i(e,!n)},[e,n,i]);return n?t&&r?(0,d.Y)(H.m,{id:"published-dashboard-tooltip",placement:"bottom",title:eL,children:(0,d.Y)("div",{children:(0,d.Y)(eU.x,{isPublished:n,onClick:o})})}):null:t&&r?(0,d.Y)(H.m,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:eN,children:(0,d.Y)("div",{children:(0,d.Y)(eU.x,{isPublished:n,onClick:o})})}):(0,d.Y)(H.m,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:eH,children:(0,d.Y)("div",{children:(0,d.Y)(eU.x,{isPublished:n})})})}let eB=function({onUndo:e,onRedo:t}){let r=(0,h.useCallback)(r=>{if(r.ctrlKey||r.metaKey){var n,i;let o=r.key.toLowerCase(),l="z"===o||"KeyZ"===r.code,a="y"===o||"KeyY"===r.code,s=l&&!r.shiftKey,d=a||l&&r.shiftKey,c=null==(n=document)?void 0:n.querySelector(".dashboard-markdown--editing"),u=null==(i=document)?void 0:i.querySelector(".editable-title--editing");!c&&!u&&(s||d)&&(r.preventDefault(),(s?e:t)())}},[e,t]);return(0,h.useEffect)(()=>(document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}),[r]),null};var eq=r(74529),eW=r(57832),eG=r(81549),eK=r(91129);let eQ=g.styled.div`
  padding: ${({theme:e})=>4*e.sizeUnit}px;
`,eX=(0,g.styled)(eW.l.Item)`
  padding-top: ${({theme:e})=>4*e.sizeUnit}px;
`,eZ=({show:e,onHide:t,refreshFrequency:r,onChange:n,editMode:i,addSuccessToast:o,pauseOnInactiveTab:l,onPauseOnInactiveTabChange:a})=>{let[s,c]=(0,h.useState)(r),[u,f]=(0,h.useState)(l),m=(0,b.d4)(e=>{var t,r,n;return null==(n=e.dashboardInfo)||null==(r=n.common)||null==(t=r.conf)?void 0:t.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT}),g=(0,b.d4)(e=>{var t,r,n;return null==(n=e.dashboardInfo)||null==(r=n.common)||null==(t=r.conf)?void 0:t.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE}),v=(0,h.useMemo)(()=>(0,eK.ec)(s,m),[s,m]),y=(0,h.useMemo)(()=>(0,eK.Jc)(s,m,g),[s,m,g]);return(0,d.Y)(eG.xQ,{show:e,onHide:()=>{c(r),f(l),t()},onSave:()=>{v.length>0||(n(s,i),a(u),t(),o(i?(0,p.t)("Refresh interval saved"):(0,p.t)("Refresh interval set for this session")))},title:(0,p.t)("Refresh interval"),width:400,saveText:i?(0,p.t)("Save"):(0,p.t)("Save for this session"),saveDisabled:v.length>0,errorTooltip:v[0],children:(0,d.Y)(eQ,{children:(0,d.FD)(eW.l,{layout:"vertical",children:[(0,d.Y)(eW.l.Item,{label:(0,p.t)("Refresh frequency"),help:v[0]||(i?(0,p.t)("Set the automatic refresh frequency for this dashboard."):(0,p.t)("Set refresh frequency for current session only.")),extra:v[0]?null:y,validateStatus:v.length?"error":void 0,children:(0,d.Y)(eK.ux,{value:s,onChange:e=>{c(e)}})}),(0,d.Y)(eX,{children:(0,d.Y)(Y.Checkbox,{checked:u,onChange:e=>f(e.target.checked),children:(0,p.t)("Pause auto refresh if tab is inactive")})})]})})})};var eJ=r(20567),e0=r(10434),e1=r(33920),e4=r(98110),e2=r(24807),e6=r(98987),e3=r(27243),e5=r(93225),e7=r(56030),e8=r(7070),e9=r(90617),te=r(84151);function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let tr=(0,e_.a)(),tn=e=>e.split(/(?:\s|,)+/).filter(e=>e),ti=g.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,to=({dashboardId:e,onHide:t})=>{var r;let{addInfoToast:n,addDangerToast:i}=(0,e8.Yf)(),[o,l]=(0,h.useState)(!0),[a,s]=(0,h.useState)(!1),[c,u]=(0,h.useState)(null),[f,m]=(0,h.useState)(""),[g,b]=(0,h.useState)(!1),y=`/api/v1/dashboard/${e}/embedded`,S=!c||tn(f).join()!==c.allowed_domains.join(),w=(0,h.useCallback)(()=>{s(!0),(0,e6.A)({method:"POST",endpoint:y})({allowed_domains:tn(f)}).then(({result:e})=>{u(e),m(e.allowed_domains.join(", ")),n((0,p.t)("Changes saved."))},e=>{console.error(e),i((0,p.t)((0,p.t)("Sorry, something went wrong. The changes could not be saved.")))}).finally(()=>{s(!1)})},[y,f]),C=(0,h.useCallback)(()=>{b(!0)},[]),k=(0,h.useCallback)(()=>{s(!0),(0,e6.A)({method:"DELETE",endpoint:y})({}).then(()=>{u(null),m(""),b(!1),n((0,p.t)("Embedding deactivated.")),t()},e=>{console.error(e),i((0,p.t)("Sorry, something went wrong. Embedding could not be deactivated."))}).finally(()=>{s(!1)})},[y,n,i,t]);if((0,h.useEffect)(()=>{l(!1),(0,e6.A)({method:"GET",endpoint:y})({}).catch(e=>{if(404===e.status)return{result:null};throw i((0,p.t)("Sorry, something went wrong. Please try again.")),e}).then(({result:e})=>{l(!0),u(e),m(e?e.allowed_domains.join(", "):"")})},[e]),!o)return(0,d.Y)(x.R,{});let $=tr.get("embedded.documentation.configuration_details"),D=tr.get("embedded.documentation.description"),I=null!=(r=tr.get("embedded.documentation.url"))?r:"https://www.npmjs.com/package/@superset-ui/embedded-sdk";return(0,d.FD)(d.FK,{children:[c?$?(0,d.Y)($,{embeddedId:c.uuid}):(0,d.FD)("p",{children:[(0,p.t)("This dashboard is ready to embed. In your application, pass the following id to the SDK:"),(0,d.Y)("br",{}),(0,d.Y)("code",{children:c.uuid})]}):(0,d.Y)("p",{children:(0,p.t)("Configure this dashboard to embed it into an external web application.")}),(0,d.FD)("p",{children:[(0,p.t)("For further instructions, consult the")," ",(0,d.Y)(e9.o.Link,{href:I,target:"_blank",rel:"noreferrer",children:D?D():(0,p.t)("Superset Embedded SDK documentation.")})]}),(0,d.Y)("h3",{children:(0,p.t)("Settings")}),(0,d.Y)(eW.l,{layout:"vertical",children:(0,d.Y)(e5.e,{htmlFor:"allowed-domains",label:(0,d.FD)("span",{children:[(0,p.t)("Allowed Domains (comma separated)")," ",(0,d.Y)(F.I,{placement:"top",tooltip:(0,p.t)("A list of domain names that can embed this dashboard. Leaving this field empty will allow embedding from any domain.")})]}),children:(0,d.Y)(Y.Input,{id:"allowed-domains",value:f,placeholder:(0,p.t)("superset.example.com"),onChange:e=>m(e.target.value)})})}),g?(0,d.Y)(e3.F,{closable:!1,type:"warning",message:(0,p.t)("Disable embedding?"),description:(0,p.t)("This will remove your current embed configuration."),css:{textAlign:"left",marginTop:"16px"},action:(0,d.FD)(Y.Space,{children:[(0,d.Y)(z.$n,{buttonStyle:"secondary",onClick:()=>b(!1),children:(0,p.t)("Cancel")},"cancel"),(0,d.Y)(z.$n,{buttonStyle:"danger",onClick:k,loading:a,children:(0,p.t)("Deactivate")},"deactivate")]})}):(0,d.Y)(ti,{css:e=>(0,v.AH)`
            margin-top: ${e.margin}px;
          `,children:c?(0,d.FD)(d.FK,{children:[(0,d.Y)(z.$n,{onClick:C,buttonStyle:"secondary",loading:a,children:(0,p.t)("Deactivate")}),(0,d.Y)(z.$n,{onClick:w,buttonStyle:"primary",disabled:!S,loading:a,children:(0,p.t)("Save changes")})]}):(0,d.Y)(z.$n,{onClick:w,buttonStyle:"primary",loading:a,children:(0,p.t)("Enable embedding")})})]})},tl=e=>{let{show:t,onHide:r}=e,n=tr.get("embedded.modal");return n?(0,d.Y)(n,tt({},e)):(0,d.Y)(e7.aF,{name:(0,p.t)("Embed"),show:t,onHide:r,hideFooter:!0,title:(0,d.Y)(te.r,{title:(0,p.t)("Embed")}),children:(0,d.Y)(to,tt({},e))})},ta=(0,r(71300).x)(()=>r.e(5073).then(r.bind(r,95073))),ts=()=>{let e=(0,b.d4)(({dashboardState:e})=>e.overwriteConfirmMetadata);return(0,d.Y)(d.FK,{children:e&&(0,d.Y)(ta,{overwriteConfirmMetadata:e})})};var td=r(29428),tc=r(9245),tu=r(34235),th=r(98876),tp=r(22908);let tf=()=>(0,b.d4)(e=>e.dashboardState.sliceIds);var tm=r(12913),tg=r(86204),tv=r(33025),tb=r(61574),ty=r(75495),tx=r(66401),tS=r(97126),tw=r(26168),tC=r(79924),tk=r(71671),t$=r(13717),tD=r(97887),tI=r(44057),tO=r(8262);function tT(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function tz(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function l(e){tT(o,n,i,l,a,"next",e)}function a(e){tT(o,n,i,l,a,"throw",e)}l(void 0)})}}function tY(){return(tY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let tF=e=>{let{copyMenuItemTitle:t,emailMenuItemTitle:r,emailSubject:n,emailBody:i,addDangerToast:o,addSuccessToast:l,dashboardId:a,dashboardComponentId:s,latestQueryFormData:c,maxWidth:u,title:h,disabled:f}=e,m=function(e,t){if(null==e)return{};var r,n,i={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)!(t.indexOf(r=o[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,["copyMenuItemTitle","emailMenuItemTitle","emailSubject","emailBody","addDangerToast","addSuccessToast","dashboardId","dashboardComponentId","latestQueryFormData","maxWidth","title","disabled"]),g=!!(c&&Object.keys(c).length>0),v=(0,N.G7)(N.TO.EmbeddableCharts),{dataMask:y,activeTabs:x,chartStates:S,sliceEntities:w}=(0,b.d4)(e=>{var t;return{dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs,chartStates:e.dashboardState.chartStates,sliceEntities:null==(t=e.sliceEntities)?void 0:t.slices}},b.bN);function C(){return tz(function*(){let e=(0,tO.qx)(w)&&S&&Object.keys(S).length>0,t=yield(0,tk.oq)({dashboardId:a,dataMask:y,activeTabs:x,anchor:s,chartStates:e?S:void 0,includeChartState:e});if(!(null==t?void 0:t.url))throw Error("Failed to generate permalink URL");return t.url})()}let k=[{key:tI.IG.CopyLink,label:t,onClick:function(){return tz(function*(){try{yield(0,tw.A)(C),l((0,p.t)("Copied to clipboard!"))}catch(e){tC.A.error(e),o((0,p.t)("Sorry, something went wrong. Try again later."))}})()}},{key:tI.IG.ShareByEmail,label:r,onClick:function(){return tz(function*(){try{let e=encodeURIComponent(`${i}${yield C()}`),t=encodeURIComponent(n);window.location.href=`mailto:?Subject=${t}%20&Body=${e}`}catch(e){tC.A.error(e),o((0,p.t)("Sorry, something went wrong. Try again later."))}})()}}];return v&&g&&k.push({key:tI.IG.EmbedCode,label:(0,d.Y)(tD.g,{triggerNode:(0,d.Y)("span",{"data-test":"embed-code-button",children:(0,p.t)("Embed code")}),modalTitle:(0,p.t)("Embed code"),modalBody:(0,d.Y)(t$.A,{formData:c,addDangerToast:o}),maxWidth:u,responsive:!0})}),tY({},m,{type:"submenu",label:h,key:tI.IG.Share,disabled:f,children:k})};var tA=r(73815),t_=r(22110),tE=r(26666),tP=r(58561),tM=r.n(tP),tR=((i={}).PDF="pdf",i.PNG="png",i),tj=r(64243),tU=r(37664),tN=r(79923),tH=r(42300);function tL(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function tV(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function l(e){tL(o,n,i,l,a,"next",e)}function a(e){tL(o,n,i,l,a,"throw",e)}l(void 0)})}}var tB=r(17182),tq=r(891),tW=r(70621),tG=r(68447);function tK(){return(tK=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let tQ=function({saveType:e=P.LA,colorNamespace:t,colorScheme:r,shouldPersistRefreshFrequency:n=!1,dashboardTitle:i,onSave:o,triggerNode:l,canOverwrite:a,addSuccessToast:s,addDangerToast:c,dashboardId:u,dashboardInfo:f,expandedSlices:m,layout:v,customCss:b,refreshFrequency:y,lastModifiedTime:x}){let S=(0,g.useTheme)(),w=(0,h.useRef)(),[C,k]=(0,h.useState)(e),[$,D]=(0,h.useState)(`${i} ${(0,p.t)("[copy]")}`),[I,O]=(0,h.useState)(!1),T=e=>{k(e.target.value)},F=e=>{D(e),k(P.gb)};return(0,d.Y)(tD.g,{ref:w,triggerNode:l,modalTitle:(0,p.t)("Save dashboard"),modalBody:(0,d.FD)(eW.l,{layout:"vertical",children:[(0,d.Y)(eW.l.Item,{children:(0,d.Y)(tq.s,{value:P.LA,onChange:T,checked:C===P.LA,disabled:!a,children:(0,p.t)("Overwrite Dashboard [%s]",i)})}),(0,d.Y)(tW.c,{}),(0,d.Y)(eW.l.Item,{style:{marginBottom:S.sizeUnit},children:(0,d.Y)(tq.s,{value:P.gb,onChange:T,checked:C===P.gb,children:(0,p.t)("Save as:")})}),(0,d.Y)(eW.l.Item,{style:{marginBottom:S.sizeUnit},children:(0,d.Y)(Y.Input,{placeholder:(0,p.t)("[dashboard name]"),value:$,onFocus:e=>F(e.target.value),onChange:e=>F(e.target.value)})}),(0,d.Y)(eW.l.Item,{children:(0,d.Y)(Y.Checkbox,{checked:I,onChange:()=>void O(e=>!e),children:(0,p.t)("also copy (duplicate) charts")})})]}),modalFooter:(0,d.FD)(tG.s,{justify:"flex-end",gap:S.sizeUnit,children:[(0,d.Y)(z.$n,{buttonStyle:"secondary",onClick:()=>{var e,t;return null==w||null==(t=w.current)||null==(e=t.close)?void 0:e.call(t)},children:(0,p.t)("Cancel")}),(0,d.Y)(z.$n,{type:"primary","data-test":"modal-save-dashboard-button",onClick:()=>{var e,t,r;let l=n?y:null==(e=f.metadata)?void 0:e.refresh_frequency,a={certified_by:f.certified_by,certification_details:f.certification_details,css:b,dashboard_title:C===P.gb?$:i,duplicate_slices:I,last_modified_time:x,editors:f.editors,metadata:tK({},null==f?void 0:f.metadata,{positions:v,refresh_frequency:l})};(0,N.G7)(N.TO.EnableViewers)&&(a.viewers=f.viewers),C!==P.gb||$?(o(a,u,C),null==w||null==(r=w.current)||null==(t=r.close)||t.call(r)):c((0,p.t)("You must pick a name for the new dashboard"))},children:(0,p.t)("Save")})]})})};var tX=r(2904),tZ=r(6749);function tJ(){return(tJ=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let t0=["TAB","ROOT"];function t1({components:e={},filterFields:t=[],selectedChartId:r}){if((0,tx.A)(e))return[];let n=function e({currentNode:t,components:r={},filterFields:n=[],selectedChartId:i}){var o,l,a;if(!t)return null;let{type:s}=t;if("CHART"===s&&(null==t||null==(o=t.meta)?void 0:o.chartId))return{value:t.meta.chartId,label:t.meta.sliceName||`${s} ${t.meta.chartId}`,type:s,showCheckbox:i!==t.meta.chartId,children:[]};let d=[];if((null==(l=t.children)?void 0:l.length)&&t.children.forEach(t=>{let o=e({currentNode:r[t],components:r,filterFields:n,selectedChartId:i}),l=r[t].type;t0.includes(l)?o&&!Array.isArray(o)&&d.push(o):Array.isArray(o)?d=d.concat(o):o&&(d=d.concat(o))}),t0.includes(s)){let e;return e="ROOT"===s?(0,p.t)("All charts"):(null==(a=t.meta)?void 0:a.text)?t.meta.text:`${s} ${t.id}`,{value:t.id,label:e,type:s,children:d}}return d}({currentNode:e[P.wv],components:e,filterFields:t,selectedChartId:r});return n?Array.isArray(n)?n:[tJ({},n)]:[]}function t4(e=[],t=-1){let r=[],n=(e,i)=>{e&&e.children&&(-1===t||i<t)&&(void 0!==e.value&&r.push(String(e.value)),e.children.forEach(e=>n(e,i+1)))};return e.length>0&&e.forEach(e=>{n(e,0)}),r}function t2({activeFilterField:e,checkedFilterFields:t}){return(0,ej.J)(e?[e]:t)}var t6=r(6104);function t3({activeFilterField:e,checkedFilterFields:t}){if(e)return(0,t6.w)(e).chartId;if(t.length){let{chartId:e}=(0,t6.w)(t[0]);return t.some(t=>(0,t6.w)(t).chartId!==e)?null:e}return null}function t5({checkedFilterFields:e=[],activeFilterField:t,filterScopeMap:r={},layout:n={}}){let i=t2({checkedFilterFields:e,activeFilterField:t}),o=t?[t]:e,l=t3({checkedFilterFields:e,activeFilterField:t}),a=t1({components:n,filterFields:o,selectedChartId:null!=l?l:void 0}),s=new Set;o.forEach(e=>{var t;((null==(t=r[e])?void 0:t.checked)||[]).forEach(t=>{s.add(`${t}:${e}`)})});let d=[...s],c=r[i]?r[i].expanded||[]:t4(a,1);return{[i]:{nodes:a,nodesFiltered:[...a],checked:d,expanded:c}}}var t7=r(44480),t8=r(87671),t9=r(45572),re=r(53729),rt=r(52568),rr=r(92049);let rn=function(e,t){return((0,rr.A)(e)?t9.A:rt.A)(e,(0,re.A)(t,3))},ri=function(e,t){return(0,t8.A)(rn(e,t),1)};function ro({tabScopes:e,parentNodeValue:t,forceAggregate:r=!1,hasChartSiblings:n=!1,tabChildren:i=[],immuneChartSiblings:o=[]}){if(r||!n&&Object.entries(e).every(([e,{scope:t}])=>(null==t?void 0:t.length)&&e===t[0]))return{scope:[t],immune:[...new Set([...function({tabs:e=[],tabsInScope:t=[]}){let r=[];return e.forEach(({value:e,children:n})=>{n&&!t.includes(e)&&n.forEach(({value:e,children:n})=>{n&&!t.includes(e)&&r.push(...n.filter(({type:e})=>"CHART"===e))})}),r.map(({value:e})=>e)}({tabs:i,tabsInScope:ri(e,({scope:e})=>e)}),...ri(Object.values(e),({immune:e})=>e)])]};let l=Object.values(e).filter(({scope:e})=>null==e?void 0:e.length);return{scope:ri(l,({scope:e})=>e),immune:l.length?ri(l,({immune:e})=>e):ri(Object.values(e),({immune:e})=>e).concat(o)}}function rl(){return(rl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ra=r(34260),rs=r(38491),rd=r.n(rs);function rc(){return(rc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ru=(0,g.styled)(A.F.BarChartOutlined)`
  ${({theme:e})=>`
    position: relative;
    top: ${e.sizeUnit-1}px;
    color: ${e.colorPrimary};
    margin-right: ${2*e.sizeUnit}px;
  `}
`,rh={check:(0,d.Y)(()=>{let e=(0,g.useTheme)();return(0,d.FD)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.Y)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:e.colorPrimary}),(0,d.Y)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"})]})},{}),uncheck:(0,d.Y)(()=>{let e=(0,g.useTheme)();return(0,d.FD)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.Y)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colorFillSecondary}),(0,d.Y)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"})]})},{}),halfCheck:(0,d.Y)(()=>{let e=(0,g.useTheme)();return(0,d.FD)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.Y)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colorFill}),(0,d.Y)("path",{d:"M14 10H4V8H14V10Z",fill:"white"})]})},{}),expandClose:(0,d.Y)("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:(0,d.Y)("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:(0,d.Y)("span",{className:"rct-icon rct-icon-expand-all",children:(0,p.t)("Expand all")}),collapseAll:(0,d.Y)("span",{className:"rct-icon rct-icon-collapse-all",children:(0,p.t)("Collapse all")}),parentClose:(0,d.Y)("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:(0,d.Y)("span",{className:"rct-icon rct-icon-parent-open"}),leaf:(0,d.Y)("span",{className:"rct-icon rct-icon-leaf"})},rp=()=>{};function rf({nodes:e=[],checked:t=[],expanded:r=[],onCheck:n,onExpand:i,selectedChartId:o=null}){return(0,d.Y)(rd(),{showExpandAll:!0,expandOnClick:!0,showNodeIcon:!1,nodes:function({nodes:e,selectedChartId:t}){return e?e.map(e=>(function e({currentNode:t,selectedChartId:r}){let{label:n,value:i,type:o,children:l}=t;if(l&&l.length){let a=l.map(t=>e({currentNode:t,selectedChartId:r}));return rc({},t,{label:(0,d.FD)("span",{className:u()(`filter-scope-type ${null==o?void 0:o.toLowerCase()}`,{"selected-filter":r===i}),children:["CHART"===o&&(0,d.Y)(ru,{}),n]}),children:a})}return rc({},t,{label:(0,d.Y)("span",{className:u()(`filter-scope-type ${null==o?void 0:o.toLowerCase()}`,{"selected-filter":r===i}),children:n})})})({currentNode:e,selectedChartId:t})):[]}({nodes:e,selectedChartId:o}),checked:t.map(String),expanded:r.map(String),onCheck:n,onExpand:i,onClick:rp,icons:rh})}var rm=r(33296);function rg({label:e,isSelected:t}){return(0,d.Y)("span",{className:u()("filter-field-item filter-container",{"is-selected":t}),children:(0,d.Y)(rm.l,{htmlFor:e,children:e})})}function rv(){return(rv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function rb({activeKey:e=null,nodes:t=[],checked:r=[],expanded:n=[],onClick:i,onCheck:o,onExpand:l}){return(0,d.Y)(rd(),{showExpandAll:!0,showNodeIcon:!1,expandOnClick:!0,nodes:function({nodes:e,activeKey:t}){if(!e||0===e.length)return[];let r=e[0],n=(r.children||[]).map(e=>rv({},e,{children:(e.children||[]).map(e=>{let{label:r,value:n}=e;return rv({},e,{label:(0,d.Y)(rg,{isSelected:n===t,label:String(r)})})})}));return[rv({},r,{label:(0,d.Y)("span",{className:"root",children:r.label}),children:n})]}({nodes:t,activeKey:e}),checked:r.map(String),expanded:n.map(String),onClick:i,onCheck:o,onExpand:l,icons:rh})}function ry(){return(ry=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let rx=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-right: ${-6*e.sizeUnit}px;
    font-size: ${e.fontSize}px;

    & .nav.nav-tabs {
      border: none;
    }

    & .filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.sizeUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }

    & .warning-message {
      padding: ${6*e.sizeUnit}px;
    }
  `}
`,rS=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    &.filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.sizeUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }
  `}
`,rw=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    height: ${16*e.sizeUnit}px;
    border-bottom: 1px solid ${e.colorSplit};
    padding-left: ${6*e.sizeUnit}px;
    margin-left: ${-6*e.sizeUnit}px;

    h4 {
      margin-top: 0;
    }

    .selected-fields {
      margin: ${3*e.sizeUnit}px 0 ${4*e.sizeUnit}px;
      visibility: hidden;

      &.multi-edit-mode {
        visibility: visible;
      }

      .selected-scopes {
        padding-left: ${e.sizeUnit}px;
      }
    }
  `}
`,rC=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    &.filters-scope-selector {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100%;

      a,
      a:active,
      a:hover {
        color: inherit;
        text-decoration: none;
      }

      .react-checkbox-tree .rct-icon.rct-icon-expand-all,
      .react-checkbox-tree .rct-icon.rct-icon-collapse-all {
        font-family: ${e.fontFamily};
        font-size: ${e.fontSize}px;
        color: ${e.colorPrimary};

        &::before {
          content: '';
        }

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: none;
        }
      }

      .filter-field-pane {
        position: relative;
        width: 40%;
        padding: ${4*e.sizeUnit}px;
        padding-left: 0;
        border-right: 1px solid ${e.colorBorder};

        .filter-container label {
          font-weight: ${e.fontWeightNormal};
          margin: 0 0 0 ${4*e.sizeUnit}px;
          word-break: break-all;
        }

        .filter-field-item {
          height: ${9*e.sizeUnit}px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${6*e.sizeUnit}px;
          margin-left: ${-6*e.sizeUnit}px;

          &.is-selected {
            border: 1px solid ${e.colorBorder};
            border-radius: ${e.borderRadius}px;
            background-color: ${e.colorBgContainer};
            margin-left: ${-6*e.sizeUnit}px;
          }
        }

        .react-checkbox-tree {
          .rct-title .root {
            font-weight: ${e.fontWeightStrong};
          }

          .rct-text {
            height: ${10*e.sizeUnit}px;
          }
        }
      }

      .filter-scope-pane {
        position: relative;
        flex: 1;
        padding: ${4*e.sizeUnit}px;
        padding-right: ${6*e.sizeUnit}px;
      }

      .react-checkbox-tree {
        flex-direction: column;
        color: ${e.colorText};
        font-size: ${e.fontSize}px;

        .filter-scope-type {
          padding: ${2*e.sizeUnit}px 0;
          display: flex;
          align-items: center;

          &.chart {
            font-weight: ${e.fontWeightNormal};
          }

          &.selected-filter {
            padding-left: ${7*e.sizeUnit}px;
            position: relative;
            color: ${e.colorPrimaryTextActive};

            &::before {
              content: ' ';
              position: absolute;
              left: 0;
              top: 50%;
              width: ${4*e.sizeUnit}px;
              height: ${4*e.sizeUnit}px;
              border-radius: ${e.borderRadius}px;
              margin-top: ${-2*e.sizeUnit}px;
              box-shadow: inset 0 0 0 2px ${e.colorBorder};
              background: ${e.colorFill};
            }
          }

          &.root {
            font-weight: ${e.fontWeightStrong};
          }
        }

        .rct-checkbox {
          svg {
            position: relative;
            top: 3px;
            width: ${4.5*e.sizeUnit}px;
          }
        }

        .rct-node-leaf {
          .rct-bare-label {
            &::before {
              padding-left: ${e.sizeUnit}px;
            }
          }
        }

        .rct-options {
          text-align: left;
          margin-left: 0;
          margin-bottom: ${2*e.sizeUnit}px;
        }

        .rct-text {
          margin: 0;
          display: flex;
        }

        .rct-title {
          display: block;
        }

        /* disable style from react-checkbox-tree.css */
        .rct-node-clickable:hover,
        .rct-node-clickable:focus,
        label:hover,
        label:active {
          background: none !important;
        }
      }

      .multi-edit-mode {
        .filter-field-item {
          padding: 0 ${4*e.sizeUnit}px 0 ${12*e.sizeUnit}px;
          margin-left: ${-12*e.sizeUnit}px;

          &.is-selected {
            margin-left: ${-13*e.sizeUnit}px;
          }
        }
      }

      .scope-search {
        position: absolute;
        right: ${4*e.sizeUnit}px;
        top: ${4*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        border: 1px solid ${e.colorBorder};
        padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
        font-size: ${e.fontSize}px;
        outline: none;

        &:focus {
          border: 1px solid ${e.colorPrimary};
        }
      }
    }
  `}
`,rk=g.styled.div`
  ${({theme:e})=>`
    height: ${16*e.sizeUnit}px;

    border-top: ${e.sizeUnit/4}px solid ${e.colorPrimaryBg};
    padding: ${6*e.sizeUnit}px;
    margin: 0 0 0 ${-(6*e.sizeUnit)}px;
    text-align: right;

    .btn {
      margin-right: ${4*e.sizeUnit}px;

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`,r$=(0,b.Ng)(function({dashboardLayout:e,dashboardFilters:t}){return{dashboardFilters:t,layout:e.present}},function(e){return(0,k.zH)({updateDashboardFiltersScope:tZ.B8,setUnsavedChanges:tu.MR},e)})(function({dashboardFilters:e,layout:t,updateDashboardFiltersScope:r,setUnsavedChanges:n,onCloseModal:i}){let o,l,a,s=(0,h.useMemo)(()=>(function(e,t){var r,n,i,o,l;if(0===Object.keys(e).length)return{showSelector:!1,allFilterFields:[],defaultFilterKey:""};let a=function({dashboardFilters:e={}}){let t=Object.values(e).map(e=>{let{chartId:t,filterName:r,columns:n,labels:i}=e,o=Object.keys(n).map(e=>({value:(0,t6.s)({chartId:String(t),column:e}),label:i[e]||e}));return{value:t,label:r,children:o,showCheckbox:!0}});return[{value:P.zf,type:"ROOT",label:(0,p.t)("All filters"),children:t}]}({dashboardFilters:e}),s=null!=(r=a[0].children)?r:[],d=[];s.forEach(({children:e})=>{(null!=e?e:[]).forEach(e=>{d.push(String(e.value))})});let c=String(null!=(n=null==(l=s[0])||null==(o=l.children)||null==(i=o[0])?void 0:i.value)?n:""),u=Object.values(e).reduce((r,{chartId:n,columns:i})=>{let o=Object.keys(i).reduce((r,i)=>{let o=(0,t6.s)({chartId:String(n),column:i}),l=t1({components:t,filterFields:[o],selectedChartId:n}),a=t4(l,1),s=((0,ra._i)({filterScope:e[n].scopes[i]})||[]).filter(e=>e!==n);return ry({},r,{[o]:{nodes:l,nodesFiltered:[...l],checked:s,expanded:a}})},{});return ry({},r,o)},{}),{chartId:h}=(0,t6.w)(c),f=[],m=[P.zf,h],g=t5({checkedFilterFields:f,activeFilterField:c,filterScopeMap:u,layout:t});return{showSelector:!0,allFilterFields:d,defaultFilterKey:c,initialState:{activeFilterField:c,searchText:"",filterScopeMap:ry({},u,g),filterFieldNodes:a,checkedFilterFields:f,expandedFilterIds:m}}})(e,t),[]),{showSelector:c,allFilterFields:f}=s,[m,g]=(0,h.useState)(()=>s.showSelector?s.initialState.activeFilterField:null),[v,b]=(0,h.useState)(()=>s.showSelector?s.initialState.searchText:""),[y,x]=(0,h.useState)(()=>s.showSelector?s.initialState.filterScopeMap:{}),[S]=(0,h.useState)(()=>s.showSelector?s.initialState.filterFieldNodes:[]),[w,C]=(0,h.useState)(()=>s.showSelector?s.initialState.checkedFilterFields:[]),[k,$]=(0,h.useState)(()=>s.showSelector?s.initialState.expandedFilterIds:[]),D=(0,h.useCallback)((e=[],t={value:"",label:""},r)=>{let n=(t.children||[]).reduce((e,t)=>D(e,t,r),[]);return(t.label.toLocaleLowerCase().indexOf((null!=r?r:"").toLocaleLowerCase())>-1||n.length)&&e.push(ry({},t,{children:n})),e},[]),I=(0,h.useCallback)(e=>{let t=t2({activeFilterField:null!=m?m:void 0,checkedFilterFields:w});e?x(r=>{let n=r[t].nodes.reduce((t,r)=>D(t,r,e),[]),i=t4([...n]);return ry({},r,{[t]:ry({},r[t],{nodesFiltered:n,expanded:i})})}):x(e=>ry({},e,{[t]:ry({},e[t],{nodesFiltered:e[t].nodes})}))},[m,w,D]),O=(0,h.useCallback)((e=[])=>{let t=t2({activeFilterField:null!=m?m:void 0,checkedFilterFields:w}),r=function({checked:e=[],filterFields:t=[],filterScopeMap:r={}}){let n=e.reduce((e,t)=>{let[r,n]=String(t).split(":");return rl({},e,{[n]:(e[n]||[]).concat(parseInt(r,10))})},{});return t.reduce((e,t)=>rl({},e,{[t]:rl({},r[t],{checked:n[t]||[]})}),{})}({checked:e,filterFields:m?[m]:w,filterScopeMap:y});x(ry({},y,r,{[t]:ry({},y[t],{checked:e})}))},[m,w,y]),T=(0,h.useCallback)((e=[])=>{let t=t2({activeFilterField:null!=m?m:void 0,checkedFilterFields:w});x(r=>ry({},r,{[t]:ry({},r[t],{expanded:e})}))},[m,w]),F=(0,h.useCallback)((e=[])=>{let r=t5({checkedFilterFields:e,activeFilterField:void 0,filterScopeMap:y,layout:t});g(null),C(e),x(ry({},y,r))},[y,t]),A=(0,h.useCallback)((e=[])=>{$(e)},[]),_=(0,h.useCallback)((e={})=>{let r=e.value;if(r===m){let e=t5({checkedFilterFields:w,activeFilterField:void 0,filterScopeMap:y,layout:t});g(null),x(ry({},y,e))}else if(r&&f.includes(r)){let e=t5({checkedFilterFields:w,activeFilterField:r,filterScopeMap:y,layout:t});g(r),x(ry({},y,e))}},[m,f,w,y,t]),E=(0,h.useCallback)(e=>{let t=e.target.value;b(t),I(t)},[I]),M=(0,h.useCallback)(()=>{i()},[i]),R=(0,h.useCallback)(()=>{r(f.reduce((e,t)=>{let{nodes:r}=y[t],n=y[t].checked;return ry({},e,{[t]:function({filterKey:e,nodes:t=[],checkedChartIds:r=[]}){if(t.length){let{chartId:n}=(0,t6.w)(e);return function e({currentNode:t,filterId:r,checkedChartIds:n=[]}){if(!t)return{scope:[],immune:[]};let{value:i,children:o=[]}=t,l=o.filter(({type:e})=>"CHART"===e),a=o.filter(({type:e})=>"TAB"===e),s=l.filter(({value:e})=>r!==e&&!n.includes(e)).map(({value:e})=>e),d=(0,t7.flow)((0,t7.keyBy)(e=>e.value),(0,t7.mapValues)(t=>e({currentNode:t,filterId:r,checkedChartIds:n})))(a);if(!(0,tx.A)(l)&&l.some(({value:e})=>n.includes(e))){if((0,tx.A)(a))return{scope:[i],immune:s};let{scope:e,immune:t}=ro({tabScopes:d,parentNodeValue:i,forceAggregate:!0,tabChildren:a});return{scope:e,immune:s.concat(t)}}return a.length?ro({tabScopes:d,parentNodeValue:i,hasChartSiblings:!(0,tx.A)(l),tabChildren:a,immuneChartSiblings:s}):{scope:[],immune:s}}({currentNode:t[0],filterId:n,checkedChartIds:r})}return{scope:[],immune:[]}}({filterKey:t,nodes:r,checkedChartIds:n})})},{})),n(!0),i()},[f,y,i,n,r]);return(0,d.FD)(rx,{children:[(0,d.FD)(rw,{children:[(0,d.Y)("h4",{children:(0,p.t)("Configure filter scopes")}),c&&(o=[].concat(m||w).filter(Boolean).map(t=>{var r;let{chartId:n,column:i}=(0,t6.w)(t);return(null==(r=e[n])?void 0:r.labels[i])||i}),(0,d.FD)("div",{className:"selected-fields multi-edit-mode",children:[0===o.length&&(0,p.t)("No filter is selected."),1===o.length&&(0,p.t)("Editing 1 filter:"),o.length>1&&(0,p.t)("Batch editing %d filters:",o.length),(0,d.Y)("span",{className:"selected-scopes",children:o.join(", ")})]}))]}),(0,d.Y)(rS,{className:"filter-scope-body",children:c?(0,d.FD)(rC,{className:"filters-scope-selector",children:[(0,d.Y)("div",{className:u()("filter-field-pane multi-edit-mode"),children:(0,d.Y)(rb,{activeKey:m,nodes:S,checked:w,expanded:k,onClick:_,onCheck:F,onExpand:A})}),(0,d.Y)("div",{className:"filter-scope-pane multi-edit-mode",children:(l=t2({activeFilterField:null!=m?m:void 0,checkedFilterFields:w}),a=t3({activeFilterField:m,checkedFilterFields:w}),(0,d.FD)(d.FK,{children:[(0,d.Y)(Y.Input,{className:"filter-text scope-search multi-edit-mode",placeholder:(0,p.t)("Search..."),type:"text",value:v,onChange:E}),(0,d.Y)(rf,{nodes:y[l].nodesFiltered,checked:y[l].checked,expanded:y[l].expanded,onCheck:O,onExpand:T,selectedChartId:a})]}))})]}):(0,d.Y)("div",{className:"warning-message",children:(0,p.t)("There are no filters in this dashboard.")})}),(0,d.FD)(rk,{children:[(0,d.Y)(z.$n,{buttonSize:"small",onClick:M,children:(0,p.t)("Close")}),c&&(0,d.Y)(z.$n,{buttonSize:"small",buttonStyle:"primary",onClick:R,children:(0,p.t)("Save")})]})]})});function rD(){return(rD=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let rI=g.styled.div(({theme:{sizeUnit:e}})=>({padding:2*e,paddingBottom:3*e}));function rO({triggerNode:e}){let t=(0,h.useRef)(null),r=(0,h.useCallback)(()=>{var e,r;null==(r=t.current)||null==(e=r.close)||e.call(r)},[]);return(0,d.Y)(tD.g,{ref:t,triggerNode:e,modalBody:(0,d.Y)(rI,{children:(0,d.Y)(r$,rD({},{onCloseModal:r}))}),width:"80%"})}var rT=r(35105);function rz({pathname:e,filters:t={},hash:r="",standalone:n}){let i=new URLSearchParams(window.location.search);(0,tx.A)(t)||i.set(tS.vX.preselectFilters.name,JSON.stringify((0,rT.A)(t))),n?i.set(tS.vX.standalone.name,n.toString()):i.delete(tS.vX.standalone.name);let o=(0,tk.P3)(tS.vX.nativeFiltersKey);o&&i.set(tS.vX.nativeFiltersKey.name,o);let l=r?`#${r}`:"";return`${e}?${i.toString()}${l}`}var rY=r(47451),rF=r(40676),rA=r(31906);let r_=e=>{var t,r;return(null!=(t=null==(r=e.dashboardState)?void 0:r.refreshFrequency)?t:0)>0},rE=e=>{var t;return(null==(t=e.dashboardState)?void 0:t.autoRefreshPaused)===!0},rP=e=>{var t,r;return(null==(t=e.dashboardState)?void 0:t.autoRefreshPaused)===!0||(null==(r=e.dashboardState)?void 0:r.autoRefreshPausedByTab)===!0},rM=e=>{var t,r,n;let{dashboardState:i}=e;if((null!=(t=null==i?void 0:i.refreshFrequency)?t:0)<=0)return rF.h.Idle;if((null==i?void 0:i.autoRefreshPaused)||(null==i?void 0:i.autoRefreshPausedByTab))return rF.h.Paused;let o=null!=(r=null==i?void 0:i.autoRefreshStatus)?r:rF.h.Idle,l=null!=(n=null==i?void 0:i.refreshErrorCount)?n:0;return o===rF.h.Fetching?rF.h.Fetching:l>=2?rF.h.Error:1===l?rF.h.Delayed:o},rR=()=>{let e=(0,b.wA)(),t=(0,b.d4)(r_),r=(0,b.d4)(rE),n=(0,b.d4)(rP),i=(0,b.d4)(rM),o=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.lastSuccessfulRefresh)?t:null}),l=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.lastAutoRefreshTime)?t:null}),a=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.lastRefreshError)?t:null}),s=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.refreshErrorCount)?t:0}),d=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.refreshFrequency)?t:0}),c=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.autoRefreshFetchStartTime)?t:null}),u=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.autoRefreshPauseOnInactiveTab)&&t}),p=(0,b.d4)(e=>{var t,r;return null!=(t=null==(r=e.dashboardState)?void 0:r.autoRefreshPausedByTab)&&t}),f=(0,h.useCallback)(t=>{e((0,rA.h0)(t))},[e]),m=(0,h.useCallback)(t=>{e((0,rA.tg)(t))},[e]),g=(0,h.useCallback)(t=>{e((0,rA.ZT)(t))},[e]),v=(0,h.useCallback)(()=>{e((0,rA.$r)())},[e]),y=(0,h.useCallback)(t=>{e((0,rA.w7)(t))},[e]),x=(0,h.useCallback)(t=>{e((0,rA.s4)(t))},[e]),S=(0,h.useCallback)(t=>{e((0,rA.AY)(t))},[e]);return(0,h.useMemo)(()=>({isRealTimeDashboard:t,isManuallyPaused:r,isPaused:n,isPausedByTab:p,effectiveStatus:i,lastSuccessfulRefresh:o,lastAutoRefreshTime:l,lastError:a,refreshErrorCount:s,refreshFrequency:d,autoRefreshFetchStartTime:c,autoRefreshPauseOnInactiveTab:u,setStatus:f,setPaused:m,setPausedByTab:g,recordSuccess:v,recordError:y,setFetchStartTime:x,setPauseOnInactiveTab:S}),[t,r,n,p,i,o,l,a,s,d,c,u,f,m,g,v,y,x,S])};var rj=r(77432);let rU=({chartIds:e,dashboardId:t,refreshFrequency:r,timedRefreshImmuneSlices:n,autoRefreshMode:i,isLoading:o,onRefresh:l,setRefreshFrequency:a,logEvent:s})=>{let d=(0,b.Pj)(),c=(0,b.d4)(e=>{var t,r,n;let i=null==(n=e.dashboardInfo)||null==(r=n.common)||null==(t=r.conf)?void 0:t.SUPERSET_DASHBOARD_MANUAL_REFRESH_STAGGER_MS;return null==i?5e3:Number.isFinite(i)&&i>0?i:0}),{startAutoRefresh:u,endAutoRefresh:p,setRefreshInFlight:f}=(0,rj.BS)(),{isPaused:m,setStatus:g,setPaused:v,setPausedByTab:y,recordSuccess:x,recordError:S,setFetchStartTime:w,autoRefreshPauseOnInactiveTab:C=!1,setPauseOnInactiveTab:k}=rR(),$=(0,h.useRef)(!1),D=(0,h.useRef)(null),I=(0,h.useRef)(null),O=(0,h.useRef)(0),T=(0,h.useRef)(!0),z=(0,h.useCallback)((e,r=!1,n=!1,i=0,o=null,a=!1)=>{let c;if(0===e.length)return Promise.resolve();if($.current&&D.current)return D.current;let{charts:h}=d.getState(),m=e.filter(e=>{let t=h[e];return(null==t?void 0:t.latestQueryFormData)&&Object.keys(t.latestQueryFormData).length>0});if(0===m.length)return Promise.resolve();$.current=!0,f(!0),o&&s(o.action,o.metadata),n&&(u(),g(rF.h.Fetching),w(Date.now())),c=n?a?Promise.resolve(l(m,r,0,t,!0)):Promise.resolve(l(m,r,.2*i,t,!0)):Promise.resolve(l(m,r,i,t));let v=new Promise((e,t)=>{c.then(()=>{if(n){let{charts:e}=d.getState();if(m.some(t=>{var r;return(null==(r=e[t])?void 0:r.chartStatus)==="failed"})){let r=m.find(t=>{var r;return(null==(r=e[t])?void 0:r.chartStatus)==="failed"});if(void 0!==r){var t;S((null==(t=e[r])?void 0:t.chartAlert)||"Chart refresh failed")}else S("Chart refresh failed")}else x();w(null)}n?requestAnimationFrame(()=>{p(),$.current=!1,D.current=null,f(!1),e()}):($.current=!1,D.current=null,f(!1),e())}).catch(e=>{n?(S((null==e?void 0:e.message)||"Refresh failed"),w(null),requestAnimationFrame(()=>{p(),$.current=!1,D.current=null,f(!1),t(e)})):($.current=!1,D.current=null,f(!1),t(e))})});return D.current=v,v},[t,p,s,l,S,x,w,f,g,u,d]),Y=(0,h.useCallback)(()=>{null!==I.current&&(clearTimeout(I.current),I.current=null),T.current=!0,O.current+=1},[]),F=(0,h.useCallback)(t=>{if(Y(),t<=0)return;T.current=!1;let r=O.current,o=()=>{if(T.current||O.current!==r)return;let l=e.filter(e=>-1===n.indexOf(e));Promise.resolve(z(l,"fetch"!==i,!0,t,{action:eE.hl,metadata:{interval:t,chartCount:l.length}},!1)).catch(()=>void 0).finally(()=>{T.current||O.current!==r||(I.current=setTimeout(o,t))})};I.current=setTimeout(o,t)},[i,e,z,Y,n]);(0,h.useEffect)(()=>{m?Y():F(1e3*r)},[m,r,F,Y]);let A=(0,h.useCallback)(()=>$.current&&D.current?D.current:o?Promise.resolve():z(e,!0,!1,c,{action:eE.oW,metadata:{force:!0,interval:c,chartCount:e.length}}),[e,z,o,c]),_=(0,h.useCallback)(()=>{m?(v(!1),y(!1),z(e.filter(e=>-1===n.indexOf(e)),!0,!0,0,null,!0).finally(()=>{F(1e3*r)})):(v(!0),g(rF.h.Paused),Y())},[e,z,m,r,v,y,g,F,Y,n]);return!function({onRefresh:e,onRestartTimer:t,onStopTimer:r}){let{isRealTimeDashboard:n,isManuallyPaused:i,isPausedByTab:o,autoRefreshPauseOnInactiveTab:l,setPausedByTab:a,setStatus:s}=rR(),d=(0,h.useRef)(!1),c=(0,h.useCallback)(()=>{n&&l&&(i||(d.current=!0,a(!0),s(rF.h.Paused),r()))},[n,i,l,a,s,r]);!function({onVisible:e,onHidden:t,enabled:r=!0}={}){let[n,i]=(0,h.useState)(()=>"visible"===document.visibilityState),o=(0,h.useRef)(document.visibilityState),l=(0,h.useCallback)(()=>{let r=document.visibilityState,n=o.current;i("visible"===r),"hidden"===n&&"visible"===r?null==e||e():"visible"===n&&"hidden"===r&&(null==t||t()),o.current=r},[e,t]);(0,h.useEffect)(()=>{if(r)return document.addEventListener("visibilitychange",l),()=>{document.removeEventListener("visibilitychange",l)}},[r,l])}({onVisible:(0,h.useCallback)(()=>{n&&l&&d.current&&!i&&(a(!1),e().then(()=>{t()}).catch(()=>{t()}),d.current=!1)},[n,i,l,a,e,t]),onHidden:c,enabled:n&&l}),(0,h.useEffect)(()=>{n&&l&&"hidden"===document.visibilityState&&c()},[n,l,c]),(0,h.useEffect)(()=>{!n||l||o&&(d.current=!1,a(!1),i||(s(rF.h.Idle),t()))},[n,l,o,i,a,s,t])}({onRefresh:(0,h.useCallback)(()=>$.current&&D.current?D.current:o?Promise.resolve():z(e.filter(e=>-1===n.indexOf(e)),!0,!0,0,null,!0),[e,z,o,n]),onRestartTimer:(0,h.useCallback)(()=>{F(1e3*r)},[r,F]),onStopTimer:(0,h.useCallback)(()=>{Y()},[Y])}),(0,h.useEffect)(()=>()=>{Y(),a(0)},[a,Y]),{forceRefresh:A,handlePauseToggle:_,autoRefreshPauseOnInactiveTab:C,setPauseOnInactiveTab:k}};var rN=r(59272);let rH=({status:e,size:t=10})=>{let r=(0,g.useTheme)(),[n,i]=(0,h.useState)(e),o=(0,h.useRef)(null);(0,h.useEffect)(()=>(o.current&&clearTimeout(o.current),e===rF.h.Fetching?i(e):o.current=setTimeout(()=>{i(e)},100),()=>{o.current&&clearTimeout(o.current)}),[e]);let l=(0,h.useMemo)(()=>((e,t)=>{switch(t){case rF.h.Success:return{color:e.colorSuccess,needsBorder:!1};case rF.h.Idle:case rF.h.Fetching:return{color:e.colorInfo,needsBorder:!1};case rF.h.Delayed:return{color:e.colorWarning,needsBorder:!1};case rF.h.Error:return{color:e.colorError,needsBorder:!1};case rF.h.Paused:return{color:e.colorBgContainer,needsBorder:!0,outlineColor:"currentColor"};default:return{color:e.colorTextSecondary,needsBorder:!1}}})(r,n),[r,n]),a=(0,h.useMemo)(()=>(0,v.AH)`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${t}px;
      height: ${t}px;
      border-radius: 50%;
      color: ${r.colorTextSecondary};
      background-color: ${l.color};
      transition:
        background-color ${r.motionDurationMid} ease-in-out,
        border-color ${r.motionDurationMid} ease-in-out;
      border: ${l.needsBorder?"1px solid":"none"};
      border-color: ${l.needsBorder?l.outlineColor:"transparent"};
      box-shadow: ${l.needsBorder?"none":`0 0 0 2px ${r.colorBgContainer}`};
      margin-left: ${r.marginXS}px;
      margin-right: ${r.marginXS}px;
      cursor: help;
    `,[l,t,r]);return(0,d.Y)("span",{css:a,role:"status","aria-label":`Auto-refresh status: ${n}`,"data-test":"status-indicator-dot","data-status":n,"data-size":t})},rL=e=>{if(e<60)return(0,p.tn)("%s s ago","%s s ago",e,e);let t=Math.floor(e/60);if(t<60)return(0,p.tn)("%s min ago","%s min ago",t,t);let r=Math.floor(t/60);if(r<24)return(0,p.tn)("%s hr ago","%s hr ago",r,r);let n=Math.floor(r/24);return(0,p.tn)("%s day ago","%s days ago",n,n)},rV=({status:e,lastSuccessfulRefresh:t,lastAutoRefreshTime:r,refreshErrorCount:n,refreshFrequency:i,isPausedByTab:o=!1,currentTime:l})=>{let a,s,c=null===t?null:Math.max(0,Math.floor((l-t)/1e3)),u=Math.max(0,n),h=i<=0?null:null===r?i:Math.max(0,i-Math.floor(Math.max(0,l-r)/1e3)),f=(0,p.t)("Auto refresh set to %s seconds",i),m=()=>null===c?(0,p.t)("Waiting for first refresh"):(0,p.t)("Dashboard updated %s",rL(c)),g=f;switch(e){case rF.h.Fetching:a=(0,p.t)("Fetching data...");break;case rF.h.Delayed:a=m(),s=u>0?(0,p.tn)("Delayed (missed %s refresh)","Delayed (missed %s refreshes)",u,u):(0,p.t)("Refresh delayed");break;case rF.h.Error:a=(0,p.t)("There was a problem refreshing your dashboard. We'll try again in %s, as scheduled.",null===h?(0,p.t)("a few seconds"):(0,p.tn)("%s second","%s seconds",h,h)),g=null===c?void 0:(0,p.t)("Last updated %s ago",rL(c)),s=void 0;break;case rF.h.Paused:a=m(),g=o?(0,p.t)("Auto refresh paused - tab inactive (set to %s seconds)",i):(0,p.t)("Auto refresh paused (set to %s seconds)",i);break;case rF.h.Success:case rF.h.Idle:default:a=m()}return(0,d.FD)("div",{"data-test":"status-tooltip-content",children:[(0,d.Y)("div",{children:a}),g&&(0,d.Y)("div",{children:g}),s&&(0,d.Y)("div",{children:s})]})},rB=({onTogglePause:e})=>{let t=(0,g.useTheme)(),{isRealTimeDashboard:r,isPaused:n,effectiveStatus:i,lastSuccessfulRefresh:o,lastAutoRefreshTime:l,refreshErrorCount:a,refreshFrequency:s,isPausedByTab:c}=rR(),u=((e=!0,t)=>{let[r,n]=(0,h.useState)(()=>Date.now()),i=(0,h.useRef)(null),o=(0,h.useCallback)(()=>{null!==i.current&&(clearInterval(i.current),i.current=null)},[]);return(0,h.useEffect)(()=>e?(null!=t&&n(Date.now()),o(),i.current=setInterval(()=>{n(Date.now())},1e3),o):void o(),[e,t,o]),r})(r,l),f=t.fontSizeSM,m=(0,h.useMemo)(()=>(0,v.AH)`
      background-color: ${t.colorBgContainer};
      border-color: ${t.colorSplit};
      color: ${t.colorTextSecondary};
      padding: ${t.sizeUnit}px;
      column-gap: ${t.marginXS}px;
      align-items: center;
      display: inline-flex;
    `,[t]),b=(0,h.useMemo)(()=>(0,v.AH)`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${f}px;
      height: ${f}px;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      color: ${t.colorTextSecondary};
      transition: color ${t.motionDurationMid};

      &:hover {
        color: ${t.colorText};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,[f,t]),y=(0,h.useMemo)(()=>(0,v.AH)`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${f}px;
      height: ${f}px;

      & > span {
        margin: 0;
        box-shadow: none;
        cursor: pointer;
      }
    `,[f]),x=(0,h.useMemo)(()=>{let t=n?(0,p.t)("Resume auto-refresh"):(0,p.t)("Pause auto-refresh");return(0,d.Y)(H.m,{title:t,placement:"bottom",children:(0,d.Y)("button",{type:"button",css:b,onClick:e,"aria-label":t,"data-test":"auto-refresh-toggle",children:n?(0,d.Y)(A.F.PlayCircleOutlined,{iconSize:"s"}):(0,d.Y)(A.F.PauseCircleOutlined,{iconSize:"s"})})})},[n,e,b]);return r?(0,d.FD)(rN.JU,{type:"default",css:m,"data-test":"auto-refresh-indicator",children:[(0,d.Y)(H.m,{id:"auto-refresh-status-tooltip",placement:"bottom",title:(0,d.Y)(rV,{status:i,lastSuccessfulRefresh:o,lastAutoRefreshTime:l,refreshErrorCount:a,refreshFrequency:s,isPausedByTab:c,currentTime:u}),children:(0,d.Y)("div",{css:y,"data-test":"auto-refresh-status",children:(0,d.Y)(rH,{status:i,size:f})})}),x]}):null},rq=({onRefresh:e})=>{let t=(0,g.useTheme)(),[r,n]=(0,h.useState)(!1),i=(0,v.AH)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    color: ${t.colorTextSecondary};
    transition: color ${t.motionDurationMid};
    margin-left: ${t.marginXS}px;
    margin-right: ${t.marginSM}px;

    &:hover {
      color: ${t.colorText};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,o=(0,h.useCallback)(()=>{r||(n(!0),Promise.resolve(e()).finally(()=>{n(!1)}))},[r,e]);return(0,d.Y)(H.m,{title:(0,p.t)("Refresh dashboard"),placement:"bottom",children:(0,d.Y)("button",{type:"button",css:i,onClick:o,"aria-label":(0,p.t)("Refresh dashboard"),"data-test":"refresh-button",disabled:r,children:(0,d.Y)(A.F.SyncOutlined,{iconSize:"l",spin:r})})})};function rW(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function rG(){return(rG=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let rK=(0,e_.a)(),rQ=e=>(0,v.AH)`
  border-bottom: 1px solid ${e.colorBorder};
`,rX=e=>(0,v.AH)`
  color: ${e.colorPrimary};
`,rZ=e=>(0,v.AH)`
  display: flex;
  align-items: center;

  .action-schedule-report {
    margin-left: ${2*e.sizeUnit}px;
  }

  .undoRedo {
    display: flex;
    margin-right: ${2*e.sizeUnit}px;
  }
`,rJ=(0,g.styled)(z.$n)`
  /* TODO: check if we need this */
  padding: 0;
  &:hover {
    background: transparent;
  }
`,r0=e=>(0,v.AH)`
  color: ${e.colorIcon};
  &:hover {
    color: ${e.colorIconHover};
  }
`,r1=e=>(0,v.AH)`
  color: ${e.colorIcon};
`,r4=e=>(0,v.AH)`
  color: ${e.colorTextDisabled};
`,r2=e=>(0,v.AH)`
  min-width: ${17*e.sizeUnit}px;
  height: ${8*e.sizeUnit}px;
  span > :first-of-type {
    margin-right: 0;
  }
`,r6=e=>(0,v.AH)`
  min-width: ${22*e.sizeUnit}px;
  height: ${8*e.sizeUnit}px;
`,r3=()=>{let e=new URL(window.location.href);e.searchParams.delete("edit"),window.location.assign(e)},r5=()=>{var e,t,r,n,i,o,l,a,s,c;let u,f=(0,b.wA)(),[m,g]=(0,h.useState)(!1),[y,x]=(0,h.useState)(!1),[S,w]=(0,h.useState)(!1),[C,$]=(0,h.useState)(!1),[D,I]=(0,h.useState)(!1),[O,T]=(0,h.useState)(!1),[Y,F]=(0,h.useState)(!1),[_,E]=(0,h.useState)(null),M=(0,b.d4)(e=>e.dashboardInfo),R=(0,b.d4)(e=>e.dashboardLayout.present),j=(0,b.d4)(e=>e.dashboardLayout.past.length),U=(0,b.d4)(e=>e.dashboardLayout.future.length),L=(0,b.d4)(e=>e.user),V=tf(),{expandedSlices:B,refreshFrequency:q,shouldPersistRefreshFrequency:W,customCss:G,colorNamespace:K,colorScheme:Q,isStarred:X,isPublished:Z,hasUnsavedChanges:J,maxUndoHistoryExceeded:ee,editMode:et,lastModifiedTime:er}=(0,b.d4)(e=>{var t,r,n,i;return{expandedSlices:null!=(t=e.dashboardState.expandedSlices)?t:{},refreshFrequency:null!=(r=e.dashboardState.refreshFrequency)?r:0,shouldPersistRefreshFrequency:!!e.dashboardState.shouldPersistRefreshFrequency,customCss:null!=(n=e.dashboardInfo.css)?n:"",colorNamespace:e.dashboardState.colorNamespace,colorScheme:e.dashboardState.colorScheme,isStarred:!!e.dashboardState.isStarred,isPublished:!!e.dashboardState.isPublished,hasUnsavedChanges:!!e.dashboardState.hasUnsavedChanges,maxUndoHistoryExceeded:!!e.dashboardState.maxUndoHistoryExceeded,editMode:!!e.dashboardState.editMode,lastModifiedTime:null!=(i=e.lastModifiedTime)?i:0}},b.bN),en=(0,b.d4)(e=>Object.values(e.charts).some(e=>{var t,r;return(null!=(t=e.chartUpdateStartTime)?t:0)>(null!=(r=e.chartUpdateEndTime)?r:0)})),ei=(0,h.useRef)(null),eo=(0,h.useRef)(null),el=(0,h.useRef)(M.theme),ea=null!=(e=null==(i=R[P.XY])||null==(n=i.meta)?void 0:n.text)?e:"",es=null!=(t=M.slug)?t:"",ed=Math.max(er,null!=(r=M.last_modified_time)?r:0),ec=M.theme?M.theme.id:null,eu=(0,h.useMemo)(()=>(0,k.zH)({addSuccessToast:td.WR,addDangerToast:td.iB,addWarningToast:td.Zd,onUndo:tc.$K,onRedo:tc.nH,clearDashboardHistory:tc.Qk,setEditMode:tu.op,setUnsavedChanges:tu.MR,fetchFaveStar:tu.Xk,saveFaveStar:tu.cv,savePublished:tu.sE,fetchCharts:tu.a9,updateDashboardTitle:tc.qp,onChange:tu.k9,onSave:tu.JA,setMaxUndoHistoryExceeded:tu.G5,maxUndoHistoryToast:tu.yG,logEvent:th.$,setRefreshFrequency:tu.qK,onRefresh:tu.d1,dashboardInfoChanged:tp.PD,dashboardTitleChanged:tc.zp},f),[f]),eh=(0,h.useMemo)(()=>{var e;return(null==(e=M.metadata)?void 0:e.timed_refresh_immune_slices)||[]},[null==(o=M.metadata)?void 0:o.timed_refresh_immune_slices]),ep=null==(a=M.common)||null==(l=a.conf)?void 0:l.DASHBOARD_AUTO_REFRESH_MODE,{forceRefresh:ef,handlePauseToggle:em,autoRefreshPauseOnInactiveTab:eg,setPauseOnInactiveTab:ev}=rU({chartIds:V,dashboardId:M.id,refreshFrequency:q,timedRefreshImmuneSlices:eh,autoRefreshMode:ep,isLoading:en,onRefresh:eu.onRefresh,setRefreshFrequency:eu.setRefreshFrequency,logEvent:eu.logEvent});(0,h.useEffect)(()=>{et&&M.theme!==el.current&&eu.setUnsavedChanges(!0),el.current=M.theme},[M.theme,et,eu]),(0,h.useEffect)(()=>{50-j<=0&&!m&&(g(!0),eu.maxUndoHistoryToast()),j>50&&!ee&&eu.setMaxUndoHistoryExceeded()},[eu,m,ee,j]),(0,h.useEffect)(()=>()=>{null!==ei.current&&clearTimeout(ei.current),null!==eo.current&&clearTimeout(eo.current)},[]);let eb=(0,h.useCallback)(e=>{e&&ea!==e&&(eu.updateDashboardTitle(e),eu.onChange())},[eu,ea]),ey=(0,h.useCallback)(()=>{eu.onRedo(),w(!0),null!==ei.current&&clearTimeout(ei.current),ei.current=setTimeout(()=>{w(!1)},100)},[eu]),ex=(0,h.useCallback)(()=>{eu.onUndo(),x(!0),null!==eo.current&&clearTimeout(eo.current),eo.current=setTimeout(()=>{x(!1)},100)},[eu]),eS=(0,h.useCallback)(()=>{eu.logEvent(eE.U7,{edit_mode:!et}),eu.setEditMode(!et)},[eu,et]),ew=(0,h.useCallback)(()=>{var e,t,r,n,i;let o=(null==M||null==(e=M.metadata)?void 0:e.color_namespace)||K,l=(null==M||null==(t=M.metadata)?void 0:t.color_scheme)||Q,a={certified_by:M.certified_by,certification_details:M.certification_details,css:G,dashboard_title:ea,last_modified_time:ed,editors:M.editors,slug:es,description:M.description,tags:(M.tags||[]).filter(e=>e.type===eJ.U.Custom||!e.type),theme_id:ec,metadata:rG({},null==M?void 0:M.metadata,{color_namespace:o,color_scheme:l,positions:R,refresh_frequency:W?q:null==(r=M.metadata)?void 0:r.refresh_frequency})},s=(0,ej.J)(R).length,d=(null==(i=M.common)||null==(n=i.conf)?void 0:n.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT)||65535;s>=d?eu.addDangerToast((0,p.t)("Your dashboard is too large to save: the serialized layout length is %s but the limit is %s. Reduce the dashboard size (for example, split it into multiple dashboards) or raise the SUPERSET_DASHBOARD_POSITION_DATA_LIMIT config setting.",s.toLocaleString(),d.toLocaleString())):(s>=.9*d&&eu.addWarningToast((0,p.t)("Your dashboard is near the size limit.")),eu.onSave(a,M.id,P.LA))},[ed,eu,K,Q,G,M.certification_details,M.certified_by,null==(c=M.common)||null==(s=c.conf)?void 0:s.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT,M.id,M.metadata,M.editors,M.tags,ea,R,q,W,es,ec,M.description]),{showModal:eC,setShowModal:ek,handleConfirmNavigation:e$,handleSaveAndCloseModal:eD}=(0,e2.P)({hasUnsavedChanges:J,onSave:ew}),eI=(0,h.useCallback)(()=>{$(!0)},[]),eO=(0,h.useCallback)(()=>{$(!1)},[]),eT=(0,h.useCallback)(()=>{I(!0)},[]),ez=(0,h.useCallback)(()=>{I(!1)},[]),eY=(0,h.useCallback)(()=>{T(!0)},[]),eF=(0,h.useCallback)(()=>{T(!1)},[]),eA=(0,h.useCallback)(()=>{F(!0)},[]),e_=(0,h.useCallback)(()=>{F(!1)},[]),eU=(u=(0,h.useMemo)(()=>[{type:tm.Q.LastModified,value:M.changed_on_delta_humanized,modifiedBy:(0,tv.A)(M.changed_by)||(0,p.t)("Not available")},{type:tm.Q.Editor,createdBy:(0,tv.A)(M.created_by)||(0,p.t)("Not available"),editors:M.editors.length>0?M.editors.map(tv.A):(0,p.t)("None"),createdOn:M.created_on_delta_humanized}],[M.changed_by,M.changed_on_delta_humanized,M.created_by,M.created_on_delta_humanized,M.editors]),(0,d.Y)(tg.A,{items:u,tooltipPlacement:"bottom"})),eN=M.dash_edit_perm&&!M.is_managed_externally,eH=!!M.dash_share_perm,eL=!!M.dash_save_perm,eW=(0,N.G7)(N.TO.EmbeddedSuperset)&&(0,eR.L)("can_set_embedded","Dashboard",L.roles),eG=!!M.dash_export_perm,eK=!(null==M?void 0:M.userId),eQ=(0,h.useCallback)(e=>{eu.dashboardInfoChanged(rG({slug:e.slug,description:e.description,metadata:JSON.parse(e.jsonMetadata||"{}"),certified_by:e.certifiedBy,certification_details:e.certificationDetails,editors:e.editors,tags:e.tags},void 0!==e.theme&&{theme:e.theme},{css:e.css})),eu.setUnsavedChanges(!0),e.title&&ea!==e.title&&(eu.updateDashboardTitle(e.title),eu.onChange())},[eu,ea]),eX=(0,h.useCallback)((e,t)=>{eu.setRefreshFrequency(e,!!t)},[eu]),e6=(0,h.useCallback)(()=>{eS(),null==eu.clearDashboardHistory||eu.clearDashboardHistory.call(eu),eu.setUnsavedChanges(!1)},[eS,eu]),e3=rK.get("dashboard.nav.right"),e5=(0,h.useMemo)(()=>({title:ea,canEdit:eN&&et,onSave:eb,placeholder:(0,p.t)("Add the name of the dashboard"),label:(0,p.t)("Dashboard title"),showTooltip:!1}),[ea,et,eb,eN]),e7=(0,h.useMemo)(()=>({certifiedBy:M.certified_by,details:M.certification_details}),[M.certification_details,M.certified_by]),e9=(0,h.useMemo)(()=>({itemId:M.id,fetchFaveStar:eu.fetchFaveStar,saveFaveStar:eu.saveFaveStar,isStarred:X,showTooltip:!0}),[eu.fetchFaveStar,eu.saveFaveStar,M.id,X]),te=(0,h.useMemo)(()=>[!et&&(0,d.Y)(rq,{onRefresh:ef},"refresh-button"),!et&&(0,d.Y)(rB,{onTogglePause:em},"auto-refresh-indicator"),!et&&(0,d.Y)(eV,{dashboardId:M.id,isPublished:Z,savePublished:eu.savePublished,userCanEdit:eN,userCanSave:eL},"published-status"),!et&&!eK&&eU],[eu.savePublished,M.id,et,eU,eK,Z,eN,eL,em,ef]),tt=(0,h.useMemo)(()=>(0,d.FD)("div",{className:"button-container",children:[eL&&(0,d.Y)("div",{className:"button-container","data-test":"dashboard-edit-actions",children:et&&(0,d.FD)("div",{css:rZ,children:[(0,d.FD)("div",{className:"undoRedo",children:[(0,d.Y)(H.m,{id:"dashboard-undo-tooltip",title:(0,p.t)("Undo the action"),children:(0,d.Y)(rJ,{buttonStyle:"link",disabled:j<1,onClick:j>0?eu.onUndo:void 0,children:(0,d.Y)(A.F.Undo,{css:[r0,y&&r1,j<1&&r4],"data-test":"undo-action",iconSize:"xl"})})}),(0,d.Y)(H.m,{id:"dashboard-redo-tooltip",title:(0,p.t)("Redo the action"),children:(0,d.Y)(rJ,{buttonStyle:"link",disabled:U<1,onClick:U>0?eu.onRedo:void 0,children:(0,d.Y)(A.F.Redo,{css:[r0,S&&r1,U<1&&r4],"data-test":"redo-action",iconSize:"xl"})})})]}),(0,d.Y)(z.$n,{css:r6,buttonSize:"small",onClick:r3,buttonStyle:"secondary","data-test":"discard-changes-button","aria-label":(0,p.t)("Discard"),children:(0,p.t)("Discard")}),(0,d.FD)(z.$n,{css:r2,buttonSize:"small",disabled:!J,buttonStyle:"primary",onClick:ew,"data-test":"header-save-button","aria-label":(0,p.t)("Save"),children:[(0,d.Y)(A.F.SaveOutlined,{iconSize:"m"}),(0,p.t)("Save")]})]})}),et?(0,d.Y)(eB,{onUndo:ex,onRedo:ey}):(0,d.FD)("div",{css:rZ,children:[e3&&(0,d.Y)(e3,{}),eN&&!eK&&(0,d.Y)(z.$n,{buttonStyle:"secondary",onClick:e6,"data-test":"edit-dashboard-button",className:"action-button",css:rX,"aria-label":(0,p.t)("Edit dashboard"),children:(0,p.t)("Edit dashboard")})]})]}),[e3,eu.onRedo,eu.onUndo,et,S,y,ey,ex,e6,J,eK,ew,U,j,eN,eL]),[tr,tn,ti]=(({customCss:e,dashboardId:t,dashboardInfo:r,refreshFrequency:n,shouldPersistRefreshFrequency:i,editMode:o,colorNamespace:l,colorScheme:a,layout:s,expandedSlices:c,onSave:u,userCanEdit:f,userCanShare:m,userCanSave:g,userCanCurate:v,userCanExport:y,isLoading:x,lastModifiedTime:S,addSuccessToast:w,addDangerToast:C,forceRefreshAllCharts:k,showPropertiesModal:$,showRefreshModal:D,showReportModal:I,manageEmbedded:O,dashboardTitle:T,logEvent:z,setCurrentReportDeleting:Y})=>{let[F,A]=(0,h.useState)(!1),{canExportImage:_}=(0,rY.S)(),E=(0,tb.W6)(),M=(0,tb.zy)(),R=(0,b.d4)(e=>e.dashboardState.directPathToChild);(0,h.useEffect)(()=>{e&&(0,tX.A)(e)},[e]);let j=(0,h.useCallback)(({key:e})=>{switch(e){case tI.IG.RefreshDashboard:k(),w((0,p.t)("Refreshing charts"));break;case tI.IG.EditProperties:$();break;case tI.IG.AutorefreshModal:D();break;case tI.IG.ToggleFullscreen:{let e=1===Number((0,tk.P3)(tS.vX.standalone)),t=rz({pathname:M.pathname,filters:(0,ra.ug)(),hash:window.location.hash,standalone:e?null:1});E.replace(t);break}case tI.IG.ManageEmbedded:O()}A(!1)},[k,w,$,D,O,E,M]),U=(0,h.useMemo)(()=>`${(0,p.t)("Superset dashboard")} ${T}`,[T]),H=(0,h.useMemo)(()=>rz({pathname:window.location.pathname,filters:(0,ra.ug)(),hash:window.location.hash}),[]),L=(0,h.useMemo)(()=>[...R||[]].pop(),[R]),V=tF({title:(0,p.t)("Share"),disabled:x,url:H,dashboardId:t,dashboardComponentId:L,copyMenuItemTitle:(0,p.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,p.t)("Share permalink by email"),emailSubject:U,emailBody:(0,p.t)("Check out this dashboard: "),addSuccessToast:w,addDangerToast:C}),B=(e=>{let{pdfMenuItemTitle:t,imageMenuItemTitle:r,logEvent:n,dashboardId:i,dashboardTitle:o,disabled:l,title:a,userCanExport:s,canExportImage:c}=e,{addDangerToast:u,addSuccessToast:f}=(0,e8.Yf)(),m=".dashboard",g=(0,N.G7)(N.TO.EnableDashboardScreenshotEndpoints)&&(0,N.G7)(N.TO.EnableDashboardDownloadWebDriverScreenshot),v=((e,t)=>{let r=(0,b.d4)(e=>e.dashboardState.activeTabs||void 0),n=(0,b.d4)(e=>(0,tE.A)(e.dashboardState.directPathToChild)||void 0),i=(0,b.d4)(e=>e.dataMask||void 0),{addDangerToast:o,addSuccessToast:l,addInfoToast:a}=(0,e8.Yf)(),s=(0,h.useRef)([]),d=(0,h.useCallback)(e=>{s.current.forEach(clearInterval),"failure"===e&&o((0,p.t)("The screenshot could not be downloaded. Please, try again later.")),"success"===e&&l((0,p.t)("The screenshot has been downloaded."))},[o,l]),c=(0,h.useCallback)(o=>{let l=0,c=!1,u=!1,h=setInterval(()=>a((0,p.t)("The screenshot is being generated. Please, do not leave the page."),{noDuplicate:!0}),3e3);s.current=[...s.current||[],h];let f=t=>{if(!u&&!c){if(l>=30){d("failure"),tC.A.error("Max retries reached");return}c=!0,tA.A.get({endpoint:`/api/v1/dashboard/${e}/screenshot/${t}/?download_format=${o}`,headers:{Accept:"application/pdf, image/png"},parseMethod:"raw"}).then(e=>{let t=e.headers.get("Content-Disposition"),r=`screenshot.${o}`;if(t)try{var n;let e=(0,t_.qg)(t);(null==e||null==(n=e.parameters)?void 0:n.filename)&&(r=e.parameters.filename)}catch(e){console.warn("Failed to parse Content-Disposition header:",e)}return e.blob().then(e=>({blob:e,fileName:r}))}).then(({blob:e,fileName:t})=>{if(u)return;u=!0,d("success");let r=window.URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(r)}).catch(e=>{if(404===e.status)throw Error("Image not ready")}).catch(()=>{l+=1}).finally(()=>{c=!1})}};tA.A.post({endpoint:`/api/v1/dashboard/${e}/cache_dashboard_screenshot/?q=${tM().encode({force:!0})}`,jsonPayload:{anchor:n,activeTabs:r,dataMask:i,urlParams:(0,tk.ye)()}}).then(({json:e})=>{let t=null==e?void 0:e.cache_key;if(!t)throw Error("No image URL in response");let r=setInterval(()=>{f(t)},3e3);s.current.push(r),f(t)}).catch(e=>{tC.A.error(e),d("failure")}).finally(()=>{null==t||t(o===tR.PNG?eE.cm:eE.PN)})},[e,n,r,i,a,d,t]);return(0,h.useEffect)(()=>()=>{s.current.length>0&&d(),s.current=[]},[d]),c})(i,n),y=!1===c,x=e=>y?(0,d.FD)("span",{children:[e,(0,d.Y)(tH.C,{title:(0,p.t)("You don't have permission to export images")})]}):e,S=[...g?[{key:tR.PDF,label:x(t),disabled:y,onClick:()=>v(tR.PDF)},{key:tR.PNG,label:x(r),disabled:y,onClick:()=>v(tR.PNG)}]:[{key:"download-pdf",label:x(t),disabled:y,onClick:e=>{let t;return t=e.domEvent,tV(function*(){try{(0,tj.A)(m,o,!0)(t)}catch(e){tC.A.error(e),u((0,p.t)("Sorry, something went wrong. Try again later."))}null==n||n(eE.PN)})()}},{key:"download-image",label:x(r),disabled:y,onClick:e=>{let t;return t=e.domEvent,tV(function*(){try{(0,tU.A)(m,o,!0)(t)}catch(e){tC.A.error(e),u((0,p.t)("Sorry, something went wrong. Try again later."))}null==n||n(eE.cm)})()}}],{type:"divider",key:"export-divider"},{key:"export-yaml",label:(0,p.t)("Export YAML"),onClick:()=>tV(function*(){try{yield(0,tN.Ay)("dashboard",[i],()=>{}),f((0,p.t)("Dashboard exported successfully"))}catch(e){tC.A.error(e),u((0,p.t)("Sorry, something went wrong. Try again later."))}})()},...s?[{key:"export-as-example",label:(0,p.t)("Export as Example"),onClick:()=>tV(function*(){try{let t=yield tA.A.get({endpoint:`/api/v1/dashboard/${i}/export_as_example/`,headers:{Accept:"application/zip"},parseMethod:"raw"}),r=t.headers.get("Content-Disposition"),n=`dashboard_${i}_example.zip`;if(r)try{var e;let t=(0,t_.qg)(r);(null==t||null==(e=t.parameters)?void 0:e.filename)&&(n=t.parameters.filename)}catch(e){tC.A.warn("Failed to parse Content-Disposition header:",e)}let o=yield t.blob(),l=window.URL.createObjectURL(o);try{let e=document.createElement("a");e.href=l,e.download=n,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}finally{window.URL.revokeObjectURL(l)}f((0,p.t)("Dashboard exported as example successfully"))}catch(e){tC.A.error(e),u((0,p.t)("Sorry, something went wrong. Try again later."))}})()}]:[]];return{key:tI.IG.Download,type:"submenu",label:a,disabled:l,children:S}})({pdfMenuItemTitle:(0,p.t)("Export to PDF"),imageMenuItemTitle:(0,p.t)("Download as Image"),dashboardTitle:null!=T?T:"",dashboardId:t,title:(0,p.t)("Download"),disabled:x,logEvent:z,userCanExport:y,canExportImage:_}),q=(0,tB.k)({dashboardId:null==r?void 0:r.id,showReportModal:I,setCurrentReportDeleting:Y}),W=(e,t)=>({key:e,label:t});return[(0,h.useMemo)(()=>{var h,b;let y=!(null==r?void 0:r.userId),k=[];return o||(k.push({key:tI.IG.RefreshDashboard,label:(0,p.t)("Refresh dashboard"),disabled:x}),k.push({key:tI.IG.AutorefreshModal,label:n>0?(0,p.t)("Update auto-refresh"):(0,p.t)("Set auto-refresh"),disabled:x})),o||y||k.push({key:tI.IG.ToggleFullscreen,label:(0,tk.P3)(tS.vX.standalone)?(0,p.t)("Exit fullscreen"):(0,p.t)("Enter fullscreen")}),o&&k.push({key:tI.IG.EditProperties,label:(0,p.t)("Edit properties")}),k.push({type:"divider"}),g&&k.push(W(tI.IG.SaveModal,(0,d.Y)(tQ,{addSuccessToast:w,addDangerToast:C,dashboardId:t,dashboardTitle:null!=T?T:"",dashboardInfo:r,saveType:P.gb,layout:s,expandedSlices:null!=c?c:{},refreshFrequency:n,shouldPersistRefreshFrequency:i,lastModifiedTime:S,customCss:null!=e?e:"",colorNamespace:l,colorScheme:a,onSave:u,triggerNode:(0,d.Y)("div",{"data-test":"save-as-menu-item",children:(0,p.t)("Save as")}),canOverwrite:null!=f&&f}))),k.push(B),m&&k.push(V),!o&&v&&k.push({key:tI.IG.ManageEmbedded,label:(0,p.t)("Embed dashboard")}),(!o&&q||o&&!(0,tx.A)(null==r||null==(h=r.metadata)?void 0:h.filter_scopes))&&k.push({type:"divider"}),!o&&q&&k.push(q),o&&!(0,tx.A)(null==r||null==(b=r.metadata)?void 0:b.filter_scopes)&&k.push(W(tI.IG.SetFilterMapping,(0,d.Y)(rO,{triggerNode:(0,d.Y)("div",{children:(0,p.t)("Set filter mapping")})}))),(0,d.Y)(ty.W1,{selectable:!1,"data-test":"header-actions-menu",onClick:j,items:k})},[C,w,l,a,e,t,r,T,B,o,c,j,x,S,s,u,n,q,V,i,v,f,g,m]),F,A]})({addSuccessToast:eu.addSuccessToast,addDangerToast:eu.addDangerToast,dashboardInfo:M,dashboardId:M.id,dashboardTitle:ea,layout:R,expandedSlices:B,customCss:G,colorNamespace:K,colorScheme:Q,onSave:eu.onSave,forceRefreshAllCharts:ef,refreshFrequency:q,shouldPersistRefreshFrequency:W,editMode:et,hasUnsavedChanges:J,userCanEdit:eN,userCanShare:eH,userCanSave:eL,userCanCurate:eW,userCanExport:eG,isLoading:en,showReportModal:eA,showPropertiesModal:eI,showRefreshModal:eT,setCurrentReportDeleting:E,manageEmbedded:eY,lastModifiedTime:ed,logEvent:eu.logEvent});return(0,d.FD)("div",{css:rQ,"data-test":"dashboard-header-container","data-test-id":M.id,className:"dashboard-header-container",children:[(0,d.Y)(e4.U,{editableTitleProps:e5,certificatiedBadgeProps:e7,faveStarProps:e9,titlePanelAdditionalItems:te,rightPanelAdditionalItems:tt,menuDropdownProps:{open:tn,onOpenChange:ti},additionalActionsMenu:tr,showFaveStar:!!((null==L?void 0:L.userId)&&(null==M?void 0:M.id)),showTitlePanelItems:!0}),C&&(0,d.Y)(eq.A,{dashboardId:M.id,dashboardInfo:M,dashboardTitle:ea,show:C,onHide:eO,colorScheme:Q,onSubmit:eQ,onlyApply:!0}),D&&(0,d.Y)(eZ,{show:D,onHide:ez,refreshFrequency:q,onChange:eX,editMode:et,addSuccessToast:eu.addSuccessToast,pauseOnInactiveTab:eg,onPauseOnInactiveTabChange:ev}),(0,d.Y)(e0.A,{show:Y,onHide:e_,userEmail:L.email,dashboardId:M.id,creationMethod:"dashboards"}),_&&(0,d.Y)(eP.T,{description:(0,p.t)("This action will permanently delete %s.",null==_?void 0:_.name),onConfirm:()=>{var e;_&&(e=function*(){yield f((0,e1.i7)(_)),E(null)},function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function l(e){rW(o,n,i,l,a,"next",e)}function a(e){rW(o,n,i,l,a,"throw",e)}l(void 0)})})()},onHide:()=>E(null),open:!0,title:(0,p.t)("Delete Report?")}),(0,d.Y)(ts,{}),eW&&(0,d.Y)(tl,{show:O,onHide:eF,dashboardId:String(M.id)}),(0,d.Y)(v.mL,{styles:[(0,v.AH)`
          .ant-menu-vertical {
            border-right: none;
          }
        `]}),(0,d.Y)(eM.n,{title:(0,p.t)("Save changes to your dashboard?"),body:(0,p.t)("If you don't save, changes will be lost."),showModal:eC,onHide:()=>ek(!1),onConfirmNavigation:e$,handleSave:eD})]})},r7=()=>{let e=(0,b.wA)(),t=tf(),r=(0,b.d4)(e=>e.dashboardInfo.id),n=(0,b.d4)(e=>{var t;return null!=(t=e.dashboardState.refreshFrequency)?t:0}),i=(0,b.d4)(e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.timed_refresh_immune_slices}),o=(0,h.useMemo)(()=>i||[],[i]),l=(0,b.d4)(e=>{var t,r;return null==(r=e.dashboardInfo.common)||null==(t=r.conf)?void 0:t.DASHBOARD_AUTO_REFRESH_MODE}),a=(0,b.d4)(e=>Object.values(e.charts).some(e=>{var t,r;return(null!=(t=e.chartUpdateStartTime)?t:0)>(null!=(r=e.chartUpdateEndTime)?r:0)})),s=(0,h.useMemo)(()=>(0,k.zH)({onRefresh:tu.d1,setRefreshFrequency:tu.qK,logEvent:th.$},e),[e]);return rU({chartIds:t,dashboardId:r,refreshFrequency:n,timedRefreshImmuneSlices:o,autoRefreshMode:l,isLoading:a,onRefresh:s.onRefresh,setRefreshFrequency:s.setRefreshFrequency,logEvent:s.logEvent}),null},r8=g.styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({theme:e})=>e.colorIcon};
  &:hover {
    color: ${({theme:e})=>e.colorPrimary};
  }
`,r9=g.styled.span`
  margin-left: ${({theme:e})=>2*e.sizeUnit}px;
`,ne=({icon:e,label:t,onClick:r})=>(0,d.FD)(r8,{tabIndex:0,role:"button",onClick:e=>{e.preventDefault(),r(e)},children:[e,t&&(0,d.Y)(r9,{children:t})]});var nt=r(68655),nr=r(73825);function nn(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function ni({dashboardId:e,anchorLinkId:t,placement:r="right",emailContent:n="",emailSubject:i=""}){let o=(0,g.useTheme)(),[l,a]=(0,h.useState)(""),{addDangerToast:s}=(0,e8.Yf)(),{dataMask:c,activeTabs:u,chartStates:f,sliceEntities:m}=(0,b.d4)(e=>{var t;return{dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs,chartStates:e.dashboardState.chartStates,sliceEntities:null==(t=e.sliceEntities)?void 0:t.slices}},b.bN),v=`${n}${l||""}`,y=`mailto:?Subject=${i}%20&Body=${v}`;return(0,d.Y)(nr.A,{trigger:"click",placement:r,content:(0,d.FD)("div",{id:"shorturl-popover","data-test":"shorturl-popover",onClick:e=>{e.stopPropagation()},children:[(0,d.Y)(S.$r,{text:l,copyNode:(0,d.Y)(A.F.CopyOutlined,{iconSize:"m",iconColor:o.colorPrimary})}),"  ",(0,d.Y)(e9.o.Link,{href:y,"aria-label":(0,p.t)("Email link"),children:(0,d.Y)(A.F.MailOutlined,{iconSize:"m",iconColor:o.colorPrimary})})]}),children:(0,d.Y)(z.$n,{tabIndex:-1,buttonStyle:"link",icon:(0,d.Y)(A.F.LinkOutlined,{iconSize:"m",className:"short-link-trigger"}),onClick:r=>{var n;r.stopPropagation(),(n=function*(){try{let r=(0,tO.qx)(m)&&f&&Object.keys(f).length>0,n=yield(0,tk.oq)({dashboardId:e,dataMask:c,activeTabs:u,anchor:t,chartStates:r?f:void 0,includeChartState:r});(null==n?void 0:n.url)&&a(n.url)}catch(e){e&&s((yield(0,nt.h4)(e)).error||(0,p.t)("Something went wrong."))}},function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function l(e){nn(o,r,i,l,a,"next",e)}function a(e){nn(o,r,i,l,a,"throw",e)}l(void 0)})})()},"aria-label":(0,p.t)("Copy URL")})})}var no=r(19370);function nl({id:e,dashboardId:t,placement:r="right",scrollIntoView:n=!1,showShortLinkButton:i=!0}){let o=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({block:"center",behavior:"smooth"})},l=(0,no.A)();return(0,h.useEffect)(()=>{l&&e===l&&o(e)},[l,e]),(0,h.useEffect)(()=>{n&&o(e)},[e,n]),(0,d.Y)("span",{className:"anchor-link-container",id:e,"data-test":"anchor-link",children:i&&t&&(0,d.Y)(ni,{anchorLinkId:e,dashboardId:t,emailSubject:(0,p.t)("Superset chart"),emailContent:(0,p.t)("Check out this chart in dashboard:"),placement:r})})}var na=r(13048),ns=r(27664),nd=r(93819),nc=r(37292),nu=r(71362),nh=r(28681),np=r(64922),nf=r(71368),nm=r(64163),ng=r(70524),nv=r(45507),nb=r(63748),ny=r(77092),nx=r(58607),nS=r(62388);let nw=e=>{let t="MacOS"===(0,nS.UX)(),r=e?(0,p.t)("Click to edit %s.",e):(0,p.t)("Click to edit chart."),n=(0,p.t)("Use %s to open in a new tab.",t?(0,p.t)("⌘ + click"):(0,p.t)("ctrl + click"));return(0,d.FD)(d.FK,{children:[(0,d.Y)("div",{children:r}),(0,d.Y)("div",{children:n})]})};var nC=r(12861),nk=r(46159),n$=r(41698),nD=r(37128),nI=r(87132),nO=r(61287),nT=r(72255),nz=r(76216),nY=r(3037),nF=r(10381);let nA=(0,nF.Mz)(e=>e.dashboardLayout.present,e=>Object.values(e).filter(e=>(null==e?void 0:e.type)==="CHART")),n_=()=>(0,b.d4)(nA);var nE=r(19710);let nP=({type:e})=>"TAB"===e||"CHART"===e||"ROOT"===e,nM=(e,t,r,n,i,o,l,a,s=new Set)=>{var d,c,u,h,f,m,g,v,b,y,x,S,w,C,k,$,D,I,O,T,z,Y,F,A;if(!e)return;let _=t;if(e&&t&&nP(e)&&"ROOT"!==e.type&&(null==i||null==(d=i.includes)?void 0:d.call(i,e.id))){let r=l(null!=(x=null!=(S=null!=(w=null!=(C=null!=(k=null==e||null==($=e.meta)?void 0:$.sliceNameOverride)?k:null==e||null==(D=e.meta)?void 0:D.sliceName)?C:null==e||null==(I=e.meta)?void 0:I.text)?w:null==e||null==(O=e.meta)?void 0:O.defaultText)?S:null==e||null==(z=e.id)||null==(T=z.toString)?void 0:T.call(z))?x:"",null==o||null==(u=o.includes)?void 0:u.call(o,null==(c=e.meta)?void 0:c.chartId),(0,p.t)("This chart might be incompatible with the filter (datasets don't match)"),!!("CHART"===e.type&&(null==(h=e.meta)?void 0:h.chartId)&&n&&(null==(m=n[e.meta.chartId])||null==(f=m.form_data)?void 0:f.viz_type)==="deck_multi")),i={key:e.id,title:r,children:[],nodeType:"CHART"===e.type?"CHART":"TAB",chartId:null==(g=e.meta)?void 0:g.chartId};if("CHART"===e.type&&(null==(v=e.meta)?void 0:v.chartId)){let t=null==n?void 0:n[e.meta.chartId];if(t){let r;Y=e.meta.chartId,r=[],(null==t||null==(F=t.form_data)?void 0:F.viz_type)==="deck_multi"&&((null==t||null==(A=t.form_data)?void 0:A.deck_slices)||[]).forEach((e,n)=>{var i,o,s;let d=`Slice ${e}`;if(null==(s=t.queriesResponse)||null==(o=s[0])||null==(i=o.data)?void 0:i.slices){let r=t.queriesResponse[0].data.slices.find(t=>t.slice_id===e);(null==r?void 0:r.slice_name)&&(d=r.slice_name)}let c=null==a?void 0:a[e];(null==c?void 0:c.slice_name)&&(d=c.slice_name),r.push({key:`chart-${Y}-layer-${n}`,title:l(d,!1,`Deck.gl layer: ${d}`),children:[],nodeType:"DECKGL_LAYER",chartId:Y,layerType:(null==c?void 0:c.viz_type)||"deck_layer"})}),i.children=r}}t.children.push(i),_=i}"CHART"!==e.type&&(null==e||null==(y=e.children)||null==(b=y.forEach)||b.call(y,e=>{if(s.has(e))return;s.add(e);let t=null==r?void 0:r[e];t?nM(t,_,r,n,i,o,l,a,s):tC.A.warn(`Unable to find item with id: ${e} in the dashboard layout. This may indicate you have invalid references in your dashboard and the references to id: ${e} should be removed.`)}))},nR=(e,t,r,n,i=new Set)=>{r.forEach(r=>{var o,l,a;!i.has(r)&&(i.add(r),nR(e,t,[...(null==(a=t[r])?void 0:a.children)||[],...Object.values(t).filter(e=>e.parents&&e.parents[e.parents.length-1]===r&&!nP(t[e.parents[e.parents.length-1]])).map(({id:e})=>e)],n,i),(null==(o=t[r])?void 0:o.type)!=="CHART"||n.includes(null==(l=t[r])?void 0:l.meta.chartId)||e.push(r))})},nj=/^chart-(\d+)-layer-\d+$/,nU=(e,t)=>{if(!e.length)return{rootPath:[],excluded:[]};let r=e.filter(e=>e.includes("-layer-")),n=e.filter(e=>{var r;return(null==(r=t[e])?void 0:r.type)==="CHART"||!e.includes("-layer-")});r.forEach(e=>{let r=e.match(nj);if(r){let e=parseInt(r[1],10),i=Object.keys(t).find(r=>{var n,i;return(null==(i=t[r])||null==(n=i.meta)?void 0:n.chartId)===e});i&&!n.includes(i)&&n.push(i)}});let i=n.filter(e=>{var r;return(null==(r=t[e])?void 0:r.type)==="CHART"}).map(e=>{var r;return[P.wv,...(null==(r=t[e])?void 0:r.parents)||[]].filter(e=>nP(t[e]))});i.sort((e,t)=>e.length-t.length);let o=i.map(e=>e[i[0].length-1]),l=[];return Object.entries(t).forEach(([e,t])=>{let r=t.parents||[];"CHART"===t.type&&[P.wv,...r].find(t=>o.includes(t)&&!n.includes(e))&&l.push(t.meta.chartId)}),{rootPath:[...new Set(o)],excluded:l}};function nN(){return(nN=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let nH=(0,g.styled)(nE.A)`
  .ant-tree-title {
    display: flex;
    align-items: center;
  }
`,nL=(e,t,r,n)=>{let i=(0,d.Y)("span",{children:e});return n&&(i=(0,d.FD)("span",{css:(0,v.AH)`
          display: inline-flex;
          align-items: center;
        `,children:[(0,d.Y)(A.F.CheckSquareOutlined,{iconSize:"l",css:(0,v.AH)`
            margin-right: 4px;
          `}),e]})),t&&(i=(0,d.FD)(d.FK,{children:[i," ",(0,d.Y)(H.m,{title:r,children:(0,d.Y)(A.F.InfoCircleOutlined,{iconSize:"m"})})]})),i},nV=(0,h.memo)(({formScope:e,initialScope:t,forceUpdate:r,updateFormValues:n,chartId:i,initiallyExcludedCharts:o=[],title:l})=>{let[a,s]=(0,h.useState)([P.wv]),{treeData:c,layout:u}=function(e,t=[],r=e=>e,n=(0,p.t)("All panels")){let i=(0,b.d4)(({dashboardLayout:{present:e}})=>e),o=(0,b.d4)(({charts:e})=>e),l=(0,b.d4)(e=>e.sliceEntities.slices),a={children:[],key:P.wv,type:"ROOT",title:n},s=(0,h.useMemo)(()=>Object.values(i).reduce((t,r)=>{let{id:n,parents:i=[],type:o,meta:l}=r;return"CHART"===o&&e!==(null==l?void 0:l.chartId)?[...new Set([...t,...i,n])]:t},[]),[i,e]);return(0,h.useMemo)(()=>{nM(i[P.wv],a,i,o,s,t,r,l)},[i,a,o,t,r,l]),{treeData:[a],layout:i}}(i,o,nL,l),[f,m]=(0,h.useState)(!0),g=(0,h.useMemo)(()=>{var r;return((e,t,r)=>{let n=[];if(nR(n,t,[...e.rootPath],[...e.excluded]),r&&r.length>0){let e=new Set;return r.forEach(t=>{let r=t.match(nj);if(r){let t=parseInt(r[1],10);e.add(t)}}),[...new Set([...n.filter(r=>{var n,i,o;if((null==(n=t[r])?void 0:n.type)==="CHART"){let n=null==(o=t[r])||null==(i=o.meta)?void 0:i.chartId;return!n||!e.has(n)}return!0}),...r])]}return[...new Set(n)]})(nN({},e||t),u,null==(r=e||t)?void 0:r.selectedLayers)},[e,t,u]);return(0,d.Y)(nH,{checkable:!0,selectable:!1,onExpand:e=>{s(e),m(!1)},expandedKeys:a,autoExpandParent:f,onCheck:e=>{let t,o,l,a;r();let{layerKeys:s,nonLayerKeys:d}={layerKeys:e.filter(e=>e.includes("-layer-")),nonLayerKeys:e.filter(e=>!e.includes("-layer-"))},c=nU(d,u),h=(t=/^chart-(\d+)-layer-\d+$/,o=new Set,s.forEach(e=>{let r=e.match(t);if(r){let e=parseInt(r[1],10);o.add(e)}}),o);n((l=nN({},c),h.forEach(e=>{let t=Object.keys(u).find(t=>{var r,n;return(null==(n=u[t])||null==(r=n.meta)?void 0:r.chartId)===e});if(t&&u[t]){let e=nU([...d,t],u);l.rootPath=e.rootPath,l.excluded=e.excluded}}),a=nN({},l),void 0!==i&&(a.excluded=[...new Set([...a.excluded,i])]),{scope:s.length>0?nN({},a,{selectedLayers:s}):a}))},checkedKeys:g,treeData:c})}),nB=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextSecondary};
    margin-bottom: ${7*e.sizeUnit}px;
  `}
`,nq=({value:e,onSelectChange:t,chartConfigs:r})=>{let n=(0,g.useTheme)(),i=(0,b.d4)(e=>e.dashboardLayout.present),o=(0,h.useMemo)(()=>{let t=Object.values(i).filter(e=>"CHART"===e.type);return Object.values(r).filter(t=>(0,tI.YD)(t.crossFilters.scope)||t.id===e&&-1!==e).map(e=>{let r=t.find(t=>t.meta.chartId===Number(e.id));return{value:Number(e.id),label:(null==r?void 0:r.meta.sliceNameOverride)||(null==r?void 0:r.meta.sliceName)||""}})},[r,i,e]);return(0,d.FD)("div",{css:(0,v.AH)`
        margin-bottom: ${6*n.sizeUnit}px;
      `,children:[(0,d.FD)("div",{css:(0,v.AH)`
          display: flex;
          align-items: center;
          margin-bottom: ${n.sizeUnit}px;
        `,children:[(0,d.Y)(nB,{css:(0,v.AH)`
            color: ${n.colorText};
            margin-right: ${n.sizeUnit}px;
            margin-bottom: 0;
          `,children:`${(0,p.t)("Chart")} *`}),(0,d.Y)(H.m,{title:(0,p.t)("Tooltip"),placement:"top",children:(0,d.Y)(A.F.InfoCircleOutlined,{iconSize:"xs",css:(0,v.AH)`
              & > span {
                line-height: 0;
              }
            `})})]}),(0,d.Y)(T.A,{"data-test":"select-chart",ariaLabel:(0,p.t)("Select chart"),options:o,value:e&&-1===e?void 0:e,onChange:e=>{t(Number(e))}})]})},nW=({onScopeUpdate:e,currentScope:t,chartId:r,onSelectChange:n,chartConfigs:i})=>{let o=(0,g.useTheme)(),l=(0,b.d4)(({dashboardInfo:e})=>e.crossFiltersEnabled);return(0,d.FD)("div",{"data-test":"scoping-tree-panel",css:(0,v.AH)`
        flex: 1;
      `,children:[!l&&(0,d.Y)(e3.F,{message:(0,d.Y)("span",{css:(0,v.AH)`
                font-weight: ${o.fontWeightStrong};
              `,children:(0,p.t)("Cross-filtering is not enabled in this dashboard")}),type:"info",closable:!1,css:(0,v.AH)`
            margin-bottom: ${6*o.sizeUnit}px;
          `}),(0,nT.A)(r)&&(0,d.Y)(nq,{value:r,onSelectChange:n,chartConfigs:i}),(0,d.Y)(nB,{children:(0,nT.A)(r)?(0,p.t)('Select the charts to which you want to apply cross-filters when interacting with this chart. You can select "All charts" to apply filters to all charts that use the same dataset or contain the same column name in the dashboard.'):(0,p.t)('Select the charts to which you want to apply cross-filters in this dashboard. Deselecting a chart will exclude it from being filtered when applying cross-filters from any chart on the dashboard. You can select "All charts" to apply cross-filters to all charts that use the same dataset or contain the same column name in the dashboard.')}),(0,d.Y)(nV,{updateFormValues:e,initialScope:t,forceUpdate:nS.fZ,chartId:r,title:(0,p.t)("All charts")})]})};var nG=r(43375),nK=r(43627),nQ=r(74979),nX=r(30798);function nZ(){return(nZ=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let nJ="FILTER",n0=g.styled.div`
  ${({isDragging:e})=>`
    opacity: ${e?.3:1};
    cursor: ${e?"grabbing":"pointer"};
    width: 100%;
    display: flex;
  `}
`,n1=(0,g.styled)(A.F.Drag,{shouldForwardProp:e=>"isDragging"!==e})`
  ${({isDragging:e,theme:t})=>`
    font-size: ${t.fontSize}px;
    cursor: ${e?"grabbing":"grab"};
    padding-left: ${t.sizeUnit}px;
  `}
`,n4=({id:e,index:t,filterIds:r,dragType:n=nJ,children:i})=>{let o=r[0],l=(0,nX._T)(o),{attributes:a,listeners:s,setNodeRef:c,transform:u,transition:h,isDragging:f}=(0,nK.gl)({id:e,data:{filterIds:r,index:t,isDivider:l,dragType:n}}),m={transform:nQ.Ks.Transform.toString(u),transition:h||void 0};return(0,d.Y)("div",{ref:c,style:m,children:(0,d.FD)(n0,nZ({isDragging:f},a,s,{children:[(0,d.Y)(n1,{isDragging:f,alt:(0,p.t)("Move icon"),viewBox:"4 4 16 16"}),(0,d.Y)("div",{css:{flex:1},children:i})]}))})},n2=g.styled.div`
  ${({theme:e})=>`
      display: flex;
      align-items: center;
      padding: ${2*e.sizeUnit}px;
      border-radius: ${e.borderRadius}px;
      cursor: pointer;
      &.active {
        color: ${e.colorPrimaryActive};
        border-radius: ${e.borderRadius}px;
        background-color: ${e.colorPrimaryBg};
        span, .anticon {
          color: ${e.colorIcon};
        }
      }
      &:hover {
        color: ${e.colorPrimaryHover};
        span, .anticon {
          color: ${e.colorPrimaryHover};
        }
      }
      &.errored div, &.errored .warning {
        color: ${e.colorError};
      }
  `}
`,n6=(0,g.styled)(A.F.FilterOutlined)`
  color: ${({theme:e})=>e.colorIcon};
  margin-right: ${({theme:e})=>2*e.sizeUnit}px;
`,n3=(0,g.styled)(A.F.PicCenterOutlined)`
  color: ${({theme:e})=>e.colorIcon};
  margin-right: ${({theme:e})=>2*e.sizeUnit}px;
`,n5=(0,g.styled)(A.F.ExclamationCircleOutlined)`
  color: ${({theme:e})=>e.colorErrorText};
  &.anticon {
    margin-left: auto;
  }
`,n7=g.styled.div`
  height: 100%;
  overflow-y: auto;
  ${({isDragging:e})=>e&&`
    overflow: hidden;
  `}
`;(0,h.forwardRef)(({getFilterTitle:e,onChange:t,onRemove:r,restoreFilter:n,onRearrange:i,currentFilterId:o,removedFilters:l,filters:a,erroredFilters:s=[]},c)=>{let[u,f]=(0,h.useState)(!1),m=(0,nG.MS)(nG.AN,{activationConstraint:{distance:10}}),g=(0,h.useCallback)(()=>{f(!0)},[]),v=(0,h.useCallback)(e=>{f(!1);let{active:t,over:r}=e;if(!r||t.id===r.id)return;let n=a.findIndex(e=>e===t.id),o=a.findIndex(e=>e===r.id);-1!==n&&-1!==o&&i(n,o)},[a,i]),b=(0,h.useCallback)(()=>{f(!1)},[]);return(0,d.Y)(n7,{"data-test":"filter-title-container",ref:c,isDragging:u,children:(0,d.Y)(nG.Mp,{sensors:[m],collisionDetection:nG.fp,onDragStart:g,onDragEnd:v,onDragCancel:b,children:(0,d.Y)(nK.gB,{items:a,strategy:nK._G,children:a.map((i,a)=>{var c;let u,h,f,m;return(0,d.Y)(n4,{id:i,index:a,filterIds:[i],children:(u=!!l[c=i],h=s.includes(c),f=o===c,m=[],h&&m.push("errored"),f&&m.push("active"),(0,d.FD)(n2,{role:"tab",tabIndex:0,onClick:()=>t(c),className:m.join(" "),"aria-selected":f,children:[(0,d.FD)("div",{css:{display:"flex",width:"100%",alignItems:"center"},children:[(0,d.FD)("div",{css:{alignItems:"center",display:"flex",wordBreak:"break-all"},children:[c.startsWith("NATIVE_FILTER_DIVIDER")?(0,d.Y)(n3,{iconSize:"m"}):(0,d.Y)(n6,{iconSize:"m"}),u?(0,p.t)("(Removed)"):e(c)]}),!l[c]&&h&&(0,d.Y)(n5,{className:"warning",iconSize:"s"}),u&&(0,d.Y)("span",{css:{alignSelf:"flex-end",marginLeft:"auto"},role:"button","data-test":"undo-button",tabIndex:0,onClick:e=>{e.preventDefault(),n(c)},children:(0,p.t)("Undo?")})]}),(0,d.Y)("div",{css:{alignSelf:"flex-start",marginLeft:"auto"},children:u?null:(0,d.Y)(A.F.DeleteOutlined,{iconSize:"l",onClick:e=>{e.stopPropagation(),r(c)},"aria-label":(0,p.t)("Remove filter"),"data-test":"filter-remove-button"})})]},`filter-title-tab-${c}`))},i)})})})})}).displayName="FilterTitleContainer";let n8=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    margin-top: ${2*e.sizeUnit}px;
    & button > [role='img']:first-of-type {
      line-height: 0;
    }
    span[role='img'] {
      padding-bottom: 1px;
    }
    button > span > :first-of-type {
      margin-right: 0;
    }
    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}
`,n9=({isActive:e,onClick:t,id:r,label:n,onRemove:i})=>{let o=(0,g.useTheme)();return(0,d.FD)(n2,{className:e?"active":"",onClick:()=>t(r),children:[n,(0,d.Y)(A.F.DeleteOutlined,{iconColor:o.colorIcon,iconSize:"xl",onClick:e=>{e.stopPropagation(),i(r)},css:(0,v.AH)`
          margin: auto auto auto ${o.sizeUnit}px;
        `})]})},ie=({activeChartId:e,chartConfigs:t,setCurrentChartId:r,removeCustomScope:n,addNewCustomScope:i})=>{let o=(0,g.useTheme)(),l=(0,b.d4)(e=>e.dashboardLayout.present),a=(0,h.useMemo)(()=>{let e=Object.values(l).filter(e=>"CHART"===e.type);return Object.values(t).filter(e=>!(0,tI.YD)(e.crossFilters.scope)&&-1!==e.id).map(t=>{let r=e.find(e=>e.meta.chartId===t.id);return{id:t.id,label:(null==r?void 0:r.meta.sliceNameOverride)||(null==r?void 0:r.meta.sliceName)||""}})},[t,l]),s=t[-1];return(0,d.FD)(d.FK,{children:[(0,d.Y)(n8,{children:(0,d.FD)(z.$n,{buttonStyle:"link",buttonSize:"xsmall",onClick:i,children:[(0,d.Y)(A.F.PlusOutlined,{iconSize:"s"})," ",(0,p.t)("Add custom scoping")]})}),(0,d.Y)(n2,{role:"button",tabIndex:0,onClick:()=>r(void 0),className:void 0===e?"active":"",children:(0,p.t)("All charts/global scoping")}),(0,d.Y)("div",{css:(0,v.AH)`
          width: 100%;
          height: 1px;
          background-color: ${o.colorSplit};
          margin: ${3*o.sizeUnit}px 0;
        `}),a.map(t=>(0,d.Y)(n9,{id:t.id,onClick:r,onRemove:n,isActive:e===t.id,label:t.label},t.id)),s&&(0,d.Y)(n9,{id:s.id,onClick:r,onRemove:n,isActive:e===s.id,label:`[${(0,p.t)("new custom scoping")}]`})]})},it=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: flex;
    height: 100%;
    & > div {
      padding: ${4*e.sizeUnit}px;
    }
  `}
`,ir=({chartId:e,currentScope:t,onScopeUpdate:r,onSelectChange:n,chartConfigs:i,setCurrentChartId:o,removeCustomScope:l,addNewCustomScope:a})=>{let s=(0,g.useTheme)();return(0,d.FD)(it,{children:[(0,d.Y)("div",{css:(0,v.AH)`
          width: 35%;
          border-right: 1px solid ${s.colorSplit};
        `,"data-test":"scoping-list-panel",children:(0,d.Y)(ie,{setCurrentChartId:o,activeChartId:e,chartConfigs:i,removeCustomScope:l,addNewCustomScope:a})}),(0,d.Y)(nW,{chartId:e,currentScope:t,onScopeUpdate:r,onSelectChange:n,chartConfigs:i})]})};function ii(){return(ii=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let io=(e,t)=>({rootPath:t.rootPath,excluded:t.excluded.filter(t=>t!==e)}),il=({initialChartId:e,isVisible:t,closeModal:r})=>{var n,i;let o=(0,b.wA)(),l=n_(),a=tf(),[s,c]=(0,h.useState)(e),u=(0,b.d4)(e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration)||{}}),f=(0,h.useMemo)(()=>({scope:nY.e2,chartsInScope:a}),[a]),m=(0,b.d4)(e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.global_chart_configuration)||f}),[g,v]=(0,h.useState)((0,nT.A)(e)&&(0,tI.YD)(null==(n=u[e])?void 0:n.crossFilters.scope)?ii({},u,{[e]:{id:e,crossFilters:{scope:io(e,m.scope),chartsInScope:null==(i=u[e])?void 0:i.crossFilters.chartsInScope}}}):u),[y,x]=(0,h.useState)(m),S=(0,h.useCallback)(()=>{let e=ii({},g);e[-1]&&delete e[-1],o((0,tp.Iw)({chartConfiguration:e,globalChartConfiguration:y})),r()},[g,r,o,y]),w=(0,h.useCallback)(({scope:e})=>{if((0,nT.A)(s))v(t=>ii({},t,{[s]:{id:s,crossFilters:{scope:e,chartsInScope:(0,nz._)(e,a,l)}}}));else{let t=(0,nz._)(e,a,l);x({scope:e,chartsInScope:t}),v(e=>Object.entries(e).reduce((e,[r,n])=>((0,tI.YD)(n.crossFilters.scope)?e[r]={id:Number(n.id),crossFilters:{scope:"global",chartsInScope:t.filter(e=>e!==Number(n.id))}}:e[r]=n,e),{}))}},[s,a,l]),C=(0,h.useCallback)(e=>{v(t=>{let r=ii({},t);return -1===e?delete r[-1]:r[e]={id:e,crossFilters:{scope:"global",chartsInScope:y.chartsInScope.filter(t=>t!==e)}},r}),s===e&&c(void 0)},[s,y.chartsInScope]),k=(0,h.useCallback)(()=>{c(-1),g[-1]||v(e=>ii({},e,{[-1]:{id:-1,crossFilters:{scope:y.scope,chartsInScope:y.chartsInScope}}}))},[g,y.chartsInScope,y.scope]),$=(0,h.useCallback)(e=>{if((0,nT.A)(s)){var t;let r=(0,tI.YD)(null==(t=g[s])?void 0:t.crossFilters.scope)?y.scope:g[s].crossFilters.scope,n={rootPath:r.rootPath,excluded:[...r.excluded.filter(e=>e!==s),e]},i={id:e,crossFilters:{scope:n,chartsInScope:(0,nz._)(n,a,l)}};v(t=>{let r=ii({},t,{[e]:i});return -1===s?delete r[-1]:r[s]={id:s,crossFilters:{scope:"global",chartsInScope:y.chartsInScope.filter(e=>e!==s)}},r}),c(e)}},[g,a,s,y.chartsInScope,y.scope,l]),D=(0,h.useMemo)(()=>{var e,t,r,n;let i=y.scope;return(0,nT.A)(s)?(0,tI.YD)(null==(t=g[s])||null==(e=t.crossFilters)?void 0:e.scope)?io(s,i):null==(n=g[s])||null==(r=n.crossFilters)?void 0:r.scope:i},[g,s,y.scope]);return(0,d.Y)(e7.aF,{onHide:r,show:t,name:(0,p.t)("Cross-filtering scoping"),title:(0,d.Y)(te.r,{title:(0,p.t)("Cross-filtering scoping")}),onHandledPrimaryAction:S,primaryButtonName:(0,p.t)("Save"),responsive:!0,destroyOnHidden:!0,bodyStyle:{padding:0,height:700},children:(0,d.Y)(ir,{chartConfigs:g,currentScope:D,onScopeUpdate:w,chartId:s,setCurrentChartId:c,onSelectChange:$,removeCustomScope:C,addNewCustomScope:k})})},ia=e=>{let[t,r]=(0,h.useState)(!1),n=(0,h.useCallback)(()=>r(!0),[]),i=(0,h.useCallback)(()=>r(!1),[]);return[n,t?(0,d.Y)(il,{initialChartId:e,closeModal:i,isVisible:t}):null]},is=({canExplore:e,exploreUrl:t,triggerNode:r,modalTitle:n,modalBody:i,modalRef:o})=>{let l=(0,tb.W6)(),a=(0,g.useTheme)(),s=(0,h.useCallback)(()=>{var e;null==o||null==(e=o.current)||e.close()},[o]);return(0,d.Y)(tD.g,{ref:o,triggerNode:r,modalTitle:n,modalBody:i,responsive:!0,resizable:!0,resizableConfig:{minHeight:128*a.sizeUnit,minWidth:128*a.sizeUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnHidden:!0,modalFooter:(0,d.FD)(d.FK,{children:[(0,d.Y)(z.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:()=>l.push(t),disabled:!e,tooltip:e?void 0:(0,p.t)("You do not have sufficient permissions to edit the chart"),children:(0,p.t)("Edit chart")}),(0,d.Y)(z.$n,{buttonStyle:"primary",buttonSize:"small",onClick:s,css:(0,v.AH)`
              margin-left: ${2*a.sizeUnit}px;
            `,children:(0,p.t)("Close")})]})})},id=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    height: auto;
    margin: ${e.sizeUnit}px 0;
    color: ${e.colorTextLabel};
    line-height: 21px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `}
`,ic=e=>`.dashboard-chart-id-${e}`,iu=()=>(0,d.Y)(A.F.EllipsisOutlined,{css:(0,v.AH)`
      transform: rotate(90deg);
      &:hover {
        cursor: pointer;
      }
    `,iconSize:"xl",className:"dot"}),ih=(0,v.AH)`
  &&.anticon > .anticon:first-of-type {
    margin-right: 0;
    vertical-align: 0;
  }
`,ip=()=>{window.setTimeout(()=>{window.dispatchEvent(new Event("resize"))},300)},im=e=>{var t,r;let n,[i,o]=(0,h.useState)(!1),[l,a]=(0,h.useState)(!1),[s,c]=ia(e.slice.slice_id),u=(0,tb.W6)(),f=(0,h.useRef)(null),m=(0,h.useRef)(null),[y,x]=(0,h.useState)([]),S=(0,g.useTheme)(),w=(0,b.d4)(({dashboardInfo:e})=>e.dash_edit_perm)&&(null==(r=(0,nb.A)().get(e.slice.viz_type))||null==(t=r.behaviors)?void 0:t.includes(ny.nS.InteractiveChart)),C=e.supersetCanExplore,{canDrillToDetail:k,canViewQuery:$,canViewTable:D}=(0,rY.S)(),I=(0,nI.t_)(e.slice.datasource,e.dashboardId,e.formData,!k),O=I.status===nO.bk.Complete?I.result:void 0,T=()=>{if(!document.exitFullscreen){e.handleToggleFullSize(),ip();return}document.exitFullscreen().catch(t=>{e.addDangerToast((0,p.t)("Error disabling fullscreen: %s",t instanceof Error?t.message:(0,p.t)("Unknown error")))})},Y=({key:t,domEvent:r})=>{switch(t){case tI.IG.ForceRefresh:e.updatedDttm&&e.forceRefresh(e.slice.slice_id,e.dashboardId),e.addSuccessToast((0,p.t)("Data refreshed"));break;case tI.IG.ToggleChartDescription:null==e.toggleExpandSlice||e.toggleExpandSlice.call(e,e.slice.slice_id);break;case tI.IG.ExploreChart:null==e.logExploreChart||e.logExploreChart.call(e,e.slice.slice_id),r.metaKey||r.ctrlKey?(r.preventDefault(),(0,j.V3)(e.exploreUrl)):u.push(e.exploreUrl);break;case tI.IG.ExportCsv:null==e.exportCSV||e.exportCSV.call(e,e.slice.slice_id);break;case tI.IG.ExportPivotCsv:null==e.exportPivotCSV||e.exportPivotCSV.call(e,e.slice.slice_id);break;case tI.IG.Fullscreen:if(e.isFullSize)document.fullscreenElement?T():(e.handleToggleFullSize(),ip());else{var n;let t;(null==(t=null==(n=e.chartHolderRef)?void 0:n.current)?void 0:t.requestFullscreen)?t.requestFullscreen().catch(t=>{e.addDangerToast((0,p.t)("Error enabling fullscreen: %s",t instanceof Error?t.message:(0,p.t)("Unknown error")))}):e.addDangerToast((0,p.t)("Fullscreen is not supported in this browser."))}break;case tI.IG.ExportFullCsv:null==e.exportFullCSV||e.exportFullCSV.call(e,e.slice.slice_id);break;case tI.IG.ExportFullXlsx:null==e.exportFullXLSX||e.exportFullXLSX.call(e,e.slice.slice_id);break;case tI.IG.ExportXlsx:null==e.exportXLSX||e.exportXLSX.call(e,e.slice.slice_id);break;case tI.IG.DownloadAsImage:{let t=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");t&&(t.style.visibility="hidden"),Promise.resolve((0,tU.A)(ic(e.slice.slice_id),e.slice.slice_name,!0,S)(r)).finally(()=>{t&&(t.style.visibility="visible")}),null==e.logEvent||e.logEvent.call(e,eE.C7,{chartId:e.slice.slice_id});break}case tI.IG.DownloadAsPngTransparent:case tI.IG.DownloadAsPngSolid:{let n=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");n&&(n.style.visibility="hidden");let i=t===tI.IG.DownloadAsPngTransparent?"transparent":"solid";Promise.resolve((0,tU.A)(ic(e.slice.slice_id),e.slice.slice_name,!0,S,{format:"png",backgroundType:i})(r)).finally(()=>{n&&(n.style.visibility="visible")}),null==e.logEvent||e.logEvent.call(e,eE.q2,{chartId:e.slice.slice_id,backgroundType:i});break}case tI.IG.DownloadAsPdf:{let t=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");t&&(t.style.visibility="hidden"),Promise.resolve((0,tj.A)(ic(e.slice.slice_id),e.slice.slice_name,!0)(r)).finally(()=>{t&&(t.style.visibility="visible")}),null==e.logEvent||e.logEvent.call(e,eE.NS,{chartId:e.slice.slice_id});break}case tI.IG.ExportPivotXlsx:{let t=`#chart-id-${e.slice.slice_id}`;null==e.exportPivotExcel||e.exportPivotExcel.call(e,`${t} .pvtTable`,e.slice.slice_name);break}case tI.IG.CrossFilterScoping:s();break;case tI.IG.ViewResults:m.current&&!m.current.showModal&&m.current.open(r);break;case tI.IG.DrillToDetail:o(!i);break;case tI.IG.ViewQuery:f.current&&!f.current.showModal&&f.current.open(r)}a(!1)},{componentId:F,dashboardId:_,slice:E,isFullSize:P,cachedDttm:M=[],queriedDttm:R=null,updatedDttm:U=null,addSuccessToast:L=()=>{},addDangerToast:V=()=>{},supersetCanShare:B=!1,isCached:q=[]}=e,W=E.viz_type===na.Y.Table,G=E.viz_type===na.Y.PivotTable,K=(M||[]).map(e=>nv.XV.utc(e).fromNow()),Q=U?nv.XV.utc(U).fromNow():"",X=1===new Set(n=q.map((e,t)=>e?(0,p.t)("Cached %s",K[t]):Q?(0,p.t)("Fetched %s",Q):"")).size?[n[0]]:n,Z=X.map((e,t)=>(0,d.Y)("div",{children:X.length>1?(0,p.t)("Query %s: %s",t+1,e):e},`tooltip-${t}`)),J=R?nv.XV.utc(R).local().format("L LTS"):null,ee=P?(0,p.t)("Exit fullscreen"):(0,p.t)("Enter fullscreen"),et={zIndex:P?S.zIndexPopupBase+1:S.zIndexPopupBase-1,animationDuration:"0s"},er=[{key:tI.IG.ForceRefresh,label:(0,d.Y)(H.m,{title:J?`${(0,p.t)("Last queried at")}: ${J}`:"",overlayStyle:{maxWidth:"none"},children:(0,d.FD)("div",{children:[(0,p.t)("Force refresh"),(0,d.Y)(id,{"data-test":"dashboard-slice-refresh-tooltip",children:Z})]})}),disabled:"loading"===e.chartStatus,style:{height:"auto",lineHeight:"initial"},"data-test":"refresh-chart-menu-item"},{key:tI.IG.Fullscreen,label:ee},{type:"divider"}];E.description&&er.push({key:tI.IG.ToggleChartDescription,label:e.isDescriptionExpanded?(0,p.t)("Hide chart description"):(0,p.t)("Show chart description")}),C&&er.push({key:tI.IG.ExploreChart,label:(0,d.Y)(H.m,{title:nw(e.slice.slice_name),children:(0,p.t)("Edit chart")}),"data-test-edit-chart-name":E.slice_name}),w&&er.push({key:tI.IG.CrossFilterScoping,label:(0,p.t)("Cross-filtering scoping")}),(C||w)&&er.push({type:"divider"}),(C||$)&&er.push({key:tI.IG.ViewQuery,label:(0,d.Y)(tD.g,{triggerNode:(0,d.Y)("div",{"data-test":"view-query-menu-item",children:(0,p.t)("View query")}),modalTitle:(0,p.t)("View query"),modalBody:(0,d.Y)(nC.A,{latestQueryFormData:e.formData,ownState:e.ownState}),draggable:!0,resizable:!0,responsive:!0,ref:f})}),(C||D)&&er.push({key:tI.IG.ViewResults,label:(0,d.Y)(is,{canExplore:e.supersetCanExplore,exploreUrl:e.exploreUrl,triggerNode:(0,d.Y)("div",{"data-test":"view-query-menu-item",children:(0,p.t)("View as table")}),modalRef:m,modalTitle:(0,p.t)("Chart Data: %s",E.slice_name),modalBody:(0,d.Y)(nk.ih,{queryFormData:e.formData,queryForce:!1,dataSize:20,isRequest:!0,isVisible:!0,canDownload:!!e.supersetCanDownload,columnDisplayNames:null==O?void 0:O.verbose_map})})});let en=(0,n$.R)({formData:e.formData,filters:y,setFilters:x,setShowModal:o,key:tI.IG.DrillToDetail}),ei=tF({dashboardId:_,dashboardComponentId:F,copyMenuItemTitle:(0,p.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,p.t)("Share chart by email"),emailSubject:(0,p.t)("Superset chart"),emailBody:(0,p.t)("Check out this chart: "),addSuccessToast:L,addDangerToast:V,title:(0,p.t)("Share"),latestQueryFormData:e.formData,maxWidth:`${100*S.sizeUnit}px`});return(0,N.G7)(N.TO.DrillToDetail)&&k&&er.push(...en),(E.description||C)&&er.push({type:"divider"}),B&&er.push(ei),e.supersetCanDownload&&er.push({type:"submenu",key:tI.IG.Download,label:(0,p.t)("Download"),children:[{key:tI.IG.ExportCsv,label:(0,p.t)("Export to .CSV"),icon:(0,d.Y)(A.F.FileOutlined,{css:ih})},...G?[{key:tI.IG.ExportPivotCsv,label:(0,p.t)("Export to Pivoted .CSV"),icon:(0,d.Y)(A.F.FileOutlined,{css:ih})},{key:tI.IG.ExportPivotXlsx,label:(0,p.t)("Export to Pivoted Excel"),icon:(0,d.Y)(A.F.FileOutlined,{css:ih})}]:[],{key:tI.IG.ExportXlsx,label:(0,p.t)("Export to Excel"),icon:(0,d.Y)(A.F.FileOutlined,{css:ih})},...(0,N.G7)(N.TO.AllowFullCsvExport)&&e.supersetCanDownload&&W?[{key:tI.IG.ExportFullCsv,label:(0,p.t)("Export to full .CSV"),icon:(0,d.Y)(A.F.FileOutlined,{css:ih})},{key:tI.IG.ExportFullXlsx,label:(0,p.t)("Export to full Excel"),icon:(0,d.Y)(A.F.FileOutlined,{css:ih})}]:[],{key:tI.IG.DownloadAsImage,label:(0,p.t)("Export screenshot (jpeg)"),icon:(0,d.Y)(A.F.FileImageOutlined,{css:ih})},{type:"submenu",key:"download_as_png_submenu",label:(0,p.t)("Export screenshot (png)"),icon:(0,d.Y)(A.F.FileImageOutlined,{css:ih}),children:[{key:tI.IG.DownloadAsPngTransparent,label:(0,p.t)("Transparent background")},{key:tI.IG.DownloadAsPngSolid,label:(0,p.t)("Solid background")}]},{key:tI.IG.DownloadAsPdf,label:(0,p.t)("Export as PDF"),icon:(0,d.Y)(A.F.FileOutlined,{css:ih})}]}),(0,h.useEffect)(()=>{let t=()=>{var t;!!P!=(document.fullscreenElement===(null==(t=e.chartHolderRef)?void 0:t.current))&&(e.handleToggleFullSize(),ip())};return document.addEventListener("fullscreenchange",t),()=>{document.removeEventListener("fullscreenchange",t)}},[P,e.chartHolderRef,e.handleToggleFullSize]),(0,d.FD)(d.FK,{children:[P&&(0,d.Y)(A.F.FullscreenExitOutlined,{style:{fontSize:22},onClick:()=>{document.fullscreenElement?T():(e.handleToggleFullSize(),ip())}}),(0,d.Y)(nx.R2,{popupRender:()=>(0,d.Y)(ty.W1,{onClick:Y,"data-test":`slice_${E.slice_id}-menu`,id:`slice_${E.slice_id}-menu`,selectable:!1,items:er}),overlayStyle:et,trigger:["click"],placement:"bottomRight",open:l,onOpenChange:e=>a(e),children:(0,d.Y)(z.$n,{id:`slice_${E.slice_id}-controls`,buttonStyle:"link","aria-label":(0,p.t)("More Options"),"aria-haspopup":"true",css:e=>(0,v.AH)`
            width: ${8*e.sizeUnit}px;
            height: ${8*e.sizeUnit}px;
            padding: 0;
            margin-right: -${2*e.sizeUnit}px;
          `,children:(0,d.Y)(iu,{})})}),(0,d.Y)(nD.A,{formData:e.formData,initialFilters:[],onHideModal:()=>{o(!1)},chartId:E.slice_id,showModal:i,dataset:O}),w&&c,P&&(0,d.Y)(v.mL,{styles:[(0,v.AH)`
  [data-test='dashboard-component-chart-holder']:fullscreen {
    background-color: ${S.colorBgBase};
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: ${4*S.sizeUnit}px;
    overflow: visible;
    position: relative;
    pointer-events: auto;
    z-index: ${S.zIndexPopupBase};
    opacity: 1;
    visibility: visible;

    /* Ensure children take up available space */
    .dashboard-chart,
    .chart-container,
    .slice_container,
    .chart-slice {
      flex: 1 1 auto;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: visible;
    }

    /* Portaled components inside the fullscreen layer */
    .ant-dropdown,
    .ant-tooltip,
    .ant-modal-root,
    .ant-select-dropdown,
    .ant-popover {
      z-index: ${S.zIndexPopupBase+1};
      pointer-events: auto;
    }
  }

  /* Interaction and Header fixes */
  [data-test='dashboard-component-chart-holder']:fullscreen * {
    pointer-events: auto;
  }

  [data-test='dashboard-component-chart-holder']:fullscreen
    [data-test='slice-header'] {
    z-index: ${S.zIndexPopupBase};
    position: relative;
  }
`]})]})};var ig=r(51543),iv=r(36732),ib=r(43907),iy=r(42178);g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: flex;
    color: ${e.colorBgBase};
    background: ${e.colorText};
    border-radius: 1em;
    padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
    font-size: ${e.fontSize}px;
    font-weight: ${e.fontWeightStrong};
    min-width: 1em;
    min-height: 1em;
    line-height: 1em;
    vertical-align: middle;
    white-space: nowrap;

    svg {
      position: relative;
      color: ${e.colorBgBase};
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      cursor: pointer;
      background: ${e.colorText};
    }

    &.has-cross-filters {
      background: ${e.colorPrimary};
      &:hover {
        background: ${e.colorPrimaryText};
      }
    }
  `}
`;let ix=g.styled.span`
  ${({theme:e})=>(0,v.AH)`
    font-weight: ${e.fontWeightStrong};
  `}
`,iS=g.styled.span`
  ${({theme:e})=>(0,v.AH)`
    padding-right: ${e.sizeUnit}px;
    font-style: italic;
    & > * {
      margin-right: ${e.sizeUnit}px;
    }
  `}
`,iw=g.styled.button`
  ${({theme:e})=>(0,v.AH)`
    cursor: pointer;
    display: flex;
    text-align: left;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    width: 100%;
    color: inherit;

    &::-moz-focus-inner {
      border: 0;
    }

    & i svg {
      opacity: 35%;
      margin-right: ${e.sizeUnit}px;
      transition: opacity ease-in-out ${e.motionDurationMid};
    }

    &:hover i svg,
    &:focus-visible i svg {
      opacity: 1;
    }
  `}
`,iC=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    max-height: 60vh;
    margin-top: ${e.sizeUnit}px;
    &:not(:last-child) {
      padding-bottom: ${3*e.sizeUnit}px;
    }
  `}
`,ik=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    min-width: 200px;
    max-width: 300px;
    overflow-x: hidden;

    color: ${e.colorText};

    /*
     * The container is a non-interactive wrapper that receives focus
     * programmatically only to capture keyboard navigation events. Suppress the
     * default browser focus outline so the popover does not show a blue ring.
     * Focusable items inside (FilterItem) provide their own :focus-visible
     * styles for keyboard accessibility.
     */
    &:focus,
    &:focus-visible {
      outline: none;
    }
  `}
`,i$=g.styled.span`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
`,iD=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    width: 100%;
    height: 1px;
    background-color: ${e.colorBorderSecondary};
    margin: ${4*e.sizeUnit}px 0;
  `}
`;var iI=r(72624);let iO=(0,h.forwardRef)(({indicator:{column:e,name:t,value:r,path:n=[]},onClick:i},o)=>{let l=(0,iI.Pz)(r);return(0,d.FD)(iw,{ref:o,onClick:i?()=>i([...n,`LABEL-${e}`]):void 0,tabIndex:-1,children:[i&&(0,d.Y)("i",{children:(0,d.Y)(A.F.SearchOutlined,{iconSize:"m",css:(0,v.AH)`
                span {
                  vertical-align: 0;
                }
              `})}),(0,d.FD)("div",{children:[(0,d.FD)(iS,{children:[t,l?": ":""]}),(0,d.Y)(i$,{children:l})]})]})}),iT=({appliedCrossFilterIndicators:e=[],appliedIndicators:t=[],onHighlightFilterSource:r,children:n,popoverVisible:i,popoverContentRef:o,popoverTriggerRef:l,setPopoverVisible:a})=>{let s=(0,b.d4)(e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs}),c=(0,h.useRef)([]);(0,h.useEffect)(()=>{i&&window.addEventListener("resize",()=>a(!1),{once:!0})},[i]),(0,h.useEffect)(()=>{a(!1)},[s]);let u=e=>`${e.column} - ${e.name}`,f=(0,g.useTheme)(),m=(0,d.Y)(ik,{ref:o,tabIndex:-1,onMouseLeave:()=>a(!1),onKeyDown:e=>{switch(e.key){case"Escape":case"Enter":setTimeout(()=>{var e;null==l||null==(e=l.current)||e.focus(),a(!1)});break;case"ArrowDown":case"ArrowUp":{var t;e.preventDefault();let r=c.current.findIndex(e=>e===document.activeElement),n=c.current.length-1,i=0;"ArrowDown"===e.key?i=r>=n?0:r+1:"ArrowUp"===e.key&&(i=r<=0?n:r-1),null==(t=c.current[i])||t.focus();break}case"Tab":e.preventDefault()}},role:"menu",children:(0,d.FD)("div",{children:[e.length?(0,d.FD)("div",{children:[(0,d.Y)(ix,{children:(0,p.t)("Applied cross-filters (%d)",e.length)}),(0,d.Y)(iC,{children:e.map(e=>(0,d.Y)(iO,{ref:e=>c.current.push(e),indicator:e,onClick:r},u(e)))})]}):null,e.length&&t.length?(0,d.Y)(iD,{}):null,t.length?(0,d.FD)("div",{children:[(0,d.Y)(ix,{children:(0,p.t)("Applied filters (%d)",t.length)}),(0,d.Y)(iC,{children:(0,d.Y)(iy.B,{dataSource:t,renderItem:e=>(0,d.Y)(iy.B.Item,{children:(0,d.Y)(iO,{ref:e=>c.current.push(e),indicator:e,onClick:r},u(e))})})})]}):null]})});return(0,d.Y)(nr.A,{color:f.colorBgElevated,content:m,open:i,onOpenChange:e=>{a(e)},placement:"bottomRight",trigger:["hover"],"data-test":"filter-status-popover",children:n})};var iz=r(25365),iY=r(65802),iF=r(49977),iA=r(7979),i_=r(78418),iE=r(32924);function iP(){return(iP=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var iM=((o={}).Unset="UNSET",o.Applied="APPLIED",o.Incompatible="INCOMPATIBLE",o.CrossFilterApplied="CROSS_FILTER_APPLIED",o);let iR=new Set(Object.values(i_.II)),ij=e=>{var t;if((null==e?void 0:e.label)&&!(null==e||null==(t=e.label)?void 0:t.includes(void 0)))return e.label;if(null==e?void 0:e.value){let t=(0,iz.A)(e.value).filter(e=>null!=e&&""!==e);return 0===t.length?null:t.join(", ")}return null},iU=(e,t)=>(0,iz.A)(null==e?void 0:e.queriesResponse).flatMap(e=>("applied_filters"===t?null==e?void 0:e.applied_filters:null==e?void 0:e.rejected_filters)||[]),iN=e=>new Set(iU(e,"rejected_filters").map(e=>(0,iA.A)(e.column))),iH=(e,t,r)=>{var n,i,o,l,a;let s=null==t?void 0:t.filterState,d=null==t||null==(i=t.extraFormData)?void 0:i.filters,c=ij(s),u=null==s?void 0:s.filters,h=null==s?void 0:s.customColumnLabel,p=(null==d||null==(o=d[0])?void 0:o.col)||u&&Object.keys(u)[0],f=r.find(t=>{var r;return(null==t||null==(r=t.meta)?void 0:r.chartId)===e});return{column:p,name:(null==f||null==(l=f.meta)?void 0:l.sliceNameOverride)||(null==f||null==(a=f.meta)?void 0:a.sliceName)||"",path:[...null!=(n=null==f?void 0:f.parents)?n:[],(null==f?void 0:f.id)||""],value:c,customColumnLabel:h}},iL={},iV={},iB=({label:e,column:t,type:r=iF.p_.NativeFilters,rejectedColumns:n,appliedColumns:i})=>{let o=null!==e,l=r===iF.p_.CrossFilters?"CROSS_FILTER_APPLIED":"APPLIED";return!t&&o?l:t&&(null==n?void 0:n.has(t))?"INCOMPATIBLE":t&&(null==i?void 0:i.has(t))&&o?l:"UNSET"},iq={},iW={},iG={},iK=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    margin-right: ${e.sizeUnit}px;
    padding-left: ${2*e.sizeUnit}px;
    padding-right: ${2*e.sizeUnit}px;
    background: ${e.colorBgContainer};
    border-radius: 4px;
    height: 100%;
    .anticon {
      vertical-align: middle;
      color: ${e.colorIcon};
      &:hover {
        color: ${e.colorIconHover};
      }
    }

    .incompatible-count {
      font-size: ${e.fontSizeSM}px;
    }
    &:focus-visible {
      outline: 2px solid ${e.colorPrimary};
    }
  `}
`,iQ=(0,g.styled)(ib.E)`
  ${({theme:e})=>`
    margin-left: ${2*e.sizeUnit}px;
  `}
`,iX=[],iZ=(0,h.memo)(({chartId:e})=>{let t=(0,b.wA)(),r=(0,rj.A6)(),n=(0,b.d4)(e=>e.datasources),i=(0,b.d4)(e=>e.dashboardFilters),o=(0,b.d4)(e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters}),l=(0,b.d4)(e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration}),a=(0,b.d4)(t=>t.charts[e]),s=n_(),c=(0,b.d4)(e=>e.dataMask),[f,m]=(0,h.useState)(iX),[g,v]=(0,h.useState)(iX),[y,x]=(0,h.useState)(!1),S=(0,h.useRef)(null),w=(0,h.useRef)(null),C=(0,h.useCallback)(e=>{t((0,tu.I)(e))},[t]),k=(0,iv.Z)(a),$=null==k?void 0:k.chartStatus,D=(0,iv.Z)(i),I=(0,iv.Z)(n),O=(null==a?void 0:a.chartStatus)&&["rendered","success"].includes(a.chartStatus);(0,h.useEffect)(()=>{y&&setTimeout(()=>{var e;null==S||null==(e=S.current)||e.focus({preventScroll:!0})})},[y]),(0,h.useEffect)(()=>{if(O||!(g.length>0)||r){if("success"!==$){var t,o,l,s,d,c,u,h;((null==a||null==(o=a.queriesResponse)||null==(t=o[0])?void 0:t.rejected_filters)!==(null==k||null==(s=k.queriesResponse)||null==(l=s[0])?void 0:l.rejected_filters)||(null==a||null==(c=a.queriesResponse)||null==(d=c[0])?void 0:d.applied_filters)!==(null==k||null==(h=k.queriesResponse)||null==(u=h[0])?void 0:u.applied_filters)||i!==D||n!==I)&&v(((e,t,r,n)=>{let i=new Set(iU(n,"applied_filters").map(e=>e.column)),o=iN(n),l=Object.values(t).filter(t=>t.chartId!==e),a=Object.entries(r).filter(([e])=>l.find(t=>t.datasourceId===e)).map(([,e])=>e),s=iV[e];if(iL[e]&&(0,iE.r$)(s.appliedColumns,i)&&(0,iE.r$)(s.rejectedColumns,o)&&(0,iE.r$)(s.matchingFilters,l)&&(0,iE.r$)(s.matchingDatasources,a))return iL[e];let d=l.reduce((t,n)=>{var l;return t.concat((l=r[n.datasourceId]||{},Object.keys(n.columns).filter(t=>(0,ra._i)({filterScope:n.scopes[t]}).includes(e)).map(e=>({column:e,name:n.labels[e]||e,value:((e,t,r)=>{let n=t.columns[e],i=Array.isArray(n)?n:[n];if(null==n||t.isDateFilter&&n===iY.WC||0===i.length)return[];if(t.isDateFilter&&iR.has(e)){let t=((e===i_.II.time_grain_sqla?r.time_grain_sqla:r.granularity)||[]).reduce((e,[t,r])=>iP({},e,{[t]:r}),{});return i.map(e=>t[e]||e)}return i})(e,n,l),status:i.has(e)&&n.columns[e]?"APPLIED":o.has(e)?"INCOMPATIBLE":"UNSET",path:n.directPathToFilter}))))},[]);return d.sort((e,t)=>e.name.localeCompare(t.name)),iL[e]=d,iV[e]={appliedColumns:i,rejectedColumns:o,matchingFilters:l,matchingDatasources:a},d})(e,i,n,a))}}else v(iX)},[a,e,i,g.length,n,r,null==k?void 0:k.queriesResponse,$,D,I,O]);let T=(0,iv.Z)(o),z=(0,iv.Z)(s),Y=(0,iv.Z)(c),F=(0,iv.Z)(l);(0,h.useEffect)(()=>{var t,n,i,d,u,h,p,g;let v=!O&&f.length>0&&!r,b=(null==a||null==(n=a.queriesResponse)||null==(t=n[0])?void 0:t.rejected_filters)!==(null==k||null==(d=k.queriesResponse)||null==(i=d[0])?void 0:i.rejected_filters)||(null==a||null==(h=a.queriesResponse)||null==(u=h[0])?void 0:u.applied_filters)!==(null==k||null==(g=k.queriesResponse)||null==(p=g[0])?void 0:p.applied_filters)||o!==T||s!==z||c!==Y||F!==l;v?m(iX):O&&(b||0===f.length)&&m(((e,t,r,n,i,o=iq)=>{var l;let a=((e,t,r,n)=>{let i=iU(e,"applied_filters");if(i.length>0)return new Set(i.map(e=>e.column));if(t&&r&&n){let e=new Set;return Object.values(t).forEach(t=>{var i,o,l,a,s;t.type===iF.EH.NativeFilter&&(null==(i=t.chartsInScope)?void 0:i.includes(n))&&null!==ij(null==(o=r[t.id])?void 0:o.filterState)&&(null==(s=t.targets)||null==(a=s[0])||null==(l=a.column)?void 0:l.name)&&e.add(t.targets[0].column.name)}),e}return new Set})(n,e,t,r),s=iN(n),d=iG[r];if((null==(l=iW[r])?void 0:l.length)&&(0,iE.r$)(d.appliedColumns,a)&&(0,iE.r$)(d.rejectedColumns,s)&&(0,iE.r$)(d.nativeFilters,e)&&(0,iE.r$)(d.chartLayoutItems,i)&&(0,iE.r$)(d.chartConfiguration,o)&&(0,iE.r$)(d.dataMask,t))return iW[r];let c=e&&Object.values(e).filter(e=>{var t;return e.type===iF.EH.NativeFilter&&(null==(t=e.chartsInScope)?void 0:t.includes(r))}).map(e=>{var r,n,i,o;let l=null==(i=e.targets)||null==(n=i[0])||null==(r=n.column)?void 0:r.name,d=ij(null==(o=t[e.id])?void 0:o.filterState);return{column:l,name:e.name,path:[e.id],status:iB({label:d,column:l,rejectedColumns:s,appliedColumns:a}),value:d}}),u=((e,t,r,n=iq,i,o,l=!1)=>Object.values(n).filter(e=>{var r,n;let i=null==(n=e.crossFilters)||null==(r=n.chartsInScope)?void 0:r.includes(t);return!l&&!!i||!!l&&!i}).map(t=>{let n=iH(Number(t.id),e[t.id],r),l=iB({label:n.value,column:n.column?(0,iA.A)(n.column):void 0,type:iF.p_.CrossFilters,rejectedColumns:o,appliedColumns:i});return iP({},n,{status:l})}).filter(e=>"CROSS_FILTER_APPLIED"===e.status))(t,r,i,o,a,s).concat(c);return iW[r]=u,iG[r]={nativeFilters:e,chartLayoutItems:i,chartConfiguration:o,dataMask:t,appliedColumns:a,rejectedColumns:s},u})(o,c,e,a,s,l))},[a,e,l,c,r,o,f.length,null==k?void 0:k.queriesResponse,F,$,Y,T,O,s,z]);let _=(0,h.useMemo)(()=>{var e;let t;return(0,ig.A)((e=[...g,...f],t=[iM.Applied,iM.Unset,iM.Incompatible],e.sort((e,r)=>t.indexOf(e.status)-t.indexOf(r.status))),(e,t)=>e.column===t.column&&e.name===t.name&&(e.status!==iM.Applied||t.status!==iM.Applied))},[g,f]),E=(0,h.useMemo)(()=>_.filter(e=>e.status===iM.CrossFilterApplied),[_]),P=(0,h.useMemo)(()=>_.filter(e=>e.status===iM.Applied),[_]),M=P.length+E.length;return E.length||P.length?(0,d.Y)(iT,{appliedCrossFilterIndicators:E,appliedIndicators:P,onHighlightFilterSource:C,setPopoverVisible:x,popoverVisible:y,popoverContentRef:S,popoverTriggerRef:w,children:(0,d.FD)(iK,{"aria-label":(0,p.t)("Applied filters (%s)",M),"aria-haspopup":"true",role:"button",ref:w,className:u()("filter-counts",!!E.length&&"has-cross-filters"),tabIndex:0,onKeyDown:e=>{"Enter"===e.key&&x(!0)},children:[(0,d.Y)(A.F.FilterOutlined,{iconSize:"m"}),(0,d.Y)(iQ,{"data-test":"applied-filter-count",className:"applied-count",count:M,size:"small",showZero:!0})]})}):null});var iJ=r(60753);let i0=[],i1=[],i4=[],i2=(0,nF.Mz)(e=>{var t,r;return null==(r=e.dashboardInfo)||null==(t=r.metadata)?void 0:t.native_filter_configuration},e=>e?e.filter(e=>"CHART_CUSTOMIZATION"!==e.type&&"CHART_CUSTOMIZATION_DIVIDER"!==e.type):i4);function i6(){return(0,b.d4)(i2)}let i3=(0,nF.Mz)(e=>{var t;return(null==(t=e.nativeFilters)?void 0:t.filters)||{}},e=>Object.values(e).filter(e=>(null==e?void 0:e.id)!=null&&(0,nX.xG)(e.id)));function i5(){return(0,b.d4)(i3)}let i7=(0,nF.Mz)(e=>{var t;return null==(t=e.dashboardLayout)?void 0:t.present},e=>new Set(Object.values(e).filter(e=>{var t;return"CHART"===e.type&&(null==(t=e.meta)?void 0:t.chartId)}).map(e=>e.meta.chartId))),i8=(0,nF.Mz)([e=>{var t,r;return(null==(r=e.dashboardInfo)||null==(t=r.metadata)?void 0:t.chart_customization_config)||i0},i7],(e,t)=>{let r=e.filter(Boolean);return(r.some(e=>(0,iJ.CY)(e))?(0,iJ.Go)(r):r).filter(e=>!e.chartsInScope||0===e.chartsInScope.length||e.chartsInScope.some(e=>t.has(e)))});function i9(){return(0,b.d4)(i8)}function oe(){return(0,b.d4)(e=>{var t;return null==(t=e.dashboardLayout)?void 0:t.present})}function ot(){let e=oe();return(0,h.useMemo)(()=>!!e&&Object.values(e).some(e=>"TAB"===e.type),[e])}function or(){let e=(0,b.d4)(e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs}),t=oe();return(0,h.useMemo)(()=>{var r,n,i,o,l;let a=null!=e?e:[],s=a.length?a:i1;if(!t)return s;let d=t[P.wv];if(!(null==d||null==(n=d.children)?void 0:n.length))return s;let c=t[d.children[0]];if((null==c?void 0:c.type)!=="TABS"||!(null==(i=c.children)?void 0:i.length))return s;let u=new Set(a),h=[],p=[null!=(r=c.children.find(e=>u.has(e)))?r:c.children[0]];for(;p.length>0;){let e=p.shift();h.push(e);let r=t[e];if(null==r?void 0:r.children)for(let e of r.children){let r=t[e];(null==r?void 0:r.type)==="TABS"&&(null==(l=r.children)?void 0:l.length)&&p.push(null!=(o=r.children.find(e=>u.has(e)))?o:r.children[0])}}let f=new Set(h);for(let e of a)f.has(e)||h.push(e);return h},[e,t])}function on(){let e=oe(),t=(0,h.useMemo)(()=>e?Object.values(e).filter(e=>"CHART"===e.type):[],[e]);return(0,h.useCallback)(r=>{var n;let i=t.find(e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===r});return null==i||null==(n=i.parents)?void 0:n.filter(t=>{var r;return(null==e||null==(r=e[t])?void 0:r.type)==="TAB"})},[e,t])}function oi(){let e=or(),t=on();return(0,h.useCallback)(r=>{var n,i,o,l;if(r.type===iF.EH.Divider)return!0;let a=Array.isArray(r.chartsInScope)&&r.chartsInScope.length>0,s=!1;if(a&&(s=r.chartsInScope.some(r=>{let n=t(r);return!n||n.every(t=>e.includes(t))})),(0,iF.Qj)(r)){let t=null==(l=r.tabsInScope)?void 0:l.some(t=>e.includes(t));return s||t}return a?s:null!=(n=null==(o=r.scope)||null==(i=o.rootPath)?void 0:i.some(t=>e.includes(t)))&&n},[t,e])}function oo(e){let t=ot(),r=oi();return(0,h.useMemo)(()=>{let n=[],i=[];return t?e.forEach(e=>{r(e)?n.push(e):i.push(e)}):n=e,[n,i]},[e,t,r])}var ol=r(75198);let oa=(0,g.styled)(Y.Tag)`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: ${2*e.sizeUnit}px;
    margin-right: ${e.sizeUnit}px;
    padding: ${.5*e.sizeUnit}px ${e.sizeUnit}px;
    background: ${e.colorBgContainer};
    border: 1px solid ${e.colorBorder};
    border-radius: ${e.borderRadius}px;
    height: auto;
    min-height: 20px;

    .anticon {
      vertical-align: middle;
      color: ${e.colorTextSecondary};
      margin-right: ${.5*e.sizeUnit}px;
      font-size: 12px;
      &:hover {
        color: ${e.colorText};
      }
    }

    &:hover {
      background: ${e.colorBgTextHover};
    }

    &:focus-visible {
      outline: 2px solid ${e.colorPrimary};
    }
  `}
`,os=(0,g.styled)(ib.E)`
  ${({theme:e})=>`
    margin-left: ${.5*e.sizeUnit}px;
    &>sup.ant-badge-count {
      padding: 0 ${.5*e.sizeUnit}px;
      min-width: ${3*e.sizeUnit}px;
      height: ${3*e.sizeUnit}px;
      line-height: 1.2;
      font-weight: ${e.fontWeightStrong};
      font-size: ${e.fontSizeSM-2}px;
      box-shadow: none;
    }
  `}
`,od=g.styled.div`
  ${({theme:e})=>`
    min-width: 200px;
    max-width: 300px;
    overflow-x: hidden;
    color: ${e.colorText};
    font-size: ${e.fontSizeSM}px;
  `}
`,oc=g.styled.span`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
    font-size: ${e.fontSizeSM}px;
  `}
`,ou=g.styled.div`
  ${({theme:e})=>`
    margin-top: ${e.sizeUnit}px;
    &:not(:last-child) {
      padding-bottom: ${3*e.sizeUnit}px;
    }
  `}
`,oh=g.styled.div`
  ${({theme:e})=>`
    font-size: ${e.fontSizeSM}px;
    margin-bottom: ${e.sizeUnit}px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`,op=g.styled.span`
  ${({theme:e})=>`
    padding-right: ${e.sizeUnit}px;
    font-style: italic;
  `}
`,of=g.styled.span`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
`,om=(0,h.memo)(({chartId:e})=>{let[t,r]=(0,h.useState)(!1),n=(0,h.useRef)(null),i=(0,g.useTheme)(),o=i5(),l=(0,b.d4)(e=>e.dataMask),a=(0,h.useMemo)(()=>(0,nF.Mz)(t=>{var r;return null==(r=t.charts[e])?void 0:r.latestQueryFormData},e=>(null==e?void 0:e.datasource)?String(e.datasource).split("__")[0]:null),[e]),s=(0,h.useMemo)(()=>(0,nF.Mz)(t=>{var r;return null==(r=t.charts[e])?void 0:r.latestQueryFormData},e=>e),[e]),c=(0,b.d4)(a),u=(0,b.d4)(s),f=null==u?void 0:u.viz_type,m=(0,h.useMemo)(()=>c?o.filter(t=>{var r,n,i,o;if(t.removed||t.chartsInScope&&!t.chartsInScope.includes(e))return!1;let a=(null==(i=t.targets)||null==(n=i[0])?void 0:n.datasetId)!==void 0?t.targets[0].datasetId:(null==(o=t.customization)?void 0:o.dataset)!==void 0?t.customization.dataset:null;if(!a)return!1;let s=c===String(a),d=null!==ij(null==(r=l[t.id])?void 0:r.filterState);return s&&d}):[],[o,c,e,l]),v=(0,h.useMemo)(()=>!f||0===m.length||(0,ol.lW)(f)?[]:m.filter(e=>{var t;let r=null==(t=l[e.id])?void 0:t.filterState;return null!=(null==r?void 0:r.value)}),[m,f,l]),y=v.length;if(0===y)return null;let x=(0,d.Y)(od,{children:(0,d.FD)("div",{children:[(0,d.Y)(oc,{children:(0,p.t)("Display controls (%d)",v.length)}),(0,d.Y)(ou,{children:v.map(e=>{var t;let r=null==(t=l[e.id])?void 0:t.filterState,n=(null==r?void 0:r.label)||(null==r?void 0:r.value);return(0,d.Y)(oh,{children:(0,d.Y)("div",{children:e.name&&n?(0,d.FD)(d.FK,{children:[(0,d.FD)(op,{children:[e.name,": "]}),(0,d.Y)(of,{children:(0,iI.Pz)(n)})]}):e.name||(0,p.t)("None")})},e.id)})})]})});return(0,d.Y)(H.m,{title:x,open:t,onOpenChange:r,placement:"bottom",styles:{root:{color:i.colorText,backgroundColor:i.colorBgContainer,border:`1px solid ${i.colorBorder}`,boxShadow:i.boxShadow},container:{color:i.colorText,backgroundColor:i.colorBgContainer}},children:(0,d.FD)(oa,{ref:n,"aria-label":(0,p.t)("Display controls (%s)",y),role:"button",tabIndex:0,children:[(0,d.Y)(A.F.GroupOutlined,{iconSize:"m"}),(0,d.Y)(os,{"data-test":"applied-customizations-count",count:y,showZero:!1})]})})});var og=r(59554),ov=r(96252),ob=r(71519);let oy=(0,e_.a)(),ox=(0,p.t)("Annotation layers are still loading."),oS=(0,p.t)("One or more annotation layers failed loading."),ow=(0,g.styled)(A.F.ApartmentOutlined)`
  ${({theme:e})=>`
    cursor: default;
    color: ${e.colorPrimary};
    line-height: 1.8;
  `}
`,oC=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    font-size: ${e.fontSizeLG}px;
    font-weight: ${e.fontWeightStrong};
    margin-bottom: ${e.sizeUnit}px;
    display: flex;
    max-width: 100%;
    align-items: flex-start;
    min-height: 0;

    & > .header-title {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(100% - ${4*e.sizeUnit}px);
      flex-grow: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      & > span.ant-tooltip-open {
        display: inline;
      }
    }

    & > .header-controls {
      display: flex;
      align-items: center;
      height: 24px;
    }

    .dropdown.btn-group {
      pointer-events: none;
      vertical-align: top;
      & > * {
        pointer-events: auto;
      }
    }

    .dropdown-toggle.btn.btn-default {
      background: none;
      border: none;
      box-shadow: none;
    }

    .dropdown-menu.dropdown-menu-right {
      top: ${5*e.sizeUnit}px;
    }

    .divider {
      margin: ${e.sizeUnit}px 0;
    }

    .refresh-tooltip {
      display: block;
      height: ${4*e.sizeUnit}px;
      margin: ${e.sizeUnit}px 0;
      color: ${e.colorTextLabel};
    }
  `}
`,ok=(0,h.forwardRef)(({forceRefresh:e=()=>({}),updateSliceName:t=()=>({}),toggleExpandSlice:r=()=>({}),logExploreChart:n=()=>({}),logEvent:i,exportCSV:o=()=>({}),exportXLSX:l=()=>({}),editMode:a=!1,annotationQuery:s={},annotationError:c={},cachedDttm:u=null,queriedDttm:f=null,updatedDttm:m=null,isCached:y=[],isExpanded:x=!1,sliceName:S="",supersetCanExplore:w=!1,supersetCanShare:C=!1,supersetCanDownload:k=!1,exportPivotCSV:$,exportFullCSV:D,exportFullXLSX:I,slice:O,componentId:T,dashboardId:z,addSuccessToast:Y,addDangerToast:F,handleToggleFullSize:_,isFullSize:E,chartStatus:P,formData:M,width:R,height:j,exportPivotExcel:U=()=>({}),chartHolderRef:N,ownState:L},V)=>{var B,q,W,G,K;let Q=oy.get("dashboard.slice.header"),X=(0,nf.Q1)(),Z=!(0,nm.n)()||X.showRowLimitWarning,J=(0,h.useContext)(og.DashboardPageIdContext),[ee,et]=(0,h.useState)(null),er=(0,h.useRef)(null),en=(0,b.d4)(e=>{var t,r;return null==(r=e.dataMask[null==O?void 0:O.slice_id])||null==(t=r.filterState)?void 0:t.value}),ei=(0,b.d4)(({dashboardInfo:e})=>e.crossFiltersEnabled),eo=(0,b.d4)(e=>{var t;return null==(t=e.charts[O.slice_id].queriesResponse)?void 0:t[0]}),el=(0,b.d4)(e=>{var t;return null==(t=e.charts[O.slice_id].queriesResponse)?void 0:t[1]}),ea=(0,g.useTheme)(),es=Number(null!=(B=M.row_limit)?B:0),ed=M.viz_type===na.Y.Table||M.viz_type===na.Y.TableAgGrid?null==el||null==(K=el.data)||null==(G=K[0])?void 0:G.rowcount:void 0,ec=null!=ed?ed:Number(null!=(q=null!=(W=null==eo?void 0:eo.sql_rowcount)?W:null==eo?void 0:eo.rowcount)?q:0),eu=!a&&w;(0,h.useEffect)(()=>{let e=er.current;eu?et(nw(S)):e&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight)?et(null!=S?S:null):et(null)},[S,R,j,eu]);let eh=`/explore/?dashboard_page_id=${J}&slice_id=${O.slice_id}`;return(0,d.FD)(oC,{"data-test":"slice-header",ref:V,children:[(0,d.FD)("div",{className:"header-title",ref:er,children:[(0,d.Y)(H.m,{title:ee,children:(0,d.Y)("div",{children:(0,d.Y)(ng.z,{title:S||(a?"---":""),canEdit:a,onSaveTitle:t,showTooltip:!1,renderLink:eu&&eh?e=>(0,d.Y)(ob.N_,{to:eh,css:e=>(0,v.AH)`
          color: ${e.colorText};
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
          display: inline-block;
        `,children:e}):void 0})})}),!!Object.values(s).length&&(0,d.Y)(H.m,{id:"annotations-loading-tooltip",placement:"top",title:ox,children:(0,d.Y)(A.F.ReloadOutlined,{className:"warning","aria-label":ox})}),!!Object.values(c).length&&(0,d.Y)(H.m,{id:"annotation-errors-tooltip",placement:"top",title:oS,children:(0,d.Y)(A.F.ExclamationCircleOutlined,{className:"danger","aria-label":oS})})]}),(0,d.Y)("div",{className:"header-controls",children:!a&&(0,d.FD)(d.FK,{children:[Q&&(0,d.Y)(Q,{sliceId:O.slice_id,dashboardId:z}),en&&(0,d.Y)(H.m,{placement:"top",title:(0,p.t)("This chart applies cross-filters to charts whose datasets contain columns with the same name."),children:(0,d.Y)(ow,{iconSize:"m"})}),!X.hideChartControls&&(0,d.Y)(om,{chartId:O.slice_id}),!X.hideChartControls&&(0,d.Y)(iZ,{chartId:O.slice_id}),Z&&ec>=es&&es>0&&(0,d.Y)(ov.A,{rowcount:ec,limit:es,label:(0,d.Y)(A.F.WarningOutlined,{iconSize:"l",iconColor:ea.colorWarning,css:e=>(0,v.AH)`
                        padding: ${e.sizeUnit}px;
                      `})}),!X.hideChartControls&&(0,d.Y)(im,{slice:O,isCached:y,isExpanded:x,cachedDttm:u,queriedDttm:f,updatedDttm:m,toggleExpandSlice:r,forceRefresh:e,logExploreChart:n,logEvent:i,exportCSV:o,exportPivotCSV:$,exportFullCSV:D,exportXLSX:l,exportFullXLSX:I,supersetCanExplore:w,supersetCanShare:C,supersetCanDownload:k,componentId:T,dashboardId:z,addSuccessToast:Y,addDangerToast:F,handleToggleFullSize:_,isFullSize:E,isDescriptionExpanded:x,chartStatus:P,formData:M,exploreUrl:eh,crossFiltersEnabled:ei,exportPivotExcel:U,chartHolderRef:N,ownState:L})]})})]})});function o$({height:e}){return(0,d.Y)("div",{className:"missing-chart-container",style:{height:e+20},children:(0,d.FD)("div",{className:"missing-chart-body",children:[(0,p.t)("There is no chart definition associated with this component, could it have been deleted?"),(0,d.Y)("br",{}),(0,d.Y)("br",{}),(0,p.t)("Delete this container and save to remove this message.")]})})}var oD=r(61581),oI=r(40088);function oO(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function oT(){return(oT=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let oz=g.styled.div`
  overflow: hidden;
  position: relative;

  &.dashboard-chart--overflowable {
    overflow: visible;
  }
`,oY=g.styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,oF=g.styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`,oA={},o_=()=>{},oE=(e,t,r)=>(0,tO.MU)(r)?(null==e?void 0:e.state)||t.table_state||t.pivot_table_state:null,oP=(0,h.memo)(e=>{var t,r,n,i,o,l,a,s,c,f;let m=(0,b.wA)(),g=(0,h.useRef)(null),v=(0,h.useRef)(null),y=(0,h.useMemo)(()=>(0,k.zH)({addSuccessToast:td.WR,addDangerToast:td.iB,toggleExpandSlice:tu.jX,changeFilter:tZ.$u,setFocusedFilterField:tu.ib,unsetFocusedFilterField:tu.ZX,refreshChart:oD.Gg,logEvent:th.$},m),[m]),x=(0,b.d4)(t=>t.charts[e.id]),S=null==x?void 0:x.queriesResponse,w=null==x?void 0:x.chartUpdateEndTime,C=null==x?void 0:x.chartStatus,$=null==x?void 0:x.annotationQuery,D=(0,b.d4)(t=>t.sliceEntities.slices[e.id]||oA),I=D.viz_type,O=D.slice_id,T=D.slice_name,z=(0,b.d4)(e=>e.dashboardState.editMode),Y=(0,b.d4)(t=>{var r;return!!(null==(r=t.dashboardState.expandedSlices)?void 0:r[e.id])}),F=(0,b.d4)(e=>!!e.dashboardInfo.superset_can_explore),A=(0,b.d4)(e=>!!e.dashboardInfo.superset_can_share),_=(0,b.d4)(e=>!!e.dashboardInfo.superset_can_download),E=(0,b.d4)(e=>e.dashboardInfo.common.conf.SUPERSET_WEBSERVER_TIMEOUT),P=(0,b.d4)(e=>!!e.dashboardInfo.crossFiltersEnabled),R=(0,b.d4)(e=>e.dashboardInfo.common.conf.SQL_MAX_ROW),j=(0,b.d4)(e=>e.dashboardInfo.common.conf.CSV_STREAMING_ROW_THRESHOLD||1e5),U=(0,b.d4)(e=>{var t;return(null==x||null==(t=x.form_data)?void 0:t.datasource)&&e.datasources[x.form_data.datasource]||nY.As}),N=(0,b.d4)(e=>e.dashboardInfo),H=(0,b.d4)(e=>{var t,r,n;return null!=(t=null==(n=e.dashboardInfo)||null==(r=n.metadata)?void 0:r.show_chart_timestamps)&&t}),L=(0,rj.A6)(),V=(0,h.useMemo)(()=>(null==S?void 0:S.map(e=>e.is_cached))||[],[S]),[B,q]=(0,h.useState)(0),[W,G]=(0,h.useState)(e.height),[K,Q]=(0,h.useState)(e.width),[X,Z]=(0,h.useState)(!1),{progress:J,startExport:ee,cancelExport:et,resetExport:er,retryExport:en}=(0,nu.K)({onComplete:()=>{},onError:()=>{y.addDangerToast((0,p.t)("Export failed - please try again"))}}),ei=(0,h.useCallback)(()=>{y.addSuccessToast((0,p.t)("CSV file downloaded successfully"))},[y]),eo=(0,h.useCallback)((0,M.A)(()=>{let{width:t,height:r}=e;G(r),Q(t)},500),[e.width,e.height]),el=null==x||null==(l=x.form_data)?void 0:l.color_scheme,ea=(0,h.useCallback)((e,t,r=!0,n=!0)=>{y.logEvent(eE.c1,{id:null==x?void 0:x.id,columns:null!==t?[e]:[]}),y.changeFilter(null==x?void 0:x.id,{[e]:t},r)},[y.logEvent,y.changeFilter,null==x?void 0:x.id]),es=(0,h.useCallback)(t=>{(0,tO.MU)(I)&&m((0,tu.jx)(e.id,I,t))},[m,e.id,I]);(0,h.useLayoutEffect)(()=>{Y&&g.current?q(g.current.offsetHeight):q(0)},[Y]),(0,h.useEffect)(()=>()=>{eo.cancel()},[eo]),(0,h.useEffect)(()=>{eo()},[eo,e.isFullSize]);let ed=(0,h.useCallback)(()=>{if(v.current){let e=parseInt(getComputedStyle(v.current).getPropertyValue("margin-bottom"),10)||0;return(parseInt(getComputedStyle(v.current).getPropertyValue("height"),10)||22)+e}return 22},[v]),ec=Array.isArray(S)&&null!=(t=null==(a=S[S.length-1])?void 0:a.queried_dttm)?t:null,eu=(0,h.useCallback)(()=>Math.max(W-ed()-B-(H&&null!=ec?24:0),20),[ed,W,B,ec,H]),eh=(0,h.useCallback)((e,t)=>{y.setFocusedFilterField(e,t)},[y.setFocusedFilterField]),ep=(0,h.useCallback)((e,t)=>{y.unsetFocusedFilterField(e,t)},[y.unsetFocusedFilterField]),ef=(0,h.useCallback)(()=>{y.logEvent(eE.tw,{slice_id:O,is_cached:V})},[y.logEvent,O,V]),em=(0,b.d4)(e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration}),eg=i5(),ev=(0,b.d4)(e=>e.dashboardState.colorScheme),eb=(0,b.d4)(e=>e.dashboardState.colorNamespace),ey=(0,b.d4)(e=>e.dashboardState.datasetsStatus),ex=(0,b.d4)(e=>e.dashboardState.sliceIds),eS=(0,b.d4)(e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters}),ew=(0,b.d4)(e=>e.dataMask),eC=null==(s=ew[e.id])?void 0:s.ownState,ek=(0,b.d4)(t=>{var r;return null==(r=t.dashboardState.chartStates)?void 0:r[e.id]}),e$=(0,b.d4)(e=>{var t,r;return(null==(r=e.dashboardInfo)||null==(t=r.metadata)?void 0:t.label_colors)||oA}),eD=(0,b.d4)(e=>{var t,r;return(null==(r=e.dashboardInfo)||null==(t=r.metadata)?void 0:t.map_label_colors)||oA}),eI=(0,b.d4)(e=>{var t,r;return(0,nh.ik)(null==(r=e.dashboardInfo)||null==(t=r.metadata)?void 0:t.shared_label_colors)}),eO=(0,h.useMemo)(()=>{var t;return(0,oI.A)({chart:{id:null!=(t=null==x?void 0:x.id)?t:e.id,form_data:null==x?void 0:x.form_data},chartConfiguration:em,chartCustomizationItems:eg,filters:(0,ra.MB)(e.id),colorScheme:ev,colorNamespace:eb,sliceId:e.id,nativeFilters:eS,allSliceIds:ex,dataMask:ew,extraControls:e.extraControls||{},labelsColor:e$,labelsColorMap:eD,sharedLabelsColors:eI,ownColorScheme:el})},[null==x?void 0:x.id,null==x?void 0:x.form_data,em,eg,e.id,e.extraControls,ev,eb,eS,ex,ew,e$,eD,eI,el]);eO.dashboardId=N.id;let eT=(0,h.useMemo)(()=>{var e;return((e,t,r)=>{let n=oE(t,{},r);if(!n)return e;let i=(0,tO.ho)(r,n);return oT({},e,i,{chartState:n})})(eC||oA,{state:null!=(e=oE(ek,eO,I))?e:void 0},I)},[eC,ek,eO,I]),ez=(0,h.useCallback)((t,r,n=!1)=>{var i;return(i=function*(){var i,o,l,a,s,d,c;let u,h,f="csv"===t?eE.r2:eE.wc;y.logEvent(f,{slice_id:O,is_cached:V});let m=r?oT({},eO,{row_limit:R}):eO,g=null==eO?void 0:eO.viz_type;u=(g===na.Y.Table||g===na.Y.TableAgGrid)&&S&&S.length>1&&(null==(l=S[1])||null==(o=l.data)||null==(i=o[0])?void 0:i.rowcount)?S[1].data[0].rowcount:(null==S||null==(a=S[0])?void 0:a.sql_rowcount)!=null?S[0].sql_rowcount:(null==S||null==(s=S[0])?void 0:s.rowcount)!=null?S[0].rowcount:null==m?void 0:m.row_limit;let v="csv"===t&&!n&&void 0!==u&&u>=j;if(v){let e=new Date,t=e.toISOString().slice(0,10),r=e.toISOString().slice(11,19).replace(/:/g,""),n=`_${t}_${r}`,i=(T||eO.viz_type||"chart").replace(/[^a-zA-Z0-9_-]/g,"_");h=`${i}${n}.csv`}let b=(null==(d=ew[e.id])?void 0:d.ownState)||{},x=oE(ek,eO,I),w=x?oT({},b,(0,tO.ho)(I,x)):b;try{yield(0,ns.RY)({formData:m,resultType:n?"post_processed":"full",resultFormat:t,ownState:w,onStartStreamingExport:v?e=>{Z(!0),ee(oT({},e,{filename:h,expectedRows:u}))}:null})}catch(e){if(413===(e.status||(null==(c=e.response)?void 0:c.status)))y.addDangerToast((0,p.t)("The chart data is too large to download. Please try reducing the date range, limiting rows, or using fewer columns."));else{let t=e.message||e.statusText||(0,p.t)("Failed to export chart data. Please try again or contact your administrator.");y.addDangerToast(t)}}},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=i.apply(e,t);function l(e){oO(o,r,n,l,a,"next",e)}function a(e){oO(o,r,n,l,a,"throw",e)}l(void 0)})})()},[O,I,V,eO,R,eC,ek,e.id,y.logEvent,y.addDangerToast,S,ee,er,j]),eY=(0,h.useCallback)(()=>{ez("csv",!1)},[ez]),eF=(0,h.useCallback)(()=>{ez("csv",!0)},[ez]),eA=(0,h.useCallback)(()=>{ez("csv",!1,!0)},[ez]),e_=(0,h.useCallback)(()=>{ez("xlsx",!1)},[ez]),eP=(0,h.useCallback)(()=>{ez("xlsx",!0)},[ez]),eM=(0,h.useCallback)(()=>{var t;return y.logEvent(eE.ky,{slice_id:O,is_cached:V}),y.refreshChart(null!=(t=null==x?void 0:x.id)?t:e.id,!0,e.dashboardId)},[y.refreshChart,null==x?void 0:x.id,e.dashboardId,O,V,y.logEvent]);if(!x||D===oA)return(0,d.Y)(o$,{height:eu()});let eR="loading"===C,ej=(null==S?void 0:S.map(e=>e.cached_dttm))||[],eU={description:D.description||"",viz_type:D.viz_type,slice_name:D.slice_name,slice_id:D.slice_id,slice_description:"",datasource:(null==(c=D.form_data)?void 0:c.datasource)||""};return(0,d.FD)(oF,{className:"chart-slice","data-test":"chart-grid-component","data-test-chart-id":e.id,"data-test-viz-type":D.viz_type,"data-test-chart-name":D.slice_name,children:[(0,d.Y)(ok,{ref:v,slice:eU,isExpanded:Y,isCached:V,cachedDttm:ej,queriedDttm:ec,updatedDttm:null!=w?w:null,toggleExpandSlice:y.toggleExpandSlice,forceRefresh:eM,editMode:z,annotationQuery:$,logExploreChart:ef,logEvent:y.logEvent,exportCSV:eY,exportPivotCSV:eA,exportXLSX:e_,exportFullCSV:eF,exportFullXLSX:eP,updateSliceName:t=>e.updateSliceName(e.id,t),sliceName:e.sliceName,supersetCanExplore:F,supersetCanShare:A,supersetCanDownload:_,componentId:e.componentId,dashboardId:e.dashboardId,filters:(0,ra.ug)()||oA,addSuccessToast:y.addSuccessToast,addDangerToast:y.addDangerToast,handleToggleFullSize:e.handleToggleFullSize,isFullSize:e.isFullSize,chartStatus:C||"",formData:eO,exploreUrl:"",width:K,height:ed(),exportPivotExcel:np.A,chartHolderRef:e.chartHolderRef,ownState:eT}),Y&&D.description_markdown&&(0,d.Y)("div",{className:"slice_description bs-callout bs-callout-default",ref:g,dangerouslySetInnerHTML:{__html:D.description_markdown},role:"complementary"}),(0,d.FD)(oz,{className:u()("dashboard-chart"),"aria-label":D.description,children:[eR&&!L&&(0,d.Y)(oY,{style:{width:K,height:eu()}}),(0,d.Y)(nd.A,{width:K,height:eu(),addFilter:ea,onFilterMenuOpen:eh,onFilterMenuClose:ep,annotationData:null!=(r=x.annotationData)?r:void 0,chartAlert:null!=(n=x.chartAlert)?n:void 0,chartId:e.id,chartStatus:null!=C?C:void 0,datasource:U,dashboardId:e.dashboardId,initialValues:oA,formData:eO,ownState:eT,queriesResponse:null!=(i=x.queriesResponse)?i:null,timeout:E,triggerQuery:x.triggerQuery,vizType:D.viz_type,setControlValue:null!=(o=e.setControlValue)?o:o_,datasetsStatus:ey,isInView:e.isInView,emitCrossFilters:P,onChartStateChange:es,suppressLoadingSpinner:L,filterState:null==(f=ew[e.id])?void 0:f.filterState})]}),!eR&&H&&null!=ec&&(0,d.Y)(nc.A,{queriedDttm:ec}),(0,d.Y)(nu.O,{visible:X,onCancel:()=>{et(),Z(!1),er()},onRetry:en,onDownload:ei,progress:J})]})},(e,t)=>e.cacheBusterProp===t.cacheBusterProp&&!!(!t.isComponentVisible||e.componentId===t.componentId&&e.isComponentVisible&&e.isInView===t.isInView&&e.id===t.id&&e.dashboardId===t.dashboardId&&e.extraControls===t.extraControls&&e.handleToggleFullSize===t.handleToggleFullSize&&e.isFullSize===t.isFullSize&&e.setControlValue===t.setControlValue&&e.sliceName===t.sliceName&&e.updateSliceName===t.updateSliceName&&e.width===t.width&&e.height===t.height)),oM=({onDelete:e,iconSize:t})=>(0,d.Y)(ne,{onClick:e,icon:(0,d.Y)(A.F.DeleteOutlined,{iconSize:null!=t?t:"l"})}),oR=g.styled.div`
  .hover-menu {
    opacity: 0;
    position: absolute;
    z-index: 11; /* one more than DragDroppable */
    font-size: ${({theme:e})=>e.fontSize};
  }

  .hover-menu--left {
    width: ${({theme:e})=>6*e.sizeUnit}px;
    top: 50%;
    transform: translate(0, -50%);
    left: ${({theme:e})=>-7*e.sizeUnit}px;
    padding: ${({theme:e})=>2*e.sizeUnit}px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hover-menu--left > :nth-child(n):not(:only-child):not(:last-child) {
    margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
  }

  .hover-menu--top {
    height: ${({theme:e})=>6*e.sizeUnit}px;
    top: ${({theme:e})=>-6*e.sizeUnit}px;
    left: 50%;
    transform: translate(-50%);
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`,oj=(0,h.memo)(function({position:e="left",innerRef:t=null,children:r=null,onHover:n}){let i=(0,h.useCallback)(()=>{n&&n({isHovered:!0})},[n]),o=(0,h.useCallback)(()=>{n&&n({isHovered:!1})},[n]);return(0,d.Y)(oR,{className:"hover-menu-container",children:(0,d.Y)("div",{ref:t,className:u()("hover-menu","left"===e&&"hover-menu--left","top"===e&&"hover-menu--top"),onMouseEnter:i,onMouseLeave:o,"data-test":"hover-menu",children:r})})});var oU=r(38462),oN=r(33149);function oH(){return(0,d.Y)("div",{className:"resize-handle resize-handle--bottom-right"})}function oL(){return(0,d.Y)("div",{className:"resize-handle resize-handle--right"})}function oV(){return(0,d.Y)("div",{className:"resize-handle resize-handle--bottom"})}function oB(){return(oB=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let oq={top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},oW=oB({},oq,{bottomRight:!1,bottom:!1}),oG=oB({},oq,{bottomRight:!1,right:!1}),oK=oB({},oq,{bottomRight:!1,bottom:!1,right:!1}),oQ=Number.MAX_VALUE,oX=[8,8],oZ={right:"resizable-container-handle--right",bottom:"resizable-container-handle--bottom"},oJ=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    position: fixed;
    background-color: ${(0,f.o3)(e.colorPrimary,.9)};
    color: ${e.colorBgBase};
    font-size: ${e.fontSizeXS}px;
    font-weight: ${e.fontWeightStrong};
    line-height: 1;
    padding: ${e.sizeUnit}px ${1.5*e.sizeUnit}px;
    border-radius: ${e.borderRadius}px;
    pointer-events: none;
    white-space: nowrap;
    z-index: 9999;
    transform: translate(12px, 12px);
  `}
`,o0=(0,g.styled)(oN.c)`
  ${({theme:e})=>(0,v.AH)`
    &.resizable-container {
      background-color: transparent;
      position: relative;

      /* re-resizable sets an empty div to 100% width and height, which doesn't
      play well with many 100% height containers we need */

      & ~ div {
        width: auto !important;
        height: auto !important;
      }
    }

    &.resizable-container--resizing {
      /* after ensures border visibility on top of any children */

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 2px ${e.colorPrimary};
      }

      & > span .resize-handle {
        border-color: ${e.colorPrimary};
      }
    }

    .resize-handle {
      opacity: 0;
      z-index: 10;

      &--bottom-right {
        position: absolute;
        border-right: 1px solid ${e.colorSplit};
        border-bottom: 1px solid ${e.colorSplit};
        right: ${4*e.sizeUnit}px;
        bottom: ${4*e.sizeUnit}px;
        width: ${2*e.sizeUnit}px;
        height: ${2*e.sizeUnit}px;
      }

      &--right {
        width: ${e.sizeUnit/2}px;
        height: ${5*e.sizeUnit}px;
        right: ${e.sizeUnit}px;
        top: 50%;
        transform: translate(0, -50%);
        position: absolute;
        border-left: 1px solid ${e.colorSplit};
        border-right: 1px solid ${e.colorSplit};
      }

      &--bottom {
        height: ${e.sizeUnit/2}px;
        width: ${5*e.sizeUnit}px;
        bottom: ${e.sizeUnit}px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        border-top: 1px solid ${e.colorSplit};
        border-bottom: 1px solid ${e.colorSplit};
      }
    }
  `}

  &.resizable-container:hover .resize-handle,
  &.resizable-container--resizing .resize-handle {
    opacity: 1;
  }

  .dragdroppable-column & .resizable-container-handle--right {
    /* override the default because the inner column's handle's mouse target is very small */
    right: 0 !important;
  }

  & .resizable-container-handle--bottom {
    bottom: 0 !important;
  }
`;function o1({id:e,children:t,widthMultiple:r,heightMultiple:n,staticHeight:i,staticHeightMultiple:o,staticWidth:l,staticWidthMultiple:a,onResizeStop:s,onResize:c,onResizeStart:p,editMode:f,adjustableWidth:m=!0,adjustableHeight:g=!0,gutterWidth:v=16,widthStep:b=8,heightStep:y=8,minWidthMultiple:x=1,maxWidthMultiple:S=oQ,minHeightMultiple:w=1,maxHeightMultiple:C=oQ}){let[k,$]=(0,h.useState)(!1),D=(0,h.useRef)(null);(0,h.useEffect)(()=>{!k&&D.current&&(D.current.style.display="none")},[k]);let I=(0,h.useCallback)((e,t,r,i)=>{if(c&&c(e,t,r,i),t.toLowerCase().includes("bottom")){var o,l,a,s;let t="touches"in e?null!=(o=null==(a=e.touches[0])?void 0:a.clientX)?o:0:e.clientX,r="touches"in e?null!=(l=null==(s=e.touches[0])?void 0:s.clientY)?l:0:e.clientY,d=Math.round(i.height/y)*y,c=Math.max(w*y,n*y+d);D.current&&(D.current.style.display="block",D.current.style.left=`${t}px`,D.current.style.top=`${r}px`,D.current.textContent=`${c}px`)}},[c,n,y,w]),O=(0,h.useCallback)((e,t,r)=>{p&&p(e,t,r),$(!0)},[p]),T=(0,h.useCallback)((t,i,o,l)=>{if(s){let a=r+Math.round(l.width/(b+v)),d=n+Math.round(l.height/y);s(t,i,o,{width:m?a:0,height:g?d:0},e)}$(!1)},[s,r,n,b,y,v,m,g,e]),z=(0,h.useMemo)(()=>({width:m?(b+v)*r-v:a&&a*b||l||void 0,height:g?y*n:o&&o*y||i||void 0}),[m,b,v,r,a,l,g,y,n,o,i]),Y=(0,h.useMemo)(()=>({right:(0,d.Y)(oL,{}),bottom:(0,d.Y)(oV,{}),bottomRight:(0,d.Y)(oH,{})}),[]),F=(0,h.useMemo)(()=>f&&m&&g?oq:f&&m?oW:f&&g?oG:oK,[f,m,g]);return(0,d.FD)(d.FK,{children:[(0,d.Y)(o0,{enable:F,grid:oX,gridGap:void 0,minWidth:m?x*(b+v)-v:void 0,minHeight:g?w*y:void 0,maxWidth:m&&z.width?Math.max(z.width,Math.min(oQ,S*(b+v)-v)):void 0,maxHeight:g&&z.height?Math.max(z.height,Math.min(oQ,C*y)):void 0,size:z,onResizeStart:O,onResize:I,onResizeStop:T,handleComponent:Y,className:u()("resizable-container",k&&"resizable-container--resizing"),handleClasses:oZ,children:t}),(0,oU.createPortal)((0,d.Y)(oJ,{ref:D,style:{display:"none"}}),document.body)]})}function o4(e){let t={};if(e.length>0){let r=e.slice().filter(e=>void 0!==e);for(;r.length;){let e=r.pop(),n=e.split("-")[0];if(t[n.toLowerCase()]=e,!P.pX.includes(n))break}}return t}var o2=r(55847);let o6={opacity:.3,pointerEvents:"none"},o3={};var o5=r(78921);function o7(){return(o7=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o8=(0,h.memo)(({id:e,parentId:t,component:r,parentComponent:n,index:i,depth:o,availableColumnCount:l,columnWidth:a,onResizeStart:s,onResize:c,onResizeStop:p,editMode:f,isComponentVisible:m,dashboardId:y,fullSizeChartId:x,getComponentById:S=()=>void 0,deleteComponent:w,updateComponents:C,handleComponentDrop:k,setFullSizeChartId:$,isInView:D})=>{let I=(0,g.useTheme)(),O=(0,v.AH)`
    && {
      position: fixed !important;
      z-index: 3000;
      left: 0;
      top: 0;
      padding: ${2*I.sizeUnit}px;
    }
  `,{chartId:T}=r.meta,z=x===T,Y=(0,h.useRef)(null),F=(e=>{let t=(0,g.useTheme)(),r=(0,h.useMemo)(()=>({borderColor:t.colorPrimaryBorder,opacity:1,boxShadow:`0px 0px ${3*t.sizeUnit}px ${t.colorPrimary}`,pointerEvents:"auto"}),[t]),n=(0,b.d4)(e=>e.nativeFilters),i=(0,b.d4)(e=>e.sliceEntities.slices)||{},o=i5(),l=(null==n?void 0:n.focusedFilterId)||(null==n?void 0:n.hoveredFilterId),a=null==n?void 0:n.hoveredChartCustomizationId;if(!l&&!a)return o3;if(l&&(0,o2.z)(l,n.filters[l],i).includes(e))return r;if(a){let t=o.find(e=>e.id===a);if(t&&"targets"in t&&(0,o2.d)(t,i).includes(e))return r}return o6})(null!=T?T:0),A=(0,b.d4)(e=>e.dashboardState.directPathToChild),_=(0,b.d4)(e=>{var t;return null!=(t=e.dashboardState.directPathLastUpdated)?t:0}),[E,P]=(0,h.useState)({}),[M,R]=(0,h.useState)(),[j,U]=(0,h.useState)(),[N,H]=(0,h.useState)(0),L=(0,h.useMemo)(()=>o4(null!=A?A:[]),[A]);(0,h.useEffect)(()=>{let{label:e,chart:t}=L;_!==N&&r.id===t&&(H(_),R(r.id),U(e))},[r,N,_,L]),(0,h.useEffect)(()=>{let e;return M&&(e=setTimeout(()=>{R(void 0),U(void 0)},2e3)),()=>{e&&clearTimeout(e)}},[M]);let V=(0,h.useMemo)(()=>{var e,t,i;let o=null==(t=S(null==(i=n.parents)?void 0:i.find(e=>e.startsWith("COLUMN"))))||null==(e=t.meta)?void 0:e.width,l=r.meta.width||1;return"COLUMN"===n.type?l=n.meta.width||1:o&&l>o&&(l=o),l},[r,S,n.meta.width,n.parents,n.type]),{chartWidth:B,chartHeight:q}=(0,h.useMemo)(()=>{let e=0,t=0;if(z)e=window.innerWidth-32,t=window.innerHeight-32;else{var n;e=Math.floor(V*a+(V-1)*16-32),t=Math.floor((null!=(n=r.meta.height)?n:0)*8-32)}return{chartWidth:e,chartHeight:t}},[a,r,z,V]),W=(0,h.useCallback)(()=>{w(e,t)},[w,e,t]),G=(0,h.useCallback)(e=>{C({[r.id]:o7({},r,{meta:o7({},r.meta,{sliceNameOverride:e})})})},[r,C]),K=(0,h.useCallback)(()=>{$(z?null:null!=T?T:null)},[T,z,$]),Q=(0,h.useCallback)((e,t)=>{P(r=>o7({},r,{[e]:t}))},[]),X=(0,h.useCallback)(({dragSourceRef:e})=>{var t,i;return(0,d.Y)(o1,{id:r.id,adjustableWidth:"ROW"===n.type,adjustableHeight:!0,widthStep:a,widthMultiple:V,heightStep:8,heightMultiple:null!=(t=r.meta.height)?t:5,minWidthMultiple:1,minHeightMultiple:5,maxWidthMultiple:l+V,onResizeStart:s,onResize:c,onResizeStop:p,editMode:f,children:(0,d.Y)("div",{ref:t=>{"function"==typeof e?e(t):e&&Object.prototype.hasOwnProperty.call(e,"current")&&(e.current=t),Y.current=t},"data-test":"dashboard-component-chart-holder",style:F,css:z?O:void 0,className:u()("dashboard-component","dashboard-component-chart-holder",`dashboard-chart-id-${T}`,M?"fade-in":"fade-out"),children:(0,d.FD)(o5.Q,{getPopupContainer:e=>{var t;return document.fullscreenElement&&(null==e||null==(t=e.closest)?void 0:t.call(e,'[data-test="dashboard-component-chart-holder"]'))||document.body},children:[!f&&(0,d.Y)(nl,{id:r.id,scrollIntoView:M===r.id}),!!M&&(0,d.Y)("style",{children:`label[for=${j}] + .Select .Select__control {
                      border-color: ${I.colorPrimary};
                      transition: border-color 1s ease-in-out;
                    }`}),(0,d.Y)(oP,{componentId:r.id,id:null!=(i=r.meta.chartId)?i:0,dashboardId:y,width:B,height:q,sliceName:r.meta.sliceNameOverride||r.meta.sliceName||"",updateSliceName:(e,t)=>G(t),isComponentVisible:m,handleToggleFullSize:K,isFullSize:z,setControlValue:Q,extraControls:E,isInView:D,chartHolderRef:Y}),f&&(0,d.Y)(oj,{position:"top",children:(0,d.Y)("div",{"data-test":"dashboard-delete-component-button",children:(0,d.Y)(oM,{onDelete:W})})})]})})})},[r.id,r.meta.height,r.meta.chartId,r.meta.sliceNameOverride,r.meta.sliceName,n.type,a,V,l,s,c,p,f,F,z,O,T,M,j,y,B,q,G,m,K,Q,E,D,W]);return(0,d.Y)(eu,{component:r,parentComponent:n,orientation:"ROW"===n.type?"column":"row",index:i,depth:o,onDrop:k,disableDragDrop:!1,editMode:f,children:X})});var o9=r(49508),le=r(76399);let lt=e=>{let{value:t,options:r,onChange:n,renderButton:i=e=>e.label,renderOption:o=e=>(0,d.Y)("div",{className:e.className,children:e.label})}=e,l=(0,g.useTheme)(),a=r.find(e=>e.value===t);return(0,d.Y)(nx.ms,{trigger:["click"],overlayStyle:{zIndex:l.zIndexBase},menu:{onClick:({key:e})=>n(e),items:r.map(e=>({key:e.value,label:o(e),css:(0,v.AH)`
  &.ant-menu-item {
    height: auto;
    line-height: 1.4;

    padding-top: ${l.sizeUnit}px;
    padding-bottom: ${l.sizeUnit}px;

    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:hover {
      background: ${l.colorFillQuaternary};
    }

    &.active {
      font-weight: ${l.fontWeightStrong};
      background: ${l.colorFillTertiary};
    }
  }

  &.ant-menu-item-selected {
    color: unset;
  }
`,className:u()("dropdown-item",{active:e.value===t})}))},children:(0,d.FD)("div",{role:"button",css:{display:"flex",alignItems:"center"},children:[a&&i(a),(0,d.Y)(A.F.DownOutlined,{iconSize:"s",css:{marginTop:.5*l.sizeUnit,marginLeft:.5*l.sizeUnit}})]})})},lr=[{value:"edit",label:(0,p.t)("Edit")},{value:"preview",label:(0,p.t)("Preview")}];function ln({id:e,value:t,onChange:r}){return(0,d.Y)(lt,{"data-test":"markdown-mode-dropdown",id:e,options:lr,value:t,onChange:r})}let li=(e,t,r)=>!!((null==t?void 0:t.contains(e.target))||(null==r?void 0:r.contains(e.target))),lo=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    position: relative;
    outline: none;

    &.with-popover-menu--focused:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${e.colorPrimary};
      pointer-events: none;
    }

    .dashboard-component-tabs li &.with-popover-menu--focused:after {
      top: ${-3*e.sizeUnit}px;
      left: ${-2*e.sizeUnit}px;
      width: calc(100% + ${4*e.sizeUnit}px);
      height: calc(100% + ${7*e.sizeUnit}px);
    }
  `}
`,ll=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    position: absolute;
    flex-wrap: nowrap;
    left: 1px;
    top: -42px;
    height: ${10*e.sizeUnit}px;
    padding: 0 ${4*e.sizeUnit}px;
    background: ${e.colorBgContainer};
    box-shadow: 0 1px 2px 1px ${(0,f.o3)(e.colorTextBase,.35)};
    font-size: ${e.fontSize}px;
    cursor: default;
    z-index: 3000;

    &,
    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* vertical spacer after each menu item */
    .menu-item:not(:last-child):after {
      content: '';
      width: 1px;
      height: 100%;
      background: ${e.colorSplit};
      margin: 0 ${4*e.sizeUnit}px;
    }
  `}
`,la=(0,h.memo)(function({children:e=null,disableClick:t=!1,menuItems:r=[],onChangeFocus:n=null,isFocused:i=!1,shouldFocus:o=li,editMode:l=!1,style:a=null}){let[s,c]=(0,h.useState)(i),p=(0,h.useRef)(null),f=(0,h.useRef)(null),m=(0,h.useRef)(null),g=(0,h.useCallback)(e=>{if(!l)return;let r=e.nativeEvent||e;if(m.current===r){m.current=null;return}let i=o(e,p.current,f.current);i!==s&&(t||!i||s?!i&&s&&(c(!1),n&&n(!1)):(m.current=r,c(!0),n&&n(!0)))},[l,o,s,t,n]),v=(0,h.useRef)(g);return(0,h.useEffect)(()=>{v.current=g},[g]),(0,h.useEffect)(()=>{l&&i&&!s?c(!0):s&&!l&&c(!1)},[l,i,s]),(0,h.useEffect)(()=>{if(s&&l){let e=e=>v.current(e);return document.addEventListener("click",e),document.addEventListener("drag",e),()=>{document.removeEventListener("click",e),document.removeEventListener("drag",e)}}},[s,l]),(0,d.FD)(lo,{ref:p,onClick:g,role:"none",className:u()("with-popover-menu",l&&s&&"with-popover-menu--focused"),style:null!=a?a:void 0,children:[e,l&&s&&(null==r?void 0:r.some(Boolean))&&(0,d.Y)(ll,{ref:f,children:r.map((e,t)=>(0,d.Y)("div",{className:"menu-item",children:e},`menu-item-${t}`))})]})});function ls(){return(ls=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ld=`# ✨Header 1
## ✨Header 2
### ✨Header 3

<br />

Click here to learn more about [markdown formatting](https://bit.ly/1dQOfRK)`,lc=(0,p.t)("This markdown component has an error."),lu=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    &.dashboard-markdown {
      overflow: hidden;
      color: ${e.colorText};

      h4,
      h5,
      h6 {
        font-weight: ${e.fontWeightNormal};
      }

      strong {
        font-weight: 600;
      }

      h6 {
        font-size: ${e.fontSizeSM}px;
      }

      .dashboard-component-chart-holder {
        overflow-y: auto;
        overflow-x: hidden;
        border-radius: ${e.borderRadius}px;
      }

      .dashboard--editing & {
        cursor: move;
      }
    }
  `}
`,lh=(0,b.Ng)(function(e){return{undoLength:e.dashboardLayout.past.length,redoLength:e.dashboardLayout.future.length,htmlSanitization:e.common.conf.HTML_SANITIZATION,htmlSchemaOverrides:e.common.conf.HTML_SANITIZATION_SCHEMA_EXTENSIONS}})(function({id:e,parentId:t,component:r,parentComponent:n,index:i,depth:o,editMode:l,availableColumnCount:a,columnWidth:s,onResizeStart:c,onResize:f,onResizeStop:m,deleteComponent:g,handleComponentDrop:v,updateComponents:b,logEvent:y,addDangerToast:x,undoLength:w,redoLength:C,htmlSanitization:k,htmlSchemaOverrides:$}){let[D,I]=(0,h.useState)(!1),[O,T]=(0,h.useState)(r.meta.code),[z,Y]=(0,h.useState)(null),[F,A]=(0,h.useState)("preview"),[_,E]=(0,h.useState)(!1),P=(0,h.useRef)(eE.Vy.getTimestamp()),M=(0,h.useRef)(w),R=(0,h.useRef)(C),j=(0,h.useRef)(r.meta.width),U=(0,h.useRef)(s),N=w!==M.current||C!==R.current;N&&(T(r.meta.code),E(!1),M.current=w,R.current=C),(0,h.useEffect)(()=>{N||_||"preview"!==F||r.meta.code===O||T(r.meta.code)},[N,r.meta.code,_,F,O]),(0,h.useEffect)(()=>{y(eE.tE,{viz_type:"markdown",start_offset:P.current,ts:new Date().getTime(),duration:eE.Vy.getTimestamp()-P.current})},[]),(0,h.useEffect)(()=>{z&&(j.current!==r.meta.width||U.current!==s)&&"function"==typeof z.resize&&z.resize(!0),j.current=r.meta.width,U.current=s},[z,r.meta.width,s]);let H=(0,h.useCallback)(()=>{r.meta.code!==O&&b({[r.id]:ls({},r,{meta:ls({},r.meta,{code:O})})})},[r,O,b]),L=(0,h.useCallback)(e=>{(null==e?void 0:e.getSession)&&e.getSession().setUseWrapMode(!0),Y(e)},[]),V=(0,h.useCallback)(e=>{"preview"===e&&(H(),E(!1)),A(e)},[H]),B=(0,h.useCallback)(e=>{let t=!!e;I(t),V(t?"edit":"preview")},[V]),q=(0,h.useCallback)(e=>{T(e)},[]),W=(0,h.useCallback)(()=>{g(e,t)},[g,e,t]),G=(0,h.useCallback)((...e)=>{let t="edit"===F;c(...e),l&&t&&H()},[F,l,c,H]),K=(0,h.useCallback)((e,t,r)=>!!((null==t?void 0:t.contains(e.target))||(null==r?void 0:r.contains(e.target))),[]),Q=(0,h.useCallback)((e,t)=>{E(!0),"preview"===F&&x((0,p.t)("This markdown component has an error. Please revert your recent changes."))},[x,F]),X=(0,h.useMemo)(()=>(0,d.Y)(le.AE,{id:`markdown-editor-${e}`,onChange:q,width:"100%",height:"100%",value:"string"==typeof O?O:ld,language:"markdown",readOnly:!1,lineNumbers:!1,wordWrap:!0,onReady:e=>{e&&"function"==typeof e.focus&&L(e)},"data-test":"editor"}),[e,O,q,L]),Z=(0,h.useMemo)(()=>(0,d.Y)(o9.zZ,{source:_?lc:O||ld,htmlSanitization:k,htmlSchemaOverrides:$}),[_,O,k,$]),J="COLUMN"===n.type?n.meta.width||1:r.meta.width||1,ee="edit"===F,et=(0,h.useMemo)(()=>[(0,d.Y)(ln,{id:`${r.id}-mode`,value:F,onChange:V},`${r.id}-mode`)],[r.id,F,V]);return(0,d.Y)(eu,{component:r,parentComponent:n,orientation:"ROW"===n.type?"column":"row",index:i,depth:o,onDrop:v,disableDragDrop:D,editMode:l,children:({dragSourceRef:e})=>{var t;return(0,d.Y)(la,{onChangeFocus:B,shouldFocus:K,menuItems:et,editMode:l,children:(0,d.Y)(lu,{"data-test":"dashboard-markdown-editor",className:u()("dashboard-markdown",ee&&"dashboard-markdown--editing"),id:r.id,children:(0,d.Y)(o1,{id:r.id,adjustableWidth:"ROW"===n.type,adjustableHeight:!0,widthStep:s,widthMultiple:J,heightStep:8,heightMultiple:null!=(t=r.meta.height)?t:5,minWidthMultiple:1,minHeightMultiple:5,maxWidthMultiple:a+J,onResizeStart:G,onResize:f,onResizeStop:m,editMode:!D&&l,children:(0,d.FD)("div",{ref:e,className:"dashboard-component dashboard-component-chart-holder","data-test":"dashboard-component-chart-holder",children:[l&&(0,d.Y)(oj,{position:"top",children:(0,d.Y)(oM,{onDelete:W})}),(0,d.Y)(S.tH,{onError:Q,showMessage:!1,children:l&&ee?X:Z},_?"markdown-error":"markdown-ok")]})})})})}})}),lp=g.styled.div`
  ${({theme:e,position:t})=>(0,v.AH)`
    height: ${5*e.sizeUnit}px;
    overflow: hidden;
    cursor: move;
    ${"top"===t&&(0,v.AH)`
        transform: rotate(90deg);
      `}
    & path {
      fill: ${e.colorIcon};
    }
  `}
`;function lf({position:e="left",innerRef:t=null}){return(0,d.Y)(lp,{ref:t,position:e,children:(0,d.Y)(A.F.Drag,{iconSize:"xl"})})}let lm=[{value:P.kn,label:(0,p.t)("Transparent"),className:"background--transparent"},{value:P.X0,label:(0,p.t)("Solid"),className:"background--white"}],lg=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: inline-block;
    &:before {
      content: '';
      width: 1em;
      height: 1em;
      margin-right: ${2*e.sizeUnit}px;
      display: inline-block;
      vertical-align: middle;
    }
    &.background-style-option.background--white {
      padding-left: 0;
      background: transparent;
      &:before {
        background: ${e.colorBgContainer};
        border: 1px solid ${e.colorBorder};
      }
    }
    /* Create the transparent rect icon */
    &.background--transparent:before {
      background-image:
        linear-gradient(45deg, ${e.colorTextLabel} 25%, transparent 25%),
        linear-gradient(-45deg, ${e.colorTextLabel} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${e.colorTextLabel} 75%),
        linear-gradient(-45deg, transparent 75%, ${e.colorTextLabel} 75%);
      background-size: ${2*e.sizeUnit}px ${2*e.sizeUnit}px;
      background-position:
        0 0,
        0 ${e.sizeUnit}px,
        ${e.sizeUnit}px ${-e.sizeUnit}px,
        ${-e.sizeUnit}px 0px;
    }
  `}
`;function lv(e){let t=(0,p.t)("background");return(0,d.Y)(lg,{className:u()("background-style-option",e.className),children:`${e.label} ${t}`})}function lb(e){return(0,d.Y)(lg,{className:u()("background-style-option",e.className),children:e.label})}function ly({id:e,value:t,onChange:r}){return(0,d.Y)(lt,{id:e,options:lm,value:t,onChange:r,renderButton:lv,renderOption:lb})}function lx(){return(lx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let lS=g.styled.div`
  ${({theme:e,editMode:t})=>(0,v.AH)`
    &.grid-column {
      width: 100%;
      position: relative;

      & > :not(.hover-menu):not(:last-child) {
        ${!t&&`margin-bottom: ${4*e.sizeUnit}px;`}
      }
    }

    .dashboard--editing &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
      border: 1px dashed ${e.colorBorder};
    }
    .dashboard--editing .resizable-container--resizing:hover > &:after,
    .dashboard--editing .hover-menu:hover + &:after {
      border: 1px dashed ${e.colorPrimary};
      z-index: 2;
    }

    & .empty-droptarget {
      &.droptarget-edge {
        position: absolute;
        z-index: ${10};
        width: 100%;
        height: ${4*e.sizeUnit}px;
        &:first-of-type {
          inset-block-start: 0;
        }
      }
      &:first-of-type:not(.droptarget-edge) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: ${10};
        width: 100%;
        height: 100%;
      }
      &:not(:first-of-type):not(.droptarget-edge) {
        width: 100%;
        min-height: ${4*e.sizeUnit}px;
      }
    }
  `}
`,lw=e=>(0,v.AH)`
  min-height: ${25*e.sizeUnit}px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colorTextLabel};
`,lC=(0,h.memo)(e=>{let{component:t,parentComponent:r,index:n,availableColumnCount:i,columnWidth:o,minColumnWidth:l,depth:a,onResizeStart:s,onResize:c,onResizeStop:f,handleComponentDrop:m,editMode:g,onChangeTab:v,isComponentVisible:b,deleteComponent:y,id:x,parentId:S,updateComponents:w}=e,[C,k]=(0,h.useState)(!1),$=(0,h.useCallback)(()=>{y(x,S)},[y,x,S]),D=(0,h.useCallback)(e=>{k(!!e)},[]),I=(0,h.useCallback)(e=>{let r="background";e&&t.meta[r]!==e&&w({[t.id]:lx({},t,{meta:lx({},t.meta,{[r]:e})})})},[t,w]),O=(0,h.useMemo)(()=>t.children||[],[t.children]),T=lm.find(e=>e.value===(t.meta.background||P.kn)),z=(0,h.useCallback)(({dragSourceRef:e})=>{var r;return(0,d.Y)(o1,{id:t.id,adjustableWidth:!0,adjustableHeight:!1,widthStep:o,widthMultiple:null!=(r=t.meta.width)?r:0,heightMultiple:0,minWidthMultiple:l,maxWidthMultiple:i+(t.meta.width||0),onResizeStart:s,onResize:c,onResizeStop:f,editMode:g,children:(0,d.FD)(la,{isFocused:C,onChangeFocus:D,disableClick:!0,menuItems:[(0,d.Y)(ly,{id:`${t.id}-background`,value:t.meta.background||P.kn,onChange:I},`${t.id}-background`)],editMode:g,children:[g&&(0,d.FD)(oj,{innerRef:e,position:"top",children:[(0,d.Y)(lf,{position:"top"}),(0,d.Y)(oM,{iconSize:"m",onDelete:$}),(0,d.Y)(ne,{onClick:()=>D(!0),icon:(0,d.Y)(A.F.SettingOutlined,{iconSize:"m"})})]}),(0,d.FD)(lS,{className:u()("grid-column",null==T?void 0:T.className),editMode:g,children:[g&&(0,d.Y)(eh,lx({component:t,parentComponent:t},0===O.length?{dropToChild:!0}:{component:O[0]},{depth:a,index:0,orientation:"column",onDrop:m,className:u()("empty-droptarget",O.length>0&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,d.Y)("div",lx({},e))})),0===O.length?(0,d.Y)("div",{css:lw,children:(0,p.t)("Empty column")}):O.map((e,r)=>{var n;return(0,d.FD)(h.Fragment,{children:[(0,d.Y)(l2,{id:e,parentId:t.id,depth:a+1,index:r,availableColumnCount:null!=(n=t.meta.width)?n:0,columnWidth:o,onResizeStart:s,onResize:c,onResizeStop:f,isComponentVisible:b,onChangeTab:v}),g&&(0,d.Y)(eh,{component:O,parentComponent:t,depth:a,index:r+1,orientation:"column",onDrop:m,className:u()("empty-droptarget",r===O.length-1&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,d.Y)("div",lx({},e))})]},e)})]})]})})},[i,null==T?void 0:T.className,t,O,o,a,g,I,D,m,$,b,C,l,v,c,s,f]);return(0,d.Y)(eu,{component:t,parentComponent:r,orientation:"column",index:n,depth:a,onDrop:m,editMode:g,children:z})}),lk=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    width: 100%;
    padding: ${2*e.sizeUnit}px 0;
    background-color: transparent;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: ${e.colorSplit};
      display: block;
    }

    div[draggable='true'] & {
      cursor: move;
    }

    .dashboard-component-tabs & {
      padding-left: ${4*e.sizeUnit}px;
      padding-right: ${4*e.sizeUnit}px;
    }
  `}
`,l$=(0,h.memo)(function({id:e,parentId:t,component:r,depth:n,parentComponent:i,index:o,editMode:l,handleComponentDrop:a,deleteComponent:s}){let c=(0,h.useCallback)(()=>{s(e,t)},[s,e,t]);return(0,d.Y)(eu,{component:r,parentComponent:i,orientation:"row",index:o,depth:n,onDrop:a,editMode:l,children:({dragSourceRef:e})=>(0,d.FD)("div",{ref:e,children:[l&&(0,d.Y)(oj,{position:"left",children:(0,d.Y)(oM,{onDelete:c})}),(0,d.Y)(lk,{className:"dashboard-component dashboard-component-divider"})]})})}),lD=[{value:P.It,label:(0,p.t)("Small"),className:"header-style-option header-small"},{value:P.W9,label:(0,p.t)("Medium"),className:"header-style-option header-medium"},{value:P.GY,label:(0,p.t)("Large"),className:"header-style-option header-large"}];function lI(){return(lI=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let lO=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    font-weight: ${e.fontWeightStrong};
    width: 100%;
    padding: ${4*e.sizeUnit}px 0;

    &.header-small {
      font-size: ${e.fontSizeLG}px;
    }

    &.header-medium {
      font-size: ${e.fontSizeXL}px;
    }

    &.header-large {
      font-size: ${e.fontSizeXXL}px;
    }

    .anchor-link-container {
      display: inline;
      line-height: 0;
      vertical-align: bottom; /* trick to align the anchor with text */
      opacity: 0;
      transition: opacity ${e.motionDurationMid} ease-in-out;
    }

    &:hover .anchor-link-container {
      opacity: 1;
    }

    .dashboard--editing .dashboard-grid & {
      &:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      &:hover:after {
        border: 1px dashed ${e.colorPrimary};
        z-index: 2;
      }
    }

    .dashboard--editing .dragdroppable-row & {
      cursor: move;
    }

    /**
   * grids add margin between items, so don't double pad within columns
   * we'll not worry about double padding on top as it can serve as a visual separator
   */
    .grid-column > :not(:last-child) & {
      margin-bottom: ${-4*e.sizeUnit}px;
    }

    .background--white &,
    &.background--white,
    .dashboard-component-tabs & {
      padding-left: ${4*e.sizeUnit}px;
      padding-right: ${4*e.sizeUnit}px;
    }
  `}
`,lT=(0,h.memo)(function({id:e,dashboardId:t,parentId:r,component:n,depth:i,parentComponent:o,index:l,editMode:a,embeddedMode:s,handleComponentDrop:c,deleteComponent:p,updateComponents:f}){let[m,g]=(0,h.useState)(!1),v=(0,h.useCallback)(e=>{g(e)},[]),b=(0,h.useCallback)((e,t)=>{t&&n.meta[e]!==t&&f({[n.id]:lI({},n,{meta:lI({},n.meta,{[e]:t})})})},[n,f]),y=(0,h.useCallback)(e=>b("headerSize",e),[b]),x=(0,h.useCallback)(e=>b("background",e),[b]),S=(0,h.useCallback)(e=>b("text",e),[b]),w=(0,h.useCallback)(()=>{p(e,r)},[p,e,r]),C=lD.find(e=>e.value===(n.meta.headerSize||P.It)),k=lm.find(e=>e.value===(n.meta.background||P.kn));return(0,d.Y)(eu,{component:n,parentComponent:o,orientation:"row",index:l,depth:i,onDrop:c,disableDragDrop:m,editMode:a,children:({dragSourceRef:e})=>(0,d.FD)("div",{ref:e,children:[a&&i<=2&&(0,d.Y)(oj,{position:"left",children:(0,d.Y)(lf,{position:"left"})}),(0,d.Y)(la,{onChangeFocus:v,menuItems:[(0,d.Y)(lt,{id:`${n.id}-header-style`,options:lD,value:n.meta.headerSize,onChange:y}),(0,d.Y)(ly,{id:`${n.id}-background`,value:n.meta.background,onChange:x})],editMode:a,children:(0,d.FD)(lO,{className:u()("dashboard-component","dashboard-component-header",null==C?void 0:C.className,null==k?void 0:k.className),children:[a&&(0,d.Y)(oj,{position:"top",children:(0,d.Y)(oM,{onDelete:w})}),(0,d.Y)(ng.z,{title:n.meta.text,canEdit:a,onSaveTitle:S,showTooltip:!1}),!a&&!s&&(0,d.Y)(nl,{id:n.id,dashboardId:Number(t)})]})})]})})});var lz=r(93120);function lY(){return(lY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let lF=g.styled.div`
  ${({theme:e,editMode:t})=>(0,v.AH)`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 100%;
    height: fit-content;

    & > :not(:last-child):not(.hover-menu) {
      ${!t&&`margin-right: ${4*e.sizeUnit}px;`}
    }

    & .empty-droptarget {
      position: relative;
      align-self: center;
      &.empty-droptarget--vertical {
        min-width: ${4*e.sizeUnit}px;
        &:not(:last-child) {
          width: ${4*e.sizeUnit}px;
        }
        &:first-of-type:not(.droptarget-side) {
          z-index: ${10};
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      &.droptarget-side {
        z-index: ${10};
        position: absolute;
        width: ${4*e.sizeUnit}px;
        &:first-of-type {
          inset-inline-start: 0;
        }
      }
    }

    &.grid-row--empty {
      min-height: ${25*e.sizeUnit}px;
    }
  `}
`,lA=e=>(0,v.AH)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colorTextLabel};
`,l_=(0,h.memo)(e=>{var t;let{component:r,parentComponent:n,index:i,availableColumnCount:o,columnWidth:l,occupiedColumnCount:a,depth:s,onResizeStart:c,onResize:f,onResizeStop:m,handleComponentDrop:g,editMode:v,onChangeTab:b,isComponentVisible:y,updateComponents:x,deleteComponent:S,parentId:w}=e,[C,k]=(0,h.useState)(!1),[$,D]=(0,h.useState)(!1),[I,O]=(0,h.useState)(!1),[T,z]=(0,h.useState)(null),Y=(0,h.useRef)(null),F=(0,h.useRef)(y);(0,h.useEffect)(()=>{F.current=y},[y]),(0,h.useEffect)(()=>{let e,t;if((0,N.G7)(N.TO.DashboardVirtualization)&&!(0,lz.a)()){e=new IntersectionObserver(([e])=>{e.isIntersecting&&F.current?D(!0):F.current||D(!1)},{rootMargin:"100% 0px"}),t=new IntersectionObserver(([e])=>{e.isIntersecting||!F.current||(0,nm.n)()||D(!1)},{rootMargin:"400% 0px"});let r=Y.current;r&&(e.observe(r),t.observe(r))}return()=>{null==e||e.disconnect(),null==t||t.disconnect()}},[]),(0,h.useLayoutEffect)(()=>{var e;if(!v)return;let t=null==(e=Y.current)?void 0:e.clientHeight;void 0!==t&&t!==T&&z(t)});let _=(0,h.useCallback)(e=>{k(!!e)},[]),E=(0,h.useCallback)(e=>{var t;let n="background";e&&(null==(t=r.meta)?void 0:t[n])!==e&&x({[r.id]:lY({},r,{meta:lY({},r.meta,{[n]:e})})})},[x,r]),M=(0,h.useCallback)(()=>{S(r.id,w)},[S,r,w]),R=(0,h.useCallback)(e=>{O(e.isHovered)},[]),j=(0,h.useMemo)(()=>Array.isArray(r.children)?r.children:[],[r.children]),U=null!=(t=lm.find(e=>{var t,n;return e.value===(null!=(t=null==(n=r.meta)?void 0:n.background)?t:P.kn)}))?t:lm[0],H=o-a,L=(0,h.useCallback)(({dragSourceRef:e})=>(0,d.FD)(la,{isFocused:C,onChangeFocus:_,disableClick:!0,menuItems:[(0,d.Y)(ly,{id:`${r.id}-background`,value:U.value,onChange:E})],editMode:v,children:[v&&(0,d.FD)(oj,{onHover:R,innerRef:e,position:"left",children:[(0,d.Y)(lf,{position:"left"}),(0,d.Y)(oM,{onDelete:M}),(0,d.Y)(ne,{onClick:()=>_(!0),icon:(0,d.Y)(A.F.SettingOutlined,{iconSize:"l"})})]}),(0,d.FD)(lF,{className:u()("grid-row",0===j.length&&"grid-row--empty",I&&"grid-row--hovered",U.className),"data-test":`grid-row-${U.className}`,ref:Y,editMode:v,children:[v&&(0,d.Y)(eh,lY({},0===j.length?{component:r,parentComponent:r,dropToChild:!0}:{component:j[0],parentComponent:r},{depth:s,index:0,orientation:"row",onDrop:g,className:u()("empty-droptarget","empty-droptarget--vertical",j.length>0&&"droptarget-side"),editMode:!0,style:lY({height:j.length>0?T:"100%"},j.length>0&&{width:16}),children:({dropIndicatorProps:e})=>e&&(0,d.Y)("div",lY({},e))})),0===j.length&&(0,d.Y)("div",{css:lA,children:(0,p.t)("Empty row")}),j.length>0&&j.map((e,t)=>(0,d.FD)(h.Fragment,{children:[(0,d.Y)(l2,{id:e,parentId:r.id,depth:s+1,index:t,availableColumnCount:H,columnWidth:l,onResizeStart:c,onResize:f,onResizeStop:m,isComponentVisible:y,onChangeTab:b,isInView:$},e),v&&(0,d.Y)(eh,{component:j,parentComponent:r,depth:s,index:t+1,orientation:"row",onDrop:g,className:u()("empty-droptarget","empty-droptarget--vertical",0===H&&t===j.length-1&&"droptarget-side"),editMode:!0,style:lY({height:T},0===H&&t===j.length-1&&{width:16}),children:({dropIndicatorProps:e})=>e&&(0,d.Y)("div",lY({},e))})]},e))]})]}),[U.className,U.value,l,T,s,v,E,_,g,M,R,I,y,C,$,b,f,c,m,H,r,j]);return(0,d.Y)(eu,{component:r,parentComponent:n,orientation:"row",index:i,depth:s,onDrop:g,editMode:v,children:L})});function lE(){return(lE=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let lP="RENDER_TAB",lM="RENDER_TAB_CONTENT",lR=g.styled.div`
  ${({isHighlighted:e,theme:{sizeUnit:t,colorPrimaryBg:r}})=>`
    display: inline-flex;
    position: relative;
    align-items: center;
    margin: 0 ${2*t}px;
    transition: box-shadow 0.2s ease-in-out;
    ${e?`box-shadow: 0 0 ${t}px ${r};`:""}

    .anchor-link-container {
      position: absolute;
      left: 100%;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover .anchor-link-container {
      opacity: 1;
    }
  `}
`,lj=g.styled.div`
  &.drop-indicator {
    position: absolute;
    top: 0;
    border-radius: 4px;
  }
`,lU=e=>e.dropIndicatorProps?(0,d.Y)("div",lE({},e.dropIndicatorProps)):null,lN=(0,h.memo)(e=>{let t=(0,b.wA)(),r=(0,b.d4)(e=>e.dashboardInfo.dash_edit_perm),n=(0,b.d4)(e=>e.dashboardLayout.present),i=(0,b.d4)(e=>e.dashboardState.lastRefreshTime),o=(0,b.d4)(t=>{var r;return null==(r=t.dashboardState.tabActivationTimes)?void 0:r[e.id]}),l=(0,b.d4)(e=>e.dashboardInfo),a=(0,rj.A6)(),s=(0,rj.US)(),c=(0,h.useRef)(null);(0,h.useEffect)(()=>{if(e.renderType===lM&&e.isComponentVisible&&i&&void 0!==o&&i>o){let r=`${e.id}-${i}`;if(c.current!==r){c.current=r;let i=function e(t,r){var n;let i=[],o=r[t];return o&&("CHART"===o.type&&(null==(n=o.meta)?void 0:n.chartId)&&i.push(o.meta.chartId),o.children&&o.children.forEach(t=>{i.push(...e(t,r))})),i}(e.id,n);if(i.length>0){if(a||s)return;setTimeout(()=>{t((0,tu.d1)(i,!0,0,l.id,!1,!0))},100)}}}},[e.isComponentVisible,e.renderType,e.id,i,o,n,l.id,a,s,t]);let f=(0,h.useCallback)(({pathToTabIndex:t})=>{e.setDirectPathToChild(t)},[e.setDirectPathToChild]),m=(0,h.useCallback)(t=>{let{updateComponents:r,component:n}=e;t&&t!==n.meta.text&&r({[n.id]:lE({},n,{meta:lE({},n.meta,{text:t})})})},[e.updateComponents,e.component]),g=(0,h.useCallback)(t=>{e.handleComponentDrop(t),e.onDropOnTab(t)},[e.handleComponentDrop,e.onDropOnTab]),v=(0,h.useCallback)(()=>{null==e.onHoverTab||e.onHoverTab.call(e)},[e.onHoverTab]),x=(0,h.useCallback)(t=>{t&&e.handleComponentDrop(lE({},t,{destination:lE({},t.destination,{index:0})}))},[e.handleComponentDrop]),S=(0,h.useCallback)(e=>"TAB"!==e.type,[]),w=(0,h.useCallback)(()=>{let{component:n,depth:i,availableColumnCount:o,columnWidth:l,onResizeStart:a,onResize:s,onResizeStop:c,editMode:m,isComponentVisible:b,dashboardId:S}=e,w=0===n.children.length;return(0,d.FD)("div",{className:"dashboard-component-tabs-content",children:[m&&(0,d.Y)(eh,{component:n,orientation:"column",index:0,depth:i,onDrop:0===n.children.length?x:g,editMode:!0,className:u()({"empty-droptarget":!0,"empty-droptarget--full":0===n.children.length}),dropToChild:0===n.children.length,children:lU}),w&&(0,d.Y)(eh,{component:n,orientation:"column",index:+!!m,depth:i,onDrop:x,editMode:m,dropToChild:!0,children:()=>(0,d.Y)("div",{"data-test":"emptystate-drop-indicator",children:(0,d.Y)(y.p,{title:m?(0,p.t)("Drag and drop components to this tab"):(0,p.t)("There are no components added to this tab"),description:r&&(m?(0,d.FD)("span",{children:[(0,p.t)("You can")," ",(0,d.Y)(e9.o.Link,{href:(0,j.Am)(`/chart/add?dashboard_id=${S}`),rel:"noopener noreferrer",target:"_blank",children:(0,p.t)("create a new chart")})," ",(0,p.t)("or use existing ones from the panel on the right")]}):(0,d.FD)("span",{children:[(0,p.t)("You can add the components in the")," ",(0,d.Y)("span",{role:"button",tabIndex:0,onClick:()=>t((0,tu.op)(!0)),children:(0,p.t)("edit mode")})]})),image:"chart.svg"})})}),n.children.map((e,t)=>(0,d.FD)(h.Fragment,{children:[(0,d.Y)(l2,{id:e,parentId:n.id,depth:i,index:t,onDrop:g,onHover:v,availableColumnCount:o,columnWidth:l,onResizeStart:a,onResize:s,onResizeStop:c,isComponentVisible:b,onChangeTab:f}),m&&(0,d.Y)(eh,{component:n,orientation:"column",index:t+1,depth:i,onDrop:g,editMode:!0,className:"empty-droptarget",children:lU})]},e))]})},[t,e.component,e.depth,e.availableColumnCount,e.columnWidth,e.onResizeStart,e.onResize,e.onResizeStop,e.editMode,e.isComponentVisible,e.dashboardId,e.handleComponentDrop,e.onDropOnTab,e.setDirectPathToChild,e.updateComponents,v,r,f,m,g,x,S]),C=(0,h.useCallback)(({dropIndicatorProps:t,dragSourceRef:r,draggingTabOnTab:n})=>{let{component:i,index:o,editMode:l,isFocused:a,isHighlighted:s,dashboardId:c,embeddedMode:u,onTabTitleEditingChange:h}=e;return(0,d.FD)(lR,{isHighlighted:s,className:"dragdroppable-tab",ref:r,children:[(0,d.Y)(ng.z,{title:i.meta.text,defaultTitle:i.meta.defaultText,placeholder:i.meta.placeholder,canEdit:l,onSaveTitle:m,showTooltip:!1,editing:l&&a,onEditingChange:h}),!l&&!u&&(0,d.Y)(nl,{id:i.id,dashboardId:c,placement:o>=5?"left":"right"}),t&&!n&&(0,d.Y)(lj,{className:t.className,"data-test":"title-drop-indicator"})]})},[e.component,e.index,e.editMode,e.isFocused,e.isHighlighted,e.dashboardId,e.onTabTitleEditingChange,m]),k=(0,h.useCallback)(()=>{let{component:t,parentComponent:r,index:n,depth:i,editMode:o,onDropPositionChange:l,onDragTab:a}=e;return(0,d.Y)(ep,{component:t,parentComponent:r,orientation:"column",index:n,depth:i,onDrop:g,onHover:v,onDropIndicatorChange:l,onDragTab:a,editMode:o,dropToChild:S,children:C})},[e.component,e.parentComponent,e.index,e.depth,e.editMode,g,v,S,C]);return e.renderType===lP?k():w()}),lH=({currentComponent:e,directPathToChild:t=[]})=>{if(!e||0===t.length||-1===t.indexOf(e.id))return -1;let r=t.findIndex(t=>t===e.id),n=t[r+1];return e.children.indexOf(n)>=0?e.children.findIndex(e=>e===n):-1};function lL(e,t){let r=(e.parents||[]).slice();return r.push(e.id),r.push(e.children[t]),r}function lV(e=[]){if(e.length>0){let t=e.slice();for(;t.length;){let e=t.pop(),r=e&&e.split("-")[0];if(r&&!P.pX.includes(r))return e}}return null}function lB(){return(lB=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let lq=g.styled.div`
  width: 100%;
  background-color: ${({theme:e})=>e.colorBgContainer};

  & .dashboard-component-tabs-content {
    height: 100%;
  }

  & > .hover-menu:hover {
    opacity: 1;
  }

  &.dragdroppable-row .dashboard-component-tabs-content {
    height: calc(100% - 47px);
  }

  /* Ensure tab labels maintain full opacity during drag */
  .ant-tabs-tab {
    .dragdroppable-tab,
    .editable-title,
    textarea {
      opacity: 1;
      color: inherit;
    }
  }

  /* Hide ink-bar during drag */
  ${({isDragging:e})=>e&&`
    .ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar,
    .ant-tabs > .ant-tabs-nav .ant-tabs-ink-bar {
      display: none !important;
    }
  `}
`,lW=e=>{let{disabled:t=!1}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)!(t.indexOf(r=o[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,["disabled"]),{attributes:n,listeners:i,setNodeRef:o,transform:l,transition:a,isDragging:s}=(0,nK.gl)({id:r["data-node-key"],disabled:t}),d=lB({},r.style,{position:"relative",transform:l?`translate3d(${l.x}px, 0, 0)`:void 0,transition:s?"none":a,cursor:t?"default":"move",zIndex:s?1e3:"auto",opacity:1});return(0,h.cloneElement)(r.children,lB({ref:o,style:d},n,t?{}:i))},lG=(0,h.memo)(({tabItems:e,editMode:t,renderHoverMenu:r=!0,tabsDragSourceRef:n,handleDeleteComponent:i,tabsComponent:o,activeKey:l,tabIds:a,handleClickTab:s,handleEdit:c,tabBarPaddingLeft:u=0,onTabsReorder:p,isEditingTabTitle:f=!1})=>{let[m,g]=(0,h.useState)(null),b=(0,h.useRef)(a);b.current=a;let y=(0,nG.MS)(nG.AN,{activationConstraint:{distance:10}}),x=(0,h.useCallback)(e=>{g(e.active.id)},[]),S=(0,h.useCallback)(({active:e,over:t})=>{let r=b.current;if(e.id!==(null==t?void 0:t.id)&&p){let n=r.findIndex(t=>t===e.id),i=r.findIndex(e=>e===(null==t?void 0:t.id));-1!==n&&-1!==i&&p(n,i)}g(null)},[p]),w=(0,h.useCallback)(()=>{g(null)},[]);return(0,d.FD)(lq,{className:"dashboard-component dashboard-component-tabs","data-test":"dashboard-component-tabs",isDragging:null!==m,children:[t&&r&&n&&(0,d.FD)(oj,{innerRef:n,position:"left",children:[(0,d.Y)(lf,{position:"left"}),(0,d.Y)(oM,{onDelete:i})]}),(0,d.Y)(C.pX,lB({id:o.id,activeKey:l,onChange:e=>{if("string"==typeof e){let t=a.indexOf(e);-1!==t&&s(t)}},onEdit:c,"data-test":"nav-list",type:t?"editable-card":"card",items:e,tabBarStyle:{paddingLeft:u},fullHeight:!0},t&&{renderTabBar:(e,t)=>(0,d.Y)(nG.Mp,{sensors:[y],onDragStart:x,onDragEnd:S,onDragCancel:w,collisionDetection:nG.fp,children:(0,d.Y)(nK.gB,{items:a,strategy:nK.m$,children:(0,d.Y)(t,lB({},e,{children:e=>(0,v.n)(lW,lB({},e.props,{key:e.key,"data-node-key":e.key,disabled:f}),e)}))})},a.join("-"))}))]})});function lK(){return(lK=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}lG.displayName="TabsRenderer";let lQ=g.styled.div`
  border: 2px solid ${({theme:e})=>e.colorPrimary};
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  ${({pos:e})=>"left"===e?"left: -4px":"right: -4px"};
  border-radius: 2px;
`,lX=e=>(0,d.FD)(d.FK,{children:[(0,d.Y)(A.F.CloseOutlined,{iconSize:"s"}),e.showDropIndicators.right&&(0,d.Y)(lQ,{className:"drop-indicator-right",pos:"right"})]}),lZ=(0,h.memo)(e=>{let t=(0,g.useTheme)(),r=(0,b.d4)(e=>e.nativeFilters),n=(0,b.d4)(e=>e.dashboardState.activeTabs),i=(0,b.d4)(e=>e.dashboardState.directPathToChild),o=(0,b.d4)(e=>{var t;return null!=(t=e.dashboardState.nativeFiltersBarOpen)&&t}),{tabIndex:l,activeKey:a}=(0,h.useMemo)(()=>{let t=Math.max(0,lH({currentComponent:e.component,directPathToChild:i}));0===t&&(null==n?void 0:n.length)&&e.component.children.forEach((e,r)=>{0===t&&(null==n?void 0:n.includes(e))&&(t=r)});let{children:r}=e.component,o=r[t];return{tabIndex:t,activeKey:o}},[n,e.component,i]),[s,c]=(0,h.useState)(a),[u,f]=(0,h.useState)(l),[m,v]=(0,h.useState)(null),[y,x]=(0,h.useState)(null),[S,w]=(0,h.useState)(null),[C,k]=(0,h.useState)(!1),$=(0,iv.Z)(s),D=(0,iv.Z)(e.dashboardId),I=(0,iv.Z)(i),O=(0,iv.Z)(e.component.children);(0,h.useEffect)(()=>{$?e.setActiveTab(s,$):e.setActiveTab(s)},[e.setActiveTab,$,s]),(0,h.useEffect)(()=>{D&&e.dashboardId!==D&&(f(l),c(a))},[e.dashboardId,D,l,a]),(0,h.useEffect)(()=>{let t=Math.max(0,e.component.children.length-1);u>t&&f(t)},[u,e.component.children.length,f]),(0,h.useEffect)(()=>{let t=e.component.children;if(e.isComponentVisible){let r=lV(i),n=lV(I);if(r!==n||r===n&&t!==O){let r=lH({currentComponent:e.component,directPathToChild:i});r>-1&&r!==u&&(f(r),c(t[r]))}}},[e.component,i,e.isComponentVisible,u,I,O]);let T=(0,h.useCallback)(t=>{let{component:r}=e,{children:n}=r;if(t!==u){let n=lL(r,t),i=n[n.length-1];e.logEvent(eE.FA,{target_id:i,index:t}),e.onChangeTab({pathToTabIndex:n}),f(t)}n[t]&&c(n[t])},[e.component,e.logEvent,e.onChangeTab,u,c]),z=(0,h.useCallback)(t=>{let{component:r}=e,{destination:n}=t;if(n){let e=n.id===r.id?n.index:r.children.indexOf(n.id);e>-1&&setTimeout(()=>{T(e)},30)}},[e.component,T]),Y=(0,h.useCallback)(t=>{"TABS"!==t.dragging.type&&e.handleComponentDrop(t)},[e.handleComponentDrop]),F=(0,h.useCallback)(e=>{u===e&&T(Math.max(0,e-1))},[u,T]),A=(0,h.useCallback)(e=>{w(e)},[]),_=(0,h.useCallback)(()=>{if(S){let{component:t,deleteComponent:r}=e;r(S,t.id),F(t.children.indexOf(S)),w(null)}},[S,e.component,e.deleteComponent,F]),E=(0,h.useCallback)(()=>{w(null)},[]),M=(0,h.useCallback)((t,r)=>{let{component:n,createComponent:i}=e;"add"===r?("string"!=typeof t&&"stopPropagation"in t&&t.stopPropagation(),i({destination:{id:n.id,type:n.type,index:n.children.length},dragging:{id:P.nO,type:"TAB"}})):"remove"===r&&A(t)},[e.component,e.createComponent,A]),R=(0,h.useCallback)(()=>{let{deleteComponent:t,id:r,parentId:n}=e;t(r,n)},[e.deleteComponent,e.id,e.parentId]),j=(0,h.useCallback)(e=>{let{isDraggingOver:t,index:r}=e;t?(v(e.dropIndicator),x(r)):v(null)},[]),U=(0,h.useCallback)(e=>{k(e)},[]),N=(0,h.useCallback)((t,r)=>{let{component:n,updateComponents:i}=e,o=n.children,l=[...o],[a]=l.splice(t,1);l.splice(r,0,a);let s=o[u],d=l.indexOf(s);i({[n.id]:lK({},n,{children:l})}),-1!==d&&d!==u&&f(d),-1!==d&&c(s)},[e.component,e.updateComponents,u,s]),{depth:H,component:L,parentComponent:V,index:B,availableColumnCount:q=0,columnWidth:W=0,onResizeStart:G,onResize:K,onResizeStop:Q,renderTabContent:X=!0,renderHoverMenu:Z=!0,isComponentVisible:J,editMode:ee}=e,{children:et}=L,er=!1===X?o?0:4*t.sizeUnit:0,en=(0,h.useCallback)(e=>e===y?{left:ee&&m===ei.S4,right:ee&&m===ei.Db}:{left:!1,right:!1},[y,m,ee]),eo=(0,h.useCallback)(()=>{var e;let t=(null==r?void 0:r.focusedFilterId)||(null==r?void 0:r.hoveredFilterId);return t?null==(e=r.filters[t])?void 0:e.tabsInScope:void 0},[r])(),el=(0,h.useMemo)(()=>et.map((e,t)=>({key:e,label:(0,d.FD)(d.FK,{children:[en(t).left&&(0,d.Y)(lQ,{className:"drop-indicator-left",pos:"left"}),(0,d.Y)(l2,{id:e,parentId:L.id,depth:H,index:t,renderType:lP,availableColumnCount:q,columnWidth:W,onDropOnTab:z,onDropPositionChange:j,onHoverTab:()=>T(t),isFocused:s===e,isHighlighted:s!==e&&(null==eo?void 0:eo.includes(e)),onTabTitleEditingChange:U})]}),closeIcon:(0,d.Y)(lX,{role:"button",tabIndex:t,showDropIndicators:en(t)}),children:X?(0,d.Y)(l2,{id:e,parentId:L.id,depth:H,index:t,renderType:lM,availableColumnCount:q,columnWidth:W,onResizeStart:G,onResize:K,onResizeStop:Q,onDropOnTab:z,isComponentVisible:u===t&&J}):void 0})),[et,en,L.id,H,q,W,z,j,T,s,eo,X,G,K,Q,u,J,U]),ea=(0,h.useCallback)(({dragSourceRef:e})=>(0,d.Y)(lG,{tabItems:el,editMode:ee,renderHoverMenu:Z,tabsDragSourceRef:e,handleDeleteComponent:R,tabsComponent:L,activeKey:s,tabIds:et,handleClickTab:T,handleEdit:M,tabBarPaddingLeft:er,onTabsReorder:N,isEditingTabTitle:C,onTabTitleEditingChange:U}),[el,ee,Z,R,L,s,et,T,M,er,N,C,U]);return(0,d.FD)(d.FK,{children:[(0,d.Y)(eu,{component:L,parentComponent:V,orientation:"row",index:B,depth:H,onDrop:Y,editMode:ee,children:ea}),S&&(0,d.Y)(e7.aF,{show:!!S,onHide:E,onHandledPrimaryAction:_,primaryButtonName:(0,p.t)("Delete"),primaryButtonStyle:"danger",title:(0,p.t)("Delete dashboard tab?"),centered:!0,children:(0,d.FD)("span",{children:[(0,p.t)("Deleting a tab will remove all content within it and will deactivate any related alerts or reports. You may still reverse this action with the")," ",(0,d.Y)("b",{children:(0,p.t)("undo")})," ",(0,p.t)("button (cmd + z) until you save your changes.")]})})]})});function lJ(){return(lJ=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let l0={CHART:o8,[E.xY]:lh,COLUMN:lC,[E.n6]:l$,HEADER:lT,ROW:l_,TAB:lN,TABS:lZ,[E.rG]:({component:e,parentComponent:t,index:r,depth:n,handleComponentDrop:i,editMode:o,columnWidth:l,availableColumnCount:a,onResizeStart:s,onResizeStop:c,onResize:f,deleteComponent:m,parentId:g,updateComponents:v,id:y})=>{let x="COLUMN"===t.type?t.meta.width||1:e.meta.width||1,S=()=>{m(y,g)},w=lm.find(t=>t.value===(e.meta.background||P.kn)),{Component:C}=ew.get(e.meta.componentKey),k=(0,b.d4)(({nativeFilters:e,dataMask:t})=>({nativeFilters:e,dataMask:t}),b.bN);return(0,d.Y)(eu,{component:e,parentComponent:t,orientation:"ROW"===t.type?"column":"row",index:r,depth:n,onDrop:i,editMode:o,children:({dragSourceRef:r})=>(0,d.Y)(la,{menuItems:[(0,d.Y)(ly,{id:`${e.id}-background`,value:e.meta.background,onChange:t=>{v({[e.id]:lJ({},e,{meta:lJ({},e.meta,{background:t})})})}})],editMode:o,children:(0,d.Y)("div",{"data-test":`dashboard-${e.componentKey}`,className:u()("dashboard-component",`dashboard-${e.componentKey}`,null==w?void 0:w.className),id:e.id,children:(0,d.Y)(o1,{id:e.id,editMode:o,adjustableWidth:"ROW"===t.type,widthStep:l,widthMultiple:x,heightStep:8,adjustableHeight:!1,heightMultiple:e.meta.height,minWidthMultiple:1,minHeightMultiple:1,maxWidthMultiple:a+x,onResizeStart:s,onResize:f,onResizeStop:c,children:(0,d.FD)("div",{ref:r,className:"dashboard-component","data-test":"dashboard-component-chart-holder",children:[o&&(0,d.Y)(oj,{position:"top",children:(0,d.Y)(oM,{onDelete:S})}),(0,d.Y)(h.Suspense,{fallback:(0,d.Y)("div",{children:(0,p.t)("Loading...")}),children:(0,d.Y)(C,{dashboardData:k})})]})})})})})}};var l1=r(89524);function l4(){return(l4=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let l2=(0,h.memo)(e=>{let t=(0,b.wA)(),r=(0,b.d4)(e=>e.dashboardLayout.present),n=(0,b.d4)(e=>e.dashboardInfo),i=(0,b.d4)(e=>e.dashboardState.editMode),o=(0,b.d4)(e=>e.dashboardState.fullSizeChartId),l=n.id,a=r[e.id],s=r[e.parentId],c=(0,h.useCallback)(e=>r[e],[r]),{isComponentVisible:u=!0}=e,p=(0,ra.ug)(),f=!n.userId,m=(0,h.useMemo)(()=>(0,k.zH)({addDangerToast:td.iB,createComponent:tc.a0,deleteComponent:tc.$5,updateComponents:tc.m2,handleComponentDrop:tc.lL,setDirectPathToChild:tu.I,setFullSizeChartId:tu.GM,setActiveTab:tu.YF,logEvent:th.$},t),[t]),{occupiedColumnCount:g,minColumnWidth:v}=(0,h.useMemo)(()=>{if(a){let t=a.type;if("ROW"===t||"COLUMN"===t){let{occupiedWidth:n,minimumWidth:i}=(0,l1.A)({id:e.id,components:r});if("ROW"===t)return{occupiedColumnCount:n};if("COLUMN"===t)return{minColumnWidth:i}}}return{}},[a,r,e.id]),y=a?l0[a.type]:null;return y?(0,d.Y)(y,l4({},e,m,{component:a,getComponentById:c,parentComponent:s,editMode:i,filters:p,dashboardId:l,dashboardInfo:n,fullSizeChartId:o,occupiedColumnCount:g,minColumnWidth:v,isComponentVisible:u,embeddedMode:f})):null});var l6=r(47036),l3=r(70399),l5=r(24164),l7=r(93634),l8=r(46996),l9=r(61772),ae=r(94741);let at=(e,t=!1)=>(r,n=!1)=>{let i=n||t;if(!r&&e)return i?e:{"data-test":e};if(r&&!e)return i?r:{"data-test":r};if(!r&&!e)return console.warn('testWithId function has missed "prefix" and "id" params'),i?"":{"data-test":""};let o=`${e}__${r}`;return i?o:{"data-test":o}};function ar(){return(ar=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let an=(e,t)=>Object.values(e).reduce((e,r)=>t&&!t.has(r.id)?e:ar({},e,{[r.id]:r.extraFormData}),{}),ai=(e,t)=>{var r;return!!(null==(r=e.controlValues)?void 0:r.enableEmptyFilter)&&null==(null==t?void 0:t.value)},ao=(0,nF.Mz)([e=>e.sliceEntities.slices,e=>e.datasources],(e,t)=>Object.keys(e).reduce((r,n)=>{var i,o;let l=Number(n),a=(null==(o=e[l])||null==(i=o.form_data)?void 0:i.datasource)?t[e[l].form_data.datasource]:void 0;return ar({},r,{[n]:a?a.verbose_map:{}})},{})),al=()=>(0,b.d4)(ao),aa=at("filter-bar");function as(){return(as=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ad=()=>{let e=(0,b.d4)(e=>{var t;return null==(t=e.dashboardState)?void 0:t.preselectNativeFilters}),t=i6();return(0,h.useMemo)(()=>t.reduce((t,r)=>as({},t,{[r.id]:as({},r,{preselect:null==e?void 0:e[r.id]})}),{}),[t,e])},ac=()=>{let e=(0,b.d4)(e=>e.dataMask);return(0,h.useMemo)(()=>Object.values(e).filter(e=>(0,nX.qQ)(String(e.id))).reduce((e,t)=>as({},e,{[t.id]:t}),{}),[e])};var au=r(66718);function ah(){return(ah=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ap=g.styled.div`
  ${({theme:e,isVertical:t})=>(0,v.AH)`
    display: flex;

    ${t?(0,v.AH)`
            flex-direction: column;
            align-items: center;
            position: sticky;
            z-index: 100;
            bottom: 0;
            padding: ${4*e.sizeUnit}px;
            padding-top: ${6*e.sizeUnit}px;
            background: linear-gradient(
              ${(0,w.A)(e.colorBgLayout).setAlpha(0).toRgbString()},
              ${e.colorBgContainer} 20%
            );
          `:(0,v.AH)`
            align-items: center;
            margin-left: auto;
          `}
  `}
`,af=({onApply:e,onClearAll:t,dataMaskApplied:r,dataMaskSelected:n,isApplyDisabled:i,filterBarOrientation:o=tI.QI.Vertical,chartCustomizationItems:l,hasOutOfScopeRequiredFilters:a=!1})=>{let s=o===tI.QI.Vertical,c=(0,h.useMemo)(()=>{let e=Object.entries(n).some(([,e])=>{var t,r;let n=(0,nT.A)(null==e||null==(t=e.filterState)?void 0:t.value),i=(0,nT.A)(null==e||null==(r=e.ownState)?void 0:r.column);return n||i}),t=Object.entries(r).some(([,e])=>{var t,r;let n=(0,nT.A)(null==e||null==(t=e.filterState)?void 0:t.value),i=(0,nT.A)(null==e||null==(r=e.ownState)?void 0:r.column);return n||i}),i=null==l?void 0:l.some(e=>{var t,i;if(e.removed)return!1;let o=r[e.id]||n[e.id],l=(0,nT.A)(null==o||null==(t=o.filterState)?void 0:t.value),a=(0,nT.A)(null==o||null==(i=o.ownState)?void 0:i.column);return l||a});return e||t||i},[n,r,l]);return(0,d.FD)(ap,{isVertical:s,"data-test":"filterbar-action-buttons",children:[(0,d.Y)(z.$n,ah({disabled:i,buttonStyle:"primary",htmlType:"submit",css:e=>(0,v.AH)`
  ${s&&(0,v.AH)`
      margin-bottom: ${3*e.sizeUnit}px;
    `}
`,onClick:e},aa("apply-button"),{children:s?(0,p.t)("Apply filters"):(0,p.t)("Apply")})),(0,d.FD)(tG.s,{children:[(0,d.Y)(z.$n,ah({disabled:!c,buttonStyle:"link",css:e=>(0,v.AH)`
  && {
    color: ${e.colorTextSecondary};
    margin-left: 0;

    &:hover {
      color: ${e.colorPrimaryText};
    }

    &[disabled],
    &[disabled]:hover {
      color: ${e.colorTextDisabled};
    }

    ${!s&&(0,v.AH)`
        text-transform: capitalize;
        font-weight: ${e.fontWeightNormal};
      `}
  }
`,onClick:t},aa("clear-button"),{children:(0,p.t)("Clear all")})),a&&(0,d.Y)(H.m,{title:(0,p.t)("Some required filters on other tabs have values and will not be cleared"),children:(0,d.Y)(A.F.InfoCircleOutlined,{iconSize:"s",css:e=>(0,v.AH)`
                margin-left: ${e.sizeUnit}px;
              `})})]})]})};var am=r(78443),ag=(l=function(e,t){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),av="html",ab=function(e,t){var r,n,i,o=null!=(r=e.ownerDocument)?r:document,l=null!=(i=null!=(n=o.defaultView)?n:o.parentWindow)?i:window;switch(t){case av:return e instanceof l.HTMLElement;case"svg":return e instanceof l.SVGElement;default:throw Error('Unrecognized element type "'.concat(t,'" for validateElementType.'))}},ay=function(e,t){var r,n,i,o,l,a={};switch(e){case av:l=document.createElement(null!=(r=null==t?void 0:t.containerElement)?r:"div");break;case"svg":l=document.createElementNS("http://www.w3.org/2000/svg",null!=(n=null==t?void 0:t.containerElement)?n:"g");break;default:throw Error('Invalid element type "'.concat(e,'" for createPortalNode: must be "html" or "svg".'))}if(t&&"object"==typeof t&&t.attributes)for(var s=0,d=Object.entries(t.attributes);s<d.length;s++){var c=d[s],u=c[0],h=c[1];l.setAttribute(u,h)}var p={element:l,elementType:e,setPortalProps:function(e){a=e},getInitialPortalProps:function(){return a},mount:function(t,r){if(r!==o){if(p.unmount(),t!==i&&!ab(t,e))throw Error('Invalid element type for portal: "'.concat(e,'" portalNodes must be used with ').concat(e," elements, but OutPortal is within <").concat(t.tagName,">."));t.replaceChild(p.element,r),i=t,o=r}},unmount:function(e){(!e||e===o)&&i&&o&&(i.replaceChild(o,p.element),i=void 0,o=void 0)}};return p},ax=function(e){function t(t){var r=e.call(this,t)||this;return r.addPropsChannel=function(){Object.assign(r.props.node,{setPortalProps:function(e){r.setState({nodeProps:e})}})},r.state={nodeProps:r.props.node.getInitialPortalProps()},r}return ag(t,e),t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,r=t.children,n=t.node;return oU.createPortal(h.Children.map(r,function(t){return h.isValidElement(t)?h.cloneElement(t,e.state.nodeProps):t}),n.element)},t}(h.PureComponent),aS=function(e){function t(t){var r=e.call(this,t)||this;return r.placeholderNode=h.createRef(),r.passPropsThroughPortal(),r}return ag(t,e),t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,r=t.parentNode;e.mount(r,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode.setPortalProps({}),this.currentPortalNode=e);var t=this.placeholderNode.current,r=t.parentNode;e.mount(r,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){var e=this.props.node;e.unmount(this.placeholderNode.current),e.setPortalProps({})},t.prototype.render=function(){var e=this.props.node.element.tagName,t=this.props.node.elementType===av?e.toLowerCase():e;return h.createElement(t,{ref:this.placeholderNode})},t}(h.PureComponent),aw=ay.bind(null,av);ay.bind(null,"svg");var aC=r(52747);function ak(){return(ak=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let a$=(0,h.forwardRef)(({items:e,onOverflowingStateChange:t,dropdownContent:r,dropdownRef:n,dropdownStyle:i={},dropdownTriggerCount:o,dropdownTriggerIcon:l,dropdownTriggerText:a=(0,p.t)("More"),dropdownTriggerTooltip:s=null,forceRender:c,style:u},f)=>{let m=(0,g.useTheme)(),{ref:b,width:y=0}=(0,aC.uZ)(),x=(0,iv.Z)(y)||0,{current:S}=b,[w,C]=(0,h.useState)([]),[k,$]=(0,h.useState)(!1),[D,I]=(0,h.useState)(-1),O=(0,h.useRef)(null);n&&(O=n);let[T,Y]=(0,h.useState)(!1),[F,_]=(0,h.useState)(!1),E=(0,h.useCallback)(()=>{let t=null==S?void 0:S.children.item(0);if(t){let r=Array.from(t.children);C(t=>{if(t.length!==e.length)return t;let n=[...t],i=!1;return r.forEach((e,t)=>{if(t<n.length){let r=e.getBoundingClientRect().width;n[t]!==r&&(n[t]=r,i=!0)}}),i?n:t})}},[null==S?void 0:S.children,e.length]),P=e=>e.reduce(([e,t],r)=>(e.push({id:r.id,element:(0,h.cloneElement)(r.element,{key:r.id})}),t.push(r.id),[e,t]),[[],[]]),[M,R]=(0,h.useMemo)(()=>P(e.slice(0,-1!==D?D:e.length)),[e,D]),[j,U]=(0,h.useMemo)(()=>-1!==D?P(e.slice(D)):[[],[]],[e,D]);(0,h.useEffect)(()=>{let e=null==S?void 0:S.children.item(0);if(!e)return;let t=Array.from(e.children),r=new ResizeObserver(()=>{E()});return t.map(e=>r.observe(e)),()=>{t.map(e=>r.unobserve(e)),r.disconnect()}},[e.length,S,E]),(0,h.useLayoutEffect)(()=>{if(k)return;let t=null==S?void 0:S.children.item(0);if(t){let{children:r}=t,n=Array.from(r);if(w.length!==e.length)if(n.length===e.length)C(n.map(e=>e.getBoundingClientRect().width));else{I(-1),_(!0);return}let i=n.findIndex(e=>e.getBoundingClientRect().right>t.getBoundingClientRect().right+1),o=-1===i&&j.length>0?e.length-j.length:i;if(y>x){let t=null==S?void 0:S.children.item(1),r=(null==t?void 0:t.getBoundingClientRect().right)||0,i=((null==S?void 0:S.getBoundingClientRect().right)||0)-r,l=0;for(let t=n.length;t<e.length;t+=1)if((l+=w[t])<=i)o=t+1;else break}I(o),_(!1)}},[S,e.length,w,j.length,x,y,k]),(0,h.useEffect)(()=>{t&&t({notOverflowed:R,overflowed:U})},[R,t,U]);let N=-1!==D?e.length-D:0,L=(0,h.useMemo)(()=>r||N?(0,d.Y)("div",{css:(0,v.AH)`
              display: flex;
              flex-direction: column;
              gap: ${4*m.sizeUnit}px;
            `,"data-test":"dropdown-content",style:i,ref:O,children:r?r(j):j.map(e=>e.element)}):null,[r,N,m.sizeUnit,i,j]),V=(0,iv.Z)(!!L,!1);return(0,h.useLayoutEffect)(()=>{k&&setTimeout(()=>{O.current&&Y(O.current.scrollHeight>500)},100)},[k]),(0,h.useImperativeHandle)(f,()=>ak({},b.current,{open:()=>$(!0)}),[b]),(0,h.useEffect)(()=>(document.onscroll=k?()=>$(!1):null,()=>{document.onscroll=null}),[k]),(0,d.FD)("div",{ref:b,css:(0,v.AH)`
          display: flex;
          align-items: center;
        `,children:[(0,d.Y)("div",{css:(0,v.AH)`
            display: flex;
            align-items: center;
            gap: ${4*m.sizeUnit}px;
            margin-right: ${4*m.sizeUnit}px;
            min-width: 0px;
          `,"data-test":"container",style:u,children:M.map(e=>e.element)}),(!!L||F&&V)&&(0,d.FD)(d.FK,{children:[(0,d.Y)(v.mL,{styles:[(0,v.AH)`
                .ant-popover-container {
                  /* Some OS versions only show the scroll when hovering. */
                  /* These settings will make the scroll always visible. */
                  ::-webkit-scrollbar {
                    -webkit-appearance: none;
                    width: 14px;
                  }
                  ::-webkit-scrollbar-thumb {
                    border-radius: 9px;
                    background-color: ${m.colorFillSecondary};
                    border: 3px solid transparent;
                    background-clip: content-box;
                  }
                  ::-webkit-scrollbar-track {
                    background-color: ${m.colorFillQuaternary};
                    border-left: 1px solid ${m.colorFillTertiary};
                  }
                }
              `]}),(0,d.Y)(nr.A,{styles:{container:{maxHeight:"500px",overflow:T?"auto":"visible"}},content:L,trigger:"click",open:k&&!!L,onOpenChange:e=>{L&&$(e)},placement:"bottom",forceRender:c,fresh:!0,children:(0,d.Y)(H.m,{title:s,children:(0,d.FD)(z.$n,{buttonStyle:"secondary","data-test":"dropdown-container-btn",icon:l,css:(0,v.AH)`
                    padding-left: ${m.paddingXS}px;
                    padding-right: ${m.paddingXXS}px;
                    gap: ${m.sizeXXS}px;
                  `,children:[a,(0,d.Y)(ib.E,{count:null!=o?o:N,color:(null!=o?o:N)>0?m.colorPrimary:m.colorTextSecondary,showZero:!0,css:(0,v.AH)`
                      margin-left: ${2*m.sizeUnit}px;
                    `}),(0,d.Y)(A.F.DownOutlined,{iconSize:"m",iconColor:m.colorIcon,css:(0,v.AH)`
                      .anticon {
                        display: flex;
                      }
                    `})]})})})]})]})});var aD=r(10938);let aI=({filtersOutOfScope:e,renderer:t,forceRender:r=!1})=>(0,d.Y)(aD.S,{ghost:!0,bordered:!0,expandIconPosition:"end",items:[{key:"out-of-scope-filters",label:(0,d.Y)("span",{css:e=>(0,v.AH)`
              font-size: ${e.fontSizeSM}px;
            `,children:(0,p.t)("Filters out of scope (%d)",e.length)}),children:e.map(t),forceRender:r}]}),aO=({customizationsOutOfScope:e,renderer:t,forceRender:r=!1})=>(0,d.Y)(aD.S,{ghost:!0,bordered:!0,expandIconPosition:"end",collapsible:0===e.length?"disabled":void 0,items:[{key:"out-of-scope-customizations",label:(0,d.Y)("span",{css:e=>(0,v.AH)`
              font-size: ${e.fontSizeSM}px;
            `,children:(0,p.t)("Customizations out of scope (%d)",e.length)}),children:e.map(t),forceRender:r}]});var aT=r(63607),az=r(98837),aY=r(34556),aF=r(59566),aA=r(53010);r(54299);let a_=(0,M.A)((e,t)=>{e(t?(0,aA.X6)(t):(0,aA.cd)())},l6.Y.FAST_DEBOUNCE),aE=(0,M.A)((e,t)=>{e(t?(0,aA.TH)(t):(0,aA.S9)())},l6.Y.FAST_DEBOUNCE),aP=(0,M.A)((e,t)=>{e(t?(0,aA.ZP)(t):(0,aA.sb)())},l6.Y.FAST_DEBOUNCE);function aM(e){let t=(0,b.d4)(e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters},b.bN);return(0,h.useMemo)(()=>{var r;let n,i,o;return r=null!=t?t:{},n=[],i=new Set([e]),(o=e=>{var t;(0,iz.A)(null==(t=r[e])?void 0:t.cascadeParentIds).forEach(e=>{i.has(e)||(i.add(e),o(e),n.push(e))})})(e),n},[e,t])}let aR=(0,nF.Mz)([e=>e.dashboardState.directPathToChild,e=>e.dashboardState.directPathLastUpdated],(e,t)=>{var r;return{outlinedFilterId:null==(r=o4(e||[]))?void 0:r.native_filter,lastUpdated:t}}),aj=()=>(0,b.d4)(aR);function aU(){return(aU=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let aN=g.styled.div`
  padding-bottom: ${({theme:e,orientation:t,overflow:r})=>{var n;return t!==tI.QI.Horizontal||r?null!=(n=null==e?void 0:e.sizeUnit)?n:4:0}}px;

  & > div {
    height: auto !important;
    min-height: ${32}px;
  }
`,aH=[{data:[{}]}],aL=(0,h.memo)(({dataMaskSelected:e,filter:t,onFilterSelectionChange:r,inView:n=!0,showOverflow:i,parentRef:o,setFilterActive:l,orientation:a=tI.QI.Vertical,overflow:s=!1,validateStatus:c,clearAllTrigger:u,onClearAllComplete:f})=>{var m,g,v,y;let w,C,k,$=(0,az.u)(),{id:D,targets:I,filterType:O}=t,T=(0,iF.Qj)(t),z=T?void 0:t.adhoc_filters,Y=T?void 0:t.time_range,F=T?void 0:t.granularity_sqla,A=(0,nb.A)().get(O),_=(w=aM(D),(0,h.useMemo)(()=>{let t={};return w.forEach(r=>{let n=null==e?void 0:e[r];t=(0,iI.pY)(t,null==n?void 0:n.extraFormData)}),t},[e,w])),E=aM(D),P=(C=(0,b.d4)(e=>e.dashboardState.isRefreshing),k=(0,b.d4)(e=>e.dashboardState.isFiltersRefreshing),!C&&k),M=(0,h.useMemo)(()=>[T?ny.nS.ChartCustomization:ny.nS.NativeFilter],[T]),[R,j]=(0,h.useState)([]),U=!!(null==(m=t.cascadeParentIds)?void 0:m.length),[H,L]=(0,h.useState)(U),V=(0,b.d4)(e=>e.dashboardInfo.id),[B,q]=(0,h.useState)(),[W,G]=(0,h.useState)({inView:!1}),[K,Q]=(0,h.useState)({}),[X,Z]=(0,h.useState)(n),J=(0,h.useRef)(null),[ee]=I||[],{datasetId:et,datasourceType:er,column:en={}}=ee||{},ei=null==en?void 0:en.name,eo=!!et,[el,ea]=(0,h.useState)(eo),[es,ed]=(0,h.useState)(!1),ec=(0,b.wA)(),{outlinedFilterId:eu,lastUpdated:eh}=aj(),ep=(0,h.useCallback)(()=>{ed(!1),ea(!1),P&&ec((0,tu.Xd)())},[ec,P]);(0,h.useEffect)(()=>{L(U)},[U]),(0,h.useEffect)(()=>{!X&&n&&Z(!0)},[n,X,Z]),(0,h.useEffect)(()=>{var r,n,i;if(!X)return;let o=(0,iI.tg)(aU({},t,{datasetId:et,datasourceType:er,dependencies:_,groupby:ei,adhoc_filters:z,time_range:Y,granularity_sqla:F,dashboardId:V})),l=(null==(r=t.dataMask)?void 0:r.ownState)||{};if(E.length){let t=0,r=!1;E.forEach(n=>{var i,o;let l=null==e||null==(i=e[n])?void 0:i.extraFormData;(null==l||null==(o=l.filters)?void 0:o.length)&&(t+=l.filters.length),(null==l?void 0:l.time_range)&&(r=!0)});let o=null!=(n=null==(i=_.filters)?void 0:i.length)?n:0,l=!!(null==_?void 0:_.time_range);if(t!==o||l&&!r)return;L(!1)}if(!es&&(!(0,aY.A)(W,o,(e,t,r)=>"url_params"===r||void 0)||!(0,l8.A)(K,l)||P)){if(G(o),Q(l),!eo)return;ed(!0),(0,oD.yV)({formData:o,force:P,ownState:l}).then(({response:e,json:t})=>{if((0,N.G7)(N.TO.GlobalAsyncQueries)){let r="result"in t?t.result[0]:t;if(200===e.status)j([r]),q(void 0),ep();else if(202===e.status)(0,aF.fv)(r).then(e=>{j(e),q(void 0),ep()}).catch(e=>{(0,nt.h4)(e).then(e=>{q(e),ep()})});else throw Error(`Received unexpected response status (${e.status}) while fetching chart data`)}else j(t.result),q(void 0),ep()}).catch(e=>{(0,nt.h4)(e).then(e=>{q(e),ep()})})}},[X,_,et,ei,ep,t,eo,es,P,e,L,E]),(0,h.useEffect)(()=>{eu&&eu===t.id&&setTimeout(()=>{var e;null==J||null==(e=J.current)||e.focus()},s?l6.Y.FAST_DEBOUNCE:0)},[J,eu,eh,t.id,s]);let ef=(0,h.useCallback)(e=>r(t,e),[t,r]),em=(0,h.useCallback)(()=>{T||eu!==D&&aE(ec,D)},[ec,D,eu,T]),eg=(0,h.useCallback)(()=>{T||(aE(ec),eu===D&&ec((0,tu.I)([])))},[ec,D,eu,T]),ev=(0,h.useCallback)(()=>{T?ec((0,aA.ZP)(D)):a_(ec,D)},[ec,D,T]),eb=(0,h.useCallback)(()=>{T?ec((0,aA.sb)()):a_(ec)},[ec,T]),ey=(0,h.useMemo)(()=>({setDataMask:ef,setHoveredFilter:ev,unsetHoveredFilter:eb,setFocusedFilter:em,unsetFocusedFilter:eg,setFilterActive:l,clearAllTrigger:u,onClearAllComplete:f}),[ef,l,ev,eb,em,eg,u,f]),ex=(0,h.useMemo)(()=>{var e;return aU({},null==(e=t.dataMask)?void 0:e.filterState,{validateStatus:c})},[null==(g=t.dataMask)?void 0:g.filterState,c]),eS=(0,h.useMemo)(()=>({filterBarOrientation:a,isOverflowingFilterBar:s}),[a,s]);return B?(0,d.Y)(S.x6,{error:null==(y=B.errors)?void 0:y[0],compact:!0,fallback:(0,d.Y)(S.$p,{errorType:(0,p.t)("Network error"),message:(0,p.t)("Network error while attempting to fetch resource"),type:"error",compact:!0})}):(0,d.Y)(aN,{"data-test":"form-item-value",orientation:a,overflow:s,children:el?(0,d.FD)(tG.s,{align:"center",children:[(0,d.Y)(x.R,{position:"inline",size:"s",muted:!0}),H?(0,p.t)("Awaiting filter selection"):(0,p.t)("Loading filter values")]}):(0,d.Y)(aT.A,{height:32,width:0,showOverflow:i,formData:W,displaySettings:eS,parentRef:o,inputRef:J,queriesData:eo?R:aH,chartType:O,behaviors:M,filterState:ex,ownState:null==(v=t.dataMask)?void 0:v.ownState,enableNoResults:null==A?void 0:A.enableNoResults,isRefreshing:es,hooks:ey,theme:$})})});var aV=r(91770);let aB=e=>{var t,r;return(null==e||null==(t=e.meta)?void 0:t.text)||(null==e||null==(r=e.meta)?void 0:r.defaultText)||""},aq=e=>{var t,r;return(null==e||null==(t=e.meta)?void 0:t.sliceNameOverride)||(null==e||null==(r=e.meta)?void 0:r.sliceName)||(null==e?void 0:e.id)||""},aW=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: flex;
    align-items: center;
    margin: ${e.sizeUnit}px 0;
    font-size: ${e.fontSizeSM}px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    & .ant-tooltip-open {
      display: inline-flex;
    }
  `};
`,aG=g.styled.span`
  ${({theme:e})=>(0,v.AH)`
    color: ${e.colorText};
    padding-right: ${4*e.sizeUnit}px;
    margin-right: auto;
    white-space: nowrap;
  `};
`,aK=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    color: ${e.colorText};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline;
  `};
`,aQ=g.styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,aX=g.styled.span`
  text-decoration: underline;
  cursor: pointer;
`,aZ=g.styled.span`
  ${({theme:e})=>(0,v.AH)`
    color: ${e.colorPrimary};
  `}
`,aJ=g.styled.div`
  min-width: 0;
  display: inline-flex;
  white-space: nowrap;
`,a0=g.styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;function a1(){return(a1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let a4=e=>{let{title:t,children:r}=e,n=function(e,t){if(null==e)return{};var r,n,i={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)!(t.indexOf(r=o[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,["title","children"]);return(0,d.Y)(H.m,a1({title:t,placement:"bottom",overlayClassName:"filter-card-tooltip"},n,{children:(0,d.Y)(aJ,{children:r})}))},a2=(e,t)=>Array.isArray(e)&&e.length>0?(0,d.FD)(d.FK,{children:[(0,d.FD)("span",{css:e=>(0,v.AH)`
          font-weight: ${e.fontWeightStrong};
        `,children:[t,":"]}),(0,d.Y)(iy.B,{size:"small",split:!1,dataSource:e,renderItem:e=>(0,d.Y)(iy.B.Item,{compact:!0,css:e=>(0,v.AH)`
              && .scope-item {
                color: ${e.colorWhite};
              }
            `,children:(0,d.FD)("span",{className:"scope-item",children:["• ",e," "]})})})]}):null,a6=(0,h.memo)(({filter:e})=>{let t,r,n=(t=(0,b.d4)(e=>e.dashboardLayout.present),r=tf(),(0,h.useMemo)(()=>{let n,i=t[P.wv].children[0];if(i.startsWith("TABS-")&&(n=t[i].children),0===e.scope.rootPath.length)return;if(0===e.scope.excluded.length&&(e.scope.rootPath[0]===P.wv||(null==n?void 0:n.every(t=>e.scope.rootPath.includes(t)))))return{all:[(0,p.t)("All charts")]};if(0===e.scope.excluded.length&&n)return{tabs:e.scope.rootPath.map(e=>aB(t[e])).filter(Boolean)};let o=Object.values(t).filter(e=>"CHART"===e.type);if(e.scope.rootPath[0]===P.wv)return{charts:r.filter(t=>!e.scope.excluded.includes(t)).map(e=>aq(o.find(t=>t.meta.chartId===e))).filter(Boolean)};if(n){let n=[...e.scope.rootPath],i=o.filter(e=>{var t;return null==(t=e.parents)?void 0:t.some(e=>n.includes(e))});e.scope.excluded.forEach(e=>{let t=n.findIndex(t=>{var r,n;return null==(n=i.find(t=>t.meta.chartId===e))||null==(r=n.parents)?void 0:r.includes(t)});t>-1&&n.splice(t,1)});let l=r.filter(t=>!e.scope.excluded.includes(t)).reduce((e,t)=>{let r=i.find(e=>{var r;return e.meta.chartId===t&&(null==(r=e.parents)?void 0:r.every(e=>!n.includes(e)))});return r&&e.push(r),e},[]);return{tabs:n.map(e=>aB(t[e])).filter(Boolean),charts:l.map(aq).filter(Boolean)}}},[r,e.scope.excluded,e.scope.rootPath,t])),[i,o,l,a]=(0,aV.A)(),s=(0,h.useMemo)(()=>0!==l&&n?n.all?(0,d.Y)("span",{children:(0,p.t)("All charts")}):(0,d.FD)("div",{children:[a2(n.tabs,(0,p.t)("Tabs")),a2(n.charts,(0,p.t)("Charts"))]}):null,[l,n]);return(0,d.FD)(aW,{children:[(0,d.Y)(aG,{children:(0,p.t)("Scope")}),(0,d.FD)(a4,{title:s,children:[(0,d.Y)(aK,{ref:i,children:n?Object.values(n).flat().map((e,t)=>(0,d.Y)("span",{children:0===t?e:`, ${e}`},e)):(0,p.t)("None")}),a&&(0,d.FD)(aZ,{ref:o,children:["+",l]})]})]})}),a3=[],a5=({dependency:e,hasSeparator:t})=>{let r=(0,b.wA)(),n=(0,h.useCallback)(()=>{r((0,tu.I)([e.id]))},[e.id,r]);return(0,d.FD)("span",{children:[t&&(0,d.Y)("span",{children:", "}),(0,d.Y)(aX,{role:"button",onClick:n,tabIndex:0,children:e.name})]})},a7=(0,h.memo)(({filter:e})=>{var t;let r,n,i=(r=(0,iz.A)(null!=(t=e.cascadeParentIds)?t:[]),n=(0,h.useMemo)(()=>(0,nF.Mz)(e=>e.nativeFilters.filters,e=>0===r.length?a3:r.map(t=>e[t]).filter(Boolean)),[r.join(",")]),(0,b.d4)(n)),[o,l,a,s]=(0,aV.A)(),c=(0,g.useTheme)(),u=(0,h.useMemo)(()=>a>0&&i?(0,d.Y)(iy.B,{split:!1,dataSource:i,renderItem:e=>(0,d.Y)(iy.B.Item,{compact:!0,css:e=>(0,v.AH)`
                && .dependency-item {
                  color: ${e.colorWhite};
                }
              `,children:(0,d.FD)("span",{className:"dependency-item",children:["• ",(0,d.Y)(a5,{dependency:e})]})})}):null,[a,i]);return Array.isArray(i)&&0!==i.length?(0,d.FD)(aW,{children:[(0,d.FD)(aG,{css:(0,v.AH)`
          display: inline-flex;
          align-items: center;
        `,children:[(0,p.t)("Dependent on")," ",(0,d.Y)(a4,{title:(0,p.t)("Filter only displays values relevant to selections made in other filters."),children:(0,d.Y)(A.F.InfoCircleOutlined,{iconSize:"m",iconColor:c.colorIcon,css:(0,v.AH)`
              margin-left: ${c.sizeUnit}px;
            `})})]}),(0,d.FD)(a4,{title:u,children:[(0,d.Y)(aK,{ref:o,children:i.map((e,t)=>(0,d.Y)(a5,{dependency:e,hasSeparator:0!==t},e.id))}),s&&(0,d.FD)(aZ,{ref:l,children:["+",a]})]})]}):null});var a8=r(41343),a9=r(53012);let se=(0,g.styled)(e7.vq)`
  min-width: ${880}px;
  width: ${({expanded:e})=>e?"100%":880} !important;

  @media (max-width: ${912}px) {
    width: 100% !important;
    min-width: auto;
  }

  .ant-modal-header {
    margin-bottom: 0;
  }

  .ant-modal-body {
    overflow: hidden;
    padding: 0;
    flex: 1 1 auto;
    min-height: 0;
  }

  .ant-collapse {
    border-bottom: 0;

    .ant-collapse-item:last-child > .ant-collapse-panel {
      border-radius: 0;
    }
  }

  ${({expanded:e})=>e&&(0,v.AH)`
      height: 100%;

      .ant-modal-body {
        flex: 1 1 auto;
      }
      .ant-modal-content {
        height: 100%;
      }
    `}
`,st=g.styled.div`
  display: flex;
  height: 100%;
  min-height: 500px;
  flex-direction: row;
  flex: 1;

  .filters-list {
    display: flex;
    flex-direction: column;
  }
`,sr=(0,g.styled)(eW.l)`
  width: 100%;
`,sn=g.styled.div`
  margin-left: ${({theme:e})=>4*e.sizeUnit}px;
`;(0,g.styled)(eW.l.Item)`
  width: ${({expanded:e})=>e?"49%":"260px"};
`,(0,g.styled)(eW.l.Item)`
  min-width: ${({expanded:e})=>e?"50%":"260px"};
`,(0,g.styled)(eW.l.Item)`
  min-width: ${({expanded:e})=>e?"50%":"260px"};
`,g.styled.span`
  ${({theme:e})=>`
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextSecondary};
  `}
`,g.styled.span`
  ${({theme:e})=>`
    color: ${e.colorError};
    font-size: ${e.fontSizeSM}px;
    margin-left: ${e.sizeUnit-1}px;

    &:before {
      content: '*';
    }
  `}
`;var si=r(90240),so=r(63021),sl=r(29972),sa=r(58414),ss=r(48511),sd=r(28122),sc=r(54367),su=r(19251),sh=r(58348);let sp=g.styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div {
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }
`,sf=g.styled.div`
  margin-left: ${({theme:e})=>6*e.sizeUnit}px;
`,sm=e=>{let{checked:t,disabled:r,title:n,tooltip:i,children:o,onChange:l=()=>{},initialValue:a=!1}=e,[s,c]=(0,h.useState)(a);return(0,h.useEffect)(()=>{void 0!==t&&c(t)},[t]),(0,d.FD)(sp,{checked:s,children:[(0,d.Y)(Y.Checkbox,{checked:s,disabled:r,onChange:e=>{let r=e.target.checked;void 0===t&&c(r),l(r)},children:(0,d.FD)(d.FK,{children:[n," ",i&&(0,d.Y)(F.I,{placement:"top",tooltip:i})]})}),s&&(0,d.Y)(sf,{children:o})]})};var sg=r(71484),sv=1/0;let sb=function(e,t){return(0,t8.A)(rn(e,t),sv)},sy={filter_time:[so.GenericDataType.Temporal],filter_timegrain:[so.GenericDataType.Temporal],filter_timecolumn:[so.GenericDataType.Temporal],filter_select:[so.GenericDataType.Boolean,so.GenericDataType.String,so.GenericDataType.Numeric,so.GenericDataType.Temporal],filter_range:[so.GenericDataType.Numeric]};function sx(){return(sx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}so.GenericDataType.Boolean,so.GenericDataType.String,so.GenericDataType.Numeric,so.GenericDataType.Temporal,so.GenericDataType.Temporal,so.GenericDataType.Temporal;let sS="filters",sw=(e=!0)=>{let[,t]=(0,h.useState)({});return(0,h.useCallback)(()=>{e&&t({})},[e])},sC=(e,t,r)=>{let n=e.getFieldValue(sS)||{};e.setFields([{name:sS,value:sx({},n,{[t]:sx({},n[t],r)})}])},sk=e=>{let t=(0,iz.A)(null==e?void 0:e.column_types);return 0===t.length||t.includes(so.GenericDataType.Temporal)},s$=e=>{if(!e)return;let t=e.toLowerCase();if(!/^(struct|list|map|array|fixed_size_list|large_list|union|dictionary)\b/.test(t)){if(t.includes("bool"))return so.GenericDataType.Boolean;if(/(date|time|timestamp|datetime)/.test(t))return so.GenericDataType.Temporal;if(/(\b(u?int\d*)\b|\bfloat\d*\b|\bdouble\b|\bdecimal\d*\b|\bnumber\b)/.test(t))return so.GenericDataType.Numeric;if(/(\bstr(ing)?\b|\butf8\b|\blarge_string\b|\bbinary\b|\bjson\b|\buuid\b)/.test(t))return so.GenericDataType.String}},sD=(e,t)=>{var r;let n=new Map,i="",o=0;return Object.values(t).forEach(e=>{let{form_data:t}=e;if(t){let{datasource:e}=t,r=(n.get(e)||0)+1;n.set(e,r),r>o&&(o=r,i=e)}}),null==(r=e[i])?void 0:r.id};function sI(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function sO({allowClear:e=!1,filterValues:t=()=>!0,form:r,formField:n="column",filterId:i,datasetId:o,datasourceType:l,value:a,onChange:s,mode:c}){var u;let[f,m]=(0,h.useState)(),[g,v]=(0,h.useState)(!1),{addDangerToast:b}=(0,e8.Yf)(),y=(0,h.useCallback)(()=>{r.setFields([{name:["filters",i,n],touched:!1,value:null}])},[r,i,n]),x=(0,h.useMemo)(()=>(0,iz.A)(f).filter(t).map(e=>e.column_name).map(e=>({label:e,value:e})),[f,t]),S=null==(u=r.getFieldValue("filters"))?void 0:u[i].filterType,w=(0,h.useMemo)(()=>null==f?void 0:f.find(e=>e.column_name===a),[f,a]);(0,h.useEffect)(()=>{w&&!t(w)&&y()},[w,S,y]);let C=`${o}__${l||si.cT.Table}`;return(0,sg.h)(C,e=>{if(null!=e&&(m([]),y()),null!=o){v(!0);let e=e=>{var t;return(t=function*(){let{error:t,message:r}=yield(0,nt.h4)(e),n=r||t||(0,p.t)("An error has occurred");"Forbidden"===r&&(n=(0,p.t)("You do not have permission to edit this dashboard")),b(n)},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function l(e){sI(o,n,i,l,a,"next",e)}function a(e){sI(o,n,i,l,a,"throw",e)}l(void 0)})})()};l===si.cT.SemanticView?(0,sa.wW)({endpoint:`/api/v1/semantic_view/${o}/structure`}).then(e=>{var t,r;let{dimensions:n=[]}=null!=(t=null==(r=e.json)?void 0:r.result)?t:{},i=n.map(e=>{let t=s$(e.type);return{column_name:e.name,type:e.type,is_dttm:t===so.GenericDataType.Temporal,type_generic:t,filterable:!0}}),o=Array.isArray(a)?a:[a];i.some(e=>null==o?void 0:o.includes(e.column_name))||y(),m(i)},e).finally(()=>v(!1)):(0,sa.wW)({endpoint:`/api/v1/dataset/${o}?q=${tM().encode({columns:["columns.column_name","columns.is_dttm","columns.type_generic","columns.filterable"]})}`}).then(({json:{result:e}})=>{let t=Array.isArray(a)?a:[a];e.columns.some(e=>null==t?void 0:t.includes(e.column_name))||y(),m(e.columns)},e).finally(()=>v(!1))}}),(0,d.Y)(T.A,{mode:c,value:"multiple"===c?a||[]:a,ariaLabel:(0,p.t)("Column select"),loading:g,onChange:s,options:x,placeholder:(0,p.t)("Select a column"),notFoundContent:(0,p.t)("No compatible columns found"),showSearch:!0,allowClear:e})}var sT=r(62858);function sz(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function sY(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function l(e){sz(o,n,i,l,a,"next",e)}function a(e){sz(o,n,i,l,a,"throw",e)}l(void 0)})}}function sF(){return(sF=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let sA=(e,t)=>"semantic_view"===t?`sv:${e}`:`ds:${e}`,s_=({onChange:e,value:t,excludeDatasetIds:r=[]})=>{let n=(0,N.G7)(N.TO.SemanticLayers),i=(0,h.useCallback)((e,t,n)=>((e,t,r,n=[])=>sY(function*(){let i=(0,N.G7)(N.TO.SemanticLayers),o=tM().encode(sF({},i?{}:{columns:["id","table_name","database.database_name","schema"]},{filters:[{col:"table_name",opr:"ct",value:e}],page:t,page_size:r,order_column:"table_name",order_direction:"asc"})),l=i?`/api/v1/datasource/?q=${o}`:`/api/v1/dataset/?q=${o}`;return(0,sa.wW)({endpoint:l}).then(e=>{var t;return{data:e.json.result.filter(e=>!n.includes(e.id)||"semantic_view"===e.kind).map(e=>sF({},e,{label:(0,sh.$)(e),value:i?sA(e.id,e.kind):e.id,table_name:e.table_name,kind:e.kind})),totalCount:null!=(t=e.json.count)?t:0}}).catch(e=>sY(function*(){throw Error((({error:e,message:t})=>{let r=t||e||(0,p.t)("An error has occurred");return"Forbidden"===t&&(r=(0,p.t)("You do not have permission to edit this dashboard")),r})((yield(0,nt.h4)(e))))})())})())(e,t,n,r),[r]),o=(0,h.useMemo)(()=>t&&n?sF({},t,{value:sA(t.value,t.kind)}):t,[t,n]),l=(0,h.useCallback)(t=>{"string"==typeof t.value?e(sF({},t,{value:(e=>{if("string"!=typeof e)return e;let t=e.split(":");return 2===t.length?parseInt(t[1],10):parseInt(e,10)})(t.value),kind:t.value.startsWith("sv:")?"semantic_view":void 0})):e(t)},[e]);return(0,d.Y)(sT.A,{ariaLabel:(0,B.$s)(),value:o,options:i,onChange:n?l:e,optionFilterProps:["table_name"],notFoundContent:(0,p.t)("No compatible %s found",(0,B.hd)()),placeholder:(0,p.t)("Select a %s",(0,B.CI)())})},sE=e=>(0,h.useMemo)(()=>(0,d.Y)(s_,sF({},e)),[]);function sP(){return(sP=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let sM=({hasDefaultValue:e,filterId:t,hasDataset:r,form:n,setDataMask:i,formData:o,enableNoResults:l})=>{var a,s,c,u;let f=null==(a=n.getFieldValue("filters"))?void 0:a[t],m=null==f?void 0:f.defaultValueQueriesData,g=null==f?void 0:f.filterType,v=(null==f?void 0:f.filterType)==="filter_time",b=m&&m.length>0,y=(0,h.useMemo)(()=>[{data:[{}]}],[]),S=r&&null===m,w=null==f||null==(c=f.defaultDataMask)||null==(s=c.filterState)?void 0:s.value,C=e&&null==w;return S?(0,d.Y)(x.R,{position:"inline-centered"}):(0,d.Y)(aT.A,{height:32,width:v?350:270,appSection:ny.$s.FilterConfigModal,behaviors:[ny.nS.NativeFilter],formData:o,queriesData:b?m:y,chartType:g,hooks:{setDataMask:i},enableNoResults:l,filterState:sP({},null==f||null==(u=f.defaultDataMask)?void 0:u.filterState,{validateMessage:C&&(0,p.t)("Value is required"),validateStatus:C&&"error"})})},sR=g.styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${({theme:e})=>e.sizeUnit}px;
  }
  padding: 0px ${({theme:e})=>4*e.sizeUnit}px;
`,sj=(0,g.styled)(e5.e)`
  margin-bottom: 0;
`,sU=({pathToFormValue:e=[],formFilterScope:t,forceUpdate:r,filterScope:n,updateFormValues:i,chartId:o,initiallyExcludedCharts:l})=>{let a=(0,h.useMemo)(()=>n||((e,t=[])=>({rootPath:[P.wv],excluded:e?[e,...t]:t}))(o,l),[o,n,l]),[s,c]=(0,h.useState)(!1),u=(0,h.useCallback)(e=>{i(e),c(!0)},[i]),p=(0,h.useCallback)(e=>{s||i(e,!1)},[s,i]);return(0,h.useEffect)(()=>{p({scope:a})},[a,p]),(0,d.FD)(sR,{children:[(0,d.Y)(nV,{updateFormValues:u,initialScope:a,formScope:t,forceUpdate:r,chartId:o,initiallyExcludedCharts:l}),(0,d.Y)(sj,{name:[...e,"scope"],hidden:!0,initialValue:a})]})};var sN=r(52340);function sH(){return(sH=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let sL=(0,g.styled)(e5.e)`
  margin-bottom: 0;
`,sV=g.styled.div`
  display: flex;
  flex-direction: column;
  height: 400px; /* arbitrary */
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colorText};
`,sB=({onClick:e})=>(0,d.FD)(sV,{children:[(0,d.Y)("p",{children:(0,p.t)("You have removed this filter.")}),(0,d.Y)("div",{children:(0,d.Y)(z.$n,{"data-test":"restore-filter-button",buttonStyle:"primary",onClick:e,children:(0,p.t)("Restore filter")})})]}),sq=g.styled.div`
  display: flex;
  flex-direction: column;
`,sW=g.styled.div`
  ${({theme:e})=>`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: ${e.colorPrimary};
    &:hover {
      color: ${e.colorPrimaryText};
    }
  `}
`,sG=(0,g.styled)(A.F.DeleteOutlined)`
  ${({theme:e})=>`
    cursor: pointer;
    margin-left: ${2*e.sizeUnit}px;
    color: ${e.colorIcon};
    &:hover {
      color: ${e.colorText};
    }
  `}
`,sK=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${e.sizeUnit}px;

    & > div {
      width: 270px;
    }
  `}
`,sQ=g.styled.div`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorText};
  margin-bottom: ${({theme:e})=>e.sizeUnit}px;
`,sX=({availableFilters:e,selection:t,onChange:r,onDelete:n})=>{let i=e.find(e=>e.value===t),o=e;return i||(o=[i={label:(0,p.t)("(deleted or invalid type)"),value:t},...o]),(0,d.FD)(sK,{children:[(0,d.Y)(T.A,{ariaLabel:(0,p.t)("Limit type"),labelInValue:!0,options:o,onChange:e=>r(t,e.value),value:i}),(0,d.Y)(sG,{iconSize:"xl",onClick:()=>n(t),"aria-label":(0,p.t)("Remove dependency")})]})},sZ=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:r})=>{let[n,i]=(0,h.useState)(t),o=e=>{i(e),r(e)},l=(e,t)=>{let r=n.findIndex(t=>t===e),i=[...n];i[r]=t,o(i)},a=e=>{let t=[...n];t.splice(n.indexOf(e),1),o(t)};return 0===e.length?(0,d.Y)("span",{children:(0,p.t)("No available filters.")}):(0,d.FD)(d.FK,{children:[n.map(t=>(0,d.Y)(sX,{selection:t,availableFilters:e.filter(e=>e.value===t||!n.includes(e.value)),onChange:l,onDelete:a},t)),e.length>n.length&&(0,d.FD)(sW,{role:"button",tabIndex:0,onClick:()=>{let t=e.find(e=>!n.includes(e.value));if(t){let e=[...n];e.push(t.value),o(e)}},children:[(0,d.Y)(A.F.PlusOutlined,{iconSize:"xs"}),(0,p.t)("Add filter")]})]})},sJ=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:r,getDependencySuggestion:n,children:i})=>{let o=e.length>0,l=t.length>0;return(0,h.useEffect)(()=>{if(t.length>0){let n=new Set(e.map(e=>e.value)),i=t.filter(e=>n.has(e));i.length!==t.length&&r(i)}},[e,t,r]),(0,d.Y)(sq,{children:(0,d.FD)(sm,{title:(0,p.t)("Values are dependent on other filters"),checked:l,onChange:e=>{let t=[];if(e&&!l&&o){let e=n();e&&t.push(e)}r(t)},tooltip:(0,p.t)("Values selected in other filters will affect the filter options to only show relevant values"),children:[l&&(0,d.Y)(sQ,{children:(0,p.t)("Values dependent on")}),(0,d.Y)(sZ,{availableFilters:e,dependencies:t,onDependenciesChange:r,getDependencySuggestion:n}),i]})})};function s0(){return(s0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let s1=g.styled.div`
  ${({theme:e})=>`
    .ant-form-item {
      margin-bottom: ${2*e.sizeUnit}px;
    }
  `}
`,s4=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0px ${4*e.sizeUnit}px;
  `}
`,s2=(0,g.styled)(tG.s)`
  padding: ${({theme:e})=>4*e.sizeUnit}px;
`,s6=["enableEmptyFilter","defaultToFirstItem","creatable","multiSelect","searchAllOptions","inverseSelection"],s3=(0,g.styled)(e5.e)`
  width: ${({expanded:e})=>e?"49%":"260px"};
`,s5=(0,g.styled)(e5.e)`
  min-width: ${({expanded:e})=>e?"50%":"260px"};
`,s7=(0,g.styled)(e5.e)`
  min-width: ${({expanded:e})=>e?"50%":"260px"};
`,s8=g.styled.span`
  ${({theme:e})=>`
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextSecondary};
  `}
`,s9=g.styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,de=g.styled.span`
  ${({theme:e})=>`
  color: ${e.colorError};
  font-size: ${e.fontSizeSM}px;
  margin-left: ${e.sizeUnit-1}px;

  &:before {
    content: '*';
  `}
`,dt=g.styled.div`
  ${({theme:e,expanded:t})=>`
    width: ${t?"49%":"260px"};
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextSecondary};
    margin:
      ${2*e.sizeUnit}px
      0px
      ${4*e.sizeUnit}px
      ${4*e.sizeUnit}px;
  `}
`,dr={configuration:{key:"configuration",name:(0,p.t)("Settings")},scoping:{key:"scoping",name:(0,p.t)("Scoping")}},dn={configuration:{key:"configuration",name:(0,p.t)("Filter Configuration")},settings:{key:"settings",name:(0,p.t)("Filter Settings")}},di={configuration:{key:"configuration",name:(0,p.t)("Display control configuration")},settings:{key:"settings",name:(0,p.t)("Display control settings")}},dl=["filter_select","filter_range"],da=(e,t)=>`${e}-${String(null!=t?t:"undefined").replace(/[^a-zA-Z0-9_-]/g,"-")}`,ds={[(0,p.t)("Select filter")]:(0,p.t)("Value"),[(0,p.t)("Range filter")]:(0,p.t)("Numerical range"),[(0,p.t)("Time filter")]:(0,p.t)("Time range"),[(0,p.t)("Time column")]:(0,p.t)("Time column"),[(0,p.t)("Time grain")]:(0,p.t)("Time grain"),[(0,p.t)("Group By")]:(0,p.t)("Group by")},dd=(0,h.memo)((0,h.forwardRef)(({expanded:e,filterId:t,filterToEdit:r,customizationToEdit:n,itemType:i="filter",removedFilters:o,form:l,getAvailableFilters:a,activeFilterPanelKeys:s,restoreFilter:c,handleActiveFilterPanelChange:u,setErroredFilters:f,onModifyFilter:m,validateDependencies:y,getDependencySuggestion:w,isActive:k},$)=>{var D,I,O,z,_,E,P,R,j,U,L,V,q,W,G,K,Q,X,Z,J,ee,et,er,en,ei,eo,el,ea,es,ed,ec,eu,eh,ep,ef,em,eg,ev,eb,ey,ex,eS,ew,eC,ek,e$,eD,eI,eO,eT;let ez,eY,eF=(0,g.useTheme)(),eA="chartCustomization"===i,eE=!!o[t],[eP,eM]=(0,h.useState)(),[eR,ej]=(0,h.useState)([]),[eU,eN]=(0,h.useState)(dr.configuration.key),eH=(0,b.d4)(e=>e.dashboardInfo.id),[eL,eV]=(0,h.useState)(null),eB=sw(k),[eq,eW]=(0,h.useState)(),eG=(0,h.useMemo)(()=>({}),[]),eK=l.getFieldValue("filters"),eQ=null==eK?void 0:eK[t],eX=eQ||eL||eG,eZ=null!=(D=null==r?void 0:r.time_grains)?D:null==n?void 0:n.time_grains,eJ=(0,h.useCallback)(()=>{m&&m(t)},[m,t]),e0=(null==eX?void 0:eX.dependencies)||(null==r?void 0:r.cascadeParentIds)||[],e1=(0,nb.A)().items,e4=Object.entries(e1).filter(([,{value:e}])=>{var t;return null==(t=e.behaviors)?void 0:t.includes(ny.nS.NativeFilter)}).map(([e])=>e),e2=Object.entries(e1).filter(([,{value:e}])=>{var t;return null==(t=e.behaviors)?void 0:t.includes(ny.nS.ChartCustomization)}).map(([e])=>e),e6=(0,b.d4)(({datasources:e})=>e),e3=(0,b.d4)(({charts:e})=>e),e7=(0,h.useMemo)(()=>Object.values(e6).some(e=>sk(e)),[e6]),e8=(0,h.useMemo)(()=>{let e;return!(e=Object.values(e6).find(e=>{var t;return e.id===(null==eX||null==(t=eX.dataset)?void 0:t.value)}))||sk(e)},[null==eX||null==(j=eX.dataset)?void 0:j.value,e6]),e9=(null==eX?void 0:eX.filterType)||(eA?null==n?void 0:n.filterType:(null==r?void 0:r.filterType)||"filter_select"),te=!!(null==(L=e1[e9])||null==(U=L.value)?void 0:U.datasourceCount),tt=eA?(null==eX||null==(eI=eX.dataset)?void 0:eI.value)?eX.dataset.value:(null==n||null==(eT=n.targets)||null==(eO=eT[0])?void 0:eO.datasetId)?n.targets[0].datasetId:sD(e6,e3):null!=(ew=null!=(eC=null==eX||null==(ek=eX.dataset)?void 0:ek.value)?eC:null==r||null==(eD=r.targets)||null==(e$=eD[0])?void 0:e$.datasetId)?ew:sD(e6,e3),tr=(null==eX?void 0:eX.datasourceType)?eX.datasourceType:eA?(null==n||null==(ey=n.targets)||null==(eb=ey[0])?void 0:eb.datasourceType)||si.cT.Table:(null==r||null==(ev=r.targets)||null==(eg=ev[0])?void 0:eg.datasourceType)||si.cT.Table,tn=(0,h.useCallback)(()=>{l.setFields([{name:"changed",value:!0}]),eJ()},[l,eJ]),ti=(0,h.useCallback)((0,M.A)(tn,l6.Y.SLOW_DEBOUNCE),[]),{controlItems:to={},mainControlItems:tl={}}=eX?function({expanded:e,datasetId:t,datasourceType:r,disabled:n,forceUpdate:i,formChanged:o,form:l,filterId:a,filterType:s,filterToEdit:c,customizationToEdit:u,formFilter:h,removed:f}){var m;let g=null!=(m=((e={})=>{var t,r;return null!=(t=null==(r=sb(e.controlPanelSections))?void 0:r.reduce((e,{controlSetRows:t=[]})=>[...e,...sb(t)],[]))?t:[]})((0,sN.A)().get(s)))?m:[],v={},b={};return g.filter(e=>(null==e?void 0:e.name)==="groupby").forEach(n=>{var s,m,g,v,y,x,S,w,C,k,$,D,I,O,T,z,Y;let F=null!=(s=null!=(m=null==c||null==(v=c.controlValues)?void 0:v[n.name])?m:null==u||null==(y=u.controlValues)?void 0:y[n.name])?s:null==n||null==(x=n.config)?void 0:x.default,A=null!=(g=null==u||null==(C=u.targets)||null==(w=C[0])||null==(S=w.column)?void 0:S.name)?g:null==c||null==(D=c.targets)||null==($=D[0])||null==(k=$.column)?void 0:k.name,_=(0,d.FD)(d.FK,{children:[(0,d.Y)(sL,{name:["filters",a,"requiredFirst",n.name],hidden:!0,initialValue:(null==n||null==(I=n.config)?void 0:I.requiredFirst)&&(null==c?void 0:c.requiredFirst)}),(0,d.Y)(s3,{expanded:e,name:["filters",a,"column"],initialValue:A,label:(0,d.Y)(s8,{children:"function"==typeof(null==(O=n.config)?void 0:O.label)?n.config.label():(null==(T=n.config)?void 0:T.label)||(0,p.t)("Column")}),rules:[{required:(null==(z=n.config)?void 0:z.required)&&!f,message:(0,p.t)("Column is required")}],"data-test":"field-input",children:(0,d.Y)(sO,{mode:(null==(Y=n.config)?void 0:Y.multiple)&&"multiple",form:l,filterId:a,datasetId:t,datasourceType:r,filterValues:e=>{var t,r;return t=(null==h?void 0:h.filterType)||"",(!e.type_generic||!(t in sy)||(null==(r=sy[t])?void 0:r.includes(e.type_generic)))&&!!(null==e?void 0:e.filterable)},onChange:()=>{sC(l,a,{defaultDataMask:null}),i(),o()}})})]});b[n.name]={element:_,checked:F}}),g.filter(e=>{var t;return(null==e||null==(t=e.config)?void 0:t.renderTrigger)&&"sortAscending"!==e.name&&"enableSingleValue"!==e.name&&"operatorType"!==e.name}).forEach(t=>{var r,s,f,m,g,b;let y=null!=(r=null!=(s=null==c||null==(f=c.controlValues)?void 0:f[t.name])?s:null==u||null==(m=u.controlValues)?void 0:m[t.name])?r:null==t||null==(g=t.config)?void 0:g.default,x=(0,d.FD)(d.FK,{children:[(0,d.Y)(sL,{name:["filters",a,"requiredFirst",t.name],hidden:!0,initialValue:(null==t||null==(b=t.config)?void 0:b.requiredFirst)&&(null==c?void 0:c.requiredFirst)}),(0,d.Y)(H.m,{placement:"left",title:t.config.affectsDataMask&&n&&(0,p.t)('Populate "Default value" to enable this control'),children:(0,d.Y)("span",{children:(0,d.Y)(s5,{expanded:e,name:["filters",a,"controlValues",t.name],initialValue:y,valuePropName:"checked",colon:!1,children:(0,d.Y)(Y.Checkbox,{disabled:t.config.affectsDataMask&&n,onChange:e=>{t.config.requiredFirst&&sC(l,a,{requiredFirst:sH({},null==h?void 0:h.requiredFirst,{[t.name]:e})}),t.config.resetConfig&&sC(l,a,{defaultDataMask:null}),o(),i()},children:(0,d.FD)(d.FK,{children:["function"==typeof t.config.label?t.config.label():t.config.label," ",t.config.description&&(0,d.Y)(F.I,{placement:"top",tooltip:"function"==typeof t.config.description?t.config.description():t.config.description})]})})},t.name)})},t.name)]});v[t.name]={element:x,checked:y}}),{controlItems:v,mainControlItems:b}}({expanded:e,datasetId:tt,datasourceType:tr,disabled:!1,forceUpdate:eB,formChanged:tn,form:l,filterId:t,filterType:e9,filterToEdit:r,customizationToEdit:n,formFilter:eX,removed:eE}):{},ta=!!tl.groupby,ts=!!(null==(V=(null!=(I=e1[e9])?I:{}).value)?void 0:V.enableNoResults),tc=ta&&!!eR.length,tu=!te||tt&&((null==eX?void 0:eX.column)||!ta),th=dl.includes(null==eX?void 0:eX.filterType),tp=dv.includes(null==eX?void 0:eX.filterType),tf=null==(O=null==eX?void 0:eX.isDataDirty)||O,tm=e=>{sC(l,t,e),eM(void 0),eB()},tg={};e0&&e0.length>0&&eK&&e0.forEach(e=>{var t,r;let n=null==(r=eK[e])||null==(t=r.defaultDataMask)?void 0:t.extraFormData;tg=(0,iI.pY)(tg,n)});let tv=JSON.stringify(tg),tb=(0,h.useCallback)((e=!1)=>{if(!te||!tt)return void eB();let r=(0,iI.tg)(s0({datasetId:tt,datasourceType:tr,dashboardId:eH,groupby:null==eX?void 0:eX.column},eX));r.extra_form_data=tg,tm({defaultValueQueriesData:null,isDataDirty:!1}),(0,oD.yV)({formData:r,force:e}).then(({response:e,json:r})=>{if((0,N.G7)(N.TO.GlobalAsyncQueries)){let n="result"in r?r.result[0]:r;if(200===e.status)tm({defaultValueQueriesData:[n]});else if(202===e.status)(0,aF.fv)(n).then(e=>{tm({defaultValueQueriesData:e})}).catch(e=>{(0,nt.h4)(e).then(e=>{sC(l,t,{defaultValueQueriesData:null}),eM(e),eB()})});else throw Error(`Received unexpected response status (${e.status}) while fetching chart data`)}else tm({defaultValueQueriesData:r.result})}).catch(e=>{(0,nt.h4)(e).then(e=>{eM(e)})})},[tt,eH,t,eB,l,eX,te,tv]);(0,h.useEffect)(()=>tb(),[tv]);let ty=(0,iI.tg)(s0({datasetId:tt,datasourceType:tr,groupby:ta?null==eX?void 0:eX.column:void 0},eX));ty.extra_form_data=tg;let[tx,tS,tw,tC]=((e,t,r)=>{var n,i;let o=!!(null==e||null==(n=e.controlValues)?void 0:n.enableEmptyFilter),l=!!(null==e||null==(i=e.controlValues)?void 0:i.defaultToFirstItem),[a,s]=(0,h.useState)(!1),[d,c]=(0,h.useState)(o),[u,f]=(0,h.useState)(""),m=(e=!1)=>{let t=o&&!l;c(t),s(!!t||e)};return(0,h.useEffect)(()=>{var t,r;m(!l&&!!(null==e||null==(r=e.defaultDataMask)||null==(t=r.filterState)?void 0:t.value))},[l,o]),(0,h.useEffect)(()=>{var e,n,i,o;let a=(null==t||null==(n=t.defaultDataMask)||null==(e=n.filterState)?void 0:e.value)||(null==r||null==(o=r.defaultDataMask)||null==(i=o.filterState)?void 0:i.value);m(!l&&!!a)},[t,r,l]),(0,h.useEffect)(()=>{let e="";l?e=(0,p.t)('Default value set automatically when "Select first filter value by default" is checked'):d?e=(0,p.t)('Default value must be set when "Filter value is required" is checked'):a&&(e=(0,p.t)('Default value must be set when "Filter has default value" is checked')),f(e)},[a,d,l]),[a,d,u,m]})(eX,r,n),tk=!tt||eq||(null==eX||null==(q=eX.dataset)?void 0:q.label),t$=(0,h.useCallback)((e,r=!0)=>{sC(l,t,e),r&&tn()},[t,l,tn]),tD=!!(null==eX?void 0:eX.adhoc_filters)||!!(null==eX?void 0:eX.time_range)||!!(null==r||null==(W=r.adhoc_filters)?void 0:W.length)||!!(null==r?void 0:r.time_range),tI=!!((null==eX||null==(G=eX.time_grains)?void 0:G.length)||(null==eZ?void 0:eZ.length)),tO=(null==eX||null==(K=eX.controlValues)?void 0:K.enableSingleValue)!==void 0||(null==r||null==(Q=r.controlValues)?void 0:Q.enableSingleValue)!==void 0,tT=null==r||null==(X=r.controlValues)?void 0:X.enableSingleValue;(null==eX||null==(Z=eX.controlValues)?void 0:Z.enableSingleMaxValue)!==void 0&&({enableSingleValue:tT}=eX.controlValues);let tz="boolean"==typeof(null==eX||null==(J=eX.controlValues)?void 0:J.sortAscending)||"boolean"==typeof(null==r||null==(ee=r.controlValues)?void 0:ee.sortAscending)||"boolean"==typeof(null==n||null==(et=n.controlValues)?void 0:et.sortAscending),tY=null!=(z=null==r||null==(er=r.controlValues)?void 0:er.sortAscending)?z:null==n||null==(en=n.controlValues)?void 0:en.sortAscending;"boolean"==typeof(null==eX||null==(ei=eX.controlValues)?void 0:ei.sortAscending)&&(tY=eX.controlValues.sortAscending);let tF=eA?!te||!tf:!te||!tf&&tu||!tl.groupby,tA=e=>{var r;let n=null==(r=l.getFieldValue("filters"))?void 0:r[t].controlValues;sC(l,t,{controlValues:s0({},n,{sortAscending:e})}),eB()},t_=e=>{var r;let n=null==(r=l.getFieldValue("filters"))?void 0:r[t].controlValues;sC(l,t,{controlValues:s0({},n,{enableSingleValue:e})}),eB()},tE=null!=(_=null!=(E=null==eX||null==(eo=eX.controlValues)?void 0:eo.operatorType)?E:null==r||null==(el=r.controlValues)?void 0:el.operatorType)?_:sl.d.Exact,tP=(0,h.useMemo)(()=>{let e=null==eX?void 0:eX.column;if(!e||!(null==eq?void 0:eq.columns))return!0;let t=eq.columns.find(t=>t.column_name===e);return!t||t.type_generic===so.GenericDataType.String},[null==eX?void 0:eX.column,null==eq?void 0:eq.columns]),tR=e=>{var r;let n=null==(r=l.getFieldValue("filters"))?void 0:r[t].controlValues;sC(l,t,{controlValues:s0({},n,{operatorType:e}),defaultDataMask:null}),tn(),eB()},tj=(0,h.useRef)(null==eX?void 0:eX.column),tU=!!(null==eq?void 0:eq.columns);(0,h.useEffect)(()=>{(tj.current!==(null==eX?void 0:eX.column)||tU)&&!tP&&tE!==sl.d.Exact&&tR(sl.d.Exact),tj.current=null==eX?void 0:eX.column},[null==eX?void 0:eX.column,tP,tU]);let tN=()=>setTimeout(()=>l.validateFields([["filters",t,"adhoc_filters"],["filters",t,"time_range"]]),0),tH=(null==eX?void 0:eX.time_range)&&"No filter"!==eX.time_range,tL=(null==eX||null==(ea=eX.adhoc_filters)?void 0:ea.length)>0,tV=null==eX||null==(es=eX.controlValues)?void 0:es.defaultToFirstItem,tB=e9===(eA?null==n?void 0:n.filterType:null==r?void 0:r.filterType)?eA?null==n?void 0:n.defaultDataMask:null==r?void 0:r.defaultDataMask:null,tW=()=>tH||tL?Promise.resolve():Promise.reject(Error((0,p.t)("Pre-filter is required"))),tG=(0,h.useMemo)(()=>a(t),[a,t,eK]),tK=tG.length>0,tQ=tG.filter(e=>"filter_time"===e.type).some(e=>null==e0?void 0:e0.includes(e.value)),tX=(0,e_.a)().get("filter.dateFilterControl"),tZ=null!=tX?tX:ss.Ay;(0,h.useEffect)(()=>{tt&&(tr===si.cT.SemanticView?(0,sa.wW)({endpoint:`/api/v1/semantic_view/${tt}/structure`}).then(e=>{var t,r;let{name:n,dimensions:i=[],metrics:o=[]}=null!=(t=null==(r=e.json)?void 0:r.result)?t:{},l=i.map(e=>{let t=s$(e.type);return{column_name:e.name,type:e.type,is_dttm:t===so.GenericDataType.Temporal,filterable:!0,type_generic:t}}),a=o.map(e=>({metric_name:e.name,expression:e.definition,verbose_name:null}));ej(a),eW({columns:l,metrics:a,datasource_type:si.cT.SemanticView,type:si.cT.SemanticView,filter_select:!0,filter_select_enabled:!0,time_grain_sqla:[],main_dttm_col:null,id:tt,table_name:n})}).catch(e=>{(0,td.iB)(e.message)}):(0,sa.wW)({endpoint:`/api/v1/dataset/${tt}?q=${tM().encode({columns:["columns.column_name","columns.expression","columns.filterable","columns.is_dttm","columns.type","columns.type_generic","columns.verbose_name","database.id","database.database_name","datasource_type","filter_select_enabled","id","is_sqllab_view","main_dttm_col","metrics.metric_name","metrics.verbose_name","schema","sql","table_name","time_grain_sqla"]})}`}).then(e=>{var t,r,n;ej(null==(r=e.json)||null==(t=r.result)?void 0:t.metrics);let i=null==(n=e.json)?void 0:n.result;i.type=i.datasource_type,i.filter_select=!0,eW(i)}).catch(e=>{(0,td.iB)(e.message)}))},[tt,tr]),(0,h.useImperativeHandle)($,()=>({changeTab(e){eN(e)}})),ez=sw(),eY=null==(ex=l.getFieldValue("filters"))?void 0:ex[t],(0,h.useEffect)(()=>{sC(l,t,{isDataDirty:!0,defaultValueQueriesData:null}),ez()},[l,null==eY?void 0:eY.filterType,null==eY?void 0:eY.column,null==eY||null==(eS=eY.dataset)?void 0:eS.value,JSON.stringify(null==eY?void 0:eY.adhoc_filters),null==eY?void 0:eY.time_range,ez,t]),(0,h.useEffect)(()=>{(eA?te&&tx&&tf:te&&tu&&tx&&tf)&&tb()},[te,tu,tx,tf,tb,tk,eA]);let tJ=(0,h.useMemo)(()=>{var e;let t=[];return(null==eX||null==(e=eX.dataset)?void 0:e.value)===void 0?[]:(Object.values(e3).forEach(e=>{var r;let n=null==(r=e.form_data)?void 0:r.datasource;void 0===n||((e,t,r,n)=>{let i=n||si.cT.Table,o=e?t[e]:void 0;if(o){let e=o.datasource_type||o.type||si.cT.Table;return o.id===r&&e===i}let l=(e=>{if(!e)return{};let[t,r]=String(e).split("__"),n=Number(t);return Number.isNaN(n)?{}:{id:n,type:r}})(e);return l.id===r&&(l.type||si.cT.Table)===i})(n,e6,eX.dataset.value,tr)||t.push(e.id)}),t)},[JSON.stringify(Object.values(e3).map(e=>e.id)),null==eX||null==(ed=eX.dataset)?void 0:ed.value,tr,JSON.stringify(e6)]);if((0,h.useEffect)(()=>{eE&&eV(eQ)},[eE]),(0,h.useEffect)(()=>{eL&&!eE&&(sC(l,t,eL),eV(null))},[eQ,t,l,eE,eL]),eE)return(0,d.Y)(sB,{onClick:()=>c(t)});let t0=(0,d.Y)(s5,{expanded:e,name:["filters",t,"granularity_sqla"],label:(0,d.FD)(d.FK,{children:[(0,d.Y)(s8,{children:(0,p.t)("Time column")})," ",(0,d.Y)(F.I,{placement:"top",tooltip:tQ?(0,p.t)("Time column to apply dependent temporal filter to"):(0,p.t)("Time column to apply time range to")})]}),initialValue:null==r?void 0:r.granularity_sqla,children:(0,d.Y)(sO,{allowClear:!0,form:l,formField:"granularity_sqla",filterId:t,filterValues:e=>!!e.is_dttm,datasetId:tt,datasourceType:tr,onChange:e=>{sC(l,t,{granularity_sqla:e}),eB(),tn()}})});return(0,d.Y)(C.Ay,{allowOverflow:!1,contentHeight:`calc(100vh - ${55*eF.sizeUnit}px)`,contentPadding:(0,v.AH)`
        padding-top: ${4*eF.sizeUnit}px;
      `,activeKey:eU,onChange:e=>eN(e),items:[{key:dr.configuration.key,label:dr.configuration.name,forceRender:!0,children:(0,d.Y)(d.FK,{children:(0,d.FD)(s1,{children:[(0,d.FD)(s4,{children:[(0,d.Y)(s3,{expanded:e,name:["filters",t,"name"],label:(0,d.Y)(s8,{children:eA?(0,p.t)("Display control name"):(0,p.t)("Filter name")}),initialValue:eA?null==n?void 0:n.name:null==r?void 0:r.name,rules:[{required:!eE,message:(0,p.t)("Name is required")}],children:(0,d.Y)(Y.Input,s0({},dW("name-input"),{onChange:ti}))}),eA?(0,d.Y)(s3,{expanded:e,name:["filters",t,"filterType"],rules:[{required:!eE,message:(0,p.t)("Type is required")}],initialValue:null==n?void 0:n.filterType,label:(0,d.Y)(s8,{children:(0,p.t)("Display control type")}),children:(0,d.Y)(T.A,{ariaLabel:(0,p.t)("Customization type"),options:e2.map(e=>{var t,r;let n=null==(r=e1[e])||null==(t=r.value)?void 0:t.name;return{value:e,label:n||e}}),optionRender:e=>(0,d.Y)("span",{"data-test":da("customization-type-option",e.value),children:e.label||e.value}),onChange:e=>{sC(l,t,{filterType:e,controlValues:{},defaultDataMask:null,column:null}),eB(),tn()}})}):(0,d.Y)(s3,s0({expanded:e,name:["filters",t,"filterType"],rules:[{required:!eE,message:(0,p.t)("Name is required")}],initialValue:(null==r?void 0:r.filterType)||"filter_select",label:(0,d.Y)(s8,{children:(0,p.t)("Filter Type")})},dW("filter-type"),{children:(0,d.Y)(T.A,{ariaLabel:(0,p.t)("Filter type"),options:e4.map(e=>{var t,r,n;let i=null==(t=e1[e])?void 0:t.value.name,o=i?ds[i]:void 0,l=(null==(r=sy[e])?void 0:r.length)===1&&(null==(n=sy[e])?void 0:n.includes(so.GenericDataType.Temporal))&&!e7;return{value:e,label:l?(0,d.Y)(H.m,{title:(0,p.t)("Datasets do not contain a temporal column"),children:o||i}):o||i,disabled:l}}),optionRender:e=>(0,d.Y)("span",{"data-test":da("filter-type-option",e.value),children:e.label||e.value}),onChange:e=>{sC(l,t,{filterType:e,defaultDataMask:null,column:null}),eB(),tn()}})}))]}),(null==eX?void 0:eX.filterType)==="filter_time"&&(0,d.Y)(dt,{expanded:e,children:(0,p.t)(`Dashboard time range filters apply to temporal columns defined in
          the filter section of each chart. Add temporal columns to the chart
          filters to have this dashboard filter impact those charts.`)}),te&&(0,d.FD)(s2,{justify:"space-between",children:[tk?(0,d.Y)(s3,s0({expanded:e,name:["filters",t,"dataset"],label:(0,d.Y)(s8,{children:(0,B.$s)()}),initialValue:eq?{label:eq.database?(0,sh.$)({id:eq.id,table_name:eq.table_name,schema:eq.schema,database:{database_name:eq.database.database_name}}):null!=(P=eq.table_name)?P:eq.id,value:eq.id,kind:tr===si.cT.SemanticView?"semantic_view":void 0}:void 0,rules:[{required:!eE,message:(0,B.$s)()===(0,p.t)("Datasource")?(0,p.t)("Datasource is required"):(0,p.t)("Dataset is required")}]},dW("datasource-input"),{children:(0,d.Y)(sE,{onChange:e=>{let r="semantic_view"===e.kind?si.cT.SemanticView:si.cT.Table;(e.value!==tt||r!==tr)&&sC(l,t,{dataset:e,datasetInfo:e,datasourceType:r,defaultDataMask:null,column:null}),eB(),tn()}})})):(0,d.Y)(s3,{expanded:e,label:(0,d.Y)(s8,{children:(0,B.$s)()}),children:(0,d.Y)(x.R,{position:"inline-centered"})}),te&&!eA&&Object.keys(tl).map(e=>tl[e].element)]}),(0,d.Y)(aD.S,{modalMode:!0,defaultActiveKey:s,onChange:e=>{u(e)},expandIconPosition:"end",items:[..."filter_time"!==e9?[{key:`${t}-${dn.configuration.key}`,forceRender:!0,label:eA?di.configuration.name:dn.configuration.name,children:(0,d.FD)(d.FK,{children:[tp&&(tK||e0.length>0)&&(0,d.Y)(s5,{expanded:e,name:["filters",t,"dependencies"],initialValue:e0,children:(0,d.Y)(sJ,{availableFilters:tG,dependencies:e0,onDependenciesChange:e=>{sC(l,t,{dependencies:e}),eB(),y(),tn()},getDependencySuggestion:()=>w(t),children:tQ?t0:void 0})}),te&&th&&(0,d.Y)(e5.e,{name:["filters",t,"preFilter"],children:(0,d.FD)(sm,{initialValue:tD,title:(0,p.t)("Pre-filter available values"),tooltip:(0,p.t)(`Add filter clauses to control the filter's source query,
                    though only in the context of the autocomplete i.e., these conditions
                    do not impact how the filter is applied to the dashboard. This is useful
                    when you want to improve the query's performance by only scanning a subset
                    of the underlying data or limit the available values displayed in the filter.`),onChange:e=>{tn(),e&&tN()},children:[(0,d.Y)(s7,{expanded:e,name:["filters",t,"adhoc_filters"],css:{width:270},initialValue:null==r?void 0:r.adhoc_filters,required:!0,rules:[{validator:tW}],children:(0,d.Y)(sd.A,{columns:(null==eq||null==(ec=eq.columns)?void 0:ec.filter(e=>e.filterable))||[],savedMetrics:(null==eq?void 0:eq.metrics)||[],datasource:eq,onChange:e=>{sC(l,t,{adhoc_filters:e}),eB(),tn(),tN()},label:(0,d.FD)("span",{children:[(0,d.Y)(s8,{children:(0,p.t)("Pre-filter")}),!tH&&(0,d.Y)(de,{})]})})}),e8&&(0,d.Y)(s5,{expanded:e,name:["filters",t,"time_range"],label:(0,d.Y)(s8,{children:(0,p.t)("Time range")}),initialValue:(null==r?void 0:r.time_range)||(0,p.t)("No filter"),required:!tL,rules:[{validator:tW}],children:(0,d.Y)(tZ,{name:"time_range",onChange:e=>{sC(l,t,{time_range:e}),eB(),tn(),tN()}})}),tH&&!tQ?t0:void 0]})}),("filter_timegrain"===e9||"chart_customization_timegrain"===e9)&&te&&(null==eq?void 0:eq.time_grain_sqla)&&eq.time_grain_sqla.length>0&&(0,d.Y)(e5.e,{name:["filters",t,"preFilterTimegrain"],children:(0,d.Y)(sm,{initialValue:tI,title:(0,p.t)("Pre-filter available values"),tooltip:(0,p.t)("Select which time grains are available in the filter control. This is a UI allow list only and does not add extra conditions to the underlying queries."),onChange:e=>{e||(sC(l,t,{time_grains:void 0}),eB()),tn()},children:(0,d.Y)(e5.e,s0({name:["filters",t,"time_grains"],initialValue:eZ},dW("time-grain-allowlist"),{children:(0,d.Y)(T.A,{mode:"multiple",ariaLabel:(0,p.t)("Time grain options"),options:((e=[])=>e.map(e=>{let[t,r]=e;return{value:t,label:r||t}}))(eq.time_grain_sqla),sortComparator:()=>0,onChange:e=>{sC(l,t,{time_grains:e.length>0&&e.length<eq.time_grain_sqla.length?e:void 0}),eB(),tn()},css:{width:270}})}))})}),"filter_range"!==e9?(0,d.Y)(e5.e,{name:["filters",t,"sortFilter"],initialValue:tz,children:(0,d.FD)(sm,{initialValue:tz,title:eA?(0,p.t)("Sort display control values"):(0,p.t)("Sort filter values"),onChange:e=>{tA(e||void 0),tn()},children:[(0,d.Y)(s5,{expanded:e,name:["filters",t,"controlValues","sortAscending"],initialValue:tY,label:(0,d.Y)(s8,{children:(0,p.t)("Sort type")}),children:(0,d.Y)(tq.s.GroupWrapper,{options:[{value:!0,label:(0,p.t)("Sort ascending")},{value:!1,label:(0,p.t)("Sort descending")}],onChange:e=>{tA(e.target.value),tn()}})}),tc&&!eA&&(0,d.Y)(s7,{expanded:e,name:["filters",t,"controlValues","sortMetric"],initialValue:null!=(R=null==r||null==(eu=r.controlValues)?void 0:eu.sortMetric)?R:null==n||null==(eh=n.controlValues)?void 0:eh.sortMetric,label:(0,d.FD)(d.FK,{children:[(0,d.Y)(s8,{children:(0,p.t)("Sort Metric")})," ",(0,d.Y)(F.I,{placement:"top",tooltip:(0,p.t)("If a metric is specified, sorting will be done based on the metric value")})]}),"data-test":"field-input",children:(0,d.Y)(T.A,{allowClear:!0,ariaLabel:(0,p.t)("Sort metric"),name:"sortMetric",options:eR.map(e=>{var t;return{value:e.metric_name,label:null!=(t=e.verbose_name)?t:e.metric_name}}),onChange:e=>{var r;let n=(null==(r=l.getFieldValue("filters"))?void 0:r[t].controlValues)||{};sC(l,t,{controlValues:s0({},n,{sortMetric:e})}),eB(),tn()}})})]})}):(0,d.FD)(d.FK,{children:[(0,d.Y)(e5.e,{name:["filters",t,"rangeFilter"],children:(0,d.Y)(sm,{initialValue:tO,title:(0,p.t)("Single Value"),onChange:e=>{t_(e?sc.y.Exact:void 0),tn()},children:(0,d.Y)(s5,{expanded:e,name:["filters",t,"controlValues","enableSingleValue"],initialValue:tT,label:(0,d.Y)(s8,{children:(0,p.t)("Single value type")}),children:(0,d.Y)(tq.s.GroupWrapper,{onChange:e=>{t_(e.target.value),tn()},options:[{label:(0,p.t)("Minimum"),value:sc.y.Minimum},{label:(0,p.t)("Exact"),value:sc.y.Exact},{label:(0,p.t)("Maximum"),value:sc.y.Maximum}]})})})}),(0,d.Y)(e5.e,{name:["filters",t,"rangeType"],children:(0,d.Y)(s5,{expanded:e,name:["filters",t,"controlValues","rangeDisplayMode"],initialValue:(null==eX||null==(ep=eX.controlValues)?void 0:ep.rangeDisplayMode)||(null==r||null==(ef=r.controlValues)?void 0:ef.rangeDisplayMode)||su.l.SliderAndInput,label:(0,d.Y)(s8,{children:(0,p.t)("Range Type")}),children:(0,d.Y)(T.A,{ariaLabel:(0,p.t)("Range Type"),options:[{value:su.l.Slider,label:(0,p.t)("Slider")},{value:su.l.Input,label:(0,p.t)("Range Inputs")},{value:su.l.SliderAndInput,label:(0,p.t)("Slider and range input")}],onChange:e=>{var r;let n=(null==(r=l.getFieldValue("filters"))?void 0:r[t].controlValues)||{},i=e||su.l.SliderAndInput;sC(l,t,{controlValues:s0({},n,{rangeDisplayMode:i})}),eB(),tn()}})})})]})]})}]:[],{label:eA?di.settings.name:dn.settings.name,key:`${t}-${dn.settings.key}`,forceRender:!0,children:(0,d.FD)(d.FK,{children:[(0,d.Y)(s3,{expanded:e,name:["filters",t,"description"],initialValue:eA?null==n?void 0:n.description:null==r?void 0:r.description,label:(0,d.Y)(s8,{children:(0,p.t)("Description")}),children:(0,d.Y)(Y.Input.TextArea,{onChange:ti})}),(0,d.Y)(e5.e,{name:["filters",t,"type"],hidden:!0,initialValue:eA?iF.i4.ChartCustomization:iF.EH.NativeFilter}),(0,d.Y)(e5.e,{name:["filters",t,"datasourceType"],hidden:!0,initialValue:tr}),(0,d.Y)(e5.e,{name:["filters",t,"defaultValueQueriesData"],hidden:!0,initialValue:null}),!eA&&"filter_select"===e9&&(0,d.Y)(s5,{expanded:e,name:["filters",t,"controlValues","operatorType"],initialValue:tE,label:(0,d.FD)(d.FK,{children:[(0,d.Y)(s8,{children:(0,p.t)("Match type")})," ",(0,d.Y)(F.I,{placement:"top",tooltip:(0,p.t)("Warning: ILIKE queries may be slow on large datasets as they cannot use indexes effectively.")})]}),children:(0,d.Y)(T.A,{ariaLabel:(0,p.t)("Match type"),options:[{value:sl.d.Exact,label:(0,p.t)("Exact match (IN)")},...tP?[{value:sl.d.Contains,label:(0,p.t)("Contains text (ILIKE %x%)")},{value:sl.d.StartsWith,label:(0,p.t)("Starts with (ILIKE x%)")},{value:sl.d.EndsWith,label:(0,p.t)("Ends with (ILIKE %x)")}]:[]],onChange:e=>{tR(e)}})}),(0,d.Y)(e5.e,{name:["filters",t,"defaultValue"],children:(0,d.Y)(sm,{checked:tx,disabled:tS||tV,initialValue:tx,title:eA?(0,p.t)("Display control has default value"):(0,p.t)("Filter has default value"),tooltip:tw,onChange:e=>{tC(e),e?((null==eX?void 0:eX.filterType)==="filter_range"&&sC(l,t,{defaultDataMask:{extraFormData:{},filterState:{value:[null,null]}}}),l.validateFields([["filters",t,"defaultDataMask"]])):sC(l,t,{defaultDataMask:null}),tn()},children:!eE&&(0,d.Y)(s7,{expanded:e,name:["filters",t,"defaultDataMask"],initialValue:tB,"data-test":"default-input",label:(0,d.Y)(s8,{children:(0,p.t)("Default Value")}),required:tx,rules:[{validator:()=>{var e,r;let n=null==eX||null==(r=eX.defaultDataMask)||null==(e=r.filterState)?void 0:e.value;if((null==eX?void 0:eX.filterType)==="filter_range"?Array.isArray(n)&&(null!==n[0]||null!==n[1]):Array.isArray(n)?n.length>0:!!n){let e=l.getFieldsError();return f(t=>t.length&&!e.some(e=>e.errors.length>0)?[]:t),Promise.resolve()}return f(e=>e.includes(t)?e:[...e,t]),Promise.reject(Error((0,p.t)("Please choose a valid value")))}}],children:eP||tF?(0,d.FD)(s9,{children:[eP?(0,d.Y)(S.x6,{error:null==(em=eP.errors)?void 0:em[0],fallback:(0,d.Y)(S.vB,{title:(0,p.t)("Cannot load filter"),body:eP.error,level:"error"})}):(0,d.Y)(sM,{setDataMask:e=>{var r,n;(0,l8.A)(null==tB||null==(r=tB.filterState)?void 0:r.value,null==e||null==(n=e.filterState)?void 0:n.value)||tn(),sC(l,t,{defaultDataMask:e}),l.validateFields([["filters",t,"defaultDataMask"]]),eB()},hasDefaultValue:tx,filterId:t,hasDataset:te,form:l,formData:ty,enableNoResults:ts}),te&&tt&&(0,d.Y)(H.m,{title:(0,p.t)("Refresh the default values"),children:(0,d.Y)(A.F.SyncOutlined,{iconSize:"xl",iconColor:eF.colorPrimary,css:(0,v.AH)`
                                              margin-left: ${2*eF.sizeUnit}px;
                                              margin-top: ${1.5*eF.sizeUnit}px;
                                            `,onClick:()=>tb(!0)})})]}):(0,p.t)('Fill all required fields to enable "Default Value"')})})}),Object.keys(to).sort((e,t)=>s6.indexOf(e)-s6.indexOf(t)).map(e=>to[e].element)]})}]},`native-filter-config-${t}`)]})})},{key:dr.scoping.key,label:dr.scoping.name,forceRender:!0,children:(0,d.Y)(sU,{updateFormValues:t$,pathToFormValue:["filters",t],forceUpdate:eB,filterScope:eA?null==n?void 0:n.scope:null==r?void 0:r.scope,formFilterScope:null==eX?void 0:eX.scope,initiallyExcludedCharts:tJ})}]})}));function dc({title:e,onConfirm:t,onDismiss:r,children:n}){return(0,d.Y)(e3.F,{closable:!1,type:"warning",message:e,css:{textAlign:"left",flex:1,"& .ant-alert-action":{alignSelf:"center"}},description:n,action:(0,d.FD)("div",{css:{display:"flex"},children:[(0,d.Y)(z.$n,{buttonSize:"small",buttonStyle:"secondary",onClick:r,children:(0,p.t)("Keep editing")},"cancel"),(0,d.Y)(z.$n,{buttonSize:"small",buttonStyle:"primary",onClick:t,"data-test":"native-filter-modal-confirm-cancel-button",children:(0,p.t)("Yes, cancel")},"submit")]})},"alert")}let du=({canSave:e=!0,onCancel:t,handleSave:r,onDismiss:n,onConfirmCancel:i,saveAlertVisible:o})=>o?(0,d.Y)(dc,{title:(0,p.t)("There are unsaved changes."),onConfirm:i,onDismiss:n,children:(0,p.t)("Are you sure you want to cancel?")},"cancel-confirm"):(0,d.FD)(d.FK,{children:[(0,d.Y)(z.$n,{buttonStyle:"secondary","data-test":"native-filter-modal-cancel-button",onClick:t,children:(0,p.t)("Cancel")},"cancel"),(0,d.Y)(z.$n,{disabled:!e,buttonStyle:"primary",onClick:r,"data-test":"native-filter-modal-save-button",children:(0,p.t)("Save")},"submit")]}),dh=[],dp={},df={modified:[],deleted:[],reordered:[]};function dm(e,t){let[r,n]=(0,h.useState)(df),[i,o]=(0,h.useState)(dh),[l,a]=(0,h.useState)(dp),[s,d]=(0,h.useState)(dh),[c,u]=(0,h.useState)(e),[p,f]=(0,h.useState)(dh),m=(0,h.useCallback)(()=>{n(df),o(dh),a(dp),d(dh),f(dh)},[]),g=(0,h.useCallback)(e=>{f(t=>t.includes(e)?t:[...t,e])},[]);return(0,h.useEffect)(()=>{(0,tx.A)(l)||d(e=>e.filter(e=>!l[e]))},[l]),(0,h.useEffect)(()=>{let e=Object.keys(t);u(t=>{let r=i.filter(e=>{var t;return!l[e]||(null==(t=l[e])?void 0:t.isPending)}),n=(0,a8.A)([...e,...r]),o=new Set(t),a=new Set(n);return o.size===a.size&&[...o].every(e=>a.has(e))?t:[...t.filter(e=>a.has(e)),...n.filter(e=>!o.has(e))]})},[t,i,l]),(0,h.useEffect)(()=>()=>{Object.values(l).forEach(e=>{(null==e?void 0:e.isPending)&&e.timerId&&clearTimeout(e.timerId)})},[l]),{changes:r,newIds:i,removedItems:l,erroredIds:s,orderedIds:c,renderedIds:p,setChanges:n,setNewIds:o,setRemovedItems:a,setErroredIds:d,setOrderedIds:u,setRenderedIds:f,resetState:m,addToRendered:g}}function dg(){return(dg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let dv=["filter_range","filter_select","filter_time"];function db(){return(db=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var dy=r(30679);function dx(e){let t={};return null!=e.dataset&&(t.datasetId="object"==typeof e.dataset?e.dataset.value:e.dataset),e.datasourceType&&(t.datasourceType=e.datasourceType),null!=e.dataset&&e.column&&(t.column={name:e.column}),t}function dS(){return(dS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function dw(){return(dw=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function dC(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function dk(){return(dk=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let d$=[],dD=g.styled.div`
  ${({theme:e})=>`
    padding: ${4*e.sizeUnit}px;
  `}
`,dI=({componentId:e,divider:t})=>{let r=e.startsWith(nX.iu)?iF.i4.Divider:iF.EH.Divider;return(0,d.FD)(dD,{children:[(0,d.Y)(e5.e,{initialValue:t?t.title:"",label:(0,p.t)("Title"),name:["filters",e,"title"],rules:[{required:!0,message:(0,p.t)("Title is required"),whitespace:!0}],children:(0,d.Y)(Y.Input,{})}),(0,d.Y)(e5.e,{initialValue:t?t.description:"",label:(0,p.t)("Description"),name:["filters",e,"description"],children:(0,d.Y)(Y.Input.TextArea,{rows:4})}),(0,d.Y)(e5.e,{hidden:!0,name:["filters",e,"type"],initialValue:r})]})},dO=(0,h.memo)(function({orderedIds:e,renderedIds:t,removedItems:r,filterConfigMap:n,isItemActive:i,expanded:o,form:l,configFormRef:a,restoreItem:s,getAvailableFilters:c,activeFilterPanelKey:u,handleActiveFilterPanelChange:p,handleSetErroredFilters:f,validateDependencies:m,getDependencySuggestion:g,handleModifyItem:v}){let b=(0,h.useMemo)(()=>e.map(e=>{if(!t.includes(e))return null;let h=e.startsWith(nX.E9),b=i(e);return(0,d.Y)("div",{style:{height:"100%",overflowY:"auto",display:b?"":"none"},children:h?(0,d.Y)(dI,{componentId:e,divider:n[e]}):(0,d.Y)(dd,{expanded:o,ref:a,form:l,filterId:e,filterToEdit:n[e],removedFilters:r,restoreFilter:s,getAvailableFilters:c,activeFilterPanelKeys:u,handleActiveFilterPanelChange:p,isActive:b,setErroredFilters:f,validateDependencies:m,getDependencySuggestion:g,onModifyFilter:v},e)},e)}),[e,t,r,f,i,n,o,l,s,c,u,p,v,m,g,a]);return(0,d.Y)(d.FK,{children:b})}),dT=(0,h.memo)(function({chartCustomizationIds:e,renderedIds:t,removedItems:r,chartCustomizationConfigMap:n,isItemActive:i,expanded:o,form:l,restoreItem:a,activeFilterPanelKey:s,handleActiveFilterPanelChange:c,handleSetErroredCustomizations:u,handleModifyItem:p}){let f=(0,h.useMemo)(()=>e.map(e=>{var h;if(!t.includes(e))return null;let f=e.startsWith(nX.iu),m=i(e);return(0,d.Y)("div",{style:{height:"100%",overflowY:"auto",display:m?"":"none"},children:f?(0,d.Y)(dI,{componentId:e,divider:n[e]}):(0,d.Y)(dd,{filterId:e,itemType:"chartCustomization",form:l,removedFilters:r,restoreFilter:a,customizationToEdit:(null==(h=n[e])?void 0:h.type)===iF.i4.ChartCustomization?n[e]:void 0,expanded:o,getAvailableFilters:()=>[],handleActiveFilterPanelChange:c,activeFilterPanelKeys:s,isActive:m,setErroredFilters:u,validateDependencies:()=>{},getDependencySuggestion:()=>"",onModifyFilter:p})},e)}),[e,t,r,u,i,l,a,n,o,p,c,s]);return(0,d.Y)(d.FK,{children:f})}),dz=(0,g.styled)(tG.s)`
  flex: 1;
  overflow: hidden;
`,dY=(0,h.memo)(function({currentItemId:e,filterIds:t,chartCustomizationIds:r,filterState:n,customizationState:i,filterConfigMap:o,chartCustomizationConfigMap:l,isItemActive:a,expanded:s,form:c,configFormRef:u,restoreItem:h,getAvailableFilters:f,activeFilterPanelKey:m,handleActiveFilterPanelChange:g,handleSetErroredFilters:v,handleSetErroredCustomizations:b,validateDependencies:x,getDependencySuggestion:S,handleModifyItem:w}){let C=(0,nX.UW)(e)&&t.includes(e),k=(0,nX.xG)(e)&&r.includes(e);return(0!==n.orderedIds.length||0!==i.orderedIds.length)&&e?(0,d.FD)(dz,{vertical:!0,children:[(0,d.Y)("div",{style:{display:C?"flex":"none",flexDirection:"column",flex:1,overflow:"hidden"},children:(0,d.Y)(dO,{orderedIds:n.orderedIds,renderedIds:n.renderedIds,removedItems:n.removedItems,filterConfigMap:o,isItemActive:a,expanded:s,form:c,configFormRef:u,restoreItem:h,getAvailableFilters:f,activeFilterPanelKey:m,handleActiveFilterPanelChange:g,handleSetErroredFilters:v,validateDependencies:x,getDependencySuggestion:S,handleModifyItem:w})}),(0,d.Y)("div",{style:{display:k?"flex":"none",flexDirection:"column",flex:1,overflow:"hidden"},children:(0,d.Y)(dT,{chartCustomizationIds:r,renderedIds:i.renderedIds,removedItems:i.removedItems,chartCustomizationConfigMap:l,isItemActive:a,expanded:s,form:c,restoreItem:h,activeFilterPanelKey:m,handleActiveFilterPanelChange:g,handleSetErroredCustomizations:b,handleModifyItem:w})})]}):(0,d.Y)(dz,{vertical:!0,children:(0,d.Y)(tG.s,{flex:1,children:(0,d.Y)(y.p,{size:"small",title:"",image:"empty.svg",description:(0,p.t)("Manage filters and customizations to set scoping, descriptions, and limitations. Create new elements for better dashboard insights.")})})})}),dF=({onAddFilter:e,onAddCustomization:t})=>{let r=(0,g.useTheme)(),n={onClick:({key:r})=>{"filter"===r?e(iF.EH.NativeFilter):"customization"===r?t(iF.i4.ChartCustomization):"divider"===r&&e(iF.EH.Divider)},items:[{key:"filter",label:(0,p.t)("Add filter"),icon:(0,d.Y)(A.F.FilterOutlined,{iconColor:r.colorPrimary,iconSize:"m"})},{key:"customization",label:(0,p.t)("Add display control"),icon:(0,d.Y)(A.F.SettingOutlined,{iconColor:r.colorPrimary,iconSize:"m"})},{key:"divider",label:(0,p.t)("Add divider"),icon:(0,d.Y)(A.F.PicCenterOutlined,{iconColor:r.colorPrimary,iconSize:"m"})}]};return(0,d.Y)(nx.ms,{menu:n,trigger:["hover"],children:(0,d.Y)(z.$n,{buttonSize:"default",buttonStyle:"secondary",icon:(0,d.Y)(A.F.PlusOutlined,{iconColor:r.colorPrimary,iconSize:"m"}),"data-test":"new-item-dropdown-button",children:(0,p.t)("New")})})},dA=g.styled.div`
  ${({theme:e})=>`
      display: flex;
      align-items: center;
      padding: ${2*e.sizeUnit}px;
      border-radius: ${e.borderRadius}px;
      cursor: pointer;
      &.active {
        color: ${e.colorPrimaryActive};
        border-radius: ${e.borderRadius}px;
        background-color: ${e.colorPrimaryBg};
        span, .anticon {
          color: ${e.colorIcon};
        }
      }
      &:hover {
        color: ${e.colorPrimaryHover};
        span, .anticon {
          color: ${e.colorPrimaryHover};
        }
      }
      &.errored div, &.errored .warning {
        color: ${e.colorError};
      }
  `}
`,d_=(0,g.styled)(A.F.ExclamationCircleOutlined)`
  color: ${({theme:e})=>e.colorErrorText};
  &.anticon {
    margin-left: auto;
  }
`,dE=g.styled.div`
  height: 100%;
  overflow-y: auto;
  ${({isDragging:e})=>e&&`
    overflow: hidden;
  `}
`,dP=(0,h.forwardRef)(({getItemTitle:e,onChange:t,onRemove:r,restoreItem:n,currentItemId:i,removedItems:o,items:l,erroredItems:a=[],dataTestId:s="item-title-container",deleteAltText:c="RemoveItem",dragType:u},f)=>{let[m,g]=(0,h.useState)(!1);return(0,nG.E5)({onDragStart:()=>{g(!0)},onDragEnd:()=>{g(!1)},onDragCancel:()=>{g(!1)}}),(0,d.Y)(dE,{"data-test":s,ref:f,isDragging:m,children:(0,d.Y)(nK.gB,{items:l,strategy:nK._G,children:l.map((l,s)=>{let h,f,m,g;return(0,d.Y)(n4,{id:l,index:s,filterIds:[l],dragType:u,children:(h=!!o[l],f=a.includes(l),m=i===l,g=[],f&&g.push("errored"),m&&g.push("active"),(0,d.FD)(dA,{role:"tab",tabIndex:0,onClick:()=>t(l),className:g.join(" "),"aria-selected":m,children:[(0,d.FD)("div",{css:{display:"flex",width:"100%",alignItems:"center"},children:[(0,d.Y)("div",{css:{alignItems:"center",display:"flex",wordBreak:"break-all"},children:h?(0,p.t)("(Removed)"):e(l)}),!o[l]&&f&&(0,d.Y)(d_,{className:"warning",iconSize:"s"}),h&&(0,d.Y)("span",{css:{alignSelf:"flex-end",marginLeft:"auto"},role:"button","data-test":"undo-button",tabIndex:0,onClick:e=>{e.preventDefault(),n(l)},children:(0,p.t)("Undo?")})]}),(0,d.Y)("div",{css:{alignSelf:"flex-start",marginLeft:"auto"},children:h?null:(0,d.Y)(A.F.DeleteOutlined,{iconSize:"l",onClick:e=>{e.stopPropagation(),r(l)},"aria-label":c})})]},`item-title-tab-${l}`))},l)})})})});dP.displayName="ItemTitleContainer";let dM=g.styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>3*e.sizeUnit}px;
  padding-top: 2px;
`,dR=({getItemTitle:e,onChange:t,onRemove:r,onRearrange:n,restoreItem:i,currentItemId:o,items:l,removedItems:a,erroredItems:s,dataTestId:c,deleteAltText:u,dragType:p,onCrossListDrop:f})=>{let m=(0,h.useRef)(null);return(0,d.Y)(dM,{children:(0,d.Y)(dP,{ref:m,items:l,currentItemId:o,removedItems:a,getItemTitle:e,erroredItems:s,onChange:t,onRemove:r,onRearrange:n,restoreItem:i,dataTestId:c,deleteAltText:u,dragType:p,onCrossListDrop:f})})},dj=({currentItemId:e,items:t,removedItems:r,erroredItems:n,getItemTitle:i,onChange:o,onRearrange:l,onRemove:a,restoreItem:s,dataTestId:c,deleteAltText:u,dragType:h,isCurrentSection:p,onCrossListDrop:f})=>(0,d.Y)(dR,{currentItemId:p?e:"",items:t,removedItems:r,erroredItems:n,getItemTitle:i,onChange:o,onRearrange:l,onRemove:a,restoreItem:s,dataTestId:c,deleteAltText:u,dragType:h,onCrossListDrop:f}),dU=(0,g.styled)(tG.s)`
  min-width: 290px;
  max-width: 290px;
  max-height: 70vh;
  border-right: 1px solid ${({theme:e})=>e.colorBorderSecondary};
`,dN=(0,g.styled)(tG.s)`
  padding: ${({theme:e})=>3*e.sizeUnit}px;

  & button {
    width: 100%;
  }
`,dH=(0,g.styled)(aD.S)`
  flex: 1;
  min-height: 0; /* required for flex item to shrink */
  overflow: auto;
  .ant-collapse-body {
    padding: 0;
    ${({isDragging:e})=>e&&`
      overflow: hidden;
    `}
  }
`;dH.Panel=aD.S.Panel;let dL=({filterIds:e,chartCustomizationIds:t,currentItemId:r,filterOrderedIds:n,filterRemovedItems:i,filterErroredItems:o,customizationOrderedIds:l,customizationRemovedItems:a,customizationErroredItems:s,activeCollapseKeys:c,getItemTitle:u,onAddFilter:f,onAddCustomization:m,onChange:g,onRearrange:v,onRemove:b,restoreItem:x,onCollapseChange:S,onCrossListDrop:w,itemTitles:C,formValuesVersion:k})=>{let $=(0,h.useCallback)(e=>{var t;return null!=(t=null==C?void 0:C[e])?t:u(e)},[C,u]),[D,I]=(0,h.useState)(!1),O=(0,nG.FR)((0,nG.MS)(nG.AN,{activationConstraint:{distance:10}}),(0,nG.MS)(nG.uN)),T=(0,h.useCallback)(()=>{I(!0)},[]),z=(0,h.useCallback)(e=>{I(!1);let{active:t,over:r}=e;if(!r||t.id===r.id)return;let i=n.findIndex(e=>e===t.id),o=l.findIndex(e=>e===t.id),a=n.findIndex(e=>e===r.id),s=l.findIndex(e=>e===r.id),d=t.data.current;if(-1===i&&-1===o&&d){if(d.isDivider&&d.dragType&&w&&(-1!==a||-1!==s)){let e="FILTER"===d.dragType?"filter":"customization";w(d.filterIds[0],-1!==a?a:s,e,-1!==a?"filter":"customization")}return}if(w&&"string"==typeof t.id&&(0,nX._T)(t.id)&&(-1!==i&&-1!==s||-1!==o&&-1!==a)){let e=-1!==i?"filter":"customization",r="filter"===e?"customization":"filter",n="filter"===r?a:s;-1!==n&&w(t.id,n,e,r);return}if(-1!==i&&-1!==a){let e=n[i];v(i,a,e);return}if(-1!==o&&-1!==s){let e=l[o];v(o,s,e)}},[n,l,v,w]),Y=(0,h.useCallback)(()=>{I(!1)},[]),F=(0,d.FD)("div",{children:[(0,p.t)("Filters")," (",e.length,")"]}),A=(0,d.FD)("div",{children:[(0,p.t)("Display controls")," (",t.length,")"]}),_=0===n.length&&0===l.length;return(0,d.Y)(nG.Mp,{sensors:O,collisionDetection:nG.fp,onDragStart:T,onDragEnd:z,onDragCancel:Y,children:(0,d.FD)(dU,{vertical:!0,children:[(0,d.Y)(dN,{align:"center",children:(0,d.Y)(dF,{onAddFilter:f,onAddCustomization:m})}),_?(0,d.Y)(tG.s,{children:(0,d.Y)(y.p,{size:"small",title:"",image:"empty.svg",description:(0,p.t)("No filters or customizations created yet")})}):(0,d.FD)(dH,{activeKey:c,onChange:e=>S(e),ghost:!0,isDragging:D,children:[(0,d.Y)(dH.Panel,{header:F,children:(0,d.Y)(dj,{currentItemId:r,items:n,removedItems:i,erroredItems:o,getItemTitle:$,onChange:g,onRearrange:v,onRemove:b,restoreItem:x,dataTestId:"filter-title-container",deleteAltText:(0,p.t)("Remove filter"),dragType:"FILTER",isCurrentSection:(0,nX.UW)(r),onCrossListDrop:(e,t,r)=>{w&&w(e,t,r,"filter")}})},"filters"),(0,d.Y)(dH.Panel,{header:A,children:(0,d.Y)(dj,{currentItemId:r,items:l,removedItems:a,erroredItems:s,getItemTitle:$,onChange:g,onRearrange:v,onRemove:b,restoreItem:x,dataTestId:"customization-title-container",deleteAltText:(0,p.t)("Remove customization"),dragType:"CUSTOMIZATION",isCurrentSection:(0,nX.xG)(r),onCrossListDrop:(e,t,r)=>{w&&w(e,t,r,"customization")}})},"chartCustomizations")]},k)]})})};function dV(){return(dV=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let dB=(0,g.styled)(st)`
  .filters-list {
    width: ${({theme:e})=>50*e.sizeUnit}px;
    overflow: auto;
  }
`,dq=(0,g.styled)(tG.s)`
  height: 100%;
`,dW=at("filters-config-modal");function dG(e,t){return e&&t(e)?[e]:[]}let dK=(0,h.memo)(function({isOpen:e,initialFilterId:t,createNewOnOpen:r,onSave:n,onCancel:i}){var o,l,a,s,c;let u,f,m,y=(0,g.useTheme)(),[x]=eW.l.useForm(),w=(0,h.useRef)(null),C=i6(),k=(u=i6(),(0,h.useMemo)(()=>u.reduce((e,t)=>(e[t.id]=t,e),{}),[u])),$=i9(),D=(f=i9(),(0,h.useMemo)(()=>f.reduce((e,t)=>(e[t.id]=t,e),{}),[f])),I=(0,h.useMemo)(()=>Object.keys(k),[k]),O=(0,h.useMemo)(()=>Object.keys(D),[D]),T=dm(I,k),z=dm(O,D),[Y,F]=(0,h.useState)(!1),[_,E]=(0,h.useState)(!1),[R,j]=(0,h.useState)(["filters","chartCustomizations"]),U=(0,h.useMemo)(()=>(0,a8.A)([...(0,nX.fN)(C),...T.newIds]),[C,T.newIds]),N=(0,h.useMemo)(()=>(0,a8.A)([...(0,nX.sF)($),...z.newIds]),[$,z.newIds]),H=null!=(o=null!=(l=null!=t?t:U[0])?l:N[0])?o:"",[L,V]=(0,h.useState)(H),B=e=>[`${e}-${dn.configuration.key}`,`${e}-${dn.settings.key}`],[q,W]=(0,h.useState)(()=>{if(H){if((0,nX.UW)(H))return B(H);if((0,nX.xG)(H))return[`${H}-${dn.configuration.key}`,`${H}-${dn.settings.key}`]}return[]}),G=(0,h.useMemo)(()=>T.newIds.filter(e=>!T.removedItems[e]),[T.newIds,T.removedItems]),K=(0,h.useCallback)(e=>L===e,[L]),Q=(0,h.useCallback)(e=>{V(e),(0,nX.UW)(e)?W(B(e)):(0,nX.xG)(e)&&W([`${e}-${dn.configuration.key}`,`${e}-${dn.settings.key}`])},[]),X=(0,h.useCallback)(e=>{let t=(0,nX.UW)(e)?T:z;t.changes.modified.includes(e)||t.setChanges(t=>dV({},t,{modified:[...t.modified,e]}))},[T,z]),Z=(0,h.useCallback)((e=!1)=>{var t,r;T.resetState(),z.resetState(),F(!1);let n=null!=(t=null!=(r=U[0])?r:N[0])?t:"";V(n),T.setRenderedIds(dG(n,nX.UW)),z.setRenderedIds(dG(n,nX.xG)),U.length>0&&W(B(U[0])),e||(T.setOrderedIds(I),z.setOrderedIds(O)),x.resetFields(["filters"]),x.setFieldsValue({changed:!1})},[x,U,N,I,O,T,z]),J=function({form:e,filterState:t,filterIds:r,filterConfigMap:n,handleModifyItem:i,setActiveItem:o,setSaveAlertVisible:l}){let a=(0,h.useCallback)(e=>{let r=(0,nX.Z4)(e);t.setNewIds([...t.newIds,r]),i(r),o(r),l(!1),t.setOrderedIds([...t.orderedIds,r])},[t,i,o,l]),s=(0,h.useCallback)(e=>{let r=window.setTimeout(()=>{t.setRemovedItems(t=>dg({},t,{[e]:{isPending:!1}}))},5e3);t.setRemovedItems(t=>dg({},t,{[e]:{isPending:!0,timerId:r}})),t.setChanges(t=>dg({},t,{deleted:[...t.deleted,e]})),l(!1)},[t,l]),d=(0,h.useCallback)(e=>{let r=t.removedItems[e];(null==r?void 0:r.isPending)&&clearTimeout(r.timerId),t.setRemovedItems(t=>dg({},t,{[e]:null})),t.setChanges(t=>dg({},t,{deleted:t.deleted.filter(t=>t!==e)}))},[t]),c=(0,h.useCallback)((e,r,n)=>{let i=[...t.orderedIds],[o]=i.splice(e,1);i.splice(r,0,o),t.setOrderedIds(i),t.setChanges(e=>dg({},e,{reordered:i}))},[t]),u=(0,h.useCallback)(r=>{var i;if(t.removedItems[r])return!1;let o=(null==(i=e.getFieldValue("filters"))?void 0:i[r])||n[r];return o&&"filterType"in o&&dv.includes(o.filterType)},[n,e,t.removedItems]),f=(0,h.useCallback)(()=>{let t=new Map,r=e.getFieldValue("filters");return r&&Object.keys(r).forEach(e=>{let i=r[e],o=n[e],l=[];i&&"dependencies"in i?l=[...i.dependencies]:(null==o?void 0:o.cascadeParentIds)&&(l=[...o.cascadeParentIds]),t.set(e,l)}),t},[n,e]),m=(0,h.useCallback)((e,t)=>{let i=f();return r.filter(t=>t!==e).filter(e=>u(e)).filter(t=>{let r=[...i.get(e)||[],t],n=new Map(i);return n.set(e,r),!(0,nX.Vp)(n,e)}).map(e=>{var r;return{label:t(e),value:e,type:null==(r=n[e])?void 0:r.filterType}})},[f,u,n,r]),g=(0,h.useCallback)(()=>{let n=f();r.filter(e=>!t.removedItems[e]).forEach(t=>{let r=(0,nX.Vp)(n,t),i={name:["filters",t,"dependencies"],errors:r?[(0,p.t)("Cyclic dependency detected")]:[]};e.setFields([i])})},[f,r,e,t.removedItems]),v=(0,h.useCallback)(e=>{let r=f(),n=t.orderedIds.filter(t=>t!==e&&u(t));return n.find(t=>{let n=r.get(e)||[];return n.push(t),!(0,nX.Vp)(r,e)||(n.pop(),!1)})||n[0]||""},[f,u,t.orderedIds]);return{addFilter:a,handleRemoveFilter:s,restoreFilter:d,handleRearrangeFilters:c,canBeUsedAsDependency:u,buildDependencyMap:f,getAvailableFilters:m,validateDependencies:g,getDependencySuggestion:v}}({form:x,filterState:T,filterIds:U,filterConfigMap:k,handleModifyItem:X,setActiveItem:Q,setSaveAlertVisible:F}),ee=function({form:e,configFormRef:t,filterState:r,customizationState:n,filterIds:i,chartCustomizationIds:o,filterConfigMap:l,chartCustomizationConfigMap:a,initialFilterOrder:s,initialCustomizationOrder:d,unsavedFiltersIds:c,currentItemId:u,setActiveItem:f,onSave:m,canBeUsedAsDependency:g,resetForm:v}){let y=(0,b.wA)(),x=(0,h.useCallback)(e=>{let t=new Set,r=Object.keys(l).reduce((e,r)=>{var n;let i=l[r],o=null==(n=i.cascadeParentIds)?void 0:n.filter(e=>g(e));return o&&!(0,l8.A)(o,i.cascadeParentIds)&&(y((0,aA.oB)(r,o)),t.add(r)),dk({},e,{[r]:dk({},i,{cascadeParentIds:o})})},{}),n=null==e?void 0:e.filters;return n&&Object.keys(n).forEach(e=>{let r=n[e];if(!("dependencies"in r))return;let i=r.dependencies||[],o=i.filter(e=>g(e));(0,l8.A)(o,i)||(r.dependencies=o,t.add(e))}),[r,t]},[g,y,l]),S=(0,h.useCallback)(t=>{var r;let n=null==(r=e.getFieldValue("filters"))?void 0:r[t],i=(0,nX.UW)(t),o=i?l[t]:a[t];return n&&"name"in n&&n.name||n&&"title"in n&&n.title||o&&"name"in o&&o.name||o&&"title"in o&&o.title||(0,p.t)(i?"[untitled]":"[untitled customization]")},[e,l,a]),w=(0,h.useCallback)(()=>{let t=e.getFieldsError(),l=[],a=[];t.forEach(e=>{let t=e.name[1];e.errors.length>0&&(o.includes(t)?a.includes(t)||a.push(t):i.includes(t)&&!l.includes(t)&&l.push(t))}),!l.length&&r.erroredIds.length>0?r.setErroredIds(d$):l.length>0&&!(0,l8.A)((0,dy.A)(r.erroredIds),(0,dy.A)(l))&&r.setErroredIds(l),!a.length&&n.erroredIds.length>0?n.setErroredIds(d$):a.length>0&&!(0,l8.A)((0,dy.A)(n.erroredIds),(0,dy.A)(a))&&n.setErroredIds(a)},[e,r,n,o,i]),C=(0,h.useCallback)(()=>{var c;return(c=function*(){let c=yield(0,nX.l)(e,u,f);if(w(),c){let e=dk({},c.filters);i.forEach(t=>{!e[t]&&l[t]&&(e[t]=l[t])}),o.forEach(t=>{!e[t]&&a[t]&&(e[t]=a[t])});let t=dk({},c,{filters:e}),[u,h]=x(c),p=[...new Set([...h,...r.changes.modified])],f=dk({},r.changes,{modified:p.length&&r.changes.deleted.length?p.filter(e=>!r.changes.deleted.includes(e)):p,reordered:r.changes.reordered.length&&!(0,l8.A)(r.changes.reordered,s)?r.changes.reordered:[]}),g=f.modified.length>0||f.deleted.length>0||f.reordered.length>0,b=dk({},n.changes,{reordered:n.changes.reordered.length&&!(0,l8.A)(n.changes.reordered,d)?n.changes.reordered:[]}),y=b.modified.length>0||b.deleted.length>0||b.reordered.length>0,S={};if(g){let e=f.modified.map(e=>{var r;return function(e,t){if(t&&!("type"in t&&(t.type===iF.i4.ChartCustomization||t.type===iF.i4.Divider))){if(t.type===iF.EH.Divider)return{id:e,type:iF.EH.Divider,title:t.title,description:t.description,scope:{rootPath:[P.wv],excluded:[]}};if("dataset"in t){var r,n,i,o,l,a;let s,d;return r=e,n=t,s={rootPath:[P.wv],excluded:[]},d={id:r,type:iF.EH.NativeFilter,name:n.name,filterType:n.filterType,description:(n.description||"").trim(),targets:[dx(n)],scope:n.scope||s,controlValues:null!=(i=n.controlValues)?i:{},defaultDataMask:null!=(o=n.defaultDataMask)?o:(0,l9.Z)(),cascadeParentIds:n.dependencies||[],adhoc_filters:n.adhoc_filters,time_range:n.time_range,granularity_sqla:n.granularity_sqla,sortMetric:null!=(l=n.sortMetric)?l:null,requiredFirst:n.requiredFirst?Object.values(n.requiredFirst).find(e=>e):void 0},(null==(a=n.time_grains)?void 0:a.length)&&(d.time_grains=n.time_grains),d}return dS({},t,{id:e,description:(t.description||"").trim()})}}(e,(null==(r=t.filters)?void 0:r[e])||u[e])}).filter(Boolean);S.filterChanges=dk({},f,{modified:e})}y&&(S.customizationChanges={modified:b.modified.map(e=>{var r;return function(e,t){if(t&&!("type"in t&&(t.type===iF.EH.NativeFilter||t.type===iF.EH.Divider))){if(t.type===iF.i4.Divider)return{id:e,type:iF.i4.Divider,title:t.title,description:t.description};if("dataset"in t&&"object"==typeof t.dataset){var r,n,i,o,l;let a,s;return r=e,n=t,a={rootPath:[P.wv],excluded:[]},s={id:r,type:iF.i4.ChartCustomization,name:n.name,filterType:n.filterType,description:(n.description||"").trim(),targets:[dx(n)],scope:n.scope||a,controlValues:null!=(i=n.controlValues)?i:{},defaultDataMask:null!=(o=n.defaultDataMask)?o:{},removed:!1},(null==(l=n.time_grains)?void 0:l.length)&&(s.time_grains=n.time_grains),s}return dw({},t,{id:e,description:(t.description||"").trim()})}}(e,(null==(r=t.filters)?void 0:r[e])||a[e])}).filter(Boolean),deleted:b.deleted,reordered:b.reordered}),(S.filterChanges||S.customizationChanges)&&(yield m(S),v(!0))}else{var h,p;null==(p=t.current)||null==(h=p.changeTab)||h.call(p,"configuration")}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=c.apply(e,t);function o(e){dC(i,r,n,o,l,"next",e)}function l(e){dC(i,r,n,o,l,"throw",e)}o(void 0)})})()},[e,u,w,x,r.changes,s,d,m,n.changes,a,l,i,o,f,t,v]),k=(0,h.useMemo)(()=>{let t=e.getFieldValue("changed"),n=r.orderedIds.length!==s.length||r.orderedIds.some((e,t)=>e!==s[t]);return c.length>0||e.isFieldsTouched()||t||n||Object.values(r.removedItems).some(e=>null==e?void 0:e.isPending)},[e,r.orderedIds,r.removedItems,s,c]);return{handleSave:C,handleErroredItems:w,getItemTitle:S,canSave:(0,h.useMemo)(()=>{let e=!r.erroredIds.length&&!n.erroredIds.length,t=r.changes.modified.length>0||r.changes.deleted.length>0||r.changes.reordered.length>0&&!(0,l8.A)(r.changes.reordered,s),i=n.changes.modified.length>0||n.changes.deleted.length>0||n.changes.reordered.length>0&&!(0,l8.A)(n.changes.reordered,d);return e&&(t||i)},[r.erroredIds,r.changes,n.erroredIds,n.changes,s,d]),hasUnsavedChanges:k}}({form:x,configFormRef:w,filterState:T,customizationState:z,filterIds:U,chartCustomizationIds:N,filterConfigMap:k,chartCustomizationConfigMap:D,initialFilterOrder:I,initialCustomizationOrder:O,unsavedFiltersIds:G,currentItemId:L,setActiveItem:Q,onSave:n,canBeUsedAsDependency:J.canBeUsedAsDependency,resetForm:Z}),et=function({customizationState:e,handleModifyItem:t,setActiveItem:r,setSaveAlertVisible:n}){let i=(0,h.useCallback)(i=>{let o=(0,nX.a$)(i);e.setNewIds([...e.newIds,o]),t(o),r(o),n(!1),e.setOrderedIds([...e.orderedIds,o])},[e,t,r,n]),o=(0,h.useCallback)(t=>{let r=window.setTimeout(()=>{e.setRemovedItems(e=>db({},e,{[t]:{isPending:!1}}))},5e3);e.setRemovedItems(e=>db({},e,{[t]:{isPending:!0,timerId:r}})),e.setChanges(e=>db({},e,{deleted:[...e.deleted,t]})),n(!1)},[e,n]);return{addChartCustomization:i,handleRemoveCustomization:o,restoreCustomization:(0,h.useCallback)(t=>{let r=e.removedItems[t];(null==r?void 0:r.isPending)&&clearTimeout(r.timerId),e.setRemovedItems(e=>db({},e,{[t]:null})),e.setChanges(e=>db({},e,{deleted:e.deleted.filter(e=>e!==t)}))},[e]),handleRearrangeCustomizations:(0,h.useCallback)((t,r,n)=>{let i=[...e.orderedIds],[o]=i.splice(t,1);i.splice(r,0,o),e.setOrderedIds(i),e.setChanges(e=>db({},e,{reordered:i}))},[e])}}({customizationState:z,handleModifyItem:X,setActiveItem:Q,setSaveAlertVisible:F}),er=(0,h.useCallback)(e=>J.getAvailableFilters(e,ee.getItemTitle),[J,ee.getItemTitle]),en=(0,h.useCallback)(e=>{(0,nX.UW)(e)?J.restoreFilter(e):et.restoreCustomization(e)},[J,et]),ei=(0,h.useCallback)(e=>{(0,nX.UW)(e)?J.handleRemoveFilter(e):et.handleRemoveCustomization(e)},[J,et]),eo=(0,h.useCallback)((e,t,r)=>{(0,nX.UW)(r)?J.handleRearrangeFilters(e,t,r):et.handleRearrangeCustomizations(e,t,r)},[J,et]),el=(0,h.useCallback)((e,t,r,n)=>{if(!e||r===n)return;let i="filter"===r?T:z,o="filter"===n?T:z,l=(0,nX.bz)(e,n),a=i.orderedIds.indexOf(e);if(-1===a)return;let s=[...i.orderedIds];s.splice(a,1),i.setOrderedIds(s);let d=[...o.orderedIds];d.splice(t,0,l),o.setOrderedIds(d);let c=x.getFieldValue("filters")||{},u=c[e];if(!u){let t=("filter"===r?k:D)[e];t&&"title"in t&&(u={title:t.title,description:t.description})}let h=dV({},c),p="customization"===n?iF.i4.Divider:iF.EH.Divider;h[l]=dV({},u,{type:p}),delete h[e],x.setFieldsValue({filters:h}),i.newIds.includes(e)?i.setNewIds(i.newIds.filter(t=>t!==e)):i.setChanges(t=>dV({},t,{deleted:[...t.deleted,e]})),i.setChanges(t=>dV({},t,{modified:t.modified.filter(t=>t!==e),reordered:s})),o.setNewIds([...o.newIds,l]),o.setChanges(e=>dV({},e,{modified:[...e.modified,l],reordered:d})),Q(l),F(!1)},[T,z,x,k,D,Q,F]),ea=(0,h.useCallback)(()=>{ee.hasUnsavedChanges?F(!0):(Z(),i())},[ee.hasUnsavedChanges,Z,i]),es=(0,h.useCallback)(()=>{Z(),i()},[Z,i]),ed=(0,a9.A)(()=>{E(!_)}),ec=_?A.F.FullscreenExitOutlined:A.F.FullscreenOutlined,[eu,eh]=(0,h.useState)(0),ep=(0,h.useMemo)(()=>{let e={};return[...U,...N].forEach(t=>{e[t]=ee.getItemTitle(t)}),e},[U,N,ee,eu]),ef=(0,h.useMemo)(()=>(0,M.A)(()=>{F(!1),ee.handleErroredItems(),eh(e=>e+1)},l6.Y.SLOW_DEBOUNCE),[ee,F]),em=(0,h.useCallback)(e=>{var t;ef(),Object.keys(null!=(t=null==e?void 0:e.filters)?t:{}).forEach(e=>{(0,nX._T)(e)&&X(e)})},[ef,X]),eg=(0,h.useCallback)(e=>W(e),[]);a=J.addFilter,m=(0,iv.Z)(e),(0,h.useEffect)(()=>{r&&e&&!m&&a(iF.EH.NativeFilter)},[r,e,m,a]),s=dV({},T.removedItems,z.removedItems),c=[...T.orderedIds,...z.orderedIds],(0,h.useEffect)(()=>{let e=s[L];if(e&&!e.isPending){let e=c.find(e=>!s[e]&&e!==L);e&&Q(e)}},[L,s,c,Q]),(0,h.useEffect)(()=>{(0,nX.UW)(L)&&T.addToRendered(L)},[L,T]),(0,h.useEffect)(()=>{(0,nX.xG)(L)&&z.addToRendered(L)},[L,z]);let ev=(0,h.useCallback)(e=>{T.setErroredIds(e(T.erroredIds))},[T]),eb=(0,h.useCallback)(e=>{z.setErroredIds(e(z.erroredIds))},[z]);return(0,d.Y)(se,{open:e,maskClosable:!1,title:(0,p.t)("Add or edit display controls"),expanded:_,destroyOnHidden:!0,onCancel:ea,onOk:ee.handleSave,centered:!0,"data-test":"filter-modal",footer:(0,d.FD)("div",{css:(0,v.AH)`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          `,children:[(0,d.Y)(du,{onDismiss:()=>F(!1),onCancel:ea,handleSave:ee.handleSave,canSave:ee.canSave,saveAlertVisible:Y,onConfirmCancel:es}),(0,d.Y)(sn,{children:(0,d.Y)(ec,{iconSize:"l",iconColor:y.colorIcon,onClick:ed})})]}),children:(0,d.Y)(S.tH,{children:(0,d.Y)(dB,{expanded:_,children:(0,d.Y)(sr,{form:x,onValuesChange:em,layout:"vertical",preserve:!0,children:(0,d.FD)(dq,{children:[(0,d.Y)(dL,{filterIds:U,chartCustomizationIds:N,currentItemId:L,filterOrderedIds:T.orderedIds,filterRemovedItems:T.removedItems,filterErroredItems:T.erroredIds,customizationOrderedIds:z.orderedIds,customizationRemovedItems:z.removedItems,customizationErroredItems:z.erroredIds,activeCollapseKeys:R,getItemTitle:ee.getItemTitle,itemTitles:ep,onAddFilter:J.addFilter,onAddCustomization:et.addChartCustomization,onChange:Q,onRearrange:eo,onRemove:ei,restoreItem:en,onCollapseChange:j,onCrossListDrop:el}),(0,d.Y)(dY,{currentItemId:L,filterIds:U,chartCustomizationIds:N,filterState:{orderedIds:T.orderedIds,renderedIds:T.renderedIds,removedItems:T.removedItems},customizationState:{orderedIds:z.orderedIds,renderedIds:z.renderedIds,removedItems:z.removedItems},filterConfigMap:k,chartCustomizationConfigMap:D,isItemActive:K,expanded:_,form:x,configFormRef:w,restoreItem:en,getAvailableFilters:er,activeFilterPanelKey:q,handleActiveFilterPanelChange:eg,handleSetErroredFilters:ev,handleSetErroredCustomizations:eb,validateDependencies:J.validateDependencies,getDependencySuggestion:J.getDependencySuggestion,handleModifyItem:X})]})})})})})});function dQ(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}let dX=({createNewOnOpen:e=!1,dashboardId:t,initialFilterId:r})=>{let n=(0,b.wA)(),[i,o]=(0,h.useState)(!1),l=(0,h.useCallback)(()=>{o(!0)},[]),a=(0,h.useCallback)(()=>{o(!1)},[]),s=(0,h.useCallback)(e=>{var t;return(t=function*(){try{e.filterChanges&&n((0,aA.dO)(e.filterChanges)),e.customizationChanges&&(yield n((0,l5.vn)(e.customizationChanges.modified,e.customizationChanges.deleted,e.customizationChanges.reordered,!0))),a()}catch{}},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function l(e){dQ(o,n,i,l,a,"next",e)}function a(e){dQ(o,n,i,l,a,"throw",e)}l(void 0)})})()},[n,a]),c=i?(0,d.Y)(dK,{isOpen:i,onSave:s,onCancel:a,createNewOnOpen:e,initialFilterId:r},`filters-for-${t}`):null;return{isFilterConfigModalOpen:i,openFilterConfigModal:l,closeFilterConfigModal:a,handleSave:s,FilterConfigModalComponent:c}};function dZ(){return(dZ=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let dJ=({onClick:e,children:t})=>(0,d.Y)("div",dZ({},aa("create-filter"),{onClick:e,role:"button",tabIndex:0,children:t})),d0=(0,h.memo)(dJ),d1=({filter:e,hidePopover:t})=>{let r=(0,g.useTheme)(),[n,,i]=(0,aV.A)(),o=(0,b.d4)(({dashboardInfo:e})=>e.id),l=(0,b.d4)(({dashboardInfo:e})=>e.dash_edit_perm),{FilterConfigModalComponent:a,openFilterConfigModal:s}=dX({dashboardId:o,initialFilterId:e.id}),c=(0,iF.Qj)(e);return(0,d.FD)(aW,{css:e=>(0,v.AH)`
        margin-bottom: ${3*e.sizeUnit}px;
        justify-content: space-between;
      `,children:[(0,d.FD)(a0,{children:[c?(0,d.Y)(A.F.GroupOutlined,{iconSize:"s",css:e=>(0,v.AH)`
              margin-right: ${e.sizeUnit}px;
            `}):(0,d.Y)(A.F.FilterOutlined,{iconSize:"s",css:e=>(0,v.AH)`
              margin-right: ${e.sizeUnit}px;
            `}),(0,d.Y)(a4,{title:i?e.name:null,children:(0,d.Y)(aQ,{ref:n,children:e.name})})]}),l&&(0,d.Y)(dJ,{onClick:()=>{s(),t()},children:(0,d.Y)(A.F.EditOutlined,{iconSize:"l",iconColor:r.colorIcon,css:()=>(0,v.AH)`
              cursor: pointer;
            `})}),a]})},d4=({filter:e})=>{let t=(0,iF.Qj)(e),r=(0,h.useMemo)(()=>(0,nb.A)().get(e.filterType),[e.filterType]);return(0,d.FD)(aW,{children:[(0,d.Y)(aG,{children:t?(0,p.t)("Type"):(0,p.t)("Filter type")}),(0,d.Y)(aK,{children:null==r?void 0:r.name})]})},d2=({filter:e,hidePopover:t})=>(0,d.FD)("div",{children:[(0,d.Y)(d1,{filter:e,hidePopover:t}),(0,d.Y)(d4,{filter:e}),(0,d.Y)(a6,{filter:e}),(0,d.Y)(a7,{filter:e})]}),d6=({children:e,filter:t,getPopupContainer:r,isVisible:n=!0,placement:i})=>{let[o,l]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{n||l(!1)},[n]),(0,d.Y)(nr.A,{placement:i,overlayStyle:{width:"240px"},mouseEnterDelay:.2,mouseLeaveDelay:.2,onOpenChange:e=>{l(n&&e)},open:n&&o,content:(0,d.Y)(d2,{filter:t,hidePopover:()=>{l(!1)}}),getPopupContainer:null!=r?r:()=>document.body,arrow:!1,children:e})};function d3(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function d5(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function l(e){d3(o,n,i,l,a,"next",e)}function a(e){d3(o,n,i,l,a,"throw",e)}l(void 0)})}}let d7=g.styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .enable-cross-filters-text {
    padding-left: ${({theme:e})=>`${2*e.sizeUnit}px`};
  }
`,d8="cross-filters-menu-key",d9="cross-filters-scoping-menu-key",ce="add-edit-filters-menu-key",ct=()=>{let e=(0,g.useTheme)(),t=(0,b.wA)(),r=(0,b.d4)(({dashboardInfo:e})=>e.crossFiltersEnabled),n=(0,b.d4)(({dashboardInfo:e})=>e.filterBarOrientation),[i,o]=(0,h.useState)(n),[l,a]=(0,h.useState)(r),s=(0,b.d4)(({dashboardInfo:e})=>e.dash_edit_perm),c=ad(),u=(0,h.useMemo)(()=>Object.values(c),[c]),f=(0,b.d4)(({dashboardInfo:e})=>e.id),[m,y]=ia(),{openFilterConfigModal:x,FilterConfigModalComponent:S}=dX({createNewOnOpen:!1,dashboardId:f}),w=(0,h.useCallback)(e=>d5(function*(){e||t((0,l3.V9)()),yield t((0,tp.tS)(e))})(),[t]),C=(0,h.useCallback)(()=>{a(!l),w(!l)},[l,w]),k=(0,h.useCallback)(e=>d5(function*(){if(e!==n){o(e);try{yield t((0,tp.ll)(e))}catch{o(n)}}})(),[t,n]),$=(0,h.useCallback)(e=>{let t=e.key;if(t===d8)C();else t===tI.QI.Vertical||t===tI.QI.Horizontal?k(t):t===d9?m():t===ce?x():"chart-customization-menu-key"===t&&x()},[m,C,k,x]),D=(0,h.useMemo)(()=>(0,d.Y)(d7,{children:(0,d.Y)(Y.Checkbox,{name:"enable-cross-filters",checked:l,onChange:e=>a(e.target.checked),children:(0,p.t)("Enable cross-filtering")})}),[l]),I=(0,h.useMemo)(()=>{let t=[];return s&&(t.push({key:ce,label:(0,d.Y)(d0,{children:(0,p.t)("Add or edit filters and controls")})}),s&&t.push({type:"divider"})),s&&(t.push({key:d8,label:D}),t.push({key:d9,label:(0,p.t)("Cross-filtering scoping")}),t.push({type:"divider"})),s&&t.push({key:"placement",label:(0,p.t)("Orientation of filter bar"),className:"filter-bar-orientation-submenu",children:[{key:tI.QI.Vertical,label:(0,d.FD)(Y.Space,{children:[(0,p.t)("Vertical (Left)"),i===tI.QI.Vertical&&(0,d.Y)(A.F.CheckOutlined,{iconColor:e.colorPrimary,iconSize:"m","aria-label":(0,p.t)("Selected")})]})},{key:tI.QI.Horizontal,label:(0,d.FD)(Y.Space,{children:[(0,p.t)("Horizontal (Top)"),i===tI.QI.Horizontal&&(0,d.Y)(A.F.CheckOutlined,{iconSize:"m",css:(0,v.AH)`
                      vertical-align: middle;
                    `,"aria-label":(0,p.t)("Selected")})]})}]}),t},[i,s,D,f,u]);return I.length&&s?(0,d.FD)(d.FK,{children:[(0,d.Y)(nx.ms,{menu:{onClick:$,items:I,selectedKeys:[i]},trigger:["click"],popupRender:e=>(0,d.Y)("div",{css:(0,v.AH)`
              .filter-bar-orientation-submenu.ant-dropdown-menu-submenu-selected
                > .ant-dropdown-menu-submenu-title {
                color: inherit;
              }
            `,children:e}),children:(0,d.Y)(z.$n,{buttonStyle:"link",css:(0,v.AH)`
            padding: 0;
          `,children:(0,d.Y)(A.F.SettingOutlined,{iconSize:"xl",name:"gear","data-test":"filterbar-orientation-icon"})})}),y,S]}):null};function cr(){return(cr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let cn=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 ${2*e.sizeUnit}px ${2*e.sizeUnit}px;
    padding-bottom: 0; /* Works with other changes in PR https://github.com/apache/superset/pull/38646 to reduces space between filter header and 1st filter */

    & > span {
      font-size: ${e.fontSizeLG}px;
      flex-grow: 1;
      font-weight: ${e.fontWeightStrong};
    }

    & > div:first-of-type {
      line-height: 0;
    }

    & > button > span.anticon {
      line-height: 0;
    }
  `}
`,ci=(0,g.styled)(z.$n)`
  padding: 0;
`,co=g.styled.div`
  ${({theme:e})=>`
    padding: ${3*e.sizeUnit}px ${2*e.sizeUnit}px;
    padding-bottom: 0; /* Works with other changes in PR https://github.com/apache/superset/pull/38646 to reduces space between filter header and 1st filter */
  `}
`,cl=(0,h.memo)(({toggleFiltersBar:e})=>(0,d.Y)(co,{children:(0,d.FD)(cn,{children:[(0,d.Y)("span",{children:(0,p.t)("Filters and controls")}),(0,d.Y)(ct,{}),(0,d.Y)(ci,cr({},aa("collapse-button"),{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>e(!1),children:(0,d.Y)(A.F.VerticalAlignTopOutlined,{iconSize:"xl",css:(0,v.AH)`
            transform: rotate(-90deg);
          `})}))]})}));function ca(){return(ca=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let cs=e=>{let{dataMask:t,chartIds:r,chartLayoutItems:n,verboseMaps:i}=e;return r&&Array.isArray(r)?r.map(e=>{let r=iH(e,t[e],n);if((0,nT.A)(r.column)&&(0,nT.A)(r.value)){var o;let t=(null==(o=i[e])?void 0:o[(0,iA.A)(r.column)])||r.column;return ca({},r,{column:t,emitterId:e})}return null}).filter(Boolean):[]};var cd=r(4392),cc=r(83881);let cu=(0,v.AH)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
`,ch=g.styled.b`
  ${({theme:e})=>`
    max-width: ${25*e.sizeUnit}px;
  `}
  ${cu}
`,cp=(0,g.styled)("span")`
  ${({theme:e})=>`
    max-width: ${25*e.sizeUnit}px;
    padding-right: ${e.sizeUnit}px;
  `}
  ${cu}
`,cf=(0,g.styled)(cc.v)`
  ${({theme:e})=>`
    border: 1px solid ${e.colorBorder};
    border-radius: 2px;
    .anticon-close {
      vertical-align: middle;
    }
  `}
`,cm=e=>{var t;let{filter:r,orientation:n,removeCrossFilter:i}=e,o=(0,g.useTheme)(),[l,a]=(0,cd.A)(),[s,c]=(0,cd.A)(),u=r.customColumnLabel||(0,iA.A)(null!=(t=r.column)?t:"");return(0,d.FD)(cf,{css:(0,v.AH)`
        ${n===tI.QI.Vertical?`
            margin-top: ${2*o.sizeUnit}px;
          `:`
            margin-left: ${2*o.sizeUnit}px;
          `}
      `,closable:!0,onClose:()=>i(r.emitterId),editable:!0,children:[(0,d.Y)(H.m,{title:a?u:null,children:(0,d.Y)(cp,{ref:l,children:u})}),(0,d.Y)(H.m,{title:c?r.value:null,children:(0,d.Y)(ch,{ref:s,children:r.value})})]})},cg=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorText};
    vertical-align: middle;
    align-items: center;
  `}
`,cv=(0,g.styled)(A.F.SearchOutlined)`
  ${({theme:e})=>`
    & > span.anticon.anticon-search {
      color: ${e.colorIcon};
      margin-left: ${e.sizeUnit}px;
      transition: 0.3s;
      vertical-align: middle;
      line-height: 0;
      &:hover {
        color: ${e.colorIconHover};
      }
    }
  `}
`,cb=e=>{let{title:t,orientation:r,onHighlightFilterSource:n}=e,[i,o]=(0,cd.A)(),l=(0,g.useTheme)();return(0,d.FD)(cg,{children:[(0,d.Y)(H.m,{title:o?t:null,children:(0,d.Y)("span",{css:(0,v.AH)`
            max-width: ${r===tI.QI.Vertical?`${45*l.sizeUnit}px`:`${15*l.sizeUnit}px`};
            line-height: 1.4;
            ${cu}
          `,ref:i,children:t})}),(0,d.Y)(H.m,{title:(0,p.t)("Locate the chart"),children:(0,d.Y)(cv,{iconSize:"s","data-test":"cross-filters-highlight-emitter",role:"button",tabIndex:0,"aria-label":(0,p.t)("Locate the chart"),onClick:n})})]})},cy=e=>{let{filter:t,orientation:r,last:n}=e,i=(0,g.useTheme)(),o=(0,b.wA)(),l=(0,h.useCallback)(e=>{e&&o((0,tu.I)(e))},[o]);return(0,d.FD)("div",{css:(0,v.AH)`
        ${r===tI.QI.Vertical?`
            display: block;
            margin-bottom: ${4*i.sizeUnit}px;
          `:`
            display: flex;
          `}
      `,children:[(0,d.Y)(cb,{title:t.name,orientation:r||tI.QI.Horizontal,onHighlightFilterSource:()=>l(t.path)}),(t.column||t.value)&&(0,d.Y)(cm,{filter:t,orientation:r,removeCrossFilter:e=>{o((0,l3.Mv)(e,{extraFormData:{filters:[]},filterState:{value:null,selectedValues:null}}))}}),n&&(0,d.Y)("div",{"data-test":"cross-filters-divider",css:(0,v.AH)`
            ${r===tI.QI.Horizontal?`
                width: 1px;
                height: 22px;
                margin-left: ${4*i.sizeUnit}px;
                margin-right: ${i.sizeUnit}px;
                flex-shrink: 0;
              `:`
                width: 100%;
                height: 1px;
                display: block;
                margin-bottom: ${4*i.sizeUnit}px;
                margin-top: ${4*i.sizeUnit}px;
            `}
            background: ${i.colorSplit};
          `})]},`${t.name}${t.emitterId}`)},cx=e=>{let{crossFilters:t,hideHeader:r=!1}=e,n=(0,g.useTheme)(),[i,o]=(0,h.useState)(!0),l=(0,h.useCallback)(()=>{o(e=>!e)},[]),a=(0,h.useCallback)(e=>(0,v.AH)`
      margin-bottom: ${3*e.sizeUnit}px;
      padding: 0 ${4*e.sizeUnit}px;
    `,[]),s=(0,h.useCallback)(e=>(0,v.AH)`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${2*e.sizeUnit}px 0;
      cursor: pointer;
      user-select: none;

      &:hover {
        background: ${e.colorBgTextHover};
        margin: 0 -${2*e.sizeUnit}px;
        padding: ${2*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
      }
    `,[]),c=(0,h.useCallback)(e=>(0,v.AH)`
      margin: 0;
      font-size: ${e.fontSize}px;
      font-weight: ${e.fontWeightStrong};
      color: ${e.colorText};
      line-height: 1.3;
    `,[]),u=(0,h.useCallback)(e=>(0,v.AH)`
      padding: ${2*e.sizeUnit}px 0;
    `,[]),f=(0,h.useCallback)(e=>(0,v.AH)`
      height: 1px;
      background: ${e.colorSplit};
      margin: ${2*e.sizeUnit}px 0;
    `,[]),m=(0,h.useCallback)((e,t)=>(0,v.AH)`
      transform: ${e?"rotate(0deg)":"rotate(180deg)"};
      transition: transform 0.2s ease;
      color: ${t.colorTextSecondary};
    `,[]),b=(0,h.useMemo)(()=>t.map(e=>(0,d.Y)(cy,{filter:e,orientation:tI.QI.Vertical},e.emitterId)),[t]);return t.length?(0,d.FD)("div",{css:a,children:[!r&&(0,d.FD)("div",{css:s,onClick:l,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),l())},role:"button",tabIndex:0,children:[(0,d.Y)("h4",{css:c,children:(0,p.t)("Cross-filters")}),(0,d.Y)(A.F.UpOutlined,{iconSize:"m",css:m(i,n)})]}),i&&(0,d.Y)("div",{css:u,children:b}),i&&(0,d.Y)("div",{css:f,"data-test":"cross-filters-divider"})]}):null},cS=({hideHeader:e=!1})=>{let t=(0,b.d4)(e=>e.dataMask),r=tf(),n=cs({dataMask:t,chartIds:r,chartLayoutItems:n_(),verboseMaps:al()});return(0,d.Y)(cx,{crossFilters:n,hideHeader:e})};function cw(e){return`${e.subject}|${e.operator}|${JSON.stringify(e.comparator)}`}function cC(){let e=(0,am.vP)();return e?(0,am.c4)(e).map(e=>({subject:e.subject,operator:e.operator,value:function(e){let{comparator:t,operator:r}=e;return"BETWEEN"===r&&Array.isArray(t)?`${t[0]} – ${t[1]}`:Array.isArray(t)?t.join(", "):String(t)}(e),filter:e})):[]}let ck=g.styled.b`
  ${({theme:e})=>`
    max-width: ${25*e.sizeUnit}px;
  `}
  ${cu}
`,c$=(0,g.styled)("span")`
  ${({theme:e})=>`
    max-width: ${25*e.sizeUnit}px;
    padding-right: ${e.sizeUnit}px;
  `}
  ${cu}
`,cD=(0,g.styled)(cc.v)`
  ${({theme:e})=>`
    border: 1px solid ${e.colorBorder};
    border-radius: 2px;
    .anticon-close {
      vertical-align: middle;
    }
  `}
`,cI=e=>{let{filter:t,orientation:r,onRemove:n}=e,i=(0,g.useTheme)(),[o,l]=(0,cd.A)(),[a,s]=(0,cd.A)();return(0,d.FD)(cD,{css:(0,v.AH)`
        ${r===tI.QI.Vertical?`margin-top: ${2*i.sizeUnit}px;`:`margin-left: ${2*i.sizeUnit}px;`}
      `,closable:!0,onClose:()=>n(t),children:[(0,d.Y)(H.m,{title:l?t.subject:null,children:(0,d.Y)(c$,{ref:o,children:t.subject})}),(0,d.Y)(H.m,{title:s?t.value:null,children:(0,d.Y)(ck,{ref:a,children:t.value})})]})},cO=e=>(0,v.AH)`
  margin-bottom: ${3*e.sizeUnit}px;
  padding: 0 ${4*e.sizeUnit}px;
`,cT=e=>(0,v.AH)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${2*e.sizeUnit}px 0;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${e.colorBgTextHover};
    margin: 0 -${2*e.sizeUnit}px;
    padding: ${2*e.sizeUnit}px;
    border-radius: ${e.borderRadius}px;
  }
`,cz=e=>(0,v.AH)`
  margin: 0;
  font-size: ${e.fontSize}px;
  font-weight: ${e.fontWeightStrong};
  color: ${e.colorText};
  line-height: 1.3;
  display: flex;
  align-items: center;
  gap: ${e.sizeUnit}px;
`,cY=e=>(0,v.AH)`
  padding: ${2*e.sizeUnit}px 0;
`,cF=e=>(0,v.AH)`
  height: 1px;
  background: ${e.colorSplit};
  margin: ${2*e.sizeUnit}px 0;
`,cA=e=>{let{urlFilters:t,onRemoveFilter:r}=e,n=(0,g.useTheme)(),[i,o]=(0,h.useState)(!0),l=(0,h.useCallback)(()=>{o(e=>!e)},[]),a=(0,h.useMemo)(()=>t.map(e=>(0,d.Y)(cI,{filter:e,orientation:tI.QI.Vertical,onRemove:r},cw(e.filter))),[t,r]);return t.length?(0,d.FD)("div",{css:cO,children:[(0,d.FD)("div",{css:cT,onClick:l,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),l())},role:"button",tabIndex:0,children:[(0,d.FD)("h4",{css:cz,children:[(0,d.Y)(A.F.LinkOutlined,{iconSize:"s"}),(0,p.t)("URL Filters")]}),(0,d.Y)(A.F.UpOutlined,{iconSize:"m",css:(0,v.AH)`
  transform: ${i?"rotate(0deg)":"rotate(180deg)"};
  transition: transform 0.2s ease;
  color: ${n.colorTextSecondary};
`})]}),i&&(0,d.Y)("div",{css:cY,children:a}),i&&(0,d.Y)("div",{css:cF,"data-test":"url-filters-divider"})]}):null},c_=()=>{let e=(0,b.wA)(),t=(0,tb.W6)(),r=(0,tb.zy)(),[n,i]=(0,h.useState)(()=>cC());(0,h.useEffect)(()=>{i(cC())},[r.search]);let o=(0,h.useCallback)(r=>{let n=(0,am.vP)();if(!n)return;let o=cw(r.filter),l=(0,am.c4)(n).filter(e=>cw(e)!==o);if((0,am.ZO)(l,t),i(e=>e.filter(e=>cw(e.filter)!==o)),0===l.length)e((0,l3.Xl)(am.j$));else{let t=(0,am.rH)(l);e((0,l3.Mv)(am.j$,{extraFormData:{filters:t}}))}},[e,t]);return n.length?(0,d.Y)(cA,{urlFilters:n,onRemoveFilter:o}):null};function cE(){return(cE=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let cP=g.styled.div`
  width: ${({theme:e})=>8*e.sizeUnit}px;

  & .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  &.open {
    width: ${({width:e})=>e}px; /* arbitrary... */
  }
`,cM=g.styled.div`
  ${({theme:e,width:t})=>`
    & .ant-typography-edit-content {
      left: 0;
      margin-top: 0;
      width: 100%;
    }
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    flex-grow: 1;
    width: ${t}px;
    background: ${e.colorBgContainer};
    border-right: 1px solid ${e.colorSplit};
    border-bottom: 1px solid ${e.colorSplit};
    min-height: 100%;
    display: none;
    &.open {
      display: flex;
    }
  `}
`,cR=g.styled.div`
  ${({theme:e,offset:t})=>`
    position: absolute;
    top: ${t}px;
    left: 0;
    height: 100%;
    width: ${8*e.sizeUnit}px;
    padding-top: ${2*e.sizeUnit}px;
    display: none;
    text-align: center;
    &.open {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${2*e.sizeUnit}px;
    }
    svg {
      cursor: pointer;
    }
  `}
`,cj=g.styled.div`
  margin-top: ${({theme:e})=>8*e.sizeUnit}px;
`,cU=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: column;
    gap: ${2*e.sizeUnit}px;
    padding: ${4*e.sizeUnit}px;
    padding-top: 0; /* Works with other changes in PR https://github.com/apache/superset/pull/38646 to reduces space between filter header and 1st filter */
    // 108px padding to make room for buttons with position: absolute
    padding-bottom: ${27*e.sizeUnit}px;
  `}
`,cN=(0,h.createContext)(!1),cH=(0,h.memo)(({actions:e,canEdit:t,dataMaskSelected:r,filtersOpen:n,filterValues:i,chartCustomizationValues:o,height:l,isInitialized:a,offset:s,onSelectionChange:c,onPendingCustomizationDataMaskChange:f,toggleFiltersBar:m,width:v})=>{let S=(0,g.useTheme)(),[w,C]=(0,h.useState)(!1),k=(0,h.useRef)(),$=(0,h.useCallback)(()=>m(!0),[m]),D=(0,h.useMemo)(()=>(0,en.A)(()=>{clearTimeout(k.current),C(!0),k.current=setTimeout(()=>{C(!1)},300)},200),[]);(0,h.useEffect)(()=>(document.onscroll=D,()=>{document.onscroll=null}),[D]);let I=(0,h.useMemo)(()=>({overflow:"auto",height:l,overscrollBehavior:"contain"}),[l]),O=(0,b.d4)(e=>e.dataMask),T=tf(),z=cs({dataMask:O,chartIds:T,chartLayoutItems:n_(),verboseMaps:al()}),Y=1===(0,h.useMemo)(()=>{let e=[];return i.length>0&&e.push("filters"),o.length>0&&e.push("chartCustomization"),z.length>0&&e.push("crossFilters"),e},[i.length,o.length,z.length]).length,F=(0,h.useMemo)(()=>i.length>0||o.length>0?(0,d.Y)(cU,{children:(0,d.Y)(uT,{dataMaskSelected:r,onFilterSelectionChange:c,onPendingCustomizationDataMaskChange:f,chartCustomizationValues:o,hideHeader:Y})}):(0,d.Y)(cj,{children:(0,d.Y)(y.p,{size:"small",title:(0,p.t)("No global filters are currently added"),image:"filter.svg",description:t&&(0,p.t)('Click on "Add or edit filters and controls" option in Settings to create new dashboard filters')})}),[t,r,i.length,c,f,o,Y]);return(0,d.Y)(cN.Provider,{value:w,children:(0,d.FD)(cP,cE({},aa(),{className:u()({open:n}),width:v,children:[(0,d.FD)(cR,cE({},aa("collapsable"),{className:u()({open:!n}),onClick:$,role:"button",tabIndex:0,offset:s,children:[(0,d.Y)(A.F.VerticalAlignTopOutlined,cE({iconSize:"l",css:{transform:"rotate(90deg)",marginBottom:`${3*S.sizeUnit}px`},className:"collapse-icon",iconColor:S.colorPrimary},aa("expand-button"))),(0,d.Y)(A.F.FilterOutlined,cE({},aa("filter-icon"),{iconColor:S.colorTextTertiary,iconSize:"l"}))]})),(0,d.FD)(cM,{className:u()({open:n}),width:v,children:[(0,d.Y)(cl,{toggleFiltersBar:m}),a?(0,d.Y)("div",{css:I,onScroll:D,children:(0,d.FD)(d.FK,{children:[(0,d.Y)(c_,{}),(0,d.Y)(cS,{hideHeader:Y}),F]})}):(0,d.Y)("div",{css:{height:l,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.Y)(x.R,{position:"inline-centered",size:"s",muted:!0})}),e]})]}))})});var cL=((a={}).Right="right",a.Bottom="bottom",a.Left="left",a);function cV(){return(cV=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let cB=g.styled.div`
  position: absolute;
  right: 0;
`,cq=g.styled.h4`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorText};
  overflow-wrap: anywhere;
`,cW=(0,g.styled)(cq)`
  font-weight: ${({theme:e})=>e.fontWeightNormal};
  color: ${({theme:e})=>e.colorText};
  margin: 0;
  ${cd.P};
`,cG=(0,g.styled)(cW)`
  max-width: none;
  margin: ${({theme:e})=>`${2*e.sizeUnit}px 0 ${e.sizeUnit}px`};
`,cK=g.styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,cQ=(0,g.styled)(cK)`
  margin-bottom: unset;
`,cX=(0,g.styled)(cK)`
  width: 100%;
`,cZ=(0,g.styled)(eW.l)`
  /* TODO this is a hack related to having form items inside others which is not */
  /* normal antd-expected usage */
  .ant-form-item .ant-form-item {
    margin-bottom: 0 !important;
  }
`,cJ=(0,g.styled)(cZ)`
  width: 100%;

  .ant-form-item {
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }

  && .ant-form-item-label > label {
    text-transform: none;
    width: 100%;
    padding-right: ${({theme:e})=>11*e.sizeUnit}px;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.sizeUnit}px;
  }
`,c0=(0,g.styled)(cZ)`
  && .ant-form-item-label > label {
    margin-bottom: 0;
    text-transform: none;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.sizeUnit}px;
  }
`,c1=(0,g.styled)(cJ)`
  && .ant-form-item-label {
    line-height: 1;
    & > label {
      padding-right: unset;
    }
  }
`,c4=(0,g.styled)(e5.e)`
  .ant-form-item-label {
    overflow: visible;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }
  }

  .select-container {
    ${({inverseSelection:e})=>e&&`
      width: 140px;
    `}
  }

  .select-bulk-actions {
    ${({inverseSelection:e})=>e&&`
      flex-direction: column;
    `}
  }

  .ant-col {
    min-height: auto;
  }
`,c2=(0,g.styled)(e5.e)`
  && {
    margin-bottom: 0;
    align-items: center;
  }

  && > .ant-row > .ant-form-item-label {
    display: flex;
    align-items: center;
    overflow: visible;
    padding-bottom: 0;
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }

    & > label::after {
      display: none;
    }
  }

  .ant-form-item-control {
    min-width: ${({inverseSelection:e})=>e?252:164}px;
  }

  .select-container {
    ${({inverseSelection:e})=>e&&`
      width: 164px;
    `}
  }

  .select-bulk-actions {
    flex-direction: column;
  }
`,c6=g.styled.div`
  font-size: ${({theme:e})=>e.fontSize}px;
  display: flex;
`,c3=(0,g.styled)(A.F.InfoCircleOutlined)`
  padding-left: ${({theme:e})=>e.sizeUnit}px;
`,c5=()=>(0,d.Y)("span",{css:e=>({color:e.colorError,fontSize:`${e.fontSizeSM}px`,paddingLeft:"1px"}),children:"*"}),c7=({description:e})=>(0,d.Y)(c6,{children:(0,d.Y)(H.m,{title:e,placement:"right",overlayInnerStyle:{display:"-webkit-box",WebkitLineClamp:10,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal"},children:(0,d.Y)(c3,{className:"text-muted",role:"button"})})}),c8=()=>(0,d.Y)(c6,{children:(0,d.Y)(H.m,{title:(0,p.t)("Choose layers to hide from all deck.gl Multiple Layer charts in this dashboard."),placement:"right",children:(0,d.Y)(c3,{className:"text-muted",role:"button","data-test":"deckgl-layer-visibility-tooltip-icon"})})});var c9=r(57885);function ue(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ur=g.styled.div`
  display: flex;
  align-items: center;
  margin: ${({theme:e})=>e.sizeUnit}px 0;
  font-size: ${({theme:e})=>e.fontSizeSM}px;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`,un=g.styled.span`
  color: ${({theme:e})=>e.colorTextSecondary};
  padding-right: ${({theme:e})=>4*e.sizeUnit}px;
  margin-right: auto;
  white-space: nowrap;
`,ui=g.styled.div`
  color: ${({theme:e})=>e.colorText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline;
`,uo=g.styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,ul=(0,g.styled)(e9.o.Text)`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorText};
  font-weight: 600;
  margin-bottom: ${({theme:e})=>e.sizeUnit}px;
  display: flex;
  align-items: center;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ua=(0,g.styled)(e5.e)`
  && {
    margin-bottom: 0;
    align-items: center;
  }

  .ant-form-item-label {
    display: flex;
    align-items: center;
    overflow: visible;
    padding-bottom: 0;
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;

    & > label {
      margin-bottom: 0;
      padding: 0;
      line-height: 1;
      font-size: ${({theme:e})=>e.fontSizeSM}px;
      font-weight: ${({theme:e})=>e.fontWeightNormal};
      color: ${({theme:e})=>e.colorText};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &::after {
        display: none;
      }
    }
  }

  .ant-form-item-control {
    min-width: 164px;
    max-width: none;
  }

  .select-container {
    width: 100%;
  }

  .ant-select-dropdown {
    min-width: 200px !important;
    max-width: 400px !important;
  }
`,us=g.styled.div`
  font-size: ${({theme:e})=>e.fontSize}px;
  display: flex;
  margin-bottom: ${({theme:e})=>e.sizeUnit}px;
`,ud=()=>(0,d.Y)("span",{css:e=>({color:e.colorError,fontSize:`${e.fontSizeSM}px`,paddingLeft:"1px"}),children:"*"}),uc=({description:e})=>(0,d.Y)(us,{children:(0,d.Y)(H.m,{title:e,placement:"right",overlayInnerStyle:{display:"-webkit-box",WebkitLineClamp:10,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal"},children:(0,d.Y)(A.F.InfoCircleOutlined,{className:"text-muted",role:"button",css:e=>({paddingLeft:`${e.sizeUnit}px`})})})}),uu=({customizationItem:e,datasetName:t})=>{var r,n;let{name:i}=e,o=null==(n=e.targets)||null==(r=n[0])?void 0:r.datasetId,[l,,a]=(0,aV.A)(),s=(null==i?void 0:i.trim())||(0,p.t)("Dynamic group by"),c=(0,h.useMemo)(()=>o?t||(0,p.t)("None"):(0,p.t)("Not set"),[o,t]);return(0,d.FD)("div",{children:[(0,d.Y)(ur,{css:e=>(0,v.AH)`
          margin-bottom: ${3*e.sizeUnit}px;
          justify-content: flex-start;
        `,children:(0,d.FD)(uo,{children:[(0,d.Y)(A.F.GroupOutlined,{iconSize:"s",css:e=>(0,v.AH)`
              margin-right: ${e.sizeUnit}px;
            `}),(0,d.Y)(a4,{title:a?s:null,children:(0,d.Y)("div",{ref:l,children:(0,d.Y)(e9.o.Text,{strong:!0,children:s})})})]})}),(0,d.FD)(ur,{children:[(0,d.Y)(un,{children:(0,p.t)("Type")}),(0,d.Y)(ui,{children:(0,p.t)("Dynamic group by")})]}),(0,d.FD)(ur,{children:[(0,d.Y)(un,{children:(0,B.$s)()}),(0,d.Y)(ui,{children:"string"==typeof c?c:(0,p.t)("Dataset")})]})]})},uh=({customizationItem:e,orientation:t="vertical",dataMaskSelected:r,onFilterSelectionChange:n})=>{var i,o,l,a,s,c,u,f,m,y;let S=(0,g.useTheme)(),w=null==(l=e.targets)||null==(o=l[0])?void 0:o.datasetId,[C,,k]=(0,aV.A)(),[$,D]=(0,h.useState)(!1),[I,O]=(0,h.useState)(!1),[z,Y]=(0,h.useState)([]),[F,A]=(0,h.useState)(),_=(0,b.wA)(),E="horizontal"===t,P=(0,h.useCallback)(()=>{O(!1)},[]),M=(0,h.useCallback)(()=>aP(_,e.id),[_,e.id]),R=(0,h.useCallback)(()=>aP(_),[_]),j=(0,h.useMemo)(()=>{var t;return!!(null==(t=e.controlValues)?void 0:t.enableEmptyFilter)},[null==(a=e.controlValues)?void 0:a.enableEmptyFilter]),U=(0,b.d4)(e=>e.dataMask),N=null!=r?r:U,H=null==(u=e.targets)||null==(c=u[0])||null==(s=c.column)?void 0:s.name,L=(0,h.useMemo)(()=>{var t,r;let n=null==(r=N[e.id])||null==(t=r.filterState)?void 0:t.value;return void 0!==n?n:null},[N,e.id]),V=null==(i=null==(f=e.controlValues)?void 0:f.canSelectMultiple)||i,q=null==(m=e.controlValues)?void 0:m.sortAscending,W=(0,h.useMemo)(()=>(e,t)=>{if(void 0===q)return 0;let r=(0,c9.qw)("label");return q?r(e,t):r(t,e)},[q]),G=(0,h.useMemo)(()=>e.name?e.name:H||(0,p.t)("Group By"),[e.name,H]),K=(0,h.useCallback)(t=>{let r=V?Array.isArray(t)?t.length>0?t:null:t||null:"string"==typeof t?t:null,i=r?[{datasetId:w,column:{name:r}}]:[{}];_((0,l5.H8)(ut({},e,{targets:i})));let o=r?Array.isArray(r)?r:[r]:[],l={extraFormData:{custom_form_data:{groupby:o}},filterState:{label:o.join(", "),value:r},ownState:{column:r}};null==n||n(e,l)},[V,w,_,e,n]),Q=(0,b.d4)(e=>e.nativeFilters.filters),X=(0,h.useMemo)(()=>{let e={};return Object.entries(Q).forEach(([t,r])=>{var n,i;if(r.type===iF.EH.Divider||!(null==(i=N[t])||null==(n=i.filterState)?void 0:n.value))return;let o=N[t];e=(0,iI.pY)(e,null==o?void 0:o.extraFormData)}),e},[N,Q]);(0,h.useEffect)(()=>{var e;(e=function*(){if(!w)return;let e="number"==typeof w||"string"==typeof w?w:"object"==typeof w&&null!==w&&"value"in w?w.value:null;if(e){D(!0);try{let t=`/api/v1/dataset/${e}`,{json:r}=yield(0,sa.wW)({endpoint:t});if((null==r?void 0:r.result)&&(r.result.table_name&&A(r.result.table_name),r.result.columns)){let e=r.result.columns.filter(e=>!1!==e.filterable).map(e=>({label:e.verbose_name||e.column_name||e.name||"",value:e.column_name||e.name||""}));Y(e)}}catch{Y([]),_((0,td.iB)((0,p.t)("Failed to load columns for %s %s",(0,B.CI)(),e)))}finally{D(!1)}}},function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function l(e){ue(o,n,i,l,a,"next",e)}function a(e){ue(o,n,i,l,a,"throw",e)}l(void 0)})})()},[w,X,_]);let Z=null==(y=e.description)?void 0:y.trim();return(0,d.FD)("div",{children:[!E&&(0,d.Y)(nr.A,{placement:"right",overlayStyle:{width:"280px"},content:(0,d.Y)(uu,{customizationItem:e,hidePopover:P,datasetName:F}),mouseEnterDelay:.2,mouseLeaveDelay:.2,onOpenChange:e=>{O(e)},open:I,arrow:!1,children:(0,d.FD)("div",{css:(0,v.AH)`
              display: flex;
              align-items: center;
              margin-bottom: ${S.sizeUnit}px;
            `,children:[(0,d.Y)(a4,{title:k?G:null,children:(0,d.Y)("div",{ref:C,children:(0,d.FD)(ul,{children:[G,j&&(0,d.Y)(ud,{})]})})}),Z&&(0,d.Y)(uc,{description:Z})]})}),E?(0,d.Y)(ua,{label:(0,d.Y)(nr.A,{placement:"bottom",overlayStyle:{width:"240px"},content:(0,d.Y)(uu,{customizationItem:e,hidePopover:P,datasetName:F}),mouseEnterDelay:.2,mouseLeaveDelay:.2,onOpenChange:e=>{O(e)},open:I,arrow:!1,children:(0,d.FD)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[G,j&&(0,d.Y)(ud,{})]})}),children:(0,d.Y)("div",{onMouseEnter:M,onMouseLeave:R,children:(0,d.Y)(T.A,{allowClear:!0,autoClearSearchValue:!0,placeholder:(0,p.t)("Search columns..."),value:L,onChange:K,options:z,showSearch:!0,mode:V?"multiple":void 0,filterOption:(e,t)=>{var r;return(null!=(r=null==t?void 0:t.label)?r:"").toLowerCase().includes(e.toLowerCase())},sortComparator:W,getPopupContainer:e=>e.parentNode,oneLine:E,className:"select-container",loading:$})})}):(0,d.Y)("div",{css:(0,v.AH)`
            margin-bottom: ${S.sizeUnit}px;
          `,onMouseEnter:M,onMouseLeave:R,children:(0,d.Y)(T.A,{allowClear:!0,autoClearSearchValue:!0,placeholder:(0,p.t)("Search columns..."),value:L,onChange:K,options:z,showSearch:!0,mode:V?"multiple":void 0,filterOption:(e,t)=>{var r;return(null!=(r=null==t?void 0:t.label)?r:"").toLowerCase().includes(e.toLowerCase())},sortComparator:W,loading:$})}),$&&(0,d.Y)("div",{style:{textAlign:"center",marginTop:8},children:(0,d.Y)(x.R,{position:"inline"})})]})},up=(0,h.memo)(({dataMaskSelected:e,filter:t,icon:r,onFilterSelectionChange:n,inView:i,showOverflow:o,parentRef:l,orientation:a=tI.QI.Vertical,overflow:s=!1,clearAllTrigger:c,onClearAllComplete:u})=>{var p,f,m,g;let v=(0,h.useMemo)(()=>aw(),[]),[b,y]=(0,h.useState)(!1),{name:x="<undefined>"}=t,S=oi()(t)&&ai(t,null==(p=t.dataMask)?void 0:p.filterState)?"error":void 0,w=!!(null==(f=t.controlValues)?void 0:f.enableEmptyFilter),C=!!(null==(m=t.controlValues)?void 0:m.inverseSelection),{FilterControlContainer:k,FormItem:$,FilterControlTitleBox:D,FilterControlTitle:I}=(0,h.useMemo)(()=>a===tI.QI.Horizontal?s?{FilterControlContainer:c1,FormItem:e=>(0,d.Y)(c4,cV({},e,{inverseSelection:C})),FilterControlTitleBox:cX,FilterControlTitle:cG}:{FilterControlContainer:c0,FormItem:e=>(0,d.Y)(c2,cV({},e,{inverseSelection:C})),FilterControlTitleBox:cQ,FilterControlTitle:cW}:{FilterControlContainer:cJ,FormItem:e=>(0,d.Y)(c4,cV({},e,{inverseSelection:C})),FilterControlTitleBox:cK,FilterControlTitle:cq},[a,s,C]),O=(0,h.useMemo)(()=>{var e;return(0,d.FD)(D,{children:[(0,d.Y)(I,{id:`filter-name-${t.id}`,"data-test":"filter-control-name",children:x}),w&&(0,d.Y)(c5,{}),(null==(e=t.description)?void 0:e.trim())&&(0,d.Y)(c7,{description:t.description}),t.filterType===tS.iK.DeckglLayerVisibility&&(0,d.Y)(c8,{}),(0,d.Y)(cB,{"data-test":"filter-icon",children:r})]})},[D,I,x,w,t.description,t.filterType,r]),T=(0,h.useContext)(cN),z=(0,h.useMemo)(()=>a===tI.QI.Horizontal?s?cL.Left:cL.Bottom:cL.Right,[a,s]);return(0,iF.Qj)(t)&&"chart_customization_dynamic_groupby"===t.filterType?(0,d.Y)(uh,{customizationItem:t,orientation:a===tI.QI.Horizontal?"horizontal":"vertical",dataMaskSelected:e,onFilterSelectionChange:n}):(0,d.FD)(d.FK,{children:[(0,d.Y)(ax,{node:v,children:(0,d.Y)(aL,{dataMaskSelected:e,filter:t,showOverflow:o,onFilterSelectionChange:n,inView:i,parentRef:l,setFilterActive:y,orientation:a,overflow:s,validateStatus:S,clearAllTrigger:c,onClearAllComplete:u})}),(0,d.Y)(k,{layout:a!==tI.QI.Horizontal||s?"vertical":"horizontal",children:(0,d.Y)(d6,{filter:t,isVisible:!b&&!T,placement:z,children:(0,d.Y)("div",{children:(0,d.Y)($,{label:O,htmlFor:t.id,required:null==t||null==(g=t.controlValues)?void 0:g.enableEmptyFilter,validateStatus:S,children:(0,d.Y)(aS,{node:v})})})})})]})}),uf=({title:e,description:t})=>(0,d.FD)("div",{children:[(0,d.Y)("h3",{children:e}),t?(0,d.Y)("p",{"data-test":"divider-description",children:t}):null]}),um=({title:e,description:t})=>{let r=(0,g.useTheme)(),[n,i]=(0,cd.A)();return(0,d.FD)("div",{css:(0,v.AH)`
        display: flex;
        align-items: center;
        height: ${6*r.sizeUnit}px;
        border-left: 1px solid ${r.colorSplit};
        padding-left: ${4*r.sizeUnit}px;

        .filter-item-wrapper:first-of-type & {
          border-left: none;
          padding-left: 0;
        }
      `,children:[(0,d.Y)(H.m,{overlay:i?e:null,children:(0,d.Y)("h3",{ref:n,css:(0,v.AH)`
            ${cd.P};
            max-width: ${32.5*r.sizeUnit}px;
            font-size: ${r.fontSize}px;
            font-weight: ${r.fontWeightNormal};
            margin: 0;
            color: ${r.colorText};
          `,children:e})}),t?(0,d.Y)(H.m,{overlay:t,children:(0,d.Y)(A.F.BookOutlined,{"data-test":"divider-description-icon",iconSize:"l",css:(0,v.AH)`
              margin: 0 ${1.5*r.sizeUnit}px;
              vertical-align: unset;
              line-height: unset;
            `})}):null]})},ug=({title:e,description:t})=>{let r=(0,g.useTheme)(),[n,i]=(0,cd.A)(),[o,l]=(0,cd.A)();return(0,d.FD)("div",{css:(0,v.AH)`
        border-top: 1px solid ${r.colorSplit};
        padding-top: ${4*r.sizeUnit}px;
        margin-bottom: ${4*r.sizeUnit}px;
      `,children:[(0,d.Y)(H.m,{overlay:i?(0,d.Y)("strong",{children:e}):null,children:(0,d.Y)("h3",{ref:n,css:(0,v.AH)`
            ${cd.P};
            display: block;
            color: ${r.colorText};
            font-weight: ${r.fontWeightNormal};
            font-size: ${r.fontSize}px;
            margin: 0 0 ${r.sizeUnit}px 0;
          `,children:e})}),t?(0,d.Y)(H.m,{overlay:l?t:null,children:(0,d.Y)("p",{ref:o,"data-test":"divider-description",css:(0,v.AH)`
              ${cd.P};
              display: block;
              font-size: ${r.fontSizeSM}px;
              color: ${r.colorTextDescription};
              margin: ${r.sizeUnit}px 0 0 0;
            `,children:t})}):null]})},uv=({title:e,description:t,orientation:r=tI.QI.Vertical,overflow:n=!1})=>r===tI.QI.Horizontal?n?(0,d.Y)(ug,{title:e,description:t}):(0,d.Y)(um,{title:e,description:t}):(0,d.Y)(uf,{title:e,description:t});function ub(){return(ub=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let uy=({overflowedCrossFilters:e,filtersInScope:t,filtersOutOfScope:r,renderer:n,rendererCrossFilter:i,showCollapsePanel:o,forceRenderOutOfScope:l})=>(0,d.FD)("div",{css:e=>(0,v.AH)`
      width: ${56*e.sizeUnit}px;
      padding: ${e.sizeUnit}px 0;
    `,children:[e.map(t=>i(t,tI.QI.Vertical,e.at(-1))),t.map(n),o&&r.length>0&&(0,d.Y)(aI,{filtersOutOfScope:r,renderer:n,forceRender:l})]});function ux(){return(ux=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function uS(e,t){var r;let n=null!=(r=t[e.id])?r:(0,l9.Z)(e.id);return ux({},e,{dataMask:n})}let uw=g.styled.div`
  margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
`,uC=g.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>2*e.sizeUnit}px 0;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${({theme:e})=>e.colorBgTextHover};
    margin: 0 -${({theme:e})=>2*e.sizeUnit}px;
    padding: ${({theme:e})=>2*e.sizeUnit}px;
    border-radius: ${({theme:e})=>e.borderRadius}px;
  }
`,{Title:uk}=e9.o,u$=g.styled.div`
  padding: ${({theme:e})=>2*e.sizeUnit}px 0;
`,uD=g.styled.div`
  height: 1px;
  background: ${({theme:e})=>e.colorSplit};
  margin: ${({theme:e})=>2*e.sizeUnit}px 0;
`,uI=(0,g.styled)(A.F.UpOutlined)`
  transform: ${({isOpen:e})=>e?"rotate(0deg)":"rotate(180deg)"};
  transition: transform 0.2s ease;
  color: ${({theme:e})=>e.colorTextSecondary};
`,uO=g.styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>2*e.sizeUnit}px;
`,uT=(0,h.memo)(({dataMaskSelected:e,onFilterSelectionChange:t,onPendingCustomizationDataMaskChange:r,chartCustomizationValues:n,clearAllTriggers:i,onClearAllComplete:o,hideHeader:l=!1})=>{let a,s,c,u,f,m,y,x=(0,g.useTheme)(),S=(0,b.wA)(),w=(0,b.d4)(({dashboardInfo:e})=>e.filterBarOrientation),{outlinedFilterId:C,lastUpdated:k}=aj(),[$,D]=(0,h.useState)([]),I=(0,h.useRef)(null),O=(0,b.d4)(e=>e.dataMask),T=tf(),z=n_(),Y=al(),F=(0,h.useMemo)(()=>cs({dataMask:O,chartIds:T,chartLayoutItems:z,verboseMaps:Y}),[T,z,O,Y]),{filterControlFactory:_,filtersWithValues:E}=(a=ad(),s=(0,h.useMemo)(()=>Object.values(a),[a]),c=(0,h.useMemo)(()=>s.map(t=>ub({},t,{dataMask:e[t.id]})),[s,e]),{filterControlFactory:(0,h.useCallback)((r,n,l)=>{let a=c[r];return(0,iF.O2)(a)?(0,d.Y)(uv,{title:a.title,description:a.description,orientation:n,overflow:l}):(0,d.Y)(up,{dataMaskSelected:e,filter:a,onFilterSelectionChange:t,inView:!1,orientation:n,overflow:l,clearAllTrigger:null==i?void 0:i[a.id],onClearAllComplete:()=>null==o?void 0:o(a.id)})},[c,e,t,i,o]),filtersWithValues:c}),P=(0,h.useMemo)(()=>Array.from({length:E.length},()=>aw()),[E.length]),M=new Set(E.map(e=>e.id)),[R,j]=oo(E),U=(0,h.useMemo)(()=>n.filter(e=>!e.removed),[n]),[N,H]=(u=ot(),f=or(),m=on(),y=(0,h.useCallback)(e=>{if("title"in e)return!0;let t=Array.isArray(e.chartsInScope)&&e.chartsInScope.length>0,r=Array.isArray(e.tabsInScope)&&e.tabsInScope.length>0;if(!t&&!r)return!0;let n=t&&e.chartsInScope.some(e=>{let t=m(e);return!t||t.every(e=>f.includes(e))}),i=r&&e.tabsInScope.some(e=>f.includes(e));return n||i},[m,f]),(0,h.useMemo)(()=>{let e=[],t=[];return u?U.forEach(r=>{y(r)?e.push(r):t.push(r)}):e=U,[e,t]},[U,u,y])),L=(0,h.useMemo)(()=>E.some(e=>e.requiredFirst),[E]),V=ot(),B=V&&E.length>0,q=V&&U.length>0,[W,G]=(0,h.useState)({filters:!0,chartCustomization:!0}),K=B&&(l||W.filters)&&j.length>0,Q=(0,h.useCallback)(e=>{G(t=>ux({},t,{[e]:!t[e]}))},[]),X=(0,h.useCallback)((e,t)=>{var n,i;let o=null==(n=t.ownState)?void 0:n.column,l=(null==(i=e.targets)?void 0:i[0])||{};S((0,l5.H8)(ux({},e,{targets:[ux({},l,o&&{column:ux({},l.column,{name:o})})]}))),r(e.id,t)},[S,r]),Z=(0,h.useCallback)(({id:e},t)=>{let r=E.findIndex(t=>t.id===e);return(0,d.FD)(h.Fragment,{children:["",(0,d.Y)(aS,{node:P[r],inView:!0})]},null!=t?t:e)},[E,P]),J=(0,h.useCallback)((t,r)=>{if((0,iF.bB)(t))return(0,d.Y)(uv,{title:t.title,description:t.description,orientation:tI.QI.Vertical},t.id);let n=uS(t,e);return(0,d.Y)(up,{filter:n,dataMaskSelected:e,onFilterSelectionChange:(e,r)=>X(t,r),orientation:tI.QI.Vertical,overflow:!1},t.id)},[e,X]),ee=(0,h.useCallback)(()=>(0,d.FD)(d.FK,{children:[R.length>0&&(0,d.FD)(uw,{children:[!l&&(0,d.FD)(uC,{onClick:()=>Q("filters"),onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),Q("filters"))},role:"button",tabIndex:0,children:[(0,d.Y)(uk,{level:5,style:{margin:0,fontSize:x.fontSize,fontWeight:x.fontWeightNormal,color:x.colorText,lineHeight:1.3},children:(0,p.t)("Filters")}),(0,d.Y)(uI,{iconSize:"m",isOpen:W.filters})]}),(l||W.filters)&&(0,d.Y)(u$,{children:R.map(Z)}),(l||W.filters)&&(0,d.Y)(uD,{})]}),K&&(0,d.Y)(aI,{filtersOutOfScope:j,renderer:Z,forceRender:L}),N.length>0&&(0,d.FD)(uw,{children:[!l&&(0,d.FD)(uC,{onClick:()=>Q("chartCustomization"),onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),Q("chartCustomization"))},role:"button",tabIndex:0,children:[(0,d.Y)(uk,{level:5,style:{margin:0,fontSize:x.fontSize,fontWeight:x.fontWeightNormal,color:x.colorText,lineHeight:1.3},children:(0,p.t)("Display controls")}),(0,d.Y)(uI,{iconSize:"m",isOpen:W.chartCustomization})]}),(l||W.chartCustomization)&&(0,d.Y)(u$,{children:(0,d.Y)(uO,{children:N.map((e,t)=>J(e,t))})}),(l||W.chartCustomization)&&(0,d.Y)(uD,{})]}),q&&(l||W.chartCustomization)&&(0,d.Y)(aO,{customizationsOutOfScope:H,renderer:J,forceRender:!1})]}),[R,Z,B,j,L,N,H,q,J,W,Q,x,l,X,e]),et=(0,h.useMemo)(()=>R.filter(({id:e})=>null==$?void 0:$.includes(e)),[R,$]),er=(0,h.useMemo)(()=>F.filter(({emitterId:e,name:t})=>null==$?void 0:$.includes(`${t}${e}`)),[$,F]),en=(0,h.useMemo)(()=>[...et.filter(e=>(0,iF.ee)(e)),...er],[er,et]),ei=(0,h.useCallback)((e,t,r)=>(0,d.Y)(cy,{filter:e,orientation:t,last:R.length>0&&!!r&&`${r.name}${r.emitterId}`==`${e.name}${e.emitterId}`}),[R.length]),eo=(0,h.useMemo)(()=>{let t=F.map(e=>({id:`${e.name}${e.emitterId}`,element:ei(e,tI.QI.Horizontal,F.at(-1))})),r=R.map((e,t)=>({id:e.id,element:(0,d.Y)("div",{className:"filter-item-wrapper",css:(0,v.AH)`
            flex-shrink: 0;
          `,children:Z(e,t)})})),i=[];return(t.length>0||r.length>0)&&n.length>0&&i.push({id:"chart-customization-divider",element:(0,d.Y)("div",{css:(0,v.AH)`
              width: 1px;
              height: 22px;
              background: ${x.colorBorder};
              margin-left: ${4*x.sizeUnit}px;
              margin-right: ${x.sizeUnit}px;
              flex-shrink: 0;
            `})}),[...N.map(t=>(0,iF.bB)(t)?{id:`chart-customization-${t.id}`,element:(0,d.Y)("div",{className:"chart-customization-item-wrapper",css:(0,v.AH)`
                flex-shrink: 0;
              `,children:(0,d.Y)(uv,{title:t.title,description:t.description,orientation:tI.QI.Horizontal})})}:{id:`chart-customization-${t.id}`,element:(0,d.Y)("div",{className:"chart-customization-item-wrapper",css:(0,v.AH)`
              flex-shrink: 0;
            `,children:(0,d.Y)(up,{filter:uS(t,e),dataMaskSelected:e,onFilterSelectionChange:(e,r)=>X(t,r),orientation:tI.QI.Horizontal,overflow:!1})})}),...i,...t,...r]},[R,Z,ei,F,N,x,X,e,n.length]),el=(0,h.useCallback)(()=>(0,d.Y)("div",{css:e=>(0,v.AH)`
          padding: 0 ${4*e.sizeUnit}px;
          min-width: 0;
          flex: 1;
        `,children:(0,d.Y)(a$,{items:eo,dropdownTriggerIcon:(0,d.Y)(A.F.FilterOutlined,{css:(0,v.AH)`
                && {
                  margin-right: -4px;
                  display: flex;
                }
              `}),dropdownTriggerText:(0,p.t)("More filters"),dropdownTriggerCount:en.length,dropdownTriggerTooltip:0===en.length?(0,p.t)("No applied filters"):(0,p.t)("Applied filters: %s",en.map(e=>e.name).join(", ")),dropdownContent:et.length||er.length||j.length&&B||H.length&&q?()=>(0,d.FD)(d.FK,{children:[(0,d.Y)(uy,{overflowedCrossFilters:er,filtersInScope:et,filtersOutOfScope:j,renderer:Z,rendererCrossFilter:ei,showCollapsePanel:B,forceRenderOutOfScope:L}),q&&(0,d.Y)(aO,{customizationsOutOfScope:H,renderer:J,forceRender:!1})]}):void 0,forceRender:L,ref:I,onOverflowingStateChange:({overflowed:e})=>{(e.length!==$.length||$.reduce((t,r,n)=>t||r!==e[n],!1))&&D(e)}})}),[eo,en,et,er,j,B,H,q,J,Z,ei,L,$]),ea=(0,h.useMemo)(()=>{let e=new Set(j.map(({id:e})=>e)),t=new Set(et.map(({id:e})=>e));return E.map(r=>e.has(r.id)?w===tI.QI.Horizontal:t.has(r.id))},[j,E,et,w]);return(0,h.useEffect)(()=>{if(C&&$.includes(C)){var e;null==I||null==(e=I.current)||e.open()}},[C,k,I,$]),(0,d.FD)(d.FK,{children:[P.filter((e,t)=>M.has(E[t].id)).map((e,t)=>(0,d.Y)(ax,{node:e,children:_(t,w,ea[t])},E[t].id)),w===tI.QI.Vertical&&ee(),w===tI.QI.Horizontal&&el()]})});function uz(){return(uz=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let uY=g.styled.div`
  ${({theme:e})=>`
    padding: ${3*e.sizeUnit}px ${2*e.sizeUnit}px ${3*e.sizeUnit}px ${4*e.sizeUnit}px;
    background: ${e.colorBgBase};
    box-shadow: inset 0px -2px 2px -1px ${e.colorSplit};
  `}
`,uF=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    .loading {
      margin: ${2*e.sizeUnit}px auto ${2*e.sizeUnit}px;
      padding: 0;
    }
  `}
`,uA=g.styled.div`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
    color: ${e.colorText};
    font-size: ${e.fontSizeSM}px;
    padding-left: ${2*e.sizeUnit}px;
  `}
`,u_=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${2*e.sizeUnit}px;
    padding: 0 ${2*e.sizeUnit}px;
    margin-right: ${2*e.sizeUnit}px;
    border-right: 1px solid ${e.colorBorder};
  `}
`,uE=g.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${e.sizeUnit}px;
    font-weight: ${e.fontWeightStrong};
    font-size: ${e.fontSizeSM}px;
  `}
`,uP=(0,h.memo)(({actions:e,dataMaskSelected:t,filterValues:r,chartCustomizationValues:n,isInitialized:i,onSelectionChange:o,onPendingCustomizationDataMaskChange:l,clearAllTriggers:a,onClearAllComplete:s})=>{let c=(0,b.d4)(e=>e.dataMask),u=(0,b.wA)(),f=(0,tb.W6)(),m=(0,tb.zy)(),g=tf(),v=n_(),y=al(),S=(0,h.useMemo)(()=>cs({dataMask:c,chartIds:g,chartLayoutItems:v,verboseMaps:y}),[g,v,c,y]),[w,C]=(0,h.useState)(()=>cC());(0,h.useEffect)(()=>{C(cC())},[m.search]);let k=(0,h.useCallback)(e=>{let t=(0,am.vP)();if(!t)return;let r=cw(e.filter),n=(0,am.c4)(t).filter(e=>cw(e)!==r);if((0,am.ZO)(n,f),C(e=>e.filter(e=>cw(e.filter)!==r)),0===n.length)u((0,l3.Xl)(am.j$));else{let e=(0,am.rH)(n);u((0,l3.Mv)(am.j$,{extraFormData:{filters:e}}))}},[u,f]),$=(0,h.useMemo)(()=>0===w.length?null:(0,d.FD)(u_,{children:[(0,d.FD)(uE,{children:[(0,d.Y)(A.F.LinkOutlined,{iconSize:"s"}),(0,p.t)("URL Filters")]}),w.map(e=>(0,d.Y)(cI,{filter:e,orientation:tI.QI.Horizontal,onRemove:k},cw(e.filter)))]}),[w,k]),D=r.length>0||S.length>0||w.length>0||n.length>0;return(0,d.Y)(uY,uz({},aa(),{children:(0,d.Y)(uF,{children:i?(0,d.FD)(d.FK,{children:[(0,d.Y)(ct,{}),!D&&(0,d.Y)(uA,{"data-test":"horizontal-filterbar-empty",children:(0,p.t)("No filters are currently added to this dashboard.")}),D&&(0,d.FD)(d.FK,{children:[$,(0,d.Y)(uT,{dataMaskSelected:t,onFilterSelectionChange:o,onPendingCustomizationDataMaskChange:l,chartCustomizationValues:n,clearAllTriggers:a,onClearAllComplete:s})]}),e]}):(0,d.Y)(x.R,{position:"inline-centered",size:"s",muted:!0})})}))});function uM(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,i)}function uR(){return(uR=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let uj=g.styled.div`
  display: none;
`,uU=[tS.vX.nativeFilters.name,tS.vX.permalinkKey.name],uN={},uH=(0,M.A)((e,t,r,n,i)=>{var o;return(o=function*(){let o,{location:l}=e,{search:a}=l,s=new URLSearchParams(a),d=new URLSearchParams,c=a.match(/[?&]f=([^&]*)/),u=c?c[1]:null;s.forEach((e,t)=>{uU.includes(t)||"f"===t||d.append(t,e)});let h=(0,tk.P3)(tS.vX.nativeFiltersKey),p=JSON.stringify(n);if((o=r&&h&&(yield(0,au.l6)(t,p,h,i))?h:yield(0,au.Au)(t,p,i))&&d.set(tS.vX.nativeFiltersKey.name,o),window.location.pathname.startsWith(`${(0,U.N8)()}/dashboard`)){let t=(0,U.N8)(),r=window.location.pathname;"/"!==t&&r.startsWith(t)&&(r=r.substring(t.length));let n=d.toString();if(u){let e=n?"&":"";n=`${n}${e}f=${u}`}e.replace({pathname:r,search:n})}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=o.apply(e,t);function l(e){uM(i,r,n,l,a,"next",e)}function a(e){uM(i,r,n,l,a,"throw",e)}l(void 0)})})()},l6.Y.SLOW_DEBOUNCE),uL=(0,h.memo)(({orientation:e=tI.QI.Vertical,verticalConfig:t,hidden:r=!1})=>{let n,i,o,l=(0,tb.W6)(),a=(n=(0,b.d4)(e=>e.dataMask),(0,h.useMemo)(()=>Object.values(n).filter(e=>{let t=String(e.id);return t.startsWith(nX._L)||t.startsWith(nX._3)||t.startsWith(nX.Sw)}).reduce((e,t)=>as({},e,{[t.id]:t}),{}),[n])),[s,c]=(0,l7.e)(a),[u,p]=(0,h.useState)(uN),f=i9(),m=(0,b.wA)(),[g,v]=(0,h.useState)(0),y=(0,ae.w)(),x=ad(),S=(0,iv.Z)(x),w=(0,h.useMemo)(()=>Object.values(x),[x]),C=(0,h.useMemo)(()=>w.filter(iF.qQ),[w]),k=(0,b.d4)(({dashboardInfo:e})=>null==e?void 0:e.id),$=(0,iv.Z)(k),D=(0,b.d4)(({dashboardInfo:e})=>e.dash_edit_perm),I=(0,b.d4)(e=>e.user),[O]=oo(C),T=(0,h.useMemo)(()=>new Set(O.map(e=>e.id)),[O]),z=(0,h.useMemo)(()=>C.some(e=>{var t;return!T.has(e.id)&&!!(null==(t=e.controlValues)?void 0:t.enableEmptyFilter)}),[C,T]),[Y,F]=(0,h.useState)({}),[A,_]=(0,h.useState)(new Set),[E,P]=(0,h.useState)(!1);(0,h.useRef)(s).current=s;let M=(0,h.useCallback)((e,t)=>{c(r=>{var n,i,o,l,s,d;let c=a[e.id],u=!A.has(e.id),h=(null==c||null==(n=c.filterState)?void 0:n.value)!==void 0&&(null==(i=t.filterState)?void 0:i.value)!==void 0&&(0,l8.A)(c.filterState.value,t.filterState.value)&&(!(null==c?void 0:c.extraFormData)||0===Object.keys(c.extraFormData||{}).length)&&t.extraFormData&&Object.keys(t.extraFormData).length>0;if((null==(o=t.filterState)?void 0:o.value)!==void 0&&(u&&e.requiredFirst||h)){let{filterState:r}=t,n=function(e,t){if(null==e)return{};var r,n,i={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)!(t.indexOf(r=o[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(t,["filterState"]),i=r?uR({},n,{filterState:uR({},r,{validateStatus:void 0})}):t;m((0,l3.Mv)(e.id,i))}(null==(l=t.filterState)?void 0:l.value)!==void 0&&t.extraFormData&&Object.keys(t.extraFormData).length>0&&!A.has(e.id)&&_(t=>new Set(t).add(e.id));let p=uR({},(0,l9.Z)(e.id),t),f=!!(null==(s=e.controlValues)?void 0:s.enableEmptyFilter),g=null==(d=p.filterState)?void 0:d.value,v=null==g||Array.isArray(g)&&0===g.length||"string"==typeof g&&""===g.trim();r[e.id]=uR({},p,{filterState:uR({},p.filterState,{validateStatus:f&&v?"error":void 0})})})},[m,c,A,_,a]);(0,h.useEffect)(()=>{if(S&&k===$){let e={};Object.values(x).forEach(t=>{let r=null==S?void 0:S[t.id];if(!r)return;let n=t.filterType,i=t.targets,o=t.defaultDataMask,l=null==r?void 0:r.filterType,a=null==r?void 0:r.targets,s=null==r?void 0:r.defaultDataMask,d=!(0,l8.A)(i,a),c=!(0,l8.A)(o,s);(n!==l||d||c)&&(e[t.id]=(0,l9.Z)(t.id))}),(0,tx.A)(e)||c(t=>uR({},t,e))}},[k,x,$,c]);let R=JSON.stringify(a),j=(0,h.useRef)(a);(0,h.useEffect)(()=>{if(k!==$)c(()=>a);else{let e=j.current;c(t=>{let r=!1,n=uR({},t);return Object.entries(a).forEach(([i,o])=>{let l=e[i],a=!(0,l8.A)(o,l),s=!t[i];(a||s)&&(n[i]=o,r=!0)}),Object.keys(n).forEach(e=>{(0,nX.Qj)(e)||e in a||(delete n[e],r=!0)}),r?n:t})}j.current=a},[a,c,k,$]),(0,h.useEffect)(()=>{(null==I?void 0:I.userId)&&uH(l,k,g,a,y)},[k,R,l,g,y]);let U=(0,b.d4)(e=>e.dashboardInfo.pendingChartCustomizations),N=(0,h.useCallback)((e,t)=>{p(r=>uR({},r,{[e]:t}))},[]),H=(0,h.useCallback)(()=>{if(m((0,th.$)(eE.c1,{})),v(1),Object.entries(s).filter(([e,t])=>{var r,n;if(!t)return!1;let i=T.has(e),o=(null==(r=t.filterState)?void 0:r.value)!==void 0&&(null==(n=t.filterState)?void 0:n.value)!==null;return i||o}).map(([e])=>e).forEach(e=>{let t=s[e];t&&m((0,l3.Mv)(e,t))}),u&&Object.keys(u).length>0&&Object.entries(u).forEach(([e,t])=>{t&&m((0,l3.Mv)(e,t))}),U&&Object.keys(U).length>0){let e=new Set(f.map(e=>e.id)),t=Object.values(U).filter(Boolean).filter(t=>e.has(t.id));t.length>0&&m((0,l5.vn)(t,[])),m((0,l5.M2)()),p({})}else if(E){let e=f.map(e=>{var t,r;return uR({},e,{targets:[{datasetId:null==(r=e.targets)||null==(t=r[0])?void 0:t.datasetId}]})});f.forEach(e=>{m((0,l3.Xl)(e.id))}),m((0,l5.Cw)()),m((0,l5.vn)(e,[]))}P(!1)},[s,m,T,U,u,E,f]),L=(0,h.useCallback)(()=>{let e=uR({},Y);C.forEach(t=>{var r;let{id:n,filterType:i}=t;if(!T.has(n))return;let o="filter_range"===i?[null,null]:void 0,l=!!(null==(r=t.controlValues)?void 0:r.enableEmptyFilter);s[n]&&(c(e=>{var t;(null==(t=e[n].filterState)?void 0:t.value)!==void 0&&(e[n].filterState.value=o),e[n].extraFormData={},e[n].filterState&&(e[n].filterState.validateStatus=l?"error":void 0)}),e[n]=!0)});let t=Object.keys(uR({},s,a)).some(e=>(0,nX.Qj)(e)),r=f.some(e=>{if(e.removed)return!1;let t=a[e.id]||s[e.id];return null!==ij(null==t?void 0:t.filterState)});(t||r)&&(f.forEach(e=>{c(t=>{t[e.id]={id:e.id,filterState:{value:null},ownState:{column:null},extraFormData:{}}})}),m((0,l5.M2)()),p({}),P(!0)),F(e)},[s,a,C,T,c,f,Y,m]),V=(0,h.useCallback)(e=>{F(t=>{let r=uR({},t);return delete r[e],r})},[]);i=ad(),o=ac(),(0,h.useEffect)(()=>{Object.keys(s).forEach(e=>{String(e).startsWith(nX._3)||String(e).startsWith(nX.Sw)||i[e]||c(t=>{delete t[e]})})},[o,s,i,c]);let B=U&&Object.keys(U).length>0,q=(null==f?void 0:f.some(e=>{var t;if(e.removed||!(null==(t=e.controlValues)?void 0:t.enableEmptyFilter))return!1;let r=(null==u?void 0:u[e.id])||s[e.id];return null===ij(null==r?void 0:r.filterState)}))||!1,W=((e,t,r,n)=>{if(!Object.values(e).every(e=>{var t;return(null==(t=e.filterState)?void 0:t.validateStatus)!=="error"}))return!0;let i=an(e),o=an(t);if((0,iE.r$)(i,o,{ignoreUndefined:!0}))return!0;let l=new Set(r.map(e=>e.id));return(!r.some(e=>{let t=i[e.id],r=o[e.id];return!(0,l8.A)(t,r)})&&(null==n?void 0:n.some(e=>{if(l.has(e.id))return!1;let t=i[e.id],r=o[e.id];return!(0,l8.A)(t,r)}))&&n&&n.length>0?n:r).some(r=>{var n;let i=null==e?void 0:e[null==r?void 0:r.id],o=null==i?void 0:i.filterState,l=null==t||null==(n=t[null==r?void 0:r.id])?void 0:n.filterState;return((null==o?void 0:o.value)===null||(null==o?void 0:o.value)===void 0)&&(!!i||(null==l?void 0:l.value)===null||(null==l?void 0:l.value)===void 0)&&ai(r,o)})})(s,a,O.filter(iF.qQ),C)&&!B&&!E||q,G=(()=>{let[e,t]=(0,h.useState)(!1),r=ad(),n=(0,b.d4)(e=>e.charts),i=0;return e||(i=document.querySelectorAll('[data-ui-anchor="chart"]').length),(0,h.useEffect)(()=>{let o;if(e)return;if(Object.values(r).some(e=>"requiredFirst"in e&&e.requiredFirst))return void t(!0);0===i&&(o=setTimeout(()=>{t(!0)},1e3)),i>0&&void 0!==o&&clearTimeout(o);let l=Object.values(n).filter(({chartStatus:e})=>"loading"!==e).length;i>0&&l>=i&&t(!0)},[n,e,i]),e})(),K=(0,h.useMemo)(()=>(0,d.Y)(af,{filterBarOrientation:e,onApply:H,onClearAll:L,dataMaskSelected:s,dataMaskApplied:a,isApplyDisabled:W,chartCustomizationItems:f,hasOutOfScopeRequiredFilters:z}),[e,H,L,s,a,W,f,z]),Q=e===tI.QI.Horizontal?(0,d.Y)(uP,{actions:K,canEdit:D,dashboardId:k,dataMaskSelected:s,filterValues:w,chartCustomizationValues:f,isInitialized:G,onSelectionChange:M,onPendingCustomizationDataMaskChange:N,clearAllTriggers:Y,onClearAllComplete:V}):t?(0,d.Y)(cH,{actions:K,canEdit:D,dataMaskSelected:s,filtersOpen:t.filtersOpen,filterValues:w,chartCustomizationValues:f,isInitialized:G,height:t.height,offset:t.offset,onSelectionChange:M,onPendingCustomizationDataMaskChange:N,toggleFiltersBar:t.toggleFiltersBar,width:t.width,clearAllTriggers:Y,onClearAllComplete:V}):null;return r?(0,d.Y)(uj,{children:Q}):Q});var uV=r(42114);let uB=e=>{let t=e[P.wv],r=null==t?void 0:t.children[0];return r===P.mK?e[P.wv]:e[r]},uq=(e,t,r)=>{var n;return"ant-tabs-nav-wrap"===e.target.className||null!=(n=null==t?void 0:t.contains(e.target))&&n};var uW=r(5129),uG=r(81334);function uK(){return(uK=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let uQ=e=>e.dropIndicatorProps&&(0,d.Y)("div",uK({},e.dropIndicatorProps)),uX=g.styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,uZ=g.styled.div`
  ${({theme:e,editMode:t})=>(0,v.AH)`
    display: flex;
    flex-direction: column;
    /* gutters between rows */
    & > div:not(:last-child):not(.empty-droptarget) {
      ${!t&&`margin-bottom: ${4*e.sizeUnit}px`};
    }

    .empty-droptarget {
      width: 100%;
      height: ${4*e.sizeUnit}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${e.borderRadius}px;
      overflow: hidden;

      &:before {
        content: '';
        display: block;
        width: calc(100% - ${2*e.sizeUnit}px);
        height: calc(100% - ${2*e.sizeUnit}px);
        border: 1px dashed transparent;
        border-radius: ${e.borderRadius}px;
        opacity: 0.5;
      }
    }

    & > .empty-droptarget:first-of-type {
      height: ${4*e.sizeUnit}px;
      margin-top: ${-4*e.sizeUnit}px;
    }

    & > .empty-droptarget:last-child {
      height: ${24*e.sizeUnit}px;
    }

    & > .empty-droptarget.empty-droptarget--full:only-child {
      height: 80vh;
    }
  `}
`,uJ=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    /* Editing guides */
    &.grid-column-guide {
      position: absolute;
      top: 0;
      min-height: 100%;
      background-color: ${(0,f.o3)(e.colorPrimary,.1)};
      pointer-events: none;
      box-shadow: inset 0 0 0 1px ${(0,f.o3)(e.colorPrimary,.6)};
    }
  `};
`,u0=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    &.grid-row-guide {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${(0,f.o3)(e.colorPrimary,.5)};
      box-shadow: 0 0 0 1px ${(0,f.o3)(e.colorPrimary,.5)};
      pointer-events: none;
      z-index: 10;
    }
  `};
`,u1=(0,b.Ng)(function({dashboardState:e,dashboardInfo:t}){return{editMode:e.editMode,canEdit:t.dash_edit_perm,dashboardId:t.id}},function(e){return(0,k.zH)({handleComponentDrop:tc.lL,resizeComponent:tc.gn,setDirectPathToChild:tu.I,setEditMode:tu.op},e)})(function({depth:e,editMode:t,canEdit:r,gridComponent:n,handleComponentDrop:i,isComponentVisible:o,resizeComponent:l,setDirectPathToChild:a,setEditMode:s,width:c,dashboardId:f}){var m,v,b,x;let S=(0,g.useTheme)(),[w,C]=(0,h.useState)(!1),k=(0,h.useRef)(null),$=(0,h.useRef)(null),D=(0,h.useCallback)(e=>{k.current=e},[]),I=(0,h.useCallback)(()=>{C(!0),$.current&&($.current.style.visibility="hidden")},[]),O=(0,h.useCallback)(e=>e&&k.current?e.getBoundingClientRect().bottom-k.current.getBoundingClientRect().top-2:null,[]),T=(0,h.useCallback)((e,t,r,n)=>{if(t.toLowerCase().includes("bottom")){let e=O(r);$.current&&null!==e&&($.current.style.top=`${e}px`,$.current.style.visibility="visible")}},[O]),z=(0,h.useCallback)((e,t,r,n,i)=>{l({id:i,width:n.width,height:n.height}),C(!1),$.current&&($.current.style.visibility="hidden")},[l]),Y=(0,h.useCallback)(e=>{(null==e?void 0:e.destination)&&i(uK({},e,{destination:uK({},e.destination,{index:0})}))},[i]),F=(0,h.useCallback)(({pathToTabIndex:e})=>{a(e)},[a]),_=(c+16)/12-16,E=(null==n||null==(m=n.children)?void 0:m.length)===0,P=E&&(null==n?void 0:n.type)==="TAB",M=t&&(0,d.Y)(y.p,{title:(0,p.t)("Drag and drop components and charts to the dashboard"),description:(0,p.t)("You can create a new chart or use existing ones from the panel on the right"),size:"large",buttonText:(0,d.FD)(d.FK,{children:[(0,d.Y)(A.F.PlusOutlined,{iconSize:"m",color:S.colorPrimary}),(0,p.t)("Create a new chart")]}),buttonAction:()=>{(0,j.VJ)(`/chart/add?dashboard_id=${f}`,{newWindow:!0})},image:"chart.svg"}),R=t?(0,d.Y)(y.p,{title:(0,p.t)("Drag and drop components to this tab"),size:"large",description:(0,p.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,d.FD)(d.FK,{children:[(0,d.Y)(A.F.PlusOutlined,{iconSize:"m",color:S.colorPrimary}),(0,p.t)("Create a new chart")]}),buttonAction:()=>{(0,j.VJ)(`/chart/add?dashboard_id=${f}`,{newWindow:!0})},image:"chart.svg"}):(0,d.Y)(y.p,{title:(0,p.t)("There are no components added to this tab"),size:"large",description:r&&(0,p.t)("You can add the components in the edit mode."),buttonText:r?(0,p.t)("Edit the dashboard"):void 0,buttonAction:r?()=>{null==s||s(!0)}:void 0,image:"chart.svg"});return c<100?null:(0,d.FD)(d.FK,{children:[E&&(0,d.Y)(uX,{children:P?R:M}),(0,d.Y)("div",{className:"dashboard-grid",ref:D,children:(0,d.FD)(uZ,{className:"grid-content","data-test":"grid-content",editMode:t,children:[t&&(0,d.Y)(eh,{component:n,depth:e,parentComponent:null,index:0,orientation:"column",onDrop:Y,className:u()({"empty-droptarget":!0,"empty-droptarget--full":(null==n||null==(v=n.children)?void 0:v.length)===0}),editMode:!0,dropToChild:(null==n||null==(b=n.children)?void 0:b.length)===0,children:uQ}),null==n||null==(x=n.children)?void 0:x.map((r,l)=>(0,d.FD)(h.Fragment,{children:[(0,d.Y)(l2,{id:r,parentId:n.id,depth:e+1,index:l,availableColumnCount:12,columnWidth:_,isComponentVisible:o,onResizeStart:I,onResize:T,onResizeStop:z,onChangeTab:F}),t&&(0,d.Y)(eh,{component:n,depth:e,parentComponent:null,index:l+1,orientation:"column",onDrop:i,className:"empty-droptarget",editMode:!0,children:uQ})]},r)),w&&Array(12).fill(null).map((e,t)=>(0,d.Y)(uJ,{className:"grid-column-guide",style:{left:16*t+t*_,width:_}},`grid-column-${t}`)),w&&(0,d.Y)(u0,{ref:$,className:"grid-row-guide",style:{visibility:"hidden"}})]})})]})});function u4(e,t,r,n=()=>!1){return e.map(e=>{if(n(e)||!e.scope||!Array.isArray(e.scope.excluded))return{id:e.id,tabsInScope:[],chartsInScope:[]};let i=(0,nz._)(e.scope,t,r),o=(0,iI.Kg)(r,i);return{id:e.id,tabsInScope:Array.from(o),chartsInScope:i}})}function u2(){return(u2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let u6=(0,nF.Mz)([e=>e.charts],e=>Object.values(e).filter(e=>"rendered"===e.chartStatus).map(e=>e.id)),u3=(0,h.memo)(({topLevelTabs:e})=>{var t;let r=(0,b.wA)(),n=(0,b.d4)(e=>e.dashboardLayout.present),i=(0,b.d4)(e=>e.dashboardInfo),o=(0,b.d4)(i2),l=(0,b.d4)(e=>{var t,r;return(null==(r=e.dashboardInfo)||null==(t=r.metadata)?void 0:t.chart_customization_config)||[]},b.bN),a=(0,b.d4)(e=>e.dashboardState.directPathToChild),s=tf(),c=(0,b.d4)(u6,b.bN),[u,p]=(0,h.useState)(!1),f=(0,h.useRef)([]),m=(0,h.useRef)(),g=(0,h.useRef)([]),v=(0,h.useRef)([]),y=(0,h.useMemo)(()=>{let e=lH({currentComponent:uB(n),directPathToChild:a});if(-1===e){var t;return null!=(t=m.current)?t:0}return m.current=e,e},[n,a]),x=u&&c.length>0&&s.length===c.length&&f.current.length<c.length,S=(0,h.useCallback)(()=>{var e;r((0,tu.Zc)()),(0,nh.Ky)((0,nh.Z6)(null==i||null==(e=i.metadata)?void 0:e.color_namespace)),f.current=[]},[null==i||null==(t=i.metadata)?void 0:t.color_namespace,r]),w=(0,h.useMemo)(()=>Object.values(n).filter(e=>(null==e?void 0:e.type)==="CHART"),[n]);(0,h.useEffect)(()=>{if(0===o.length)return;let e=u4(o,s,w,e=>e.id.startsWith(nX.E9)||e.type===iF.EH.Divider).map(e=>({filterId:e.id,chartsInScope:e.chartsInScope,tabsInScope:e.tabsInScope}));(0,l8.A)(e,g.current)||(g.current=e,r((0,aA.Od)(e)))},[s,o,w,r]),(0,h.useEffect)(()=>{let e;if(0===l.length)return;let t=u4(!(e=l.filter(Boolean)).some(iJ.CY)?e:e.map(e=>{if(!(0,iJ.CY)(e))return e;let t=(0,iJ.Rt)(e);return e.chartId?u2({},t,{scope:u2({},t.scope,{excluded:s.filter(t=>t!==e.chartId)})}):t}),s,w,e=>e.type===iF.i4.Divider).map(e=>({customizationId:e.id,chartsInScope:e.chartsInScope,tabsInScope:e.tabsInScope}));(0,l8.A)(t,v.current)||(v.current=t,r((0,l5.BM)(t)))},[s,l,w,r]);let k=(0,h.useMemo)(()=>e?e.children:[P.mK],[e]),$=Math.min(y,k.length-1),D=0===$?P.mK:$.toString();(0,h.useEffect)(()=>{x&&r((0,tu.zM)(i.metadata,!0))},[i.metadata,r,x]),(0,h.useEffect)(()=>{let e=c.length;if(u&&e>0&&f.current.length<e){let e=c.filter(e=>!f.current.includes(e));f.current=c,r((0,tu.sC)(e)),r((0,tu.Xz)(i.metadata)),x||r((0,tu.zM)(i.metadata))}},[c,r,u,i.metadata,x]),(0,h.useEffect)(()=>((0,uW.Ay)().source=uW.iw.Dashboard,(null==i?void 0:i.id)&&!u&&(r((0,tu.eu)(i.metadata)),p(!0)),()=>{S()}),[null==i?void 0:i.id,r]),(0,h.useEffect)(()=>(window.Cypress||window.addEventListener("beforeunload",S),()=>{window.removeEventListener("beforeunload",S)}),[S]);let I=(0,h.useCallback)(()=>(0,d.Y)(d.FK,{}),[]),O=(0,h.useCallback)(e=>{e.target.classList.contains("ant-tabs-content")&&window.scrollY<220&&window.scrollTo(window.scrollX,0)},[]),T=(0,h.useCallback)(({width:e})=>{let t=k.map((t,r)=>({key:0===r?P.mK:r.toString(),label:null,children:(0,d.Y)(u1,{gridComponent:n[t],depth:1,width:e,isComponentVisible:r===y})}));return(0,d.Y)(C.Ay,{id:P.mK,activeKey:D,renderTabBar:I,animated:!1,allowOverflow:!0,fullHeight:!0,onFocus:O,items:t,tabBarStyle:{paddingLeft:0}})},[D,k,n,O,I,y]),{parentRef:z,width:Y}=(0,uG.PH)();return(0,d.Y)("div",{className:"grid-container","data-test":"grid-container",ref:z,children:T({width:Y})})});var u5=r(72954),u7=r(82710);let u8=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    background-color: ${e.colorBgLayout};
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    flex: 1;
    /* Special cases */

    &.dragdroppable--dragging {
      &
        .dashboard-component-tabs-content
        > .empty-droptarget.empty-droptarget--full {
        height: 100%;
      }
      & .empty-droptarget:before {
        display: block;
        border-color: ${e.colorPrimary};
        background-color: ${e.colorPrimaryBg};
      }
      & .grid-row:after {
        border-style: hidden;
      }
      & .droptarget-side:last-child {
        inset-inline-end: 0;
      }
      & .droptarget-edge:last-child {
        inset-block-end: 0;
      }
    }

    /* A row within a column has inset hover menu */
    .dragdroppable-column .dragdroppable-row .hover-menu--left {
      left: ${-3*e.sizeUnit}px;
      background-color: ${e.colorBgContainer};
      border: 1px solid ${e.colorBorder};
    }

    .dashboard-component-tabs {
      position: relative;
    }

    /* A column within a column or tabs has inset hover menu */
    .dragdroppable-column .dragdroppable-column .hover-menu--top,
    .dashboard-component-tabs .dragdroppable-column .hover-menu--top {
      top: ${-3*e.sizeUnit}px;
      background-color: ${e.colorBgContainer};
      border: 1px solid ${e.colorBorder};
    }

    /* move Tabs hover menu to top near actual Tabs */
    .dashboard-component-tabs > .hover-menu-container > .hover-menu--left {
      top: 0;
      transform: unset;
      background: transparent;
    }

    /* push Chart actions to upper right */
    .dragdroppable-column .dashboard-component-chart-holder .hover-menu--top,
    .dragdroppable .dashboard-component-header .hover-menu--top {
      right: ${3*e.sizeUnit}px;
      top: ${5*e.sizeUnit}px;
      background: transparent;
      border: none;
      transform: unset;
      left: unset;
    }
    div:hover > .hover-menu-container .hover-menu,
    .hover-menu-container .hover-menu:hover {
      opacity: 1;
    }

    p {
      margin: 0 0 ${2*e.sizeUnit}px 0;
    }

    i.danger {
      color: ${e.colorError};
    }

    i.warning {
      color: ${e.colorWarning};
    }
  `}
`,u9=({children:e})=>{var t;let r=(0,b.d4)(e=>e.dashboardState.editMode),n=(t=(0,h.useContext)(u7.M).dragDropManager,(0,u5.V)(null!=t,"Expected drag drop context"),t),[i,o]=(0,h.useState)(n.getMonitor().isDragging());return(0,h.useEffect)(()=>{let e=n.getMonitor(),t=(0,M.A)(o,l6.Y.FAST_DEBOUNCE),r=e.subscribeToStateChange(()=>{e.isDragging()?t(!0):(t.cancel(),o(!1))});return()=>{r(),t.cancel()}},[n]),(0,d.Y)(u8,{className:u()({"dragdroppable--dragging":r&&i}),children:e})};function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ht=g.styled.div`
  background-color: ${({theme:e})=>e.colorBgContainer};
  grid-column: 1;
  grid-row: 1 / span 2;
  z-index: 11;
  width: ${({width:e})=>e}px;
  ${({hidden:e})=>e&&"display: none;"}
`,hr=g.styled.div`
  position: sticky;
  top: -1px;
  width: ${({width:e})=>e}px;
  flex: 0 0 ${({width:e})=>e}px;
`,hn=g.styled.div`
  ${({theme:e,filterBarWidth:t})=>(0,v.AH)`
    grid-column: 2;
    grid-row: 1;
    position: sticky;
    top: 0;
    z-index: 99;
    max-width: calc(100vw - ${t}px);

    .empty-droptarget {
      min-height: ${4*e.sizeUnit}px;
    }

    .empty-droptarget:before {
      position: absolute;
      content: '';
      display: none;
      width: calc(100% - ${2*e.sizeUnit}px);
      height: calc(100% - ${2*e.sizeUnit}px);
      left: ${e.sizeUnit}px;
      top: ${e.sizeUnit}px;
      border: 1px dashed transparent;
      border-radius: ${e.borderRadius}px;
      opacity: 0.5;
    }
  `}
`,hi=g.styled.div`
  grid-column: 2;
  grid-row: 2;
  /* @z-index-above-dashboard-header (100) + 1 = 101 */
  ${({fullSizeChartId:e})=>e&&"z-index: 101;"}
`,ho=g.styled.div`
  ${({theme:e})=>(0,v.AH)`
    &.dashboard {
      position: relative;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      /* drop shadow for top-level tabs only */
      & .dashboard-component-tabs {
        box-shadow: 0 ${e.sizeUnit}px ${e.sizeUnit}px 0
          ${(0,f.o3)(e.colorBorderSecondary,.1)};
        padding-left: ${2*e.sizeUnit}px; /* note this is added to tab-level padding, to match header */
      }

      .dropdown-toggle.btn.btn-primary .caret {
        color: ${e.colorText};
      }

      .background--transparent {
        background-color: transparent;
      }

      .background--white {
        background-color: ${e.colorBgContainer};
      }
    }
    &.dashboard--editing {
      .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      .grid-row.grid-row--hovered:after,
      .dashboard-component-tabs > .grid-row--hovered:after {
        border: 2px dashed ${e.colorPrimary};
      }

      .resizable-container {
        & .dashboard-component-chart-holder {
          .dashboard-chart {
            .chart-container {
              cursor: move;
              opacity: 0.2;
            }

            .slice_container {
              /* disable chart interactions in edit mode */
              pointer-events: none;
            }
          }

          &:hover .dashboard-chart .chart-container {
            opacity: 0.7;
          }
        }

        &:hover,
        &.resizable-container--resizing:hover {
          & > .dashboard-component-chart-holder:after {
            border: 1px dashed ${e.colorPrimary};
          }
        }
      }

      .resizable-container--resizing:hover > .grid-row:after,
      .hover-menu:hover + .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed ${e.colorPrimary};
        z-index: 2;
      }

      .grid-row:after,
      .dashboard-component-tabs > .hover-menu + div:after {
        border: 1px dashed ${e.colorBorder};
      }

      /* provide hit area in case row contents is edge to edge */
      .dashboard-component-tabs-content {
        > .dragdroppable-row {
          padding-top: ${4*e.sizeUnit}px;
        }
      }

      .dashboard-component-chart-holder {
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          border: 1px solid transparent;
        }

        &:hover:after {
          border: 1px dashed ${e.colorPrimary};
          z-index: 2;
        }
      }

      .contract-trigger:before {
        display: none;
      }
    }

    & .dashboard-component-tabs-content {
      & > div:not(:last-child):not(.empty-droptarget) {
        margin-bottom: ${4*e.sizeUnit}px;
      }

      & > .empty-droptarget {
        z-index: ${10};
        position: absolute;
        width: 100%;
      }

      & > .empty-droptarget:first-of-type:not(.empty-droptarget--full) {
        height: ${4*e.sizeUnit}px;
        top: 0;
      }

      & > .empty-droptarget:last-child {
        height: ${4*e.sizeUnit}px;
        bottom: ${-(4*e.sizeUnit)}px;
      }
    }
  `}
`,hl=g.styled.div`
  ${({theme:e,editMode:t,marginLeft:r})=>{var n,i,o,l;return(0,v.AH)`
    background-color: ${e.colorBgLayout};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: auto;
    flex: 1;

    .grid-container .dashboard-component-tabs {
      box-shadow: none;
      padding-left: 0;
    }

    .grid-container {
      /* without this, the grid will not get smaller upon toggling the builder panel on */
      width: 0;
      flex: 1;
      position: relative;
      margin: ${4*e.sizeUnit}px;
      margin-left: ${r}px;

      ${t&&`
      max-width: calc(100% - ${374+16*e.sizeUnit}px);
    `}

      /* this is the ParentSize wrapper */
    & > div:first-of-type {
        height: 100% !important;
      }
    }

    .dashboard-builder-sidepane {
      width: ${374}px;
      z-index: 1;
    }

    .dashboard-component-chart-holder {
      width: 100%;
      height: 100%;
      background-color: ${null!=(n=e.dashboardTileBg)?n:e.colorBgContainer};
      border: ${null!=(i=e.dashboardTileBorder)?i:`1px solid ${e.colorBorder}`};
      border-radius: ${null!=(o=e.dashboardTileBorderRadius)?o:e.borderRadius}px;
      position: relative;
      padding: ${4*e.sizeUnit}px;
      box-sizing: border-box;
      overflow-y: visible;

      /* transitionable traits to show filter relevance */
      transition:
        opacity ${e.motionDurationMid} ease-in-out,
        border-color ${e.motionDurationMid} ease-in-out,
        box-shadow ${e.motionDurationMid} ease-in-out;

      &.fade-in {
        box-shadow:
          inset 0 0 0 2px ${e.colorPrimary},
          0 0 0 3px ${(0,f.o3)(e.colorPrimary,.1)};
      }

      &.fade-out {
        box-shadow: ${null!=(l=e.dashboardTileBoxShadow)?l:`0 0 0 1px ${(0,f.o3)(e.colorBorder,.5)}`};
      }

      & .missing-chart-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        justify-content: center;

        .missing-chart-body {
          font-size: ${e.fontSizeSM}px;
          position: relative;
          display: flex;
        }
      }
    }
  `}}
`,ha={threshold:[1]},hs=(0,h.memo)(()=>{var e,t;let r=(0,b.wA)(),n=(0,nf.Q1)(),i=(0,g.useTheme)(),o=(0,b.d4)(({dashboardInfo:e})=>`${e.id}`),l=(0,b.d4)(e=>e.dashboardLayout.present),a=(0,b.d4)(e=>e.dashboardState.editMode),s=(0,b.d4)(({dashboardInfo:e})=>e.dash_edit_perm),c=(0,b.d4)(({dashboardState:e})=>e.dashboardIsSaving),f=(0,b.d4)(e=>e.dashboardState.fullSizeChartId),w=(0,b.d4)(({dashboardInfo:e})=>e.filterBarOrientation),C=(0,h.useCallback)(({pathToTabIndex:e})=>{r((0,tu.I)(e)),window.scrollTo(0,0)},[r]),k=(0,h.useCallback)(()=>{r((0,tc.zT)());let e=lL(uB(l),0);r((0,tu.I)(e))},[l,r]),$=(0,h.useCallback)(e=>r((0,tc.lL)(e)),[r]),D=(0,h.useRef)(null),I=l[P.wv],O=null==I?void 0:I.children[0],T=O!==P.mK?l[O]:void 0,z=(0,tk.P3)(tS.vX.standalone),Y=z===P.hL.Report,F=n.hideTitle||z===P.hL.HideNavAndTitle||Y,[_,E]=(0,h.useState)(0),[M,R]=(0,h.useState)(32);(0,h.useEffect)(()=>{var e,t;let r;return E((null==(t=D.current)||null==(e=t.getBoundingClientRect())?void 0:e.height)||0),globalThis.hasOwnProperty("ResizeObserver")&&D.current&&(r=new ResizeObserver(e=>{E(t=>{var r,n;return(null==e||null==(n=e[0])||null==(r=n.contentRect)?void 0:r.height)||t})})).observe(D.current),()=>{null==r||r.disconnect()}},[]);let{showDashboard:j,missingInitialFilters:U,dashboardFiltersOpen:H,toggleDashboardFiltersOpen:L,nativeFiltersEnabled:V}=(()=>{let e=(0,b.wA)(),[t,r]=(0,h.useState)(!1),n=(0,b.d4)(()=>{var e;return null==(e=(0,tk.P3)(tS.vX.showFilters))||e}),i=(0,b.d4)(({dashboardInfo:e})=>e.dash_edit_perm),o=(0,b.d4)(e=>{var t;return null!=(t=e.dashboardState.nativeFiltersBarOpen)&&t}),l=ad(),a=(0,h.useMemo)(()=>Object.values(l),[l]),s=(0,tk.P3)(tS.vX.expandFilters),d=i5(),c=n&&(i||!i&&(0!==a.length||0!==d.length)),u=(0,h.useMemo)(()=>a.filter(e=>"requiredFirst"in e&&!0===e.requiredFirst&&"filter_time"!==e.filterType),[a]),p=ac(),f=(0,h.useMemo)(()=>u.filter(({id:e})=>{var t,r;return(null==(r=p[e])||null==(t=r.filterState)?void 0:t.value)===void 0}).map(({name:e})=>e),[u,p]),m=t||!c||0===f.length,g=(0,h.useCallback)(t=>{e((0,tu.Qw)(null!=t?t:!o))},[e,o]);return(0,h.useEffect)(()=>{(0,N.G7)(N.TO.FilterBarClosedByDefault)&&null===s||!1===s||0===a.length&&0===d.length&&c?e((0,tu.Qw)(!1)):e((0,tu.Qw)(!0))},[e,a.length,d.length,s,c]),(0,h.useEffect)(()=>{m&&r(!0)},[m]),{showDashboard:m,missingInitialFilters:f,dashboardFiltersOpen:o,toggleDashboardFiltersOpen:g,nativeFiltersEnabled:c}})(),[B,q]=(0,m.N)(ha),W=!a&&V,G=`calc(100vh - ${80+(q||z?0:53)}px)`,K=H?0:_+20,Q=(0,h.useMemo)(()=>({marginLeft:H||a||!V||w===tI.QI.Horizontal?0:-32}),[H,a,w,V]),X=(0,h.useRef)(T);(0,h.useEffect)(()=>{var e,t,n;let i=null==(t=X.current)||null==(e=t.children)?void 0:e.length,o=null==T||null==(n=T.children)?void 0:n.length;if(void 0!==i&&void 0!==o&&o>i){let e=lL(uB(l),o-1);r((0,tu.I)(e))}X.current=T},[T]);let Z=(0,h.useMemo)(()=>(0,d.FD)(d.FK,{children:[!F&&(0,d.Y)(r5,{}),F&&!Y&&(0,d.Y)(r7,{}),W&&w===tI.QI.Horizontal&&(0,d.Y)(uL,{orientation:tI.QI.Horizontal,hidden:Y})]}),[F,W,w,Y]),J=(0,h.useCallback)(({dropIndicatorProps:e})=>(0,d.FD)("div",{children:[e&&(0,d.Y)("div",he({},e)),!Y&&T&&!n.hideTab&&!n.hideNav&&(0,d.Y)(la,{shouldFocus:uq,menuItems:[(0,d.Y)(ne,{icon:(0,d.Y)(A.F.FallOutlined,{iconSize:"xl"}),label:(0,p.t)("Collapse tab content"),onClick:k},"collapse-tabs")],editMode:a,children:(0,d.Y)(l2,{id:null==T?void 0:T.id,parentId:P.wv,depth:1,index:0,renderTabContent:!1,renderHoverMenu:!1,onChangeTab:C})})]}),[a,C,k,Y,T,n.hideTab,n.hideNav]),ee=a?8*i.sizeUnit:4*i.sizeUnit,et=(0,h.useCallback)(e=>{let t=H?e:32;return t!==M&&R(t),(0,d.Y)(ht,{width:t,hidden:Y,"data-test":"dashboard-filters-panel",children:(0,d.Y)(hr,{ref:B,width:t,children:(0,d.Y)(S.tH,{children:(0,d.Y)(uL,{orientation:tI.QI.Vertical,verticalConfig:{filtersOpen:H,toggleFiltersBar:L,width:t,height:G,offset:K}})})})})},[H,L,G,K,Y]),er=W&&w===tI.QI.Vertical;return(0,d.FD)(u9,{children:[er&&(0,d.Y)(uV.A,{id:`dashboard:${o}`,enable:H,minWidth:260,maxWidth:550,initialWidth:260,children:et}),(0,d.FD)(hn,{"data-test":"dashboard-header-wrapper",ref:D,filterBarWidth:er?M:0,children:[Z,(0,d.Y)(eh,{"data-test":"top-level-tabs",className:u()(!T&&a&&"empty-droptarget"),component:I,parentComponent:null,depth:0,index:0,orientation:"column",onDrop:$,editMode:a,disableDragDrop:!!T,style:Q,children:J})]}),(0,d.FD)(hi,{fullSizeChartId:f,children:[!a&&!T&&(null==(t=l[P.mK])||null==(e=t.children)?void 0:e.length)===0&&(0,d.Y)(y.p,{title:(0,p.t)("There are no charts added to this dashboard"),size:"large",description:s&&(0,p.t)("Go to the edit mode to configure the dashboard and add charts"),buttonText:s&&(0,p.t)("Edit the dashboard"),buttonAction:()=>{r((0,tu.op)(!0)),r((0,tc.Qk)())},image:"dashboard.svg"}),(0,d.Y)(ho,{"data-test":"dashboard-content-wrapper",className:u()("dashboard",a&&"dashboard--editing"),children:(0,d.FD)(hl,{className:"dashboard-content",editMode:a,marginLeft:ee,children:[j?U.length>0?(0,d.Y)("div",{css:(0,v.AH)`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    & div {
                      width: 500px;
                    }
                  `,children:(0,d.Y)(S.vB,{title:(0,p.t)("Unable to load dashboard"),body:(0,p.t)(`The following filters have the 'Select first filter value by default'
                    option checked and could not be loaded, which is preventing the dashboard
                    from rendering: %s`,U.join(", "))})}):(0,d.Y)(u3,{topLevelTabs:T}):(0,d.Y)(x.R,{}),a&&(0,d.Y)(eA,{topOffset:_})]})})]}),c&&(0,d.Y)(x.R,{css:(0,v.AH)`
            && {
              position: fixed;
            }
          `})]})})},58348(e,t,r){"use strict";var n=r(2445),i=r(8563),o=r(27124),l=r(85614),a=r(67520);let s=l.styled.div`
  ${({theme:e})=>`
    .tooltip-header {
      font-size: ${e.fontSize}px;
      font-weight: ${e.fontWeightStrong};
    }

    .tooltip-description {
      margin-top: ${2*e.sizeUnit}px;
      display: -webkit-box;
      -webkit-line-clamp: 20;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`,d=l.styled.div`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,c=l.styled.span`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,u=l.styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  width: 100%;
`,h=l.styled.span`
  ${({theme:{fontSizeSM:e,colorTextSecondary:t}})=>`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e}px;
    color: ${t};
    line-height: 1.6;
  `}
`,p=e=>!["null","none"].includes(e.toLowerCase())&&""!==e.trim();r.d(t,["$",0,e=>{var t,r,l,f,m,g;return(0,n.Y)(i.m,{mouseEnterDelay:.2,placement:"right",title:(0,n.FD)(s,{children:[(0,n.Y)("div",{className:"tooltip-header",children:e.table_name&&p(e.table_name)?e.table_name:(0,o.t)("Not defined")}),(0,n.FD)("div",{className:"tooltip-description",children:[(0,n.FD)("div",{children:[(0,a.A2)(e.kind),":"," ",null!=(t=null==(f=e.database)?void 0:f.database_name)?t:(0,o.t)("Not defined")]}),e.schema&&p(e.schema)&&(0,n.FD)("div",{children:[(0,o.t)("Schema"),": ",e.schema]})]})]}),children:(0,n.FD)(d,{children:[(0,n.Y)(c,{children:e.table_name&&p(e.table_name)?e.table_name:null!=(r=null==(m=e.database)?void 0:m.database_name)?r:(0,o.t)("Not defined")}),(0,n.FD)(u,{children:[(0,n.Y)(h,{children:null!=(l=null==(g=e.database)?void 0:g.database_name)?l:(0,o.t)("Not defined")}),e.schema&&p(e.schema)&&(0,n.FD)(h,{children:[" - ",e.schema]})]})]})})}])},19251(e,t,r){"use strict";r.d(t,{l:()=>i});var n,i=((n={}).Slider="slider",n.Input="input",n.SliderAndInput="slider-and-input",n)},93634(e,t,r){"use strict";r.d(t,{A:()=>l,e:()=>o});var n=r(1932),i=r(64260);function o(e){var t=(0,i.useState)(function(){return(0,n.CN)("function"==typeof e?e():e,!0)}),r=t[1];return[t[0],(0,i.useCallback)(function(e){r("function"==typeof e?(0,n.jM)(e):(0,n.CN)(e))},[])]}function l(e,t,r){var o=(0,i.useMemo)(function(){return(0,n.jM)(e)},[e]);return(0,i.useReducer)(o,t,r)}}}]);