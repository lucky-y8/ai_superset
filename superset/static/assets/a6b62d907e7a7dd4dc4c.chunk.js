"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7094],{55763(e,r,t){t.r(r),t.d(r,{default:()=>el});var n,i=t(2445),o=t(64260),a=t(85614);let l=a.styled.canvas`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`,d=a.styled.section`
  position: relative;
  z-index: 1;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`,s=a.styled.div`
  position: absolute;
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 50%;
  animation: rotate ${({$reverse:e})=>e?12:18}s linear infinite
    ${({$reverse:e})=>e?"reverse":"normal"};
`,p=a.styled.div`
  position: relative;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  background: linear-gradient(135deg, #06b6d4, #2563eb 50%, #7c3aed);
  box-shadow: 0 0 42px rgba(14, 165, 233, 0.36);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: pulseGlow 4s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;

  @keyframes coreHoverSpin {
    0% {
      transform: scale(1) rotate(0deg);
    }
    34% {
      transform: scale(0.94) rotate(-5deg);
    }
    72% {
      transform: scale(1.1) rotate(7deg);
    }
    100% {
      transform: scale(1.06) rotate(0deg);
    }
  }

  &:hover {
    animation:
      pulseGlow 4s ease-in-out infinite,
      coreHoverSpin 820ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }
`,u=a.styled.div`
  text-align: center;
  z-index: 1;
`,g=a.styled.div`
  font-size: 68px;
  line-height: 1;
  margin-bottom: 12px;
`,c=a.styled.h1`
  margin: 0;
  color: #fff;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 0;
`,h=a.styled.p`
  margin: 8px 0 0;
  color: #cffafe;
  font-weight: 600;
`,b=a.styled.div`
  position: absolute;
  top: ${({$top:e})=>e};
  right: ${({$right:e})=>e};
  bottom: ${({$bottom:e})=>e};
  left: ${({$left:e})=>e};
  min-width: 126px;
  padding: 16px;
  border-radius: 24px;
  border: 1px solid var(--login-card-border);
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  color: var(--login-text);
  box-shadow: 0 18px 60px rgba(2, 6, 23, 0.18);
  animation: float ${({$duration:e})=>null!=e?e:4}s ease-in-out infinite;
`,m=a.styled.div`
  color: #67e8f9;
  font-size: 12px;
`,f=a.styled.div`
  margin-top: 4px;
  font-size: 24px;
  font-weight: 800;
`,x=a.styled.div`
  position: absolute;
  top: ${({$top:e})=>e};
  right: ${({$right:e})=>e};
  bottom: ${({$bottom:e})=>e};
  left: ${({$left:e})=>e};
  width: 224px;
  padding: 20px;
  border-radius: 24px;
  border: 1px solid var(--login-card-border);
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  color: var(--login-text);
  box-shadow: 0 20px 70px rgba(2, 6, 23, 0.16);
  transition: transform 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.03);
  }
`,v=a.styled.div`
  height: 96px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
`,w=a.styled.div`
  width: 24px;
  height: ${({$height:e})=>e}%;
  border-radius: 10px 10px 0 0;
  background: ${({$color:e})=>e};
  animation: barPulse 1.8s ease-in-out infinite;
`,y=a.styled.div`
  margin-top: 16px;
  font-weight: 800;
`;function k(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let r=e.current,t=null==r?void 0:r.getContext("2d");if(!r||!t)return;let n=[],i=()=>{r.width=window.innerWidth,r.height=window.innerHeight},o=(e,r)=>{for(let t=0;t<5;t+=1)n.push({x:e,y:r,speedX:(Math.random()-.5)*3,speedY:(Math.random()-.5)*3,life:100,size:4*Math.random()+1,color:`hsl(${360*Math.random()},100%,70%)`})},a=e=>{o(e.clientX,e.clientY)},l=e=>{let[r]=e.touches;r&&o(r.clientX,r.clientY)},d=0,s=()=>{t.clearRect(0,0,r.width,r.height);for(let e=n.length-1;e>=0;e-=1){let r=n[e];r.x+=r.speedX,r.y+=r.speedY,r.life-=1,r.size*=.98,t.fillStyle=r.color,t.beginPath(),t.arc(r.x,r.y,r.size,0,2*Math.PI),t.fill(),r.life<=0&&n.splice(e,1)}d=requestAnimationFrame(s)};return i(),s(),window.addEventListener("resize",i),window.addEventListener("mousemove",a),window.addEventListener("touchmove",l),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",i),window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",l)}},[]),(0,i.FD)(i.FK,{children:[(0,i.Y)(l,{ref:e,"aria-hidden":"true"}),(0,i.FD)(d,{"aria-hidden":"true",children:[(0,i.Y)(s,{$size:520}),(0,i.Y)(s,{$size:420,$reverse:!0}),(0,i.FD)(p,{children:[(0,i.FD)(u,{children:[(0,i.Y)(g,{children:"📊"}),(0,i.Y)(c,{children:"SUPERSET"}),(0,i.Y)(h,{children:"AI DATA ANALYTICS"})]}),(0,i.FD)(b,{$top:"24px",$left:"-80px",children:[(0,i.Y)(m,{children:"实时数据"}),(0,i.Y)(f,{children:"1.2TB"})]}),(0,i.FD)(b,{$top:"96px",$right:"-80px",$duration:5,children:[(0,i.Y)(m,{children:"在线用户"}),(0,i.Y)(f,{children:"98K"})]}),(0,i.FD)(b,{$bottom:"-40px",$left:"64px",$duration:6,children:[(0,i.Y)(m,{children:"AI 查询"}),(0,i.Y)(f,{children:"8.9M"})]})]}),(0,i.FD)(x,{$top:"40px",$left:"40px",children:[(0,i.FD)(v,{children:[(0,i.Y)(w,{$color:"#22d3ee",$height:30}),(0,i.Y)(w,{$color:"#3b82f6",$height:80}),(0,i.Y)(w,{$color:"#a855f7",$height:50}),(0,i.Y)(w,{$color:"#ec4899",$height:90})]}),(0,i.Y)(y,{children:"Revenue Analytics"})]}),(0,i.FD)(x,{$right:"40px",$bottom:"40px",children:[(0,i.Y)("svg",{viewBox:"0 0 200 100",width:"100%",height:"96",role:"img",children:(0,i.Y)("polyline",{fill:"none",stroke:"#22d3ee",strokeWidth:"4",points:"0,80 40,50 80,70 120,20 160,40 200,10"})}),(0,i.Y)(y,{children:"AI Prediction"})]})]})]})}var Y=t(57832),$=t(65471),A=t(29138);let F=(0,a.styled)(Y.l)`
  .ant-form-item {
    margin-bottom: 20px;
  }

  .ant-form-item-label {
    display: none;
  }

  .ant-input,
  .ant-input-affix-wrapper {
    min-height: 56px;
    padding: 14px 18px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    background: var(--login-input-bg);
    color: var(--login-text);
    box-shadow: none;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .ant-input::placeholder {
    color: var(--login-muted);
  }

  .ant-input-affix-wrapper input.ant-input {
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .ant-input-affix-wrapper .ant-input-suffix {
    color: var(--login-text);
    font-size: 22px;
  }

  .ant-input:focus,
  .ant-input-focused,
  .ant-input-affix-wrapper-focused {
    border-color: #38bdf8;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
  }

  .ant-btn-primary {
    width: 100%;
    min-height: 56px;
    border: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    color: #fff;
    font-weight: 800;
    box-shadow: none;
    transition: transform 0.3s ease;
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    transform: translateY(-2px) scale(1.02);
    background: linear-gradient(135deg, #06b6d4, #2563eb);
  }
`,P=a.styled.div`
  margin-bottom: 16px;
  padding: 12px 16px;
  border: 1px solid #fb7185;
  border-radius: 8px;
  background: rgba(190, 18, 60, 0.16);
  color: var(--login-text);
  line-height: 1.5;
`,I=a.styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function D({form:e,loading:r,errorMessage:t,onFinish:n}){return(0,i.FD)(F,{form:e,onFinish:n,layout:"vertical","data-test":"login-form","data-testid":"login-form",children:[(0,i.Y)(I,{children:"Enter your login and password below:"}),(0,i.Y)(Y.l.Item,{label:"Username:",name:"username",rules:[{required:!0,message:"Please enter your username"}],children:(0,i.Y)($.Input,{"data-test":"username-input","data-testid":"username-input",placeholder:"邮箱地址"})}),(0,i.Y)(Y.l.Item,{label:"Password:",name:"password",rules:[{required:!0,message:"Please enter your password"}],children:(0,i.Y)($.Input.Password,{"data-test":"password-input","data-testid":"password-input",iconRender:e=>e?"🙈":"🐰",placeholder:"密码"})}),t&&(0,i.Y)(P,{role:"alert",children:t}),(0,i.Y)(A.$n,{"aria-label":"Sign in","data-test":"login-button","data-testid":"login-button",type:"primary",htmlType:"submit",loading:r,block:!0,children:"进入数据驾驶舱"})]})}var z=t(68655),S=t(73815),C=t(7070),E=t(61225),L=t(27124),T=t(29428),R=t(89495);function M(e,r,t,n,i,o,a){try{var l=e[o](a),d=l.value}catch(e){t(e);return}l.done?r(d):Promise.resolve(d).then(n,i)}function U(e){return function(){var r=this,t=arguments;return new Promise(function(n,i){var o=e.apply(r,t);function a(e){M(o,n,i,a,l,"next",e)}function l(e){M(o,n,i,a,l,"throw",e)}a(void 0)})}}function O(e,r,t,n,i,o,a){try{var l=e[o](a),d=l.value}catch(e){t(e);return}l.done?r(d):Promise.resolve(d).then(n,i)}function j(e){return function(){var r=this,t=arguments;return new Promise(function(n,i){var o=e.apply(r,t);function a(e){O(o,n,i,a,l,"next",e)}function l(e){O(o,n,i,a,l,"throw",e)}a(void 0)})}}function q(){return(q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let _=(0,a.styled)(Y.l)`
  .ant-form-item {
    margin-bottom: 20px;
  }

  .ant-form-item-explain-error {
    margin-top: 8px;
    line-height: 1.35;
  }

  .ant-form-item-label {
    display: none;
  }

  .ant-input,
  .ant-input-affix-wrapper {
    min-height: 56px;
    padding: 14px 18px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    background: var(--login-input-bg);
    background-color: var(--login-input-bg);
    color: var(--login-text);
    box-shadow: none;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .ant-input::placeholder {
    color: var(--login-muted);
  }

  .ant-input-status-error,
  .ant-input-status-error:not(.ant-input-disabled),
  .ant-input-affix-wrapper-status-error,
  .ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled),
  .ant-input-outlined.ant-input-status-error,
  .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled),
  .ant-input-outlined.ant-input-status-error:hover,
  .ant-input-outlined.ant-input-status-error:focus,
  .ant-input-outlined.ant-input-status-error.ant-input-focused,
  .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled):hover,
  .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled):focus {
    border-color: #fb7185;
    background-color: var(--login-input-bg);
    color: var(--login-text);
    box-shadow: none;
  }

  .ant-input-affix-wrapper input.ant-input {
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .ant-input-affix-wrapper .ant-input-suffix {
    color: var(--login-text);
    font-size: 22px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--login-text);
    box-shadow: 0 0 0 1000px rgba(15, 23, 42, 0.86) inset;
    caret-color: var(--login-text);
  }

  .ant-input:focus,
  .ant-input-focused,
  .ant-input-affix-wrapper-focused {
    border-color: #38bdf8;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
  }

  .ant-btn-primary {
    min-height: 56px;
    border: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    font-weight: 800;
  }
`,B=a.styled.div`
  display: grid;
  grid-template-columns: 1fr 96px;
  gap: 12px;
  margin-bottom: 24px;

  .ant-form-item {
    margin-bottom: 0;
  }
`,H=(0,a.styled)(A.$n)`
  min-height: 56px;
  border: 0;
  border-radius: 18px;
  background: #06b6d4;
  color: #fff;
  font-weight: 800;
`,G=a.styled.div`
  margin-bottom: 16px;
  padding: 12px 16px;
  border: 1px solid #fb7185;
  border-radius: 8px;
  background: rgba(190, 18, 60, 0.16);
  color: var(--login-text);
  line-height: 1.5;
`;function V({onSuccess:e}){let[r]=Y.l.useForm(),[t,n]=(0,o.useState)(!1),[a,l]=(0,o.useState)(!1),[d,s]=(0,o.useState)(""),{addDangerToast:p,addSuccessToast:u}=(0,C.Yf)(),{countdown:g,startCountdown:c,isCounting:h}=function(e=60){let[r,t]=(0,o.useState)(0),n=(0,o.useCallback)(()=>{t(e)},[e]);return(0,o.useEffect)(()=>{if(r<=0)return;let e=window.setInterval(()=>{t(e=>Math.max(e-1,0))},1e3);return()=>window.clearInterval(e)},[r]),{countdown:r,startCountdown:n,isCounting:r>0}}(),b=(e,r)=>j(function*(){let t=r;try{let r=yield(0,z.h4)(e);"string"==typeof r.error&&r.error?t=r.error:"string"==typeof r.message&&r.message&&(t=r.message)}catch{e instanceof Error&&e.message&&(t=e.message)}s(t),p(t)})();return(0,i.FD)(_,{form:r,layout:"vertical",onFinish:t=>j(function*(){s(""),n(!0);let i={username:t.nickname,first_name:t.nickname,last_name:t.nickname,email:t.email,password:t.password,conf_password:t.confirmPassword};try{yield S.A.post({endpoint:"/api/v1/v2/users/register/",jsonPayload:q({},i,{verify_code:t.verifyCode})}),u("注册成功，请使用新账号登录"),r.resetFields(),e(t.nickname)}catch(e){yield b(e,"注册失败，请稍后重试")}finally{n(!1)}})(),children:[(0,i.Y)(Y.l.Item,{label:"Nickname",name:"nickname",rules:[{required:!0,message:"Please enter your nickname"}],children:(0,i.Y)($.Input,{placeholder:"昵称"})}),(0,i.Y)(Y.l.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please enter your email"},{type:"email",message:"Please enter a valid email address"}],children:(0,i.Y)($.Input,{placeholder:"邮箱地址"})}),(0,i.Y)(Y.l.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please enter your password"}],children:(0,i.Y)($.Input.Password,{placeholder:"设置密码",autoComplete:"new-password"})}),(0,i.Y)(Y.l.Item,{label:"Confirm password",name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"请再次输入密码"},({getFieldValue:e})=>({validator:(r,t)=>t&&e("password")!==t?Promise.reject(Error("两次输入的密码不一致")):Promise.resolve()})],children:(0,i.Y)($.Input.Password,{placeholder:"确认密码",autoComplete:"new-password"})}),(0,i.FD)(B,{children:[(0,i.Y)(Y.l.Item,{label:"Verify code",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"},{pattern:/^\d{6}$/,message:"请输入 6 位数字验证码"}],children:(0,i.Y)($.Input,{placeholder:"验证码",inputMode:"numeric",maxLength:6})}),(0,i.Y)(H,{htmlType:"button",disabled:h||a,loading:a,onClick:()=>j(function*(){s("");try{let{email:e}=yield r.validateFields(["email"]);l(!0),yield S.A.post({endpoint:"/api/v1/v2/users/verification-code/",jsonPayload:{email:e}}),u("验证码已发送，请检查邮箱"),c()}catch(e){if(e&&"object"==typeof e&&"errorFields"in e)return;yield b(e,"验证码发送失败，请稍后重试")}finally{l(!1)}})(),children:h?`${g}s`:"获取"})]}),d&&(0,i.Y)(G,{role:"alert",children:d}),(0,i.Y)(A.$n,{type:"primary",htmlType:"submit",loading:t,block:!0,children:"创建账号"})]})}var X=((n={})[n.AuthOID=0]="AuthOID",n[n.AuthDB=1]="AuthDB",n[n.AuthLDAP=2]="AuthLDAP",n[n.AuthOauth=4]="AuthOauth",n[n.AuthSAML=5]="AuthSAML",n);let K=a.styled.main`
  --login-bg1: #020617;
  --login-bg2: #0f172a;
  --login-bg3: #111827;
  --login-glass: rgba(255, 255, 255, 0.12);
  --login-text: #fff;
  --login-muted: rgba(255, 255, 255, 0.78);
  --login-card-border: rgba(255, 255, 255, 0.18);
  --login-input-bg: rgba(0, 0, 0, 0.25);
  --login-tab-bg: rgba(0, 0, 0, 0.2);

  position: fixed;
  inset: 0;
  z-index: 1;
  min-height: 100vh;
  overflow: hidden;
  color: var(--login-text);
  background:
    radial-gradient(
      circle at top left,
      rgba(14, 165, 233, 0.34) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(147, 51, 234, 0.34) 0%,
      transparent 40%
    ),
    linear-gradient(
      135deg,
      var(--login-bg1),
      var(--login-bg2),
      var(--login-bg3)
    );
  transition:
    background 0.5s ease,
    color 0.5s ease;

  &[data-login-theme='light'] {
    --login-bg1: #e0f2fe;
    --login-bg2: #f0f9ff;
    --login-bg3: #fff;
    --login-glass: rgba(255, 255, 255, 0.76);
    --login-text: #111827;
    --login-muted: rgba(17, 24, 39, 0.72);
    --login-card-border: rgba(0, 0, 0, 0.06);
    --login-input-bg: #fff;
    --login-tab-bg: rgba(15, 23, 42, 0.08);
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes pulseGlow {
    0%,
    100% {
      box-shadow: 0 0 30px rgba(14, 165, 233, 0.25);
    }
    50% {
      box-shadow: 0 0 80px rgba(14, 165, 233, 0.55);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes barPulse {
    0%,
    100% {
      opacity: 0.72;
    }
    50% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    overflow-y: auto;
  }
`,N=a.styled.button`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 4;
  padding: 12px 20px;
  border: 1px solid var(--login-card-border);
  border-radius: 18px;
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  color: var(--login-text);
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    top: 10px;
    right: 10px;
    padding: 10px 14px;
  }
`,W=a.styled.div`
  position: relative;
  z-index: 1;
  width: min(1280px, 100%);
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 480px);
  align-items: center;
  gap: 40px;
  padding: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 78px 20px 28px;
  }
`,J=a.styled.section`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: 40px;
  overflow: hidden;
  border: 1px solid var(--login-card-border);
  border-radius: 32px;
  background: var(--login-glass);
  backdrop-filter: blur(24px);
  box-shadow: 0 28px 90px rgba(2, 6, 23, 0.28);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(6, 182, 212, 0.1),
      rgba(59, 130, 246, 0.1),
      rgba(147, 51, 234, 0.1)
    );
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 28px 20px;
    border-radius: 26px;
  }
`,Q=a.styled.div`
  position: relative;
  z-index: 1;
`,Z=a.styled.header`
  text-align: center;
  margin-bottom: 32px;
`,ee=a.styled.h1`
  margin: 0;
  color: transparent;
  background: linear-gradient(90deg, #f97316, #06b6d4);
  background-clip: text;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`,er=a.styled.p`
  margin: 16px 0 0;
  color: var(--login-muted);
`,et=a.styled.div`
  display: flex;
  padding: 8px;
  margin-bottom: 28px;
  border-radius: 18px;
  background: var(--login-tab-bg);
`,en=a.styled.button`
  flex: 1;
  padding: 12px;
  border: 0;
  border-radius: 12px;
  background: ${({$active:e})=>e?"#06b6d4":"transparent"};
  color: ${({$active:e})=>e?"#fff":"var(--login-text)"};
  font-weight: 800;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease;
`,ei=a.styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
`,eo=a.styled.a`
  display: block;
  padding: 12px 14px;
  border: 1px solid var(--login-card-border);
  border-radius: 16px;
  color: var(--login-text);
  text-align: center;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.1);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--login-text);
    transform: translateY(-1px);
    border-color: rgba(34, 211, 238, 0.6);
    text-decoration: none;
  }
`;function ea(e=new Date){let r=e.getHours();return r>=6&&r<18?"light":"dark"}function el(){var e;let r,{authType:t,providers:n}={authType:(r=(0,R.Ay)()).common.conf.AUTH_TYPE,providers:null!=(e=r.common.conf.AUTH_PROVIDERS)?e:[],authRegistration:r.common.conf.AUTH_USER_REGISTRATION},{form:a,loading:l,errorMessage:d,onFinish:s,buildProviderLoginUrl:p}=function(){let[e]=Y.l.useForm(),[r,t]=(0,o.useState)(!1),n=(0,E.wA)(),i=(0,o.useMemo)(()=>{try{var e;return null!=(e=new URLSearchParams(window.location.search).get("next"))?e:""}catch{return""}},[]),a=(0,o.useCallback)(e=>{let r=`/login/${e}`;return i?`${r}${r.includes("?")?"&":"?"}next=${encodeURIComponent(i)}`:r},[i]),l=(0,o.useCallback)(r=>U(function*(){let t=(0,L.t)("Invalid username or password");try{let e=yield(0,z.h4)(r);e.error?t=e.error:e.message&&(t=e.message)}catch{r instanceof Error&&r.message&&(t=r.message)}e.setFields([{name:"password",errors:[t]}]),n((0,T.iB)(t))})(),[n,e]),d=(0,o.useCallback)(r=>U(function*(){t(!0),e.setFields([{name:"password",errors:[]}]);try{yield S.A.post({endpoint:"/api/v1/v2/users/login/",jsonPayload:r,ignoreUnauthorized:!0}),window.location.assign(function(e){if(!e)return"/";try{let r=new URL(e,window.location.origin);if(r.origin===window.location.origin)return`${r.pathname}${r.search}${r.hash}`}catch{}return"/"}(i))}catch(r){yield l(r),e.setFieldsValue({password:""}),t(!1)}})(),[e,i,l]);return{form:e,loading:r,onFinish:d,buildProviderLoginUrl:a}}(),{activeTab:u,setActiveTab:g}=function(e="login"){let[r,t]=(0,o.useState)(e);return{activeTab:r,setActiveTab:t}}("login"),[c,h]=(0,o.useState)(ea),b=(t===X.AuthOauth||t===X.AuthSAML)&&n.length>0;return(0,i.FD)(K,{"data-login-theme":c,children:[(0,i.Y)(N,{type:"button",onClick:()=>h(e=>"dark"===e?"light":"dark"),children:"dark"===c?"夜间模式":"白天模式"}),(0,i.FD)(W,{children:[(0,i.Y)(k,{}),(0,i.Y)(J,{"aria-label":"Superset BI login",children:(0,i.FD)(Q,{children:[(0,i.FD)(Z,{children:[(0,i.Y)(ee,{children:"Superset BI"}),(0,i.Y)(er,{children:"下一代智能数据分析平台"})]}),(0,i.FD)(et,{role:"tablist","aria-label":"Login mode",children:[(0,i.Y)(en,{type:"button",$active:"login"===u,onClick:()=>g("login"),children:"登录"}),(0,i.Y)(en,{type:"button",$active:"register"===u,onClick:()=>g("register"),children:"注册"})]}),"login"===u&&(0,i.FD)(i.FK,{children:[b&&(0,i.Y)(ei,{children:n.map(e=>{var r;return(0,i.FD)(eo,{href:p(e.name),children:["Sign in with ",(r=e.name).charAt(0).toUpperCase()+r.slice(1)]},e.name)})}),(0,i.Y)(D,{form:a,loading:l,errorMessage:d,onFinish:s})]}),"register"===u&&(0,i.Y)(V,{onSuccess:e=>{a.setFieldsValue({username:e}),g("login")}})]})})]})]})}}}]);