---
# 这是文章的标题
title: 运行与打包
order: 3
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## 安装依赖

该项目需要Node版本>=20。建议使用nvm-windows来安装和切换Node环境和版本。

安装和使用Nvm可以可以前往[node环境安装章节](/doc/environment.html#node环境安装)查看。

建议使用pnpm包管理器安装依赖。

假如此前没有安装和配置过pnpm包管理器，可以前往[安装pnpm包管理器章节](/doc/environment.html#可选-安装pnpm包管理器)查看如何安装与配置。

在项目根目录下打开终端，使用pnpm安装项目依赖：
```bash
pnpm install
```

## 运行开发服务器

```bash
npm run dev
```

## 打包

### 使用tsc校验并打包
```bash
npm run build
```
### 跳过tsc校验直接打包
```bash
npm run build:nocheck
```

## 预览打包文件
```bash
npm run preview
```

