"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9312],{29312(e,t,l){l.r(t),l.d(t,{default:()=>eV});var n=l(2445),r=l(27124),i=l(50267),o=l(63021),a=l(64260),u=l(46996),d=l(47036),s=l(74284),c=l(80346),p=l(42877),g=l(64741),v=l(58168);let f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5z"}}]},name:"vertical-right",theme:"outlined"};var h=l(87064),m=a.forwardRef(function(e,t){return a.createElement(h.A,(0,v.A)({},e,{ref:t,icon:f}))}),y=l(50329),b=l(68e3);let x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512 265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512 267.1 157.9A7.95 7.95 0 00254 164z"}}]},name:"vertical-left",theme:"outlined"};var C=a.forwardRef(function(e,t){return a.createElement(h.A,(0,v.A)({},e,{ref:t,icon:x}))}),w=l(68292),S=l(85614),F=l(17437);let $=S.styled.div`
  ${({theme:e})=>`
    display: flex;
    width: 100%;

    .three-dots-menu {
      align-self: center;
      margin-left: ${e.sizeUnit}px;
      cursor: pointer;
      padding: ${e.sizeUnit/2}px;
      border-radius: ${e.borderRadius}px;
      margin-top: ${.75*e.sizeUnit}px;
    }
  `}
`,M=S.styled.div`
  ${({theme:e})=>`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 ${2*e.sizeUnit}px;
    overflow: hidden;
  `}
`,k=S.styled.span`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 100%;
  `}
`,T=S.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    margin-left: ${2*e.sizeUnit}px;
  `}
`,z=S.styled.div`
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;

  padding: 3px 4px;
  overflow: hidden;
  border-radius: 4px;

  ${({isFilterActive:e})=>e&&(0,F.AH)`
      background: linear-gradient(
        var(--ag-icon-button-active-background-color),
        var(--ag-icon-button-active-background-color)
      );
      ::after {
        background-color: var(--ag-accent-color);
        border-radius: 50%;
        content: '';
        height: 6px;
        position: absolute;
        right: 4px;
        width: 6px;
      }
    `}

  svg {
    ${({isFilterActive:e})=>e&&(0,F.AH)`
        clip-path: path('M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z');
        color: var(--ag-icon-button-active-color);
      `}

    :hover {
      ${({isFilterActive:e})=>!e&&(0,F.AH)`
          background-color: var(--ag-icon-button-hover-background-color);
          box-shadow: 0 0 0 var(--ag-icon-button-background-spread)
            var(--ag-icon-button-hover-background-color);
          color: var(--ag-icon-button-hover-color);
          border-radius: var(--ag-icon-button-border-radius);
        `}
    }
  }
`,D=S.styled.div`
  ${({theme:e})=>`
    min-width: ${45*e.sizeUnit}px;
    padding: ${e.sizeUnit}px 0;

    .menu-item {
      padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: ${2*e.sizeUnit}px;

      &:hover {
        background-color: ${e.colorPrimaryBgHover};
      }
    }

    .menu-divider {
      height: 1px;
      background-color: ${e.colorBorderSecondary};
      margin: ${e.sizeUnit}px 0;
    }
  `}
`,A=S.styled.div`
  position: relative;
  display: inline-block;
`,P=S.styled.div`
  ${({theme:e})=>`
      position: fixed;
      box-shadow: var(--ag-menu-shadow);
      border-radius: ${e.sizeUnit}px;
      z-index: 99;
      min-width: ${50*e.sizeUnit}px;
      background: var(--ag-menu-background-color);
      border: var(--ag-menu-border);
      box-shadow: var(--ag-menu-shadow);
      color: var(--ag-menu-text-color);

    `}
`,N=S.styled.div`
  ${({theme:e})=>`
    border: 1px solid ${e.colorBorderSecondary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;
    border-top: 1px solid ${e.colorBorderSecondary};
    font-size: ${e.fontSize}px;
    color: ${e.colorTextBase};
    transform: translateY(-${e.sizeUnit}px);
    background: ${e.colorBgBase};
  `}
`,Y=S.styled.div`
  ${({theme:e})=>`
    position: relative;
    margin-left: ${2*e.sizeUnit}px;
    display: inline-block;
    min-width: ${17*e.sizeUnit}px;
    overflow: hidden;
  `}
`,I=S.styled.span`
  ${({theme:e})=>`
    margin: 0 ${6*e.sizeUnit}px;
    span {
      font-weight: ${e.fontWeightStrong};
    }
  `}
`,E=S.styled.span`
  ${({theme:e})=>`
    span {
      font-weight: ${e.fontWeightStrong};
    }
  `}
`,O=S.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${3*e.sizeUnit}px;
  `}
`,B=S.styled.div`
  ${({theme:e,disabled:t})=>`
    cursor: ${t?"not-allowed":"pointer"};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: ${3*e.sizeUnit}px;
      width: ${3*e.sizeUnit}px;
      fill: ${t?e.colorTextQuaternary:e.colorTextSecondary};
    }
  `}
`,L=(0,S.styled)(w.A)`
  ${({theme:e})=>`
    width: ${30*e.sizeUnit}px;
    margin-right: ${2*e.sizeUnit}px;
  `}
`,U=S.styled.div`
  max-width: 242px;
  ${({theme:e})=>`
    padding: 0 ${2*e.sizeUnit}px;
    color: ${e.colorTextBase};
    font-size: ${e.fontSizeSM}px;
  `}
`,R=S.styled.span`
  ${({theme:e})=>`
    color: ${e.colorTextLabel};
  `}
`,G=S.styled.span`
  ${({theme:e})=>`
    float: right;
    font-size: ${e.fontSizeSM}px;
  `}
`,W=S.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${e.sizeUnit}px;
  `}
`,H=S.styled.div`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
  `}
`,j=S.styled.div`
  ${({theme:e,height:t})=>(0,F.AH)`
    height: ${t}px;

    --ag-background-color: ${e.colorBgBase};
    --ag-foreground-color: ${e.colorText};
    --ag-header-background-color: ${e.colorBgBase};
    --ag-header-foreground-color: ${e.colorText};

    .dt-is-filter {
      cursor: pointer;
      :hover {
        background-color: ${e.colorFillContentHover};
      }
    }

    .dt-is-active-filter {
      background: ${e.colorPrimaryBg};
      :hover {
        background-color: ${e.colorFillContentHover};
      }
    }

    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    .ag-cell {
      color: var(--ag-cell-value-color, inherit);
    }

    .ag-row-hover .ag-cell {
      color: var(
        --ag-cell-value-hover-color,
        var(--ag-cell-value-color, inherit)
      );
    }

    .ag-container {
      border-radius: 0px;
      border: var(--ag-wrapper-border);
    }

    .ag-input-wrapper {
      ::before {
        z-index: 100;
      }
    }

    .filter-popover {
      z-index: 1 !important;
    }

    .search-container {
      display: flex;
      justify-content: flex-end;
      margin-bottom: ${4*e.sizeUnit}px;
    }

    .dropdown-controls-container {
      display: flex;
      justify-content: flex-end;
    }

    .time-comparison-dropdown {
      display: flex;
      padding-right: ${4*e.sizeUnit}px;
      padding-top: ${1.75*e.sizeUnit}px;
      height: fit-content;
    }

    .ag-header {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-row {
      font-size: ${e.fontSizeSM}px;
    }

    .ag-spanned-row {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-root-wrapper {
      border-radius: 0px;
    }
    .search-by-text-container {
      display: flex;
      align-items: center;
    }

    .search-by-text {
      margin-right: ${2*e.sizeUnit}px;
    }

    .ant-popover-container {
      padding: 0px;
    }

    .input-container {
      margin-left: auto;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      overflow: visible;
    }

    .input-wrapper svg {
      pointer-events: none;
      transform: translate(${7*e.sizeUnit}px, ${e.sizeUnit/2}px);
      color: ${e.colorTextBase};
    }

    .input-wrapper input {
      color: ${e.colorText};
      font-size: ${e.fontSizeSM}px;
      padding: ${1.5*e.sizeUnit}px ${3*e.sizeUnit}px
        ${1.5*e.sizeUnit}px ${8*e.sizeUnit}px;
      line-height: 1.8;
      border-radius: ${e.borderRadius}px;
      border: 1px solid ${e.colorBorderSecondary};
      background-color: transparent;
      outline: none;

      &:focus {
        border-color: ${e.colorPrimary};
      }

      &::placeholder {
        color: ${e.colorTextQuaternary};
      }
    }

    .ag-header-center {
      .ag-header-cell-label {
        justify-content: center;
      }
    }
  `}
`,q=({currentPage:e=0,pageSize:t=10,totalRows:l=0,pageSizeOptions:i=[10,20,50,100,200],onServerPaginationChange:o=()=>{},onServerPageSizeChange:a=()=>{},sliceId:u})=>{let d,s,c,p,g=Math.ceil(l/t),v=Math.min((e+1)*t,l),f=i.map(e=>({value:e,label:e}));return(0,n.FD)(N,{children:[(0,n.Y)("span",{children:(0,r.t)("Page Size:")}),(0,n.Y)(Y,{children:(0,n.Y)(w.A,{value:`${t}`,options:f,onChange:e=>{a(Number(e))},getPopupContainer:()=>document.getElementById(`chart-id-${u}`)})}),(0,n.FD)(I,{children:[(0,n.Y)("span",{children:e*t+1})," ",(0,r.t)("to")," ",(0,n.Y)("span",{children:v})," ",(0,r.t)("of")," ",(0,n.Y)("span",{children:l})]}),(0,n.FD)(O,{children:[(0,n.Y)(B,{onClick:(d=0===e,()=>{d||o(0,t)}),disabled:0===e,children:(0,n.Y)(m,{})}),(0,n.Y)(B,{onClick:(s=0===e,()=>{s||o(e-1,t)}),disabled:0===e,children:(0,n.Y)(y.A,{})}),(0,n.FD)(E,{children:[(0,r.t)("Page")," ",(0,n.Y)("span",{children:e+1})," ",(0,r.t)("of")," ",(0,n.Y)("span",{children:g})]}),(0,n.Y)(B,{onClick:(c=e>=g-1,()=>{c||o(e+1,t)}),disabled:e>=g-1,children:(0,n.Y)(b.A,{})}),(0,n.Y)(B,{onClick:(p=e>=g-1,()=>{p||o(g-1,t)}),disabled:e>=g-1,children:(0,n.Y)(C,{})})]})]})},K=function({value:e,onChange:t,searchOptions:l}){var r,i;return(0,n.Y)(L,{className:"search-select",value:e||(null!=(r=null==l||null==(i=l[0])?void 0:i.value)?r:""),options:l,onChange:t})},V=e=>{if(Array.isArray(e)&&e.length>0){var t,l;return[{colId:null==(t=e[0])?void 0:t.id,sort:(null==(l=e[0])?void 0:l.desc)?"desc":"asc"}]}return[]};var Q=l(66401),Z=l(61036),J=l(89866);function _(e,t,l,n,r,i,o){try{var a=e[i](o),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}function X(e){return function(){var t=this,l=arguments;return new Promise(function(n,r){var i=e.apply(t,l);function o(e){_(i,n,r,o,a,"next",e)}function a(e){_(i,n,r,o,a,"throw",e)}o(void 0)})}}function ee(e,t,l,n,r,i,o){try{var a=e[i](o),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}function et(e,t,l,n,r,i,o){try{var a=e[i](o),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}function el(){return(el=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}c.syG.registerModules([c.JKr,c.Q90]);let en=new Map,er=(0,a.memo)(({gridHeight:e,data:t=[],colDefsFromProps:l,includeSearch:i,allowRearrangeColumns:o,pagination:c,pageSize:v,serverPagination:f,rowCount:h,onServerPaginationChange:m,serverPaginationData:y,onServerPageSizeChange:b,searchOptions:x,onSearchColChange:C,onSearchChange:w,onSortChange:S,id:F,percentMetrics:$,serverPageLength:M,hasServerPageLengthChanged:k,handleCellClicked:T,handleSelectionChanged:z,filters:D,renderTimeComparisonDropdown:A,cleanedTotals:P,showTotals:N,width:Y,onColumnStateChange:I,onFilterChanged:E,metricColumns:O=[],chartState:B})=>{let L,U,R=(0,a.useRef)(null),G=(0,a.useRef)(null),W=(0,a.useMemo)(()=>t,[t]),H=(0,a.useRef)(null),j=(0,a.useRef)(null),_=(0,a.useRef)(0),er=`search-${F}`,ei=(L=(null==B?void 0:B.filterModel)&&!(0,Q.A)(B.filterModel)?B.filterModel:void 0,U=f&&(null==y?void 0:y.agGridFilterModel)&&!(0,Q.A)(y.agGridFilterModel)?y.agGridFilterModel:void 0,null!=L?L:U),eo=el({},f&&{sort:{sortModel:V((null==y?void 0:y.sortBy)||[])}},ei&&{filter:{filterModel:ei}}),ea=(0,a.useMemo)(()=>({filter:!0,sortable:!0,resizable:!0,minWidth:100}),[]),eu=(0,a.useMemo)(()=>({height:e,width:Y}),[e,Y]),[ed,es]=(0,a.useState)(),[ec,ep]=(0,a.useState)((null==y?void 0:y.searchText)||""),eg=(0,a.useMemo)(()=>(0,g.A)(e=>{w(e)},500),[w]);(0,a.useEffect)(()=>()=>{eg.cancel()},[eg]),(0,a.useEffect)(()=>{if(f&&en.get(er)&&document.activeElement!==G.current){var e;null==(e=G.current)||e.focus()}},[ec,f,er]);let ev=(0,a.useCallback)(()=>{en.set(er,!0)},[er]),ef=(0,a.useCallback)(()=>{en.set(er,!1)},[er]),eh=(0,a.useCallback)(e=>{var t,l,n;!function(e){var t;if(!e)return!1;let l=(null!=(t=e.key)?t:"").toLowerCase();return(!0===e.ctrlKey||!0===e.metaKey)&&"c"===l}(null==(t=e)?void 0:t.event)||(l=function(e){var t;if(!e)return"";let{valueFormatter:l}=null!=(t=e.colDef)?t:{};if("function"==typeof l)try{let t=l({value:e.value,node:e.node,column:e.column,colDef:e.colDef,data:e.data,api:e.api,context:e.context});if(null!=t)return String(t)}catch{}let{value:n}=e;return null==n?"":String(n)}(t),(n=function*(){try{if("u">typeof navigator&&navigator.clipboard&&"function"==typeof navigator.clipboard.writeText)return yield navigator.clipboard.writeText(l),!0}catch{}if("u"<typeof document)return!1;try{let e=document.createElement("textarea");e.value=l,e.setAttribute("readonly",""),e.style.position="fixed",e.style.top="-1000px",e.style.opacity="0",document.body.appendChild(e),e.select();let t=document.execCommand("copy");return document.body.removeChild(e),t}catch{return!1}},function(){var e=this,t=arguments;return new Promise(function(l,r){var i=n.apply(e,t);function o(e){ee(i,l,r,o,a,"next",e)}function a(e){ee(i,l,r,o,a,"throw",e)}o(void 0)})})()).catch(()=>{})},[]),em=(0,a.useCallback)(({target:{value:e}})=>{f?(ep(e),eg(e)):es(e)},[f,eg,er]),ey=(0,a.useCallback)(e=>{var t,l;let n=null==e||null==(t=e.column)?void 0:t.colId,r=null==e||null==(l=e.column)?void 0:l.sort;n&&void 0!==r&&((e,t)=>{var l;if((({colId:e,sortDir:t,percentMetrics:l,serverPagination:n,gridInitialState:r})=>{var i,o;if(l.includes(e)||!n)return!1;let{colId:a="",sort:u}=(null==r||null==(o=r.sort)||null==(i=o.sortModel)?void 0:i[0])||{};return a!==e||u!==t})({colId:e,sortDir:t,percentMetrics:$,serverPagination:!!f,gridInitialState:eo})){if(f&&(null==(l=R.current)?void 0:l.api)&&I){let{api:l}=R.current;null==t?l.applyColumnState({defaultState:{sort:null}}):l.applyColumnState({defaultState:{sort:null},state:[{colId:e,sort:t,sortIndex:0}]});let n=(null==l.getColumnState?void 0:l.getColumnState.call(l))||[];I({columnState:n,sortModel:t?[{colId:e,sort:t,sortIndex:0}]:[],filterModel:(null==l.getFilterModel?void 0:l.getFilterModel.call(l))||{},timestamp:Date.now()})}if(null==t)return S([]);S([{id:e,key:e,desc:"desc"===t}])}})(n,r)},[f,eo,$,S]),eb=(0,a.useCallback)((0,g.A)(()=>{var e;if(I&&(null==(e=R.current)?void 0:e.api))try{let{api:e}=R.current,t=e.getColumnState?e.getColumnState():[],l=e.getFilterModel?e.getFilterModel():{},n=t.filter(e=>e.sort).map(e=>({colId:e.colId,sort:e.sort,sortIndex:e.sortIndex||0})).sort((e,t)=>(e.sortIndex||0)-(t.sortIndex||0)),r={columnState:t,sortModel:n,filterModel:l,timestamp:Date.now()},i=JSON.stringify({columnOrder:t.map(e=>e.colId),aggregations:t.map(e=>{var t;return{colId:e.colId,aggFunc:"function"==typeof e.aggFunc?"custom":null!=(t=e.aggFunc)?t:null}}),sorts:n,filters:l});i!==j.current&&(j.current=i,I(r))}catch(e){console.warn("Error capturing AG Grid state:",e)}},d.Y.SLOW_DEBOUNCE),[I]),ex=(0,a.useCallback)(()=>{var e;return(e=function*(){_.current+=1;let e=_.current,t=yield X(function*(){var e,t;let l=document.activeElement;if(!(null==(e=R.current)?void 0:e.api))return{originalFilterModel:{},simpleFilters:[],complexWhere:void 0,havingClause:void 0,lastFilteredColumn:void 0,inputPosition:Z.dZ.UNKNOWN};let n=R.current.api.getFilterModel(),r=(0,J.Am)(n,O),{lastFilteredColumn:i,inputPosition:o}=yield(t=R.current.api,X(function*(){let e,r=Z.dZ.UNKNOWN;for(let[d]of Object.entries(n)){var i,o,a,u;let n=yield t.getColumnFilterInstance(d);if(n){if(n.eConditionBodies){let t=n.eConditionBodies;if(null==(i=t[Z.v3.FIRST])?void 0:i.contains(l)){r=Z.dZ.FIRST,e=d;break}if(null==(o=t[Z.v3.SECOND])?void 0:o.contains(l)){r=Z.dZ.SECOND,e=d;break}}if(n.eJoinAnds){for(let t of n.eJoinAnds)if(null==(a=t.eGui)?void 0:a.contains(l)){r=Z.dZ.FIRST,e=d;break}if(e)break}if(n.eJoinOrs){for(let t of n.eJoinOrs)if(null==(u=t.eGui)?void 0:u.contains(l)){r=Z.dZ.FIRST,e=d;break}if(e)break}}}return{lastFilteredColumn:e,inputPosition:r}})());return{originalFilterModel:n,simpleFilters:r.simpleFilters,complexWhere:r.complexWhere,havingClause:r.havingClause,lastFilteredColumn:i,inputPosition:o}})();if(e===_.current){if(t.originalFilterModel&&Object.entries(t.originalFilterModel).some(([e,t])=>!!((null==t?void 0:t.filterType)==="text"&&(null==O?void 0:O.includes(e)))))return;!(0,u.A)(null==y?void 0:y.agGridFilterModel,t.originalFilterModel)&&E&&E(t)}},function(){var t=this,l=arguments;return new Promise(function(n,r){var i=e.apply(t,l);function o(e){et(i,n,r,o,a,"next",e)}function a(e){et(i,n,r,o,a,"throw",e)}o(void 0)})})()},[E,O,null==y?void 0:y.agGridFilterModel]);return(0,a.useEffect)(()=>{k&&(null==y?void 0:y.pageSize)&&!(0,u.A)(null==y?void 0:y.pageSize,M)&&b(M)},[k]),(0,a.useEffect)(()=>{var e;(null==(e=R.current)?void 0:e.api)&&R.current.api.sizeColumnsToFit()},[Y]),(0,a.useEffect)(()=>{var e,t;(!D||0===Object.keys(D).length)&&(null==(t=R.current)||null==(e=t.api)?void 0:e.getSelectedRows().length)&&R.current.api.deselectAll()},[D]),(0,n.FD)("div",{style:eu,ref:H,children:[(0,n.FD)("div",{className:"dropdown-controls-container",children:[A&&(0,n.Y)("div",{className:"time-comparison-dropdown",children:A()}),i&&(0,n.FD)("div",{className:"search-container",children:[f&&(0,n.FD)("div",{className:"search-by-text-container",children:[(0,n.FD)("span",{className:"search-by-text",children:[" ",(0,r.t)("Search by"),":"]}),(0,n.Y)(K,{onChange:C,searchOptions:x,value:(null==y?void 0:y.searchColumn)||""})]}),(0,n.Y)("div",{className:"input-wrapper",children:(0,n.FD)("div",{className:"input-container",children:[(0,n.Y)(p.A,{}),(0,n.Y)("input",{ref:G,value:f?ec:ed||"",type:"text",id:"filter-text-box",placeholder:(0,r.t)("Search"),onInput:em,onFocus:ev,onBlur:ef})]})})]})]}),(0,n.Y)(s.lQ,{ref:R,onGridReady:e=>{if(e.api.sizeColumnsToFit(),(null==B?void 0:B.columnState)&&e.api)try{let t=function(e,t){if(!Array.isArray(e)||0===e.length)return null;let l=function e(t){return t.flatMap(t=>"children"in t&&Array.isArray(t.children)&&t.children.length>0?e(t.children):"string"==typeof t.field?[t.field]:[])}(t),n=new Set(l),r=e.filter(e=>"string"==typeof e.colId&&n.has(e.colId));if(0===r.length)return null;let i=new Set(r.map(e=>e.colId));return{columnState:r,applyOrder:l.length===i.size&&l.every(e=>i.has(e))}}(B.columnState,l);t&&(null==e.api.applyColumnState||e.api.applyColumnState.call(e.api,{state:t.columnState,applyOrder:t.applyOrder}))}catch{}},className:"ag-container",rowData:W,headerHeight:36,rowHeight:30,columnDefs:l,defaultColDef:ea,onColumnGroupOpened:e=>e.api.sizeColumnsToFit(),rowSelection:"multiple",animateRows:!0,onCellClicked:T,onCellKeyDown:eh,onSelectionChanged:z,onFilterChanged:ex,onStateUpdated:eb,initialState:eo,maintainColumnOrder:!0,suppressAggFuncInHeader:!0,enableCellTextSelection:!1,quickFilterText:f?"":ed,suppressMovableColumns:!o,pagination:c,paginationPageSize:v,paginationPageSizeSelector:Z.xp,suppressDragLeaveHidesColumns:!0,pinnedBottomRowData:N?[P]:void 0,tooltipShowDelay:500,localeText:{next:(0,r.t)("Next"),previous:(0,r.t)("Previous"),page:(0,r.t)("Page"),more:(0,r.t)("More"),to:(0,r.t)("to"),of:(0,r.t)("of"),first:(0,r.t)("First"),last:(0,r.t)("Last"),loadingOoo:(0,r.t)("Loading..."),selectAll:(0,r.t)("Select All"),searchOoo:(0,r.t)("Search..."),blanks:(0,r.t)("Blanks"),filterOoo:(0,r.t)("Filter"),applyFilter:(0,r.t)("Apply Filter"),equals:(0,r.t)("Equals"),notEqual:(0,r.t)("Not Equal"),lessThan:(0,r.t)("Less Than"),greaterThan:(0,r.t)("Greater Than"),lessThanOrEqual:(0,r.t)("Less Than or Equal"),greaterThanOrEqual:(0,r.t)("Greater Than or Equal"),inRange:(0,r.t)("In Range"),contains:(0,r.t)("Contains"),notContains:(0,r.t)("Not Contains"),startsWith:(0,r.t)("Starts With"),endsWith:(0,r.t)("Ends With"),andCondition:(0,r.t)("AND"),orCondition:(0,r.t)("OR"),group:(0,r.t)("Group"),columns:(0,r.t)("Columns"),filters:(0,r.t)("Filters"),valueColumns:(0,r.t)("Value Columns"),pivotMode:(0,r.t)("Pivot Mode"),groups:(0,r.t)("Groups"),values:(0,r.t)("Values"),pivots:(0,r.t)("Pivots"),toolPanelButton:(0,r.t)("Tool Panel"),pinColumn:(0,r.t)("Pin Column"),valueAggregation:(0,r.t)("Value Aggregation"),autosizeThiscolumn:(0,r.t)("Autosize This Column"),autosizeAllColumns:(0,r.t)("Autosize All Columns"),groupBy:(0,r.t)("Group By"),ungroupBy:(0,r.t)("Ungroup By"),resetColumns:(0,r.t)("Reset Columns"),expandAll:(0,r.t)("Expand All"),collapseAll:(0,r.t)("Collapse All"),toolPanel:(0,r.t)("Tool Panel"),export:(0,r.t)("Export"),csvExport:(0,r.t)("CSV Export"),excelExport:(0,r.t)("Excel Export"),excelXmlExport:(0,r.t)("Excel XML Export"),sum:(0,r.t)("Sum"),min:(0,r.t)("Min"),max:(0,r.t)("Max"),none:(0,r.t)("None"),count:(0,r.t)("Count"),average:(0,r.t)("Average"),copy:(0,r.t)("Copy"),copyWithHeaders:(0,r.t)("Copy with Headers"),paste:(0,r.t)("Paste"),sortAscending:(0,r.t)("Sort Ascending"),sortDescending:(0,r.t)("Sort Descending"),sortUnSort:(0,r.t)("Clear Sort")},context:{onColumnHeaderClicked:ey,initialSortState:V((null==y?void 0:y.sortBy)||[]),lastFilteredColumn:null==y?void 0:y.lastFilteredColumn,lastFilteredInputPosition:null==y?void 0:y.lastFilteredInputPosition}}),f&&(0,n.Y)(q,{currentPage:(null==y?void 0:y.currentPage)||0,pageSize:k?M:(null==y?void 0:y.pageSize)||10,totalRows:h||0,pageSizeOptions:[10,20,50,100,200],onServerPaginationChange:m,onServerPageSizeChange:b,sliceId:F})]})});er.displayName="AgGridDataTable";let ei=(0,a.memo)(er);var eo=l(656),ea=l(65471),eu=l(26067),ed=l(13341),es=l(14103);let ec=({comparisonColumns:e,selectedComparisonColumns:t,onSelectionChange:l})=>{let[i,o]=(0,a.useState)(!1),u=e[0].key;return(0,n.Y)(ea.Dropdown,{placement:"bottomRight",open:i,onOpenChange:e=>{o(e)},menu:{multiple:!0,onClick:e=>{let{key:n}=e;n===u?l([u]):t.includes(u)?l([n]):l(t.includes(n)?t.filter(e=>e!==n):[...t,n])},onBlur:()=>{3===t.length&&l([e[0].key])},selectedKeys:t,items:[{key:"all",label:(0,n.Y)(U,{children:(0,r.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:e.map(e=>({key:e.key,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(R,{children:e.label}),(0,n.Y)(G,{children:t.includes(e.key)&&(0,n.Y)(eu.A,{})})]})}))}]},trigger:["click"],children:(0,n.FD)("span",{children:[(0,n.Y)(ed.A,{})," ",(0,n.Y)(es.A,{})]})})},ep=e=>{let t=e.data[e.colDef.field],l=e.colDef.valueFormatter;if(!t||!l)return null;let n=parseFloat(String(l({value:t})).replace("%","").trim());return Number.isNaN(n)?null:n};var eg=l(79927);let ev=new Map,ef=e=>{let t=ev.get(e);if(void 0!==t)return t;let l=(0,eg.fE)(e)?(new DOMParser().parseFromString((0,eg.pn)(e),"text/html").body.textContent||"").trim():e;return ev.set(e,l),l},eh=(e,t)=>{let l=e=>"string"==typeof e?ef(e):e,n=l(e),r=l(t);return null==n&&null==r?0:null==n?-1:null==r?1:"number"==typeof n&&"number"==typeof r?n-r:n===r?0:n<r?-1:1},em=e=>{var t;let l=null==(t=e.data)?void 0:t[e.colDef.field];return"string"==typeof l?ef(l):l},ey=(e,t)=>{if(null==t)return -1;let l=new Date(t);if(Number.isNaN(l.getTime()))return -1;let n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),r=Date.UTC(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate());return r<n?-1:+(r>n)};var eb=l(58442);let ex=e=>e.isMetric||e.isPercentMetric?Z.QH.queryTotal:e.isNumeric?"sum":void 0;var eC=l(29248),ew=l(8563);let eS=(0,r.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result.");function eF(e,t,l){var n;let r=null==e||null==(n=e.data)?void 0:n[Z.Us];return r||(null!=t?null==l?void 0:l[t]:void 0)}let e$=S.styled.div`
  ${()=>`
    font-weight: bold;
  `}
`,eM=S.styled.div`
  display: flex;
  background-color: ${({backgroundColor:e})=>e||"transparent"};
  justify-content: ${({align:e})=>e||"left"};
`,ek=S.styled.div`
  margin-right: 10px;
  color: ${({arrowColor:e})=>e||"inherit"};
`,eT=S.styled.div`
  position: absolute;
  left: ${({offset:e})=>`${e}%`};
  top: 0;
  height: 100%;
  width: ${({percentage:e})=>`${e}%`};
  background-color: ${({background:e})=>e};
  z-index: 1;
`,ez={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"};var eD=a.forwardRef(function(e,t){return a.createElement(h.A,(0,v.A)({},e,{ref:t,icon:ez}))});let eA={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};var eP=a.forwardRef(function(e,t){return a.createElement(h.A,(0,v.A)({},e,{ref:t,icon:eA}))});let eN=()=>(0,n.FD)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,n.Y)("rect",{x:"3",y:"6",width:"18",height:"2",rx:"1"}),(0,n.Y)("rect",{x:"6",y:"11",width:"12",height:"2",rx:"1"}),(0,n.Y)("rect",{x:"9",y:"16",width:"6",height:"2",rx:"1"})]}),eY=({size:e=14})=>(0,n.FD)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.Y)("circle",{cx:"8",cy:"3",r:"1.2"}),(0,n.Y)("circle",{cx:"8",cy:"8",r:"1.2"}),(0,n.Y)("circle",{cx:"8",cy:"13",r:"1.2"})]}),eI=({content:e,children:t,isOpen:l,onClose:r})=>{let[i,o]=(0,a.useState)({top:0,left:0}),u=(0,a.useRef)(null),d=(0,a.useRef)(null),s=e=>{var t;!d.current||d.current.contains(e.target)||(null==(t=u.current)?void 0:t.contains(e.target))||r()};return(0,a.useEffect)(()=>{let e=()=>{var e,t,l;let n=null==(e=u.current)?void 0:e.getBoundingClientRect();if(n){let e=(null==(t=d.current)?void 0:t.offsetWidth)||200,r=window.innerWidth,i=n.left+10+160+e;o({top:n.bottom+8,left:Math.max(0,n.right-((null==(l=d.current)?void 0:l.offsetWidth)||0)+170*(i<=r))})}};return l&&(e(),document.addEventListener("mousedown",s),window.addEventListener("scroll",e),window.addEventListener("resize",e)),()=>{document.removeEventListener("mousedown",s),window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[l]),(0,n.FD)(A,{children:[(0,a.cloneElement)(t,{ref:u}),l&&(0,n.Y)(P,{ref:d,style:{top:`${i.top}px`,left:`${i.left}px`},children:e})]})};function eE(e,t,l,n,r,i,o){try{var a=e[i](o),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}function eO(e){return function(){var t=this,l=arguments;return new Promise(function(n,r){var i=e.apply(t,l);function o(e){eE(i,n,r,o,a,"next",e)}function a(e){eE(i,n,r,o,a,"throw",e)}o(void 0)})}}let eB=({displayName:e,enableSorting:t,setSort:l,context:i,column:o,api:u})=>{var d;let{initialSortState:s,onColumnHeaderClicked:c,lastFilteredColumn:p,lastFilteredInputPosition:g}=i,v=null==o?void 0:o.getColId(),f=null==o?void 0:o.getColDef(),h=o.getUserProvidedColDef(),m=null==f||null==(d=f.context)?void 0:d.isPercentMetric,[y,b]=(0,a.useState)(!1),[x,C]=(0,a.useState)(!1),w=(0,a.useRef)(null),S=null==o?void 0:o.isFilterActive(),F=null==s?void 0:s[0],A=null==h?void 0:h.isMain,P=!A&&(null==h?void 0:h.timeComparisonKey),N=A?v.replace("Main","").trim():v,Y=()=>{c({column:{colId:N,sort:null}}),l(null,!1)},I=e=>{c({column:{colId:N,sort:e}}),l(e,!1)};(0,a.useEffect)(()=>{if(p===v&&!y){let e=setTimeout(()=>eO(function*(){b(!0);let e=yield u.getColumnFilterInstance(o),t=null==e?void 0:e.eGui;if(t&&w.current&&(w.current.innerHTML="",w.current.appendChild(t),null==e?void 0:e.eConditionBodies)){let t=e.eConditionBodies[g===Z.dZ.SECOND?Z.v3.SECOND:Z.v3.FIRST];if(t){let e=t.querySelector(Z.cH);null==e||e.focus()}}})(),200);return()=>clearTimeout(e)}},[p,v,g]);let E=(null==F?void 0:F.colId)===v?null==F?void 0:F.sort:null,O=(0,n.FD)(D,{children:[!P&&(!E||"desc"===E)&&(0,n.FD)("div",{onClick:()=>I("asc"),className:"menu-item",children:[(0,n.Y)(eD,{})," ",(0,r.t)("Sort Ascending")]}),!P&&(!E||"asc"===E)&&(0,n.FD)("div",{onClick:()=>I("desc"),className:"menu-item",children:[(0,n.Y)(eP,{})," ",(0,r.t)("Sort Descending")]}),F&&(null==F?void 0:F.colId)===v&&(0,n.FD)("div",{onClick:Y,className:"menu-item",children:[(0,n.Y)("span",{style:{fontSize:16},children:"↻"})," ",(0,r.t)("Clear Sort")]})]});return(0,n.FD)($,{children:[(0,n.FD)(M,{onClick:()=>{if(!t||P)return;let e=(null==F?void 0:F.colId)!==v?"asc":(null==F?void 0:F.sort)==="asc"?"desc":null;e?I(e):Y()},className:"custom-header",children:[(0,n.Y)(k,{children:e}),(0,n.Y)(T,{children:((e,t)=>{if(!(null==e?void 0:e.length)||!t)return null;let{colId:l,sort:r}=e[0];return l===t?"asc"===r?(0,n.Y)(eD,{}):"desc"===r?(0,n.Y)(eP,{}):null:null})(s,v)})]}),(0,n.Y)(eI,{content:(0,n.Y)("div",{ref:w}),isOpen:y,onClose:()=>b(!1),children:(0,n.Y)(z,{className:"header-filter",onClick:e=>eO(function*(){e.stopPropagation(),b(!y);let t=yield u.getColumnFilterInstance(o),l=null==t?void 0:t.eGui;l&&w.current&&(w.current.innerHTML="",w.current.appendChild(l))})(),isFilterActive:S,children:(0,n.Y)(eN,{})})}),!m&&!P&&(0,n.Y)(eI,{content:O,isOpen:x,onClose:()=>C(!1),children:(0,n.Y)("div",{className:"three-dots-menu",onClick:e=>{e.stopPropagation(),C(!x)},children:(0,n.Y)(eY,{})})})]})};var eL=l(72255),eU=l(66155),eR=l(3102);function eG(){return(eG=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}let eW=e=>{var t;let l=null==(t=e.data)?void 0:t[e.colDef.field];return l instanceof eb.A&&null===l.input?null:l},eH=[{displayKey:"serverEquals",displayName:"Equals",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverNotEqual",displayName:"Not Equal",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverBefore",displayName:"Before",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverAfter",displayName:"After",predicate:()=>!0,numberOfInputs:1},{displayKey:"serverInRange",displayName:"In Range",predicate:()=>!0,numberOfInputs:2},{displayKey:"serverBlank",displayName:"Blank",predicate:()=>!0,numberOfInputs:0},{displayKey:"serverNotBlank",displayName:"Not blank",predicate:()=>!0,numberOfInputs:0}];var ej=l(65802);let eq=({key:e,values:t,timeGrain:l,timestampFormatter:n})=>{if(0===t.length)return{dataMask:{extraFormData:{filters:[]},filterState:{label:null,value:null,filters:null}}};let r=e===ej.Tf,i=t.map(e=>r?n(e):e).join(", ");return{dataMask:{extraFormData:{filters:[{col:e,op:"IN",val:t.map(e=>e instanceof Date?e.getTime():e),grain:r?l:void 0}]},filterState:{label:i,value:[t],filters:{[e]:t}}}}};function eK(){return(eK=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function eV(e){var t;let l,{height:d,columns:s,data:c,includeSearch:p,allowRearrangeColumns:g,pageSize:v,serverPagination:f,rowCount:h,setDataMask:m,serverPaginationData:y,slice_id:b,percentMetrics:x,hasServerPageLengthChanged:C,serverPageLength:w,emitCrossFilters:F,filters:$,timeGrain:M,isRawRecords:k,alignPositiveNegative:T,showCellBars:z,isUsingTimeComparison:D,colorPositiveNegative:A,totals:P,showTotals:N,columnColorFormatters:Y,basicColorFormatters:I,width:E,onChartStateChange:O,chartState:B,metricSqlExpressions:L,rawSummaryColumns:U,showNumberedColumn:R}=e,[G,q]=(0,a.useState)([]),K=(0,a.useMemo)(()=>s.filter(e=>e.isMetric||e.isPercentMetric).map(e=>e.key),[s]);(0,a.useEffect)(()=>{let e=s.filter(e=>(null==e?void 0:e.dataType)===o.GenericDataType.String).map(e=>({value:e.key,label:e.label}));(0,u.A)(e,G)||q(e||[])},[s]),(0,a.useEffect)(()=>{var e,t,l;let n=eK({},y),r=!1;if(f&&y&&void 0!==h){let e=null!=(t=y.currentPage)?t:0,i=Math.max(0,Math.min(e,Math.ceil(h/(null!=(l=y.pageSize)?l:w))-1));i!==e&&(n.currentPage=i,r=!0)}let i=null!=(e=null==y?void 0:y.rawSummaryColumns)?e:[],o=!!(null==y?void 0:y.totalsRequested);k&&N&&!(0,u.A)(i,U)&&(n.rawSummaryColumns=U,r=!0),N&&void 0===P&&!o?(n.totalsRequested=!0,r=!0):!N&&o&&(n.totalsRequested=!1,r=!0),r&&(0,eo.F)(m,n)},[f,h,w,k,N,P,U,y,m]);let V=[{key:"all",label:(0,r.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[Q,J]=(0,a.useState)([null==V||null==(t=V[0])?void 0:t.key]),_=(0,a.useCallback)(e=>{O&&O(e)},[O]),X=(0,a.useCallback)(e=>{if(!f)return;if(O&&B){let t=e.originalFilterModel&&Object.keys(e.originalFilterModel).length>0?e.originalFilterModel:void 0;O(eK({},B,{filterModel:t,timestamp:Date.now()}))}let t=eK({},y,{agGridFilterModel:e.originalFilterModel&&Object.keys(e.originalFilterModel).length>0?e.originalFilterModel:void 0,agGridSimpleFilters:e.simpleFilters,agGridComplexWhere:e.complexWhere,agGridHavingClause:e.havingClause,lastFilteredColumn:e.lastFilteredColumn,lastFilteredInputPosition:e.inputPosition,currentPage:0,metricSqlExpressions:L});(0,eo.F)(m,t)},[m,f,y,O,B,L]),ee=(0,a.useMemo)(()=>D?0===Q.length||Q.includes("all")?null==s?void 0:s.filter(e=>{var t;return(null==e||null==(t=e.config)?void 0:t.visible)!==!1}):s.filter(e=>!e.originalLabel||((null==e?void 0:e.label)||"").includes("Main")||Q.includes(e.label)).filter(e=>{var t;return(null==e||null==(t=e.config)?void 0:t.visible)!==!1}):s,[s,Q]),et=(({columns:e,data:t,serverPagination:l,serverPaginationData:i,serverPageLength:u,showNumberedColumn:d,isRawRecords:s,defaultAlignPN:c,showCellBars:p,colorPositiveNegative:g,columnColorFormatters:v,allowRearrangeColumns:f,basicColorFormatters:h,isUsingTimeComparison:m,emitCrossFilters:y,alignPositiveNegative:b,slice_id:x})=>{var C,w;let F=(0,S.useTheme)(),$=(0,a.useCallback)(i=>{var a,u,d,C,w;let S,$,M,k,{config:T,isMetric:z,isPercentMetric:D,isNumeric:A,key:P,dataType:N,originalLabel:Y}=i,I=void 0===T.alignPositiveNegative?c:T.alignPositiveNegative,E=A&&Array.isArray(v)&&v.length>0,O=m&&Array.isArray(h)&&h.length>0,B=null==P?void 0:P.includes("Main"),L=B?P.replace("Main","").trim():P,U=N===o.GenericDataType.String||N===o.GenericDataType.Temporal,R=N===o.GenericDataType.Boolean,G=!O&&!E&&p&&(null==(a=T.showCellBars)||a)&&(z||s||D)&&function(e,t,l){let n=l.map(t=>{let l=t[e];return l instanceof Number?l.valueOf():l}).filter(e=>"number"==typeof e&&Number.isFinite(e));if(n.length>0){let e=function(e){let t;for(let l of e)null!=l&&(t<l||void 0===t&&l>=l)&&(t=l);return t}(n.map(Math.abs));if(t)return[0,null!=e?e:0];let l=function(e){let t,l;for(let n of e)null!=n&&(void 0===t?n>=n&&(t=l=n):(t>n&&(t=n),l<n&&(l=n)));return[t,l]}(n);return null!=l?l:[0,0]}return null}(P,I||b,t),j=(e=>{switch(e.dataType){case o.GenericDataType.Numeric:return"agNumberColumnFilter";case o.GenericDataType.String:return"agTextColumnFilter";case o.GenericDataType.Temporal:return"agDateColumnFilter";default:return!0}})(i);return eG({field:L,headerName:(S=!!(null==i?void 0:i.originalLabel),$=null==i||null==(d=i.key)?void 0:d.includes("Main"),M=(null==i||null==(C=i.config)?void 0:C.displayTypeIcon)!==!1,k=!!(null==i||null==(w=i.config)?void 0:w.customColumnName),(S&&k?"displayTypeIcon"in i.config&&M&&!$?`${i.label} ${i.config.customColumnName}`:i.config.customColumnName:S&&$?i.originalLabel:S&&!M?"":null==i?void 0:i.label)||""),headerTooltip:i.description,valueFormatter:e=>((e,t)=>{let{value:l,node:n}=e;return(0,eL.A)(l)&&""!==l&&!(l instanceof eb.A&&null===l.input)?(null==t.formatter?void 0:t.formatter.call(t,l))||l:(null==n?void 0:n.level)===-1?"":"N/A"})(e,i),valueGetter:e=>((e,t)=>{var l,n;if(null==e||null==(l=e.colDef)?void 0:l.isMain){let t=`Main ${e.column.getColId()}`;return e.data[t]}return(0,eL.A)(null==(n=e.data)?void 0:n[e.column.getColId()])?e.data[e.column.getColId()]:t.isNumeric?void 0:""})(e,i),cellStyle:e=>{var t,l;let n=(null==(t=e.node)?void 0:t.rowPinned)!=null||e.rowIndex%2==0?F.colorBgBase:F.colorFillQuaternary,r=(null==(l=e.node)?void 0:l.rowPinned)!=null?n:F.colorFillSecondary;return(e=>{var t,l,n;let r,i,{value:o,colDef:a,rowIndex:u,hasBasicColorFormatters:d,basicColorFormatters:s,hasColumnColorFormatters:c,columnColorFormatters:p,col:g,node:v,cellSurfaceColor:f,hoverCellSurfaceColor:h}=e;c&&p.filter(e=>{var t,l;return((null==e||null==(t=e.column)?void 0:t.includes("Main"))?null==e||null==(l=e.column)?void 0:l.replace("Main","").trim():null==e?void 0:e.column)===a.field}).forEach(e=>{let t=(!!o||0===o)&&e.getColorFromValue(o);t&&(e.objectFormatting===eU.yQ.TEXT_COLOR||e.toTextColor?i=t:e.objectFormatting!==eU.yQ.CELL_BAR&&(r=t))}),d&&(null==g?void 0:g.metricName)&&(null==v?void 0:v.rowPinned)!=="bottom"&&(r=null==(n=eF(v,u,s))||null==(l=n[g.metricName])?void 0:l.backgroundColor);let m=(null==g||null==(t=g.config)?void 0:t.horizontalAlign)||((null==g?void 0:g.isNumeric)?"right":"left"),y=(0,eR.sg)({backgroundColor:r,color:i},f),b=(0,eR.sg)({backgroundColor:r,color:i},h);return{backgroundColor:r||"",color:"","--ag-cell-value-color":y||"","--ag-cell-value-hover-color":b||"",textAlign:m}})(eG({},e,{hasColumnColorFormatters:E,columnColorFormatters:v,hasBasicColorFormatters:O,basicColorFormatters:h,col:i,cellSurfaceColor:n,hoverCellSurfaceColor:r}))},cellClass:e=>(e=>{let{col:t,emitCrossFilters:l}=e,n="";if(l){var r;(null==t?void 0:t.isMetric)||(n+=" dt-is-filter"),(null==t||null==(r=t.config)?void 0:r.truncateLongCells)&&(n+=" dt-truncate-cell")}return n})(eG({},e,{col:i,emitCrossFilters:y})),minWidth:null!=(u=null==T?void 0:T.columnWidth)?u:100,filter:j},D&&{filterValueGetter:ep},N===o.GenericDataType.String&&!l&&{filterValueGetter:em,comparator:eh},N===o.GenericDataType.Temporal&&{filterValueGetter:eW,filterParams:l?{filterOptions:eH,comparator:Z.L1}:{comparator:ey}},{cellDataType:(e=>{switch(e.dataType){case o.GenericDataType.Numeric:return"number";case o.GenericDataType.Temporal:return"date";case o.GenericDataType.Boolean:return"boolean";default:return"text"}})(i),defaultAggFunc:ex(i),initialAggFunc:ex(i)},!(z||D)&&{allowedAggFuncs:["sum","min","max","count","avg","first","last"]},R?{cellRenderer:"agCheckboxCellRenderer",cellRendererParams:{disabled:!0}}:{cellRenderer:e=>U?(e=>{let{node:t,api:l,colDef:i,columns:o,allowRenderHtml:a,value:u,valueFormatted:d}=e;if((null==t?void 0:t.rowPinned)==="bottom"){let e=l.getAllGridColumns().filter(e=>e.isVisible()),t=!e[0].getAggFunc();if(e.length>1&&t&&o[0].key===(null==i?void 0:i.field))return(0,n.FD)(W,{children:[(0,n.Y)(H,{children:(0,r.t)("Summary")}),(0,n.Y)(ew.m,{overlay:eS,children:(0,n.Y)(eC.A,{})})]});if(!u)return null}if(!("string"==typeof u||u instanceof Date))return null!=d?d:u;if("string"==typeof u){if(u.startsWith("http://")||u.startsWith("https://"))return(0,n.Y)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:u});if(a&&(0,eg.fE)(u))return(0,n.Y)("div",{dangerouslySetInnerHTML:{__html:(0,eg.pn)(u)}})}return(0,n.Y)("div",{children:null!=d?d:u instanceof Date?u.toISOString():u})})(e):(e=>{var t,l,r,i,o;let{value:a,valueFormatted:u,node:d,hasBasicColorFormatters:s,col:c,basicColorFormatters:p,valueRange:g,alignPositiveNegative:v,colorPositiveNegative:f}=e;if((null==d?void 0:d.rowPinned)==="bottom")return(0,n.Y)(e$,{children:null!=u?u:a});let h="",m="";if(s&&(null==c?void 0:c.metricName)){let e=null==(i=eF(d,null==d?void 0:d.rowIndex,p))?void 0:i[c.metricName];h=null!=(l=null==e?void 0:e.mainArrow)?l:"",m=null!=(r=null==e||null==(o=e.arrowColor)?void 0:o.toLowerCase())?r:""}let y=(null==c||null==(t=c.config)?void 0:t.horizontalAlign)||((null==c?void 0:c.isNumeric)?"right":"left");if(!g)return(0,n.FD)(eM,{align:y,children:[h&&(0,n.Y)(ek,{arrowColor:m,children:h}),(0,n.Y)("div",{children:null!=u?u:a})]});let b=function({value:e,valueRange:t,alignPositiveNegative:l}){let[n,r]=t;return l?Math.abs(Math.round(e/r*100)):Math.round(Math.abs(e)/(Math.abs(Math.max(r,0))+Math.abs(Math.min(n,0)))*100)}({value:a,valueRange:g,alignPositiveNegative:v}),x=function({value:e,valueRange:t,alignPositiveNegative:l}){if(l)return 0;let[n,r]=t,i=Math.abs(Math.min(n,0));return Math.round(Math.min(i+e,i)/(Math.abs(Math.max(r,0))+i)*100)}({value:a,valueRange:g,alignPositiveNegative:v}),C=function({value:e,colorPositiveNegative:t=!1}){return t?`rgba(${150*(e<0)},${150*(e>=0)},0,0.2)`:"transparent"}({value:a,colorPositiveNegative:f});return(0,n.FD)("div",{children:[(0,n.Y)(eT,{offset:x,percentage:b,background:C}),null!=u?u:a]})})(e),cellRendererParams:{allowRenderHtml:!0,columns:e,hasBasicColorFormatters:O,col:i,basicColorFormatters:h,valueRange:G,alignPositiveNegative:I||b,colorPositiveNegative:g}},{context:{isMetric:z,isPercentMetric:D,isNumeric:A},lockPinned:!f,sortable:!l||!D},l&&{headerComponent:eB,comparator:()=>0,headerComponentParams:{slice_id:x}},{isMain:B},!B&&Y&&{columnGroupShow:"open"},Y&&{timeComparisonKey:Y},{wrapText:!(null==T?void 0:T.truncateLongCells),autoHeight:!(null==T?void 0:T.truncateLongCells)})},[e,t,c,v,h,p,g,m,s,y,f,l,b,F.colorBgBase,F.colorFillSecondary,F.colorFillQuaternary]),M=JSON.stringify(e),k=(0,a.useMemo)(()=>{let t=new Map;return e.reduce((e,l)=>{let n=$(l);if(null==l?void 0:l.originalLabel)if(t.has(l.originalLabel))e[t.get(l.originalLabel)].children.push(n);else{let r={headerName:l.originalLabel,marryChildren:!0,openByDefault:!0,children:[n]};t.set(l.originalLabel,e.length),e.push(r)}else e.push(n);return e},[])},[M,$]),T=null!=(C=null==i?void 0:i.pageSize)?C:u,z=T&&T>0?T:t.length,D=null!=(w=null==i?void 0:i.currentPage)?w:0,A=l?D*z+t.length:t.length,P=`${Math.max(A,1)}`.length,N=(0,a.useMemo)(()=>({headerName:(0,r.t)("№"),headerClass:"ag-header-center",field:Z.uC,valueGetter:e=>{var t,n,r,o,a;return(null==(n=e.node)?void 0:n.rowPinned)!=null?"":l&&i?D*z+(null!=(o=null==(a=e.node)?void 0:a.rowIndex)?o:0)+1:(null!=(t=null==(r=e.node)?void 0:r.rowIndex)?t:0)+1},headerStyle:{backgroundColor:F.colorFillTertiary,fontSize:"1em",color:F.colorTextTertiary},width:30+6*P,minWidth:30+6*P,sortable:!1,filter:!1,pinned:"left",lockPosition:!0,suppressNavigable:!0,resizable:!1,suppressMovable:!0,suppressSizeToFit:!0,cellStyle:{backgroundColor:F.colorFillTertiary,padding:"0",textAlign:"center",fontSize:"0.9em",color:F.colorTextTertiary}}),[D,z,P,l,i,F.colorFillTertiary,F.colorTextTertiary]);return(0,a.useMemo)(()=>d?[N,...k]:k,[d,N,k])})({columns:D?ee:s,data:c,serverPagination:f,serverPaginationData:y,serverPageLength:w,showNumberedColumn:R&&!F,isRawRecords:k,defaultAlignPN:T,showCellBars:z,colorPositiveNegative:A,columnColorFormatters:Y,allowRearrangeColumns:g,basicColorFormatters:I,isUsingTimeComparison:D,emitCrossFilters:F,alignPositiveNegative:T,slice_id:b}),el=(l=d,p&&(l-=16),l-80),en=(0,a.useCallback)(function(e,t){return!!$&&!!$[e]&&$[e].some(e=>e===t||e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())},[$]),er=(0,a.useCallback)(e=>k?String(null!=e?e:""):(0,i.PT)(M)(e),[M,k]),ea=(0,a.useRef)(null),eu=(0,a.useCallback)(e=>{var t,l;if(!F||!e.column)return;let n=e.column.getColDef();if((null==(t=n.context)?void 0:t.isMetric)||(null==(l=n.context)?void 0:l.isPercentMetric))return;let r=e.column.getColId();ea.current=r;let i=e.api.getSelectedNodes();1===i.length&&i[0]===e.node&&en(r,e.value)&&(e.node.setSelected(!1),m(eq({key:r,values:[],timeGrain:M,timestampFormatter:er}).dataMask))},[F,en,m,M,er]),ed=(0,a.useCallback)(e=>{if(!F||!ea.current)return;let t=ea.current,l=e.api.getSelectedRows().map(e=>e[t]).filter(e=>null!=e);m(eq({key:t,values:l,timeGrain:M,timestampFormatter:er}).dataMask)},[F,m,M,er]),es=(0,a.useCallback)((e,t)=>{let l=eK({},y,{currentPage:e,pageSize:t,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,eo.F)(m,l)},[m]),ev=(0,a.useCallback)(e=>{let t=eK({},y,{currentPage:0,pageSize:e,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,eo.F)(m,t)},[m]),ef=(0,a.useCallback)(e=>{var t;let l=eK({},y,{searchColumn:(null==y?void 0:y.searchColumn)||(null==(t=G[0])?void 0:t.value),searchText:e,currentPage:0,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,eo.F)(m,l)},[m,G]),ez=(0,a.useCallback)(e=>{if(!f)return;let t=eK({},y,{sortBy:e,lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,eo.F)(m,t)},[m,f]),eD=(D?ee:s).map(e=>{var t;return`${e.key}:${null!=(t=e.description)?t:""}`}).join("|");return(0,n.Y)(j,{height:d,children:(0,n.Y)(ei,{gridHeight:el,data:c||[],colDefsFromProps:et,includeSearch:!!p,allowRearrangeColumns:!!g,pagination:!!v&&!f,pageSize:v||0,serverPagination:f,rowCount:h,onServerPaginationChange:es,onServerPageSizeChange:ev,serverPaginationData:y,searchOptions:G,onSearchColChange:e=>{if(!(0,u.A)(e,null==y?void 0:y.searchColumn)){let t=eK({},y,{searchColumn:e,searchText:"",lastFilteredColumn:void 0,lastFilteredInputPosition:void 0});(0,eo.F)(m,t)}},onSearchChange:ef,onSortChange:ez,onFilterChanged:X,metricColumns:K,id:b,handleCellClicked:eu,handleSelectionChanged:ed,filters:$,percentMetrics:x,serverPageLength:w,hasServerPageLengthChanged:C,renderTimeComparisonDropdown:D?()=>(0,n.Y)(ec,{comparisonColumns:V,selectedComparisonColumns:Q,onSelectionChange:J}):()=>null,cleanedTotals:P||{},showTotals:N&&void 0!==P&&Object.keys(P).length>0,width:E,onColumnStateChange:_,chartState:B},eD)})}}}]);