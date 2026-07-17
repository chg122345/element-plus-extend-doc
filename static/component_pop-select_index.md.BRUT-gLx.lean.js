const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/apiDemo.BLLHHMXK.js","static/chunks/framework.l8elv8IJ.js","static/chunks/baseDemo.DbJs31wd.js"])))=>i.map(i=>d[i]);
import{d as b,v as r,V as c,C as m,o as v,c as A,aT as p,ar as C,as as x,E as e,k as l,w as d,aA as f,j as g,a as _,G as u,p as B}from"./chunks/framework.l8elv8IJ.js";import{C as y,S as h}from"./chunks/index.DVsCdBIq.js";const D=`<template>
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
`,V=`<template>
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
`,w=JSON.parse('{"title":"ExPopSelect","description":"","frontmatter":{},"headers":[],"relativePath":"component/pop-select/index.md","filePath":"component/pop-select/index.md"}'),k={name:"component/pop-select/index.md"},T=b({...k,setup(F){const i=u();r(async()=>{i.value=(await c(async()=>{const{default:n}=await import("./chunks/apiDemo.BLLHHMXK.js");return{default:n}},__vite__mapDeps([0,1]))).default});const a=B(!0),s=u();return r(async()=>{s.value=(await c(async()=>{const{default:n}=await import("./chunks/baseDemo.DbJs31wd.js");return{default:n}},__vite__mapDeps([2,1]))).default}),(n,t)=>{const o=m("ClientOnly");return v(),A("div",null,[t[2]||(t[2]=p("",3)),C(e(l(y),null,null,512),[[x,a.value]]),e(o,null,{default:d(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(V)},f({_:2},[s.value?{name:"vue",fn:d(()=>[e(l(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=g("h2",{id:"绑定api用法",tabindex:"-1"},[_("绑定api用法 "),g("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),C(e(l(y),null,null,512),[[x,a.value]]),e(o,null,{default:d(()=>[e(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(D)},f({_:2},[i.value?{name:"vue",fn:d(()=>[e(l(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=p("",11))])}}});export{w as __pageData,T as default};
