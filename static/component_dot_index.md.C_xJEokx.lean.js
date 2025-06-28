const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/baseDemo.BZft4mHi.js","static/chunks/framework.B3HgsgJJ.js"])))=>i.map(i=>d[i]);
import{p as o,v as p,V as c,C as x,c as m,o as u,j as e,af as y,G as l,b2 as f,a as d,ag as h,k as a,w as r}from"./chunks/framework.B3HgsgJJ.js";import{O as b,E as g}from"./chunks/index.DgrmyhQY.js";const v=`<template>
  <span class="example-title">不同尺寸</span>
  <ex-dot type="primary" size="small" />
  <ex-dot type="primary" />
  <ex-dot type="primary" size="large" />
  <span class="example-title">不同类型</span>
  <ex-dot type="primary" />
  <ex-dot type="success" />
  <ex-dot type="warning" />
  <ex-dot type="danger" />
  <ex-dot type="info" />
  <span class="example-title">禁止闪动</span>
  <ex-dot type="primary" :animation="false" />
  <ex-dot type="success" :animation="false" />
  <ex-dot type="warning" :animation="false" />
  <ex-dot type="danger" :animation="false" />
  <ex-dot type="info" :animation="false" />
  <span class="example-title">自定义颜色</span>
  <ex-dot color="red" />
  <ex-dot :animation="false" color="red" />
  <ex-dot color="blue" />
  <ex-dot color="#333" />
</template>

<script lang="ts" setup>
<\/script>`,V=JSON.parse('{"title":"ExDot 圆点","description":"","frontmatter":{},"headers":[],"relativePath":"component/dot/index.md","filePath":"component/dot/index.md"}'),_={name:"component/dot/index.md"},k=Object.assign(_,{setup(A){const n=o(!0),s=o();return p(async()=>{s.value=(await c(async()=>{const{default:i}=await import("./chunks/baseDemo.BZft4mHi.js");return{default:i}},__vite__mapDeps([0,1]))).default}),(i,t)=>{const C=x("ClientOnly");return u(),m("div",null,[t[1]||(t[1]=e("h1",{id:"exdot-圆点",tabindex:"-1"},[d("ExDot 圆点 "),e("a",{class:"header-anchor",href:"#exdot-圆点","aria-label":'Permalink to "ExDot 圆点"'},"​")],-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),y(l(a(b),null,null,512),[[h,n.value]]),l(C,null,{default:r(()=>[l(a(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:a(v)},{vue:r(()=>[l(a(s))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=f("",3))])}}});export{V as __pageData,k as default};
