const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/baseDemo.D62DYlRi.js","static/chunks/theme.D3OqrOCm.js","static/chunks/framework.B3HgsgJJ.js"])))=>i.map(i=>d[i]);
import{p as o,v as p,V as c,C as m,c as b,o as x,j as e,af as g,G as a,b2 as k,a as r,ag as y,k as n,w as h}from"./chunks/framework.B3HgsgJJ.js";import{O as u,E as C}from"./chunks/index.DgrmyhQY.js";const f=`<template>
  <ex-search-combination v-bind="searchFormProps" />
  <span class="example-title">自定义触发插槽</span>
  <ex-search-combination v-bind="searchFormProps">
    <template #trigger>
      <el-button type="primary">组合搜索</el-button>
    </template>
  </ex-search-combination>
  <span class="example-title">多条件</span>
  <ex-search-combination v-bind="searchFormProps" :multiple="true">
    <template #trigger>
      <el-button type="primary">组合搜索-多条件</el-button>
    </template>
  </ex-search-combination>
  <span class="example-title">组合搜索面板</span>
  <ex-search-combination-pane v-bind="searchFormProps" v-model="condition" />
  <span class="example-title">双向绑定条件值: </span>
  {{ condition }}
</template>

<script lang="ts" setup>
import {IExFormSchema, ExSearchCombinationPane} from "element-plus-extension";
import {ref} from "vue";

const condition = ref({
  join: "AND",
  children: [{ "field": "birthday", "comparison": "BETWEEN", "value": [ "2024-04-23T16:00:00.000Z", "2024-05-29T16:00:00.000Z" ] } ] });

const searchFormProps = ref({
  schemas: [
    {
      prop: 'name',
      label: '姓名',
      component: 'ExInput',
      defaultValue: '哈哈2'
    },
    {
      prop: 'name1',
      label: '姓名1',
      component: 'ExInput',
      defaultValue: '哈哈1'
    },
    {
      prop: 'name2',
      label: '姓名2',
      required: true,
      colProps: 8,
      component: 'ExInput',
      defaultValue: '哈哈222'
    },
    {
      prop: 'user',
      label: '用户',
      required: true,
      colProps: 8,
      component: 'ExUserSelect',
    },
    {
      prop: 'org',
      label: '组织',
      required: true,
      colProps: 8,
      component: 'ExOrgSelect',
    },
    {
      prop: 'tag',
      label: '标签',
      required: true,
      colProps: 8,
      component: 'ExTagSelect',
    },
    {
      prop: 'age',
      label: '年龄',
      component: 'ElInputNumber',
      helpMessage: '只能输入正整数',
      componentProps: {
        precision: 0,
        min: 0
      }
    },
    {
      prop: 'age1',
      label: '年龄1',
      component: 'ElInputNumber',
      helpMessage: '只能输入正整数',
      componentProps: {
        precision: 0,
        min: 0
      }
    },
    {
      prop: 'age2',
      label: '年龄2',
      component: 'ElInputNumber',
      helpMessage: '只能输入正整数',
      componentProps: {
        precision: 0,
        min: 0
      }
    },
    {
      prop: 'birthday',
      label: '生日',
      component: 'ElDatePicker',
    },
    {
      label: '',
      prop: 'hobby',
      component: 'ExCheckboxGroup',
      colProps: 10,
      componentProps: {
        options: [
          {
            label: '吃饭',
            value: 'eat'
          },
          {
            label: '睡觉',
            value: 'sleep'
          },
          {
            label: '运动',
            value: 'sport'
          },
          {
            label: '玩游戏',
            value: 'games'
          }
        ]
      }
    },
    {
      label: 'tree',
      prop: 'tree',
      component: 'ExTreeSelect',
      colProps: 10,
      componentProps: {
        options: [
          {
            label: '吃饭',
            value: 'eat'
          },
          {
            label: '睡觉',
            value: 'sleep'
          },
          {
            label: '运动',
            value: 'sport'
          },
          {
            label: '玩游戏',
            value: 'games'
          }
        ]
      }
    },
    {
      label: '邮箱',
      prop: 'email',
      helpMessage: '点击发送邮件',
      component: 'ExInput',
    },
  ] as IExFormSchema[],
  onSearch(v) {
    console.error(v, '====v');
  },
  onReset(v) {
    console.error(v, 'onReset');
  }
});

<\/script>
`,P=JSON.parse('{"title":"ExSearchCombination 组合搜索","description":"","frontmatter":{},"headers":[],"relativePath":"component/search-combination/index.md","filePath":"component/search-combination/index.md"}'),E={name:"component/search-combination/index.md"},D=Object.assign(E,{setup(v){const l=o(!0),s=o();return p(async()=>{s.value=(await c(async()=>{const{default:i}=await import("./chunks/baseDemo.D62DYlRi.js");return{default:i}},__vite__mapDeps([0,1,2]))).default}),(i,t)=>{const d=m("ClientOnly");return x(),b("div",null,[t[1]||(t[1]=e("h1",{id:"exsearchcombination-组合搜索",tabindex:"-1"},[r("ExSearchCombination 组合搜索 "),e("a",{class:"header-anchor",href:"#exsearchcombination-组合搜索","aria-label":'Permalink to "ExSearchCombination 组合搜索"'},"​")],-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),g(a(n(u),null,null,512),[[y,l.value]]),a(d,null,{default:h(()=>[a(n(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:n(f)},{vue:h(()=>[a(n(s))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=k(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">schemas</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">字段选项配置，数据类型请参阅<a href="/element-plus-extend-doc/component/form/#iexformschema">IExFormSchema</a></td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">modelValue</td><td style="text-align:left;">Array/object</td><td style="text-align:left;">-</td><td style="text-align:left;">绑定值， 数据类型请参阅下面<a href="#iexsearchcombinationmodel">IExSearchCombinationModel</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否多条件组合</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">update:modelValue</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">点击确认搜索时触发，<code>value</code>搜索值，数据类型请参阅下面<a href="#iexsearchcombinationmodel">IExSearchCombinationModel</a></td></tr><tr><td style="text-align:left;">search</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">点击确认搜索时触发</td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">点击重置或点击清空时触发</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">trigger</td><td style="text-align:left;"><code>()</code></td><td style="text-align:left;">自定义节点内容，<code>data</code>为节点数据，<code>node</code>为树节点</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">getSearchValue</td><td style="text-align:left;"><code>() =&gt; Array&lt;IExSearchCombinationModel&gt;</code></td><td style="text-align:left;">获取搜索值</td></tr><tr><td style="text-align:left;">setSearchValue</td><td style="text-align:left;"><code>(value: Array&lt;IExSearchCombinationModel&gt;)</code></td><td style="text-align:left;">设置搜索值</td></tr></tbody></table><h2 id="组合搜索面板api" tabindex="-1">组合搜索面板API <a class="header-anchor" href="#组合搜索面板api" aria-label="Permalink to &quot;组合搜索面板API&quot;">​</a></h2><h3 id="props-1" tabindex="-1">Props <a class="header-anchor" href="#props-1" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">schemas</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">字段选项配置，数据类型请参阅<a href="/element-plus-extend-doc/component/form/#iexformschema">IExFormSchema</a></td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">modelValue</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">绑定值， 数据类型请参阅下面<a href="#iexsearchcombinationmodel">IExSearchCombinationPaneModel</a></td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events-1" tabindex="-1">Events <a class="header-anchor" href="#events-1" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">update:modelValue</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;"><code>value</code>绑定的值，数据类型请参阅下面<a href="#iexsearchcombinationmodel">IExSearchCombinationPaneModel</a></td></tr></tbody></table><h3 id="exposes-1" tabindex="-1">Exposes <a class="header-anchor" href="#exposes-1" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">getSearchValue</td><td style="text-align:left;"><code>() =&gt; IExSearchCombinationPaneModel</code></td><td style="text-align:left;">获取搜索值</td></tr><tr><td style="text-align:left;">setSearchValue</td><td style="text-align:left;"><code>(value: IExSearchCombinationPaneModel)</code></td><td style="text-align:left;">设置搜索值</td></tr></tbody></table><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><h3 id="iexsearchcombinationmodel" tabindex="-1">IExSearchCombinationModel <a class="header-anchor" href="#iexsearchcombinationmodel" aria-label="Permalink to &quot;IExSearchCombinationModel&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExSearchCombinationModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 搜索条件字段*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  field</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 比较符*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  comparison</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 条件值*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IModelValueArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IModelValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 字段类型*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="iexsearchcombinationpanemodel" tabindex="-1">IExSearchCombinationPaneModel <a class="header-anchor" href="#iexsearchcombinationpanemodel" aria-label="Permalink to &quot;IExSearchCombinationPaneModel&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExSearchCombinationPaneModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  join</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;AND&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;OR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  children</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IExSearchCombinationModel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExSearchCombinationPaneModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21))])}}});export{P as __pageData,D as default};
