const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/apiDemo.ippulKOC.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.10m58Jer.js"])))=>i.map(i=>d[i]);
import{p as s,v as g,V as p,C as u,c as b,o as m,b2 as x,af as y,G as e,j as c,ag as f,k as l,w as d,a as v}from"./chunks/framework.B3HgsgJJ.js";import{O as C,E as h}from"./chunks/index.DgrmyhQY.js";const k=`<template>
  <span class="example-title">绑定api</span>
  <ex-org-select v-model="modelValue" :api="api" placeholder="请选择" clearable />
  <p>绑定的值: {{ modelValue }}</p>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import type {IExOrgOptionsData} from "element-plus-extension";

const modelValue = ref();
const options = ref<Array<IExOrgOptionsData>>([
  {
    label: '总经办',
    value: 'l1',
  },
  {
    label: '运营中心',
    value: 'l2',
    children: [
      {label: '一部', value: 'one', displayName: '运营中心/一部', disabled: true},
      {label: '二部', value: 'two', displayName: '运营中心/二部',
        children: [
          {label: 'xx条线', value: 'liSi', displayName: '运营中心/二部/xx条线',},
          {label: 'xx条线2', value: 'liSi2', displayName: '运营中心/二部/xx条线2',},
        ]
      },
      {label: '三部', value: 'tree', displayName: '运营中心/三部',},
      {label: '四部', value: 'four', displayName: '运营中心/四部'},
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
  <ex-org-select :options="options" placeholder="请选择" />

  <span class="example-title">自定义选项插槽，值插槽</span>
  <ex-org-select v-model="modelValue" :options="options" placeholder="请选择">
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
        自定义插槽-{{ value.label }}
      </div>
    </template>
  </ex-org-select>
  <p>绑定的值: {{ modelValue }}</p>

  <span class="example-title">多选，限制最多选4个</span>
  <ex-org-select :options="options" placeholder="请选择" clearable :multiple="true" :multiple-limit="4" autosize />
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {IExOrgOptionsData} from "element-plus-extension";

const modelValue = ref();
const options = ref<Array<IExOrgOptionsData>>([
  {
    label: '总经办',
    value: 'l1',
  },
  {
    label: '运营中心',
    value: 'l2',
    children: [
      {label: '一部', value: 'one', displayName: '运营中心/一部', disabled: true},
      {label: '二部', value: 'two', displayName: '运营中心/二部',
        children: [
          {label: 'xx条线', value: 'liSi', displayName: '运营中心/二部/xx条线',},
          {label: 'xx条线2', value: 'liSi2', displayName: '运营中心/二部/xx条线2',},
        ]
      },
      {label: '三部', value: 'tree', displayName: '运营中心/三部',},
      {label: '四部', value: 'four', displayName: '运营中心/四部'},
    ]
  }

]);

<\/script>
`,F=JSON.parse('{"title":"ExOrgSelect 组织选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/org-select/index.md","filePath":"component/org-select/index.md"}'),D={name:"component/org-select/index.md"},E=Object.assign(D,{setup(N){const i=s();g(async()=>{i.value=(await p(async()=>{const{default:n}=await import("./chunks/apiDemo.ippulKOC.js");return{default:n}},__vite__mapDeps([0,1]))).default});const a=s(!0),r=s();return g(async()=>{r.value=(await p(async()=>{const{default:n}=await import("./chunks/baseDemo.10m58Jer.js");return{default:n}},__vite__mapDeps([2,1]))).default}),(n,t)=>{const o=u("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=x("",3)),y(e(l(C),null,null,512),[[f,a.value]]),e(o,null,{default:d(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(A)},{vue:d(()=>[e(l(r))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=c("h2",{id:"绑定api用法",tabindex:"-1"},[v("绑定api用法 "),c("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),y(e(l(C),null,null,512),[[f,a.value]]),e(o,null,{default:d(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(k)},{vue:d(()=>[e(l(i))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=x("",14))])}}});export{F as __pageData,E as default};
