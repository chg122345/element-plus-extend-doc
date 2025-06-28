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
`,B=JSON.parse('{"title":"ExUserSelect 人员选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/user-select/index.md","filePath":"component/user-select/index.md"}'),F={name:"component/user-select/index.md"},_=Object.assign(F,{setup(D){const d=i();p(async()=>{d.value=(await g(async()=>{const{default:n}=await import("./chunks/apiDemo.Bgj4XneZ.js");return{default:n}},__vite__mapDeps([0,1]))).default});const a=i(!0),r=i();return p(async()=>{r.value=(await g(async()=>{const{default:n}=await import("./chunks/baseDemo.DhRgomCp.js");return{default:n}},__vite__mapDeps([2,3,1]))).default}),(n,t)=>{const o=C("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=y("",3)),c(e(l(u),null,null,512),[[f,a.value]]),e(o,null,{default:s(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(A)},{vue:s(()=>[e(l(r))]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=x("h2",{id:"绑定api用法",tabindex:"-1"},[v("绑定api用法 "),x("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),c(e(l(u),null,null,512),[[f,a.value]]),e(o,null,{default:s(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(k)},{vue:s(()=>[e(l(d))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=y("",14))])}}});export{B as __pageData,_ as default};
