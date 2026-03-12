const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SceneBackground-ByQ-2pd9.js","assets/three-vendor-D_OFcUOX.js"])))=>i.map(i=>d[i]);
import{r as o,j as e,g as V,_ as F,c as B}from"./three-vendor-D_OFcUOX.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();function W(){const t=o.useRef(null),a=o.useRef(null),i=o.useRef({x:0,y:0}),r=o.useRef({x:0,y:0}),s=o.useRef(null),n=o.useRef(!1);return o.useEffect(()=>{const p=t.current,c=a.current;if(!p||!c)return;const m=d=>{i.current={x:d.clientX,y:d.clientY},p.style.transform=`translate(${d.clientX}px, ${d.clientY}px) translate(-50%, -50%)`},u=(d,b,O)=>d+(b-d)*O,g=()=>{r.current.x=u(r.current.x,i.current.x,.1),r.current.y=u(r.current.y,i.current.y,.1),c.style.transform=`translate(${r.current.x}px, ${r.current.y}px) translate(-50%, -50%)`,s.current=requestAnimationFrame(g)};g();const h=()=>{n.current=!0,p.style.transform+=" scale(0)",c.style.width="60px",c.style.height="60px",c.style.borderColor="var(--accent)",c.style.backgroundColor="var(--accent-dim)"},x=()=>{n.current=!1,c.style.width="32px",c.style.height="32px",c.style.borderColor="rgba(255,255,255,0.4)",c.style.backgroundColor="transparent"};document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(d=>{d.addEventListener("mouseenter",h),d.addEventListener("mouseleave",x)}),globalThis.addEventListener("mousemove",m);const j=new MutationObserver(()=>{document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(b=>{b.removeEventListener("mouseenter",h),b.removeEventListener("mouseleave",x),b.addEventListener("mouseenter",h),b.addEventListener("mouseleave",x)})});return j.observe(document.body,{childList:!0,subtree:!0}),()=>{globalThis.removeEventListener("mousemove",m),cancelAnimationFrame(s.current),j.disconnect()}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 6px; height: 6px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transition: transform 0.05s linear;
          box-shadow: 0 0 10px var(--accent-glow), 0 0 20px var(--accent-glow);
        }
        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 32px; height: 32px;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          transition: width 0.25s var(--transition-spring, ease),
                      height 0.25s var(--transition-spring, ease),
                      border-color 0.25s ease,
                      background-color 0.25s ease;
        }
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none; }
          body { cursor: auto; }
        }
      `}),e.jsx("div",{ref:t,className:"cursor-dot","aria-hidden":"true"}),e.jsx("div",{ref:a,className:"cursor-ring","aria-hidden":"true"})]})}function N(t={}){const[a,i]=o.useState(!1),r=o.useRef(null),s=o.useRef(null),n=p=>{if(s.current&&(s.current.disconnect(),s.current=null),p){r.current=p;const c=new IntersectionObserver(([m])=>{m.isIntersecting?(i(!0),t.once!==!1&&(c.disconnect(),s.current=null)):t.once===!1&&i(!1)},{threshold:t.threshold??.15,rootMargin:t.rootMargin??"0px"});c.observe(p),s.current=c}};return o.useEffect(()=>()=>{s.current&&s.current.disconnect()},[]),[n,a]}const X=[{label:"Discord",href:"https://discord.com/users/897838071922446466",icon:"fa-brands fa-discord"},{label:"X",href:"https://x.com/lncvzz",icon:"fa-brands fa-x-twitter"},{label:"GitHub",href:"https://github.com/midoradev",icon:"fa-brands fa-github"},{label:"YouTube",href:"https://youtube.com/@lncvz",icon:"fa-brands fa-youtube"},{label:"Coffee",href:"https://buymeacoffee.com/7ncvz",icon:"fa-solid fa-mug-saucer"}],E={online:"#43b581",idle:"#faa61a",dnd:"#f04747",offline:"#747f8d"},I=["Developer","Builder","Creator","Engineer"];function q(){const[t,a]=N(),[i,r]=o.useState("offline"),[s,n]=o.useState("7ncvz"),[p,c]=o.useState("/midora.svg"),[m,u]=o.useState(0),[g,h]=o.useState(!0);return o.useEffect(()=>{const x=async()=>{try{const d=await(await fetch("https://api.lanyard.rest/v1/users/897838071922446466")).json();r(d.data?.discord_status||"offline");const b=d.data?.discord_user;b?.avatar&&c(`https://cdn.discordapp.com/avatars/897838071922446466/${b.avatar}?size=256`),n(b?.global_name||b?.username||"7ncvz")}catch{}};x();const y=setInterval(x,3e4);return()=>clearInterval(y)},[]),o.useEffect(()=>{const x=setInterval(()=>{h(!1)},2400);return()=>clearInterval(x)},[]),o.useEffect(()=>{if(g)return;const x=setTimeout(()=>{u(y=>(y+1)%I.length),h(!0)},300);return()=>clearTimeout(x)},[g]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 24px 60px;
          position: relative;
          z-index: 2;
        }
        .hero-content {
          max-width: 720px;
          text-align: center;
        }

        /* Avatar with pulse ring */
        .hero-avatar-wrap {
          display: inline-flex;
          position: relative;
          margin-bottom: 32px;
        }
        .hero-avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--border-bright);
          box-shadow: 0 0 0 6px var(--accent-dim), 0 0 40px var(--accent-glow);
          transition: box-shadow var(--transition-med);
        }
        .hero-avatar-wrap:hover .hero-avatar {
          box-shadow: 0 0 0 8px var(--accent-dim), 0 0 60px var(--accent-glow);
        }
        .hero-status-dot {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 3px solid var(--bg);
          transition: background var(--transition-med);
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .hero-status-dot::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          animation: pulse-ring 1.8s ease-out infinite;
          background: inherit;
        }

        /* Greeting chip */
        .hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 20px;
          background: var(--accent-dim);
          border: 1px solid var(--accent-glow);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s 0.1s ease, transform 0.6s 0.1s ease;
        }
        .hero-chip.visible { opacity: 1; transform: none; }

        /* Main heading */
        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(52px, 10vw, 108px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: var(--text-primary);
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s 0.2s ease, transform 0.7s 0.2s ease;
        }
        .hero-name.visible { opacity: 1; transform: none; }

        /* Tagline */
        .hero-tagline-wrap {
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .hero-tagline {
          font-size: clamp(18px, 3vw, 28px);
          font-weight: 300;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .hero-tagline.hidden { opacity: 0; transform: translateY(8px); }

        .hero-tagline .accent { color: var(--accent); font-weight: 600; }

        /* Description */
        .hero-desc {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 420px;
          margin: 0 auto 40px;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s 0.5s ease, transform 0.6s 0.5s ease;
        }
        .hero-desc.visible { opacity: 1; transform: none; }

        /* CTA buttons */
        .hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s 0.65s ease, transform 0.6s 0.65s ease;
        }
        .hero-cta.visible { opacity: 1; transform: none; }

        .btn-primary {
          padding: 12px 28px;
          border-radius: 40px;
          background: var(--accent);
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.02em;
          box-shadow: 0 0 30px var(--accent-glow);
          transition: transform var(--transition-spring), box-shadow var(--transition-med);
        }
        .btn-primary:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 50px var(--accent-glow);
        }

        .btn-ghost {
          padding: 12px 28px;
          border-radius: 40px;
          background: transparent;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 14px;
          border: 1px solid var(--border-bright);
          transition: border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-spring);
        }
        .btn-ghost:hover {
          color: var(--text-primary);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        /* Socials */
        .hero-socials {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s 0.8s ease, transform 0.6s 0.8s ease;
        }
        .hero-socials.visible { opacity: 1; transform: none; }
        
        .socials-icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .socials-icons a {
          color: var(--text-muted);
          font-size: 18px;
          transition: color var(--transition-fast), transform var(--transition-spring);
        }
        .socials-icons a:hover {
          color: var(--text-primary);
          transform: translateY(-3px) scale(1.15);
        }

        .socials-tooltip {
          font-size: 13px;
          color: var(--text-muted);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
          max-width: 300px;
          line-height: 1.4;
          font-weight: 400;
        }
        .hero-socials:hover .socials-tooltip {
          opacity: 0.7;
          transform: translateY(0);
        }

        /* Scroll hint */

        .scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0.4;
          animation: scrollBounce 2s ease-in-out infinite;
        }
        .scroll-hint span {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .scroll-hint svg { color: var(--text-muted); }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}),e.jsxs("section",{id:"hero",className:"hero-section",ref:t,children:[e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-avatar-wrap",children:[e.jsx("img",{src:p,onError:()=>c("/midora.svg"),alt:"Profile",className:"hero-avatar"}),e.jsx("span",{className:"hero-status-dot",style:{background:E[i]??E.offline},title:i})]}),e.jsx("h1",{className:`hero-name ${a?"visible":""}`,children:s}),e.jsx("div",{className:"hero-tagline-wrap",children:e.jsxs("p",{className:`hero-tagline ${g?"":"hidden"}`,children:["Self-taught ",e.jsx("span",{className:"accent",children:I[m]})]})}),e.jsx("p",{className:`hero-desc ${a?"visible":""}`,children:"Building fast, clean, and powerful software from Vietnam. Passionate about AI, developer tooling, creative bots, open source and more."}),e.jsxs("div",{className:`hero-socials ${a?"visible":""}`,children:[e.jsx("div",{className:"socials-icons",children:X.map(x=>e.jsx("a",{href:x.href,target:"_blank",rel:"noopener noreferrer","aria-label":x.label,children:e.jsx("i",{className:x.icon})},x.label))}),e.jsx("p",{className:"socials-tooltip",children:"Open to collabs, cool projects, or just chatting about code. Find me on any of these platforms"})]})]}),e.jsxs("div",{className:"scroll-hint",children:[e.jsx("span",{children:"Scroll"}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{d:"M8 3v10M4 9l4 4 4-4"})})]})]})]})}var S={exports:{}},z,T;function U(){if(T)return z;T=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return z=t,z}var $,R;function G(){if(R)return $;R=1;var t=U();function a(){}function i(){}return i.resetWarningCache=a,$=function(){function r(p,c,m,u,g,h){if(h!==t){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function s(){return r}var n={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n},$}var M;function H(){return M||(M=1,S.exports=G()()),S.exports}var J=H();const l=V(J);function k(t){const a=Math.floor(Math.max(0,t)/1e3),i=Math.floor(a/60),r=a%60;return`${i}:${r.toString().padStart(2,"0")}`}function P(t){if(t<0)return"0:00";const a=Math.floor(t/1e3),i=Math.floor(a/3600),r=Math.floor(a%3600/60),s=a%60;return i>0?`${i}:${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`:`${r}:${s.toString().padStart(2,"0")}`}const K="_card_f0z26_1",Q="_inner_f0z26_8",Z="_icon_f0z26_14",ee="_info_f0z26_22",te="_name_f0z26_29",se="_detail_f0z26_35",re="_state_f0z26_43",ae="_elapsed_f0z26_48",w={card:K,inner:Q,icon:Z,info:ee,name:te,detail:se,state:re,elapsed:ae};function A({app:t}){const[a,i]=o.useState("");o.useEffect(()=>{if(!t?.timestamps?.start)return;const s=t.timestamps.start,n=()=>i(P(Math.max(0,Date.now()-s)));n();const p=setInterval(n,900);return()=>clearInterval(p)},[t?.timestamps?.start]);const r=t.assets?.large_image&&t.application_id?`https://cdn.discordapp.com/app-assets/${t.application_id}/${t.assets.large_image}.png`:null;return e.jsx("div",{className:w.card,children:e.jsxs("div",{className:w.inner,children:[r&&e.jsx("img",{src:r,alt:t.name,className:w.icon,onError:s=>{s.target.style.display="none"}}),e.jsxs("div",{className:w.info,children:[e.jsx("span",{className:w.name,children:t.name}),t.details&&e.jsx("span",{className:w.detail,children:t.details}),t.state&&e.jsx("span",{className:w.state,children:t.state}),a&&e.jsxs("span",{className:w.elapsed,children:["🎮 ",a]})]})]})})}A.propTypes={app:l.shape({name:l.string,details:l.string,state:l.string,application_id:l.string,timestamps:l.shape({start:l.number}),assets:l.shape({large_image:l.string})})};const ie="_card_1k8wk_1",ne="_badge_1k8wk_19",oe="_inner_1k8wk_31",ce="_art_1k8wk_37",le="_info_1k8wk_46",pe="_title_1k8wk_54",de="_subtitle_1k8wk_63",me="_progressRow_1k8wk_71",fe="_track_1k8wk_78",xe="_fill_1k8wk_86",ue="_time_1k8wk_93",f={card:ie,badge:ne,inner:oe,art:ce,info:le,title:pe,subtitle:de,progressRow:me,track:fe,fill:xe,time:ue};function D({data:t}){const[a,i]=o.useState(0),[r,s]=o.useState(0),[n,p]=o.useState(0);return o.useEffect(()=>{if(!t?.timestamps?.start||!t?.timestamps?.end)return;const c=()=>{const u=Date.now(),g=t.timestamps.end-t.timestamps.start,h=u-t.timestamps.start;i(Math.min(100,Math.max(0,h/g*100))),s(h),p(g)};c();const m=setInterval(c,200);return()=>clearInterval(m)},[t?.timestamps]),t?e.jsxs("div",{className:f.card,children:[e.jsxs("div",{className:f.badge,style:{color:"#1db954"},children:[e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"})}),"Spotify"]}),e.jsxs("div",{className:f.inner,children:[e.jsx("img",{src:t.albumArt,alt:"Album Art",className:f.art,onError:c=>{c.target.style.display="none"}}),e.jsxs("div",{className:f.info,children:[e.jsx("span",{className:f.title,children:t.name}),e.jsx("span",{className:f.subtitle,children:t.artist}),e.jsxs("div",{className:f.progressRow,children:[e.jsx("span",{className:f.time,children:k(r)}),e.jsx("div",{className:f.track,children:e.jsx("div",{className:f.fill,style:{width:`${a}%`,background:"#1db954"}})}),e.jsx("span",{className:f.time,children:k(n)})]})]})]})]}):null}D.propTypes={data:l.shape({name:l.string,artist:l.string,albumArt:l.string,timestamps:l.shape({start:l.number,end:l.number})})};function he(t){if(!t)return"/planet.svg";if(t.startsWith("mp:external/")){const a=t.split("/"),i=a.findIndex(r=>r==="proxy.musicpresence.io");if(i!==-1)return`https://proxy.musicpresence.io/${a.slice(i+1).join("/")}`}return t}function L({data:t}){const[a,i]=o.useState(0),[r,s]=o.useState(0),[n,p]=o.useState(0);return o.useEffect(()=>{if(!t?.timestamps?.start||!t?.timestamps?.end)return;const c=()=>{const u=Date.now(),g=t.timestamps.end-t.timestamps.start,h=u-t.timestamps.start;i(Math.min(100,Math.max(0,h/g*100))),s(h),p(g)};c();const m=setInterval(c,200);return()=>clearInterval(m)},[t?.timestamps]),t?e.jsxs("div",{className:f.card,children:[e.jsxs("div",{className:f.badge,style:{color:"#fc3c44"},children:[e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a5.494 5.494 0 00-.39 1.548c-.06.34-.077.684-.1 1.028-.013.183-.01.367-.01.55v12.652c0 .64.074 1.258.24 1.878.232.874.62 1.632 1.201 2.286.697.788 1.516 1.286 2.562 1.515.324.07.66.105 1.002.135.36.03.72.032 1.08.032h12.4c.464-.018.925-.022 1.385-.078 1.155-.142 2.16-.596 2.975-1.45.765-.8 1.19-1.76 1.35-2.812.097-.63.137-1.273.137-1.91V8.002c.003-.625-.029-1.25-.073-1.878zM12.068 19.52a.766.766 0 01-.38-.1L6.962 16.79a.746.746 0 01-.382-.66V9.75c0-.275.144-.527.382-.66l4.726-2.63a.772.772 0 01.764 0l4.726 2.63c.238.133.382.385.382.66v6.38a.746.746 0 01-.382.66l-4.726 2.63a.766.766 0 01-.384.1z"})}),"Apple Music"]}),e.jsxs("div",{className:f.inner,children:[e.jsx("img",{src:he(t.assets?.large_image),alt:"Album Art",className:f.art,onError:c=>{c.target.style.display="none"}}),e.jsxs("div",{className:f.info,children:[e.jsx("span",{className:f.title,children:t.details}),e.jsx("span",{className:f.subtitle,children:t.state}),e.jsxs("div",{className:f.progressRow,children:[e.jsx("span",{className:f.time,children:k(r)}),e.jsx("div",{className:f.track,children:e.jsx("div",{className:f.fill,style:{width:`${a}%`,background:"linear-gradient(90deg,#fc3c44,#ff6b9d)"}})}),e.jsx("span",{className:f.time,children:k(n)})]})]})]})]}):null}L.propTypes={data:l.shape({details:l.string,state:l.string,assets:l.shape({large_image:l.string}),timestamps:l.shape({start:l.number,end:l.number})})};const ge="_card_1dmd8_1",ve="_badge_1dmd8_18",be="_dot_1dmd8_30",ye="_inner_1dmd8_38",je="_icon_1dmd8_44",we="_info_1dmd8_51",_e="_ide_1dmd8_59",Ne="_detail_1dmd8_65",ke="_state_1dmd8_73",Se="_elapsed_1dmd8_81",ze="_iconWrapper_1dmd8_88",$e="_ideIcon_1dmd8_96",v={card:ge,badge:ve,dot:be,inner:ye,icon:je,info:we,ide:_e,detail:Ne,state:ke,elapsed:Se,iconWrapper:ze,ideIcon:$e};function C(t,a){if(!t)return null;if(t.startsWith("mp:external/")){const i=t.split("/"),r=i[2],s=i.slice(3).join("/");return`${r}://${s}`}return a?`https://cdn.discordapp.com/app-assets/${a}/${t}.png`:null}function Y({data:t}){const[a,i]=o.useState("0:00");if(o.useEffect(()=>{if(!t?.timestamps?.start)return;const n=t.timestamps.start,p=()=>i(P(Math.max(0,Date.now()-n)));p();const c=setInterval(p,900);return()=>clearInterval(c)},[t]),!t)return null;const r=C(t.assets?.large_image,t.application_id),s=t.assets?.small_image?C(t.assets.small_image,t.application_id):"https://cdn.simpleicons.org/visualstudiocode";return e.jsxs("div",{className:v.card,children:[e.jsxs("div",{className:v.badge,children:[e.jsx("span",{className:v.dot})," Coding"]}),e.jsxs("div",{className:v.inner,children:[r&&e.jsxs("div",{className:v.iconWrapper,children:[e.jsx("img",{src:r,alt:"file icon",className:v.icon}),e.jsx("img",{src:s,alt:"IDE",className:v.ideIcon})]}),e.jsxs("div",{className:v.info,children:[e.jsx("span",{className:v.ide,children:t.assets?.small_text??"Visual Studio Code"}),e.jsx("span",{className:v.detail,children:t.details??"Editing code"}),e.jsx("span",{className:v.state,children:t.state??"No file open"}),e.jsxs("span",{className:v.elapsed,children:["🧑‍💻 ",a]})]})]})]})}Y.propTypes={data:l.shape({details:l.string,state:l.string,application_id:l.string,timestamps:l.shape({start:l.number}),assets:l.shape({large_image:l.string,small_text:l.string})})};const Ee="897838071922446466";function Ie(){const[t,a]=N(),[i,r]=o.useState({spotify:null,appleMusic:null,apps:[]});o.useEffect(()=>{const m=async()=>{try{const h=await(await fetch(`https://api.lanyard.rest/v1/users/${Ee}`)).json(),x=h.data?.activities||[],y={spotify:null,appleMusic:null,apps:[]};if(h.data?.listening_to_spotify&&h.data.spotify){const d=h.data.spotify;y.spotify={name:d.song,artist:d.artist,albumArt:d.album_art_url,timestamps:d.timestamps}}const j=x.find(d=>d.name==="Apple Music"&&d.type===2);j&&(y.appleMusic={details:j.details,state:j.state,assets:j.assets,timestamps:j.timestamps}),y.apps=x.filter(d=>d.type===0).map(d=>({name:d.name,state:d.state,details:d.details,timestamps:d.timestamps,assets:d.assets,application_id:d.application_id})),r(y)}catch{}};m();const u=setInterval(m,15e3);return()=>clearInterval(u)},[]);const s=i.spotify||i.appleMusic||i.apps.length>0,n=m=>{const u=m.toLowerCase();return u==="visual studio code"||u==="code"},p=i.apps.find(m=>n(m.name)),c=i.apps.filter(m=>!n(m.name));return s?e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .activity-section {
          padding: 80px 24px;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .activity-inner {
          width: 100%;
          max-width: 500px;
        }
        .activity-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .activity-wrap {
          opacity: 0;
          transform: translateY(16px);
          transition: transform var(--transition-med), opacity var(--transition-med);
        }
        .activity-wrap.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsx("section",{className:"activity-section",ref:t,children:e.jsx("div",{className:"activity-inner",children:e.jsxs("div",{className:"activity-cards",children:[i.spotify&&e.jsx("div",{className:`activity-wrap ${a?"visible":""}`,style:{transitionDelay:"0.1s"},children:e.jsx(D,{data:i.spotify})}),i.appleMusic&&e.jsx("div",{className:`activity-wrap ${a?"visible":""}`,style:{transitionDelay:"0.2s"},children:e.jsx(L,{data:i.appleMusic})}),p&&e.jsx("div",{className:`activity-wrap ${a?"visible":""}`,style:{transitionDelay:"0.3s"},children:e.jsx(Y,{data:p})}),c.map((m,u)=>e.jsx("div",{className:`activity-wrap ${a?"visible":""}`,style:{transitionDelay:`${.4+u*.1}s`},children:e.jsx(A,{app:m})},`${m.name}-${u}`))]})})})]}):null}function Te({project:t,visible:a,delay:i}){const r=o.useRef(null),s=p=>{const c=r.current;if(!c)return;const m=c.getBoundingClientRect(),u=(p.clientX-m.left)/m.width-.5,g=(p.clientY-m.top)/m.height-.5;c.style.transform=`perspective(600px) rotateY(${u*9}deg) rotateX(${-g*7}deg) translateY(-3px)`,c.style.setProperty("--gx",`${(u+.5)*100}%`),c.style.setProperty("--gy",`${(g+.5)*100}%`)},n=()=>{r.current&&(r.current.style.transform="")};return e.jsxs("a",{ref:r,href:t.link,target:"_blank",rel:"noopener noreferrer",className:`ip-proj-card ${a?"ip-visible":""}`,style:{"--acc":t.color,transitionDelay:`${i}s`},onMouseMove:s,onMouseLeave:n,children:[e.jsx("div",{className:"ip-shine"}),e.jsxs("div",{className:"ip-proj-top",children:[e.jsx("span",{className:"ip-proj-icon",children:t.icon}),t.status]}),e.jsx("h3",{className:"ip-proj-name",children:t.name}),e.jsx("p",{className:"ip-proj-desc",children:t.desc}),e.jsx("div",{className:"ip-proj-tags",children:t.tags.map(p=>e.jsx("span",{className:"ip-tag",children:p},p))}),e.jsx("div",{className:"ip-proj-arrow",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})})]})}const Re=[{name:"Starsky",desc:"Starsky is a simple and powerful Discord bot for running giveaways in your server.",tags:["Node.js","Discord.js","MongoDB"],link:"https://midoradev.github.io/starsky/",icon:"☁️",color:"#6c8fff",status:e.jsx("span",{className:"ip-proj-status",style:{background:"rgba(124,106,247,0.15)",color:"#7c6af7"},children:"Completed"})},{name:"Crypto Risk",desc:"Crypto risk intelligence API that analyzes token contracts and returns structured risk scores and security signals.",tags:["TypeScript","Fastify","EJS"],link:"https://github.com/midoradev/crypto_api_project",icon:"⚙️",color:"#7c6af7",status:e.jsx("span",{className:"ip-proj-status",style:{background:"rgba(108,143,255,0.15)",color:"#6c8fff"},children:"Alpha"})},{name:"More Projects",desc:"I'm currently working on several new open-source tools and creative experiments. Stay tuned!",tags:["Just","Stay","Tuned"],link:"#",icon:"🚀",color:"#ffcc00",status:e.jsx("span",{className:"ip-proj-status",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00"},children:"Coming Soon"})}];function Me(){const[t,a]=N(),[i,r]=N({threshold:.05});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        /* ── Shared layout ───────────────────────── */
        .ip-section {
          padding: 100px 24px 80px;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }
        .ip-inner { width: 100%; max-width: 940px; }

        .ip-label {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0.7;
        }
        .ip-h2 {
          font-family: var(--font-display);
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .ip-sub {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 560px;
        }

        /* ── Divider ─────────────────────────────── */
        .ip-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.06) 60%, transparent);
          margin: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* ── About ───────────────────────────────── */
        .ip-about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          margin-top: 48px;
          align-items: start;
        }
        @media (max-width: 680px) {
          .ip-about-grid { grid-template-columns: 1fr; gap: 36px; }
        }

        .ip-fade-left {
          opacity: 0; transform: translateX(-16px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .ip-fade-left.ip-visible { opacity: 1; transform: none; }

        .ip-fade-right {
          opacity: 0; transform: translateX(16px);
          transition: opacity 0.65s 0.15s ease, transform 0.65s 0.15s ease;
        }
        .ip-fade-right.ip-visible { opacity: 1; transform: none; }

        .ip-bio {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-top: 18px;
        }
        .ip-bio p + p { margin-top: 12px; }

        .ip-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 24px;
        }
        .ip-fact {
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s, background 0.2s;
        }
        .ip-fact:hover { border-color: rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); }
        .ip-fact-icon { font-size: 16px; margin-bottom: 4px; }
        .ip-fact-label { font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
        .ip-fact-val { font-size: 13px; font-weight: 600; color: var(--text-primary); margin-top: 2px; }

        /* Skills */
        .ip-skill + .ip-skill { margin-top: 14px; }
        .ip-skill-top {
          display: flex; justify-content: space-between;
          font-size: 12px; margin-bottom: 6px;
        }
        .ip-skill-name { color: var(--text-primary); font-weight: 500; }
        .ip-skill-pct { color: var(--text-muted); font-family: var(--font-mono); }
        .ip-track {
          height: 4px; background: rgba(255,255,255,0.05);
          border-radius: 2px; overflow: hidden;
        }
        .ip-bar {
          height: 100%; border-radius: 2px;
          width: 0; transition: width 1.1s cubic-bezier(0.4,0,0.2,1);
        }
        .ip-bar.ip-visible { width: var(--w); }

        /* ── Projects ────────────────────────────── */
        .ip-proj-head {
          margin-bottom: 32px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ip-proj-head.ip-visible { opacity: 1; transform: none; }

        .ip-proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 16px;
        }

        .ip-proj-card {
          position: relative;
          padding: 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          overflow: hidden;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.25s, box-shadow 0.25s;
        }
        .ip-proj-card.ip-visible { opacity: 1; transform: none; }
        .ip-proj-card:hover {
          border-color: var(--acc);
          box-shadow: 0 0 28px rgba(0,0,0,0.35),
                      0 0 16px color-mix(in srgb, var(--acc) 18%, transparent);
        }

        .ip-shine {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.045) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.2s;
        }
        .ip-proj-card:hover .ip-shine { opacity: 1; }

        .ip-proj-top {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 12px;
        }
        .ip-proj-icon { font-size: 24px; line-height: 1; }
        .ip-proj-status {
          font-size: 10px; font-weight: 600;
          padding: 2px 9px; border-radius: 20px;
          letter-spacing: 0.05em;
        }
        .ip-proj-name {
          font-family: var(--font-display);
          font-size: 16px; font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 7px;
        }
        .ip-proj-desc {
          font-size: 12.5px; color: var(--text-secondary);
          line-height: 1.6; flex: 1; margin-bottom: 12px;
        }
        .ip-proj-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 12px; }
        .ip-tag {
          font-size: 10px; font-weight: 500;
          padding: 3px 9px; border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: var(--text-muted);
        }
        .ip-proj-arrow {
          color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
          align-self: flex-start;
        }
        .ip-proj-card:hover .ip-proj-arrow {
          color: var(--acc); transform: translateX(4px);
        }

        /* ── Stack ───────────────────────────────── */
        .ip-stack-head {
          margin-bottom: 28px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ip-stack-head.ip-visible { opacity: 1; transform: none; }

        .ip-stack-grid {
          display: flex; flex-wrap: wrap; gap: 10px;
        }

        .ip-stack-pill {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 14px;
          border-radius: 40px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.2s, border-color 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
          opacity: 0; transform: translateY(12px) scale(0.95);
          cursor: default;
        }
        .ip-stack-pill.ip-visible {
          opacity: 1; transform: none;
          transition: background 0.2s, border-color 0.2s,
                      transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      opacity 0.4s ease;
        }
        .ip-stack-pill:hover {
          background: rgba(108,143,255,0.07);
          border-color: rgba(108,143,255,0.2);
          transform: translateY(-3px) scale(1.04);
        }
        .ip-stack-emoji { font-size: 15px; line-height: 1; }
        .ip-stack-name { font-size: 12px; font-weight: 600; color: var(--text-primary); }
      `}),e.jsx("section",{id:"about",className:"ip-section",ref:t,children:e.jsx("div",{className:"ip-inner",children:e.jsxs("div",{className:"ip-about-grid",children:[e.jsxs("div",{className:`ip-fade-left ${a?"ip-visible":""}`,children:[e.jsxs("h2",{className:"ip-h2",children:["Crafting ideas",e.jsx("br",{}),"into software."]}),e.jsxs("div",{className:"ip-bio",children:[e.jsx("p",{children:"A self-taught developer from Vietnam, currently a high school student. I started with Discord bots and gradually expanded into web apps, APIs, and mobile development."}),e.jsx("p",{children:"I build whatever ideas come to mind. Most of my projects are tools, apps, or automation that solve small problems or experiment with new technologies."}),e.jsx("p",{children:"I care about clean architecture, solid engineering practices, and UI/UX that feels natural to use. My work often sits between design and development."}),e.jsx("p",{children:"Outside of coding, I enjoy playing basketball, gaming, and listening to jazz, relaxing music, and V-POP."})]})]}),e.jsxs("div",{className:`ip-fade-right ${a?"ip-visible":""}`,children:[e.jsx("span",{className:"ip-label",style:{marginBottom:16,display:"block"},children:"Skills"}),[{name:"JavaScript / TypeScript",level:95,color:"#f5a623"},{name:"React / Vite",level:80,color:"#7c6af7"},{name:"Node.js / Discord.js",level:85,color:"#43b581"},{name:"Expo / Swift",level:76,color:"#e86cbe"},{name:"Three.js / WebGL",level:62,color:"#52e3e3"},{name:"MongoDB / Redis",level:82,color:"#4aeaac"}].map((s,n)=>e.jsxs("div",{className:"ip-skill",children:[e.jsxs("div",{className:"ip-skill-top",children:[e.jsx("span",{className:"ip-skill-name",children:s.name}),e.jsxs("span",{className:"ip-skill-pct",children:[s.level,"%"]})]}),e.jsx("div",{className:"ip-track",children:e.jsx("div",{className:`ip-bar ${a?"ip-visible":""}`,style:{"--w":`${s.level}%`,background:s.color,transitionDelay:`${.35+n*.07}s`}})})]},s.name))]})]})})}),e.jsx("section",{id:"projects",className:"ip-section",ref:i,children:e.jsxs("div",{className:"ip-inner",children:[e.jsx("div",{className:`ip-proj-head ${r?"ip-visible":""}`,children:e.jsx("h2",{className:"ip-h2",children:"Projects"})}),e.jsx("div",{className:"ip-proj-grid",children:Re.map((s,n)=>e.jsx(Te,{project:s,visible:r,delay:.2+n*.1},s.name))})]})})]})}function Ce(){const[t,a]=N();return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .blog-section {
          padding: 120px 24px 160px;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }
        .blog-inner {
          width: 100%;
          max-width: 680px;
          text-align: center;
        }
        .blog-head {
          margin-bottom: 20px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .blog-head.visible { opacity: 1; transform: none; }
        .blog-head .section-title { margin-bottom: 0; }

        .blog-card {
          margin-top: 48px;
          padding: 60px 40px;
          border-radius: var(--radius-md);
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          backdrop-filter: blur(20px);
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s 0.2s ease, transform 0.6s 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .blog-card.visible {
          opacity: 1; transform: none;
        }
        .blog-icon {
          font-size: 32px;
          color: var(--accent);
          opacity: 0.8;
        }
        .blog-message {
          font-size: 18px;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        .blog-sub {
          font-size: 14px;
          color: var(--text-muted);
          max-width: 320px;
          line-height: 1.6;
        }
      `}),e.jsx("section",{id:"blog",className:"blog-section",ref:t,children:e.jsxs("div",{className:"blog-inner",children:[e.jsxs("div",{className:`blog-head ${a?"visible":""}`,children:[e.jsx("span",{className:"section-label",children:"Blog"}),e.jsx("h2",{className:"section-title",children:"Writing"})]}),e.jsxs("div",{className:`blog-card ${a?"visible":""}`,children:[e.jsx("div",{className:"blog-icon",children:e.jsx("i",{className:"fa-solid fa-hourglass-half"})}),e.jsx("div",{className:"blog-message",children:"Stay tuned for upcoming posts!"}),e.jsx("p",{className:"blog-sub",children:"I'm currently drafting some deep dives into React, design systems, and creative coding."})]})]})})]})}const Pe="_container_dy73b_1",Ae="_exit_dy73b_14",De="_ring_dy73b_20",Le="_arc_dy73b_28",Ye="_label_dy73b_37",_={container:Pe,exit:Ae,ring:De,arc:Le,label:Ye};function Oe({exiting:t}){return e.jsxs("div",{className:`${_.container} ${t?_.exit:""}`,children:[e.jsx("div",{className:_.ring,children:e.jsx("div",{className:_.arc})}),e.jsx("p",{className:_.label,children:"loading"})]})}const Ve=o.lazy(()=>F(()=>import("./SceneBackground-ByQ-2pd9.js"),__vite__mapDeps([0,1])));function Fe(){const[t,a]=o.useState(!0),[i,r]=o.useState(!1);return o.useEffect(()=>{const s=setTimeout(()=>{r(!0),setTimeout(()=>a(!1),800)},2e3);return()=>clearTimeout(s)},[]),e.jsxs(e.Fragment,{children:[t&&e.jsx(Oe,{exiting:i}),e.jsx(o.Suspense,{fallback:e.jsx("div",{style:{position:"fixed",inset:0,background:"#04040a",zIndex:0}}),children:e.jsx(Ve,{})}),e.jsx(W,{}),e.jsxs("main",{style:{position:"relative",zIndex:2},children:[e.jsx(q,{}),e.jsx(Ie,{}),e.jsx(Me,{}),e.jsx(Ce,{})]})]})}B.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(Fe,{})}));export{l as P};
