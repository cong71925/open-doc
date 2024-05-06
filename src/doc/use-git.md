---
# 这是文章的标题
title: 使用Git工作流
order: 3
# 设置写作时间
date: 2024-04-24
# 一个页面可以有多个分类
category:
  - 开发文档
# 一个页面可以有多个标签
---

Git是目前世界上最常用的分布式版本控制系统。

版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本，采用版本控制系统是个明智的选择。 有了它你就可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。

Git虽然是分布式的，但是在多人协作时，常常还是需要一台远程主机充当“中心”的作用，用来同步每个人对代码的改动。这里我们使用的是Gitee来充当这个远程主机。

而Git的工作流，可以简单理解为这样：

```flow
st=>start: 开始
e=>end: 结束
pull=>operation: 拉取:>#从gitee中拉取仓库
change=>operation: 改动
add=>operation: 暂存:>#将改动移至暂存区
commit=>operation: 提交:>#代码提交
push=>operation: 推送:>#推送提交到远程仓库

st(right)->pull(right)->change(right)->add(right)->commit(right)->push(right)->e
```

## Git安装

1. 建议使用安装程序引导安装。 安装程序将指向[最新版本发布页面](https://git-scm.com/download/win)。
2. 下载最新版本的 64-bit Git for Windows Setup 文件。一般而言，现代计算机几乎都是64位系统，但倘若您真的有使用32位系统的需求，请下载 32-bit Git for Windows Setup 文件。
3. 下载完成后，打开安装程序。
4. Git for Windows Setup 安装向导将引导你完成安装步骤，包括选择将在其中安装Git的目录。
5. 安装完成后。 打开 PowerShell，尝试列出当前安装的 Git 版本：
```bash
git -v
```

## 从Gitee中拉取仓库

1. 从Gitee拉取仓库前，尤其是拉取私有仓库时，需要先配置用户信息：
```bash
git config --global user.name 'Gitee绑定的用户名' 
git config --global user.email 'Gitee绑定的邮箱'
```
2. 打开 PowerShell 拉取对应项目：
```bash
# 项目存放的位置
cd 'D://workspace/'
# 项目远程地址
git clone 'https://gitee.com/xxxx/xxxx.git'
```
此时命令行会出现如下账号密码验证步骤，安装提示输入密码验证即可。

## 从Gitee中拉取代码同步到本地

在提交您的第一份代码前，可能您的同事或者协作者曾经提交了一份代码到Gitee上，导致我们本地的Git仓库与远程仓库不一致。因此，在每次提交代码前，建议先拉取一次代码：
```bash
git pull
# 或者
git pull origin
```
假如您要将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。
```bash
git pull origin master:brantest
```
分支相关的后续会补充......

## 将改动移至暂存区
我们先来理解下 Git 工作区、暂存区和版本库概念：

- 工作区：就是你在电脑里能看到的目录。
- 暂存区：英文叫 stage 或 index。一般存放在 .git 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- 版本库：工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库。

在真正提交代码改动前，我们需要先将其移至暂存区。

- 添加指定文件到暂存区：
```bash
git add '文件1' '文件2'
```
或者，您改动了某个目录下的大量文件。
- 添加指定文件到暂存区：

```bash
git add '目录1' '目录2'
```
或者，您改动了非常大量的文件，想要一次性提交。
- 添加当前目录的所有文件到暂存区：
```bash
git add .
```
有时我们不止新增或修改文件，当我们删除了某些文件时，也需要把将这次删除放入暂存区。
- 删除工作区文件，并且将这次删除放入暂存区：
```bash
git rm '文件1' '文件2'
```

## 代码提交
- 提交暂存区：
```bash
git commit -m '提交信息'
```
一般而言，提交信息应该清晰明了，说明本次提交的目的。
- 提交暂存区的指定文件：
```bash
git commit '文件1' '文件2' -m '提交信息'
```
## 推送提交到远程仓库
```bash
git push 
```
至此，一个基本的Git的工作流就完成了，后续会补充例如暂存回退和分支相关的部分。

当然，如果您觉得使用Git命令过于复杂，也可以使用Git的的一些GUI工具来辅助您使用Git。

Vs code内置了一个Git的可视化插件，推荐。