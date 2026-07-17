const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/registerDemo.DjiK2Z8t.js","static/chunks/theme.BdqYSx0Z.js","static/chunks/framework.l8elv8IJ.js","static/chunks/baseDemo.CEAoQylN.js"])))=>i.map(i=>d[i]);
import{d as m,v as x,V as f,C as v,o as k,c as w,aT as y,ar as c,as as C,E as e,k as l,w as s,aA as u,j as n,a as o,G as p,p as D}from"./chunks/framework.l8elv8IJ.js";import{C as h,S as b}from"./chunks/index.DVsCdBIq.js";const A=`<template>
  <el-button @click="handleOpen">点击打开抽屉</el-button>
  <ex-drawer @register="register" @confirm="handleConfirm">
    内容
  </ex-drawer>
  <el-button @click="handleOpenLtr">点击左边弹出</el-button>
  <ex-drawer @register="registerLtr">
    内容，隐藏底部操作区
  </ex-drawer>
</template>

<script lang="ts" setup>
import {useDrawer} from "element-plus-extension";
const [register, {open, close, setProps}] = useDrawer({
  title: '标题',
  size: 400,
});
const [registerLtr, {open: openLtr, setProps: setPropsLtr}] = useDrawer({
  title: '标题',
  direction: 'ltr',
  size: 500,
  withFooter: false
});
const handleOpen = () => {
  setProps({
    loading: true
  })
  open();
  setTimeout(() => {
    setProps({
      loading: false
    })
  }, 3000)
}
const handleConfirm = () =>  {
  setProps({
    confirmLoading: true
  })
  setTimeout(() => {
    setProps({
      confirmLoading: false
    });
    // 关闭弹窗
    close();
  }, 3000)
}

const handleOpenLtr = () => {
  setPropsLtr({
    loading: true
  })
  openLtr();
  setTimeout(() => {
    setPropsLtr({
      loading: false
    })
  }, 3000)
}
<\/script>
`,B=`<template>
  <el-button @click="handleOpen">点击弹出抽屉</el-button>
  <el-button @click="drawerRef2?.open()">点击弹出抽屉-隐藏底部操作区</el-button>
  <el-button @click="drawerRef3?.open()">点击弹出抽屉-自定义头部</el-button>

  <ex-drawer ref="drawerRef" title="我是标题">
    内容
  </ex-drawer>
  <ex-drawer ref="drawerRef2" title="我是标题" direction="ltr" :with-footer="false" :height="400">
    内容,隐藏底部操作区
  </ex-drawer>
  <ex-drawer ref="drawerRef3" title="我是标题" :height="300">
    <template #header>
      自定义头部 <ex-input style="width: 180px" clearable />
    </template>
    自定义头部, 设置的标题属性被覆盖
  </ex-drawer>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {IExDrawerInstance} from "element-plus-extension";

const drawerRef = ref<IExDrawerInstance>();
const drawerRef2 = ref<IExDrawerInstance>();
const drawerRef3 = ref<IExDrawerInstance>();

const handleOpen = () => {
  drawerRef.value?.open();
}
<\/script>
`,F=JSON.parse('{"title":"ExDrawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"component/drawer/index.md","filePath":"component/drawer/index.md"}'),_={name:"component/drawer/index.md"},V=m({..._,setup(N){const i=p();x(async()=>{i.value=(await f(async()=>{const{default:d}=await import("./chunks/registerDemo.DjiK2Z8t.js");return{default:d}},__vite__mapDeps([0,1,2]))).default});const a=D(!0),r=p();return x(async()=>{r.value=(await f(async()=>{const{default:d}=await import("./chunks/baseDemo.CEAoQylN.js");return{default:d}},__vite__mapDeps([3,2]))).default}),(d,t)=>{const g=v("ClientOnly");return k(),w("div",null,[t[2]||(t[2]=y("",4)),c(e(l(h),null,null,512),[[C,a.value]]),e(g,null,{default:s(()=>[e(l(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(B)},u({_:2},[r.value?{name:"vue",fn:s(()=>[e(l(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=n("h2",{id:"usedrawer注册绑定方式用法",tabindex:"-1"},[o("useDrawer注册绑定方式用法 "),n("a",{class:"header-anchor",href:"#usedrawer注册绑定方式用法","aria-label":'Permalink to "useDrawer注册绑定方式用法"'},"​")],-1)),t[4]||(t[4]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[o("对于复杂的场景，可以配合 "),n("code",null,"useDrawer"),o(" 来使用")])],-1)),c(e(l(h),null,null,512),[[C,a.value]]),e(g,null,{default:s(()=>[e(l(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(A)},u({_:2},[i.value?{name:"vue",fn:s(()=>[e(l(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=y("",13))])}}});export{F as __pageData,V as default};
