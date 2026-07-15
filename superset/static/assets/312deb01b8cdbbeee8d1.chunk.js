"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3002],{28471(e,t,l){l.d(t,{A:()=>a});var r=l(2445),n=l(64260);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function a(e,t){let l=(0,n.forwardRef)(function(l,o){let a=(0,n.useRef)(null),s=(0,n.useRef)(l);(0,n.useLayoutEffect)(()=>{s.current=l}),(0,n.useImperativeHandle)(o,()=>({get container(){var e;return null!=(e=a.current)?e:void 0}}),[]),(0,n.useEffect)(()=>{a.current&&e(a.current,l)}),(0,n.useEffect)(()=>()=>{(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.call({container:void 0,props:s.current})},[]);let{id:i,className:c}=l;return(0,r.Y)("div",{ref:a,id:i,className:c})});return e.displayName&&(l.displayName=e.displayName),e.propTypes&&(l.propTypes=o({},l.propTypes,e.propTypes)),e.defaultProps&&(l.defaultProps=e.defaultProps),l}},23002(e,t,l){l.r(t),l.d(t,{default:()=>h});var r=l(2445),n=l(28471),o=l(85614),a=l(24143),s=l.n(a),i=l(10216),c=l(14230),u=l(49175);function p(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}let d={},f=new WeakMap;function y(e,t){let{data:l,width:r,height:n,country:o,entity:a,linearColorScheme:y,formatter:v,colorScheme:g,sliceId:h,filterState:m,emitCrossFilters:b,onContextMenu:x,setDataMask:$}=t,k=function(e,t){let l,r;if(void 0===t)for(let t of e)null!=t&&(void 0===l?t>=t&&(l=r=t):(l>t&&(l=t),r<t&&(r=t)));else{let n=-1;for(let o of e)null!=(o=t(o,++n,e))&&(void 0===l?o>=o&&(l=r=o):(l>o&&(l=o),r<o&&(r=o)))}return[l,r]}(l,e=>e.metric),O=null!=k[0]&&null!=k[1]?[k[0],k[1]]:[0,1],S=(0,i.A)().get(y),M=S?S.createLinearScale(O):()=>"#ccc",w=c.getScale(g),N={};l.forEach(e=>{var t;N[e.country_id]=g?w(e.country_id,h):null!=(t=M(e.metric))?t:""});let I=e=>(null==e?void 0:e.properties)&&N[e.properties.ISO]||"#d9d9d9",A=null!==e.closest(".dashboard--editing"),C=s().geo.path(),E=s().select(e);E.classed("superset-legacy-chart-country-map",!0),E.selectAll("*").remove(),e.style.height=`${n}px`,e.style.width=`${r}px`;let T=E.append("svg:svg").attr("width",r).attr("height",n).attr("preserveAspectRatio","xMidYMid meet");A||T.style("cursor","grab"),T.append("rect").attr("class","background").attr("width",r).attr("height",n);let j=T.append("g"),B=j.append("g").classed("map-layer",!0),z=E.append("div").attr("class","hover-popup"),P=null,Y=e=>{var t;if(!a)return;let l=(null==m?void 0:m.selectedValues)||[],r=null==e||null==(t=e.properties)?void 0:t.ISO;if(!r)return;let n=l.includes(r),o=n?[]:[r];return{dataMask:{extraFormData:{filters:o.length?[{col:a,op:"IN",val:o}]:[]},filterState:{value:o.length?o:null,selectedValues:o.length?o:null}},isCurrentValueSelected:n}},_=e=>{var t;let l=s().event;"function"==typeof x&&(null==l||l.preventDefault());let r=null==e||null==(t=e.properties)?void 0:t.ISO;if(!r||"function"!=typeof x||!a)return;let n=[{col:a,op:"==",val:r,formattedVal:r}],o=[{col:a,op:"==",val:r}];x(l.clientX,l.clientY,{drillToDetail:n,crossFilter:Y(e),drillBy:{filters:o,groupbyFieldName:"entity"}})},R=()=>{let e=T.node().getBoundingClientRect().height,[t,l]=s().mouse(T.node());z.style("display","block").style("top",`${l+30}px`).style("left",`${t}px`).classed("popup-at-bottom",l>2*e/3)},V=function(e){var t;let r=I(e);r&&(r=s().rgb(r).darker().toString()),s().select(this).style("fill",r);let n=l.filter(t=>{var l;return t.country_id===(null==e||null==(l=e.properties)?void 0:l.ISO)}),o=p((t=e)&&t.properties?t.properties.ID_2?t.properties.NAME_2||"":t.properties.NAME_1||"":""),a=n.length>0?p(String(v(n[0].metric))):"";z.style("display","block").html(`<div><strong>${o}</strong><br>${a}</div>`),R()},D=function(){R()},F=function(){s().select(this).style("fill",e=>I(e)),z.style("display","none")};if(!A){let t=s().behavior.zoom().scaleExtent([1,4]).on("zoomstart",()=>{T.style("cursor","grabbing")}).on("zoom",()=>{let{translate:l,scale:o}=s().event,[a,i]=l,c=r*o,u=n*o,p=Math.min(0,n-u);a=Math.max(Math.min(a,0),Math.min(0,r-c)),i=Math.max(Math.min(i,0),p),t.translate([a,i]),j.attr("transform",`translate(${a}, ${i}) scale(${o})`);let d=f.get(e);d&&d.scale===o&&d.translate[0]===a&&d.translate[1]===i||f.set(e,{scale:o,translate:[a,i]})}).on("zoomend",()=>{T.style("cursor","grab")});s().select(T.node()).call(t);let l=f.get(e);if(l){let{scale:e,translate:r}=l;t.scale(e).translate(r),j.attr("transform",`translate(${r[0]}, ${r[1]}) scale(${e})`)}}function L(e=null){let t=e||(null==m?void 0:m.selectedValues)||[];B.selectAll("path.region").style("fill-opacity",e=>{var l;let r=null==e||null==(l=e.properties)?void 0:l.ISO;return 0===t.length||t.includes(r)?1:.3}).style("stroke",e=>{var l;let r=null==e||null==(l=e.properties)?void 0:l.ISO;return t.includes(r)?"#222":null}).style("stroke-width",e=>{var l;let r=null==e||null==(l=e.properties)?void 0:l.ISO;return t.includes(r)?"1.5px":"0.5px"})}function W(e){let{features:t}=e,l=s().geo.centroid(e),o=s().geo.mercator().scale(100).center(l).translate([r/2,n/2]);C.projection(o);let i=C.bounds(e),c=Math.min(100*r/(i[1][0]-i[0][0]),100*n/(i[1][1]-i[0][1]));o.scale(c);let u=C.bounds(e);o.translate([r-(u[0][0]+u[1][0])/2,n-(u[0][1]+u[1][1])/2]);let p=B.selectAll("path.region").data(t);p.enter().append("path").attr("class","region").attr("vector-effect","non-scaling-stroke"),B.selectAll("path.region").attr("d",C).style("fill",I).on("mouseenter",V).on("mousemove",D).on("mouseout",F).on("contextmenu",_).on("mousedown",function(){let e=s().mouse(T.node());P={x:e[0],y:e[1]}}).on("click",function(e){if(P){let t=s().mouse(T.node()),l=Math.abs(t[0]-P.x),r=Math.abs(t[1]-P.y);l<5&&r<5&&(e=>{var t;if(!a||!b||"function"!=typeof $)return;let l=Y(e);if(!l)return;let{dataMask:r,isCurrentValueSelected:n}=l;$(r);let o=null==e||null==(t=e.properties)?void 0:t.ISO;L(n||!o?[]:[o])})(e),P=null}}),p.exit().remove(),L()}let H=d[o];if(H)W(H);else{let t=u.Ay[o];if(!t){var J;let t=(null==(J=u.JK.find(e=>e[0]===o))?void 0:J[1])||o;s().select(e).html(`<div class="alert alert-danger">No map data available for ${p(t)}</div>`);return}s().json(t,(t,l)=>{if(t){var r;let t=(null==(r=u.JK.find(e=>e[0]===o))?void 0:r[1])||o;s().select(e).html(`<div class="alert alert-danger">Could not load map data for ${p(t)}</div>`)}else d[o]=l,W(l)})}}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}y.displayName="CountryMap";let g=(0,n.A)(y),h=(0,o.styled)(e=>{let{className:t=""}=e,l=function(e,t){if(null==e)return{};var l,r,n={},o=Object.getOwnPropertyNames(e);for(r=0;r<o.length;r++)!(t.indexOf(l=o[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l]);return n}(e,["className"]);return(0,r.Y)("div",{className:t,children:(0,r.Y)(g,v({},l))})})`
  ${({theme:e})=>`
    .superset-legacy-chart-country-map svg {
      background-color: ${e.colorBgContainer};
    }

    .superset-legacy-chart-country-map {
      position: relative;
    }

    .superset-legacy-chart-country-map .background {
      fill: ${e.colorBgContainer};
      pointer-events: all;
    }

    .superset-legacy-chart-country-map .hover-popup {
      position: absolute;
      color: ${e.colorTextSecondary};
      display: none;
      padding: 4px;
      border-radius: 1px;
      background-color: ${e.colorBgElevated};
      box-shadow: ${e.boxShadow};
      font-size: 12px;
      border: 1px solid ${e.colorBorder};
      z-index: 10001;
    }

    .superset-legacy-chart-country-map .map-layer {
      fill: ${e.colorBgContainer};
      stroke: ${e.colorBorderSecondary};
      pointer-events: all;
    }

    .superset-legacy-chart-country-map .effect-layer {
      pointer-events: none;
    }

    .superset-legacy-chart-country-map path.region {
      cursor: pointer;
      stroke: ${e.colorSplit};
    }

    .superset-legacy-chart-country-map .hover-popup.popup-at-bottom {
      transform: translateY(-150%);
    }

  `}
`}}]);