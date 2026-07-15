"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3096],{83174(t,e,i){function o(t,e,i,n,s=[]){let r,a;if(8&i)r=(n[3]-t[1])/(e[1]-t[1]),a=3;else if(4&i)r=(n[1]-t[1])/(e[1]-t[1]),a=1;else if(2&i)r=(n[2]-t[0])/(e[0]-t[0]),a=2;else{if(!(1&i))return null;r=(n[0]-t[0])/(e[0]-t[0]),a=0}for(let i=0;i<t.length;i++)s[i]=(1&a)===i?n[a]:r*(e[i]-t[i])+t[i];return s}function n(t,e){let i=0;return t[0]<e[0]?i|=1:t[0]>e[2]&&(i|=2),t[1]<e[1]?i|=4:t[1]>e[3]&&(i|=8),i}i.d(e,{w:()=>a,M:()=>r});var s=i(1046);function r(t,e){let i,r,{size:a=2,broken:l=!1,gridResolution:h=10,gridOffset:p=[0,0],startIndex:f=0,endIndex:d=t.length}=e||{},u=(d-f)/a,g=[],P=[g],v=(0,s.ah)(t,0,a,f),y=c(v,h,p,[]),m=[];(0,s.VC)(g,v);for(let e=1;e<u;e++){for(r=n(i=(0,s.ah)(t,e,a,f,i),y);r;){var x,S,_;o(v,i,r,y,m);let t=n(m,y);t&&(o(v,m,t,y,m),r=t),(0,s.VC)(g,m),(0,s.C)(v,m),x=y,S=h,8&(_=r)?(x[1]+=S,x[3]+=S):4&_?(x[1]-=S,x[3]-=S):2&_?(x[0]+=S,x[2]+=S):1&_&&(x[0]-=S,x[2]-=S),l&&g.length>a&&(g=[],P.push(g),(0,s.VC)(g,v)),r=n(i,y)}(0,s.VC)(g,i),(0,s.C)(v,i)}return l?P:P[0]}function a(t,e=null,i){if(!t.length)return[];let{size:o=2,gridResolution:s=10,gridOffset:r=[0,0],edgeTypes:p=!1}=i||{},f=[],d=[{pos:t,types:p?Array(t.length/o).fill(1):null,holes:e||[]}],u=[[],[]],g=[];for(;d.length;){let{pos:t,types:e,holes:i}=d.shift();(function(t,e,i,o){let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let o=0;o<i;o+=e){let e=t[o],i=t[o+1];n=e<n?e:n,s=e>s?e:s,r=i<r?i:r,a=i>a?i:a}o[0][0]=n,o[0][1]=r,o[1][0]=s,o[1][1]=a})(t,o,i[0]||t.length,u),g=c(u[0],s,r,g);let a=n(u[1],g);if(a){let n=l(t,e,o,0,i[0]||t.length,g,a),s={pos:n[0].pos,types:n[0].types,holes:[]},r={pos:n[1].pos,types:n[1].types,holes:[]};d.push(s,r);for(let c=0;c<i.length;c++)(n=l(t,e,o,i[c],i[c+1]||t.length,g,a))[0]&&(s.holes.push(s.pos.length),s.pos=h(s.pos,n[0].pos),p&&(s.types=h(s.types,n[0].types))),n[1]&&(r.holes.push(r.pos.length),r.pos=h(r.pos,n[1].pos),p&&(r.types=h(r.types,n[1].types)))}else{let o={positions:t};p&&(o.edgeTypes=e),i.length&&(o.holeIndices=i),f.push(o)}}return f}function l(t,e,i,n,r,a,l){let c,h,p,f=(r-n)/i,d=[],u=[],g=[],P=[],v=[],y=(0,s.ah)(t,f-1,i,n),m=Math.sign(8&l?y[1]-a[3]:y[0]-a[2]),x=e&&e[f-1],S=0,_=0;for(let r=0;r<f;r++)c=(0,s.ah)(t,r,i,n,c),h=Math.sign(8&l?c[1]-a[3]:c[0]-a[2]),p=e&&e[n/i+r],h&&m&&m!==h&&(o(y,c,l,a,v),(0,s.VC)(d,v)&&g.push(x),(0,s.VC)(u,v)&&P.push(x)),h<=0?((0,s.VC)(d,c)&&g.push(p),S-=h):g.length&&(g[g.length-1]=0),h>=0?((0,s.VC)(u,c)&&P.push(p),_+=h):P.length&&(P[P.length-1]=0),(0,s.C)(y,c),m=h,x=p;return[S?{pos:d,types:e&&g}:null,_?{pos:u,types:e&&P}:null]}function c(t,e,i,o){let n=Math.floor((t[0]-i[0])/e)*e+i[0],s=Math.floor((t[1]-i[1])/e)*e+i[1];return o[0]=n,o[1]=s,o[2]=n+e,o[3]=s+e,o}function h(t,e){for(let i=0;i<e.length;i++)t.push(e[i]);return t}},55861(t,e,i){i.d(e,{E:()=>r,I:()=>s});var o=i(83174),n=i(1046);function s(t,e){let{size:i=2,startIndex:n=0,endIndex:s=t.length,normalize:r=!0}=e||{},c=t.slice(n,s);a(c,i,0,s-n);let h=(0,o.M)(c,{size:i,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(r)for(let t of h)l(t,i);return h}function r(t,e=null,i){let{size:s=2,normalize:c=!0,edgeTypes:h=!1}=i||{};e=e||[];let p=[],f=[],d=0,u=0;for(let o=0;o<=e.length;o++){let r=e[o]||t.length,l=u,c=function(t,e,i,o){let n=-1,s=-1;for(let r=i+1;r<o;r+=e){let e=Math.abs(t[r]);e>n&&(n=e,s=r-1)}return s}(t,s,d,r);for(let e=c;e<r;e++)p[u++]=t[e];for(let e=d;e<c;e++)p[u++]=t[e];a(p,s,l,u),function(t,e,i,o,s=85.051129){let r=t[i],a=t[o-e];if(Math.abs(r-a)>180){let o=(0,n.ah)(t,0,e,i);o[0]+=360*Math.round((a-r)/360),(0,n.VC)(t,o),o[1]=Math.sign(o[1])*s,(0,n.VC)(t,o),o[0]=r,(0,n.VC)(t,o)}}(p,s,l,u,i?.maxLatitude),d=r,f[o]=u}f.pop();let g=(0,o.w)(p,f,{size:s,gridResolution:360,gridOffset:[-180,-180],edgeTypes:h});if(c)for(let t of g)l(t.positions,s);return g}function a(t,e,i,o){let n,s=t[0];for(let r=i;r<o;r+=e){let e=(n=t[r])-s;(e>180||e<-180)&&(n-=360*Math.round(e/360)),t[r]=s=n}}function l(t,e){let i,o=t.length/e;for(let n=0;n<o&&((i=t[n*e])+180)%360==0;n++);let n=-(360*Math.round(i/360));if(0!==n)for(let i=0;i<o;i++)t[i*e]+=n}},1046(t,e,i){function o(t,e){let i=e.length,o=t.length;if(o>0){let n=!0;for(let s=0;s<i;s++)if(t[o-i+s]!==e[s]){n=!1;break}if(n)return!1}for(let n=0;n<i;n++)t[o+n]=e[n];return!0}function n(t,e){let i=e.length;for(let o=0;o<i;o++)t[o]=e[o]}function s(t,e,i,o,n=[]){let r=o+e*i;for(let e=0;e<i;e++)n[e]=t[r+e];return n}i.d(e,{C:()=>n,VC:()=>o,ah:()=>s})},21810(t,e,i){i.d(e,{A:()=>a});var o=i(37604),n=i(57594),s=i(98480),r=i(44992);class a{constructor(t){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;const{attributes:e={}}=t;this.typedArrayManager=n.A,this.attributes={},this._attributeDefs=e,this.opts=t,this.updateGeometry(t)}updateGeometry(t){Object.assign(this.opts,t);let{data:e,buffers:i={},getGeometry:o,geometryBuffer:n,positionFormat:r,dataChanged:a,normalize:l=!0}=this.opts;if(this.data=e,this.getGeometry=o,this.positionSize=n&&n.size||("XY"===r?2:3),this.buffers=i,this.normalize=l,n&&((0,s.A)(e.startIndices),this.getGeometry=this.getGeometryFromBuffer(n),l||(i.vertexPositions=n)),this.geometryBuffer=i.vertexPositions,Array.isArray(a))for(let t of a)this._rebuildGeometry(t);else this._rebuildGeometry()}updatePartialGeometry({startRow:t,endRow:e}){this._rebuildGeometry({startRow:t,endRow:e})}getGeometryFromBuffer(t){let e=t.value||t;return ArrayBuffer.isView(e)?(0,o.I)(e,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices}):null}_allocate(t,e){let{attributes:i,buffers:o,_attributeDefs:n,typedArrayManager:s}=this;for(let r in n)if(r in o)s.release(i[r]),i[r]=null;else{let o=n[r];o.copy=e,i[r]=s.allocate(i[r],t,o)}}_forEachGeometry(t,e,i){let{data:n,getGeometry:s}=this,{iterable:r,objectInfo:a}=(0,o.X)(n,e,i);for(let e of r)a.index++,t(s?s(e,a):null,a.index)}_rebuildGeometry(t){if(!this.data)return;let{indexStarts:e,vertexStarts:i,instanceCount:o}=this,{data:n,geometryBuffer:s}=this,{startRow:a=0,endRow:l=1/0}=t||{},c={};if(t||(e=[0],i=[0]),this.normalize||!s)this._forEachGeometry((t,e)=>{let o=t&&this.normalizeGeometry(t);c[e]=o,i[e+1]=i[e]+(o?this.getGeometrySize(o):0)},a,l),o=i[i.length-1];else if(o=(i=n.startIndices)[n.length]||0,ArrayBuffer.isView(s))o=o||s.length/this.positionSize;else if(s instanceof r.h){let t=4*this.positionSize;o=o||s.byteLength/t}else if(s.buffer){let t=s.stride||4*this.positionSize;o=o||s.buffer.byteLength/t}else if(s.value){let t=s.value,e=s.stride/t.BYTES_PER_ELEMENT||this.positionSize;o=o||t.length/e}this._allocate(o,!!t),this.indexStarts=e,this.vertexStarts=i,this.instanceCount=o;let h={};this._forEachGeometry((t,n)=>{let s=c[n]||t;h.vertexStart=i[n],h.indexStart=e[n],h.geometrySize=(n<i.length-1?i[n+1]:o)-i[n],h.geometryIndex=n,this.updateGeometryAttributes(s,h)},a,l),this.vertexCount=e[e.length-1]}}},23096(t,e,i){i.d(e,{A:()=>_});var o=i(15473),n=i(38706),s=i(82849),r=i(59),a=i(25140),l=i(65771),c=i(21810),h=i(83174),p=i(55861);class f extends c.A{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(t){return this.attributes[t]}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):null}normalizeGeometry(t){return this.normalize?function(t,e,i,o){let n;if(Array.isArray(t[0])){n=Array(t.length*e);for(let i=0;i<t.length;i++)for(let o=0;o<e;o++)n[i*e+o]=t[i][o]||0}else n=t;return i?(0,h.M)(n,{size:e,gridResolution:i}):o?(0,p.I)(n,{size:e}):n}(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}getGeometrySize(t){if(d(t)){let e=0;for(let i of t)e+=this.getGeometrySize(i);return e}let e=this.getPathLength(t);return e<2?0:this.isClosed(t)?e<3?0:e+2:e}updateGeometryAttributes(t,e){if(0!==e.geometrySize)if(t&&d(t))for(let i of t){let t=this.getGeometrySize(i);e.geometrySize=t,this.updateGeometryAttributes(i,e),e.vertexStart+=t}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}_updateSegmentTypes(t,e){let i=this.attributes.segmentTypes,o=!!t&&this.isClosed(t),{vertexStart:n,geometrySize:s}=e;i.fill(0,n,n+s),o?(i[n]=4,i[n+s-2]=4):(i[n]+=1,i[n+s-2]+=2),i[n+s-1]=4}_updatePositions(t,e){let{positions:i}=this.attributes;if(!i||!t)return;let{vertexStart:o,geometrySize:n}=e,s=[,,,];for(let e=o,r=0;r<n;e++,r++)this.getPointOnPath(t,r,s),i[3*e]=s[0],i[3*e+1]=s[1],i[3*e+2]=s[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,e,i=[]){let{positionSize:o}=this;e*o>=t.length&&(e+=1-t.length/o);let n=e*o;return i[0]=t[n],i[1]=t[n+1],i[2]=3===o&&t[n+2]||0,i}isClosed(t){if(!this.normalize)return!!this.opts.loop;let{positionSize:e}=this,i=t.length-e;return t[0]===t[i]&&t[1]===t[i+1]&&(2===e||t[2]===t[i+2])}}function d(t){return Array.isArray(t[0])}let u=`\
uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,g={name:"path",vs:u,fs:u,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},P=`\
#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in vec3 instancePickingColors;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
vPathLength = L;
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
dot(offsetFromStartOfPath, dir)
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
void main() {
geometry.pickingColor = instancePickingColors;
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
);
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,v=`\
#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,y=[0,0,0,255],m={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:t=>t.path},getColor:{type:"accessor",value:y},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},x={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t};class S extends o.A{getShaders(){return super.getShaders({vs:P,fs:v,modules:[n.A,s.A,g]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){this.getAttributeManager().addInstanced({vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:x,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:x,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:x,defaultValue:y},instancePickingColors:{size:4,type:"uint8",accessor:(t,{index:e,target:i})=>this.encodePickingColor(t&&t.__source?t.__source.index:e,i)}}),this.setState({pathTesselator:new f({fp64:this.use64bitPositions()})})}updateState(t){super.updateState(t);let{props:e,changeFlags:i}=t,o=this.getAttributeManager();if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPath)){let{pathTesselator:t}=this.state,n=e.data.attributes||{};t.updateGeometry({data:e.data,geometryBuffer:n.getPath,buffers:n,normalize:!e._pathType,loop:"loop"===e._pathType,getGeometry:e.getPath,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:i.dataChanged}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),i.dataChanged||o.invalidateAll()}i.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),o.invalidateAll())}getPickingInfo(t){let e=super.getPickingInfo(t),{index:i}=e,o=this.props.data;return o[0]&&o[0].__source&&(e.object=o.find(t=>t.__source.index===i)),e}disablePickingIndex(t){let e=this.props.data;if(e[0]&&e[0].__source)for(let i=0;i<e.length;i++)e[i].__source.index===t&&this._disablePickingIndex(i);else super.disablePickingIndex(t)}draw({uniforms:t}){let{jointRounded:e,capRounded:i,billboard:o,miterLimit:n,widthUnits:s,widthScale:a,widthMinPixels:l,widthMaxPixels:c}=this.props,h=this.state.model,p={jointType:Number(e),capType:Number(i),billboard:o,widthUnits:r.p5[s],widthScale:a,miterLimit:n,widthMinPixels:l,widthMaxPixels:c};h.shaderInputs.setProps({path:p}),h.draw(this.context.renderPass)}_getModel(){return new l.K(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new a.V({topology:"triangle-list",attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(t){let{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateSegmentTypes(t){let{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}}S.defaultProps=m,S.layerName="PathLayer";let _=S}}]);