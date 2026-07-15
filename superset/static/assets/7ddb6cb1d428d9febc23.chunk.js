"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6187],{28471(t,e,r){r.d(e,{A:()=>o});var n=r(2445),i=r(64260);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function o(t,e){let r=(0,i.forwardRef)(function(r,a){let o=(0,i.useRef)(null),l=(0,i.useRef)(r);(0,i.useLayoutEffect)(()=>{l.current=r}),(0,i.useImperativeHandle)(a,()=>({get container(){var t;return null!=(t=o.current)?t:void 0}}),[]),(0,i.useEffect)(()=>{o.current&&t(o.current,r)}),(0,i.useEffect)(()=>()=>{(null==e?void 0:e.componentWillUnmount)&&e.componentWillUnmount.call({container:void 0,props:l.current})},[]);let{id:s,className:c}=r;return(0,n.Y)("div",{ref:o,id:s,className:c})});return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes=a({},r.propTypes,t.propTypes)),t.defaultProps&&(r.defaultProps=t.defaultProps),r}},26187(t,e,r){let n;r.r(e),r.d(e,{default:()=>Y});var i=r(2445),a=r(28471),o=r(85614),l=r(24143),s=r.n(l),c=r(5556),p=r.n(c);function d(t){var e=0,r=t.children,n=r&&r.length;if(n)for(;--n>=0;)e+=r[n].value;else e=1;t.value=e}function u(){return this.eachAfter(d)}function h(t,e){let r=-1;for(let n of this)t.call(e,n,++r,this);return this}function f(t,e){for(var r,n,i=this,a=[i],o=-1;i=a.pop();)if(t.call(e,i,++o,this),r=i.children)for(n=r.length-1;n>=0;--n)a.push(r[n]);return this}function g(t,e){for(var r,n,i,a=this,o=[a],l=[],s=-1;a=o.pop();)if(l.push(a),r=a.children)for(n=0,i=r.length;n<i;++n)o.push(r[n]);for(;a=l.pop();)t.call(e,a,++s,this);return this}function y(t,e){let r=-1;for(let n of this)if(t.call(e,n,++r,this))return n}function v(t){return this.eachAfter(function(e){for(var r=+t(e.data)||0,n=e.children,i=n&&n.length;--i>=0;)r+=n[i].value;e.value=r})}function m(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})}function b(t){for(var e=this,r=function(t,e){if(t===e)return t;var r=t.ancestors(),n=e.ancestors(),i=null;for(t=r.pop(),e=n.pop();t===e;)i=t,t=r.pop(),e=n.pop();return i}(e,t),n=[e];e!==r;)n.push(e=e.parent);for(var i=n.length;t!==r;)n.splice(i,0,t),t=t.parent;return n}function x(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e}function $(){return Array.from(this)}function w(){var t=[];return this.eachBefore(function(e){e.children||t.push(e)}),t}function O(){var t=this,e=[];return t.each(function(r){r!==t&&e.push({source:r.parent,target:r})}),e}function*T(){var t,e,r,n,i=this,a=[i];do for(t=a.reverse(),a=[];i=t.pop();)if(yield i,e=i.children)for(r=0,n=e.length;r<n;++r)a.push(e[r]);while(a.length)}function A(t,e){t instanceof Map?(t=[void 0,t],void 0===e&&(e=N)):void 0===e&&(e=S);for(var r,n,i,a,o,l=new j(t),s=[l];r=s.pop();)if((i=e(r.data))&&(o=(i=Array.from(i)).length))for(r.children=i,a=o-1;a>=0;--a)s.push(n=i[a]=new j(i[a])),n.parent=r,n.depth=r.depth+1;return l.eachBefore(B)}function S(t){return t.children}function N(t){return Array.isArray(t)?t[1]:null}function k(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function B(t){var e=0;do t.height=e;while((t=t.parent)&&t.height<++e)}function j(t){this.data=t,this.depth=this.height=0,this.parent=null}r.dn(u),r.dn(h),r.dn(f),r.dn(g),r.dn(y),r.dn(v),r.dn(m),r.dn(b),r.dn(x),r.dn($),r.dn(w),r.dn(O),r.dn(T),j.prototype=A.prototype={constructor:j,count:u,each:h,eachAfter:g,eachBefore:f,find:y,sum:v,sort:m,path:b,ancestors:x,descendants:$,leaves:w,links:O,copy:function(){return A(this).eachBefore(k)},[Symbol.iterator]:T};var z=r(18349),P=r(50267),R=r(14230),E=r(79927);let M=p().shape({name:p().string,val:p().number.isRequired}),L={name:p().string,val:p().number.isRequired,children:p().arrayOf(p().oneOfType([p().shape((n=()=>L,function(...t){return n().apply(this,t)})),M]))},U=p().oneOfType([p().shape(L),M]),q={data:p().arrayOf(U),width:p().number,height:p().number,colorScheme:p().string,dateTimeFormat:p().string,equalDateSize:p().bool,levels:p().arrayOf(p().string),metrics:p().arrayOf(p().oneOfType([p().string,p().object])),numberFormat:p().string,partitionLimit:p().number,partitionThreshold:p().number,timeSeriesOption:p().string,useLogScale:p().bool,useRichTooltip:p().bool};function F(t,e){let{width:r,height:n,data:i,colorScheme:a,dateTimeFormat:o,equalDateSize:l,levels:c,useLogScale:p=!1,metrics:d=[],numberFormat:u,partitionLimit:h,partitionThreshold:f,useRichTooltip:g,timeSeriesOption:y="not_time",sliceId:v}=e,m=s().select(t);m.classed("superset-legacy-chart-partition",!0);let b=["adv_anal","time_series"].includes(y),x=(0,z.gV)(u),$=(0,P.mo)(o),w=R.getScale(a);m.selectAll("*").remove();let O=m.append("div").classed("partition-tooltip",!0);function T(t){return d.includes(t.data.name)&&b}function S(t){return t?b&&1===t?"Date":c[t-(b?2:1)]:"Metric"}for(let e=0;e<i.length;e+=1)!function(e,a){let o,c,d,u=a[e],y=n/i.length,b=s().scale.linear().range([0,r]),N=s().scale.linear().range([0,y]),k=m.append("div").attr("class","chart").style("width",`${r}px`).style("height",`${y}px`).append("svg:svg").attr("width",r).attr("height",y);e!==i.length-1&&i.length>1&&k.style("padding-bottom","3px"),0!==e&&i.length>1&&k.style("padding-top","3px");let B=A(u);function j(e,r){let n="<table>";g?(function(t){let e=[t],r=t;for(;r.parent;)e.push(r.parent),r=r.parent;return e})(r).reverse().forEach(t=>{n+=`<tbody><tr><td><div style='border: 2px solid transparent;background-color: ${t.color};'></div></td><td>${S(t.depth)}</td><td>${t.name}</td><td>${t.disp}</td></tr>`}):n+=`<thead><tr><td colspan="3"><strong>${S(r.depth)}</strong></td></tr></thead><tbody><tr><td><div style='border: thin solid grey; background-color: ${r.color};'></div></td><td>${r.name}</td><td>${r.disp}</td></tr>`,n+="</tbody></table>";let[i,a]=s().mouse(t);e.html((0,E.pn)(n)).style("left",`${i+15}px`).style("top",`${a}px`)}B.eachAfter(t=>{t.disp=t.data.val,t.value=t.disp<0?-t.disp:t.disp,t.weight=t.value,t.name=t.data.name,t.parent&&T(t.parent)&&(t.weight=l?1:t.value,t.value=t.name,t.name=$(t.name)),p&&(t.weight=Math.log(t.weight+1)),t.disp=t.disp&&!Number.isNaN(t.disp)&&Number.isFinite(t.disp)?x(t.disp):""}),B.sort((t,e)=>{let r=e.value-t.value;return 0===r?e.name>t.name?1:-1:r}),f&&f>=0&&B.each(t=>{if(t.sum=t.children&&t.children.reduce((t,e)=>t+e.weight,0)||1,t.children)if(T(t)){if(l)return;let e=[];for(let r=1;r<t.children.length;r+=1)t.children[r].weight/t.sum<f&&e.push(r);for(let r=e.length-1;r>=0;r-=1)t.children.splice(e[r],1)}else{let e;for(e=1;e<t.children.length&&!(t.children[e].weight/t.sum<f);e+=1);t.children=t.children.slice(0,e)}}),h&&h>=0&&B.each(t=>{t.children&&t.children.length>h&&!T(t)&&(t.children=t.children.slice(0,h))}),B.eachAfter(t=>{t.sum=t.children&&t.children.reduce((t,e)=>t+e.weight,0)||1});let z=(o=[],c=1/(B.height+1),d=null,B.each(t=>{t.y=c*t.depth,t.dy=c,t.parent?(t.x=d.depth===t.parent.depth?0:d.x+d.dx,t.dx=t.weight/t.parent.sum*t.parent.dx):(t.x=0,t.dx=1),d=t,o.push(t)}),o),P=r/B.dx,R=y/1;function M(t){return`translate(8,${t.dx*R/2})`}let L=k.selectAll("g").data(z).enter().append("svg:g").attr("transform",t=>`translate(${b(t.y)},${N(t.x)})`).on("mouseover",t=>{O.interrupt().transition().duration(100).style("opacity",.9),j(O,t)}).on("mousemove",t=>{j(O,t)}).on("mouseout",()=>{O.interrupt().transition().duration(250).style("opacity",0)});L.on("click",function t(e){if(!e.children)return!!e.parent&&t(e.parent);P=(e.y?r-40:r)/(1-e.y),R=y/e.dx,b.domain([e.y,1]).range([40*!!e.y,r]),N.domain([e.x,e.x+e.dx]);let n=L.transition().duration(s().event.altKey?7500:750).attr("transform",t=>`translate(${b(t.y)},${N(t.x)})`);return n.select("rect").attr("width",e.dy*P).attr("height",t=>t.dx*R),n.select("text").attr("transform",M).style("opacity",t=>+(t.dx*R>12)),s().event.stopPropagation(),!0}),L.append("svg:rect").attr("width",B.dy*P).attr("height",t=>t.dx*R),L.append("svg:text").attr("transform",M).attr("dy","0.35em").style("opacity",t=>+(t.dx*R>12)).text(t=>t.disp?`${t.name}: ${t.disp}`:t.name),L.selectAll("rect").style("fill",t=>(t.color=w(t.name,v),t.color))}(e,i)}function I(){return(I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}F.displayName="Icicle",F.propTypes=q;let W=(0,a.A)(F),Y=(0,o.styled)(t=>{let{className:e}=t,r=function(t,e){if(null==t)return{};var r,n,i={},a=Object.getOwnPropertyNames(t);for(n=0;n<a.length;n++)!(e.indexOf(r=a[n])>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r]);return i}(t,["className"]);return(0,i.Y)("div",{className:e,children:(0,i.Y)(W,I({},r))})})`
  ${({theme:t})=>`
    .superset-legacy-chart-partition {
      position: relative;
    }

    .superset-legacy-chart-partition .chart {
      display: block;
      margin: auto;
      font-size: ${t.fontSizeSM}px;
    }

    .superset-legacy-chart-partition rect {
      stroke: ${t.colorBorderSecondary};
      fill: ${t.colorBgLayout};
      fill-opacity: 80%;
      transition: fill-opacity 180ms linear;
      cursor: pointer;
    }

    .superset-legacy-chart-partition rect:hover {
      fill-opacity: 1;
    }

    .superset-legacy-chart-partition g text {
      font-weight: ${t.fontWeightStrong};
      fill: ${t.colorText};
    }

    .superset-legacy-chart-partition g:hover text {
      fill: ${t.colorTextHeading};
    }

    .superset-legacy-chart-partition .partition-tooltip {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      padding: ${t.sizeUnit}px;
      pointer-events: none;
      background-color: ${t.colorBgElevated};
      border-radius: ${t.borderRadius}px;
    }

    .partition-tooltip td {
      padding-left: ${t.sizeUnit}px;
      font-size: ${t.fontSizeSM}px;
      color: ${t.colorTextSecondary};
    }
  `}
`}}]);