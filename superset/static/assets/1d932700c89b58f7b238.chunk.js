"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2246],{43907(e,t,i){var l=i(2445),n=i(85614),a=i(65471);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}let r=(0,n.styled)(e=>(0,l.Y)(a.Badge,o({},e)))`
  ${({theme:e,color:t,count:i})=>`
    & > sup,
    & > sup.ant-badge-count {
      box-shadow: none;
      ${void 0!==i?`background: ${t||e.colorPrimary};`:""}
    }
  `}
`;i.d(t,["E",0,r])},81861(e,t,i){var l=i(2445),n=i(65471),a=i(30665),o=i(85614),r=i(17437),s=i(8563);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}i.d(t,["g",0,e=>{var t,i,c,u,p,h;let{popupRender:m,tooltip:g,tooltipPlacement:b,children:f,styleConfig:v}=e,y=function(e,t){if(null==e)return{};var i,l,n={},a=Object.getOwnPropertyNames(e);for(l=0;l<a.length;l++)!(t.indexOf(i=a[l])>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i]);return n}(e,["popupRender","tooltip","tooltipPlacement","children","styleConfig"]),x=(0,o.useTheme)(),{type:$}=y,z=(0,r.AH)`
    ${(!$||"default"===$)&&`.ant-dropdown-trigger {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
      }
      .anticon {
        vertical-align: middle;
      }
    }`}
  `,S=(0,l.Y)(n.Dropdown.Button,d({popupRender:m},y,{css:[z,(0,r.AH)`
          .ant-btn {
            height: ${null!=(t=null!=(i=null==v?void 0:v.controlHeight)?i:x.buttonControlHeightSM)?t:30}px;
            box-shadow: ${null!=(c=null==v?void 0:v.boxShadow)?c:"none"};
            font-size: ${null!=(u=null!=(p=null==v?void 0:v.fontSize)?p:x.buttonFontSize)?u:x.fontSizeSM}px;
            font-weight: ${null!=(h=null==v?void 0:v.fontWeight)?h:x.fontWeightStrong};
          }
        `],children:f}));return g?(0,l.Y)(s.m,{placement:b,id:`${(0,a.A)(g)}-tooltip`,title:g,children:(0,l.Y)("span",{children:S})}):S}])},98110(e,t,i){i.d(t,{U:()=>S});var l=i(2445),n=i(64260),a=i(27124),o=i(17437),r=i(85614),s=i(60685),d=i(59854),c=i(52747),u=i(8563),p=i(65471);let h=e=>(0,o.AH)`
  display: flex;
  font-size: ${e.fontSizeXL}px;
  font-weight: ${e.fontWeightStrong};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0;
    color: ${e.colorText};
    background-color: ${e.colorBgContainer};

    &::placeholder {
      color: ${e.colorTextTertiary};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
    white-space: pre;
  }
`,m=(0,n.memo)(({title:e,placeholder:t,onSave:i,canEdit:s,label:d})=>{let m=(0,r.useTheme)(),[g,b]=(0,n.useState)(!1),[f,v]=(0,n.useState)(!1),[y,x]=(0,n.useState)(e||""),[$,z]=(0,n.useState)(0),S=(0,n.useRef)(null),w=(0,n.useRef)(null),Y=(0,n.useRef)(!1),{width:U,ref:C}=(0,c.uZ)({refreshMode:"debounce"});(0,n.useEffect)(()=>{g||x(e)},[e]),(0,n.useEffect)(()=>{if(g){var e;let t=null==(e=w.current)?void 0:e.input;if(t){let{length:e}=t.value;t.setSelectionRange(e,e),t.scrollLeft=t.scrollWidth}}},[g]),(0,n.useLayoutEffect)(()=>{S.current&&(S.current.textContent=y||t,z(S.current.offsetWidth))},[y,t]),(0,n.useEffect)(()=>{var e;let t=null==(e=w.current)?void 0:e.input;t&&(t.scrollWidth>t.clientWidth?v(!0):v(!1))},[$,U]);let T=(0,n.useCallback)(()=>{s&&!g&&b(!0)},[s,g]),D=(0,n.useCallback)(()=>{if(!s)return;let t=y.trim();Y.current&&e!==t?(x(t),i(t)):Y.current?x(t):x(e),Y.current=!1,b(!1)},[s,y,i,e]),F=(0,n.useCallback)(e=>{s&&(g||b(!0),Y.current=!0,x(e.target.value))},[s,g]),k=(0,n.useCallback)(e=>{if(!s)return;e.preventDefault();let{activeElement:t}=document;t&&t instanceof HTMLElement&&t.blur()},[s]);return(0,l.FD)("div",{css:h,ref:C,children:[(0,l.Y)(u.m,{id:"title-tooltip",title:f&&y&&!g?y:null,children:(0,l.Y)(p.Input,{ref:w,"data-test":"editable-title-input",variant:"borderless","aria-label":null!=d?d:(0,a.t)("Title"),className:"dynamic-title-input",value:y,onChange:F,onBlur:D,onClick:T,onPressEnter:k,placeholder:t,css:(0,o.AH)`
              ${!s&&`&[disabled] {
                  cursor: default;
                }
              `}
              font-size: ${m.fontSizeXL}px;
              transition: auto;
              ${$&&$>0&&(0,o.AH)`
                  width: ${$}px;
                `}
            `,disabled:!s})}),(0,l.Y)("span",{ref:S,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})});var g=i(58607),b=i(48158),f=i(29138);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}let y=e=>{var t,i,l;return(0,o.AH)`
  width: ${null!=(t=e.buttonControlHeight)?t:8*e.sizeUnit}px;
  height: ${null!=(i=e.buttonControlHeight)?i:8*e.sizeUnit}px;
  padding: 0;
  border: 1px solid ${e.colorPrimary};
  border-radius: ${null!=(l=e.buttonBorderRadius)?l:e.borderRadius}px;

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }
`},x=e=>(0,o.AH)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colorBgContainer};
  height: ${16*e.sizeUnit}px;
  padding: 0 ${4*e.sizeUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.sizeUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,$=e=>(0,o.AH)`
  display: flex;
  align-items: center;
  padding-left: ${2*e.sizeUnit}px;

  & .anticon-star {
    padding: 0 ${e.sizeUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,z=e=>(0,o.AH)`
  margin-left: ${2*e.sizeUnit}px;
`,S=(0,n.memo)(({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:n,faveStarProps:o,titlePanelAdditionalItems:c,rightPanelAdditionalItems:u,additionalActionsMenu:p,menuDropdownProps:h,showMenuDropdown:S=!0,tooltipProps:w})=>{let Y=(0,r.useTheme)();return(0,l.FD)("div",{css:x,className:"header-with-actions",children:[(0,l.FD)("div",{className:"title-panel",children:[(0,l.Y)(m,v({},e)),t&&(0,l.FD)("div",{css:$,children:[(null==i?void 0:i.certifiedBy)&&(0,l.Y)(b.T,v({},i)),n&&(0,l.Y)(d.$,v({},o)),c]})]}),(0,l.FD)("div",{className:"right-button-panel",children:[u,(0,l.Y)("div",{css:z,children:S&&(0,l.Y)(g.ms,v({trigger:["click"],popupRender:()=>p},h,{children:(0,l.Y)("span",{children:(0,l.Y)(f.$n,{css:y,buttonStyle:"tertiary","aria-label":(0,a.t)("Menu actions trigger"),tooltip:null==w?void 0:w.text,placement:null==w?void 0:w.placement,"data-test":"actions-trigger",children:(0,l.Y)(s.F.EllipsisOutlined,{iconColor:Y.colorPrimary,iconSize:"l"})})})}))})]})]})})},17402(e,t,i){var l=i(2445),n=i(85614),a=i(60685),o=i(8563),r=i(49508);i.d(t,["A",0,function({warningMarkdown:e,size:t,marginRight:i}){let s=(0,n.useTheme)();return(0,l.Y)(o.m,{id:"warning-tooltip",title:(0,l.Y)(r.zZ,{source:e}),children:(0,l.Y)(a.F.WarningOutlined,{iconColor:s.colorWarning,iconSize:t,css:{marginRight:null!=i?i:2*s.sizeUnit}})})}])},42114(e,t,i){var l=i(2445),n=i(33149),a=i(85614),o=i(52234);let r=a.styled.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colorPrimary};
  }

  .sidebar-resizer {
    /* @z-index-above-sticky-header (100) + 1 = 101 */
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`;i.d(t,["A",0,({id:e,initialWidth:t,minWidth:i,maxWidth:a,enable:s,children:d})=>{let[c,u]=(0,o.A)(e,t);return(0,l.FD)(l.FK,{children:[(0,l.Y)(r,{children:(0,l.Y)(n.c,{enable:{right:s},handleClasses:{right:"sidebar-resizer",bottom:"hidden",bottomRight:"hidden",bottomLeft:"hidden"},size:{width:c,height:"100%"},minWidth:i,maxWidth:a,onResizeStop:(e,t,i,l)=>u(c+l.width)})}),d(c)]})}])},37350(e,t,i){var l=i(2445),n=i(64260),a=i(27124),o=i(85614),r=i(68292),s=i(48158),d=i(13512),c=i(60685),u=i(38955),p=i(41947),h=i(17402),m=i(7070),g=i(8251);let b=o.styled.div`
  ${({theme:e})=>`
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${e.sizeUnit}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .divider {
      border-bottom: 1px solid ${e.colorSplit};
      margin: 15px 0;
    }

    .table-length {
      color: ${e.colorTextSecondary};
    }

    .select {
      flex: 1;
      max-width: calc(100% - ${e.sizeUnit+30}px)
    }
  `}
`,f=o.styled.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,v=({table:e})=>{let{value:t,type:i,extra:n}=e;return(0,l.FD)(f,{title:t,children:["view"===i?(0,l.Y)(c.F.FunctionOutlined,{iconSize:"m"}):"materialized_view"===i?(0,l.Y)(c.F.ProfileOutlined,{iconSize:"m"}):(0,l.Y)(c.F.TableOutlined,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,l.Y)(s.T,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,l.Y)(h.A,{warningMarkdown:n.warning_markdown,size:"l",marginRight:4}),t]})};i.d(t,["Ay",0,({database:e,emptyState:t,formMode:i=!1,getDbList:o,handleError:s,isDatabaseSelectEnabled:c=!0,onDbChange:h,onCatalogChange:f,onSchemaChange:y,readOnly:x=!1,onEmptyResults:$,catalog:z,schema:S,tableSelectMode:w="single",tableValue:Y,onTableSelectChange:U,customTableOptionLabelRenderer:C})=>{let T,D,F,k,{addSuccessToast:A}=(0,m.Yf)(),[_,O]=(0,n.useState)(z),[E,I]=(0,n.useState)(S),[P,R]=(0,n.useState)(void 0),[j,N]=(0,n.useState)(null),{currentData:L,isFetching:B,refetch:W}=(0,g.ty)({dbId:null==e?void 0:e.id,catalog:_,schema:E,supportsSchemas:null==e?void 0:e.supports_schemas,onSuccess:(e,t)=>{N(null),t&&A((0,a.t)("List updated"))},onError:e=>{if(null==e?void 0:e.errors){var t,i;N(null!=(t=null==e||null==(i=e.errors)?void 0:i[0])?t:null)}else s((null==e?void 0:e.error)||(0,a.t)("There was an error loading the tables"))}}),M=(0,n.useMemo)(()=>L?L.options.map(e=>({value:e.value,label:C?C(e):(0,l.Y)(v,{table:e}),text:e.value})):[],[L,C]),H=null==L?void 0:L.hasMore;(0,n.useEffect)(()=>{void 0===e&&(O(void 0),I(void 0),R(void 0))},[e,w]),(0,n.useEffect)(()=>{"single"===w?R(M.find(e=>e.value===Y)):R((null==M?void 0:M.filter(e=>e&&(null==Y?void 0:Y.includes(e.value))))||[])},[M,Y,w]);let q=(0,n.useMemo)(()=>(e,t)=>{let i=e.trim().toLowerCase(),{value:l}=t;return l.toLowerCase().includes(i)},[]);return(0,l.FD)(b,{children:[(0,l.Y)(d.RA,{db:e,emptyState:t,formMode:i,getDbList:o,handleError:s,onDbChange:x?void 0:e=>{h&&h(e),O(void 0),I(void 0),R("single"===w?void 0:[])},onEmptyResults:$,onCatalogChange:x?void 0:e=>{O(e),f&&f(e),I(void 0),R("single"===w?void 0:[])},catalog:_,onSchemaChange:x?void 0:e=>{I(e),y&&y(e),R("single"===w?void 0:[])},schema:E,isDatabaseSelectEnabled:c&&!x,readOnly:x}),!i&&(0,l.Y)("div",{className:"divider"}),j?(0,l.Y)(d.x6,{error:j,source:"crud"}):null,(T=x||(null==e?void 0:e.supports_schemas)!==!1&&!E,D=(0,a.t)("Table"),F=(0,l.Y)(r.A,{ariaLabel:(0,a.t)("Select table or type to search tables"),disabled:T,filterOption:q,labelInValue:!0,loading:B,name:"select-table",onChange:t=>{R(t),(E||(null==e?void 0:e.supports_schemas)===!1)&&(null==U||U(Array.isArray(t)?t.map(e=>null==e?void 0:e.value):null==t?void 0:t.value,_,E))},options:M,placeholder:(0,a.t)("Select table or type to search tables"),showSearch:!0,mode:w,value:P,allowClear:"multiple"===w,allowSelectAll:!1}),k=!x&&(0,l.Y)(p.A,{onClick:()=>W(),tooltipContent:(0,a.t)("Force refresh table list")}),(0,l.FD)(l.FK,{children:[(0,l.Y)(u.q,{children:D}),(0,l.FD)("div",{className:"section",children:[(0,l.Y)("span",{className:"select",children:F}),(0,l.Y)("span",{className:"refresh",children:k})]}),H&&!T&&(0,l.Y)("div",{className:"table-length",children:(0,a.t)("Some tables are not shown. Refine your search.")})]}))]})},"cs",0,v])},48905(e,t,i){i.r(t),i.d(t,{datasetReducer:()=>eM,default:()=>eH});var l,n=i(2445),a=i(64260),o=i(61574),r=i(27124),s=i(73815),d=i(79924),c=i(58561),u=i.n(c),p=i(29428);function h(e,t,i,l,n,a,o){try{var r=e[a](o),s=r.value}catch(e){i(e);return}r.done?t(s):Promise.resolve(s).then(l,n)}var m=i(98110),g=i(29138),b=i(60685),f=i(75495),v=((l={})[l.SelectDatabase=0]="SelectDatabase",l[l.SelectCatalog=1]="SelectCatalog",l[l.SelectSchema=2]="SelectSchema",l[l.SelectTable=3]="SelectTable",l[l.ChangeDataset=4]="ChangeDataset",l),y=i(85614),x=i(17437);let $=y.styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colorBgContainer};
`,z=y.styled.div`
  width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  max-width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,S=y.styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,w=y.styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,Y=(0,y.styled)(w)`
  flex: 1 0 0;
  min-height: 0;
  position: relative;
`,U=(0,y.styled)(w)`
  flex: 1 0 auto;
  height: auto;
`,C=(0,y.styled)(w)`
  flex: 0 0 auto;
  height: ${({theme:e})=>16*e.sizeUnit}px;
  z-index: 0;
`,T=y.styled.div`
  ${({theme:e})=>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: ${16*e.sizeUnit}px;
  border-bottom: 1px solid ${e.colorBorder};

  .header-with-actions {
    height: ${15.5*e.sizeUnit}px;
  }
  `}
`,D=y.styled.div`
  ${({theme:e})=>`
  margin: ${4*e.sizeUnit}px;
  font-size: ${e.fontSizeXL}px;
  font-weight: ${e.fontWeightStrong};
  `}
`,F=y.styled.div`
  ${({theme:e})=>`
  height: 100%;
  border-right: 1px solid ${e.colorBorderSecondary};
  `}
`,k=y.styled.div`
  width: 100%;
  position: relative;
`,A=y.styled.div`
  ${({theme:e})=>`
  border-left: 1px solid ${e.colorBorderSecondary};
  color: ${e.colorSuccess};
  `}
`,_=y.styled.div`
  ${({theme:e})=>`
  height: ${16*e.sizeUnit}px;
  width: 100%;
  border-top: 1px solid ${e.colorBorderSecondary};
  border-bottom: 1px solid ${e.colorBorderSecondary};
  color: ${e.colorInfo};
  border-top: ${e.sizeUnit/4}px solid
    ${e.colorBorderSecondary};
  padding: ${4*e.sizeUnit}px;
  display: flex;
  justify-content: flex-end;
  background-color: ${e.colorBgContainer};
  z-index: ${e.zIndexPopupBase}
  `}
`,O=y.styled.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:e})=>e.colorIconHover};
      }
    }
  }
`,E=e=>(0,x.AH)`
  width: ${21.5*e.sizeUnit}px;

  &:disabled {
    background-color: ${e.colorBgContainerDisabled};
    color: ${e.colorTextDisabled};
  }
`,I=(0,r.t)("New dataset"),P={text:(0,r.t)("Select a database table and create dataset"),placement:"bottomRight"};function R({setDataset:e,title:t=I,editing:i=!1}){let l={title:null!=t?t:I,placeholder:I,onSave:t=>{e({type:v.ChangeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,r.t)("dataset name")};return(0,n.Y)(O,{children:i?(0,n.Y)(m.U,{editableTitleProps:l,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,n.Y)(n.FK,{}),rightPanelAdditionalItems:(0,n.FD)(g.$n,{buttonStyle:"primary",tooltip:null==P?void 0:P.text,placement:null==P?void 0:P.placement,disabled:!0,css:E,children:[(0,n.Y)(b.F.SaveOutlined,{iconSize:"m"}),(0,r.t)("Save")]}),additionalActionsMenu:(0,n.Y)(f.W1,{items:[{key:"settings",label:(0,r.t)("Settings")},{key:"delete",label:(0,r.t)("Delete")}]}),menuDropdownProps:{disabled:!0},tooltipProps:P}):(0,n.Y)(D,{children:t||I})})}var j=i(43907),N=i(89920);let L=(0,y.styled)(N.Ay)`
  ${({theme:e})=>`
  margin-top: ${8.5*e.sizeUnit}px;
  padding-left: ${4*e.sizeUnit}px;
  padding-right: ${4*e.sizeUnit}px;

  .ant-tabs-top > .ant-tabs-nav::before {
    width: ${50*e.sizeUnit}px;
  }
  `}
`,B=y.styled.div`
  ${({theme:e})=>`
  .ant-badge {
    width: ${8*e.sizeUnit}px;
    margin-left: ${2.5*e.sizeUnit}px;
  }
  `}
`,W={USAGE_TEXT:(0,r.t)("Usage"),COLUMNS_TEXT:(0,r.t)("Columns"),METRICS_TEXT:(0,r.t)("Metrics")},M=({id:e})=>{let{usageCount:t}=(e=>{let[t,i]=(0,a.useState)(0),l=(0,a.useCallback)(()=>s.A.get({endpoint:`/api/v1/dataset/${e}/related_objects`}).then(({json:e})=>{i(null==e?void 0:e.charts.count)}).catch(e=>{(0,p.iB)((0,r.t)("There was an error fetching dataset's related objects")),d.A.error(e)}),[e]);return(0,a.useEffect)(()=>{e&&l()},[e,l]),{usageCount:t}})(e),i=(0,n.FD)(B,{children:[(0,n.Y)("span",{children:W.USAGE_TEXT}),t>0&&(0,n.Y)(j.E,{count:t})]}),l=[{key:"COLUMNS",label:W.COLUMNS_TEXT,children:null},{key:"METRICS",label:W.METRICS_TEXT,children:null},{key:"USAGE",label:i,children:null}];return(0,n.Y)(L,{moreIcon:null,items:l})};var H=i(71671),q=i(27243),K=i(10020),X=i(20422),G=i(47566),Q=i(97020),V=i(71519);let Z=y.styled.div`
  padding: ${({theme:e})=>8*e.sizeUnit}px
    ${({theme:e})=>6*e.sizeUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,J=(0,y.styled)(Q.p)`
  max-width: 50%;

  p {
    width: ${({theme:e})=>115*e.sizeUnit}px;
  }
`,ee=(0,r.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),et=(0,r.t)("create dataset from SQL query"),ei=(0,r.t)(" to open SQL Lab. From there you can save the query as a dataset."),el=(0,r.t)("Select dataset source"),en=(0,r.t)("No table columns"),ea=(0,r.t)("This database table does not contain any data. Please select a different table."),eo=(0,r.t)("An Error Occurred"),er=(0,r.t)("Unable to load columns for the selected table. Please select a different table."),es=e=>{let{hasError:t,tableName:i,hasColumns:l}=e,a="empty-dataset.svg",o=el,r=(0,n.FD)(n.FK,{children:[ee,(0,n.Y)(V.N_,{to:"/sqllab",children:(0,n.Y)("span",{role:"button",tabIndex:0,children:et})}),ei]});return t?(o=eo,r=(0,n.Y)(n.FK,{children:er}),a=void 0):i&&!l&&(a="no-columns.svg",o=en,r=(0,n.Y)(n.FK,{children:ea})),(0,n.Y)(Z,{children:(0,n.Y)(J,{image:a,size:"medium",textSize:"large",title:o,description:r})})},ed=y.styled.div`
  ${({theme:e,position:t})=>`
  position: ${t};
  display: flex;
  align-items: center;
  margin: ${4*e.sizeUnit}px
    ${3*e.sizeUnit}px
    ${3*e.sizeUnit}px
    ${6*e.sizeUnit}px;
  font-size: ${5*e.sizeUnit}px;
  font-weight: ${e.fontWeightStrong};
  padding-bottom: ${3*e.sizeUnit}px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .anticon:first-of-type {
    margin-right: ${2*e.sizeUnit}px;
  }

  `}
`,ec=y.styled.div`
  ${({theme:e})=>`
  margin-left: ${6*e.sizeUnit}px;
  margin-bottom: ${3*e.sizeUnit}px;
  font-weight: ${e.fontWeightStrong};
  `}
`,eu=y.styled.div`
  ${({theme:e})=>`
  padding: ${8*e.sizeUnit}px
    ${6*e.sizeUnit}px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  `}
`,ep=y.styled.div`
  ${({theme:e})=>`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: ${3*e.sizeUnit}px;
    text-align: center;
    font-weight: ${e.fontWeightNormal};
    font-size: ${e.fontSize}px;
    color: ${e.colorTextSecondary};
  }
  `}
`,eh=y.styled.div`
  ${({theme:e})=>`
  position: relative;
  margin: ${3*e.sizeUnit}px;
  margin-left: ${6*e.sizeUnit}px;
  height: calc(100% - ${60*e.sizeUnit}px);
  overflow: auto;
  `}
`,em=y.styled.div`
  ${({theme:e})=>`
  position: relative;
  margin: ${3*e.sizeUnit}px;
  margin-left: ${6*e.sizeUnit}px;
  height: calc(100% - ${30*e.sizeUnit}px);
  overflow: auto;
  `}
`,eg=y.styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,eb=(0,y.styled)(q.F)`
  ${({theme:e})=>`
  border: 1px solid ${e.colorInfoText};
  padding: ${4*e.sizeUnit}px;
  margin: ${6*e.sizeUnit}px ${6*e.sizeUnit}px
    ${8*e.sizeUnit}px;
  .view-dataset-button {
    position: absolute;
    top: ${4*e.sizeUnit}px;
    right: ${4*e.sizeUnit}px;

    &:hover {
      color: ${e.colorPrimary};
      text-decoration: underline;
    }
  }
  `}
`,ef=(0,r.t)("Refreshing columns"),ev=(0,r.t)("Table columns"),ey=["5","10","15","25"],ex=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(e,t)=>e.name.localeCompare(t.name)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(e,t)=>e.type.localeCompare(t.type)}],e$=(0,r.t)(`This table already has a dataset associated with it. You can only associate one dataset with a table.
`),ez=(0,r.t)("View Dataset"),eS=({tableName:e,columnList:t,loading:i,hasError:l,datasets:a})=>{let o,s,d=(null==t?void 0:t.length)>0,c=null==a?void 0:a.map(e=>e.table_name),u=null==a?void 0:a.find(t=>t.table_name===e);return i&&(s=(0,n.Y)(eu,{children:(0,n.FD)(ep,{children:[(0,n.Y)(K.R,{position:"inline-centered",size:"m"}),(0,n.Y)("div",{children:ef})]})})),i||(o=!i&&e&&d&&!l?(0,n.FD)(n.FK,{children:[(0,n.Y)(ec,{title:ev,children:ev}),u?(0,n.Y)(eh,{children:(0,n.Y)(eg,{children:(0,n.Y)(X.Ay,{loading:i,size:X.QS.Small,columns:ex,data:t,pageSizeOptions:ey,defaultPageSize:25})})}):(0,n.Y)(em,{children:(0,n.Y)(eg,{children:(0,n.Y)(X.Ay,{loading:i,size:X.QS.Small,columns:ex,data:t,pageSizeOptions:ey,defaultPageSize:25})})})]}):(0,n.Y)(es,{hasColumns:d,hasError:l,tableName:e})),(0,n.FD)(n.FK,{children:[e&&(0,n.FD)(n.FK,{children:[(null==c?void 0:c.includes(e))&&(0,n.Y)(eb,{closable:!1,type:"info",showIcon:!0,message:(0,r.t)("This table already has a dataset"),description:(0,n.FD)(n.FK,{children:[e$,(0,n.Y)("span",{role:"button",onClick:()=>{(null==u?void 0:u.explore_url)&&(0,G.V3)((0,G.GC)(u.explore_url))},tabIndex:0,className:"view-dataset-button",children:ez})]})}),(0,n.FD)(ed,{position:!i&&d?"relative":"absolute",title:e||"",children:[(0,n.Y)(b.F.InsertRowAboveOutlined,{iconSize:"xl"}),e]})]}),o,s]})};function ew(e,t,i,l,n,a,o){try{var r=e[a](o),s=r.value}catch(e){i(e);return}r.done?t(s):Promise.resolve(s).then(l,n)}let eY=({tableName:e,dbId:t,catalog:i,schema:l,database:o,setHasColumns:c,datasets:u})=>{let[h,m]=(0,a.useState)([]),[g,b]=(0,a.useState)(!1),[f,v]=(0,a.useState)(!1),y=(0,a.useRef)(e);return(0,a.useEffect)(()=>{var n,a;y.current=e;let u=(null==o?void 0:o.supports_schemas)!==!1;e&&t&&(l||!u)&&(n={tableName:e,dbId:t,schema:l||void 0},(a=function*(){let{dbId:e,tableName:t,schema:l}=n;b(!0),null==c||c(!1);let a=`/api/v1/database/${e}/table_metadata/${(0,H.zJ)({name:t,catalog:i,schema:l})}`;try{var o;let e,t=yield s.A.get({endpoint:a});if(o=null==t?void 0:t.json,e=!0,"string"!=typeof(null==o?void 0:o.name)&&(e=!1),e&&!Array.isArray(o.columns)&&(e=!1),e&&o.columns.length>0&&(e=!o.columns.some((e,t)=>{let i,l,n=(i=!0,l="The object provided to isITableColumn does match the interface.","string"!=typeof(null==e?void 0:e.name)&&(i=!1,console.error(`${l} The property 'name' is required and must be a string`)),i&&"string"!=typeof(null==e?void 0:e.type)&&(i=!1,console.error(`${l} The property 'type' is required and must be a string`)),i);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${t}] is invalid and does not match the ITableColumn interface`),!n})),e){let e=t.json;e.name===y.current&&(m(e.columns),null==c||c(e.columns.length>0),v(!1))}else m([]),null==c||c(!1),v(!0),(0,p.iB)((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",a)),d.A.error((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",a))}catch{m([]),null==c||c(!1),v(!0)}finally{b(!1)}},function(){var e=this,t=arguments;return new Promise(function(i,l){var n=a.apply(e,t);function o(e){ew(n,i,l,o,r,"next",e)}function r(e){ew(n,i,l,o,r,"throw",e)}o(void 0)})})())},[e,t,l,o]),(0,n.Y)(eS,{columnList:h,hasError:f,loading:g,tableName:e,datasets:u})};var eU=i(37350),eC=i(7070),eT=i(21804),eD=i(90617);function eF(){return(eF=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}let ek=y.styled.div`
  ${({theme:e})=>`
    padding: ${4*e.sizeUnit}px;
    height: 100%;
    background-color: ${e.colorBgContainer};
    position: relative;
    .emptystate {
      height: auto;
      margin-top: ${17.5*e.sizeUnit}px;
    }
    .section-title {
      margin-top: ${5.5*e.sizeUnit}px;
      margin-bottom: ${11*e.sizeUnit}px;
      font-weight: ${e.fontWeightStrong};
    }
    .table-title {
      margin-top: ${11*e.sizeUnit}px;
      margin-bottom: ${6*e.sizeUnit}px;
      font-weight: ${e.fontWeightStrong};
    }
    .options-list {
      overflow: auto;
      position: absolute;
      bottom: 0;
      top: ${92.25*e.sizeUnit}px;
      left: ${3.25*e.sizeUnit}px;
      right: 0;

      .no-scrollbar {
        margin-right: ${4*e.sizeUnit}px;
      }

      .options {
        cursor: pointer;
        padding: ${1.75*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        :hover {
          background-color: ${e.colorFillTertiary}
        }
      }

      .options-highlighted {
        cursor: pointer;
        padding: ${1.75*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        background-color: ${e.colorPrimaryText};
        color: ${e.colorTextLightSolid};
      }

      .options, .options-highlighted {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    form > span[aria-label="refresh"] {
      position: absolute;
      top: ${69*e.sizeUnit}px;
      left: ${42.75*e.sizeUnit}px;
      font-size: ${4.25*e.sizeUnit}px;
    }
    .table-form {
      margin-bottom: ${8*e.sizeUnit}px;
    }
    .loading-container {
      position: absolute;
      top: ${89.75*e.sizeUnit}px;
      left: 0;
      right: 0;
      text-align: center;
      img {
        width: ${20*e.sizeUnit}px;
        margin-bottom: ${2.5*e.sizeUnit}px;
      }
      p {
        color: ${e.colorTextSecondary};
      }
    }
`}
`;function eA({setDataset:e,dataset:t,datasetNames:i}){let{addDangerToast:l}=(0,eC.Yf)(),o=(0,a.useCallback)(t=>{e({type:v.SelectDatabase,payload:{db:t}})},[e]);(0,a.useEffect)(()=>{let e=(0,eT.Gq)(eT.Hh.Database,null);e&&o(e)},[o]);let s=(0,a.useCallback)(e=>(0,n.Y)(eU.cs,{table:(null==i?void 0:i.includes(e.value))?eF({},e,{extra:{warning_markdown:(0,r.t)("This table already has a dataset")}}):e}),[i]);return(0,n.Y)(ek,{children:(0,n.Y)(eU.Ay,eF({database:null==t?void 0:t.db,handleError:l,emptyState:(0,n.Y)(Q.p,{image:"empty.svg",title:(0,r.t)("No databases available"),description:(0,n.FD)("span",{children:[(0,r.t)("Manage your databases")," ",(0,n.Y)(eD.o.Link,{href:(0,G.Am)("/databaseview/list"),children:(0,r.t)("here")})]}),size:"small"}),onDbChange:o,onCatalogChange:t=>{t&&e({type:v.SelectCatalog,payload:{name:"catalog",value:t}})},onSchemaChange:t=>{t&&e({type:v.SelectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:v.SelectTable,payload:{name:"table_name",value:t}})},customTableOptionLabelRenderer:s},(null==t?void 0:t.catalog)&&{catalog:t.catalog},(null==t?void 0:t.schema)&&{schema:t.schema}))})}var e_=i(68447),eO=i(81861),eE=i(18847),eI=i(98876),eP=i(15537);let eR=["db","schema","table_name"],ej=[eP.ci,eP.q0,eP.ar,eP.R2],eN=(0,eC.Ay)(function({datasetObject:e,addDangerToast:t,hasColumns:i=!1,datasets:l}){let a=(0,o.W6)(),s=(0,y.useTheme)(),{createResource:d,state:c}=(0,eE.fn)("dataset",(0,r.t)("dataset"),t),{loading:u}=c,p=(0,r.t)("Select a database table."),h=(t=!0)=>{if(e){var i;d({database:null==(i=e.db)?void 0:i.id,catalog:e.catalog,schema:e.schema,table_name:e.table_name}).then(i=>{i&&"number"==typeof i&&((0,eI.$)(eP.oA,e),t?a.push(`/chart/add/?dataset=${e.table_name}`):a.push("/tablemodelview/list/"))})}},m=(0,r.t)("Create and explore dataset"),v=(0,r.t)("Create dataset"),x=!(null==e?void 0:e.table_name)||!i||(null==l?void 0:l.includes(null==e?void 0:e.table_name)),$=(0,n.Y)(f.W1,{items:[{key:"create-only",onClick:()=>{h(!1)},label:v}]});return(0,n.FD)(e_.s,{align:"center",justify:"flex-end",gap:"8px",children:[(0,n.Y)(g.$n,{buttonStyle:"secondary",onClick:()=>{if(e){let t,i=(t=0,ej[Object.keys(e).reduce((i,l)=>(eR.includes(l)&&e[l]&&(t+=1),t),0)]);(0,eI.$)(i,e)}else(0,eI.$)(eP.ci,{});a.goBack()},children:(0,r.t)("Cancel")}),(0,n.Y)(eO.g,{type:"primary",disabled:x,loading:u,tooltip:(null==e?void 0:e.table_name)?void 0:p,onClick:()=>h(!0),popupRender:()=>$,icon:(0,n.Y)(b.F.DownOutlined,{iconSize:"xs",iconColor:s.colorTextLightSolid}),trigger:["click"],children:m})]})});var eL=i(42114);function eB({header:e,leftPanel:t,datasetPanel:i,rightPanel:l,footer:a}){let o=(0,y.useTheme)();return(0,n.FD)($,{"data-test":"dataset-layout-wrapper",children:[e&&(0,n.Y)(T,{children:e}),(0,n.FD)(Y,{children:[t&&(0,n.Y)(eL.A,{id:"dataset",initialWidth:80*o.sizeUnit,minWidth:80*o.sizeUnit,enable:!0,children:e=>(0,n.Y)(z,{width:e,children:(0,n.Y)(F,{children:t})})}),(0,n.FD)(S,{children:[(0,n.FD)(U,{children:[i&&(0,n.Y)(k,{children:i}),l&&(0,n.Y)(A,{children:l})]}),(0,n.Y)(C,{children:a&&(0,n.Y)(_,{children:a})})]})]})]})}function eW(){return(eW=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}function eM(e,t){let i=eW({},e);switch(t.type){case v.SelectDatabase:return eW({},i,t.payload,{catalog:null,schema:null,table_name:null});case v.SelectCatalog:return eW({},i,{[t.payload.name]:t.payload.value,schema:null,table_name:null});case v.SelectSchema:return eW({},i,{[t.payload.name]:t.payload.value,table_name:null});case v.SelectTable:case v.ChangeDataset:return eW({},i,{[t.payload.name]:t.payload.value});default:return null}}function eH(){var e;let[t,i]=(0,a.useReducer)(eM,null),[l,c]=(0,a.useState)(!1),[m,g]=(0,a.useState)(!1),{datasets:b,datasetNames:f}=((e,t)=>{let[i,l]=(0,a.useState)([]),n=(null==e?void 0:e.supports_schemas)!==!1,o=t?encodeURIComponent(t):null,c=(0,a.useCallback)(e=>{var t;return(t=function*(){let t,i=[],n=0;for(;void 0===t||i.length<t;){let l=u().encode_uri({filters:e,page:n});try{let e=yield s.A.get({endpoint:`/api/v1/dataset/?q=${l}`});({count:t}=e.json);let{json:{result:a}}=e;i=[...i,...a],n+=1}catch(e){(0,p.iB)((0,r.t)("There was an error fetching dataset")),d.A.error((0,r.t)("There was an error fetching dataset"),e);break}}l(i)},function(){var e=this,i=arguments;return new Promise(function(l,n){var a=t.apply(e,i);function o(e){h(a,l,n,o,r,"next",e)}function r(e){h(a,l,n,o,r,"throw",e)}o(void 0)})})()},[]);(0,a.useEffect)(()=>{let i=[{col:"database",opr:"rel_o_m",value:null==e?void 0:e.id},...n?[{col:"schema",opr:"eq",value:o}]:[],{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];(null==e?void 0:e.id)!==void 0&&(t||!n)&&c(i)},[null==e?void 0:e.id,t,o,n,c]);let m=(0,a.useMemo)(()=>null==i?void 0:i.map(e=>e.table_name),[i]);return{datasets:i,datasetNames:m}})(null==t?void 0:t.db,null==t?void 0:t.schema),{datasetId:v}=(0,o.g)();return(0,a.useEffect)(()=>{Number.isNaN(parseInt(v,10))||g(!0)},[v]),(0,n.Y)(eB,{header:(0,n.Y)(R,{setDataset:i,title:null==t?void 0:t.table_name}),leftPanel:m?null:(0,n.Y)(eA,{setDataset:i,dataset:t,datasetNames:f}),datasetPanel:m?(0,n.Y)(M,{id:v}):(0,n.Y)(eY,{tableName:null==t?void 0:t.table_name,dbId:null==t||null==(e=t.db)?void 0:e.id,catalog:null==t?void 0:t.catalog,schema:null==t?void 0:t.schema,database:null==t?void 0:t.db,setHasColumns:c,datasets:b}),footer:(0,n.Y)(eN,{url:"/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc",datasetObject:t,hasColumns:l,datasets:f})})}}}]);