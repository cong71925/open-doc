---
# 这是文章的标题
title: 文档编辑
order: 2
# 设置写作时间
date: 2024-05-27
# 一个页面可以有多个分类
category:
---
本站的所有文档都是基于Markdown编写的。

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。

Markdown轻量，快速，语法简单，学习成本低，纯文本，易读易写，可以方便地纳入版本控制。诸多优点让它成为编写技术文档的不二之选。

## 基本语法
这些是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素。

更详细的用法参考[Markdown 基本语法](https://markdown.com.cn/basic-syntax/)。
| 元素 | Markdown 语法 | 
| ----------- | ----------- |
| 标题 | ```# H1``` <br> ```## H2``` <br> ```### H3``` |
| 粗体 | ```**bold text**``` |
| 斜体 | ```*italicized text*``` |
| 引用块 | ```> blockquote``` |
| 有序列表 | `1. First item`<br>`2. Second item`<br>`3. Third item` |
| 无序列表 | `- First item`<br>`- Second item`<br>`- Third item` |
| 代码 | ``` `code` ``` |
| 分割线 | ``` --- ``` |
| 链接 | ```[title](https://www.example.com)``` |
| 图片 | ``` ![alt text](image.jpg) ``` |

## 扩展语法
这些元素通过添加额外的功能扩展了基本语法。但是，并非所有 Markdown 应用程序都支持这些元素。

更详细的用法参考[Markdown 扩展语法](https://markdown.com.cn/extended-syntax/)。
| 元素 | Markdown 语法 | 
| ----------- | ----------- |
| 表格 | ```\| Syntax \| Description \|``` <br> ```\| ------ \| ------ \|``` <br> ```\| Header \| Title \|``` |
| 代码块 | `  ```{ label: 'first', value: 0 }```  ` |
| 脚注 | Here's a sentence with a footnote. `[^1]`<br>`[^1]`: This is the footnote. |
| 标题编号 | ```### My Great Heading {#custom-id}``` |
| 定义列表 | `term`<br>`: definition` |
| 删除线 | `~~The world is flat.~~` |
| 任务列表 | ``` - [x] Write the press release ```<br>``` - [ ] Update the website``` |

## VuePress 拓展语法
VuePress 自带的 GitHub 风格的表格，Emoji、TOC、代码行号、特定行高亮等都是开箱即用的。
详细语法详见 [VuePress内置 Markdown 拓展](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。

## vuepress-theme-hope 增强语法
除了 VuePress 本身新增了一些 Markdown 语法外，vuepress-theme-hope 通过 vuepress-plugin-md-enhance，在 Markdown 中启用了更多的语法与新功能。
详细语法详见 [Markdown 增强](https://theme-hope.vuejs.press/zh/guide/markdown/)。