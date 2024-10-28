---
# 这是文章的标题
title: 移动轨迹
order: 8
# 设置写作时间
date: 2024-10-24
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## MoveRoute
移动轨迹实体类。
- 类型
    ```ts
    new MoveRoute(map: mars3d.Map, cesium: typeof Cesium, points: [number, number][], color: string): MoveRoute
    ```

- 详细信息

    第一个参数为mars3d地图实例。

    第二个参数为Cesium实例。

    第三个参数为轨迹经过的点位。

    第四个参数为轨迹线的颜色，支持使用16进制颜色编码字符串。

- 示例
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    ```
## 实例方法

### drawStartPoint()
绘制起点图标。
- 类型
    ```ts
    function drawStartPoint(inputPoint?: [number, number], imgSrc?: string): void
    ```
- 详细信息

    第一个参数为起点的经纬度坐标，为空时默认使用实例化时传入的坐标点数组的第一个作为起点坐标。

    第二个参数为图标使用的图片路径，为空时默认使用`/src/assets/marker/move-route/start-point.png`。
- 示例
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawStartPoint()
    ```
### drawEndPoint()
绘制终点图标。
- 类型
    ```ts
    function drawEndPoint(inputPoint?: [number, number], imgSrc?: string): void
    ```
- 详细信息

    第一个参数为终点的经纬度坐标，为空时默认使用实例化时传入的坐标点数组的最后一个作为终点坐标。

    第二个参数为图标使用的图片路径，为空时默认使用`/src/assets/marker/move-route/end-point.png`。
- 示例
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawEndPoint()
    ```

### drawRoute()
绘制轨迹线。
- 类型
    ```ts
    function drawRoute(ms: number = 300): Promise<void>
    ```
- 详细信息

    第一个参数为绘制下一段轨迹线的延迟时长，单位为毫秒。默认为300毫秒。

- 示例
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawRoute()
    ```
    绘制包含起点、终点图标的轨迹线：
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawStartPoint()
    moveRoute.drawEndPoint()
    moveRoute.drawRoute()
    ```    
### pushPoint()
在轨迹线的末尾新增一段。若当前轨迹线包含终点图标时，会同时更新终点的坐标位置。
- 类型
    ```ts
    function pushPoint(point: [number, number]): void
    ```
- 详细信息

    第一个参数为新增的轨迹点坐标。

- 示例
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    /** 在绘制轨迹线结束后，在末尾新增一段 */
    moveRoute.drawRoute().then(() => {
        moveRoute.pushPoint([113.421, 52])
    })
    ```
    绘制包含起点、终点图标的轨迹线：
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawStartPoint()
    moveRoute.drawEndPoint()
    /** 在绘制轨迹线结束后，在末尾新增一段 */
    moveRoute.drawRoute().then(() => {
        moveRoute.pushPoint([113.421, 52])
    })
    ```    
### destroyStartPoint()
移除起点图标。
- 类型
    ```ts
    function destroyStartPoint(): void
    ```
- 示例
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawStartPoint()
    /** 绘制起点图标2秒后，移除起点图标 */
    setTimeout(() => {
        moveRoute.destroyStartPoint()
    }, 2000)
    ```
### destroyEndPoint()
移除终点图标。
- 类型
    ```ts
    function destroyEndPoint(): void
    ```
- 示例
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawEndPoint()
    /** 绘制终点图标2秒后，移除终点图标 */
    setTimeout(() => {
        moveRoute.destroyEndPoint()
    }, 2000)
    ```
### destroyRoute()
移除轨迹线。
- 类型
    ```ts
    function destroyRoute(): void
    ```
- 示例

    在绘制轨迹线结束后移除轨迹线：
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawRoute().then(() => {
        moveRoute.destroyRoute()
    })
    ```
    在绘制轨迹线的途中移除轨迹线：
    ```ts
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawRoute()
    setTimeout(() => {
        moveRoute.destroyRoute()
    })
    ```
### destroy()
销毁轨迹线实例。
- 类型
    ```ts
    function destroy(): void
    ```
- 示例
    ```ts
    import { onBeforeUnmount } from 'vue'
    import MoveRoute from '@/utils/moveRoute'
    import { useMap } from '@/utils/map'
    import { Cesium } from 'mars3d'
    const map = useMap()
    const points = [[112, 52], [113.521, 52], [113, 52]]
    const color = '#FFFFFF'
    const moveRoute = new MoveRoute(map, Cesium, points, color)
    moveRoute.drawStartPoint()
    moveRoute.drawEndPoint()
    moveRoute.drawRoute()
    /** 页面卸载前销毁轨迹线实例 */
    onBeforeUnmount(() => {
        moveRoute.destroy()
    })
    ```  
