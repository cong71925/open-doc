---
# 这是文章的标题
title: 弹窗
order: 6
# 设置写作时间
date: 2024-10-24
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## openPopup()
打开一个弹窗
- 类型
    ```ts
    function openPopup(options: Options): { instance: VNode, close: () => void }
    ```
- 详细信息

    第一个参数是一个对象，支持以下这些选项：

    - `component`：传入的Vue组件。
    - `props`：传入的Vue组件要使用的props。
    - `title`：弹窗标题，支持字符串和Vue组件。
    - `width`：弹窗宽度。
    - `height`：弹窗高度。
    - `onClose`：弹窗关闭后的回调函数。

    返回值是一个对象，里面有这些属性：

    - `instance`：文件预览弹窗的实例对象。
    - `close`：文件预览弹窗关闭方法。

- 示例
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
        props: { label: 'label'  },
        /** 弹窗关闭后的回调函数 */
        onClose: () => {
            console.log('弹窗已关闭！')
        }
    })
    ```
