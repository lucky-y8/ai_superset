(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5115],{7452(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch{s=function(e,t,r){return e[t]=r}}function u(e,r,n,i){var o,a,c,s,u=Object.create((r&&r.prototype instanceof m?r:m).prototype);return l(u,"_invoke",{value:(o=e,a=n,c=new A(i||[]),s=h,function(e,r){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var l=function e(r,n){var l=n.method,i=r.iterator[l];if(t===i)return(n.delegate=null,"throw"===l&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==l&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+l+"' method")),g);var o=d(i,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(l){if(l===g)continue;return l}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(s===h)throw s=f,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);s=p;var i=d(o,a,c);if("normal"===i.type){if(s=c.done?f:"suspendedYield",i.arg===g)continue;return{value:i.arg,done:c.done}}"throw"===i.type&&(s=f,c.method="throw",c.arg=i.arg)}})}),u}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",g={};function m(){}function y(){}function v(){}var b={};s(b,o,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(T([])));S&&S!==r&&n.call(S,o)&&(b=S);var k=v.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function C(e,t){var r;l(this,"_invoke",{value:function(l,i){function o(){return new t(function(r,o){!function r(l,i,o,a){var c=d(e[l],e,i);if("throw"===c.type)a(c.arg);else{var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,a)},function(e){r("throw",e,o,a)}):t.resolve(u).then(function(e){s.value=e,o(s)},function(e){return r("throw",e,o,a)})}}(l,i,r,o)})}return r=r?r.then(o,o):o()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function T(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var l=-1,i=function r(){for(;++l<e.length;)if(n.call(e,l))return r.value=e[l],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return y.prototype=v,l(k,"constructor",{value:v,configurable:!0}),l(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(C.prototype),s(C.prototype,a,function(){return this}),e.AsyncIterator=C,e.async=function(t,r,n,l,i){void 0===i&&(i=Promise);var o=new C(u(t,r,n,l),i);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},x(k),s(k,c,"Generator"),s(k,o,function(){return this}),s(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function l(n,l){return a.type="throw",a.arg=e,r.next=n,l&&(r.method="next",r.arg=t),!!l}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return l("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return l(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return l(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return l(o.catchLoc,!0)}else if(s){if(this.prev<o.finallyLoc)return l(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r];if(l.tryLoc<=this.prev&&n.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var i=l;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return(o.type=e,o.arg=t,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var l=n.arg;N(r)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch{"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},19064(e,t,r){"use strict";r.d(t,{A:()=>i});var n=r(58097),l=r(18349);function i(e,t,r){return null==t||""===t.trim()?e:r?new n.Ay({d3Format:t,currency:r}):(0,l.gV)(t)}},45664(e,t,r){"use strict";r.d(t,["j",0,()=>{var e;return null==(e=window.getSelection())?void 0:e.toString()}])},26216(e,t,r){"use strict";let n=r(64260).memo;r.d(t,["v",0,n])},95115(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:()=>eA,sanitizeHeaderId:()=>eS});var l=r(2445),i=r(64260),o=r(30359),a=r(44297),c=r(55144),s=r(46942),u=r.n(s),d=r(85517),h=r(50267),p=r(65802),f=r(25365),g=r(79927),m=r(45664),y=r(85614),v=r(17437),b=r(27124),w=r(63021),S=r(65471),k=r(58607),x=r(8563),C=r(26067),E=r(13341),N=r(14103),A=r(58168);let T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var D=r(87064),$=i.forwardRef(function(e,t){return i.createElement(D.A,(0,A.A)({},e,{ref:t,icon:T}))});let F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};var Y=i.forwardRef(function(e,t){return i.createElement(D.A,(0,A.A)({},e,{ref:t,icon:F}))}),M=r(29248),z=r(66401),L=r(64741),R=r(46996),O=r(66155),I=r(3102),H=r(26216),P=r(36732),B=r(38914),j=r(51545),_=r(68447);r(7452);let U=new Map;function G({count:e,value:t,onChange:r,onBlur:n,inputRef:i}){return(0,l.FD)(S.Space,{direction:"horizontal",size:4,className:"dt-global-filter",children:[(0,b.t)("Search"),(0,l.Y)(S.Input,{size:"small",ref:i,placeholder:(0,b.tn)("%s record...","%s records...",e,e),value:t,onChange:r,onBlur:n,className:"form-control input-sm"})]})}let W=(0,i.memo)(function({preGlobalFilteredRows:e,filterValue:t="",searchInput:r,setGlobalFilter:n,id:o="",serverPagination:a,rowCount:c}){let s=a?c:e.length,u=(0,i.useRef)(null),[d,h]=function(e,t,r=200){let[n,l]=(0,i.useState)(e),o=(0,i.useRef)(e),a=(0,B.useAsyncDebounce)(t,r);return o.current!==e&&(o.current=e,n!==e&&l(e)),[n,e=>{l(e),a(e)}]}(t,e=>{n(e||void 0)},200);return(0,i.useEffect)(()=>{if(a&&U.get(o)&&document.activeElement!==u.current){var e;null==(e=u.current)||e.focus()}},[d,a]),(0,l.Y)(r||G,{count:s,value:d,inputRef:u,onChange:e=>{let t=e.target;e.preventDefault(),U.set(o,!0),h(t.value)},onBlur:()=>{U.set(o,!1)}})});var K=r(78486);function V({current:e,options:t,onChange:r}){let{Option:n}=S.Select;return(0,l.FD)("span",{className:"dt-select-page-size form-inline",children:[(0,b.t)("Show")," ",(0,l.Y)(S.Select,{value:e,onChange:e=>r(e),size:"small",css:e=>(0,v.AH)`
          width: ${18*e.sizeUnit}px;
        `,children:t.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e],i=0===t?(0,b.t)("all"):t;return(0,l.Y)(n,{value:Number(t),"aria-label":(0,b.t)("Show %s entries",i),children:r},t)})})," ",(0,b.t)("entries")]})}function X(e){return Array.isArray(e)?e[0]:e}let Q=(0,i.memo)(function({total:e,options:t,current:r,selectRenderer:n,onChange:i}){let o=t.map(X),a=[...t];void 0===r||r===e&&o.includes(0)||o.includes(r)||(a=[...t]).splice(o.findIndex(e=>e>r),0,(0,K.u)([r])[0]);let c=void 0===r?o[0]:r;return(0,l.Y)(n||V,{current:c,options:a,onChange:i})}),Z=(0,i.memo)((0,i.forwardRef)(function({style:e,pageCount:t,currentPage:r=0,maxPageItemCount:n=9,onPageChange:i},o){let a=function(e,t,r){if(r<7)throw Error("Must allow at least 7 page items");if(r%2==0)throw Error("Must allow odd number of page items");if(e<r)return Array.from({length:e},(e,t)=>t);let n=Math.max(0,Math.min(e-r,t-Math.floor(r/2))),l=Array.from({length:r},(e,t)=>t+n);"number"==typeof l[0]&&l[0]>0&&(l[0]=0,l[1]="prev-more");let i=l[l.length-1];return"number"==typeof i&&i<e-1&&(l[l.length-1]=e-1,l[l.length-2]="next-more"),l}(t,r,n);return(0,l.Y)("div",{ref:o,className:"dt-pagination",style:e,children:(0,l.Y)("ul",{className:"pagination pagination-sm",children:a.map(e=>"number"==typeof e?(0,l.Y)("li",{className:r===e?"active":void 0,children:(0,l.Y)("a",{href:`#page-${e}`,role:"button",onClick:t=>{t.preventDefault(),i(e)},children:e+1})},e):(0,l.Y)("li",{className:"dt-pagination-ellipsis",children:(0,l.Y)("span",{children:"…"})},e))})})})),q=e=>e.join(`
`);function J(e=!1){if("u"<typeof document)return 0;if(void 0===n||e){let e=document.createElement("div"),t=document.createElement("div");e.style.cssText=q`
      width: auto;
      height: 100%;
      overflow: scroll;
    `,t.style.cssText=q`
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 100px;
      height: 50px;
    `,t.append(e),document.body.append(t),n=t.clientWidth-e.clientWidth,t.remove()}return n}function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let et=(e,t)=>e+t,er=(e,t)=>({style:ee({},e.props.style,t)}),en={tableLayout:"fixed"};function el({sticky:e={},width:t,height:r,children:n,setStickyState:o}){let a,c,s,u,d,h,p,f=(0,y.useTheme)();if(!n||"table"!==n.type)throw Error("<StickyWrap> must have only one <table> element as child");if(i.Children.forEach(n.props.children,e=>{e&&("thead"===e.type?a=e:"tbody"===e.type?c=e:"tfoot"===e.type&&(s=e))}),!a||!c)throw Error("<table> in <StickyWrap> must contain both thead and tbody.");let g=(0,i.useMemo)(()=>i.Children.toArray(null==a?void 0:a.props.children).pop().props.children.length,[a]),m=(0,i.useRef)(null),b=(0,i.useRef)(null),w=(0,i.useRef)(null),S=(0,i.useRef)(null),k=(0,i.useRef)(null),x=J(),{bodyHeight:C,columnWidths:E,hasVerticalScroll:N}=e,A=!E||e.width!==t||e.height!==r||e.setStickyState!==o;(0,i.useLayoutEffect)(()=>{var e,n;if(!m.current)return;let l=m.current,i=l.clientHeight,a=b.current?b.current.clientHeight:0;if(!i)return;let c=l.parentNode.clientHeight,s=Array.from(null==(n=l.childNodes)?void 0:n[(null==(e=l.childNodes)?void 0:e.length)-1||0].childNodes).map(e=>{var t;return(null==(t=e.getBoundingClientRect())?void 0:t.width)||e.clientWidth}),[u,d]=function({width:e,height:t,innerHeight:r,innerWidth:n,scrollBarSize:l}){let i=r>t;return[i,n>e-(i?l:0)]}({width:t,height:r-i-a,innerHeight:c,innerWidth:s.reduce(et),scrollBarSize:x}),h=Math.min(r,d?c+x:c);o({hasVerticalScroll:u,hasHorizontalScroll:d,setStickyState:o,width:t,height:r,realHeight:h,tableHeight:c,bodyHeight:h-i-a,columnWidths:s})},[t,r,o,x]);let T=(0,v.AH)`
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${f.colorFillQuaternary};
    }
    &::-webkit-scrollbar-thumb {
      background: ${f.colorFillSecondary};
      border-radius: ${f.borderRadiusSM}px;
      &:hover {
        background: ${f.colorFillTertiary};
      }
    }
    &::-webkit-scrollbar-corner {
      background: ${f.colorFillQuaternary};
    }
  `;if(A){let e=(0,i.cloneElement)(a,{ref:m}),t=s&&(0,i.cloneElement)(s,{ref:b});u=(0,l.Y)("div",{style:{height:r,overflow:"auto",visibility:"hidden",scrollbarGutter:"stable"},css:T,role:"presentation",children:(0,i.cloneElement)(n,{role:"presentation"},e,c,t)},"sizer")}let D=null==E?void 0:E.slice(0,g);if(D&&C){let r=(0,l.Y)("colgroup",{children:D.map((e,t)=>(0,l.Y)("col",{width:e},t))}),o=N?t-x:t;d=(0,l.FD)("div",{ref:w,style:{overflow:"hidden",width:o,boxSizing:"border-box"},role:"presentation",children:[(0,i.cloneElement)((0,i.cloneElement)(n,{role:"presentation"}),er(n,en),r,a),d]},"header"),h=s&&(0,l.FD)("div",{ref:S,style:{overflow:"hidden",width:o,boxSizing:"border-box"},role:"presentation",children:[(0,i.cloneElement)((0,i.cloneElement)(n,{role:"presentation"}),er(n,en),r,s),h]},"footer"),p=(0,l.Y)("div",{ref:k,style:{height:C,overflow:"auto",scrollbarGutter:N?"stable":void 0,width:t,boxSizing:"border-box"},css:T,onScroll:e.hasHorizontalScroll?e=>{w.current&&(w.current.scrollLeft=e.currentTarget.scrollLeft),S.current&&(S.current.scrollLeft=e.currentTarget.scrollLeft)}:void 0,role:"presentation",children:(0,i.cloneElement)((0,i.cloneElement)(n,{role:"presentation"}),er(n,en),r,c)},"body")}return(0,l.FD)("div",{style:{width:t,height:e.realHeight||r,overflow:"hidden"},role:"table",children:[d,p,h,u]})}function ei(e){let{dispatch:t,state:{sticky:r},data:n,page:o,rows:a,allColumns:c,getTableSize:s=()=>void 0}=e,u=(0,i.useCallback)(e=>{t({type:"setStickyState",size:e})},[t,s,o,a]);Object.assign(e,{setStickyState:u,wrapStickyTable:e=>{var t;let d,{width:h,height:p}=(t=[s],d=(0,i.useRef)(),(0,i.useLayoutEffect)(()=>{d.current=s}),(0,i.useMemo)(()=>{if(d.current)return s()},[d.current,d.current===s,...t||[]])||r),f=(0,i.useMemo)(e,[o,a,c]);return((0,i.useLayoutEffect)(()=>{h&&p||u()},[h,p]),h&&p)?0===n.length?f:(0,l.Y)(el,{width:h,height:p,sticky:r,setStickyState:u,children:f}):null}})}function eo(e){e.useInstance.push(ei),e.stateReducers.push((e,t,r)=>{if("init"===t.type)return ee({},e,{sticky:ee({},null==r?void 0:r.sticky)});if("setStickyState"===t.type){let{size:n}=t;return n?ee({},e,{sticky:ee({},null==r?void 0:r.sticky,null==e?void 0:e.sticky,t.size)}):ee({},e)}return e})}eo.pluginName="useSticky";var ea=r(83442);let ec=function({value:e,onChange:t,searchOptions:r}){var n;return(0,l.Y)(S.Select,{className:"search-select",css:e=>(0,v.AH)`
        width: ${30*e.sizeUnit}px;
      `,value:null!=e?e:null==r||null==(n=r[0])?void 0:n.value,options:r,size:"small",onChange:t})};function es(){return(es=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function eu(e,t){if(null==e)return{};var r,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}let ed={alphanumeric:(e,t,r)=>{let n=e.values[r],l=t.values[r];return n&&"string"==typeof n?l&&"string"==typeof l?n.localeCompare(l):1:-1}},eh=(0,H.v)(function(e){let{tableClassName:t,columns:r,data:n,serverPaginationData:o,width:a="100%",height:c=300,pageSize:s=0,initialState:u={},pageSizeOptions:d=ea.x,maxPageItemCount:h=9,sticky:p,searchInput:f=!0,onServerPaginationChange:g,rowCount:m,selectPageSize:y,noResults:w=(0,b.t)("No data found"),hooks:k,serverPagination:x,wrapperRef:C,onColumnOrderChange:E,renderGroupingHeaders:N,renderTimeComparisonDropdown:A,handleSortByChange:T,sortByFromParent:D=[],manualSearch:$=!1,onSearchChange:F,initialSearchText:Y,searchInputId:M,onSearchColChange:z,searchOptions:L,onFilteredDataChange:O,onFilteredRowsChange:I}=e,H=eu(e,["tableClassName","columns","data","serverPaginationData","width","height","pageSize","initialState","pageSizeOptions","maxPageItemCount","sticky","searchInput","onServerPaginationChange","rowCount","selectPageSize","noResults","hooks","serverPagination","wrapperRef","onColumnOrderChange","renderGroupingHeaders","renderTimeComparisonDropdown","handleSortByChange","sortByFromParent","manualSearch","onSearchChange","initialSearchText","searchInputId","onSearchColChange","searchOptions","onFilteredDataChange","onFilteredRowsChange"]),U=[B.useGlobalFilter,B.useSortBy,B.usePagination,B.useColumnOrder,p?eo:[],k||[]].flat(),G=r.map((e,t)=>{var r,n,l;let i="string"==typeof e.accessor?e.accessor:void 0;return null!=(r=null!=(n=null!=(l=e.columnKey)?l:e.id)?n:i)?r:String(t)}),K=(0,P.Z)(G),V=x?m:n.length,X=(0,i.useRef)([]),q=(0,i.useRef)([s,V]),J=s>0&&V>0,ee=J||!!f||A,et=es({},u,{sortBy:x?D:X.current,pageSize:s>0?s:V||10}),er=(0,i.useRef)(null),en=(0,i.useRef)(null),el=(0,i.useRef)(null),ei=C||er,eh=JSON.stringify(o),ep=(0,i.useCallback)(()=>{if(ei.current){var e,t;return{width:Number(a)||ei.current.clientWidth,height:(Number(c)||ei.current.clientHeight)-((null==(e=en.current)?void 0:e.clientHeight)||0)-((null==(t=el.current)?void 0:t.clientHeight)||0)}}},[c,a,ei,J,ee,el,V,eh]),ef=(0,i.useCallback)((e,t,r)=>(0,j.Ht)(e,r,{keys:[...t,e=>t.map(t=>e.values[t]).join(" ")],threshold:j.cG.ACRONYM}),[]),{rows:eg,getTableProps:em,getTableBodyProps:ey,prepareRow:ev,headerGroups:eb,footerGroups:ew,page:eS,pageCount:ek,gotoPage:ex,preGlobalFilteredRows:eC,setGlobalFilter:eE,setPageSize:eN,wrapStickyTable:eA,setColumnOrder:eT,allColumns:eD,state:{pageIndex:e$,pageSize:eF,globalFilter:eY,sticky:eM={},sortBy:ez}}=(0,B.useTable)(es({columns:r,data:n,initialState:et,getTableSize:ep,globalFilter:ef,sortTypes:ed,autoResetGlobalFilter:!(0,R.A)(G,K),autoResetSortBy:!(0,R.A)(G,K),manualSortBy:!!x},H),...U),eL=(0,i.useMemo)(()=>eg.map((e,t)=>{var r;return null!=(r=e.id)?r:t}).sort().join("|"),[eg]),eR=(0,i.useRef)(eg);eR.current=eg,(0,i.useEffect)(()=>{if(!O)return;let e="string"==typeof eY?eY:void 0;O(eR.current,e)},[eY,O,eL]);let eO=(0,i.useCallback)(e=>{$&&F?F(e):eE(e)},[$,F,eE]);(0,i.useEffect)(()=>{let e=(null==o?void 0:o.sortBy)||[];if(x&&!(0,R.A)(ez,e))if(Array.isArray(ez)&&ez.length>0){let[e]=ez,t=r.find(t=>(null==t?void 0:t.id)===(null==e?void 0:e.id));t&&"columnKey"in t&&T([es({},e,{key:t.columnKey})])}else T([])},[ez]);let eI=e=>{x&&g(0,e),(e||0!==V)&&eN(0===e?V:e)},eH="function"==typeof w?w(eY):w,eP=()=>(0,l.Y)("div",{className:"dt-no-results",children:eH});if(!r||0===r.length)return eA?eA(eP):eP();let eB=r.some(e=>!!e.Footer),ej=-1,e_=e=>{let t=e.target;ej=eD.findIndex(e=>e.id===t.dataset.columnName),e.dataTransfer.setData("text/plain",`${ej}`)},eU=e=>{let t=e.target,r=eD.findIndex(e=>e.id===t.dataset.columnName);if(-1!==r){let e=eD.map(e=>e.id),t=e.splice(ej,1);e.splice(r,0,t[0]),eT(e),null==E||E()}e.preventDefault()},eG=()=>(0,l.FD)("table",es({},em({className:t}),{children:[(0,l.FD)("thead",{children:[N?N():null,eb.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=eu(t,["key"]);return(0,l.Y)("tr",es({},n,{children:e.headers.map(e=>e.render("Header",es({key:e.id},e.getSortByToggleProps(),{onDragStart:e_,onDrop:eU})))}),r||e.id)})]}),(0,l.Y)("tbody",es({},ey(),{children:eS&&eS.length>0?eS.map(e=>{ev(e);let t=e.getRowProps(),{key:r}=t,n=eu(t,["key"]);return(0,l.Y)("tr",es({},n,{children:e.cells.map(e=>e.render("Cell",{key:e.column.id}))}),r||e.id)}):(0,l.Y)("tr",{children:(0,l.Y)("td",{className:"dt-no-results",colSpan:r.length,children:eH})})})),eB&&(0,l.Y)("tfoot",{children:ew.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=eu(t,["key"]);return(0,l.Y)("tr",es({},n,{children:e.headers.map(e=>e.render("Footer",{key:e.id}))}),r||e.id)})})]}));(q.current[0]!==s||0===s&&q.current[1]!==V)&&(q.current=[s,V],eI(s));let eW=eM.height?{}:{visibility:"hidden"},eK=ek,eV=eF,eX=e$,eQ=ex;if(x){var eZ,eq;let e=null!=(eZ=null==o?void 0:o.pageSize)?eZ:s;Number.isFinite(eK=Math.ceil(m/e))||(eK=0),eV=e,-1===d.findIndex(([e])=>e>=eV)&&(eV=0),eX=null!=(eq=null==o?void 0:o.currentPage)?eq:0,eQ=t=>g(t,e)}let eJ=(0,i.useRef)(!0);(0,i.useEffect)(()=>(eJ.current=!0,()=>{eJ.current=!1}),[]);let e0=(0,i.useRef)(null),e1=(0,i.useRef)("");function e4(e){let t=e.original;if(t){var r,n,l;let e=null!=(r=null!=(n=null!=(l=t.id)?l:t.ID)?n:t.key)?r:t.uuid;if(null!=e)return String(e)}let i=e.values;return Object.keys(i).sort().map(e=>{var t;return String(null!=(t=i[e])?t:"")}).join("|")}return(0,i.useEffect)(()=>{var e,t;let r,n,l,i,o;if(x||"function"!=typeof I)return;let a=(n=(r=eg.map(e4)).length,l=null!=(e=r[0])?e:"",i=null!=(t=r[n-1])?t:"",o=function(e){let t=0;for(let r=0;r<e.length;r+=1)t=31*t+e.charCodeAt(r)|0;return String(t)}(r.join("\x01")),`${n}|${l}|${i}|${o}`);return a!==e1.current&&(e1.current=a,null!=e0.current&&cancelAnimationFrame(e0.current),e0.current=requestAnimationFrame(()=>{eJ.current&&I(eg.map(e=>e.original))})),()=>{null!=e0.current&&(cancelAnimationFrame(e0.current),e0.current=null)}},[eg,x,I]),(0,l.FD)("div",{ref:ei,style:{width:a,height:c},children:[ee?(0,l.Y)("div",{ref:en,className:"form-inline dt-controls",children:(0,l.FD)(_.s,{wrap:!0,className:"row",align:"center",justify:"space-between",gap:"middle",css:e=>(0,v.AH)`
              font-size: ${e.fontSizeSM}px;
            `,children:[J?(0,l.Y)(Q,{total:V,current:eV,options:d,selectRenderer:"boolean"==typeof y?void 0:y,onChange:eI}):null,(0,l.FD)(_.s,{wrap:!0,align:"center",gap:"middle",children:[f&&(0,l.FD)(l.FK,{children:[x&&(0,l.FD)(S.Space,{direction:"vertical",size:4,children:[(0,b.t)("Search by"),(0,l.Y)(ec,{searchOptions:L,value:(null==o?void 0:o.searchColumn)||"",onChange:z})]}),(0,l.Y)(W,{searchInput:"boolean"==typeof f?void 0:f,preGlobalFilteredRows:eC,setGlobalFilter:$?eO:eE,filterValue:$?Y:eY,id:M,serverPagination:!!x,rowCount:m})]}),A?A():null]})]})}):null,eA?eA(eG):eG(),J&&eK>1?(0,l.Y)(Z,{ref:el,style:eW,maxPageItemCount:h,pageCount:eK,currentPage:eX,onPageChange:eQ}):null]})}),ep=y.styled.div`
  ${({theme:e})=>(0,v.AH)`
    /* Base table styles */
    padding: ${5*e.sizeUnit}px;
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
      border-collapse: collapse;
    }

    /* Cell styling */
    th,
    td {
      min-width: 4.3em;
      padding: 0.75rem;
      vertical-align: top;
    }

    /* Header styling */
    thead > tr > th {
      padding-right: 0;
      position: relative;
      background-color: ${e.colorBgBase};
      text-align: left;
      border-bottom: 2px solid ${e.colorSplit};
      color: ${e.colorText};
      vertical-align: bottom;
    }

    /* Icons in header */
    th svg {
      margin: 1px ${e.sizeUnit/2}px;
      fill-opacity: 0.2;
    }

    th.is-sorted svg {
      color: ${e.colorText};
      fill-opacity: 1;
    }

    /* Table body styling */
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
      border-top: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like condensed table styles */
    table.table-condensed,
    table.table-sm {
      font-size: ${e.fontSizeSM}px;
    }

    table.table-condensed th,
    table.table-condensed td,
    table.table-sm th,
    table.table-sm td {
      padding: 0.3rem;
    }

    /* Bootstrap-like bordered table styles */
    table.table-bordered {
      border: 1px solid ${e.colorSplit};
    }

    table.table-bordered th,
    table.table-bordered td {
      border: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like striped table styles */
    table.table-striped tbody tr:nth-of-type(odd) {
      background-color: ${e.colorBgLayout};
    }

    .dt-select-page-size .ant-select .ant-select-suffix {
      color: ${e.colorTextQuaternary};
      z-index: 11;
    }

    /* Controls and metrics */
    .dt-controls {
      padding-bottom: 0.65em;
    }

    .dt-metric {
      text-align: right;
    }

    .dt-totals {
      font-weight: ${e.fontWeightStrong};
    }

    .dt-is-null {
      color: ${e.colorTextTertiary};
    }

    td.dt-is-filter {
      cursor: pointer;
    }

    td.dt-is-filter:hover {
      background-color: ${e.colorFillContentHover};
    }

    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${e.colorFillContentHover};
    }

    .dt-global-filter {
      float: right;
    }

    /* Cell truncation */
    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    /* Pagination styling */
    .dt-pagination {
      text-align: right;
      /* use padding instead of margin so clientHeight can capture it */
      padding: ${e.paddingXXS}px 0px;
    }

    .dt-pagination .pagination > li {
      display: inline;
      margin: 0 ${e.marginXXS}px;
    }

    .dt-pagination .pagination > li > a,
    .dt-pagination .pagination > li > span {
      background-color: ${e.colorBgBase};
      color: ${e.colorText};
      border-color: ${e.colorBorderSecondary};
      padding: ${e.paddingXXS}px ${e.paddingXS}px;
      border-radius: ${e.borderRadius}px;
    }

    .dt-pagination .pagination > li.active > a,
    .dt-pagination .pagination > li.active > span,
    .dt-pagination .pagination > li.active > a:focus,
    .dt-pagination .pagination > li.active > a:hover,
    .dt-pagination .pagination > li.active > span:focus,
    .dt-pagination .pagination > li.active > span:hover {
      background-color: ${e.colorPrimary};
      color: ${e.colorBgContainer};
      border-color: ${e.colorBorderSecondary};
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${e.colorBgLayout};
      border-color: ${e.colorBorderSecondary};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }

    .right-border-only {
      border-right: 2px solid ${e.colorSplit};
    }

    table .right-border-only:last-child {
      border-right: none;
    }
  `}
`;var ef=r(58097),eg=r(19064),em=r(24196);function ey(e,t,r){let{dataType:n,formatter:l,config:i={},currencyCodeColumn:o}=e,a=n===w.GenericDataType.Numeric,c=(0,eg.A)(l,i.d3SmallNumberFormat,i.currencyFormat);var s=a&&"number"==typeof t&&1>Math.abs(t)?c:l;return void 0===t?[!1,""]:null===t||t instanceof em.A&&null===t.input?[!1,"N/A"]:s?s instanceof ef.Ay?[!1,s(t,r,o)]:[!1,s(t)]:"string"==typeof t?(0,g.fE)(t)?[!0,(0,g.pn)(t)]:[!1,t]:[!1,t.toString()]}var ev=r(48179);function eb(){return(eb=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ew={enter:"Enter",spacebar:"Spacebar",space:" "};function eS(e){return e.replace(/%/g,"percent").replace(/#/g,"hash").replace(/△/g,"delta").replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"")}function ek({column:e}){let{isSorted:t,isSortedDesc:r}=e,n=(0,l.Y)(o.A,{});return t&&(n=r?(0,l.Y)(a.A,{}):(0,l.Y)(c.A,{})),n}let ex=y.styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function eC({value:e,onChange:t,onBlur:r,inputRef:n}){return(0,l.FD)(S.Space,{direction:"vertical",size:4,className:"dt-global-filter",children:[(0,l.Y)("span",{"aria-hidden":"true",children:(0,b.t)("Search")}),(0,l.Y)(S.Input,{"aria-label":(0,b.t)("Search records"),placeholder:(0,b.t)("Search records"),value:e,size:"small",onChange:t,onBlur:r,ref:n})]})}function eE({options:e,current:t,onChange:r}){let{Option:n}=S.Select;return(0,l.FD)(S.Space,{direction:"vertical",size:4,className:"dt-select-page-size",children:[(0,l.Y)(ex,{htmlFor:"pageSizeSelect",children:(0,b.t)("Select page size")}),(0,b.t)("Entries per page"),(0,l.Y)(S.Select,{id:"pageSizeSelect",value:t,onChange:e=>r(e),size:"small",css:e=>(0,v.AH)`
          width: ${30*e.sizeUnit}px;
        `,"aria-label":(0,b.t)("Show entries per page"),children:e.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e];return(0,l.Y)(n,{value:Number(t),children:r},t)})})]})}let eN=e=>e?(0,b.t)("No matching records found"):(0,b.t)("No records found");function eA(e){let{timeGrain:t,height:r,width:n,data:o,totals:a,isRawRecords:c,rowCount:s=0,columns:S,alignPositiveNegative:A=!1,colorPositiveNegative:T=!1,includeSearch:D=!1,pageSize:F=0,serverPagination:H=!1,serverPaginationData:P,setDataMask:B,showCellBars:j=!0,sortDesc:_=!1,filters:U,sticky:G=!0,columnColorFormatters:W,allowRearrangeColumns:K=!1,allowRenderHtml:V=!0,onContextMenu:X,emitCrossFilters:Q,isUsingTimeComparison:Z,basicColorFormatters:q,basicColorColumnFormatters:ee,hasServerPageLengthChanged:et,serverPageLength:er,slice_id:en,columnLabelToNameMap:el={}}=e,ei=(0,i.useMemo)(()=>[{key:"all",label:(0,b.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[]),eo=(0,i.useCallback)(e=>c?String(null!=e?e:""):(0,h.PT)(t)(e),[t,c]),[ec,es]=(0,i.useState)({width:0,height:0}),[eu,ed]=(0,i.useState)(!1),[ef,eg]=(0,i.useState)(!1),[ex,eA]=(0,i.useState)([ei[0].key]),[eT,eD]=(0,i.useState)([]),[e$,eF]=(0,i.useState)(a),eY=(0,y.useTheme)();(0,i.useEffect)(()=>{eF(a)},[a]);let eM=(0,i.useMemo)(()=>(H?ea.D:ea.x).filter(([e])=>H?e<=s:e<=2*o.length),[o.length,s,H]),ez=(0,i.useCallback)(function(e,t){let r=null==o?void 0:o.map(t=>null==t?void 0:t[e]).filter(e=>"number"==typeof e);return r.length>0?t?[0,function(e){let t;for(let r of e)null!=r&&(t<r||void 0===t&&r>=r)&&(t=r);return t}(r.map(Math.abs))]:function(e){let t,r;for(let n of e)null!=n&&(void 0===t?n>=n&&(t=r=n):(t>n&&(t=n),r<n&&(r=n)));return[t,r]}(r):null},[o]),eL=(0,i.useCallback)(function(e,t){return!!U&&!!U[e]&&U[e].some(e=>e===t||e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())},[U]),eR=(0,i.useCallback)((e,r)=>{let n=eb({},U);Array.isArray((n=U&&eL(e,r)?{}:{[e]:[r]})[e])&&0===n[e].length&&delete n[e];let l=Object.keys(n),i=Object.values(n),o=[];return l.forEach(e=>{let t=e===p.Tf,r=(0,f.A)(null==n?void 0:n[e]);if(r.length){let e=r.map(e=>t?eo(e):e);o.push(`${e.join(", ")}`)}}),{dataMask:{extraFormData:{filters:0===l.length?[]:l.map(e=>{var r;let l=null!=(r=el[e])?r:e,i=(0,f.A)(null==n?void 0:n[e]),o=S.find(t=>t.key===e);return!i.length||null===i[0]||i[0]instanceof em.A&&null===i[0].input?{col:l,op:"IS NULL"}:{col:l,op:"IN",val:i.map(e=>{let t;return t=e instanceof em.A?e.input:e,(null==o?void 0:o.dataType)===w.GenericDataType.Temporal&&"string"==typeof t&&""!==t.trim()&&Number.isFinite(Number(t))?Number(t):e instanceof Date?e.getTime():e}),grain:l===p.Tf?t:void 0}})},filterState:{label:o.join(", "),value:i.length?i:null,filters:n&&Object.keys(n).length?n:null}},isCurrentValueSelected:eL(e,r)}},[U,eL,eo,t,el,S]),eO=(0,i.useCallback)(function(e,t){Q&&B(eR(e,t).dataMask)},[Q,eR,B]),eI=(0,i.useCallback)(e=>{let{isNumeric:t,config:r={}}=e;return{textAlign:r.horizontalAlign||(t&&!Z?"right":"left")}},[Z]),eH=(0,i.useMemo)(()=>[(0,b.t)("Main"),"#","△","%"],[]),eP=(0,i.useMemo)(()=>{if(!Z)return S;let e=ei[0].key,t=eH[0],r=ex.includes(e);return S.filter(({label:e,key:n})=>{let l=n.substring(e.length),i=eT.includes(l);return e===t||!i&&(!eH.includes(e)||r||ex.includes(e))})},[S,ei,eH,Z,eT,ex]),eB=(0,i.useMemo)(()=>{if(X&&!c)return(e,r,n,l)=>{let i=[];eP.forEach(r=>{if(!r.isMetric){let n=e[r.key];if(null==n||n instanceof em.A&&null==n.input)i.push({col:r.key,op:"IS NULL",val:null});else if(r.dataType===w.GenericDataType.Temporal&&t){let[e,l]=function(e,t){let r=e.getTime(),n=e.getUTCDate(),l=e.getUTCMonth(),i=e.getUTCFullYear();switch(t){case d.i.SECOND:return[e,new Date(r+1e3)];case d.i.MINUTE:return[e,new Date(r+6e4)];case d.i.FIVE_MINUTES:return[e,new Date(r+3e5)];case d.i.TEN_MINUTES:return[e,new Date(r+6e5)];case d.i.FIFTEEN_MINUTES:return[e,new Date(r+9e5)];case d.i.THIRTY_MINUTES:return[e,new Date(r+18e5)];case d.i.HOUR:return[e,new Date(r+36e5)];case d.i.DAY:case d.i.DATE:return[e,new Date(Date.UTC(i,l,n+1))];case d.i.WEEK:case d.i.WEEK_STARTING_SUNDAY:case d.i.WEEK_STARTING_MONDAY:return[e,new Date(Date.UTC(i,l,n+7))];case d.i.WEEK_ENDING_SATURDAY:case d.i.WEEK_ENDING_SUNDAY:return[new Date(Date.UTC(i,l,n-6)),new Date(Date.UTC(i,l,n+1))];case d.i.MONTH:return[e,new Date(Date.UTC(i,l+1,1))];case d.i.QUARTER:return[e,new Date(Date.UTC(i,3*Math.floor(l/3)+3,1))];case d.i.YEAR:return[e,new Date(Date.UTC(i+1,0,1))];default:return[e,new Date(Date.UTC(i,l,n+1))]}}(n instanceof Date?n:new Date(n),t),o=`${e.toISOString()} : ${l.toISOString()}`;i.push({col:r.key,op:"TEMPORAL_RANGE",val:o,grain:t,formattedVal:ey(r,n)[1]})}else{let e=(0,g.y4)(n);i.push({col:r.key,op:"==",val:e,formattedVal:ey(r,e)[1]})}}}),X(n,l,{drillToDetail:i,crossFilter:r.isMetric?void 0:eR(r.key,r.value),drillBy:r.isMetric?void 0:{filters:[{col:r.key,op:null==r.value||r.value instanceof em.A&&null==r.value.input?"IS NULL":"==",val:(0,g.y4)(r.value)}],groupbyFieldName:"groupby"}})}},[X,c,eP,eR,t]),ej=(0,i.useCallback)((e,t)=>{let r={};return t&&e.forEach((e,t)=>{if(eH.includes(e.label)){let n=e.key.substring(e.label.length);r[n]?r[n].push(t):r[n]=[t]}}),r},[eH]),e_=(0,i.useMemo)(()=>eP.filter(e=>{var t;return(null==(t=e.config)?void 0:t.visible)!==!1}),[eP]),eU=(0,i.useMemo)(()=>ej(e_,Z),[e_,ej,Z]),eG=(0,i.useCallback)((e,t)=>{var r;let{key:n,label:i,dataType:o,isMetric:a,isPercentMetric:s,config:d={},description:h}=e,p=d.customColumnName||i,f=p;["#","△","%",(0,b.t)("Main")].includes(e.label)&&(e.label===(0,b.t)("Main")?f=d.customColumnName||e.originalLabel||"":d.customColumnName?f=!1!==d.displayTypeIcon?`${e.label} ${d.customColumnName}`:d.customColumnName:!1===d.displayTypeIcon&&(f=""));let g=Number.isNaN(Number(d.columnWidth))?d.columnWidth:Number(d.columnWidth),k=eI(e),C=void 0===d.alignPositiveNegative?A:d.alignPositiveNegative,E=void 0===d.colorPositiveNegative?T:d.colorPositiveNegative,{truncateLongCells:N}=d,D=Array.isArray(W)&&W.length>0,$=Z&&Array.isArray(q)&&q.length>0,F=void 0===d.showCellBars?j:d.showCellBars,Y=!$&&F&&(a||c||s)&&ez(n,C),z="";if(Q&&!a&&(z+=" dt-is-filter"),a||s){if(eH.includes(p)){let e=eU[n.substring(p.length)]||[];t===e[e.length-1]&&(z+=" right-border-only")}}else z+=" right-border-only";let L=eS(null!=(r=e.originalLabel)?r:e.key);return{id:String(t),columnKey:n,columnLabel:p,accessor:e=>e[n],Cell:({value:t,row:r})=>{var i,o,c,s,d,h;let p,f,b,[w,x]=ey(e,t,r.original),A=w&&V?{__html:x}:void 0,T=!0,M="",R=e.key.substring(e.label.length).trim();if(!D&&$&&(p=null==(o=q[r.index][R])?void 0:o.backgroundColor,M=e.label===eH[0]?null==(c=q[r.index][R])?void 0:c.mainArrow:""),D){let n=(e,t)=>{let r=e.getColorFromValue(t);r&&(e.objectFormatting===O.yQ.TEXT_COLOR||e.toTextColor?f=r:e.objectFormatting===O.yQ.CELL_BAR?F&&(b=r.slice(0,-2)):(p=r,T=!1))};W.filter(t=>t.columnFormatting?t.columnFormatting===e.key:t.column===e.key).forEach(e=>{let l;l=e.columnFormatting?r.original[e.column]:t,n(e,l)}),W.filter(e=>e.columnFormatting===O.yQ.ENTIRE_ROW).forEach(e=>n(e,r.original[e.column]))}ee&&(null==ee?void 0:ee.length)>0&&(p=(null==(s=ee[r.index][e.key])?void 0:s.backgroundColor)||p,M=e.label===eH[0]?null==(d=ee[r.index][e.key])?void 0:d.mainArrow:"");let H=r.index%2==0?eY.colorBgLayout:eY.colorBgBase,P=(0,I.sg)({backgroundColor:p,color:f},H),B=y.styled.td`
            text-align: ${k.textAlign};
            white-space: ${t instanceof Date?"nowrap":void 0};
            position: relative;
            font-weight: ${f?`${eY.fontWeightBold}`:`${eY.fontWeightNormal}`};
            background: ${p||void 0};
            padding-left: ${e.isChildColumn?`${5*eY.sizeUnit}px`:`${eY.sizeUnit}px`};
          `,j=(0,v.AH)`
            position: absolute;
            height: 100%;
            display: block;
            top: 0;
            ${Y&&"number"==typeof t&&T&&`
                width: ${function({value:e,valueRange:t,alignPositiveNegative:r}){let[n,l]=t;return r?Math.abs(Math.round(e/l*100)):Math.round(Math.abs(e)/(Math.abs(Math.max(l,0))+Math.abs(Math.min(n,0)))*100)}({value:t,valueRange:Y,alignPositiveNegative:C})}%;
                left: ${function({value:e,valueRange:t,alignPositiveNegative:r}){if(r)return 0;let[n,l]=t,i=Math.abs(Math.min(n,0));return Math.round(Math.min(i+e,i)/(Math.abs(Math.max(l,0))+i)*100)}({value:t,valueRange:Y,alignPositiveNegative:C})}%;
                background-color: ${b&&`${b}99`||function({value:e,colorPositiveNegative:t=!1,theme:r}){return t?e<0?`${r.colorError}50`:`${r.colorSuccess}50`:`${r.colorFill}`}({value:t,colorPositiveNegative:E,theme:eY})};
              `}
          `,_=(0,v.AH)`
            color: ${q&&(null==(i=q[r.index][R])?void 0:i.arrowColor)===O.mH.Green?eY.colorSuccess:eY.colorError};
            margin-right: ${eY.sizeUnit}px;
          `;ee&&(null==ee?void 0:ee.length)>0&&(_=(0,v.AH)`
              color: ${(null==(h=ee[r.index][e.key])?void 0:h.arrowColor)===O.mH.Green?eY.colorSuccess:eY.colorError};
              margin-right: ${eY.sizeUnit}px;
            `);let U={"aria-labelledby":`header-${L}`,role:"cell",title:"number"==typeof t?String(t):void 0,onClick:!Q||Y||a?void 0:()=>{var e;let r=null==(e=S.find(e=>e.key===n))?void 0:e.isFilterable;(0,m.j)()||!1===r||eO(n,t)},onContextMenu:e=>{eB&&(e.preventDefault(),e.stopPropagation(),eB(r.original,{key:n,value:t,isMetric:a},e.nativeEvent.clientX,e.nativeEvent.clientY))},className:[z,null==t||t instanceof em.A&&null==t.input?"dt-is-null":"",eL(n,t)?" dt-is-active-filter":""].join(" "),style:P?{color:P}:void 0,tabIndex:0};return A?N?(0,l.Y)(B,eb({},U,{children:(0,l.Y)("div",{className:"dt-truncate-cell",style:g?{width:g}:void 0,dangerouslySetInnerHTML:A})})):(0,l.Y)(B,eb({},U,{dangerouslySetInnerHTML:A})):(0,l.FD)(B,eb({},U,{children:[Y&&(0,l.Y)("div",{className:u()("cell-bar","number"==typeof t&&t<0?"negative":"positive"),css:j,role:"presentation"}),N?(0,l.FD)("div",{className:"dt-truncate-cell",style:g?{width:g}:void 0,children:[M&&(0,l.Y)("span",{css:_,children:M}),x]}):(0,l.FD)(l.FK,{children:[M&&(0,l.Y)("span",{css:_,children:M}),x]})]}))},Header:({column:e,onClick:t,style:r,onDragStart:n,onDrop:i})=>(0,l.FD)("th",eb({id:`header-${L}`,title:h||(0,b.t)("Shift + Click to sort by multiple columns"),className:[z,e.isSorted?"is-sorted":""].join(" "),style:eb({},k,r),onKeyDown:t=>{Object.values(ew).includes(t.key)&&e.toggleSortBy()},onClick:t,"data-column-name":e.id},K&&{draggable:"true",onDragStart:n,onDragOver:e=>e.preventDefault(),onDragEnter:e=>e.preventDefault(),onDrop:i},{tabIndex:0,children:[d.columnWidth?(0,l.Y)("div",{style:{width:g,height:.01}}):null,(0,l.FD)("div",{"data-column-name":e.id,css:{display:"inline-flex",alignItems:"flex-end"},children:[(0,l.Y)("span",{"data-column-name":e.id,children:f}),(0,l.Y)(ek,{column:e})]})]})),Footer:e$?0===t?(0,l.Y)("th",{children:(0,l.FD)("div",{css:(0,v.AH)`
                  display: flex;
                  align-items: center;
                  & svg {
                    margin-left: ${eY.sizeUnit}px;
                    color: ${eY.colorBorder} !important;
                  }
                `,children:[(0,b.t)("Summary"),(0,l.Y)(x.m,{overlay:(0,b.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result."),children:(0,l.Y)(M.A,{})})]})},`footer-summary-${t}`):(0,l.Y)("td",{style:k,children:(0,l.Y)("strong",{children:ey(e,e$[n])[1]})},`footer-total-${t}`):void 0,sortDescFirst:_,sortType:a||s?"basic":o===w.GenericDataType.Temporal?"datetime":o===w.GenericDataType.String?"alphanumeric":"basic"}},[eI,A,T,W,Z,q,j,c,ez,Q,eH,e$,eY,_,eU,V,ee,eL,eO,eB,K]),eW=(0,i.useMemo)(()=>e_.map(eG),[e_,eG]),[eK,eV]=(0,i.useState)([]),eX=(0,i.useCallback)((e,t)=>{if(!a||H)return;if(!(null==t?void 0:t.trim()))return void eF(a);let r=eb({},a);eP.forEach(t=>{if(t.isMetric||t.isPercentMetric){let n=e.reduce((e,r)=>{var n;let l=null==(n=r.original)?void 0:n[t.key],i=Number(String(null!=l?l:"").replace(/,/g,""));return Number.isFinite(i)?e+i:e},0);r[t.key]=n}}),eF(r)},[eP,H,a]);(0,i.useEffect)(()=>{let e=eW.filter(e=>(null==e?void 0:e.sortType)==="alphanumeric").map(e=>({value:e.columnKey,label:e.columnLabel}));(0,R.A)(e,eK)||eV(e||[])},[eW,eK]);let eQ=(0,i.useCallback)((e,t)=>{let r=eb({},P,{currentPage:e,pageSize:t});(0,ev.F)(B,r)},[P,B]);(0,i.useEffect)(()=>{if(et){let e=eb({},P,{currentPage:0,pageSize:er});(0,ev.F)(B,e)}},[et,er,P,B]);let eZ=(0,i.useCallback)(({width:e,height:t})=>{es({width:e,height:t})},[]);(0,i.useLayoutEffect)(()=>{let e=J(),{width:t,height:l}=ec;n-t>e||r-l>e?eZ({width:n-e,height:r-e}):(t-n>e||l-r>e)&&eZ({width:n,height:r})},[n,r,eZ,ec]);let{width:eq,height:eJ}=ec,e0=(0,i.useCallback)(e=>{if(!H)return;let t=eb({},P,{sortBy:e});(0,ev.F)(B,t)},[H,P,B]),e1=(0,L.A)(e=>{var t;let r=eb({},P,{searchColumn:(null==P?void 0:P.searchColumn)||(null==(t=eK[0])?void 0:t.value),searchText:e,currentPage:0});(0,ev.F)(B,r)},800),[e4,e6]=(0,i.useState)([]),e2=(0,i.useMemo)(()=>e_.map(e=>{var t;return{key:e.key,label:(null==(t=e.config)?void 0:t.customColumnName)||e.originalLabel||e.key}}),[e_]),e8=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(H)return;let e=e8.current,t=!e||!(0,R.A)(e.rows,e4),r=!e||!(0,R.A)(e.columns,e2);(t||r)&&(e8.current={rows:e4,columns:e2},(0,ev.F)(B,eb({},P,{clientView:{rows:e4,columns:e2,count:e4.length}})))},[e4,e2,H,B,P]),(0,l.Y)(ep,{children:(0,l.Y)(eh,{columns:eW,data:o,rowCount:s,tableClassName:"table table-striped table-condensed",pageSize:F,serverPaginationData:P,pageSizeOptions:eM,width:Math.max(0,eq-10*eY.sizeUnit),height:Math.max(0,eJ-10*eY.sizeUnit),serverPagination:H,onServerPaginationChange:eQ,onColumnOrderChange:()=>ed(!eu),initialSearchText:(null==P?void 0:P.searchText)||"",sortByFromParent:(null==P?void 0:P.sortBy)||[],searchInputId:`${en}-search`,maxPageItemCount:n>340?9:7,noResults:eN,searchInput:D&&eC,selectPageSize:null!==F&&eE,sticky:G,renderGroupingHeaders:(0,z.A)(eU)?void 0:()=>{let e=[],t=0;return Object.entries(eU||{}).sort((e,t)=>e[1][0]-t[1][0]).forEach(([r,n])=>{var i;let o=n[0],a=n.length,c=e_[o],s=c&&(null==(i=S.find(e=>e.key===c.key))?void 0:i.originalLabel)||r;for(let r=t;r<o;r+=1)e.push((0,l.Y)("th",{style:{borderBottom:0},"aria-label":`Header-${r}`},`placeholder-${r}`));e.push((0,l.FD)("th",{colSpan:a,style:{borderBottom:0},children:[s,(0,l.Y)("span",{css:(0,v.AH)`
              float: right;
              & svg {
                color: ${eY.colorIcon} !important;
              }
            `,children:eT.includes(r)?(0,l.Y)($,{onClick:()=>eD(eT.filter(e=>e!==r))}):(0,l.Y)(Y,{onClick:()=>eD([...eT,r])})})]},`header-${r}`)),t=o+a}),(0,l.Y)("tr",{css:(0,v.AH)`
          th {
            border-right: 1px solid ${eY.colorSplit};
          }
          th:first-of-type {
            border-left: none;
          }
          th:last-child {
            border-right: none;
          }
        `,children:e})},renderTimeComparisonDropdown:Z?()=>{let e=ei[0].key;return(0,l.Y)(k.ms,{placement:"bottomRight",open:ef,onOpenChange:e=>{eg(e)},menu:{multiple:!0,onClick:t=>{let{key:r}=t;r===e?eA([e]):ex.includes(e)?eA([r]):eA(ex.includes(r)?ex.filter(e=>e!==r):[...ex,r])},onBlur:()=>{3===ex.length&&eA([ei[0].key])},selectedKeys:ex,items:[{key:"all",label:(0,l.Y)("div",{css:(0,v.AH)`
                    max-width: 242px;
                    padding: 0 ${2*eY.sizeUnit}px;
                    color: ${eY.colorText};
                    font-size: ${eY.fontSizeSM}px;
                  `,children:(0,b.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:ei.map(e=>({key:e.key,label:(0,l.FD)(l.FK,{children:[(0,l.Y)("span",{css:(0,v.AH)`
                          color: ${eY.colorText};
                        `,children:e.label}),(0,l.Y)("span",{css:(0,v.AH)`
                          float: right;
                          font-size: ${eY.fontSizeSM}px;
                        `,children:ex.includes(e.key)&&(0,l.Y)(C.A,{})})]})}))}]},trigger:["click"],children:(0,l.FD)("span",{children:[(0,l.Y)(E.A,{})," ",(0,l.Y)(N.A,{})]})})}:void 0,handleSortByChange:e0,onSearchColChange:e=>{if(!(0,R.A)(e,null==P?void 0:P.searchColumn)){let t=eb({},P,{searchColumn:e,searchText:""});(0,ev.F)(B,t)}},manualSearch:H,onSearchChange:e1,searchOptions:eK,onFilteredDataChange:eX,onFilteredRowsChange:e6})})}}}]);