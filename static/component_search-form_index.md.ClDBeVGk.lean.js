const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/affixDemo.CTD49dG3.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/baseDemo.BvG9TIIR.js"])))=>i.map(i=>d[i]);
import{p as s,v as p,V as c,C as f,c as v,o as y,b2 as C,af as u,G as t,j as m,ag as b,k as n,w as o,a as g}from"./chunks/framework.B3HgsgJJ.js";import{O as h,E as x}from"./chunks/index.DgrmyhQY.js";const A=`<template>
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
`,_=`<template>
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
`,V=JSON.parse('{"title":"ExSearchForm 表单搜索","description":"","frontmatter":{},"headers":[],"relativePath":"component/search-form/index.md","filePath":"component/search-form/index.md"}'),B={name:"component/search-form/index.md"},k=Object.assign(B,{setup(D){const r=s();p(async()=>{r.value=(await c(async()=>{const{default:a}=await import("./chunks/affixDemo.CTD49dG3.js");return{default:a}},__vite__mapDeps([0,1]))).default});const l=s(!0),i=s();return p(async()=>{i.value=(await c(async()=>{const{default:a}=await import("./chunks/baseDemo.BvG9TIIR.js");return{default:a}},__vite__mapDeps([2,1]))).default}),(a,e)=>{const d=f("ClientOnly");return y(),v("div",null,[e[2]||(e[2]=C("",3)),u(t(n(h),null,null,512),[[b,l.value]]),t(d,null,{default:o(()=>[t(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:n(_)},{vue:o(()=>[t(n(i))]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=m("h2",{id:"固定位置",tabindex:"-1"},[g("固定位置 "),m("a",{class:"header-anchor",href:"#固定位置","aria-label":'Permalink to "固定位置"'},"​")],-1)),u(t(n(h),null,null,512),[[b,l.value]]),t(d,null,{default:o(()=>[t(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:n(A)},{vue:o(()=>[t(n(r))]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=C("",7))])}}});export{V as __pageData,k as default};
