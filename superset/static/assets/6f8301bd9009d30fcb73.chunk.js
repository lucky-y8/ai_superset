"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5426],{28471(e,t,a){a.d(t,{A:()=>o});var r=a(2445),i=a(64260);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){let a=(0,i.forwardRef)(function(a,n){let o=(0,i.useRef)(null),s=(0,i.useRef)(a);(0,i.useLayoutEffect)(()=>{s.current=a}),(0,i.useImperativeHandle)(n,()=>({get container(){var e;return null!=(e=o.current)?e:void 0}}),[]),(0,i.useEffect)(()=>{o.current&&e(o.current,a)}),(0,i.useEffect)(()=>()=>{(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.call({container:void 0,props:s.current})},[]);let{id:l,className:c}=a;return(0,r.Y)("div",{ref:o,id:l,className:c})});return e.displayName&&(a.displayName=e.displayName),e.propTypes&&(a.propTypes=n({},a.propTypes,e.propTypes)),e.defaultProps&&(a.defaultProps=e.defaultProps),a}},95426(e,t,a){a.r(t),a.d(t,{default:()=>et});var r=a(2445),i=a(28471),n=a(85614),o=a(5556),s=a.n(o),l=a(30665),c=a(74022),u=a(24143),p=a.n(u),h=a(83826),m=a.n(h),d=a(71111),y=a.n(d),f=a(50267),g=a(11005),x=a(14230),b=a(13048),v=a(18349),A=a(73371),w=a(72255),k=a(93620),T=a(27124),L=a(45507);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function O(e){return Object.keys(e).reduce((e,t)=>(e[t]=t,e),{})}let E=O({FORMULA:{value:"FORMULA",label:(0,T.t)("Formula")},EVENT:{value:"EVENT",label:(0,T.t)("Event"),supportNativeSource:!0},INTERVAL:{value:"INTERVAL",label:(0,T.t)("Interval"),supportNativeSource:!0},TIME_SERIES:{value:"TIME_SERIES",label:(0,T.t)("Time Series")}});E.FORMULA;let N=O({NATIVE:{value:"NATIVE",label:"Superset annotation"}}),C={descriptionColumns:["long_descr"],intervalEndColumn:"end_dttm",timeColumn:"start_dttm",titleColumn:"short_descr"};function M(e){return e.sourceType===N.NATIVE?$({},e,C):e}var S=a(38719),D=a(96460);let F=s().oneOfType([s().number,s().oneOf(["auto"])]),I=s().oneOfType([s().string,s().shape({label:s().string})]),B=s().shape({r:s().number.isRequired,g:s().number.isRequired,b:s().number.isRequired}),P=s().shape({x:s().number,y:s().number}),R=s().shape({x:s().string,y:s().number}),Y=s().shape({outliers:s().arrayOf(s().number),Q1:s().number,Q2:s().number,Q3:s().number,whisker_high:s().number,whisker_low:s().number}),_=s().shape({markerLabels:s().arrayOf(s().string),markerLineLabels:s().arrayOf(s().string),markerLines:s().arrayOf(s().number),markers:s().arrayOf(s().number),measures:s().arrayOf(s().number),rangeLabels:s().arrayOf(s().string),ranges:s().arrayOf(s().number)}),z=s().shape({annotationType:s().oneOf(Object.keys(E)),color:s().string,hideLine:s().bool,name:s().string,opacity:s().string,show:s().bool,showMarkers:s().bool,sourceType:s().string,style:s().string,value:s().oneOfType([s().number,s().string]),width:s().number});function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let j=[{text:"No data",dy:"-.75em",class:"header"},{text:"Adjust filters or check the Datasource.",dy:".75em",class:"body"}];L.XV.extend(m());let W=(0,f.mo)(g.M);y().utils.noData=function(e,t){let a=e.options().margin(),r=y().utils.availableHeight(null,t,a),i=y().utils.availableWidth(null,t,a),n=a.left+i/2,o=a.top+r/2;t.selectAll("g").remove();let s=t.selectAll(".nv-noData").data(j);s.enter().append("text").attr("class",e=>`nvd3 nv-noData ${e.class}`).attr("dy",e=>e.dy).style("text-anchor","middle"),s.attr("x",n).attr("y",o).text(e=>e.text)};let{getColor:U,getScale:G}=x,q=[b.Y.Compare,b.Y.TimePivot],X={data:s().oneOfType([s().arrayOf(s().oneOfType([R,s().shape({key:s().string,values:s().arrayOf(R)}),s().shape({key:s().arrayOf(s().string),values:s().arrayOf(P)}),s().shape({classed:s().string,key:s().string,type:s().string,values:s().arrayOf(P),yAxis:s().number}),s().shape({label:s().string,values:s().arrayOf(Y)}),s().shape({key:s().string,values:s().arrayOf(s().object)})])),_]),width:s().number,height:s().number,annotationData:s().object,annotationLayers:s().arrayOf(z),bottomMargin:F,colorScheme:s().string,comparisonType:s().string,contribution:s().bool,leftMargin:F,onError:s().func,showLegend:s().bool,showMarkers:s().bool,vizType:s().oneOf([b.Y.BoxPlot,"bubble",b.Y.Bullet,b.Y.Compare,"column",b.Y.TimePivot,"pie"]),xAxisFormat:s().string,numberFormat:s().string,xAxisLabel:s().string,xAxisShowMinMax:s().bool,xIsLogScale:s().bool,xTicksLayout:s().oneOf(["auto","staggered","45°"]),yAxisFormat:s().string,yAxisBounds:s().arrayOf(s().number),yAxisLabel:s().string,yAxisShowMinMax:s().bool,yIsLogScale:s().bool,isBarStacked:s().bool,showBarValue:s().bool,showBrush:s().oneOf([!0,"yes",!1,"no","auto"]),onBrushEnd:s().func,yAxis2Format:s().string,lineInterpolation:s().string,isDonut:s().bool,isPieLabelOutside:s().bool,pieLabelType:s().oneOf(["key","value","percent","key_value","key_percent","key_value_percent"]),showLabels:s().bool,entity:s().string,maxBubbleSize:s().number,xField:I,yField:I,sizeField:I,baseColor:B},H=()=>{},Q=(0,v.gV)();function J(e,t){let a,{data:r,width:i,height:n,annotationData:o,annotationLayers:s=[],baseColor:u,bottomMargin:h,colorScheme:m,comparisonType:d,contribution:g,entity:x,isBarStacked:$,isDonut:O,isPieLabelOutside:N,leftMargin:C,lineInterpolation:F="linear",markerLabels:I,markerLines:B,markerLineLabels:P,markers:R,maxBubbleSize:Y,onBrushEnd:_=H,onError:z=H,pieLabelType:j,rangeLabels:X,ranges:J,showBarValue:K,showBrush:Z,showLabels:ee,showLegend:et,showMarkers:ea,sizeField:er,vizType:ei,xAxisFormat:en,numberFormat:eo,xAxisLabel:es,xAxisShowMinMax:el=!1,xField:ec,xIsLogScale:eu,xTicksLayout:ep,yAxisFormat:eh,yAxisBounds:em,yAxisLabel:ed,yAxisShowMinMax:ey=!1,yAxis2ShowMinMax:ef=!1,yField:eg,yIsLogScale:ex,sliceId:eb}=t,ev=null!==document.querySelector("#explorer-container");e.innerHTML="";let eA=s.filter(e=>e.show),ew=e,ek=null;for(;ew.parentElement;){if(ew.parentElement.id.startsWith("chart-id-")){ek=ew.parentElement.id;break}ew=ew.parentElement}let eT="key";function eL(e){return e.includes(ei)}e.style.width=`${i}px`,e.style.height=`${n}px`,ek?(0,D.G0)(ek):(0,D.$v)(!0),y().addGraph(function(){let t,s=p().select(e);s.classed("superset-legacy-chart-nvd3",!0),s.classed(`superset-legacy-chart-nvd3-${(0,l.A)(ei)}`,!0);let ew=s.select("svg");ew.empty()&&(ew=s.append("svg"));let e$=ei===b.Y.Bullet?Math.min(n,50):n,eO=eL(q),eE="staggered"===ep,eN=45*("45°"===ep);if(45===eN&&(0,S.A)(Z))return z((0,T.t)("You cannot use 45° tick layout along with the time range filter")),null;let eC=(0,S.A)(Z)||"auto"===Z&&n>=480&&"45°"!==ep,eM=(0,v.gV)(eo);switch(ei){case b.Y.TimePivot:(a=y().models.lineChart()).xScale(p().time.scale.utc()),a.interpolate(F);break;case b.Y.Pie:if(a=y().models.pieChart(),eT="x",a.valueFormat(eM),O&&a.donut(!0),a.showLabels(ee),a.labelsOutside(N),a.labelThreshold(.05),a.cornerRadius(!0),["key","value","percent"].includes(j))a.labelType(j);else if("key_value"===j)a.labelType(e=>`${e.data.x}: ${eM(e.data.y)}`);else{let e=p().sum(r,e=>e.y),t=(0,v.gV)(A.A.PERCENT_2_POINT);"key_percent"===j?(a.tooltip.valueFormatter(e=>t(e)),a.labelType(a=>`${a.data.x}: ${t(a.data.y/e)}`)):(a.tooltip.valueFormatter(a=>`${eM(a)} (${t(a/e)})`),a.labelType(a=>`${a.data.x}: ${eM(a.data.y)} (${t(a.data.y/e)})`))}a.margin({top:0});break;case"column":a=y().models.multiBarChart().reduceXTicks(!1);break;case b.Y.Compare:(a=y().models.cumulativeLineChart()).xScale(p().time.scale.utc()),a.useInteractiveGuideline(!0),a.xAxis.showMaxMin(!1);break;case b.Y.LegacyBubble:(a=y().models.scatterChart()).showDistX(!1),a.showDistY(!1),a.tooltip.contentGenerator(e=>(0,D.oh)({point:e.point,entity:x,xField:ec,yField:eg,sizeField:er,xFormatter:(0,D.wn)(en),yFormatter:(0,D.wn)(eh),sizeFormatter:Q})),a.pointRange([5,Math.pow(Y,2)]),a.pointDomain([0,p().max(r,e=>p().max(e.values,e=>e.size))]);break;case b.Y.BoxPlot:eT="label",(a=y().models.boxPlotChart()).x(e=>e.label),a.maxBoxWidth(75);break;case b.Y.Bullet:a=y().models.bulletChart(),r.rangeLabels=X,r.ranges=J,r.markerLabels=I,r.markerLines=B,r.markerLineLabels=P,r.markers=R;break;default:throw Error(`Unrecognized visualization for nvd3${ei}`)}a.margin({left:0,bottom:0}),K&&((0,D.C$)(ew,r,$,eh),a.dispatch.on("stateChange.drawBarValues",()=>{(0,D.C$)(ew,r,$,eh)})),eC&&_!==H&&a.focus&&a.focus.dispatch.on("brush",e=>{let t=(0,D.EF)(e.extent);t&&e.brush.on("brushend",()=>{_(t)})}),a.xAxis&&a.xAxis.staggerLabels&&a.xAxis.staggerLabels(eE),a.xAxis&&a.xAxis.rotateLabels&&a.xAxis.rotateLabels(eN),a.x2Axis&&a.x2Axis.staggerLabels&&a.x2Axis.staggerLabels(eE),a.x2Axis&&a.x2Axis.rotateLabels&&a.x2Axis.rotateLabels(eN),"showLegend"in a&&void 0!==et&&(i<340&&ei!==b.Y.Pie?a.showLegend(!1):a.showLegend(et)),ex&&a.yScale(p().scale.log()),eu&&a.xScale(p().scale.log()),eO?(t=(0,f.mo)(en),a.interactiveLayer.tooltip.headerFormatter(W)):t=(0,D.wn)(en),a.x2Axis&&a.x2Axis.tickFormat&&a.x2Axis.tickFormat(t),a.xAxis&&a.xAxis.tickFormat&&(eL([b.Y.BoxPlot])?a.xAxis.tickFormat(e=>e.length>40?`${e.slice(0,40)}…`:e):a.xAxis.tickFormat(t));let eS=(0,D.wn)(eh);if(a.yAxis&&a.yAxis.tickFormat&&((g||"percentage"===d)&&(!eh||eh===A.A.SMART_NUMBER||eh===A.A.SMART_NUMBER_SIGNED)&&(eS=(0,v.gV)(A.A.PERCENT_1_POINT)),a.yAxis.tickFormat(eS)),a.y2Axis&&a.y2Axis.tickFormat&&a.y2Axis.tickFormat(eS),a.yAxis&&a.yAxis.ticks(5),a.y2Axis&&a.y2Axis.ticks(5),(0,D.dw)(a.xAxis,el),(0,D.dw)(a.x2Axis,el),(0,D.dw)(a.yAxis,ey),(0,D.dw)(a.y2Axis,ef||ey),ei===b.Y.TimePivot){if(u){let{r:e,g:t,b:r}=u;a.color(a=>{let i=a.rank>0?.5*a.perc:1;return`rgba(${e}, ${t}, ${r}, ${i})`})}a.useInteractiveGuideline(!0),a.interactiveLayer.tooltip.contentGenerator(e=>(0,D.qY)(e,t,eS))}else if(ei!==b.Y.Bullet){let e=G(m);a.color(t=>t.color||e((0,D.n0)(t[eT]),eb))}eL([b.Y.Compare])&&a.interactiveLayer.tooltip.contentGenerator(e=>(0,D.Jy)(e,eS)),a.width(i),a.height(e$),ew.datum(r).transition().duration(500).attr("height",e$).attr("width",i).call(a),ex&&a.yAxis.tickFormat(e=>0!==e&&Math.log10(e)%1==0?eS(e):""),eN>0&&ew.select(".nv-x.nv-axis > g").selectAll("g").selectAll("text").attr("dx",-6.5);let eD=()=>{if(a.yDomain&&Array.isArray(em)&&2===em.length){let[e,t]=em,i=(0,w.A)(e)&&!Number.isNaN(e),n=(0,w.A)(t)&&!Number.isNaN(t);if(i&&n)a.yDomain([e,t]),a.clipEdge(!0);else if(i||n){let[o,s]=(0,D.B2)(r);a.yDomain([i?e:o,n?t:s]),a.clipEdge(!0)}}};if(eD(),a.dispatch&&a.dispatch.stateChange&&a.dispatch.on("stateChange.applyYAxisBounds",eD),ea&&(ew.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1),a.dispatch.on("stateChange.showMarkers",()=>{setTimeout(()=>{ew.selectAll(".nv-point").style("stroke-opacity",1).style("fill-opacity",1)},10)})),void 0!==a.yAxis||void 0!==a.yAxis2){let t=Math.ceil(Math.min(i*(ev?.01:.03),30)),n=a.margin();a.xAxis&&(n.bottom=28);let s=(0,D.cm)(ew,a.yAxis2?"nv-y1":"nv-y"),l=(0,D.cm)(ew,"nv-x");if(n.left=s+t,ed&&""!==ed&&(n.left+=25),K&&(n.top+=24),el&&(n.right=Math.max(20,l/2)+t),45===eN?(n.bottom=l*Math.sin(Math.PI*eN/180)+t+30,n.right=l*Math.cos(Math.PI*eN/180)+t):eE&&(n.bottom=40),h&&"auto"!==h&&(n.bottom=parseInt(h,10)),C&&"auto"!==C&&(n.left=C),es&&""!==es&&a.xAxis){n.bottom+=25;let e=0;n.bottom&&!Number.isNaN(n.bottom)&&(e=n.bottom-45),a.xAxis.axisLabel(es).axisLabelDistance(e)}if(ed&&""!==ed&&a.yAxis){let e=0;n.left&&!Number.isNaN(n.left)&&(e=n.left-70),a.yAxis.axisLabel(ed).axisLabelDistance(e)}if(eO&&o&&eA.length>0){let e=eA.filter(e=>e.annotationType===E.TIME_SERIES).reduce((e,t)=>e.concat((o[t.name]||[]).map(e=>{if(!e)return{};let a=Array.isArray(e.key)?`${t.name}, ${e.key.join(", ")}`:`${t.name}, ${e.key}`;return V({},e,{key:a,color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style} nv-timeseries-annotation-layer showMarkers${t.showMarkers} hideLine${t.hideLine}`})})),[]);r.push(...e)}if(ek&&(a&&a.interactiveLayer&&a.interactiveLayer.tooltip&&a.interactiveLayer.tooltip.classes([(0,D.Ir)(ek)]),a&&a.tooltip&&a.tooltip.classes([(0,D.Ir)(ek)])),a.margin(n),ew.datum(r).transition().duration(500).attr("width",i).attr("height",e$).call(a),window.addEventListener("scroll",(0,c.A)(()=>(0,D.$v)(!1),250)),eO&&eA.length>0){let t,n=eA.filter(e=>e.annotationType===E.FORMULA),s=a.xAxis.scale().domain()[1].valueOf(),l=a.xAxis.scale().domain()[0].valueOf();if((t=a.xScale?a.xScale():a.xAxis.scale?a.xAxis.scale():p().scale.linear())&&t.clamp&&t.clamp(!0),n.length>0){let e=[],t=Math.min(...r.map(e=>Math.min(...e.values.slice(1).map((t,a)=>t.x-e.values[a].x)))),a=(s-l)/(t||1);t=a<100?(s-l)/100:t,t=a>500?(s-l)/500:t,e.push(l);for(let a=l;a<s;a+=t)e.push(a);e.push(s);let i=n.map(t=>{let{value:a}=t;return{key:t.name,values:e.map(e=>({x:e,y:(0,k.p)(a,e)})),color:t.color,strokeWidth:t.width,classed:`${t.opacity} ${t.style}`}});r.push(...i)}let c=a.xAxis1?a.xAxis1:a.xAxis,u=a.yAxis1?a.yAxis1:a.yAxis,h=c.scale().range()[1],d=u.scale().range()[0];o&&(eA.filter(e=>e.annotationType===E.EVENT&&o&&o[e.name]).forEach((r,i)=>{let n=M(r),s=p().select(e).select(".nv-wrap").append("g").attr("class",`nv-event-annotation-layer-${i}`),l=n.color||U((0,D.n0)(n.name),m),c=(0,D.AN)(V({},n,{annotationTipClass:`arrow-down nv-event-annotation-layer-${r.sourceType}`})),u=(o[n.name].records||[]).map(e=>{let t=new Date(L.XV.utc(e[n.timeColumn]));return V({},e,{[n.timeColumn]:t})}).filter(e=>!Number.isNaN(e[n.timeColumn].getMilliseconds()));u.length>0&&s.selectAll("line").data(u).enter().append("line").attr({x1:e=>t(new Date(e[n.timeColumn])),y1:0,x2:e=>t(new Date(e[n.timeColumn])),y2:d}).attr("class",`${n.opacity} ${n.style}`).style("stroke",l).style("stroke-width",n.width).on("mouseover",c.show).on("mouseout",c.hide).call(c),a.focus&&a.focus.dispatch.on("onBrush.event-annotation",()=>{s.selectAll("line").data(u).attr({x1:e=>t(new Date(e[n.timeColumn])),y1:0,x2:e=>t(new Date(e[n.timeColumn])),y2:d,opacity:e=>{let a=t(new Date(e[n.timeColumn]));return+(a>0&&a<h)}})})}),eA.filter(e=>e.annotationType===E.INTERVAL&&o&&o[e.name]).forEach((r,i)=>{let n=M(r),s=p().select(e).select(".nv-wrap").append("g").attr("class",`nv-interval-annotation-layer-${i}`),l=n.color||U((0,D.n0)(n.name),m),c=(0,D.AN)(n),u=(o[n.name].records||[]).map(e=>{let t=new Date(L.XV.utc(e[n.timeColumn])),a=new Date(L.XV.utc(e[n.intervalEndColumn]));return V({},e,{[n.timeColumn]:t,[n.intervalEndColumn]:a})}).filter(e=>!Number.isNaN(e[n.timeColumn].getMilliseconds())&&!Number.isNaN(e[n.intervalEndColumn].getMilliseconds()));u.length>0&&s.selectAll("rect").data(u).enter().append("rect").attr({x:e=>Math.min(t(new Date(e[n.timeColumn])),t(new Date(e[n.intervalEndColumn]))),y:0,width:e=>Math.max(Math.abs(t(new Date(e[n.intervalEndColumn]))-t(new Date(e[n.timeColumn]))),1),height:d}).attr("class",`${n.opacity} ${n.style}`).style("stroke-width",n.width).style("stroke",l).style("fill",l).style("fill-opacity",.2).on("mouseover",c.show).on("mouseout",c.hide).call(c),a.focus&&a.focus.dispatch.on("onBrush.interval-annotation",()=>{s.selectAll("rect").data(u).attr({x:e=>t(new Date(e[n.timeColumn])),width:e=>{let a=t(new Date(e[n.timeColumn]));return t(new Date(e[n.intervalEndColumn]))-a}})})})),ew.datum(r).attr("height",e$).attr("width",i).call(a),a.dispatch.on("renderEnd.timeseries-annotation",()=>{p().selectAll(".slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point").style("stroke-opacity",1).style("fill-opacity",1),p().selectAll(".slice_container .nv-timeseries-annotation-layer.hideLinetrue").style("stroke-width",0)})}}return(0,D.OK)(a),a})}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}J.displayName="NVD3",J.propTypes=X;let Z=(0,i.A)(J,{componentWillUnmount:function(){let{id:e}=this.props;null!=e?(0,D.G0)(e):(0,D.$v)(!0)}}),ee=e=>{let{className:t}=e,a=function(e,t){if(null==e)return{};var a,r,i={},n=Object.getOwnPropertyNames(e);for(r=0;r<n.length;r++)!(t.indexOf(a=n[r])>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a]);return i}(e,["className"]);return(0,r.Y)("div",{className:t,children:(0,r.Y)(Z,K({},a))})};ee.propTypes={className:s().string.isRequired};let et=(0,n.styled)(ee)`
  .superset-legacy-chart-nvd3-dist-bar,
  .superset-legacy-chart-nvd3-bar {
    overflow-x: auto !important;
    svg {
      &.nvd3-svg {
        width: auto;
        font-size: ${({theme:e})=>e.fontSize};
      }
    }
  }
  .superset-legacy-chart-nvd3 {
    nv-x text {
      font-size: ${({theme:e})=>e.fontSize};
    }
    g.superset path {
      stroke-dasharray: 5, 5;
    }
    .nvtooltip {
      table td {
        font-size: @font-size-s !important;
      }
    }
    .nvtooltip tr.highlight td {
      font-weight: ${({theme:e})=>e.fontWeightStrong};
      font-size: ${({theme:e})=>e.fontSize}px !important;
    }
    text.nv-axislabel {
      font-size: ${({theme:e})=>e.fontSize} !important;
    }
    g.nv-axis text {
      fill: ${({theme:e})=>e.colorText};
    }
    g.nv-series text {
      fill: ${({theme:e})=>e.colorText};
    }
    g.solid path,
    line.solid {
      stroke-dasharray: unset;
    }
    g.dashed path,
    line.dashed {
      stroke-dasharray: 5, 5;
    }
    g.longDashed path,
    line.dotted {
      stroke-dasharray: 1, 1;
    }

    g.opacityLow path,
    line.opacityLow {
      stroke-opacity: 0.2;
    }

    g.opacityMedium path,
    line.opacityMedium {
      stroke-opacity: 0.5;
    }
    g.opacityHigh path,
    line.opacityHigh {
      stroke-opacity: 0.8;
    }
    g.time-shift-0 path,
    line.time-shift-0 {
      stroke-dasharray: 5, 5;
    }
    g.time-shift-1 path,
    line.time-shift-1 {
      stroke-dasharray: 1, 5;
    }
    g.time-shift-2 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-3 path,
    line.time-shift-3 {
      stroke-dasharray: 5, 1;
    }
    g.time-shift-4 path,
    line.time-shift-4 {
      stroke-dasharray: 5, 10;
    }
    g.time-shift-5 path,
    line.time-shift-5 {
      stroke-dasharray: 0.9;
    }
    g.time-shift-6 path,
    line.time-shift-6 {
      stroke-dasharray: 15, 10, 5;
    }
    g.time-shift-7 path,
    line.time-shift-7 {
      stroke-dasharray: 15, 10, 5, 10;
    }
    g.time-shift-8 path,
    line.time-shift-8 {
      stroke-dasharray: 15, 10, 5, 10, 15;
    }
    g.time-shift-9 path,
    line.time-shift-9 {
      stroke-dasharray: 5, 5, 1, 5;
    }
    .nv-noData.body {
      font-size: ${({theme:e})=>e.fontSize};
      font-weight: ${({theme:e})=>e.fontWeightNormal};
    }
  }
  .superset-legacy-chart-nvd3-tr-highlight {
    border-top: 1px solid;
    border-bottom: 1px solid;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }
  .superset-legacy-chart-nvd3-tr-total {
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }
  .nvtooltip {
    .tooltip-header {
      white-space: nowrap;
      font-weight: ${({theme:e})=>e.fontWeightStrong};
    }
    tbody tr:not(.tooltip-header) td:nth-of-type(2) {
      word-break: break-word;
    }
  }
  .d3-tip.nv-event-annotation-layer-table,
  .d3-tip.nv-event-annotation-layer-NATIVE {
    width: 200px;
    border-radius: 2px;
    background-color: ${({theme:e})=>e.colorBgContainer};
    fill-opacity: 0.6;
    margin: ${({theme:e})=>2*e.sizeUnit}px;
    padding: ${({theme:e})=>2*e.sizeUnit}px;
    color: ${({theme:e})=>e.colorTextLightSolid};
    &:after {
      content: '\\25BC';
      font-size: ${({theme:e})=>e.fontSize};
      color: ${({theme:e})=>e.colorText};
      position: absolute;
      bottom: -14px;
      left: 94px;
    }
  }
`}}]);