const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/affixDemo.DOU6Xonq.js","static/chunks/framework.l8elv8IJ.js","static/chunks/baseDemo.DeP2kOKE.js"])))=>i.map(i=>d[i]);
import{d as v,v as d,V as p,C as y,o as g,c as A,aT as c,ar as C,as as u,E as t,k as n,w as o,aA as m,j as b,a as _,G as h,p as B}from"./chunks/framework.l8elv8IJ.js";import{C as x,S as f}from"./chunks/index.DVsCdBIq.js";const P=`<template>
  <ex-search-form :schemas="schemas" affix :show-reset-button="false" />
</template>

<script lang="ts" setup>
import {IExFormSchema} from "element-plus-extension";

const schemas = [
    {
      prop: 'name',
      label: '姓名',
      component: 'ExInput',
      colProps: 8,
    },
    {
      prop: 'code',
      label: '编码',
      component: 'ExInput',
      colProps: 8,
    },
    {
      prop: 'dept',
      label: '部门',
      required: true,
      colProps: 8,
      component: 'ExInput',
    },
    {
      prop: 'job',
      label: '职位',
      required: true,
      colProps: 8,
      component: 'ExInput',
    },
    {
      prop: 'age',
      label: '年龄',
      component: 'ElInputNumber',
      colProps: 8,
      componentProps: {
        precision: 0,
        min: 0
      }
    },
    {
      prop: 'status',
      label: '状态',
      component: 'ExTagSelect',
      colProps: 8,
      componentProps: {
        clearable: true,
        options: [
          {label: '废弃', value: 'delete', color: 'red'},
          {label: '启用', value: 'enabled', color: '#f5c13c'},
          {label: '禁用', value: 'disabled', color: '#3f8cff'},
        ]
      }
    },
    {
      prop: 'birthday',
      label: '生日',
      component: 'ElDatePicker',
      colProps: 8,
    },
    {
      label: '爱好',
      prop: 'hobby',
      component: 'ExCheckboxGroup',
      colProps: 12,
      componentProps: {
        options: [
          {
            label: '吃饭',
            value: 'eat'
          },
          {
            label: '睡觉',
            value: 'sleep'
          },
          {
            label: '运动',
            value: 'sport'
          },
          {
            label: '玩游戏',
            value: 'games'
          }
        ]
      }
    },
  ] as IExFormSchema[]

<\/script>
`,D=`<template>
  <ex-search-form :schemas="schemas" />
</template>

<script lang="ts" setup>
import {IExFormSchema} from "element-plus-extension";

const schemas = [
    {
      prop: 'name',
      label: '姓名',
      component: 'ExInput',
      colProps: 8,
    },
    {
      prop: 'code',
      label: '编码',
      component: 'ExInput',
      colProps: 8,
    },
    {
      prop: 'dept',
      label: '部门',
      required: true,
      colProps: 8,
      component: 'ExInput',
    },
    {
      prop: 'job',
      label: '职位',
      required: true,
      colProps: 8,
      component: 'ExInput',
    },
    {
      prop: 'age',
      label: '年龄',
      component: 'ElInputNumber',
      colProps: 8,
      componentProps: {
        precision: 0,
        min: 0
      }
    },
    {
      prop: 'status',
      label: '状态',
      component: 'ExTagSelect',
      colProps: 8,
      componentProps: {
        clearable: true,
        options: [
          {label: '废弃', value: 'delete', color: 'red'},
          {label: '启用', value: 'enabled', color: '#f5c13c'},
          {label: '禁用', value: 'disabled', color: '#3f8cff'},
        ]
      }
    },
    {
      prop: 'birthday',
      label: '生日',
      component: 'ElDatePicker',
      colProps: 8,
    },
    {
      label: '爱好',
      prop: 'hobby',
      component: 'ExCheckboxGroup',
      colProps: 12,
      componentProps: {
        options: [
          {
            label: '吃饭',
            value: 'eat'
          },
          {
            label: '睡觉',
            value: 'sleep'
          },
          {
            label: '运动',
            value: 'sport'
          },
          {
            label: '玩游戏',
            value: 'games'
          }
        ]
      }
    },
  ] as IExFormSchema[]

<\/script>
`,w=JSON.parse('{"title":"ExSearchForm 表单搜索","description":"","frontmatter":{},"headers":[],"relativePath":"component/search-form/index.md","filePath":"component/search-form/index.md"}'),E={name:"component/search-form/index.md"},N=v({...E,setup(V){const s=h();d(async()=>{s.value=(await p(async()=>{const{default:a}=await import("./chunks/affixDemo.DOU6Xonq.js");return{default:a}},__vite__mapDeps([0,1]))).default});const l=B(!0),r=h();return d(async()=>{r.value=(await p(async()=>{const{default:a}=await import("./chunks/baseDemo.DeP2kOKE.js");return{default:a}},__vite__mapDeps([2,1]))).default}),(a,e)=>{const i=y("ClientOnly");return g(),A("div",null,[e[2]||(e[2]=c("",3)),C(t(n(x),null,null,512),[[u,l.value]]),t(i,null,{default:o(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:n(D)},m({_:2},[r.value?{name:"vue",fn:o(()=>[t(n(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[3]||(e[3]=b("h2",{id:"固定位置",tabindex:"-1"},[_("固定位置 "),b("a",{class:"header-anchor",href:"#固定位置","aria-label":'Permalink to "固定位置"'},"​")],-1)),C(t(n(x),null,null,512),[[u,l.value]]),t(i,null,{default:o(()=>[t(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:n(P)},m({_:2},[s.value?{name:"vue",fn:o(()=>[t(n(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=c("",7))])}}});export{w as __pageData,N as default};
