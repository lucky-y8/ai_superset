"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3571],{73976(i,t,e){e.r(t),e.d(t,{getPoints:()=>u});var o=e(2445),l=e(23096),r=e(51e3),n=e(7173),c=e(75733),h=e(9328),s=e(43833),g=e(48280);function a(){return(a=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=e[o])}return i}).apply(this,arguments)}let d=function({formData:i,payload:t,onContextMenu:e,filterState:c,setDataMask:s,setTooltip:d,emitCrossFilters:u}){var p;let v=t.data.features.map(t=>{if(t.color)return a({},t);let e=i.color_picker||{r:0,g:0,b:0,a:1},o=[e.r,e.g,e.b,255*e.a];return a({},t,{path:t.path,color:o})}),f=Number(i.min_width)||1,b=Number(i.max_width)||20,_=Number(i.line_width_multiplier)||1,k=v.map(i=>i.width).filter(Number.isFinite);if((0,g.q3)(i.line_width)){let i=k.length>0?Math.min(...k):f,t=k.length>0?Math.max(...k):b;v=v.map(e=>{if(null==e.width)return a({},e,{width:f});let o=f+(t===i?.5:(e.width-i)/(t-i))*(b-f);return o*=_,a({},e,{width:o=Math.max(f,Math.min(b,o))})})}else{let t="number"==typeof i.line_width?i.line_width:"object"==typeof i.line_width&&(null==(p=i.line_width)?void 0:p.type)==="fix"?Number(i.line_width.value):void 0;v=v.map(i=>{var e,o;let l=(null!=(e=null!=(o=i.width)?o:t)?e:1)*_;return a({},i,{width:l=Math.max(f,Math.min(b,l))})})}return i.js_data_mutator&&(v=(0,n.A)(i.js_data_mutator)(v)),new l.A(a({id:`path-layer-${i.slice_id}`,getColor:i=>i.color||[0,0,0,255],getPath:i=>i.path,getWidth:i=>i.width,data:v,rounded:!0,widthScale:1,widthUnits:i.line_width_unit,widthMinPixels:Number(i.min_width)||void 0,widthMaxPixels:Number(i.max_width)||void 0},(0,r.T$)({formData:i,setTooltip:d,setTooltipContent:(0,h.j1)(i,i=>(0,o.FD)("div",{className:"deckgl-tooltip",children:[h.EO.position(i),h.EO.category(i)]})),setDataMask:s,filterState:c,onContextMenu:e,emitCrossFilters:u}),{opacity:(null==c?void 0:c.value)?.3:1}))};function u(i){let t=[];return i.forEach(i=>{t=t.concat(i.path)}),t}let p=function({formData:i,payload:t,filterState:e}){let o=Number(i.min_width)||1,r=Number(i.max_width)||20,c=Number(i.line_width_multiplier)||1,h=s.Fe,g=t.data.features.map(i=>{let t=(Number.isFinite(i.width)?i.width:1)*c;return t=Math.max(o,Math.min(r,t)),a({},i,{path:i.path,width:t,color:h})});i.js_data_mutator&&(g=(0,n.A)(i.js_data_mutator)(g));let d=g.filter(i=>{var t;return JSON.stringify(i.path).replaceAll(" ","")===(null==e||null==(t=e.value)?void 0:t[0])});return new l.A({id:`path-highlight-layer-${i.slice_id}`,getColor:()=>s.Fe,getPath:i=>i.path,getWidth:i=>i.width,data:d,rounded:!0,widthScale:1,widthUnits:i.line_width_unit,widthMinPixels:Number(i.min_width)||void 0,widthMaxPixels:Number(i.max_width)||void 0})},v=(0,c.c)(d,u,p);e.d(t,["default",0,v,"getHighlightLayer",0,p,"getLayer",0,d])},82849(i,t,e){e.d(t,{A:()=>l});let o={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useFloatColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useFloatColors > 0.5 ? color : color / 255.0;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useFloatColors > 0.5 ? color : color / 255.0;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`\
uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useFloatColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:function(i={},t){let e={};if(void 0===i.highlightedObjectColor||(null===i.highlightedObjectColor?e.isHighlightActive=!1:(e.isHighlightActive=!0,e.highlightedObjectColor=i.highlightedObjectColor.slice(0,3))),i.highlightColor){let t=Array.from(i.highlightColor,i=>i/255);Number.isFinite(t[3])||(t[3]=1),e.highlightColor=t}return void 0!==i.isActive&&(e.isActive=!!i.isActive,e.isAttribute=!!i.isAttribute),void 0!==i.useFloatColors&&(e.useFloatColors=!!i.useFloatColors),e}},l={...o,defaultUniforms:{...o.defaultUniforms,useFloatColors:!1},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}}},25140(i,t,e){e.d(t,{V:()=>l});var o=e(55025);class l{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:e=null,vertexCount:l=null}=i;for(const[l,r]of(this.id=i.id||(0,o.L)("geometry"),this.topology=i.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={},Object.entries(t))){const i=ArrayBuffer.isView(r)?{value:r}:r;if(!ArrayBuffer.isView(i.value))throw Error(`${this._print(l)}: must be typed array or object with value as typed array`);if("POSITION"!==l&&"positions"!==l||i.size||(i.size=3),"indices"===l){if(this.indices)throw Error("Multiple indices detected");this.indices=i}else this.attributes[l]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=l||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let e=1/0;for(let t of Object.values(i)){let{value:i,size:o,constant:l}=t;!l&&i&&void 0!==o&&o>=1&&(e=Math.min(e,i.length/o))}return e}}}}]);