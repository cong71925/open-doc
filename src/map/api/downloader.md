---
# 这是文章的标题
title: 文件下载
order: 2
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## useDownloader()
下载指定Url的文件。
- 类型
    ```ts
    function useDownloader(options: DownloaderOptions): Promise<void>
    ```
- 详细信息

    第一个参数是一个对象，支持以下这些选项：
    - ```url```：要下载的文件地址。支持绝对路径和相对路径，使用相对路径时会使用环境变量中的```VITE_FILE_PREVIEW_URL```作为基路径。
    - ```fileName```：文件下载后保存的文件名。
    - ```type```：文件下载的方法。可选值为`link`和`blob`。默认为`link`。`type`为`link`时，下载器会使用创建a标签并直接点击下载的方式下载文件；`type`为`blob`时，下载器先会使用axios用blob的方式将文件下载到内存，然后使用创建a标签并直接点击下载的方式下载文件。
    - 其余参数等同于Axios请求配置，参考[Axios请求配置](https://www.axios-http.cn/docs/req_config)。
- 示例

    使用a标签下载文件：
    ```ts
    import { useDownloader } from '@/utils/downloader'
    useDownloader({ url: 'img/20241023/demo.jpg', fileName: '12354.jpg' })
    ```
    使用Blob下载文件：
    ```ts
    import { useDownloader } from '@/utils/downloader'
    useDownloader({ url: 'img/20241023/demo.jpg', fileName: '12354.jpg', type: 'blob' })
    ```
    使用Blob下载文件，并使用post请求：
    ```ts
    import { useDownloader } from '@/utils/downloader'
    useDownloader({ 
        url: 'img/20241023/demo.jpg',
        fileName: '12354.jpg',
        type: 'blob',
        method: 'post',
        data: { label: 'label' }
    })
    ```

## useLinkDownloader
使用a标签下载指定Url的文件。
- 类型
    ```ts
    function useLinkDownloader(options: { url: string, fileName?: string }): void
    ```
- 详细信息

    第一个参数是一个对象，支持以下这些选项：
    - ```url```：要下载的文件地址。支持绝对路径和相对路径，使用相对路径时会使用环境变量中的```VITE_FILE_PREVIEW_URL```作为基路径。
    - ```fileName```：文件下载后保存的文件名。

- 示例
    ```ts
    import { useLinkDownloader } from '@/utils/downloader'
    useLinkDownloader({ url: 'img/20241023/demo.jpg', fileName: '12354.jpg' })
    ```

## useBlobDownloader()
使用Blob下载指定Url的文件。
- 类型
    ```ts
    function useBlobDownloader(options: DownloaderOptions): Promise<void>
    ```
- 详细信息

    第一个参数是一个对象，支持以下这些选项：
    - ```url```：要下载的文件地址。支持绝对路径和相对路径，使用相对路径时会使用环境变量中的```VITE_FILE_PREVIEW_URL```作为基路径。
    - ```fileName```：文件下载后保存的文件名。
    - 其余参数等同于Axios请求配置，参考[Axios请求配置](https://www.axios-http.cn/docs/req_config)。

- 示例
    ```ts
    import { useBlobDownloader } from '@/utils/downloader'
    useBlobDownloader({ url: 'img/20241023/demo.jpg', fileName: '12354.jpg' })
    ```