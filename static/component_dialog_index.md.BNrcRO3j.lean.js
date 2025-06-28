const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/registerDemo.DuOj9Orh.js","static/chunks/theme.D3OqrOCm.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.BCQQ76UQ.js"])))=>i.map(i=>d[i]);
import{p as o,v as f,V as y,C as p,c as b,o as m,j as e,af as C,G as l,b2 as v,a as d,ag as c,k as n,w as i}from"./chunks/framework.B3HgsgJJ.js";import{O as h,E as u}from"./chunks/index.DgrmyhQY.js";const k=`<template>
  <el-button @click="handleOpen">点击打开模态框-设置加载状态</el-button>

  <ex-dialog @register="register" @confirm="handleConfirm">
    弹框内容，点击确认按钮后触发确认事件
  </ex-dialog>
</template>

<script lang="ts" setup>
import {useDialog} from "element-plus-extension";
const [register, {open, close, setProps}] = useDialog({
  title: '弹框测试',
  width: 500,
  height: 500,
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
<\/script>
`,D=`<template>
  <el-button @click="handleOpen">点击打开模态框</el-button>
  <el-button @click="dialogRef2?.open()">点击打开模态框-隐藏底部操作区</el-button>
  <el-button @click="dialogRef3?.open()">点击打开模态框-自定义头部</el-button>

  <ex-dialog ref="dialogRef" title="弹框标题">
    弹框内容
  </ex-dialog>
  <ex-dialog ref="dialogRef2" title="弹框标题" :with-footer="false" :height="400">
    弹框内容,隐藏底部操作区
  </ex-dialog>
  <ex-dialog ref="dialogRef3" title="弹框标题" :height="300">
    <template #header>
      自定义头部 <ex-input style="width: 180px" clearable />
    </template>
    自定义头部, 设置的标题属性被覆盖
  </ex-dialog>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {IExDialogInstance} from "element-plus-extension";

const dialogRef = ref<IExDialogInstance>();
const dialogRef2 = ref<IExDialogInstance>();
const dialogRef3 = ref<IExDialogInstance>();

const handleOpen = () => {
  dialogRef.value?.open();
}
<\/script>
`,_=JSON.parse('{"title":"ExDialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"component/dialog/index.md","filePath":"component/dialog/index.md"}'),A={name:"component/dialog/index.md"},w=Object.assign(A,{setup(B){const r=o();f(async()=>{r.value=(await y(async()=>{const{default:s}=await import("./chunks/registerDemo.DuOj9Orh.js");return{default:s}},__vite__mapDeps([0,1,2]))).default});const a=o(!0),g=o();return f(async()=>{g.value=(await y(async()=>{const{default:s}=await import("./chunks/baseDemo.BCQQ76UQ.js");return{default:s}},__vite__mapDeps([3,2]))).default}),(s,t)=>{const x=p("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=e("h1",{id:"exdialog-对话框",tabindex:"-1"},[d("ExDialog 对话框 "),e("a",{class:"header-anchor",href:"#exdialog-对话框","aria-label":'Permalink to "ExDialog 对话框"'},"​")],-1)),t[3]||(t[3]=e("h2",{id:"ref用法",tabindex:"-1"},[d("Ref用法 "),e("a",{class:"header-anchor",href:"#ref用法","aria-label":'Permalink to "Ref用法"'},"​")],-1)),t[4]||(t[4]=e("blockquote",null,[e("p",null,[d("绑定Ref属性调用"),e("code",null,"open"),d("方法打开对话框")])],-1)),C(l(n(h),null,null,512),[[c,a.value]]),l(x,null,{default:i(()=>[l(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:n(D)},{vue:i(()=>[l(n(g))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"usedialog注册绑定方式用法",tabindex:"-1"},[d("useDialog注册绑定方式用法 "),e("a",{class:"header-anchor",href:"#usedialog注册绑定方式用法","aria-label":'Permalink to "useDialog注册绑定方式用法"'},"​")],-1)),t[6]||(t[6]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[d("对于复杂的场景，可以配合 "),e("code",null,"useDialog"),d(" 来使用")])],-1)),C(l(n(h),null,null,512),[[c,a.value]]),l(x,null,{default:i(()=>[l(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:n(k)},{vue:i(()=>[l(n(r))]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=v("",13))])}}});export{_ as __pageData,w as default};
