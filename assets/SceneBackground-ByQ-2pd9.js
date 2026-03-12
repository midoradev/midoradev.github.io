import{r as a,j as o,C as d,V as v,u as m,P as g,a as y}from"./three-vendor-D_OFcUOX.js";import{P as p}from"./index-CfkmTMR3.js";function j(t=.08){const r=a.useRef({x:0,y:0}),n=a.useRef({x:0,y:0}),e=a.useRef(null);return a.useEffect(()=>{const i=u=>{r.current.x=u.clientX/globalThis.innerWidth-.5,r.current.y=u.clientY/globalThis.innerHeight-.5},s=(u,l,f)=>u+(l-u)*f,c=()=>{n.current.x=s(n.current.x,r.current.x,t),n.current.y=s(n.current.y,r.current.y,t),e.current=requestAnimationFrame(c)};return c(),globalThis.addEventListener("mousemove",i),()=>{globalThis.removeEventListener("mousemove",i),cancelAnimationFrame(e.current)}},[t]),n}const h=t=>{let r=t;return()=>(r=(r*1664525+1013904223)%4294967296,r/4294967296)};function x({count:t=1800,mouse:r}){const n=a.useRef(),[e]=a.useState(()=>{const i=h(123),s=new Float32Array(t*3);for(let c=0;c<t;c++)s[c*3]=(i()-.5)*12,s[c*3+1]=(i()-.5)*12,s[c*3+2]=(i()-.5)*8;return s});return m(({clock:i})=>{if(!n.current)return;const s=i.getElapsedTime(),c=r.current.x*2,u=r.current.y*2;n.current.rotation.y=s*.018+c*.05,n.current.rotation.x=s*.012+u*.12,n.current.rotation.z=c*.08}),o.jsx(g,{ref:n,positions:e,stride:3,frustumCulled:!1,children:o.jsx(y,{transparent:!0,color:"#6c8fff",size:.022,sizeAttenuation:!0,depthWrite:!1,opacity:.55})})}x.propTypes={count:p.number,mouse:p.object.isRequired};const M=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,b=`
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
`;function T({mouse:t}){const r=a.useRef(),n=a.useMemo(()=>({uTime:{value:0},uMouse:{value:new v(0,0)}}),[]);return m(({clock:e})=>{const i=r.current?.material?.uniforms;i&&(i.uTime.value=e.getElapsedTime(),i.uMouse.value.lerp(new v(t.current.x*2,t.current.y*2),.08))}),o.jsxs("mesh",{ref:r,position:[0,0,-4],children:[o.jsx("planeGeometry",{args:[24,16]}),o.jsx("shaderMaterial",{vertexShader:M,fragmentShader:b,uniforms:n})]})}function R({mouse:t}){const r=a.useRef(),[n]=a.useState(()=>{const e=h(456);return Array.from({length:5},(i,s)=>({id:s,pos:[(e()-.5)*8,(e()-.5)*5,(e()-.5)*3-1],radius:.15+e()*.35,speed:.3+e()*.4,phase:e()*Math.PI*2,color:["#6c8fff","#a78bfa","#34d399","#818cf8","#60a5fa"][s%5]}))});return m(({clock:e})=>{if(!r.current)return;const i=t.current.x*2,s=t.current.y*2;r.current.children.forEach((c,u)=>{const l=n[u],f=e.getElapsedTime()*l.speed+l.phase;c.position.y=l.pos[1]+Math.sin(f)*.4+s*.4,c.position.x=l.pos[0]+Math.cos(f*.7)*.2+i*.6,c.position.z=l.pos[2]+Math.cos(f*.5)*.1+s*.3})}),o.jsx("group",{ref:r,children:n.map(e=>o.jsxs("mesh",{position:e.pos,children:[o.jsx("sphereGeometry",{args:[e.radius,16,16]}),o.jsx("meshStandardMaterial",{color:e.color,emissive:e.color,emissiveIntensity:.8,transparent:!0,opacity:.18,roughness:0,metalness:0})]},e.id))})}function F(){const t=j(.05);return o.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"},children:o.jsxs(d,{camera:{position:[0,0,5],fov:60},gl:{antialias:!1,powerPreference:"high-performance",alpha:!1},dpr:[1,1.5],children:[o.jsx(T,{mouse:t}),o.jsx(x,{mouse:t}),o.jsx(R,{mouse:t}),o.jsx("ambientLight",{intensity:.3}),o.jsx("pointLight",{position:[3,3,2],intensity:.6,color:"#6c8fff"}),o.jsx("pointLight",{position:[-3,-2,1],intensity:.4,color:"#a78bfa"})]})})}export{F as default};
