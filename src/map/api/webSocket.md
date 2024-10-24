---
# 这是文章的标题
title: WebSocket
order: 4
# 设置写作时间
date: 2024-10-24
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## initWebSocket()
初始化 WebSocket
- 类型
    ```ts
    function initWebSocket(): void
    ```

## destroyWebSocket()
关闭 WebSocket
- 类型
    ```ts
    function destroyWebSocket(): void
    ```

## isWebSocketOpen()
判断WebSocket是否处于可发送数据的状态
- 类型
    ```ts
    function isWebSocketOpen(): boolean
    ```

## sendMsg()
使用WebSocket发送数据
- 类型
    ```ts
    function sendMsg(payload: any): void
    ```
- 详细信息

    第一个参数为要发送的数据，支持`string`、`number`、`boolean`、`object`、`array`、`function`数据类型。

    - 传入的数据为`string`、`number`、`boolean`时会强制类型转换为`string`发送。

    - 传入的数据为`object`、`array`时会调用`JSON.stringify`将其转换为json字符串后再发送。

    - 传入的数据为`function`时会将函数的返回值发送。不支持Promise方法。

- 示例
    ```ts
    import { sendMsg } from '@/utils/webSocket'
    /** 发送字符串 */
    sendMsg('测试数据')
    const payload = {
        title: '测试标题',
        data: [
            1,
            2,
            3
        ]
    }
    /** 发送object */
    sendMsg(payload)
    ```
## addListener()
注册WebSocket监听器，当WebSocket接收到消息时触发传入的回调函数。
- 类型
    ```ts
    function addListener(cmd: string, listener: (arg0: unknown) => void): void
    ```

- 详细信息

    第一个参数为要监听的cmd，若WebSocket返回的数据中不包含cmd的情况下不会触发回调函数（如心跳包响应）。

    第一个参数为监听回调函数，回调函数的参数为WebSocket返回的数据
- 示例
    ```ts
    import { addListener } from '@/utils/webSocket'
    const listener = (data: any) => {
        console.log(data)
    }
    addListener('demo', listener)
    ```

## removeListener()
卸载WebSocket监听器，一般用于Vue组件销毁时使用，避免内存泄露。
- 类型
    ```ts
    function removeListener(cmd: string, listener: (arg0: unknown) => void): void
    ```

- 详细信息

    第一个参数为要卸载的监听的cmd。

    第一个参数为要卸载的监听回调函数。

- 示例
    ```ts
    import { onBeforeUnmount } from 'vue'
    import { addListener, removeListener } from '@/utils/webSocket'
    const listener = (data: any) => {
        console.log(data)
    }
    addListener('demo', listener)
    /** 当Vue组件销毁时，卸载监听器 */
    onBeforeUnmount(() => {
        removeListener('demo', listener)
    })
    ```

## sendHeartBeat()
发送心跳包。
- 类型
    ```ts
    function sendHeartBeat(): void
    ```

## sendHeartBeatInterval()
定时发送心跳包，同时会重置setInterval定时器。
- 类型
    ```ts
    function sendHeartBeatInterval(): void
    ```

## stopSendHeartBeatInterval()
关闭发送心跳包定时器。
- 类型
    ```ts
    function sendHeartBeatInterval(): void
    ```