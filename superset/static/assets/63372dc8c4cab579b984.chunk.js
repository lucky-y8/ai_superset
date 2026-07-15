"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9918],{72624(e,t,a){a.d(t,{Kg:()=>f,J8:()=>u,Pz:()=>g,tg:()=>p,pY:()=>h,px:()=>m});var i=a(27124),n=a(90240),l=a(65802),r=a(77092),o=a(80873);let s=e=>null!=e&&"function"==typeof e[Symbol.iterator];var d=a(89495);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let p=({datasetId:e,datasourceType:t,dependencies:a={},groupby:i,defaultDataMask:l,controlValues:r,time_grains:s,filterType:p,sortMetric:h,adhoc_filters:u,time_range:m,granularity_sqla:f,type:g,dashboardId:b,id:v})=>{var x,$,y;let w,_={};if(e){let a=t||n.cT.Table;_.datasource=`${e}__${a}`}i&&(_.groupby=[i]),h&&(_.sortMetric=h);let C=s&&s.length>0?{time_grains:s}:{};return c({},r,C,_,{adhoc_filters:null!=u?u:[],extra_filters:[],extra_form_data:a,granularity_sqla:f,metrics:["count"],row_limit:(null==(w=(0,d.Ay)())||null==(y=w.common)||null==($=y.conf)?void 0:$.NATIVE_FILTER_DEFAULT_ROW_LIMIT)||1e3,showSearch:!0,defaultValue:null==l||null==(x=l.filterState)?void 0:x.value,time_range:m,url_params:(0,o.A)("regular"),inView:!0,viz_type:p,type:g,dashboardId:b,native_filter_id:v})};function h(e={},t={}){let a={};return l.t1.forEach(i=>{let n=e[i],l=t[i],r=[...s(n)?n:[],...s(l)?l:[]];r.length&&(a[i]=r)}),l.zk.forEach(i=>{let n=e[i];void 0!==n&&(a[i]=n);let l=t[i];void 0!==l&&(a[i]=l)}),a}function u(e,t){let a={};return t.forEach(t=>{var i,n;a=h(a,null!=(i=null==(n=e[t])?void 0:n.extraFormData)?i:{})}),a}function m(e){return!e.includes(r.nS.NativeFilter)||e.includes(r.nS.InteractiveChart)}let f=(e,t)=>new Set(t.map(t=>{var a,i;return null==(i=e.find(e=>{var a;return(null==e||null==(a=e.meta)?void 0:a.chartId)===t}))||null==(a=i.parents)?void 0:a.filter(e=>e.startsWith("TAB-"))}).filter(e=>void 0!==e).flat()),g=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,i.t)("Unknown value")},58348(e,t,a){var i=a(2445),n=a(8563),l=a(27124),r=a(85614),o=a(67520);let s=r.styled.div`
  ${({theme:e})=>`
    .tooltip-header {
      font-size: ${e.fontSize}px;
      font-weight: ${e.fontWeightStrong};
    }

    .tooltip-description {
      margin-top: ${2*e.sizeUnit}px;
      display: -webkit-box;
      -webkit-line-clamp: 20;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`,d=r.styled.div`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,c=r.styled.span`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,p=r.styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  width: 100%;
`,h=r.styled.span`
  ${({theme:{fontSizeSM:e,colorTextSecondary:t}})=>`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e}px;
    color: ${t};
    line-height: 1.6;
  `}
`,u=e=>!["null","none"].includes(e.toLowerCase())&&""!==e.trim();a.d(t,["$",0,e=>{var t,a,r,m,f,g;return(0,i.Y)(n.m,{mouseEnterDelay:.2,placement:"right",title:(0,i.FD)(s,{children:[(0,i.Y)("div",{className:"tooltip-header",children:e.table_name&&u(e.table_name)?e.table_name:(0,l.t)("Not defined")}),(0,i.FD)("div",{className:"tooltip-description",children:[(0,i.FD)("div",{children:[(0,o.A2)(e.kind),":"," ",null!=(t=null==(m=e.database)?void 0:m.database_name)?t:(0,l.t)("Not defined")]}),e.schema&&u(e.schema)&&(0,i.FD)("div",{children:[(0,l.t)("Schema"),": ",e.schema]})]})]}),children:(0,i.FD)(d,{children:[(0,i.Y)(c,{children:e.table_name&&u(e.table_name)?e.table_name:null!=(a=null==(f=e.database)?void 0:f.database_name)?a:(0,l.t)("Not defined")}),(0,i.FD)(p,{children:[(0,i.Y)(h,{children:null!=(r=null==(g=e.database)?void 0:g.database_name)?r:(0,l.t)("Not defined")}),e.schema&&u(e.schema)&&(0,i.FD)(h,{children:[" - ",e.schema]})]})]})})}])},134(e,t,a){a.r(t);var i=a(2445),n=a(64260),l=a(58561),r=a.n(l),o=a(27124),s=a(73815),d=a(72255),c=a(85614),p=a(71671),h=a(97126),u=a(71519),m=a(61574),f=a(65471),g=a(62858),b=a(29138),v=a(10020),x=a(7070),$=a(81991),y=a(12097),w=a(89495),_=a(58348),C=a(60685),z=a(67520);let S=((0,w.Ay)().common.conf.VIZ_TYPE_DENYLIST||[]).concat(Object.values(h.fJ)),k=c.styled.div`
  ${({theme:e})=>`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 1090px;
    max-height: calc(100vh - 56px);
    border-radius: ${e.borderRadius}px;
    background-color: ${e.colorBgContainer};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${e.padding}px;
    padding-right: ${e.padding}px;
    padding-bottom: ${e.padding}px;

    h3 {
      padding-bottom: ${e.paddingSM}px;
    }

    & .dataset {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: ${e.marginMD}px;

      & > div {
        min-width: 200px;
        width: 300px;
      }

      & > span {
        color: ${e.colorText};
        margin-left: ${e.margin}px;
      }
    }

    & .viz-gallery {
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;
      margin: ${e.marginXXS}px 0px;
      max-height: calc(100vh - 306px);
      flex: 1;
    }

    & .footer {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      & > span {
        color: ${e.colorText};
        margin-right: ${e.margin}px;
      }
    }

    /* The following extra ampersands (&&&&) are used to boost selector specificity */

    &&&& .ant-steps-item-rail {
      display: none;
    }

    &&&& .ant-steps-item-icon {
      margin-right: ${e.marginXS}px;
      width: ${5*e.sizeUnit}px;
      height: ${5*e.sizeUnit}px;
      line-height: ${5*e.sizeUnit}px;
    }

    &&&& .ant-steps-item-title {
      line-height: ${5*e.sizeUnit}px;
    }

    &&&& .ant-steps-item-content {
      overflow: unset;

      .ant-steps-item-description {
        margin-top: ${e.sizeUnit}px;
        padding-bottom: ${e.sizeUnit}px;
      }
    }

    &&&& .ant-tooltip-open {
      display: inline;
    }
  `}
`,F=c.styled.span`
  ${({theme:{fontSize:e,fontWeightStrong:t}})=>`
      font-size: ${e}px;
      font-weight: ${t};
    `}
`,D=c.styled.div`
  ${({theme:e})=>`
    margin-top: ${e.margin}px;
    margin-bottom: ${e.marginSM}px;
    margin-left: ${e.marginMD}px;
  `}
`,Y=({user:e,addSuccessToast:t})=>{let a=(0,c.useTheme)(),l=(0,m.W6)(),x=(0,n.useMemo)(()=>(0,y.L)("can_write","Dataset",e.roles),[e.roles]),w=(0,n.useMemo)(()=>new URLSearchParams(window.location.search).has("dataset"),[]),[Y,T]=(0,n.useState)(void 0),[A,U]=(0,n.useState)(null),[N,I]=(0,n.useState)(w),j=(0,n.useCallback)(()=>{let e=(0,p.P3)(h.vX.dashboardId),t=`/explore/?viz_type=${A}&datasource=${null==Y?void 0:Y.value}`;return(0,d.A)(e)&&(t+=`&dashboard_id=${e}`),t},[A,null==Y?void 0:Y.value]),E=(0,n.useCallback)(()=>{l.push(j())},[l,j]),L=(0,n.useCallback)(e=>{T(e)},[]),P=(0,n.useCallback)(e=>{U(e)},[]),M=(0,n.useCallback)(()=>!((null==Y?void 0:Y.value)&&A),[null==Y?void 0:Y.value,A]),R=(0,n.useCallback)(()=>{M()||E()},[M,E]),O=(0,n.useCallback)((e,t,a,i=!1)=>{let n=r().encode({columns:["id","table_name","datasource_type","database.database_name","schema"],filters:[{col:"table_name",opr:i?"eq":"ct",value:e}],page:t,page_size:a,order_column:"table_name",order_direction:"asc"});return s.A.get({endpoint:`/api/v1/dataset/?q=${n}`}).then(e=>({data:e.json.result.map(e=>({id:e.id,value:`${e.id}__${e.datasource_type}`,label:(0,_.$)(e),table_name:e.table_name})),totalCount:e.json.count}))},[]);(0,n.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("dataset");e&&(O(e,0,1,!0).then(e=>{T(e.data[0]),I(!1)}).catch(()=>{I(!1)}),t((0,o.t)("The dataset has been saved")))},[O,t]);let V=M(),W=(0,o.t)("view instructions"),X=x?(0,i.FD)("span",{"data-test":"dataset-write",children:[(0,i.Y)(u.N_,{to:"/dataset/add/","data-test":"add-chart-new-dataset",children:(0,o.t)("Add a dataset")})," ",(0,o.t)("or")," ",(0,i.FD)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank","data-test":"add-chart-new-dataset-instructions",children:[`${W} `,(0,i.Y)(C.F.Full,{iconSize:"m",iconColor:a.colorPrimary})]}),"."]}):(0,i.FD)("span",{"data-test":"no-dataset-write",children:[(0,i.FD)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank",children:[`${W} `,(0,i.Y)(C.F.Full,{iconSize:"m",iconColor:a.colorPrimary})]}),"."]});return N?(0,i.Y)(v.R,{}):(0,i.FD)(k,{children:[(0,i.Y)("h3",{children:(0,o.t)("Create a new chart")}),(0,i.Y)(f.Steps,{direction:"vertical",size:"small",items:[{title:(0,i.Y)(F,{children:(0,o.t)("Choose a %s",(0,z.CI)())}),status:(null==Y?void 0:Y.value)?"finish":"process",description:(0,i.FD)(D,{className:"dataset",children:[(0,i.Y)(g.A,{autoFocus:!0,ariaLabel:(0,z.$s)(),name:"select-datasource",onChange:L,options:O,optionFilterProps:["id","table_name"],placeholder:(0,o.t)("Choose a %s",(0,z.CI)()),showSearch:!0,value:Y}),X]})},{title:(0,i.Y)(F,{children:(0,o.t)("Choose chart type")}),status:A?"finish":"process",description:(0,i.Y)(D,{children:(0,i.Y)($.A,{denyList:S,className:"viz-gallery",onChange:P,onDoubleClick:R,selectedViz:A})})}]}),(0,i.FD)("div",{className:"footer",children:[V&&(0,i.Y)("span",{children:(0,o.t)("Please select both a %s and a Chart type to proceed",(0,z.$s)())}),(0,i.Y)(b.$n,{buttonStyle:"primary",disabled:V,onClick:E,children:(0,o.t)("Create new chart")})]})]})},T=(0,x.Ay)(Y);a.d(t,["ChartCreation",0,Y,"default",0,T])}}]);