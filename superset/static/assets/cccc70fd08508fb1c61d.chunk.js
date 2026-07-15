"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8154],{98154(e,t,i){i.r(t),i.d(t,{default:()=>$,getLayer:()=>L,getPoints:()=>k});var o=i(2445),s=i(38706),r=i(2379),n=i(39585),a=i(86719),l=i(65771),c=i(25140),p=i(15473),d=i(82849),g=i(14063);let u=`\
#version 300 es
#define SHADER_NAME screen-grid-layer-vertex-shader
#define RANGE_COUNT 6
in vec2 positions;
in vec2 instancePositions;
in float instanceWeights;
in vec3 instancePickingColors;
uniform sampler2D colorRange;
out vec4 vColor;
vec4 interp(float value, vec2 domain, sampler2D range) {
float r = (value - domain.x) / (domain.y - domain.x);
return texture(range, vec2(r, 0.5));
}
void main(void) {
if (isnan(instanceWeights)) {
gl_Position = vec4(0.);
return;
}
vec2 pos = instancePositions * screenGrid.gridSizeClipspace + positions * screenGrid.cellSizeClipspace;
pos.x = pos.x - 1.0;
pos.y = 1.0 - pos.y;
gl_Position = vec4(pos, 0., 1.);
vColor = interp(instanceWeights, screenGrid.colorDomain, colorRange);
vColor.a *= layer.opacity;
picking_setPickingColor(instancePickingColors);
}
`,h=`\
#version 300 es
#define SHADER_NAME screen-grid-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,v={name:"screenGrid",vs:`\
uniform screenGridUniforms {
  vec2 cellSizeClipspace;
  vec2 gridSizeClipspace;
  vec2 colorDomain;
} screenGrid;
`,uniformTypes:{cellSizeClipspace:"vec2<f32>",gridSizeClipspace:"vec2<f32>",colorDomain:"vec2<f32>"}};class f extends p.A{getShaders(){return super.getShaders({vs:u,fs:h,modules:[d.A,v]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:2,type:"float32",accessor:"getBin"},instanceWeights:{size:1,type:"float32",accessor:"getWeight"}}),this.state.model=this._getModel()}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:o}=e,s=this.state.model;if(i.colorRange!==t.colorRange){this.state.colorTexture?.destroy(),this.state.colorTexture=(0,g.cp)(this.context.device,t.colorRange,t.colorScaleType);let e={colorRange:this.state.colorTexture};s.shaderInputs.setProps({screenGrid:e})}else i.colorScaleType!==t.colorScaleType&&(0,g.Pu)(this.state.colorTexture,t.colorScaleType);if(i.cellMarginPixels!==t.cellMarginPixels||i.cellSizePixels!==t.cellSizePixels||o.viewportChanged){let{width:e,height:t}=this.context.viewport,{cellSizePixels:i,cellMarginPixels:o}=this.props,r=Math.max(i-o,0);s.shaderInputs.setProps({screenGrid:{gridSizeClipspace:[i/e*2,i/t*2],cellSizeClipspace:[r/e*2,r/t*2]}})}}finalizeState(e){super.finalizeState(e),this.state.colorTexture?.destroy()}draw({uniforms:e}){let t=this.props.colorDomain(),i=this.state.model;i.shaderInputs.setProps({screenGrid:{colorDomain:t}}),i.draw(this.context.renderPass)}_getModel(){return new l.K(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new c.V({topology:"triangle-strip",attributes:{positions:{value:new Float32Array([0,0,1,0,0,1,1,1]),size:2}}}),isInstanced:!0})}}f.layerName="ScreenGridCellLayer";let m={name:"binOptions",vs:`\
uniform binOptionsUniforms {
  float cellSizePixels;
} binOptions;
`,uniformTypes:{cellSizePixels:"f32"}},y={cellSizePixels:{type:"number",value:100,min:1},cellMarginPixels:{type:"number",value:2,min:0},colorRange:g.QO,colorScaleType:"linear",getPosition:{type:"accessor",value:e=>e.position},getWeight:{type:"accessor",value:1},gpuAggregation:!0,aggregation:"SUM"};class S extends a.A{getAggregatorType(){return this.props.gpuAggregation&&r.V.isSupported(this.context.device)?"gpu":"cpu"}createAggregator(e){return"cpu"!==e&&r.V.isSupported(this.context.device)?new r.V(this.context.device,{dimensions:2,channelCount:1,bufferLayout:this.getAttributeManager().getBufferLayouts({isInstanced:!1}),...super.getShaders({modules:[s.A,m],vs:`
  in vec3 positions;
  in vec3 positions64Low;
  in float counts;
  
  void getBin(out ivec2 binId) {
    vec4 pos = project_position_to_clipspace(positions, positions64Low, vec3(0.0));
    vec2 screenCoords = vec2(pos.x / pos.w + 1.0, 1.0 - pos.y / pos.w) / 2.0 * project.viewportSize / project.devicePixelRatio;
    vec2 gridCoords = floor(screenCoords / binOptions.cellSizePixels);
    binId = ivec2(gridCoords);
  }
  void getValue(out float weight) {
    weight = counts;
  }
  `})}):new n.M({dimensions:2,getBin:{sources:["positions"],getValue:({positions:e},t,i)=>{let o=this.context.viewport,s=o.project(e),r=i.cellSizePixels;return s[0]<0||s[0]>=o.width||s[1]<0||s[1]>=o.height?null:[Math.floor(s[0]/r),Math.floor(s[1]/r)]}},getValue:[{sources:["counts"],getValue:({counts:e})=>e}]})}initializeState(){super.initializeState(),this.getAttributeManager().add({positions:{size:3,accessor:"getPosition",type:"float64",fp64:this.use64bitPositions()},counts:{size:1,accessor:"getWeight"}})}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState(e){let t=super.updateState(e),{props:i,oldProps:o,changeFlags:s}=e,{cellSizePixels:n,aggregation:a}=i;if(t||s.dataChanged||s.updateTriggersChanged||s.viewportChanged||a!==o.aggregation||n!==o.cellSizePixels){let{width:e,height:t}=this.context.viewport,{aggregator:i}=this.state;i instanceof r.V&&i.setProps({binIdRange:[[0,Math.ceil(e/n)],[0,Math.ceil(t/n)]]}),i.setProps({pointCount:this.getNumInstances(),operations:[a],binOptions:{cellSizePixels:n}})}return s.viewportChanged&&this.state.aggregator.setNeedsUpdate(),t}onAttributeChange(e){let{aggregator:t}=this.state;switch(e){case"positions":t.setNeedsUpdate();break;case"counts":t.setNeedsUpdate(0)}}renderLayers(){let{aggregator:e}=this.state,t=this.getSubLayerClass("cells",f),i=e.getBins(),o=e.getResult(0);return new t(this.props,this.getSubLayerProps({id:"cell-layer"}),{data:{length:e.binCount,attributes:{getBin:i,getWeight:o}},dataComparator:(e,t)=>e.length===t.length,updateTriggers:{getBin:[i],getWeight:[o]},parameters:{depthWriteEnabled:!1,...this.props.parameters},colorDomain:()=>this.props.colorDomain||e.getResultDomain(0),extensions:[]})}getPickingInfo(e){let t=e.info,{index:i}=t;if(i>=0){let e,o=this.state.aggregator.getBin(i);o&&(e={col:o.id[0],row:o.id[1],value:o.value[0],count:o.count},o.pointIndices&&(e.pointIndices=o.pointIndices,e.points=Array.isArray(this.props.data)?o.pointIndices.map(e=>this.props.data[e]):[])),t.object=e}return t}}S.layerName="ScreenGridLayer",S.defaultProps=y;var x=i(27124),b=i(14230),C=i(85614),z=i(40206),P=i(7173),_=i(51e3),w=i(40889),A=i(75733),T=i(43833),M=i(9328);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e}).apply(this,arguments)}let R=C.styled.div`
  margin-top: ${({theme:e})=>e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorTextSecondary};
`;function k(e){return e.map(e=>e.position)}let L=function({formData:e,setDataMask:t,filterState:i,onContextMenu:s,payload:r,setTooltip:n,emitCrossFilters:a}){let l=e.color_scheme,c=b.getScale(l),p=r.data.features;e.js_data_mutator&&(p=(0,P.A)(e.js_data_mutator)(p));let d=e.color_scheme_type,g=(0,_.XC)({defaultBreakpointsColor:e.default_breakpoint_color,colorBreakpoints:e.color_breakpoints,fixedColor:e.color_picker,colorSchemeType:d,colorScale:c}),u=e.grid_size||50,h=new Map;p.forEach(e=>{let{position:t}=e;if(t){let i=Math.floor(t[0]/(.01*u)),o=Math.floor(t[1]/(.01*u)),s=`${i},${o}`;h.has(s)||h.set(s,[]),h.get(s).push(e)}});let v=(0,M.j1)(e,t=>{var i,s,r,n,a,l;let c,p,d;return c=(null==(i=e.size)?void 0:i.label)||(null==(s=e.size)?void 0:s.value)||"Weight",d=(p=t.points||[]).length||0,(0,o.FD)("div",{className:"deckgl-tooltip",children:[M.EO.centroid(t),(0,o.Y)(w.A,{label:(0,x.t)("Longitude and Latitude")+": ",value:`${null==t||null==(r=t.coordinate)?void 0:r[0]}, ${null==t||null==(n=t.coordinate)?void 0:n[1]}`}),(0,o.Y)(w.A,{label:(0,x.t)("Weight")+": ",value:`${null==(a=t.object)?void 0:a.value}`}),(0,o.Y)(w.A,{label:`${c}: `,value:`${null==(l=t.object)?void 0:l.cellWeight}`}),(0,o.Y)(w.A,{label:`${(0,x.t)("Points")}: `,value:`${d} ${(0,x.t)("records")}`}),p.length>0&&p.length<=3&&(0,o.FD)("div",{style:{marginTop:8,fontSize:"12px"},children:[(0,o.FD)("strong",{children:[(0,x.t)("Records"),":"]}),p.slice(0,3).map((e,t)=>(0,o.Y)("div",{style:{marginTop:4,paddingLeft:"8px"},children:Object.entries(e).map(([e,t])=>"position"!==e&&"weight"!==e&&"__timestamp"!==e&&"points"!==e?(0,o.FD)("span",{style:{marginRight:"8px"},children:[(0,o.FD)("strong",{children:[e,":"]})," ",String(t)]},e):null)},t))]}),p.length>3&&(0,o.Y)(R,{children:(0,x.t)("... and %s more records",p.length-3)})]})});return new S(D({id:`screengrid-layer-${e.slice_id}`,data:p,cellSizePixels:e.grid_size,colorDomain:d===z.wP.color_breakpoints&&g?[0,g.length]:void 0,colorRange:"default"===d?[[255,255,178],[254,217,118],[254,178,76],[253,141,60],[240,59,32],[189,0,38]]:g,outline:!1},(0,_.T$)({formData:e,setDataMask:t,setTooltip:n,setTooltipContent:v,filterState:i,onContextMenu:s,emitCrossFilters:a}),{getWeight:e=>e.weight||0,colorScaleType:"default"===d?"linear":"quantize",onHover:e=>{if(e.picked){let t=e.coordinate,i=Math.floor(t[0]/(.01*u)),o=Math.floor(t[1]/(.01*u)),s=`${i},${o}`,r=h.get(s)||[];n({content:v(D({},e,{object:D({},e.object,{points:r})})),x:e.x,y:e.y})}else n(null);return!0},pickable:!0,opacity:(null==i?void 0:i.value)?.3:1}))},$=(0,A.y)(L,k,function({formData:e,filterState:t,payload:i}){let o=i.data.features;e.js_data_mutator&&(o=(0,P.A)(e.js_data_mutator)(o));let s=o.filter(e=>(0,z.st)(e.position,null==t?void 0:t.value));return new S({id:`screengrid-highlight-layer-${e.slice_id}`,data:s,cellSizePixels:e.grid_size,colorDomain:[0,1],colorRange:[T.LC,T.Fe],outline:!1,getWeight:e=>e.weight||0,colorScaleType:"quantize"})})}}]);