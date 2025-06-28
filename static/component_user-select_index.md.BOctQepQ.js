const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/apiDemo.Bgj4XneZ.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.DhRgomCp.js","static/chunks/theme.D3OqrOCm.js"])))=>i.map(i=>d[i]);
import{p as i,v as p,V as g,C,c as b,o as m,b2 as y,af as c,G as e,j as x,ag as f,k as l,w as s,a as v}from"./chunks/framework.B3HgsgJJ.js";import{O as u,E as h}from"./chunks/index.DgrmyhQY.js";const k=`<template>
  <span class="example-title">绑定api</span>
  <ex-user-select v-model="modelValue" :api="api" placeholder="请选择" clearable />
  <p>绑定的值: {{ modelValue }}</p>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import type {IExUserOptionsData} from "element-plus-extension";

const modelValue = ref();
const options = ref<Array<IExUserOptionsData>>([
  {
    label: '总经办',
    value: 'l1',
    category: 'org',
    children: [
      {label: '张三', value: 'zhangSan', displayName: '总经办', category: 'user'},
    ]
  },
  {
    label: '运营中心',
    value: 'l2',
    category: 'org',
    children: [
      {label: '一部', value: 'one', disabled: true},
      {label: '二部', value: 'two',
        children: [
          {label: '李四', value: 'liSi', displayName: '运营中心/二部', category: 'user'},
          {label: '李四2', value: 'liSi2', displayName: '运营中心/二部', category: 'user', disabled: true},
          {label: '李四3', value: 'liSi3', displayName: '运营中心/二部', category: 'user'},
          {label: '李四4', value: 'liSi4', displayName: '运营中心/二部', category: 'user'},
        ]
      },
      {label: '三部', value: 'tree',
        children: [
          {label: '王二', value: 'wangEr', displayName: '运营中心/三部', category: 'user'},
        ]
      },
      {label: '四部', value: 'four'},
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

<\/script>
`,A=`<template>
  <span class="example-title">绑定options</span>
  <ex-user-select :options="options" placeholder="请选择" />

  <span class="example-title">自定义选项插槽，值插槽</span>
  <ex-user-select v-model="modelValue" :options="options" placeholder="请选择">
    <template #default="{data}">
      <span style="color: red" v-if="data.value === 'l1'">
        {{ data.label }}
      </span>
      <span v-else>
        {{ data.label }}
        <el-text v-if="data.category === 'user'" size="small"> {{ data.displayName }}</el-text>
      </span>
    </template>
    <template #valueDisplay="{value}">
      <div style="color: var(--el-color-primary); display: inline-flex; align-items: center;" :title="value.displayName">
        <el-avatar :icon="UserFilled" :size="24" /> {{ value.label }}
      </div>
    </template>
  </ex-user-select>
  <p>绑定的值: {{ modelValue }}</p>

  <span class="example-title">多选</span>
  <ex-user-select :options="options" placeholder="请选择" clearable :multiple="true" />
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {IExUserOptionsData} from "element-plus-extension";
import {UserFilled} from "@element-plus/icons-vue";

const modelValue = ref();
const options = ref<Array<IExUserOptionsData>>([
  {
    label: '总经办',
    value: 'l1',
    category: 'org',
    children: [
      {label: '张三', value: 'zhangSan', displayName: '总经办', category: 'user'},
    ]
  },
  {
    label: '运营中心',
    value: 'l2',
    category: 'org',
    children: [
      {label: '一部', value: 'one', disabled: true},
      {label: '二部', value: 'two',
        children: [
          {label: '李四', value: 'liSi', displayName: '运营中心/二部', category: 'user'},
          {label: '李四2', value: 'liSi2', displayName: '运营中心/二部', category: 'user'},
          {label: '李四3', value: 'liSi3', displayName: '运营中心/二部', category: 'user'},
          {label: '李四4', value: 'liSi4', displayName: '运营中心/二部', category: 'user'},
        ]
      },
      {label: '三部', value: 'tree',
        children: [
          {label: '王二', value: 'wangEr', displayName: '运营中心/三部', category: 'user'},
        ]
      },
      {label: '四部', value: 'four'},
    ]
  }

]);

<\/script>
`,B=JSON.parse('{"title":"ExUserSelect 人员选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/user-select/index.md","filePath":"component/user-select/index.md"}'),F={name:"component/user-select/index.md"},_=Object.assign(F,{setup(D){const d=i();p(async()=>{d.value=(await g(async()=>{const{default:n}=await import("./chunks/apiDemo.Bgj4XneZ.js");return{default:n}},__vite__mapDeps([0,1]))).default});const a=i(!0),r=i();return p(async()=>{r.value=(await g(async()=>{const{default:n}=await import("./chunks/baseDemo.DhRgomCp.js");return{default:n}},__vite__mapDeps([2,3,1]))).default}),(n,t)=>{const o=C("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=y('<h1 id="exuserselect-人员选择器" tabindex="-1">ExUserSelect 人员选择器 <a class="header-anchor" href="#exuserselect-人员选择器" aria-label="Permalink to &quot;ExUserSelect 人员选择器&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>企业组织架构结构，适用于选择人员数据。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',3)),c(e(l(u),null,null,512),[[f,a.value]]),e(o,null,{default:s(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(A)},{vue:s(()=>[e(l(r))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=x("h2",{id:"绑定api用法",tabindex:"-1"},[v("绑定api用法 "),x("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),c(e(l(u),null,null,512),[[f,a.value]]),e(o,null,{default:s(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(k)},{vue:s(()=>[e(l(d))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=y(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">model-value / v-model</td><td style="text-align:left;">Array/object</td><td style="text-align:left;">-</td><td style="text-align:left;">选中项绑定值</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">占位文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否可清空</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否被禁用</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">readonly</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否只读</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">autosize</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">高度是否自适应</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">占位文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否可清空</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否可过滤</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">filterNodeMethod</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义过滤方法，方法参数<code>(value, data)</code>，<code>value</code>为搜索关键字，<code>data</code>为选项数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">组件大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">prefixIcon</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义前缀图标</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">suffixIcon</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义后缀图标</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否多选</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">multipleLimit</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">多选数量限制</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据，数据类型请参阅下面<a href="#iexuseroptionsdata">IExUserOptionsData</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">object</td><td style="text-align:left;"><code>{label: &#39;label&#39;,value: &#39;value&#39;}</code></td><td style="text-align:left;">选项数据的配置 请参阅下面<a href="#optionprops">OptionProps</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">loadImmediate</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">api是否主动加载数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">api</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据加载api</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">beforeApiFetch</td><td style="text-align:left;">Function/object</td><td style="text-align:left;">-</td><td style="text-align:left;">请求api前调用返回值用于api携带参数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">parseApiData</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">解析api返回的数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">apiEffectKey</td><td style="text-align:left;">Function/string</td><td style="text-align:left;">-</td><td style="text-align:left;">动态加载apikey，值变化后会调用组件<code>reload</code>方法</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueFormat</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">绑定值格式化函数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueParser</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">反解析<code>valueFormat</code></td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="optionprops" tabindex="-1">OptionProps <a class="header-anchor" href="#optionprops" aria-label="Permalink to &quot;OptionProps&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">label</td><td style="text-align:left;">string</td><td style="text-align:left;">label</td><td style="text-align:left;">指定选项标签为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">string</td><td style="text-align:left;">value</td><td style="text-align:left;">指定选项的值为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">string</td><td style="text-align:left;">children</td><td style="text-align:left;">指定选项的子选项为选项对象的某个属性值</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">disabled</td><td style="text-align:left;">指定选项的禁用为选项对象的某个属性值/返回是否禁用</td></tr><tr><td style="text-align:left;">show</td><td style="text-align:left;">string/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">指定选项的是否显示为选项对象的某个属性值/返回是否显示</td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项显示格式化函数</td></tr><tr><td style="text-align:left;">showCheckbox</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">返回选项是否显示勾选框</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">update:modelValue</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>(value, {value, trigger})</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值，<code>trigger</code>为触发类型：<code>initial</code>、<code>change</code></td></tr><tr><td style="text-align:left;">change-data</td><td style="text-align:left;"><code>(data, {trigger})</code></td><td style="text-align:left;">值改变时触发，<code>data</code>为选中选项的值，<code>trigger</code>为触发类型：<code>initial</code>、<code>change</code></td></tr><tr><td style="text-align:left;">loaded-options</td><td style="text-align:left;"><code>(options)</code></td><td style="text-align:left;">绑定api时数据加载完成触发，<code>options</code>为api返回的选项数据</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;"><code>({data})</code></td><td style="text-align:left;">自定义备选项的节点内容，<code>data</code>为选项数据</td></tr><tr><td style="text-align:left;">valueDisplay</td><td style="text-align:left;"><code>({value})</code></td><td style="text-align:left;">自定义绑定值内容， <code>value</code>为选项绑定值</td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框头部内容</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框尾部内容</td></tr><tr><td style="text-align:left;">trigger</td><td style="text-align:left;"><code>({trigger, disabled, size})</code></td><td style="text-align:left;">自定义触发插槽，<code>trigger</code>打开弹框的方法</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">reload</td><td style="text-align:left;"><code>(params?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">调用api重新加载选项数据，<code>params</code>为调用api携带的参数</td></tr><tr><td style="text-align:left;">bindOptionsData</td><td style="text-align:left;"><code>(data: Array&lt;IExUserOptionsData&gt;)</code></td><td style="text-align:left;">重新绑定组件选项数据，<code>data</code>为选项数据</td></tr></tbody></table><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><h3 id="iexuseroptionsdata" tabindex="-1">IExUserOptionsData <a class="header-anchor" href="#iexuseroptionsdata" aria-label="Permalink to &quot;IExUserOptionsData&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExUserOptionsData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ITreeOptionData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  category</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;org&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  displayName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  children</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IExUserOptionsData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,14))])}}});export{B as __pageData,_ as default};
