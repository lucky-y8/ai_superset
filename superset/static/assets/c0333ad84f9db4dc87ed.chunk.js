"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2842],{93225(e,t,l){var r=l(65471),n=l(85614);let i=(0,n.styled)(r.Form.Item)`
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
`;l.d(t,["e",0,i])},34617(e,t,l){l.d(t,{A:()=>a});var r=l(2445),n=l(65471);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function a(e){return(0,r.Y)(n.Slider,i({},e))}},77366(e,t,l){l.d(t,{A:()=>i,v:()=>a});var r,n,i=((r={}).Simple="SIMPLE",r.Sql="SQL",r),a=((n={}).Having="HAVING",n.Where="WHERE",n)},72842(e,t,l){l.r(t),l.d(t,{default:()=>k});var r=l(2445),n=l(27124),i=l(73371),a=l(25365),o=l(18349),u=l(57409),s=l(7979),d=l(85614),c=l(17437),p=l(64260),m=l(44057),v=l(21879),f=l(65471),h=l(34617),x=l(93225),g=l(60685),y=l(8563),b=l(19251),S=l(54299),M=l(86814),$=l(54367);let w=d.styled.span`
  margin: 0 ${({theme:e})=>3*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorSplit};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
  align-content: center;
`,A=d.styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .ant-input-number {
    min-width: 80px;
    position: relative;
  }
`,I=d.styled.div`
  ${({theme:e})=>`
    margin: ${4*e.sizeUnit}px 0;
    padding: 0 ${e.sizeUnit}px;
  `}
`,E=d.styled.div`
  ${({theme:e})=>`
    position: absolute;
    top: -${6*e.sizeUnit}px;
    right: 0px;
    z-index: 100;
    display: flex;
    align-items: center;

    .tooltip-icon {
      margin-left: ${2*e.sizeUnit}px;
    }
  `}
`,N=d.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${4*e.sizeUnit}px;
    width: 100%;
    align-items: center;

    .slider-wrapper {
      display: flex;
      align-items: center;
      flex: 2;
    }

    .slider-container {
      flex: 1;
      min-width: 180px;
    }

    .inputs-container {
      min-width: 160px;
      max-width: 200px;
    }
  `}
`,Y=d.styled.div`
  ${({theme:e})=>`
  border-radius: ${e.borderRadius}px;
  transition: box-shadow ${e.motionDurationMid} ease-in-out;
  &:focus {
    box-shadow: 0 0 0 2px ${e.colorPrimary};
  }
  &:focus-visible {
    outline: none;
  }`}
`,C=(0,o.gV)(i.A.SMART_NUMBER),z=(e,t)=>{let l=t-e;if(l<=0)return .01;let r=l/100,n=Math.pow(10,Math.floor(Math.log10(r)));return(r=Math.round(r/n)*n)||1e-4},F=(e,t,l,r,i)=>{let[a,o]=e,u=(0,n.t)("Please provide a valid min or max value"),s=(0,n.t)("Min value cannot be greater than max value"),d=(0,n.t)("Numbers must be within %(min)s and %(max)s",{min:t,max:l});if(void 0!==i){let e=i===$.y.Minimum||i===$.y.Exact?a:o;return(0,v.A)(e)?(0,v.A)(e)&&(e<t||e>l)?{isValid:!1,errorMessage:d}:{isValid:!0,errorMessage:null}:{isValid:!1,errorMessage:u}}return r||null!==a||null!==o?r&&null===a&&null===o?{isValid:!1,errorMessage:u}:null!==a&&null!==o&&a>o?{isValid:!1,errorMessage:s}:null!==a&&a<t||null!==o&&o>l?{isValid:!1,errorMessage:d}:{isValid:!0,errorMessage:null}:{isValid:!0,errorMessage:null}};function k(e){let t=(0,d.useTheme)(),{data:l,formData:i,height:o,width:v,setDataMask:k,setFocusedFilter:D,unsetFocusedFilter:T,setHoveredFilter:U,unsetHoveredFilter:V,setFilterActive:L,filterState:O,inputRef:q,filterBarOrientation:R=m.QI.Vertical,isOverflowingFilterBar:W}=e,[j]=l,{min:H,max:K}=j,G=(0,p.useMemo)(()=>void 0!==H&&void 0!==K?z(H,K):.01,[H,K]),{groupby:P,enableSingleValue:Q,enableEmptyFilter:B,defaultValue:J}=i,X=(null==i?void 0:i.rangeDisplayMode)||b.l.SliderAndInput,_=Q===$.y.Exact,[Z=""]=(0,a.A)(P).map(s.A),[ee,et]=(0,p.useState)(O.value||J||[null,null]),[el,er]=(0,p.useState)(null),en=(0,p.useMemo)(()=>{let[e,t]=ee;return Q===$.y.Minimum||Q===$.y.Exact?null!==e?e:H:Q===$.y.Maximum?null!==t?t:K:[null!==e?e:H,null!==t?t:K]},[ee,H,K,Q]),ei=(0,p.useCallback)(e=>{k({extraFormData:{},filterState:{value:null,label:"",validateStatus:"error",validateMessage:e||""}})},[k]),ea=(0,p.useCallback)(e=>{let[t,l]=e;k({extraFormData:(0,M.SO)(Z,t,l),filterState:{value:_?[t,t]:[t,l],label:((e,t,l=!1)=>l&&null!==e||null!==e&&e===t?`x = ${C(e)}`:null!==e&&null!==t?`${C(e)} ≤ x ≤ ${C(t)}`:null!==e?`x ≥ ${C(e)}`:null!==t?`x ≤ ${C(t)}`:"")(t,l,_),validateStatus:void 0,validateMessage:""}})},[k]);(0,p.useEffect)(()=>{if((null==j?void 0:j.min)!==void 0||(null==j?void 0:j.max)!==void 0){if("error"===O.validateStatus){if(er(O.validateMessage),el!==O.validateMessage){let{isValid:e,errorMessage:t}=F(ee,H,K,B,Q);e?(er(null),ea(ee)):(er(t),ei(t))}return}if(void 0===O.value&&!O.validateStatus){et([null,null]),ea([null,null]);return}if((0,u.A)(J,ee))return void ea(J);O.value&&!O.validateStatus&&(et(O.value),ea(O.value))}},[JSON.stringify(O.value)]);let eo=(0,p.useMemo)(()=>{switch(Q){case $.y.Minimum:return(0,n.t)("Filters for values greater than or equal.");case $.y.Maximum:return(0,n.t)("Filters for values less than or equal.");case $.y.Exact:return(0,n.t)("Filters for values equal to this exact value.");default:return null}},[Q]),eu=(0,p.useRef)(!1),es=e=>{eu.current=!!/^[0-9]$/.test(e.key)},ed=(0,p.useCallback)((e,t)=>{if((null==j?void 0:j.min)===void 0&&(null==j?void 0:j.max)===void 0)return;let l=e;null!==e&&null===ee[t]&&(eu.current?(l=e,eu.current=!1):0===t&&1===e?l=H+1:0===t&&-1===e?l=H-1:1===t&&1===e?l=K+1:1===t&&-1===e&&(l=K-1));let r=0===t?[l,ee[1]]:[ee[0],l];et(r);let{isValid:n,errorMessage:i}=F(r,H,K,B,Q);if(!n){er(i),ei(i);return}er(null),ea(r)},[H,K,B,Q,ei,ea,ee]),ec=(0,p.useCallback)(e=>{let t;if(void 0!==Q){let l="number"==typeof e?e:Array.isArray(e)&&e.length>0?e[0]:(H+K)/2;t=Q===$.y.Minimum?[l,null]:Q===$.y.Maximum?[null,l]:[l,l]}else{let l=Array.isArray(e)?e:[H,K],[r,n]=l.length>=2?[l[0],l[1]]:[H,K];t=[r,n]}et(t),er(null),ea(t)},[H,K,Q,ea]),ep=(0,p.useCallback)(()=>{let e=(0,n.t)("Choose numbers between %(min)s and %(max)s",{min:H,max:K});return el?{message:el,status:"error"}:void 0!==Q&&eo?{message:eo,status:"help"}:{message:e,status:"help"}},[el,H,K,Q,eo]),em=(0,p.useCallback)(()=>{let{message:e,status:t}=ep();return R===m.QI.Vertical?(0,r.Y)(S.Mo,{status:t,children:e}):null},[ep,R]),ev=(0,p.useCallback)(()=>{let{message:e,status:l}=ep();return(0,r.Y)(y.m,{title:e,placement:"top",children:(0,r.Y)(g.F.InfoCircleOutlined,{iconSize:"m",iconColor:"error"===l?t.colorError:t.colorIcon,className:"tooltip-icon"})})},[ep]);(0,p.useEffect)(()=>{if(void 0!==Q)switch(Q){case $.y.Minimum:case $.y.Exact:null!==ee[1]&&ed(null,1);break;case $.y.Maximum:null!==ee[0]&&ed(null,0)}k({extraFormData:{},filterState:{value:null,label:""}})},[Q]);let ef=()=>void 0!==Q?(0,r.Y)(I,{children:(0,r.Y)(h.A,{min:H,max:K,step:G,value:Array.isArray(en)?en[0]:en,onChange:ec,tooltip:{formatter:e=>null!==e?C(e):""}})}):(0,r.Y)(I,{"data-test":"range-filter-slider",children:(0,r.Y)(h.A,{min:H,max:K,step:G,range:!0,value:Array.isArray(en)?en:[H,en],onChange:ec,tooltip:{formatter:e=>null!==e?C(e):""}})}),eh=()=>(0,r.FD)(A,{tabIndex:-1,onFocus:D,onBlur:T,onMouseEnter:U,onMouseLeave:V,onMouseDown:()=>L(!0),onMouseUp:()=>L(!1),children:[(void 0===Q||Q===$.y.Minimum||Q===$.y.Exact)&&(0,r.Y)(f.InputNumber,{value:ee[0],onChange:e=>ed(e,0),onKeyDown:es,placeholder:`${H}`,style:{width:"100%"},status:O.validateStatus,"data-test":"range-filter-from-input"}),void 0===Q&&(0,r.Y)(w,{children:"-"}),(void 0===Q||Q===$.y.Maximum)&&(0,r.Y)(f.InputNumber,{value:ee[1],onChange:e=>ed(e,1),onKeyDown:es,placeholder:`${K}`,style:{width:"100%"},"data-test":"range-filter-to-input",status:O.validateStatus})]});return(0,r.Y)(S.j3,{height:o,width:v,children:Number.isNaN(Number(H))||Number.isNaN(Number(K))?(0,r.Y)("h4",{children:(0,n.t)("Chosen non-numeric column")}):(0,r.Y)(x.e,{"aria-labelledby":`filter-name-${i.nativeFilterId}`,children:R!==m.QI.Horizontal||W?(0,r.Y)(r.FK,{children:(0,r.FD)("div",{style:{position:"relative"},children:[W&&(0,r.Y)(E,{children:(0,r.Y)(ev,{})}),(0,r.FD)(Y,{ref:q,tabIndex:-1,css:(0,c.AH)`
                    padding-top: 1px;
                    margin-top: -1px;
                  `,children:[(X===b.l.Slider||X===b.l.SliderAndInput)&&ef(),(X===b.l.Input||X===b.l.SliderAndInput)&&eh()]}),(0,r.Y)(em,{})]})}):(0,r.Y)(Y,{ref:q,tabIndex:-1,children:(0,r.FD)(N,{children:[(0,r.Y)(ev,{}),(X===b.l.Slider||X===b.l.SliderAndInput)&&(0,r.Y)("div",{className:"slider-wrapper",children:(0,r.Y)("div",{className:"slider-container",children:ef()})}),(X===b.l.Input||X===b.l.SliderAndInput)&&(0,r.Y)("div",{className:"inputs-container",children:eh()})]})})})})}l.d(t,["calculateStep",0,z])},19251(e,t,l){l.d(t,{l:()=>n});var r,n=((r={}).Slider="slider",r.Input="input",r.SliderAndInput="slider-and-input",r)},54299(e,t,l){var r=l(85614),n=l(93225);let i=r.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>0===e?"100%":`${e}px`};
`;(0,r.styled)(n.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let a=r.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`;l.d(t,["Mo",0,a,"j3",0,i])},86814(e,t,l){l.d(t,{Sg:()=>a});var r=l(63021);l(62388);var n=l(77366),i=l(29972);function a({timeFormatter:e,numberFormatter:t}={}){return(l,n)=>{if(null==l)return"<NULL>";if("boolean"==typeof l)return l?"TRUE":"FALSE";if(n===r.GenericDataType.Boolean)try{return JSON.parse(String(l).toLowerCase())?"TRUE":"FALSE"}catch{return"FALSE"}return"string"==typeof l?l:"bigint"==typeof l?String(l):e&&n===r.GenericDataType.Temporal?e(l):t&&"number"==typeof l&&n===r.GenericDataType.Numeric?t(l):String(l)}}l.d(t,["SO",0,(e,t,l)=>{let r=[];return null!=t&&t!==l&&r.push({col:e,op:">=",val:t}),null!=l&&l!==t&&r.push({col:e,op:"<=",val:l}),null!=l&&null!=t&&l===t&&r.push({col:e,op:"==",val:l}),r.length?{filters:r}:{}},"pA",0,(e,t,l=!1,r=!1,a=i.d.Exact)=>{let o={};return l?o.adhoc_filters=[{expressionType:n.A.Sql,clause:n.v.Where,sqlExpression:"1 = 0"}]:null!=t&&0!==t.length&&(a!==i.d.Exact&&"string"==typeof t[0]?o.filters=[{col:e,op:r?"NOT ILIKE":"ILIKE",val:function(e,t){switch(t){case i.d.Contains:return`%${e}%`;case i.d.StartsWith:return`${e}%`;case i.d.EndsWith:return`%${e}`;default:return e}}(t[0],a)}]:o.filters=[{col:e,op:r?"NOT IN":"IN",val:t}]),o}])}}]);