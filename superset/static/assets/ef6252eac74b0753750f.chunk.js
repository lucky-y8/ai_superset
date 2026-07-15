"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1703],{93225(e,t,r){var n=r(65471),l=r(85614);let a=(0,l.styled)(n.Form.Item)`
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
`;r.d(t,["e",0,a])},44084(e,t,r){r.r(t),r.d(t,{default:()=>f});var n=r(2445),l=r(27124),a=r(25365),i=r(64260),o=r(68292),s=r(93225),u=r(57885),d=r(96526);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e){let{data:t,formData:r,height:f,width:p,setDataMask:g,setHoveredFilter:h,unsetHoveredFilter:v,setFocusedFilter:m,unsetFocusedFilter:b,setFilterActive:S,filterState:y,inputRef:w}=e,{defaultValue:$}=r,[x,M]=(0,i.useState)(null!=$?$:[]),k=(0,i.useMemo)(()=>t.reduce((e,{duration:t,name:r})=>c({},e,{[t]:r}),{}),[JSON.stringify(t)]),z=e=>{let t=(0,a.A)(e),[r]=t,n=r?k[r]:void 0,l={};r&&(l.time_grain_sqla=r),M(t),g({extraFormData:l,filterState:{label:n,value:t.length?t:null}})};(0,i.useEffect)(()=>{z(null!=$?$:[])},[JSON.stringify($)]),(0,i.useEffect)(()=>{var e;z(null!=(e=y.value)?e:[])},[JSON.stringify(y.value)]);let C={};y.validateMessage&&(C.extra=(0,n.Y)(d.Mo,{status:y.validateStatus,children:y.validateMessage}));let O=(t||[]).map(e=>{let{name:t,duration:r}=e;return{label:t,value:r}}).filter(e=>{let t=r.timeGrains;return!t||0===t.length||t.includes(e.value)||x.includes(e.value)}),A=0===O.length?(0,l.t)("No data"):(0,l.tn)("%s option","%s options",O.length,O.length),E=(0,i.useCallback)((e,t)=>{if(void 0===r.sortAscending)return 0;let n=(0,u.qw)("label");return r.sortAscending?n(e,t):n(t,e)},[r.sortAscending]);return(0,n.Y)(d.j3,{height:f,width:p,children:(0,n.Y)(s.e,c({validateStatus:y.validateStatus},C,{children:(0,n.Y)("div",{onMouseEnter:h,onMouseLeave:v,children:(0,n.Y)(o.A,{name:r.nativeFilterId,allowClear:!0,value:x,placeholder:A,onChange:z,onBlur:b,onFocus:m,ref:w,options:O,onOpenChange:S,sortComparator:E})})}))})}},96526(e,t,r){var n=r(85614),l=r(93225);let a=n.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>0===e?"100%":`${e}px`};
`;(0,n.styled)(l.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let i=n.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`;r.d(t,["Mo",0,i,"j3",0,a])}}]);