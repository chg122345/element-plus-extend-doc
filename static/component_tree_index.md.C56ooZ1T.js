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

<\/script>`,T=JSON.parse('{"title":"ExTree 树","description":"","frontmatter":{},"headers":[],"relativePath":"component/tree/index.md","filePath":"component/tree/index.md"}'),k={name:"component/tree/index.md"},w=Object.assign(k,{setup(N){const y=i();o(async()=>{y.value=(await C(async()=>{const{default:a}=await import("./chunks/apiDemo.Dgk_RhHL.js");return{default:a}},__vite__mapDeps([0,1]))).default});const p=i();o(async()=>{p.value=(await C(async()=>{const{default:a}=await import("./chunks/lineDemo.B3mP9PeM.js");return{default:a}},__vite__mapDeps([2,1,3]))).default});const n=i(!0),u=i();return o(async()=>{u.value=(await C(async()=>{const{default:a}=await import("./chunks/baseDemo.B9zkAmbV.js");return{default:a}},__vite__mapDeps([4,1]))).default}),(a,t)=>{const r=v("ClientOnly");return A(),m("div",null,[t[3]||(t[3]=h('<h1 id="extree-树" tabindex="-1">ExTree 树 <a class="header-anchor" href="#extree-树" aria-label="Permalink to &quot;ExTree 树&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>用于承载有父子关系的结构化内容，提供内容层级的展示。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',3)),x(e(l(c),null,null,512),[[g,n.value]]),e(r,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(u))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=s("h2",{id:"开启连接线",tabindex:"-1"},[b("开启连接线 "),s("a",{class:"header-anchor",href:"#开启连接线","aria-label":'Permalink to "开启连接线"'},"​")],-1)),x(e(l(c),null,null,512),[[g,n.value]]),e(r,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:l(D)},{vue:d(()=>[e(l(p))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=s("h2",{id:"绑定api用法",tabindex:"-1"},[b("绑定api用法 "),s("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),x(e(l(c),null,null,512),[[g,n.value]]),e(r,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),vueCode:l(B)},{vue:d(()=>[e(l(y))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=h('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">virtualized</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否渲染虚拟树</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否开启过滤</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showLine</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否开启连接线</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">number/string</td><td style="text-align:left;">-</td><td style="text-align:left;">高度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">offsetHeight</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">自动计算高度时，偏差高度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">树数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">object</td><td style="text-align:left;"><code>{label: &#39;label&#39;,value: &#39;value&#39;, children: &#39;children&#39;}</code></td><td style="text-align:left;">选项数据的配置 请参阅下面<a href="#treeprops">TreeProps</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">emptyText</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">为空的时候展示的文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">highlightCurrent</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否高亮当前选中节点</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showCheckbox</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">节点是否可被选择</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">checkStrictly</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">在显示复选框的情况下，是否严格的遵循父子不互相关联的做法</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">defaultCheckedKeys</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">默认选中的节点的 key 的数组</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">defaultExpandedKeys</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">默认展开的节点的 key 的数组</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">相邻级节点间的水平缩进</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">itemSize</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">各节点高度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义树节点图标组件</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">currentNodeKey</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">当前选中的节点</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">expandOnClickNode</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否在点击节点的时候展开或者收缩节点</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">checkOnClickNode</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否在点击节点的时候选中节点</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">accordion</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否每次只打开一个同级树节点展开</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">filterNodeMethod</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义过滤方法，方法参数<code>(value, data, node)</code>，<code>value</code>为搜索关键字，<code>data</code>为节点数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">loadImmediate</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">api是否主动加载数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">api</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据加载api</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">beforeApiFetch</td><td style="text-align:left;">Function/object</td><td style="text-align:left;">-</td><td style="text-align:left;">请求api前调用返回值用于api携带参数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">parseApiData</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">解析api返回的数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">apiEffectKey</td><td style="text-align:left;">Function/string</td><td style="text-align:left;">-</td><td style="text-align:left;">动态加载apikey，值变化后会调用组件<code>reload</code>方法</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="treeprops" tabindex="-1">TreeProps <a class="header-anchor" href="#treeprops" aria-label="Permalink to &quot;TreeProps&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">label</td><td style="text-align:left;">string</td><td style="text-align:left;">label</td><td style="text-align:left;">指定节点标签为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">value</td><td style="text-align:left;">指定节点key为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">string</td><td style="text-align:left;">children</td><td style="text-align:left;">指定节点的子选项为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">disabled</td><td style="text-align:left;">指定节点的禁用为选项对象的某个属性值/返回是否禁用</td></tr><tr><td style="text-align:left;">show</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">指定节点是否显示为选项对象的某个属性值/返回是否显示</td></tr><tr><td style="text-align:left;">isLeaf</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效/返回是否</td></tr><tr><td style="text-align:left;">class</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义节点类名/返回class</td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">节点显示格式化函数</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">loaded-options</td><td style="text-align:left;"><code>(data)</code></td><td style="text-align:left;">绑定api时数据加载完成触发，<code>data</code>为api返回的树数据</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;"><code>({data, node})</code></td><td style="text-align:left;">自定义节点内容，<code>data</code>为节点数据，<code>node</code>为树节点</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;"><code>({data, node})</code></td><td style="text-align:left;">自定义图标内容，显示在节点前</td></tr><tr><td style="text-align:left;">action</td><td style="text-align:left;"><code>({data, node})</code></td><td style="text-align:left;">自定义操作内容，显示在节点后</td></tr><tr><td style="text-align:left;">empty</td><td style="text-align:left;">-</td><td style="text-align:left;">无数据集时内容</td></tr><tr><td style="text-align:left;">toolbar</td><td style="text-align:left;">-</td><td style="text-align:left;">工具栏内容，显示在过滤输入框后</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">reload</td><td style="text-align:left;"><code>(params?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">调用api重新加载选项数据，<code>params</code>为调用api携带的参数</td></tr><tr><td style="text-align:left;">bindOptionsData</td><td style="text-align:left;"><code>(data: Array&lt;IOptionData&gt;)</code></td><td style="text-align:left;">重新绑定组件选项数据，<code>data</code>为选项数据</td></tr></tbody></table>',11))])}}});export{T as __pageData,w as default};
