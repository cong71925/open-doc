---
# 这是文章的标题
title: 文档提交
order: 1
# 设置写作时间
date: 2024-05-11
# 一个页面可以有多个分类
category:
---
本系列指南，简单来说就是编写文档的文档。

在撰写所有文档前，强烈建议先阅读完本系列教程。

## 文档分支介绍

本文档主要有三个分支，```main```，```dev```，```gh-pages```。
```git-graph
commit id: "初始化"
commit
branch dev
checkout dev
commit id: "改动1"
commit id: "改动2"
checkout main
merge dev
commit
branch gh-pages
checkout gh-pages
```

其中```main```分支和```gh-pages```分支是不建议直接改动的。因为所有提交到```main```分支的改动，都会触发Github Actions的自动构建，重新打包并部署本文档，从而影响线上文档。因此，要提交改动，请先在```dev```分支上进行改动，确认文档无误和项目运行正常后，再将```dev```分支合并到```main```分支上。

而```gh-pages```分支则是用于存放Github Actions自动构建部署的文件，并用于Github Pages生成静态页面。因此，任何对改分支的改动，都会直接影响到线上文档。不建议任何对此分支进行改动