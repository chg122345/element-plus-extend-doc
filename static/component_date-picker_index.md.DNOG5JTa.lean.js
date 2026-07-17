const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/rangeDemo.DBPt7Nsb.js","static/chunks/framework.l8elv8IJ.js","static/chunks/baseDemo.D6S641Kz.js"])))=>i.map(i=>d[i]);
import{d as u,v as h,V as y,C as m,o as b,c as F,j as a,a as o,ar as g,as as c,E as e,k as l,w as i,aA as C,aT as v,G as x,p as A}from"./chunks/framework.l8elv8IJ.js";import{C as k,S as f}from"./chunks/index.DVsCdBIq.js";const D=`<template>
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

<\/script>`,B=`<template>
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

<\/script>`,w=JSON.parse('{"title":"ExDatePicker 日期选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/date-picker/index.md","filePath":"component/date-picker/index.md"}'),V={name:"component/date-picker/index.md"},P=u({...V,setup(N){const d=x();h(async()=>{d.value=(await y(async()=>{const{default:n}=await import("./chunks/rangeDemo.DBPt7Nsb.js");return{default:n}},__vite__mapDeps([0,1]))).default});const s=A(!0),r=x();return h(async()=>{r.value=(await y(async()=>{const{default:n}=await import("./chunks/baseDemo.D6S641Kz.js");return{default:n}},__vite__mapDeps([2,1]))).default}),(n,t)=>{const p=m("ClientOnly");return b(),F("div",null,[t[2]||(t[2]=a("h1",{id:"exdatepicker-日期选择器",tabindex:"-1"},[o("ExDatePicker 日期选择器 "),a("a",{class:"header-anchor",href:"#exdatepicker-日期选择器","aria-label":'Permalink to "ExDatePicker 日期选择器"'},"​")],-1)),t[3]||(t[3]=a("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),g(e(l(k),null,null,512),[[c,s.value]]),e(p,null,{default:i(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:l(B)},C({_:2},[r.value?{name:"vue",fn:i(()=>[e(l(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=a("h2",{id:"日期范围",tabindex:"-1"},[o("日期范围 "),a("a",{class:"header-anchor",href:"#日期范围","aria-label":'Permalink to "日期范围"'},"​")],-1)),g(e(l(k),null,null,512),[[c,s.value]]),e(p,null,{default:i(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:l(D)},C({_:2},[d.value?{name:"vue",fn:i(()=>[e(l(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=v("",12))])}}});export{w as __pageData,P as default};
