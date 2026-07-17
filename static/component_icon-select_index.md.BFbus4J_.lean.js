const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/demo.CK1tcvH3.js","static/chunks/framework.l8elv8IJ.js"])))=>i.map(i=>d[i]);
import{d as r,v as c,V as h,C as p,o as y,c as C,aT as i,ar as g,as as x,E as e,k as l,w as d,aA as f,p as u,G as m}from"./chunks/framework.l8elv8IJ.js";import{C as k,S as b}from"./chunks/index.DVsCdBIq.js";const v=`<template>
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
<\/script>`,D=JSON.parse('{"title":"ExIconSelect 图标选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/icon-select/index.md","filePath":"component/icon-select/index.md"}'),E={name:"component/icon-select/index.md"},F=r({...E,setup(_){const s=u(!0),a=m();return c(async()=>{a.value=(await h(async()=>{const{default:n}=await import("./chunks/demo.CK1tcvH3.js");return{default:n}},__vite__mapDeps([0,1]))).default}),(n,t)=>{const o=p("ClientOnly");return y(),C("div",null,[t[1]||(t[1]=i("",3)),g(e(l(k),null,null,512),[[x,s.value]]),e(o,null,{default:d(()=>[e(l(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:l(v)},f({_:2},[a.value?{name:"vue",fn:d(()=>[e(l(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=i("",9))])}}});export{D as __pageData,F as default};
