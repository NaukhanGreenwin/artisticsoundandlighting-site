import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t,u as n}from"./motion-aJnBssgJ.js";import{c as r,i,n as a,o,r as s,s as c,t as l}from"./three-BDgrQGsh.js";import{t as u}from"./useOffscreen-BtPIfivJ.js";var d=e(t(),1),f=n(),p=`
  varying float vY; varying vec3 vN; varying vec3 vV;
  void main(){
    vY = uv.y;
    vec4 mv = modelViewMatrix * vec4(position,1.0);
    vN = normalize(normalMatrix * normal);
    vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }`,m=`
  uniform vec3 uColor; uniform float uI;
  varying float vY; varying vec3 vN; varying vec3 vV;
  void main(){
    float facing = abs(dot(vN, vV));
    float core = pow(facing, 1.5);         // soft silhouette edges
    float fall = pow(vY, 1.3);             // fade toward the floor
    float a = core * fall * uI * 0.42;
    gl_FragColor = vec4(uColor, a);
  }`;function h({x:e,color:t,speed:n,phase:r,tilt:i}){let s=(0,d.useRef)(null),l=(0,d.useMemo)(()=>new c({vertexShader:p,fragmentShader:m,transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uColor:{value:new o(t)},uI:{value:1}}}),[t]);return a(e=>{let t=e.clock.elapsedTime;s.current&&(s.current.rotation.z=Math.sin(t*n+r)*.42+i+e.pointer.x*-.18,s.current.rotation.x=Math.cos(t*n*.7+r)*.18+e.pointer.y*.08,l.uniforms.uI.value=.75+Math.sin(t*1.7+r*3)*.25)}),(0,f.jsxs)(`group`,{ref:s,position:[e,5.8,-1.5],children:[(0,f.jsx)(`mesh`,{position:[0,-4.75,0],material:l,children:(0,f.jsx)(`coneGeometry`,{args:[2.1,9.5,64,1,!0]})}),(0,f.jsxs)(`mesh`,{position:[0,0,0],children:[(0,f.jsx)(`sphereGeometry`,{args:[.1,16,16]}),(0,f.jsx)(`meshBasicMaterial`,{color:t})]})]})}var g=`
  uniform float uTime; uniform vec2 uPtr; uniform float uPix;
  varying float vH;
  void main(){
    vec3 p = position;
    float d = distance(p.xz, uPtr);
    float w = sin(d*2.2 - uTime*2.4) * exp(-d*0.22) * 0.38;
    float base = sin(p.x*0.7 + uTime*0.8)*0.12 + cos(p.z*0.9 + uTime*0.6)*0.1;
    p.y += w + base;
    vH = clamp((w+base)*2.2+0.5, 0.0, 1.0);
    vec4 mv = modelViewMatrix * vec4(p,1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uPix * (13.0 / -mv.z);
  }`,_=`
  varying float vH;
  void main(){
    float d = length(gl_PointCoord-0.5); if(d>0.5) discard;
    vec3 warm = vec3(1.0,0.81,0.59); vec3 red = vec3(0.88,0.21,0.23);
    vec3 c = mix(red*0.6, warm, vH);
    gl_FragColor = vec4(c, smoothstep(0.5,0.0,d)*(0.35+vH*0.65));
  }`;function v(){let e=(0,d.useRef)(new r),{geo:t,mat:n}=(0,d.useMemo)(()=>{let e=new Float32Array(21600),t=0;for(let n=0;n<60;n++)for(let r=0;r<120;r++)e[t++]=(r/119-.5)*22,e[t++]=0,e[t++]=(n/59-.5)*10;let n=new i;return n.setAttribute(`position`,new s(e,3)),{geo:n,mat:new c({vertexShader:g,fragmentShader:_,transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uPtr:{value:new r},uPix:{value:Math.min(window.devicePixelRatio,2)*2.4}}})}},[]);return a((t,i)=>{n.uniforms.uTime.value=t.clock.elapsedTime,e.current.lerp(new r(t.pointer.x*9,-t.pointer.y*3+1),Math.min(1,i*3)),n.uniforms.uPtr.value.copy(e.current)}),(0,f.jsx)(`points`,{geometry:t,material:n,position:[0,-2.2,0]})}function y(){let{ref:e,active:t}=u();return(0,f.jsx)(`div`,{ref:e,className:`absolute inset-0`,"aria-hidden":!0,children:(0,f.jsxs)(l,{dpr:[1,1.75],frameloop:t?`always`:`never`,camera:{position:[0,.6,10],fov:42},gl:{antialias:!1,alpha:!0,powerPreference:`high-performance`},eventSource:typeof document<`u`?document.body:void 0,eventPrefix:`client`,children:[(0,f.jsx)(h,{x:-5.5,color:`#ffcf96`,speed:.35,phase:0,tilt:-.25}),(0,f.jsx)(h,{x:-1.8,color:`#ff4a4d`,speed:.42,phase:1.7,tilt:.05}),(0,f.jsx)(h,{x:1.8,color:`#ffe2bd`,speed:.38,phase:3.1,tilt:-.05}),(0,f.jsx)(h,{x:5.5,color:`#ff4a4d`,speed:.31,phase:4.4,tilt:.25}),(0,f.jsx)(v,{})]})})}export{y as default};