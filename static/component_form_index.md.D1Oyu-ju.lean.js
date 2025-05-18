const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/dynDataDemo.Ds_fISsT.js","static/chunks/theme.Y_dR81Rk.js","static/chunks/framework.Dy17bMGK.js","static/chunks/dynShowDemo.bqlCX7JI.js","static/chunks/dynDisabledDemo.Bz-2vKCV.js","static/chunks/registerDemo.DkCy1QdM.js","static/chunks/baseDemo.BpzwiWqr.js"])))=>i.map(i=>d[i]);
import{p as d,v as p,V as u,C as v,c as F,o as E,b2 as k,af as c,G as l,j as t,ag as g,k as n,w as i,a as r}from"./chunks/framework.Dy17bMGK.js";import{O as h,E as m}from"./chunks/index.Dgjk2VAe.js";const A=`<template>
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
`,B=`<template>
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
`,N=`<template>
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
`,D=`<template>
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
`,V=`<template>
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
`,M=JSON.parse('{"title":"ExForm 表单","description":"","frontmatter":{},"headers":[],"relativePath":"component/form/index.md","filePath":"component/form/index.md"}'),P={name:"component/form/index.md"},_=Object.assign(P,{setup(S){const y=d();p(async()=>{y.value=(await u(async()=>{const{default:s}=await import("./chunks/dynDataDemo.Ds_fISsT.js");return{default:s}},__vite__mapDeps([0,1,2]))).default});const b=d();p(async()=>{b.value=(await u(async()=>{const{default:s}=await import("./chunks/dynShowDemo.bqlCX7JI.js");return{default:s}},__vite__mapDeps([3,1,2]))).default});const C=d();p(async()=>{C.value=(await u(async()=>{const{default:s}=await import("./chunks/dynDisabledDemo.Bz-2vKCV.js");return{default:s}},__vite__mapDeps([4,1,2]))).default});const x=d();p(async()=>{x.value=(await u(async()=>{const{default:s}=await import("./chunks/registerDemo.DkCy1QdM.js");return{default:s}},__vite__mapDeps([5,1,2]))).default});const a=d(!0),f=d();return p(async()=>{f.value=(await u(async()=>{const{default:s}=await import("./chunks/baseDemo.BpzwiWqr.js");return{default:s}},__vite__mapDeps([6,1,2]))).default}),(s,e)=>{const o=v("ClientOnly");return E(),F("div",null,[e[5]||(e[5]=k("",4)),c(l(n(h),null,null,512),[[g,a.value]]),l(o,null,{default:i(()=>[l(n(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:n(V)},{vue:i(()=>[l(n(f))]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"useform注册方式用法",tabindex:"-1"},[r("useForm注册方式用法 "),t("a",{class:"header-anchor",href:"#useform注册方式用法","aria-label":'Permalink to "useForm注册方式用法"'},"​")],-1)),e[7]||(e[7]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,[r("对于复杂的场景，可以配合 "),t("code",null,"useForm"),r(" 来使用，代码更加简介")])],-1)),c(l(n(h),null,null,512),[[g,a.value]]),l(o,null,{default:i(()=>[l(n(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:n(D)},{vue:i(()=>[l(n(x))]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=t("h2",{id:"表单项动态禁用",tabindex:"-1"},[r("表单项动态禁用 "),t("a",{class:"header-anchor",href:"#表单项动态禁用","aria-label":'Permalink to "表单项动态禁用"'},"​")],-1)),c(l(n(h),null,null,512),[[g,a.value]]),l(o,null,{default:i(()=>[l(n(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:n(N)},{vue:i(()=>[l(n(C))]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"表单项动态显隐",tabindex:"-1"},[r("表单项动态显隐 "),t("a",{class:"header-anchor",href:"#表单项动态显隐","aria-label":'Permalink to "表单项动态显隐"'},"​")],-1)),e[10]||(e[10]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,"与表单项动态禁用API类似")],-1)),c(l(n(h),null,null,512),[[g,a.value]]),l(o,null,{default:i(()=>[l(n(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:n(B)},{vue:i(()=>[l(n(b))]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=t("h2",{id:"数据联动",tabindex:"-1"},[r("数据联动 "),t("a",{class:"header-anchor",href:"#数据联动","aria-label":'Permalink to "数据联动"'},"​")],-1)),e[12]||(e[12]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("ol",null,[t("li",null,[r("可使用"),t("code",null,"updateSchema"),r("动态设置表单项数据源")]),t("li",null,"可根据表单组件绑定api用法用法，动态设置API参数实现过滤")])],-1)),c(l(n(h),null,null,512),[[g,a.value]]),l(o,null,{default:i(()=>[l(n(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{a.value=!1}),vueCode:n(A)},{vue:i(()=>[l(n(y))]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=k("",19))])}}});export{M as __pageData,_ as default};
