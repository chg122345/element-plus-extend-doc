const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/fieldDemo.pYGaYuvT.js","static/chunks/theme.BdqYSx0Z.js","static/chunks/framework.l8elv8IJ.js","static/chunks/dynDataDemo.RFm2FahW.js","static/chunks/dynShowDemo.D74DkBjy.js","static/chunks/dynDisabledDemo.DnglVAfY.js","static/chunks/registerDemo.dthzJ60D.js","static/chunks/baseDemo.hDEFUPyX.js"])))=>i.map(i=>d[i]);
import{d as A,v as o,V as p,C as E,o as B,c as D,aT as F,ar as u,as as c,E as t,k as l,w as i,aA as m,j as n,a as r,G as g,p as N}from"./chunks/framework.l8elv8IJ.js";import{C as h,S as y}from"./chunks/index.DVsCdBIq.js";const V=`<template>
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

</style>`,P=`<template>
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
`,S=`<template>
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
`,w=`<template>
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
`,I=`<template>
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
`,M=`<template>
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
`,Z=JSON.parse('{"title":"ExForm 表单","description":"","frontmatter":{},"headers":[],"relativePath":"component/form/index.md","filePath":"component/form/index.md"}'),W={name:"component/form/index.md"},j=A({...W,setup(_){const C=g();o(async()=>{C.value=(await p(async()=>{const{default:s}=await import("./chunks/fieldDemo.pYGaYuvT.js").then(e=>e.Q);return{default:s}},__vite__mapDeps([0,1,2]))).default});const b=g();o(async()=>{b.value=(await p(async()=>{const{default:s}=await import("./chunks/dynDataDemo.RFm2FahW.js");return{default:s}},__vite__mapDeps([3,1,2]))).default});const f=g();o(async()=>{f.value=(await p(async()=>{const{default:s}=await import("./chunks/dynShowDemo.D74DkBjy.js");return{default:s}},__vite__mapDeps([4,1,2]))).default});const x=g();o(async()=>{x.value=(await p(async()=>{const{default:s}=await import("./chunks/dynDisabledDemo.DnglVAfY.js");return{default:s}},__vite__mapDeps([5,1,2]))).default});const v=g();o(async()=>{v.value=(await p(async()=>{const{default:s}=await import("./chunks/registerDemo.dthzJ60D.js");return{default:s}},__vite__mapDeps([6,1,2]))).default});const a=N(!0),k=g();return o(async()=>{k.value=(await p(async()=>{const{default:s}=await import("./chunks/baseDemo.hDEFUPyX.js");return{default:s}},__vite__mapDeps([7,1,2]))).default}),(s,e)=>{const d=E("ClientOnly");return B(),D("div",null,[e[6]||(e[6]=F("",4)),u(t(l(h),null,null,512),[[c,a.value]]),t(d,null,{default:i(()=>[t(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:l(M)},m({_:2},[k.value?{name:"vue",fn:i(()=>[t(l(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=n("h2",{id:"useform注册方式用法",tabindex:"-1"},[r("useForm注册方式用法 "),n("a",{class:"header-anchor",href:"#useform注册方式用法","aria-label":'Permalink to "useForm注册方式用法"'},"​")],-1)),e[8]||(e[8]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[r("对于复杂的场景，可以配合 "),n("code",null,"useForm"),r(" 来使用，代码更加简介")])],-1)),u(t(l(h),null,null,512),[[c,a.value]]),t(d,null,{default:i(()=>[t(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:l(I)},m({_:2},[v.value?{name:"vue",fn:i(()=>[t(l(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=n("h2",{id:"表单项动态禁用",tabindex:"-1"},[r("表单项动态禁用 "),n("a",{class:"header-anchor",href:"#表单项动态禁用","aria-label":'Permalink to "表单项动态禁用"'},"​")],-1)),u(t(l(h),null,null,512),[[c,a.value]]),t(d,null,{default:i(()=>[t(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:l(w)},m({_:2},[x.value?{name:"vue",fn:i(()=>[t(l(x))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=n("h2",{id:"表单项动态显隐",tabindex:"-1"},[r("表单项动态显隐 "),n("a",{class:"header-anchor",href:"#表单项动态显隐","aria-label":'Permalink to "表单项动态显隐"'},"​")],-1)),e[11]||(e[11]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"与表单项动态禁用API类似")],-1)),u(t(l(h),null,null,512),[[c,a.value]]),t(d,null,{default:i(()=>[t(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:l(S)},m({_:2},[f.value?{name:"vue",fn:i(()=>[t(l(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[12]||(e[12]=n("h2",{id:"数据联动",tabindex:"-1"},[r("数据联动 "),n("a",{class:"header-anchor",href:"#数据联动","aria-label":'Permalink to "数据联动"'},"​")],-1)),e[13]||(e[13]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("ol",null,[n("li",null,[r("可使用"),n("code",null,"updateSchema"),r("动态设置表单项数据源")]),n("li",null,"可根据表单组件绑定api用法用法，动态设置API参数实现过滤")])],-1)),u(t(l(h),null,null,512),[[c,a.value]]),t(d,null,{default:i(()=>[t(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[4]||(e[4]=()=>{a.value=!1}),vueCode:l(P)},m({_:2},[b.value?{name:"vue",fn:i(()=>[t(l(b))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[14]||(e[14]=n("h2",{id:"标单项单独使用",tabindex:"-1"},[r("标单项单独使用 "),n("a",{class:"header-anchor",href:"#标单项单独使用","aria-label":'Permalink to "标单项单独使用"'},"​")],-1)),u(t(l(h),null,null,512),[[c,a.value]]),t(d,null,{default:i(()=>[t(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"github-light",darkTheme:"github-dark",stackblitz:"%7B%22show%22%3Atrue%2C%22templates%22%3A%5B%7B%22scope%22%3A%22global%22%2C%22files%22%3A%7B%22src%2Fmain.ts%22%3A%22%5Cnimport%20%7B%20createApp%20%7D%20from%20%5C%22vue%5C%22%3B%5Cnimport%20'element-plus%2Fdist%2Findex.css'%3B%5Cnimport%20'element-plus%2Ftheme-chalk%2Fdark%2Fcss-vars.css'%3B%5Cnimport%20'element-plus-extension%2Fdist%2Ftheme-chalk%2Findex.css'%3B%5Cnimport%20Demo%20from%20%5C%22.%2FDemo.vue%5C%22%3B%5Cnconst%20app%20%3D%20createApp(Demo)%3B%5Cnapp.mount(%5C%22%23app%5C%22)%3B%5Cn%22%2C%22package.json%22%3A%22%7B%5Cn%20%20%5C%22version%5C%22%3A%20%5C%220.0.0%5C%22%2C%5Cn%20%20%5C%22private%5C%22%3A%20true%2C%5Cn%20%20%5C%22scripts%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22dev%5C%22%3A%20%5C%22vite%5C%22%2C%5Cn%20%20%20%20%5C%22build%5C%22%3A%20%5C%22vite%20build%5C%22%2C%5Cn%20%20%20%20%5C%22serve%5C%22%3A%20%5C%22vite%20preview%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22dependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22element-plus-extension%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%2C%5Cn%20%20%5C%22devDependencies%5C%22%3A%20%7B%5Cn%20%20%20%20%5C%22vite%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22typescript%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue%5C%22%3A%20%5C%22latest%5C%22%2C%5Cn%20%20%20%20%5C%22%40vitejs%2Fplugin-vue-jsx%5C%22%3A%20%5C%22latest%5C%22%5Cn%20%20%7D%5Cn%7D%22%7D%7D%5D%7D",codesandbox:"%7B%22show%22%3Afalse%7D",playground:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",htmlPlayground:"",vuePlayground:"",reactPlayground:"",visible:!0,onMount:e[5]||(e[5]=()=>{a.value=!1}),vueCode:l(V)},m({_:2},[C.value?{name:"vue",fn:i(()=>[t(l(C))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[15]||(e[15]=F("",19))])}}});export{Z as __pageData,j as default};
