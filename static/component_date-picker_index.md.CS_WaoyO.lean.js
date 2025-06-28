const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/rangeDemo.DxoIAwfq.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.FjWfS_LW.js"])))=>i.map(i=>d[i]);
import{p as d,v as y,V as g,C as f,c as u,o as m,j as a,af as c,G as e,b2 as b,a as r,ag as C,k as l,w as n}from"./chunks/framework.B3HgsgJJ.js";import{O as x,E as k}from"./chunks/index.DgrmyhQY.js";const F=`<template>
  <ex-date-picker v-model="modelValue" type="daterange" value-format="YYYY-MM-DD" />
  <p>绑定值: {{ modelValue }}</p>

  <span class="example-title">日期范围-绑定对象 </span>
  <ex-date-picker v-model="modelValue2" type="daterange" value-format="YYYY-MM-DD" value-type="object" />
  <p>绑定值: {{ modelValue2 }}</p>

  <span class="example-title">日期范围-绑定对象-自定义key </span>
  <ex-date-picker v-model="modelValue3" type="daterange" start-key="time1" end-key="time2" value-format="YYYY-MM-DD" value-type="object" />
  <p>绑定值: {{ modelValue3 }}</p>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const modelValue2 = ref({startTime: '2022-10-10', endTime: '2023-01-10'});
const modelValue3 = ref();

<\/script>`,v=`<template>
  <ex-date-picker v-model="modelValue" placeholder="最小值" />
  <span class="example-title">日期时间类型 </span>
  <ex-date-picker v-model="modelValue2" placeholder="最大值" type="datetime" />
  <span class="example-title">限定可选范围 </span>
  <ex-date-picker :min="modelValue" :max="modelValue2" v-model="modelValue3" />
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const modelValue2 = ref();
const modelValue3 = ref();

<\/script>`,E=JSON.parse('{"title":"ExDatePicker 日期选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/date-picker/index.md","filePath":"component/date-picker/index.md"}'),A={name:"component/date-picker/index.md"},N=Object.assign(A,{setup(D){const o=d();y(async()=>{o.value=(await g(async()=>{const{default:i}=await import("./chunks/rangeDemo.DxoIAwfq.js");return{default:i}},__vite__mapDeps([0,1]))).default});const s=d(!0),p=d();return y(async()=>{p.value=(await g(async()=>{const{default:i}=await import("./chunks/baseDemo.FjWfS_LW.js");return{default:i}},__vite__mapDeps([2,1]))).default}),(i,t)=>{const h=f("ClientOnly");return m(),u("div",null,[t[2]||(t[2]=a("h1",{id:"exdatepicker-日期选择器",tabindex:"-1"},[r("ExDatePicker 日期选择器 "),a("a",{class:"header-anchor",href:"#exdatepicker-日期选择器","aria-label":'Permalink to "ExDatePicker 日期选择器"'},"​")],-1)),t[3]||(t[3]=a("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),c(e(l(x),null,null,512),[[C,s.value]]),e(h,null,{default:n(()=>[e(l(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:l(v)},{vue:n(()=>[e(l(p))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=a("h2",{id:"日期范围",tabindex:"-1"},[r("日期范围 "),a("a",{class:"header-anchor",href:"#日期范围","aria-label":'Permalink to "日期范围"'},"​")],-1)),c(e(l(x),null,null,512),[[C,s.value]]),e(h,null,{default:n(()=>[e(l(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:l(F)},{vue:n(()=>[e(l(o))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=b("",12))])}}});export{E as __pageData,N as default};
