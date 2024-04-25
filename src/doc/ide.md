---
# 这是文章的标题
title: 安装IDE
order: 2
# 设置写作时间
date: 2024-04-25
# 一个页面可以有多个分类
category:
  - 开发文档
# 一个页面可以有多个标签
---
> [!note]
> 在本文中，为了方便阅读，会将 Visual Studio Code 简称为 VS Code。

好马配好鞍。

其实严格来说，VS Code并不算是真正的IDE（集成开发环境），它只是一款代码编辑器。

## 安装 VS Code

1. 建议使用安装程序引导安装。 安装程序将指向[最新版本发布页面](https://code.visualstudio.com/)。
2. 下载最新版本的 64-bit Visual Studio Code for Windows Setup 文件。
3. 下载完成后，打开安装程序。
4. 安装程序将引导你完成安装步骤，包括选择将在其中安装VS Code的目录。

## 配置 VS Code

VS Code安装后默认使用的语言是英语，为了符合大多数国人习惯，建议将其配置为中文。

1. 打开[官方简体中文插件的地址](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)。
2. 在打开的页面上点击 Install 。
3. 此时应该会跳转到 VS Code 上，如果浏览器有拦截，请点击打开。
4. 在 VS Code 上弹出的页面点击 Install 。
5. 安装完成后，此时右下角应会弹出提示，点击提示信息上的 Restart Now ， VS Code 就会自动重启并将界面语言改为中文。

> [!warning]
> 若重启后界面未变为中文，请尝试以下步骤：

1. 按下“Ctrl+Shift+P”组合键以显示“命令面板”。
2. 输入“display”并选中“Configure Display Language”命令。
3. 选中简体中文。

## 安装 VS Code 插件 

VS Code 能成为如此流行的前端开发工具，其丰富的插件功不可没。

为了更好的开发 Vue 项目和 Uni-App 项目，建议安装 Vue - Official 插件。它能支持Vue2/3的语法高亮，代码格式化，Typescript类型检查。本文的安装插件也会以 Vue - Official 为例：

1. 按下“Ctrl+Shift+X”组合键以显示“扩展面板”。
2. 在搜索栏里输入 Vue - Official 。
3. 点击最接近的搜索结果，或者说搜索结果的最上面一个，在弹出的页面上点击 Install 。

您也可以按照上个章节安装简体中文插件的方式，来安装 [Vue - Official 插件](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

其他插件的安装方法也类似，在此不在赘叙。

## 安装 HBuilder X

HBuilder可以说是数一数二的难用，但是为了开发Uni-App，还是捏着鼻子装一下吧。

当然，HBuilder装来调试打包Uni-App就够了，真正开发还是建议用VS Code。

HBuilder X 是绿色免安装的，下载解压后即可使用。

1. 打开[最新版本发布地址](https://dcloud.io/hbuilderx.html)。
2. 下载最新版本的 Download for Windows 文件。
3. 下载完成后，打开 zip 文件，然后打开 nvm-setup.exe 文件。
4. 将下载的 zip 文件里的 HBuilderX 目录解压到要安装 HBuilder 的目录。
5. （可选）打开HBuilderX 目录，右键点击 HBuilderX.exe ，在发送到选项卡中点击桌面快捷方式。

