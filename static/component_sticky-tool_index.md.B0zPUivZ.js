const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/teleportedDemo.B1n9eNJP.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/horizontalDemo.BOyVYEL6.js","static/chunks/baseDemo.DlMH-UAS.js"])))=>i.map(i=>d[i]);
import{p as a,v as d,V as p,C as v,c as f,o as x,b2 as g,af as C,G as e,j as o,ag as h,k as l,w as n,a as b}from"./chunks/framework.B3HgsgJJ.js";import{O as c,E as k}from"./chunks/index.DgrmyhQY.js";const A=`<template>
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
`,F=`<template>
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
`,B=`<template>
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
`,w=JSON.parse('{"title":"ExStickyTool 悬浮边栏","description":"","frontmatter":{},"headers":[],"relativePath":"component/sticky-tool/index.md","filePath":"component/sticky-tool/index.md"}'),D={name:"component/sticky-tool/index.md"},N=Object.assign(D,{setup(E){const y=a();d(async()=>{y.value=(await p(async()=>{const{default:i}=await import("./chunks/teleportedDemo.B1n9eNJP.js");return{default:i}},__vite__mapDeps([0,1]))).default});const u=a();d(async()=>{u.value=(await p(async()=>{const{default:i}=await import("./chunks/horizontalDemo.BOyVYEL6.js");return{default:i}},__vite__mapDeps([2,1]))).default});const s=a(!0),m=a();return d(async()=>{m.value=(await p(async()=>{const{default:i}=await import("./chunks/baseDemo.DlMH-UAS.js");return{default:i}},__vite__mapDeps([3,1]))).default}),(i,t)=>{const r=v("ClientOnly");return x(),f("div",null,[t[3]||(t[3]=g('<h1 id="exstickytool-悬浮边栏" tabindex="-1">ExStickyTool 悬浮边栏 <a class="header-anchor" href="#exstickytool-悬浮边栏" aria-label="Permalink to &quot;ExStickyTool 悬浮边栏&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>用于展示快捷操作</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',3)),C(e(l(c),null,null,512),[[h,s.value]]),e(r,null,{default:n(()=>[e(l(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:l(B)},{vue:n(()=>[e(l(m))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=o("h2",{id:"限制一个方向上拖动",tabindex:"-1"},[b("限制一个方向上拖动 "),o("a",{class:"header-anchor",href:"#限制一个方向上拖动","aria-label":'Permalink to "限制一个方向上拖动"'},"​")],-1)),C(e(l(c),null,null,512),[[h,s.value]]),e(r,null,{default:n(()=>[e(l(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:l(F)},{vue:n(()=>[e(l(u))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=o("h2",{id:"浮动到body中",tabindex:"-1"},[b("浮动到body中 "),o("a",{class:"header-anchor",href:"#浮动到body中","aria-label":'Permalink to "浮动到body中"'},"​")],-1)),C(e(l(c),null,null,512),[[h,s.value]]),e(r,null,{default:n(()=>[e(l(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{s.value=!1}),vueCode:l(A)},{vue:n(()=>[e(l(y))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=g(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">list</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">悬浮菜单，数据类型请参阅下面<a href="#iexstickyitemprops">IExStickyItemProps</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><code>normal</code> <code>compact</code></td><td style="text-align:left;"><code>normal</code></td><td style="text-align:left;">类型，<code>compact</code>紧凑型</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><code>horizontal</code> <code>vertical</code></td><td style="text-align:left;">-</td><td style="text-align:left;">拖动方向，为空时可随意拖动</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">shape</td><td style="text-align:left;"><code>round</code> <code>square</code></td><td style="text-align:left;"><code>round</code></td><td style="text-align:left;">形状</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">placement</td><td style="text-align:left;"><code>right-top</code> <code>right-center</code> <code>right-bottom</code> <code>left-top</code> <code>left-center</code> <code>left-bottom</code></td><td style="text-align:left;"><code>right-center</code></td><td style="text-align:left;">浮动位置</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">number/string</td><td style="text-align:left;">-</td><td style="text-align:left;">宽度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">number/string</td><td style="text-align:left;">-</td><td style="text-align:left;">高度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">number/Array</td><td style="text-align:left;">-</td><td style="text-align:left;">出现位置的偏移量，为数组时分别设置[横向,纵向]偏移量</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">popoverProps</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">弹出层属性，参照<a href="https://element-plus.org/zh-CN/component/popover.html#attributes" target="_blank" rel="noreferrer">ElPopover</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">teleported</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否加载到body，为false时则浮动当前容器中</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">item-click</td><td style="text-align:left;"><code>(data, e)</code></td><td style="text-align:left;">悬浮项点击时触发，<code>data</code>该项配置数据，<code>e</code>为鼠标事件</td></tr><tr><td style="text-align:left;">item-hover</td><td style="text-align:left;"><code>(data, e)</code></td><td style="text-align:left;">悬浮项鼠标移入时触发，<code>data</code>该项配置数据，<code>e</code>为鼠标事件</td></tr></tbody></table><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><h3 id="iexstickyitemprops" tabindex="-1">IExStickyItemProps <a class="header-anchor" href="#iexstickyitemprops" aria-label="Permalink to &quot;IExStickyItemProps&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExStickyItemProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IScopedSlot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IScopedSlot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hover&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;normal&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;compact&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 弹出层内容，可自定义渲染 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  popoverContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IScopedSlot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,8))])}}});export{w as __pageData,N as default};
