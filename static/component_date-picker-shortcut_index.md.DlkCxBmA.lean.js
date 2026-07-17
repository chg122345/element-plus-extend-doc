const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/baseDemo.Km6nIIcz.js","static/chunks/framework.l8elv8IJ.js"])))=>i.map(i=>d[i]);
import{d as c,v as x,V as y,C as f,o as u,c as C,j as e,a as i,ar as g,as as p,E as l,k as a,w as r,aA as h,aT as m,p as b,G as v}from"./chunks/framework.l8elv8IJ.js";import{C as _,S as A}from"./chunks/index.DVsCdBIq.js";const k=`<template>
  <span class="example-title">基础用法</span>
  <ex-date-picker-shortcut v-model="modelValue" type="datetime" />
  <p>绑定值： {{ modelValue }}</p>
  <span class="example-title">绑定对象</span>
  <ex-date-picker-shortcut v-model="modelValue2" type="datetime" value-type="object" />
  <p>绑定值： {{ modelValue2 }}</p>
  <span class="example-title">绑定别名</span>
  <ex-date-picker-shortcut v-model:value="modelValue3" type="datetime" />
  <p>绑定值： {{ modelValue3 }}</p>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const modelValue = ref();
const modelValue2 = ref();
const modelValue3 = ref();

<\/script>
`,P=JSON.parse('{"title":"ExDatePickerShortcut 快捷日期选择","description":"","frontmatter":{},"headers":[],"relativePath":"component/date-picker-shortcut/index.md","filePath":"component/date-picker-shortcut/index.md"}'),V={name:"component/date-picker-shortcut/index.md"},w=c({...V,setup(D){const n=b(!0),d=v();return x(async()=>{d.value=(await y(async()=>{const{default:s}=await import("./chunks/baseDemo.Km6nIIcz.js");return{default:s}},__vite__mapDeps([0,1]))).default}),(s,t)=>{const o=f("ClientOnly");return u(),C("div",null,[t[1]||(t[1]=e("h1",{id:"exdatepickershortcut-快捷日期选择",tabindex:"-1"},[i("ExDatePickerShortcut 快捷日期选择 "),e("a",{class:"header-anchor",href:"#exdatepickershortcut-快捷日期选择","aria-label":'Permalink to "ExDatePickerShortcut 快捷日期选择"'},"​")],-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),g(l(a(_),null,null,512),[[p,n.value]]),l(o,null,{default:r(()=>[l(a(A),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:a(k)},h({_:2},[d.value?{name:"vue",fn:r(()=>[l(a(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=m("",9))])}}});export{P as __pageData,w as default};
