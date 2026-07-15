"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1991],{81991(e,t,i){i.d(t,{A:()=>_});var l=i(2445),r=i(64260),o=i(25929),a=i(46942),n=i.n(a),s=i(27124),d=i(77092),c=i(85614),p=i(17437),u=i(95297),m=i(65471),g=i(10938),h=i(8563),x=i(59272),b=i(60685),v=i(72624),f=i(13512),y=i(13130);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}let z=(0,s.t)("Other"),Y=(0,s.t)("All charts"),w=(0,s.t)("Featured"),U=[w,(0,s.t)("ECharts"),(0,s.t)("Advanced-Analytics")],k="viz-type-control",C=c.styled.div`
  ${({isSelectedVizMetadata:e})=>`
    display: grid;
    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};
    // em is used here because the sidebar should be sized to fit the longest standard tag
    grid-template-columns: minmax(14em, auto) 5fr;
    grid-template-areas:
      'sidebar search'
      'sidebar main'
      'details details';
    height: 70vh;
    overflow: auto;
  `}
`,S=c.styled.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeLG}px;
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  line-height: ${({theme:e})=>6*e.sizeUnit}px;
`,A=c.styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colorBorder};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.fontSizeSM}px;
      color: ${({theme:e})=>e.colorText};
      padding-left: ${({theme:e})=>2*e.sizeUnit}px;
      padding-bottom: ${({theme:e})=>e.sizeUnit}px;
    }

    .ant-collapse-panel .ant-collapse-body {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.sizeUnit}px;
    }
  }
`,E=c.styled.div`
  grid-area: main;
  overflow-y: auto;
`,T=c.styled.div`
  ${({theme:e})=>`
    grid-area: search;
    margin-top: ${3*e.sizeUnit}px;
    margin-bottom: ${e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    margin-right: ${3*e.sizeUnit}px;
    .ant-input-affix-wrapper {
      padding-left: ${2*e.sizeUnit}px;
    }
  `}
`,F=c.styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colorIcon};
`,O=c.styled.button`
  ${({theme:e})=>`
    all: unset; // remove default button styles
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: ${e.sizeUnit}px 0;
    padding: 0 ${e.sizeUnit}px;
    border-radius: ${e.borderRadius}px;
    line-height: 2em;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    color: ${e.colorText};

    &:focus {
      outline: initial;
    }

    &.selected {
      background-color: ${e.colorPrimary};
      color: ${e.colorTextLightSolid};

      svg {
        color: ${e.colorTextLightSolid};
      }

      &:hover {
        .cancel {
          visibility: visible;
        }
      }
    }

    & > span[role="img"] {
      margin-right: ${2*e.sizeUnit}px;
    }

    .cancel {
      visibility: hidden;
    }
  `}
`,D=c.styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.sizeUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.sizeUnit}px;
  justify-items: center;
  /* for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery. */
  padding: ${({theme:e})=>2*e.sizeUnit}px;
`,R=c.styled.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.sizeUnit}px;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,M=c.styled.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  margin: 0;
`,H=c.styled.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.sizeUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    background-color: ${({theme:e})=>e.colorBgContainer};
  }
`,j=c.styled.div`
  ${({theme:e})=>`
    border: 1px solid ${e.colorPrimaryText};
    box-sizing: border-box;
    border-radius: ${e.borderRadius}px;
    background: ${e.colorBgContainer};
    line-height: ${2.5*e.sizeUnit}px;
    color: ${e.colorPrimaryText};
    font-size: ${e.fontSizeSM}px;
    font-weight: ${e.fontWeightStrong};
    text-align: center;
    padding: ${.5*e.sizeUnit}px ${e.sizeUnit}px;
    cursor: pointer;

    div {
      transform: scale(0.83,0.83);
    }
  `}
`,B=c.styled.div`
  position: absolute;
  right: ${({theme:e})=>e.sizeUnit}px;
  top: ${({theme:e})=>19*e.sizeUnit}px;
`,L=c.styled.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.sizeUnit}px;
`,G=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:r})=>{let o=(0,c.useTheme)(),a=(0,u.Mw)(o),{key:n,value:d}=e,m=t===e.key;return(0,l.FD)("div",{role:"button",css:(0,p.AH)`
  cursor: pointer;
  width: ${24*o.sizeUnit}px;
  position: relative;
  outline: none; /* Remove focus outline to show only selected state */

  img {
    min-width: ${24*o.sizeUnit}px;
    min-height: ${24*o.sizeUnit}px;
    border: 1px solid ${o.colorBorder};
    border-radius: ${o.borderRadius}px;
    transition: border-color ${o.motionDurationMid};
    background-color: ${o.colorBgContainer};
  }

  &.selected img {
    border: 2px solid ${o.colorPrimaryBorder};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${o.colorBorder};
  }

  .viztype-label {
    margin-top: ${2*o.sizeUnit}px;
    text-align: center;
  }
`,tabIndex:0,className:m?"selected":"",onClick:()=>i(n),onDoubleClick:r,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),i(n))},onFocus:()=>{i(n)},"data-test":"viztype-selector-container",children:[(0,l.Y)("img",{alt:d.name,width:"100%",className:`viztype-selector ${m?"selected":""}`,src:a&&d.thumbnailDark?d.thumbnailDark:d.thumbnail}),(0,l.Y)("div",{className:"viztype-label","data-test":`${k}__viztype-label`,children:d.name}),d.label&&(0,l.Y)(B,{children:(0,l.Y)(j,{children:(0,l.Y)("div",{children:(0,s.t)(d.label)})})})]})},I=e=>{let{vizEntries:t}=e,i=function(e,t){if(null==e)return{};var i,l,r={},o=Object.getOwnPropertyNames(e);for(l=0;l<o.length;l++)!(t.indexOf(i=o[l])>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i]);return r}(e,["vizEntries"]);return(0,l.Y)(D,{"data-test":`${k}__viz-row`,children:t.map(e=>(0,l.Y)(G,$({},i,{entry:e}),e.key))})},N=({selector:e,sectionId:t,icon:i,isSelected:o,onClick:a,className:d})=>{let c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{o&&queueMicrotask(()=>(0,y.A)(c.current,{behavior:"smooth",scrollMode:"if-needed"}))},[]),(0,l.FD)(O,{"aria-label":e,"aria-selected":o,ref:c,name:e,className:n()(d,o&&"selected"),onClick:()=>a(e,t),tabIndex:0,role:"tab",children:[i,(0,s.t)(e)]},e)};function _(e){var t,i;let a=(0,c.useTheme)(),n=(0,u.Mw)(a),{selectedViz:y,onChange:$,onDoubleClick:O,className:D,denyList:B}=e,{mountedPluginMetadata:G}=(0,f.Q)(),_=(0,r.useRef)(),[P,K]=(0,r.useState)(""),[V,W]=(0,r.useState)(!0),q=V&&!!P,J=y?G[y]:null,Q=(0,r.useMemo)(()=>Object.entries(G).map(([e,t])=>({key:e,value:t})).filter(({key:e})=>!B.includes(e)).filter(({value:e})=>(0,v.px)(e.behaviors||[])&&!e.deprecated).sort((e,t)=>e.value.name.localeCompare(t.value.name)),[G,B]),X=(0,r.useMemo)(()=>{let e={};return Q.forEach(t=>{let i=t.value.category||z;e[i]||(e[i]=[]),e[i].push(t)}),e},[Q]),Z=(0,r.useMemo)(()=>Object.keys(X).sort((e,t)=>e===z?1:t===z?-1:e.localeCompare(t)),[X]),ee=(0,r.useMemo)(()=>{let e={};return Q.forEach(t=>{(t.value.tags||[]).forEach(i=>{e[i]||(e[i]=[]),e[i].push(t)})}),e},[Q]),et=(0,r.useMemo)(()=>Object.keys(ee).sort((e,t)=>e.localeCompare(t)).filter(e=>-1===U.indexOf(e)),[ee]),ei=(0,r.useMemo)(()=>Q.sort((e,t)=>e.value.name.localeCompare(t.value.name)),[Q]),[el,er]=(0,r.useState)(()=>(null==J?void 0:J.category)||w),[eo,ea]=(0,r.useState)(()=>(null==J?void 0:J.category)?"CATEGORY":"FEATURED"),en=(0,r.useMemo)(()=>new o.A(Q,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]}),[Q]),es=(0,r.useMemo)(()=>""===P.trim()?[]:en.search(P).map(e=>e.item).sort((e,t)=>{var i,l;let r=null==(i=e.value)?void 0:i.label,o=null==(l=t.value)?void 0:l.label,a=r&&d.l7[r]?d.l7[r].weight:0;return(o&&d.l7[o]?d.l7[o].weight:0)-a}),[P,en]),ed=(0,r.useCallback)(()=>{W(!0)},[]);(0,r.useEffect)(()=>{_.current&&_.current.focus()},[]);let ec=(0,r.useCallback)(e=>K(e.target.value),[]),ep=(0,r.useCallback)(()=>{W(!1),K(""),_.current.blur()},[]),eu=(0,r.useCallback)((e,t)=>{V&&ep(),er(e),ea(t);let i=J&&(e===J.category||e===z&&null==J.category||(J.tags||[]).indexOf(e)>-1);e===el||i||$(null)},[ep,V,el,J,$]),em=(0,r.useMemo)(()=>({CATEGORY:{title:(0,s.t)("Category"),icon:(0,l.Y)(b.F.Category,{iconSize:"m"}),selectors:Z},TAGS:{title:(0,s.t)("Tags"),icon:(0,l.Y)(b.F.NumberOutlined,{iconSize:"m"}),selectors:et}}),[Z,et]);return(0,l.FD)(C,{className:D,isSelectedVizMetadata:!!J,children:[(0,l.FD)(A,{"aria-label":(0,s.t)("Choose chart type"),role:"tablist",children:[(0,l.Y)(N,{css:({sizeUnit:e})=>(0,p.AH)`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:"ALL_CHARTS",selector:Y,icon:(0,l.Y)(b.F.Ballot,{iconSize:"m"}),isSelected:!q&&Y===el&&"ALL_CHARTS"===eo,onClick:eu}),(0,l.Y)(N,{css:({sizeUnit:e})=>(0,p.AH)`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:"FEATURED",selector:w,icon:(0,l.Y)(b.F.FireOutlined,{iconSize:"m"}),isSelected:!q&&w===el&&"FEATURED"===eo,onClick:eu}),(0,l.Y)(g.S,{expandIconPosition:"end",ghost:!0,defaultActiveKey:"CATEGORY",items:Object.keys(em).map(e=>{let t=em[e];return{key:e,label:(0,l.Y)("span",{className:"header",children:t.title}),children:(0,l.Y)(l.FK,{children:t.selectors.map(i=>(0,l.Y)(N,{selector:i,sectionId:e,icon:t.icon,isSelected:!q&&i===el&&e===eo,onClick:eu},i))})}})})]}),(0,l.Y)(T,{children:(0,l.Y)(m.Input,{type:"text",ref:_,value:P,placeholder:(0,s.t)("Search all charts"),onChange:ec,onFocus:ed,"data-test":`${k}__search-input`,prefix:(0,l.Y)(F,{children:(0,l.Y)(b.F.SearchOutlined,{iconSize:"m"})}),suffix:(0,l.Y)(F,{children:P&&(0,l.Y)(b.F.CloseOutlined,{iconSize:"m",onClick:ep,"aria-label":(0,s.t)("Clear search")})})})}),(0,l.Y)(E,{children:(0,l.Y)(I,{vizEntries:q?es:el===Y&&"ALL_CHARTS"===eo?ei:el===w&&"FEATURED"===eo&&ee[w]?ee[w]:"CATEGORY"===eo&&X[el]?X[el]:"TAGS"===eo&&ee[el]?ee[el]:[],selectedViz:y,setSelectedViz:$,onDoubleClick:O})}),J?(0,l.Y)("div",{css:e=>[(0,p.AH)`
  grid-area: details;
  border-top: 1px solid ${e.colorBorder};
`,(0,p.AH)`
  padding: ${4*e.sizeUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`],children:(0,l.FD)(l.FK,{children:[(0,l.FD)(S,{css:(0,p.AH)`
                grid-area: viz-name;
                position: relative;
              `,children:[null==J?void 0:J.name,(null==J?void 0:J.label)&&(0,l.Y)(h.m,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=J.labelExplanation)?t:d.HE[J.label],children:(0,l.Y)(L,{children:(0,l.Y)(j,{children:(0,l.Y)("div",{children:(0,s.t)(J.label)})})})})]}),(0,l.Y)(R,{children:null==J?void 0:J.tags.map(e=>(0,l.Y)(x.JU,{css:({sizeUnit:e})=>(0,p.AH)`
                    margin-bottom: ${2*e}px;
                  `,children:e},e))}),(0,l.Y)(M,{children:(0,s.t)((null==J?void 0:J.description)||"No description available.")}),(0,l.Y)(S,{css:(0,p.AH)`
                grid-area: examples-header;
              `,children:(0,s.t)("Examples")}),(0,l.Y)(H,{children:((null==J||null==(i=J.exampleGallery)?void 0:i.length)?J.exampleGallery:[{url:null==J?void 0:J.thumbnail,caption:null==J?void 0:J.name}]).map(e=>(0,l.Y)("img",{src:n&&e.urlDark?e.urlDark:e.url,alt:e.caption,title:e.caption},e.url))})]})}):null]})}}}]);