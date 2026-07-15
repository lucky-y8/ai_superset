"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7316],{62666(e,t,n){n.d(t,{A:()=>o});var i=n(13030);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t,n){let i=e,l=t(i);for(;!n(l);){if((i-=1)<0){i=e;break}l=t(i)}return i}function o(e){let t,{idealFontSize:n,maxWidth:o,maxHeight:a,style:s}=e,u=function(e,t){if(null==e)return{};var n,i,l={},r=Object.getOwnPropertyNames(e);for(i=0;i<r.length;i++)!(t.indexOf(n=r[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n]);return l}(e,["idealFontSize","maxWidth","maxHeight","style"]);if(null!=n)t=n;else if(null==a)throw Error("You must specify at least one of maxHeight or idealFontSize");else t=Math.floor(a);function c(e){return(0,i.A)(l({},u,{style:l({},s,{fontSize:`${e}px`})}))}return null!=o&&(t=r(t,c,e=>e.width>0&&e.width<=o)),null!=a&&(t=r(t,c,e=>e.height>0&&e.height<=a)),t}},13030(e,t,n){n.d(t,{A:()=>o});var i=n(1230),l=n(19740),r=n(49669);function o(e,t){let{text:n,className:o,style:a,container:s}=e;if(0===n.length)return{height:0,width:0};let u=r.z.createInContainer(s),c=r.k.createInContainer(u);(0,i.A)(c,{className:o,style:a,text:n});let d=(0,l.A)(c,t);return setTimeout(()=>{r.k.removeFromContainer(u),r.z.removeFromContainer(s)},500),d}},49669(e,t,n){n.d(t,{z:()=>r,k:()=>o});class i{createInContainer(e=document.body){if(this.activeNodes.has(e)){let t=this.activeNodes.get(e);return t.counter+=1,t.node}let t=this.factoryFn();return e.append(t),this.activeNodes.set(e,{counter:1,node:t}),t}removeFromContainer(e=document.body){if(this.activeNodes.has(e)){let t=this.activeNodes.get(e);t.counter-=1,0===t.counter&&(e.removeChild(t.node),this.activeNodes.delete(e))}}constructor(e){this.activeNodes=new Map,this.factoryFn=e}}let l="http://www.w3.org/2000/svg",r=new i(function(){let e=document.createElementNS(l,"svg");return e.style.position="absolute",e.style.top="-100%",e.style.left="-100%",e.style.width="0",e.style.height="0",e.style.opacity="0",e.style.pointerEvents="none",e}),o=new i(function(){return document.createElementNS(l,"text")})},19740(e,t,n){n.d(t,{A:()=>l});let i={height:20,width:100};function l(e,t=i){let{width:n,height:r}=e.getBBox?e.getBBox():t;return{height:Math.ceil(r),width:Math.ceil(n)}}},1230(e,t,n){n.d(t,{A:()=>l});let i=["font","fontWeight","fontStyle","fontSize","fontFamily","letterSpacing"];function l(e,{className:t,style:n={},text:r}={}){return e.textContent!==r&&(e.textContent=void 0===r?null:r),e.getAttribute("class")!==t&&e.setAttribute("class",null!=t?t:""),e.style.removeProperty("font"),e.style.removeProperty("font-weight"),e.style.removeProperty("font-style"),e.style.removeProperty("font-size"),e.style.removeProperty("font-family"),e.style.removeProperty("letter-spacing"),i.filter(e=>void 0!==n[e]&&null!==n[e]).forEach(t=>{e.style[t]=`${n[t]}`}),e}},37316(e,t,n){n.r(t);var i=n(2445),l=n(64260),r=n(27124),o=n(62666),a=n(65802),s=n(18349),u=n(50267),c=n(11005),d=n(85614),h=n(25981),f=n(38033);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}let p=(0,s.gV)(),y=(0,d.styled)(function(e){let{className:t="",headerFormatter:n=p,formatTime:s=(0,u.mo)(c.M),headerFontSize:y=f.F.HEADER,kickerFontSize:v=f.F.KICKER,metricNameFontSize:g=f.F.METRIC_NAME,showMetricName:b=!0,showTimestamp:N=!1,showTrendLine:x=!1,subheader:w="",subheaderFontSize:E=f.F.SUBHEADER,subtitleFontSize:F=f.F.SUBHEADER}=e,z=function(e,t){if(null==e)return{};var n,i,l={},r=Object.getOwnPropertyNames(e);for(i=0;i<r.length;i++)!(t.indexOf(n=r[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n]);return l}(e,["className","headerFormatter","formatTime","headerFontSize","kickerFontSize","metricNameFontSize","showMetricName","showTimestamp","showTrendLine","subheader","subheaderFontSize","subtitleFontSize"]),S=(0,d.useTheme)(),[k,A]=(0,l.useState)(!1),T=(0,l.useRef)(null),M=(0,l.useRef)(null),R=(0,l.useRef)(null),$=(0,l.useRef)(null),C=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=setTimeout(()=>{A(!0)},0);return()=>clearTimeout(e)},[]),(0,l.useEffect)(()=>{},[z.height,x]);let O=()=>{let e=`superset-legacy-chart-big-number ${t} ${z.bigNumberFallback?"is-fallback-value":""}`;return x?e:`${e} no-trendline`},D=()=>{let e=document.createElement("div");return e.className=O(),e.style.position="absolute",e.style.opacity="0",e},I=()=>{let{bigNumberFallback:e}=z;return s&&e&&!N?(0,i.Y)("span",{className:"alert alert-warning",role:"alert",title:(0,r.t)("Last available value seen on %s",s(e[0])),children:(0,r.t)("Not up to date")}):null},Y=e=>{let{metricName:t,width:n}=z;if(!b||!t)return null;let l=D();document.body.append(l);let r=(0,o.A)({text:t,maxWidth:n,maxHeight:e,className:"metric-name",container:l});return l.remove(),(0,i.Y)("div",{ref:T,className:"metric-name",style:{fontSize:r,height:"auto"},children:t})},j=e=>{let{timestamp:t,width:n}=z;if(!s||!N||"string"==typeof t||"bigint"==typeof t||"boolean"==typeof t)return null;let l=null===t?"":s(t),r=D();document.body.append(r);let a=(0,o.A)({text:l,maxWidth:n,maxHeight:e,className:"kicker",container:r});return r.remove(),(0,i.Y)("div",{ref:M,className:"kicker",style:{fontSize:a,height:"auto"},children:l})},L=e=>{let t,l,{bigNumber:a,width:s,colorThresholdFormatters:u,onContextMenu:c}=z;if(null==a)t=(0,r.t)("No data");else if("number"==typeof a)t=n(a);else if("string"==typeof a)t=a;else{let e=Number(a);t=Number.isNaN(e)?String(a):n(e)}Array.isArray(u)&&u.length>0?u.forEach(e=>{"number"!=typeof a||isNaN(a)||(l=e.getColorFromValue(a))}):l=S.colorText;let d=D();document.body.append(d);let h=(0,o.A)({text:t,maxWidth:.9*s,maxHeight:e,className:"header-line",container:d});return d.remove(),(0,i.Y)("div",{ref:R,className:"header-line",style:{display:"flex",alignItems:"center",fontSize:h,height:"auto",color:l},onContextMenu:e=>{c&&(e.preventDefault(),c(e.nativeEvent.clientX,e.nativeEvent.clientY))},children:t})},P=e=>{let{width:t}=z,n=0;if(w){let l=D();document.body.append(l);try{n=(0,o.A)({text:w,maxWidth:.9*t,maxHeight:e,className:"subheader-line",container:l})}finally{l.remove()}return(0,i.Y)("div",{ref:$,className:"subheader-line",style:{fontSize:n,height:e},children:w})}return null},U=e=>{let{subtitle:t,width:n,bigNumber:l,bigNumberFallback:a}=z,s=0,u=(0,r.t)("No data after filtering or data is NULL for the latest time record"),c=(0,r.t)("Try applying different filters or ensuring your datasource has data"),d=t;if(null===l&&(d=t||(a?c:u)),d){let t=D();return document.body.append(t),s=(0,o.A)({text:d,maxWidth:.9*n,maxHeight:e,className:"subtitle-line",container:t}),t.remove(),(0,i.Y)(i.FK,{children:(0,i.Y)("div",{ref:C,className:"subtitle-line subheader-line",style:{fontSize:`${s}px`,height:e},children:d})})}return null},H=e=>{let t;return!!k&&(t=[T,M,R,$,C].filter(e=>e.current)).reduce((e,n,i)=>{var l;return e+((null==(l=n.current)?void 0:l.offsetHeight)||0)+8*(i<t.length-1)},0)>e},{height:W}=z,B=O();if(x){let e=Math.floor(f.F.TRENDLINE*W),t=W-e,n=H(t);return(0,i.FD)("div",{className:B,children:[(0,i.FD)("div",{className:"text-container",style:m({height:t},n?{display:"block",boxSizing:"border-box",overflowX:"hidden",overflowY:"auto",width:"100%"}:{}),children:[I(),Y(Math.ceil((g||0)*(1-f.F.TRENDLINE)*W)),j(Math.ceil((v||0)*(1-f.F.TRENDLINE)*W)),L(Math.ceil(y*(1-f.F.TRENDLINE)*W)),P(Math.ceil(E*(1-f.F.TRENDLINE)*W)),U(Math.ceil(F*(1-f.F.TRENDLINE)*W))]}),(e=>{let{width:t,trendLineData:n,echartOptions:l,refs:r,onContextMenu:o,formData:s,xValueFormatter:u}=z;return(null==n?void 0:n.some(e=>null!==e[1]))?l&&(0,i.Y)(h.A,{refs:r,width:Math.floor(t),height:e,echartOptions:l,eventHandlers:{contextmenu:e=>{if(o){e.event.stop();let{data:t}=e;if(t){let n=e.event.event,i=[];i.push({col:(null==s?void 0:s.xAxis)===a.Tf?null==s?void 0:s.granularitySqla:null==s?void 0:s.xAxis,grain:null==s?void 0:s.timeGrainSqla,op:"==",val:t[0],formattedVal:null==u?void 0:u(t[0])}),o(n.clientX,n.clientY,{drillToDetail:i})}}}},vizType:null==s?void 0:s.vizType}):null})(e)]})}let X=H(W);return(0,i.Y)("div",{className:B,style:m({height:W},X?{display:"block",boxSizing:"border-box",overflowX:"hidden",overflowY:"auto",width:"100%"}:{}),children:(0,i.FD)("div",{className:"text-container",children:[I(),Y((g||0)*W),j((v||0)*W),L(Math.ceil(y*W)),P(Math.ceil(E*W)),U(Math.ceil(F*W))]})})})`
  ${({theme:e})=>`
    font-family: ${e.fontFamily};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &.no-trendline .subheader-line {
      padding-bottom: 0.3em;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .alert {
        font-size: ${e.fontSizeSM};
        margin: -0.5em 0 0.4em;
        line-height: 1;
        padding: ${e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
      }
    }

    .kicker {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    .metric-name {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    .header-line {
      position: relative;
      line-height: 1em;
      white-space: nowrap;
      margin-bottom:${2*e.sizeUnit}px;
      span {
        position: absolute;
        bottom: 0;
      }
    }

    .subheader-line {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    .subtitle-line {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    &.is-fallback-value {
      .kicker,
      .header-line,
      .subheader-line {
        opacity: 60%;
      }
    }
  `}
`;n.d(t,["default",0,y])}}]);