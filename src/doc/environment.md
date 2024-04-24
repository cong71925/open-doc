---
# 这是文章的标题
title: 前端环境配置
order: 1
# 设置写作时间
date: 2024-04-16
# 一个页面可以有多个分类
category:
  - 开发文档
# 一个页面可以有多个标签
---

工欲善其事，必先利其器。

## Node环境安装
安装Node.js时建议使用版本管理器，因为版本变更速度非常快。 你可能需要根据所使用的不同项目的需要在多个 Node.js 版本之间进行切换。 Node 版本管理器（通常称为 nvm）是安装多个版本的 Node.js 的最常见方法，但仅适用于 Mac/Linux，在 Windows 上不受支持。 相反，我们建议安装 nvm-windows，然后使用它来安装 Node.js 和 Node Package Manager (npm)。
> [!warning]
> 当前jeecg项目推荐使用的前端node版本为v14，推荐使用v14.21.3

1. 请遵循 windows-nvm 存储库上的安装说明。 建议使用安装程序，但如果对需求有更深入的了解，可能需要考虑手动安装。 安装程序将指向[最新版本发布页面](https://github.com/coreybutler/nvm-windows/releases)。
2. 下载最新版本的 nvm-setup.zip 文件。
3. 下载完成后，打开 zip 文件，然后打开 nvm-setup.exe 文件。
4. Setup-NVM-for-Windows 安装向导将引导你完成安装步骤，包括选择将在其中安装 nvm-windows 和 Node.js 的目录。
5. 安装完成后。 打开 PowerShell（建议使用提升的管理员权限打开），尝试使用 windows-nvm 来列出当前安装的 Node 版本（此时应为无）：
```bash
nvm ls
```
6. 安装 Node.js 的当前版本（推荐v14.21.3版本）：
```bash
nvm install "14.21.3"
```
7. 列出安装的 Node 版本：
```bash
nvm bash
```
现在应会看到刚安装的版本。

8. 在安装所需的 Node.js 版本后，通过输入 ```nvm use <version>```（请将 ```<version>``` 替换为版本号，即 ```nvm use 14.21.3```）来选择要使用的版本：
```bash
nvm use "14.21.3"
```

9. 验证哪个 npm 版本安装了： 
```bash
npm --version
```
此版本号将自动更改为与当前版本的 Node.js 关联的 npm 版本。

## NPM换源
1. 查看当前NPM源
```bash
npm config get registry
```

2. 更换为国内源
::: code-tabs
@tab 阿里源
```bash
npm config set registry https://registry.npmmirror.com
```
@tab 腾讯源
```bash
npm config set registry http://mirrors.cloud.tencent.com/npm/
```
:::

3. 再次查看当前NPM源
```bash
npm config get registry
```
若输出为上一步设置的源的话，则设置成功

## (可选)安装YARN包管理器
1. 安装
```bash
npm install -g yarn
```

2. 换源
::: code-tabs
@tab 阿里源
```bash
yarn config set registry https://registry.npmmirror.com
```
@tab 腾讯源
```bash
yarn config set registry http://mirrors.cloud.tencent.com/npm/
```
:::

## (可选)安装PNPM包管理器
1. 安装
```bash
npm install -g pnpm
```

2. 换源
::: code-tabs
@tab 阿里源
```bash
pnpm config set registry https://registry.npmmirror.com
```
@tab 腾讯源
```bash
pnpm config set registry http://mirrors.cloud.tencent.com/npm/
```
:::

## (不推荐)安装CNPM包管理器
> [!caution]
> 使用cnpm安装依赖时，既不生成lock文件，也不会根据lock文件安装依赖，只遵循```package.json```安装依赖。
> 在多人共同协作维护的项目中，lock文件是必不可少的，是为了确保不同开发者安装的包及其依赖保持一致，同时也是降低不同版本 npm 包给项目稳定性带来的影响。尤其是一些不遵循语义化版本控制的第三方 npm 包，就很容易被坑到。故在大部分情况下，都不建议使用cnpm，可使用换源的npm或yarn或pnpm代替。

1. 安装
```bash
npm install -g cnpm
```
cnpm默认使用国内阿里源，一般情况下没有换源的必要。