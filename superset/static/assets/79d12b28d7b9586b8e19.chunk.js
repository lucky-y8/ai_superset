"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[73],{12913(e,t,i){i.d(t,{Q:()=>r});var l,r=((l={}).Dashboards="dashboards",l.Description="description",l.LastModified="lastModified",l.Editor="editor",l.Rows="rows",l.Sql="sql",l.Table="table",l.Tags="tags",l)},86204(e,t,i){i.d(t,{A:()=>w});var l=i(2445),r=i(64260),n=i(52747),o=i(51543),a=i(85614),d=i(8563),s=i(27124),c=i(25365),u=i(60685),p=i(12913);let h=a.styled.div`
  font-weight: ${({theme:e})=>e.fontWeightBold};
`,f=({text:e,header:t})=>{let i=(0,c.A)(e);return(0,l.FD)(l.FK,{children:[t&&(0,l.Y)(h,{children:t}),i.map(e=>(0,l.Y)("div",{children:e},e))]})},b={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,editor:6,lastModified:7},m=a.styled.div`
  ${({theme:e,count:t})=>`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    background-color: ${e.colorBgLayout};
    color: ${e.colorTextTertiary};
    font-size: ${e.fontSizeSM}px;
    min-width: ${24+32*t-16}px;
    border-radius: ${e.borderRadius}px;
    line-height: 1;
  `}
`,x=a.styled.div`
  ${({theme:e,collapsed:t,last:i,onClick:l})=>`
    display: flex;
    align-items: center;
    max-width: ${174+16*!i}px;
    min-width: ${t?16+16*!i:94+16*!i}px;
    padding-right: ${16*!i}px;
    cursor: ${l?"pointer":"default"};
    & .metadata-icon {
      color: ${l&&t?e.colorPrimary:e.colorTextTertiary};
      padding-right: ${8*!t}px;
      & .anticon {
        line-height: 0;
      }
    }
    & .metadata-text {
      color: ${e.colorTextSecondary};
      min-width: 70px;
      overflow: hidden;
      text-overflow: ${t?"unset":"ellipsis"};
      white-space: nowrap;
      text-decoration: ${l?"underline":"none"};
      line-height: 1.4;
    }
  `}
`,g=a.styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=({barWidth:e,contentType:t,collapsed:i,last:n=!1,tooltipPlacement:o})=>{let{icon:a,title:c,tooltip:h=c}=(e=>{let{type:t}=e;switch(t){case p.Q.Dashboards:return{icon:u.F.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,l.Y)("div",{children:(0,l.Y)(f,{header:e.title,text:e.description})}):void 0};case p.Q.Description:return{icon:u.F.BookOutlined,title:e.value};case p.Q.LastModified:return{icon:u.F.EditOutlined,title:e.value,tooltip:(0,l.FD)("div",{children:[(0,l.Y)(f,{header:(0,s.t)("Last modified"),text:e.value}),(0,l.Y)(f,{header:(0,s.t)("Modified by"),text:e.modifiedBy})]})};case p.Q.Editor:return{icon:u.F.UserOutlined,title:e.createdBy,tooltip:(0,l.FD)("div",{children:[(0,l.Y)(f,{header:(0,s.t)("Created by"),text:e.createdBy}),!!e.editors&&(0,l.Y)(f,{header:(0,s.t)("Editors"),text:e.editors}),(0,l.Y)(f,{header:(0,s.t)("Created on"),text:e.createdOn})]})};case p.Q.Rows:return{icon:u.F.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case p.Q.Sql:return{icon:u.F.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case p.Q.Table:return{icon:u.F.InsertRowAboveOutlined,title:e.title,tooltip:e.title};case p.Q.Tags:return{icon:u.F.TagsOutlined,title:e.values.join(", "),tooltip:(0,l.Y)("div",{children:(0,l.Y)(f,{header:(0,s.t)("Tags"),text:e.values})})};default:throw Error(`Invalid type provided: ${t}`)}})(t),[b,m]=(0,r.useState)(!1),v=(0,r.useRef)(null),{type:w,onClick:y}=t;(0,r.useEffect)(()=>{m(!!v.current&&v.current.scrollWidth>v.current.clientWidth)},[e,m,t]);let $=(0,l.FD)(x,{collapsed:i,last:n,onClick:y?()=>y(w):void 0,role:y?"button":void 0,children:[(0,l.Y)(a,{iconSize:"l",className:"metadata-icon"}),!i&&(0,l.Y)("span",{ref:v,className:"metadata-text",children:c})]});return b||i||h&&h!==c?(0,l.Y)(d.m,{placement:o,title:(0,l.Y)(g,{children:h}),children:$}):$},w=({items:e,tooltipPlacement:t="top"})=>{let[i,a]=(0,r.useState)(),[d,s]=(0,r.useState)(!1),c=(0,o.A)(e,(e,t)=>e.type===t.type).sort((e,t)=>b[e.type]-b[t.type]),u=c.length;if(u<2)throw Error("The minimum number of items for the metadata bar is 2.");if(u>6)throw Error("The maximum number of items for the metadata bar is 6.");let p=(0,r.useCallback)(e=>{let t=110*u-16;a(e),s(!!(e&&e<t))},[u]),{ref:h}=(0,n.uZ)({onResize:p});return(0,l.Y)(m,{ref:h,count:u,"data-test":"metadata-bar",children:c.map((e,r)=>(0,l.Y)(v,{barWidth:i,contentType:e,collapsed:d,last:r===u-1,tooltipPlacement:t},r))})}},98110(e,t,i){i.d(t,{U:()=>Y});var l=i(2445),r=i(64260),n=i(27124),o=i(17437),a=i(85614),d=i(60685),s=i(59854),c=i(52747),u=i(8563),p=i(65471);let h=e=>(0,o.AH)`
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
`,f=(0,r.memo)(({title:e,placeholder:t,onSave:i,canEdit:d,label:s})=>{let f=(0,a.useTheme)(),[b,m]=(0,r.useState)(!1),[x,g]=(0,r.useState)(!1),[v,w]=(0,r.useState)(e||""),[y,$]=(0,r.useState)(0),Y=(0,r.useRef)(null),T=(0,r.useRef)(null),k=(0,r.useRef)(!1),{width:S,ref:F}=(0,c.uZ)({refreshMode:"debounce"});(0,r.useEffect)(()=>{b||w(e)},[e]),(0,r.useEffect)(()=>{if(b){var e;let t=null==(e=T.current)?void 0:e.input;if(t){let{length:e}=t.value;t.setSelectionRange(e,e),t.scrollLeft=t.scrollWidth}}},[b]),(0,r.useLayoutEffect)(()=>{Y.current&&(Y.current.textContent=v||t,$(Y.current.offsetWidth))},[v,t]),(0,r.useEffect)(()=>{var e;let t=null==(e=T.current)?void 0:e.input;t&&(t.scrollWidth>t.clientWidth?g(!0):g(!1))},[y,S]);let C=(0,r.useCallback)(()=>{d&&!b&&m(!0)},[d,b]),z=(0,r.useCallback)(()=>{if(!d)return;let t=v.trim();k.current&&e!==t?(w(t),i(t)):k.current?w(t):w(e),k.current=!1,m(!1)},[d,v,i,e]),E=(0,r.useCallback)(e=>{d&&(b||m(!0),k.current=!0,w(e.target.value))},[d,b]),D=(0,r.useCallback)(e=>{if(!d)return;e.preventDefault();let{activeElement:t}=document;t&&t instanceof HTMLElement&&t.blur()},[d]);return(0,l.FD)("div",{css:h,ref:F,children:[(0,l.Y)(u.m,{id:"title-tooltip",title:x&&v&&!b?v:null,children:(0,l.Y)(p.Input,{ref:T,"data-test":"editable-title-input",variant:"borderless","aria-label":null!=s?s:(0,n.t)("Title"),className:"dynamic-title-input",value:v,onChange:E,onBlur:z,onClick:C,onPressEnter:D,placeholder:t,css:(0,o.AH)`
              ${!d&&`&[disabled] {
                  cursor: default;
                }
              `}
              font-size: ${f.fontSizeXL}px;
              transition: auto;
              ${y&&y>0&&(0,o.AH)`
                  width: ${y}px;
                `}
            `,disabled:!d})}),(0,l.Y)("span",{ref:Y,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})});var b=i(58607),m=i(48158),x=i(29138);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}let v=e=>{var t,i,l;return(0,o.AH)`
  width: ${null!=(t=e.buttonControlHeight)?t:8*e.sizeUnit}px;
  height: ${null!=(i=e.buttonControlHeight)?i:8*e.sizeUnit}px;
  padding: 0;
  border: 1px solid ${e.colorPrimary};
  border-radius: ${null!=(l=e.buttonBorderRadius)?l:e.borderRadius}px;

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }
`},w=e=>(0,o.AH)`
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
`,y=e=>(0,o.AH)`
  display: flex;
  align-items: center;
  padding-left: ${2*e.sizeUnit}px;

  & .anticon-star {
    padding: 0 ${e.sizeUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,$=e=>(0,o.AH)`
  margin-left: ${2*e.sizeUnit}px;
`,Y=(0,r.memo)(({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:r,faveStarProps:o,titlePanelAdditionalItems:c,rightPanelAdditionalItems:u,additionalActionsMenu:p,menuDropdownProps:h,showMenuDropdown:Y=!0,tooltipProps:T})=>{let k=(0,a.useTheme)();return(0,l.FD)("div",{css:w,className:"header-with-actions",children:[(0,l.FD)("div",{className:"title-panel",children:[(0,l.Y)(f,g({},e)),t&&(0,l.FD)("div",{css:y,children:[(null==i?void 0:i.certifiedBy)&&(0,l.Y)(m.T,g({},i)),r&&(0,l.Y)(s.$,g({},o)),c]})]}),(0,l.FD)("div",{className:"right-button-panel",children:[u,(0,l.Y)("div",{css:$,children:Y&&(0,l.Y)(b.ms,g({trigger:["click"],popupRender:()=>p},h,{children:(0,l.Y)("span",{children:(0,l.Y)(x.$n,{css:v,buttonStyle:"tertiary","aria-label":(0,n.t)("Menu actions trigger"),tooltip:null==T?void 0:T.text,placement:null==T?void 0:T.placement,"data-test":"actions-trigger",children:(0,l.Y)(d.F.EllipsisOutlined,{iconColor:k.colorPrimary,iconSize:"l"})})})}))})]})]})})}}]);