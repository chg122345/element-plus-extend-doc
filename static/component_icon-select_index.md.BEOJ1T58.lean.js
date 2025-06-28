const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/demo.DR-Tz44H.js","static/chunks/framework.B3HgsgJJ.js"])))=>i.map(i=>d[i]);
import{p as i,v as c,V as p,C as h,c as y,o as C,b2 as d,af as g,G as e,ag as x,k as l,w as o}from"./chunks/framework.B3HgsgJJ.js";import{O as f,E as u}from"./chunks/index.DgrmyhQY.js";const m=`<template>
  <span class="example-title">图标选择</span>
  <ex-icon-select v-model="modelValue" placeholder="请选择" />
  <p>绑定的值: {{ modelValue }}</p>
  <span class="example-title">渲染图标组件</span>
  <ex-icon :icon="modelValue" color="var(--el-color-primary)" :key="modelValue" />

  <span class="example-title">可清空</span>
  <ex-icon-select clearable placeholder="请选择" />

</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref('User');
<\/script>`,_=JSON.parse('{"title":"ExIconSelect 图标选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/icon-select/index.md","filePath":"component/icon-select/index.md"}'),b={name:"component/icon-select/index.md"},A=Object.assign(b,{setup(k){const a=i(!0),s=i();return c(async()=>{s.value=(await p(async()=>{const{default:n}=await import("./chunks/demo.DR-Tz44H.js");return{default:n}},__vite__mapDeps([0,1]))).default}),(n,t)=>{const r=h("ClientOnly");return C(),y("div",null,[t[1]||(t[1]=d("",3)),g(e(l(f),null,null,512),[[x,a.value]]),e(r,null,{default:o(()=>[e(l(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(m)},{vue:o(()=>[e(l(s))]),_:1},8,["vueCode"])]),_:1}),t[2]||(t[2]=d("",9))])}}});export{_ as __pageData,A as default};
