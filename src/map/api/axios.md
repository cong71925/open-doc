---
# 这是文章的标题
title: axios
order: 1
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## useAxios()
返回一个经过配置的 axios 实例。
- 类型
    ```ts
    function useAxios(): Axios
    ```
- 示例
    ```ts
    import { useAxios } from '@/utils/axios'
    const axios = useAxios()
    /** axios选项 */
    axios({
    url: '/sys/sysRoleTree/queryUserTreeTagList',
    method: 'get',
    params: {
        code: 'mapSystem',
        type: '1'
        }
    }).then((res) => {

    }).catch((err) => {

    })
    ```
- 参考[Axios请求配置](https://www.axios-http.cn/docs/req_config)。

## initAxios()
初始化 axios 实例。
- 类型
    ```ts
    function initAxios(): void
    ```
- 示例
    ```ts
    import { initAxios } from '@/utils/axios'
    initAxios()
    ```

