---
# 这是文章的标题
title: 文件预览
order: 3
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## openFilePreview()
打开一个文件预览弹窗
- 类型
    ```ts
    function openFilePreview(src: string): { instance: VNode, close: () => void }
    ```
- 详细信息

    第一个参数要预览的文件地址，仅支持绝对地址。

    返回值是一个对象，里面有这些属性：

    - `instance`：文件预览弹窗的实例对象。
    - `close`：文件预览弹窗关闭方法。

- 示例

    打开文件预览弹窗：
    ```ts
    import { openFilePreview } from '@/utils/filePreview'
    openFilePreview('https://baidu.com/demo.jpg')
    ```

    打开文件预览弹窗后定时关闭：
    ```ts
    import { openFilePreview } from '@/utils/filePreview'
    const { close } = openFilePreview('https://baidu.com/demo.jpg')
    /** 2s后关闭弹窗 */
    setTimeout(() => {
        close()
    }, 2000)
    ```