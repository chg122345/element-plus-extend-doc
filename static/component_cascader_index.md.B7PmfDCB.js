const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/formatDemo.BU8zwdna.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/apiDemo.DiRM1Ylh.js","static/chunks/baseDemo.CSPliKPz.js"])))=>i.map(i=>d[i]);
import{p as s,v as o,V as r,C as b,c as m,o as v,b2 as C,af as c,G as e,j as y,ag as p,k as l,w as d,a as A}from"./chunks/framework.B3HgsgJJ.js";import{O as u,E as f}from"./chunks/index.DgrmyhQY.js";const B=`<template>
  <span class="example-title">选项格式化</span>
  <ex-cascader :options="options" v-model="modelValue" placeholder="请选择" :props="optionsProps" />
  <span class="example-title">绑定的值：{{ modelValue }}</span>
  <span class="example-title">选项禁用-value包含Beijin的选项</span>
  <ex-cascader :options="options" placeholder="请选择" :props="optionsProps2" />
  <span class="example-title">选项显示隐藏-仅隐藏value包含Beijin的选项</span>
  <ex-cascader :options="options" placeholder="请选择" :props="optionsProps3" />
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const modelValue = ref();
const options = ref([
  {
    label: '一级',
    value: 'l1',
    children: [
      {label: '北京', value: 'Beijin'},
      {label: '天津', value: 'Tianjin'},
      {label: '上海', value: 'Shanghai'},
      {label: '重庆', value: 'Chongqi'},
    ]
  },
  {
    label: '二级',
    value: 'l2',
    children: [
      {label: '北京2', value: 'Beijin2'},
      {label: '天津2', value: 'Tianjin2'},
      {label: '上海2', value: 'Shanghai2'},
      {label: '重庆2', value: 'Chongqi2'},
    ]
  }

]);

const optionsProps = ref({
  formatter: (data) => {
    if (!data.children) {
      return data.label + '是个好地方'
    }
    return data.label
  },
});
const optionsProps2 = ref({
  formatter: (data) => {
    if (!data.children) {
      return data.label + '是个好地方'
    }
    return data.label
  },
  disabled: (data) => {
    if (data.value.indexOf('Beijin') !== -1) {
      return true;
    }
  }
});
const optionsProps3 = ref({
  formatter: (data) => {
    if (!data.children) {
      return data.label + '是个好地方'
    }
    return data.label
  },
  show: (data) => {
    if (data.value.indexOf('Beijin') !== -1) {
      return false;
    }
    return true;
  }
});

<\/script>`,_=`<template>
  <span class="example-title">绑定api</span>
  <ex-cascader :api="api" placeholder="请选择" />
  <span class="example-title">绑定api，自动选中第一个选项</span>
  <ex-cascader v-model="modelValue" :api="api" placeholder="请选择" autoSelectFirst />
  <p>绑定的值: {{ modelValue }}</p>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const options = ref([
  {
    label: '一级',
    value: 'l1',
    children: [
      {label: '北京', value: 'Beijin'},
      {label: '天津', value: 'Tianjin'},
      {label: '上海', value: 'Shanghai'},
      {label: '重庆', value: 'Chongqi'},
    ]
  },
  {
    label: '二级',
    value: 'l2',
    children: [
      {label: '北京2', value: 'Beijin2'},
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
  <span class="example-title">绑定options</span>
  <ex-cascader :options="options" placeholder="请选择" />
  <span class="example-title">自定义选项插槽</span>
  <ex-cascader :options="options" placeholder="请选择">
    <template #default="{data}">
      <span style="color: red" v-if="data.value === 'Beijin'">这是北京</span>
      <span v-else>
        {{ data.label }}
      </span>
    </template>
  </ex-cascader>
  <span class="example-title">多级多选</span>
  <ex-cascader v-model="modelValue2" :options="options" :props="optionsProps" placeholder="请选择" />
  <p>绑定的值: {{ modelValue2 }}</p>
  <span class="example-title">多级多选-面板模式</span>
  <ex-cascader v-model="modelValue3" type="panel" :options="options" :props="optionsProps" placeholder="请选择" />
  <p>绑定的值: {{ modelValue3 }}</p>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const modelValue2 = ref();
const modelValue3 = ref();

const optionsProps = ref({
  multiple: true,
})

const options = ref([
  {
    label: '一级',
    value: 'l1',
    children: [
      {label: '北京', value: 'Beijin'},
      {label: '天津', value: 'Tianjin'},
      {label: '上海', value: 'Shanghai'},
      {label: '重庆', value: 'Chongqi'},
    ]
  },
  {
    label: '二级',
    value: 'l2',
    children: [
      {label: '北京2', value: 'Beijin2'},
      {label: '天津2', value: 'Tianjin2'},
      {label: '上海2', value: 'Shanghai2'},
      {label: '重庆2', value: 'Chongqi2'},
    ]
  }

]);

<\/script>`,T=JSON.parse('{"title":"ExCascader 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/cascader/index.md","filePath":"component/cascader/index.md"}'),V={name:"component/cascader/index.md"},P=Object.assign(V,{setup(F){const x=s();o(async()=>{x.value=(await r(async()=>{const{default:n}=await import("./chunks/formatDemo.BU8zwdna.js");return{default:n}},__vite__mapDeps([0,1]))).default});const g=s();o(async()=>{g.value=(await r(async()=>{const{default:n}=await import("./chunks/apiDemo.DiRM1Ylh.js");return{default:n}},__vite__mapDeps([2,1]))).default});const a=s(!0),h=s();return o(async()=>{h.value=(await r(async()=>{const{default:n}=await import("./chunks/baseDemo.CSPliKPz.js");return{default:n}},__vite__mapDeps([3,1]))).default}),(n,t)=>{const i=b("ClientOnly");return v(),m("div",null,[t[3]||(t[3]=C('<h1 id="excascader-选择器" tabindex="-1">ExCascader 选择器 <a class="header-anchor" href="#excascader-选择器" aria-label="Permalink to &quot;ExCascader 选择器&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>级联选择器适用于有清晰层级结构的数据集合，用户可以通过逐级查看并选择。一般而言，级联选择器包括：选择器和级联</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',3)),c(e(l(u),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(D)},{vue:d(()=>[e(l(h))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=y("h2",{id:"绑定api用法",tabindex:"-1"},[A("绑定api用法 "),y("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),c(e(l(u),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(g))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=C('<h2 id="选项动态化" tabindex="-1">选项动态化 <a class="header-anchor" href="#选项动态化" aria-label="Permalink to &quot;选项动态化&quot;">​</a></h2><blockquote><p>在 <code>props.formatter</code>的情况下显示值,此配置不改变绑定的值</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如需改变绑定的值，请使用<code>valueFormat</code> 和 <code>valueParser</code>组合</p></div>',3)),c(e(l(u),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:l(B)},{vue:d(()=>[e(l(x))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=C('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">model-value / v-model</td><td style="text-align:left;">Array/string</td><td style="text-align:left;">-</td><td style="text-align:left;">选中项绑定值</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">占位文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否可清空</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否被禁用</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">autoSelectFirst</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">自动选中第一个</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">autoClearMismatch</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">自动清除不匹配的值</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><code>default</code> <code>panel</code></td><td style="text-align:left;"><code>default</code></td><td style="text-align:left;">组件类型</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">object</td><td style="text-align:left;"><code>{label: &#39;label&#39;,value: &#39;value&#39;, children: &#39;children&#39;}</code></td><td style="text-align:left;">选项数据的配置 请参阅下面<a href="#optionprops">OptionProps</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">loadImmediate</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">api是否主动加载数据，为false时懒加载远程搜索</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">api</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据加载api</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">beforeApiFetch</td><td style="text-align:left;">Function/object</td><td style="text-align:left;">-</td><td style="text-align:left;">请求api前调用返回值用于api携带参数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">parseApiData</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">解析api返回的数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">apiEffectKey</td><td style="text-align:left;">Function/string</td><td style="text-align:left;">-</td><td style="text-align:left;">动态加载apikey，值变化后会调用组件<code>reload</code>方法</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueFormat</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">绑定值格式化函数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueParser</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">反解析<code>valueFormat</code></td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="optionprops" tabindex="-1">OptionProps <a class="header-anchor" href="#optionprops" aria-label="Permalink to &quot;OptionProps&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">label</td><td style="text-align:left;">string</td><td style="text-align:left;">label</td><td style="text-align:left;">指定选项标签为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">value</td><td style="text-align:left;">指定选项的值为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">string</td><td style="text-align:left;">children</td><td style="text-align:left;">指定选项的子选项为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">disabled</td><td style="text-align:left;">指定选项的禁用为选项对象的某个属性值/返回是否禁用</td></tr><tr><td style="text-align:left;">show</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">指定选项的是否显示为选项对象的某个属性值/返回是否显示</td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项显示格式化函数</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">update:modelValue</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>(value, {value, trigger})</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值，<code>trigger</code>为触发类型：<code>initial</code>、<code>change</code>、<code>clearMismatch</code>、<code>autoSelect</code></td></tr><tr><td style="text-align:left;">change-data</td><td style="text-align:left;"><code>(data, {trigger})</code></td><td style="text-align:left;">值改变时触发，<code>data</code>为选中选项的值，<code>trigger</code>为触发类型：<code>initial</code>、<code>change</code>、<code>clearMismatch</code>、<code>autoSelect</code></td></tr><tr><td style="text-align:left;">loaded-options</td><td style="text-align:left;"><code>(options)</code></td><td style="text-align:left;">绑定api时数据加载完成触发，<code>options</code>为api返回的选项数据</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;"><code>({node, data})</code></td><td style="text-align:left;">自定义备选项的节点内容，分别为当前节点的 Node 对象和数据</td></tr><tr><td style="text-align:left;">empty</td><td style="text-align:left;">-</td><td style="text-align:left;">无匹配选项时的内容</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">reload</td><td style="text-align:left;"><code>(params?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">调用api重新加载选项数据，<code>params</code>为调用api携带的参数</td></tr><tr><td style="text-align:left;">bindOptionsData</td><td style="text-align:left;"><code>(data: Array&lt;IOptionData&gt;)</code></td><td style="text-align:left;">重新绑定组件选项数据，<code>data</code>为选项数据</td></tr></tbody></table>',11))])}}});export{T as __pageData,P as default};
