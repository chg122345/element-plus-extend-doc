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
`,T=JSON.parse('{"title":"ExTagSelect 标签选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/tag-select/index.md","filePath":"component/tag-select/index.md"}'),V={name:"component/tag-select/index.md"},j=Object.assign(V,{setup(F){const u=s();o(async()=>{u.value=(await r(async()=>{const{default:n}=await import("./chunks/formatDemo.BtjlBuaR.js");return{default:n}},__vite__mapDeps([0,1]))).default});const x=s();o(async()=>{x.value=(await r(async()=>{const{default:n}=await import("./chunks/apiDemo.FL-QDkIS.js");return{default:n}},__vite__mapDeps([2,1]))).default});const a=s(!0),y=s();return o(async()=>{y.value=(await r(async()=>{const{default:n}=await import("./chunks/baseDemo.DbjRXFDI.js");return{default:n}},__vite__mapDeps([3,1]))).default}),(n,t)=>{const i=h("ClientOnly");return v(),m("div",null,[t[3]||(t[3]=c("",3)),C(e(l(f),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(D)},{vue:d(()=>[e(l(y))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=b("h2",{id:"绑定api用法",tabindex:"-1"},[A("绑定api用法 "),b("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),C(e(l(f),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(x))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=c("",3)),C(e(l(f),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:l(B)},{vue:d(()=>[e(l(u))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=c("",11))])}}});export{T as __pageData,j as default};
