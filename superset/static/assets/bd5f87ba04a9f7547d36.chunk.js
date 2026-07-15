"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3342],{60917(e,r,t){t(70258);let o=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map(e=>({meta:"sql",name:e,score:100,value:e}));t.d(r,["A",0,o])},83030(e,r,t){t.d(r,{l:()=>E,A:()=>x});var o,l=t(2445),n=t(27124),s=t(85614),c=t(90617);let a=t(65471).Progress;var i=t(29138),d=t(56030),u=t(60685);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}let{Text:f}=c.o;var E=((o={}).STREAMING="streaming",o.COMPLETED="completed",o.ERROR="error",o.CANCELLED="cancelled",o);let h=s.styled.div`
  ${({theme:e})=>`
    padding: ${4*e.sizeUnit}px 0 ${2*e.sizeUnit}px;
  `}
`,v=s.styled.div`
  ${({theme:e})=>`
    margin: ${6*e.sizeUnit}px 0;
    position: relative;
  `}
`,R=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${3*e.sizeUnit}px;
  `}
`,b=(0,s.styled)(a)`
  flex: 1;
`,S=(0,s.styled)(u.F.CheckCircleFilled)`
  ${({theme:e})=>`
    color: ${e.colorSuccess};
    font-size: ${6*e.sizeUnit}px;
    flex-shrink: 0;
  `}
`,g=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${4*e.sizeUnit}px;
    height: ${4*e.sizeUnit}px;
    background-color: ${e.colorError};
    border-radius: 50%;
    flex-shrink: 0;
  `}
`,m=(0,s.styled)(u.F.CloseOutlined)`
  ${({theme:e})=>`
    color: ${e.colorWhite};
    font-size: ${2.5*e.sizeUnit}px;
  `}
`,T=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${2*e.sizeUnit}px;
    justify-content: flex-end;
  `}
`,$=(0,s.styled)(f)`
  ${({theme:e})=>`
    display: block;
    text-align: center;
    margin-top: ${4*e.sizeUnit}px;
  `}
`,y=(0,s.styled)($)`
  ${({theme:e})=>`
    color: ${e.colorError};
  `}
`,C=(0,s.styled)(i.$n)`
  ${({theme:e})=>`
    background-color: ${e.colorSuccessBg};
    color: ${e.colorSuccess};
    border-color: ${e.colorSuccessBg};

    &:hover {
      background-color: ${e.colorSuccessBg};
      color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
    }

    &:focus {
      background-color: ${e.colorSuccessBg};
      color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
    }
  `}
`,A=(0,s.styled)(i.$n)`
  ${({theme:e})=>`
    background-color: ${e.colorSuccess};
    border-color: ${e.colorSuccess};
    color: ${e.colorWhite};

    &:hover:not(:disabled) {
      background-color: ${e.colorSuccessActive};
      border-color: ${e.colorSuccessActive};
      color: ${e.colorWhite};
    }

    &:focus:not(:disabled) {
      background-color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
      color: ${e.colorWhite};
    }

    &:disabled {
      background-color: ${e.colorBgContainerDisabled};
      border-color: ${e.colorBgContainerDisabled};
      color: ${e.colorTextDisabled};
    }
  `}
`,w=({status:e,progress:r,onCancel:t,onRetry:o,onDownload:c,getProgressPercentage:i})=>{let d=(0,s.useTheme)(),{downloadUrl:u,filename:f,error:E}=r,w="error"===e,x="cancelled"===e,L="completed"===e,_="streaming"===e,k=w||L,O=(w||x)&&o,N=(e=>{switch(e){case"completed":return"success";case"error":case"cancelled":return"exception";default:return"normal"}})(e),D=L?100:i(),U=((e,r,t)=>{switch(e){case"error":return t||(0,n.t)("Export failed");case"cancelled":return(0,n.t)("Export cancelled");case"completed":return(0,n.t)("Export successful: %s",r||"export");default:return r?(0,n.t)("Processing export for %s",r):(0,n.t)("Processing export...")}})(e,f,E),I=(e=>{switch(e){case"error":case"cancelled":case"completed":return(0,n.t)("Close");default:return(0,n.t)("Cancel")}})(e),P=p({percent:D,status:N,showInfo:_},_&&{strokeColor:d.colorSuccess,format:e=>`${Math.round(e||0)}%`});return(0,l.FD)(h,{children:[(0,l.FD)(v,{children:[k?(0,l.FD)(R,{children:[(0,l.Y)(b,p({},P)),w&&(0,l.Y)(g,{children:(0,l.Y)(m,{})}),L&&(0,l.Y)(S,{})]}):(0,l.Y)(a,p({},P)),w?(0,l.Y)(y,{children:U}):(0,l.Y)($,{children:U})]}),(0,l.FD)(T,{children:[(0,l.Y)(C,{onClick:t,children:I}),O?(0,l.Y)(A,{onClick:o,children:(0,n.t)("Retry")}):(0,l.Y)(A,{onClick:c,disabled:!L||!u,children:(0,n.t)("Download")})]})]})},x=({visible:e,onCancel:r,onRetry:t,onDownload:o,progress:s})=>{let{status:c,downloadUrl:a,filename:i}=s;return(0,l.Y)(d.aF,{title:(0,n.t)("CSV Export"),show:e,onHide:r,hideFooter:!0,width:600,maskClosable:!1,centered:!0,children:(0,l.Y)(w,{status:c,progress:s,onCancel:r,onRetry:t,onDownload:()=>{if(a&&i){let e;(e=document.createElement("a")).href=a,e.download=i,document.body.appendChild(e),e.click(),document.body.removeChild(e),null==o||o(),r()}},getProgressPercentage:()=>{var e,r;return e=s.totalRows,r=s.rowsProcessed,"completed"===c?100:e&&!(e<=0)&&r?Math.floor(r/e*100):0}})})}},71362(e,r,t){t.d(r,{K:()=>l.K,O:()=>o.A});var o=t(83030),l=t(7411)},7411(e,r,t){var o=t(64260),l=t(73815),n=t(83030),s=t(47566),c=t(89495);function a(e,r,t,o,l,n,s){try{var c=e[n](s),a=c.value}catch(e){t(e);return}c.done?r(a):Promise.resolve(a).then(o,l)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(o,l){var n=e.apply(r,t);function s(e){a(n,o,l,s,c,"next",e)}function c(e){a(n,o,l,s,c,"throw",e)}s(void 0)})}}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}let u=e=>e.filter(e=>10===e).length;t.d(r,["K",0,(e={})=>{let[r,t]=(0,o.useState)({rowsProcessed:0,totalRows:void 0,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING}),[a,p]=(0,o.useState)(0),f=(0,o.useRef)(null),E=(0,o.useRef)(null),h=(0,o.useRef)(null),v=(0,o.useRef)(!1),R=(0,o.useCallback)(e=>{t(r=>d({},r,e))},[]),b=(0,o.useCallback)(r=>i(function*(){let{url:t,payload:o,filename:a,exportType:d,exportSource:p,expectedRows:E}=r;if(!v.current){v.current=!0,f.current=new AbortController,R({rowsProcessed:0,totalRows:E,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING,filename:a});try{var b;let r,S,g=yield(r=f.current.signal,i(function*(){let e={"Content-Type":"application/x-www-form-urlencoded"},t=l.A.getGuestToken(),n=!!t&&"chart"===p&&!("client_id"in o);if(!n){let r=yield l.A.getCSRFToken();r&&(e["X-CSRFToken"]=r)}let s={};return a&&(s.filename=a),void 0!==E&&(s.expected_rows=E.toString()),t&&n&&(s.guest_token=t),"client_id"in o?s.client_id=String(o.client_id):s.form_data=JSON.stringify(o),{method:"POST",headers:e,body:new URLSearchParams(s),signal:r,credentials:"same-origin"}})()),m=(S=(0,c.N8)(),t.startsWith("//")||t.match(/^https?:\/\//)?t:t.startsWith("/")?!S||t===S||t.startsWith(`${S}/`)||t.startsWith(`${S}?`)||t.startsWith(`${S}#`)?t:(0,s.Gm)(t):(0,s.Gm)(`/${t}`)),T=yield fetch(m,g);if(!T.ok)throw Error(`Export failed: ${T.status} ${T.statusText}`);if(!T.body)throw Error("Response body is not available for streaming");let $=T.headers.get("Content-Disposition"),y=`export.${d}`;if($){let e=$.match(/filename="?([^"]+)"?/);e&&e[1]&&(y=e[1])}let C=T.body.getReader(),A=[],w=0,x=0,L=!1;for(;;){let{done:r,value:t}=yield C.read();if(r)break;if(null==(b=f.current)?void 0:b.signal.aborted)throw Error("Export cancelled by user");let o=new TextDecoder().decode(t);if(o.includes("__STREAM_ERROR__")){let r=o.match(/__STREAM_ERROR__:(.+)/),t=r?r[1].trim():"Export failed. Please try again.";R({status:n.l.ERROR,error:t,rowsProcessed:x,totalRows:E,totalSize:w}),v.current=!1,null==e.onError||e.onError.call(e,t),L=!0;break}A.push(t),w+=t.length,x+=u(t),R({status:n.l.STREAMING,rowsProcessed:x,totalRows:E,totalSize:w,filename:y})}if(L)return;let _=((e,r,t)=>{let o=new Uint8Array(r),l=0;for(let r of e)o.set(r,l),l+=r.length;return new Blob([o],{type:"csv"===t?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})})(A,w,d);h.current&&URL.revokeObjectURL(h.current);let k=URL.createObjectURL(_);h.current=k,R({status:n.l.COMPLETED,downloadUrl:k,filename:y}),v.current=!1,null==e.onComplete||e.onComplete.call(e,k,y)}catch(t){let r=t instanceof Error?t.message:"Unknown error occurred";r.includes("cancelled")||r.includes("aborted")?R({status:n.l.CANCELLED}):(R({status:n.l.ERROR,error:r}),null==e.onError||e.onError.call(e,r)),v.current=!1}finally{f.current=null}}})(),[R,e]),S=(0,o.useCallback)(e=>i(function*(){v.current||(p(0),E.current=e,R({rowsProcessed:0,totalRows:e.expectedRows,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING,filename:e.filename}),b(e))})(),[R,b]),g=(0,o.useCallback)(()=>{!E.current||v.current||(p(0),b(E.current))},[b]),m=(0,o.useCallback)(()=>{f.current&&(f.current.abort(),R({status:n.l.CANCELLED}))},[R]),T=(0,o.useCallback)(()=>{h.current&&(URL.revokeObjectURL(h.current),h.current=null),v.current=!1,f.current=null,t({rowsProcessed:0,totalRows:void 0,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING})},[]);return(0,o.useEffect)(()=>()=>{h.current&&URL.revokeObjectURL(h.current)},[]),{progress:r,isExporting:v.current,retryCount:a,startExport:S,cancelExport:m,resetExport:T,retryExport:g}}])},76424(e,r,t){var o=t(73815),l=t(13711);let n=(e,r)=>{let t="api/v1/explore/form_data";return e&&(t=t.concat(`/${e}`)),r&&(t=t.concat(`?tab_id=${r}`)),t},s=(e,r,t,o)=>{let n={datasource_id:e,datasource_type:r,form_data:JSON.stringify((0,l.k)(t))};return o&&(n.chart_id=o),n};t.d(r,["T",0,(e,r,t,l,c)=>o.A.post({endpoint:n(void 0,c),jsonPayload:s(e,r,t,l)}).then(e=>e.json.key),"c",0,(e,r,t,l,c,a)=>o.A.put({endpoint:n(t,a),jsonPayload:s(e,r,l,c)}).then(e=>e.json.message)])},47451(e,r,t){var o=t(51281),l=t(61225),n=t(12097);t.d(r,["S",0,()=>{let e=(0,l.d4)(e=>{var r;return(0,n.L)("can_explore","Superset",null==(r=e.user)?void 0:r.roles)}),r=(0,l.d4)(e=>{var r;return(0,n.L)("can_write","ExploreFormDataRestApi",null==(r=e.user)?void 0:r.roles)}),t=(0,l.d4)(e=>{var r;return(0,n.L)("can_samples","Datasource",null==(r=e.user)?void 0:r.roles)}),s=(0,l.d4)(e=>{var r;return(0,n.L)("can_csv","Superset",null==(r=e.user)?void 0:r.roles)}),c=(0,l.d4)(e=>{var r;return(0,n.L)("can_export_csv","SQLLab",null==(r=e.user)?void 0:r.roles)}),a=(0,l.d4)(e=>{var r;return(0,n.L)("can_export_data","Superset",null==(r=e.user)?void 0:r.roles)}),i=(0,l.d4)(e=>{var r;return(0,n.L)("can_export_image","Superset",null==(r=e.user)?void 0:r.roles)}),d=(0,l.d4)(e=>{var r;return(0,n.L)("can_copy_clipboard","Superset",null==(r=e.user)?void 0:r.roles)}),u=(0,o.G7)(o.TO.GranularExportControls),p=u?a:s,f=(0,l.d4)(e=>{var r;return(0,n.L)("can_drill","Dashboard",null==(r=e.user)?void 0:r.roles)}),E=(0,l.d4)(e=>{var r;return(0,n.L)("can_get_drill_info","Dataset",null==(r=e.user)?void 0:r.roles)});return{canExplore:e,canWriteExploreFormData:r,canDatasourceSamples:t,canDownload:p,canExportData:p,canExportDataSqlLab:u?a:c,canExportImage:u?i:s,canCopyClipboard:u?d:s,canCopyClipboardSqlLab:u?d:c,canDrill:f,canDrillBy:(e||f)&&r&&E,canDrillToDetail:(e||f)&&t&&E,canViewQuery:(0,l.d4)(e=>{var r;return(0,n.L)("can_view_query","Dashboard",null==(r=e.user)?void 0:r.roles)}),canViewTable:(0,l.d4)(e=>{var r;return(0,n.L)("can_view_chart_as_table","Dashboard",null==(r=e.user)?void 0:r.roles)})}}])},58414(e,r,t){t.d(r,{wW:()=>n,SM:()=>s,el:()=>l});var o=t(73815);let l=new Map,n=((e,r,t=(...e)=>JSON.stringify([...e]))=>(...o)=>{let l=t(...o);if(r.has(l))return r.get(l);let n=e(...o);return r.set(l,n),n})(o.A.get,l,({endpoint:e})=>e||"");function s(e){if(null==e||""===e)return;let r=String(e);l.forEach((e,t)=>{for(let e of[`/api/v1/dataset/${r}`,`/api/v1/dataset/${r}/`,`/api/v1/dataset/${r}?`])if(t.includes(e)){let r=t.substring(t.indexOf(e)+e.length);if(e.endsWith("/")||e.endsWith("?")||""===r||r.startsWith("/")||r.startsWith("?")){l.delete(t);break}}})}},13711(e,r,t){var o=t(54930);let l=["url_params"];t.d(r,["k",0,e=>(0,o.A)(e,l)])}}]);