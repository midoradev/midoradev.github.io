import{j as r,a as u}from"./animation-vendor-BYpdhdBP.js";import{C as g,u as m,P as j,a as b}from"./three-utils-DW14izZZ.js";import{P as c}from"./index-DiyaNzmf.js";import{u as M}from"./useMouseParallax-BQ2Is8AJ.js";import{g as v}from"./three-core-Buhe0Af_.js";const h=t=>{let o=t;return()=>(o=(o*1664525+1013904223)%4294967296,o/4294967296)};function x({count:t=1800,mouse:o}){const i=u.useRef(),[e]=u.useState(()=>{const n=h(123),s=new Float32Array(t*3);for(let a=0;a<t;a++)s[a*3]=(n()-.5)*12,s[a*3+1]=(n()-.5)*12,s[a*3+2]=(n()-.5)*8;return s});return m(({clock:n})=>{if(!i.current)return;const s=n.getElapsedTime(),a=o.current.x*2,l=o.current.y*2;i.current.rotation.y=s*.018+a*.05,i.current.rotation.x=s*.012+l*.12,i.current.rotation.z=a*.08}),r.jsx(j,{ref:i,positions:e,stride:3,frustumCulled:!1,children:r.jsx(b,{transparent:!0,color:"#6c8fff",size:.022,sizeAttenuation:!0,depthWrite:!1,opacity:.55})})}x.propTypes={count:c.number,mouse:c.object.isRequired};const T=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,P=`
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
`;function d({mouse:t}){const o=u.useRef(),i=u.useMemo(()=>({uTime:{value:0},uMouse:{value:new v(0,0)}}),[]);return m(({clock:e})=>{const n=o.current?.material?.uniforms;n&&(n.uTime.value=e.getElapsedTime(),n.uMouse.value.lerp(new v(t.current.x*2,t.current.y*2),.08))}),r.jsxs("mesh",{ref:o,position:[0,0,-4],children:[r.jsx("planeGeometry",{args:[24,16]}),r.jsx("shaderMaterial",{vertexShader:T,fragmentShader:P,uniforms:i})]})}function y({mouse:t}){const o=u.useRef(),[i]=u.useState(()=>{const e=h(456);return Array.from({length:5},(n,s)=>({id:s,pos:[(e()-.5)*8,(e()-.5)*5,(e()-.5)*3-1],radius:.15+e()*.35,speed:.3+e()*.4,phase:e()*Math.PI*2,color:["#6c8fff","#a78bfa","#34d399","#818cf8","#60a5fa"][s%5]}))});return m(({clock:e})=>{if(!o.current)return;const n=t.current.x*2,s=t.current.y*2;o.current.children.forEach((a,l)=>{const f=i[l],p=e.getElapsedTime()*f.speed+f.phase;a.position.y=f.pos[1]+Math.sin(p)*.4+s*.4,a.position.x=f.pos[0]+Math.cos(p*.7)*.2+n*.6,a.position.z=f.pos[2]+Math.cos(p*.5)*.1+s*.3})}),r.jsx("group",{ref:o,children:i.map(e=>r.jsxs("mesh",{position:e.pos,children:[r.jsx("sphereGeometry",{args:[e.radius,16,16]}),r.jsx("meshStandardMaterial",{color:e.color,emissive:e.color,emissiveIntensity:.8,transparent:!0,opacity:.18,roughness:0,metalness:0})]},e.id))})}function w(){const{smooth:t}=M(.05);return r.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"},children:r.jsxs(g,{camera:{position:[0,0,5],fov:60},gl:{antialias:!1,powerPreference:"high-performance",alpha:!1},dpr:[1,1.5],children:[r.jsx(d,{mouse:t}),r.jsx(x,{mouse:t}),r.jsx(y,{mouse:t}),r.jsx("ambientLight",{intensity:.3}),r.jsx("pointLight",{position:[3,3,2],intensity:.6,color:"#6c8fff"}),r.jsx("pointLight",{position:[-3,-2,1],intensity:.4,color:"#a78bfa"})]})})}d.propTypes={mouse:c.shape({current:c.shape({x:c.number,y:c.number})}).isRequired};y.propTypes={mouse:c.shape({current:c.shape({x:c.number,y:c.number})}).isRequired};export{w as default};
