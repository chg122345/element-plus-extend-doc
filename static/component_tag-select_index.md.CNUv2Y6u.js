const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/formatDemo.BtjlBuaR.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/apiDemo.FL-QDkIS.js","static/chunks/baseDemo.DbjRXFDI.js"])))=>i.map(i=>d[i]);
import{p as s,v as o,V as r,C as h,c as m,o as v,b2 as c,af as C,G as e,j as b,ag as p,k as l,w as d,a as A}from"./chunks/framework.B3HgsgJJ.js";import{O as f,E as g}from"./chunks/index.DgrmyhQY.js";const B=`<template>
  <span class="example-title">选项格式化</span>
  <ex-tag-select :options="options" v-model="modelValue" placeholder="请选择" :props="optionsProps" />
  <span class="example-title">绑定的值：{{ modelValue }}</span>
  <span class="example-title">选项禁用-value包含Beijin的选项</span>
  <ex-tag-select :options="options" placeholder="请选择" :props="optionsProps2" />
  <span class="example-title">选项显示隐藏-仅隐藏value包含Beijin的选项</span>
  <ex-tag-select :options="options" placeholder="请选择" :props="optionsProps3" />
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const options = ref([
  {label: '北京', value: 'Beijin', color: 'red', disabled: true},
  {label: '天津', value: 'Tianjin', color: '#f5c13c'},
  {label: '上海', value: 'Shanghai', color: '#3f8cff'},
  {label: '重庆', value: 'Chongqi'},
])

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
  <ex-tag-select :api="api" placeholder="请选择" />
  <span class="example-title">绑定api，自动选中第一个选项</span>
  <ex-tag-select v-model="modelValue" :api="api" placeholder="请选择" clearable filterable autoSelectFirst />
  <p>绑定的值: {{ modelValue }}</p>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const options = ref([
  {label: '北京', value: 'Beijin', color: 'red', disabled: true},
  {label: '天津', value: 'Tianjin', color: '#f5c13c'},
  {label: '上海', value: 'Shanghai', color: '#3f8cff'},
  {label: '重庆', value: 'Chongqi'},
])

const api = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({code: 200, data: options.value});
    }, 2000)
  })
}

<\/script>`,D=`<template>
  <span class="example-title">绑定options</span>
  <ex-tag-select :options="options" placeholder="请选择" />
  <span class="example-title">自定义选项插槽，值插槽</span>
  <ex-tag-select v-model="modelValue" :options="options" placeholder="请选择">
    <template #header>顶部插槽</template>
    <template #footer>底部插槽</template>
    <template #default="{data}">
      <span style="color: red" v-if="data.value === 'Beijin'">这是北京</span>
      <span v-else>
        {{ data.label }}
      </span>
    </template>
    <template #valueDisplay="{value}">
      选中的 {{ value }}
    </template>
  </ex-tag-select>
  <p>绑定的值: {{ modelValue }}</p>
  <span class="example-title">绑定对象，value-type="object"</span>
  <ex-tag-select v-model="modelValue1" :options="options" placeholder="请选择" multiple :multiple-limit="3" value-type="object" />
  <p>绑定的值: {{ modelValue1 }}</p>
  <span class="example-title">开启过滤</span>
  <ex-tag-select :options="options" placeholder="请选择" clearable filterable />
</template>

<script lang="ts" setup>
import {ref} from "vue";

const modelValue = ref();
const modelValue1 = ref();
const options = ref([
  {label: '北京', value: 'Beijin', color: 'red', disabled: true},
  {label: '天津', value: 'Tianjin', color: '#f5c13c'},
  {label: '上海', value: 'Shanghai', color: '#3f8cff'},
  {label: '重庆', value: 'Chongqi'},
]);

for (let i = 0; i < 50; i++) {
  options.value.push({label: '选项'+ i, value: i + 'op'});
}

<\/script>
`,T=JSON.parse('{"title":"ExTagSelect 标签选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/tag-select/index.md","filePath":"component/tag-select/index.md"}'),V={name:"component/tag-select/index.md"},j=Object.assign(V,{setup(F){const u=s();o(async()=>{u.value=(await r(async()=>{const{default:n}=await import("./chunks/formatDemo.BtjlBuaR.js");return{default:n}},__vite__mapDeps([0,1]))).default});const x=s();o(async()=>{x.value=(await r(async()=>{const{default:n}=await import("./chunks/apiDemo.FL-QDkIS.js");return{default:n}},__vite__mapDeps([2,1]))).default});const a=s(!0),y=s();return o(async()=>{y.value=(await r(async()=>{const{default:n}=await import("./chunks/baseDemo.DbjRXFDI.js");return{default:n}},__vite__mapDeps([3,1]))).default}),(n,t)=>{const i=h("ClientOnly");return v(),m("div",null,[t[3]||(t[3]=c('<h1 id="extagselect-标签选择器" tabindex="-1">ExTagSelect 标签选择器 <a class="header-anchor" href="#extagselect-标签选择器" aria-label="Permalink to &quot;ExTagSelect 标签选择器&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>类似 Select 的信息录入控件，拥有和 Select 几乎相同的 API，适用于较鲜明对比的信息</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',3)),C(e(l(f),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(D)},{vue:d(()=>[e(l(y))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=b("h2",{id:"绑定api用法",tabindex:"-1"},[A("绑定api用法 "),b("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),C(e(l(f),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(x))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=c('<h2 id="选项动态化" tabindex="-1">选项动态化 <a class="header-anchor" href="#选项动态化" aria-label="Permalink to &quot;选项动态化&quot;">​</a></h2><blockquote><p>在 <code>props.formatter</code>的情况下显示值,此配置不改变绑定的值</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如需改变绑定的值，请使用<code>valueFormat</code> 和 <code>valueParser</code>组合</p></div>',3)),C(e(l(f),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:l(B)},{vue:d(()=>[e(l(u))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=c('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">model-value / v-model</td><td style="text-align:left;">Array/string</td><td style="text-align:left;">-</td><td style="text-align:left;">选中项绑定值</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">占位文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否可清空</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否被禁用</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">readonly</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否只读</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">autosize</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">高度是否自适应</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否可过滤</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">组件大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">prefixIcon</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义前缀图标</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">suffixIcon</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义后缀图标</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否多选</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">multipleLimit</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">多选数量限制</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">autoSelectFirst</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">自动选中第一个</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">autoClearMismatch</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">自动清除不匹配的值</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueType</td><td style="text-align:left;"><code>value</code> <code>object</code></td><td style="text-align:left;"><code>value</code></td><td style="text-align:left;">绑定值类型</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">object</td><td style="text-align:left;"><code>{label: &#39;label&#39;,value: &#39;value&#39;}</code></td><td style="text-align:left;">选项数据的配置 请参阅下面<a href="#optionprops">OptionProps</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">loadImmediate</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">api是否主动加载数据，为false时懒加载远程搜索</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">api</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据加载api</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">beforeApiFetch</td><td style="text-align:left;">Function/object</td><td style="text-align:left;">-</td><td style="text-align:left;">请求api前调用返回值用于api携带参数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">parseApiData</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">解析api返回的数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">apiEffectKey</td><td style="text-align:left;">Function/string</td><td style="text-align:left;">-</td><td style="text-align:left;">动态加载apikey，值变化后会调用组件<code>reload</code>方法</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueFormat</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">绑定值格式化函数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueParser</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">反解析<code>valueFormat</code></td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="optionprops" tabindex="-1">OptionProps <a class="header-anchor" href="#optionprops" aria-label="Permalink to &quot;OptionProps&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">label</td><td style="text-align:left;">string</td><td style="text-align:left;">label</td><td style="text-align:left;">指定选项标签为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">value</td><td style="text-align:left;">指定选项的值为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">string</td><td style="text-align:left;">children</td><td style="text-align:left;">指定选项的子选项为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">disabled</td><td style="text-align:left;">指定选项的禁用为选项对象的某个属性值/返回是否禁用</td></tr><tr><td style="text-align:left;">show</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">指定选项的是否显示为选项对象的某个属性值/返回是否显示</td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项显示格式化函数</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">update:modelValue</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>(value, {value, trigger})</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值，<code>trigger</code>为触发类型：<code>initial</code>、<code>change</code>、<code>clearMismatch</code>、<code>autoSelect</code></td></tr><tr><td style="text-align:left;">change-data</td><td style="text-align:left;"><code>(data, {trigger})</code></td><td style="text-align:left;">值改变时触发，<code>data</code>为选中选项的值，<code>trigger</code>为触发类型：<code>initial</code>、<code>change</code>、<code>clearMismatch</code>、<code>autoSelect</code></td></tr><tr><td style="text-align:left;">loaded-options</td><td style="text-align:left;"><code>(options)</code></td><td style="text-align:left;">绑定api时数据加载完成触发，<code>options</code>为api返回的选项数据</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;"><code>({data})</code></td><td style="text-align:left;">自定义备选项的节点内容，<code>data</code>为选项数据</td></tr><tr><td style="text-align:left;">valueDisplay</td><td style="text-align:left;"><code>({value, data})</code></td><td style="text-align:left;">自定义绑定值内容， <code>value</code>为选项绑定值，<code>data</code>为选项数据</td></tr><tr><td style="text-align:left;">header</td><td style="text-align:left;">-</td><td style="text-align:left;">下拉列表顶部内容</td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">-</td><td style="text-align:left;">下拉列表底部内容</td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框头部内容</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框尾部内容</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">reload</td><td style="text-align:left;"><code>(params?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">调用api重新加载选项数据，<code>params</code>为调用api携带的参数</td></tr><tr><td style="text-align:left;">bindOptionsData</td><td style="text-align:left;"><code>(data: Array&lt;IOptionData&gt;)</code></td><td style="text-align:left;">重新绑定组件选项数据，<code>data</code>为选项数据</td></tr></tbody></table>',11))])}}});export{T as __pageData,j as default};
