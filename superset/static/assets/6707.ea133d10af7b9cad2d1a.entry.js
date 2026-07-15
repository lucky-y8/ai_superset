"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6707],{35630(t,e,n){n.d(e,{p:()=>i});var r=n(64260);function i(t,e={}){let{enabled:n=!0,errorPrefix:a="Invalid JSON"}=e;return(0,r.useMemo)(()=>{if(!n||!(null==t?void 0:t.trim()))return[];try{return JSON.parse(t),[]}catch(i){let t=i.message||"syntax error",e=0,n=0,r=t.match(/\(line (\d+) column (\d+)\)/);return r&&(e=parseInt(r[1],10)-1,n=parseInt(r[2],10)-1),[{type:"error",row:e,column:n,text:`${a}: ${t}`}]}},[n,t,a])}},79592(t,e,n){var r=n(2445),i=n(65471);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let o=Object.assign(t=>{let{padded:e}=t,n=function(t,e){if(null==t)return{};var n,r,i={},a=Object.getOwnPropertyNames(t);for(r=0;r<a.length;r++)!(e.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n]);return i}(t,["padded"]);return(0,r.Y)(i.Card,a({},n,{css:t=>({".ant-card-body":{padding:e?4*t.sizeUnit:t.sizeUnit}})}))},{Meta:i.Card.Meta});n.d(e,["Z",0,o])},2404(t,e,n){n.d(e,{s:()=>l});var r=n(2445),i=n(85614),a=n(17437),o=n(90617),s=n(60685);let l=({title:t,subtitle:e,validateCheckStatus:n,testId:l})=>{let d=(0,i.useTheme)();return(0,r.FD)("div",{"data-test":l,children:[(0,r.FD)(o.o.Title,{css:(0,a.AH)`
          && {
            margin-top: 0;
            margin-bottom: ${d.sizeUnit/2}px;
            font-size: ${d.fontSizeLG}px;
          }
        `,children:[t," ",void 0!==n&&(n?(0,r.Y)(s.F.CheckCircleOutlined,{iconColor:d.colorSuccess}):(0,r.Y)(s.F.ExclamationCircleOutlined,{iconColor:d.colorError}))]}),(0,r.Y)(o.o.Paragraph,{css:(0,a.AH)`
          margin: 0;
          font-size: ${d.fontSizeSM}px;
          color: ${d.colorTextDescription};
        `,children:e})]})}},57832(t,e,n){var r=n(2445),i=n(65471);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let o=Object.assign(function(t){return(0,r.Y)(i.Form,a({},t))},{useForm:i.Form.useForm,Item:i.Form.Item,List:i.Form.List,ErrorList:i.Form.ErrorList,Provider:i.Form.Provider});n.d(e,["l",0,o])},93225(t,e,n){var r=n(65471),i=n(85614);let a=(0,i.styled)(r.Form.Item)`
  ${({theme:t})=>`
    &.ant-form-item > .ant-row > .ant-form-item-label {
      padding-bottom: ${t.paddingXXS}px;
    }
    .ant-form-item-label {
      & > label {
        font-size: ${t.fontSizeSM}px;
        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
          &::before {
            display: none;
          }
          &::after {
            display: inline-block;
            visibility: visible;
            color: ${t.colorError};
            font-size: ${t.fontSizeSM}px;
            content: '*';
          }
        }
      }
    }
    .ant-form-item-extra {
      margin-top: ${t.sizeUnit}px;
      font-size: ${t.fontSizeSM}px;
    }
  `}
`;n.d(e,["e",0,a])},34835(t,e,n){n.d(e,{M:()=>$});var r=n(2445),i=n(27124),a=n(85614),o=n(60685),s=n(29138),l=n(68447),d=n(8563),p=n(80967),c=n(65471),b=n(33296),u=n(93225);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let f=(0,a.styled)(c.Input)`
  margin: ${({theme:t})=>`${t.sizeUnit}px 0 ${2*t.sizeUnit}px`};
`,g=(0,a.styled)(c.Input.TextArea)`
  margin: ${({theme:t})=>`${t.sizeUnit}px 0 ${2*t.sizeUnit}px`};
`,h=(0,a.styled)(c.Input.Password)`
  margin: ${({theme:t})=>`${t.sizeUnit}px 0 ${2*t.sizeUnit}px`};
`,y=(0,a.styled)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:t})=>3*t.sizeUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,v=(0,a.styled)(b.l)`
  margin-bottom: 0;
`,$=t=>{let{label:e,validationMethods:n,errorMessage:a,helpText:c,required:b=!1,hasTooltip:$=!1,tooltipText:x,id:O,className:z,visibilityToggle:w,get_url:S,description:F,isValidating:j=!1,renderAsTextArea:k,textAreaCss:P}=t,T=function(t,e){if(null==t)return{};var n,r,i={},a=Object.getOwnPropertyNames(t);for(r=0;r<a.length;r++)!(e.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n]);return i}(t,["label","validationMethods","errorMessage","helpText","required","hasTooltip","tooltipText","id","className","visibilityToggle","get_url","description","isValidating","renderAsTextArea","textAreaCss"]),U=!!a;return(0,r.FD)(y,{className:z,children:[(0,r.FD)(l.s,{align:"center",children:[(0,r.Y)(v,{htmlFor:O,required:b,children:e}),$&&(0,r.Y)(p.I,{tooltip:`${x}`})]}),(0,r.FD)(u.e,{validateTrigger:Object.keys(n),validateStatus:j?"validating":U?"error":"success",help:a||c,hasFeedback:j||!!U,children:[w||"password"===T.name?(0,r.Y)(h,m({},T,n,{iconRender:t=>t?(0,r.Y)(d.m,{title:(0,i.t)("Hide password."),children:(0,r.Y)(o.F.EyeInvisibleOutlined,{iconSize:"m"})}):(0,r.Y)(d.m,{title:(0,i.t)("Show password."),children:(0,r.Y)(o.F.EyeOutlined,{iconSize:"m","data-test":"icon-eye"})}),role:"textbox"})):k?(0,r.Y)(g,m({css:P},T,n)):(0,r.Y)(f,m({},T,n)),S&&F?(0,r.FD)(s.$n,{type:"link",htmlType:"button",onClick:()=>(window.open(S),!0),children:["Get ",F]}):(0,r.Y)("br",{})]})]})}},89920(t,e,n){var r=n(2445),i=n(85614),a=n(17437),o=n(65471),s=n(60685);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let d=t=>{let{animated:e=!1,allowOverflow:n=!0,contentHeight:i="100%",fullHeight:s=!1,tabBarStyle:d,contentStyle:p,contentPadding:c}=t,b=function(t,e){if(null==t)return{};var n,r,i={},a=Object.getOwnPropertyNames(t);for(r=0;r<a.length;r++)!(e.indexOf(n=a[r])>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n]);return i}(t,["animated","allowOverflow","contentHeight","fullHeight","tabBarStyle","contentStyle","contentPadding"]);return(0,r.Y)(o.Tabs,l({animated:e},b,{tabBarStyle:d,css:t=>(0,a.AH)`
      overflow: ${n?"visible":"hidden"};
      ${s&&"height: 100%;"}

      .ant-tabs-body-holder {
        overflow: ${n?"visible":"auto"};
        ${s&&"height: 100%;"}
        ${i&&`height: ${"number"==typeof i?`${i}px`:i};`}
        ${c}
      }
      .ant-tabs-body {
        ${s&&"height: 100%;"}
      }
      .ant-tabs-content {
        ${s&&"height: 100%;"}
        ${p}
      }
      .ant-tabs-nav {
        margin: 0;
      }
      .ant-tabs-nav-wrap {
        ${!(d&&"paddingLeft"in d)?`padding: 0 ${4*t.sizeUnit}px;`:""}
      }
      .ant-tabs-tab {
        flex: 1 1 auto;

        .short-link-trigger.btn {
          padding: 0 ${t.sizeUnit}px;
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
        font-size: ${t.fontSizeSM}px;
        text-align: center;
        user-select: none;
        .required {
          margin-left: ${t.sizeUnit/2}px;
          color: ${t.colorError};
        }
        &:focus-visible {
          box-shadow: none;
        }
      }
    `}))},p=(0,i.styled)(o.Tabs.TabPane)``,c=Object.assign(d,{TabPane:p}),b=(0,i.styled)(d)`
  ${({theme:t,contentStyle:e})=>`
    .ant-tabs-body-holder {
      background: ${t.colorBgContainer};
      ${e}
    }

    & > .ant-tabs-nav {
      margin-bottom: 0;
    }

    .ant-tabs-tab-remove {
      padding-top: 0;
      padding-bottom: 0;
      height: ${6*t.sizeUnit}px;
    }
  `}
`,u=(0,i.styled)(s.F.CloseOutlined)`
  color: ${({theme:t})=>t.colorIcon};
`,m=Object.assign(b,{TabPane:p});m.defaultProps={type:"editable-card",animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,r.Y)(u,{iconSize:"s",role:"button",tabIndex:0})};let f=Object.assign((0,i.styled)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:t})=>4*t.sizeUnit}px;
    padding: ${({theme:t})=>`${3*t.sizeUnit}px ${t.sizeUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:t})=>t.fontSize}px;

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
`,{TabPane:p});n.d(e,["Ay",0,c,"fn",0,m,"pX",0,f])},64163(t,e,n){n.d(e,["n",0,()=>{try{return window.self!==window.top||null!==window.frameElement}catch{return!0}}])},98267(t,e,n){n.d(e,{B:()=>i});var r=n(61225);function i(){return(0,r.d4)(t=>{var e;return null==t||null==(e=t.common)?void 0:e.conf})}},6148(t,e,n){n.d(e,{V:()=>a,u:()=>i});var r=n(89495);function i(t){return`${(0,r.KX)()}${t.startsWith("/")?t:`/${t}`}`}function a(t){if(!t.startsWith("/"))return t;let e=(0,r.KX)();return e&&(t===e||t.startsWith(`${e}/`))?t:i(t)}}}]);