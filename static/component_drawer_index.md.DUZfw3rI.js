const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/registerDemo.DJYN1Zgz.js","static/chunks/theme.D3OqrOCm.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.B5i6CUMT.js"])))=>i.map(i=>d[i]);
import{p as i,v as f,V as c,C as b,c as m,o as v,b2 as C,af as y,G as e,j as n,ag as p,k as l,w as s,a as r}from"./chunks/framework.B3HgsgJJ.js";import{O as h,E as u}from"./chunks/index.DgrmyhQY.js";const k=`<template>
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
`,w=`<template>
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
`,N=JSON.parse('{"title":"ExDrawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"component/drawer/index.md","filePath":"component/drawer/index.md"}'),D={name:"component/drawer/index.md"},E=Object.assign(D,{setup(A){const o=i();f(async()=>{o.value=(await c(async()=>{const{default:d}=await import("./chunks/registerDemo.DJYN1Zgz.js");return{default:d}},__vite__mapDeps([0,1,2]))).default});const a=i(!0),g=i();return f(async()=>{g.value=(await c(async()=>{const{default:d}=await import("./chunks/baseDemo.B5i6CUMT.js");return{default:d}},__vite__mapDeps([3,2]))).default}),(d,t)=>{const x=b("ClientOnly");return v(),m("div",null,[t[2]||(t[2]=C('<h1 id="exdrawer-抽屉" tabindex="-1">ExDrawer 抽屉 <a class="header-anchor" href="#exdrawer-抽屉" aria-label="Permalink to &quot;ExDrawer 抽屉&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验</p></div><h2 id="ref用法" tabindex="-1">Ref用法 <a class="header-anchor" href="#ref用法" aria-label="Permalink to &quot;Ref用法&quot;">​</a></h2><blockquote><p>绑定Ref属性调用 <code>open</code> 方法打开抽屉</p></blockquote>',4)),y(e(l(h),null,null,512),[[p,a.value]]),e(x,null,{default:s(()=>[e(l(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(w)},{vue:s(()=>[e(l(g))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=n("h2",{id:"usedrawer注册绑定方式用法",tabindex:"-1"},[r("useDrawer注册绑定方式用法 "),n("a",{class:"header-anchor",href:"#usedrawer注册绑定方式用法","aria-label":'Permalink to "useDrawer注册绑定方式用法"'},"​")],-1)),t[4]||(t[4]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[r("对于复杂的场景，可以配合 "),n("code",null,"useDrawer"),r(" 来使用")])],-1)),y(e(l(h),null,null,512),[[p,a.value]]),e(x,null,{default:s(()=>[e(l(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(k)},{vue:s(()=>[e(l(o))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=C('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">标题</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string/number</td><td style="text-align:left;">50%</td><td style="text-align:left;">窗体的大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><code>rtl</code> <code>ltr</code> <code>ttb</code> <code>btt</code> <code>rtl</code></td><td style="text-align:left;">rtl</td><td style="text-align:left;">打开的方向</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">modal</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否需要遮罩层</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">modalClass</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">遮罩的自定义类名</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">teleported</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">自身是否插入至 body 元素上，和<code>appendToBody</code>相同</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">lockScroll</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否将body滚动锁定</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">openDelay</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">打开的延时时间，单位毫秒</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">closeDelay</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">关闭的延时时间，单位毫秒</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">closeOnClickModal</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否可以通过点击 modal 关闭</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">closeOnPressEscape</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否可以通过按下 ESC 关闭</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showClose</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示关闭按钮</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">beforeClose</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">关闭前的回调， 回调函数内执行<code>done</code>参数方法的时候才会关闭</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">destroyOnClose</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">关闭时，销毁其中的元素</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">zIndex</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">和原生的CSS的z-index相同</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">lazy</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">延时加载（首次打开才去渲染）</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">withHeader</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示头部</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">withFooter</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示底部</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">resizeable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否可拖拽改变大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">弹框加载中动画</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showConfirmButton</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示确认按钮</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showCancelButton</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示取消按钮</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">confirmButtonText</td><td style="text-align:left;">string</td><td style="text-align:left;">确认</td><td style="text-align:left;">确认按钮文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">cancelButtonText</td><td style="text-align:left;">string</td><td style="text-align:left;">取消</td><td style="text-align:left;">取消按钮文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">confirmLoading</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">确认按钮加载中动画</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">exit</td><td style="text-align:left;">-</td><td style="text-align:left;">点击关闭按钮时触发，同时关闭抽屉</td></tr><tr><td style="text-align:left;">cancel</td><td style="text-align:left;">-</td><td style="text-align:left;">点击取消按钮时触发，同时关闭抽屉</td></tr><tr><td style="text-align:left;">confirm</td><td style="text-align:left;">-</td><td style="text-align:left;">点击确认按钮时触发</td></tr><tr><td style="text-align:left;">register</td><td style="text-align:left;"><code>(instance)</code></td><td style="text-align:left;">注册事件</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">header</td><td style="text-align:left;">-</td><td style="text-align:left;">顶部操作区，会替换标题部分</td></tr><tr><td style="text-align:left;">default</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义内容</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">-</td><td style="text-align:left;">底部操作区，会替换<code>确认</code> <code>取消</code> 按钮</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">setProps</td><td style="text-align:left;"><code>(data?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">设置属性方法，<code>data</code>为需要设置抽屉的props值</td></tr><tr><td style="text-align:left;">open</td><td style="text-align:left;"><code>(data?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">打开抽屉方法，<code>data</code>为自定义设置的参数</td></tr><tr><td style="text-align:left;">close</td><td style="text-align:left;">-</td><td style="text-align:left;">关闭抽屉方法</td></tr></tbody></table><h2 id="hooks" tabindex="-1">Hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;Hooks&quot;">​</a></h2><h3 id="usedrawer" tabindex="-1">useDrawer <a class="header-anchor" href="#usedrawer" aria-label="Permalink to &quot;useDrawer&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDrawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">useDialog</td><td style="text-align:left;"><code>(data?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;"><code>data</code>为需要设置抽屉的props值</td></tr><tr><td style="text-align:left;">register</td><td style="text-align:left;">Function</td><td style="text-align:left;">useDrawer返回的处理注册的方法，绑定到<code>register</code>事件上</td></tr><tr><td style="text-align:left;">methods</td><td style="text-align:left;">-</td><td style="text-align:left;">useDrawer返回的组件实例方法，详见<a href="#exposes">Exposes</a></td></tr></tbody></table>',13))])}}});export{N as __pageData,E as default};
