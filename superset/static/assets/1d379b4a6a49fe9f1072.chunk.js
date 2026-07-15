"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3039],{61920(e,t,l){var a=l(2445),n=l(27124),i=l(85614),r=l(54295);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let s={everyText:(0,n.t)("every"),emptyMonths:(0,n.t)("every month"),emptyMonthDays:(0,n.t)("every day of the month"),emptyMonthDaysShort:(0,n.t)("day of the month"),emptyWeekDays:(0,n.t)("every day of the week"),emptyWeekDaysShort:(0,n.t)("day of the week"),emptyHours:(0,n.t)("every hour"),emptyMinutes:(0,n.t)("every minute"),emptyMinutesForHourPeriod:(0,n.t)("every"),yearOption:(0,n.t)("year"),monthOption:(0,n.t)("month"),weekOption:(0,n.t)("week"),dayOption:(0,n.t)("day"),hourOption:(0,n.t)("hour"),minuteOption:(0,n.t)("minute"),rebootOption:(0,n.t)("reboot"),prefixPeriod:(0,n.t)("Every"),prefixMonths:(0,n.t)("in"),prefixMonthDays:(0,n.t)("on"),prefixWeekDays:(0,n.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,n.t)("or"),prefixHours:(0,n.t)("at"),prefixMinutes:(0,n.t)(":"),prefixMinutesForHourPeriod:(0,n.t)("at"),suffixMinutesForHourPeriod:(0,n.t)("minute(s)"),errorInvalidCron:(0,n.t)("Invalid cron expression"),clearButtonText:(0,n.t)("Clear"),weekDays:[(0,n.t)("Sunday"),(0,n.t)("Monday"),(0,n.t)("Tuesday"),(0,n.t)("Wednesday"),(0,n.t)("Thursday"),(0,n.t)("Friday"),(0,n.t)("Saturday")],months:[(0,n.t)("January"),(0,n.t)("February"),(0,n.t)("March"),(0,n.t)("April"),(0,n.t)("May"),(0,n.t)("June"),(0,n.t)("July"),(0,n.t)("August"),(0,n.t)("September"),(0,n.t)("October"),(0,n.t)("November"),(0,n.t)("December")],altWeekDays:[(0,n.t)("SUN"),(0,n.t)("MON"),(0,n.t)("TUE"),(0,n.t)("WED"),(0,n.t)("THU"),(0,n.t)("FRI"),(0,n.t)("SAT")],altMonths:[(0,n.t)("JAN"),(0,n.t)("FEB"),(0,n.t)("MAR"),(0,n.t)("APR"),(0,n.t)("MAY"),(0,n.t)("JUN"),(0,n.t)("JUL"),(0,n.t)("AUG"),(0,n.t)("SEP"),(0,n.t)("OCT"),(0,n.t)("NOV"),(0,n.t)("DEC")]},c=(0,i.styled)(e=>(0,a.Y)(r.Ay,o({locale:s},e)))`
  ${({theme:e})=>`

    /* Boilerplate styling for ReactCronPicker imported explicitly in GlobalStyles.tsx */

    /* When year period is selected */

    :has(.react-js-cron-months) {
      display: grid !important;
      grid-template-columns: repeat(2, 50%);
      column-gap: ${e.sizeUnit}px;
      row-gap: ${2*e.sizeUnit}px;
      div:has(.react-js-cron-hours) {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        .react-js-cron-field {
          width: 50%;
        }
      }
    }

    /* When month period is selected */

    :not(:has(.react-js-cron-months)) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      column-gap: ${e.sizeUnit}px;
      row-gap: ${2*e.sizeUnit}px;
      .react-js-cron-period {
        grid-column: span 2;
      }
      div:has(.react-js-cron-hours) {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        .react-js-cron-field {
          width: 50%;
        }
      }
    }

    /* When week period is selected */

    :not(:has(.react-js-cron-month-days)) {
      .react-js-cron-week-days {
        grid-column: span 2;
      }
    }

    /* For proper alignment of inputs and span elements */

    :not(div:has(.react-js-cron-hours)) {
      display: flex;
      flex-wrap: nowrap;
    }

    div:has(.react-js-cron-hours) {
      width: 100%;
    }

    .react-js-cron-minutes > span {
      padding-left: ${e.sizeUnit}px;
    }

    /* Sizing of select container */

    .react-js-cron-select.ant-select {
      width: 100%;
      .ant-select-content {
        flex-wrap: nowrap;
      }
    }

    .react-js-cron-field {
      width: 100%;
      margin-bottom: 0px;
      > span {
        margin-left: 0px;
      }
    }

    .react-js-cron-custom-select .ant-select-placeholder {
      flex: auto;
      border-radius: ${e.borderRadius}px;
    }

    .react-js-cron-custom-select .ant-select-content-item {
      align-self: center;
    }

    .react-js-cron-select > div:first-of-type,
    .react-js-cron-custom-select {
      border-radius: ${e.borderRadius}px;
    }
  `}
`;l.d(t,["l",0,c])},82165(e,t,l){l.d(t,{hp:()=>s});var a=l(45507);l(88569);let n={name:"GMT Standard Time",value:"Africa/Abidjan"},i=a.XV.tz("2021-01-01"),r=a.XV.tz("2021-07-01"),o={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[n.name,n.name],"060":["GMT Standard Time - London","British Summer Time"]};function s(e){return i.tz(e).utcOffset().toString()+r.tz(e).utcOffset().toString()}let c=new class{isCached(){return null!==this.cachedOptions}getOptions(){return this.cachedOptions}computeOptions(){let e=(0,a.XV)(new Date),t=Intl.supportedValuesOf("timeZone"),l=new Set,n=[];for(let i of t){let t=this.getOffsetKey(i),r=function(e,t,l,n){let i=l(e),r=t.tz(e),o=(0,a._q)(r,e),s=n[i];return s?o?s[1]:s[0]:e}(i,e,this.getOffsetKey,this.offsetsToName),o=e.tz(i).format("Z"),s=`GMT ${o} (${r})`;l.has(s)||(l.add(s),n.push({label:s,value:i,offsets:t,timezoneName:i}))}return this.cachedOptions=n,n}getOptionsAsync(){return this.cachedOptions?Promise.resolve(this.cachedOptions):(this.computePromise||(this.computePromise=new Promise((e,t)=>{let l=()=>{try{let t=this.computeOptions();e(t)}catch(e){t(e)}finally{this.computePromise=null}};"function"==typeof queueMicrotask?queueMicrotask(l):setTimeout(l,0)})),this.computePromise)}constructor(e,t){this.getOffsetKey=e,this.offsetsToName=t,this.cachedOptions=null,this.computePromise=null}}(s,o);l.d(t,["GI",0,n,"sy",0,c])},10164(e,t,l){l.d(t,{A:()=>u});var a=l(2445),n=l(64260),i=l(27124),r=l(68292),o=l(45507),s=l(82165);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function d(e,t){let l,a=e||o.XV.tz.guess(),n=(0,s.hp)(a);for(let e of t){if(e.offsets===n&&e.timezoneName===a)return e.value;l||e.offsets!==n||(l=e.value)}return l||s.GI.value}function u(e){let{onTimezoneChange:t,timezone:l,minWidth:u="400px",placeholder:h}=e,p=function(e,t){if(null==e)return{};var l,a,n={},i=Object.getOwnPropertyNames(e);for(a=0;a<i.length;a++)!(t.indexOf(l=i[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l]);return n}(e,["onTimezoneChange","timezone","minWidth","placeholder"]),[m,v]=(0,n.useState)(s.sy.getOptions()),[f,b]=(0,n.useState)(!1),g=(0,n.useRef)(!1),_=(0,n.useCallback)(e=>{!e||m||f||(b(!0),s.sy.getOptionsAsync().then(e=>{v(e)}).finally(()=>b(!1)))},[m,f]),y=(0,n.useMemo)(()=>{if(!m)return;let e=(0,o.XV)();return(t,l)=>e.tz(t.timezoneName).utcOffset()-e.tz(l.timezoneName).utcOffset()},[m]),T=(0,n.useMemo)(()=>m?d(l,m):l||void 0,[l,m]);(0,n.useEffect)(()=>{m||f||(b(!0),s.sy.getOptionsAsync().then(e=>{v(e),l||g.current||(t(d(null,e)),g.current=!0)}).finally(()=>{b(!1)}))},[m,f,l,t]),(0,n.useEffect)(()=>{!m||l||g.current||(t(d(null,m)),g.current=!0)},[m,l,t]);let E=m?T:void 0;return(0,a.Y)(r.A,c({ariaLabel:(0,i.t)("Timezone selector"),onChange:e=>{t(e)},onOpenChange:_,value:E,options:m||[],sortComparator:y,loading:f,placeholder:f?(0,i.t)("Loading timezones..."):h,placement:"topLeft"},p))}l(88569)},97616(e,t,l){var a=l(2445),n=l(64260),i=l(64741),r=l(65471),o=l(23918),s=l(29138),c=l(97887),d=l(8563),u=l(27124),h=l(85614);l(15850);var p=l(36320);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}l.d(t,["A",0,function(e){var t;let{name:l,onChange:v=()=>{},initialValue:f,height:b=250,minLines:g=3,maxLines:_=10,offerEditInModal:y=!0,language:T,aboveEditorSection:E,readOnly:N=!1,resize:S=null,textAreaStyles:C={},tooltipOptions:O={},hotkeys:x=[],debounceDelay:R=null,"aria-required":A,value:F}=e,I=function(e,t){if(null==e)return{};var l,a,n={},i=Object.getOwnPropertyNames(e);for(a=0;a<i.length;a++)!(t.indexOf(l=i[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l]);return n}(e,["name","onChange","initialValue","height","minLines","maxLines","offerEditInModal","language","aboveEditorSection","readOnly","resize","textAreaStyles","tooltipOptions","hotkeys","debounceDelay","aria-required","value"]),Y=(0,h.useTheme)(),D=(0,n.useRef)(null);(0,n.useEffect)(()=>{R&&v?(D.current&&D.current.cancel(),D.current=(0,i.A)(v,R)):(D.current&&D.current.cancel(),D.current=null)},[v,R]),(0,n.useEffect)(()=>()=>{D.current&&D.current.flush()},[]);let w=(0,n.useCallback)(e=>{let t="object"==typeof e?e.target.value:e;D.current?D.current(t):null==v||v(t)},[v]),L=(0,n.useCallback)(e=>{null==x||x.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:t.func})})},[x]),k=(0,n.useCallback)((e=!1)=>{let t=e?40:g||12;if(T){let n=m({border:(null==Y?void 0:Y.colorBorder)?`1px solid ${Y.colorBorder}`:void 0,minHeight:`${t}em`,width:"auto"},C);S&&(n.resize=S,n.overflow="auto"),N&&(n.backgroundColor=null==Y?void 0:Y.colorBgMask);let i=(0,a.Y)("div",{children:(0,a.Y)(o.S9,m({mode:T,style:n,minLines:t,maxLines:e?1e3:_,editorProps:{$blockScrolling:!0},onLoad:L,defaultValue:null!=f?f:F,readOnly:N},I,{onChange:w}),l)});return O&&Object.keys(O).length>0?(0,a.Y)(d.m,m({},O,{children:i})):i}let n=(0,a.Y)("div",{children:(0,a.Y)(r.Input.TextArea,{placeholder:(0,u.t)("textarea"),onChange:w,defaultValue:null!=f?f:F,disabled:N,style:{height:b},"aria-required":A})});return O&&Object.keys(O).length>0?(0,a.Y)(d.m,m({},O,{children:n})):n},[g,_,T,Y,C,S,N,L,f,F,l,I,w,O,b,A]),M=(0,n.useMemo)(()=>(0,a.Y)(p.A,m({name:l},I)),[l,I]),z=(0,n.useMemo)(()=>(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{children:E}),k(!0)]}),[E,k]);return(0,a.FD)("div",{children:[M,k(),y&&(0,a.Y)(c.g,{modalTitle:M,triggerNode:(0,a.Y)(s.$n,{buttonSize:"small",style:{marginTop:null!=(t=null==Y?void 0:Y.sizeUnit)?t:4},children:(0,u.t)("Edit %s in modal",T)}),modalBody:z,responsive:!0})]})}])},63039(e,t,l){l.d(t,{tu:()=>ey,b5:()=>eS,Ay:()=>eO});var a=l(2445),n=l(64260),i=l(27124),r=l(13048),o=l(19202),s=l(51281),c=l(73815),d=l(85614),u=l(17437),h=l(58561),p=l.n(h),m=l(18847),v=l(7070),f=l(72620),b=l(58145),g=l(57885),_=l(65471),y=l(68292),T=l(10938),E=l(2404),N=l(62858),S=l(80967),C=l(8563),O=l(29138),x=l(57832),R=l(10020),A=l(47566),F=l(10164),I=l(82165),Y=l(97616),D=l(98267),w=l(50170),L=l(54299),k=l(61225),M=l(89495),z=l(61581),$=l(48511),j=l(60685),V=l(81549);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function P(e){let{timeUnit:t,min:l,name:i,value:r,placeholder:o,onChange:s}=e,c=function(e,t){if(null==e)return{};var l,a,n={},i=Object.getOwnPropertyNames(e);for(a=0;a<i.length;a++)!(t.indexOf(l=i[a])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l]);return n}(e,["timeUnit","min","name","value","placeholder","onChange"]),[d,u]=(0,n.useState)(!1);return(0,a.Y)(_.Input,U({type:"text",min:l,name:i,value:r?`${r}${!d?` ${t}`:""}`:"",placeholder:o,onFocus:()=>u(!0),onBlur:()=>u(!1),onChange:s},c))}var q=l(61920);let G=[{label:(0,i.t)("Recurring (every)"),value:"picker"},{label:(0,i.t)("CRON Schedule"),value:"input"}],B=({value:e,onChange:t})=>{let l=(0,d.useTheme)(),[r,o]=(0,n.useState)("picker"),s=(0,n.useCallback)(e=>{t(e)},[t]),c=(0,n.useCallback)(e=>{t(e.target.value)},[t]),u=(0,n.useCallback)(()=>{t(e||"")},[t,e]),[h,p]=(0,n.useState)();return(0,a.FD)(a.FK,{children:[(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Schedule type"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Schedule type"),placeholder:(0,i.t)("Schedule type"),onChange:e=>{o(e)},value:r,options:G})})]}),(0,a.FD)(ey,{"data-test":"input-content",className:"styled-input",children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Schedule"),(0,a.Y)("span",{className:"required",children:"*"})]}),"input"===r&&(0,a.Y)(_.Input,{type:"text",name:"crontab","aria-label":(0,i.t)("Schedule"),style:h?{borderColor:l.colorError}:{},placeholder:(0,i.t)("CRON expression"),value:e,onBlur:c,onChange:e=>s(e.target.value),onPressEnter:u}),"picker"===r&&(0,a.Y)(q.l,{clearButton:!1,value:e,setValue:s,displayError:"picker"===r,onError:p})]})]})};var X=l(41947);function W(e,t,l,a,n,i,r){try{var o=e[i](r),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(a,n)}function Z(e){return function(){var t=this,l=arguments;return new Promise(function(a,n){var i=e.apply(t,l);function r(e){W(i,a,n,r,o,"next",e)}function o(e){W(i,a,n,r,o,"throw",e)}r(void 0)})}}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let H=d.styled.div`
  ${({theme:e})=>`
    margin-bottom: ${3*e.sizeUnit}px;

    .input-container {
      textarea {
        height: auto;
      }

      &.error {
        input {
          border-color: ${e.colorError};
        }
      }

      .helper {
        margin-top: ${2*e.sizeUnit}px;
        font-size: ${e.fontSizeSM}px;
        color: ${e.colorTextSecondary};
      }
    }

    .inline-container {
      margin-bottom: ${2*e.sizeUnit}px;

      > div {
        margin: 0px;
      }

      .delete-button {
        margin-left: ${2*e.sizeUnit}px;
        padding-top: ${e.sizeUnit}px;
      }
      .anticon {
        margin-left: ${e.sizeUnit}px;
      }
    }

    .ghost-button {
      color: ${e.colorPrimaryText};
      display: inline-flex;
      align-items: center;
      font-size: ${e.fontSizeSM}px;
      cursor: pointer;

      .icon {
        width: ${3*e.sizeUnit}px;
        height: ${3*e.sizeUnit}px;
        font-size: ${e.fontSizeSM}px;
        margin-right: ${e.sizeUnit}px;
      }
    }

    .ghost-button + .ghost-button {
      margin-left: ${4*e.sizeUnit}px;
    }

    .ghost-button:first-of-type[style*='none'] + .ghost-button {
      margin-left: 0px; /* Remove margin when the first button is hidden */
    }

    .email-recipient-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      .email-recipient-select,
      .email-recipient-select > div {
        width: 100%;
      }

      .helper {
        margin-top: ${2*e.sizeUnit}px;
        padding: 0;
      }
    }
  `}
`,J={EMAIL_CC_NAME:(0,i.t)("CC recipients"),EMAIL_BCC_NAME:(0,i.t)("BCC recipients"),EMAIL_SUBJECT_NAME:(0,i.t)("Email subject name (optional)"),EMAIL_SUBJECT_ERROR_TEXT:(0,i.t)("Please enter valid text. Spaces alone are not permitted.")},Q=/[,;]/,ee=e=>e.split(Q).map(e=>e.trim()).filter(Boolean).map(e=>({label:e,value:e})),et=e=>{if(!e||"object"!=typeof e)return!1;let{value:t}=e;return"string"==typeof t},el=(e,t,l)=>Z(function*(){var a,n,i,r;let o=p().encode_uri({filter:e,page:t,page_size:l,order_column:"username",order_direction:"asc"}),s=yield c.A.get({endpoint:`/api/v1/report/related/created_by?q=${o}`});return{data:(null!=(a=null==(i=s.json)?void 0:i.result)?a:[]).filter(e=>{var t;return!!(null==(t=e.extra)?void 0:t.email)}).map(({text:e,extra:t})=>({value:t.email,label:`${e} <${t.email}>`})),totalCount:null!=(n=null==(r=s.json)?void 0:r.count)?n:0}})(),ea=({setting:e=null,index:t,onUpdate:l,onRemove:r,onInputChange:o,email_subject:u,defaultSubject:h,setErrorSubject:m})=>{let{method:v,recipients:f,cc:b,bcc:g,options:T}=e||{},[E,S]=(0,n.useState)(f||""),[C,O]=(0,n.useState)([]),[x,R]=(0,n.useState)(!1),[A,F]=(0,n.useState)(!!b),[I,Y]=(0,n.useState)(!!g),[D,L]=(0,n.useState)(b||""),[k,M]=(0,n.useState)(g||""),z=(0,d.useTheme)(),[$,V]=(0,n.useState)(!0),[U,P]=(0,n.useState)([{label:"",options:[]}]),q=(0,n.useMemo)(()=>ee(E),[E]),G=(0,n.useMemo)(()=>ee(D),[D]),B=(0,n.useMemo)(()=>ee(k),[k]),[W,Q]=(0,n.useState)(!1),[ea,en]=(0,n.useState)(!0),ei=({force:e}={})=>Z(function*(){en(!0),(({searchString:e="",types:t=[],exactMatch:l=!1,force:a=!1}={})=>Z(function*(){let n=p().encode({searchString:e,types:t,exactMatch:l,force:a}),i=`/api/v1/report/slack_channels/?q=${n}`;return c.A.get({endpoint:i})})())({types:["public_channel","private_channel"],force:e}).then(({json:e})=>{let t,l,{result:a}=e,n=(t=[],l=[],a.forEach(e=>{e.is_private?l.push(e):t.push(e)}),[{label:"Public Channels",options:t.map(e=>({label:`${e.name} ${e.is_member?"":(0,i.t)("(Bot not in channel)")}`,value:e.id,key:e.id})),key:"public"},{label:(0,i.t)("Private Channels (Bot in channel)"),options:l.map(e=>({label:e.name,value:e.id,key:e.id})),key:"private"}]);if(P(n),(0,s.G7)(s.TO.AlertReportSlackV2)){let[e,t]=n;v&&[w.yV.SlackV2,w.yV.Slack].includes(v)&&O((({method:e,recipientValue:t,slackOptions:l})=>{let a=e===w.yV.SlackV2?"value":"label";return t.split(",").map(e=>l.find(t=>t[a].trim().toLowerCase()===e.trim().toLowerCase())).filter(e=>!!e)})({method:v,recipientValue:E,slackOptions:[...e.options,...t.options]}))}}).catch(()=>{Q(!0)}).finally(()=>{V(!1),en(!1)})})();(0,n.useEffect)(()=>{var e;(null==T?void 0:T.some(e=>e===w.yV.Slack||e===w.yV.SlackV2))&&!(null==(e=U[0])?void 0:e.options.length)&&ei()},[]),(0,n.useEffect)(()=>{void 0!==f&&E!==f&&S(f)},[E,f]),(0,n.useEffect)(()=>{void 0!==b&&D!==b&&L(b)},[b,D]),(0,n.useEffect)(()=>{void 0!==g&&k!==g&&M(g)},[g,k]);let er=(0,n.useMemo)(()=>(T||[]).filter(e=>(0,s.G7)(s.TO.AlertReportSlackV2)&&!W&&e===w.yV.SlackV2||(!(0,s.G7)(s.TO.AlertReportSlackV2)||W)&&e===w.yV.Slack||(0,s.G7)(s.TO.AlertReportWebhook)&&e===w.yV.Webhook||e===w.yV.Email).map(e=>({label:e===w.yV.SlackV2?w.yV.Slack:e,value:e})),[T,W]);if(!e)return null;let eo=a=>{let{target:n}=a;S(n.value),l&&l(t,K({},e,{recipients:n.value}))},es=a=>n=>{let i=(Array.isArray(n)?n.filter(et):[]).map(e=>e.value).join(",");"recipients"===a?S(i):"cc"===a?L(i):M(i),l&&l(t,K({},e,{[a]:i}))};return(0,a.FD)(H,{children:[(0,a.Y)("div",{className:"inline-container",children:(0,a.FD)(ey,{children:[(0,a.Y)("div",{className:"control-label",children:(0,i.t)("Notification Method")}),(0,a.FD)("div",{className:"input-container",children:[(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Delivery method"),"data-test":"select-delivery-method",labelInValue:!0,onChange:a=>{S(""),L(""),M(""),l&&e&&l(t,K({},e,{method:a.value,recipients:"",cc:"",bcc:""}))},placeholder:(0,i.t)("Select Delivery Method"),options:er,showSearch:!0,value:er.find(e=>e.value===v),loading:$}),0!==t&&r?(0,a.Y)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>r(t),"aria-label":(0,i.t)("Remove notification method"),children:(0,a.Y)(j.F.DeleteOutlined,{iconSize:"l"})}):null]})]})}),void 0!==v?(0,a.FD)(a.FK,{children:[v===w.yV.Email?(0,a.Y)("div",{className:"inline-container",children:(0,a.Y)(ey,{children:(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"control-label",children:J.EMAIL_SUBJECT_NAME}),(0,a.Y)("div",{className:`input-container ${x?"error":""}`,children:(0,a.Y)(_.Input,{type:"text",name:"email_subject",value:u,placeholder:h,onChange:e=>{let{value:t}=e.target;o&&o(e);let l=t.length>0&&0===t.trim().length;R(l),m&&m(l)}})}),x&&(0,a.Y)("div",{style:{color:z.colorError,fontSize:3*z.sizeUnit},children:J.EMAIL_SUBJECT_ERROR_TEXT})]})})}):null,v!==w.yV.Webhook?(0,a.Y)("div",{className:"inline-container",children:(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("%s recipients",v===w.yV.SlackV2?w.yV.Slack:v),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{children:v===w.yV.Slack?(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(_.Input.TextArea,{name:"To","data-test":"recipients",value:E,onChange:eo})}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)("div",{className:"helper",children:(0,i.t)('Recipients are separated by "," or ";"')})})]}):v===w.yV.Email?(0,a.FD)("div",{className:"input-container email-recipient-container",children:[(0,a.Y)(N.A,{name:"To",ariaLabel:(0,i.t)("Email recipients"),className:"email-recipient-select","data-test":"recipients",mode:"multiple",value:q,options:el,onChange:es("recipients"),placeholder:(0,i.t)("Select or type email recipients"),allowNewOptions:!0,lazyLoading:!1}),(0,a.Y)("div",{className:"helper",children:(0,i.t)('Recipients are separated by "," or ";"')})]}):(0,a.FD)("div",{className:"input-container",children:[(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Select channels"),mode:"multiple",name:"recipients",value:C,options:U,onChange:a=>{O(a),l&&l(t,K({},e,{recipients:null==a?void 0:a.map(e=>e.value).join(",")}))},allowClear:!0,"data-test":"recipients",loading:ea,allowSelectAll:!1,labelInValue:!0}),(0,a.Y)(X.A,{onClick:()=>ei({force:!0}),tooltipContent:(0,i.t)("Force refresh Slack channels list"),disabled:ea})]})})]})}):(0,a.Y)("div",{className:"inline-container",children:(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("%s URL",v),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{children:(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(_.Input,{name:"To","data-test":"recipients",value:E,onChange:eo})})})]})}),v===w.yV.Email&&(0,a.FD)(ey,{children:[A&&(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"control-label",children:J.EMAIL_CC_NAME}),(0,a.Y)("div",{className:"input-container email-recipient-container",children:(0,a.Y)(N.A,{name:"CC",ariaLabel:J.EMAIL_CC_NAME,className:"email-recipient-select","data-test":"cc",mode:"multiple",value:G,options:el,onChange:es("cc"),placeholder:(0,i.t)("Select or type CC recipients"),allowNewOptions:!0,lazyLoading:!1})}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)("div",{className:"helper",children:(0,i.t)('Recipients are separated by "," or ";"')})})]}),I&&(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"control-label",children:J.EMAIL_BCC_NAME}),(0,a.Y)("div",{className:"input-container email-recipient-container",children:(0,a.Y)(N.A,{name:"BCC",ariaLabel:J.EMAIL_BCC_NAME,className:"email-recipient-select","data-test":"bcc",mode:"multiple",value:B,options:el,onChange:es("bcc"),placeholder:(0,i.t)("Select or type BCC recipients"),allowNewOptions:!0,lazyLoading:!1})}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)("div",{className:"helper",children:(0,i.t)('Recipients are separated by "," or ";"')})})]}),(0,a.FD)("div",{className:"ghost-button",children:[(0,a.FD)("span",{className:"ghost-button",role:"button",tabIndex:0,onClick:()=>F(!0),style:{display:A?"none":"inline-flex"},children:[(0,a.Y)(j.F.MailOutlined,{iconSize:"xs",className:"icon"}),(0,i.t)("Add CC Recipients")]}),(0,a.FD)("span",{className:"ghost-button",role:"button",tabIndex:0,onClick:()=>Y(!0),style:{display:I?"none":"inline-flex"},children:[(0,a.Y)(j.F.MailOutlined,{iconSize:"xs",className:"icon"}),(0,i.t)("Add BCC Recipients")]})]})]})]}):null]})};var en=l(42178);function ei(e,t,l,a,n,i,r){try{var o=e[i](r),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(a,n)}function er(){return(er=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let eo=[r.Y.PivotTable,"table",r.Y.PairedTTest],es=d.styled.span`
  margin: 0 ${({theme:e})=>3*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorSplit};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
  align-content: center;
`,ec=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,ed=[w.yV.Email,w.yV.Webhook],eu={dashboard:{anchor:""}},eh=[{label:(0,i.t)("< (Smaller than)"),value:"<"},{label:(0,i.t)("> (Larger than)"),value:">"},{label:(0,i.t)("<= (Smaller or equal)"),value:"<="},{label:(0,i.t)(">= (Larger or equal)"),value:">="},{label:(0,i.t)("== (Is equal)"),value:"=="},{label:(0,i.t)("!= (Is not equal)"),value:"!="},{label:(0,i.t)("Not null"),value:"not null"}],ep=[{label:(0,i.t)("None"),value:0},{label:(0,i.t)("30 days"),value:30},{label:(0,i.t)("60 days"),value:60},{label:(0,i.t)("90 days"),value:90}],em=[{label:(0,i.t)("Dashboard"),value:"dashboard"},{label:(0,i.t)("Chart"),value:"chart"}],ev={pdf:{label:(0,i.t)("Send as PDF"),value:"PDF"},png:{label:(0,i.t)("Send as PNG"),value:"PNG"},csv:{label:(0,i.t)("Send as CSV"),value:"CSV"},txt:{label:(0,i.t)("Send as text"),value:"TEXT"}},ef=(0,u.AH)`
  margin-bottom: 0;
`,eb=(0,u.AH)`
  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }
  }
  .select-with-open-btn {
    display: flex;
    align-items: center;

    & > div:first-child {
      flex: 1 1 auto !important;
      width: auto !important;
      min-width: 0; /* allow overflow handling */
    }

    /* keep button compact and pinned to the right */
    & > div:last-child {
      flex: 0 0 auto !important;
      width: auto !important;
      margin-left: var(--open-btn-gap, 8px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ensure inner select fills available space */
    & > div:first-child > * {
      width: 100% !important;
    }
  }
`,eg=(0,d.styled)(_.TreeSelect)`
  width: 100%;
`,e_=d.styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,ey=d.styled.div`
  ${({theme:e})=>(0,u.AH)`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${4*e.sizeUnit}px;

    .helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      padding: ${e.sizeUnit}px 0;
      text-align: left;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorError};
    }

    .control-label {
      margin-bottom: ${2*e.sizeUnit}px;
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
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
      height: 300px;
      resize: none;
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

    .input-label {
      margin-left: 10px;
    }

    .filters {
      margin: ${3*e.sizeUnit}px 0;

      .filters-container {
        display: flex;
        align-items: flex-start;
        margin: ${2*e.sizeUnit}px 0;
      }

      .filters-dash-container {
        display: flex;
        flex-direction: column;
        max-width: 174px;
        flex: 1;
        margin-right: ${4*e.sizeUnit}px;

        .control-label {
          flex: 1;
          margin-bottom: ${2*e.sizeUnit}px;

          .label-with-tooltip {
            margin-right: ${2*e.sizeUnit}px;
          }
        }
      }

      .filters-dash-select {
        flex: 1;
      }

      .filters-dashvalue-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 200px;
      }

      .filters-delete {
        display: flex;
        margin-top: ${10*e.sizeUnit}px;
        margin-left: ${4*e.sizeUnit}px;
      }

      .filters-trashcan {
        display: 'flex';
        color: ${e.colorIcon};
      }
    }
  `}
`,eT=d.styled.div`
  ${({theme:e})=>(0,u.AH)`
    color: ${e.colorPrimaryText};
    cursor: pointer;

    i {
      margin-right: ${2*e.sizeUnit}px;
    }

    &.disabled {
      color: ${e.colorTextDisabled};
      cursor: default;
    }
  `}
`,eE=d.styled.div`
  .inline-container .input-container {
    margin-left: 0;
  }
`,eN=e=>(0,u.AH)`
  margin-right: ${3*e.sizeUnit}px;
`,eS={GENERAL_TITLE:(0,i.t)("General information"),ALERT_CONDITION_TITLE:(0,i.t)("Alert condition"),ALERT_CONTENTS_TITLE:(0,i.t)("Alert contents"),REPORT_CONTENTS_TITLE:(0,i.t)("Report contents"),SCHEDULE_TITLE:(0,i.t)("Schedule"),NOTIFICATION_TITLE:(0,i.t)("Notification method"),NAME_ERROR_TEXT:(0,i.t)("name"),EDITORS_ERROR_TEXT:(0,i.t)("editors"),CONTENT_ERROR_TEXT:(0,i.t)("content type"),DATABASE_ERROR_TEXT:(0,i.t)("database"),SQL_ERROR_TEXT:(0,i.t)("sql"),ALERT_CONDITION_ERROR_TEXT:(0,i.t)("alert condition"),CRONTAB_ERROR_TEXT:(0,i.t)("crontab"),WORKING_TIMEOUT_ERROR_TEXT:(0,i.t)("working timeout"),RECIPIENTS_ERROR_TEXT:(0,i.t)("recipients"),EMAIL_SUBJECT_ERROR_TEXT:(0,i.t)("email subject"),EMAIL_VALIDATION_ERROR_TEXT:(0,i.t)("invalid email"),ERROR_TOOLTIP_MESSAGE:(0,i.t)("Not all required fields are complete. Please provide the following:"),NATIVE_FILTER_COLUMN_ERROR_TEXT:(0,i.t)("Native filter column is required"),NATIVE_FILTER_NO_VALUES_ERROR_TEXT:(0,i.t)("Native filter values has no values")},eC=({status:e="active",onClick:t})=>"hidden"===e?null:(0,a.FD)(eT,{className:e,onClick:()=>{"disabled"!==e&&t()},children:[(0,a.Y)(j.F.PlusOutlined,{iconSize:"m"}),"active"===e?(0,i.t)("Add another notification method"):(0,i.t)("Add delivery method")]}),eO=(0,v.Ay)(({addDangerToast:e,onAdd:t,onHide:l,show:r,alert:h=null,isReport:v=!1,addSuccessToast:U})=>{var q,G,X,W,Z,K,H,J,Q,ee,et,el,eT,eO;let ex=(0,d.useTheme)(),eR=(0,o.a)().get("filter.dateFilterControl"),eA=null!=eR?eR:$.Ay,eF=(0,k.d4)(e=>e.user),eI=null==(G=(0,M.Ay)())||null==(q=G.common)?void 0:q.user_subject_id,eY=(0,D.B)(),eD=(null==eY?void 0:eY.ALERT_REPORTS_NOTIFICATION_METHODS)||ed,[ew,eL]=(0,n.useState)(!0),[ek,eM]=(0,n.useState)(),[ez,e$]=(0,n.useState)(!0),[ej,eV]=(0,n.useState)("general"),[eU,eP]=(0,n.useState)(!1),[eq,eG]=(0,n.useState)("dashboard"),[eB,eX]=(0,n.useState)("PNG"),[eW,eZ]=(0,n.useState)(!1),[eK,eH]=(0,n.useState)(!1);(0,n.useEffect)(()=>{eH("PNG"===eB||"PDF"===eB)},[eB]);let[eJ,eQ]=(0,n.useState)(!1),[e0,e1]=(0,n.useState)([]),[e2,e4]=(0,n.useState)([]),[e5,e6]=(0,n.useState)([]),[e8,e7]=(0,n.useState)([]),[e3,e9]=(0,n.useState)([]),[te,tt]=(0,n.useState)({}),[tl,ta]=(0,n.useState)([{nativeFilterId:null,filterName:"",filterType:"",columnLabel:"",columnName:"",filterValues:[]}]),[tn,ti]=(0,n.useState)({[w.Z_.General]:{hasErrors:!1,name:eS.GENERAL_TITLE,errors:[]},[w.Z_.Content]:{hasErrors:!1,name:v?eS.REPORT_CONTENTS_TITLE:eS.ALERT_CONTENTS_TITLE,errors:[]},[w.Z_.Alert]:{hasErrors:!1,name:eS.ALERT_CONDITION_TITLE,errors:[]},[w.Z_.Schedule]:{hasErrors:!1,name:eS.SCHEDULE_TITLE,errors:[]},[w.Z_.Notification]:{hasErrors:!1,name:eS.NOTIFICATION_TITLE,errors:[]}}),[tr,to]=(0,n.useState)(""),ts=(e,t)=>{ti(l=>er({},l,{[e]:{hasErrors:t.length>0,name:l[e].name,errors:t}}))},[tc,td]=(0,n.useState)(""),tu=v?"report":"alert",th=null!==h,tp=(0,s.G7)(s.TO.AlertsAttachReports)||v,tm=(0,s.G7)(s.TO.AlertReportTabs),tv=(0,s.G7)(s.TO.AlertReportsFilter),[tf,tb]=(0,n.useState)("active"),[tg,t_]=(0,n.useState)([]),[ty,tT]=(0,n.useState)(""),[tE,tN]=(0,n.useState)(!1),tS=(0,n.useMemo)(()=>eD.reduce((e,t)=>e.some(e=>e.includes("slack"))&&t.toLowerCase().includes("slack")?e:[...e,t.toLowerCase()],[]).length,[eD]),{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:tC,ALERT_REPORTS_DEFAULT_CRON_VALUE:tO,ALERT_REPORTS_DEFAULT_RETENTION:tx}=(0,k.d4)(e=>{var t,l,a,n;let i=null==(n=e.common)?void 0:n.conf;return{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:null!=(t=null==i?void 0:i.ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT)?t:3600,ALERT_REPORTS_DEFAULT_CRON_VALUE:null!=(l=null==i?void 0:i.ALERT_REPORTS_DEFAULT_CRON_VALUE)?l:"0 0 * * *",ALERT_REPORTS_DEFAULT_RETENTION:null!=(a=null==i?void 0:i.ALERT_REPORTS_DEFAULT_RETENTION)?a:90}}),tR={active:!0,creation_method:"alerts_reports",crontab:tO,extra:eu,log_retention:tx,working_timeout:tC,name:"",editors:[],recipients:[],sql:"",email_subject:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},tA=(e,t,l,a="filter_select",n=[])=>{var i;return(i=function*(){if("filter_time"===a)return;let i={formData:{datasource:`${l}__table`,groupby:[t],metrics:["count"],row_limit:1e3,showSearch:!0,viz_type:a,type:"NATIVE_FILTER",dashboardId:e,adhoc_filters:n},force:!1,ownState:{}};return yield(0,z.yV)(i).then(e=>{let l=e.json.result[0].data,n=l;return"filter_timecolumn"===a&&(n=l.filter(e=>2===e.dtype)),n.map(e=>"filter_timegrain"===a?{value:e.duration,label:e.name}:"filter_timecolumn"===a?{value:e.column_name,label:e.verbose_name||e.column_name}:{value:e[t],label:e[t]})})},function(){var e=this,t=arguments;return new Promise(function(l,a){var n=i.apply(e,t);function r(e){ei(n,l,a,r,o,"next",e)}function o(e){ei(n,l,a,r,o,"throw",e)}r(void 0)})})()},tF=e=>e3.filter(t=>!tl.some((l,a)=>l.nativeFilterId===t.value&&a!==e)),tI=(e,t)=>{let l=[...tg];l[e]=t,tg[e].method!==t.method?(tg[e]=t,t_(tg.filter((t,l)=>l<=e)),tg.length-1>e&&tb("active"),void 0!==t.method&&"hidden"!==tf&&tb("active")):t_(l)},tY=e=>{let t=tg.slice();t.splice(e,1),t_(t),tb("active")},tD=e=>{eM(t=>{var l;let a=null==t||null==(l=t.extra)?void 0:l.dashboard,n={dashboard:er({},a,{anchor:e})};return er({},t,{extra:n})})},{state:{loading:tw,resource:tL,error:tk},fetchResource:tM,createResource:tz,updateResource:t$,clearError:tj}=(0,m.fn)("report",(0,i.t)("report"),e),tV=()=>{tj(),e$(!0),l(),t_([]),eM(er({},tR)),tb("active")},tU=(0,n.useCallback)(e=>{let t,l=e||(null==ek?void 0:ek.database);return!l||l.label?null:(e0.forEach(e=>{(e.value===l.value||e.value===l.id)&&(t=e)}),t)},[null==ek?void 0:ek.database,e0]),tP=(e,t)=>{eM(l=>er({},l,{[e]:t}))},tq=(0,n.useMemo)(()=>(e="",t,l)=>{let a=p().encode({filter:e,page:t,page_size:l});return c.A.get({endpoint:`/api/v1/report/related/database?q=${a}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return e1(t),{data:t,totalCount:e.json.count}})},[]),tG=null==ek?void 0:ek.dashboard;(0,n.useEffect)(()=>{(tm||tv)&&(null==tG?void 0:tG.value)&&c.A.get({endpoint:`/api/v1/dashboard/${tG.value}/tabs`}).then(e=>{var t,l,a,n;let{tab_tree:i,all_tabs:r,native_filters:o}=e.json.result,s=i.map(e=>e.value);s.length>1&&i.push({title:"All Tabs",value:JSON.stringify(s)}),e7(i),tt(null!=o?o:{}),th&&(null==o?void 0:o.all)&&(n=o.all,tl.map(e=>{var t,l;if(!e.nativeFilterId)return;let a=n.filter(t=>t.id===e.nativeFilterId)[0],{datasetId:i}=a.targets[0],r=a.name,o=(null==(t=a.targets[0].column)?void 0:t.name)||r,s=null==ek||null==(l=ek.dashboard)?void 0:l.value,{filterType:c}=a;if("filter_time"!==c)return tA(s,o,i,c).then(t=>{ta(l=>l.map(l=>l.nativeFilterId===e.nativeFilterId?er({},l,{filterType:c,filterName:r,optionFilterValues:t}):l))})}),e9(o.all.map(e=>({value:e.id,label:e.name}))));let c=null==ek||null==(l=ek.extra)||null==(t=l.dashboard)?void 0:t.anchor;if(c)try{let e=JSON.parse(c);if(!Array.isArray(e)){let e=null!=(a=null==o?void 0:o[c])?a:[];e9(e.map(e=>({value:e.id,label:e.name})))}if(Array.isArray(e))r&&e.every(e=>e in r)||tD(void 0);else throw Error("Parsed value is not an array")}catch{r&&c in r||tD(void 0)}else(null==o?void 0:o.all)&&e9(o.all.map(e=>({value:e.id,label:e.name})))}).catch(()=>{e((0,i.t)("There was an error retrieving dashboard tabs."))})},[tG,tm,tv,null==ek?void 0:ek.extra,e]);let tB=(null==ek?void 0:ek.database)&&!ek.database.label;(0,n.useEffect)(()=>{tB&&tP("database",tU())},[tB,tU]);let tX=(0,n.useMemo)(()=>(e="",t,l)=>{let a=p().encode_uri({filter:e,page:t,page_size:l});return c.A.get({endpoint:`/api/v1/report/related/dashboard?q=${a}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return e4(t),{data:t,totalCount:e.json.count}})},[]),tW=(0,n.useCallback)(e=>{let t,l=e||(null==ek?void 0:ek.chart);return!l||l.label?null:(e5.forEach(e=>{(e.value===l.value||e.value===l.id)&&(t=e)}),t)},[e5,null==ek?void 0:ek.chart]),tZ=(null==ek?void 0:ek.chart)&&!(null==ek?void 0:ek.chart.label);(0,n.useEffect)(()=>{tZ&&tP("chart",tW())},[tW,tZ]);let tK=(0,n.useMemo)(()=>(e="",t,l)=>{let a=p().encode_uri({filter:e,page:t,page_size:l});return c.A.get({endpoint:`/api/v1/report/related/chart?q=${a}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return e6(t),{data:t,totalCount:e.json.count}})},[]),tH=()=>{var e,t;let l=null==ek||null==(e=ek.chart)?void 0:e.label,a=null==ek||null==(t=ek.dashboard)?void 0:t.label;if(!(null==ek?void 0:ek.name))return void tT("");switch(eq){case w.cM.Chart:tT(`${null==ek?void 0:ek.name}: ${l||""}`);break;case w.cM.Dashboard:tT(`${null==ek?void 0:ek.name}: ${a||""}`);break;default:tT("")}},tJ=e=>{let{target:{type:t,value:l,name:a}}=e;tP(a,"number"===t?parseInt(l,10)||null:l),"name"===a&&tH()},tQ=e=>{let{target:t}=e,l=+t.value;0===l?tP(t.name,void 0):tP(t.name,l?Math.max(l,1):l)},t0=(e,t)=>{let l;l="string"==typeof t?[t]:t,ta(tl.map((t,a)=>a===e?er({},t,{filterValues:l}):t))};(0,n.useEffect)(()=>{let e=void 0!==eI&&eF?(0,f.qo)({value:eI,text:`${eF.firstName} ${eF.lastName}`,type:b.P.User,secondary_label:eF.email}):void 0;th&&(!(null==ek?void 0:ek.id)||(null==h?void 0:h.id)!==ek.id||ez&&r)?(null==h?void 0:h.id)===null||tw||tk||tM(h.id||0):!th&&(!ek||ek.id||ez&&r)&&(eM(er({},tR,{editors:e?[e]:[]})),t_([{recipients:"",cc:"",bcc:"",options:eD,method:w.yV.Email}]),tb("active"))},[h]),(0,n.useEffect)(()=>{if(tL){var e,t;let l,a;if(eP(!0),null==(t=tL.extra)||null==(e=t.dashboard)?void 0:e.nativeFilters){let e=tL.extra.dashboard.nativeFilters;ta(e);let t=e.filter(e=>e.nativeFilterId&&e.filterName).map(e=>({value:e.nativeFilterId,label:e.filterName}));t.length>0&&e9(t)}let n=(tL.recipients||[]).map(e=>{let t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:eD,cc:t.ccTarget||"",bcc:t.bccTarget||""}});t_(n),tb(n.length===eD.length?"hidden":"active"),eG(tL.chart?w.cM.Chart:w.cM.Dashboard),eX(tL.report_format||"PNG");let i="string"==typeof tL.validator_config_json?JSON.parse(tL.validator_config_json):tL.validator_config_json;eQ("not null"===tL.validator_type),tL.chart&&td(tL.chart.viz_type),eZ(tL.force_screenshot),eM(er({},tL,{chart:tL.chart?tW(tL.chart)||{value:tL.chart.id,label:tL.chart.slice_name}:void 0,dashboard:tL.dashboard?((a=tL.dashboard||(null==ek?void 0:ek.dashboard))&&!a.label?(e2.forEach(e=>{(e.value===a.value||e.value===a.id)&&(l=e)}),l):null)||{value:tL.dashboard.id,label:tL.dashboard.dashboard_title}:void 0,database:tL.database?tU(tL.database)||{value:tL.database.id,label:tL.database.database_name}:void 0,editors:(0,f.vH)(tL.editors||[]),validator_config_json:"not null"===tL.validator_type?{op:"not null"}:i}))}},[tL]);let t1=ek||{};(0,n.useEffect)(()=>{var e,t,l,a,n,i;let r,o,s,c,d;r=[],(null==ek||null==(e=ek.name)?void 0:e.length)||r.push(eS.NAME_ERROR_TEXT),(null==ek||null==(t=ek.editors)?void 0:t.length)||r.push(eS.EDITORS_ERROR_TEXT),ts(w.Z_.General,r),o=[],eq===w.cM.Dashboard&&(null==ek?void 0:ek.dashboard)||eq===w.cM.Chart&&(null==ek?void 0:ek.chart)||o.push(eS.CONTENT_ERROR_TEXT),tl.forEach(e=>{let t=!e.columnName||""===e.columnName,l=!e.filterValues||0===e.filterValues.length;t&&l||(t&&o.push(eS.NATIVE_FILTER_COLUMN_ERROR_TEXT),l&&o.push(eS.NATIVE_FILTER_NO_VALUES_ERROR_TEXT))}),ts(w.Z_.Content,o),v||(s=[],(null==ek?void 0:ek.database)||s.push(eS.DATABASE_ERROR_TEXT),(null==ek||null==(l=ek.sql)?void 0:l.length)||s.push(eS.SQL_ERROR_TEXT),(eJ||(null==ek||null==(a=ek.validator_config_json)?void 0:a.op))&&(eJ||(null==ek||null==(n=ek.validator_config_json)?void 0:n.threshold)!==void 0)||s.push(eS.ALERT_CONDITION_ERROR_TEXT),ts(w.Z_.Alert,s)),c=[],(null==ek||null==(i=ek.crontab)?void 0:i.length)||c.push(eS.CRONTAB_ERROR_TEXT),(null==ek?void 0:ek.working_timeout)||c.push(eS.WORKING_TIMEOUT_ERROR_TEXT),ts(w.Z_.Schedule,c),d=[],(()=>{if(!tg.length)return!1;let e=!1;return tg.forEach(t=>{var l;t.method&&(null==(l=t.recipients)?void 0:l.length)&&(e=!0)}),e})()?(()=>{if(!tg.length)return!0;let e=e=>!e||e.split(/[,;]/).every(e=>ec.test(e.trim()));return tg.every(t=>{if(t.method&&"Email"===t.method){var l;return(!(null==(l=t.recipients)?void 0:l.length)||e(t.recipients))&&(!t.cc||e(t.cc))&&(!t.bcc||e(t.bcc))}return!0})})()||d.push(eS.EMAIL_VALIDATION_ERROR_TEXT):d.push(eS.RECIPIENTS_ERROR_TEXT),tE&&d.push(eS.EMAIL_SUBJECT_ERROR_TEXT),ts(w.Z_.Notification,d),tH()},[t1.name,t1.editors,t1.database,t1.sql,t1.validator_config_json,t1.crontab,t1.working_timeout,t1.dashboard,t1.chart,eq,tl,tg,eJ,tE]),(0,n.useEffect)(()=>{let e,t=[w.Z_.General,w.Z_.Content,v?void 0:w.Z_.Alert,w.Z_.Schedule,w.Z_.Notification].some(e=>e&&tn[e].hasErrors);to(t?(e=[],Object.values(tn).forEach(t=>{if(t.hasErrors){let l=`${t.name}: `;e.push(l+t.errors.join(", "))}}),(0,a.FD)("div",{children:[eS.ERROR_TOOLTIP_MESSAGE,(0,a.Y)(en.B,{dataSource:e,renderItem:e=>(0,a.FD)(en.B.Item,{css:e=>(0,u.AH)`
              &&& {
                color: ${e.colorWhite};
              }
            `,compact:!0,children:["• ",e]}),size:"small",split:!1})]})):""),eL(t)},[tn]),ez&&r&&e$(!1);let t2=e=>{tN(e)};return(0,a.Y)(V.xQ,{show:r,onHide:tV,onSave:()=>{var e,l,a,n;let r=[];tg.forEach(e=>{e.method&&e.recipients.length&&r.push({recipient_config_json:{target:e.recipients,ccTarget:e.cc,bccTarget:e.bcc},type:e.method})});let o=eq===w.cM.Chart&&!v;if(null==ek||null==(e=ek.extra)?void 0:e.dashboard){let e=tl.filter(e=>{let t=e.filterName&&""!==e.filterName.trim(),l=e.filterValues&&e.filterValues.length>0;return t||l});ek.extra.dashboard.nativeFilters=e.map(({columnName:e,columnLabel:t,nativeFilterId:l,filterValues:a,filterType:n,filterName:i})=>({filterName:i,filterType:n,columnName:e,columnLabel:t,nativeFilterId:l,filterValues:a}))}let s=er({},ek,{type:v?"Report":"Alert",force_screenshot:o||eW,validator_type:eJ?"not null":"operator",validator_config_json:eJ?{}:null==ek?void 0:ek.validator_config_json,chart:eq===w.cM.Chart?null==ek||null==(l=ek.chart)?void 0:l.value:null,dashboard:eq===w.cM.Dashboard?null==ek||null==(a=ek.dashboard)?void 0:a.value:null,custom_width:eK?null==ek?void 0:ek.custom_width:void 0,database:null==ek||null==(n=ek.database)?void 0:n.value,editors:(0,f.WM)((null==ek?void 0:ek.editors)||[]),recipients:r,report_format:eB||"PNG",extra:eq===w.cM.Dashboard?null==ek?void 0:ek.extra:{}});if(s.recipients&&!s.recipients.length&&delete s.recipients,s.context_markdown="string",th){if(null==ek?void 0:ek.id){let e=ek.id;delete s.id,delete s.created_by,delete s.last_eval_dttm,delete s.last_state,delete s.last_value,delete s.last_value_row_json,t$(e,s).then(e=>{e&&(U((0,i.t)("%s updated",s.type)),t&&t(),tV())})}}else ek&&tz(s).then(e=>{e&&(U((0,i.t)("%s updated",s.type)),t&&t(e),tV())})},saveDisabled:ew,saveText:th?(0,i.t)("Save"):(0,i.t)("Add"),errorTooltip:tr,title:(()=>{let e;switch(!0){case th&&v:e=(0,i.t)("Edit report");break;case th:e=(0,i.t)("Edit alert");break;case v:e=(0,i.t)("Add report");break;default:e=(0,i.t)("Add alert")}return e})(),isEditMode:th,width:500,wrapProps:{"data-test":"alert-report-modal"},children:(0,a.Y)("div",{css:eb,style:{"--open-btn-gap":`${ex.sizeUnit}px`},children:(0,a.Y)(T.S,{expandIconPosition:"end",activeKey:ej,onChange:e=>{eV(e),(Array.isArray(e)?e.includes("schedule"):"schedule"===e)&&(I.sy.isCached()?eP(!0):setTimeout(()=>{eP(!0)},220))},accordion:!0,modalMode:!0,items:[{key:"general",label:(0,a.Y)(E.s,{title:eS.GENERAL_TITLE,subtitle:(0,i.t)("Set up basic details, such as name and description."),validateCheckStatus:!tn[w.Z_.General].hasErrors,testId:"general-information-panel"}),children:(0,a.FD)("div",{className:"header-section",children:[(0,a.Y)(V.Gk,{label:v?(0,i.t)("Report name"):(0,i.t)("Alert name"),required:!0,children:(0,a.Y)(_.Input,{name:"name",placeholder:v?(0,i.t)("Enter report name"):(0,i.t)("Enter alert name"),value:ek?ek.name:"",onChange:tJ})}),(0,a.Y)(V.Gk,{label:(0,i.t)("Editors"),required:!0,children:(0,a.Y)(f.Ay,{relatedUrl:"/api/v1/report/related/editors",ariaLabel:(0,i.t)("Editors"),allowClear:!0,placeholder:(0,i.t)("Select editors"),value:(null==ek?void 0:ek.editors)||[],onChange:e=>{tP("editors",e||[])},dataTest:"editors-select"})}),(0,a.Y)(V.Gk,{label:(0,i.t)("Description"),children:(0,a.Y)(_.Input,{name:"description",value:ek&&ek.description||"",placeholder:(0,i.t)("Include description to be sent with %s",tu),onChange:tJ})}),(0,a.FD)(e_,{children:[(0,a.Y)(_.Switch,{checked:!!ek&&ek.active,defaultChecked:!0,onChange:e=>{tP("active",e)}}),(0,a.Y)("div",{className:"switch-label",children:v?(0,i.t)("Report is active"):(0,i.t)("Alert is active")})]})]})},...v?[]:[{key:"condition",label:(0,a.Y)(E.s,{title:eS.ALERT_CONDITION_TITLE,subtitle:(0,i.t)("Define the database, SQL query, and triggering conditions for alert."),validateCheckStatus:!tn[w.Z_.Alert].hasErrors,testId:"alert-condition-panel"}),children:(0,a.FD)("div",{children:[(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Database"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(N.A,{ariaLabel:(0,i.t)("Database"),name:"source",placeholder:(0,i.t)("Select database"),value:(null==ek||null==(X=ek.database)?void 0:X.label)&&(null==ek||null==(W=ek.database)?void 0:W.value)?{value:ek.database.value,label:ek.database.label}:void 0,options:tq,onChange:e=>{tP("database",e||[])}})})]}),(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("SQL Query"),(0,a.Y)(S.I,{tooltip:(0,i.t)('The result of this query must be a value capable of numeric interpretation e.g. 1, 1.0, or "1" (compatible with Python\'s float() function).')}),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)(Y.A,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{tP("sql",e||"")},readOnly:!1,initialValue:null==tL?void 0:tL.sql},null==ek?void 0:ek.id)]}),(0,a.FD)("div",{className:"inline-container wrap",css:(0,u.AH)`
                            gap: ${ex.sizeUnit}px;
                          `,children:[(0,a.FD)(ey,{css:ef,children:[(0,a.FD)("div",{className:"control-label",css:eN,children:[(0,i.t)("Trigger Alert If..."),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Condition"),onChange:e=>{var t;eQ("not null"===e),tP("validator_config_json",{op:e,threshold:ek?null==(t=ek.validator_config_json)?void 0:t.threshold:void 0})},placeholder:(0,i.t)("Condition"),value:(null==ek||null==(Z=ek.validator_config_json)?void 0:Z.op)||void 0,options:eh})})]}),(0,a.FD)(ey,{css:ef,children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Value")," ",!eJ&&(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(_.InputNumber,{disabled:eJ,type:"number",name:"threshold",value:(null==ek||null==(K=ek.validator_config_json)?void 0:K.threshold)===void 0||eJ?"":ek.validator_config_json.threshold,min:0,placeholder:(0,i.t)("Value"),onChange:e=>{var t;tP("validator_config_json",{op:ek?null==(t=ek.validator_config_json)?void 0:t.op:void 0,threshold:e})}})})]})]})]})}],{key:"contents",label:(0,a.Y)(E.s,{title:v?eS.REPORT_CONTENTS_TITLE:eS.ALERT_CONTENTS_TITLE,subtitle:(0,i.t)("Customize data source, filters, and layout."),validateCheckStatus:!tn[w.Z_.Content].hasErrors,testId:"contents-panel"}),children:(0,a.FD)(a.FK,{children:[(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Content type"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Select content type"),onChange:e=>{eZ(!1),eG(e)},value:eq,options:em,placeholder:(0,i.t)("Select content type")})]}),(0,a.Y)(ey,{children:eq===w.cM.Chart?(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Select chart"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.FD)("div",{className:"input-container select-with-open-btn",children:[(0,a.Y)("div",{children:(0,a.Y)(N.A,{ariaLabel:(0,i.t)("Chart"),name:"chart",allowClear:!0,value:(null==ek||null==(H=ek.chart)?void 0:H.label)&&(null==ek||null==(J=ek.chart)?void 0:J.value)?{value:ek.chart.value,label:ek.chart.label}:void 0,options:tK,onChange:e=>{(e=>{if(e&&"object"==typeof e&&void 0!==e.value)return c.A.get({endpoint:`/api/v1/chart/${e.value}`}).then(e=>td(e.json.result.viz_type))})(e),tP("chart",e||void 0),tP("dashboard",null)},placeholder:(0,i.t)("Select chart to use")})}),(0,a.Y)("div",{children:(0,a.Y)(C.m,{title:(0,i.t)("Open chart in new tab"),children:(0,a.Y)(O.$n,{"aria-label":(0,i.t)("Open chart in new tab"),onClick:()=>{var e,t;(t=null==ek||null==(e=ek.chart)?void 0:e.value)&&(0,A.VJ)(`/explore/?slice_id=${t}`,{newWindow:!0})},icon:(0,a.Y)(j.F.LinkOutlined,{iconSize:"s"}),buttonSize:"small",disabled:!(null==ek||null==(Q=ek.chart)?void 0:Q.value)})})})]})]}):(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Select dashboard"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.FD)("div",{className:"input-container select-with-open-btn",children:[(0,a.Y)("div",{children:(0,a.Y)(N.A,{ariaLabel:(0,i.t)("Dashboard"),name:"dashboard",value:(null==ek||null==(ee=ek.dashboard)?void 0:ee.label)&&(null==ek||null==(et=ek.dashboard)?void 0:et.value)?{value:ek.dashboard.value,label:ek.dashboard.label}:void 0,options:tX,onChange:e=>{tP("dashboard",e||void 0),tP("chart",null),tm&&(e7([]),tD("")),(tm||tv)&&e9([]),tv&&ta([{filterName:"",filterType:"",nativeFilterId:null,columnLabel:"",columnName:"",filterValues:[]}])},placeholder:(0,i.t)("Select dashboard to use")})}),(0,a.Y)("div",{children:(0,a.Y)(C.m,{title:(0,i.t)("Open dashboard in new tab"),children:(0,a.Y)(O.$n,{"aria-label":(0,i.t)("Open dashboard in new tab"),onClick:()=>{var e,t;(t=null==ek||null==(e=ek.dashboard)?void 0:e.value)&&(0,A.VJ)(`/dashboard/${t}/`,{newWindow:!0})},icon:(0,a.Y)(j.F.LinkOutlined,{iconSize:"s"}),buttonSize:"small",disabled:!(null==ek||null==(el=ek.dashboard)?void 0:el.value)})})})]})]})}),(0,a.Y)(ey,{css:["PDF","TEXT","CSV"].includes(eB)&&ef,children:tp&&(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Content format"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Select format"),onChange:e=>{eX(e)},value:eB,options:eq===w.cM.Dashboard?["pdf","png"].map(e=>ev[e]):eo.includes(tc)?Object.values(ev):["pdf","png","csv"].map(e=>ev[e]),placeholder:(0,i.t)("Select format")})]})}),tm&&eq===w.cM.Dashboard&&(0,a.Y)(ey,{children:(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"control-label",children:(0,i.t)("Select tab")}),(0,a.Y)(eg,{disabled:(null==e8?void 0:e8.length)===0,treeData:e8,value:null==ek||null==(eO=ek.extra)||null==(eT=eO.dashboard)?void 0:eT.anchor,onSelect:tD,placeholder:(0,i.t)("Select a tab")})]})}),tv&&eq===w.cM.Dashboard&&(0,a.Y)(ey,{children:(0,a.Y)(x.l,{className:"filters",name:"form",autoComplete:"off",children:(0,a.Y)(x.l.List,{name:"filters",initialValue:tl,children:(t,{add:l,remove:n})=>(0,a.FD)("div",{children:[t.map(({key:t,name:l})=>{var r,o;return(0,a.FD)("div",{className:"filters-container",children:[(0,a.FD)("div",{className:"filters-dash-container",children:[(0,a.FD)("div",{className:"control-label",children:[(0,a.Y)("span",{className:"label-with-tooltip",children:(0,i.t)("Dashboard Filter")}),(0,a.Y)(S.I,{tooltip:(0,i.t)("Choose from existing dashboard filters and select a value to refine your report results.")})]}),(0,a.Y)(y.A,{disabled:(null==e3?void 0:e3.length)<1&&!(null==(r=tl[l])?void 0:r.filterName),ariaLabel:(0,i.t)("Select Filter"),placeholder:(0,i.t)("Select Filter"),value:null==(o=tl[l])?void 0:o.nativeFilterId,options:tF(l),onChange:t=>((t,l)=>{var a;let n;if(!l||"undefined"===l||"null"===l)return;let r=Object.values(te).flatMap(e=>null!=e?e:[]).filter(e=>e.id===l)[0],{filterType:o,adhoc_filters:s}=r;if(tl.some(e=>e.nativeFilterId===l))return void e((0,i.t)("This filter already exist on the report"));let c=r.name;n="filter_time"===o||"filter_timecolumn"===o||"filter_timegrain"===o?r.name:r.targets[0].column.name;let d=r.targets[0].datasetId||null,u=e3.filter(e=>e.value===l)[0].label,h=null==ek||null==(a=ek.dashboard)?void 0:a.value,p={formData:{datasource:`${d}__table`,groupby:[n],metrics:["count"],row_limit:1e3,showSearch:!0,viz_type:"filter_select",type:"NATIVE_FILTER",dashboardId:h,adhoc_filters:s},force:!1,ownState:{}};if("filter_time"===o||"filter_timecolumn"===o||"filter_timegrain"===o){tA(h,n,d,o,s).then(e=>{ta(tl.map((a,i)=>i===t?er({},a,{filterName:c,filterType:o,nativeFilterId:l,columnLabel:u,columnName:n,optionFilterValues:e,filterValues:[]}):a))}),ta(tl.map((e,a)=>a===t?er({},e,{filterName:c,filterType:o,nativeFilterId:l,columnLabel:u,columnName:n,optionFilterValues:[],filterValues:[]}):e));return}(0,z.yV)(p).then(e=>{let a=e.json.result[0].data.map(e=>({value:e[n],label:e[n]}));ta(tl.map((e,i)=>i===t?er({},e,{filterName:c,filterType:o,nativeFilterId:l,columnLabel:u,columnName:n,optionFilterValues:a,filterValues:[]}):e))})})(l,String(t)),onClear:()=>{let e=[...tl];e[l]={nativeFilterId:null,columnLabel:"",columnName:"",filterName:"",filterValues:[]},ta(e)},css:(0,u.AH)`
                                        flex: 1;
                                      `,oneLine:!0,allowClear:!0})]}),(0,a.FD)("div",{className:"filters-dashvalue-container",children:[(0,a.Y)("div",{className:"control-label",children:(0,i.t)("Value")}),((e,t)=>{if(!e)return null;let{filterType:l,filterValues:n}=e,r="multiple";if("filter_time"===l)return(0,a.Y)(eA,{name:"time_range",onChange:t=>{ta(tl.map(l=>e.nativeFilterId===l.nativeFilterId?er({},l,{filterValues:[t]}):l))},value:null==n?void 0:n[0]});if("filter_range"===l){let t=null==n?void 0:n[0],l=null==n?void 0:n[1];return(0,a.FD)("div",{children:[(0,a.FD)("div",{className:"inline-container",children:[(0,a.Y)(_.InputNumber,{value:t,onChange:t=>{ta(tl.map(l=>l.nativeFilterId===e.nativeFilterId?er({},l,{filterValues:[t,null==n?void 0:n[1]]}):l))}}),(0,a.Y)(es,{children:"-"}),(0,a.Y)(_.InputNumber,{value:l,onChange:t=>{ta(tl.map(l=>l.nativeFilterId===e.nativeFilterId?er({},l,{filterValues:[null==n?void 0:n[0],t]}):l))}})]}),(0,a.Y)(L.Mo,{status:"help",children:(0,i.t)("Enter minimum and maximum values for the range filter")})]})}return("filter_timegrain"===l||"filter_timecolumn"===l)&&(r="single"),(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Select Value"),placeholder:(0,i.t)("Select Value"),disabled:!(null==e?void 0:e.optionFilterValues),value:null==e?void 0:e.filterValues,options:(null==e?void 0:e.optionFilterValues)||[],onChange:e=>t0(t,e),mode:r,onClear:()=>{t0(t,[])},allowClear:!0})})(tl[l],l)]}),(0!==l||th)&&(0,a.Y)("div",{className:"filters-delete",children:(0,a.Y)(j.F.DeleteOutlined,{iconSize:"xl",className:"filters-trashcan",onClick:()=>{let e;(e=tl||[]).splice(l,1),ta(e),n(l)}})})]},t)}),tF().length>0&&(0,a.FD)(O.$n,{buttonStyle:"link",onClick:()=>{ta([...tl,{nativeFilterId:null,columnLabel:"",columnName:"",filterValues:[]}]),l()},children:["+ ",(0,i.t)("Apply another dashboard filter")]})]})})})}),eK&&(0,a.FD)(ey,{css:!v&&eq===w.cM.Chart&&ef,children:[(0,a.Y)("div",{className:"control-label",children:(0,i.t)("Screenshot width")}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(_.InputNumber,{type:"number",name:"custom_width",value:(null==ek?void 0:ek.custom_width)||void 0,min:600,max:2400,placeholder:(0,i.t)("Input custom width in pixels"),onChange:e=>{tP("custom_width",null==e||"string"==typeof e&&Number.isNaN(Number(e))?null:Number(e))}})})]}),(v||eq===w.cM.Dashboard)&&(0,a.Y)("div",{className:"inline-container",children:(0,a.Y)(_.Checkbox,{"data-test":"bypass-cache",checked:eW,onChange:e=>{eZ(e.target.checked)},children:(0,i.t)("Ignore cache when generating report")})})]})},{key:"schedule",label:(0,a.Y)(E.s,{title:eS.SCHEDULE_TITLE,subtitle:(0,i.t)("Define delivery schedule, timezone, and frequency settings."),validateCheckStatus:!tn[w.Z_.Schedule].hasErrors,testId:"schedule-panel"}),children:(0,a.FD)(a.FK,{children:[(0,a.Y)(B,{value:(null==ek?void 0:ek.crontab)||"",onChange:e=>tP("crontab",e)}),(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Timezone")," ",(0,a.Y)("span",{className:"required",children:"*"})]}),eU?(0,a.Y)(F.A,{onTimezoneChange:e=>{tP("timezone",e)},timezone:null==ek?void 0:ek.timezone,minWidth:"100%"}):(0,a.Y)(R.R,{size:"s",muted:!0,position:"normal"})]}),(0,a.FD)(ey,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Log retention"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(y.A,{ariaLabel:(0,i.t)("Log retention"),placeholder:(0,i.t)("Log retention"),onChange:e=>{tP("log_retention",e)},value:null==ek?void 0:ek.log_retention,options:ep,sortComparator:(0,g.qw)("value")})})]}),(0,a.Y)(ey,{css:ef,children:v?(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,i.t)("Working timeout"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(P,{min:1,name:"working_timeout",value:(null==ek?void 0:ek.working_timeout)||"",placeholder:(0,i.t)("Time in seconds"),onChange:tQ,timeUnit:(0,i.t)("seconds")})})]}):(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"control-label",children:(0,i.t)("Grace period")}),(0,a.Y)("div",{className:"input-container",children:(0,a.Y)(P,{min:1,name:"grace_period",value:(null==ek?void 0:ek.grace_period)||"",placeholder:(0,i.t)("Time in seconds"),onChange:tQ,timeUnit:(0,i.t)("seconds")})})]})})]})},{key:"notification",label:(0,a.Y)(E.s,{title:eS.NOTIFICATION_TITLE,subtitle:(0,i.t)("Choose notification method and recipients."),validateCheckStatus:!tn[w.Z_.Notification].hasErrors,testId:"notification-method-panel"}),children:(0,a.FD)(a.FK,{children:[tg.map((e,t)=>(0,a.Y)(eE,{children:(0,a.Y)(ea,{setting:e,index:t,onUpdate:tI,onRemove:tY,onInputChange:tJ,email_subject:(null==ek?void 0:ek.email_subject)||"",defaultSubject:ty||"",setErrorSubject:t2},`NotificationMethod-${t}`)})),tS>tg.length&&(0,a.Y)(eC,{"data-test":"notification-add",status:tf,onClick:()=>{t_([...tg,{recipients:"",options:eD.filter(e=>!tg.reduce((t,l)=>t||e===l.method,!1))}]),tb(tg.length===tS?"hidden":"disabled")}})]})}]})})})})},50170(e,t,l){l.d(t,{Or:()=>s,Z_:()=>c,cM:()=>d,yV:()=>o});var a,n,i,r,o=((a={}).Email="Email",a.Slack="Slack",a.SlackV2="SlackV2",a.Webhook="Webhook",a),s=((n={}).Success="Success",n.Working="Working",n.Error="Error",n.Noop="Not triggered",n.Grace="On Grace",n),c=((i={}).General="generalSection",i.Content="contentSection",i.Alert="alertConditionSection",i.Schedule="scheduleSection",i.Notification="notificationSection",i),d=((r={}).Dashboard="dashboard",r.Chart="chart",r)}}]);