const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/valueFormatDemo.DDh_zP0K.js","static/chunks/framework.l8elv8IJ.js","static/chunks/demo.CE9bHD1F.js","static/chunks/baseDemo.BU_f5R0h.js"])))=>i.map(i=>d[i]);
import{d as h,v as u,V as c,C as A,o as B,c as D,aT as v,ar as m,as as f,E as e,k as l,w as s,aA as x,j as a,a as i,G as g,p as _}from"./chunks/framework.l8elv8IJ.js";import{C as b,S as y}from"./chunks/index.DVsCdBIq.js";const V=`<template>
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


<\/script>`,k=`<template>
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

<\/script>`,F=`<template>
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
<\/script>`,T=JSON.parse('{"title":"ExAutocomplete 自动补全","description":"","frontmatter":{},"headers":[],"relativePath":"component/autocomplete/index.md","filePath":"component/autocomplete/index.md"}'),N={name:"component/autocomplete/index.md"},X=h({...N,setup(W){const o=g();u(async()=>{o.value=(await c(async()=>{const{default:d}=await import("./chunks/valueFormatDemo.DDh_zP0K.js");return{default:d}},__vite__mapDeps([0,1]))).default});const r=g();u(async()=>{r.value=(await c(async()=>{const{default:d}=await import("./chunks/demo.CE9bHD1F.js");return{default:d}},__vite__mapDeps([2,1]))).default});const n=_(!0),C=g();return u(async()=>{C.value=(await c(async()=>{const{default:d}=await import("./chunks/baseDemo.BU_f5R0h.js");return{default:d}},__vite__mapDeps([3,1]))).default}),(d,t)=>{const p=A("ClientOnly");return B(),D("div",null,[t[3]||(t[3]=v("",3)),m(e(l(b),null,null,512),[[f,n.value]]),e(p,null,{default:s(()=>[e(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:l(F)},x({_:2},[C.value?{name:"vue",fn:s(()=>[e(l(C))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=a("h2",{id:"绑定api用法",tabindex:"-1"},[i("绑定api用法 "),a("a",{class:"header-anchor",href:"#绑定api用法","aria-label":'Permalink to "绑定api用法"'},"​")],-1)),m(e(l(b),null,null,512),[[f,n.value]]),e(p,null,{default:s(()=>[e(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:l(k)},x({_:2},[r.value?{name:"vue",fn:s(()=>[e(l(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=a("h2",{id:"值格式化用法",tabindex:"-1"},[i("值格式化用法 "),a("a",{class:"header-anchor",href:"#值格式化用法","aria-label":'Permalink to "值格式化用法"'},"​")],-1)),t[6]||(t[6]=a("div",{class:"warning custom-block"},[a("p",{class:"custom-block-title"},"WARNING"),a("p",null,[i("如需改变绑定的值，请使用"),a("code",null,"valueFormat"),i(" 和 "),a("code",null,"valueParser"),i("组合")])],-1)),m(e(l(b),null,null,512),[[f,n.value]]),e(p,null,{default:s(()=>[e(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),vueCode:l(V)},x({_:2},[o.value?{name:"vue",fn:s(()=>[e(l(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=v("",9))])}}});export{T as __pageData,X as default};
