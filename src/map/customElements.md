---
# 这是文章的标题
title: 自定义元素
order: 7
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

[Web Components](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components) 是一组 web 原生 API 的统称，允许开发者创建可复用的自定义元素 (custom elements)。

自定义元素一般用于地图中图层或点位的popup绑定html，Mars3D的可以跟随点位移动的popup仅支持html模板字符串或dom节点，无法接收Vue组件，此时就可以先将Vue组件先编译成自定义元素，然后再模板html字符串中使用。

在```/src/customElements```中定义的组件，会由Vue编译成可以在当前项目任意地方中使用的自定义元素，并注册到全局。

使用时要加上```ce-```作为前缀。

## 创建自定义元素

1. 在```/src/customElements```下新建对应的文件夹，此次示例中新建的popup名称为demo-element。文件夹名即为自定义元素名。
> [!warning] 
> 自定义元素组件命名应用全小写，且单词之间使用```-```分割。如此处的```demo-element```。

```
└─src
    └─customElements    - 自定义元素组件(custom elements)
       └─demo-element
```
2. 在新建的自定义元素名文件夹中新建入口vue文件。
> [!warning] 
> 应使用```index.vue```作为入口文件名。

```
└─src
    └─customElements           
       └─demo-element
            └─index.vue - 新建的入口文件
```

3. 在入口文件编写业务代码。

## 使用自定义元素

在图层中绑定可以跟随点位移动的popup：

```ts
import { Cesium, graphic } from 'mars3d'
export default {
  pid: 2027,
  id: "WgxcPdLW",
  type: "arcgis_wfs",
  name: "注点",
  url: `/services/XM_LWJCZHZL/WGXC_LW/FeatureServer/0`,
  show: true,
  popup: (payload: unknown) => {
    if (typeof payload !== 'object') {
      return
    }
    if (!('graphic' in payload)) {
      return
    }
    if (!(payload.graphic instanceof graphic.BillboardPrimitive)) {
      return
    }
    /** 自定义元素的attribute仅支持string，boolean 或 number，对象类型的数据要传递到内层的props前需要先将对象转换搓string */
    const payloadStr = JSON.stringify(payload.graphic.attr)
    /** 使用自定义元素，使用时要加上 ce- 作为前缀 */
    return `<ce-demo-element payload='${payloadStr}'></ce-demo-element>`
  },
  popupOptions: {
    offsetY: -50,
    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM
  }
}
```

在自定义元素内的props接收数据：```/src/customElements/demo-element/index.vue```
```vue
<template>
  <div class="demo-element">
    {{ payload }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ payload: string }>()

try {
  /** 接收并解析传递过来的json字符串 */
  const payload = ref(JSON.parse(props.payload))
  console.log(payload)
} catch (error) {
  console.error(error)
}

</script>
<style lang="css" scoped></style>
```
