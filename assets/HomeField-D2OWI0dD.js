import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t,u as n}from"./motion-aJnBssgJ.js";import{a as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./three-BDgrQGsh.js";import{t as d}from"./useOffscreen-BtPIfivJ.js";var f=e(t(),1),p=n(),m=[[-3.2,-2,2.6,2.2],[-.6,-2,2,2.2],[1.4,-2,1.8,2.2],[-3.2,.2,1.8,1.8],[-1.4,.2,2.8,1.8],[1.4,.2,1.8,1.8]],h=.9;function g(e,t,n,r=22){let i=Math.max(2,Math.round(t.distanceTo(n)*r));for(let r=0;r<=i;r++){let a=r/i;e.push(t.x+(n.x-t.x)*a,t.y+(n.y-t.y)*a,t.z+(n.z-t.z)*a)}}function _(){let e=[],t=(e,t,n)=>new a(e,t,n);for(let[n,r,i,a]of m){let o=[t(n,0,r),t(n+i,0,r),t(n+i,0,r+a),t(n,0,r+a)];for(let t=0;t<4;t++)g(e,o[t],o[(t+1)%4]);for(let n of o)g(e,n,t(n.x,h,n.z),18)}let n=[t(-3.2,h,-2),t(3.2,h,-2),t(3.2,h,2),t(-3.2,h,2)];for(let t=0;t<4;t++)g(e,n[t],n[(t+1)%4]);let r=2.6;for(let n of[-2,2])g(e,t(-3.6,.8,n),t(0,r,n),26),g(e,t(0,r,n),t(3.6,.8,n),26);g(e,t(0,r,-2),t(0,r,2),20);for(let t=0;t<900;t++)e.push((Math.random()-.5)*11,-.02,(Math.random()-.5)*7.5);return new Float32Array(e)}var v=`
  uniform float uTime; uniform float uPix;
  attribute float aSeed;
  varying float vA;
  void main(){
    vec3 p = position;
    float tw = 0.55 + 0.45*sin(uTime*1.3 + aSeed*31.0);
    vA = tw;
    vec4 mv = modelViewMatrix * vec4(p,1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uPix * (1.0 + aSeed*1.4) * (8.0 / -mv.z);
  }`,y=`
  uniform vec3 uColor; varying float vA;
  void main(){
    vec2 c = gl_PointCoord - 0.5; float d = length(c);
    if(d>0.5) discard;
    float a = smoothstep(0.5,0.0,d);
    gl_FragColor = vec4(uColor, a*vA*0.9);
  }`;function b({ink:e}){let t=(0,f.useRef)(null),n=(0,f.useRef)(null),a=(0,f.useMemo)(()=>{let e=new i,t=_();e.setAttribute(`position`,new c(t,3));let n=new Float32Array(t.length/3).map(()=>Math.random());return e.setAttribute(`aSeed`,new c(n,1)),e},[]),u=(0,f.useMemo)(()=>new l({vertexShader:v,fragmentShader:y,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPix:{value:Math.min(window.devicePixelRatio,2)*2.2},uColor:{value:new s(e)}}}),[e]),d=(0,f.useMemo)(()=>{let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,70,72,1)`),n.addColorStop(.25,`rgba(206,40,43,0.65)`),n.addColorStop(1,`rgba(206,40,43,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new r(e)},[]);return o((e,r)=>{let i=e.clock.elapsedTime;if(u.uniforms.uTime.value=i,t.current){let n=-.62+e.pointer.y*.12,a=.55+e.pointer.x*.35+Math.sin(i*.15)*.08;t.current.rotation.x+=(n-t.current.rotation.x)*Math.min(1,r*2.5),t.current.rotation.y+=(a-t.current.rotation.y)*Math.min(1,r*2.5)}n.current&&n.current.children.forEach((e,t)=>{let n=(i*.35+t/m.length)%1,r=n<.55?Math.sin(n/.55*Math.PI):0,a=e.material;a.opacity=.1+r*.75,e.scale.setScalar(.5+r*.6)})}),(0,p.jsxs)(`group`,{ref:t,position:[.4,-.6,0],scale:.9,children:[(0,p.jsx)(`points`,{geometry:a,material:u}),(0,p.jsx)(`group`,{ref:n,children:m.map(([e,t,n,r],i)=>(0,p.jsx)(`sprite`,{position:[e+n/2,.35,t+r/2],children:(0,p.jsx)(`spriteMaterial`,{map:d,transparent:!0,depthWrite:!1,blending:2})},i))})]})}function x({ink:e=`#14110f`}){let{ref:t,active:n}=d();return(0,p.jsx)(`div`,{ref:t,className:`absolute inset-0`,"aria-hidden":!0,children:(0,p.jsx)(u,{dpr:[1,1.75],frameloop:n?`always`:`never`,camera:{position:[0,.4,9],fov:38},gl:{antialias:!1,alpha:!0,powerPreference:`high-performance`},eventSource:typeof document<`u`?document.body:void 0,eventPrefix:`client`,children:(0,p.jsx)(b,{ink:e})})})}export{x as default};