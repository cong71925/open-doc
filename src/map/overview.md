---
# 这是文章的标题
title: 概述
order: 1
# 设置写作时间
date: 2024-10-22
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---
## 目录结构

```
├─public
└─src
    ├─assets            - 静态资源文件
    │  └─marker             - 图层点位图片
    │      ├─inspection
    │      └─move-route
    ├─components        - 通用组件
    │  ├─common             - 公共组件
    │  └─mars-work          - 地图组件
    ├─customElements    - 自定义元素组件(custom elements)
    │  └─wgxc
    ├─hooks             - Vue3 hooks文件
    ├─map               - 地图配置
    │  ├─basemaps           - 底图配置文件
    │  └─layers             - 图层配置文件
    ├─popup             - 弹窗组件
    │  ├─lwMss
    │  │  └─components
    │  └─lwWgxc
    ├─store             - 全局仓库
    ├─types             - 全局TypeScript类型文件
    ├─utils             - 工具类
    └─widgets           - Widget组件
        └─toolbtn-zoom
```
## 支持TypeScript的IDE
建议使用 [Visual Studio Code](https://code.visualstudio.com/) (VS Code)，因为它对 TypeScript 有着很好的内置支持。通过搭配[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 可以提供对 Vue 单文件组件中的 TypeScript 支持，还伴随着一些其他非常棒的特性。

[WebStorm](https://www.jetbrains.com/webstorm/) 对 TypeScript 和 Vue 也都提供了开箱即用的支持。其他的 JetBrains IDE 也同样可以通过一个[免费插件](https://plugins.jetbrains.com/plugin/9442-vue-js)支持。从 2023.2 版开始，WebStorm 和 Vue 插件内置了对 Vue 语言服务器的支持。你可以在设置 > 语言和框架 > TypeScript > Vue 下将 Vue 服务设置为在所有 TypeScript 版本上使用 Volar 集成。默认情况下，Volar 将用于 TypeScript 5.0 及更高版本。

详情请见[Vue官方文档](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)说明。