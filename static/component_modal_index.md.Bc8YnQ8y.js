const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/funDemo.DZAjripK.js","static/chunks/theme.D3OqrOCm.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.D87kmupT.js"])))=>i.map(i=>d[i]);
import{p as s,v as C,V as u,C as y,c as b,o as m,b2 as x,af as c,G as e,j as h,ag as f,k as l,w as d,a as v}from"./chunks/framework.B3HgsgJJ.js";import{O as p,E as g}from"./chunks/index.DgrmyhQY.js";const A=`<template>
  <div>
    <el-button @click="handleOpen">点击打开模态框</el-button>
    <el-button @click="handleOpen2">点击打开模态框-自定义宽高</el-button>
  </div>
</template>
<script lang="ts" setup>
import {h} from "vue";
import {ExModalBox} from "element-plus-extension";

const handleOpen = () => {
  ExModalBox(h('div', '自定义内容'));
}
const handleOpen2 = () => {
  ExModalBox({
    title: '标题',
    withHeader: true,
    draggable: true,
    width: '50%',
    height: '500px',
    content: h('div', '自定义宽高')
  });
}
<\/script>
`,_=`<template>
  <div>
    <el-button @click="handleOpen">点击打开模态框</el-button>
    <ex-modal ref="modalRef" :show-close="true">
      模态框内容
    </ex-modal>

    <el-button @click="handleOpen2">自定义宽高</el-button>
    <ex-modal ref="modalRef2" :show-close="true" :width="500" :height="400">
      自定义宽高 500 * 400
    </ex-modal>

    <el-button @click="handleOpen3">可拖拽-需显示头部</el-button>
    <ex-modal ref="modalRef3" :with-header="true" :draggable="true" title="这是标题" :show-close="true" :width="500" :height="400">
      <template #title="{title}">
        自定义标题插槽 {{ title }}
      </template>
      自定义宽高 500 * 400
      可拖拽
    </ex-modal>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const modalRef = ref();
const modalRef2 = ref();
const modalRef3 = ref();
const handleOpen = () => {
  modalRef.value.open();
}
const handleOpen2 = () => {
  modalRef2.value.open();
}
const handleOpen3 = () => {
  modalRef3.value.open();
}
<\/script>`,V=JSON.parse('{"title":"ExModal 模态框","description":"","frontmatter":{},"headers":[],"relativePath":"component/modal/index.md","filePath":"component/modal/index.md"}'),B={name:"component/modal/index.md"},N=Object.assign(B,{setup(D){const i=s();C(async()=>{i.value=(await u(async()=>{const{default:a}=await import("./chunks/funDemo.DZAjripK.js");return{default:a}},__vite__mapDeps([0,1,2]))).default});const n=s(!0),o=s();return C(async()=>{o.value=(await u(async()=>{const{default:a}=await import("./chunks/baseDemo.D87kmupT.js");return{default:a}},__vite__mapDeps([3,2]))).default}),(a,t)=>{const r=y("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=x('<h1 id="exmodal-模态框" tabindex="-1">ExModal 模态框 <a class="header-anchor" href="#exmodal-模态框" aria-label="Permalink to &quot;ExModal 模态框&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>与Dialog相似的功能，在 UI 上带来不一样的体验。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',3)),c(e(l(p),null,null,512),[[f,n.value]]),e(r,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(o))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=h("h2",{id:"函数式用法",tabindex:"-1"},[v("函数式用法 "),h("a",{class:"header-anchor",href:"#函数式用法","aria-label":'Permalink to "函数式用法"'},"​")],-1)),c(e(l(p),null,null,512),[[f,n.value]]),e(r,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:l(A)},{vue:d(()=>[e(l(i))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=x('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">withHeader</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示头部</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">标题</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">string/number</td><td style="text-align:left;">100%</td><td style="text-align:left;">宽度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">string/number</td><td style="text-align:left;">100%</td><td style="text-align:left;">高度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showClose</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示关闭按钮</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">modal</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否需要遮罩层</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">modalClass</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">遮罩的自定义类名</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">lockScroll</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否将body滚动锁定</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">closeOnClickModal</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否可以通过点击 modal 关闭</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">teleported</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">自身是否插入至 <code>container</code> 设置的元素上</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">container</td><td style="text-align:left;">string</td><td style="text-align:left;">body</td><td style="text-align:left;">挂载元素</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">draggable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否启用可拖拽功能，<code>withHeader</code>为true时有效</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">open</td><td style="text-align:left;">-</td><td style="text-align:left;">打开模态框事件</td></tr><tr><td style="text-align:left;">opened</td><td style="text-align:left;">-</td><td style="text-align:left;">打开模态框动画结束事件</td></tr><tr><td style="text-align:left;">close</td><td style="text-align:left;">-</td><td style="text-align:left;">关闭模态框事件</td></tr><tr><td style="text-align:left;">closed</td><td style="text-align:left;">-</td><td style="text-align:left;">关闭模态框动画结束事件</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">-</td><td style="text-align:left;">标题内容</td></tr><tr><td style="text-align:left;">default</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义内容</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">open</td><td style="text-align:left;">-</td><td style="text-align:left;">打开模态框方法</td></tr><tr><td style="text-align:left;">close</td><td style="text-align:left;">-</td><td style="text-align:left;">关闭模态框方法</td></tr></tbody></table>',9))])}}});export{V as __pageData,N as default};
