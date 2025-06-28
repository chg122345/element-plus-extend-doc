const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/apiDemo.Dgk_RhHL.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/lineDemo.B3mP9PeM.js","static/chunks/theme.D3OqrOCm.js","static/chunks/baseDemo.B9zkAmbV.js"])))=>i.map(i=>d[i]);
import{p as i,v as o,V as C,C as v,c as m,o as A,b2 as h,af as x,G as e,j as s,ag as g,k as l,w as d,a as b}from"./chunks/framework.B3HgsgJJ.js";import{O as c,E as f}from"./chunks/index.DgrmyhQY.js";const B=`<template>
  <span class="example-title">加载远程API,可过滤</span>
  <ex-tree :api="api" filterable :show-line="true" :show-checkbox="true" :height="200">
    <template #toolbar="">
      <el-button>新增</el-button>
    </template>
  </ex-tree>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const options = ref([
  {
    label: '一级',
    value: 'l1',
    children: [
      {label: '北京', value: 'Beijin', icon: 'User'},
      {label: '天津', value: 'Tianjin'},
      {label: '上海', value: 'Shanghai'},
      {label: '重庆', value: 'Chongqi'},
    ]
  },
  {
    label: '二级',
    value: 'l2',
    children: [
      {label: '北京2', value: 'Beijin2', disabled: true},
      {label: '天津2', value: 'Tianjin2'},
      {label: '上海2', value: 'Shanghai2'},
      {label: '重庆2', value: 'Chongqi2'},
    ]
  }

]);

const api = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({code: 200, data: options.value});
    }, 2000)
  })
}

<\/script>`,D=`<template>
  <span class="example-title">虚拟树，自定义操作</span>
  <ex-tree :data="options" :virtualized="true" :show-line="true" :height="200">
    <template #action="{data}">
      <span
        style="margin-left: 8px; color: var(--el-color-danger); font-size: var(--el-font-size-small)"
        :title="data.label"
        @click.stop="handleRemove(data)">
        删除
      </span>
    </template>
  </ex-tree>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {ElMessageBox} from "element-plus";
const options = ref([
  {
    label: '一级',
    value: 'l1',
    children: [
      {label: '北京', value: 'Beijin', icon: 'User'},
      {label: '天津', value: 'Tianjin'},
      {label: '上海', value: 'Shanghai'},
      {label: '重庆', value: 'Chongqi'},
    ]
  },
  {
    label: '二级',
    value: 'l2',
    children: [
      {label: '北京2', value: 'Beijin2', disabled: true},
      {label: '天津2', value: 'Tianjin2'},
      {label: '上海2', value: 'Shanghai2'},
      {label: '重庆2', value: 'Chongqi2'},
    ]
  }

]);

const handleRemove = (data) => {
  ElMessageBox.confirm(
      \`是否确认删除【\${data.label}】？\`,
      '提示',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      })
}

<\/script>`,_=`<template>
  <span class="example-title">自定义选项插槽</span>
  <ex-tree :data="options">
    <template #default="{data}">
      <span style="color: red" v-if="data.value === 'Beijin'">这是北京</span>
      <span v-else>
        {{ data.label }}
      </span>
    </template>
  </ex-tree>

  <span class="example-title">虚拟树 自定义图标，自定义操作</span>
  <ex-tree :data="options" :virtualized="true" :height="200">
    <template #icon="{}">
      <el-icon><More /></el-icon>
    </template>
    <template #action="{data}">
      <span style="margin-left: 8px; color: var(--el-color-danger); font-size: var(--el-font-size-small)" :title="data.label">删除</span>
    </template>
  </ex-tree>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const options = ref([
  {
    label: '一级',
    value: 'l1',
    children: [
      {label: '北京', value: 'Beijin', icon: 'User'},
      {label: '天津', value: 'Tianjin'},
      {label: '上海', value: 'Shanghai'},
      {label: '重庆', value: 'Chongqi'},
    ]
  },
  {
    label: '二级',
    value: 'l2',
    children: [
      {label: '北京2', value: 'Beijin2', disabled: true},
      {label: '天津2', value: 'Tianjin2'},
      {label: '上海2', value: 'Shanghai2'},
      {label: '重庆2', value: 'Chongqi2'},
    ]
  }

])

<\/script>`,T=JSON.parse('{"title":"ExTree 树","description":"","frontmatter":{},"headers":[],"relativePath":"component/tree/index.md","filePath":"component/tree/index.md"}'),k={name:"component/tree/index.md"},w=Object.assign(k,{setup(N){const y=i();o(async()=>{y.value=(await C(async()=>{const{default:a}=await import("./chunks/apiDemo.Dgk_RhHL.js");return{default:a}},__vite__mapDeps([0,1]))).default});const p=i();o(async()=>{p.value=(await C(async()=>{const{default:a}=await import("./chunks/lineDemo.B3mP9PeM.js");return{default:a}},__vite__mapDeps([2,1,3]))).default});const n=i(!0),u=i();return o(async()=>{u.value=(await C(async()=>{const{default:a}=await import("./chunks/baseDemo.B9zkAmbV.js");return{default:a}},__vite__mapDeps([4,1]))).default}),(a,t)=>{const r=v("ClientOnly");return A(),m("div",null,[t[3]||(t[3]=h("",3)),x(e(l(c),null,null,512),[[g,n.value]]),e(r,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(u))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=s("h2",{id:"开启连接线",tabindex:"-1"},[b("开启连接线 "),s("a",{class:"header-anchor",href:"#开启连接线","aria-label":'Permalink to "开启连接线"'},"​")],-1)),x(e(l(c),null,null,512),[[g,n.value]]),e(r,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:l(D)},{vue:d(()=>[e(l(p))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=s("h2",{id:"绑定api用法",tabindex:"-1"},[b("绑定api用法 "),s("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),x(e(l(c),null,null,512),[[g,n.value]]),e(r,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),vueCode:l(B)},{vue:d(()=>[e(l(y))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=h("",11))])}}});export{T as __pageData,w as default};
