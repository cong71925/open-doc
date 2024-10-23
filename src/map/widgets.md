---
# 这是文章的标题
title: Widgets
order: 5
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

widgets可以理解为独立的业务组件，继承于原生JS技术栈的思想和概念。

在当前Vue3版本中实现原理与使用方法并不相同。

widgets一般放在```/src/widgets```下。
## 编写Widgets

1. 在```/src/widgets```下新建对应的文件夹，此次示例中新建的widget名称为demo。
```
└─src
    └─widgets           
        └─demo          - 新建的Widget组件
```
2. 在新建的widget文件中新建入口vue文件。
```
└─src
    └─widgets           
        └─demo          
            └─index.vue - 新建的入口文件
```
3. 在入口文件编写业务代码。
## 配置Widgets

编写好的Widgets，还需要导入与正确配置，才能正常使用。

Widgets通过pinia仓库全局统一管理，在```/src/store/widgets.ts```文件中配置。

以上一个章节新建的demo widget为例，在widgets.ts中导入和配置:

```ts
import { defineStore } from 'pinia'
import { defineAsyncComponent, markRaw, Component } from 'vue'

export interface Widget {
  id: string
  component: Component
  name?: string
  visible: boolean
  group?: string
  payload?: any
}

export interface WidgetsStoreState {
  widgets: Widget[]
}

const widgetsStore = defineStore('widgets', {
  state: (): WidgetsStoreState => ({
    widgets: [
      {
        id: 'demo',
        /** 传入的widget的vue入口文件 */
        component: markRaw(defineAsyncComponent(() => import('@/widgets/demo/index.vue'))),
        name: '测试widget',
        /** 初始是否可见 */
        visible: true,
        /** 隶属于的group */
        group: 'base',
        /** 传入vue入口文件的props的初始数据 */
        payload: {}
      }
    ]
  })
})

export default widgetsStore

```

## 激活widgets

```ts
import useWidgets from '@/store/widgets'
const store = useWidgets()
/** 激活widgets */
store.activeWidgets('demo')
/** 
 * 激活widgets同时关闭同一个group内的所有widgets
 * 使用该api时相当于group内的widgets是互斥的，只会有一个widget处于激活状态
 */
store.activeWidgetsInGrouop('demo')
/** 激活widgets同时传递数据 */
store.activeWidgets('demo', { title: '标题' })
```

## 关闭widgets

```ts
import useWidgets from '@/store/widgets'
const store = useWidgets()
store.disableWidgets('demo')
```

## 往widgets内传递数据
```ts
import useWidgets from '@/store/widgets'
const store = useWidgets()
store.updateWidgets('demo', { title: '标题' })
```
