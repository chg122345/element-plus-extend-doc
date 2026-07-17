const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/teleportedDemo.jJlBCoL5.js","static/chunks/framework.l8elv8IJ.js","static/chunks/horizontalDemo.Cg8vGJGZ.js","static/chunks/baseDemo.Dw-BFxKk.js"])))=>i.map(i=>d[i]);
import{d as f,v as C,V as h,C as x,o as A,c as F,aT as b,ar as c,as as u,E as e,k as l,w as i,aA as k,j as a,a as v,G as y,p as B}from"./chunks/framework.l8elv8IJ.js";import{C as m,S as g}from"./chunks/index.DVsCdBIq.js";const D=`<template>
  <div>
    悬浮到body中，请看右下方位
  </div>
  <ex-sticky-tool :list="list" shape="square" :teleported="true" :offset="[50, 120]" placement="right-bottom" />
</template>

<script lang="ts" setup>
import {h, ref} from "vue";
import {IExStickyItemProps} from "element-plus-extension";

const list = ref<IExStickyItemProps[]>([
  {
    icon: 'User',
    label: '展开',
    trigger: 'hover',
    popoverContent: () => h('div', {style: {color: 'var(--el-color-primary)'}}, '自定义插槽内容')
  },
  {
    icon: 'BellFilled',
    label: '通知',
    popoverContent: '爱说大话卡是否啊看是否和按时打卡是发'
  },
  {
    icon: 'Share',
    label: '分享',
  }
])
<\/script>
`,E=`<template>
  <div class="sticky-tool-wrap">
    <span class="example-title">悬浮到当前容器中，仅在当前容器中可拖动</span>
    <ex-sticky-tool :list="list" class="demo" shape="round" :teleported="false" placement="left-top" direction="horizontal" />
    <ex-sticky-tool :list="list" class="demo" shape="square" :teleported="false" placement="right-top" direction="vertical" />
  </div>
</template>

<script lang="ts" setup>

import {ref, h} from "vue";
import {IExStickyItemProps} from "element-plus-extension";

const list = ref<IExStickyItemProps[]>([
  {
    icon: 'User',
    label: '展开',
    trigger: 'hover',
    width: 40,
    height: 40,
    popoverContent: () => h('div', {style: {color: 'var(--el-color-primary)'}}, '自定义插槽内容')
  },
  {
    icon: 'BellFilled',
    label: '通知',
    popoverContent: '爱说大话卡是否啊看是否和按时打卡是发'
  },
  {
    icon: 'Share',
    label: '分享',
  }
])
<\/script>
<style lang="scss">
.sticky-tool-wrap {
  height: 400px;
  position: relative;
}
</style>
`,_=`<template>
  <div class="sticky-tool-wrap">
    <span class="example-title">悬浮到当前容器中，仅在当前容器中可拖动</span>
    <ex-sticky-tool :list="list" class="demo" shape="round" :teleported="false" placement="left-top" />
    <ex-sticky-tool :list="list" class="demo" shape="square" :teleported="false" placement="right-top" />
    <ex-sticky-tool :list="list" class="demo" shape="square" :teleported="false" :offset="[70, 80]" type="compact" placement="right-bottom" />
  </div>
</template>

<script lang="ts" setup>

import {ref, h} from "vue";
import {IExStickyItemProps} from "element-plus-extension";

const list = ref<IExStickyItemProps[]>([
  {
    icon: 'User',
    label: '展开',
    trigger: 'hover',
    popoverContent: () => h('div', {style: {color: 'var(--el-color-primary)'}}, '自定义插槽内容')
  },
  {
    icon: 'BellFilled',
    label: '通知',
    popoverContent: '爱说大话卡是否啊看是否和按时打卡是发'
  },
  {
    icon: 'Share',
    label: '分享',
  }
])
<\/script>
<style lang="scss">
.sticky-tool-wrap {
  height: 400px;
  position: relative;
}
</style>
`,T=JSON.parse('{"title":"ExStickyTool 悬浮边栏","description":"","frontmatter":{},"headers":[],"relativePath":"component/sticky-tool/index.md","filePath":"component/sticky-tool/index.md"}'),V={name:"component/sticky-tool/index.md"},S=f({...V,setup(w){const o=y();C(async()=>{o.value=(await h(async()=>{const{default:n}=await import("./chunks/teleportedDemo.jJlBCoL5.js");return{default:n}},__vite__mapDeps([0,1]))).default});const r=y();C(async()=>{r.value=(await h(async()=>{const{default:n}=await import("./chunks/horizontalDemo.Cg8vGJGZ.js");return{default:n}},__vite__mapDeps([2,1]))).default});const s=B(!0),d=y();return C(async()=>{d.value=(await h(async()=>{const{default:n}=await import("./chunks/baseDemo.Dw-BFxKk.js");return{default:n}},__vite__mapDeps([3,1]))).default}),(n,t)=>{const p=x("ClientOnly");return A(),F("div",null,[t[3]||(t[3]=b("",3)),c(e(l(m),null,null,512),[[u,s.value]]),e(p,null,{default:i(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:l(_)},k({_:2},[d.value?{name:"vue",fn:i(()=>[e(l(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=a("h2",{id:"限制一个方向上拖动",tabindex:"-1"},[v("限制一个方向上拖动 "),a("a",{class:"header-anchor",href:"#限制一个方向上拖动","aria-label":'Permalink to "限制一个方向上拖动"'},"​")],-1)),c(e(l(m),null,null,512),[[u,s.value]]),e(p,null,{default:i(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:l(E)},k({_:2},[r.value?{name:"vue",fn:i(()=>[e(l(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=a("h2",{id:"浮动到body中",tabindex:"-1"},[v("浮动到body中 "),a("a",{class:"header-anchor",href:"#浮动到body中","aria-label":'Permalink to "浮动到body中"'},"​")],-1)),c(e(l(m),null,null,512),[[u,s.value]]),e(p,null,{default:i(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[2]||(t[2]=()=>{s.value=!1}),vueCode:l(D)},k({_:2},[o.value?{name:"vue",fn:i(()=>[e(l(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=b("",8))])}}});export{T as __pageData,S as default};
