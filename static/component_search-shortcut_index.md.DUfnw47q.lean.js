const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/baseDemo.BCZXOzUZ.js","static/chunks/framework.l8elv8IJ.js"])))=>i.map(i=>d[i]);
import{d as o,v as p,V as c,C,o as u,c as g,j as e,a as r,ar as k,as as y,E as a,k as s,w as h,aA as x,aT as b,p as m,G as f}from"./chunks/framework.l8elv8IJ.js";import{C as E,S as v}from"./chunks/index.DVsCdBIq.js";const A=`<template>
  <ex-search-shortcut v-bind="searchFormProps" />
  <span class="example-title">圆角样式</span>
  <ex-search-shortcut v-bind="searchFormProps" round />
</template>

<script lang="ts" setup>
import {IExSearchShortcutSchema} from "element-plus-extension";
import {ref} from "vue";

const searchFormProps = ref({
  schemas: [
    {
      prop: 'name',
      label: '姓名',
    },
    {
      prop: 'name1',
      label: '姓名1',
    },
    {
      prop: 'name2',
      label: '姓名2',
    },
    {
      prop: 'age',
      label: '年龄',
    },
    {
      prop: 'age1',
      label: '年龄1',
    },
    {
      prop: 'age2',
      label: '年龄2',
    },
    {
      prop: 'birthday',
      label: '生日',
    },
    {
      label: '兴趣爱好',
      prop: 'hobby',
    },
    {
      label: '邮箱',
      prop: 'email',
    },
  ] as IExSearchShortcutSchema[]
});

<\/script>
`,_=JSON.parse('{"title":"ExSearchShortcut 快捷搜索","description":"","frontmatter":{},"headers":[],"relativePath":"component/search-shortcut/index.md","filePath":"component/search-shortcut/index.md"}'),F={name:"component/search-shortcut/index.md"},V=o({...F,setup(S){const n=m(!0),l=f();return p(async()=>{l.value=(await c(async()=>{const{default:i}=await import("./chunks/baseDemo.BCZXOzUZ.js");return{default:i}},__vite__mapDeps([0,1]))).default}),(i,t)=>{const d=C("ClientOnly");return u(),g("div",null,[t[1]||(t[1]=e("h1",{id:"exsearchshortcut-快捷搜索",tabindex:"-1"},[r("ExSearchShortcut 快捷搜索 "),e("a",{class:"header-anchor",href:"#exsearchshortcut-快捷搜索","aria-label":'Permalink to "ExSearchShortcut 快捷搜索"'},"​")],-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),k(a(s(E),null,null,512),[[y,n.value]]),a(d,null,{default:h(()=>[a(s(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:s(A)},x({_:2},[l.value?{name:"vue",fn:h(()=>[a(s(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=b("",12))])}}});export{_ as __pageData,V as default};
