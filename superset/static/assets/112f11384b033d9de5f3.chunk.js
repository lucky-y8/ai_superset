"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4766],{57045(i,t,e){function o(i,t,e={}){return function(i,t={}){return Math.sign(function(i,t={}){let{start:e=0,end:o=i.length,plane:l="xy"}=t,n=t.size||2,g=0,a=r[l[0]],c=r[l[1]];for(let t=e,r=o-n;t<o;t+=n)g+=(i[t+a]-i[r+a])*(i[t+c]+i[r+c]),r=t;return g/2}(i,t))}(i,e)!==t&&(function(i,t){let{start:e=0,end:o=i.length,size:r=2}=t,l=(o-e)/r,n=Math.floor(l/2);for(let t=0;t<n;++t){let o=e+t*r,n=e+(l-1-t)*r;for(let t=0;t<r;++t){let e=i[o+t];i[o+t]=i[n+t],i[n+t]=e}}}(i,e),!0)}e.d(t,{UD:()=>o});let r={x:0,y:1,z:2};e.d(t,["rJ",0,{CLOCKWISE:1,COUNTER_CLOCKWISE:-1}])},71677(i,t,e){var o=e(15473),r=e(46714),l=e(6426),n=e(51392);class g extends o.A{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(i=>i.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(i){}setState(i){super.setState(i),this.setNeedsUpdate()}getPickingInfo({info:i}){let{object:t}=i;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(i.object=t.__source.object,i.index=t.__source.index),i}filterSubLayer(i){return!0}shouldRenderSubLayer(i,t){return t&&t.length}getSubLayerClass(i,t){let{_subLayerProps:e}=this.props;return e&&e[i]&&e[i].type||t}getSubLayerRow(i,t,e){return i.__source={parent:this,object:t,index:e},i}getSubLayerAccessor(i){if("function"==typeof i){let t={index:-1,data:this.props.data,target:[]};return(e,o)=>e&&e.__source?(t.index=e.__source.index,i(e.__source.object,t)):i(e,o)}return i}getSubLayerProps(i={}){let{opacity:t,pickable:e,visible:o,parameters:r,getPolygonOffset:l,highlightedObjectIndex:g,autoHighlight:a,highlightColor:c,coordinateSystem:h,coordinateOrigin:s,wrapLongitude:u,positionFormat:d,modelMatrix:p,extensions:f,fetch:v,operation:_,_subLayerProps:C}=this.props,L={id:"",updateTriggers:{},opacity:t,pickable:e,visible:o,parameters:r,getPolygonOffset:l,highlightedObjectIndex:g,autoHighlight:a,highlightColor:c,coordinateSystem:h,coordinateOrigin:s,wrapLongitude:u,positionFormat:d,modelMatrix:p,extensions:f,fetch:v,operation:_},m=C&&i.id&&C[i.id],b=m&&m.updateTriggers,A=i.id||"sublayer";if(m){let t=this.props[n.fW],e=i.type?i.type._propTypes:{};for(let i in m){let o=e[i]||t[i];o&&"accessor"===o.type&&(m[i]=this.getSubLayerAccessor(m[i]))}}for(let t of(Object.assign(L,i,m),L.id=`${this.props.id}-${A}`,L.updateTriggers={all:this.props.updateTriggers?.all,...i.updateTriggers,...b},f)){let i=t.getSubLayerProps.call(this,t);i&&Object.assign(L,i,{updateTriggers:Object.assign(L.updateTriggers,i.updateTriggers)})}return L}_updateAutoHighlight(i){for(let t of this.getSubLayers())t.updateAutoHighlight(i)}_getAttributeManager(){return null}_postUpdate(i,t){let e=this.internalState.subLayers,o=!e||this.needsUpdate();if(o){let i=this.renderLayers();e=(0,l.B)(i,Boolean),this.internalState.subLayers=e}for(let i of((0,r.A)("compositeLayer.renderLayers",this,o,e),e))i.parent=this}}g.layerName="CompositeLayer",e.d(t,["A",0,g])},82849(i,t,e){e.d(t,{A:()=>r});let o={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
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
`,getUniforms:function(i={},t){let e={};if(void 0===i.highlightedObjectColor||(null===i.highlightedObjectColor?e.isHighlightActive=!1:(e.isHighlightActive=!0,e.highlightedObjectColor=i.highlightedObjectColor.slice(0,3))),i.highlightColor){let t=Array.from(i.highlightColor,i=>i/255);Number.isFinite(t[3])||(t[3]=1),e.highlightColor=t}return void 0!==i.isActive&&(e.isActive=!!i.isActive,e.isAttribute=!!i.isAttribute),void 0!==i.useFloatColors&&(e.useFloatColors=!!i.useFloatColors),e}},r={...o,defaultUniforms:{...o.defaultUniforms,useFloatColors:!1},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}}},25140(i,t,e){e.d(t,{V:()=>r});var o=e(55025);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:e=null,vertexCount:r=null}=i;for(const[r,l]of(this.id=i.id||(0,o.L)("geometry"),this.topology=i.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={},Object.entries(t))){const i=ArrayBuffer.isView(l)?{value:l}:l;if(!ArrayBuffer.isView(i.value))throw Error(`${this._print(r)}: must be typed array or object with value as typed array`);if("POSITION"!==r&&"positions"!==r||i.size||(i.size=3),"indices"===r){if(this.indices)throw Error("Multiple indices detected");this.indices=i}else this.attributes[r]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let e=1/0;for(let t of Object.values(i)){let{value:i,size:o,constant:r}=t;!r&&i&&void 0!==o&&o>=1&&(e=Math.min(e,i.length/o))}return e}}},34521(i,t,e){var o=e(63583),r=e(23479),l=e(53014);let n={props:{},name:"gouraudMaterial",vs:r.l.replace("phongMaterial","gouraudMaterial"),fs:r.X.replace("phongMaterial","gouraudMaterial"),source:l.X.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[o.x],uniformTypes:{ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{ambient:.35,diffuse:.6,shininess:32,specularColor:[.15,.15,.15]},getUniforms(i){let t={...i};return t.specularColor&&(t.specularColor=t.specularColor.map(i=>i/255)),{...n.defaultUniforms,...t}}};e.d(t,["J",0,n])},63583(i,t,e){e.d(t,{x:()=>a});var o,r,l=e(2254);let n=`\
precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

uniform lightingUniforms {
  int enabled;
  int lightType;

  int directionalLightCount;
  int pointLightCount;

  vec3 ambientColor;

  vec3 lightColor0;
  vec3 lightPosition0;
  vec3 lightDirection0;
  vec3 lightAttenuation0;

  vec3 lightColor1;
  vec3 lightPosition1;
  vec3 lightDirection1;
  vec3 lightAttenuation1;

  vec3 lightColor2;
  vec3 lightPosition2;
  vec3 lightDirection2;
  vec3 lightAttenuation2;
} lighting;

PointLight lighting_getPointLight(int index) {
  switch (index) {
    case 0:
      return PointLight(lighting.lightColor0, lighting.lightPosition0, lighting.lightAttenuation0);
    case 1:
      return PointLight(lighting.lightColor1, lighting.lightPosition1, lighting.lightAttenuation1);
    case 2:
    default:  
      return PointLight(lighting.lightColor2, lighting.lightPosition2, lighting.lightAttenuation2);
  }
}

DirectionalLight lighting_getDirectionalLight(int index) {
  switch (index) {
    case 0:
      return DirectionalLight(lighting.lightColor0, lighting.lightDirection0);
    case 1:
      return DirectionalLight(lighting.lightColor1, lighting.lightDirection1);
    case 2:
    default:   
      return DirectionalLight(lighting.lightColor2, lighting.lightDirection2);
  }
} 

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

// #endif
`,g=`\
// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct lightingUniforms {
  enabled: i32,
  pointLightCount: i32,
  directionalLightCount: i32,

  ambientColor: vec3<f32>,

  // TODO - support multiple lights by uncommenting arrays below
  lightType: i32,
  lightColor: vec3<f32>,
  lightDirection: vec3<f32>,
  lightPosition: vec3<f32>,
  lightAttenuation: vec3<f32>,

  // AmbientLight ambientLight;
  // PointLight pointLight[MAX_LIGHTS];
  // DirectionalLight directionalLight[MAX_LIGHTS];
};

// Binding 0:1 is reserved for lighting (Note: could go into separate bind group as it is stable across draw calls)
@binding(1) @group(0) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  return PointLight(lighting.lightColor, lighting.lightPosition, lighting.lightAttenuation);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  return DirectionalLight(lighting.lightColor, lighting.lightDirection);
} 

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}
`;(o=r||(r={}))[o.POINT=0]="POINT",o[o.DIRECTIONAL=1]="DIRECTIONAL";let a={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",lightType:"i32",directionalLightCount:"i32",pointLightCount:"i32",ambientColor:"vec3<f32>",lightColor0:"vec3<f32>",lightPosition0:"vec3<f32>",lightDirection0:"vec3<f32>",lightAttenuation0:"vec3<f32>",lightColor1:"vec3<f32>",lightPosition1:"vec3<f32>",lightDirection1:"vec3<f32>",lightAttenuation1:"vec3<f32>",lightColor2:"vec3<f32>",lightPosition2:"vec3<f32>",lightDirection2:"vec3<f32>",lightAttenuation2:"vec3<f32>"},defaultUniforms:{enabled:1,lightType:r.POINT,directionalLightCount:0,pointLightCount:0,ambientColor:[.1,.1,.1],lightColor0:[1,1,1],lightPosition0:[1,1,2],lightDirection0:[1,1,1],lightAttenuation0:[1,0,0],lightColor1:[1,1,1],lightPosition1:[1,1,2],lightDirection1:[1,1,1],lightAttenuation1:[1,0,0],lightColor2:[1,1,1],lightPosition2:[1,1,2],lightDirection2:[1,1,1],lightAttenuation2:[1,0,0]},source:g,vs:n,fs:n,getUniforms:function(i,t={}){if(!(i=i?{...i}:i))return{...a.defaultUniforms};i.lights&&(i={...i,...function(i){let t={pointLights:[],directionalLights:[]};for(let e of i||[])switch(e.type){case"ambient":t.ambientLight=e;break;case"directional":t.directionalLights?.push(e);break;case"point":t.pointLights?.push(e)}return t}(i.lights),lights:void 0});let{ambientLight:e,pointLights:o,directionalLights:n}=i||{};if(!(e||o&&o.length>0||n&&n.length>0))return{...a.defaultUniforms,enabled:0};let g={...a.defaultUniforms,...t,...function({ambientLight:i,pointLights:t=[],directionalLights:e=[]}){let o={};o.ambientColor=c(i);let n=0;for(let i of t){o.lightType=r.POINT;let t=n;o[`lightColor${t}`]=c(i),o[`lightPosition${t}`]=i.position,o[`lightAttenuation${t}`]=i.attenuation||[1,0,0],n++}for(let i of e){o.lightType=r.DIRECTIONAL;let t=n;o[`lightColor${t}`]=c(i),o[`lightDirection${t}`]=i.direction,n++}return n>5&&l.R.warn("MAX_LIGHTS exceeded")(),o.directionalLightCount=e.length,o.pointLightCount=t.length,o}({ambientLight:e,pointLights:o,directionalLights:n})};return void 0!==i.enabled&&(g.enabled=+!!i.enabled),g}};function c(i={}){let{color:t=[0,0,0],intensity:e=1}=i;return t.map(i=>i*e/255)}},23479(i,t,e){let o=`\
uniform phongMaterialUniforms {
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,r=`\
#define MAX_LIGHTS 3

uniform phongMaterialUniforms {
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * material.specularColor) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  int totalLights = min(MAX_LIGHTS, lighting.pointLightCount + lighting.directionalLightCount);
  for (int i = lighting.pointLightCount; i < totalLights; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`;e.d(t,["X",0,o,"l",0,r])},53014(i,t,e){let o=`\
struct phongMaterialUniforms {
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@binding(2) @group(0) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * phongMaterial.diffuse * surfaceColor + specular * phongMaterial.specularColor) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  if (lighting.lightType == 0) {
    let pointLight: PointLight  = lighting_getPointLight(0);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
  } else if (lighting.lightType == 1) {
    var directionalLight: DirectionalLight = lighting_getDirectionalLight(0);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
  /*
  for (int i = 0; i < MAX_LIGHTS; i++) {
    if (i >= lighting.pointLightCount) {
      break;
    }
    PointLight pointLight = lighting.pointLight[i];
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
  }

  for (int i = 0; i < MAX_LIGHTS; i++) {
    if (i >= lighting.directionalLightCount) {
      break;
    }
    DirectionalLight directionalLight = lighting.directionalLight[i];
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  */
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled == 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    switch (lighting.lightType) {
      case 0, default: {
        let pointLight: PointLight = lighting_getPointLight(0);
        let light_position_worldspace: vec3<f32> = pointLight.position;
        let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
        lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
      }
      case 1: {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(0);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
      }
    }
  }
  return lightColor;
}
`;e.d(t,["X",0,o])}}]);