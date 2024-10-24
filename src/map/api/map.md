---
# 这是文章的标题
title: 地图
order: 7
# 设置写作时间
date: 2024-10-24
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## initializeMap()
初始化地图。
- 类型
    ```ts
    function initializeMap(id: string, option: any): void
    ```

## onMapLoad()
地图构造完成后的生命周期函数。

- 类型
    ```ts
    function onMapLoad(event: (map: mars3d.Map) => void): void
    ```
- 示例
    ```ts
    import { onMapLoad } from '@/utils/map'
    onMapLoad((map) => {
        const layers = map.getLayers()
    })
    ```

## useMap()
获取地图实例。

- 类型
    ```ts
    function useMap(): mars3d.Map
    ```
- 示例
    ```ts
    import { useMap } from '@/utils/map'
    const map = useMap()
    const layers = map.getLayers()
    ```

## destroyMap()
销毁地图。
- 类型
    ```ts
    function destroyMap(): void
    ```
- 示例
    ```ts
    import { destroyMap } from '@/utils/map'
    destroyMap()
    ```