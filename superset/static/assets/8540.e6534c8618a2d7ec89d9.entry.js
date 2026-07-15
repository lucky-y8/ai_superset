"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8540],{48158(e,t,r){r.d(t,{T:()=>s});var a=r(2445),l=r(27124),n=r(85614),o=r(60685),i=r(8563);function s({certifiedBy:e,details:t,size:r="l"}){let d=(0,n.useTheme)();return(0,a.Y)(i.m,{id:"certified-details-tooltip",title:(0,a.FD)(a.FK,{children:[e&&(0,a.Y)("div",{children:(0,a.Y)("strong",{children:(0,l.t)("Certified by %s",e)})}),(0,a.Y)("div",{children:t})]}),children:(0,a.Y)(o.F.Certified,{iconColor:d.colorPrimary,iconSize:r})})}},74469(e,t,r){var a=r(2445),l=r(64260),n=r(45738),o=r(10286),i=r(77457),s=r(85614),d=r(17437),c=r(95297),u=r(27124),h=r(41561),p=r(60685);function m(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(a,l){var n=e.apply(t,r);function o(e){m(n,a,l,o,i,"next",e)}function i(e){m(n,a,l,o,i,"throw",e)}o(void 0)})}}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let v=new Set,b={sql:()=>r.e(8360).then(r.bind(r,78360)),htmlbars:()=>r.e(9633).then(r.bind(r,69633)),markdown:()=>r.e(8143).then(r.bind(r,8143)),json:()=>r.e(9172).then(r.bind(r,69172))},y=e=>f(function*(){if(!v.has(e))try{let t=yield b[e]();n.A.registerLanguage(e,t.default),v.add(e)}catch(t){console.warn(`Failed to load language ${e}:`,t)}})();r.d(t,["Ay",0,({children:e,language:t="sql",customStyle:r={},showLineNumbers:m=!1,wrapLines:b=!0,style:S,showCopyButton:w=!0})=>{let x=(0,s.useTheme)(),[C,T]=(0,l.useState)(v.has(t)),[E,A]=(0,l.useState)(!1),Y=(0,l.useRef)(null);(0,l.useEffect)(()=>{f(function*(){v.has(t)||(yield y(t),T(!0))})()},[t]),(0,l.useEffect)(()=>()=>{Y.current&&clearTimeout(Y.current)},[]);let $=(0,l.useCallback)(()=>{(0,h.A)(()=>Promise.resolve(e)).then(()=>{Y.current&&clearTimeout(Y.current),A(!0),Y.current=setTimeout(()=>A(!1),1500)})},[e]),k=(0,c.Mw)(x),P=S||(k?i.A:o.A),O=g({background:x.colorBgElevated,padding:4*x.sizeUnit,border:0,borderRadius:x.borderRadius},r),z=w&&(0,a.Y)("button",{type:"button",onClick:e=>{e.stopPropagation(),$()},title:E?(0,u.t)("Copied!"):(0,u.t)("Copy to clipboard"),css:(0,d.AH)`
        position: absolute;
        top: ${x.sizeUnit}px;
        right: ${x.sizeUnit}px;
        background: none;
        border: none;
        cursor: pointer;
        padding: ${x.sizeUnit}px;
        color: ${E?x.colorSuccess:x.colorTextSecondary};
        line-height: 1;
        border-radius: ${x.borderRadius}px;
        &:hover {
          color: ${E?x.colorSuccess:x.colorText};
          background: ${x.colorBgTextHover};
        }
      `,children:E?(0,a.Y)(p.F.CheckOutlined,{style:{fontSize:x.fontSizeSM}}):(0,a.Y)(p.F.CopyOutlined,{style:{fontSize:x.fontSizeSM}})});return C?(0,a.FD)("div",{css:(0,d.AH)`
        position: relative;
      `,children:[z,(0,a.Y)(n.A,{language:t,style:P,customStyle:O,showLineNumbers:m,wrapLines:b,children:e})]}):(0,a.FD)("div",{css:(0,d.AH)`
          position: relative;
        `,children:[z,(0,a.Y)("pre",{style:g({},O,{fontFamily:"monospace",whiteSpace:"pre-wrap",margin:0}),children:e})]})},"Fq",0,e=>f(function*(){let t=e.filter(e=>!v.has(e)).map(y);yield Promise.all(t)})()])},426(e,t,r){r.d(t,{T:()=>u});var a=r(2445),l=r(27124),n=r(85614),o=r(64260),i=r(33296),s=r(65471),d=r(56030);let c=n.styled.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colorTextLabel};
  }
`;function u({description:e,onConfirm:t,onHide:r,open:n,title:h,name:p}){let[m,f]=(0,o.useState)(!0),[g,v]=(0,o.useState)(""),b=(0,o.useRef)(null);(0,o.useEffect)(()=>{n&&b.current&&b.current.focus()},[n]);let y=()=>{v(""),t()};return(0,a.FD)(d.aF,{disablePrimaryButton:m,onHide:()=>{v(""),r()},onHandledPrimaryAction:y,primaryButtonName:(0,l.t)("Delete"),primaryButtonStyle:"danger",show:n,name:p,title:h,centered:!0,children:[e,(0,a.FD)(c,{children:[(0,a.Y)(i.l,{htmlFor:"delete",children:(0,l.t)('Type "%s" to confirm',(0,l.t)("DELETE"))}),(0,a.Y)(s.Input,{"data-test":"delete-modal-input",type:"text",id:"delete",autoComplete:"off",value:g,onChange:e=>{var t;let r=null!=(t=e.target.value)?t:"";f(r.toUpperCase()!==(0,l.t)("DELETE")),v(r)},onPressEnter:()=>{m||y()},ref:b})]})]})}},59854(e,t,r){var a=r(2445),l=r(64260),n=r(27124),o=r(85614),i=r(17437),s=r(60685),d=r(8563);let c=o.styled.a`
  ${({theme:e})=>(0,i.AH)`
    font-size: ${e.fontSizeXL}px;
    display: flex;
    padding: 0 0 0 ${2*e.sizeUnit}px;
  `};
`;r.d(t,["$",0,({itemId:e,isStarred:t,showTooltip:r,saveFaveStar:i,fetchFaveStar:u})=>{let h=(0,o.useTheme)();(0,l.useEffect)(()=>{null==u||u(e)},[u,e]);let p=(0,l.useCallback)(r=>{r.preventDefault(),i(e,!!t)},[t,e,i]),m=(0,a.Y)(c,{href:"#",onClick:p,className:"fave-unfave-icon","data-test":"fave-unfave-icon",role:"button",tabIndex:0,children:t?(0,a.Y)(s.F.StarFilled,{"aria-label":"starred",iconSize:"l",iconColor:h.colorWarning,name:"favorite-selected"}):(0,a.Y)(s.F.StarOutlined,{"aria-label":"unstarred",iconSize:"l",iconColor:h.colorTextTertiary,name:"favorite-unselected"})});return r?(0,a.Y)(d.m,{id:"fave-unfave-tooltip",title:(0,n.t)("Click to favorite/unfavorite"),children:m}):m}])},56550(e,t,r){r.d(t,{x:()=>d});var a=r(2445),l=r(60685),n=r(27124),o=r(85614),i=r(59272);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let d=({isPublished:e,onClick:t})=>{var r,d,c,u;let h=(0,o.useTheme)(),p=e?(0,n.t)("Published"):(0,n.t)("Draft"),m=e?null!=(r=h.labelPublishedColor)?r:h.colorSuccessText:null!=(d=h.labelDraftColor)?d:h.colorPrimaryText,f=e?h.labelPublishedBg:h.labelDraftBg,g=e?h.labelPublishedBorderColor:h.labelDraftBorderColor,v=e?null!=(c=h.labelPublishedIconColor)?c:h.colorSuccess:null!=(u=h.labelDraftIconColor)?u:h.colorPrimary,b=e?(0,a.Y)(l.F.CheckCircleOutlined,{iconSize:"s",iconColor:v}):(0,a.Y)(l.F.MinusCircleOutlined,{iconSize:"s",iconColor:v});return(0,a.Y)(i.JU,{type:e?"success":"primary",icon:b,onClick:t,style:s({color:m},f&&{backgroundColor:f},g&&{borderColor:g}),children:p})}},47349(e,t,r){r.d(t,{$:()=>d});var a=r(2445),l=r(64260),n=r(79924),o=r(85614);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let s=o.styled.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function d(e){let{src:t,fallback:r,isLoading:o,position:d}=e,c=function(e,t){if(null==e)return{};var r,a,l={},n=Object.getOwnPropertyNames(e);for(a=0;a<n.length;a++)!(t.indexOf(r=n[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}(e,["src","fallback","isLoading","position"]),[u,h]=(0,l.useState)(r);return(0,l.useEffect)(()=>(t&&fetch(t).then(e=>e.blob()).then(e=>{/image/.test(e.type)&&h(URL.createObjectURL(e))}).catch(e=>{n.A.error(e),h(r)}),()=>{h(r)}),[t,r]),(0,a.Y)(s,i({"data-test":"image-loader",src:o?r:u},c,{position:d}))}},41561(e,t,r){function a(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}r.d(t,["A",0,e=>{var t;return(t=function*(){if((()=>{let{userAgent:e}=navigator;return!!(e&&/^((?!chrome|android).)*safari/i.test(e))})())try{let t=new ClipboardItem({"text/plain":e()});yield navigator.clipboard.write([t])}catch{let t=yield e();yield navigator.clipboard.writeText(t)}else{let t=yield e();yield navigator.clipboard.writeText(t)}},function(){var e=this,r=arguments;return new Promise(function(l,n){var o=t.apply(e,r);function i(e){a(o,l,n,i,s,"next",e)}function s(e){a(o,l,n,i,s,"throw",e)}i(void 0)})})().catch(()=>e().then(e=>new Promise((t,r)=>{let a=document.getSelection();if(a){a.removeAllRanges();let t=document.createRange(),l=document.createElement("span");l.textContent=e,l.style.position="fixed",l.style.top="0",l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",document.body.appendChild(l),t.selectNode(l),a.addRange(t);try{document.execCommand("copy")||r()}catch{r()}document.body.removeChild(l),a.removeRange?a.removeRange(t):a.removeAllRanges()}t()})))}])},81549(e,t,r){r.d(t,{jb:()=>900,dz:()=>600,FA:()=>500,Gk:()=>s,xQ:()=>f,IQ:()=>y});var a=r(2445),l=r(85614),n=r(17437),o=r(80967);let i=l.styled.div`
  ${({theme:e,bottomSpacing:t})=>(0,n.AH)`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${t?4*e.sizeUnit:0}px;

    .control-label {
      margin-top: ${e.sizeUnit}px;
      margin-bottom: ${2*e.sizeUnit}px;
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorError};
    }

    .helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      padding: ${e.sizeUnit}px 0;
      text-align: left;
    }

    .error {
      color: ${e.colorError};
      font-size: ${e.fontSizeSM}px;
      margin-top: ${e.sizeUnit}px;
    }

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }

      label {
        display: flex;
        margin-right: ${2*e.sizeUnit}px;
      }

      i {
        margin: 0 ${e.sizeUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    input[disabled] {
      color: ${e.colorTextDisabled};
    }

    textarea {
      resize: vertical;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colorTextPlaceholder};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
      border-style: none;
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;

      &[name='description'] {
        flex: 1 1 auto;
      }
    }
  `}
`;function s({label:e,required:t=!1,tooltip:r,error:l,helperText:n,bottomSpacing:d=!0,children:c,testId:u}){return(0,a.FD)(i,{bottomSpacing:d,"data-test":u,children:[(0,a.FD)("div",{className:"control-label",children:[e,r&&(0,a.Y)(o.I,{tooltip:r}),t&&(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:c}),n&&(0,a.Y)("div",{className:"helper",children:n}),l&&(0,a.Y)("div",{className:"error",children:l})]})}l.styled.div`
  ${({theme:e})=>`
    padding: ${2*e.sizeUnit}px 0;
  `}
`;var d=r(27124),c=r(56030),u=r(68447),h=r(10020),p=r(84151);let m=(0,l.styled)(c.aF)`
  .ant-modal-body {
    max-height: 80vh;
    height: auto;
    overflow-y: auto;
    padding: 0;
  }

  .ant-modal-header {
    padding: ${({theme:e})=>3*e.sizeUnit}px
      ${({theme:e})=>4*e.sizeUnit}px
      ${({theme:e})=>3*e.sizeUnit}px;
    margin-bottom: 0;
    border-bottom: 1px solid ${({theme:e})=>e.colorBorder};
  }

  .ant-modal-footer {
    height: ${({theme:e})=>16.25*e.sizeUnit}px;
  }

  .control-label {
    margin-top: ${({theme:e})=>e.sizeUnit}px;
  }

  /* Remove top margin from collapse component */
  .ant-collapse {
    border: none;

    > .ant-collapse-item:first-of-type {
      border-top: none;
    }

    /* Remove margin from collapse headers */
    .ant-collapse-header {
      padding-bottom: 0 !important;

      /* Remove margin from the CollapseLabelInModal component */
      > div {
        margin-bottom: 0;
      }
    }
  }

  /* Ensure collapse sections have proper padding */
  .ant-collapse-body {
    padding: ${({theme:e})=>4*e.sizeUnit}px;
  }
`;function f({width:e=500,title:t,icon:r,show:l,onHide:n,onSave:o,saveDisabled:i=!1,saveLoading:s=!1,saveText:c,errorTooltip:g,children:v,isEditMode:b=!1,centered:y=!0,wrapProps:S,contentLoading:w=!1}){let x=c||(b?(0,d.t)("Save"):(0,d.t)("Add"));return(0,a.Y)(m,{disablePrimaryButton:i||s||w,primaryButtonLoading:s,primaryTooltipMessage:g,onHandledPrimaryAction:o,onHide:n,primaryButtonName:x,show:l,width:`${e}px`,wrapProps:S,centered:y,title:r?(0,a.Y)(p.r,{isEditMode:b,title:t,"data-test":"standard-modal-title"}):t,children:w?(0,a.Y)(u.s,{justify:"center",align:"center",style:{minHeight:200},children:(0,a.Y)(h.R,{})}):v})}var g=r(64260),v=r(42178);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function y({sections:e,onValidationChange:t}){let r=(0,g.useMemo)(()=>e.reduce((e,t)=>(e[t.key]={hasErrors:!1,errors:[],name:t.name},e),{}),[e]),[l,o]=(0,g.useState)(r),i=(0,g.useCallback)((e,r)=>{o(a=>{let l=b({},a,{[e]:{hasErrors:r.length>0,name:a[e].name,errors:r}});return t&&t(Object.values(l).some(e=>e.hasErrors)),l})},[t]),s=(0,g.useCallback)(t=>{let r=e.find(e=>e.key===t);r&&i(t,r.validator())},[e,i]),c=(0,g.useCallback)(()=>{let t=!1;return e.forEach(e=>{let r=e.validator();i(e.key,r),r.length>0&&(t=!0)}),!t},[e,i]),u=(0,g.useMemo)(()=>Object.values(l).some(e=>e.hasErrors),[l]),h=(0,g.useMemo)(()=>{let e;return u?(e=[],(Object.values(l).forEach(t=>{if(t.hasErrors){let r=`${t.name}: `;e.push(r+t.errors.join(", "))}}),0===e.length)?"":(0,a.FD)("div",{children:[(0,d.t)("Please fix the following errors"),(0,a.Y)(v.B,{dataSource:e,renderItem:e=>(0,a.FD)(v.B.Item,{css:e=>(0,n.AH)`
              &&& {
                color: ${e.colorWhite};
              }
            `,compact:!0,children:["• ",e]}),size:"small",split:!1})]})):""},[l,u]);return{validationStatus:l,validateSection:s,validateAll:c,errorTooltip:h,hasErrors:u,updateValidationStatus:i}}},52234(e,t,r){r.d(t,{A:()=>o});var a=r(64260),l=r(21804);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){let r=(0,a.useRef)(),[o,i]=(0,a.useState)(t);return(0,a.useEffect)(()=>{var t;r.current=null!=(t=r.current)?t:(0,l.Gq)(l.Hh.CommonResizableSidebarWidths,{}),"number"==typeof r.current[e]&&i(r.current[e])},[e]),[o,function(t){i(t),(0,l.SO)(l.Hh.CommonResizableSidebarWidths,n({},r.current,{[e]:t}))}]}},20567(e,t,r){r.d(t,{U:()=>l});var a,l=((a={})[a.Custom=1]="Custom",a[a.Type=2]="Type",a[a.Owner=3]="Owner",a[a.FavoritedBy=4]="FavoritedBy",a)},76399(e,t,r){r.d(t,{AE:()=>f,VM:()=>v});var a=r(64260),l=r(60957),n=r(26702);class o{static getInstance(){return o.instance||(o.instance=new o),o.instance}registerProvider(e,t){let{id:r,languages:a}=e;return this.providers.has(r)?(console.warn(`Editor provider with id "${r}" is already registered.`),new l.jG(()=>{})):(this.providers.set(r,{editor:e,component:t}),a.forEach(e=>{this.languageToProvider.set(e,r)}),this.registerEmitter.fire({editor:e}),this.syncListeners.forEach(e=>e()),new l.jG(()=>{this.unregisterProvider(r)}))}unregisterProvider(e){let t=this.providers.get(e);if(!t)return;let{editor:r}=t;r.languages.forEach(t=>{this.languageToProvider.get(t)===e&&this.languageToProvider.delete(t)}),this.providers.delete(e),this.unregisterEmitter.fire({editor:r}),this.syncListeners.forEach(e=>e())}getProvider(e){let t=this.languageToProvider.get(e);if(t)return this.providers.get(t)}hasProvider(e){return this.languageToProvider.has(e)}getAllProviders(){return Array.from(this.providers.values())}onDidRegister(e,t){return this.registerEmitter.subscribe(e,t)}onDidUnregister(e,t){return this.unregisterEmitter.subscribe(e,t)}reset(){this.providers.clear(),this.languageToProvider.clear(),this.syncListeners.clear(),this.registerEmitter=(0,n.d)(),this.unregisterEmitter=(0,n.d)()}constructor(){this.providers=new Map,this.languageToProvider=new Map,this.registerEmitter=(0,n.d)(),this.unregisterEmitter=(0,n.d)(),this.syncListeners=new Set,this.subscribe=e=>(this.syncListeners.add(e),()=>this.syncListeners.delete(e))}}var i=r(2445),s=r(85614),d=r(23918);let c=e=>{var t;return{row:e.line,column:null!=(t=e.column)?t:0,text:e.message,type:e.severity}},u=e=>{var t,r,a;return{name:e.name,value:null!=(t=e.value)?t:e.name,score:null!=(r=e.score)?r:0,meta:null!=(a=e.meta)?a:"",docText:e.detail,docHTML:e.documentation}},h=(0,a.forwardRef)((e,t)=>{let{id:r,value:n,onChange:o,onBlur:s,onCursorPositionChange:h,onSelectionChange:p,language:m,readOnly:f,tabSize:g,lineNumbers:v,wordWrap:b,annotations:y,hotkeys:S,keywords:w,height:x="100%",width:C="100%",onReady:T}=e,E=(0,a.useRef)(null),A=(0,a.useRef)(new Map),Y=(0,a.useRef)(h),$=(0,a.useRef)(p);(0,a.useEffect)(()=>{Y.current=h},[h]),(0,a.useEffect)(()=>{$.current=p},[p]);let k=(0,a.useMemo)(()=>({focus:()=>{var e,t;null==(t=E.current)||null==(e=t.editor)||e.focus()},getValue:()=>{var e,t,r;return null!=(e=null==(r=E.current)||null==(t=r.editor)?void 0:t.getValue())?e:""},setValue:e=>{var t,r;null==(r=E.current)||null==(t=r.editor)||t.setValue(e,-1)},getCursorPosition:()=>{var e,t,r,a;let l=null==(a=E.current)||null==(r=a.editor)?void 0:r.getCursorPosition();return{line:null!=(e=null==l?void 0:l.row)?e:0,column:null!=(t=null==l?void 0:l.column)?t:0}},moveCursorToPosition:e=>{var t;let r=null==(t=E.current)?void 0:t.editor;r&&(r.clearSelection(),r.moveCursorToPosition({row:e.line,column:e.column}))},getSelections:()=>{var e,t;let r=null==(t=E.current)||null==(e=t.editor)?void 0:e.getSelection();if(!r)return[];let a=r.getRange();return[{start:{line:a.start.row,column:a.start.column},end:{line:a.end.row,column:a.end.column}}]},setSelection:e=>{var t;let r=null==(t=E.current)?void 0:t.editor;r&&r.selection.setSelectionRange({start:{row:e.start.line,column:e.start.column},end:{row:e.end.line,column:e.end.column}})},getSelectedText:()=>{var e,t,r;return null!=(e=null==(r=E.current)||null==(t=r.editor)?void 0:t.getSelectedText())?e:""},insertText:e=>{var t,r;null==(r=E.current)||null==(t=r.editor)||t.insert(e)},executeCommand:e=>{var t;let r=null==(t=E.current)?void 0:t.editor;(null==r?void 0:r.commands)&&r.commands.exec(e,r,{})},scrollToLine:e=>{var t,r;null==(r=E.current)||null==(t=r.editor)||t.scrollToLine(e,!0,!0)},setAnnotations:e=>{var t,r;let a=null==(r=E.current)||null==(t=r.editor)?void 0:t.getSession();a&&a.setAnnotations(e.map(c))},clearAnnotations:()=>{var e,t;let r=null==(t=E.current)||null==(e=t.editor)?void 0:e.getSession();r&&r.clearAnnotations()},registerCompletionProvider:e=>(A.current.set(e.id,e),new l.jG(()=>{A.current.delete(e.id)})),resize:()=>{var e,t;null==(t=E.current)||null==(e=t.editor)||e.resize()},onDidChangeContent:(e,t)=>{var r;let a=null==(r=E.current)?void 0:r.editor;if(!a)return new l.jG(()=>{});let n=t?e.bind(t):e,o=e=>{let t=a.session.doc.positionToIndex(e.start),r=e.lines.join(a.session.doc.getNewLineCharacter());n({getValue:()=>a.getValue(),changes:["insert"===e.action?{rangeOffset:t,rangeLength:0,text:r}:{rangeOffset:t,rangeLength:r.length,text:""}]})};return a.session.on("change",o),new l.jG(()=>{a.session.off("change",o)})}}),[]);(0,a.useImperativeHandle)(t,()=>k,[k]);let P=(0,a.useRef)(!1),O=(0,a.useRef)(!1),z=(0,a.useCallback)(e=>{S&&S.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:()=>t.exec(k)})}),O.current||(O.current=!0,e.selection.on("changeCursor",()=>{if(Y.current){let t=e.getCursorPosition();Y.current({line:t.row,column:t.column})}}),e.selection.on("changeSelection",()=>{if($.current){let t=e.getSelection().getRange();$.current([{start:{line:t.start.row,column:t.start.column},end:{line:t.end.row,column:t.end.column}}])}})),T&&!P.current&&(P.current=!0,T(k)),e.focus()},[S,k,T]),j=(0,a.useCallback)(()=>{s&&s(n)},[s,n]),F=(e=>{switch(e){case"sql":return d.pw;case"json":return d.iN;case"markdown":return d.nt;case"css":return d.rN;case"yaml":return d._p;case"javascript":return d.LI;default:return console.warn(`Unknown editor language "${e}", falling back to SQL editor`),d.pw}})(m),D=null==y?void 0:y.map(c),_=null==w?void 0:w.map(u);return(0,i.Y)(F,{ref:E,name:r,mode:m,value:n,onChange:o,onBlur:j,onLoad:z,height:x,width:C,readOnly:f,tabSize:g,showGutter:!1!==v,wrapEnabled:b,annotations:D,keywords:_,enableLiveAutocompletion:!0,editorProps:{$blockScrolling:!0},showLoadingForImport:!0})});function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}h.displayName="AceEditorProvider";let m=(0,a.forwardRef)((e,t)=>{let{language:r}=e,l=(0,s.useTheme)(),n=o.getInstance(),d=(0,a.useSyncExternalStore)(n.subscribe,()=>n.getProvider(r),()=>void 0),c=p({},e,{theme:l});if(d){let e=d.component;return(0,i.Y)(e,p({ref:t},c))}return(0,i.Y)(h,p({ref:t},c))});m.displayName="EditorHost";let f=m,g=o.getInstance(),v={registerEditor:g.registerProvider.bind(g),getEditor:g.getProvider.bind(g),hasEditor:g.hasProvider.bind(g),getAllEditors:g.getAllProviders.bind(g),onDidRegisterEditor:g.onDidRegister.bind(g),onDidUnregisterEditor:g.onDidUnregister.bind(g)}},60957(e,t,r){r.d(t,{Wm:()=>a,jG:()=>l});class a{addCatalog(e){this.catalogs.push(e)}addSchema(e){this.schemas.push(e)}constructor(e,t,r,a){this.id=e,this.name=t,this.catalogs=r,this.schemas=a}}class l{static from(...e){return new l(()=>{e.forEach(e=>{e.dispose()})})}dispose(){this.dispose()}constructor(e){this.dispose=e}}},26702(e,t,r){function a(){let e=new Set;return{fire:t=>e.forEach(e=>e(t)),subscribe:(t,r)=>{let a=r?t.bind(r):t;return e.add(a),{dispose:()=>e.delete(a)}}}}function l(e){let{fire:t,subscribe:r}=a(),l=e;return{fire:e=>{l=e,t(e)},subscribe:r,getCurrent:()=>l}}r.d(t,{d:()=>a,s:()=>l})},74529(e,t,r){r.d(t,{A:()=>eo});var a=r(2445),l=r(64260),n=r(54930),o=r(73709),i=r(57832),s=r(10938),d=r(2404),c=r(35630),u=r(58561),h=r.n(u),p=r(27124),m=r(23399),f=r(68655),g=r(73815),v=r(51281),b=r(25365),y=r(7070),S=r(72620),w=r(36652),x=r(28681),C=r(61225),T=r(34235),E=r(22908),A=r(32924),Y=r(81549),$=r(91129),k=r(93225),P=r(65471);let O=({form:e,validationStatus:t})=>{var r;let l=e.getFieldValue("title"),n=(null==(r=t.basic)?void 0:r.hasErrors)&&(!l||0===l.trim().length);return(0,a.FD)(a.FK,{children:[(0,a.Y)(Y.Gk,{label:(0,p.t)("Name"),required:!0,testId:"dashboard-name-field",error:n?(0,p.t)("Dashboard name is required"):void 0,children:(0,a.Y)(k.e,{name:"title",noStyle:!0,rules:[{required:!0,message:(0,p.t)("Dashboard name is required"),whitespace:!0}],children:(0,a.Y)(P.Input,{placeholder:(0,p.t)("The display name of your dashboard"),"data-test":"dashboard-title-input",type:"text"})})}),(0,a.Y)(Y.Gk,{label:(0,p.t)("URL Slug"),testId:"dashboard-slug-field",bottomSpacing:!1,children:(0,a.Y)(k.e,{name:"slug",noStyle:!0,children:(0,a.Y)(P.Input,{placeholder:(0,p.t)("A readable URL for your dashboard"),"data-test":"dashboard-slug-input",type:"text"})})}),(0,a.Y)(Y.Gk,{label:(0,p.t)("Description"),testId:"dashboard-description-field",bottomSpacing:!1,children:(0,a.Y)(k.e,{name:"description",noStyle:!0,children:(0,a.Y)(P.Input.TextArea,{placeholder:(0,p.t)("A description for your dashboard"),"data-test":"dashboard-description-input"})})})]})};var z=r(62858),j=r(80446);let F=({isLoading:e,tags:t,editors:r,viewers:n,onChangeEditors:o,onChangeViewers:i,onChangeTags:s,onClearTags:d})=>{let c=(0,v.G7)(v.TO.EnableViewers),u=(0,l.useMemo)(()=>(0,S.vH)(r||[]),[r]),h=(0,l.useMemo)(()=>(0,S.vH)(n||[]),[n]),m=(0,l.useMemo)(()=>t.map(e=>({value:e.id,label:e.name})),[t]);return(0,a.FD)(a.FK,{children:[(0,a.Y)(Y.Gk,{label:(0,p.t)("Editors"),testId:"dashboard-editors-field",helperText:(0,p.t)("Editors is a list of subjects who can alter the dashboard. Searchable by name."),children:(0,a.Y)(S.Ay,{relatedUrl:"/api/v1/dashboard/related/editors",dataTest:"dashboard-editors-select",allowClear:!0,ariaLabel:(0,p.t)("Editors"),disabled:e,onChange:o,value:u,placeholder:(0,p.t)("Search editors")})}),c&&(0,a.Y)(Y.Gk,{label:(0,p.t)("Viewers"),testId:"dashboard-viewers-field",helperText:(0,p.t)("Viewers is a list of subjects who can view the dashboard. If no viewers are defined, the dashboard is accessible to all users with appropriate datasource permissions."),children:(0,a.Y)(S.Ay,{relatedUrl:"/api/v1/dashboard/related/viewers",dataTest:"dashboard-viewers-select",allowClear:!0,ariaLabel:(0,p.t)("Viewers"),disabled:e,onChange:i,value:h,placeholder:(0,p.t)("Search viewers")})}),(0,v.G7)(v.TO.TaggingSystem)&&(0,a.Y)(Y.Gk,{label:(0,p.t)("Tags"),testId:"dashboard-tags-field",helperText:(0,p.t)("A list of tags that have been applied to this dashboard."),bottomSpacing:!1,children:(0,a.Y)(z.A,{"data-test":"dashboard-tags-select",ariaLabel:"Tags",mode:"multiple",value:m,options:j.m,onChange:s,onClear:d,allowClear:!0,showSearch:!0,placeholder:(0,p.t)("Search tags")})})]})};var D=r(27243),_=r(85614),I=r(68292),R=r(76399),U=r(35501),L=r(17437),M=r(30679),N=r(8563),H=r(60685),G=r(74821);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let B=(0,p.t)(`The colors of this chart might be overridden by custom label colors of the related dashboard.
    Check the JSON metadata in the Advanced settings.`),V=({value:e,onChange:t,clearable:r=!0,hasCustomLabelsColor:n=!1,showWarning:o=!1})=>{let i=(0,_.useTheme)(),s=(0,m.A)(),d=(0,l.useMemo)(()=>s.getMap(),[s]),c=(0,l.useMemo)(()=>s.keys().map(e=>[e,e]),[s]),u=(0,l.useMemo)(()=>{let t=e;if("SUPERSET_DEFAULT"===t){let e=null==d?void 0:d.SUPERSET_DEFAULT;e&&"function"!=typeof e&&"id"in e&&(t=e.id)}return t},[e,d]),h=(0,l.useMemo)(()=>{let e=[],t=Object.values(c.filter(t=>{let r=t[0],a="SUPERSET_DEFAULT"!==r&&!e.includes(r);return e.push(r),a}).reduce((e,[t])=>{var r;let l=d[t];if(!l||"function"==typeof l)return e;let n=[];"colors"in l&&({colors:n}=l);let o={label:(0,a.Y)(G.A,{id:l.id,label:l.label,colors:n}),value:t,searchText:l.label};return e[null!=(r=l.group)?r:U.w.Other].options.push(o),e},{[U.w.Custom]:{title:U.w.Custom,label:(0,p.t)("Custom color palettes"),options:[]},[U.w.Featured]:{title:U.w.Featured,label:(0,p.t)("Featured color palettes"),options:[]},[U.w.Other]:{title:U.w.Other,label:(0,p.t)("Other color palettes"),options:[]}})).filter(e=>e.options.length>0).map(e=>q({},e,{options:(0,M.A)(e.options,e=>e.label)}));return 1===t.length&&t[0].title===U.w.Other?t[0].options.map(e=>({value:e.value,label:e.customLabel||e.label})):t.map(e=>({label:e.label,options:e.options.map(e=>({value:e.value,label:e.customLabel||e.label,searchText:e.searchText}))}))},[c,d]);return(0,a.FD)(a.FK,{children:[(0,a.Y)(I.A,{css:(0,L.AH)`
          width: 100%;
          & .ant-select-item.ant-select-item-group {
            padding-left: ${i.sizeUnit}px;
            font-size: ${i.fontSize}px;
          }
          & .ant-select-item-option-grouped {
            padding-left: ${3*i.sizeUnit}px;
          }
        `,"aria-label":(0,p.t)("Select color scheme"),allowClear:r,onChange:t,placeholder:(0,p.t)("Select scheme"),value:u,showSearch:!0,getPopupContainer:e=>e.parentNode,options:h,optionFilterProps:["label","value","searchText"]}),o&&n&&(0,a.Y)(N.m,{title:B,children:(0,a.Y)(H.F.WarningOutlined,{iconColor:i.colorWarning,css:(0,L.AH)`
              margin-left: ${2*i.sizeUnit}px;
              vertical-align: baseline;
            `,iconSize:"s"})})]})};function J(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}let W=(0,_.styled)(R.AE)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colorBorder};
`,K=(0,_.styled)(D.F)`
  margin-bottom: ${({theme:e})=>4*e.sizeUnit}px;
`,Q=_.styled.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${4*e.sizeUnit}px;

    .switch-row {
      display: flex;
      align-items: center;
      gap: ${2*e.sizeUnit}px;
    }

    .switch-label {
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

    .switch-helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      margin-top: ${e.sizeUnit}px;
    }
  `}
`,X=({themes:e,selectedThemeId:t,colorScheme:r,customCss:n,hasCustomLabelsColor:o,showChartTimestamps:i,onThemeChange:s,onColorSchemeChange:d,onCustomCssChange:c,onShowChartTimestampsChange:u,addDangerToast:m})=>{let[f,b]=(0,l.useState)([]),[y,S]=(0,l.useState)(!1),[w,x]=(0,l.useState)(null),[C,T]=(0,l.useState)(""),E=(0,l.useCallback)(()=>{var e;return(e=function*(){if((0,v.G7)(v.TO.CssTemplates)){S(!0);try{let e=h().encode({columns:["template_name","css"]}),t=yield g.A.get({endpoint:`/api/v1/css_template/?q=${e}`});b(t.json.result||[])}catch{m&&m((0,p.t)("An error occurred while fetching available CSS templates"))}finally{S(!1)}}},function(){var t=this,r=arguments;return new Promise(function(a,l){var n=e.apply(t,r);function o(e){J(n,a,l,o,i,"next",e)}function i(e){J(n,a,l,o,i,"throw",e)}o(void 0)})})()},[m]);(0,l.useEffect)(()=>{E()},[E]);let A=(0,l.useCallback)(e=>{if(!e){x(null),T("");return}let t=f.find(t=>t.template_name===e);t&&(x(e),T(t.css),c(t.css))},[f,c]),$=w&&n!==C;return(0,a.FD)(a.FK,{children:[e.length>0&&(0,a.Y)(Y.Gk,{label:(0,p.t)("Theme"),testId:"dashboard-theme-field",helperText:(0,p.t)("Clear the selection to revert to the system default theme"),children:(0,a.Y)(I.A,{"data-test":"dashboard-theme-select",value:t,onChange:s,options:e.map(e=>({value:e.id,label:e.theme_name})),allowClear:!0,placeholder:(0,p.t)("Select a theme")})}),(0,a.Y)(Y.Gk,{label:(0,p.t)("Color scheme"),testId:"dashboard-colorscheme-field",helperText:(0,p.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),children:(0,a.Y)(V,{"data-test":"dashboard-colorscheme-select",value:r,onChange:d,hasCustomLabelsColor:o,showWarning:o})}),(0,a.FD)(Q,{"data-test":"dashboard-show-timestamps-field",children:[(0,a.FD)("div",{className:"switch-row",children:[(0,a.Y)(P.Switch,{"data-test":"dashboard-show-timestamps-switch",checked:i,onChange:u}),(0,a.Y)("span",{className:"switch-label",children:(0,p.t)("Show chart query timestamps")})]}),(0,a.Y)("span",{className:"switch-helper",children:(0,p.t)("Display the last queried timestamp on charts in the dashboard view")})]}),(0,v.G7)(v.TO.CssTemplates)&&f.length>0&&(0,a.Y)(Y.Gk,{label:(0,p.t)("Load CSS template (optional)"),testId:"dashboard-css-template-field",helperText:(0,p.t)("Select a predefined CSS template to apply to your dashboard"),children:(0,a.Y)(I.A,{"data-test":"dashboard-css-template-select",onChange:A,options:f.map(e=>({value:e.template_name,label:e.template_name})),placeholder:(0,p.t)("Select a CSS template"),loading:y,allowClear:!0,value:w})}),$&&(0,a.Y)(K,{type:"warning",message:(0,p.t)('Modified from "%s" template',w),showIcon:!0,closable:!1,"data-test":"css-template-modified-warning"}),(0,a.Y)(Y.Gk,{label:(0,p.t)("CSS"),testId:"dashboard-css-field",helperText:(0,p.t)("Apply custom CSS to the dashboard. Use class names or element selectors to target specific components."),bottomSpacing:!1,children:(0,a.Y)(W,{id:"dashboard-css-editor","data-test":"dashboard-css-editor",onChange:c,value:n,language:"css",width:"100%",height:"160px"})})]})};var Z=r(4298);let ee=({refreshFrequency:e,onRefreshFrequencyChange:t})=>(0,a.Y)(Y.Gk,{label:(0,p.t)("Refresh frequency"),helperText:(0,p.t)("Set the automatic refresh frequency for this dashboard. The dashboard will reload its data at the specified interval."),bottomSpacing:!1,children:(0,a.Y)(Z.ux,{value:e,onChange:t})}),et=({isLoading:e})=>(0,a.FD)(a.FK,{children:[(0,a.Y)(Y.Gk,{label:(0,p.t)("Certified by"),helperText:(0,p.t)("Person or group that has certified this dashboard."),children:(0,a.Y)(k.e,{name:"certifiedBy",noStyle:!0,children:(0,a.Y)(P.Input,{type:"text",disabled:e})})}),(0,a.Y)(Y.Gk,{label:(0,p.t)("Certification details"),helperText:(0,p.t)("Any additional detail to show in the certification tooltip."),bottomSpacing:!1,children:(0,a.Y)(k.e,{name:"certificationDetails",noStyle:!0,children:(0,a.Y)(P.Input,{type:"text",disabled:e})})})]}),er=(0,_.styled)(R.AE)`
  /* Border is already applied by AceEditor itself */
`,ea=({jsonMetadata:e,jsonAnnotations:t,validationStatus:r,onJsonMetadataChange:l})=>{var n;return(0,a.Y)(Y.Gk,{label:(0,p.t)("JSON Metadata"),testId:"dashboard-metadata-field",helperText:(0,p.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),error:(null==(n=r.advanced)?void 0:n.hasErrors)&&t.length>0?(0,p.t)("Invalid JSON metadata"):void 0,bottomSpacing:!1,children:(0,a.Y)(er,{id:"dashboard-json-metadata","data-test":"dashboard-metadata-editor",value:e,onChange:l,language:"json",tabSize:2,wordWrap:!0,width:"100%",height:"60vh",annotations:t.map(e=>({severity:e.type,line:e.row,column:e.column,message:e.text}))})})};function el(e,t,r,a,l,n,o){try{var i=e[n](o),s=i.value}catch(e){r(e);return}i.done?t(s):Promise.resolve(s).then(a,l)}function en(){return(en=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let eo=(0,y.Ay)(({addSuccessToast:e,addDangerToast:t,colorScheme:r,dashboardId:u,dashboardInfo:y,dashboardTitle:k,onHide:P=()=>{},onlyApply:z=!1,onSubmit:j=()=>{},show:D=!1})=>{var _,I,R,U,L,M,N;let H=(0,C.wA)(),[G]=i.l.useForm(),[q,B]=(0,l.useState)(!0),[V,J]=(0,l.useState)(!1),[W,K]=(0,l.useState)(r),[Q,Z]=(0,l.useState)(""),[er,eo]=(0,l.useState)(),ei=(0,c.p)(Q,{errorPrefix:"Invalid JSON metadata"}),[es,ed]=(0,l.useState)([]),[ec,eu]=(0,l.useState)([]),eh=z?(0,p.t)("Apply"):(0,p.t)("Save"),[ep,em]=(0,l.useState)([]),[ef,eg]=(0,l.useState)(""),[ev,eb]=(0,l.useState)(0),[ey,eS]=(0,l.useState)(null),[ew,ex]=(0,l.useState)(!1),[eC,eT]=(0,l.useState)([]),eE=(0,m.A)(),eA=(0,l.useRef)({}),eY=(0,l.useRef)(null),e$=(0,l.useRef)(null),ek=e=>{var r;return(r=function*(){let{error:r,statusText:a,message:l}=yield(0,f.h4)(e),n=r||a||(0,p.t)("An error has occurred");"object"==typeof l&&"json_metadata"in l&&"string"==typeof l.json_metadata?n=l.json_metadata:"string"==typeof l&&(n=l,"Forbidden"===l&&(n=(0,p.t)("You do not have permission to edit this dashboard"))),t(String(n))},function(){var e=this,t=arguments;return new Promise(function(a,l){var n=r.apply(e,t);function o(e){el(n,a,l,o,i,"next",e)}function i(e){el(n,a,l,o,i,"throw",e)}o(void 0)})})()},eP=(0,l.useCallback)(e=>{var t;let{id:r,dashboard_title:a,slug:l,certified_by:i,certification_details:s,editors:d,viewers:c,metadata:u,is_managed_externally:h,theme:p,css:m,description:f}=e,g={id:r,title:a,description:f||"",slug:l||"",certifiedBy:i||"",certificationDetails:s||"",isManagedExternally:h||!1,css:m||"",metadata:u};G.setFieldsValue(g),eo(g),ed(d||[]),eu(c||[]),eg(m||""),null===eY.current&&(eY.current=m||""),K(null==u?void 0:u.color_scheme),eS((null==p?void 0:p.id)||null);let v=(0,n.A)(u,["positions","shared_label_colors","map_label_colors","color_scheme_domain","show_chart_timestamps"]);Z(v?(0,o.A)(v):""),eb((null==u?void 0:u.refresh_frequency)||0),ex(null!=(t=null==u?void 0:u.show_chart_timestamps)&&t),eA.current=u},[G]),eO=(0,l.useCallback)(()=>{g.A.get({endpoint:`/api/v1/dashboard/${u}`}).then(e=>{var t;let r=e.json.result,a=(null==(t=r.json_metadata)?void 0:t.length)?JSON.parse(r.json_metadata):{};eP(en({},r,{metadata:a})),B(!1)},ek)},[u,eP]),ez=()=>{try{return(null==Q?void 0:Q.length)?JSON.parse(Q):{}}catch{return{}}},ej=(e="",{updateMetadata:r=!0}={})=>{let a=eE.keys(),l=ez();if(e&&!a.includes(e))throw t((0,p.t)("A valid color scheme is required")),P(),Error("A valid color scheme is required");l.color_scheme=e,l.label_colors=l.label_colors||{},K(e),H((0,T.r7)(e)),r&&Z((0,o.A)(l))};(0,l.useEffect)(()=>{D&&(eY.current=null)},[D]),(0,l.useEffect)(()=>{if(D){B(!0),y?(eP(y),B(!1)):eO();let e=h().encode({columns:["id","theme_name","is_system","json_data"],filters:[{col:"is_system",opr:"eq",value:!1}]});g.A.get({endpoint:`/api/v1/theme/?q=${e}`}).then(({json:e})=>{eT(e.result)}).catch(()=>{t((0,p.t)("An error occurred while fetching available themes"))})}},[y,eO,eP,D,t]),(0,l.useEffect)(()=>{k&&er&&er.title!==k&&G.setFieldsValue(en({},er,{title:k}))},[er,k,G]),(0,l.useEffect)(()=>{if((0,v.G7)(v.TO.TaggingSystem))try{(0,w.un)({objectType:w.iQ.DASHBOARD,objectId:u,includeTypes:!1},e=>em(e),e=>{t(`Error fetching tags: ${e.text}`)})}catch(e){ek(e)}},[u]);let eF=!!Object.keys((null==(_=ez())?void 0:_.label_colors)||{}).length,eD=(0,l.useMemo)(()=>[{key:"basic",name:(0,p.t)("General information"),validator:()=>{let e=[],t=G.getFieldsValue();return t.title&&0!==t.title.trim().length||e.push((0,p.t)("Dashboard name is required")),e}},{key:"access",name:(0,p.t)("Access"),validator:()=>[]},{key:"styling",name:(0,p.t)("Styling"),validator:()=>[]},{key:"refresh",name:(0,p.t)("Refresh settings"),validator:()=>{var e,t;let r=null==er||null==(t=er.common)||null==(e=t.conf)?void 0:e.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT;return(0,$.ec)(ev,r)}},{key:"certification",name:(0,p.t)("Certification"),validator:()=>[]},{key:"advanced",name:(0,p.t)("Advanced settings"),validator:()=>ei.length>0?[(0,p.t)("Invalid JSON metadata")]:[]}],[G,ei,ev,er]),{validationStatus:e_,validateAll:eI,validateSection:eR,errorTooltip:eU,hasErrors:eL}=(0,Y.IQ)({sections:eD}),eM=!q&&er,eN=(0,l.useCallback)(e=>{eg(e),e$.current&&(clearTimeout(e$.current),e$.current=null),e$.current=setTimeout(()=>{H((0,E.PD)({css:e}))},500)},[H]);return(0,l.useEffect)(()=>()=>{e$.current&&(clearTimeout(e$.current),e$.current=null)},[]),(0,l.useEffect)(()=>{eM&&eR("basic")},[k,eR,eM]),(0,l.useEffect)(()=>{eM&&eR("advanced")},[Q,eR,eM]),(0,l.useEffect)(()=>{eM&&eR("refresh")},[ev,eR,eM]),(0,a.Y)(Y.xQ,{show:D,onHide:()=>{if(e$.current&&(clearTimeout(e$.current),e$.current=null),null!==eY.current){var e;H((0,E.PD)({css:eY.current})),H((0,T.r7)(null!=(e=eA.current.color_scheme)?e:""))}P()},onSave:()=>{eI()&&G.submit()},title:(0,p.t)("Dashboard properties"),isEditMode:!0,saveDisabled:(null==er?void 0:er.isManagedExternally)||eL,saveLoading:V,contentLoading:q,errorTooltip:(null==er?void 0:er.isManagedExternally)?(0,p.t)("This dashboard is managed externally, and can't be edited in Superset"):eU,saveText:eh,wrapProps:{"data-test":"properties-edit-modal"},children:(0,a.Y)(i.l,{form:G,onFinish:()=>{let a,{title:l,description:n="",slug:i,certifiedBy:s,certificationDetails:d}=G.getFieldsValue(),c=Q;try{if(!c.startsWith("{")||!c.endsWith("}"))throw Error();a=JSON.parse(c)}catch{t((0,p.t)("JSON metadata is invalid!"));return}let h=(0,x.Z6)(null==a?void 0:a.color_namespace),m=(null==a?void 0:a.color_scheme)||W,f=m!==eA.current.color_scheme,b=!(0,A.r$)(eA.current.label_colors||{},(null==a?void 0:a.label_colors)||{}),y=Object.keys((null==a?void 0:a.label_colors)||{}),w=Object.keys(eA.current.label_colors||{}),C=y.length>0?y:w,E=!!b&&C.length>0&&C,Y=ez();Y.refresh_frequency=ev,Y.show_chart_timestamps=!!ew;let $=Y.label_colors||{},k=en({},eA.current,{label_colors:$,color_scheme:m,show_chart_timestamps:ew});eA.current=k,(0,x.D2)(k,f||E),H((0,T.Qn)(en({},k,{map_label_colors:(0,x.xV)($)}))),ej(m,{updateMetadata:!1}),c=(0,o.A)(Y);let O={},F={};(0,v.G7)(v.TO.EnableViewers)&&(O.viewers=ec,F.viewers=(0,S.Sd)(ec||[])),(0,v.G7)(v.TO.TaggingSystem)&&(O.tags=ep,F.tags=ep.map(e=>e.id));let D=en({id:u,title:l,description:n,slug:i,jsonMetadata:c,editors:es,colorScheme:r,colorNamespace:h,certifiedBy:s,certificationDetails:d,theme:ey?eC.find(e=>e.id===ey):null,css:ef},O);if(z){J(!0);try{j(D),P(),e((0,p.t)("Dashboard properties updated"))}catch(e){console.error("Apply failed:",e)}finally{J(!1)}}else{let t=en({dashboard_title:l,description:n||null,slug:i||null,json_metadata:c||null,editors:(0,S.Sd)(es||[]),certified_by:s||null,certification_details:s&&d?d:null,css:ef||null,theme_id:ey},F);g.A.put({endpoint:`/api/v1/dashboard/${u}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(()=>{j(D),P(),e((0,p.t)("The dashboard has been saved"))},ek)}},onFieldsChange:()=>{eM&&eR("basic")},"data-test":"dashboard-edit-properties-form",layout:"vertical",initialValues:er,children:(0,a.Y)(s.S,{expandIconPosition:"end",defaultActiveKey:"basic",accordion:!0,modalMode:!0,items:[{key:"basic",label:(0,a.Y)(d.s,{title:(0,p.t)("General information"),subtitle:(0,p.t)("Dashboard name and URL configuration"),validateCheckStatus:!(null==(I=e_.basic)?void 0:I.hasErrors),testId:"basic-section"}),children:(0,a.Y)(O,{form:G,validationStatus:e_})},{key:"access",label:(0,a.Y)(d.s,{title:(0,p.t)("Access"),subtitle:(0,p.t)("Manage dashboard editors and access permissions"),validateCheckStatus:!(null==(R=e_.access)?void 0:R.hasErrors),testId:"access-section"}),children:(0,a.Y)(F,{isLoading:q,tags:ep,editors:es,viewers:ec,onChangeEditors:e=>{ed((0,S.B)(e))},onChangeViewers:e=>{eu((0,S.B)(e))},onChangeTags:e=>{em((0,b.A)(e).map(e=>({id:e.value,name:e.label})))},onClearTags:()=>{em([])}})},{key:"styling",label:(0,a.Y)(d.s,{title:(0,p.t)("Styling"),subtitle:(0,p.t)("Configure dashboard appearance, colors, and custom CSS"),validateCheckStatus:!(null==(U=e_.styling)?void 0:U.hasErrors),testId:"styling-section"}),children:(0,a.Y)(X,{themes:eC,selectedThemeId:ey,colorScheme:W,customCss:ef,hasCustomLabelsColor:eF,showChartTimestamps:ew,onThemeChange:e=>eS(e||null),onColorSchemeChange:ej,onCustomCssChange:eN,onShowChartTimestampsChange:ex,addDangerToast:t})},{key:"refresh",label:(0,a.Y)(d.s,{title:(0,p.t)("Refresh settings"),subtitle:(0,p.t)("Configure automatic dashboard refresh"),validateCheckStatus:!(null==(L=e_.refresh)?void 0:L.hasErrors),testId:"refresh-section"}),children:(0,a.Y)(ee,{refreshFrequency:ev,onRefreshFrequencyChange:e=>eb(e)})},{key:"certification",label:(0,a.Y)(d.s,{title:(0,p.t)("Certification"),subtitle:(0,p.t)("Add certification details for this dashboard"),validateCheckStatus:!(null==(M=e_.certification)?void 0:M.hasErrors),testId:"certification-section"}),children:(0,a.Y)(et,{isLoading:q})},{key:"advanced",label:(0,a.Y)(d.s,{title:(0,p.t)("Advanced settings"),subtitle:(0,p.t)("JSON metadata and advanced configuration"),validateCheckStatus:!(null==(N=e_.advanced)?void 0:N.hasErrors),testId:"advanced-section"}),children:(0,a.Y)(ea,{jsonMetadata:Q,jsonAnnotations:ei,validationStatus:e_,onJsonMetadataChange:Z})}]})})})})},4298(e,t,r){var a=r(2445),l=r(64260),n=r(27124),o=r(85614),i=r(65471),s=r(891);let d=(0,o.styled)(s.s.Group)`
  padding-left: ${({theme:e})=>2*e.sizeUnit}px;

  .ant-radio-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: ${({theme:e})=>.5*e.sizeUnit}px;

    &:last-child {
      margin-bottom: ${({theme:e})=>e.sizeUnit}px;
    }
  }
`,c=o.styled.div`
  display: flex;
  align-items: center;

  .ant-input {
    width: 80px;
    margin-left: ${({theme:e})=>e.sizeUnit}px;
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,u=[{value:0,label:(0,n.t)("Don't refresh")},{value:10,label:(0,n.t)("10 seconds")},{value:30,label:(0,n.t)("30 seconds")},{value:60,label:(0,n.t)("1 minute")},{value:300,label:(0,n.t)("5 minutes")},{value:1800,label:(0,n.t)("30 minutes")},{value:3600,label:(0,n.t)("1 hour")},{value:21600,label:(0,n.t)("6 hours")},{value:43200,label:(0,n.t)("12 hours")},{value:86400,label:(0,n.t)("24 hours")},{value:-1,label:(0,n.t)("Custom")}],h=e=>u.some(t=>t.value===e&&-1!==t.value),p=e=>!h(e)&&e>0?e.toString():"",m=e=>{if(e&&!(e<=0))return e>=1e3&&e%1e3==0?e/1e3:e};r.d(t,["Jc",0,(e,t,r)=>{let a=m(t);return e>0&&a&&e<a&&r?r:null},"ec",0,(e,t)=>{let r=[],a=m(t);return a&&e>0&&e<a&&r.push((0,n.t)("Refresh frequency must be at least %s seconds",a)),r},"ux",0,({value:e,onChange:t})=>{let[r,o]=(0,l.useState)(()=>h(e)?e:-1),[m,f]=(0,l.useState)(()=>p(e));return(0,l.useEffect)(()=>{let t=h(e)?e:-1;o(t),f(-1===t?p(e):"")},[e]),(0,a.FD)(d,{value:r,onChange:e=>{let r=Number(e.target.value);o(r),-1===r?(t(parseInt(m,10)||1),m||f("1")):t(r)},children:[u.slice(0,-1).map(e=>(0,a.Y)(s.s,{value:e.value,children:e.label},e.value)),(0,a.Y)(s.s,{value:-1,children:(0,a.FD)(c,{children:[(0,n.t)("Custom"),(0,a.Y)(i.Input,{type:"number",min:1,value:m,onChange:e=>{let r=e.target.value;f(r);let a=parseInt(r,10);a>=1&&t(a)},placeholder:"1+",disabled:-1!==r,onClick:e=>e.stopPropagation()}),(0,a.Y)("span",{children:(0,n.t)("seconds")})]})})]})}])},91129(e,t,r){r.d(t,{Jc:()=>a.Jc,ec:()=>a.ec,ux:()=>a.ux});var a=r(4298)},74821(e,t,r){r.d(t,{A:()=>i});var a=r(2445),l=r(17437),n=r(64260),o=r(8563);function i(e){let{id:t,label:r,colors:i}=e,[s,d]=(0,n.useState)(!1),c=(0,n.useRef)(null),u=(0,n.useRef)(null),h=()=>i.map((e,r)=>(0,a.Y)("span",{"data-test":"color",css:t=>(0,l.AH)`
          padding-left: ${t.sizeUnit/2}px;
          :before {
            content: '';
            display: inline-block;
            background-color: ${e};
            border: 1px solid ${"white"===e?"black":e};
            width: 9px;
            height: 10px;
          }
        `},`${t}-${r}`));return(0,a.Y)(o.m,{"data-testid":"tooltip",overlayClassName:"color-scheme-tooltip",title:()=>(0,a.FD)(a.FK,{children:[(0,a.Y)("span",{children:r}),(0,a.Y)("div",{children:h()})]}),open:s,children:(0,a.FD)("span",{className:"color-scheme-option",onMouseEnter:()=>{let e=c.current,t=u.current;e&&t&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight||t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&d(!0)},onMouseLeave:()=>{d(!1)},css:(0,l.AH)`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `,"data-test":t,children:[(0,a.Y)("span",{className:"color-scheme-label",ref:c,css:e=>(0,l.AH)`
            min-width: 125px;
            padding-right: ${2*e.sizeUnit}px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `,children:r}),(0,a.Y)("span",{ref:u,css:e=>(0,l.AH)`
            flex: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: ${e.sizeUnit}px;
          `,children:h()})]})},t)}},36652(e,t,r){r.d(t,{FA:()=>d,Ik:()=>h,dH:()=>u,un:()=>c});var a=r(73815),l=r(58561),n=r.n(l),o=r(20567);let i=Object.freeze(["dashboard","chart","saved_query"]),s=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function d(e,t,r){a.A.get({endpoint:`/api/v1/tag/${e}`}).then(({json:e})=>t(e.result)).catch(e=>r(e))}function c({objectType:e,objectId:t},r,l){if(void 0===e||void 0===t)throw Error("Need to specify objectType and objectId");if(!i.includes(e))throw Error(`objectType ${e} is invalid`);a.A.get({endpoint:`/api/v1/${e}/${t}`}).then(({json:e})=>r(e.result.tags.filter(e=>e.type===o.U.Custom))).catch(e=>l(e))}function u(e,t,r){let l=e.map(e=>e.name);a.A.delete({endpoint:`/api/v1/tag/?q=${n().encode(l)}`}).then(({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag")).catch(e=>{let t=e.message;return t?r(t):r("Error Deleting Tag")})}function h({tagIds:e=[],types:t},r,l){let n=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(n+=`&types=${t}`),a.A.get({endpoint:n}).then(({json:e})=>r(e.result)).catch(e=>l(e))}r.d(t,["iQ",0,s])}}]);