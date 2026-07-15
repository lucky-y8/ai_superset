"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6648],{95980(e,t,r){r.d(t,{M9:()=>s,TX:()=>u,cy:()=>i});var n=r(66401),l=r(25365),a=r(96003);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let i=(e,t=!1,r=!1)=>{let l=new Date;if("now"===e||"No filter"===e||""===e)return l;if("today"===e)return l.setHours(0,0,0,0),l;if(r?l.setHours(-l.getTimezoneOffset()/60,0,0,0):l.setHours(0,0,0,0),t&&(null==e?void 0:e.includes("Last")))return l;switch(e){case"Last day":return l.setUTCDate(l.getUTCDate()-1),l;case"Last week":return l.setUTCDate(l.getUTCDate()-7),l;case"Last month":return l.setUTCMonth(l.getUTCMonth()-1),l;case"Last quarter":return l.setUTCMonth(l.getUTCMonth()-3),l;case"Last year":return l.setUTCFullYear(l.getUTCFullYear()-1),l;case"previous calendar week":return t?l.setDate(l.getDate()-l.getDay()+1):l.setDate(l.getDate()-l.getDay()-6),l;case"previous calendar month":return t?l.setDate(1):(l.setDate(1),l.setMonth(l.getMonth()-1)),l;case"previous calendar year":return t?l.setFullYear(l.getFullYear(),0,1):l.setFullYear(l.getFullYear()-1,0,1),l}if(null==e?void 0:e.includes("ago")){let t=e.split(" "),r=parseInt(t[0],10);switch(t[1]){case"day":case"days":l.setUTCDate(l.getUTCDate()-r);break;case"week":case"weeks":l.setUTCDate(l.getUTCDate()-7*r);break;case"month":case"months":l.setUTCMonth(l.getUTCMonth()-r);break;case"year":case"years":l.setUTCFullYear(l.getUTCFullYear()-r)}return l}let a=null==e?void 0:e.split("-"),o=null;return(o=a&&!(0,n.A)(a)?1===a.length?new Date(Date.UTC(parseInt(a[0],10),0)):2===a.length?new Date(Date.UTC(parseInt(a[0],10),parseInt(a[1],10)-1)):3===a.length?new Date(parseInt(a[0],10),parseInt(a[1],10)-1,parseInt(a[2],10)):new Date(e):new Date(e))&&!Number.isNaN(o.getTime())?(r?o.setHours(-o.getTimezoneOffset()/60,0,0,0):o.setHours(0,0,0,0),o):null},s=(e,t,r)=>{let n;if(!Number.isNaN((n="now"===e||"today"===e?new Date:new Date(e)).getTime())){switch(t){case"second":n.setSeconds(n.getSeconds()+r);break;case"minute":n.setMinutes(n.getMinutes()+r);break;case"hour":n.setHours(n.getHours()+r);break;case"day":n.setDate(n.getDate()+r);break;case"week":n.setDate(n.getDate()+7*r);break;case"month":n.setMonth(n.getMonth()+r);break;case"quarter":n.setMonth(n.getMonth()+3*r);break;case"year":n.setFullYear(n.getFullYear()+r)}return n}return null},u=({timeRangeFilter:e,shifts:t,startDate:r,includeFutureOffsets:n=!0})=>{var u,c,d,m,f;let g,{customRange:h,matchedFlag:p}=(0,a.t)(null!=(u=null==e?void 0:e.comparator)?u:""),y=null,v=null;if(p){let{sinceDatetime:e,sinceMode:t,sinceGrain:r,sinceGrainValue:n,untilDatetime:l,untilMode:a,untilGrain:u,untilGrainValue:c}=o({},h);null==(y="relative"!==t?"specific"===t?new Date(e):i(e,!1,!0):s(e,r,n))||y.setHours(0,0,0,0),null==(v="relative"!==a?"specific"===a?new Date(l):i(l,!1,!0):s(l,u,c))||v.setHours(0,0,0,0)}let b=null==t?void 0:t.includes("custom"),T=null==t?void 0:t.includes("inherit");b&&(g=p?new Date(new Date(r).setUTCHours(new Date(r).getTimezoneOffset()/60,0,0,0)).getTime():null==(f=i(r))?void 0:f.getTime());let[x,w]=(null!=(c=null==e?void 0:e.comparator)?c:"").split(" : ").map(e=>e.trim()),D=(null==(d=null!=y?y:i(x,!1,!1))?void 0:d.getTime())||0,$=(null==(m=null!=v?v:i(w||x,!0,!1))?void 0:m.getTime())||0,C=g&&D&&Math.round((D-g)/864e5),U=T&&$&&D&&Math.round(($-D)/864e5),k=(0,l.A)(t).map(e=>{if("custom"===e&&void 0!==C&&!Number.isNaN(C)){if(n&&C<0)return`${-1*C} days after`;if(C>=0&&D)return`${C} days ago`}if("inherit"===e&&U&&!Number.isNaN(U)){if(n&&U<0)return`${-1*U} days after`;if(U>0)return`${U} days ago`}return e}).filter(e=>"custom"!==e&&"inherit"!==e);return(0,l.A)(k)}},36648(e,t,r){r.r(t),r.d(t,{default:()=>x});var n=r(2445),l=r(64260),a=r(27124),o=r(2426),i=r(95980),s=r(25365),u=r(85614),c=r(17437),d=r(8563),m=r(37123),f=r(66155),g=r(66401),h=r(64741);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let y=u.styled.div`
  ${({theme:e,metricNameFontSize:t})=>`
    font-family: ${e.fontFamily};
    font-weight: ${e.fontWeightNormal};
    font-size: ${t||2*e.fontSizeSM}px;
    text-align: center;
    margin-bottom: ${3*e.sizeUnit}px;
  `}
`,v=u.styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 12px;
`,b=u.styled.div`
  ${({theme:e,subheaderFontSize:t})=>`
    font-weight: ${e.fontWeightLight};
    display: flex;
    justify-content: center;
    font-size: ${String(t)||20}px;
    flex: 1 1 0px;
  `}
`,T=u.styled.span`
  ${({theme:e,backgroundColor:t,textColor:r})=>`
    background-color: ${t};
    color: ${r};
    padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
    border-radius: ${e.borderRadius}px;
    margin-right: ${e.sizeUnit}px;
  `}
`;function x(e){let{height:t,width:r,bigNumber:x,prevNumber:w,valueDifference:D,percentDifferenceFormattedString:$,metricName:C,metricNameFontSize:U,headerFontSize:k,subheaderFontSize:H,comparisonColorEnabled:M,comparisonColorScheme:z,percentDifferenceNumber:F,currentTimeRangeFilter:N,startDateOffset:S,shift:Y,subtitle:A,subtitleFontSize:j,dashboardTimeRange:O,showMetricName:I}=e,[E,K]=(0,l.useState)("");(0,l.useEffect)(()=>{N&&(Y||S)?(!(0,g.A)(Y)||S)&&Promise.resolve((0,o.x9)(null!=O?O:N.comparator,N.subject)).then(e=>{var t;let r=null==e||null==(t=e.value)?void 0:t.match(m.Io),[n,l]=null!=r?r:[],a=(0,i.TX)({timeRangeFilter:p({},N,{comparator:`${n} : ${l}`}),shifts:(0,s.A)(Y),startDate:S||""});(0,o.x9)(null!=O?O:N.comparator,N.subject,(0,s.A)(a)).then(e=>{let t=(0,s.A)(e.value).flat()[0].split(`vs
`);K(t.length>1?t[1].trim():t[0])})}):K("")},[N,Y,S,O]);let L=(0,u.useTheme)(),R=5*L.sizeUnit,P=(0,c.AH)`
    font-family: ${L.fontFamily};
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${t}px;
    width: ${r}px;
    overflow: auto;
  `,W=(0,c.AH)`
    font-size: ${String(k)||60}px;
    font-weight: ${L.fontWeightNormal};
    text-align: center;
    margin-bottom: ${4*L.sizeUnit}px;
  `,B=u.styled.div`
    ${({theme:e})=>`
    font-family: ${e.fontFamily};
    font-weight: ${e.fontWeightNormal};
    text-align: center;
    margin-top: -10px;
    margin-bottom: ${4*e.sizeUnit}px;
  `}
  `,q=(0,c.AH)`
    color: ${!M||0===F?L.colorTextTertiary:F>0?z===f.mH.Green?L.colorSuccess:L.colorError:z===f.mH.Red?L.colorSuccess:L.colorError};
    margin-left: ${L.sizeUnit}px;
  `,G=L.colorBgContainer,X=L.colorTextTertiary,{backgroundColor:V,textColor:J}=(0,l.useMemo)(()=>{let e=G,t=X;if(M&&0!==F){let r=F>0&&z===f.mH.Green||F<0&&z===f.mH.Red;e=r?L.colorSuccessBg:L.colorErrorBg,t=r?L.colorSuccessText:L.colorErrorText}return{backgroundColor:e,textColor:t}},[L,z,M,F]),Q=(0,l.useMemo)(()=>[{defaultSymbol:"#",value:w,tooltipText:(0,a.t)("Data for %s",E||"previous range"),columnKey:"Previous value"},{defaultSymbol:"△",value:D,tooltipText:(0,a.t)("Value difference between the time periods"),columnKey:"Delta"},{defaultSymbol:"%",value:$,tooltipText:(0,a.t)("Percentage difference between the time periods"),columnKey:"Percent change"}].map(t=>{var r;let n=null==(r=e.columnConfig)?void 0:r[t.columnKey];return p({},t,{symbol:(null==n?void 0:n.displayTypeIcon)===!1?"":t.defaultSymbol,label:(null==n?void 0:n.customColumnName)||t.columnKey})}),[E,w,D,$,e.columnConfig]).filter(t=>{var r,n;return(null==(n=e.columnConfig)||null==(r=n[t.columnKey])?void 0:r.visible)!==!1}),{isOverflowing:Z,symbolContainerRef:_,wrapperRef:ee}=(e=>{let t=(0,l.useRef)(null),r=(0,l.useRef)(null),[n,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let n,l=t.current,o=r.current;if(l&&o){let t=Array.from(l.children);(n=new ResizeObserver((0,h.A)(()=>{t.reduce((e,t)=>{var r,n;return e+(null!=(r=null==(n=t.firstElementChild)?void 0:n.scrollWidth)?r:0)},0)+e*Math.max(t.length-1,0)>o.clientWidth?a(!0):a(!1)},500))).observe(document.body),t.forEach(e=>{n.observe(e)})}return()=>null==n?void 0:n.disconnect()},[e]),{isOverflowing:n,symbolContainerRef:t,wrapperRef:r}})(R);return(0,n.Y)("div",{css:P,ref:ee,children:(0,n.FD)(v,{css:Z&&(0,c.AH)`
            width: fit-content;
            margin: auto;
            align-items: flex-start;
            overflow: auto;
          `,children:[I&&C&&(0,n.Y)(y,{metricNameFontSize:U,children:C}),(0,n.FD)("div",{css:W,children:[x,0!==F&&(0,n.Y)("span",{css:q,children:F>0?"↑":"↓"})]}),A&&(0,n.Y)(B,{style:{fontSize:`${j*t*.4}px`},children:A}),Q.length>0&&(0,n.Y)("div",{css:[(0,c.AH)`
                display: flex;
                justify-content: space-around;
                gap: ${R}px;
                min-width: 0;
                flex-shrink: 1;
              `,Z?(0,c.AH)`
                    flex-direction: column;
                    align-items: flex-start;
                    width: fit-content;
                  `:(0,c.AH)`
                    align-items: center;
                    width: 100%;
                  `],ref:_,children:Q.map((t,r)=>{var l,a;return(0,n.Y)(b,{subheaderFontSize:H,children:(0,n.FD)(d.m,{id:"tooltip",placement:"top",title:t.tooltipText,children:[t.symbol&&(0,n.Y)(T,{backgroundColor:r>0?V:G,textColor:r>0?J:X,children:t.symbol}),t.value," ",(null==(a=e.columnConfig)||null==(l=a[t.columnKey])?void 0:l.customColumnName)||""]})},`comparison-symbol-${t.columnKey}`)})})]})})}}}]);