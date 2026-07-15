"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8937],{4392(e,t,n){var l=n(17437),r=n(64260);let i=(0,l.AH)("white-space:nowrap;overflow:hidden;text-overflow:ellipsis;");n.d(t,["A",0,({isVertical:e,isHorizontal:t}={isVertical:!1,isHorizontal:!0})=>{let[n,l]=(0,r.useState)(!0),i=(0,r.useRef)(null),[o,a]=(0,r.useState)(0),[c,s]=(0,r.useState)(0),[d,u]=(0,r.useState)(0),[p,h]=(0,r.useState)(0);return(0,r.useEffect)(()=>{var e,t,n,l,r,o,c,d;a(null!=(e=null==(r=i.current)?void 0:r.offsetWidth)?e:0),s(null!=(t=null==(o=i.current)?void 0:o.scrollWidth)?t:0),u(null!=(n=null==(c=i.current)?void 0:c.offsetHeight)?n:0),h(null!=(l=null==(d=i.current)?void 0:d.scrollHeight)?l:0)}),(0,r.useEffect)(()=>{l(e&&d<p||t&&o<c)},[o,c,d,p,e,t]),[i,n]},"P",0,i])},36320(e,t,n){var l=n(2445),r=n(27124),i=n(85614),o=n(17437),a=n(33296),c=n(8563),s=n(80967),d=n(60685);let u=(0,o.AH)`
  &.anticon {
    font-size: unset;
    overflow: visible;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    padding-bottom: 0.1em;
    .anticon {
      line-height: unset;
      vertical-align: unset;
      overflow: visible;
    }
  }
`;n.d(t,["A",0,({name:e,label:t,description:n,validationErrors:p=[],renderTrigger:h=!1,rightNode:v,leftNode:f,onClick:m,hovered:g=!1,tooltipOnClick:C=()=>{},warning:b,danger:y})=>{let x=(0,i.useTheme)();return t?(0,l.FD)("div",{className:"ControlHeader","data-test":`${e}-header`,children:[(0,l.Y)("div",{className:"pull-left",children:(0,l.FD)(a.l,{css:e=>(0,o.AH)`
            margin-bottom: ${.5*e.sizeUnit}px;
            position: relative;
            font-size: ${e.fontSizeSM}px;
            overflow: visible;
            padding-bottom: 0.1em;
          `,htmlFor:e,children:[f&&(0,l.FD)("span",{children:[f," "]}),(0,l.Y)("span",{role:"button",tabIndex:0,onClick:m,style:{cursor:m?"pointer":""},children:t})," ",b&&(0,l.FD)("span",{children:[(0,l.Y)(c.m,{id:"error-tooltip",placement:"top",title:b,children:(0,l.Y)(d.F.WarningOutlined,{iconColor:x.colorWarning,css:(0,o.AH)`
                    vertical-align: baseline;
                  `,iconSize:"s"})})," "]}),y&&(0,l.FD)("span",{children:[(0,l.Y)(c.m,{id:"error-tooltip",placement:"top",title:y,children:(0,l.Y)(d.F.CloseCircleOutlined,{iconColor:x.colorErrorText,iconSize:"s"})})," "]}),(null==p?void 0:p.length)>0&&(0,l.FD)("span",{"data-test":"error-tooltip",css:(0,o.AH)`
                cursor: pointer;
              `,children:[(0,l.Y)(c.m,{id:"error-tooltip",placement:"top",title:null==p?void 0:p.join(" "),children:(0,l.Y)(d.F.ExclamationCircleOutlined,{iconColor:x.colorError})})," "]}),g?(0,l.FD)("span",{css:()=>(0,o.AH)`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${x.sizeUnit}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[n&&(0,l.FD)("span",{children:[(0,l.Y)(c.m,{id:"description-tooltip",title:n,placement:"top",children:(0,l.Y)(d.F.InfoCircleOutlined,{css:u,onClick:C})})," "]}),h&&(0,l.FD)("span",{children:[(0,l.Y)(s.I,{label:(0,r.t)("bolt"),tooltip:(0,r.t)("Changing this control takes effect instantly"),placement:"top",type:"notice"})," "]})]}):null]})}),v&&(0,l.Y)("div",{className:"pull-right",children:v}),(0,l.Y)("div",{className:"clearfix"})]}):null}])},79126(e,t,n){var l=n(2445),r=n(64260),i=n(73825);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}let a=()=>{var e;return null==(e=document.getElementById("controlSections"))?void 0:e.lastElementChild},c=e=>{var t,n;let l=null==(t=window)?void 0:t.innerHeight,r=null==(n=window)?void 0:n.innerWidth,i=null==e?void 0:e.getBoundingClientRect();return l&&r&&(null==i?void 0:i.top)?{yRatio:i.top/l,xRatio:i.left/r}:{yRatio:0,xRatio:0}};n.d(t,["A",0,e=>{let{getPopupContainer:t,getVisibilityRatio:n=c,open:s,destroyOnHidden:d=!1,placement:u="right"}=e,p=function(e,t){if(null==e)return{};var n,l,r={},i=Object.getOwnPropertyNames(e);for(l=0;l<i.length;l++)!(t.indexOf(n=i[l])>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,["getPopupContainer","getVisibilityRatio","open","destroyOnHidden","placement"]),h=(0,r.useRef)(),[v,f]=(0,r.useState)(void 0===s?p.defaultOpen:s),[m,g]=r.useState(u),C=(0,r.useCallback)(()=>{if(!h.current||!v)return;let{yRatio:e,xRatio:t}=n(h.current),l=t<.35?"right":t>.65?"left":"",r=e<.35?l?"top":"bottom":e>.65?l?"bottom":"top":"",i=(l?l+r.charAt(0).toUpperCase()+r.slice(1):r)||"left";i!==m&&g(i)},[n,v,m]),b=(0,r.useCallback)(e=>{let t=a();t&&t.style.setProperty("overflow-y",e?"hidden":"auto","important")},[C]),y=(0,r.useCallback)(e=>(h.current=e,(null==t?void 0:t(e))||document.body),[C,t]),x=(0,r.useCallback)(e=>{void 0===e&&b(e),f(!!e),null==p.onOpenChange||p.onOpenChange.call(p,!!e)},[p,b]),Y=(0,r.useCallback)(e=>{"Escape"===e.key&&(f(!1),null==p.onOpenChange||p.onOpenChange.call(p,!1))},[p]),w=(0,r.useCallback)(e=>{e&&C()},[C]);return(0,r.useEffect)(()=>{void 0!==s&&f(!!s)},[s]),(0,r.useEffect)(()=>{void 0!==v&&b(v)},[v,b]),(0,r.useEffect)(()=>(v&&document.addEventListener("keydown",Y),()=>{document.removeEventListener("keydown",Y)}),[Y,v]),(0,r.useEffect)(()=>{if(!v||!h.current)return()=>{};let e=new ResizeObserver(()=>{requestAnimationFrame(()=>{C()})}),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&C()})},{threshold:[0,.25,.5,.75,1]});return e.observe(h.current.parentElement||document.body),t.observe(h.current),()=>{e.disconnect(),t.disconnect()}},[v,C]),(0,l.Y)(i.A,o({},p,{open:v,arrow:{pointAtCenter:!0},placement:m,onOpenChange:x,getPopupContainer:y,destroyOnHidden:d,afterOpenChange:w,rootClassName:"superset-explore-popover"}))},"v",0,a])},88221(e,t,n){n.d(t,{A:()=>k});var l=n(2445),r=n(64260),i=n(27124),o=n(4392),a=n(65802),c=n(2426),s=n(85614),d=n(17437),u=n(68292),p=n(29138),h=n(70621),v=n(8563),f=n(47036),m=n(36320),g=n(60685),C=n(27664),b=n(62388),y=n(79126),x=n(90609),Y=n(23966),w=n(73582);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}let A=(0,s.styled)(u.A)`
  width: 272px;
`,F=s.styled.div`
  ${({theme:e})=>(0,d.AH)`
    .ant-row {
      margin-top: 8px;
    }

    .ant-picker {
      padding: 4px 17px 4px;
      border-radius: 4px;
    }

    .ant-divider-horizontal {
      margin: 16px 0;
    }

    .control-label {
      font-size: ${e.fontSizeSM}px;
      line-height: 16px;
      margin: 8px 0;
    }

    .section-title {
      font-style: normal;
      font-weight: ${e.fontWeightStrong};
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .control-anchor-to {
      margin-top: 16px;
    }

    .control-anchor-to-datetime {
      width: 217px;
    }

    .footer {
      text-align: right;
    }
  `}
`,S=s.styled.span`
  span {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:e})=>e.colorError};
  }
`,E=(e,t,n)=>e?(0,l.FD)("div",{children:[t&&(0,l.Y)("strong",{children:(0,i.t)(t)}),n&&(0,l.Y)("div",{css:e=>(0,d.AH)`
            margin-top: ${e.sizeUnit}px;
          `,children:n})]}):n||null;function k(e){var t;let{name:n,onChange:d,onOpenPopover:u=b.fZ,onClosePopover:k=b.fZ,isOverflowingFilterBar:N=!1}=e,$=(0,x.IM)(),D=null!=(t=e.value)?t:$,[z,H]=(0,r.useState)(D),[W,P]=(0,r.useState)(!1),R=(0,r.useMemo)(()=>(0,x.J5)(D),[D]),[j,I]=(0,r.useState)(R),[B,M]=(0,r.useState)(D),[T,U]=(0,r.useState)(D),[L,J]=(0,r.useState)(!1),[V,Z]=(0,r.useState)(D),[q,K]=(0,r.useState)((0,i.t)(D)),_=(0,s.useTheme)(),[G,Q]=(0,o.A)();function X(){U(D),I(R),P(!1),k()}(0,r.useEffect)(()=>{if(D===a.WC){H(a.WC),K(null),J(!0);return}(0,c.x9)(D).then(({value:e,error:t})=>{t?(Z(t||""),J(!1),K((0,i.t)(D)||null)):("Common"===R||"Calendar"===R||"Current"===R||"No filter"===R?(H(D),K(E(Q,D,e))):(H(e||""),K(E(Q,e,D))),J(!0)),M(D),Z(e||D)})},[R,Q,G,D]),(0,C.sv)(()=>{if(T===a.WC){Z(a.WC),M(a.WC),J(!0);return}B!==T&&(0,c.x9)(T).then(({value:e,error:t})=>{t?(Z(t||""),J(!1)):(Z(e||""),J(!0)),M(T)})},f.Y.SLOW_DEBOUNCE,[T]);let ee=(0,l.FD)(F,{children:[(0,l.Y)("div",{className:"control-label",children:(0,i.t)("Range type")}),(0,l.Y)(A,{ariaLabel:(0,i.t)("Range type"),options:x.BJ,value:j,onChange:function(e){e===a.WC&&U(a.WC),I(e)}}),"No filter"!==j&&(0,l.Y)(h.c,{}),"Common"===j&&(0,l.Y)(Y.bB,{value:T,onChange:U}),"Calendar"===j&&(0,l.Y)(Y.Mr,{value:T,onChange:U}),"Current"===j&&(0,l.Y)(w.$,{value:T,onChange:U}),"Advanced"===j&&(0,l.Y)(Y.y0,{value:T,onChange:U}),"Custom"===j&&(0,l.Y)(Y.xz,{value:T,onChange:U,isOverflowingFilterBar:N}),"No filter"===j&&(0,l.Y)("div",{"data-test":x.ad.NoFilter}),(0,l.Y)(h.c,{}),(0,l.FD)("div",{children:[(0,l.Y)("div",{className:"section-title",children:(0,i.t)("Actual time range")}),L&&(0,l.Y)("div",{children:"No filter"===V?(0,i.t)("No filter"):V}),!L&&(0,l.FD)(S,{className:"warning",children:[(0,l.Y)(g.F.ExclamationCircleOutlined,{iconColor:_.colorError}),(0,l.Y)("span",{className:"text error",children:V})]})]}),(0,l.Y)(h.c,{}),(0,l.FD)("div",{className:"footer",children:[(0,l.Y)(p.$n,{buttonStyle:"secondary",cta:!0,onClick:X,"data-test":x.ad.CancelButton,children:(0,i.t)("Cancel")},"cancel"),(0,l.Y)(p.$n,{buttonStyle:"primary",cta:!0,disabled:!L,onClick:function(){d(T),P(!1),k()},"data-test":x.ad.ApplyButton,children:(0,i.t)("Apply")},"apply")]})]}),et=(0,l.Y)(y.A,{autoAdjustOverflow:!1,trigger:"click",placement:"right",content:ee,title:(0,l.FD)(S,{children:[(0,l.Y)(g.F.EditOutlined,{}),(0,l.Y)("span",{className:"text",children:(0,i.t)("Edit time range")})]}),defaultOpen:W,open:W,onOpenChange:()=>{W?X():(U(D),I(R),P(!0),u())},overlayStyle:{width:"600px"},destroyOnHidden:!0,getPopupContainer:e=>N?e.parentNode:document.body,overlayClassName:"time-range-popover",children:(0,l.Y)(v.m,{placement:"top",title:q,children:(0,l.Y)("span",{"data-test":x.ad.PopoverOverlay,children:(0,l.Y)(Y.PF,{name:n,"aria-labelledby":`filter-name-${e.name}`,"aria-describedby":`date-label-${e.name}`,label:z,isActive:W,isPlaceholder:z===a.WC,ref:G})})})});return(0,l.FD)(l.FK,{children:[(0,l.Y)(m.A,O({},e)),et]})}},48511(e,t,n){n.d(t,{Ay:()=>l.A});var l=n(88221);n(90609)},54299(e,t,n){var l=n(85614),r=n(93225);let i=l.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>0===e?"100%":`${e}px`};
`;(0,l.styled)(r.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=l.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`;n.d(t,["Mo",0,o,"j3",0,i])}}]);