---
# 这是文章的标题
title: 接口签名
order: 9
# 设置写作时间
date: 2024-10-24
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---
在某些版本的Jeecg中会对接口请求进行时间戳校验和签名校验。

使用`useAxios`获取的`axios`实例会自动在请求头上附上时间戳和签名信息。
## getDateTimeToString()
获取Jeecg接口请求中使用的时间戳。
- 类型
    ```ts
    function getDateTimeToString(): string
    ```
- 详细信息

    返回值是一个字符串，会按照年月日时分秒的顺序输出如`20241025095308170`的一个字符串。

- 示例
    ```ts
    import { getDateTimeToString } from '@/utils/sign'
    console.log(getDateTimeToString())
    // '20241025095308170'
    ```
    在`Axios`的请求拦截器中使用：
    ```ts
    import axios from 'axios'
    import { getDateTimeToString } from '@/utils/sign'
    axiosInstance = axios.create()
        axiosInstance.interceptors.request.use((config) => {
        config.headers['X-Timestamp'] = getDateTimeToString()
        return config
    })
    ```

## getSign()
获取Jeecg接口请求中使用的签名。
- 类型
    ```ts
    function getSign(url: string, params: unknown, data: unknown): string
    ```
- 详细信息

    第一个参数为接口请求的url。

    第二个参数为接口请求的params。

    第三个参数为接口请求的data，即在body传递的数据。

    返回值是一个字符串，会输出`params`和`data`混合和拼接`SECRET`后md5运算的结果。

- 示例
    ```ts
    import { getSign } from '@/utils/sign'
    console.log(getSign(null, { page: 1, pageNo: 10 }))
    // '9D679E1A2A84004538BC555957982E6D'
    ```
    在`Axios`的请求拦截器中使用：
    ```ts
    import axios from 'axios'
    import { getSign } from '@/utils/sign'
    axiosInstance = axios.create()
        axiosInstance.interceptors.request.use((config) => {
        config.headers['X-Sign'] = getSign(config.url, config.params, config.data)
        return config
    })
    ```