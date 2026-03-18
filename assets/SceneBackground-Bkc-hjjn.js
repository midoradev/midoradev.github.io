import{r as u,j as n,C as b,V as h,u as p,P as M,a as j}from"./three-vendor-D_OFcUOX.js";import{P as l}from"./index-CIG4DRTG.js";function T(r=.08){const t=u.useRef({x:0,y:0}),o=u.useRef({x:0,y:0}),e=u.useRef(null);return u.useEffect(()=>{const a=i=>{t.current.x=i.clientX/globalThis.innerWidth-.5,t.current.y=i.clientY/globalThis.innerHeight-.5},s=i=>{if(i.beta===null||i.gamma===null)return;const f=Math.max(-1,Math.min(1,i.gamma/30))*.5,v=Math.max(-1,Math.min(1,(i.beta-45)/30))*.5;t.current.x=f,t.current.y=v},c=(i,f,v)=>i+(f-i)*v,m=()=>{o.current.x=c(o.current.x,t.current.x,r),o.current.y=c(o.current.y,t.current.y,r),e.current=requestAnimationFrame(m)};return m(),globalThis.addEventListener("mousemove",a),globalThis.addEventListener("deviceorientation",s),()=>{globalThis.removeEventListener("mousemove",a),globalThis.removeEventListener("deviceorientation",s),cancelAnimationFrame(e.current)}},[r]),o}const x=r=>{let t=r;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)};function d({count:r=1800,mouse:t}){const o=u.useRef(),[e]=u.useState(()=>{const a=x(123),s=new Float32Array(r*3);for(let c=0;c<r;c++)s[c*3]=(a()-.5)*12,s[c*3+1]=(a()-.5)*12,s[c*3+2]=(a()-.5)*8;return s});return p(({clock:a})=>{if(!o.current)return;const s=a.getElapsedTime(),c=t.current.x*2,m=t.current.y*2;o.current.rotation.y=s*.018+c*.05,o.current.rotation.x=s*.012+m*.12,o.current.rotation.z=c*.08}),n.jsx(M,{ref:o,positions:e,stride:3,frustumCulled:!1,children:n.jsx(j,{transparent:!0,color:"#6c8fff",size:.022,sizeAttenuation:!0,depthWrite:!1,opacity:.55})})}d.propTypes={count:l.number,mouse:l.object.isRequired};const R=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,E=`
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.0 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    uv.x += uMouse.x * 0.08;
    uv.y += uMouse.y * 0.08;

    float t = uTime * 0.12;
    vec2 q = vec2(fbm(uv + t), fbm(uv + vec2(1.0)));
    vec2 r = vec2(fbm(uv + 2.0*q + vec2(1.7, 9.2) + 0.15*t), fbm(uv + 2.0*q + vec2(8.3, 2.8) + 0.126*t));
    float f = fbm(uv + 2.0*r);

    vec3 col1 = vec3(0.02, 0.04, 0.18);   // deep indigo
    vec3 col2 = vec3(0.08, 0.05, 0.28);   // purple
    vec3 col3 = vec3(0.03, 0.14, 0.32);   // blue
    vec3 col4 = vec3(0.01, 0.08, 0.12);   // dark teal

    vec3 col = mix(col1, col2, clamp(f * f * 4.0, 0.0, 1.0));
    col = mix(col, col3, clamp(length(q), 0.0, 1.0));
    col = mix(col, col4, clamp(length(r.x), 0.0, 1.0));

    // Accent shimmer
    float shimmer = smoothstep(0.4, 0.6, f) * 0.12;
    col += vec3(0.27, 0.35, 1.0) * shimmer;

    gl_FragColor = vec4(col, 1.0);
  }
`;function y({mouse:r}){const t=u.useRef(),o=u.useMemo(()=>({uTime:{value:0},uMouse:{value:new h(0,0)}}),[]);return p(({clock:e})=>{const a=t.current?.material?.uniforms;a&&(a.uTime.value=e.getElapsedTime(),a.uMouse.value.lerp(new h(r.current.x*2,r.current.y*2),.08))}),n.jsxs("mesh",{ref:t,position:[0,0,-4],children:[n.jsx("planeGeometry",{args:[24,16]}),n.jsx("shaderMaterial",{vertexShader:R,fragmentShader:E,uniforms:o})]})}function g({mouse:r}){const t=u.useRef(),[o]=u.useState(()=>{const e=x(456);return Array.from({length:5},(a,s)=>({id:s,pos:[(e()-.5)*8,(e()-.5)*5,(e()-.5)*3-1],radius:.15+e()*.35,speed:.3+e()*.4,phase:e()*Math.PI*2,color:["#6c8fff","#a78bfa","#34d399","#818cf8","#60a5fa"][s%5]}))});return p(({clock:e})=>{if(!t.current)return;const a=r.current.x*2,s=r.current.y*2;t.current.children.forEach((c,m)=>{const i=o[m],f=e.getElapsedTime()*i.speed+i.phase;c.position.y=i.pos[1]+Math.sin(f)*.4+s*.4,c.position.x=i.pos[0]+Math.cos(f*.7)*.2+a*.6,c.position.z=i.pos[2]+Math.cos(f*.5)*.1+s*.3})}),n.jsx("group",{ref:t,children:o.map(e=>n.jsxs("mesh",{position:e.pos,children:[n.jsx("sphereGeometry",{args:[e.radius,16,16]}),n.jsx("meshStandardMaterial",{color:e.color,emissive:e.color,emissiveIntensity:.8,transparent:!0,opacity:.18,roughness:0,metalness:0})]},e.id))})}function F(){const r=T(.05);return n.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"},children:n.jsxs(b,{camera:{position:[0,0,5],fov:60},gl:{antialias:!1,powerPreference:"high-performance",alpha:!1},dpr:[1,1.5],children:[n.jsx(y,{mouse:r}),n.jsx(d,{mouse:r}),n.jsx(g,{mouse:r}),n.jsx("ambientLight",{intensity:.3}),n.jsx("pointLight",{position:[3,3,2],intensity:.6,color:"#6c8fff"}),n.jsx("pointLight",{position:[-3,-2,1],intensity:.4,color:"#a78bfa"})]})})}y.propTypes={mouse:l.shape({current:l.shape({x:l.number,y:l.number})}).isRequired};g.propTypes={mouse:l.shape({current:l.shape({x:l.number,y:l.number})}).isRequired};export{F as default};
