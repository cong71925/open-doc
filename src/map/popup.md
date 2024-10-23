---
# 这是文章的标题
title: 弹窗
order: 6
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

此处一般定义的是图层或点位绑定点击事件时的弹窗组件，在widgets中弹窗也可以在此处定义。

一般放在```/src/popup```下。
## 编写popup

1. 在```/src/popup```下新建对应的文件夹，此次示例中新建的popup名称为demo。
```
└─src
    └─popup           
        └─demo          - 新建的Widget组件
```
2. 在新建的popup文件中新建入口vue文件。
```
└─src
    └─popup           
        └─demo          
            └─index.vue - 新建的入口文件
```
3. 在入口文件编写业务代码。

## 使用popup

在任何地方使用：
```ts
import { openPopup } from '@/utils/popup'
import demoPopup from '@/popup/demo/index.vue'

openPopup({
  /** 弹窗内的组件 */
  component: demoPopup,
  /** 弹窗的标题 */
  title: 'demo标题',
  /** 弹窗的宽度 */
  width: '40vw',
  /** 传递进组件的props的数据 */
  props: { label: 'label'  }
})
```
在图层中使用：
```ts
import { graphic } from 'mars3d'
import { GraphicMssAttr } from '@/types/graphicMss'
import { openPopup } from '@/utils/popup'
import demoPopup from '@/popup/demo/index.vue'
import type { VNode } from 'vue'

export default {
  pid: 1,
  id: "WgmssPdMSS",
  type: "arcgis_wfs",
  url: `/services/XM_LWJCZHZL/MSS_LW/FeatureServer/0`,
  show: true,
  /** 绑定点击事件 */
  popup: (payload: unknown) => {
    /** 类型收缩 */
    if (typeof payload !== 'object') {
      return
    }
    if (!('graphic' in payload)) {
      return
    }
    if (!(payload.graphic instanceof graphic.BillboardPrimitive)) {
      return
    }
    /** 类型断言 */
    const attr = payload.graphic.attr as GraphicMssAttr
    /** 打开弹窗 */
    openPopup({
      component: demoPopup,
      title: '详情',
      width: '40vw',
      props: { payload: attr }
    })
  }
}
```