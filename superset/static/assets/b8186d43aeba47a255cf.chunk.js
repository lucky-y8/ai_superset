"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[249],{9836(e,r,n){n.r(r),n.d(r,{default:()=>L});var t=n(2445),l=n(64260),i=n(27124),a=n(85614),o=n(17437),d=n(68447),c=n(79592),s=n(90617),u=n(29138),h=n(65471),p=n(60685),g=n(47566);let y="superset_trusted_urls",x=["http:","https:"];function f(e){try{let r=new URL(e);return r.origin+r.pathname.replace(/\/$/,"")+r.search}catch{return e}}function $(e){if(/^[/\\][/\\]/.test(e)||e.includes("\\"))return!1;try{let r=new URL(e);return x.includes(r.protocol)}catch{return!0}}function k(){try{let e=localStorage.getItem(y);if(!e)return[];let r=JSON.parse(e);return Array.isArray(r)?r:[]}catch{return[]}}let m=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    height: calc(100vh - 64px);
    background-color: ${e.colorBgLayout};
    padding: ${e.padding}px;
  `}
`,b=(0,a.styled)(c.Z)`
  ${({theme:e})=>(0,o.AH)`
    max-width: 520px;
    width: 100%;
    box-shadow: ${e.boxShadowSecondary};
  `}
`,Y=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    padding: ${e.paddingLG}px ${e.paddingXL}px;
    border-bottom: 1px solid ${e.colorBorderSecondary};
  `}
`,S=a.styled.div`
  ${({theme:e})=>(0,o.AH)`
    padding: ${e.paddingXL}px;
  `}
`,w=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    background-color: ${e.colorFillQuaternary};
    border-radius: ${e.borderRadiusSM}px;
    padding: ${e.paddingSM}px ${e.padding}px;
    margin-bottom: ${e.margin}px;
  `}
`,F=(0,a.styled)(s.o.Text)`
  ${({theme:e})=>(0,o.AH)`
    font-family: ${e.fontFamilyCode};
    font-size: ${e.fontSize}px;
    word-break: break-all;
  `}
`,C=(0,a.styled)(d.s)`
  ${({theme:e})=>(0,o.AH)`
    padding: ${e.padding}px ${e.paddingXL}px;
    background-color: ${e.colorFillAlter};
    border-top: 1px solid ${e.colorBorderSecondary};
  `}
`,T=(0,a.styled)(s.o.Title)`
  && {
    margin: 0;
  }
`;function L(){let e=(0,a.useTheme)(),[r,n]=(0,l.useState)(!1),o=(0,l.useMemo)(()=>{var e;return(null!=(e=new URLSearchParams(window.location.search).get("url"))?e:"").trim()},[]);(0,l.useEffect)(()=>{let e;o&&$(o)&&(e=f(o),k().some(r=>f(r)===e))&&(0,g.V2)(o)},[o]);let c=(0,l.useCallback)(()=>{o&&$(o)&&(r&&function(e){let r=f(e),n=k();if(!n.some(e=>f(e)===r)){n.push(e);let r=n.length>100?n.slice(-100):n;try{localStorage.setItem(y,JSON.stringify(r))}catch{}}}(o),(0,g.V2)(o))},[r,o]),x=(0,l.useCallback)(()=>{(0,g.V2)("/")},[]);return o?$(o)?(0,t.Y)(m,{justify:"center",align:"center",children:(0,t.FD)(b,{children:[(0,t.FD)(Y,{align:"center",gap:"middle",children:[(0,t.Y)(p.F.WarningOutlined,{iconColor:e.colorWarning,iconSize:"xl"}),(0,t.Y)(T,{level:4,children:(0,i.t)("External link warning")})]}),(0,t.FD)(S,{children:[(0,t.Y)(s.o.Paragraph,{type:"secondary",children:(0,i.t)("This link will take you to an external website. We cannot guarantee the safety of external destinations.")}),(0,t.FD)(w,{align:"center",gap:"small",children:[(0,t.Y)(p.F.LinkOutlined,{iconColor:e.colorTextTertiary}),(0,t.Y)(F,{children:o})]}),(0,t.Y)(d.s,{align:"center",gap:"small",children:(0,t.Y)(h.Checkbox,{checked:r,onChange:e=>n(e.target.checked),children:(0,i.t)("Trust this URL and don't ask again")})}),(0,t.Y)(s.o.Text,{type:"secondary",children:(0,i.t)("Only proceed if you trust the destination or its source.")})]}),(0,t.FD)(C,{justify:"flex-end",gap:"small",children:[(0,t.Y)(u.$n,{onClick:x,children:(0,i.t)("Return to Superset")}),(0,t.Y)(u.$n,{type:"primary",onClick:c,children:(0,i.t)("Continue")})]})]})}):(0,t.Y)(m,{justify:"center",align:"center",children:(0,t.FD)(b,{children:[(0,t.FD)(Y,{align:"center",gap:"middle",children:[(0,t.Y)(p.F.WarningOutlined,{iconColor:e.colorError,iconSize:"xl"}),(0,t.Y)(T,{level:4,children:(0,i.t)("Unsafe link blocked")})]}),(0,t.FD)(S,{children:[(0,t.Y)(s.o.Paragraph,{type:"secondary",children:(0,i.t)("This link cannot be followed because its address is unsafe.")}),(0,t.FD)(w,{align:"center",gap:"small",children:[(0,t.Y)(p.F.LinkOutlined,{iconColor:e.colorTextTertiary}),(0,t.Y)(F,{children:o})]})]}),(0,t.Y)(C,{justify:"flex-end",gap:"small",children:(0,t.Y)(u.$n,{onClick:x,children:(0,i.t)("Return to Superset")})})]})}):(0,t.Y)(m,{justify:"center",align:"center",children:(0,t.Y)(b,{children:(0,t.Y)(S,{children:(0,t.Y)(s.o.Text,{type:"danger",children:(0,i.t)("Missing URL parameter")})})})})}}}]);