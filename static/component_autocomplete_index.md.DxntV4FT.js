const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/valueFormatDemo.iWPYkVGz.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/demo.Cp4iBaZH.js","static/chunks/baseDemo.C3HsSdWm.js"])))=>i.map(i=>d[i]);
import{p as o,v as C,V as p,C as y,c as h,o as A,b2 as v,af as c,G as e,j as a,ag as u,k as l,w as d,a as i}from"./chunks/framework.B3HgsgJJ.js";import{O as m,E as x}from"./chunks/index.DgrmyhQY.js";const B=`<template>
  <span class="example-title">值格式化</span>
  <ex-autocomplete :options="options" v-model="modelValue" :value-format="valueFormat" :value-parser="valueParser" placeholder="请输入" />
  <span class="example-title">绑定的值：{{ modelValue }}</span>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const modelValue = ref();
const options = ref([
  {label: '北京', value: 'Beijin'},
  {label: '天津', value: 'Tianjin'},
  {label: '上海', value: 'Shanghai'},
  {label: '重庆', value: 'Chongqi'},
]);

const valueFormat = (value) => {
  if (!value) return value;
  return value + '是个好地方';
}
const valueParser = (value) => {
  return value.replace('是个好地方', '');
}


<\/script>`,D=`<template>
  <span class="example-title">绑定api</span>
  <ex-autocomplete :api="api" placeholder="请输入" />
  <span class="example-title">懒加载远程搜索</span>
  <ex-autocomplete :loadImmediate="false" :api="api" placeholder="请输入" />
  <span class="example-title">自定义选项配置 绑定值为选项label属性</span>
  <ex-autocomplete :api="api" placeholder="请输入" :props="optionProps" />
  <span class="example-title">parseApiData 解析api返回的数据</span>
  <ex-autocomplete :api="api" placeholder="请输入" :parseApiData="parseApiData" />
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const options = ref([
  {label: '北京', value: 'Beijin'},
  {label: '天津', value: 'Tianjin'},
  {label: '上海', value: 'Shanghai'},
  {label: '重庆', value: 'Chongqi'},
])

const optionProps = ref({
  label: 'label',
  value: 'label'
});

const parseApiData = (res) => {
  return res.data.map(i => {
    return {
      ...i, value: i.label + i.value
    }
  })
}

const api = ({keyWords}) => {
  return new Promise(resolve => {
    let result = options.value
    if (keyWords) {
      result = options.value.filter(i => i.label.indexOf(keyWords) !== -1);
    }
    setTimeout(() => {
      resolve({code: 200, data: result});
    }, 2000)
  })
}

<\/script>`,_=`<template>
  <span class="example-title">绑定options</span>
  <ex-autocomplete :options="options" placeholder="请输入" v-model="modelValue" />
  <span class="example-title">自定义插槽</span>
  <ex-autocomplete :options="options" placeholder="请输入" v-model="modelValue" :clearable="true">
    <template #default="{item}">
      {{ item.value === 'Beijin' ? '这是北京' : item.label }}
    </template>
  </ex-autocomplete>
  <span class="example-title">禁用状态</span>
  <ex-autocomplete :options="options" v-model="modelValue" placeholder="请输入" :disabled="true" />
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref('Beijin');
const options = ref([
  {label: '北京', value: 'Beijin'},
  {label: '天津', value: 'Tianjin'},
  {label: '上海', value: 'Shanghai'},
  {label: '重庆', value: 'Chongqi'},
])
<\/script>`,W=JSON.parse('{"title":"ExAutocomplete 自动补全","description":"","frontmatter":{},"headers":[],"relativePath":"component/autocomplete/index.md","filePath":"component/autocomplete/index.md"}'),V={name:"component/autocomplete/index.md"},w=Object.assign(V,{setup(F){const f=o();C(async()=>{f.value=(await p(async()=>{const{default:s}=await import("./chunks/valueFormatDemo.iWPYkVGz.js");return{default:s}},__vite__mapDeps([0,1]))).default});const b=o();C(async()=>{b.value=(await p(async()=>{const{default:s}=await import("./chunks/demo.Cp4iBaZH.js");return{default:s}},__vite__mapDeps([2,1]))).default});const n=o(!0),g=o();return C(async()=>{g.value=(await p(async()=>{const{default:s}=await import("./chunks/baseDemo.C3HsSdWm.js");return{default:s}},__vite__mapDeps([3,1]))).default}),(s,t)=>{const r=y("ClientOnly");return A(),h("div",null,[t[3]||(t[3]=v('<h1 id="exautocomplete-自动补全" tabindex="-1">ExAutocomplete 自动补全 <a class="header-anchor" href="#exautocomplete-自动补全" aria-label="Permalink to &quot;ExAutocomplete 自动补全&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>组件提供输入建议</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',3)),c(e(l(m),null,null,512),[[u,n.value]]),e(r,null,{default:d(()=>[e(l(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(g))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=a("h2",{id:"绑定api用法",tabindex:"-1"},[i("绑定api用法 "),a("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),c(e(l(m),null,null,512),[[u,n.value]]),e(r,null,{default:d(()=>[e(l(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:l(D)},{vue:d(()=>[e(l(b))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=a("h2",{id:"值格式化用法",tabindex:"-1"},[i("值格式化用法 "),a("a",{class:"header-anchor",href:"#值格式化用法","aria-label":'Permalink to "值格式化用法"'},"​")],-1)),t[6]||(t[6]=a("div",{class:"warning custom-block"},[a("p",{class:"custom-block-title"},"WARNING"),a("p",null,[i("如需改变绑定的值，请使用"),a("code",null,"valueFormat"),i(" 和 "),a("code",null,"valueParser"),i("组合")])],-1)),c(e(l(m),null,null,512),[[u,n.value]]),e(r,null,{default:d(()=>[e(l(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),vueCode:l(B)},{vue:d(()=>[e(l(f))]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=v('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">model-value / v-model</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">选中项绑定值</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">占位文本</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否可清空</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">自动补全组件是否被禁用</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">debounce</td><td style="text-align:left;">number</td><td style="text-align:left;">300</td><td style="text-align:left;">获取输入建议的防抖延时，单位为毫秒</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">placement</td><td style="text-align:left;"><code>top</code> <code>top-start</code> <code>top-end</code> <code>bottom</code> <code>bottom-start</code> <code>bottom-end</code></td><td style="text-align:left;">bottom-start</td><td style="text-align:left;">菜单弹出位置</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">object</td><td style="text-align:left;"><code>{label: &#39;label&#39;,value: &#39;value&#39;}</code></td><td style="text-align:left;">选项数据的配置</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">loadImmediate</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">api是否主动加载数据，为false时懒加载远程搜索</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">api</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">选项数据加载api</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">beforeApiFetch</td><td style="text-align:left;">Function/object</td><td style="text-align:left;">-</td><td style="text-align:left;">请求api前调用返回值用于api携带参数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">parseApiData</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">解析api返回的数据</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">apiEffectKey</td><td style="text-align:left;">Function/string</td><td style="text-align:left;">-</td><td style="text-align:left;">动态加载apikey，值变化后会调用组件<code>reload</code>方法</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueFormat</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">绑定值格式化函数</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">valueParser</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">反解析<code>valueFormat</code></td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">update:modelValue</td><td style="text-align:left;"><code>(value)</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>(value, {value, trigger})</code></td><td style="text-align:left;">值改变时触发，<code>value</code>为选中项绑定值，<code>trigger</code>为触发类型：<code>initial</code>、<code>input</code>、<code>change</code>、<code>select</code></td></tr><tr><td style="text-align:left;">change-data</td><td style="text-align:left;"><code>(data, {trigger})</code></td><td style="text-align:left;">值改变时触发，<code>data</code>为选中选项的值，<code>trigger</code>为触发类型：<code>initial</code>、<code>input</code>、<code>change</code>、<code>select</code></td></tr><tr><td style="text-align:left;">loaded-options</td><td style="text-align:left;"><code>(options)</code></td><td style="text-align:left;">绑定api时数据加载完成触发，<code>options</code>为api返回的选项数据</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;"><code>({item})</code></td><td style="text-align:left;">自定义标签，参数<code>item</code>为选项数据</td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框头部内容</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框尾部内容</td></tr><tr><td style="text-align:left;">prepend</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框前置内容，在 prefix 之前</td></tr><tr><td style="text-align:left;">append</td><td style="text-align:left;">-</td><td style="text-align:left;">输入框后置内容，在 suffix 之后</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">reload</td><td style="text-align:left;"><code>(params?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">调用api重新加载选项数据，<code>params</code>为调用api携带的参数</td></tr><tr><td style="text-align:left;">bindOptionsData</td><td style="text-align:left;"><code>(data: Array&lt;IOptionData&gt;)</code></td><td style="text-align:left;">重新绑定组件选项数据，<code>data</code>为选项数据</td></tr></tbody></table>',9))])}}});export{W as __pageData,w as default};
