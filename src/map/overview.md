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