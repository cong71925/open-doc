---
# 这是文章的标题
title: 配置地图
order: 4
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

地图相关的配置文件目录在```/src/map```下。

## 配置Mars3D
Mars3D的配置在```/src/map/config.ts```中定义:

详细配置项说明请见[Mars3D官网文档](http://mars3d.cn/doc.html#start/configJson)。
```js
const config = {
  map3d: {
    scene: {
      center: {
        y: 23.125377,
        x: 113.956408,
        z: 5890,
        heading: 360,
        pitch: -48.8,
        roll: 360
      },
      scene3DOnly: false,
      shadows: false,
      removeDblClick: true,
      sceneMode: 2,
      showSun: false,
      showMoon: false,
      showSkyBox: true,
      showSkyAtmosphere: true,
      fog: true,
      fxaa: true,
      requestRenderMode: false,
      cameraController: {
        zoomFactor: 3.0,
        minimumZoomDistance: 1,
        maximumZoomDistance: 50000000,
        enableRotate: true,
        enableTranslate: true,
        enableTilt: true,
        enableZoom: true,
        enableCollisionDetection: true,
        minimumCollisionTerrainHeight: 15000
      }
    },
    control: {
      homeButton: true,
      baseLayerPicker: false,
      sceneModePicker: true,
      vrButton: false,
      fullscreenButton: true,
      navigationHelpButton: true,
      animation: false,
      timeline: false,
      infoBox: false,
      geocoder: false,
      selectionIndicator: false,
      showRenderLoopErrors: true,
      contextmenu: {
        hasDefault: true
      },
      mouseDownView: true,
      zoom: {
        insertIndex: 1
      },
      compass: {
        bottom: "toolbar",
        left: "5px"
      },
      distanceLegend: {
        left: "100px",
        bottom: "2px"
      },
      locationBar: {
        crs: "CGCS2000_GK_Zone_3",
        crsDecimal: 0,
        template: "<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>海拔：{alt}米</div> <div>方向：{heading}度</div> <div>视高：{cameraHeight}米</div>"
      }
    },
    terrain: {
      url: "//data.mars3d.cn/terrain",
      show: true,
      clip: true
    },
    basemaps: basemaps,
    layers: layers
  }
}
```
## 配置底图

底图相关的配置文件目录在```/src/map/basemaps```下。

该目录下的所有```.ts```文件都会在```/src/map/config.ts```中通过```import.meta.glob```加载，并合并成一个数组传递到Mars3D的配置文件中。

在此处每个```.ts```文件都应对应一张底图，并通过```export default```导出:
```js
export default {
  pid: 10,
  id: 104,
  name: "全国影像注记",
  type: "tdt",
  layer: "img_z",
  show: true,
  zIndex: 2001,
  config: true,
  isBasemap: true
}
```
由于使用```import.meta.glob```获取的底图是无序的，故在加载前需要对底图进行重新排序，因此所有basemaps都需要设置zIndex设置正确的底图顺序。

## 配置图层

图层相关的配置文件目录在```/src/map/layers```下。

该目录下的所有```.ts```文件都会在```/src/map/config.ts```中通过```import.meta.glob```加载，并合并成一个数组传递到Mars3D的配置文件中。

在此处每个```.ts```文件都应对应一个图层，并通过```export default```导出:
```js
import imageSrc from '@/assets/marker/camera.png'
const ARCGIS_202_URL = import.meta.env.VITE_ARCGIS_202_URL
export default {
  pid: 2024,
  id: 'VR',
  type: "arcgis_wfs",
  name: "普通视频",
  url: `${ARCGIS_202_URL}/services/XM_LWJCZHZL/LW_aispjk/FeatureServer/0`,
  where: " 1=1 ",
  show: false,
  symbol: {
    styleOptions: {
      image: imageSrc,
      scale: 1,
      scaleByDistance: true,
      scaleByDistance_far: 20000,
      scaleByDistance_farValue: 0.5,
      scaleByDistance_near: 1000,
      scaleByDistance_nearValue: 1,
      label: {
        field: "NAME",
        font_size: 15,
        color: "#ffffff",
        border: true,
        border_color: "#000000",
        pixelOffset: [
          1,
          1
        ],
        distanceDisplayCondition: true,
        distanceDisplayCondition_far: 3000,
        distanceDisplayCondition_near: 0
      }
    }
  },
  popup: ""
}
```
由于使用```import.meta.glob```获取的图层是无序的，故在加载前需要对图层进行重新排序，因此所有basemaps都需要设置zIndex设置正确的图层顺序。

因为使用了ts文件来编写和描述图层文件，不同于使用```config.json```文件，你甚至可以在此处编写业务代码:
```ts
import dayjs from 'dayjs'
import { graphic } from 'mars3d'
import { GraphicMssAttr } from '@/types/graphicMss'
import { openPopup } from '@/utils/popup'
import LwMss from '@/popup/lwMss/index.vue'
import type { VNode } from 'vue'

const markers = Object.fromEntries(Object.entries(import.meta.glob('@/assets/marker/**', { import: 'default', eager: true })).map(([key, value]) => [key.replace(new RegExp('^/src/assets/marker/'), ''), value]))

const ARCGIS_202_URL = import.meta.env.VITE_ARCGIS_202_URL

let popopInstance: VNode = null
let popopClose: () => void = null

export default {
  pid: 2026,
  id: "WgmssPdMSS",
  type: "arcgis_wfs",
  name: "码上说",
  url: `${ARCGIS_202_URL}/services/XM_LWJCZHZL/MSS_LW/FeatureServer/0`,
  show: true,
  where: `CREATE_TIME > TIMESTAMP '${dayjs(new Date().getTime() - 20 * 24 * 60 * 60 * 1000).format('YYYY-MM-DD')} 00:00:00' and CREATE_TIME < TIMESTAMP '${dayjs().format('YYYY-MM-DD')} 23:59:59'`,
  symbol: {
    styleOptions: {
      image: markers['qr-code.png'],
      scale: 0.2,
      scaleByDistance: true,
      scaleByDistance_far: 20000,
      scaleByDistance_farValue: 0.5,
      scaleByDistance_near: 1000,
      scaleByDistance_nearValue: 1
    }
  },
  /** 绑定点击事件 */
  popup: (payload: unknown) => {
    if (typeof payload !== 'object') {
      return
    }
    if (!('graphic' in payload)) {
      return
    }
    if (!(payload.graphic instanceof graphic.BillboardPrimitive)) {
      return
    }

    if (popopInstance) {
      popopClose?.()
      popopInstance = null
      popopClose = null
    }

    const attr = payload.graphic.attr as GraphicMssAttr
    /** 在屏幕中心打开弹窗 */
    const { instance, close } = openPopup({
      component: LwMss,
      title: '详情',
      width: '40vw',
      props: { payload: attr },
      onClose: () => {
        popopInstance = null
        popopClose = null
      }
    })
    popopInstance = instance
    popopClose = close
  }
}
```