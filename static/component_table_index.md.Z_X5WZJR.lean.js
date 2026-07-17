const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/demo.Byy3XDdO.js","static/chunks/theme.BdqYSx0Z.js","static/chunks/framework.l8elv8IJ.js"])))=>i.map(i=>d[i]);
import{d as o,v as g,V as y,C as x,o as c,c as f,aT as s,ar as h,as as p,E as e,k as l,w as i,aA as u,p as b,G as m}from"./chunks/framework.l8elv8IJ.js";import{C as k,S as C}from"./chunks/index.DVsCdBIq.js";const E=`<template>
  <span class="example-title">基础用法</span>
  <ex-table v-bind="tableProps">
    <template #action="{data}">
      <span>操作{{ data.label }}</span>
    </template>
    <template #toolbar>
      <span>操作</span>
    </template>
    <template #dateHeader="{}">
      自定义头部
    </template>
  </ex-table>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {ExTableCellRender, IExTableColumnProps, IExTableProps} from "element-plus-extension";

const api = (params) => {
  console.error(params, '===apiParams')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({code: 200, data: [
          {
            date: '2016-05-03',
            name: 'Tom',
            status: 'success',
            statusText: '审批通过',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            status: 'info',
            statusText: '等待审批',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            status: 'danger',
            statusText: '审批拒绝',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            status: 'warning',
            statusText: '审批过期',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ]});
    }, 2000)
  })
}

const tableProps = ref<IExTableProps>({
  data: [],
  disabled: false,
  pagination: true,
  searchForm: {
    baseColProps: 8,
  },
  toolbar: {
    searchCombination: true,
    searchShortcut: {
      defaultCheckedFields: ['name']
    }
  },
  api: api,
  columns: [
    {
      type: 'radio',
    },
    {
      label: '姓名',
      prop: 'name',
      helpMessage: '这是提示信息',
      query: true,
      editRender: {
        component: 'ExInput',
        componentProps: {
        }
      },
      renderCell: ExTableCellRender.renderAvatar
    },
    {
      label: '日期',
      prop: 'date',
      helpMessage: '这是提示信息',
      editRender: {
        component: 'ElDatePicker',
      },
      formatter: {
        type: 'date',
        dateFormat: 'yyyy-MM'
      },
      query: {
        component: 'ElDatePicker',
        filterable: false
      },
    },
    {
      label: '状态',
      prop: 'statusText',
      renderCell: (data) => ExTableCellRender.renderSpecialTag(data, {type: data.row['status']})
    },
    {
      label: '地址',
      prop: 'address',
      editRender: {
        component: 'ExSelect',
        componentProps: {
          options: [
            {
              label: '选项1',
              value: 1
            },
            {
              label: '选项2',
              value: 2
            }
          ]
        }
      },
      query: true,
      formatter: {
        type: 'html',
        html: '<a>啊沙发沙发</a>'
      }
    }
  ] as IExTableColumnProps[]
})


<\/script>
`,A=JSON.parse('{"title":"ExTable 表格","description":"","frontmatter":{},"headers":[],"relativePath":"component/table/index.md","filePath":"component/table/index.md"}'),F={name:"component/table/index.md"},T=o({...F,setup(N){const a=b(!0),d=m();return g(async()=>{d.value=(await y(async()=>{const{default:n}=await import("./chunks/demo.Byy3XDdO.js");return{default:n}},__vite__mapDeps([0,1,2]))).default}),(n,t)=>{const r=x("ClientOnly");return c(),f("div",null,[t[1]||(t[1]=s("",3)),h(e(l(k),null,null,512),[[p,a.value]]),e(r,null,{default:i(()=>[e(l(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(E)},u({_:2},[d.value?{name:"vue",fn:i(()=>[e(l(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=s("",20))])}}});export{A as __pageData,T as default};
