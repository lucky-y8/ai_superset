"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1285],{60380(e,t,a){var i=a(2445),n=a(64260),r=a(58561),l=a.n(r),o=a(56030),d=a(65471),s=a(62858),c=a(33296),u=a(29138),h=a(70621),g=a(68447),p=a(27124),m=a(73815),b=a(85614),v=a(36652),y=a(84151);function f(e,t,a,i,n,r,l){try{var o=e[r](l),d=o.value}catch(e){a(e);return}o.done?t(d):Promise.resolve(d).then(i,n)}function Y(e){return function(){var t=this,a=arguments;return new Promise(function(i,n){var r=e.apply(t,a);function l(e){f(r,i,n,l,o,"next",e)}function o(e){f(r,i,n,l,o,"throw",e)}l(void 0)})}}let x=b.styled.div`
  .ant-select-dropdown {
    max-height: ${({theme:e})=>40*e.sizeUnit}px;
  }
  .tag-input {
    margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
  }
`;a.d(t,["A",0,({show:e,onHide:t,editTag:a,refreshData:r,addSuccessToast:f,addDangerToast:$,clearOnHide:S=!1})=>{let[T,z]=(0,n.useState)([]),[w,C]=(0,n.useState)([]),[F,_]=(0,n.useState)([]),[U,A]=(0,n.useState)(""),[E,D]=(0,n.useState)(""),k=(0,b.useTheme)(),P=!!a,N=()=>{A(""),D(""),z([]),C([]),_([])};(0,n.useEffect)(()=>{let e={dashboard:[],chart:[],query:[]},t=({id:t,name:a,type:i})=>{let n=e[i];n&&n.push({value:t,label:a,key:t})};z([]),C([]),_([]),P&&((0,v.Ik)({tagIds:[a.id],types:null},a=>{a.forEach(t),z(e.dashboard),C(e.chart),_(e.query)},e=>{$("Error Fetching Tagged Objects")}),A(a.name),D(a.description))},[a]);let q=(e,t,a,i,n,r,o)=>Y(function*(){let a=l().encode({columns:i,filters:[{col:n,opr:"ct",value:e}],page:t,order_column:r}),{json:d}=yield m.A.get({endpoint:`/api/v1/${o}/?q=${a}`}),{result:s,count:c}=d;return{data:s.map(e=>({value:e.id,label:e[n]})),totalCount:c}})(),j=(e,t)=>{"dashboard"===e?z(t):"chart"===e?C(t):"query"===e&&_(t)};return(0,i.Y)(o.aF,{name:P?(0,p.t)("Edit Tag"):(0,p.t)("Create Tag"),title:(0,i.Y)(y.r,{isEditMode:P,title:P?(0,p.t)("Edit Tag"):(0,p.t)("Create Tag")}),onHide:()=>{S&&N(),t()},show:e,footer:(0,i.FD)("div",{children:[(0,i.Y)(u.$n,{"data-test":"modal-save-dashboard-button",buttonStyle:"secondary",onClick:t,children:(0,p.t)("Cancel")}),(0,i.Y)(u.$n,{"data-test":"modal-save-dashboard-button",buttonStyle:"primary",onClick:()=>{let e=T.map(e=>["dashboard",e.value]),i=w.map(e=>["chart",e.value]),n=F.map(e=>["query",e.value]);P?m.A.put({endpoint:`/api/v1/tag/${a.id}`,jsonPayload:{description:E,name:U,objects_to_tag:[...e,...i,...n]}}).then(()=>{r(),N(),f((0,p.t)("Tag updated")),t()}).catch(e=>{$(e.message||"Error Updating Tag")}):m.A.post({endpoint:"/api/v1/tag/",jsonPayload:{description:E,name:U,objects_to_tag:[...e,...i,...n]}}).then(()=>{r(),N(),f((0,p.t)("Tag created")),t()}).catch(e=>$(e.message||"Error Creating Tag"))},children:(0,p.t)("Save")})]}),children:(0,i.FD)(x,{children:[(0,i.FD)(g.s,{vertical:!0,gap:k.sizeUnit,children:[(0,i.Y)(c.l,{htmlFor:"tag-name",children:(0,p.t)("Tag name")}),(0,i.Y)(d.Input,{id:"tag-name",className:"tag-input",onChange:e=>A(e.target.value),placeholder:(0,p.t)("Name of your tag"),value:U})]}),(0,i.FD)(g.s,{vertical:!0,gap:k.sizeUnit,children:[(0,i.Y)(c.l,{children:(0,p.t)("Description")}),(0,i.Y)(d.Input,{className:"tag-input",onChange:e=>D(e.target.value),placeholder:(0,p.t)("Add description of your tag"),value:E})]}),(0,i.Y)(h.c,{}),(0,i.Y)(s.A,{className:"tag-input",ariaLabel:(0,p.t)("Select dashboards"),mode:"multiple",name:"dashboards",value:T,options:(e,t,a)=>Y(function*(){return q(e,t,a,["id","dashboard_title"],"dashboard_title","dashboard_title","dashboard")})(),onChange:e=>j("dashboard",e),getPopupContainer:()=>document.body,header:(0,i.Y)(c.l,{children:(0,p.t)("Dashboards")}),allowClear:!0}),(0,i.Y)(s.A,{className:"tag-input",ariaLabel:(0,p.t)("Select charts"),mode:"multiple",name:"charts",value:w,options:(e,t,a)=>Y(function*(){return q(e,t,a,["id","slice_name"],"slice_name","slice_name","chart")})(),onChange:e=>j("chart",e),getPopupContainer:()=>document.body,header:(0,i.Y)(c.l,{children:(0,p.t)("Charts")}),allowClear:!0}),(0,i.Y)(s.A,{className:"tag-input",ariaLabel:(0,p.t)("Select saved queries"),mode:"multiple",name:"savedQueries",value:F,options:(e,t,a)=>Y(function*(){return q(e,t,a,["id","label"],"label","label","saved_query")})(),onChange:e=>j("query",e),getPopupContainer:()=>document.body,header:(0,i.Y)(c.l,{children:(0,p.t)("Saved queries")}),allowClear:!0})]})})}])},14975(e,t,a){a.r(t),a.d(t,{default:()=>D});var i=a(2445),n=a(64260),r=a(27124),l=a(17437),o=a(85614),d=a(27937),s=a(45507),c=a(35494),u=a(97020),h=a(13512),g=a(70234),p=a(90617),m=a(47566);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let v=o.styled.div`
  text-align: left;
  border-radius: ${({theme:e})=>e.borderRadius}px 0;
  .table {
    table-layout: fixed;
  }
  .td {
    width: 33%;
  }
  .entity-title {
    font-family: Inter;
    font-size: ${({theme:e})=>e.fontSize}px;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    margin: ${({theme:e})=>4*e.sizeUnit}px 0;
  }
`;function y({search:e="",setShowTagModal:t,objects:a,canEditTag:n}){let l=a.dashboard.length>0,o=a.chart.length>0,d=a.query.length>0,f=l||o||d,Y=e=>{let t=a[e].map(t=>({[e]:(0,i.Y)(p.o.Link,{href:(0,m.Am)(t.url),children:t.name}),modified:t.changed_on?s.XV.utc(t.changed_on).fromNow():"",tags:t.tags,editors:t.editors}));return(0,i.Y)(c.Q,{className:"table-condensed",emptyWrapperType:c.V.Small,data:t,pageSize:10,columns:[{accessor:e,Header:"Title",id:e},{Cell:({row:{original:{tags:e=[]}}})=>(0,i.Y)(h.Sk,{tags:e.filter(e=>void 0!==e.type&&["TagType.custom",1].includes(e.type)),maxTags:3}),Header:(0,r.t)("Tags"),accessor:"tags",disableSortBy:!0,id:"tags"},{Cell:({row:{original:{editors:e=[]}}})=>(0,i.Y)(g.z,{subjects:e}),Header:(0,r.t)("Editors"),accessor:"editors",disableSortBy:!0,size:"xl",id:"editors"}]})};return(0,i.Y)(v,{children:f?(0,i.FD)(i.FK,{children:[l&&(0,i.FD)(i.FK,{children:[(0,i.Y)("div",{className:"entity-title",children:(0,r.t)("Dashboards")}),Y("dashboard")]}),o&&(0,i.FD)(i.FK,{children:[(0,i.Y)("div",{className:"entity-title",children:(0,r.t)("Charts")}),Y("chart")]}),d&&(0,i.FD)(i.FK,{children:[(0,i.Y)("div",{className:"entity-title",children:(0,r.t)("Queries")}),Y("query")]})]}):(0,i.Y)(u.p,b({image:"dashboard.svg",size:"large",title:(0,r.t)("No entities have this tag currently assigned")},n&&{buttonAction:()=>t(!0),buttonText:(0,r.t)("Add tag to entities")}))})}var f=a(10020),Y=a(29138),x=a(12913),$=a(86204),S=a(98110),T=a(60380),z=a(7070),w=a(36652),C=a(33025),F=a(12097),_=a(61225);let U=e=>(0,l.AH)`
  display: flex;
  align-items: center;
  margin-left: ${e.sizeUnit}px;
  & > span {
    margin-right: ${3*e.sizeUnit}px;
  }
`,A=o.styled.div`
  ${({theme:e})=>`
  background-color: ${e.colorBgContainer};
  .select-control {
    margin-left: ${4*e.sizeUnit}px;
    margin-right: ${4*e.sizeUnit}px;
    margin-bottom: ${2*e.sizeUnit}px;
  }
  .select-control-label {
    font-size: ${3*e.sizeUnit}px;
    color: ${e.colorText};
    margin-bottom: ${+e.sizeUnit}px;
  }
  .entities {
    margin: ${6*e.sizeUnit}px; 0px;
  }
  .pagination-container {
    background-color: transparent;
  }
  `}
`,E=o.styled.div`
  ${({theme:e})=>`
  height: ${12.5*e.sizeUnit}px;
  background-color: ${e.colorBgBase};
  margin-bottom: ${4*e.sizeUnit}px;
  .navbar-brand {
    margin-left: ${2*e.sizeUnit}px;
    font-weight: ${e.fontWeightStrong};
  }
  .header {
    font-weight: ${e.fontWeightStrong};
    margin-right:  ${3*e.sizeUnit}px;
    text-align: left;
    font-size: ${4.5*e.sizeUnit}px;
    padding: ${3*e.sizeUnit}px;
    display: inline-block;
    line-height: ${9*e.sizeUnit}px;
  }
  `};
`,D=(0,z.Ay)(function(){let[e]=(0,d.useQueryParam)("id",d.NumberParam),[t,a]=(0,n.useState)(null),[l,o]=(0,n.useState)(!1),{addSuccessToast:s,addDangerToast:c}=(0,z.Yf)(),[u,h]=(0,n.useState)(!1),[g,p]=(0,n.useState)({dashboard:[],chart:[],query:[]}),m=(0,_.d4)(e=>{var t;return(0,F.L)("can_write","Tag",null==(t=e.user)?void 0:t.roles)}),b={title:(null==t?void 0:t.name)||"",placeholder:"testing",onSave:()=>{},canEdit:!1,label:(0,r.t)("dataset name")},v=[];if(null==t?void 0:t.description){let e={type:x.Q.Description,value:(null==t?void 0:t.description)||""};v.push(e)}let D={type:x.Q.Editor,createdBy:(0,C.A)(null==t?void 0:t.created_by),createdOn:(null==t?void 0:t.created_on_delta_humanized)||""};v.push(D);let k={type:x.Q.LastModified,value:(null==t?void 0:t.changed_on_delta_humanized)||"",modifiedBy:(0,C.A)(null==t?void 0:t.changed_by)};v.push(k);let P=()=>{(h(!0),t)?(0,w.Ik)({tagIds:(null==t?void 0:t.id)!==void 0?[t.id]:"",types:null},e=>{let t={dashboard:[],chart:[],query:[]};e.forEach(function(e){t[e.type].push(e)}),p(t),h(!1)},()=>{c("Error Fetching Tagged Objects"),h(!1)}):c("Error tag object is not referenced!")},N=e=>{(0,w.FA)(e,e=>{a(e),h(!1)},()=>{c((0,r.t)("Error Fetching Tagged Objects")),h(!1)})};return((0,n.useEffect)(()=>{e&&(h(!0),N(e))},[e]),(0,n.useEffect)(()=>{t&&P()},[t]),u)?(0,i.Y)(f.R,{}):(0,i.FD)(A,{children:[(0,i.Y)(T.A,{show:l,onHide:()=>{o(!1)},editTag:t,addSuccessToast:s,addDangerToast:c,refreshData:()=>{P(),e&&N(e)}}),(0,i.Y)(E,{children:(0,i.Y)(S.U,{additionalActionsMenu:(0,i.Y)(i.FK,{}),editableTitleProps:b,faveStarProps:{itemId:1,saveFaveStar:()=>{}},showFaveStar:!1,showTitlePanelItems:!0,titlePanelAdditionalItems:(0,i.Y)("div",{css:U,children:(0,i.Y)($.A,{items:v,tooltipPlacement:"bottom"})}),rightPanelAdditionalItems:(0,i.Y)(i.FK,{children:m&&(0,i.FD)(Y.$n,{"data-test":"bulk-select-action",buttonStyle:"secondary",onClick:()=>o(!0),showMarginRight:!1,children:[(0,r.t)("Edit tag")," "]})}),menuDropdownProps:{disabled:!0},showMenuDropdown:!1})}),(0,i.Y)("div",{className:"entities",children:(0,i.Y)(y,{search:(null==t?void 0:t.name)||"",setShowTagModal:o,objects:g,canEditTag:m})})]})})}}]);