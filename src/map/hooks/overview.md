---
# 这是文章的标题
title: 概述
order: 1
# 设置写作时间
date: 2024-10-25
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---
## 组合式函数
详见[Vue 官方文档中的组合式函数章节](https://cn.vuejs.org/guide/reusability/composables.html)。

## 和 Mixin 的对比
以`BaseList`为例，`BaseList`实现的是Jeecg中的mixin的`JeecgListMixin`，基本覆盖了表格操作的功能。

比起使用`mixin`写法，`hooks`写法的优点在于：

- 更好的类型支持。

- 按需引用。`mixin`的所有选项默认是在组件内全局引入的，要禁用某些属性和方法时只能对其进行重载；而使用`hooks`可以选择性的引入需要的属性和方法。

- 支持面向对象。如要实现一张新表单的hooks：
    ```ts
    import BaseListHook from '@/hooks/baseList'
    import { BaseListHookOptions, Record } from '@/hooks/baseList'
    /** 定义demo表的字段和类型 */
    export interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
        phone: string
        px: number
        rdAge: string
        rdTime: string
        rdnl: number
        remark: string
        sex: string
        sex_dictText: string
        sfzh: string
        sysOrgCode: string
        xl: string
        xl_dictText: string
        zzTime: string
    }
    /** 将类型作为泛型参数 */
    export type DemoRecord = Record<DemoItem>
    /** 定义DemoList继承自BaseList */
    export default class DemoList extends BaseListHook<DemoItem> {
        constructor(options?: BaseListHookOptions<DemoItem>) {
            /** 定义crud的接口地址 */
            const url = { list: 'zzgl/ztZzgl/list' }
            super({ url, ...options })
        }
    }
    /** 导出为useHooks风格函数 符合Vue官方规范 */
    export const useDemoList = (options?: BaseListHookOptions<DemoItem>) => new DemoList(options)
    ```
    在此处，`DemoList`继承自`baseList`，子类便可直接使用父类的属性与方法，实现了更好的复用性，并通过定义表的字段和字段类型，实现了完整的类型推导。

    在业务Vue文件中使用`DemoList`：
    ```vue
    <template>
        <a-table
            :dataSource="dataSource"
            :columns="columns"
            :pagination="pagination"
            @change="handlerTableChange"
            rowKey="id"
            :row-selection="{ selectedRowKeys, onChange: handlerSelectionChange }"
        >
        </a-table>
    </template>
    <script setup lang="ts">
    import { useDemoList } from '@/hooks/demoList'
    const { dataSource, pagination, handlerTableChange, columns, handlerSelectionChange, selectedRowKeys } = useDemoList()
    columns.value = [
        {
            title: 'id', dataIndex: 'id', sorter: true
        },
        {
            title: 'age', dataIndex: 'age', sorter: true
        }
    ]
    </script>
    ```
