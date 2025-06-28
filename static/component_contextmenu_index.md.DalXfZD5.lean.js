const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/serviceDemo.UQl1weAe.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/theme.D3OqrOCm.js","static/chunks/baseDemo.CtvEDawj.js"])))=>i.map(i=>d[i]);
import{p as d,v as p,V as u,C as y,c as g,o as b,j as s,af as k,G as t,b2 as E,a as o,ag as c,k as n,w as l}from"./chunks/framework.B3HgsgJJ.js";import{O as m,E as x}from"./chunks/index.DgrmyhQY.js";const v=`<template>
  <span class="example-title">通过服务调用打开菜单</span>
  <el-button @contextmenu.prevent="handleOpenContextmenu">右击打开右键菜单</el-button>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {ExContextmenu, IExContextmenuItem} from "element-plus-extension";

const menuList = ref<Array<IExContextmenuItem>>([
  {
    name: '菜单1', icon: 'User', onClick: (data) => {
      console.error('点击了菜单1', '自定义数据==>', data)
    }
  },
  {
    name: '菜单2', icon: 'Menu',onClick: (data) => {
      console.error('点击了菜单2', '自定义数据==>', data)
    }
  },
  {name: '菜单3', divided: true },
  {name: '菜单4', },
]);

const handleOpenContextmenu = (e) => {
  ExContextmenu.service({
    menuList: menuList.value,
    event: e,
    data: {name: '自定义传入的数据'}
  })
}

<\/script>
`,f=`<template>
  <span class="example-title">监听菜单点击事件</span>
  <el-button @click="handleOpenContextmenu">点击打开右键菜单</el-button>
  <ex-contextmenu :menuList="menuList" ref="contextmenuRef" @contextmenu-click="handleContextmenuClick" />

  <span class="example-title">菜单配置点击事件</span>
  <el-button @click="handleOpenContextmenu2">点击打开右键菜单</el-button>
  <ex-contextmenu :menuList="menuList2" ref="contextmenuRef2" />
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {IExContextmenuInstance, IExContextmenuItem} from "element-plus-extension";

const contextmenuRef = ref<IExContextmenuInstance>();
const contextmenuRef2 = ref<IExContextmenuInstance>();

const menuList = ref<Array<IExContextmenuItem>>([
  {name: '菜单1', icon: 'User'},
  {name: '菜单2', icon: 'Menu'},
  {name: '菜单3', divided: true },
  {name: '菜单4', },
]);

const menuList2 = ref<Array<IExContextmenuItem>>([
  {name: '菜单1', icon: 'User', onClick: (data) => {
    console.error('点击了菜单1', '自定义数据==>', data)
}},
  {name: '菜单2', icon: 'Menu', hide: true},
  {name: '菜单3', divided: true },
  {name: '菜单4', },
]);

const handleOpenContextmenu = (e) => {
  contextmenuRef.value?.open(e);
}
const handleOpenContextmenu2 = (e) => {
  contextmenuRef2.value?.open(e, "自定义00000");
}

const handleContextmenuClick = (item, e) => {
  console.error('菜单项==>', item, e)
}

<\/script>
`,_=JSON.parse('{"title":"ExContextmenu 右键菜单","description":"","frontmatter":{},"headers":[],"relativePath":"component/contextmenu/index.md","filePath":"component/contextmenu/index.md"}'),A={name:"component/contextmenu/index.md"},V=Object.assign(A,{setup(F){const r=d();p(async()=>{r.value=(await u(async()=>{const{default:i}=await import("./chunks/serviceDemo.UQl1weAe.js");return{default:i}},__vite__mapDeps([0,1,2]))).default});const a=d(!0),h=d();return p(async()=>{h.value=(await u(async()=>{const{default:i}=await import("./chunks/baseDemo.CtvEDawj.js");return{default:i}},__vite__mapDeps([3,1]))).default}),(i,e)=>{const C=y("ClientOnly");return b(),g("div",null,[e[2]||(e[2]=s("h1",{id:"excontextmenu-右键菜单",tabindex:"-1"},[o("ExContextmenu 右键菜单 "),s("a",{class:"header-anchor",href:"#excontextmenu-右键菜单","aria-label":'Permalink to "ExContextmenu 右键菜单"'},"​")],-1)),e[3]||(e[3]=s("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),k(t(n(m),null,null,512),[[c,a.value]]),t(C,null,{default:l(()=>[t(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:n(f)},{vue:l(()=>[t(n(h))]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=s("h2",{id:"服务调用用法",tabindex:"-1"},[o("服务调用用法 "),s("a",{class:"header-anchor",href:"#服务调用用法","aria-label":'Permalink to "服务调用用法"'},"​")],-1)),k(t(n(m),null,null,512),[[c,a.value]]),t(C,null,{default:l(()=>[t(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:n(v)},{vue:l(()=>[t(n(r))]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=E("",10))])}}});export{_ as __pageData,V as default};
