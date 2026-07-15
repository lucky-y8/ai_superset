"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8085],{54303(e,a,t){t.d(a,{hT:()=>e5,Ay:()=>e3});var n,l,i,r,o=t(2445),s=t(27124),d=t(19202),c=t(27243),u=t(85614),h=t(64260),p=t(61574),m=t(21804),g=t(89920),b=t(33296),v=t(68292),f=t(17437),_=t(90617),y=t(60685),x=t(79592),Y=t(8563);function w(){return(w=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let S=e=>{let{buttonText:a,icon:t,altText:n}=e,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(a.indexOf(t=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t]);return l}(e,["buttonText","icon","altText"]);return(0,o.Y)(x.Z,w({hoverable:!0,role:"button",tabIndex:0,"aria-label":a,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(l.onClick&&l.onClick(e)," "===e.key&&e.preventDefault()),null==l.onKeyDown||l.onKeyDown.call(l,e)},cover:(0,o.Y)("div",{css:(0,f.AH)`
          display: flex;
          align-content: center;
          align-items: center;
          height: 100px;
        `,children:t?(0,o.Y)("img",{src:t,alt:n||a,css:(0,f.AH)`
              width: 100%;
              object-fit: contain;
              height: 48px;
            `}):(0,o.Y)(y.F.DatabaseOutlined,{iconSize:"xxl","aria-label":"default-icon"})}),css:e=>w({padding:3*e.sizeUnit,textAlign:"center"},l.style)},l,{children:(0,o.Y)(Y.m,{title:a,children:(0,o.Y)(_.o.Text,{ellipsis:!0,children:a})})}))};var C=t(34835),k=t(29138),F=t(56030),D=t(80967),A=t(65471),N=t(10020),$=t(13512),O=t(7070),E=t(18847),T=t(98267),z=t(66401),P=t(62315),U=t(84151),L=((n={}).SqlalchemyUri="sqlalchemy_form",n.DynamicForm="dynamic_form",n),q=((l={}).GSheet="gsheets",l.BigQuery="bigquery",l.Snowflake="snowflake",l),M=t(46942),I=t.n(M),R=t(51281),H=t(10938),j=t(2404),K=t(35630),B=t(23918);let V=(0,f.AH)`
  margin-bottom: 0;
`,G=u.styled.header`
  padding: ${({theme:e})=>2*e.sizeUnit}px
    ${({theme:e})=>4*e.sizeUnit}px;
  line-height: ${({theme:e})=>6*e.sizeUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${({theme:e})=>4.25*e.sizeUnit}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeLG}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.sizeUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.sizeUnit}px;
    }
  }
`,J=(0,f.AH)`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,Q=(0,f.AH)`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,W=e=>(0,f.AH)`
  margin-bottom: ${5*e.sizeUnit}px;
  svg {
    margin-bottom: ${.25*e.sizeUnit}px;
  }
  display: flex;
  align-items: center;
`,X=e=>(0,f.AH)`
  padding-left: ${2*e.sizeUnit}px;
  padding-right: ${2*e.sizeUnit}px;
`,Z=e=>(0,f.AH)`
  padding: ${4*e.sizeUnit}px ${4*e.sizeUnit}px 0;
`,ee=e=>(0,f.AH)`
  .ant-select-dropdown {
    max-height: ${40*e.sizeUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.sizeUnit}px ${4*e.sizeUnit}px
      ${4*e.sizeUnit}px;
  }

  .ant-modal-close-x .close {
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.sizeUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.sizeUnit}px;
  }
`,ea=e=>(0,f.AH)`
  margin: ${4*e.sizeUnit}px 0;
`,et=u.styled.div`
  ${({theme:e})=>(0,f.AH)`
    margin: 0 ${4*e.sizeUnit}px ${4*e.sizeUnit}px;
  `}
`,en=e=>(0,f.AH)`
  .required {
    margin-left: ${e.sizeUnit/2}px;
    color: ${e.colorError};
  }

  .helper {
    display: block;
    padding: ${e.sizeUnit}px 0;
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    text-align: left;
  }
`,el=e=>(0,f.AH)`
  .form-group {
    margin-bottom: ${4*e.sizeUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.sizeUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.sizeUnit}px;
      }
    }
  }
  .helper {
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    margin-top: ${1.5*e.sizeUnit}px;
  }
  .ant-tabs-body-holder {
    overflow: auto;
    max-height: 480px;
  }
`,ei=u.styled.div`
  ${({theme:e})=>(0,f.AH)`
    margin-bottom: ${6*e.sizeUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.sizeUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.sizeUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.sizeUnit}px;
        margin-top: ${.75*e.sizeUnit}px;
        font-family: ${e.fontFamily};
        font-size: ${e.fontSize}px;
      }

      i {
        margin: 0 ${e.sizeUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colorTextPlaceholder};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.sizeUnit}px ${2*e.sizeUnit}px;
      border-style: none;
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.sizeUnit}px;
      margin-bottom: 0;
      padding: 0;
      &.open {
        height: ${108}px;
        padding-right: ${5*e.sizeUnit}px;
      }
    }
  `}
`,er=(0,u.styled)(B.iN)`
  flex: 1 1 auto;
  /* Border is already applied by AceEditor itself */
`,eo=u.styled.div`
  padding-top: ${({theme:e})=>e.sizeUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.sizeUnit}px;
    padding-bottom: ${({theme:e})=>e.sizeUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.sizeUnit}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,es=u.styled.div`
  padding: 0 ${({theme:e})=>4*e.sizeUnit}px;
  margin-top: ${({theme:e})=>6*e.sizeUnit}px;
`,ed=e=>(0,f.AH)`
  text-transform: initial;
  padding: 0 ${4*e.sizeUnit}px;
  padding-right: ${2*e.sizeUnit}px;
`,ec=e=>(0,f.AH)`
  font-size: ${3.5*e.sizeUnit}px;
  text-transform: initial;
  padding-right: ${2*e.sizeUnit}px;
`,eu=u.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colorTextSecondary};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0px;
  }
`;u.styled.div`
  color: ${({theme:e})=>e.colorText};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
`,u.styled.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
`;let eh=u.styled.div`
  color: ${({theme:e})=>e.colorTextSecondary};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
`,ep=u.styled.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSizeLG}px;
  font-weight: ${({theme:e})=>e.fontWeightStrong};
`,em=u.styled.div`
  margin-top: ${({theme:e})=>4*e.sizeUnit}px;

  /* Match the label-to-input spacing used by LabeledErrorBoundInput's
     StyledInput so the bare <FormLabel>+<Select> pairs in this form look
     consistent with the surrounding Display name / Service Account inputs. */
  .ant-select {
    margin: ${({theme:e})=>`${e.sizeUnit}px 0 ${2*e.sizeUnit}px`};
  }

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    color: ${({theme:e})=>e.colorText};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.sizeUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colorTextSecondary};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>4*e.sizeUnit}px 0;
    display: flex;
    flex-direction: column;
  }

  .input-container {
    width: 100%;

    button {
      width: fit-content;
    }

    .credentials-uploaded {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>3*e.sizeUnit}px;
      width: fit-content;
    }

    .credentials-uploaded-btn,
    .credentials-uploaded-remove {
      flex: 0 0 auto;
    }

    /* hide native file upload input element */
    .input-upload {
      display: none !important;
    }
  }
`,eg=u.styled.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.sizeUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.sizeUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.sizeUnit}px;
    .available-label {
      font-size: ${({theme:e})=>e.fontSizeLG}px;
      font-weight: ${({theme:e})=>e.fontWeightStrong};
      margin: ${({theme:e})=>6*e.sizeUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    font-size: ${({theme:e})=>e.fontSizeSM}px;
  }
`,eb=(0,u.styled)(k.$n)`
  width: ${({theme:e})=>40*e.sizeUnit}px;
`,ev=u.styled.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndexPopupBase};
  background: ${({theme:e})=>e.colorBgLayout};
  height: auto;
`,ef=u.styled.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.fontSizeLG}px;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
    margin: ${({theme:e})=>10*e.sizeUnit}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,e_=u.styled.div`
  margin: ${({theme:e})=>4*e.sizeUnit}px;
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`;function ey(){return(ey=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let ex=({db:e,onInputChange:a,onTextChange:t,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:i,extraExtension:r})=>{var d,c,p,m,g,b,v,f;let _=e=>{let{name:a,value:t}=e.target;("schema_cache_timeout"===a||"table_cache_timeout"===a)&&0>Number(t)||l(e)},y=!!(null==e?void 0:e.expose_in_sqllab),x=!!((null==e?void 0:e.allow_ctas)||(null==e?void 0:e.allow_cvas)),Y=null==e||null==(m=e.engine_information)?void 0:m.supports_file_upload,w=null==e||null==(g=e.engine_information)?void 0:g.supports_dynamic_catalog,S=JSON.parse((null==e?void 0:e.extra)||"{}",(e,a)=>"engine_params"===e&&"object"==typeof a?JSON.stringify(a):a),C=(0,K.p)(null==e?void 0:e.masked_encrypted_extra,{errorPrefix:"Invalid secure extra JSON"}),k=Object.keys((null==S?void 0:S.metadata_params)||{}).length?"string"==typeof(null==S?void 0:S.metadata_params)?null==S?void 0:S.metadata_params:JSON.stringify(null==S?void 0:S.metadata_params):"",F=(0,K.p)(k,{errorPrefix:"Invalid metadata parameters JSON"}),N=Object.keys((null==S?void 0:S.engine_params)||{}).length?"string"==typeof(null==S?void 0:S.engine_params)?null==S?void 0:S.engine_params:JSON.stringify(null==S?void 0:S.engine_params):"",$=(0,K.p)(N,{errorPrefix:"Invalid engine parameters JSON"}),O=(0,u.useTheme)(),E=null==r?void 0:r.component,T=null==r?void 0:r.logo,z=null==r?void 0:r.description,P=!!(0,R.G7)(R.TO.ForceSqlLabRunAsync)||!!(null==e?void 0:e.allow_run_async),U=(0,R.G7)(R.TO.ForceSqlLabRunAsync),[L,q]=(0,h.useState)(),[M,B]=(0,h.useState)("");return(0,h.useEffect)(()=>{e&&B(((null==S?void 0:S.schemas_allowed_for_file_upload)||[]).join(","))},[null==e?void 0:e.extra]),(0,h.useEffect)(()=>{y||void 0===L||q(void 0)},[y]),(0,o.Y)(H.S,{expandIconPosition:"end",accordion:!0,modalMode:!0,activeKey:L,onChange:e=>q(e),items:[{key:"sql-lab",label:(0,o.Y)(j.s,{title:(0,s.t)("SQL Lab"),subtitle:(0,s.t)("Adjust how this database will interact with SQL Lab."),testId:"sql-lab-label-test"}),children:(0,o.Y)(o.FK,{children:(0,o.FD)(ei,{css:V,children:[(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"expose_in_sqllab",name:"expose_in_sqllab",indeterminate:!1,checked:!!(null==e?void 0:e.expose_in_sqllab),onChange:a,children:(0,s.t)("Expose database in SQL Lab")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Allow this database to be queried in SQL Lab")})]}),(0,o.FD)(eo,{className:I()("expandable",{open:y,"ctas-open":x}),children:[(0,o.Y)(ei,{css:V,children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"allow_ctas",name:"allow_ctas",indeterminate:!1,checked:!!(null==e?void 0:e.allow_ctas),onChange:a,children:(0,s.t)("Allow CREATE TABLE AS")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Allow creation of new tables based on queries")})]})}),(0,o.FD)(ei,{css:V,children:[(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"allow_cvas",name:"allow_cvas",indeterminate:!1,checked:!!(null==e?void 0:e.allow_cvas),onChange:a,children:(0,s.t)("Allow CREATE VIEW AS")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Allow creation of new views based on queries")})]}),(0,o.FD)(ei,{className:I()("expandable",{open:x}),children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("CTAS & CVAS SCHEMA")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input,{type:"text",name:"force_ctas_schema",placeholder:(0,s.t)("Create or select schema..."),onChange:a,value:(null==e?void 0:e.force_ctas_schema)||""})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")})]})]}),(0,o.Y)(ei,{css:V,children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"allow_dml",name:"allow_dml",indeterminate:!1,checked:!!(null==e?void 0:e.allow_dml),onChange:a,children:(0,s.t)("Allow DDL and DML")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Allow the execution of DDL (Data Definition Language: CREATE, DROP, TRUNCATE, etc.) and DML (Data Modification Language: INSERT, UPDATE, DELETE, etc)")})]})}),(0,o.Y)(ei,{css:V,children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"cost_estimate_enabled",name:"cost_estimate_enabled",indeterminate:!1,checked:!!(null==S?void 0:S.cost_estimate_enabled),onChange:l,children:(0,s.t)("Enable query cost estimation")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")})]})}),(0,o.Y)(ei,{css:V,children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"allows_virtual_table_explore",name:"allows_virtual_table_explore",indeterminate:!1,checked:(null==S?void 0:S.allows_virtual_table_explore)!==!1,onChange:l,children:(0,s.t)("Allow this database to be explored")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("When enabled, users are able to visualize SQL Lab results in Explore.")})]})}),(0,o.Y)(ei,{css:V,children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"disable_data_preview",name:"disable_data_preview",indeterminate:!1,checked:!!(null==S?void 0:S.disable_data_preview),onChange:l,children:(0,s.t)("Disable SQL Lab data preview queries")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})]})}),(0,o.Y)(ei,{children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"expand_rows",name:"expand_rows",indeterminate:!1,checked:!!(null==S||null==(b=S.schema_options)?void 0:b.expand_rows),onChange:l,children:(0,s.t)("Enable row expansion in schemas")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})]})})]})]})})},{key:"performance",label:(0,o.Y)(j.s,{title:(0,s.t)("Performance"),subtitle:(0,s.t)("Adjust performance settings of this database."),testId:"performance-label-test"}),children:(0,o.FD)(o.FK,{children:[(0,o.FD)(ei,{className:"mb-8",children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Chart cache timeout")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input,{type:"number",name:"cache_timeout",min:-1,value:null!=(d=null==e?void 0:e.cache_timeout)?d:"",placeholder:(0,s.t)("Enter duration in seconds"),onChange:e=>{let t=e.target;"cache_timeout"===t.name&&-1>Number(t.value)||a(e)},"data-test":"cache-timeout-test"})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined.")})]}),(0,o.FD)(ei,{children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Schema cache timeout")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input,{type:"number",name:"schema_cache_timeout",min:0,value:null!=(c=null==S||null==(v=S.metadata_cache_timeout)?void 0:v.schema_cache_timeout)?c:"",placeholder:(0,s.t)("Enter duration in seconds"),onChange:_,"data-test":"schema-cache-timeout-test"})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires.")})]}),(0,o.FD)(ei,{children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Table cache timeout")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input,{type:"number",name:"table_cache_timeout",min:0,value:null!=(p=null==S||null==(f=S.metadata_cache_timeout)?void 0:f.table_cache_timeout)?p:"",placeholder:(0,s.t)("Enter duration in seconds"),onChange:_,"data-test":"table-cache-timeout-test"})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. ")})]}),(0,o.Y)(ei,{css:{no_margin_bottom:V},children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"allow_run_async",name:"allow_run_async",indeterminate:!1,checked:P,onChange:a,children:(0,s.t)("Asynchronous query execution")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}),U&&(0,o.Y)(D.I,{iconStyle:{color:O.colorError},tooltip:(0,s.t)("This option has been disabled by the administrator.")})]})}),(0,o.Y)(ei,{css:{no_margin_bottom:V},children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"cancel_query_on_windows_unload",name:"cancel_query_on_windows_unload",indeterminate:!1,checked:!!(null==S?void 0:S.cancel_query_on_windows_unload),onChange:l,children:(0,s.t)("Cancel query on window unload event")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})]})})]})},{key:"security",label:(0,o.Y)(j.s,{title:(0,s.t)("Security"),testId:"security-label-test",subtitle:(0,s.t)("Add extra connection information.")}),children:(0,o.FD)(o.FK,{children:[(0,o.Y)(ei,{children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"per_user_caching",name:"per_user_caching",indeterminate:!1,checked:!!(null==S?void 0:S.per_user_caching),onChange:l,children:(0,s.t)("Per user caching")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Cache data separately for each user based on their data access roles and permissions. When disabled, a single cache will be used for all users.")})]})}),(0,o.Y)(ei,{children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"impersonate_user",name:"impersonate_user",indeterminate:!1,checked:!!(null==e?void 0:e.impersonate_user),onChange:a,children:(0,s.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and Google Sheets)")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")})]})}),Y&&(0,o.Y)(ei,{children:(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Checkbox,{id:"allow_file_upload",name:"allow_file_upload",indeterminate:!1,checked:!!(null==e?void 0:e.allow_file_upload),onChange:a,children:(0,s.t)("Allow file uploads to database")})})}),Y&&!!(null==e?void 0:e.allow_file_upload)&&(0,o.FD)(ei,{className:"extra-container",children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Schemas allowed for File upload")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input,{type:"text",name:"schemas_allowed_for_file_upload",value:M,placeholder:(0,s.t)("schema1,schema2"),onChange:e=>B(e.target.value),onBlur:()=>l({target:{type:"text",name:"schemas_allowed_for_file_upload",value:M}})})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("A comma-separated list of schemas that files are allowed to upload to.")})]}),(0,o.FD)(ei,{children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Secure extra")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(er,{name:"masked_encrypted_extra",value:(null==e?void 0:e.masked_encrypted_extra)||"",placeholder:(0,s.t)("Secure extra"),onChange:e=>n({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px",annotations:C})}),(0,o.Y)("div",{className:"helper",children:(0,o.Y)("div",{children:(0,s.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")})})]}),(0,o.FD)(ei,{children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Root certificate")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input.TextArea,{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,s.t)("Enter CA_BUNDLE"),onChange:t})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.")})]})]})},...r&&E&&z?[ey({key:null==r?void 0:r.title},(null==r.enabled?void 0:r.enabled.call(r))?{}:{collapsible:"disabled"},{label:(0,o.Y)(j.s,{title:(0,o.FD)(o.FK,{children:[T&&(0,o.Y)(T,{}),null==r?void 0:r.title]}),subtitle:(0,o.Y)(z,{})},null==r?void 0:r.title),children:(0,o.Y)(ei,{css:V,children:(0,o.Y)(E,{db:e,onEdit:r.onEdit})})})]:[],{key:"other",label:(0,o.Y)(j.s,{title:(0,s.t)("Other"),subtitle:(0,s.t)("Additional settings."),testId:"other-label-test"}),children:(0,o.FD)(o.FK,{children:[(0,o.FD)(ei,{children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Metadata Parameters")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(er,{name:"metadata_params",placeholder:(0,s.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==S?void 0:S.metadata_params)||{}).length?"string"==typeof(null==S?void 0:S.metadata_params)?null==S?void 0:S.metadata_params:JSON.stringify(null==S?void 0:S.metadata_params):"",annotations:F})}),(0,o.Y)("div",{className:"helper",children:(0,o.Y)("div",{children:(0,s.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")})})]}),(0,o.FD)(ei,{children:[(0,o.Y)("div",{className:"control-label",children:(0,s.t)("Engine Parameters")}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(er,{name:"engine_params",placeholder:(0,s.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==S?void 0:S.engine_params)||{}).length?null==S?void 0:S.engine_params:"",annotations:$})}),(0,o.Y)("div",{className:"helper",children:(0,o.Y)("div",{children:(0,s.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")})})]}),(0,o.FD)(ei,{children:[(0,o.Y)("div",{className:"control-label","data-test":"version-label-test",children:(0,s.t)("Version")}),(0,o.Y)("div",{className:"input-container","data-test":"version-spinbutton-test",children:(0,o.Y)(A.Input,{type:"text",name:"version",placeholder:(0,s.t)("Version number"),onChange:l,value:(null==S?void 0:S.version)||""})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")})]}),(0,o.Y)(ei,{css:V,children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"disable_drill_to_detail",name:"disable_drill_to_detail",indeterminate:!1,checked:!!(null==S?void 0:S.disable_drill_to_detail),onChange:l,children:(0,s.t)("Disable drill to detail")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Disables the drill to detail feature for this database.")})]})}),w&&(0,o.Y)(ei,{css:V,children:(0,o.FD)("div",{className:"input-container",children:[(0,o.Y)(A.Checkbox,{id:"allow_multi_catalog",name:"allow_multi_catalog",indeterminate:!1,checked:!!(null==S?void 0:S.allow_multi_catalog),onChange:l,children:(0,s.t)("Allow changing catalogs")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Give access to multiple catalogs in a single database connection.")})]})})]})}]})};var eY=t(16750),ew=t(89333);let eS=({db:e,onInputChange:a,testConnection:t,conf:n,testInProgress:l=!1,children:i})=>{var r,d;let c=(null==ew.A||null==(r=ew.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:r.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",u=(null==ew.A||null==(d=ew.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:d.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,o.FD)(o.FK,{children:[(0,o.FD)(ei,{children:[(0,o.FD)("div",{className:"control-label",children:[(0,s.t)("Display Name"),(0,o.Y)("span",{className:"required",children:"*"})]}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input,{name:"database_name","data-test":"database-name-input",value:(null==e?void 0:e.database_name)||"",placeholder:(0,s.t)("Name your database"),onChange:a})}),(0,o.Y)("div",{className:"helper",children:(0,s.t)("Pick a name to help you identify this database.")})]}),(0,o.FD)(ei,{children:[(0,o.FD)("div",{className:"control-label",children:[(0,s.t)("SQLAlchemy URI"),(0,o.Y)("span",{className:"required",children:"*"})]}),(0,o.Y)("div",{className:"input-container",children:(0,o.Y)(A.Input,{name:"sqlalchemy_uri","data-test":"sqlalchemy-uri-input",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==e?void 0:e.sqlalchemy_uri_placeholder)||(0,s.t)("dialect+driver://username:password@host:port/database"),onChange:a})}),(0,o.FD)("div",{className:"helper",children:[(0,s.t)("Refer to the")," ",(0,o.Y)("a",{href:(0,eY.J)(c||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||""),target:"_blank",rel:"noopener noreferrer",children:u||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||""})," ",(0,s.t)("for more information on how to structure your URI.")]})]}),i,(0,o.Y)(k.$n,{onClick:t,loading:l,cta:!0,buttonStyle:"link",css:e=>[(0,f.AH)`
  width: 100%;
  border: 1px solid ${e.colorPrimaryText};
  color: ${e.colorPrimaryText};
  &:hover,
  &:focus {
    border: 1px solid ${e.colorPrimary};
    color: ${e.colorPrimary};
  }
`,(0,f.AH)`
  margin-bottom: ${4*e.sizeUnit}px;
`],children:(0,s.t)("Test connection")})]})};var eC=t(57832),ek=t(93225);function eF(){return(eF=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let eD={CLIENT_ID:(0,s.t)("Client ID"),SECRET:(0,s.t)("Client Secret"),AUTH_URI:(0,s.t)("Authorization Request URI"),TOKEN_URI:(0,s.t)("Token Request URI"),SCOPE:(0,s.t)("Scope")},eA={account:{label:(0,s.t)("Account"),helpText:(0,s.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,s.t)("e.g. xy12345.us-east-2.aws")},warehouse:{label:(0,s.t)("Warehouse"),placeholder:(0,s.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{label:(0,s.t)("Role"),placeholder:(0,s.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},eN=({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,field:i,isValidating:r})=>{var s,d;return(0,o.Y)(C.M,{id:i,name:i,required:e,isValidating:r,value:null==l||null==(s=l.parameters)?void 0:s[i],validationMethods:{onBlur:t},errorMessage:null==n?void 0:n[i],placeholder:eA[i].placeholder,helpText:null==(d=eA[i])?void 0:d.helpText,label:eA[i].label||i,onChange:a.onParametersChange,className:eA[i].className||i})};function e$(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}let eO={gsheets:"service_account_info",bigquery:"credentials_info",datastore:"credentials_info"},eE=({changeMethods:e,isEditMode:a,db:t,editNewDb:n,isPublic:l=!0,setIsPublic:i,isValidating:r,validationErrors:d,getValidation:c})=>{var p;let m,g=(m=(0,u.useTheme)(),(0,f.AH)`
  height: 100px;
  width: 100%;
  border: 1px solid ${m.colorBorder};
  border-radius: ${m.borderRadius}px;
  resize: vertical;
  padding: ${1.5*m.sizeUnit}px ${2*m.sizeUnit}px;
  &::placeholder {
    color: ${m.colorTextPlaceholder};
  }
`),[_,x]=(0,h.useState)([]),[Y,w]=(0,h.useState)(0..valueOf()),[S,F]=(0,h.useState)(null),{addDangerToast:D}=(0,O.Yf)(),N=(null==t?void 0:t.engine)===q.GSheet,$=!a&&(!N||!l),E=!N||!l,T=(null==t?void 0:t.engine)&&eO[t.engine],z=null==t||null==(p=t.parameters)?void 0:p[T],P=a||null==z?"":"object"==typeof z?JSON.stringify(z):z;return(0,h.useEffect)(()=>{T&&e.onParametersChange({target:{name:T,value:""}})},[]),(0,h.useEffect)(()=>{null!==S&&z===S&&(F(null),c())},[z,S,c]),(0,o.FD)(em,{children:[N&&(0,o.FD)(o.FK,{children:[(0,o.Y)(b.l,{required:!0,children:(0,s.t)("Type of Google Sheets allowed")}),(0,o.Y)(v.A,{value:l?"true":"false",css:{width:"100%"},onChange:a=>{let t;return t="true"===a,void(null==i||i(t),t&&(e.onParametersChange({target:{name:"service_account_info",value:""}}),e.onParametersChange({target:{name:"oauth2_client_info",value:""}}),e.onClearEncryptedExtraKey("service_account_info"),e.onClearEncryptedExtraKey("oauth2_client_info")))},options:[{value:"true",label:(0,s.t)("Publicly shared sheets only")},{value:"false",label:(0,s.t)("Public and privately shared sheets")}]})]}),$&&(0,o.FD)(o.FK,{children:[(0,o.Y)(b.l,{children:(0,s.t)("How do you want to enter service account credentials?")}),(0,o.Y)(v.A,{defaultValue:Y,css:{width:"100%"},onChange:e=>w(e),options:[{value:0,label:(0,s.t)("Upload JSON file")},{value:1,label:(0,s.t)("Copy and Paste JSON credentials")}]})]}),E&&(1===Y||a||n)?(0,o.Y)(C.M,{id:T,name:T,required:!1,isValidating:r,value:"boolean"==typeof P?String(P):P,validationMethods:{onBlur:c},errorMessage:T?null==d?void 0:d[T]:null,placeholder:(0,s.t)("Paste content of service credentials JSON file here"),label:(0,s.t)("Service Account"),onChange:e.onParametersChange,helpText:(0,s.t)("Add service credentials"),renderAsTextArea:!0,textAreaCss:g}):$&&(0,o.Y)("div",{className:"input-container",css:e=>W(e),children:(0,o.Y)(A.Upload,{accept:".json",maxCount:1,fileList:_,beforeUpload:()=>!1,onRemove:()=>(x([]),F(null),e.onParametersChange({target:{name:T,value:""}}),!0),onChange:a=>{var t;return(t=function*(){var t,n;let l=null==(n=a.fileList)||null==(t=n[0])?void 0:t.originFileObj;if(l)try{let t=yield new Promise((e,a)=>{let t=new FileReader;t.readAsText(l),t.onload=()=>e(t.result),t.onerror=a});e.onParametersChange({target:{type:null,name:T,value:t,checked:!1}}),x(a.fileList),F(t)}catch{x([]),D((0,s.t)("Unable to read the file, please refresh and try again."))}else F(null),e.onParametersChange({target:{name:T,value:""}})},function(){var e=this,a=arguments;return new Promise(function(n,l){var i=t.apply(e,a);function r(e){e$(i,n,l,r,o,"next",e)}function o(e){e$(i,n,l,r,o,"throw",e)}r(void 0)})})()},children:(0,o.Y)(k.$n,{icon:(0,o.Y)(y.F.LinkOutlined,{iconSize:"m"}),children:(0,s.t)("Upload credentials")})})})]})},eT=({clearValidationErrors:e,changeMethods:a,db:t,dbModel:n})=>{var l,i,r;let[d,c]=(0,h.useState)(!1),u=(0,R.G7)(R.TO.SshTunneling),p=(null==n||null==(l=n.engine_information)?void 0:l.disable_ssh_tunneling)||!1,m=u&&!p;return(0,h.useEffect)(()=>{var e;m&&(null==t||null==(e=t.parameters)?void 0:e.ssh)!==void 0&&c(t.parameters.ssh)},[null==t||null==(i=t.parameters)?void 0:i.ssh,m]),(0,h.useEffect)(()=>{var e;m&&(null==t||null==(e=t.parameters)?void 0:e.ssh)===void 0&&!(0,z.A)(null==t?void 0:t.ssh_tunnel)&&a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:!0}})},[a,null==t||null==(r=t.parameters)?void 0:r.ssh,null==t?void 0:t.ssh_tunnel,m]),m?(0,o.FD)("div",{css:e=>W(e),children:[(0,o.Y)(A.Switch,{checked:d,onChange:t=>{c(t),a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:t}}),e()},"data-test":"ssh-tunnel-switch"}),(0,o.Y)("span",{css:X,children:(0,s.t)("SSH Tunnel")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("SSH Tunnel configuration parameters"),placement:"right"})]}):null},ez=["host","port","database","default_catalog","default_schema","username","password","access_token","http_path","http_path_field","database_name","project_id","catalog","credentials_info","service_account_info","query","encryption","account","warehouse","role","ssh","oauth2_client_info"],eP={host:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,o.Y)(C.M,{isValidating:i,id:"host",name:"host",value:null==l||null==(r=l.parameters)?void 0:r.host,required:e,hasTooltip:!0,tooltipText:(0,s.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.host,placeholder:(0,s.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,s.t)("Host"),onChange:a.onParametersChange})},http_path:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r,d;let c=JSON.parse((null==l?void 0:l.extra)||"{}");return(0,o.Y)(C.M,{isValidating:i,id:"http_path",name:"http_path",required:e,value:null==(d=c.engine_params)||null==(r=d.connect_args)?void 0:r.http_path,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.http_path,placeholder:(0,s.t)("e.g. sql/protocolv1/o/12345"),label:(0,s.t)("HTTP Path"),onChange:a.onExtraInputChange,helpText:(0,s.t)("Copy the name of the HTTP Path of your cluster.")})},http_path_field:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,o.Y)(C.M,{id:"http_path_field",name:"http_path_field",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.http_path_field,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.http_path,placeholder:(0,s.t)("e.g. sql/protocolv1/o/12345"),label:(0,s.t)("HTTP Path"),onChange:a.onParametersChange,helpText:(0,s.t)("Copy the name of the HTTP Path of your cluster.")})},port:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,o.Y)(o.FK,{children:(0,o.Y)(C.M,{id:"port",name:"port",type:"number",isValidating:i,required:e,value:null==l||null==(r=l.parameters)?void 0:r.port,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.port,placeholder:(0,s.t)("e.g. 5432"),className:"form-group-w-50",label:(0,s.t)("Port"),onChange:a.onParametersChange})})},database:({required:e,changeMethods:a,getValidation:t,validationErrors:n,placeholder:l,db:i,isValidating:r})=>{var d;return(0,o.Y)(C.M,{isValidating:r,id:"database",name:"database",required:e,value:null==i||null==(d=i.parameters)?void 0:d.database,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.database,placeholder:null!=l?l:(0,s.t)("e.g. world_population"),label:(0,s.t)("Database name"),onChange:a.onParametersChange,helpText:(0,s.t)("Copy the name of the database you are trying to connect to.")})},default_catalog:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,o.Y)(C.M,{isValidating:i,id:"default_catalog",name:"default_catalog",required:e,value:null==l||null==(r=l.parameters)?void 0:r.default_catalog,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.default_catalog,placeholder:(0,s.t)("e.g. hive_metastore"),label:(0,s.t)("Default Catalog"),onChange:a.onParametersChange,helpText:(0,s.t)("The default catalog that should be used for the connection.")})},default_schema:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,o.Y)(C.M,{id:"default_schema",name:"default_schema",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.default_schema,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.default_schema,placeholder:(0,s.t)("e.g. default"),label:(0,s.t)("Default Schema"),onChange:a.onParametersChange,helpText:(0,s.t)("The default schema that should be used for the connection.")})},username:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,o.Y)(C.M,{id:"username",name:"username",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.username,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.username,placeholder:(0,s.t)("e.g. Analytics"),label:(0,s.t)("Username"),onChange:a.onParametersChange})},password:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:i,isValidating:r})=>{var d;return(0,o.Y)(C.M,{id:"password",name:"password",required:e,isValidating:r,visibilityToggle:!i,value:null==l||null==(d=l.parameters)?void 0:d.password,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.password,placeholder:(0,s.t)("e.g. ********"),label:(0,s.t)("Password"),onChange:a.onParametersChange})},oauth2_client_info:({changeMethods:e,db:a,default_value:t,isPublic:n=!0})=>{let l=()=>{let e;try{e=JSON.parse((null==a?void 0:a.masked_encrypted_extra)||"{}")}catch(a){if(!(a instanceof SyntaxError))throw a;e={}}let n=(e&&"object"==typeof e&&!Array.isArray(e)?e:{}).oauth2_client_info;return{id:(null==n?void 0:n.id)||"",secret:(null==n?void 0:n.secret)||"",authorization_request_uri:(null==n?void 0:n.authorization_request_uri)||(null==t?void 0:t.authorization_request_uri)||"",token_request_uri:(null==n?void 0:n.token_request_uri)||(null==t?void 0:t.token_request_uri)||"",scope:(null==n?void 0:n.scope)||(null==t?void 0:t.scope)||""}},[i,r]=(0,h.useState)(l);if((0,h.useEffect)(()=>{r(l())},[null==a?void 0:a.masked_encrypted_extra]),(null==a?void 0:a.engine)===q.GSheet&&n)return null;let d=a=>t=>{let n=eF({},i,{[a]:t.target.value});r(n),e.onParametersChange({target:{type:"object",name:"oauth2_client_info",value:n}})};return(0,o.Y)(H.S,{items:[{key:"oauth2-client-information",label:(0,s.t)("OAuth2 client information"),children:(0,o.FD)(eC.l,{layout:"vertical",children:[(0,o.Y)(ek.e,{label:eD.CLIENT_ID,children:(0,o.Y)(A.Input,{"data-test":"client-id",value:i.id,onChange:d("id")})}),(0,o.Y)(ek.e,{label:eD.SECRET,children:(0,o.Y)(A.Input,{"data-test":"client-secret",type:"password",value:i.secret,onChange:d("secret")})}),(0,o.Y)(ek.e,{label:eD.AUTH_URI,children:(0,o.Y)(A.Input,{"data-test":"client-authorization-request-uri",placeholder:"https://",value:i.authorization_request_uri,onChange:d("authorization_request_uri")})}),(0,o.Y)(ek.e,{label:eD.TOKEN_URI,children:(0,o.Y)(A.Input,{"data-test":"client-token-request-uri",placeholder:"https://",value:i.token_request_uri,onChange:d("token_request_uri")})}),(0,o.Y)(ek.e,{label:eD.SCOPE,children:(0,o.Y)(A.Input,{"data-test":"client-scope",value:i.scope,onChange:d("scope")})})]})}]})},access_token:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:i,isValidating:r,default_value:d,description:c})=>{var u;return(0,o.Y)(C.M,{id:"access_token",name:"access_token",required:e,isValidating:r,visibilityToggle:!i,value:null==l||null==(u=l.parameters)?void 0:u.access_token,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.access_token,placeholder:(0,s.t)("Paste your access token here"),get_url:"string"==typeof d&&d.includes("https://")?d:null,description:c,label:(0,s.t)("Access token"),onChange:a.onParametersChange})},database_name:({changeMethods:e,getValidation:a,validationErrors:t,db:n,isValidating:l})=>(0,o.Y)(o.FK,{children:(0,o.Y)(C.M,{id:"database_name",name:"database_name",required:!0,isValidating:l,value:null==n?void 0:n.database_name,validationMethods:{onBlur:a},errorMessage:null==t?void 0:t.database_name,placeholder:"",label:(0,s.t)("Display Name"),onChange:e.onChange,helpText:(0,s.t)("Pick a nickname for how the database will display in Superset.")})}),query:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>(0,o.Y)(C.M,{id:"query_input",name:"query_input",required:e,isValidating:i,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.query,placeholder:(0,s.t)("e.g. param1=value1&param2=value2"),label:(0,s.t)("Additional Parameters"),onChange:a.onQueryChange,helpText:(0,s.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:a,db:t,sslForced:n})=>{var l;return(0,o.FD)("div",{css:e=>W(e),children:[(0,o.Y)(A.Switch,{disabled:n&&!e,checked:(null==t||null==(l=t.parameters)?void 0:l.encryption)||n,onChange:e=>{a.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,o.Y)("span",{css:X,children:(0,s.t)("SSL")}),(0,o.Y)(D.I,{tooltip:(0,s.t)('SSL Mode "require" will be used.'),placement:"right"})]})},credentials_info:eE,service_account_info:eE,catalog:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i,isPublic:r=!0})=>{let d=(null==l?void 0:l.catalog)||[],c=n||{},u=(null==l?void 0:l.engine)!==q.GSheet||!r;return(0,o.FD)(ef,{children:[(0,o.Y)(_.o.Title,{level:4,className:"gsheet-title",children:(0,s.t)("Connect Google Sheets as tables to this database")}),(0,o.FD)("div",{children:[null==d?void 0:d.map((n,l)=>{var r,u;return(0,o.FD)(o.FK,{children:[(0,o.Y)(b.l,{className:"catalog-label",children:(0,s.t)("Google Sheet Name and URL")}),(0,o.FD)("div",{className:"catalog-name",children:[(0,o.Y)(C.M,{className:"catalog-name-input",required:e,isValidating:i,validationMethods:{onBlur:t},errorMessage:null==(r=c[l])?void 0:r.name,placeholder:(0,s.t)("Enter a name for this sheet"),onChange:e=>{a.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==d?void 0:d.length)>1&&(0,o.Y)(y.F.CloseOutlined,{"aria-label":(0,s.t)("Remove sheet"),css:e=>(0,f.AH)`
                    align-self: center;
                    background: ${e.colorFillSecondary};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>a.onRemoveTableCatalog(l)})]}),(0,o.Y)(C.M,{className:"catalog-name-url",required:e,isValidating:i,validationMethods:{onBlur:t},errorMessage:null==(u=c[l])?void 0:u.url,placeholder:(0,s.t)("Paste the shareable Google Sheet URL here"),onChange:e=>a.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value})]})}),(0,o.FD)(eb,{className:"catalog-add-btn",onClick:()=>{a.onAddTableCatalog()},children:["+ ",(0,s.t)("Add sheet")]})]}),u&&(0,o.Y)("div",{className:"helper",children:(0,o.Y)("div",{children:(0,s.t)("In order to connect to non-public sheets you need to either provide a service account or configure an OAuth2 client.")})})]})},warehouse:eN,role:eN,account:eN,ssh:null!=(r=(0,d.a)().get("ssh_tunnel.form.switch"))?r:eT,project_id:({changeMethods:e,getValidation:a,validationErrors:t,db:n,isValidating:l})=>{var i;return(0,o.Y)(o.FK,{children:(0,o.Y)(C.M,{id:"project_id",name:"project_id",required:!0,isValidating:l,value:null==n||null==(i=n.parameters)?void 0:i.project_id,validationMethods:{onBlur:a},errorMessage:null==t?void 0:t.project_id,placeholder:(0,s.t)("your-project-1234-a1"),label:(0,s.t)("Project Id"),onChange:e.onParametersChange,helpText:(0,s.t)("Enter the unique project id for your database.")})})}},eU=e=>{var a,t;return!e||e.engine!==q.GSheet||(!e.masked_encrypted_extra||"{}"===e.masked_encrypted_extra)&&(null==(a=e.parameters)||!a.service_account_info)&&(null==(t=e.parameters)||!t.oauth2_client_info)},eL=({dbModel:e,db:a,editNewDb:t,getPlaceholder:n,getValidation:l,isEditMode:i=!1,onAddTableCatalog:r,onChange:s,onExtraInputChange:d,onEncryptedExtraInputChange:c,onClearEncryptedExtraKey:u,onParametersChange:p,onParametersUploadFileChange:m,onQueryChange:g,onRemoveTableCatalog:b,sslForced:v,validationErrors:_,clearValidationErrors:y,isValidating:x})=>{let Y=null==e?void 0:e.parameters,[w,S]=(0,h.useState)(()=>eU(a));return(0,h.useEffect)(()=>{S(eU(a))},[null==a?void 0:a.id,null==a?void 0:a.engine,null==a?void 0:a.masked_encrypted_extra,null==a?void 0:a.parameters]),(0,o.Y)(eC.l,{children:(0,o.Y)("div",{css:e=>[Z,(0,f.AH)`
  label {
    color: ${e.colorText};
    font-size: ${e.fontSizeSM}px;
    margin-bottom: 0;
  }
`],children:Y&&ez.filter(e=>Object.keys(Y.properties).includes(e)||"database_name"===e).map(e=>{var h,f,C;let k=eP[e];return(0,o.Y)(k,{required:null==(h=Y.required)?void 0:h.includes(e),changeMethods:{onParametersChange:p,onChange:s,onQueryChange:g,onParametersUploadFileChange:m,onAddTableCatalog:r,onRemoveTableCatalog:b,onExtraInputChange:d,onEncryptedExtraInputChange:c,onClearEncryptedExtraKey:u},validationErrors:_,getValidation:l,clearValidationErrors:y,db:a,field:e,default_value:null==(f=Y.properties[e])?void 0:f.default,description:null==(C=Y.properties[e])?void 0:C.description,isEditMode:i,sslForced:v,editNewDb:t,isValidating:x,isPublic:w,setIsPublic:S,placeholder:n?n(e):void 0},e)})})})},eq=(0,E.xK)(),eM=eq?eq.support:"https://superset.apache.org/user-docs/databases/#installing-database-drivers",eI={mssql:"https://superset.apache.org/user-docs/databases/supported/microsoft-sql-server",gsheets:"https://superset.apache.org/user-docs/databases/supported/google-sheets",bigquery:"https://superset.apache.org/user-docs/databases/supported/google-bigquery",awsathena:"https://superset.apache.org/user-docs/databases/supported/amazon-athena",redshift:"https://superset.apache.org/user-docs/databases/supported/amazon-redshift",druid:"https://superset.apache.org/user-docs/databases/supported/apache-druid",hive:"https://superset.apache.org/user-docs/databases/supported/apache-hive",spark:"https://superset.apache.org/user-docs/databases/supported/apache-spark-sql",db2:"https://superset.apache.org/user-docs/databases/supported/ibm-db2",hana:"https://superset.apache.org/user-docs/databases/supported/sap-hana",clickhousedb:"https://superset.apache.org/user-docs/databases/supported/clickhouse"},eR=({isLoading:e,isEditMode:a,useSqlAlchemyForm:t,hasConnectedDb:n,db:l,dbName:i,dbModel:r,editNewDb:d,fileList:c})=>{var u;let h=c&&(null==c?void 0:c.length)>0,p=(0,o.FD)(G,{children:[(0,o.Y)(eh,{children:null==l?void 0:l.backend}),(0,o.Y)(ep,{children:i})]}),m=(0,o.FD)(G,{children:[(0,o.Y)("p",{className:"helper-top",children:(0,s.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,o.Y)(_.o.Title,{level:4,children:(0,s.t)("Enter Primary Credentials")}),(0,o.FD)("p",{className:"helper-bottom",children:[(0,s.t)("Need help? Learn how to connect your database")," ",(0,o.Y)("a",{href:(null==eq?void 0:eq.default)||eM,target:"_blank",rel:"noopener noreferrer",children:(0,s.t)("here")}),"."]})]}),g=(0,o.Y)(ev,{children:(0,o.FD)(G,{children:[(0,o.Y)("p",{className:"helper-top",children:(0,s.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})}),(0,o.Y)(_.o.Title,{level:4,className:"step-3-text",children:(0,s.t)("Database connected")}),(0,o.Y)("p",{className:"subheader-text",children:(0,s.t)(`Create a dataset to begin visualizing your data as a chart or go to
          SQL Lab to query your data.`)})]})}),b=(0,o.Y)(ev,{children:(0,o.FD)(G,{children:[(0,o.Y)("p",{className:"helper-top",children:(0,s.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})}),(0,o.Y)(_.o.Title,{level:4,children:(0,s.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,o.FD)("p",{className:"helper-bottom",children:[(0,s.t)("Need help? Learn more about")," ",(0,o.FD)("a",{href:(u=null==l?void 0:l.engine)?eq?eq[u]||eq.default:eI[u]?eI[u]:`https://superset.apache.org/user-docs/databases/supported/${u}`:null,target:"_blank",rel:"noopener noreferrer",children:[(0,s.t)("connecting to %(dbModelName)s",{dbModelName:r.name}),"."]})]})]})}),v=(0,o.Y)(ev,{children:(0,o.Y)(G,{children:(0,o.FD)("div",{className:"select-db",children:[(0,o.Y)("p",{className:"helper-top",children:(0,s.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})}),(0,o.Y)(_.o.Title,{level:4,children:(0,s.t)("Select a database to connect")})]})})}),f=(0,o.Y)(ev,{children:(0,o.FD)(G,{children:[(0,o.Y)("p",{className:"helper-top",children:(0,s.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,o.Y)(_.o.Title,{level:4,children:(0,s.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,o.Y)("p",{className:"helper-bottom",children:h?c[0].name:""})]})});return h?f:e?(0,o.Y)(o.FK,{}):a?p:t?m:n&&!d?g:l||d?b:v};var eH=t(891);let ej=u.styled.div`
  padding-top: ${({theme:e})=>2*e.sizeUnit}px;
  label {
    color: ${({theme:e})=>e.colorText};
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }
`,eK=(0,u.styled)(A.Row)`
  padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,eB=(0,u.styled)(eC.l.Item)`
  margin-bottom: 0 !important;
`,eV=({db:e,onSSHTunnelParametersChange:a,setSSHTunnelLoginMethod:t,isValidating:n=!1,validationErrors:l,getValidation:i})=>{var r,d,u,p,m,g;let[v,f]=(0,h.useState)(e5.Password),_=(null==l?void 0:l.ssh_tunnel)||{},y=null==_?void 0:_._error;return(0,o.FD)(eC.l,{children:[y&&(0,o.Y)(eK,{gutter:16,children:(0,o.Y)(A.Col,{xs:24,children:(0,o.Y)(c.F,{type:"error",showIcon:!0,message:y,"data-test":"ssh-tunnel-section-error"})})}),(0,o.FD)(eK,{gutter:16,children:[(0,o.Y)(A.Col,{xs:24,md:12,children:(0,o.Y)(ej,{children:(0,o.Y)(C.M,{id:"server_address",name:"server_address",label:(0,s.t)("SSH Host"),required:!0,placeholder:(0,s.t)("e.g. 127.0.0.1"),value:(null==e||null==(r=e.ssh_tunnel)?void 0:r.server_address)||"",onChange:a,validationMethods:{onBlur:i},errorMessage:null==_?void 0:_.server_address,isValidating:n,"data-test":"ssh-tunnel-server_address-input"})})}),(0,o.Y)(A.Col,{xs:24,md:12,children:(0,o.Y)(ej,{children:(0,o.Y)(C.M,{id:"server_port",name:"server_port",label:(0,s.t)("SSH Port"),required:!0,placeholder:(0,s.t)("22"),type:"number",value:null==e||null==(d=e.ssh_tunnel)?void 0:d.server_port,onChange:a,validationMethods:{onBlur:i},errorMessage:null==_?void 0:_.server_port,isValidating:n,"data-test":"ssh-tunnel-server_port-input"})})})]}),(0,o.Y)(eK,{gutter:16,children:(0,o.Y)(A.Col,{xs:24,children:(0,o.Y)(ej,{children:(0,o.Y)(C.M,{id:"username",name:"username",label:(0,s.t)("Username"),required:!0,placeholder:(0,s.t)("e.g. Analytics"),value:(null==e||null==(u=e.ssh_tunnel)?void 0:u.username)||"",onChange:a,validationMethods:{onBlur:i},errorMessage:null==_?void 0:_.username,isValidating:n,"data-test":"ssh-tunnel-username-input"})})})}),(0,o.Y)(eK,{gutter:16,children:(0,o.Y)(A.Col,{xs:24,children:(0,o.FD)(ej,{children:[(0,o.Y)(b.l,{htmlFor:"use_password",required:!0,children:(0,s.t)("Login with")}),(0,o.Y)(eB,{name:"use_password",initialValue:v,children:(0,o.FD)(eH.s.Group,{onChange:({target:{value:e}})=>{f(e),t(e)},children:[(0,o.Y)(eH.s,{value:e5.Password,"data-test":"ssh-tunnel-use_password-radio",children:(0,s.t)("Password")}),(0,o.Y)(eH.s,{value:e5.PrivateKey,"data-test":"ssh-tunnel-use_private_key-radio",children:(0,s.t)("Private Key & Password")})]})})]})})}),v===e5.Password&&(0,o.Y)(eK,{gutter:16,children:(0,o.Y)(A.Col,{xs:24,children:(0,o.Y)(ej,{children:(0,o.Y)(C.M,{id:"password",name:"password",label:(0,s.t)("SSH Password"),required:!0,visibilityToggle:!0,placeholder:(0,s.t)("e.g. ********"),value:(null==e||null==(p=e.ssh_tunnel)?void 0:p.password)||"",onChange:a,validationMethods:{onBlur:i},errorMessage:null==_?void 0:_.password,isValidating:n,"data-test":"ssh-tunnel-password-input",role:"textbox"})})})}),v===e5.PrivateKey&&(0,o.FD)(o.FK,{children:[(0,o.Y)(eK,{gutter:16,children:(0,o.Y)(A.Col,{xs:24,children:(0,o.FD)(ej,{children:[(0,o.Y)(b.l,{htmlFor:"private_key",required:!0,children:(0,s.t)("Private Key")}),(0,o.Y)(eB,{validateStatus:n?"validating":(null==_?void 0:_.private_key)?"error":"success",help:null==_?void 0:_.private_key,hasFeedback:n||!!(null==_?void 0:_.private_key),children:(0,o.Y)(A.Input.TextArea,{name:"private_key",placeholder:(0,s.t)("Paste Private Key here"),value:(null==e||null==(m=e.ssh_tunnel)?void 0:m.private_key)||"",onChange:a,onBlur:i,"data-test":"ssh-tunnel-private_key-input",rows:4})})]})})}),(0,o.Y)(eK,{gutter:16,children:(0,o.Y)(A.Col,{xs:24,children:(0,o.Y)(ej,{children:(0,o.Y)(C.M,{id:"private_key_password",name:"private_key_password",label:(0,s.t)("Private Key Password"),visibilityToggle:!0,placeholder:(0,s.t)("e.g. ********"),value:(null==e||null==(g=e.ssh_tunnel)?void 0:g.private_key_password)||"",onChange:a,validationMethods:{onBlur:i},errorMessage:null==_?void 0:_.private_key_password,isValidating:n,"data-test":"ssh-tunnel-private_key_password-input",role:"textbox"})})})})]})]})};function eG(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}function eJ(e){return function(){var a=this,t=arguments;return new Promise(function(n,l){var i=e.apply(a,t);function r(e){eG(i,n,l,r,o,"next",e)}function o(e){eG(i,n,l,r,o,"throw",e)}r(void 0)})}}function eQ(){return(eQ=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let eW=(0,d.a)(),eX=JSON.stringify({allows_virtual_table_explore:!0}),eZ="basic",e0={[q.GSheet]:{message:(0,s.t)("Why do I need to create a database?"),description:(0,s.t)("To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here.")}},e1=(0,u.styled)(g.Ay)`
  .ant-tabs-body {
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-content {
      position: relative;
    }
  }
`,e2=u.styled.div`
  ${({theme:e})=>`
    margin: ${8*e.sizeUnit}px ${4*e.sizeUnit}px;
  `};
`,e4=u.styled.div`
  ${({theme:e})=>`
    padding: 0px ${4*e.sizeUnit}px;
  `};
`;var e5=((i={})[i.Password=0]="Password",i[i.PrivateKey=1]="PrivateKey",i);let e6=u.styled.div`
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>5*e.sizeUnit}px;
`;function e8(e,a){var t,n,l,i,r,o,s,d,c,u;let h,p,m=eQ({},e),g="",b=JSON.parse(m.extra||"{}");switch(a.type){case 4:try{p=JSON.parse(a.payload.json||"{}")}catch{p=a.payload.json}return eQ({},m,{extra:JSON.stringify(eQ({},b,{[a.payload.name]:p}))});case 6:{let e;try{e=JSON.parse(m.masked_encrypted_extra||"{}")}catch(a){if(!(a instanceof SyntaxError))throw a;e={}}let t=e&&"object"==typeof e&&!Array.isArray(e)?e:{};return eQ({},m,{masked_encrypted_extra:JSON.stringify(eQ({},t,{[a.payload.name]:a.payload.value}))})}case 7:{let e;try{e=JSON.parse(m.masked_encrypted_extra||"{}")}catch(a){if(!(a instanceof SyntaxError))throw a;e={}}let t=e&&"object"==typeof e&&!Array.isArray(e)?e:{};return delete t[a.payload.name],eQ({},m,{masked_encrypted_extra:JSON.stringify(t)})}case 5:if("schema_cache_timeout"===a.payload.name||"table_cache_timeout"===a.payload.name){let e=""===a.payload.value?void 0:Math.max(0,Number(a.payload.value)||0);return eQ({},m,{extra:JSON.stringify(eQ({},b,{metadata_cache_timeout:eQ({},null==b?void 0:b.metadata_cache_timeout,{[a.payload.name]:e})}))})}if("schemas_allowed_for_file_upload"===a.payload.name){let e=(a.payload.value||"").split(",").map(e=>e.trim()).filter(e=>e.length>0);return eQ({},m,{extra:JSON.stringify(eQ({},b,{schemas_allowed_for_file_upload:e}))})}if("http_path"===a.payload.name)return eQ({},m,{extra:JSON.stringify(eQ({},b,{engine_params:{connect_args:{[a.payload.name]:null==(t=a.payload.value)?void 0:t.trim()}}}))});if("expand_rows"===a.payload.name)return eQ({},m,{extra:JSON.stringify(eQ({},b,{schema_options:eQ({},null==b?void 0:b.schema_options,{[a.payload.name]:"checked"in a.payload?!!a.payload.checked:!!a.payload.value})}))});return eQ({},m,{extra:JSON.stringify(eQ({},b,{[a.payload.name]:"checkbox"===a.payload.type?a.payload.checked:a.payload.value}))});case 9:if("checkbox"===a.payload.type)return eQ({},m,{[a.payload.name]:a.payload.checked});if("cache_timeout"===a.payload.name){let e=""===a.payload.value?NaN:Number(a.payload.value);return eQ({},m,{cache_timeout:Number.isNaN(e)?void 0:String(Math.max(-1,e))})}return eQ({},m,{[a.payload.name]:a.payload.value});case 10:if((null==(n=a.payload.type)?void 0:n.startsWith("catalog"))&&void 0!==m.catalog){let e=[...m.catalog],t=null==(l=a.payload.type)?void 0:l.split("-")[1],n=e[parseInt(t,10)]||{};return void 0!==a.payload.value&&(n[a.payload.name]=a.payload.value),e.splice(parseInt(t,10),1,n),h=e.reduce((e,a)=>{let t=eQ({},e);return t[a.name]=a.value,t},{}),eQ({},m,{catalog:e,parameters:eQ({},m.parameters,{catalog:h})})}return eQ({},m,{parameters:eQ({},m.parameters,{[a.payload.name]:a.payload.value})});case 15:return eQ({},m,{ssh_tunnel:eQ({},m.ssh_tunnel,{[a.payload.name]:a.payload.value})});case 16:{let e={};if((null==m?void 0:m.ssh_tunnel)&&(e=(0,P.A)(m.ssh_tunnel,["id","server_address","server_port","username"])),1===a.payload.login_method)return eQ({},m,{ssh_tunnel:eQ({private_key:null==m||null==(i=m.ssh_tunnel)?void 0:i.private_key,private_key_password:null==m||null==(r=m.ssh_tunnel)?void 0:r.private_key_password},e)});if(0===a.payload.login_method)return eQ({},m,{ssh_tunnel:eQ({password:null==m||null==(o=m.ssh_tunnel)?void 0:o.password},e)});return eQ({},m)}case 17:return eQ({},m,{ssh_tunnel:void 0});case 0:if(void 0!==m.catalog)return eQ({},m,{catalog:[...m.catalog,{name:"",value:""}]});return eQ({},m,{catalog:[{name:"",value:""}]});case 12:return null==(s=m.catalog)||s.splice(a.payload.indexToDelete,1),eQ({},m);case 3:return eQ({},m,{[a.payload.name]:a.payload.json});case 11:return eQ({},m,{parameters:eQ({},m.parameters,{query:Object.fromEntries(new URLSearchParams(a.payload.value))}),query_input:a.payload.value});case 14:return eQ({},m,{[a.payload.name]:a.payload.value});case 8:if(g=Object.entries((null==(c=a.payload)||null==(d=c.parameters)?void 0:d.query)||{}).map(([e,a])=>`${e}=${a}`).join("&"),a.payload.masked_encrypted_extra&&a.payload.configuration_method===L.DynamicForm){let e=null==(u=eQ({},JSON.parse(a.payload.extra||"{}")).engine_params)?void 0:u.catalog,t=Object.entries(e||{}).map(([e,a])=>({name:e,value:a}));return eQ({},a.payload,{engine:a.payload.backend||m.engine,configuration_method:a.payload.configuration_method,catalog:t,parameters:eQ({},a.payload.parameters||m.parameters,{catalog:e}),engine_information:a.payload.engine_information||m.engine_information,query_input:g})}return eQ({},a.payload,{masked_encrypted_extra:a.payload.masked_encrypted_extra||"",engine:a.payload.backend||m.engine,configuration_method:a.payload.configuration_method,parameters:a.payload.parameters||m.parameters,ssh_tunnel:a.payload.ssh_tunnel||m.ssh_tunnel,engine_information:a.payload.engine_information||m.engine_information,query_input:g});case 2:return eQ({},a.payload,{extra:eX,expose_in_sqllab:!0});case 1:return eQ({},a.payload);default:return null}}let e3=(0,O.Ay)(({addDangerToast:e,addSuccessToast:a,onDatabaseAdd:t,onHide:n,show:l,databaseId:i,dbEngine:r})=>{var d,u,g,_,x,Y,w,O,P;let[M,I]=(0,h.useReducer)(e8,null),{state:{loading:R,resource:H,error:j},fetchResource:K,createResource:B,updateResource:V,clearError:G}=(0,E.fn)("database",(0,s.t)("database"),e,"connection"),[X,ei]=(0,h.useState)(eZ),[er,eo]=(0,E.d5)(),[eh,ep,em,ef,ey,eY]=(0,E.Y8)(),ew=(0,h.useRef)(null),[eC,ek]=(0,h.useState)(!1),[eF,eD]=(0,h.useState)(!1),[eA,eN]=(0,h.useState)(""),[e$,eO]=(0,h.useState)(!1),[eE,ez]=(0,h.useState)(!1),[eP,eU]=(0,h.useState)(!1),[eq,eI]=(0,h.useState)({}),[eH,ej]=(0,h.useState)({}),[eK,eB]=(0,h.useState)({}),[eG,eX]=(0,h.useState)({}),[e5,e3]=(0,h.useState)(!1),[e7,e9]=(0,h.useState)([]),[ae,aa]=(0,h.useState)(!1),[at,an]=(0,h.useState)(),[al,ai]=(0,h.useState)([]),[ar,ao]=(0,h.useState)([]),[as,ad]=(0,h.useState)([]),[ac,au]=(0,h.useState)([]),[ah,ap]=(0,h.useState)([]),[am,ag]=(0,h.useState)({}),[ab,av]=(0,h.useState)({}),af=null!=(d=eW.get("ssh_tunnel.form.switch"))?d:eT,[a_,ay]=(0,h.useState)(void 0),ax=eW.get("databaseconnection.extraOption");ax&&(ax=eQ({},ax,{onEdit:e=>{av(eQ({},ab,e))}}));let aY=(0,T.B)(),aw=(0,E.g9)(),aS=(0,E.Fp)(),aC=!!i,ak=aS||!!((null==M?void 0:M.engine)&&e0[M.engine]),aF=(null==M?void 0:M.configuration_method)===L.SqlalchemyUri,aD=aC||aF,aA=eh||j,aN=(0,p.W6)(),a$=(null==er||null==(u=er.databases)?void 0:u.find(e=>e.engine===(aC?null==M?void 0:M.backend:null==M?void 0:M.engine)&&e.default_driver===(null==M?void 0:M.driver)))||(null==er||null==(g=er.databases)?void 0:g.find(e=>e.engine===(aC?null==M?void 0:M.backend:null==M?void 0:M.engine)))||{},aO=(0,h.useCallback)(()=>{em(null),eY(!1),ew.current=null,G()},[em,eY,G]),aE=e=>{if("database"===e)return(0,s.t)("e.g. world_population")},aT=(0,h.useCallback)((e,a)=>{I({type:e,payload:a})},[]),az=(0,h.useCallback)(({target:e})=>{aT(10,{type:e.type,name:e.name,checked:e.checked,value:e.value})},[aT]),aP=(0,h.useCallback)(({target:e})=>{aT(14,{name:e.name,value:e.value})},[aT]),aU=(0,h.useCallback)((e,a)=>{aT(e,a),aO()},[aT,aO]),aL=(0,h.useCallback)(()=>eJ(function*(){let e=JSON.stringify(M);if(e===ew.current)return[];let a=yield ep(M);return null!==a&&(ew.current=e),a})(),[M,ep]),aq=()=>{I({type:13}),ek(!1),aO(),G(),eO(!1),e9([]),aa(!1),an(""),ai([]),ao([]),ad([]),au([]),eI({}),ej({}),eB({}),eX({}),ap([]),ag({}),e3(!1),ay(void 0),n()},aM=e=>{aN.push(e)},{state:{alreadyExists:aI,passwordsNeeded:aR,sshPasswordNeeded:aH,sshPrivateKeyNeeded:aj,sshPrivateKeyPasswordNeeded:aK,encryptedExtraFieldsNeeded:aB,loading:aV,failed:aG},importResource:aJ}=(0,E.bN)("database",(0,s.t)("database"),e=>{an(e)}),aQ=()=>eJ(function*(){var n,l,i;let r;if(ez(!0),eY(!1),null==ax||ax.onSave(ab,M).then(({error:a})=>{a&&(r=a,e(a))}),r)return void ez(!1);let o=eQ({},M);if(o.configuration_method===L.DynamicForm){(null==o||null==(l=o.parameters)?void 0:l.catalog)&&(o.extra=JSON.stringify(eQ({},JSON.parse(o.extra||"{}"),{engine_params:{catalog:o.parameters.catalog}})));let a=yield ep(o,!0);if(null===a||(Array.isArray(a)?a.length>0:!(0,z.A)(a))){e((0,s.t)("Connection failed, please check your connection settings.")),ez(!1);return}let t=aC?null==(i=o.parameters_schema)?void 0:i.properties:null==a$?void 0:a$.parameters.properties,n=JSON.parse(o.masked_encrypted_extra||"{}");Object.keys(t||{}).forEach(e=>{var a,l,i,r;t[e]["x-encrypted-extra"]&&(null==(a=o.parameters)?void 0:a[e])&&("object"==typeof(null==(l=o.parameters)?void 0:l[e])?(n[e]=null==(i=o.parameters)?void 0:i[e],o.parameters[e]=JSON.stringify(o.parameters[e])):n[e]=JSON.parse((null==(r=o.parameters)?void 0:r[e])||"{}"))}),o.masked_encrypted_extra=JSON.stringify(n),o.engine===q.GSheet&&(o.impersonate_user=!0)}if((null==o||null==(n=o.parameters)?void 0:n.catalog)&&(o.extra=JSON.stringify(eQ({},JSON.parse(o.extra||"{}"),{engine_params:{catalog:o.parameters.catalog}}))),!1===a_&&(o.ssh_tunnel=null),null==M?void 0:M.id){if(yield V(M.id,o,o.configuration_method===L.DynamicForm)){if(t&&t(),null==ax||ax.onSave(ab,M).then(({error:a})=>{a&&(r=a,e(a))}),r)return void ez(!1);e$||(aq(),a((0,s.t)("Database settings updated")))}}else if(M){if(yield B(o,o.configuration_method===L.DynamicForm)){if(ek(!0),t&&t(),null==ax||ax.onSave(ab,M).then(({error:a})=>{a&&(r=a,e(a))}),r)return void ez(!1);aD&&(aq(),a((0,s.t)("Database connected")))}}else{if(aa(!0),!(e7[0].originFileObj instanceof File))return;(yield aJ(e7[0].originFileObj,eq,eH,eK,eG,am,e5))&&(t&&t(),aq(),a((0,s.t)("Database connected")))}eD(!0),eO(!1),ez(!1)})(),aW=e=>{if("Other"===e)I({type:2,payload:{database_name:e,configuration_method:L.SqlalchemyUri,engine:void 0,engine_information:{supports_file_upload:!0}}});else{let a=null==er?void 0:er.databases.filter(a=>a.name===e)[0];if(!a)return;let{engine:t,parameters:n,engine_information:l,default_driver:i,sqlalchemy_uri_placeholder:r}=a;I({type:2,payload:{database_name:e,engine:t,configuration_method:void 0!==n?L.DynamicForm:L.SqlalchemyUri,engine_information:l,driver:i,sqlalchemy_uri_placeholder:r}}),t===q.GSheet&&I({type:0})}},aX=()=>{H&&K(H.id),eD(!1),eO(!0)},aZ=()=>{aO(),e$&&ek(!1),ae&&aa(!1),aG&&(aa(!1),an(""),ai([]),ao([]),ad([]),au([]),ap([]),eI({}),ej({}),eB({}),eX({}),ag({})),I({type:13}),e9([])},a0=()=>{if(M)return!eC||e$?(0,o.FD)(o.FK,{children:[(0,o.Y)(eb,{onClick:aZ,buttonStyle:"secondary",children:(0,s.t)("Back")},"back"),(0,o.Y)(eb,{"data-test":"btn-submit-connection",buttonStyle:"primary",onClick:aQ,loading:eE,disabled:!!(!ey||ef||eh&&Object.keys(eh).length>0),children:(0,s.t)("Connect")},"submit")]}):(0,o.FD)(o.FK,{children:[(0,o.Y)(eb,{onClick:aX,children:(0,s.t)("Back")},"back"),(0,o.Y)(eb,{buttonStyle:"primary",onClick:aQ,"data-test":"modal-confirm-button",loading:eE,children:(0,s.t)("Finish")},"submit")]});if(ae){let e;return(0,o.FD)(o.FK,{children:[(0,o.Y)(eb,{onClick:aZ,children:(0,s.t)("Back")},"back"),(0,o.Y)(eb,{buttonStyle:"primary",onClick:aQ,disabled:(e=ah.some(({fileName:e,fields:a})=>a.some(a=>{var t;return!(null==(t=am[e])?void 0:t[a.path])})),!!aV||!!aI.length&&!e5||!!aR.length&&"{}"===JSON.stringify(eq)||!!aH.length&&"{}"===JSON.stringify(eH)||!!aj.length&&"{}"===JSON.stringify(eK)||!!aK.length&&"{}"===JSON.stringify(eG)||!!ah.length&&!!e||!1),loading:eE,children:(0,s.t)("Connect")},"submit")]})}return(0,o.Y)(o.FK,{})},a1=(0,h.useRef)(!0);(0,h.useEffect)(()=>{if(a1.current){a1.current=!1;return}aV||aI.length||aR.length||aH.length||aj.length||aK.length||aB.length||eE||aG||(aq(),a((0,s.t)("Database connected")))},[aI,aR,aV,aG,aH,aj,aK,aB]),(0,h.useEffect)(()=>{l&&(ei(eZ),ez(!0),eo()),i&&l&&aC&&i&&!R&&K(i).catch(a=>e((0,s.t)("Sorry there was an error fetching database information: %s",a.message)))},[l,i]),(0,h.useEffect)(()=>{H&&(I({type:8,payload:H}),eN(H.database_name))},[H]),(0,h.useEffect)(()=>{eE&&ez(!1),er&&r&&aW(r)},[er]),(0,h.useEffect)(()=>{if(ae){var e,a;null==(a=document)||null==(e=a.getElementsByClassName("ant-upload-list-item-name")[0])||e.scrollIntoView()}},[ae]),(0,h.useEffect)(()=>{ai([...aR])},[aR]),(0,h.useEffect)(()=>{ao([...aH])},[aH]),(0,h.useEffect)(()=>{ad([...aj])},[aj]),(0,h.useEffect)(()=>{au([...aK])},[aK]),(0,h.useEffect)(()=>{ap([...aB])},[aB]),(0,h.useEffect)(()=>{var e;(null==M||null==(e=M.parameters)?void 0:e.ssh)!==void 0&&ay(M.parameters.ssh)},[null==M||null==(_=M.parameters)?void 0:_.ssh]);let a2=()=>at?(0,o.Y)(et,{children:(0,o.Y)($.$p,{message:at})}):null,a4=()=>{let e=[];return((0,z.A)(j)?(0,z.A)(eh)||(null==eh?void 0:eh.error_type)!=="GENERIC_DB_ENGINE_ERROR"||(e=[(null==eh?void 0:eh.description)||(null==eh?void 0:eh.message)]):e="object"==typeof j?Object.values(j):"string"==typeof j?[j]:[],e.length)?(0,o.Y)(e2,{children:(0,o.Y)($.x6,{title:(0,s.t)("Database Creation Error"),subtitle:(0,s.t)("We are unable to connect to your database."),descriptionDetails:(null==e?void 0:e[0])||(null==eh?void 0:eh.description),copyText:null==eh?void 0:eh.description})}):(0,o.Y)(o.FK,{})},a5=()=>{ez(!0),K(null==H?void 0:H.id).then(e=>{(0,m.SO)(m.Hh.Database,e)})},a6=()=>(0,o.Y)(eV,{db:M,onSSHTunnelParametersChange:({target:e})=>{aT(15,{type:e.type,name:e.name,value:e.value})},setSSHTunnelLoginMethod:e=>I({type:16,payload:{login_method:e}}),isValidating:ef,validationErrors:eh,getValidation:aF?()=>{}:aL}),a8=()=>(0,o.FD)(o.FK,{children:[(0,o.Y)(eL,{isValidating:ef,isEditMode:aC,db:M,sslForced:!1,dbModel:a$,onAddTableCatalog:()=>{I({type:0})},onQueryChange:({target:e})=>aU(11,{name:e.name,value:e.value}),onExtraInputChange:({target:e})=>aU(5,{name:e.name,value:e.value}),onEncryptedExtraInputChange:({target:e})=>aU(6,{name:e.name,value:e.value}),onClearEncryptedExtraKey:e=>aU(7,{name:e}),onRemoveTableCatalog:e=>{I({type:12,payload:{indexToDelete:e}})},onParametersChange:az,onChange:aP,getValidation:aL,validationErrors:eh,getPlaceholder:aE,clearValidationErrors:aO}),a_&&(0,o.Y)(e4,{children:a6()})]});if(e7.length>0&&(aI.length||al.length||ar.length||as.length||ac.length||ah.length))return(0,o.FD)(F.aF,{centered:!0,css:e=>[Q,ee(e),en(e),el(e)],footer:a0(),maskClosable:!1,name:"database",onHide:aq,onHandledPrimaryAction:aQ,primaryButtonName:(0,s.t)("Connect"),show:l,title:(0,o.Y)(U.r,{title:(0,s.t)("Connect a database"),icon:(0,o.Y)(y.F.InsertRowAboveOutlined,{})}),width:"500px",children:[(0,o.Y)(eR,{db:M,dbName:eA,dbModel:a$,fileList:e7,hasConnectedDb:eC,isEditMode:aC,isLoading:eE,useSqlAlchemyForm:aF}),aI.length?(0,o.FD)(o.FK,{children:[(0,o.Y)(et,{children:(0,o.Y)(c.F,{closable:!1,css:e=>(0,f.AH)`
  margin: ${4*e.sizeUnit}px 0;

  .ant-alert-message {
    margin: 0;
  }
`,type:"warning",showIcon:!0,message:"",description:(0,s.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})}),(0,o.Y)(C.M,{id:"confirm_overwrite",name:"confirm_overwrite",isValidating:ef,required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==eh?void 0:eh.confirm_overwrite,label:(0,s.t)('Type "%s" to confirm',(0,s.t)("OVERWRITE")),onChange:e=>{var a,t;e3((null!=(a=null==(t=e.currentTarget)?void 0:t.value)?a:"").toUpperCase()===(0,s.t)("OVERWRITE"))},css:Z})]}):null,a2(),al.length||ar.length||as.length||ac.length?[...new Set([...al,...ar,...as,...ac])].map(e=>(0,o.FD)(o.FK,{children:[(0,o.Y)(et,{children:(0,o.Y)(c.F,{closable:!1,css:e=>ea(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,s.t)("The passwords for the databases below are needed in order to import them.")})}),(null==al?void 0:al.indexOf(e))>=0&&(0,o.Y)(C.M,{id:"password_needed",name:"password_needed",required:!0,value:eq[e],onChange:a=>eI(eQ({},eq,{[e]:a.target.value})),isValidating:ef,validationMethods:{onBlur:()=>{}},errorMessage:null==eh?void 0:eh.password_needed,label:(0,s.t)("%s PASSWORD",e.slice(10)),css:Z}),(null==ar?void 0:ar.indexOf(e))>=0&&(0,o.Y)(C.M,{isValidating:ef,id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:eH[e],onChange:a=>ej(eQ({},eH,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==eh?void 0:eh.ssh_tunnel_password_needed,label:(0,s.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:Z}),(null==as?void 0:as.indexOf(e))>=0&&(0,o.Y)(C.M,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",isValidating:ef,required:!0,value:eK[e],onChange:a=>eB(eQ({},eK,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==eh?void 0:eh.ssh_tunnel_private_key_needed,label:(0,s.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:Z}),(null==ac?void 0:ac.indexOf(e))>=0&&(0,o.Y)(C.M,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",isValidating:ef,required:!0,value:eG[e],onChange:a=>eX(eQ({},eG,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==eh?void 0:eh.ssh_tunnel_private_key_password_needed,label:(0,s.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:Z})]})):null,ah.length?ah.map(({fileName:e,fields:a})=>(0,o.FD)("div",{children:[(0,o.Y)(et,{children:(0,o.Y)(c.F,{closable:!1,css:e=>ea(e),type:"info",showIcon:!0,message:(0,s.t)("Encrypted extra fields"),description:(0,s.t)("The following fields contain sensitive information that was masked during export. Please provide the values to import this database.")})}),a.map(a=>{var t;return(0,o.Y)(C.M,{id:`encrypted_extra_${a.path}`,name:`encrypted_extra_${a.path}`,required:!0,visibilityToggle:!0,value:(null==(t=am[e])?void 0:t[a.path])||"",onChange:t=>ag(eQ({},am,{[e]:eQ({},am[e],{[a.path]:t.target.value})})),isValidating:ef,validationMethods:{onBlur:()=>{}},label:(0,s.t)("%s %s",e.slice(10),a.label),css:Z},`${e}-${a.path}`)})]},e)):null]});let a3=aC?(0,o.FD)(o.FK,{children:[(0,o.Y)(eb,{onClick:aq,buttonStyle:"secondary",children:(0,s.t)("Close")},"close"),(0,o.Y)(eb,{buttonStyle:"primary",onClick:aQ,disabled:null==M?void 0:M.is_managed_externally,loading:eE,tooltip:(null==M?void 0:M.is_managed_externally)?(0,s.t)("This database is managed externally, and can't be edited in Superset"):"",children:(0,s.t)("Finish")},"submit")]}):a0();return aD?(0,o.FD)(F.aF,{css:e=>[J,Q,ee(e),en(e),el(e)],name:"database","data-test":"database-modal",onHandledPrimaryAction:aQ,onHide:aq,primaryButtonName:aC?(0,s.t)("Save"):(0,s.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,o.Y)(U.r,{isEditMode:aC,title:aC?(0,s.t)("Edit database"):(0,s.t)("Connect a database"),icon:aC?(0,o.Y)(y.F.EditOutlined,{iconSize:"l"}):(0,o.Y)(y.F.InsertRowAboveOutlined,{iconSize:"l"})}),footer:a3,maskClosable:!1,children:[(0,o.Y)(ev,{children:(0,o.Y)(eu,{children:(0,o.Y)(eR,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eC,db:M,dbName:eA,dbModel:a$})})}),(0,o.Y)(e1,{defaultActiveKey:eZ,activeKey:X,onTabClick:e=>ei(e),animated:{inkBar:!0,tabPane:!0},items:[{key:eZ,label:(0,o.Y)("span",{children:(0,s.t)("Basic")}),children:(0,o.FD)(o.FK,{children:[aF?(0,o.FD)(es,{children:[(0,o.FD)(eS,{db:M,onInputChange:({target:e})=>{eY(!1),aT(9,{type:e.type,name:e.name,checked:e.checked,value:e.value})},conf:aY,testConnection:()=>{var t;if(aO(),!(null==M?void 0:M.sqlalchemy_uri))return void e((0,s.t)("Please enter a SQLAlchemy URI to test"));let n={sqlalchemy_uri:(null==M?void 0:M.sqlalchemy_uri)||"",database_name:(null==M||null==(t=M.database_name)?void 0:t.trim())||void 0,impersonate_user:(null==M?void 0:M.impersonate_user)||void 0,extra:null==M?void 0:M.extra,masked_encrypted_extra:(null==M?void 0:M.masked_encrypted_extra)||"",server_cert:(null==M?void 0:M.server_cert)||void 0,ssh_tunnel:!(0,z.A)(null==M?void 0:M.ssh_tunnel)&&a_?eQ({},M.ssh_tunnel,{server_port:Number(M.ssh_tunnel.server_port)}):void 0};eU(!0),(0,E.ym)(n,a=>{eU(!1),e(a),eY(!1)},e=>{eU(!1),a(e),eY(!0)})},testInProgress:eP,children:[(0,o.Y)(af,{dbModel:a$,db:M,changeMethods:{onParametersChange:az},clearValidationErrors:aO}),a_&&a6()]}),(x=(null==M?void 0:M.backend)||(null==M?void 0:M.engine),(null==er||null==(w=er.databases)||null==(Y=w.find(e=>e.backend===x||e.engine===x))?void 0:Y.parameters)!==void 0&&!aC&&(0,o.FD)("div",{css:e=>W(e),children:[(0,o.Y)(k.$n,{buttonStyle:"link",onClick:()=>I({type:1,payload:{database_name:null==M?void 0:M.database_name,configuration_method:L.DynamicForm,engine:null==M?void 0:M.engine}}),css:e=>(0,f.AH)`
  text-transform: initial;
  margin-left: 0px;
  padding: 0 ${2*e.sizeUnit}px 0 0;
`,children:(0,s.t)("Connect this database using the dynamic form instead")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database.")})]}))]}):a8(),!aC&&(0,o.Y)(et,{children:(0,o.Y)(c.F,{closable:!1,css:e=>ea(e),message:(0,s.t)("Additional fields may be required"),showIcon:!0,description:(0,o.FD)(o.FK,{children:[(0,s.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,o.Y)("a",{href:eM,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description",children:(0,s.t)("here")}),"."]}),type:"info"})}),aA&&a4()]})},{key:"advanced",label:(0,o.Y)("span",{children:(0,s.t)("Advanced")}),children:(0,o.Y)(ex,{extraExtension:ax,db:M,onInputChange:e=>{let{target:a}=e;aU(9,{type:a.type,name:a.name,checked:a.checked,value:a.value})},onTextChange:({target:e})=>aU(14,{name:e.name,value:e.value}),onEditorChange:e=>aU(3,e),onExtraInputChange:e=>{let{target:a}=e;aU(5,{type:a.type,name:a.name,checked:a.checked,value:a.value})},onExtraEditorChange:e=>aU(4,e)})}]})]}):(0,o.FD)(F.aF,{css:e=>[Q,ee(e),en(e),el(e)],name:"database",onHandledPrimaryAction:aQ,onHide:aq,primaryButtonName:eC?(0,s.t)("Finish"):(0,s.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,o.Y)(U.r,{title:(0,s.t)("Connect a database"),icon:(0,o.Y)(y.F.InsertRowAboveOutlined,{})}),footer:a0(),maskClosable:!1,children:[!eE&&eC?(0,o.FD)(o.FK,{children:[(0,o.Y)(eR,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eC,db:M,dbName:eA,dbModel:a$,editNewDb:e$}),eF&&(0,o.FD)(e6,{children:[(0,o.Y)(k.$n,{buttonStyle:"secondary",onClick:()=>{ez(!0),a5(),aM("/dataset/add/")},children:(0,s.t)("Create dataset")}),(0,o.Y)(k.$n,{buttonStyle:"secondary",onClick:()=>{ez(!0),a5(),aM("/sqllab?db=true")},children:(0,s.t)("Query data in SQL Lab")})]}),e$?a8():(0,o.Y)(ex,{extraExtension:ax,db:M,onInputChange:e=>{let{target:a}=e;aU(9,{type:a.type,name:a.name,checked:"checked"in a&&a.checked,value:a.value})},onTextChange:({target:e})=>aU(14,{name:e.name,value:e.value}),onEditorChange:e=>aU(3,e),onExtraInputChange:e=>{let{target:a}=e;aU(5,{type:a.type,name:a.name,checked:"checked"in a&&a.checked,value:a.value})},onExtraEditorChange:e=>aU(4,e)})]}):(0,o.Y)(o.FK,{children:!eE&&(M?(0,o.FD)(o.FK,{children:[(0,o.Y)(eR,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eC,db:M,dbName:eA,dbModel:a$}),ak&&(()=>{var e,a,t,n,l;let{hostname:i}=window.location,r=(null==aS||null==(e=aS.REGIONAL_IPS)?void 0:e.default)||"";return Object.entries((null==aS?void 0:aS.REGIONAL_IPS)||{}).forEach(([e,a])=>{let t=new RegExp(e);i.match(t)&&(r=a)}),(null==M?void 0:M.engine)&&(0,o.Y)(et,{children:(0,o.Y)(c.F,{closable:!1,css:e=>ea(e),type:"info",showIcon:!0,message:(null==(a=e0[M.engine])?void 0:a.message)||(null==aS||null==(t=aS.DEFAULT)?void 0:t.message),description:(null==(n=e0[M.engine])?void 0:n.description)||(null==aS||null==(l=aS.DEFAULT)?void 0:l.description)+r})})})(),a8(),(0,o.Y)("div",{css:e=>W(e),children:a$.engine!==q.GSheet&&(0,o.FD)(o.FK,{children:[(0,o.Y)(k.$n,{"data-test":"sqla-connect-btn",buttonStyle:"link",onClick:()=>{aO(),I({type:1,payload:{engine:M.engine,configuration_method:L.SqlalchemyUri,database_name:M.database_name}})},css:ed,children:(0,s.t)("Connect this database with a SQLAlchemy URI string instead")}),(0,o.Y)(D.I,{tooltip:(0,s.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually.")})]})}),aA&&a4()]}):(0,o.FD)(eg,{children:[(0,o.Y)(eR,{isLoading:eE,isEditMode:aC,useSqlAlchemyForm:aF,hasConnectedDb:eC,db:M,dbName:eA,dbModel:a$}),(0,o.Y)("div",{className:"preferred",children:null==er||null==(O=er.databases)?void 0:O.filter(e=>e.preferred).map(e=>(0,o.Y)(S,{className:"preferred-item",onClick:()=>aW(e.name),buttonText:e.name,icon:null==aw?void 0:aw[e.engine]},`${e.name}`))}),(0,o.FD)("div",{className:"available",children:[(0,o.Y)("h4",{className:"available-label",children:(0,s.t)("Or choose from a list of other databases we support:")}),(0,o.Y)(b.l,{className:"control-label",children:(0,s.t)("Supported databases")}),(0,o.Y)(v.A,{className:"available-select",onChange:aW,placeholder:(0,s.t)("Choose a database..."),options:[...((null==er?void 0:er.databases)||[]).map((e,a)=>({value:e.name,label:e.name,key:`database-${a}`})),{value:"Other",label:(0,s.t)("Other"),key:"Other"}],showSearch:!0,sortComparator:(e,a)=>"Other"===e.value?1:"Other"===a.value?-1:String(e.label).localeCompare(String(a.label)),getPopupContainer:()=>document.body,dropdownStyle:{maxHeight:400,overflow:"auto"}}),(0,o.Y)(c.F,{showIcon:!0,closable:!1,css:e=>ea(e),type:"info",message:(null==aS||null==(P=aS.ADD_DATABASE)?void 0:P.message)||(0,s.t)("Want to add a new database?"),description:(null==aS?void 0:aS.ADD_DATABASE)?(0,o.FD)(o.FK,{children:[(0,s.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,o.Y)("a",{href:null==aS?void 0:aS.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer",children:null==aS?void 0:aS.ADD_DATABASE.contact_description_link})," ",null==aS?void 0:aS.ADD_DATABASE.description]}):(0,o.FD)(o.FK,{children:[(0,s.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,o.Y)("a",{href:eM,target:"_blank",rel:"noopener noreferrer",children:(0,s.t)("here")}),"."]})})]}),(0,o.Y)(e_,{children:(0,o.Y)(A.Upload,{name:"databaseFile",id:"databaseFile","data-test":"database-file-input",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:e=>eJ(function*(){an(""),ai([]),ao([]),ad([]),au([]),ap([]),eI({}),ej({}),eB({}),eX({}),ag({}),aa(!0),e9([eQ({},e.file,{status:"done"})]),e.file.originFileObj instanceof File&&(yield aJ(e.file.originFileObj,eq,eH,eK,eG,am,e5))&&(null==t||t())})(),onRemove:e=>(e9(e7.filter(a=>a.uid!==e.uid)),!1),children:(0,o.Y)(k.$n,{"data-test":"import-database-btn",buttonStyle:"link",css:ec,children:(0,s.t)("Import database from file")})})}),a2()]}))}),eE&&(0,o.Y)(N.R,{})]})})},49107(e,a,t){t.d(a,{A:()=>K});var n=t(2445),l=t(64260),i=t(27124),r=t(73815),o=t(68655),s=t(57832),d=t(56030),c=t(10938),u=t(90617),h=t(65471),p=t(29138),m=t(62858),g=t(68292),b=t(60685),v=t(58561),f=t.n(v),_=t(7070),y=t(84151),x=t(93225),Y=t(85614),w=t(17437);let S=(0,Y.styled)(x.e)`
  ${({theme:e})=>(0,w.AH)`
    flex: 1;
    margin-top: 0;
    margin-bottom: ${2.5*e.sizeUnit}px;
  }
  `}
`,C=Y.styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`,k=(0,w.AH)`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`;var F=t(13512);let D=Y.styled.div`
  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
`,A=({columns:e,maxColumnsToShow:a=4})=>{let t=e.map(e=>({name:e}));return(0,n.FD)(D,{children:[(0,n.FD)(u.o.Text,{type:"secondary",children:[(0,i.t)("Columns"),":"]}),0===e.length?(0,n.Y)("p",{className:"help-block",children:(0,i.t)("Upload file to preview columns")}):(0,n.Y)(F.Sk,{tags:t,maxTags:a})]})};var N=t(80967);let $=({label:e,tip:a,children:t,name:l,rules:i})=>(0,n.Y)(S,{label:(0,n.FD)("div",{children:[e,(0,n.Y)(N.I,{tooltip:a})]}),name:l,rules:i,children:t});function O(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}function E(){return(E=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let T=["delimiter","skip_initial_space","skip_blank_lines","day_first","column_data_types","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],z=["sheet_name","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],P=[],U=["rows_to_read","index_column"],L=[...T,...z,...P],q={csv:T,excel:z,columnar:P},M=(e,a)=>q[a].includes(e),I={table_name:"",schema:"",sheet_name:void 0,delimiter:",",already_exists:"fail",skip_initial_space:!1,skip_blank_lines:!1,day_first:!1,decimal_character:".",null_values:[],header_row:"0",rows_to_read:null,skip_rows:"0",column_dates:[],index_column:null,dataframe_index:!1,index_label:"",columns_read:[],column_data_types:""},R={csv:".csv, .tsv",excel:".xls, .xlsx",columnar:".parquet, .zip"},H={csv:"CSV",excel:"Excel",columnar:"Columnar"},j=e=>{let{label:a,dataTest:t,children:l}=e,i=function(e,a){if(null==e)return{};var t,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(a.indexOf(t=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t]);return l}(e,["label","dataTest","children"]);return(0,n.FD)(C,{children:[(0,n.Y)(h.Switch,E({"data-test":t},i)),(0,n.Y)("div",{className:"switch-label",children:a}),l]})},K=(0,_.Ay)(({addDangerToast:e,addSuccessToast:a,onHide:t,show:v,allowedExtensions:_,type:x="csv",fileListOverride:Y})=>{let[C]=s.l.useForm(),[F,D]=(0,l.useState)(0),[N,T]=(0,l.useState)([]),[z,P]=(0,l.useState)([]),[K,B]=(0,l.useState)([]),[V,G]=(0,l.useState)({}),[J,Q]=(0,l.useState)(","),[W,X]=(0,l.useState)(!1),[Z,ee]=(0,l.useState)(),[ea,et]=(0,l.useState)(!1),[en,el]=(0,l.useState)(!0),[ei,er]=(0,l.useState)(!1),[eo,es]=(0,l.useState)("general"),ed=(0,l.useMemo)(()=>(e="",a,t)=>{let n=f().encode_uri({filters:[{col:"allow_file_upload",opr:"eq",value:!0}],page:a,page_size:t});return r.A.get({endpoint:`/api/v1/database/?q=${n}`}).then(e=>({data:e.json.result.map(e=>({value:e.id,label:e.database_name})),totalCount:e.json.count}))},[]),ec=(0,l.useMemo)(()=>(e="",a,t)=>F?r.A.get({endpoint:`/api/v1/database/${F}/schemas/?q=(upload_allowed:!t)`}).then(e=>({data:e.json.result.map(e=>({value:e,label:e})),totalCount:e.json.count})):Promise.resolve({data:[],totalCount:0}),[F]),eu=a=>{let t=C.getFieldsValue(),n=E({},I,t),l=new FormData;return l.append("file",a),"csv"===x&&l.append("delimiter",n.delimiter),l.append("type",x),er(!0),r.A.post({endpoint:"/api/v1/database/upload_metadata/",body:l,headers:{Accept:"application/json"}}).then(e=>{let{items:a}=e.json.result;if(a&&"excel"!==x)P(a[0].column_names);else{let{allSheetNames:e,sheetColumnNamesMap:t}=a.reduce((e,a)=>(e.allSheetNames.push(a.sheet_name),e.sheetColumnNamesMap[a.sheet_name]=a.column_names,e),{allSheetNames:[],sheetColumnNamesMap:{}});P(a[0].column_names),B(e),C.setFieldsValue({sheet_name:e[0]}),G(t)}}).catch(a=>(0,o.h4)(a).then(a=>{e(a.error||"Error"),P([]),C.setFieldsValue({sheet_name:void 0}),B([])})).finally(()=>{er(!1)})},eh=()=>{T([]),P([]),ee(""),D(0),B([]),X(!1),Q(","),el(!0),er(!1),G({}),C.resetFields(),t()},ep=()=>z.map(e=>({value:e,label:e}));(0,l.useEffect)(()=>{(null==Y?void 0:Y.length)&&(T(Y.map(e=>({uid:e.name,name:e.name,originFileObj:e,status:"done"}))),en&&eu(Y[0]).then(e=>e))},[Y,en]),(0,l.useEffect)(()=>{z.length>0&&N.length>0&&N[0].originFileObj instanceof File&&en&&eu(N[0].originFileObj).then(e=>e)},[J]),(0,l.useEffect)(()=>{v&&es("general")},[v]);let em={csv:(0,i.t)("CSV upload"),excel:(0,i.t)("Excel upload"),columnar:(0,i.t)("Columnar upload")};return(0,n.Y)(d.aF,{css:e=>[k,(0,w.AH)`
  .ant-modal-header {
    padding: ${4.5*e.sizeUnit}px ${4*e.sizeUnit}px
      ${4*e.sizeUnit}px;
  }

  .ant-modal-close-x .close {
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.sizeUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.sizeUnit}px;
  }

  .info-solid-small {
    vertical-align: bottom;
  }
`,(0,w.AH)`
  .switch-label {
    color: ${e.colorTextSecondary};
    margin-left: ${4*e.sizeUnit}px;
  }
`],primaryButtonLoading:W,name:"database","data-test":"upload-modal",onHandledPrimaryAction:C.submit,onHide:eh,width:"500px",primaryButtonName:(0,i.t)("Upload"),centered:!0,show:v,title:(0,n.Y)(()=>{let e=em[x]||(0,i.t)("Upload");return(0,n.Y)(y.r,{title:e})},{}),children:(0,n.Y)(s.l,{form:C,onFinish:()=>{var t;let n,l,s=C.getFieldsValue();delete s.database,s.schema=Z;let d=E({},I,s),c=new FormData,u=null==(t=N[0])?void 0:t.originFileObj;u&&c.append("file",u),n=q[x]||[],l=[...L].filter(e=>!n.includes(e)),Object.entries(d).forEach(([e,a])=>{l.includes(e)||U.includes(e)&&null==a||c.append(e,a)}),X(!0);let h=`/api/v1/database/${F}/upload/`;return c.append("type",x),r.A.post({endpoint:h,body:c,headers:{Accept:"application/json"}}).then(()=>{a((0,i.t)("Data imported")),X(!1),eh()}).catch(a=>(0,o.h4)(a).then(a=>{e(a.error||"Error")})).finally(()=>{X(!1)})},"data-test":"dashboard-edit-properties-form",layout:"vertical",initialValues:I,children:(0,n.Y)(c.S,{expandIconPosition:"end",accordion:!0,activeKey:eo,onChange:e=>es(e),defaultActiveKey:"general",modalMode:!0,items:[{key:"general",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("General information")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("%(label)s file",{label:H[x]}),name:"file",required:!0,rules:[{validator:(e,a)=>0===N.length?Promise.reject((0,i.t)("Uploading a file is required")):((e,a)=>{let t=e.name.match(/.+\.([^.]+)$/);if(!t)return!1;let n=t[1].toLowerCase();return a.map(e=>e.toLowerCase()).includes(n)})(N[0],_)?Promise.resolve():Promise.reject((0,i.t)("Upload a file with a valid extension. Valid: [%s]",_.join(",")))}],children:(0,n.Y)(h.Upload,{name:"modelFile",id:"modelFile","data-test":"model-file-input",accept:R[x],fileList:N,onChange:e=>{var a;return(a=function*(){T([E({},e.file,{status:"done"})]),en&&(yield eu(e.file.originFileObj))},function(){var e=this,t=arguments;return new Promise(function(n,l){var i=a.apply(e,t);function r(e){O(i,n,l,r,o,"next",e)}function o(e){O(i,n,l,r,o,"throw",e)}r(void 0)})})()},onRemove:e=>(T(N.filter(a=>a.uid!==e.uid)),P([]),B([]),C.setFieldsValue({sheet_name:void 0}),!1),customRequest:()=>{},children:(0,n.Y)(p.$n,{"aria-label":(0,i.t)("Select"),icon:(0,n.Y)(b.F.UploadOutlined,{}),loading:ei,children:(0,i.t)("Select")})})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{children:(0,n.Y)(j,{label:(0,i.t)("Preview uploaded file"),dataTest:"previewUploadedFile",onChange:e=>{el(e)},checked:en})})})}),en&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(A,{columns:z})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Database"),required:!0,name:"database",rules:[{validator:(e,a)=>(null==a?void 0:a.value)?Promise.resolve():Promise.reject((0,i.t)("Selecting a database is required"))}],children:(0,n.Y)(m.A,{ariaLabel:(0,i.t)("Select a database"),options:ed,onChange:e=>{D(null==e?void 0:e.value),ee(void 0),C.setFieldsValue({schema:void 0})},allowClear:!0,placeholder:(0,i.t)("Select a database to upload the file to")})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Schema"),name:"schema",children:(0,n.Y)(m.A,{ariaLabel:(0,i.t)("Select a schema"),options:ec,onChange:e=>{ee(null==e?void 0:e.value)},allowClear:!0,placeholder:(0,i.t)("Select a schema if the database supports this")})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Table name"),name:"table_name",required:!0,rules:[{required:!0,message:(0,i.t)("Table name is required")}],children:(0,n.Y)(h.Input,{"aria-label":(0,i.t)("Table Name"),name:"table_name","data-test":"properties-modal-name-input",type:"text",placeholder:(0,i.t)("Name of table to be created")})})})}),M("delimiter",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{label:(0,i.t)("Delimiter"),tip:(0,i.t)("Select a delimiter for this data"),name:"delimiter",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose a delimiter"),options:[{value:",",label:'Comma ","'},{value:";",label:'Semicolon ";"'},{value:"	",label:'Tab "\\t"'},{value:"|",label:"Pipe"}],onChange:e=>{Q(e)},allowNewOptions:!0})})})}),M("sheet_name",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Sheet name"),name:"sheet_name",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose sheet name"),options:K.map(e=>({value:e,label:e})),onChange:e=>{var a;P(null!=(a=V[e])?a:[])},allowNewOptions:!0,placeholder:(0,i.t)("Select a sheet name from the uploaded file")})})})})]})},{key:"file-settings",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("File settings")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{label:(0,i.t)("If table already exists"),tip:(0,i.t)("What should happen if the table already exists"),name:"already_exists",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose already exists"),options:[{value:"fail",label:"Fail"},{value:"replace",label:"Replace"},{value:"append",label:"Append"}],onChange:()=>{}})})})}),M("column_dates",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Columns to be parsed as dates"),name:"column_dates",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose columns to be parsed as dates"),mode:"multiple",options:ep(),allowClear:!0,allowNewOptions:!0,placeholder:(0,i.t)("A comma separated list of columns that should be parsed as dates")})})})}),M("decimal_character",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{label:(0,i.t)("Decimal character"),tip:(0,i.t)("Character to interpret as decimal point"),name:"decimal_character",children:(0,n.Y)(h.Input,{type:"text"})})})}),M("null_values",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{label:(0,i.t)("Null Values"),tip:(0,i.t)("Choose values that should be treated as null. Warning: Hive database supports only a single value"),name:"null_values",children:(0,n.Y)(g.A,{mode:"multiple",options:[{value:'""',label:'Empty Strings ""'},{value:"None",label:"None"},{value:"nan",label:"nan"},{value:"null",label:"null"},{value:"N/A",label:"N/A"}],allowClear:!0,allowNewOptions:!0})})})}),M("skip_initial_space",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"skip_initial_space",children:(0,n.Y)(j,{label:(0,i.t)("Skip spaces after delimiter"),dataTest:"skipInitialSpace"})})})}),M("skip_blank_lines",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"skip_blank_lines",children:(0,n.Y)(j,{label:(0,i.t)("Skip blank lines rather than interpreting them as Not A Number values"),dataTest:"skipBlankLines"})})})}),M("day_first",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"day_first",children:(0,n.Y)(j,{label:(0,i.t)("DD/MM format dates, international and European format"),dataTest:"dayFirst"})})})})]})},{key:"columns",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("Columns")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,i.t)("Columns to read"),name:"columns_read",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose columns to read"),mode:"multiple",options:ep(),allowClear:!0,allowNewOptions:!0,placeholder:(0,i.t)("List of the column names that should be read")})})})}),M("column_data_types",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{label:(0,i.t)("Column data types"),tip:(0,i.t)('A dictionary with column names and their data types if you need to change the defaults. Example: {"user_id":"int"}. Check Python\'s Pandas library for supported data types.'),name:"column_data_types",children:(0,n.Y)(h.Input,{"aria-label":(0,i.t)("Column data types"),type:"text"})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"dataframe_index",children:(0,n.Y)(j,{label:(0,i.t)("Create dataframe index"),dataTest:"dataFrameIndex",onChange:et})})})}),ea&&M("index_column",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{label:(0,i.t)("Index column"),tip:(0,i.t)("Column to use as the index of the dataframe. If None is given, Index label is used."),name:"index_column",children:(0,n.Y)(g.A,{ariaLabel:(0,i.t)("Choose index column"),options:z.map(e=>({value:e,label:e})),allowClear:!0,allowNewOptions:!0})})})}),ea&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{label:(0,i.t)("Index label"),tip:(0,i.t)("Label for the index column. Don't use an existing column name."),name:"index_label",children:(0,n.Y)(h.Input,{"aria-label":(0,i.t)("Index label"),type:"text"})})})})]})},...M("header_row",x)&&M("rows_to_read",x)&&M("skip_rows",x)?[{key:"rows",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,i.t)("Rows")}),children:(0,n.FD)(h.Row,{children:[(0,n.Y)(h.Col,{span:8,children:(0,n.Y)($,{label:(0,i.t)("Header row"),tip:(0,i.t)("Row containing the headers to use as column names (0 is first line of data)."),name:"header_row",rules:[{required:!0,message:(0,i.t)("Header row is required")}],children:(0,n.Y)(h.InputNumber,{"aria-label":(0,i.t)("Header row"),type:"text",min:0})})}),(0,n.Y)(h.Col,{span:8,children:(0,n.Y)($,{label:(0,i.t)("Rows to read"),tip:(0,i.t)("Number of rows of file to read. Leave empty (default) to read all rows"),name:"rows_to_read",children:(0,n.Y)(h.InputNumber,{"aria-label":(0,i.t)("Rows to read"),min:1})})}),(0,n.Y)(h.Col,{span:8,children:(0,n.Y)($,{label:(0,i.t)("Skip rows"),tip:(0,i.t)("Number of rows to skip at start of file."),name:"skip_rows",rules:[{required:!0,message:(0,i.t)("Skip rows is required")}],children:(0,n.Y)(h.InputNumber,{"aria-label":(0,i.t)("Skip rows"),min:0})})})]})}]:[]]})})})})},28085(e,a,t){t.r(a),t.d(a,{Menu:()=>ed,default:()=>ec});var n=t(2445),l=t(64260),i=t(85614),r=t(17437),o=t(27124),s=t(6148),d=t(47566),c=t(71671),u=t(75495),h=t(65471),p=t(8563),m=t(13512),g=t(61574),b=t(71519),v=t(60685),f=t(90617),_=t(71368),y=t(97126),x=t(67520),Y=t(58561),w=t.n(Y),S=t(61225),C=t(27937),k=t(66401),F=t(19202),D=t(73815),A=t(81912),N=t(51281);let $=({version:e="unknownVersion",sha:a="unknownSHA",build:t="unknownBuild",enabled:l=!0})=>{let i=`https://static.scarf.sh/a.png?x-pxid=0d3461e1-abb1-4691-a0aa-5ed50de66af0&version=${encodeURIComponent(e)}&sha=${encodeURIComponent(a)}&build=${encodeURIComponent(t)}`;return l?(0,n.Y)("img",{referrerPolicy:"no-referrer-when-downgrade",src:i,width:0,height:0,alt:""}):null};var O=t(64163),E=t(12097),T=t(95049),z=t(54303),P=t(49107),U=t(37254),L=t(99175),q=t(91648),M=t(58977);let I=i.styled.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`;var R=t(63542);function H(){return(H=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let j=(0,F.a)(),K=i.styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
`,B=i.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,V=i.styled.a`
  padding-right: ${({theme:e})=>e.sizeUnit}px;
  padding-left: ${({theme:e})=>e.sizeUnit}px;
`,G=i.styled.div`
  ${({theme:e,disabled:a})=>(0,r.AH)`
    &&:hover {
      color: ${!a&&e.colorPrimary};
      cursor: ${!a?"pointer":"not-allowed"};
    }
    ${a&&(0,r.AH)`
        color: ${e.colorTextDisabled};
      `}
  `}
`,J=({align:e,settings:a,navbarRight:t,isFrontendRoute:s,environmentTag:c,setQuery:m})=>{let g,_=(0,i.useTheme)(),y=(0,S.d4)(e=>e.user),x=(0,S.d4)(e=>{var a;return null==(a=e.dashboardInfo)?void 0:a.id}),{roles:Y}=y||{},{CSV_EXTENSIONS:C,COLUMNAR_EXTENSIONS:F,EXCEL_EXTENSIONS:H,ALLOWED_EXTENSIONS:J,HAS_GSHEETS_INSTALLED:Q,SCARF_ANALYTICS:W}=(0,S.d4)(e=>e.common.conf),[X,Z]=(0,l.useState)(!1),[ee,ea]=(0,l.useState)(!1),[et,en]=(0,l.useState)(!1),[el,ei]=(0,l.useState)(!1),[er,eo]=(0,l.useState)(""),es=(0,E.L)("can_sqllab","Superset",Y),ed=(0,E.L)("can_write","Dashboard",Y),ec=(0,E.L)("can_write","Chart",Y),eu=(0,E.L)("can_write","Database",Y),eh=(0,E.L)("can_write","Dataset",Y),{canUploadData:ep,canUploadCSV:em,canUploadColumnar:eg,canUploadExcel:eb}=(0,U.c8)(Y,C,F,H,J),ev=es||ec||ed,[ef,e_]=(0,l.useState)(!1),[ey,ex]=(0,l.useState)(!1),eY=(0,T.N6)(y),ew=ef||eY,{setThemeMode:eS,themeMode:eC,clearLocalOverrides:ek,hasDevOverride:eF,canSetMode:eD,canDetectOSPreference:eA}=(0,L.wR)(),eN=[{label:(0,o.t)("Data"),icon:(0,n.Y)(v.F.DatabaseOutlined,{"data-test":`menu-item-${(0,o.t)("Data")}`}),childs:[{label:(0,o.t)("Connect database"),name:R.$.DbConnection,perm:eu&&!ey},{label:(0,o.t)("Create dataset"),name:R.$.DatasetCreation,url:"/dataset/add/",perm:eh&&ey},{label:(0,o.t)("Connect Google Sheet"),name:R.$.GoogleSheets,perm:eu&&Q},{label:(0,o.t)("Upload CSV to database"),name:R.$.CSVUpload,perm:em&&ew,disable:eY&&!ef},{label:(0,o.t)("Upload Excel to database"),name:R.$.ExcelUpload,perm:eb&&ew,disable:eY&&!ef},{label:(0,o.t)("Upload Columnar file to database"),name:R.$.ColumnarUpload,perm:eg&&ew,disable:eY&&!ef}]},{label:(0,o.t)("SQL query"),url:"/sqllab?new=true",icon:(0,n.Y)(v.F.SearchOutlined,{"data-test":`menu-item-${(0,o.t)("SQL query")}`}),perm:"can_sqllab",view:"Superset"},{label:(0,o.t)("Chart"),url:Number.isInteger(x)?`/chart/add?dashboard_id=${x}`:"/chart/add",icon:(0,n.Y)(v.F.BarChartOutlined,{"data-test":`menu-item-${(0,o.t)("Chart")}`}),perm:"can_write",view:"Chart"},{label:(0,o.t)("Dashboard"),url:"/dashboard/new/",icon:(0,n.Y)(v.F.DashboardOutlined,{"data-test":`menu-item-${(0,o.t)("Dashboard")}`}),perm:"can_write",view:"Dashboard"}],e$=()=>{D.A.get({endpoint:`/api/v1/database/?q=${w().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then(({json:e})=>{var a;let t=(null==e||null==(a=e.result)?void 0:a.filter(e=>{var a;return null==e||null==(a=e.engine_information)?void 0:a.supports_file_upload}))||[];e_((null==t?void 0:t.length)>=1)})},eO=()=>{D.A.get({endpoint:`/api/v1/database/?q=${w().encode({filters:[{col:"database_name",opr:"neq",value:"examples"}]})}`}).then(({json:e})=>{ex(e.count>=1)})};(0,l.useEffect)(()=>{ep&&e$()},[ep]),(0,l.useEffect)(()=>{(eu||eh)&&eO()},[eu,eh]);let eE=(0,o.t)("Enable 'Allow file uploads to database' in any database's settings"),eT=e=>({key:e.name||e.label,label:e.disable?(0,n.Y)(G,{disabled:!0,children:(0,n.Y)(p.m,{placement:"top",title:eE,children:e.label})}):e.url?(0,n.Y)(f.o.Link,{href:(0,d.Am)(e.url),children:e.label}):e.label,disabled:e.disable}),ez=j.get("navbar.right"),eP=j.get("navbar.right-menu.item.icon"),eU=()=>{try{window.localStorage.removeItem("redux"),window.sessionStorage.removeItem("login_attempted"),"u">typeof caches&&caches.delete(A.RU).catch(()=>{})}catch(e){console.warn("Failed to clear storage on logout:",e)}},eL=(({setThemeMode:e,themeMode:a,hasLocalOverride:t=!1,onClearLocalSettings:i,allowOSPreference:r=!0})=>{let s=a=>{e(a)},d=(0,l.useMemo)(()=>({[q.lJ.DEFAULT]:(0,n.Y)(v.F.SunOutlined,{}),[q.lJ.DARK]:(0,n.Y)(v.F.MoonOutlined,{}),[q.lG.SYSTEM]:(0,n.Y)(v.F.FormatPainterOutlined,{}),[q.lJ.COMPACT]:(0,n.Y)(v.F.CompressOutlined,{})}),[]),c=(0,l.useMemo)(()=>t?(0,n.Y)(p.m,{title:(0,o.t)("This theme is set locally"),placement:"bottom",children:(0,n.Y)(v.F.ThunderboltOutlined,{})}):d[a],[t,d,a]),u=[{key:q.lG.DEFAULT,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(v.F.SunOutlined,{})," ",(0,o.t)("Light")]}),onClick:()=>s(q.lG.DEFAULT)},{key:q.lG.DARK,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(v.F.MoonOutlined,{})," ",(0,o.t)("Dark")]}),onClick:()=>s(q.lG.DARK)},...r?[{key:q.lG.SYSTEM,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(v.F.FormatPainterOutlined,{})," ",(0,o.t)("Match system")]}),onClick:()=>s(q.lG.SYSTEM)}]:[]];i&&t&&(u.push({type:"divider",key:"theme-divider"}),u.push({key:"clear-local",label:(0,n.FD)(n.FK,{children:[(0,n.Y)(v.F.ClearOutlined,{})," ",(0,o.t)("Clear local theme")]}),onClick:i}));let h=[{type:"group",label:(0,o.t)("Theme"),key:"theme-group",children:u}];return{key:"theme-sub-menu",label:c,icon:(0,n.Y)(v.F.DownOutlined,{iconSize:"xs"}),className:"submenu-with-caret",children:h,popupOffset:M.K}})({setThemeMode:eS,themeMode:eC,hasLocalOverride:eF(),onClearLocalSettings:ek,allowOSPreference:eA()}),eq=(({locale:e,languages:a})=>(0,l.useMemo)(()=>{var t,l;let i=Object.keys(a).map(e=>{var t,l,i,r;return{key:e,label:(0,n.FD)(I,{className:"f16",children:[(0,n.Y)("i",{className:`flag ${null!=(t=null==(l=a[e])?void 0:l.flag)?t:"us"}`}),(0,n.Y)(f.o.Link,{href:null==(i=a[e])?void 0:i.url,children:null==(r=a[e])?void 0:r.name})]}),style:{whiteSpace:"normal",height:"auto"}}});return{key:"language-submenu",type:"submenu",label:(0,n.Y)("span",{className:"f16","aria-label":(0,o.t)("Languages"),children:(0,n.Y)("i",{className:`flag ${null!=(t=null==(l=a[e])?void 0:l.flag)?t:"us"}`})}),icon:(0,n.Y)(v.F.CaretDownOutlined,{iconSize:"xs"}),children:i,className:"submenu-with-caret",popupClassName:"language-picker-popup"}},[a,e]))({locale:t.locale||"en",languages:t.languages||{}}),eM=(0,l.useMemo)(()=>{let e,l=[];return ez&&l.push({key:"extension",label:(0,n.Y)(ez,{})}),!t.user_is_anonymous&&ev&&l.push({key:"new-dropdown",label:(0,n.Y)(v.F.PlusOutlined,{"data-test":"new-dropdown-icon"}),className:"submenu-with-caret",icon:(0,n.Y)(v.F.DownOutlined,{iconSize:"xs"}),children:(e=[],null==eN||eN.forEach(a=>{var t;let l=null==(t=a.childs)?void 0:t.some(e=>"object"==typeof e&&!!e.perm);if(a.childs)if(l){let t=[];a.childs.forEach((e,a)=>{"string"!=typeof e&&e.name&&e.perm&&(3===a&&t.push({type:"divider",key:`divider-${a}`}),t.push(eT(e)))}),e.push({key:`sub2_${a.label}`,label:a.label,icon:a.icon,children:t,popupOffset:M.K})}else a.url&&(0,E.L)(a.perm,a.view,Y)&&e.push({key:a.label,label:s(a.url)?(0,n.Y)(b.N_,{to:(0,d.GC)(a.url||""),children:a.label}):(0,n.Y)(f.o.Link,{href:(0,d.Am)(a.url||""),children:a.label}),icon:a.icon});else(0,E.L)(a.perm,a.view,Y)&&e.push({key:a.label,label:s(a.url)?(0,n.Y)(b.N_,{to:(0,d.GC)(a.url||""),children:a.label}):(0,n.Y)(f.o.Link,{href:(0,d.Am)(a.url||""),children:a.label}),icon:a.icon})}),e),popupOffset:M.K}),eD()&&l.push(eL),t.show_language_picker&&eq&&l.push(eq),l.push({key:"settings",label:(0,o.t)("Settings"),icon:(0,n.Y)(v.F.DownOutlined,{iconSize:"xs"}),children:(()=>{let e=[];if(null==a||a.forEach((t,l)=>{var i;let o=[];null==(i=t.childs)||i.forEach(e=>{if("string"!=typeof e){let a=eP?(0,n.FD)(B,{children:[e.label,(0,n.Y)(eP,{menuChild:e})]}):e.label;o.push({key:e.label,label:s(e.url)?(0,n.Y)(b.N_,{to:(0,d.GC)(e.url||""),children:a}):(0,n.Y)(f.o.Link,{href:e.url||"",css:(0,r.AH)`
                    display: flex;
                    align-items: center;
                    line-height: ${10*_.sizeUnit}px;
                  `,children:a})})}}),e.push({type:"group",label:t.label,key:t.label,children:o}),l<a.length-1&&e.push({type:"divider",key:`divider_${l}`})}),!t.user_is_anonymous){e.push({type:"divider",key:"user-divider"});let a=[];t.user_info_url&&a.push({key:"info",label:(0,n.Y)(f.o.Link,{href:(0,d.Am)(t.user_info_url),children:(0,o.t)("Info")})}),(0,O.n)()&&(0,N.G7)(N.TO.DisableEmbeddedSupersetLogout)||a.push({key:"logout",label:(0,n.Y)(f.o.Link,{href:(0,d.Am)(t.user_logout_url),children:(0,o.t)("Logout")}),onClick:eU}),e.push({type:"group",label:(0,o.t)("User"),key:"user-section",children:a})}if(t.version_string||t.version_sha){e.push({type:"divider",key:"version-info-divider"});let a={type:"group",label:(0,o.t)("About"),key:"about-section",children:[{key:"about-info",style:{height:"auto",minHeight:"auto"},label:(0,n.Y)("div",{css:e=>(0,r.AH)`
                    font-size: ${e.fontSizeSM}px;
                    color: ${e.colorTextSecondary||e.colorText};
                    white-space: pre-wrap;
                    padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
                  `,children:[t.show_watermark&&(0,o.t)("Powered by Apache Superset"),t.version_string&&`${(0,o.t)("Version")}: ${t.version_string}`,t.version_sha&&`${(0,o.t)("SHA")}: ${t.version_sha}`,t.build_number&&`${(0,o.t)("Build")}: ${t.build_number}`].filter(Boolean).join(`
`)})}]};e.push(a)}return e})(),className:"submenu-with-caret",popupOffset:M.K}),l},[ez,t,ev,eD,_.colorPrimary,eL,eq,eN,Y,a,eP,eT,eU]);return(0,n.FD)(K,{align:e,children:[eu&&(0,n.Y)(z.Ay,{onHide:()=>{eo(""),Z(!1)},show:X,dbEngine:er,onDatabaseAdd:()=>m({databaseAdded:!0})}),em&&(0,n.Y)(P.A,{onHide:()=>ea(!1),show:ee,allowedExtensions:C,type:"csv"}),eb&&(0,n.Y)(P.A,{onHide:()=>en(!1),show:et,allowedExtensions:H,type:"excel"}),eg&&(0,n.Y)(P.A,{onHide:()=>ei(!1),show:el,allowedExtensions:F,type:"columnar"}),(null==c?void 0:c.text)&&(g=["error","warning","success","processing","default"].includes(c.color)?c.color:"default",(0,n.Y)(h.Tag,{color:g,css:(0,r.AH)`
                border-radius: ${125*_.sizeUnit}px;
              `,children:c.text})),(0,n.Y)(u.W1,{css:(0,r.AH)`
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          border-bottom: none !important;

          /* Remove the underline from menu items */
          .ant-menu-item:after,
          .ant-menu-submenu:after {
            content: none !important;
          }

          .submenu-with-caret {
            height: 100%;
            padding: 0;
            .ant-menu-submenu-title {
              align-items: center;
              display: flex;
              gap: ${2*_.sizeUnit}px;
              flex-direction: row-reverse;
              height: 100%;
            }
            &.ant-menu-submenu::after {
              inset-inline: ${_.sizeUnit}px;
            }
            &.ant-menu-submenu:hover,
            &.ant-menu-submenu-active {
              .ant-menu-title-content {
                color: ${_.colorPrimary};
              }
            }
          }
        `,selectable:!1,mode:"horizontal",onClick:e=>{e.key===R.$.DbConnection?Z(!0):e.key===R.$.GoogleSheets?(Z(!0),eo("Google Sheets")):e.key===R.$.CSVUpload?ea(!0):e.key===R.$.ExcelUpload?en(!0):e.key===R.$.ColumnarUpload&&ei(!0)},onOpenChange:e=>(e.length>1&&!(0,k.A)(null==e?void 0:e.filter(e=>{var a;return e.includes(`sub2_${null==eN||null==(a=eN[0])?void 0:a.label}`)}))&&(ep&&e$(),(eu||eh)&&eO()),null),disabledOverflow:!0,items:eM}),t.documentation_url&&(0,n.FD)(n.FK,{children:[(0,n.Y)(V,{href:t.documentation_url,target:"_blank",rel:"noreferrer",title:t.documentation_text||(0,o.t)("Documentation"),"aria-label":t.documentation_text||(0,o.t)("Documentation"),children:t.documentation_icon?(0,n.Y)(v.F.BookOutlined,{}):(0,n.Y)(v.F.QuestionCircleOutlined,{})}),(0,n.Y)("span",{children:" "})]}),t.bug_report_url&&(0,n.FD)(n.FK,{children:[(0,n.Y)(V,{href:t.bug_report_url,target:"_blank",rel:"noreferrer",title:t.bug_report_text||(0,o.t)("Report a bug"),"aria-label":t.bug_report_text||(0,o.t)("Report a bug"),children:t.bug_report_icon?(0,n.Y)("i",{className:t.bug_report_icon}):(0,n.Y)(v.F.BugOutlined,{})}),(0,n.Y)("span",{children:" "})]}),t.user_is_anonymous&&(0,n.FD)(V,{href:t.user_login_url,children:[(0,n.Y)(v.F.LoginOutlined,{})," ",(0,o.t)("Login")]}),(0,n.Y)($,{version:t.version_string,sha:t.version_sha||void 0,build:t.build_number||void 0,enabled:!1!==W})]})},Q=e=>{let[,a]=(0,C.useQueryParams)({databaseAdded:C.BooleanParam,datasetAdded:C.BooleanParam});return(0,n.Y)(J,H({setQuery:a},e))};class W extends l.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,a){console.error("RightMenu error caught:",e,a)}render(){let e=this.props,{children:a}=e,t=function(e,a){if(null==e)return{};var t,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(a.indexOf(t=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t]);return l}(e,["children"]);return this.state.hasError?(0,n.Y)(J,H({setQuery:this.noop},t)):a}constructor(e){super(e),this.noop=()=>{},this.state={hasError:!1}}}let X=e=>(0,n.Y)(W,H({},e,{children:(0,n.Y)(Q,H({},e))}));function Z(){return(Z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let ee=i.styled.header`
  ${({theme:e})=>(0,r.AH)`
    background-color: ${e.colorBgContainer};
    border-bottom: 1px solid ${e.colorBorderSecondary};
    padding: 0 ${4*e.sizeUnit}px;
    z-index: 10;

    &:nth-last-of-type(2) nav {
      margin-bottom: 2px;
    }

    .caret {
      display: none;
    }
  `}
`,ea=i.styled.div`
  ${({theme:e})=>(0,r.AH)`
    border-left: 1px solid ${e.colorBorderSecondary};
    border-right: 1px solid ${e.colorBorderSecondary};
    height: 100%;
    color: ${e.colorText};
    padding-left: ${4*e.sizeUnit}px;
    padding-right: ${4*e.sizeUnit}px;
    font-size: ${e.fontSizeLG}px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      max-width: ${58*e.sizeUnit}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 1127px) {
      display: none;
    }
  `}
`,et=(0,i.styled)(u.NG)`
  ${({theme:e})=>(0,r.AH)`
    .ant-menu-item .ant-menu-item-icon + span,
    .ant-menu-submenu-title .ant-menu-item-icon + span,
    .ant-menu-item .anticon + span,
    .ant-menu-submenu-title .anticon + span {
      margin-inline-start: 0;
    }

    .ant-menu-submenu.ant-menu-submenu-horizontal {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0;

      .ant-menu-submenu-title {
        display: flex;
        gap: ${2*e.sizeUnit}px;
        flex-direction: row-reverse;
        align-items: center;
        height: 100%;
        padding: 0 ${4*e.sizeUnit}px;
      }

      &:hover,
      &.ant-menu-submenu-active {
        .ant-menu-title-content {
          color: ${e.colorPrimary};
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 98%;
        height: 2px;
        background-color: ${e.colorPrimaryBorderHover};
        bottom: ${e.sizeUnit/8}px;
        left: 1%;
        right: auto;
        inset-inline-start: 1%;
        inset-inline-end: auto;
        transform: scale(0);
        transition: 0.2s all ease-out;
      }

      &:hover::after,
      &.ant-menu-submenu-open::after {
        transform: scale(1);
      }
    }

    .ant-menu-submenu-selected.ant-menu-submenu-horizontal::after {
      transform: scale(1);
    }
  `}
`,en=i.styled.div`
  ${({margin:e})=>(0,r.AH)`
    height: ${e?"auto":"100%"};
    margin: ${null!=e?e:0};
  `}
`,el=(0,i.styled)(m.Kt)`
  ${({theme:e})=>(0,r.AH)`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    &:focus {
      border-color: transparent;
    }

    &:focus-visible {
      border-color: ${e.colorPrimaryText};
    }
  `}
`,ei=(0,i.styled)(h.Row)`
  height: 100%;
`,er=(0,i.styled)(h.Col)`
  ${({theme:e})=>(0,r.AH)`
    display: flex;
    gap: ${4*e.sizeUnit}px;
    flex-wrap: wrap;
  `}
`,eo=(0,i.styled)(h.Image)`
  object-fit: contain;
`,{useBreakpoint:es}=h.Grid;function ed({data:{menu:e,brand:a,navbar_right:t,settings:r,environment_tag:u},isFrontendRoute:x=()=>!1}){let Y=es(),w=(0,_.Q1)(),S=(0,i.useTheme)(),C=[],[k,F]=(0,l.useState)(C),D=(0,g.zy)();return((0,l.useEffect)(()=>{let e=D.pathname;switch(!0){case e.startsWith("/dashboard"):F(["Dashboards"]);break;case e.startsWith("/chart")||e.startsWith("/explore"):F(["Charts"]);break;case e.startsWith("/tablemodelview"):F(["Datasets"]);break;case e.startsWith("/sqllab")||e.startsWith("/savedqueryview"):F(["SQL Lab"]);break;default:F(C)}},[D.pathname]),(0,c.P3)(y.vX.standalone)||w.hideNav)?(0,n.Y)(n.FK,{}):(0,n.Y)(ee,{className:"top",id:"main-menu",role:"navigation","aria-label":(0,o.t)("Main navigation"),children:(0,n.FD)(ei,{children:[(0,n.FD)(er,{md:16,xs:24,children:[!a.hide_logo&&(0,n.Y)(p.m,{id:"brand-tooltip",placement:"bottomLeft",title:a.tooltip,arrow:{pointAtCenter:!0},children:(()=>{let e;if(a.hide_logo)return null;if(S.brandLogoUrl){let a=(0,d.Am)(S.brandLogoHref),t=(0,n.Y)(eo,{preview:!1,src:(0,s.V)(S.brandLogoUrl),alt:S.brandLogoAlt||"Apache Superset",height:S.brandLogoHeight});e=(0,n.Y)(en,{margin:S.brandLogoMargin,children:(0,c.JE)(a)?(0,n.Y)(f.o.Link,{className:"navbar-brand",href:a,children:t}):(0,n.Y)(el,{to:(0,d.GC)(a),children:t})})}else e=x(window.location.pathname)?(0,n.Y)(m.Kt,{className:"navbar-brand",to:(0,d.GC)(a.path),children:(0,n.Y)(eo,{preview:!1,src:(0,s.V)(a.icon),alt:a.alt})}):(0,n.Y)(f.o.Link,{className:"navbar-brand",href:(0,d.Am)(a.path),tabIndex:-1,children:(0,n.Y)(eo,{preview:!1,src:(0,s.V)(a.icon),alt:a.alt})});return(0,n.Y)(n.FK,{children:e})})()}),!a.hide_logo&&a.text&&(0,n.Y)(ea,{children:(0,n.Y)("span",{children:a.text})}),(0,n.Y)(et,{mode:Y.md?"horizontal":"inline","data-test":"navbar-top",className:"main-nav",selectedKeys:k,disabledOverflow:!0,items:e.map(e=>{var a;return(({label:e,childs:a,url:t,isFrontendRoute:l,name:i})=>{let r=null!=i?i:e;if(t&&l)return{key:r,label:(0,n.Y)(b.k2,{role:"button",to:(0,d.GC)(t),activeClassName:"is-active",children:e})};if(t)return{key:r,label:(0,n.Y)(f.o.Link,{href:t,children:e})};let s=[];return null==a||a.forEach((a,t)=>{if("string"==typeof a&&"-"===a&&e!==(0,o.t)("Data"))s.push({type:"divider",key:`divider-${t}`});else if("string"!=typeof a){var l;Object.assign(a,{label:(0,o.t)(a.label)}),s.push({key:null!=(l=a.name)?l:`${a.label}`,label:a.isFrontendRoute?(0,n.Y)(b.k2,{to:(0,d.GC)(a.url||""),exact:!0,activeClassName:"is-active",children:a.label}):(0,n.Y)(f.o.Link,{href:a.url,children:a.label})})}}),Z({key:r,label:e},Y.md&&{icon:(0,n.Y)(v.F.DownOutlined,{iconSize:"xs"}),popupOffset:M.K},{children:s})})(Z({},e,{label:(0,o.t)(e.label),isFrontendRoute:x(e.url),childs:null==(a=e.childs)?void 0:a.map(e=>"string"==typeof e?e:Z({},e,{isFrontendRoute:x(e.url)}))}))})})]}),(0,n.Y)(h.Col,{md:8,xs:24,children:(0,n.Y)(X,{align:Y.md?"flex-end":"flex-start",settings:r,navbarRight:t,isFrontendRoute:x,environmentTag:u})})]})})}function ec(e){let{data:a}=e,t=function(e,a){if(null==e)return{};var t,n,l={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)!(a.indexOf(t=i[n])>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t]);return l}(e,["data"]),l=Z({},a),i={Data:!0,Security:!0,Manage:!0},r={Datasets:x.ww},s=[],d=[];return l.menu.forEach(e=>{if(!e)return;let a=[],t=Z({},e,e.name&&r[e.name]?{label:r[e.name]()}:{label:(0,o.t)(e.label)});e.childs&&(e.childs.forEach(e=>{"string"==typeof e?a.push((0,o.t)(e)):e.label&&(Object.assign(e,{label:(0,o.t)(e.label)}),a.push(e))}),t.childs=a),i.hasOwnProperty(e.name)?d.push(t):s.push(t)}),l.menu=s,l.settings=d,(0,n.Y)(ed,Z({data:l},t))}},58977(e,a,t){var n=t(27124);let l={name:(0,n.t)("SQL"),tabs:[{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]};t.d(a,["F",0,l,"K",0,[0,-8]])},21804(e,a,t){t.d(a,{Gq:()=>o,Hh:()=>l,SO:()=>s,SX:()=>i,Wr:()=>r});var n,l=((n={}).Database="db",n.ChartSplitSizes="chart_split_sizes",n.ControlsWidth="controls_width",n.DatasourceWidth="datasource_width",n.IsDatapanelOpen="is_datapanel_open",n.HomepageChartFilter="homepage_chart_filter",n.HomepageDashboardFilter="homepage_dashboard_filter",n.HomepageCollapseState="homepage_collapse_state",n.HomepageActivityFilter="homepage_activity_filter",n.DatasetnameSetSuccessful="datasetname_set_successful",n.SqllabIsAutocompleteEnabled="sqllab__is_autocomplete_enabled",n.SqllabIsRenderHtmlEnabled="sqllab__is_render_html_enabled",n.SqllabPinnedSchemas="sqllab__pinned_schemas",n.ExploreDataTableOriginalFormattedTimeColumns="explore__data_table_original_formatted_time_columns",n.DashboardCustomFilterBarWidths="dashboard__custom_filter_bar_widths",n.DashboardExploreContext="dashboard__explore_context",n.DashboardEditorShowOnlyMyCharts="dashboard__editor_show_only_my_charts",n.CommonResizableSidebarWidths="common__resizable_sidebar_widths",n.ChatState="chat__state",n);function i(e,a){try{let t=localStorage.getItem(e);if(null===t)return a;return JSON.parse(t)}catch{return a}}function r(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch{}}function o(e,a){return i(e,a)}function s(e,a){r(e,a)}}}]);