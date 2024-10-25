---
# 这是文章的标题
title: 环境变量
order: 2
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## ```.env```文件

Vite 使用 [dotenv](https://github.com/motdotla/dotenv) 从你的 [环境目录](https://vitejs.cn/vite3-cn/config/shared-options.html#envdir) 中的下列文件加载额外的环境变量：
```
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
.env.development    # 只在开发环境模式下加载
.env.production     # 只在生产环境模式下加载
```
> [!warning] 
> 一份用于指定模式的文件（例如 .env.production）会比通用形式的优先级更高（例如 .env）。
> 
>另外，Vite 执行时已经存在的环境变量有最高的优先级，不会被 .env 类文件覆盖。例如当运行 VITE_SOME_KEY=123 vite build 的时候。
>
>.env 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
加载的环境变量也会通过 ```import.meta.env``` 以字符串形式暴露给客户端源码。

为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这些环境变量：
```env
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```
只有 ```VITE_SOME_KEY``` 会被暴露为 ```import.meta.env.VITE_SOME_KEY``` 提供给客户端源码，而 ```DB_PASSWORD``` 则不会。
```js
console.log(import.meta.env.VITE_SOME_KEY) // 123
console.log(import.meta.env.DB_PASSWORD) // undefined
```
## 配置环境变量

### ```VITE_API_BASE_URL```
接口请求的根路径。

当使用```useAxios```发起的请求使用的url为相对路径时，使用此处配置的url作为根路径。

### ```VITE_NO_TOKEN_REDIRECT_URL```
无Token时跳转地址。

当使用```useAxios```时收到的响应的状态码为401时，页面要强制跳转的地址。

### ```VITE_FILE_PREVIEW_URL```
文件访问地址。

当文件上传到服务器时，返回的文件访问地址一般为相对路径。

使用此处配置的url作为文件访问的根路径。

### ```VITE_FILE_UPLOAD_URL```
文件上传的接口地址。

### ```VITE_FILE_PREVIEW_SERVICE_URL```
文件预览服务地址。

### ```VITE_WEB_SOCKET_URL```
websocket地址。

### ```VITE_ARCGIS_202_URL```
地图服务访问地址。