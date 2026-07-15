"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9019],{185(e,t,n){n.r(t),n.d(t,{default:()=>$});var a=n(2445),l=n(64260),i=n(58561),o=n.n(i),r=n(27124),d=n(73815),s=n(61574),c=n(71519),u=n(18847),p=n(37254),h=n(7070),m=n(79294),y=n(90617),b=n(426),g=n(66016),f=n(13512),v=n(85614),x=n(84151),A=n(56030),_=n(65471);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let w=v.styled.div`
  margin: ${({theme:e})=>2*e.sizeUnit}px auto
    ${({theme:e})=>4*e.sizeUnit}px auto;
`,C=v.styled.div`
  margin-bottom: ${({theme:e})=>10*e.sizeUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.sizeUnit/2}px;
    color: ${({theme:e})=>e.colorError};
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.sizeUnit}px
      ${({theme:e})=>2*e.sizeUnit}px;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colorTextPlaceholder};
  }
`,Y=(0,h.Ay)(({addDangerToast:e,addSuccessToast:t,onLayerAdd:n,onHide:i,show:o,layer:d=null})=>{let[s,c]=(0,l.useState)(!0),[p,h]=(0,l.useState)(),[m,b]=(0,l.useState)(!0),g=null!==d,{state:{loading:f,resource:v},fetchResource:Y,createResource:k,updateResource:z}=(0,u.fn)("annotation_layer",(0,r.t)("annotation_layer"),e),D=()=>{h({name:"",descr:""})},$=()=>{b(!0),D(),i()},T=e=>{let{target:t}=e,n=S({},p,{name:p?p.name:"",descr:p?p.descr:""});n[t.name]=t.value,h(n)};return(0,l.useEffect)(()=>{g&&(!(null==p?void 0:p.id)||d&&d.id!==p.id||m&&o)?o&&d&&null!==d.id&&!f&&Y(d.id||0):!g&&(!p||p.id||m&&o)&&D()},[d,o]),(0,l.useEffect)(()=>{v&&h(v)},[v]),(0,l.useEffect)(()=>{var e;(null==p||null==(e=p.name)?void 0:e.length)?c(!1):c(!0)},[p?p.name:"",p?p.descr:""]),m&&o&&b(!1),(0,a.FD)(A.aF,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(g){if(null==p?void 0:p.id){let e=p.id;delete p.id,delete p.created_by,z(e,p).then(e=>{e&&($(),t((0,r.t)("Annotation template updated")))})}}else p&&k(p).then(e=>{e&&(n&&n(e),$(),t((0,r.t)("Annotation template created")))})},onHide:$,primaryButtonName:g?(0,r.t)("Save"):(0,r.t)("Add"),show:o,width:"55%",name:g?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer"),title:(0,a.Y)(x.r,{isEditMode:g,title:g?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer"),"data-test":"annotation-layer-modal-title"}),children:[(0,a.Y)(w,{children:(0,a.Y)(y.o.Title,{level:4,children:(0,r.t)("General information")})}),(0,a.FD)(C,{children:[(0,a.FD)("div",{className:"control-label",children:[(0,r.t)("Annotation layer name"),(0,a.Y)("span",{className:"required",children:"*"})]}),(0,a.Y)(_.Input,{name:"name",onChange:T,type:"text",value:null==p?void 0:p.name})]}),(0,a.FD)(C,{children:[(0,a.Y)("div",{className:"control-label",children:(0,r.t)("description")}),(0,a.Y)(_.Input.TextArea,{name:"descr",value:null==p?void 0:p.descr,placeholder:(0,r.t)("Description (this can be seen in the list)"),onChange:T})]})]})});var k=n(16598),z=n(60685),D=n(47566);n(91681);let $=(0,h.Ay)(function({addDangerToast:e,addSuccessToast:t,user:n}){let{state:{loading:i,resourceCount:h,resourceCollection:v,bulkSelectEnabled:x},hasPerm:A,fetchData:_,refreshData:S,toggleBulkSelect:w}=(0,u.RU)("annotation_layer",(0,r.t)("Annotation layers"),e),[C,$]=(0,l.useState)(!1),[T,F]=(0,l.useState)(null),[H,E]=(0,l.useState)(null),N=A("can_write"),O=A("can_write"),U=A("can_write");function B(e){F(e),$(!0)}let P=[{id:"name",desc:!0}],L=(0,l.useMemo)(()=>[{accessor:"name",Header:(0,r.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let n=!0;try{(0,s.W6)()}catch{n=!1}return n?(0,a.Y)(c.N_,{to:`/annotationlayer/${e}/annotation`,children:t}):(0,a.Y)(y.o.Link,{href:(0,D.Am)(`/annotationlayer/${e}/annotation`),children:t})},size:"xxl",id:"name"},{accessor:"descr",Header:(0,r.t)("Description"),size:"xl",id:"descr"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,a.Y)(f.UW,{date:e,user:t}),Header:(0,r.t)("Last modified"),accessor:"changed_on",size:"xl",id:"changed_on"},{Cell:({row:{original:e}})=>{let t=[O?{label:"edit-action",tooltip:(0,r.t)("Edit template"),placement:"bottom",icon:"EditOutlined",onClick:()=>B(e)}:null,U?{label:"delete-action",tooltip:(0,r.t)("Delete template"),placement:"bottom",icon:"DeleteOutlined",onClick:()=>E(e)}:null].filter(e=>!!e);return(0,a.Y)(f.kv,{actions:t})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!O&&!U,size:"xl"},{accessor:k.H.ChangedBy,hidden:!0,id:k.H.ChangedBy}],[U,N]),J=[];U&&J.push({name:(0,r.t)("Bulk select"),onClick:w,buttonStyle:"secondary"}),N&&J.push({icon:(0,a.Y)(z.F.PlusOutlined,{iconSize:"m"}),name:(0,r.t)("Annotation layer"),buttonStyle:"primary",onClick:()=>{B(null)}});let M=(0,l.useMemo)(()=>[{Header:(0,r.t)("Name"),key:"search",id:"name",input:"search",operator:f.c0.Contains,inputName:"annotation_layer_list_search"},{Header:(0,r.t)("Changed by"),key:"changed_by",id:"changed_by",input:"select",operator:f.c0.RelationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,p.u1)("annotation_layer","changed_by",(0,p.JF)(e=>(0,r.t)("An error occurred while fetching dataset datasource values: %s",e)),n),paginate:!0,popupStyle:{minWidth:"300px"}}],[]),q={title:(0,r.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>B(null),buttonText:(0,r.t)("Annotation layer"),buttonIcon:(0,a.Y)(z.F.PlusOutlined,{iconSize:"m"})};return(0,a.FD)(a.FK,{children:[(0,a.Y)(m.A,{name:(0,r.t)("Annotation layers"),buttons:J}),(0,a.Y)(Y,{addDangerToast:e,layer:T,onLayerAdd:e=>{(0,D.VJ)(`/annotationlayer/${e}/annotation`)},onHide:()=>{S(),$(!1)},show:C}),H&&(0,a.Y)(b.T,{description:(0,r.t)("This action will permanently delete the layer."),onConfirm:()=>{H&&(({id:n,name:a})=>{d.A.delete({endpoint:`/api/v1/annotation_layer/${n}`}).then(()=>{S(),E(null),t((0,r.t)("Deleted: %s",a))},(0,p.JF)(t=>e((0,r.t)("There was an issue deleting %s: %s",a,t))))})(H)},onHide:()=>E(null),open:!0,title:(0,r.t)("Delete Layer?")}),(0,a.Y)(g.h,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected layers?"),onConfirm:n=>{d.A.delete({endpoint:`/api/v1/annotation_layer/?q=${o().encode(n.map(({id:e})=>e))}`}).then(({json:e={}})=>{S(),t(e.message)},(0,p.JF)(t=>e((0,r.t)("There was an issue deleting the selected layers: %s",t))))},children:n=>{let l=U?[{key:"delete",name:(0,r.t)("Delete"),onSelect:n,type:"danger"}]:[];return(0,a.Y)(f.uO,{className:"annotation-layers-list-view",columns:L,count:h,data:v,fetchData:_,filters:M,initialSort:P,loading:i,pageSize:25,bulkActions:l,bulkSelectEnabled:x,disableBulkSelect:w,addDangerToast:e,addSuccessToast:t,emptyState:q,refreshData:S})}})]})})}}]);