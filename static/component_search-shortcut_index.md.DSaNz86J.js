const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/baseDemo.CkXf-TuL.js","static/chunks/framework.B3HgsgJJ.js"])))=>i.map(i=>d[i]);
import{p as r,v as p,V as c,C,c as g,o as k,j as e,af as u,G as a,b2 as x,a as h,ag as y,k as s,w as d}from"./chunks/framework.B3HgsgJJ.js";import{O as b,E as m}from"./chunks/index.DgrmyhQY.js";const f=`<template>
  <ex-search-shortcut v-bind="searchFormProps" />
  <span class="example-title">圆角样式</span>
  <ex-search-shortcut v-bind="searchFormProps" round />
</template>

<script lang="ts" setup>
import {IExSearchShortcutSchema} from "element-plus-extension";
import {ref} from "vue";

const searchFormProps = ref({
  schemas: [
    {
      prop: 'name',
      label: '姓名',
    },
    {
      prop: 'name1',
      label: '姓名1',
    },
    {
      prop: 'name2',
      label: '姓名2',
    },
    {
      prop: 'age',
      label: '年龄',
    },
    {
      prop: 'age1',
      label: '年龄1',
    },
    {
      prop: 'age2',
      label: '年龄2',
    },
    {
      prop: 'birthday',
      label: '生日',
    },
    {
      label: '兴趣爱好',
      prop: 'hobby',
    },
    {
      label: '邮箱',
      prop: 'email',
    },
  ] as IExSearchShortcutSchema[]
});

<\/script>
`,S=JSON.parse('{"title":"ExSearchShortcut 快捷搜索","description":"","frontmatter":{},"headers":[],"relativePath":"component/search-shortcut/index.md","filePath":"component/search-shortcut/index.md"}'),E={name:"component/search-shortcut/index.md"},B=Object.assign(E,{setup(v){const l=r(!0),n=r();return p(async()=>{n.value=(await c(async()=>{const{default:i}=await import("./chunks/baseDemo.CkXf-TuL.js");return{default:i}},__vite__mapDeps([0,1]))).default}),(i,t)=>{const o=C("ClientOnly");return k(),g("div",null,[t[1]||(t[1]=e("h1",{id:"exsearchshortcut-快捷搜索",tabindex:"-1"},[h("ExSearchShortcut 快捷搜索 "),e("a",{class:"header-anchor",href:"#exsearchshortcut-快捷搜索","aria-label":'Permalink to "ExSearchShortcut 快捷搜索"'},"​")],-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[h("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),u(a(s(b),null,null,512),[[y,l.value]]),a(o,null,{default:d(()=>[a(s(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:s(f)},{vue:d(()=>[a(s(n))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=x(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">schemas</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">字段选项配置，数据类型请参阅下面<a href="#iexsearchshortcutschema">IExSearchShortcutSchema</a></td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">占位文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否可清空</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">组件大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否为圆角</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">number</td><td style="text-align:left;">10</td><td style="text-align:left;">最大选择字段数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">defaultCheckedFields</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">默认选中的字段</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">search</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">按下键盘<code>Enter</code>键时触发，<code>value</code>搜索值，数据类型请参阅下面<a href="#iexsearchshortcutschema">IExSearchShortcutSchema</a></td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">输入框清空值时触发</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">getSearchValue</td><td style="text-align:left;"><code>() =&gt; IExSearchShortcutModel</code></td><td style="text-align:left;">获取搜索值</td></tr><tr><td style="text-align:left;">setSearchValue</td><td style="text-align:left;"><code>(value: IExSearchShortcutModel)</code></td><td style="text-align:left;">设置搜索值</td></tr></tbody></table><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><h3 id="iexsearchshortcutschema" tabindex="-1">IExSearchShortcutSchema <a class="header-anchor" href="#iexsearchshortcutschema" aria-label="Permalink to &quot;IExSearchShortcutSchema&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExSearchShortcutSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="iexsearchshortcutmodel" tabindex="-1">IExSearchShortcutModel <a class="header-anchor" href="#iexsearchshortcutmodel" aria-label="Permalink to &quot;IExSearchShortcutModel&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExSearchShortcutModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 勾选的需要搜索的字段*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 是否勾选了搜索全部*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  isSearchAllFields</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 输入框输入的值*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  searchValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,12))])}}});export{S as __pageData,B as default};
