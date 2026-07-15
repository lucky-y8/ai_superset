"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3323],{33323(e,t,o){o.r(t),o.d(t,{default:()=>d});var r=o(2445),l=o(64260);function a(e,t){let o,r;if(void 0===t)for(let t of e)null!=t&&(void 0===o?t>=t&&(o=r=t):(o>t&&(o=t),r<t&&(r=t)));else{let l=-1;for(let a of e)null!=(a=t(a,++l,e))&&(void 0===o?a>=a&&(o=r=a):(o>a&&(o=a),r<a&&(r=a)))}return[o,r]}var n=o(25365),i=o(85614),s=o(46983);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}let c=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"],h=(0,l.memo)(function({className:e="",width:t=800,height:o=20,data:n,bands:i=c.length>>1,colors:h=c,colorScale:u="series",mode:d="offset",offsetX:g=0,title:p="",yDomain:m}){let y=(0,l.useRef)(null),v=(0,l.useCallback)(()=>{let e,r,l=y.current;if(!l)return;let c="change"===u&&n.length>0?n.map(e=>f({},e,{y:e.y-n[0].y})):n,p=l.getContext("2d");if(!p)return;p.imageSmoothingEnabled=!1,p.clearRect(0,0,t,o),p.setTransform(1,0,0,1,0,0),p.translate(.5,.5);let v=t/c.length,b=Math.floor(Math.max(0,-(g/v))),w=Math.floor(Math.min(c.length,b+t/v));if(b>c.length)return;let[z,M]=m||a(c,e=>e.y),k=(0,s.A)().domain([0,Math.max(-z,M)]).range([0,o]),S=!1;for(let t=0;t<i;t+=1){p.fillStyle=h[i+t],r=(t+1-i)*o,k.range([i*o+r,r]);for(let t=b;t<w;t+=1){if((e=c[t].y)<=0){S=!0;continue}void 0!==e&&p.fillRect(g+t*v,k(e),v+1,k(0)-k(e))}}if(S){"offset"===d&&(p.translate(0,o),p.scale(1,-1));for(let t=0;t<i;t+=1){p.fillStyle=h[i-t-1],r=(t+1-i)*o,k.range([i*o+r,r]);for(let t=b;t<w;t+=1)(e=c[t].y)>=0||p.fillRect(g+t*v,k(-e),v+1,k(0)-k(-e))}}},[n,m,t,o,i,h,u,g,d]);return(0,l.useEffect)(()=>{v()},[v]),(0,r.FD)("div",{className:`horizon-row ${e}`,children:[(0,r.Y)("span",{className:"title",children:p}),(0,r.Y)("canvas",{ref:y,width:t,height:o})]})}),u=i.styled.div`
  ${({theme:e})=>`
    .superset-legacy-chart-horizon {
      overflow: auto;
      position: relative;
    }

    .superset-legacy-chart-horizon .horizon-row {
      border-bottom: solid 1px ${e.colorBorderSecondary};
      border-top: 0;
      padding: 0;
      margin: 0;
    }

    .superset-legacy-chart-horizon .horizon-row span.title {
      position: absolute;
      color: ${e.colorText};
      font-size: ${e.fontSizeSM}px;
      margin: 0;
    }
  `}
`,d=(0,l.memo)(function({className:e="",width:t=800,height:o=600,seriesHeight:i=20,data:s,bands:f=Math.floor(c.length/2),colors:d=c,colorScale:g="series",mode:p="offset",offsetX:m=0}){let y=(0,l.useMemo)(()=>{if("overall"===g){let e=a(s.reduce((e,t)=>e.concat(t.values),[]),e=>e.y);if(null!=e[0]&&null!=e[1])return[e[0],e[1]]}},[g,s]);return(0,r.Y)(u,{children:(0,r.Y)("div",{className:`superset-legacy-chart-horizon ${e}`,style:{height:o},children:s.map(e=>(0,r.Y)(h,{width:t,height:i,title:(0,n.A)(e.key).join(", "),data:e.values,bands:f,colors:d,colorScale:g,mode:p,offsetX:m,yDomain:y},e.key.join(",")))})})})}}]);