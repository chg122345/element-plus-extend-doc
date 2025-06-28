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

<\/script>`,T=JSON.parse('{"title":"ExCascader 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"component/cascader/index.md","filePath":"component/cascader/index.md"}'),V={name:"component/cascader/index.md"},P=Object.assign(V,{setup(F){const x=s();o(async()=>{x.value=(await r(async()=>{const{default:n}=await import("./chunks/formatDemo.BU8zwdna.js");return{default:n}},__vite__mapDeps([0,1]))).default});const g=s();o(async()=>{g.value=(await r(async()=>{const{default:n}=await import("./chunks/apiDemo.DiRM1Ylh.js");return{default:n}},__vite__mapDeps([2,1]))).default});const a=s(!0),h=s();return o(async()=>{h.value=(await r(async()=>{const{default:n}=await import("./chunks/baseDemo.CSPliKPz.js");return{default:n}},__vite__mapDeps([3,1]))).default}),(n,t)=>{const i=b("ClientOnly");return v(),m("div",null,[t[3]||(t[3]=C("",3)),c(e(l(u),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(D)},{vue:d(()=>[e(l(h))]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=y("h2",{id:"绑定api用法",tabindex:"-1"},[A("绑定api用法 "),y("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),c(e(l(u),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(_)},{vue:d(()=>[e(l(g))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=C("",3)),c(e(l(u),null,null,512),[[p,a.value]]),e(i,null,{default:d(()=>[e(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:l(B)},{vue:d(()=>[e(l(x))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=C("",11))])}}});export{T as __pageData,P as default};
