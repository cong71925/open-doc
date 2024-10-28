---
# 这是文章的标题
title: Dict
order: 3
# 设置写作时间
date: 2024-10-28
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---
## Dict
数据字典类。
- 类型
    ```ts
    new Dict(code: string, key: keyof DictItem = 'label', value: keyof DictItem = 'value'): Dict
    ```
- 详细信息

    第一个参数是数据字典的code值。

    第二个参数是数据字典的key值。

    第三个参数是数据字典的value值。
- 示例
    ```vue
    <template>
        <!-- 正向映射 '0'->'否' -->
        {{ dictMap.get('0') }}
        <!-- 反向映射 '否'->'0' -->
        {{ dictMapReverse.get('否') }}
    </template>
    <script setup lang="ts">
    import { useDict } from '@/hooks/dict'
    const { dict, dictMap, dictMapReverse } = useDict('djdtType')
    </script>
    ```

## 实例方法

### loadData()
从接口刷新字典值。
- 类型
    ```ts
    function loadData(): Promise<DictItem[]>
    ```

### onLoad()
字典值加载完成后的生命周期函数。
- 类型
    ```ts
    function onLoad(func: (dict: DictItem[]) => void): void
    ```

## 实例属性

### dict
字典值列表。
- 类型
    ```ts
    interface DictItem {
        label: string
        text: string
        title: string
        value: string
    }
    const dict: DictItem[]
    ```

### dictMap
字典值映射Map对象。
- 类型
    ```ts
    const dictMap: Map<string, string>
    ```

### dictMapReverse
字典值反向映射Map对象。
- 类型
    ```ts
    const dictMapReverse: Map<string, string>
    ```

### loading
是否正在从接口获取字典值。
- 类型
    ```ts
    const loading: boolean
    ```