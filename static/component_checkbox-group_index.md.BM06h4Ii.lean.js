const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/formatDemo.CBuQQF20.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/apiDemo.BAqln59h.js","static/chunks/baseDemo.CclO5IKv.js"])))=>i.map(i=>d[i]);
import{p as i,v as c,V as p,C as h,c as m,o as v,j as n,af as C,G as e,b2 as A,a as o,ag as x,k as l,w as s}from"./chunks/framework.B3HgsgJJ.js";import{O as u,E as g}from"./chunks/index.DgrmyhQY.js";const B=`<template>
  <span class="example-title">选项格式化</span>
  <ex-checkbox-group :options="options" :props="optionsProps" />

  <span class="example-title">动态禁用--value包含Beijin的选项</span>
  <ex-checkbox-group :options="options" :props="optionsProps2" />

  <span class="example-title">动态显示隐藏-仅隐藏value包含Beijin的选项</span>
  <ex-checkbox-group :options="options" type="button" :props="optionsProps3" />
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const options = ref([
  {label: '北京', value: 'Beijin'},
  {label: '天津', value: 'Tianjin'},
  {label: '上海', value: 'Shanghai'},
  {label: '重庆', value: 'Chongqi'},
]);

const optionsProps = ref({
  formatter: (data) => {
    return \`【\${data.label}】是个好地方\`
  },
});

const optionsProps2 = ref({
  formatter: (data) => {
    return \`【\${data.label}】是个好地方\`
  },
  disabled: (data) => {
    if (data.value.indexOf('Beijin') !== -1) {
      return true;
    }
  }
});

const optionsProps3 = ref({
  show: (data) => {
    if (data.value.indexOf('Beijin') !== -1) {
      return false;
    }
    return true;
  }
});

<\/script>`,k=`<template>
  <span class="example-title">默认</span>
  <ex-checkbox-group :api="api" />

  <span class="example-title">绑定api，自动选中第一个选项</span>
  <ex-checkbox-group v-model="modelValue" :api="api" autoSelectFirst />
  <p>绑定的值: {{ modelValue }}</p>
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

const api = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({code: 200, data: options.value});
    }, 2000)
  })
};

<\/script>`,D=`<template>
  <span class="example-title">默认</span>
  <ex-checkbox-group :options="options" />

  <span class="example-title">垂直排列</span>
  <ex-checkbox-group :options="options" direction="vertical" />

  <span class="example-title">显示边框</span>
  <ex-checkbox-group :options="options" :border="true" />

  <span class="example-title">标签类型</span>
  <ex-checkbox-group :options="options" type="tag" size="small" />
  <br />
  <ex-checkbox-group :options="options" type="tag" />
  <br />
  <ex-checkbox-group :options="options" type="tag" size="large" />

  <span class="example-title">按钮类型</span>
  <ex-checkbox-group :options="options" type="button" />

  <span class="example-title">按钮类型 effect="light"</span>
  <ex-checkbox-group :options="options" type="button" effect="light" />

  <span class="example-title">按钮类型-充满整行 effect="plain"</span>
  <ex-checkbox-group :options="options" type="button" :fit="true" effect="plain" />

  <span class="example-title">设置最多选2个</span>
  <ex-checkbox-group :options="options" type="button" :max="2" />
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const options = ref([
  {label: '北京', value: 'Beijin', color: 'red'},
  {label: '天津', value: 'Tianjin', color: '#f5c13c'},
  {label: '上海', value: 'Shanghai', color: '#3f8cff'},
  {label: '重庆', value: 'Chongqi'},
])

<\/script>`,w=JSON.parse('{"title":"ExCheckboxGroup 复选框组","description":"","frontmatter":{},"headers":[],"relativePath":"component/checkbox-group/index.md","filePath":"component/checkbox-group/index.md"}'),V={name:"component/checkbox-group/index.md"},Y=Object.assign(V,{setup(_){const f=i();c(async()=>{f.value=(await p(async()=>{const{default:d}=await import("./chunks/formatDemo.CBuQQF20.js");return{default:d}},__vite__mapDeps([0,1]))).default});const y=i();c(async()=>{y.value=(await p(async()=>{const{default:d}=await import("./chunks/apiDemo.BAqln59h.js");return{default:d}},__vite__mapDeps([2,1]))).default});const a=i(!0),b=i();return c(async()=>{b.value=(await p(async()=>{const{default:d}=await import("./chunks/baseDemo.CclO5IKv.js");return{default:d}},__vite__mapDeps([3,1]))).default}),(d,t)=>{const r=h("ClientOnly");return v(),m("div",null,[t[3]||(t[3]=n("h1",{id:"excheckboxgroup-复选框组",tabindex:"-1"},[o("ExCheckboxGroup 复选框组 "),n("a",{class:"header-anchor",href:"#excheckboxgroup-复选框组","aria-label":'Permalink to "ExCheckboxGroup 复选框组"'},"​")],-1)),t[4]||(t[4]=n("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),C(e(l(u),null,null,512),[[x,a.value]]),e(r,null,{default:s(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(D)},{vue:s(()=>[e(l(b))]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=n("h2",{id:"绑定api用法",tabindex:"-1"},[o("绑定api用法 "),n("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),C(e(l(u),null,null,512),[[x,a.value]]),e(r,null,{default:s(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(k)},{vue:s(()=>[e(l(y))]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=n("h2",{id:"选项动态化",tabindex:"-1"},[o("选项动态化 "),n("a",{class:"header-anchor",href:"#选项动态化","aria-label":'Permalink to "选项动态化"'},"​")],-1)),C(e(l(u),null,null,512),[[x,a.value]]),e(r,null,{default:s(()=>[e(l(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:l(B)},{vue:s(()=>[e(l(f))]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=A("",11))])}}});export{w as __pageData,Y as default};
