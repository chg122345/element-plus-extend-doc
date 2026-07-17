const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/baseDemo.BLEKCrO5.js","static/chunks/framework.l8elv8IJ.js"])))=>i.map(i=>d[i]);
import{d as C,v as c,V as p,C as u,o as x,c as m,j as e,a as i,ar as f,as as y,E as l,k as a,w as o,aA as g,aT as h,p as b,G as v}from"./chunks/framework.l8elv8IJ.js";import{C as A,S as _}from"./chunks/index.DVsCdBIq.js";const V=`<template>
  <ex-color-picker v-model="modelValue" />
  <span class="example-title">透明度 </span>
  <ex-color-picker v-model="modelValue2" showAlpha />
  {{ modelValue2 }}
  <span class="example-title">多选 </span>
  <ex-color-picker v-model="modelValue3" multiple />
  {{ modelValue3 }}
  <span class="example-title">多选 限制选5个 </span>
  <ex-color-picker v-model="modelValue4" multiple :multipleLimit="5" showAlpha />
  {{ modelValue4 }}
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const modelValue2 = ref();
const modelValue3 = ref();
const modelValue4 = ref();

<\/script>`,N=JSON.parse('{"title":"ExColorPicker 颜色选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/color-picker/index.md","filePath":"component/color-picker/index.md"}'),k={name:"component/color-picker/index.md"},w=C({...k,setup(B){const d=b(!0),n=v();return c(async()=>{n.value=(await p(async()=>{const{default:s}=await import("./chunks/baseDemo.BLEKCrO5.js");return{default:s}},__vite__mapDeps([0,1]))).default}),(s,t)=>{const r=u("ClientOnly");return x(),m("div",null,[t[1]||(t[1]=e("h1",{id:"excolorpicker-颜色选择器",tabindex:"-1"},[i("ExColorPicker 颜色选择器 "),e("a",{class:"header-anchor",href:"#excolorpicker-颜色选择器","aria-label":'Permalink to "ExColorPicker 颜色选择器"'},"​")],-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),f(l(a(A),null,null,512),[[y,d.value]]),l(r,null,{default:o(()=>[l(a(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:a(V)},g({_:2},[n.value?{name:"vue",fn:o(()=>[l(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=h("",5))])}}});export{N as __pageData,w as default};
