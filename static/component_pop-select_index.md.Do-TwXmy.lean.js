const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/apiDemo.BZhEB__0.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.Br_5atJL.js"])))=>i.map(i=>d[i]);
import{p as s,v as c,V as p,C as b,c as h,o as m,b2 as C,af as x,G as e,j as f,ag as g,k as l,w as d,a as v}from"./chunks/framework.B3HgsgJJ.js";import{O as u,E as y}from"./chunks/index.DgrmyhQY.js";const A=`<template>
  <span class="example-title">绑定api</span>
  <ex-pop-select :api="api">
    <template #reference="{data}">
      <el-button>{{ data.label ?? '选择' }}</el-button>
    </template>
  </ex-pop-select>
  <span class="example-title">绑定api，自动选中第一个选项</span>
  <ex-pop-select v-model="modelValue" :api="api" filterable autoSelectFirst>
    <template #reference="{value}">
      <el-button>{{ value ?? '选择' }}</el-button>
    </template>
  </ex-pop-select>
  <p>绑定的值: {{ modelValue }}</p>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const options = ref([
  {label: '北京，这里又美丽雄伟的天安门', value: 'Beijin', disabled: true},
  {label: '天津', value: 'Tianjin',},
  {label: '上海', value: 'Shanghai'},
  {label: '重庆', value: 'Chongqi'},
])

const api = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({code: 200, data: options.value});
    }, 2000)
  })
}

<\/script>
`,_=`<template>
  <span class="example-title">基础用法</span>
  <ex-pop-select v-model="modelValue" :options="options">
    <template #reference="{data}">
      <el-button>{{ data.label ?? '选择' }}</el-button>
    </template>
  </ex-pop-select>

  <span class="example-title">多选</span>
  <ex-pop-select v-model="modelValue2" :options="options" :multiple="true">
    <template #reference="{data}">
      <el-button>{{ data.map(i => i.label) }}</el-button>
    </template>
  </ex-pop-select>
  <span class="example-title">多选-限制最多选2个</span>
  <ex-pop-select v-model="modelValue2" :options="options" :multiple="true" :multiple-limit="2">
    <template #reference="{data}">
      <el-button>{{ data.map(i => i.label) }}</el-button>
    </template>
  </ex-pop-select>

</template>

<script lang="ts" setup>
import {ref} from 'vue';

const modelValue = ref();
const modelValue2 = ref();
const options = ref([
  {label: '北京，这里又美丽雄伟的天安门', value: 'Beijin', disabled: true},
  {label: '天津', value: 'Tianjin',},
  {label: '上海', value: 'Shanghai'},
  {label: '重庆', value: 'Chongqi'},
])

<\/script>
`,k=JSON.parse('{"title":"ExPopSelect","description":"","frontmatter":{},"headers":[],"relativePath":"component/pop-select/index.md","filePath":"component/pop-select/index.md"}'),B={name:"component/pop-select/index.md"},N=Object.assign(B,{setup(D){const i=s();c(async()=>{i.value=(await p(async()=>{const{default:n}=await import("./chunks/apiDemo.BZhEB__0.js");return{default:n}},__vite__mapDeps([0,1]))).default});const a=s(!0),o=s();return c(async()=>{o.value=(await p(async()=>{const{default:n}=await import("./chunks/baseDemo.Br_5atJL.js");return{default:n}},__vite__mapDeps([2,1]))).default}),(n,t)=>{const r=b("ClientOnly");return m(),h("div",null,[t[2]||(t[2]=C("",3)),x(e(l(u),null,null,512),[[g,a.value]]),e(r,null,{default:d(()=>[e(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(o))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=f("h2",{id:"绑定api用法",tabindex:"-1"},[v("绑定api用法 "),f("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),x(e(l(u),null,null,512),[[g,a.value]]),e(r,null,{default:d(()=>[e(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(A)},{vue:d(()=>[e(l(i))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=C("",11))])}}});export{k as __pageData,N as default};
