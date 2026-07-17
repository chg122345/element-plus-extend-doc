const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/serviceDemo.Dw3ZwIIC.js","static/chunks/framework.l8elv8IJ.js","static/chunks/theme.BdqYSx0Z.js","static/chunks/baseDemo.B6iJF9c6.js"])))=>i.map(i=>d[i]);
import{d as g,v as C,V as p,C as b,o as E,c as v,j as s,a as r,ar as u,as as k,E as t,k as n,w as l,aA as m,aT as f,G as c,p as A}from"./chunks/framework.l8elv8IJ.js";import{C as x,S as y}from"./chunks/index.DVsCdBIq.js";const F=`<template>
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
`,B=`<template>
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
`,w=JSON.parse('{"title":"ExContextmenu 右键菜单","description":"","frontmatter":{},"headers":[],"relativePath":"component/contextmenu/index.md","filePath":"component/contextmenu/index.md"}'),D={name:"component/contextmenu/index.md"},P=g({...D,setup(_){const d=c();C(async()=>{d.value=(await p(async()=>{const{default:i}=await import("./chunks/serviceDemo.Dw3ZwIIC.js");return{default:i}},__vite__mapDeps([0,1,2]))).default});const a=A(!0),o=c();return C(async()=>{o.value=(await p(async()=>{const{default:i}=await import("./chunks/baseDemo.B6iJF9c6.js");return{default:i}},__vite__mapDeps([3,1]))).default}),(i,e)=>{const h=b("ClientOnly");return E(),v("div",null,[e[2]||(e[2]=s("h1",{id:"excontextmenu-右键菜单",tabindex:"-1"},[r("ExContextmenu 右键菜单 "),s("a",{class:"header-anchor",href:"#excontextmenu-右键菜单","aria-label":'Permalink to "ExContextmenu 右键菜单"'},"​")],-1)),e[3]||(e[3]=s("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),u(t(n(x),null,null,512),[[k,a.value]]),t(h,null,{default:l(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:n(B)},m({_:2},[o.value?{name:"vue",fn:l(()=>[t(n(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=s("h2",{id:"服务调用用法",tabindex:"-1"},[r("服务调用用法 "),s("a",{class:"header-anchor",href:"#服务调用用法","aria-label":'Permalink to "服务调用用法"'},"​")],-1)),u(t(n(x),null,null,512),[[k,a.value]]),t(h,null,{default:l(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:n(F)},m({_:2},[d.value?{name:"vue",fn:l(()=>[t(n(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=f(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">appendTo</td><td style="text-align:left;">string</td><td style="text-align:left;"><code>body</code></td><td style="text-align:left;">组件挂载dom</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">menuList</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">菜单，类型参照<a href="#iexcontextmenuitem">IExContextmenuItem</a></td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">contextmenu-click</td><td style="text-align:left;"><code>(item, e)</code></td><td style="text-align:left;">菜单点击事件，<code>item</code>为菜单项，<code>e</code>为鼠标事件</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">open</td><td style="text-align:left;"><code>(e:MouseEvent, data?:any)</code></td><td style="text-align:left;">打开菜单面板，<code>data</code>为自定义数据，<code>e</code>为鼠标事件</td></tr><tr><td style="text-align:left;">close</td><td style="text-align:left;">-</td><td style="text-align:left;">关闭菜单面板</td></tr><tr><td style="text-align:left;">setMenuList</td><td style="text-align:left;"><code>(menuList: Array&lt;IExMenuItem&gt;)</code></td><td style="text-align:left;">重新设定菜单</td></tr></tbody></table><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><h3 id="iexcontextmenuitem" tabindex="-1">IExContextmenuItem <a class="header-anchor" href="#iexcontextmenuitem" aria-label="Permalink to &quot;IExContextmenuItem&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExContextmenuItem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  divided</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  hide</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MouseEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,10))])}}});export{w as __pageData,P as default};
