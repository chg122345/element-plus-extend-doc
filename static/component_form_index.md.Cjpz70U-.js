const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/fieldDemo.DWDfmAPC.js","static/chunks/framework.B3HgsgJJ.js","static/chunks/theme.D3OqrOCm.js","static/chunks/dynDataDemo.Cuz8NiMA.js","static/chunks/dynShowDemo.BSujKwAp.js","static/chunks/dynDisabledDemo.CmEW0vP7.js","static/chunks/registerDemo.CYFIX6WN.js","static/chunks/baseDemo.C_eDoEiY.js"])))=>i.map(i=>d[i]);
import{p as d,v as p,V as u,C as F,c as A,o as E,b2 as k,af as c,G as t,j as n,ag as m,k as l,w as i,a as r}from"./chunks/framework.B3HgsgJJ.js";import{O as g,E as h}from"./chunks/index.DgrmyhQY.js";const B=`<template>
	<ex-form-field label="名称" default-value="5555" v-model="modelValue" placeholder="请输入" @change="handleChange">
		<template #append>
			asdasd
		</template>
	</ex-form-field>
	<ex-form-field label="年龄" :default-value="16" component="ElInputNumber" v-model="modelValue2" placeholder="请输入" @change="handleChange" />
	<ex-form-field label="生日" component="ElDatePicker" v-model="modelValue3" :component-props="{valueFormat: 'YYYY-MM-DD'}" placeholder="请选择生日" @change="handleChange" />
	<ex-form-field label="性别" component="ExRadioGroup" v-model="modelValue4" :component-props="{type: 'tag', options: [{label: '男', value: 'M'},{label: '女', value: 'W', color: 'red'}]}" @change="handleChange" />
</template>

<script lang="ts" setup>
import {shallowRef} from 'vue';
import {ExFormField} from "@ex/components/form";

const modelValue = shallowRef();
const modelValue2 = shallowRef();
const modelValue3 = shallowRef();
const modelValue4 = shallowRef();
const handleChange = value => {
	console.error(value, modelValue.value);
}
<\/script>

<style scoped lang="scss">

</style>`,D=`<template>
  <p>当年龄大于18时，[爱好] 选项设置为 运动/玩游戏</p>
  <ex-form @register="register" :model="formModel" />
  <el-button @click="validate">校验</el-button>
  <el-button type="primary" @click="handleGetModelValue">获取表单值</el-button>
  <el-button type="primary" @click="resetFields">重置</el-button>
</template>

<script lang="ts" setup>
import {IExFormSchema, IExUserOptionsData, useForm} from "element-plus-extension";
import {h, ref} from "vue";

const formModel = ref({});

const [register, {validate, getModelValue, resetFields, updateSchema}] = useForm({
  labelWidth: 80,
  labelPosition: "top",
  schemas: [
    {
      prop: 'name',
      label: '姓名',
      required: true,
      component: 'ExInput',
      colProps: 12,
      defaultValue: '哈哈2',
    },
    {
      prop: 'age',
      label: '年龄',
      component: 'ElInputNumber',
      required: true,
      helpMessage: '只能输入正整数',
      colProps: 12,
      componentProps: {
        precision: 0,
        min: 0,
        onChange(v) {
          if (v > 18) {
            updateSchema({
              prop: 'hobby',
              componentProps:{
                options: [
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
            } as IExFormSchema)
          } else {
            updateSchema({
              prop: 'hobby',
              componentProps:{
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
            } as IExFormSchema)
          }
        }
      }
    },
    {
      prop: 'birthday',
      label: '生日',
      component: 'ElDatePicker',
    },
    {
      prop: 'status',
      label: '状态',
      required: true,
      component: 'ExTagSelect',
      componentProps:  {
        clearable: true,
        options: [
          {label: '废弃', value: 'delete', color: 'red', disabled: true},
          {label: '启用', value: 'enabled', color: '#f5c13c'},
          {label: '禁用', value: 'disabled', color: '#3f8cff'},
        ],
      }
    },
    {
      prop: 'org',
      label: '组织',
      component: 'ExOrgSelect',
      componentProps: {
        clearable: true,
        options: [
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
        ]
      }
    },
    {
      prop: 'user',
      label: '人员',
      component: 'ExUserSelect',
      componentProps: {
        clearable: true,
        props: {
          disabled: (data: IExUserOptionsData) => data.category !== 'user',
        },
        options: [
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
        ]
      }
    },
    {
      label: '邮箱',
      prop: 'email',
      helpMessage: '点击发送邮件',
      component: 'ExInput',
      rules: [
        {
          required: true,
          message: '请输入邮箱',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: ['blur', 'change'],
        },
      ],
      slots: {
        label: ({label}) => h('span', {style: {color: 'var(--el-color-primary)', cursor: 'pointer'}}, label),
      }
    },
    {
      label: '爱好',
      prop: 'hobby',
      component: 'ExCheckboxGroup',
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
    }
  ] as IExFormSchema[]
});


const handleGetModelValue = () => {
  const formModel = getModelValue();
  alert(JSON.stringify(formModel));
}
<\/script>
`,N=`<template>
  <p>当状态为禁用时，隐藏组织、人员，并且清空组织、人员选择的值</p>
  <ex-form @register="register" :model="formModel" />
  <el-button @click="validate">校验</el-button>
  <el-button type="primary" @click="handleGetModelValue">获取表单值</el-button>
  <el-button type="primary" @click="resetFields">重置</el-button>
</template>

<script lang="ts" setup>
import {IExFormSchema, IExUserOptionsData, useForm} from "element-plus-extension";
import {h, ref} from "vue";

const formModel = ref({});

const schemas = [
  {
    prop: 'name',
    label: '姓名',
    required: true,
    component: 'ExInput',
    colProps: 12,
    defaultValue: '哈哈2',
  },
  {
    prop: 'age',
    label: '年龄',
    component: 'ElInputNumber',
    required: true,
    helpMessage: '只能输入正整数',
    colProps: 12,
    componentProps: {
      precision: 0,
      min: 0
    }
  },
  {
    prop: 'birthday',
    label: '生日',
    component: 'ElDatePicker',
  },
  {
    prop: 'status',
    label: '状态',
    required: true,
    component: 'ExTagSelect',
    componentProps: ({model}) => {
      return {
        clearable: true,
        options: [
          {label: '废弃', value: 'delete', color: 'red', disabled: true},
          {label: '启用', value: 'enabled', color: '#f5c13c'},
          {label: '禁用', value: 'disabled', color: '#3f8cff'},
        ],
        onChange(value) {
          if (value === 'disabled') {
            model.org = undefined;
            model.user = undefined;
          }
        }
      }
    }
  },
  {
    prop: 'org',
    label: '组织',
    component: 'ExOrgSelect',
    show: ({model}) => {
      return model.status !== 'disabled'
    },
    componentProps: {
      clearable: true,
      options: [
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
      ]
    }
  },
  {
    prop: 'user',
    label: '人员',
    component: 'ExUserSelect',
    show: ({model}) => {
      return model.status !== 'disabled'
    },
    componentProps: {
      clearable: true,
      props: {
        disabled: (data: IExUserOptionsData) => data.category !== 'user',
      },
      options: [
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
      ]
    }
  },
  {
    label: '邮箱',
    prop: 'email',
    helpMessage: '点击发送邮件',
    component: 'ExInput',
    rules: [
      {
        required: true,
        message: '请输入邮箱',
        trigger: 'blur',
      },
      {
        type: 'email',
        message: '请输入正确的邮箱地址',
        trigger: ['blur', 'change'],
      },
    ],
    slots: {
      label: ({label}) => h('span', {style: {color: 'var(--el-color-primary)', cursor: 'pointer'}}, label),
    }
  },
  {
    label: '爱好',
    prop: 'hobby',
    component: 'ExCheckboxGroup',
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
  }
] as IExFormSchema[]

const [register, {validate, getModelValue, resetFields}] = useForm({
  labelWidth: 80,
  labelPosition: "top",
  schemas: schemas
});

const handleGetModelValue = () => {
  const formModel = getModelValue();
  alert(JSON.stringify(formModel));
}
<\/script>
`,V=`<template>
  <p>1. 当年龄大于18时，禁用姓名</p>
  <p>2. 当状态为禁用时，禁用组织、人员，并且清空组织、人员选择的值</p>
  <p>3. 动态禁用选项数据，当年龄大于18时，爱好只能选择运动/玩游戏</p>
  <ex-form @register="register" :model="formModel" />
  <el-button @click="validate">校验</el-button>
  <el-button type="primary" @click="handleGetModelValue">获取表单值</el-button>
  <el-button type="primary" @click="resetFields">重置</el-button>
</template>

<script lang="ts" setup>
import {IExFormSchema, IExUserOptionsData, useForm} from "element-plus-extension";
import {h, ref} from "vue";

const formModel = ref({});

const schemas = [
  {
    prop: 'name',
    label: '姓名',
    required: true,
    component: 'ExInput',
    colProps: 12,
    defaultValue: '哈哈2',
    disabled: ({model}) => {
      return model.age > 18
    }
  },
  {
    prop: 'age',
    label: '年龄',
    component: 'ElInputNumber',
    required: true,
    helpMessage: '只能输入正整数',
    colProps: 12,
    componentProps: {
      precision: 0,
      min: 0
    }
  },
  {
    prop: 'birthday',
    label: '生日',
    component: 'ElDatePicker',
  },
  {
    prop: 'status',
    label: '状态',
    required: true,
    component: 'ExTagSelect',
    componentProps: ({model}) => {
      return {
        clearable: true,
        options: [
          {label: '废弃', value: 'delete', color: 'red', disabled: true},
          {label: '启用', value: 'enabled', color: '#f5c13c'},
          {label: '禁用', value: 'disabled', color: '#3f8cff'},
        ],
        onChange(value) {
          if (value === 'disabled') {
            model.org = undefined;
            model.user = undefined;
          }
        }
      }
    }
  },
  {
    prop: 'org',
    label: '组织',
    component: 'ExOrgSelect',
    disabled: ({model}) => {
      return model.status === 'disabled'
    },
    componentProps: {
      clearable: true,
      options: [
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
      ]
    }
  },
  {
    prop: 'user',
    label: '人员',
    component: 'ExUserSelect',
    disabled: ({model}) => {
      return model.status === 'disabled'
    },
    componentProps: {
      clearable: true,
      props: {
        disabled: (data: IExUserOptionsData) => data.category !== 'user',
      },
      options: [
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
      ]
    }
  },
  {
    label: '邮箱',
    prop: 'email',
    helpMessage: '点击发送邮件',
    component: 'ExInput',
    rules: [
      {
        required: true,
        message: '请输入邮箱',
        trigger: 'blur',
      },
      {
        type: 'email',
        message: '请输入正确的邮箱地址',
        trigger: ['blur', 'change'],
      },
    ],
    slots: {
      label: ({label}) => h('span', {style: {color: 'var(--el-color-primary)', cursor: 'pointer'}}, label),
    }
  },
  {
    label: '爱好',
    prop: 'hobby',
    component: 'ExCheckboxGroup',
    componentProps: ({model}) => {
      return {
        options: [
          {
            label: '吃饭',
            value: 'eat',
            disabled: model.age > 18
          },
          {
            label: '睡觉',
            value: 'sleep',
            disabled: model.age > 18
          },
          {
            label: '运动',
            value: 'sport',
          },
          {
            label: '玩游戏',
            value: 'games',
          }
        ]
      }
    }
  }
] as IExFormSchema[]

const [register, {validate, getModelValue, resetFields}] = useForm({
  labelWidth: 80,
  labelPosition: "top",
  schemas: schemas
});

const handleGetModelValue = () => {
  const formModel = getModelValue();
  alert(JSON.stringify(formModel));
}
<\/script>
`,P=`<template>
  <ex-form @register="register" :model="formModel" />
  <el-button @click="validate">校验</el-button>
  <el-button @click="validate(true)">校验有消息提示</el-button>
  <el-button type="primary" @click="handleGetModelValue">获取表单值</el-button>
  <el-button type="primary" @click="setModelValue({age: 15, name: '哈哈哈'}, true)">设置表单值</el-button>
  <el-button type="primary" @click="resetFields">重置</el-button>
</template>

<script lang="ts" setup>
import {IExFormSchema, IExUserOptionsData, useForm} from "element-plus-extension";
import {h, ref} from "vue";
import {ElAlert} from "element-plus";

const formModel = ref({});

const schemas = [
  {
    prop: 'name',
    label: '姓名',
    required: true,
    component: 'ExInput',
    colProps: 12,
    defaultValue: '哈哈2'
  },
  {
    prop: 'age',
    label: '年龄',
    component: 'ElInputNumber',
    required: true,
    helpMessage: '只能输入正整数',
    colProps: 12,
    componentProps: {
      precision: 0,
      min: 0
    }
  },
  {
    prop: 'birthday',
    label: '生日',
    component: 'ElDatePicker',
  },
  {
    prop: 'status',
    label: '状态',
    required: true,
    component: 'ExTagSelect',
    componentProps: {
      clearable: true,
      options: [
        {label: '废弃', value: 'delete', color: 'red', disabled: true},
        {label: '启用', value: 'enabled', color: '#f5c13c'},
        {label: '禁用', value: 'disabled', color: '#3f8cff'},
      ]
    }
  },
  {
    prop: 'org',
    label: '组织',
    required: true,
    component: 'ExOrgSelect',
    componentProps: {
      clearable: true,
      options: [
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
      ]
    }
  },
  {
    prop: 'user',
    label: '人员',
    required: true,
    component: 'ExUserSelect',
    componentProps: {
      clearable: true,
      props: {
        disabled: (data: IExUserOptionsData) => data.category !== 'user',
      },
      options: [
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
      ]
    }
  },
  {
    label: '邮箱',
    prop: 'email',
    helpMessage: '点击发送邮件',
    component: 'ExInput',
    rules: [
      {
        required: true,
        message: '请输入邮箱',
        trigger: 'blur',
      },
      {
        type: 'email',
        message: '请输入正确的邮箱地址',
        trigger: ['blur', 'change'],
      },
    ],
    slots: {
      label: ({label}) => h('span', {style: {color: 'var(--el-color-primary)', cursor: 'pointer'}}, label),
    }
  },
  {
    label: '爱好',
    prop: 'hobby',
    component: 'ExCheckboxGroup',
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
  {
    renderFormItem: false,
    colProps: 24,
    renderContent() {
      return h(ElAlert, {
        type: 'info',
        showIcon: true,
        closable: false
      }, {default: () => [h('p', '表单填写的值: ' + JSON.stringify(formModel.value))]})
    }
  }
] as IExFormSchema[]

const [register, {validate, getModelValue, setModelValue, resetFields}] = useForm({
  labelWidth: 80,
  labelPosition: "top",
  schemas: schemas
});

const handleGetModelValue = () => {
  const formModel = getModelValue();
  alert(JSON.stringify(formModel));
}
<\/script>
`,S=`<template>
  <ex-form v-bind="formProps" :model="formModel" ref="formRef" />

  <el-button @click="validate">校验</el-button>
  <el-button @click="validate(true)">校验有消息提示</el-button>
  <el-button type="primary" @click="handleGetModelValue">获取表单值</el-button>
  <el-button type="primary" @click="handleSetModelValue">设置表单值</el-button>
  <el-button type="primary" @click="resetFields">重置</el-button>
</template>

<script lang="ts" setup>
import {IExFormInstance, IExFormProps, IExFormSchema, IExUserOptionsData} from "element-plus-extension";
import {computed, h, ref} from "vue";
import {ElAlert} from "element-plus";

const formRef = ref<IExFormInstance>();
const formModel = ref({});

const formProps = computed(() => {
  return {
		theme: 'table',
    labelWidth: 80,
    labelPosition: "top",
    schemas: [
      {
        prop: 'name',
        label: '姓名',
        required: true,
        component: 'ExInput',
        colProps: 12,
        defaultValue: '哈哈2',
        extra: '额外的信息'
      },
      {
        prop: 'age',
        label: '年龄',
        component: 'ElInputNumber',
        required: true,
        helpMessage: '只能输入正整数',
        colProps: 12,
        extra: () => '自定义额外的信息',
        componentProps: {
          precision: 0,
          min: 0
        }
      },
      {
        prop: 'birthday',
        label: '生日',
        component: 'ElDatePicker',
      },
      {
        prop: 'status',
        label: '状态',
        required: true,
        component: 'ExTagSelect',
        componentProps: {
          clearable: true,
          options: [
            {label: '废弃', value: 'delete', color: 'red', disabled: true},
            {label: '启用', value: 'enabled', color: '#f5c13c'},
            {label: '禁用', value: 'disabled', color: '#3f8cff'},
          ]
        }
      },
      {
        prop: 'org',
        label: '组织',
        required: true,
        component: 'ExOrgSelect',
        componentProps: {
          clearable: true,
          options: [
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
          ]
        }
      },
      {
        prop: 'user',
        label: '人员',
        required: true,
        component: 'ExUserSelect',
        componentProps: {
          clearable: true,
          props: {
            disabled: (data: IExUserOptionsData) => data.category !== 'user',
          },
          options: [
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
          ]
        }
      },
      {
        label: '邮箱',
        prop: 'email',
        helpMessage: '点击发送邮件',
        component: 'ExInput',
        rules: [
          {
            required: true,
            message: '请输入邮箱',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ],
        slots: {
          label: ({label}) => h('span', {style: {color: 'var(--el-color-primary)', cursor: 'pointer'}}, label),
        }
      },
      {
        label: '爱好',
        prop: 'hobby',
        component: 'ExCheckboxGroup',
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
      {
        renderFormItem: false,
        colProps: 24,
        renderContent() {
          return h(ElAlert, {
            type: 'info',
            showIcon: true,
            closable: false
          }, {default: () => [h('p', '表单填写的值: ' + JSON.stringify(formModel.value))]})
        }
      }
    ] as IExFormSchema[]
  } as IExFormProps
});

const validate = (showMessage = false) => {
  return formRef.value?.validate(showMessage);
}
const resetFields = () => {
  return formRef.value?.resetFields();
}
const handleSetModelValue = () => {
  return formRef.value?.setModelValue({age: 15, name: '哈哈哈'}, true);
}

const handleGetModelValue = () => {
  const formModel = formRef.value?.getModelValue();
  alert(JSON.stringify(formModel));
}
<\/script>
`,W=JSON.parse('{"title":"ExForm 表单","description":"","frontmatter":{},"headers":[],"relativePath":"component/form/index.md","filePath":"component/form/index.md"}'),w={name:"component/form/index.md"},q=Object.assign(w,{setup(I){const C=d();p(async()=>{C.value=(await u(async()=>{const{default:s}=await import("./chunks/fieldDemo.DWDfmAPC.js").then(e=>e.Q);return{default:s}},__vite__mapDeps([0,1,2]))).default});const b=d();p(async()=>{b.value=(await u(async()=>{const{default:s}=await import("./chunks/dynDataDemo.Cuz8NiMA.js");return{default:s}},__vite__mapDeps([3,2,1]))).default});const y=d();p(async()=>{y.value=(await u(async()=>{const{default:s}=await import("./chunks/dynShowDemo.BSujKwAp.js");return{default:s}},__vite__mapDeps([4,2,1]))).default});const x=d();p(async()=>{x.value=(await u(async()=>{const{default:s}=await import("./chunks/dynDisabledDemo.CmEW0vP7.js");return{default:s}},__vite__mapDeps([5,2,1]))).default});const f=d();p(async()=>{f.value=(await u(async()=>{const{default:s}=await import("./chunks/registerDemo.CYFIX6WN.js");return{default:s}},__vite__mapDeps([6,2,1]))).default});const a=d(!0),v=d();return p(async()=>{v.value=(await u(async()=>{const{default:s}=await import("./chunks/baseDemo.C_eDoEiY.js");return{default:s}},__vite__mapDeps([7,2,1]))).default}),(s,e)=>{const o=F("ClientOnly");return E(),A("div",null,[e[6]||(e[6]=k('<h1 id="exform-表单" tabindex="-1">ExForm 表单 <a class="header-anchor" href="#exform-表单" aria-label="Permalink to &quot;ExForm 表单&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用表单收集、验证、提交数据，可按照规则配置呈现多元化表单。</p></div><h2 id="ref用法" tabindex="-1">Ref用法 <a class="header-anchor" href="#ref用法" aria-label="Permalink to &quot;Ref用法&quot;">​</a></h2><blockquote><p>绑定Ref属性调用表单方法</p></blockquote>',4)),c(t(l(g),null,null,512),[[m,a.value]]),t(o,null,{default:i(()=>[t(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:l(S)},{vue:i(()=>[t(l(v))]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=n("h2",{id:"useform注册方式用法",tabindex:"-1"},[r("useForm注册方式用法 "),n("a",{class:"header-anchor",href:"#useform注册方式用法","aria-label":'Permalink to "useForm注册方式用法"'},"​")],-1)),e[8]||(e[8]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[r("对于复杂的场景，可以配合 "),n("code",null,"useForm"),r(" 来使用，代码更加简介")])],-1)),c(t(l(g),null,null,512),[[m,a.value]]),t(o,null,{default:i(()=>[t(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:l(P)},{vue:i(()=>[t(l(f))]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=n("h2",{id:"表单项动态禁用",tabindex:"-1"},[r("表单项动态禁用 "),n("a",{class:"header-anchor",href:"#表单项动态禁用","aria-label":'Permalink to "表单项动态禁用"'},"​")],-1)),c(t(l(g),null,null,512),[[m,a.value]]),t(o,null,{default:i(()=>[t(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:l(V)},{vue:i(()=>[t(l(x))]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=n("h2",{id:"表单项动态显隐",tabindex:"-1"},[r("表单项动态显隐 "),n("a",{class:"header-anchor",href:"#表单项动态显隐","aria-label":'Permalink to "表单项动态显隐"'},"​")],-1)),e[11]||(e[11]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"与表单项动态禁用API类似")],-1)),c(t(l(g),null,null,512),[[m,a.value]]),t(o,null,{default:i(()=>[t(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:l(N)},{vue:i(()=>[t(l(y))]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=n("h2",{id:"数据联动",tabindex:"-1"},[r("数据联动 "),n("a",{class:"header-anchor",href:"#数据联动","aria-label":'Permalink to "数据联动"'},"​")],-1)),e[13]||(e[13]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("ol",null,[n("li",null,[r("可使用"),n("code",null,"updateSchema"),r("动态设置表单项数据源")]),n("li",null,"可根据表单组件绑定api用法用法，动态设置API参数实现过滤")])],-1)),c(t(l(g),null,null,512),[[m,a.value]]),t(o,null,{default:i(()=>[t(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{a.value=!1}),vueCode:l(D)},{vue:i(()=>[t(l(b))]),_:1},8,["vueCode"])]),_:1}),e[14]||(e[14]=n("h2",{id:"标单项单独使用",tabindex:"-1"},[r("标单项单独使用 "),n("a",{class:"header-anchor",href:"#标单项单独使用","aria-label":'Permalink to "标单项单独使用"'},"​")],-1)),c(t(l(g),null,null,512),[[m,a.value]]),t(o,null,{default:i(()=>[t(l(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[5]||(e[5]=()=>{a.value=!1}),vueCode:l(B)},{vue:i(()=>[t(l(C))]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=k(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">model</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">表单数据对象</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">theme</td><td style="text-align:left;"><code>table</code></td><td style="text-align:left;">-</td><td style="text-align:left;">主题</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">表单校验规则</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">inline</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">行内表单模式</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showMessage</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示校验错误信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">inlineMessage</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否以行内形式展示校验信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">hideRequiredAsterisk</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否隐藏必填*号</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">requireAsteriskPosition</td><td style="text-align:left;"><code>right</code> <code>left</code></td><td style="text-align:left;"><code>left</code></td><td style="text-align:left;">必填*号位置</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">labelPosition</td><td style="text-align:left;"><code>top</code> <code>right</code> <code>left</code></td><td style="text-align:left;"><code>right</code></td><td style="text-align:left;">表单域标签的位置</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">labelWidth</td><td style="text-align:left;">number/string</td><td style="text-align:left;">-</td><td style="text-align:left;">标签的宽度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">labelSuffix</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">标签后缀</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">validateOnRuleChange</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否在 rules 属性改变后立即触发一次验证</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">scrollToError</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">当校验失败时，滚动到第一个错误表单项</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否被禁用</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">组件大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">schemas</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">表单项配置，数据类型请参阅下面<a href="#iexformschema">IExFormSchema</a></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">autoPickSchemaFields</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否仅绑定表单项配置的属性，会忽略配置中不存在的属性</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">baseColProps</td><td style="text-align:left;">number/object</td><td style="text-align:left;">8</td><td style="text-align:left;">表单项栅格配置属性</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">number</td><td style="text-align:left;">18</td><td style="text-align:left;">表单项栅格间距配置</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="formschema" tabindex="-1">FormSchema <a class="header-anchor" href="#formschema" aria-label="Permalink to &quot;FormSchema&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">model 的键名</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">标签</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">labelWidth</td><td style="text-align:left;">number/string</td><td style="text-align:left;">-</td><td style="text-align:left;">标签的宽度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">required</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否必填</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">object/Array</td><td style="text-align:left;">-</td><td style="text-align:left;">表单校验规则</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showMessage</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示校验错误信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">inlineMessage</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否以行内形式展示校验信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">组件大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showLabel</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示标签</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">helpMessage</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">提示信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">colProps</td><td style="text-align:left;">number/object</td><td style="text-align:left;">-</td><td style="text-align:left;">表单项栅格配置属性</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">show</td><td style="text-align:left;">boolean/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">表单项是否显示</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">表单项是否禁用，<code>继承表单disabled属性，如绑定的是函数，则会忽略表单disabled属性</code></td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">renderFormItem</td><td style="text-align:left;">boolean/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">是否渲染FormItem</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">component</td><td style="text-align:left;">string/Component</td><td style="text-align:left;">-</td><td style="text-align:left;">渲染的组件</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">componentProps</td><td style="text-align:left;">object/Function</td><td style="text-align:left;">-</td><td style="text-align:left;">渲染的组件属性</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">defaultValue</td><td style="text-align:left;">any</td><td style="text-align:left;">-</td><td style="text-align:left;">默认值</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">renderContent</td><td style="text-align:left;">Function</td><td style="text-align:left;">-</td><td style="text-align:left;">自定义渲染内容，与FormItem的default插槽一致</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">slots</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">FormItem的插槽</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">register</td><td style="text-align:left;"><code>(instance)</code></td><td style="text-align:left;">注册事件</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[formItem.prop]</code></td><td style="text-align:left;">-</td><td style="text-align:left;">自定义表单项内容</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">setProps</td><td style="text-align:left;"><code>(data?:Record&lt;string, unknown&gt;)</code></td><td style="text-align:left;">设置属性方法，<code>data</code>为表单props值</td></tr><tr><td style="text-align:left;">validate</td><td style="text-align:left;"><code>(showMessage?:boolean)</code></td><td style="text-align:left;">表单校验，<code>showMessage</code>是否开启弹出提示</td></tr><tr><td style="text-align:left;">setModelValue</td><td style="text-align:left;"><code>(model)</code></td><td style="text-align:left;">设置表单值，<code>model</code>表单数据对象</td></tr><tr><td style="text-align:left;">getModelValue</td><td style="text-align:left;"><code>(props?: string[])</code></td><td style="text-align:left;">获取表单值，<code>props</code>可指定获取某些属性值</td></tr><tr><td style="text-align:left;">clearModelValue</td><td style="text-align:left;"><code>(props?: string[])</code></td><td style="text-align:left;">清空表单值，<code>props</code>可指定清空某些属性值</td></tr><tr><td style="text-align:left;">resetFields</td><td style="text-align:left;"><code>(props?: string[])</code></td><td style="text-align:left;">重置表单值，<code>props</code>可指定某些属性</td></tr><tr><td style="text-align:left;">validateField</td><td style="text-align:left;"><code>(props?: string[])</code></td><td style="text-align:left;">局部表单校验，<code>props</code>可指定某些属性</td></tr><tr><td style="text-align:left;">clearValidate</td><td style="text-align:left;"><code>(props?: string[])</code></td><td style="text-align:left;">清理校验信息，<code>props</code>可指定某些属性</td></tr><tr><td style="text-align:left;">scrollToField</td><td style="text-align:left;"><code>(prop: string)</code></td><td style="text-align:left;">滚动到指定的字段，<code>prop</code>表单项属性</td></tr><tr><td style="text-align:left;">updateSchema</td><td style="text-align:left;"><code>(schemas?: IExFormSchema/Array&lt;IExFormSchema&gt;)</code></td><td style="text-align:left;">动态更新表单项配置，依据<code>schemas</code>中prop值作为标识</td></tr></tbody></table><h2 id="formitem-api" tabindex="-1">FormItem API <a class="header-anchor" href="#formitem-api" aria-label="Permalink to &quot;FormItem API&quot;">​</a></h2><h3 id="formitemprops" tabindex="-1">FormItemProps <a class="header-anchor" href="#formitemprops" aria-label="Permalink to &quot;FormItemProps&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:center;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">model 的键名</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">标签</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">labelWidth</td><td style="text-align:left;">number/string</td><td style="text-align:left;">-</td><td style="text-align:left;">标签的宽度</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">required</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">是否必填</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">object/Array</td><td style="text-align:left;">-</td><td style="text-align:left;">表单校验规则</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showMessage</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示校验错误信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">inlineMessage</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否以行内形式展示校验信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">组件大小</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">showLabel</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示标签</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">helpMessage</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">提示信息</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">colProps</td><td style="text-align:left;">number/object</td><td style="text-align:left;">-</td><td style="text-align:left;">表单项栅格配置属性</td><td style="text-align:center;">N</td></tr></tbody></table><h3 id="formitemslots" tabindex="-1">FormItemSlots <a class="header-anchor" href="#formitemslots" aria-label="Permalink to &quot;FormItemSlots&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">prepend</td><td style="text-align:left;">-</td><td style="text-align:left;">前置内容</td></tr><tr><td style="text-align:left;">default</td><td style="text-align:left;">-</td><td style="text-align:left;">表单项内容</td></tr><tr><td style="text-align:left;">append</td><td style="text-align:left;">-</td><td style="text-align:left;">后置内容</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;"><code>({label, helpMessage})</code></td><td style="text-align:left;">标签位置显示的内容</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;"><code>({error})</code></td><td style="text-align:left;">验证错误信息的显示内容</td></tr></tbody></table><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><h3 id="iexformschema" tabindex="-1">IExFormSchema <a class="header-anchor" href="#iexformschema" aria-label="Permalink to &quot;IExFormSchema&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormItemProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  show</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormItemParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  disabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormItemParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  renderFormItem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormItemParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  component</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormSchemaComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  componentProps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ObjectConstructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormItemParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ObjectConstructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  defaultValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  renderContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormItemParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IComponentNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  slots</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExFormItemSlotsType</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,19))])}}});export{W as __pageData,q as default};
