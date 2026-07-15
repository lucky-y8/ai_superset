"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4605],{43907(e,t,r){var n=r(2445),l=r(85614),i=r(65471);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,l.styled)(e=>(0,n.Y)(i.Badge,a({},e)))`
  ${({theme:e,color:t,count:r})=>`
    & > sup,
    & > sup.ant-badge-count {
      box-shadow: none;
      ${void 0!==r?`background: ${t||e.colorPrimary};`:""}
    }
  `}
`;r.d(t,["E",0,o])},79592(e,t,r){var n=r(2445),l=r(65471);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let a=Object.assign(e=>{let{padded:t}=e,r=function(e,t){if(null==e)return{};var r,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(t.indexOf(r=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(e,["padded"]);return(0,n.Y)(l.Card,i({},r,{css:e=>({".ant-card-body":{padding:t?4*e.sizeUnit:e.sizeUnit}})}))},{Meta:l.Card.Meta});r.d(t,["Z",0,a])},48158(e,t,r){r.d(t,{T:()=>d});var n=r(2445),l=r(27124),i=r(85614),a=r(60685),o=r(8563);function d({certifiedBy:e,details:t,size:r="l"}){let s=(0,i.useTheme)();return(0,n.Y)(o.m,{id:"certified-details-tooltip",title:(0,n.FD)(n.FK,{children:[e&&(0,n.Y)("div",{children:(0,n.Y)("strong",{children:(0,l.t)("Certified by %s",e)})}),(0,n.Y)("div",{children:t})]}),children:(0,n.Y)(a.F.Certified,{iconColor:s.colorPrimary,iconSize:r})})}},70524(e,t,r){r.d(t,{z:()=>g});var n=r(2445),l=r(27124),i=r(85614),a=r(17437),o=r(64260),d=r(46942),s=r.n(d),c=r(8563),u=r(48158),p=r(65471);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let m=(0,i.styled)(u.T)`
  vertical-align: middle;
`,f=i.styled.span`
  &.editable-title {
    display: inline;
    &.editable-title--editing {
      width: 100%;
    }

    input,
    textarea {
      outline: none;
      background: transparent;
      box-shadow: none;
      cursor: initial;
      font-feature-settings:
        'liga' 0,
        'calt' 0;
      font-variant-ligatures: none;
      font-weight: bold;
    }

    input[type='text'],
    textarea {
      color: ${({theme:e})=>e.colorTextTertiary};
      border-radius: ${({theme:e})=>e.sizeUnit}px;
      font-size: ${({theme:e})=>e.fontSizeLG}px;
      padding: ${({theme:e})=>e.sizeUnit/2}px;
      min-height: 100px;
      width: 95%;
    }

    &.datasource-sql-expression {
      min-width: 315px;
      width: 100%;
    }
  }
`;function g(e){let{canEdit:t=!1,editing:r=!1,extraClasses:i,noPermitTooltip:d,onSaveTitle:u,showTooltip:g=!0,style:y,title:b="",defaultTitle:v="",placeholder:x="",certifiedBy:S,certificationDetails:w,renderLink:C,maxWidth:Y,autoSize:$=!0,onEditingChange:_}=e,F=function(e,t){if(null==e)return{};var r,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(t.indexOf(r=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(e,["canEdit","editing","extraClasses","noPermitTooltip","onSaveTitle","showTooltip","style","title","defaultTitle","placeholder","certifiedBy","certificationDetails","renderLink","maxWidth","autoSize","onEditingChange"]),[k,I]=(0,o.useState)(r),[z,A]=(0,o.useState)(b),[D,E]=(0,o.useState)(b),[T,M]=(0,o.useState)(0),O=(0,o.useRef)(null);function U(){let e=z.trim();if(t){if(I(!1),null==_||_(!1),!e.length)return void A(D);D!==e&&E(e),b!==e&&u(e)}}(0,o.useLayoutEffect)(()=>{var e,t;let{font:r}=window.getComputedStyle((null==(t=O.current)||null==(e=t.resizableTextArea)?void 0:e.textArea)||document.body);M(Math.min(function(e,t="14px Arial"){let r=document.createElement("canvas").getContext("2d");return r?(r.font=t,r.measureText(e).width):0}(z||"",r)+20,"number"==typeof Y?Y:1/0))},[z,Y]),(0,o.useEffect)(()=>{b!==z&&(E(z),A(b))},[b]),(0,o.useEffect)(()=>{if(k&&O.current){var e;let t=null==(e=O.current.resizableTextArea)?void 0:e.textArea;if(t){t.focus();let{length:e}=t.value;t.setSelectionRange(e,e),t.scrollTop=t.scrollHeight}}},[k]);let L=z;k||z||(L=v||b);let R=(0,n.Y)(p.Input.TextArea,{size:"small","data-test":"textarea-editable-title-input",ref:O,value:L,className:b?void 0:"text-muted",onChange:function(e){t&&A(e.target.value)},onBlur:U,onClick:function(){var e,r;if(!t||k)return;let n=null==(r=O.current)||null==(e=r.resizableTextArea)?void 0:e.textArea;if(n){n.focus();let{length:e}=n.value;n.setSelectionRange(e,e)}I(!0),null==_||_(!0)},onKeyDown:function(e){["Backspace","Delete"," ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),U())},onPressEnter:function(e){e.preventDefault(),U()},placeholder:x,variant:k?"outlined":"borderless",autoSize:!!$&&{minRows:1,maxRows:3},css:e=>(0,a.AH)`
        && {
          width: ${T}px;
          min-width: ${10*e.sizeUnit}px;
          transition: auto;
        }
      `});return g&&!k&&(R=(0,n.Y)(c.m,{id:"title-tooltip",placement:"topLeft",title:t?(0,l.t)("Click to edit"):d||(0,l.t)("You don't have the rights to alter this title."),children:(0,n.Y)("span",{children:R})})),t||(R=C?C(L||""):(0,n.Y)("span",{"data-test":"span-title",children:L})),(0,n.FD)(f,h({"data-test":"editable-title",className:s()("editable-title",i,t&&"editable-title--editable",k&&"editable-title--editing"),style:y,editing:k,canEdit:t},F,{children:[S&&(0,n.FD)(n.FK,{children:[(0,n.Y)(m,{certifiedBy:S,details:w,size:"xl"})," "]}),R]}))}},57832(e,t,r){var n=r(2445),l=r(65471);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let a=Object.assign(function(e){return(0,n.Y)(l.Form,i({},e))},{useForm:l.Form.useForm,Item:l.Form.Item,List:l.Form.List,ErrorList:l.Form.ErrorList,Provider:l.Form.Provider});r.d(t,["l",0,a])},93225(e,t,r){var n=r(65471),l=r(85614);let i=(0,l.styled)(n.Form.Item)`
  ${({theme:e})=>`
    &.ant-form-item > .ant-row > .ant-form-item-label {
      padding-bottom: ${e.paddingXXS}px;
    }
    .ant-form-item-label {
      & > label {
        font-size: ${e.fontSizeSM}px;
        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
          &::before {
            display: none;
          }
          &::after {
            display: inline-block;
            visibility: visible;
            color: ${e.colorError};
            font-size: ${e.fontSizeSM}px;
            content: '*';
          }
        }
      }
    }
    .ant-form-item-extra {
      margin-top: ${e.sizeUnit}px;
      font-size: ${e.fontSizeSM}px;
    }
  `}
`;r.d(t,["e",0,i])},89920(e,t,r){var n=r(2445),l=r(85614),i=r(17437),a=r(65471),o=r(60685);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let s=e=>{let{animated:t=!1,allowOverflow:r=!0,contentHeight:l="100%",fullHeight:o=!1,tabBarStyle:s,contentStyle:c,contentPadding:u}=e,p=function(e,t){if(null==e)return{};var r,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(t.indexOf(r=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(e,["animated","allowOverflow","contentHeight","fullHeight","tabBarStyle","contentStyle","contentPadding"]);return(0,n.Y)(a.Tabs,d({animated:t},p,{tabBarStyle:s,css:e=>(0,i.AH)`
      overflow: ${r?"visible":"hidden"};
      ${o&&"height: 100%;"}

      .ant-tabs-body-holder {
        overflow: ${r?"visible":"auto"};
        ${o&&"height: 100%;"}
        ${l&&`height: ${"number"==typeof l?`${l}px`:l};`}
        ${u}
      }
      .ant-tabs-body {
        ${o&&"height: 100%;"}
      }
      .ant-tabs-content {
        ${o&&"height: 100%;"}
        ${c}
      }
      .ant-tabs-nav {
        margin: 0;
      }
      .ant-tabs-nav-wrap {
        ${!(s&&"paddingLeft"in s)?`padding: 0 ${4*e.sizeUnit}px;`:""}
      }
      .ant-tabs-tab {
        flex: 1 1 auto;

        .short-link-trigger.btn {
          padding: 0 ${e.sizeUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.fontSizeSM}px;
        text-align: center;
        user-select: none;
        .required {
          margin-left: ${e.sizeUnit/2}px;
          color: ${e.colorError};
        }
        &:focus-visible {
          box-shadow: none;
        }
      }
    `}))},c=(0,l.styled)(a.Tabs.TabPane)``,u=Object.assign(s,{TabPane:c}),p=(0,l.styled)(s)`
  ${({theme:e,contentStyle:t})=>`
    .ant-tabs-body-holder {
      background: ${e.colorBgContainer};
      ${t}
    }

    & > .ant-tabs-nav {
      margin-bottom: 0;
    }

    .ant-tabs-tab-remove {
      padding-top: 0;
      padding-bottom: 0;
      height: ${6*e.sizeUnit}px;
    }
  `}
`,h=(0,l.styled)(o.F.CloseOutlined)`
  color: ${({theme:e})=>e.colorIcon};
`,m=Object.assign(p,{TabPane:c});m.defaultProps={type:"editable-card",animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,n.Y)(h,{iconSize:"s",role:"button",tabIndex:0})};let f=Object.assign((0,l.styled)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.sizeUnit}px;
    padding: ${({theme:e})=>`${3*e.sizeUnit}px ${e.sizeUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.fontSize}px;

    .editable-title textarea,
    .editable-title input[type='text'] {
      font-size: inherit;
    }
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,{TabPane:c});r.d(t,["Ay",0,u,"fn",0,m,"pX",0,f])},6107(e,t,r){r.d(t,["r",0,/^[A-Z]{3}$/])},58097(e,t,r){r.d(t,{P1:()=>u,vu:()=>c});var n=r(36826),l=r(18349),i=r(73371),a=r(6107),o=r(50217),d=r(45567);let s=e=>{var t;return null==(t=new Intl.NumberFormat("en-US",{style:"currency",currency:e.symbol}).formatToParts(1).find(e=>"currency"===e.type))?void 0:t.value};function c(e){if(null==e||"string"!=typeof e)return null;let t=e.trim().toUpperCase();return a.r.test(t)?t:null}function u(e){let t=null;for(let r of e){let e=c(r);if(null!==e){if(null===t)t=e;else if(e!==t)return!0}}return!1}class p extends n.A{hasValidCurrency(){var e;return!!(null==(e=this.currency)?void 0:e.symbol)}getNormalizedD3Format(){return this.d3Format.replace(/\$/g,"")}normalizeForCurrency(e){return e.replace(/%/g,"")}format(e,t,r){var n;let i=(0,l.gV)(this.getNormalizedD3Format())(e),a=(null==(n=this.currency)?void 0:n.symbol)==="AUTO";if(!this.hasValidCurrency()&&!a)return i;let o=this.normalizeForCurrency(i);if(a){if(t&&r&&t[r]){let e=c(t[r]);if(e)try{let t=s({symbol:e});if(t){let r=(0,d.W)(e,this.currency.symbolPosition,this.locale);return(0,d.h)(t,o,r)}}catch{}}return i}try{let e=s(this.currency);if(!e)return i;let t=(0,d.W)(this.currency.symbol,this.currency.symbolPosition,this.locale);return(0,d.h)(e,o,t)}catch{return i}}constructor(e){super((e,t,r)=>this.format(e,t,r)),this.d3Format=e.d3Format||i.A.SMART_NUMBER,this.currency=e.currency,this.locale=e.locale||(0,o.c)()}}r.d(t,["Ay",0,p,"Qn",0,s])},45567(e,t,r){r.d(t,{W:()=>a,h:()=>o});var n=r(50217);let l=new Set(["integer","group","decimal","fraction"]),i=new Map;function a(e,t,r=(0,n.c)()){if("prefix"===t||"suffix"===t)return t;if(e){let t=`${r}|${e}`,n=i.get(t);if(n)return n;try{let n=new Intl.NumberFormat(r,{style:"currency",currency:e}).formatToParts(1),a=n.findIndex(e=>"currency"===e.type),o=n.findIndex(e=>l.has(e.type));if(-1!==a&&-1!==o){let e=a<o?"prefix":"suffix";return i.set(t,e),e}}catch{}}return"prefix"}function o(e,t,r){return"prefix"===r?`${e} ${t}`:`${t} ${e}`}},57409(e,t,r){r.d(t,{A:()=>n});function n(e,t){return e===t||!e&&!t||!!(e&&t&&e.length===t.length&&e.every((e,r)=>e===t[r]))}},62365(e,t,r){r.d(t,{A:()=>l});var n=r(27124);function l(e){return!!(e&&Number.isNaN(Number(e)))&&(0,n.t)("is expected to be a number")}},29713(e,t,r){r.r(t),r.d(t,{default:()=>tQ});var n,l=r(2445),i=r(16750),a=r(58561),o=r.n(a),d=r(64260),s=r(61225),c=r(891),u=r(19202),p=r(51281),h=r(68655),m=r(73815),f=r(63021),g=r(27124),y=r(85614),b=r(17437),v=r(27243),x=r(89920),S=r(17402),w=r(37350),C=r(12079),Y=r(560),$=r(97616),_=r(7070),F=r(74206),k=r(43907),I=r(79592),z=r(68292),A=r(33296),D=r(90617),E=r(48158),T=r(70524),M=r(59272),O=r(10020),U=r(68447),L=r(80967),R=r(60685),P=r(70621),j=r(65471),q=r(29138),H=r(8563),B=r(13512);function K(e,t,r,n,l,i,a){try{var o=e[i](a),d=o.value}catch(e){r(e);return}o.done?t(d):Promise.resolve(d).then(n,l)}let N=(0,r(98987).A)({method:"POST",endpoint:"/api/v1/sqllab/execute"});function W(e){return{type:"SET_QUERY_IS_LOADING",payload:e}}var Q=r(6411),G=r.n(Q),V=r(58414),X=r(47566),J=r(72620),Z=r(72863),ee=r(55990),et=r(43561),er=r(20422),en=r(57832);function el(e,t,r,n,l,i,a){try{var o=e[i](a),d=o.value}catch(e){r(e);return}o.done?t(d):Promise.resolve(d).then(n,l)}function ei(){return(ei=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ea(e,t,r){return d.Children.map(e,e=>{let n=e;return(0,d.isValidElement)(e)&&e.type&&"function"==typeof e.type&&e.type.name===t.name&&(n=(0,d.cloneElement)(e,r(e))),(0,d.isValidElement)(n)&&n.props&&n.props.children&&(n=(0,d.cloneElement)(n,{children:ea(n.props.children,t,r)})),n})}var eo=r(93225);function ed({fieldKey:e,value:t,label:r,description:n=null,control:i,additionalControl:a,onChange:o=()=>{},compact:s=!1,inline:c=!1,errorMessage:u}){let p=(0,d.useCallback)(t=>{o(e,t)},[o,e]),h=(0,y.useTheme)(),m=!s&&n?n:void 0,f=s&&n?(0,l.Y)(H.m,{css:(0,b.AH)`
          color: ${h.colorTextTertiary};
        `,id:"field-descr",placement:"right",title:n,children:(0,l.Y)(R.F.InfoCircleOutlined,{iconSize:"s",css:(0,b.AH)`
            margin-left: ${h.marginXXS}px;
          `,iconColor:h.colorTextTertiary})}):void 0,g=(0,d.cloneElement)(i,{value:t,onChange:p,label:(0,l.FD)(A.l,{children:[r||e,f]})});return(0,l.FD)("div",{css:a&&(0,b.AH)`
          position: relative;
        `,children:[a,(0,l.Y)(eo.e,{extra:m,css:!c&&(0,b.AH)`
            .ControlHeader {
              margin-bottom: ${h.marginXXS}px;
            }
          `,children:g}),u&&(0,l.Y)("div",{css:e=>({color:e.colorText,[c?"marginLeft":"marginTop"]:e.marginXXS}),children:u})]})}function es(){return(es=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ec({children:e,onChange:t,item:r={},title:n=null,compact:i=!1}){let a=(0,d.useCallback)((e,n)=>{null==t||t(es({},r,{[e]:n}))},[t,r]);return(0,l.FD)(en.l,{className:"CRUD",layout:"vertical",children:[n&&(0,l.FD)(D.o.Title,{level:5,css:(0,b.AH)`
            margin-top: 0.5em;
          `,children:[n," ",(0,l.Y)(P.c,{})]}),ea(e,ed,e=>({onChange:a,value:null==r?void 0:r[e.props.fieldKey],compact:i}))]})}var eu=r(13093);function ep(){return(ep=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let eh=y.styled.div`
  text-align: right;
  ${({theme:e})=>`margin-bottom: ${2*e.sizeUnit}px`}
`,em=y.styled.span`
  ${({theme:e})=>`
    margin-top: ${3*e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    button>span>:first-of-type {
      margin-right: 0;
    }
  `}
`;function ef(e){let t=e.map(e=>ep({},e,{id:null!=e.id?e.id:(0,et.Ak)()})),r={};return t.forEach(e=>{r[e.id]=e}),{collection:r,collectionArray:t}}function eg({allowAddItem:e=!1,allowDeletes:t=!1,collection:r,columnLabels:n,columnLabelTooltips:i,emptyMessage:a=(0,g.t)("No items"),expandFieldset:o,itemGenerator:s,itemCellProps:c,itemRenderers:u,onChange:p,tableColumns:h,sortColumns:m=[],stickyHeader:f=!1,pagination:y=!1,filterTerm:v,filterFields:x}){let[S,w]=(0,d.useState)({}),C=(0,d.useRef)();C.current||(C.current=ef(r));let[Y,$]=(0,d.useState)(()=>C.current.collection),[_,F]=(0,d.useState)(()=>C.current.collectionArray),[k,I]=(0,d.useState)(""),[z,A]=(0,d.useState)(eu.x.Unsorted),[D,E]=(0,d.useState)(()=>"object"==typeof y&&(null==y?void 0:y.pageSize)?y.pageSize:10),[T,M]=(0,d.useState)(1);(0,d.useEffect)(()=>{let{collection:e,collectionArray:t}=ef(r);$(e),F(t)},[r]);let O=(0,d.useCallback)((e,t,r)=>{$(n=>ep({},n,{[e]:ep({},n[e],{[t]:r})})),F(n=>{let l=n.map(n=>n.id===e?ep({},n,{[t]:r}):n);return p&&p(l),l})},[p]),U=(0,d.useCallback)((e,t)=>{let r=new Set(t.map(e=>e.id)),n=[];for(let r of t)e[r.id]&&n.push(e[r.id]);for(let t of Object.values(e))r.has(t.id)||n.push(t);$(e),F(n),p&&p(n)},[p]),P=(0,d.useCallback)(e=>{$(t=>{let r=ep({},t);return delete r[e],r}),F(t=>{let r=t.filter(t=>t.id!==e);return p&&p(r),r})},[p]),j=(0,d.useCallback)(()=>{if(s){let e=s(),t=!0===e.expanded;null==e.id&&(e=ep({},e,{id:(0,et.Ak)()})),delete e.expanded,$(t=>ep({},t,{[e.id]:e})),F(t=>{let r=[e,...t];return p&&p(r),r}),t&&w(t=>ep({},t,{[e.id]:!0}))}},[s,p]),H=(0,d.useCallback)(e=>{U(ep({},Y,{[e.id]:e}),_)},[U,Y,_]),B=(0,d.useCallback)(e=>{let t=(null==n?void 0:n[e])?n[e]:e;return t.startsWith("__")&&(t=""),t},[n]),K=(0,d.useCallback)(e=>null==i?void 0:i[e],[i]),N=(0,d.useCallback)(e=>{w(t=>ep({},t,{[e]:!t[e]}))},[]),W=(0,d.useCallback)((e,t,n)=>{void 0!==e.current&&void 0!==e.pageSize&&(M(e.current),E(e.pageSize));let l=Array.isArray(n)?n[0]:n,i="",a=eu.x.Unsorted;(null==l?void 0:l.columnKey)&&(null==l?void 0:l.order)&&(i=l.columnKey,a="ascend"===l.order?eu.x.Asc:eu.x.Desc);let o=i;if((null==m?void 0:m.includes(o))||a===eu.x.Unsorted){let e=[...r];if(a!==eu.x.Unsorted)e.sort((e,t)=>((e,t)=>{if("string"==typeof e&&"string"==typeof t)return(e||"").localeCompare(t||"");if("number"==typeof e&&"number"==typeof t)return e-t;if("boolean"==typeof e&&"boolean"==typeof t)return e===t?0:e?1:-1;let r=String(null!=e?e:""),n=String(null!=t?t:"");return r.localeCompare(n)})(e[o],t[o])),a===eu.x.Desc&&e.reverse();else{let{collectionArray:t}=ef(r);e=t}F(e),I(i),A(a)}},[r,m]),Q=(0,d.useCallback)(e=>ea(o,ec,()=>({item:e,onChange:H})),[o,H]),G=(0,d.useCallback)((e,t)=>{let r=null==u?void 0:u[t],n=e[t];return r?r(n,r=>O(e.id,t,r),B(t),e):n},[u,O,B]),V=(0,d.useMemo)(()=>{let e=h.map(e=>{let t=B(e),r=K(e),n=m.includes(e),i=k===e?z===eu.x.Asc?"ascend":z===eu.x.Desc?"descend":null:null;return{key:e,dataIndex:e,minWidth:100,title:(0,l.FD)(l.FK,{children:[t,r&&(0,l.FD)(l.FK,{children:[" ",(0,l.Y)(L.I,{label:(0,g.t)("description"),tooltip:r,placement:"top"})]})]}),render:(t,r)=>G(r,e),onCell:r=>{let n=null==c?void 0:c[e],l=r[e];return n?n(l,t,r):{}},sorter:n,sortOrder:i}});return t&&e.push({key:"__actions",dataIndex:"__actions",sorter:!1,title:(0,l.Y)(l.FK,{}),onCell:()=>({}),sortOrder:null,minWidth:50,render:(e,t)=>(0,l.Y)("span",{"data-test":"crud-delete-option",className:"text-primary",css:e=>(0,b.AH)`
              display: flex;
              justify-content: center;
              color: ${e.colorTextTertiary};
            `,children:(0,l.Y)(R.F.DeleteOutlined,{"aria-label":(0,g.t)("Delete item"),className:"pointer","data-test":"crud-delete-icon",role:"button",tabIndex:0,onClick:()=>P(t.id),iconSize:"l",iconColor:"inherit"})})}),e},[h,B,K,m,k,z,G,c,t,P]),X=(0,d.useMemo)(()=>v&&(null==x?void 0:x.length)?_.filter(e=>x.some(t=>{var r;return String(null!=(r=e[t])?r:"").toLowerCase().includes(v.toLowerCase())})):_,[_,v,x]),J=(0,d.useMemo)(()=>{if(!1===y||void 0===y)return!1;let e=X.length;return ep({},"object"==typeof y?y:{},{current:Math.min(T,e>0?Math.ceil(e/D):1),pageSize:D,total:e})},[y,X.length,D,T]),Z=(0,d.useMemo)(()=>Object.keys(S).filter(e=>S[e]),[S]),ee=(0,d.useMemo)(()=>o?{expandedRowRender:e=>Q(e),rowExpandable:()=>!0,expandedRowKeys:Z,onExpand:(e,t)=>{N(t.id)}}:void 0,[o,Q,Z,N]);return(0,l.FD)(l.FK,{children:[(0,l.Y)(eh,{children:e&&(0,l.Y)(em,{children:(0,l.FD)(q.$n,{buttonSize:"small",buttonStyle:"secondary",onClick:j,"data-test":"add-item-button",children:[(0,l.Y)(R.F.PlusOutlined,{iconSize:"m","data-test":"crud-add-table-item"}),(0,g.t)("Add item")]})})}),(0,l.Y)(er.Ay,{"data-test":"crud-table",columns:V,data:X,rowKey:e=>String(e.id),sticky:f,pagination:J,onChange:W,locale:{emptyText:a},css:f&&(0,b.AH)`
            height: 350px;
            overflow: auto;
          `,expandable:ee,size:er.QS.Middle,tableLayout:"auto"})]})}var ey=r(70234),eb=r(37973);function ev(e,t,r,n,l,i,a){try{var o=e[i](a),d=o.value}catch(e){r(e);return}o.done?t(d):Promise.resolve(d).then(n,l)}let ex=y.styled.div`
  align-items: center;
  display: flex;
  gap: ${({theme:e})=>e.sizeUnit}px;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,eS=({datasourceId:e,charts:t,totalCount:r,onFetchCharts:n,addDangerToast:i})=>{let a=(0,d.useRef)(i),o=(0,d.useRef)(null),s=(0,d.useRef)(!1),c=(0,d.useRef)(!1);(0,d.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]);let[u,p]=(0,d.useState)(!1),[h,m]=(0,d.useState)(1),[f,y]=(0,d.useState)("changed_on_delta_humanized"),[v,x]=(0,d.useState)("desc"),[S,w]=(0,d.useState)(""),C=(0,d.useCallback)((t=1,r=f,l=v)=>{var i;return(i=function*(){if(e){p(!0);try{yield n(t,25,r,l),c.current&&(m(t),y(r),x(l))}catch(e){if("AbortError"===e.name)return;a.current&&a.current((0,g.t)("Error fetching charts"))}finally{c.current&&p(!1)}}},function(){var e=this,t=arguments;return new Promise(function(r,n){var l=i.apply(e,t);function a(e){ev(l,r,n,a,o,"next",e)}function o(e){ev(l,r,n,a,o,"throw",e)}a(void 0)})})()},[e,n,f,v]);(0,d.useEffect)(()=>{a.current=i},[i]),(0,d.useEffect)(()=>{let e;return s.current&&!u&&(e=requestAnimationFrame(()=>{var e;let t=null==(e=o.current)?void 0:e.querySelector(".ant-table-body");t&&t.scrollTo({top:0,behavior:"smooth"})})),s.current=u,()=>{void 0!==e&&cancelAnimationFrame(e)}},[u]);let Y=(0,d.useCallback)(e=>{C(e)},[C]),$=(0,d.useCallback)(e=>{let t=e===f&&"desc"===v?"asc":"desc";C(1,e,t)},[C,f,v]),_=(0,d.useCallback)(e=>{(null==e?void 0:e.current)&&e.current!==h&&Y(e.current)},[h,Y]),F=(0,d.useMemo)(()=>[{title:(0,g.t)("Chart"),dataIndex:"slice_name",key:"slice_name",render:(e,t)=>(0,l.FD)(ex,{children:[(0,l.FD)(B.Kt,{to:t.url,target:"_blank","data-test":`${t.slice_name}-usage-chart-title`,children:[t.certified_by&&(0,l.FD)(l.FK,{children:[(0,l.Y)(E.T,{certifiedBy:t.certified_by,details:t.certification_details})," "]}),t.slice_name]}),t.description&&(0,l.Y)(L.I,{tooltip:t.description})]}),sorter:!0,sortOrder:"slice_name"===f?"asc"===v?"ascend":"descend":void 0,onHeaderCell:()=>({onClick:()=>$("slice_name"),style:{cursor:"pointer"}}),width:300},{title:(0,g.t)("Chart editors"),dataIndex:"editors",key:"editors",render:(e,t)=>(0,l.Y)(ey.z,{subjects:t.editors||[],maxCount:3}),sorter:!1,width:150},{title:(0,g.t)("Last modified"),dataIndex:"changed_on_delta_humanized",key:"changed_on_delta_humanized",render:(e,t)=>(0,l.Y)(B.UW,{date:t.changed_on_delta_humanized,user:t.changed_by||void 0}),sorter:!0,sortOrder:"changed_on_delta_humanized"===f?"asc"===v?"ascend":"descend":void 0,onHeaderCell:()=>({onClick:()=>$("changed_on_delta_humanized"),style:{cursor:"pointer"}}),width:160},{title:(0,g.t)("Dashboard usage"),dataIndex:"dashboards",key:"dashboards",render:(e,t)=>(0,l.Y)(eb.o,{dashboards:t.dashboards.map(e=>({id:e.id,dashboard_title:e.dashboard_title})),external:!0}),sorter:!1,width:200}],[$,f,v]),k=(0,d.useMemo)(()=>{if(!S)return t;let e=S.toLowerCase();return t.filter(t=>{var r,n,l;return!!((null==(r=t.slice_name)?void 0:r.toLowerCase().includes(e))||(null==(n=t.editors)?void 0:n.some(t=>{var r;return null==(r=t.label)?void 0:r.toLowerCase().includes(e)}))||(null==(l=t.dashboards)?void 0:l.some(t=>{var r;return null==(r=t.dashboard_title)?void 0:r.toLowerCase().includes(e)})))})},[t,S]);return(0,l.FD)("div",{ref:o,children:[(0,l.Y)(j.Input.Search,{placeholder:(0,g.t)("Search charts by name, editor, or dashboard"),value:S,onChange:e=>{w(e.target.value),e.target.value||m(1)},style:{marginBottom:16,width:400},allowClear:!0}),(0,l.Y)(er.Ay,{sticky:!0,columns:F,data:k,pagination:!S&&{current:h,total:r,pageSize:25,onChange:Y,showSizeChanger:!1},loading:u,size:er.QS.Middle,rowKey:e=>e.id?`chart-${e.id}`:`chart-${e.slice_name}`,tableLayout:"fixed",scroll:{y:293,x:"100%"},css:(0,b.AH)`
          .ant-table-pagination.ant-pagination {
            margin-bottom: 0;
          }
        `,locale:{emptyText:(0,g.t)("No items")},onChange:_})]})};var ew=r(44970);function eC(){return(eC=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function eY(e,t,r,n,l=64,i){var a,o,d,s;let c,u,p,h,m=i?null!=(a=i.get(r))?a:-1:e.findIndex(({uuid:e})=>e===r),f=i?null!=(o=i.get(t))?o:-1:e.findIndex(({uuid:e})=>e===t),g=e[f];if(!g||-1===m)return null;f<m?(p=m,h=m+1):f>m?(p=m-1,h=m):(p=m-1,h=m+1),c=e[p],u=e[h],(null==c?void 0:c.uuid)===t&&(p-=1,c=e[p]),(null==u?void 0:u.uuid)===t&&(h+=1,u=e[h]);let y=function(e,t=64){return Math.round(e/t)}(n,l),b=g.depth+y,v=(s=c)?s.type===eu.a.Folder?Math.min(s.depth+1,3):s.depth:0,x=(d=u,g.type!==eu.a.Folder?1:d?d.depth:0),S=b;b>=v?S=v:b<x&&(S=x);let w=null;if(S>0&&c)if(S===c.depth)({parentId:w}=c);else if(S>c.depth)w=c.uuid;else{let r=f<m?m:m-1;for(let n=r;n>=0;n-=1)if(e[n].uuid!==t&&e[n].depth===S){({parentId:w}=e[n]);break}}return{depth:S,maxDepth:v,minDepth:x,parentId:w}}function e$(e){return function e(t,r=null,n=0,l=[]){for(let i=0;i<t.length;i+=1){let a=t[i],o={uuid:a.uuid,type:a.type,name:a.name,description:"description"in a?a.description:void 0,children:"children"in a?a.children:void 0,parentId:r,depth:n,index:i,collapsed:"children"in a&&a.collapsed};l.push(o),a.type===eu.a.Folder&&"children"in a&&a.children&&e(a.children,a.uuid,n+1,l)}return l}(e)}function e_(e){let t=[],r=new Map;for(let t of e){let{uuid:e,type:n,name:l,description:i}=t,a=n===eu.a.Folder?{uuid:e,type:n,name:l,description:i,children:[]}:{uuid:e,type:n,name:l};r.set(e,a)}for(let n of e){let{uuid:e,parentId:l}=n,i=r.get(e);if(l){let e=r.get(l);e&&e.type===eu.a.Folder&&"children"in e?e.children.push(i):e||t.push(i)}else t.push(i)}return t}function eF(e){let t=e=>e&&0!==e.length?e.map(e=>{if(e.type===eu.a.Folder&&"children"in e){let r=t(e.children);return 0===r.length?null:{uuid:e.uuid,type:e.type,name:e.name,description:e.description,children:r}}return{uuid:e.uuid,type:e.type}}).filter(e=>null!==e):[];return e.filter(e=>e.type===eu.a.Folder).map(e=>{let r="children"in e?t(e.children):[];return 0===r.length?null:{uuid:e.uuid,type:e.type,name:e.name,description:"description"in e?e.description:void 0,children:r}}).filter(e=>null!==e)}function ek(e,t){let r=e=>{if(!e)return e;let n=!1,l=[];for(let i of e)if(i.type===eu.a.Folder&&"children"in i){let e=r(i.children);e!==i.children?(n=!0,l.push(eC({},i,{children:e}))):l.push(i)}else t.has(i.uuid)?l.push(i):n=!0;return n?l:e},n=!1,l=e.map(e=>{let t=r(e.children);return t!==e.children?(n=!0,eC({},e,{children:t})):e});return n?l:e}function eI(e){let t=0;for(let r of e)if(t+=1,r.children)for(let e of r.children)"children"in e&&(t+=eI([e]));return t}var ez=r(64741),eA=r(70713),eD=r(43375),eE=r(43627);let eT=new Uint8Array(16),eM=[];for(let e=0;e<256;++e)eM.push((e+256).toString(16).slice(1));function eO(){return(eO=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let eU=(e,t)=>[{uuid:ew.v3,type:eu.a.Folder,name:(0,g.t)("Metrics"),children:e.map(e=>({type:eu.a.Metric,uuid:e.uuid,name:e.metric_name||""}))},{uuid:ew.Lc,type:eu.a.Folder,name:(0,g.t)("Columns"),children:t.map(e=>({type:eu.a.Column,uuid:e.uuid,name:e.column_name||""}))}],eL={activationConstraint:{distance:8}},eR={droppable:{strategy:eD.Pf.BeforeDragging}},eP={enabled:!1},ej=y.styled.div`
  ${({theme:e,depth:t,isDragging:r,isOverlay:n})=>`
    margin: 0 ${e.marginMD}px;
    margin-left: ${Math.max(0,(t-1)*24+4)}px;
    padding-left: ${e.paddingSM}px;
    display: flex;
    align-items: center;
    cursor: pointer;
    opacity: ${r?.4:1};
    user-select: none;
    ${r||n?"will-change: transform;":""}
  `}
`,eq=y.styled.div`
  ${({theme:e,variant:t})=>{let r="visible"===t?e.marginSM:e.marginXS;return`
      height: ${1+2*r}px;
      display: flex;
      align-items: center;
      margin-left: ${e.marginSM}px;
      margin-right: ${e.marginMD}px;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${"visible"===t?e.colorBorderSecondary:"transparent"};
      }
    `}}
`,eH=(0,y.styled)(ej)`
  ${({theme:e,depth:t,isForbiddenDropTarget:r})=>`
    margin-top: 0;
    margin-bottom: 0;
    padding-top: ${e.paddingSM}px;
    padding-bottom: ${e.paddingSM}px;
    margin-left: ${24*t}px;
    border-radius: ${e.borderRadius}px;
    padding-left: ${e.paddingSM}px;
    padding-right: ${e.paddingSM}px;
    margin-right: ${e.marginMD}px;
    transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover:not(:has(input)) [aria-label="move"] {
      color: ${e.colorText};
    }

    /* Drop target styles - controlled via data attributes for performance */
    &[data-drop-target="true"] {
      background-color: ${e.colorPrimaryBg};
      box-shadow: inset 0 0 0 2px ${e.colorPrimary};
    }

    &[data-drop-target="true"][data-forbidden-drop="true"],
    &[data-drop-target="true"]${r?"":'[data-forbidden-drop="true"]'} {
      background-color: ${e.colorErrorBg};
      box-shadow: inset 0 0 0 2px ${e.colorError};
      cursor: not-allowed;
    }

    /* Also support prop-based forbidden styling for initial render */
    ${r?`
      &[data-drop-target="true"] {
        background-color: ${e.colorErrorBg};
        box-shadow: inset 0 0 0 2px ${e.colorError};
        cursor: not-allowed;
      }
    `:""}
  `}
`,eB=y.styled.span`
  ${({theme:e})=>`
    color: ${e.colorTextTertiary};
    display: inline-flex;
    align-items: center;
    transition: color 0.15s ease-in-out;
  `}
`,eK=y.styled.span`
  ${({theme:e})=>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    cursor: pointer;
    color: ${e.colorTextSecondary};
    margin-left: auto;

    &:hover {
      color: ${e.colorText};
    }
  `}
`,eN=y.styled.span`
  ${({theme:e})=>`
    display: inline-flex;
    align-items: center;
    color: ${e.colorTextSecondary};
    margin-right: ${e.marginXS}px;
  `}
`,eW=y.styled.span`
  ${({theme:e})=>`
    margin-right: ${e.marginMD}px;
    font-weight: ${e.fontWeightStrong};
    cursor: pointer;
  `}
`,eQ=y.styled.div`
  ${({theme:e})=>`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${e.sizeUnit}px;
    margin-left: auto;
    cursor: grab;
    color: ${e.colorTextTertiary};

    &:hover {
      color: ${e.colorText};
    }

    &:active {
      cursor: grabbing;
    }
  `}
`,eG=y.styled.div`
  ${({theme:e,depth:t,isOver:r,isForbidden:n})=>(0,b.AH)`
    margin: ${e.marginXS}px ${e.marginMD}px 0;
    margin-left: ${24*t+4}px;
    padding: ${e.paddingLG}px;
    border: 2px dashed
      ${r?n?e.colorError:e.colorPrimary:"transparent"};
    border-radius: ${e.borderRadius}px;
    background: ${r?n?e.colorErrorBg:e.colorPrimaryBg:"transparent"};
    text-align: center;
    transition: all 0.2s ease-in-out;
    cursor: ${r&&n?"not-allowed":"default"};
    opacity: ${r&&n?.7:1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;function eV(e){let t=32+e.paddingSM+e.marginXS,r=1+2*e.marginSM;return{regularItem:32,folderHeader:t,separatorVisible:r,separatorTransparent:1+2*e.marginXS,emptyFolderBase:240,folderIndentation:24,itemIndentation:4}}let eX=y.styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  gap: ${({theme:e})=>e.paddingMD}px;
`,eJ=y.styled.div`
  ${({theme:e})=>`
    position: sticky;
    top: -${e.margin}px; // offsets tabs component bottom margin
    z-index: 10;
    background: ${e.colorBgContainer};
    display: flex;
    flex-direction: column;
    gap: ${e.paddingLG}px;
  `}
`,eZ=y.styled.div`
  width: 100%;

  .ant-input-prefix {
    color: ${({theme:e})=>e.colorIcon};
  }
`,e0=y.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${e.paddingSM}px;
  `}
`,e1=y.styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.paddingXS}px;
`,e2=y.styled.div`
  ${({theme:e})=>`
    align-self: flex-end;
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextSecondary};
  `}
`,e4=y.styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,e6=y.styled.div`
  position: relative;
  width: ${({width:e})=>e?`${e}px`:"100%"};
  will-change: transform;
`,e5=y.styled.div`
  ${({theme:e,width:t})=>`
    width: ${t?`${t}px`:"100%"};
    will-change: transform;
    background: ${e.colorBgContainer};
    border-radius: ${e.borderRadius}px;
    box-shadow: ${e.boxShadowSecondary};
    pointer-events: none;
    overflow: hidden;
    opacity: 0.95;
  `}
`,e3=y.styled.div`
  ${({theme:e,variant:t,separatorType:r})=>{let n=eV(e),l="folder"===t?n.folderHeader:n.regularItem;return"visible"===r?l+=n.separatorVisible:"transparent"===r&&(l+=n.separatorTransparent),`
      min-height: ${l}px;
      display: flex;
      align-items: stretch;

      > * {
        flex: 1;
        min-width: 0;
      }
    `}}
`,e7=y.styled.div`
  ${({theme:e})=>`
    padding: ${e.paddingXS}px ${e.paddingMD}px;
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    text-align: center;
  `}
`,e8=y.styled.div`
  ${({stackIndex:e,totalItems:t})=>{var r;let n=null!=(r=[1,.8,.6][e])?r:.6;return(0,b.AH)`
      position: ${0===e?"relative":"absolute"};
      top: ${14*e}px;
      left: ${4*e}px;
      right: ${0===e?0:-(4*e)}px;
      z-index: ${t-e};
      opacity: ${n};
      pointer-events: none;
    `}}
`;function e9(){return(e9=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let tt=(0,d.memo)(function({onSearch:e,onAddFolder:t,onSelectAll:r,onResetToDefault:n,allVisibleSelected:i,selectedColumnsCount:a,selectedMetricsCount:o,totalColumnsCount:s,totalMetricsCount:c}){let u=a+o,p=s+c,h=(0,d.useMemo)(()=>u>0?(0,l.FD)(l.FK,{children:[(0,g.tn)("%s out of %s column","%s out of %s columns",s,a,s),(0,l.Y)("br",{}),(0,g.tn)("%s out of %s metric","%s out of %s metrics",c,o,c)]}):(0,l.FD)(l.FK,{children:[(0,g.tn)("%s column","%s columns",s,s),(0,l.Y)("br",{}),(0,g.tn)("%s metric","%s metrics",c,c)]}),[u,a,o,s,c]),m=u>0?(0,g.t)("%s out of %s selected",u,p):(0,g.tn)("%s item","%s items",p,p);return(0,l.FD)(eJ,{children:[(0,l.Y)(eZ,{children:(0,l.Y)(j.Input,{placeholder:(0,g.t)("Search all metrics & columns"),onChange:e,allowClear:!0,prefix:(0,l.Y)(R.F.SearchOutlined,{})})}),(0,l.FD)(e1,{children:[(0,l.FD)(e0,{children:[(0,l.Y)(q.$n,{buttonStyle:"link",onClick:t,icon:(0,l.Y)(R.F.PlusOutlined,{}),children:(0,g.t)("Add folder")}),(0,l.Y)(q.$n,{buttonStyle:"link",onClick:r,icon:(0,l.Y)(R.F.CheckOutlined,{}),children:i?(0,g.t)("Deselect all"):(0,g.t)("Select all")}),(0,l.Y)(q.$n,{buttonStyle:"link",onClick:n,icon:(0,l.Y)(R.F.HistoryOutlined,{}),children:(0,g.t)("Reset all folders to default")})]}),(0,l.Y)(H.m,{title:h,children:(0,l.Y)(e2,{children:m})})]})]})});var tr=r(56030);let tn=(0,d.memo)(function({show:e,onCancel:t,onConfirm:r}){return(0,l.Y)(tr.aF,{title:(0,g.t)("Reset to default folders?"),show:e,onHide:t,onHandledPrimaryAction:r,primaryButtonName:(0,g.t)("Reset"),primaryButtonStyle:"danger",children:(0,g.t)("This will reorganize all metrics and columns into default folders. Any custom folders will be removed.")})});var tl=r(74979),ti=r(97020),ta=r(62312),to=r(90809);function td(){return(td=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ts=(0,g.t)("Name your folder and to edit it later, click on the folder name"),tc=(0,d.memo)(function({id:e,type:t,name:r,depth:n,isCollapsed:i=!1,isFolder:a=!1,isSelected:o=!1,isEditing:s=!1,onToggleCollapse:c,onSelect:u,onStartEdit:p,onFinishEdit:h,isDefaultFolder:m=!1,showEmptyState:f=!1,separatorType:y,isForbiddenDrop:v=!1,isDropTarget:x=!1,metric:S,column:w,isOverlay:C=!1}){let[Y,$]=(0,d.useState)(r),{attributes:_,listeners:F,setNodeRef:k,transform:I,transition:z,isDragging:A,isOver:D}=(0,eE.gl)({id:e,data:{type:t,isFolder:a},disabled:C}),{setNodeRef:E,isOver:T}=(0,eD.zM)({id:`${e}-empty`,data:{type:t,isFolder:a,parentId:e},disabled:C}),M=C?{}:{transform:tl.Ks.Transform.toString(I),transition:z},O=(0,d.useMemo)(()=>t===eu.a.Metric&&S?S.verbose_name||S.metric_name||r:t===eu.a.Column&&w&&(w.verbose_name||w.column_name)||r,[t,S,w,r]),U=(0,d.useMemo)(()=>t===eu.a.Metric?"metric":t===eu.a.Column&&w?w.expression&&w.expression!==w.column_name?"expression":w.type_generic:void 0,[t,w]),L=!r||""===r.trim(),P={ref:k,style:M,depth:n,isDragging:A,isOver:D,isOverlay:C},q=(0,l.FD)(l.FK,{children:[a&&(0,l.Y)(eB,{css:e=>(0,b.AH)`
            margin-right: ${e.marginSM}px;
          `,children:(0,l.Y)(R.F.Move,{iconSize:"xl"})}),(u||C&&!a)&&(0,l.Y)(j.Checkbox,{checked:o,disabled:C,onClick:t=>{C||(t.stopPropagation(),null==u||u(e,!o,t.shiftKey))},css:e=>(0,b.AH)`
            margin-right: ${e.marginSM}px;
          `}),a&&(0,l.Y)(eN,{children:m?(0,l.Y)(R.F.FolderViewOutlined,{}):(0,l.Y)(R.F.FolderOutlined,{})}),(s||L)&&!m?(0,l.Y)(j.Input,{value:Y,placeholder:ts,onChange:e=>$(e.target.value),onKeyDown:t=>{"Enter"===t.key?(t.preventDefault(),null==h||h(e,Y)):"Escape"===t.key&&($(r),null==h||h(e,r))},onBlur:()=>{Y.trim()?null==h||h(e,Y):($(r),null==h||h(e,r))},autoFocus:!0,onClick:e=>e.stopPropagation(),css:e=>(0,b.AH)`
            padding: 0;
            padding-right: ${e.marginMD}px;
          `,variant:"borderless"}):(()=>{if(a){let t=e===ew.Lc&&m,n=e===ew.v3&&m,i=(0,l.Y)(eW,{onClick:t=>{!m&&p&&(t.stopPropagation(),p(e))},children:r});return t?(0,l.Y)(H.m,{title:(0,g.t)("This is a default columns folder. Its name cannot be changed or removed. It can stay empty but will only accept column items."),children:i}):n?(0,l.Y)(H.m,{title:(0,g.t)("This is a default metrics folder. Its name cannot be changed or removed. It can stay empty but will only accept metric items."),children:i}):i}return(0,l.FD)(to.a2,td({},_,F,{css:{cursor:"grab","&:active":{cursor:"grabbing"}},children:[(0,l.FD)(to.JU,{children:[void 0!==U&&(0,l.Y)(ta.P,{type:U}),O]}),(0,l.Y)(eQ,{children:(0,l.Y)(R.F.Drag,{iconSize:"xl"})})]}))})(),a&&c&&(0,l.Y)(eK,{onClick:t=>{t.stopPropagation(),c(e)},children:i?(0,l.Y)(R.F.RightOutlined,{}):(0,l.Y)(R.F.DownOutlined,{})})]}),B=!a&&y,{style:K}=P,N=function(e,t){if(null==e)return{};var r,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(t.indexOf(r=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(P,["style"]);return(0,l.FD)(l.FK,{children:[(0,l.FD)("div",{ref:k,style:K,children:[a?(0,l.Y)(eH,td({},N,_,F,{"data-folder-id":e,"data-drop-target":x?"true":void 0,isForbiddenDropTarget:v,css:{cursor:"grab","&:active":{cursor:"grabbing"}},children:q})):(0,l.Y)(ej,td({},N,{children:q})),B&&(0,l.Y)(eq,{variant:y})]}),a&&f&&!i&&(0,l.Y)(eG,{ref:E,depth:n,isOver:T,isForbidden:v,children:(0,l.Y)(ti.p,{title:m?(0,g.t)("This is the default folder"):(0,g.t)("This folder is currently empty"),description:m?(0,g.t)("It won't be removed even if empty. It won't be shown in chart editing view if empty."):(0,g.t)("If it stays empty, it won't be saved and will be removed from the list. To remove folders, move metrics and columns to other folders."),size:"small"})})]})}),tu=(0,d.memo)(function({dragOverlayItems:e,dragOverlayWidth:t,selectedItemIds:r,metricsMap:n,columnsMap:i,itemSeparatorInfo:a}){if(0===e.length)return null;let o=e[0];if(o.type===eu.a.Folder&&e.length>1){let d=e.slice(0,9),s=e.length-9,c=o.depth;return(0,l.FD)(e5,{width:null!=t?t:void 0,children:[d.map((e,t)=>{let o=e.type===eu.a.Folder,u=a.get(e.uuid),p=t===d.length-1&&0===s?void 0:u;return(0,l.Y)(e3,{variant:o?"folder":"item",separatorType:p,children:(0,l.Y)(tc,{id:e.uuid,type:e.type,name:e.name,depth:e.depth-c,isFolder:o,isDefaultFolder:(0,ew.kq)(e.uuid),isOverlay:!0,isSelected:r.has(e.uuid),metric:n.get(e.uuid),column:i.get(e.uuid),separatorType:p})},e.uuid)}),s>0&&(0,l.Y)(e7,{children:(0,g.t)("... and %d more",s)})]})}return(0,l.Y)(e6,{width:null!=t?t:void 0,children:[...e].reverse().map((t,a)=>{let o=e.length-1-a;return(0,l.Y)(e8,{stackIndex:o,totalItems:e.length,children:(0,l.Y)(tc,{id:t.uuid,type:t.type,name:t.name,depth:0,isFolder:t.type===eu.a.Folder,isOverlay:!0,isSelected:r.has(t.uuid),metric:n.get(t.uuid),column:i.get(t.uuid)})},t.uuid)})})});var tp=r(91793);function th(){return(th=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let tm=(0,d.memo)(function({id:e,style:t,type:r,isFolder:n}){let{setNodeRef:i}=(0,eD.zM)({id:e,data:{type:r,isFolder:n}});return(0,l.Y)("div",{ref:i,style:th({},t,{visibility:"hidden"})})}),tf=(0,d.memo)(function({item:e,style:t,isFolder:r,isCollapsed:n,isSelected:i,isEditing:a,showEmptyState:o,separatorType:d,isForbiddenDrop:s,isDropTarget:c,metric:u,column:p,onToggleCollapse:h,onSelect:m,onStartEdit:f,onFinishEdit:g}){return(0,l.Y)("div",{style:t,children:(0,l.Y)(tc,{id:e.uuid,type:e.type,name:e.name,depth:e.depth,isFolder:r,isCollapsed:n,isSelected:i,isEditing:a,isDefaultFolder:(0,ew.kq)(e.uuid),showEmptyState:o,separatorType:d,isForbiddenDrop:s,isDropTarget:c,onToggleCollapse:h,onSelect:m,onStartEdit:f,onFinishEdit:g,metric:u,column:p})})}),tg=(0,d.memo)(function({index:e,style:t,data:r}){var n;let{flattenedItems:i,collapsedIds:a,selectedItemIds:o,editingFolderId:d,folderChildCounts:s,itemSeparatorInfo:c,visibleItemIds:u,searchTerm:p,metricsMap:h,columnsMap:m,activeId:f,draggedFolderChildIds:g,forbiddenDropFolderIds:y,currentDropTargetId:b,onToggleCollapse:v,onSelect:x,onStartEdit:S,onFinishEdit:w}=r,C=i[e];if(!C)return null;let Y=C.type===eu.a.Folder;if(!Y&&p&&!u.has(C.uuid))return null;if(f===C.uuid)return(0,l.Y)(tm,{id:C.uuid,style:t,type:C.type,isFolder:Y});if(g.has(C.uuid))return(0,l.Y)("div",{style:th({},t,{visibility:"hidden"})});let $=Y&&null!=(n=s.get(C.uuid))?n:0,_=Y&&0===$,F=Y&&y.has(C.uuid),k=Y&&b===C.uuid;return(0,l.Y)(tf,{item:C,style:t,isFolder:Y,isCollapsed:a.has(C.uuid),isSelected:o.has(C.uuid),isEditing:d===C.uuid,showEmptyState:_,separatorType:c.get(C.uuid),isForbiddenDrop:F,isDropTarget:k,metric:h.get(C.uuid),column:m.get(C.uuid),onToggleCollapse:Y?v:void 0,onSelect:Y?void 0:x,onStartEdit:Y?S:void 0,onFinishEdit:Y?w:void 0},C.uuid)});function ty({width:e,height:t,flattenedItems:r,itemHeights:n,heightCache:i,collapsedIds:a,selectedItemIds:o,editingFolderId:s,folderChildCounts:c,itemSeparatorInfo:u,visibleItemIds:p,searchTerm:h,metricsMap:m,columnsMap:f,isDragging:g,activeId:y,draggedFolderChildIds:b,forbiddenDropFolderIds:v,currentDropTargetId:x,onToggleCollapse:S,onSelect:w,onStartEdit:C,onFinishEdit:Y}){let $=(0,d.useRef)(null),_=(0,d.useRef)(null);!function({listRef:e,containerRef:t,isDragging:r,listHeight:n}){let l=(0,d.useRef)({direction:null,speed:0,mouseY:0,rafId:null,lastTime:0,isScrolling:!1});(0,d.useEffect)(()=>{if(!r){let e=l.current;null!==e.rafId&&(cancelAnimationFrame(e.rafId),e.rafId=null),e.direction=null,e.speed=0;return}let i=l.current,a=r=>{let n=e.current,l=null==n?void 0:n._outerRef;if(!n||!l||!i.direction){let e=t.current;e&&i.isScrolling&&(e.style.pointerEvents="",i.isScrolling=!1),i.rafId=null;return}let o=t.current;o&&!i.isScrolling&&(o.style.pointerEvents="none",i.isScrolling=!0);let d=i.lastTime?(r-i.lastTime)/16:1;i.lastTime=r;let s=l.scrollTop,c=l.scrollHeight-l.clientHeight,u=i.speed*d,p=s;"up"===i.direction?p=Math.max(0,s-u):"down"===i.direction&&(p=Math.min(c,s+u)),Math.abs(p-s)>.5&&(l.scrollTop=p),i.rafId=requestAnimationFrame(a)},o=e=>{i.mouseY=e.clientY,(()=>{let e=t.current;if(!e)return;let r=e.getBoundingClientRect(),l=i.mouseY-r.top;if(l<80&&l>=0){i.direction="up",i.speed=8*(1+(1-l/80)*2);return}if(l>n-80&&l<=n){let e=n-l;i.direction="down",i.speed=8*(1+(1-e/80)*2);return}i.direction=null,i.speed=0})(),i.direction&&null===i.rafId&&(i.lastTime=0,i.rafId=requestAnimationFrame(a))};return document.addEventListener("mousemove",o,{passive:!0}),()=>{document.removeEventListener("mousemove",o),null!==i.rafId&&(cancelAnimationFrame(i.rafId),i.rafId=null);let e=t.current;e&&i.isScrolling&&(e.style.pointerEvents=""),i.direction=null,i.speed=0,i.lastTime=0,i.isScrolling=!1}},[r,e,t,n])}({listRef:$,containerRef:_,isDragging:g,listHeight:t}),(0,d.useEffect)(()=>{if(!g){var e;null==(e=$.current)||e.resetAfterIndex(0)}},[r,a,c,u,p,g]);let F=(0,d.useCallback)(e=>{let t=r[e];if(!t)return 0;let l=t.type===eu.a.Folder;if(!l&&h&&!p.has(t.uuid))return 0;let o=0;if(l){var d,s;o=n.folderHeader;let e=null!=(d=c.get(t.uuid))?d:0,r=a.has(t.uuid);0!==e||r||(o+=null!=(s=i.getHeight(t.uuid))?s:n.emptyFolderBase)}else o=n.regularItem;let m=u.get(t.uuid);return"visible"===m?o+=n.separatorVisible:"transparent"===m&&(o+=n.separatorTransparent),o},[r,n,i,a,c,u,p,h]),k=(0,d.useMemo)(()=>({flattenedItems:r,collapsedIds:a,selectedItemIds:o,editingFolderId:s,folderChildCounts:c,itemSeparatorInfo:u,visibleItemIds:p,searchTerm:h,metricsMap:m,columnsMap:f,activeId:y,draggedFolderChildIds:b,forbiddenDropFolderIds:v,currentDropTargetId:x,onToggleCollapse:S,onSelect:w,onStartEdit:C,onFinishEdit:Y}),[r,a,o,s,c,u,p,h,m,f,y,b,v,x,S,w,C,Y]),I=g?20:5;return(0,l.Y)("div",{ref:_,style:{width:e,height:t,position:"relative"},children:(0,l.Y)(tp._m,{ref:$,width:e,height:t,itemCount:r.length,itemSize:F,itemData:k,overscanCount:I,children:tg})})}function tb(){return(tb=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function tv({folders:e,metrics:t,columns:r,onChange:n}){let i,a,o,s,c,u,p,h,{addWarningToast:m}=(0,_.Yf)(),f=(i=(0,y.useTheme)(),(0,d.useMemo)(()=>eV(i),[i])),b=(a=(0,d.useRef)(new Map),o=(0,d.useRef)(0),s=(0,d.useCallback)(e=>a.current.get(e),[]),c=(0,d.useCallback)((e,t)=>{a.current.get(e)!==t&&(a.current.set(e,t),o.current+=1)},[]),u=(0,d.useCallback)(e=>a.current.has(e),[]),{getHeight:s,setHeight:c,hasHeight:u,clearCache:(0,d.useCallback)(()=>{a.current.size>0&&(a.current.clear(),o.current+=1)},[]),getVersion:(0,d.useCallback)(()=>o.current,[])}),[v,x]=(0,d.useState)(()=>((e,t,r)=>{let n,l,i;if(0===e.length)return eU(t,r);let a=(n=new Map(t.map(e=>[e.uuid,e])),l=new Map(r.map(e=>[e.uuid,e])),i=e=>e?e.map(e=>{if(e.type===eu.a.Folder&&"children"in e)return eO({},e,{children:i(e.children)});if(!("name"in e)||!e.name||!("type"in e)){let t=n.get(e.uuid);if(t)return{uuid:e.uuid,type:eu.a.Metric,name:t.metric_name||""};let r=l.get(e.uuid);if(r)return{uuid:e.uuid,type:eu.a.Column,name:r.column_name||""}}return e}):[],e.map(e=>eO({},e,{children:i(e.children)}))),o=a.some(e=>e.uuid===ew.v3),d=a.some(e=>e.uuid===ew.Lc),s=new Set,c=e=>{if(e.children)for(let t of e.children)s.add(t.uuid),t.type===eu.a.Folder&&"children"in t&&c(t)};a.forEach(c);let u=t.filter(e=>!s.has(e.uuid)).map(e=>({type:eu.a.Metric,uuid:e.uuid,name:e.metric_name||""})),p=r.filter(e=>!s.has(e.uuid)).map(e=>({type:eu.a.Column,uuid:e.uuid,name:e.column_name||""})),h=a.map(e=>e.uuid===ew.v3&&u.length>0?eO({},e,{children:[...e.children||[],...u]}):e.uuid===ew.Lc&&p.length>0?eO({},e,{children:[...e.children||[],...p]}):e);return o||h.push({uuid:ew.v3,type:eu.a.Folder,name:(0,g.t)("Metrics"),children:u}),d||h.push({uuid:ew.Lc,type:eu.a.Folder,name:(0,g.t)("Columns"),children:p}),h})(e,t,r));(0,d.useEffect)(()=>{let e=new Set;r.forEach(t=>{t.uuid&&e.add(t.uuid)}),t.forEach(t=>{t.uuid&&e.add(t.uuid)}),x(t=>ek(t,e))},[r,t]);let[S,w]=(0,d.useState)(new Set),C=(0,d.useRef)(null),[Y,$]=(0,d.useState)(""),[F,k]=(0,d.useState)(new Set),[I,z]=(0,d.useState)(null),[A,D]=(0,d.useState)(null),[E,T]=(0,d.useState)(!1),M=(0,eD.FR)((0,eD.MS)(eD.AN,eL)),O=(0,d.useRef)(null),U=(p=(0,d.useRef)(null),(0,d.useEffect)(()=>{O.current&&(p.current=function(e){let t=e.parentElement;for(;t&&t!==document.documentElement;){let e=window.getComputedStyle(t);if(e.transform&&"none"!==e.transform||"transform"===e.willChange||e.filter&&"none"!==e.filter||e.perspective&&"none"!==e.perspective)return t;t=t.parentElement}return null}(O.current))},[O]),h=(0,d.useCallback)(({transform:e})=>{if(!p.current)return e;let t=p.current.getBoundingClientRect();return te({},e,{x:e.x-t.left,y:e.y-t.top})},[]),(0,d.useMemo)(()=>[h],[h])),L=(0,d.useMemo)(()=>e$(v),[v]),{visibleItemIds:R,searchExpandedFolderIds:P,foldersWithMatches:j}=(0,d.useMemo)(()=>{let e,n;if(!Y){let e=new Set;return t.forEach(t=>e.add(t.uuid)),r.forEach(t=>e.add(t.uuid)),{visibleItemIds:e,searchExpandedFolderIds:new Set,foldersWithMatches:new Set}}let l=[...t,...r],i=(e=Y.toLowerCase(),n=new Set,l.forEach(t=>{let r="metric_name"in t?t.metric_name:t.column_name,{verbose_name:l,expression:i}=t;((null==r?void 0:r.toLowerCase().includes(e))||(null==l?void 0:l.toLowerCase().includes(e))||(null==i?void 0:i.toLowerCase().includes(e)))&&n.add(t.uuid)}),n),a=new Set,o=new Set,d=Y.toLowerCase(),s=e=>{var t;return e.type===eu.a.Folder&&(null==(t=e.name)?void 0:t.toLowerCase().includes(d))},c=e=>{var t;return e.type===eu.a.Folder&&!!(s(e)||(null==(t=e.children)?void 0:t.some(e=>e.type===eu.a.Folder?c(e):i.has(e.uuid))))},u=(e,t)=>{"children"in e&&e.children&&e.children.forEach(e=>{e.type===eu.a.Folder?u(e,t):t.add(e.uuid)})},p=new Set(i);return v.forEach(e=>{if(e.type===eu.a.Folder){if(s(e)){a.add(e.uuid),o.add(e.uuid),u(e,p);let t=e=>{"children"in e&&e.children&&e.children.forEach(e=>{e.type===eu.a.Folder&&(a.add(e.uuid),o.add(e.uuid),t(e))})};t(e)}else if(c(e)){a.add(e.uuid),o.add(e.uuid);let t=e=>{"children"in e&&e.children&&e.children.forEach(e=>{e.type===eu.a.Folder&&c(e)&&(a.add(e.uuid),o.add(e.uuid),t(e))})};t(e)}}}),{visibleItemIds:p,searchExpandedFolderIds:a,foldersWithMatches:o}},[Y,t,r,v]),q=(0,d.useMemo)(()=>{let e=[];for(let{uuid:t,type:r,children:n}of L)r===eu.a.Folder&&(null==n?void 0:n.length)&&(Y?P.has(t)||e.push(t):F.has(t)&&e.push(t));return e},[L,F,Y,P]),H=(0,d.useCallback)(e=>{var t;let r,n=L;return Y&&j&&(n=L.filter(e=>e.type===eu.a.Folder?j.has(e.uuid):R.has(e.uuid))),t=n,r=new Set(null!=e?[e,...q]:q),t.filter(e=>{if(e.parentId&&r.has(e.parentId)){var t;return(null==(t=e.children)?void 0:t.length)&&r.add(e.uuid),!1}return!0})},[L,q,Y,j,R]),B=(0,d.useMemo)(()=>new Map(t.map(e=>[e.uuid,e])),[t]),K=(0,d.useMemo)(()=>new Map(r.map(e=>[e.uuid,e])),[r]),{isDragging:N,activeId:W,draggedFolderChildIds:Q,dragOverlayWidth:G,flattenedItems:V,dragOverlayItems:X,forbiddenDropFolderIds:J,currentDropTargetId:Z,fullItemsByUuid:ee,handleDragStart:et,handleDragMove:er,handleDragOver:en,handleDragEnd:el,handleDragCancel:ei}=function({setItems:e,computeFlattenedItems:t,fullFlattenedItems:r,selectedItemIds:n,onChange:l,addWarningToast:i}){let[a,o]=(0,d.useState)(null),[s,c]=(0,d.useState)(null),[u,p]=(0,d.useState)(null),h=(0,d.useRef)(0),[m,f]=(0,d.useState)(null),[y,b]=(0,d.useState)(new Set),[v,x]=(0,d.useState)(new Set),S=(0,d.useRef)(null),w=(0,d.useMemo)(()=>t(a),[t,a]),C=(0,d.useMemo)(()=>a&&S.current?S.current:w,[a,w]),Y=(0,d.useMemo)(()=>0===v.size?C:C.filter(e=>!v.has(e.uuid)),[C,v]),$=(0,d.useMemo)(()=>{let e=new Map;return Y.forEach((t,r)=>{e.set(t.uuid,r)}),e},[Y]),_=(0,d.useMemo)(()=>{let e=new Map;return r.forEach(t=>{e.set(t.uuid,t)}),e},[r]),F=(0,d.useMemo)(()=>{let e=new Map;return r.forEach((t,r)=>{e.set(t.uuid,r)}),e},[r]),k=(0,d.useMemo)(()=>{let e=new Map;return r.forEach(t=>{if(t.parentId){var r;let n=null!=(r=e.get(t.parentId))?r:[];n.push(t),e.set(t.parentId,n)}}),e},[r]),I=(0,d.useCallback)((e,t)=>{let r=k.get(e);if(!r||0===r.length)return t;let n=t;for(let e of r)e.type===eu.a.Folder&&(n=Math.max(n=Math.max(n,e.depth),I(e.uuid,e.depth)));return n},[k]),z=(0,d.useCallback)((e,t)=>{e&&t?i((0,g.t)("Columns and metrics should be inside folders")):e?i((0,g.t)("Columns should be inside folders")):t&&i((0,g.t)("Metrics should be inside folders"))},[i]),A=(0,d.useCallback)(()=>{o(null),c(null),h.current=0,f(null),b(new Set),x(new Set),p(null),S.current=null},[]),D=(0,d.useCallback)(({delta:e})=>{if(h.current=e.x,a&&s){var t;if("string"==typeof s&&s.endsWith("-empty"))return void f(s.replace("-empty",""));let r=eY(Y,a,s,e.x,64,$);f(null!=(t=null==r?void 0:r.parentId)?t:null)}},[a,s,Y,$]),E=(0,d.useCallback)(({over:e})=>{var t,r;if(c(null!=(t=null==e?void 0:e.id)?t:null),a&&e){if("string"==typeof e.id&&e.id.endsWith("-empty"))return void f(e.id.replace("-empty",""));let t=eY(Y,a,e.id,h.current,64,$);f(null!=(r=null==t?void 0:t.parentId)?r:null)}else f(null)},[a,Y,$]),T=(0,d.useMemo)(()=>{if(!a||0===y.size)return[];let e=_.get(a);return(null==e?void 0:e.type)===eu.a.Folder&&v.size>0?C.filter(e=>e.uuid===a||v.has(e.uuid)):r.filter(e=>y.has(e.uuid)).slice(0,3)},[a,y,v,C,r,_]),M=(0,d.useMemo)(()=>{let e=new Set;if(0===y.size)return e;let t=new Set,n=!1,l=0;y.forEach(e=>{let r=_.get(e);if(r&&(t.add(r.type),r.type===eu.a.Folder&&(0,ew.kq)(r.uuid)&&(n=!0),r.type===eu.a.Folder)){let e=I(r.uuid,r.depth)-r.depth;l=Math.max(l,e)}});let i=t.has(eu.a.Folder);return r.forEach(r=>{if(r.type!==eu.a.Folder)return;let a=(0,ew.kq)(r.uuid);if(n&&!a)return void e.add(r.uuid);let o=r.uuid===ew.v3&&a,d=r.uuid===ew.Lc&&a;(o||d)&&i||o&&t.has(eu.a.Column)||d&&t.has(eu.a.Metric)?e.add(r.uuid):i&&r.depth+1+l>=3&&e.add(r.uuid)}),e},[y,r,_,I]);return{isDragging:null!==a,activeId:a,draggedItemIds:y,draggedFolderChildIds:v,dragOverlayWidth:u,flattenedItems:C,dragOverlayItems:T,forbiddenDropFolderIds:M,currentDropTargetId:m,fullItemsByUuid:_,handleDragStart:({active:e})=>{let r=t(null);S.current=r,o(e.id);let l=e.rect.current.initial;l&&p(l.width),n.has(e.id)?b(new Set(n)):b(new Set([e.id]));let i=r.findIndex(t=>t.uuid===e.id),a=r[i];if((null==a?void 0:a.type)===eu.a.Folder){let e=new Set;for(let t=i+1;t<r.length;t+=1)if(r[t].depth>a.depth)e.add(r[t].uuid);else break;x(e)}},handleDragMove:D,handleDragOver:E,handleDragEnd:({active:t,over:n})=>{var a,o,d,s,c;let u=Array.from(y),p=h.current;if(A(),0===u.length)return;if(!n){let e=!1,t=!1;for(let r of u){let n=_.get(r);n&&(n.type===eu.a.Column?e=!0:n.type===eu.a.Metric&&(t=!0))}z(e,t);return}let m=n.id,f=!1;if("string"==typeof m&&m.endsWith("-empty")&&(m=m.replace("-empty",""),f=!0,u.includes(m))||v.has(m))return;let b=null!=(a=F.get(t.id))?a:-1,x=null!=(o=F.get(m))?o:-1;if(-1===b||-1===x)return;let S=new Set(u),w=r.filter(e=>S.has(e.uuid)),C=eY(Y,t.id,m,p,64,$);if(f){let e=r[x];C={depth:e.depth+1,maxDepth:e.depth+1,minDepth:e.depth+1,parentId:m}}let D=r[b];if(t.id===m&&(null!=(d=null==C?void 0:C.parentId)?d:null)===D.parentId)return;let E=new Set,T=r.filter(e=>e.type===eu.a.Folder&&!(0,ew.kq)(e.uuid)&&!S.has(e.uuid));for(let e of(T.sort((e,t)=>t.depth-e.depth),T)){let t=k.get(e.uuid);t&&t.length>0&&t.every(e=>S.has(e.uuid)||E.has(e.uuid))&&E.add(e.uuid)}let M=!1,O=E.size>0,U=!1,L=!1,R=!1;for(let e of w)e.type===eu.a.Folder?(O=!0,(0,ew.kq)(e.uuid)&&(U=!0)):(M=!0,e.type===eu.a.Column&&(L=!0),e.type===eu.a.Metric&&(R=!0));if(M&&(!C||!C.parentId))return void z(L,R);if(C&&C.parentId){let e=_.get(C.parentId);if(e&&(0,ew.kq)(e.uuid)){if(E.size>0)return void i((0,g.t)("Cannot nest folders in default folders"));let t=e.uuid===ew.v3,r=e.uuid===ew.Lc;for(let e of w){if(e.type===eu.a.Folder)return void i((0,g.t)("Cannot nest folders in default folders"));if(t&&e.type===eu.a.Column)return void i((0,g.t)("This folder only supports metrics"));if(r&&e.type===eu.a.Metric)return void i((0,g.t)("This folder only supports columns"))}}}if(U&&(null==C?void 0:C.parentId))return void i((0,g.t)("Default folders cannot be nested"));if(O&&C){for(let e of w)if(e.type===eu.a.Folder){let t=e.depth,r=I(e.uuid,t)-t;if(C.depth+r>=3)return void i((0,g.t)("Maximum folder nesting depth reached"))}for(let e of E){let t=_.get(e);if(t){let r=I(e,t.depth)-t.depth;if(C.depth+r>=3)return void i((0,g.t)("Maximum folder nesting depth reached"))}}}let P=r;if(C){let e=C.depth-D.depth,n=new Map,l=[];for(let e of E){let t=_.get(e);t&&(t.parentId&&E.has(t.parentId)||l.push(t))}let i=new Map;for(let e of l){let t=C.depth-e.depth;i.set(e.uuid,t),n.set(e.uuid,{depth:C.depth,parentId:C.parentId})}for(let t of E){if(n.has(t))continue;let r=_.get(t);if(!r)continue;let l=r;for(;l.parentId&&E.has(l.parentId)&&!i.has(l.parentId);)l=_.get(l.parentId);let a=l.parentId&&null!=(s=i.get(l.parentId))?s:e;i.set(t,a),n.set(t,{depth:r.depth+a,parentId:void 0})}w.forEach(r=>{if(r.parentId&&E.has(r.parentId)){var l;let t=null!=(l=i.get(r.parentId))?l:e;n.set(r.uuid,{depth:r.depth+t,parentId:void 0})}else r.uuid===t.id?n.set(r.uuid,{depth:C.depth,parentId:C.parentId}):n.set(r.uuid,{depth:r.depth+e,parentId:C.parentId})});let a=(e,t)=>{let r=k.get(e);if(r)for(let e of r)n.has(e.uuid)||(n.set(e.uuid,{depth:e.depth+t,parentId:void 0}),e.type===eu.a.Folder&&a(e.uuid,t))};for(let t of(w.forEach(t=>{t.type===eu.a.Folder&&a(t.uuid,e)}),E)){let r=null!=(c=i.get(t))?c:e;a(t,r)}P=r.map(e=>{let t=n.get(e.uuid);if(t){let r=void 0===t.parentId?e.parentId:t.parentId;return e9({},e,{depth:t.depth,parentId:r})}return e})}let j=new Set(u),q=e=>{let t=k.get(e);if(t)for(let e of t)j.has(e.uuid)||(j.add(e.uuid),e.type===eu.a.Folder&&q(e.uuid))};if(w.forEach(e=>{e.type===eu.a.Folder&&q(e.uuid)}),C)for(let e of E)j.add(e),q(e);let H=[];r.forEach((e,t)=>{j.has(e.uuid)&&H.push(t)});let B=H.map(e=>P[e]),K=new Set(H),N=P.filter((e,t)=>!K.has(t)),W=0;if(C&&C.parentId){let e=N.findIndex(e=>e.uuid===C.parentId);if(-1!==e)if(f)W=e+1;else{let t=N.findIndex(e=>e.uuid===m);W=-1!==t?N[t].parentId===C.parentId?b<x?t+1:t:t+1:e+1}}else{let e=x;H.forEach(t=>{t<x&&(e-=1)}),W=e}let Q=[...N.slice(0,W),...B,...N.slice(W)];if(Q.length!==r.length)return;let G=e_(Q);e(G),l(eF(G))},handleDragCancel:()=>{A()}}}({setItems:x,computeFlattenedItems:H,fullFlattenedItems:L,selectedItemIds:S,onChange:n,addWarningToast:m}),ea=(0,d.useCallback)((0,ez.A)(e=>{!Y&&e&&D(new Set(F)),Y&&!e&&A&&(k(A),D(null)),$(e)},300),[Y,F,A]),eo=(0,d.useMemo)(()=>{let e=Array.from(R).filter(e=>{let t=ee.get(e);return t&&t.type!==eu.a.Folder});return e.length>0&&e.every(e=>S.has(e))},[ee,R,S]),ed=(0,d.useCallback)(()=>{let e=new Set(Array.from(R).filter(e=>{let t=ee.get(e);return t&&t.type!==eu.a.Folder}));if(eo)w(new Set);else{w(e);let n=new Map;for(let e of L)n.set(e.uuid,e.parentId);let l=new Set;for(let i of e){var t,r;let e=null!=(t=n.get(i))?t:null;for(;e;)l.add(e),e=null!=(r=n.get(e))?r:null}k(e=>{let t=new Set(e);for(let e of l)t.delete(e);return t})}},[R,ee,L,eo]),es=(0,d.useCallback)(e=>{k(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]),ec=(0,d.useCallback)((e,t,r)=>{let n=C.current;t&&(C.current=e),w(l=>{let i=new Set(l);if(r&&t&&n){let t=V.filter(e=>e.type!==eu.a.Folder&&R.has(e.uuid)),r=t.findIndex(t=>t.uuid===e),l=t.findIndex(e=>e.uuid===n);if(-1!==r&&-1!==l){let e=Math.min(r,l),n=Math.max(r,l);for(let r=e;r<=n;r+=1)i.add(t[r].uuid)}}else t?i.add(e):i.delete(e);return i})},[V,R]),ep=(0,d.useCallback)(e=>{z(e)},[]),eh=(0,d.useCallback)((e,t)=>{t.trim()&&t!==e&&x(r=>{let l=e_(e$(r).map(r=>r.uuid===e?tb({},r,{name:t}):r));return n(eF(l)),l}),z(null)},[n]),em=(0,d.useMemo)(()=>{let e=new Set,t=new Map;return V.forEach(e=>{let r=e.parentId;t.has(r)||t.set(r,[]),t.get(r).push(e.uuid)}),t.forEach(t=>{t.length>0&&e.add(t[t.length-1])}),e},[V]),ef=(0,d.useMemo)(()=>{let e=new Map;return V.forEach((t,r)=>{if(t.type===eu.a.Folder||!em.has(t.uuid))return;let n=V[r+1];if(n){if(n.type===eu.a.Folder&&0===n.depth)return void e.set(t.uuid,"visible");t.depth>1&&n.depth<t.depth&&n.type!==eu.a.Folder&&e.set(t.uuid,"transparent")}}),e},[V,em]),eg=(0,d.useMemo)(()=>Q.size>0?V.filter(e=>!Q.has(e.uuid)).map(({uuid:e})=>e):V.map(({uuid:e})=>e),[V,Q]),ey=(0,d.useMemo)(()=>W?e=>{var t;let r=(0,eD.Qo)(e);if(0===r.length||(null==(t=r[0])?void 0:t.id)!==W)return r;let n=(0,eD.TT)(e),l=n.find(e=>e.id!==W);if(l)return[l,...r];if(n.length>0)return r;let i=(0,eD.fp)(e).find(e=>e.id!==W);return i?[i,...r]:r}:eD.Qo,[W]),eb=(0,d.useMemo)(()=>{let e=0;for(let t of S)B.has(t)&&(e+=1);return e},[S,B]),ev=(0,d.useMemo)(()=>{let e=new Map;for(let t of V)t.type===eu.a.Folder&&e.set(t.uuid,0);for(let t of V)t.parentId&&e.has(t.parentId)&&e.set(t.parentId,e.get(t.parentId)+1);return e},[V]);return(0,l.FD)(eX,{children:[(0,l.Y)(tn,{show:E,onCancel:()=>{T(!1)},onConfirm:()=>{let e=eU(t,r);x(e),w(new Set),z(null),T(!1),n(eF(e))}}),(0,l.Y)(tt,{onSearch:e=>{ea(e.target.value)},onAddFolder:()=>{let e={uuid:crypto.randomUUID?crypto.randomUUID():function(e,t,r){let n=(e=e||{}).random??e.rng?.()??crypto.getRandomValues(eT);if(n.length<16)throw Error("Random bytes length must be >= 16");if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){if((r=r||0)<0||r+16>t.length)throw RangeError(`UUID byte range ${r}:${r+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(eM[e[t+0]]+eM[e[t+1]]+eM[e[t+2]]+eM[e[t+3]]+"-"+eM[e[t+4]]+eM[e[t+5]]+"-"+eM[e[t+6]]+eM[e[t+7]]+"-"+eM[e[t+8]]+eM[e[t+9]]+"-"+eM[e[t+10]]+eM[e[t+11]]+eM[e[t+12]]+eM[e[t+13]]+eM[e[t+14]]+eM[e[t+15]]).toLowerCase()}(n)}(void 0,void 0,void 0),type:eu.a.Folder,name:"",children:[]},t=[e,...v];x(t),z(e.uuid),n(eF(t))},onSelectAll:ed,onResetToDefault:()=>{T(!0)},allVisibleSelected:eo,selectedMetricsCount:eb,selectedColumnsCount:S.size-eb,totalMetricsCount:t.length,totalColumnsCount:r.length}),(0,l.Y)(e4,{ref:O,children:(0,l.FD)(eD.Mp,{sensors:M,collisionDetection:ey,measuring:eR,autoScroll:eP,onDragStart:et,onDragMove:er,onDragOver:en,onDragEnd:el,onDragCancel:ei,children:[(0,l.Y)(eE.gB,{items:eg,strategy:eE._G,children:(0,l.Y)(eA.Ay,{children:({height:e,width:t})=>(0,l.Y)(ty,{width:t,height:e,flattenedItems:V,itemHeights:f,heightCache:b,collapsedIds:F,selectedItemIds:S,editingFolderId:I,folderChildCounts:ev,itemSeparatorInfo:ef,visibleItemIds:R,searchTerm:Y,metricsMap:B,columnsMap:K,isDragging:N,activeId:W,draggedFolderChildIds:Q,forbiddenDropFolderIds:J,currentDropTargetId:Z,onToggleCollapse:es,onSelect:ec,onStartEdit:ep,onFinishEdit:eh})})}),(0,l.Y)(eD.Hd,{modifiers:U,children:(0,l.Y)(tu,{dragOverlayItems:X,dragOverlayWidth:G,selectedItemIds:S,metricsMap:B,columnsMap:K,itemSeparatorInfo:ef})})]})})]})}function tx(e,t,r,n,l,i,a){try{var o=e[i](a),d=o.value}catch(e){r(e);return}o.done?t(d):Promise.resolve(d).then(n,l)}function tS(e){return function(){var t=this,r=arguments;return new Promise(function(n,l){var i=e.apply(t,r);function a(e){tx(i,n,l,a,o,"next",e)}function o(e){tx(i,n,l,a,o,"throw",e)}a(void 0)})}}function tw(){return(tw=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let tC=(0,u.a)(),tY=y.styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;

  .change-warning {
    margin: 16px 10px 0;
    color: ${({theme:e})=>e.colorWarning};
  }

  .change-warning .bold {
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }

  .form-group.has-feedback > .help-block {
    margin-top: 8px;
  }

  .form-group.form-group-md {
    margin-bottom: 8px;
  }
`,t$=y.styled.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,t_=(0,y.styled)(x.Ay)`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;

  .ant-tabs-body-holder {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding-top: ${({theme:e})=>e.paddingMD}px;
  }

  .ant-tabs-body {
    height: 100%;
  }

  .ant-tabs-content-active {
    height: 100%;
  }
`,tF=(0,y.styled)(k.E)`
  .ant-badge-count {
    line-height: ${({theme:e})=>4*e.sizeUnit}px;
    height: ${({theme:e})=>4*e.sizeUnit}px;
    margin-left: ${({theme:e})=>e.sizeUnit}px;
  }
`,tk=y.styled.div`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.paddingSM}px 0;
  a {
    padding: 0 10px;
  }
`,tI=y.styled.div`
  text-align: right;
  ${({theme:e})=>`margin-bottom: ${2*e.sizeUnit}px`}
`,tz=y.styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,tA=y.styled.div`
  .table > tbody > tr > td {
    vertical-align: middle;
  }

  .ant-tag {
    margin-top: ${({theme:e})=>e.sizeUnit}px;
  }
`,tD=y.styled.div`
  ${({theme:e})=>(0,b.AH)`
    margin-bottom: ${4*e.sizeUnit}px;
  `}
`,tE=y.styled.h4`
  ${({theme:e})=>(0,b.AH)`
    margin: 0 0 ${2*e.sizeUnit}px 0;
    font-size: ${e.fontSizeLG}px;
    font-weight: ${e.fontWeightStrong};
    color: ${e.colorText};
  `}
`,tT=y.styled.div`
  ${({theme:e})=>(0,b.AH)`
    display: flex;
    align-items: center;
    gap: ${e.sizeUnit}px;
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextLabel};
  `}
`,tM=y.styled.span`
  ${({theme:e})=>`
    margin-top: ${3*e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    button>span>:first-of-type {
      margin-right: 0;
    }
  `}
`,tO=(e,t)=>(0,l.Y)(C.A,{value:e,onChange:t}),tU=[{value:"STRING",label:(0,g.t)("STRING")},{value:"NUMERIC",label:(0,g.t)("NUMERIC")},{value:"DATETIME",label:(0,g.t)("DATETIME")},{value:"BOOLEAN",label:(0,g.t)("BOOLEAN")}],tL="SOURCE",tR=[{key:"physical",label:(0,g.t)("Physical (table or view)")},{key:"virtual",label:(0,g.t)("Virtual (SQL)")}],tP={};function tj({title:e,collection:t,count:r}){let n=void 0!==r?r:t?t.length:0;return(0,l.FD)("div",{css:{display:"flex",alignItems:"center"},"data-test":`collection-tab-${e}`,children:[e," ",(0,l.Y)(tF,{count:n,showZero:!0})]})}function tq({children:e}){return(0,l.Y)(I.Z,{padded:!0,style:{backgroundColor:y.themeObject.theme.colorBgLayout},children:e})}function tH({columns:e,onColumnsChange:t,editableColumnName:r=!1,showExpression:n=!1,allowAddItem:i=!1,allowEditDataType:a=!1,itemGenerator:o=()=>({column_name:(0,g.t)("<new column>"),filterable:!0,groupby:!0}),columnLabelTooltips:d,filterTerm:s,filterFields:c}){return(0,l.Y)(eg,{tableColumns:(0,p.G7)(p.TO.EnableAdvancedDataTypes)?["column_name","advanced_data_type","type","is_dttm","filterable","groupby"]:["column_name","type","is_dttm","filterable","groupby"],sortColumns:(0,p.G7)(p.TO.EnableAdvancedDataTypes)?["column_name","advanced_data_type","type","is_dttm","filterable","groupby"]:["column_name","type","is_dttm","filterable","groupby"],allowDeletes:!0,allowAddItem:i,itemGenerator:o,collection:e,columnLabelTooltips:d,filterTerm:s,filterFields:c,stickyHeader:!0,expandFieldset:(0,l.Y)(tq,{children:(0,l.FD)(ec,{compact:!0,children:[n&&(0,l.Y)(ed,{fieldKey:"expression",label:(0,g.t)("SQL expression"),control:(0,l.Y)($.A,{language:"sql",offerEditInModal:!1,maxLines:25,debounceDelay:300})}),(0,l.Y)(ed,{fieldKey:"verbose_name",label:(0,g.t)("Label"),control:(0,l.Y)(Y.A,{controlId:"verbose_name",placeholder:(0,g.t)("Label")})}),(0,l.Y)(ed,{fieldKey:"description",label:(0,g.t)("Description"),control:(0,l.Y)(Y.A,{controlId:"description",placeholder:(0,g.t)("Description")})}),a&&(0,l.Y)(ed,{fieldKey:"type",label:(0,g.t)("Data type"),control:(0,l.Y)(z.A,{ariaLabel:(0,g.t)("Data type"),header:(0,l.Y)(A.l,{children:(0,g.t)("Data type")}),options:tU,name:"type",allowNewOptions:!0,allowClear:!0})}),(0,p.G7)(p.TO.EnableAdvancedDataTypes)?(0,l.Y)(ed,{fieldKey:"advanced_data_type",label:(0,g.t)("Advanced data type"),control:(0,l.Y)(Y.A,{controlId:"advanced_data_type",placeholder:(0,g.t)("Advanced Data type")})}):(0,l.Y)(l.FK,{}),(0,l.Y)(ed,{fieldKey:"python_date_format",label:(0,g.t)("Datetime format"),description:(0,l.FD)("div",{children:[(0,g.t)("The pattern of timestamp format. For strings use "),(0,l.Y)(D.o.Link,{href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior",children:(0,g.t)("Python datetime string pattern")}),(0,g.t)(" expression which needs to adhere to the "),(0,l.Y)(D.o.Link,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:(0,g.t)("ISO 8601")}),(0,g.t)(` standard to ensure that the lexicographical ordering
                      coincides with the chronological ordering. If the
                      timestamp format does not adhere to the ISO 8601 standard
                      you will need to define an expression and type for
                      transforming the string into a date or timestamp. Note
                      currently time zones are not supported. If time is stored
                      in epoch format, put \`epoch_s\` or \`epoch_ms\`. If no pattern
                      is specified we fall back to using the optional defaults on a per
                      database/column name level via the extra parameter.`)]}),control:(0,l.Y)(Y.A,{controlId:"python_date_format",placeholder:"%Y-%m-%d"})}),(0,l.Y)(ed,{fieldKey:"certified_by",label:(0,g.t)("Certified By"),description:(0,g.t)("Person or group that has certified this metric"),control:(0,l.Y)(Y.A,{controlId:"certified",placeholder:(0,g.t)("Certified by")})}),(0,l.Y)(ed,{fieldKey:"certification_details",label:(0,g.t)("Certification details"),description:(0,g.t)("Details of the certification"),control:(0,l.Y)(Y.A,{controlId:"certificationDetails",placeholder:(0,g.t)("Certification details")})})]})}),columnLabels:(0,p.G7)(p.TO.EnableAdvancedDataTypes)?{column_name:(0,g.t)("Column"),advanced_data_type:(0,g.t)("Advanced data type"),type:(0,g.t)("Data type"),groupby:(0,g.t)("Is dimension"),is_dttm:(0,g.t)("Is temporal"),filterable:(0,g.t)("Is filterable")}:{column_name:(0,g.t)("Column"),type:(0,g.t)("Data type"),groupby:(0,g.t)("Is dimension"),is_dttm:(0,g.t)("Is temporal"),filterable:(0,g.t)("Is filterable")},onChange:t,itemRenderers:(0,p.G7)(p.TO.EnableAdvancedDataTypes)?{column_name:(e,t,n,i)=>r?(0,l.FD)(tz,{children:[i.is_certified&&(0,l.Y)(E.T,{certifiedBy:i.certified_by,details:i.certification_details}),(0,l.Y)(T.z,{canEdit:!0,title:e,onSaveTitle:t})]}):(0,l.FD)(tz,{children:[i.is_certified&&(0,l.Y)(E.T,{certifiedBy:i.certified_by,details:i.certification_details}),e]}),type:e=>e?(0,l.Y)(M.JU,{children:String(e)}):null,advanced_data_type:e=>(0,l.Y)(M.JU,{children:e}),is_dttm:tO,filterable:tO,groupby:tO}:{column_name:(e,t,n,i)=>r?(0,l.FD)(tz,{children:[i.is_certified&&(0,l.Y)(E.T,{certifiedBy:i.certified_by,details:i.certification_details}),(0,l.Y)(Y.A,{value:e,onChange:t})]}):(0,l.FD)(tz,{children:[i.is_certified&&(0,l.Y)(E.T,{certifiedBy:i.certified_by,details:i.certification_details}),e]}),type:e=>e?(0,l.Y)(M.JU,{children:String(e)}):null,is_dttm:tO,filterable:tO,groupby:tO}})}function tB({label:e,formElement:t}){return(0,l.FD)("div",{children:[(0,l.Y)("div",{children:(0,l.Y)("strong",{children:e})}),(0,l.Y)("div",{children:t})]})}function tK({datasource:e,onChange:t}){return(0,l.Y)(J.Ay,{relatedUrl:"/api/v1/dataset/related/editors",ariaLabel:(0,g.t)("Select editors"),value:e.editors,onChange:e=>t(e),header:(0,l.Y)(A.l,{children:(0,g.t)("Editors")}),allowClear:!0})}tR.forEach(e=>{tP[e.key]=e});let tN=null!=(n=tC.get("sqleditor.extension.resultTable"))?n:B.TR,tW=(0,s.Ng)(e=>({database:null==e?void 0:e.database}),e=>({runQuery:t=>e(function(e){var r;return(r=function*(){try{e(W(!0));let r=yield N(t);e({type:"SET_QUERY_RESULT",payload:r})}catch(t){e({type:"SET_QUERY_ERROR",payload:t.message})}finally{e(W(!1))}},function(){var e=this,t=arguments;return new Promise(function(n,l){var i=r.apply(e,t);function a(e){K(i,n,l,a,o,"next",e)}function o(e){K(i,n,l,a,o,"throw",e)}a(void 0)})})()}),resetQuery:()=>e({type:"RESET_DATABASE_STATE"}),formatQuery:(t,r)=>e(function(e){return m.A.post({endpoint:"/api/v1/sqllab/format_sql/",body:JSON.stringify({sql:t}),headers:{"Content-Type":"application/json"},signal:null==r?void 0:r.signal}).then(t=>(e({type:"SET_QUERY",payload:t.json.result}),t))})})),tQ=(0,_.Ay)(tW(function({datasource:e,onChange:t=()=>{},addSuccessToast:r,addDangerToast:n,setIsEditing:a=()=>{},database:s,runQuery:u,resetQuery:x,formatQuery:_}){let k=(0,y.useTheme)(),I=(0,d.useRef)(!1),A=(0,d.useRef)(!0),M=(0,d.useRef)(e),B=(0,d.useRef)(!1),K=(0,d.useRef)(!1),N=(0,d.useRef)({formatQuery:null,formatSql:null,syncMetadata:null,fetchUsageData:null}),[W,Q]=(0,d.useState)(()=>{var t;return tw({},e,{editors:(0,J.CO)(e.editors||[]),metrics:null==(t=e.metrics)?void 0:t.map(e=>{let{certified_by:t,certification_details:r}=e,{certification:{details:n,certified_by:l}={},warning_markdown:i}=JSON.parse(e.extra||"{}")||{};return tw({},e,{certification_details:r||n,warning_markdown:i||"",certified_by:l||t})})})}),[er,en]=(0,d.useState)([]),[ea]=(0,d.useState)("table"===e.datasource_type||"table"===e.type),[eo,es]=(0,d.useState)(!1),[eu,ep]=(0,d.useState)(e.columns.filter(e=>!e.expression)),[eh,em]=(0,d.useState)(e.columns.filter(e=>!!e.expression)),[ef,ey]=(0,d.useState)(e.folders||[]),[eb,ev]=(0,d.useState)(()=>{let t=e.folders||[];return eI(t)+2*!t.some(e=>(0,ew.kq)(e.uuid))}),[ex,eC]=(0,d.useState)(!1),[eY,e$]=(0,d.useState)(tL),[e_,eF]=(0,d.useState)(e.sql?tP.virtual.key:tP.physical.key),[ez,eA]=(0,d.useState)([]),[eD,eE]=(0,d.useState)(0),[eT,eM]=(0,d.useState)(""),[eO,eU]=(0,d.useState)(""),[eL,eR]=(0,d.useState)(""),eP=(0,d.useCallback)((e,t)=>{let r={},n=[];return e.forEach(e=>{let l=t(e);l in r?n.push(l):r[l]=null}),n},[]),ej=(0,d.useCallback)(e=>{var t,r;let n,l=[];n=eP(W.columns,e=>e.column_name),l=l.concat(n.map(e=>(0,g.t)("Column name [%s] is duplicated",e))),n=eP(null!=(t=W.metrics)?t:[],e=>e.metric_name),l=l.concat(n.map(e=>(0,g.t)("Metric name [%s] is duplicated",e)));let i=eh.filter(e=>!e.expression&&!e.json);l=l.concat(i.map(e=>(0,g.t)("Calculated column [%s] requires an expression",e.column_name)));try{null==(r=W.metrics)||r.forEach(e=>{var t;return(null==(t=e.currency)?void 0:t.symbol)&&"AUTO"!==e.currency.symbol&&new Intl.NumberFormat("en-US",{style:"currency",currency:e.currency.symbol})})}catch{l=l.concat([(0,g.t)("Invalid currency code in saved metrics")])}if((null==ef?void 0:ef.length)>0){let e,t,r,n,i,a=(e=[],t=[],r=e=>{e.forEach(e=>{var n;(null==(n=e.name)?void 0:n.trim())&&t.push(e.name.trim().toLowerCase()),e.children&&"folder"===e.type&&r(e.children.filter(e=>"folder"===e.type))})},n=t=>{t.forEach(t=>{var r;let l=t.children&&t.children.length>0,i=!(null==(r=t.name)?void 0:r.trim());l&&i&&e.push((0,g.t)("Folder with content must have a name")),t.uuid===ew.v3&&t.children&&t.children.some(e=>"column"===e.type)&&e.push((0,g.t)("Metrics folder can only contain metric items")),t.uuid===ew.Lc&&t.children&&t.children.some(e=>"metric"===e.type)&&e.push((0,g.t)("Columns folder can only contain column items")),t.children&&"folder"===t.type&&n(t.children.filter(e=>"folder"===e.type))})},r(ef),i=new Map,t.forEach(e=>{i.set(e,(i.get(e)||0)+1)}),i.forEach((t,r)=>{t>1&&e.push((0,g.t)("Duplicate folder name: %s",r))}),n(ef),{isValid:0===e.length,errors:e,warnings:[]});l=l.concat(a.errors)}en(l),e(l)},[W,eh,ef,eP]),eq=(0,d.useCallback)((e=er)=>{var r;let n=e_===tP.physical.key?"":W.sql,l=[...eu,...eh],i=new Set;for(let e of l)e.uuid&&i.add(e.uuid);for(let e of null!=(r=W.metrics)?r:[])e.uuid&&i.add(e.uuid);let a=ek(ef,i);t(tw({},W,{sql:n,columns:l,folders:a}),e)},[W,e_,eu,eh,ef,er,t]),eH=(0,d.useCallback)(()=>{ej(eq)},[ej,eq]),eB=(0,d.useCallback)(e=>{Q(e)},[]),eK=(0,d.useCallback)((e,t)=>{void 0!==t&&("table_name"===e&&(K.current=!0),Q(r=>tw({},r,{[e]:t})))},[]);(0,d.useEffect)(()=>{!A.current&&I.current&&eH()},[W]);let eN=(0,d.useCallback)(()=>{a(!eo),es(e=>!e)},[eo,a]),eW=(0,d.useCallback)(e=>{eF(e)},[]);(0,d.useEffect)(()=>{!A.current&&I.current&&eq()},[e_]);let eQ=(0,d.useCallback)(e=>{let t=e.filter(e=>{var t,r;return e.uuid!==ew.v3&&e.uuid!==ew.Lc&&(null!=(t=null==(r=e.children)?void 0:r.length)?t:0)>0});ey(t),ev(eI(t)),Q(e=>tw({},e,{folders:t}))},[]),eG=(0,d.useCallback)(e=>{"databaseColumns"in e&&e.databaseColumns&&ep(e.databaseColumns),"calculatedColumns"in e&&e.calculatedColumns&&em(e.calculatedColumns)},[]);(0,d.useEffect)(()=>{if(A.current||B.current){B.current=!1;return}I.current&&eH()},[eu,eh]);let eV=(0,d.useCallback)(()=>{var e,t,r,n,l;let i=new URLSearchParams({dbid:String(null!=(e=null==(l=W.database)?void 0:l.id)?e:""),sql:null!=(t=W.sql)?t:"",name:null!=(r=W.datasource_name)?r:"",schema:null!=(n=W.schema)?n:"",autorun:"true",isDataset:"true"});return(0,X.Gm)(`/sqllab/?${i.toString()}`)},[W]),eX=(0,d.useCallback)(()=>{(0,X.V3)(eV())},[eV]),eJ=(0,d.useCallback)(()=>tS(function*(){var e;let t=null==(e=W.database)?void 0:e.id,{sql:r}=W;t&&r&&u({client_id:null==s?void 0:s.clientId,database_id:t,runAsync:!1,catalog:W.catalog,schema:W.schema,sql:r,tmp_table_name:"",select_as_cta:!1,ctas_method:"TABLE",queryLimit:25,expand_data:!0})})(),[W,null==s?void 0:s.clientId,u]),eZ=(0,d.useCallback)(()=>tS(function*(){if(!W.sql||!eo)return;N.current.formatQuery&&N.current.formatQuery.abort(),N.current.formatQuery=new AbortController;let{signal:e}=N.current.formatQuery;try{let t=yield _(W.sql,{signal:e});eK("sql",t.json.result),r((0,g.t)("SQL was formatted"))}catch(r){if("AbortError"===r.name)return;let{error:e,statusText:t}=yield(0,h.h4)(r);n(e||t||(0,g.t)("An error occurred while formatting SQL"))}finally{N.current.formatQuery=null}})(),[W.sql,eo,_,eK,r,n]),e0=(0,d.useCallback)(()=>tS(function*(){N.current.syncMetadata&&N.current.syncMetadata.abort(),N.current.syncMetadata=new AbortController;let{signal:e}=N.current.syncMetadata;eC(!0);try{var t,l;let n,i,a,d=yield(t=function*(){var t,r;let n={datasource_type:W.type||W.datasource_type,database_name:(null==(t=W.database)?void 0:t.database_name)||(null==(r=W.database)?void 0:r.name),catalog_name:W.catalog,schema_name:W.schema,table_name:W.table_name,normalize_columns:W.normalize_columns,always_filter_main_dttm:W.always_filter_main_dttm};Object.entries(n).forEach(([e,t])=>{void 0===t&&(n[e]=null)});let l=`/datasource/external_metadata_by_name/?q=${o().encode_uri(n)}`,{json:i}=yield m.A.get({endpoint:l,signal:e});return i},function(){var e=this,r=arguments;return new Promise(function(n,l){var i=t.apply(e,r);function a(e){el(i,n,l,a,o,"next",e)}function o(e){el(i,n,l,a,o,"throw",e)}a(void 0)})})(),s=(l=W.columns,n=d.map(e=>e.column_name),i=l.reduce((e,t)=>(e[t.column_name]=t,e),{}),a={added:[],modified:[],removed:l.filter(e=>!(e.expression||n.includes(e.column_name))).map(e=>e.column_name),finalColumns:[]},d.forEach(e=>{let t=i[e.column_name];t?t.type!==e.type||t.is_dttm!==e.is_dttm?(a.finalColumns.push(ei({},t,{type:e.type,is_dttm:t.is_dttm||e.is_dttm})),a.modified.push(e.column_name)):a.finalColumns.push(t):(a.finalColumns.push({id:(0,et.Ak)(),column_name:e.column_name,type:e.type,groupby:!0,filterable:!0,is_dttm:e.is_dttm}),a.added.push(e.column_name))}),l.filter(e=>e.expression).forEach(e=>{a.finalColumns.push(e)}),a.modified.length&&r((0,g.tn)("Modified 1 column in the virtual dataset","Modified %s columns in the virtual dataset",a.modified.length,a.modified.length)),a.removed.length&&r((0,g.tn)("Removed 1 column from the virtual dataset","Removed %s columns from the virtual dataset",a.removed.length,a.removed.length)),a.added.length&&r((0,g.tn)("Added 1 new column to the virtual dataset","Added %s new columns to the virtual dataset",a.added.length,a.added.length)),a);eG({databaseColumns:s.finalColumns.filter(e=>!e.expression)}),void 0!==W.id&&(0,V.SM)(W.id),r((0,g.t)("Metadata has been synced")),eC(!1)}catch(r){if("AbortError"===r.name){I.current&&eC(!1);return}let{error:e,statusText:t}=yield(0,h.h4)(r);n(e||t||(0,g.t)("An error has occurred")),eC(!1)}finally{N.current.syncMetadata=null}})(),[W,r,n,eG]);(0,d.useEffect)(()=>{I.current&&K.current&&(K.current=!1,e0())},[W]);let e1=(0,d.useCallback)((e=1,t=25,r="changed_on_delta_humanized",l="desc")=>tS(function*(){N.current.fetchUsageData&&N.current.fetchUsageData.abort(),N.current.fetchUsageData=new AbortController;let{signal:i}=N.current.fetchUsageData;try{let n=o().encode({columns:["slice_name","url","certified_by","certification_details","description","editors.id","editors.label","editors.type","changed_on_delta_humanized","changed_on","changed_by.first_name","changed_by.last_name","changed_by.id","dashboards.id","dashboards.dashboard_title","dashboards.url"],filters:[{col:"datasource_id",opr:"eq",value:W.id}],order_column:r,order_direction:l,page:e-1,page_size:t}),{json:a={}}=yield m.A.get({endpoint:`/api/v1/chart/?q=${n}`,signal:i}),d=(null==a?void 0:a.result)||[],s=(null==a?void 0:a.ids)||[],c=d.map((e,t)=>tw({},e,{id:s[t]}));return!i.aborted&&I.current&&(eA(c),eE((null==a?void 0:a.count)||0)),{charts:c,count:(null==a?void 0:a.count)||0,ids:s}}catch(r){if("AbortError"===r.name)throw r;let{error:e,statusText:t}=yield(0,h.h4)(r);return n(e||t||(0,g.t)("An error occurred while fetching usage data")),eA([]),eE(0),{charts:[],count:0,ids:[]}}finally{N.current.fetchUsageData=null}})(),[W.id,n]),e2=(0,d.useCallback)(e=>{e$(e)},[]),e4=(0,d.useCallback)(e=>[...e].sort(({id:e},{id:t})=>(null!=t?t:0)-(null!=e?e:0)),[]),e6=(0,d.useRef)(eo),e5=(0,d.useRef)(eZ);(0,d.useEffect)(()=>{e6.current=eo,e5.current=eZ},[eo,eZ]),(0,d.useEffect)(()=>(I.current=!0,A.current=!1,G().bind("ctrl+shift+f",e=>(e.preventDefault(),e6.current&&(null==e5.current||e5.current.call(e5)),!1)),e1().catch(e=>{if((null==e?void 0:e.name)!=="AbortError")throw e}),()=>{I.current=!1,Object.values(N.current).forEach(e=>{e&&e.abort()}),G().unbind("ctrl+shift+f"),x()}),[]),(0,d.useEffect)(()=>{if(!I.current||M.current===e)return;M.current=e;let t=e.columns.filter(e=>!!e.expression);if(t.length===eh.length){let r=[],n=new Set;eh.forEach(e=>{let l=e.id||e.column_name,i=t.find(e=>(e.id||e.column_name)===l);i&&(r.push(i),n.add(l))}),t.forEach(e=>{let t=e.id||e.column_name;n.has(t)||r.push(e)}),B.current=!0,em(r),ep(e.columns.filter(e=>!e.expression))}},[e]);let e3=(0,d.useCallback)(()=>(0,l.Y)("div",{css:e=>(0,b.AH)`
          position: absolute;
          background: ${e.colorBgLayout};
          align-items: center;
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: center;
        `,children:(0,l.FD)("div",{children:[(0,l.Y)(O.R,{position:"inline-centered"}),(0,l.Y)("span",{css:e=>(0,b.AH)`
              display: block;
              margin: ${4*e.sizeUnit}px auto;
              width: fit-content;
              color: ${e.colorText};
            `,children:(0,g.t)("We are working on your query")})]})}),[]),e7=(0,d.useCallback)((e=!1)=>(0,l.Y)("a",{href:(0,i.J)(eV()),target:"_blank",rel:"noopener noreferrer",css:t=>(0,b.AH)`
          color: ${e?t.colorErrorText:t.colorText};
          font-size: ${t.fontSizeSM}px;
          text-decoration: underline;
        `,children:(0,g.t)("Open in SQL lab")}),[eV]),e8=(0,d.useCallback)(()=>(0,l.FD)("span",{css:e=>(0,b.AH)`
          font-size: ${e.fontSizeSM}px;
          color: ${e.colorErrorText};
        `,children:[(null==s?void 0:s.error)&&(0,g.t)("Error executing query. "),e7(!0),(0,g.t)(" to check for details.")]}),[null==s?void 0:s.error,e7]),e9=(0,d.useCallback)(()=>{var e,t,r;let n=[...eu,...eh],i=n.filter(e=>e.is_dttm).map(e=>({value:e.column_name,label:e.verbose_name||e.column_name})),a=n.filter(e=>e.type_generic===f.GenericDataType.String||e.expression&&null==e.type_generic).map(e=>({value:e.column_name,label:e.verbose_name||e.column_name}));return(0,l.FD)(tD,{"data-test":"default-column-settings",children:[(0,l.Y)(tE,{children:(0,g.t)("Default Column Settings")}),(0,l.FD)(U.s,{vertical:!0,gap:(null!=(e=null==k?void 0:k.sizeUnit)?e:4)*3,children:[(0,l.FD)(U.s,{vertical:!0,gap:null!=(t=null==k?void 0:k.sizeUnit)?t:4,children:[(0,l.FD)(tT,{children:[(0,l.Y)("span",{children:(0,g.t)("Default datetime column")}),(0,l.Y)(L.I,{tooltip:(0,g.t)("Sets the default temporal column for this dataset. Automatically selected as the time column when building charts that require a time dimension and used in dashboard level time filters.")})]}),(0,l.Y)(z.A,{ariaLabel:(0,g.t)("Default datetime column"),options:i,value:W.main_dttm_col,onChange:e=>eB(tw({},W,{main_dttm_col:e})),placeholder:(0,g.t)("Select datetime column"),allowClear:!0,"data-test":"default-datetime-column-select"})]}),(0,l.FD)(U.s,{vertical:!0,gap:null!=(r=null==k?void 0:k.sizeUnit)?r:4,children:[(0,l.FD)(tT,{children:[(0,l.Y)("span",{children:(0,g.t)("Currency code column")}),(0,l.Y)(L.I,{tooltip:(0,g.t)("Select the column containing currency codes such as USD, EUR, GBP, etc. Used when building charts when 'Auto-detect' currency formatting is enabled. If this column is not set or if a chart metric contains multiple currencies, charts will fall back to neutral numeric formatting.")})]}),(0,l.Y)(z.A,{ariaLabel:(0,g.t)("Currency code column"),options:a,value:W.currency_code_column,onChange:e=>eB(tw({},W,{currency_code_column:e})),placeholder:(0,g.t)("Select currency code column"),allowClear:!0,"data-test":"currency-code-column-select"})]})]})]})},[eu,eh,null==k?void 0:k.sizeUnit,W,eB]),te=(0,d.useCallback)(()=>(0,l.FD)(ec,{title:(0,g.t)("Basic"),item:W,onChange:eB,children:[(0,l.Y)(ed,{fieldKey:"description",label:(0,g.t)("Description"),control:(0,l.Y)($.A,{language:"markdown",offerEditInModal:!1,resize:"vertical"})}),(0,l.Y)(ed,{fieldKey:"default_endpoint",label:(0,g.t)("Default URL"),description:(0,l.FD)(l.FK,{children:[(0,g.t)("Default URL to redirect to when accessing from the dataset list page. Accepts relative URLs such as")," ",(0,l.FD)(D.o.Text,{code:!0,children:["/superset/dashboard/","{id}","/"]})]}),control:(0,l.Y)(Y.A,{controlId:"default_endpoint"})}),(0,l.Y)(ed,{inline:!0,fieldKey:"filter_select_enabled",label:(0,g.t)("Autocomplete filters"),description:(0,g.t)("Whether to populate autocomplete filters options"),control:(0,l.Y)(C.A,{})}),ea&&(0,l.Y)(ed,{fieldKey:"fetch_values_predicate",label:(0,g.t)("Autocomplete query predicate"),description:(0,g.t)('When using "Autocomplete filters", this can be used to improve performance of the query fetching the values. Use this option to apply a predicate (WHERE clause) to the query selecting the distinct values from the table. Typically the intent would be to limit the scan by applying a relative time filter on a partitioned or indexed time-related field.'),control:(0,l.Y)($.A,{language:"sql",controlId:"fetch_values_predicate",minLines:5,resize:"vertical"})}),ea&&(0,l.Y)(ed,{fieldKey:"extra",label:(0,g.t)("Extra"),description:(0,g.t)('Extra data to specify table metadata. Currently supports metadata of the format: `{ "certification": { "certified_by": "Data Platform Team", "details": "This table is the source of truth." }, "warning_markdown": "This is a warning." }`.'),control:(0,l.Y)($.A,{controlId:"extra",language:"json",offerEditInModal:!1,resize:"vertical"})}),(0,l.Y)(tK,{datasource:W,onChange:e=>{eB(tw({},W,{editors:e}))}})]}),[W,eB,ea]),tt=(0,d.useCallback)(()=>(0,l.FD)(ec,{title:(0,g.t)("Advanced"),item:W,onChange:eB,children:[(0,l.Y)(ed,{fieldKey:"cache_timeout",label:(0,g.t)("Cache timeout"),description:(0,g.t)("The duration of time in seconds before the cache is invalidated. Set to -1 to bypass the cache."),control:(0,l.Y)(Y.A,{controlId:"cache_timeout"})}),(0,l.Y)(ed,{fieldKey:"offset",label:(0,g.t)("Hours offset"),control:(0,l.Y)(Y.A,{controlId:"offset"}),description:(0,g.t)("The number of hours, negative or positive, to shift the time column. This can be used to move UTC time to local time.")}),ea&&(0,l.Y)(ed,{fieldKey:"template_params",label:(0,g.t)("Template parameters"),description:(0,g.t)("A set of parameters that become available in the query using Jinja templating syntax"),control:(0,l.Y)(Y.A,{controlId:"template_params"})}),(0,l.Y)(ed,{inline:!0,fieldKey:"normalize_columns",label:(0,g.t)("Normalize column names"),description:(0,g.t)("Allow column names to be changed to case insensitive format, if supported (e.g. Oracle, Snowflake)."),control:(0,l.Y)(C.A,{})}),(0,l.Y)(ed,{inline:!0,fieldKey:"always_filter_main_dttm",label:(0,g.t)("Always filter main datetime column"),description:(0,g.t)("When the secondary temporal columns are filtered, apply the same filter to the main datetime column."),control:(0,l.Y)(C.A,{})})]}),[W,eB,ea]),tr=(0,d.useCallback)(()=>{var e,t,r,i,a,o,d,u,p,h,m,f,y,v;return(0,l.FD)("div",{children:[(0,l.FD)(tk,{children:[(0,l.Y)("span",{css:e=>(0,b.AH)`
              color: ${e.colorTextTertiary};
            `,role:"button",tabIndex:0,onClick:eN,children:eo?(0,l.Y)(R.F.UnlockOutlined,{iconSize:"xl",css:e=>(0,b.AH)`
                  margin: auto ${e.sizeUnit}px auto 0;
                `}):(0,l.Y)(R.F.LockOutlined,{iconSize:"xl",css:e=>({margin:`auto ${e.sizeUnit}px auto 0`})})}),!eo&&(0,l.Y)("div",{children:(0,g.t)("Click the lock to make changes.")}),eo&&(0,l.Y)("div",{children:(0,g.t)("Click the lock to prevent further changes.")})]}),(0,l.Y)("div",{css:e=>(0,b.AH)`
            margin-top: ${3*e.sizeUnit}px;
            display: flex;
            gap: ${4*e.sizeUnit}px;
          `,children:tR.map(e=>(0,l.Y)(c.s,{value:e.key,onChange:()=>eW(e.key),checked:e_===e.key,disabled:!eo,children:e.label},e.key))}),(0,l.Y)(P.c,{}),(0,l.FD)(ec,{item:W,onChange:eB,compact:!0,children:[e_===tP.virtual.key&&(0,l.Y)("div",{children:ea&&(0,l.FD)(l.FK,{children:[(0,l.FD)(j.Col,{xs:24,md:12,children:[(0,l.Y)(ed,{fieldKey:"databaseSelector",label:(0,g.t)("Virtual"),control:(0,l.Y)("div",{css:{marginTop:8},children:(0,l.Y)(Z.R,{db:(null==W?void 0:W.database)?{id:W.database.id,database_name:null!=(e=null!=(t=W.database.database_name)?t:W.database.name)?e:"",backend:W.database.backend}:null,catalog:W.catalog,schema:W.schema,onCatalogChange:e=>eo&&eK("catalog",e),onSchemaChange:e=>eo&&eK("schema",e),onDbChange:e=>eo&&eK("database",e),formMode:!1,handleError:n,readOnly:!eo})})}),(0,l.Y)("div",{css:{width:"calc(100% - 34px)",marginTop:-16},children:(0,l.Y)(ed,{fieldKey:"table_name",label:(0,g.t)("Name"),control:(0,l.Y)(Y.A,{controlId:"table_name",onChange:e=>{eK("table_name",e)},placeholder:(0,g.t)("Dataset name"),disabled:!eo})})})]}),(0,l.Y)(ed,{fieldKey:"sql",label:(0,g.t)("SQL"),description:(0,g.t)("When specifying SQL, the datasource acts as a view. Superset will use this statement as a subquery while grouping and filtering on the generated parent queries.If changes are made to your SQL query, columns in your dataset will be synced when saving the dataset."),control:(null==s?void 0:s.isLoading)?(0,l.FD)(l.FK,{children:[e3(),(0,l.Y)($.A,{hotkeys:[{name:"formatQuery",key:"ctrl+shift+f",descr:(0,g.t)("Format SQL query"),func:()=>{eZ()}}],language:"sql",offerEditInModal:!1,minLines:10,maxLines:1/0,readOnly:!eo,resize:"both"})]}):(0,l.Y)($.A,{css:e=>(0,b.AH)`
                            margin-top: ${3*e.sizeUnit}px;
                          `,hotkeys:[{name:"formatQuery",key:"ctrl+shift+f",descr:(0,g.t)("Format SQL query"),func:()=>{eZ()}}],language:"sql",offerEditInModal:!1,minLines:10,maxLines:1/0,readOnly:!eo,resize:"both"}),additionalControl:(0,l.FD)("div",{css:(0,b.AH)`
                          position: absolute;
                          right: 0;
                          top: 0;
                          z-index: 2;
                          display: flex;
                        `,children:[(0,l.Y)(q.$n,{disabled:null==s?void 0:s.isLoading,tooltip:(0,g.t)("Open SQL Lab in a new tab"),buttonStyle:"secondary",onClick:()=>{eX()},icon:(0,l.Y)(R.F.ExportOutlined,{iconSize:"s"})}),(0,l.Y)(q.$n,{disabled:null==s?void 0:s.isLoading,tooltip:(0,g.t)("Run query"),buttonStyle:"primary",onClick:()=>{eJ()},icon:(0,l.Y)(R.F.CaretRightFilled,{iconSize:"s"})})]})}),(null==s?void 0:s.queryResult)&&(0,l.FD)(l.FK,{children:[(0,l.FD)("div",{css:e=>(0,b.AH)`
                          margin-bottom: ${e.sizeUnit}px;
                        `,children:[(0,l.Y)("span",{css:e=>(0,b.AH)`
                            color: ${e.colorText};
                            font-size: ${e.fontSizeSM}px;
                          `,children:(0,g.t)("In this view you can preview the first 25 rows. ")}),e7(),(0,l.Y)("span",{css:e=>(0,b.AH)`
                            color: ${e.colorText};
                            font-size: ${e.fontSizeSM}px;
                          `,children:(0,g.t)(" to see details.")})]}),(0,l.Y)(tN,{data:null!=(r=null==s||null==(u=s.queryResult)?void 0:u.data)?r:[],queryId:null!=(i=null==s||null==(h=s.queryResult)||null==(p=h.query)?void 0:p.id)?i:"",orderedColumnKeys:null!=(a=null==s||null==(f=s.queryResult)||null==(m=f.columns)?void 0:m.map(e=>e.column_name))?a:[],expandedColumns:null==s||null==(v=s.queryResult)||null==(y=v.expanded_columns)?void 0:y.map(e=>e.column_name),height:300,allowHTML:!0})]}),(null==s?void 0:s.error)&&e8()]})}),e_===tP.physical.key&&(0,l.Y)(j.Col,{xs:24,md:12,children:ea&&(0,l.Y)(ed,{fieldKey:"tableSelector",label:(0,g.t)("Physical"),control:(0,l.Y)("div",{css:{marginTop:8},children:(0,l.Y)(w.Ay,{clearable:!1,database:W.database?{id:W.database.id,database_name:null!=(o=null!=(d=W.database.database_name)?d:W.database.name)?o:"",backend:W.database.backend}:null,handleError:n,catalog:W.catalog,schema:W.schema,tableValue:W.table_name,onCatalogChange:eo?e=>eK("catalog",e):void 0,onSchemaChange:eo?e=>eK("schema",e):void 0,onDbChange:eo?e=>eK("database",e):void 0,onTableSelectChange:eo?e=>eK("table_name",e):void 0,readOnly:!eo})}),description:(0,g.t)("The pointer to a physical table (or view). Keep in mind that the chart is associated to this Superset logical table, and this logical table points the physical table referenced here.")})})]})]})},[eN,eo,e_,eW,W,eB,ea,n,eK,s,e3,eZ,eX,eJ,e7,e8]),tn=(0,d.useCallback)(()=>er.length>0?(0,l.Y)(v.F,{css:e=>({marginBottom:4*e.sizeUnit}),type:"error",message:(0,l.Y)(l.FK,{children:er.map(e=>(0,l.Y)("div",{children:e},e))})}):null,[er]),tl=(0,d.useCallback)(()=>{let{metrics:e}=W,t=(null==e?void 0:e.length)?e4(e):[];return(0,l.FD)("div",{children:[(0,l.Y)(j.Input.Search,{placeholder:(0,g.t)("Search metrics by key or label"),value:eT,onChange:e=>eM(e.target.value),style:{marginBottom:16,width:300},allowClear:!0}),(0,l.Y)(eg,{tableColumns:["metric_name","verbose_name","expression"],sortColumns:["metric_name","verbose_name","expression"],filterTerm:eT,filterFields:["metric_name","verbose_name"],columnLabels:{metric_name:(0,g.t)("Metric Key"),verbose_name:(0,g.t)("Label"),expression:(0,g.t)("SQL expression")},columnLabelTooltips:{metric_name:(0,g.t)("This field is used as a unique identifier to attach the metric to charts. It is also used as the alias in the SQL query.")},pagination:{pageSize:25,showSizeChanger:!0,pageSizeOptions:[10,25,50,100]},expandFieldset:(0,l.Y)(tq,{children:(0,l.FD)(ec,{compact:!0,children:[(0,l.Y)(ed,{fieldKey:"expression",label:(0,g.t)("SQL expression"),control:(0,l.Y)($.A,{language:"sql",offerEditInModal:!1,minLines:3,maxLines:25,debounceDelay:300})}),(0,l.Y)(ed,{fieldKey:"description",label:(0,g.t)("Description"),control:(0,l.Y)(Y.A,{controlId:"description",placeholder:(0,g.t)("Description")})}),(0,l.Y)(ed,{fieldKey:"d3format",label:(0,g.t)("D3 format"),control:(0,l.Y)(Y.A,{controlId:"d3format",placeholder:"%y/%m/%d"})}),(0,l.Y)(ed,{fieldKey:"currency",label:(0,g.t)("Metric currency"),control:(0,l.Y)(F.A,{onChange:()=>{},currencySelectOverrideProps:{placeholder:(0,g.t)("Select or type currency symbol")},symbolSelectAdditionalStyles:(0,b.AH)`
                        max-width: 30%;
                      `})}),(0,l.Y)(ed,{label:(0,g.t)("Certified by"),fieldKey:"certified_by",description:(0,g.t)("Person or group that has certified this metric"),control:(0,l.Y)(Y.A,{controlId:"certified_by",placeholder:(0,g.t)("Certified by")})}),(0,l.Y)(ed,{label:(0,g.t)("Certification details"),fieldKey:"certification_details",description:(0,g.t)("Details of the certification"),control:(0,l.Y)(Y.A,{controlId:"certification_details",placeholder:(0,g.t)("Certification details")})}),(0,l.Y)(ed,{label:(0,g.t)("Warning"),fieldKey:"warning_markdown",description:(0,g.t)("Optional warning about use of this metric"),control:(0,l.Y)($.A,{controlId:"warning_markdown",language:"markdown",offerEditInModal:!1,resize:"vertical"})})]})}),collection:t,allowAddItem:!0,onChange:e=>eK("metrics",e),itemGenerator:()=>({metric_name:(0,g.t)("<new metric>"),verbose_name:"",expression:""}),itemCellProps:{expression:()=>({style:{maxWidth:"240px",overflow:"hidden"}})},itemRenderers:{metric_name:(e,t,r,n)=>(0,l.FD)(t$,{children:[n.is_certified&&(0,l.Y)(E.T,{certifiedBy:n.certified_by,details:n.certification_details}),n.warning_markdown&&(0,l.Y)(S.A,{warningMarkdown:n.warning_markdown}),(0,l.Y)(T.z,{canEdit:!0,title:e,onSaveTitle:t,maxWidth:300})]}),verbose_name:(e,t)=>(0,l.Y)(Y.A,{value:e,onChange:t}),expression:e=>(0,l.Y)(H.m,{title:(0,g.t)("Expand row to edit"),children:(0,l.Y)(D.o.Text,{code:!0,ellipsis:!0,css:(0,b.AH)`
                    cursor: default;
                  `,children:e})}),description:(e,t,r)=>(0,l.Y)(tB,{label:r,formElement:(0,l.Y)(Y.A,{value:e,onChange:t})}),d3format:(e,t,r)=>(0,l.Y)(tB,{label:r,formElement:(0,l.Y)(Y.A,{value:e,onChange:t})})},allowDeletes:!0,stickyHeader:!0})]})},[W,e4,eK,eT]),ti=(0,d.useMemo)(()=>{var e;return(null==(e=W.metrics)?void 0:e.length)?e4(W.metrics):[]},[W.metrics,e4]),ta=(0,d.useCallback)(()=>{let{spatials:e,all_cols:t}=W;return{key:"SPATIAL",label:(0,l.Y)(tj,{collection:e,title:(0,g.t)("Spatial")}),children:(0,l.Y)(eg,{tableColumns:["name","config"],sortColumns:["name"],onChange:e=>eK("spatials",e),itemGenerator:()=>({name:(0,g.t)("<new spatial>"),type:(0,g.t)("<no type>"),config:null}),collection:null!=e?e:[],allowDeletes:!0,itemRenderers:{name:(e,t)=>(0,l.Y)(T.z,{canEdit:!0,title:e,onSaveTitle:t}),config:(e,r)=>(0,l.Y)(ee.A,{value:e,onChange:r,choices:null==t?void 0:t.map(e=>[e,e])})}})}},[W,eK]),to=(0,d.useMemo)(()=>{var e;return[{key:tL,label:(0,g.t)("Source"),children:tr()},{key:"METRICS",label:(0,l.Y)(tj,{collection:ti,title:(0,g.t)("Metrics")}),children:tl()},{key:"COLUMNS",label:(0,l.Y)(tj,{collection:eu,title:(0,g.t)("Columns")}),children:(0,l.FD)(tA,{children:[e9(),(0,l.Y)(tE,{children:(0,g.t)("Column Settings")}),(0,l.Y)(tI,{children:(0,l.Y)(tM,{children:(0,l.FD)(q.$n,{buttonSize:"small",buttonStyle:"tertiary",onClick:e0,className:"sync-from-source",disabled:eo,children:[(0,l.Y)(R.F.DatabaseOutlined,{iconSize:"m"}),(0,g.t)("Sync columns from source")]})})}),(0,l.Y)(j.Input.Search,{placeholder:(0,g.t)("Search columns by name"),value:eO,onChange:e=>eU(e.target.value),style:{marginBottom:16,width:300},allowClear:!0}),(0,l.Y)(tH,{className:"columns-table",columns:eu,filterTerm:eO,filterFields:["column_name"],onColumnsChange:e=>eG({databaseColumns:e})}),ex&&(0,l.Y)(O.R,{})]})},{key:"CALCULATED_COLUMNS",label:(0,l.Y)(tj,{collection:eh,title:(0,g.t)("Calculated columns")}),children:(0,l.FD)(tA,{children:[e9(),(0,l.Y)(tE,{children:(0,g.t)("Column Settings")}),(0,l.Y)(j.Input.Search,{placeholder:(0,g.t)("Search calculated columns by name"),value:eL,onChange:e=>eR(e.target.value),style:{marginBottom:16,width:300},allowClear:!0}),(0,l.Y)(tH,{columns:eh,filterTerm:eL,filterFields:["column_name"],onColumnsChange:e=>eG({calculatedColumns:e}),columnLabelTooltips:{column_name:(0,g.t)("This field is used as a unique identifier to attach the calculated dimension to charts. It is also used as the alias in the SQL query.")},editableColumnName:!0,showExpression:!0,allowAddItem:!0,allowEditDataType:!0,itemGenerator:()=>({column_name:(0,g.t)("<new column>"),filterable:!0,groupby:!0,expression:(0,g.t)("<enter SQL expression here>"),expanded:!0})})]})},{key:"USAGE",label:(0,l.Y)(tj,{collection:{length:eD},title:(0,g.t)("Usage")}),children:(0,l.Y)(tA,{children:(0,l.Y)(eS,{datasourceId:null!=(e=W.id)?e:0,charts:ez,totalCount:eD,onFetchCharts:e1,addDangerToast:n})})},...(0,p.G7)(p.TO.DatasetFolders)?[{key:"FOLDERS",label:(0,l.Y)(tj,{count:eb,title:(0,g.t)("Folders")}),children:(0,l.Y)(tv,{folders:ef,metrics:ti,columns:[...eu,...eh],onChange:eQ})}]:[],{key:"SETTINGS",label:(0,g.t)("Settings"),children:(0,l.FD)(j.Row,{gutter:16,children:[(0,l.Y)(j.Col,{xs:24,md:12,children:(0,l.Y)(tq,{children:te()})}),(0,l.Y)(j.Col,{xs:24,md:12,children:(0,l.Y)(tq,{children:tt()})})]})}]},[tr,ti,tl,eu,e9,e0,eo,W,eG,ex,eh,eO,eL,eD,ez,e1,n,ef,eb,eQ,te,tt,ta]);return(0,l.FD)(tY,{"data-test":"datasource-editor",children:[tn(),(0,l.Y)(v.F,{css:e=>({marginBottom:4*e.sizeUnit}),type:"warning",message:(0,l.FD)(l.FK,{children:[" ",(0,l.FD)("strong",{children:[(0,g.t)("Be careful.")," "]}),(0,g.t)("Changing these settings will affect all charts using this dataset, including charts owned by other people.")]})}),(0,l.Y)(t_,{id:"table-tabs","data-test":"edit-dataset-tabs",onChange:e2,defaultActiveKey:eY,items:to})]})}))},37350(e,t,r){var n=r(2445),l=r(64260),i=r(27124),a=r(85614),o=r(68292),d=r(48158),s=r(13512),c=r(60685),u=r(38955),p=r(41947),h=r(17402),m=r(7070),f=r(8251);let g=a.styled.div`
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
`,y=a.styled.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,b=({table:e})=>{let{value:t,type:r,extra:l}=e;return(0,n.FD)(y,{title:t,children:["view"===r?(0,n.Y)(c.F.FunctionOutlined,{iconSize:"m"}):"materialized_view"===r?(0,n.Y)(c.F.ProfileOutlined,{iconSize:"m"}):(0,n.Y)(c.F.TableOutlined,{iconSize:"m"}),(null==l?void 0:l.certification)&&(0,n.Y)(d.T,{certifiedBy:l.certification.certified_by,details:l.certification.details,size:"l"}),(null==l?void 0:l.warning_markdown)&&(0,n.Y)(h.A,{warningMarkdown:l.warning_markdown,size:"l",marginRight:4}),t]})};r.d(t,["Ay",0,({database:e,emptyState:t,formMode:r=!1,getDbList:a,handleError:d,isDatabaseSelectEnabled:c=!0,onDbChange:h,onCatalogChange:y,onSchemaChange:v,readOnly:x=!1,onEmptyResults:S,catalog:w,schema:C,tableSelectMode:Y="single",tableValue:$,onTableSelectChange:_,customTableOptionLabelRenderer:F})=>{let k,I,z,A,{addSuccessToast:D}=(0,m.Yf)(),[E,T]=(0,l.useState)(w),[M,O]=(0,l.useState)(C),[U,L]=(0,l.useState)(void 0),[R,P]=(0,l.useState)(null),{currentData:j,isFetching:q,refetch:H}=(0,f.ty)({dbId:null==e?void 0:e.id,catalog:E,schema:M,supportsSchemas:null==e?void 0:e.supports_schemas,onSuccess:(e,t)=>{P(null),t&&D((0,i.t)("List updated"))},onError:e=>{if(null==e?void 0:e.errors){var t,r;P(null!=(t=null==e||null==(r=e.errors)?void 0:r[0])?t:null)}else d((null==e?void 0:e.error)||(0,i.t)("There was an error loading the tables"))}}),B=(0,l.useMemo)(()=>j?j.options.map(e=>({value:e.value,label:F?F(e):(0,n.Y)(b,{table:e}),text:e.value})):[],[j,F]),K=null==j?void 0:j.hasMore;(0,l.useEffect)(()=>{void 0===e&&(T(void 0),O(void 0),L(void 0))},[e,Y]),(0,l.useEffect)(()=>{"single"===Y?L(B.find(e=>e.value===$)):L((null==B?void 0:B.filter(e=>e&&(null==$?void 0:$.includes(e.value))))||[])},[B,$,Y]);let N=(0,l.useMemo)(()=>(e,t)=>{let r=e.trim().toLowerCase(),{value:n}=t;return n.toLowerCase().includes(r)},[]);return(0,n.FD)(g,{children:[(0,n.Y)(s.RA,{db:e,emptyState:t,formMode:r,getDbList:a,handleError:d,onDbChange:x?void 0:e=>{h&&h(e),T(void 0),O(void 0),L("single"===Y?void 0:[])},onEmptyResults:S,onCatalogChange:x?void 0:e=>{T(e),y&&y(e),O(void 0),L("single"===Y?void 0:[])},catalog:E,onSchemaChange:x?void 0:e=>{O(e),v&&v(e),L("single"===Y?void 0:[])},schema:M,isDatabaseSelectEnabled:c&&!x,readOnly:x}),!r&&(0,n.Y)("div",{className:"divider"}),R?(0,n.Y)(s.x6,{error:R,source:"crud"}):null,(k=x||(null==e?void 0:e.supports_schemas)!==!1&&!M,I=(0,i.t)("Table"),z=(0,n.Y)(o.A,{ariaLabel:(0,i.t)("Select table or type to search tables"),disabled:k,filterOption:N,labelInValue:!0,loading:q,name:"select-table",onChange:t=>{L(t),(M||(null==e?void 0:e.supports_schemas)===!1)&&(null==_||_(Array.isArray(t)?t.map(e=>null==e?void 0:e.value):null==t?void 0:t.value,E,M))},options:B,placeholder:(0,i.t)("Select table or type to search tables"),showSearch:!0,mode:Y,value:U,allowClear:"multiple"===Y,allowSelectAll:!1}),A=!x&&(0,n.Y)(p.A,{onClick:()=>H(),tooltipContent:(0,i.t)("Force refresh table list")}),(0,n.FD)(n.FK,{children:[(0,n.Y)(u.q,{children:I}),(0,n.FD)("div",{className:"section",children:[(0,n.Y)("span",{className:"select",children:z}),(0,n.Y)("span",{className:"refresh",children:A})]}),K&&!k&&(0,n.Y)("div",{className:"table-length",children:(0,i.t)("Some tables are not shown. Refine your search.")})]}))]})},"cs",0,b])},36320(e,t,r){var n=r(2445),l=r(27124),i=r(85614),a=r(17437),o=r(33296),d=r(8563),s=r(80967),c=r(60685);let u=(0,a.AH)`
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
`;r.d(t,["A",0,({name:e,label:t,description:r,validationErrors:p=[],renderTrigger:h=!1,rightNode:m,leftNode:f,onClick:g,hovered:y=!1,tooltipOnClick:b=()=>{},warning:v,danger:x})=>{let S=(0,i.useTheme)();return t?(0,n.FD)("div",{className:"ControlHeader","data-test":`${e}-header`,children:[(0,n.Y)("div",{className:"pull-left",children:(0,n.FD)(o.l,{css:e=>(0,a.AH)`
            margin-bottom: ${.5*e.sizeUnit}px;
            position: relative;
            font-size: ${e.fontSizeSM}px;
            overflow: visible;
            padding-bottom: 0.1em;
          `,htmlFor:e,children:[f&&(0,n.FD)("span",{children:[f," "]}),(0,n.Y)("span",{role:"button",tabIndex:0,onClick:g,style:{cursor:g?"pointer":""},children:t})," ",v&&(0,n.FD)("span",{children:[(0,n.Y)(d.m,{id:"error-tooltip",placement:"top",title:v,children:(0,n.Y)(c.F.WarningOutlined,{iconColor:S.colorWarning,css:(0,a.AH)`
                    vertical-align: baseline;
                  `,iconSize:"s"})})," "]}),x&&(0,n.FD)("span",{children:[(0,n.Y)(d.m,{id:"error-tooltip",placement:"top",title:x,children:(0,n.Y)(c.F.CloseCircleOutlined,{iconColor:S.colorErrorText,iconSize:"s"})})," "]}),(null==p?void 0:p.length)>0&&(0,n.FD)("span",{"data-test":"error-tooltip",css:(0,a.AH)`
                cursor: pointer;
              `,children:[(0,n.Y)(d.m,{id:"error-tooltip",placement:"top",title:null==p?void 0:p.join(" "),children:(0,n.Y)(c.F.ExclamationCircleOutlined,{iconColor:S.colorError})})," "]}),y?(0,n.FD)("span",{css:()=>(0,a.AH)`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${S.sizeUnit}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[r&&(0,n.FD)("span",{children:[(0,n.Y)(d.m,{id:"description-tooltip",title:r,placement:"top",children:(0,n.Y)(c.F.InfoCircleOutlined,{css:u,onClick:b})})," "]}),h&&(0,n.FD)("span",{children:[(0,n.Y)(s.I,{label:(0,l.t)("bolt"),tooltip:(0,l.t)("Changing this control takes effect instantly"),placement:"top",type:"notice"})," "]})]}):null]})}),m&&(0,n.Y)("div",{className:"pull-right",children:m}),(0,n.Y)("div",{className:"clearfix"})]}):null}])},90809(e,t,r){var n=r(2445),l=r(64260),i=r(43627),a=r(74979),o=r(27124),d=r(85614),s=r(17437),c=r(60685),u=r(8563),p=r(80967),h=r(79001);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let f=d.styled.div`
  margin-bottom: ${({theme:e})=>e.sizeUnit}px;
  :last-child {
    margin-bottom: 0;
  }
`,g=d.styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  height: ${({theme:e})=>6*e.sizeUnit}px;
  background-color: ${({theme:e})=>e.colorBgLayout};
  border-radius: 3px;
  cursor: ${({withCaret:e})=>e?"pointer":"default"};
  :hover {
    background-color: ${({theme:e})=>e.colorPrimaryBgHover};
  }
`,y=d.styled.div`
  ${({theme:e})=>`
    display: flex;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    white-space: nowrap;
    padding-left: ${e.sizeUnit}px;
    svg {
      margin-right: ${e.sizeUnit}px;
    }
    .type-label {
      margin-right: ${2*e.sizeUnit}px;
      margin-left: ${e.sizeUnit}px;
      font-weight: ${e.fontWeightNormal};
      width: auto;
    }
    .option-label {
      display: inline;
    }
  `}
`,b=d.styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,v=d.styled.div`
  height: 100%;
  border-left: solid 1px ${({theme:e})=>e.colorSplit};
  margin-left: auto;
`,x=d.styled.div`
  height: auto;
  width: ${({theme:e})=>6*e.sizeUnit}px;
  border-right: solid 1px ${({theme:e})=>e.colorBorder};
  cursor: pointer;
`,S=(0,d.styled)(p.I)`
  margin: 0 ${({theme:e})=>e.sizeUnit}px;
`,w=d.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,C=d.styled.div`
  padding: ${({theme:e})=>e.sizeUnit}px;
  border: solid 1px ${({theme:e})=>e.colorSplit};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,Y=(0,s.i7)`
  0% {
    right: 100%;
  }
  50% {
    left: 4px;
  }
  90% {
    right: 4px;
  }
  100% {
    left: 100%;
  }
`,$=d.styled.div`
  ${({theme:e,isLoading:t,canDrop:r,isDragging:n,isOver:l})=>`
  position: relative;
  padding: ${e.sizeUnit}px;
  border: ${!t&&n?`dashed 1px ${r?e.colorSplit:e.colorErrorBgHover}`:`solid 1px ${t&&n?e.colorWarningBgHover:e.colorBorder}`};
  border-radius: ${e.borderRadius}px;
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    border-radius: ${e.borderRadius}px;
  }
  &:before {
    display: ${n||t?"block":"none"};
    background-color: ${r?e.colorPrimary:e.colorErrorBgHover};
    z-index: 10;
    opacity: 10%;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
  }
  &:after {
    display: ${t||r&&l?"block":"none"};
    background-color: ${t?e.colorFillTertiary:e.colorPrimary};
    z-index: 11;
    opacity: 35%;
    top: ${-e.sizeUnit}px;
    right: ${-e.sizeUnit}px;
    bottom: ${-e.sizeUnit}px;
    left: ${-e.sizeUnit}px;
    cursor: ${t?"wait":"auto"};
  }
  `}

  &:before {
    ${({theme:e,isLoading:t})=>t&&(0,s.AH)`
        animation: ${Y} 2s ease-in infinite;
        background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
        background-size: 100% ${e.sizeUnit/2}px;
        top: auto;
        right: ${e.sizeUnit}px;
        left: ${e.sizeUnit}px;
        bottom: -${e.sizeUnit/2}px;
        height: ${e.sizeUnit/2}px;
      `};
  }
`,_=d.styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({theme:e})=>6*e.sizeUnit}px;
  padding-left: ${({theme:e})=>e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorTextSecondary};
  border: dashed 1px ${({theme:e})=>e.colorSplit};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  cursor: ${({cancelHover:e})=>e?"inherit":"pointer"};

  :hover {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colorFillSecondary};
  }

  :active {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colorFillTertiary};
  }
  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,F=d.styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>4*e.sizeUnit}px;
  width: ${({theme:e})=>4*e.sizeUnit}px;
  padding: 0;
  background-color: ${({theme:e})=>e.colorPrimaryText};
  border: none;
  border-radius: 2px;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    background-color: ${({theme:e})=>e.colorBgContainerDisabled};
  }
`;r.d(t,["B3",0,w,"Bt",0,v,"Gh",0,x,"JG",0,_,"JU",0,y,"Px",0,e=>{let t,{label:r,savedMetric:p,adhocMetric:w,onRemove:C,onMoveLabel:Y,onDropLabel:$,withCaret:_,isFunction:F,type:k,index:I,isExtra:z,datasourceWarningMessage:A,tooltipTitle:D,multi:E=!0}=e,T=function(e,t){if(null==e)return{};var r,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(t.indexOf(r=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(e,["label","savedMetric","adhocMetric","onRemove","onMoveLabel","onDropLabel","withCaret","isFunction","type","index","isExtra","datasourceWarningMessage","tooltipTitle","multi"]),M=(0,d.useTheme)(),O=(0,l.useRef)(null),U=null==p?void 0:p.metric_name,L=(0,l.useMemo)(()=>`sortable-${k}-${I}`,[k,I]),{attributes:R,listeners:P,setNodeRef:j,transform:q,transition:H,isDragging:B}=(0,i.gl)({id:L,disabled:!E,animateLayoutChanges:()=>!1,data:{type:k,dragIndex:I,onMoveLabel:Y,onDropLabel:$,value:(null==p?void 0:p.metric_name)?p:w}}),K={transform:a.Ks.Translate.toString(q),transition:H,opacity:B?.5:1};return(0,n.Y)(f,m({ref:j,style:K},R,P,{children:(0,n.FD)(g,m({withCaret:_,"data-test":"option-label"},T,{css:(0,s.AH)`
        text-align: center;
      `,children:[(0,n.Y)(x,{role:"button","data-test":"remove-control-button",onClick:C,tabIndex:0,children:(0,n.Y)(c.F.CloseOutlined,{iconSize:"m",iconColor:M.colorIcon,css:(0,s.AH)`
            vertical-align: sub;
          `})}),(0,n.FD)(y,{"data-test":"control-label",children:[F&&(0,n.Y)(c.F.FunctionOutlined,{iconSize:"m"}),(t=!B&&"string"==typeof r&&D&&r&&D!==r||!B&&O&&O.current&&O.current.scrollWidth>O.current.clientWidth,p&&U?(0,n.Y)(h.b,{metric:p,labelRef:O,shouldShowTooltip:!B}):t?(0,n.Y)(u.m,{title:D||r,children:(0,n.Y)(b,{ref:O,children:r})}):(0,n.Y)(b,{ref:O,children:r}))]}),(!!A||z)&&(0,n.Y)(S,{type:"warning",placement:"top",tooltip:A||(0,o.t)(`
                This filter was inherited from the dashboard's context.
                It won't be saved when saving the chart.
              `)}),_&&(0,n.Y)(v,{children:(0,n.Y)(c.F.RightOutlined,{iconSize:"m",css:(0,s.AH)`
              margin: ${M.sizeUnit}px;
            `,iconColor:M.colorIcon})})]}))}))},"XB",0,F,"a2",0,g,"f$",0,$,"p6",0,C,"yJ",0,f])},97616(e,t,r){var n=r(2445),l=r(64260),i=r(64741),a=r(65471),o=r(23918),d=r(29138),s=r(97887),c=r(8563),u=r(27124),p=r(85614);r(15850);var h=r(36320);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,["A",0,function(e){var t;let{name:r,onChange:f=()=>{},initialValue:g,height:y=250,minLines:b=3,maxLines:v=10,offerEditInModal:x=!0,language:S,aboveEditorSection:w,readOnly:C=!1,resize:Y=null,textAreaStyles:$={},tooltipOptions:_={},hotkeys:F=[],debounceDelay:k=null,"aria-required":I,value:z}=e,A=function(e,t){if(null==e)return{};var r,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(t.indexOf(r=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(e,["name","onChange","initialValue","height","minLines","maxLines","offerEditInModal","language","aboveEditorSection","readOnly","resize","textAreaStyles","tooltipOptions","hotkeys","debounceDelay","aria-required","value"]),D=(0,p.useTheme)(),E=(0,l.useRef)(null);(0,l.useEffect)(()=>{k&&f?(E.current&&E.current.cancel(),E.current=(0,i.A)(f,k)):(E.current&&E.current.cancel(),E.current=null)},[f,k]),(0,l.useEffect)(()=>()=>{E.current&&E.current.flush()},[]);let T=(0,l.useCallback)(e=>{let t="object"==typeof e?e.target.value:e;E.current?E.current(t):null==f||f(t)},[f]),M=(0,l.useCallback)(e=>{null==F||F.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:t.func})})},[F]),O=(0,l.useCallback)((e=!1)=>{let t=e?40:b||12;if(S){let l=m({border:(null==D?void 0:D.colorBorder)?`1px solid ${D.colorBorder}`:void 0,minHeight:`${t}em`,width:"auto"},$);Y&&(l.resize=Y,l.overflow="auto"),C&&(l.backgroundColor=null==D?void 0:D.colorBgMask);let i=(0,n.Y)("div",{children:(0,n.Y)(o.S9,m({mode:S,style:l,minLines:t,maxLines:e?1e3:v,editorProps:{$blockScrolling:!0},onLoad:M,defaultValue:null!=g?g:z,readOnly:C},A,{onChange:T}),r)});return _&&Object.keys(_).length>0?(0,n.Y)(c.m,m({},_,{children:i})):i}let l=(0,n.Y)("div",{children:(0,n.Y)(a.Input.TextArea,{placeholder:(0,u.t)("textarea"),onChange:T,defaultValue:null!=g?g:z,disabled:C,style:{height:y},"aria-required":I})});return _&&Object.keys(_).length>0?(0,n.Y)(c.m,m({},_,{children:l})):l},[b,v,S,D,$,Y,C,M,g,z,r,A,T,_,y,I]),U=(0,l.useMemo)(()=>(0,n.Y)(h.A,m({name:r},A)),[r,A]),L=(0,l.useMemo)(()=>(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{children:w}),O(!0)]}),[w,O]);return(0,n.FD)("div",{children:[U,O(),x&&(0,n.Y)(s.g,{modalTitle:U,triggerNode:(0,n.Y)(d.$n,{buttonSize:"small",style:{marginTop:null!=(t=null==D?void 0:D.sizeUnit)?t:4},children:(0,u.t)("Edit %s in modal",S)}),modalBody:L,responsive:!0})]})}])},58414(e,t,r){r.d(t,{wW:()=>i,SM:()=>a,el:()=>l});var n=r(73815);let l=new Map,i=((e,t,r=(...e)=>JSON.stringify([...e]))=>(...n)=>{let l=r(...n);if(t.has(l))return t.get(l);let i=e(...n);return t.set(l,i),i})(n.A.get,l,({endpoint:e})=>e||"");function a(e){if(null==e||""===e)return;let t=String(e);l.forEach((e,r)=>{for(let e of[`/api/v1/dataset/${t}`,`/api/v1/dataset/${t}/`,`/api/v1/dataset/${t}?`])if(r.includes(e)){let t=r.substring(r.indexOf(e)+e.length);if(e.endsWith("/")||e.endsWith("?")||""===t||t.startsWith("/")||t.startsWith("?")){l.delete(r);break}}})}}}]);