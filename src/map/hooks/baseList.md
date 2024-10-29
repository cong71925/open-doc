---
# 这是文章的标题
title: BaseList
order: 2
# 设置写作时间
date: 2024-10-25
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---
## BaseList
基本列表实体类。
- 类型
    ```ts
    new BaseList<T extends { [key: string]: any }>(options?: BaseListHookOptions<T>): BaseListHook<T>
    ```
- 详细信息

    第一个参数是一个对象，支持以下这些选项：
    - `url`：一个对象。定义了列表相关的请求接口地址。支持以下这些选项：
        - `list`：请求列表的接口地址。
        - `delete`：根据id删除列表的条目的接口地址。
        - `add`：新增列表的条目的接口地址。
        - `edit`：根据id编辑列表的条目的接口地址。
    - `pagination`：一个对象。分页器。支持以下这些选项：
        - `current`：数字类型。当前页数。默认为`1`。
        - `pageSize`：数字类型。每页的条目数。默认为`10`。
        - `total`：数字类型。列表的总条目数。默认为`0`。
        - `pageSizeOptions`：数组类型。分页器可选的每页条目数。默认为`['10', '20', '30']`
    - `queryParam`：一个对象。查询参数。
    - `isorter`：一个对象。列表排序规则。支持以下这些选项：
        - `column`：字符串。要排序的字段名。默认为`'createTime'`。
        - `order`：`'asc'`或`'desc'`。`'asc'`为升序，`'desc'`为降序。默认为`'desc'`。
    - `columns`：一个对象，类型继承自`ant-design-vue`的`TableProps['columns']`。
    - `disableAutoLoad`：布尔值。为`true`时会关闭自动重新刷新列表，需要自己在合适的时机调用`loadData()`方法。
- 示例

    直接使用：
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
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
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        },
        columns: [
            {
                title: 'id', dataIndex: 'id', sorter: true
            },
            {
                title: 'age', dataIndex: 'age', sorter: true
            }
        ]
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, pagination, handlerTableChange, columns, handlerSelectionChange, selectedRowKeys } = new BaseList<DemoItem>(options)
    </script>
    ```
    使用面向对象定义一个子类，再在业务中使用：
    - 定义一个子类`DemoList`继承自`BaseList`:
        ```ts
        import BaseListHook, { BaseListHookOptions, Record } from '@/hooks/baseList'
        /** 定义列表条目字段和类型 */
        export interface DemoItem {
            age: number
            birthday: string
            dzb: string
            mz: string
            name: string
        }
        /** 定义子类DemoList继承自BaseList */
        export default class DemoList extends BaseListHook<DemoItem> {
            constructor(options?: BaseListHookOptions<DemoItem>) {
                /** 重写默认值 */
                const url = { list: 'zzgl/ztZzgl/list' }
                super({ url, ...options })
            }
        }
        /** 导出useHooks风格方法 */
        export const useDemoList = (options?: BaseListHookOptions<DemoItem>) => new DemoList(options)
        ```
    - 在业务代码中使用：
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
        import DemoList from '@/hooks/demoList'
        const { dataSource, pagination, handlerTableChange, columns, handlerSelectionChange, selectedRowKeys } = new DemoList()
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
## 实例方法

### loadData()
请求列表接口。
- 类型
    ```ts
    function loadData(method: Method = 'GET'): Promise<Record<T>[]>
    ```
- 详细信息

    第一个参数是一个字符串，定义了接口请求时的http请求方法。默认为`get`。可以为`get`、`post`、`delete`、`head`、`options`、`put`、`patch`、`purge`、`link`、`unlink`。

    返回一个`Promise`，`resolve`时抛出一个数组，这个数组为此次请求的列表数据。
- 示例
    ```ts
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {  list: 'zzgl/ztZzgl/list'    },
        /** 禁用自动触发loadData */
        disableAutoLoad: true
    }
    /** 从实例中解构出loadData */
    const { loadData } = new BaseList<DemoItem>(options)
    /** 接口请求结束后打印列表数据 */
    loadData().then((dataSource) => {
        console.log(dataSource)
    })
    ```


### cancelLoadData()
取消列表请求。
- 类型
    ```ts
    function cancelLoadData(): void
    ```
- 示例
    ```ts
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {  list: 'zzgl/ztZzgl/list'    },
        /** 禁用自动触发loadData */
        disableAutoLoad: true
    }
    /** 从实例中解构出loadData */
    const { loadData, cancelLoadData } = new BaseList<DemoItem>(options)
    /** 接口请求结束后打印列表数据 */
    loadData().then((dataSource) => {
        console.log(dataSource)
    })
    /** 2s后接口未返回数据时中断请求 */
    setTimeout(cancelLoadData, 2000)
    ```

### getQueryParams()
获取构造后的请求参数。
- 类型
    ```ts
    function getQueryParams(): { 
        column: 'id' | 'createTime' | 'createBy' | 'updateBy' | 'updateTime' | keyof T,
        order: 'asc' | 'desc',
        pageNo: number,
        pageSize: number
    } & T
    ```
- 详细信息

    返回值是一个对象。定义了`axios`中列表请求的`params`的实际传参。

- 示例
    ```ts
    import { useAxios } from '@/utils/axios'
    import BaseList from '@/hooks/baseList'
    /** 从实例中解构出getQueryParams */
    const { getQueryParams } = new BaseList({  disableAutoLoad: true  })
    const axios = useAxios()
    axios({ url: 'zzgl/ztZzgl/list', params: getQueryParams() })
        .then((res) => {
            console.log(res)
        })
    ```

### deleteRecord()
根据id删除对应的列表条目。
- 类型
    ```ts
    function deleteRecord(id: string | number, method: Method = 'DELETE'): Promise<string>
    ```
### editRecord()
根据id编辑对应的列表条目。
- 类型
    ```ts
    function editRecord(record: T, method: Method = 'PUT'): Promise<string>
    ```
### addRecord()
新增列表条目。
- 类型
    ```ts
    function addRecord(record: T, method: Method = 'POST'): Promise<string>
    ```

## 实例属性

### dataSource
列表数据源。
- 类型
    ```ts
    const dataSource: ref<{ 
        createTime?: string,
        createBy?: string, 
        updateBy?: string, 
        updateTime?: string, 
        id?: number | string,
        [key: string]: any
    }>
    ```
- 详细信息

    当前列表的响应式数据源，在js中要通过`.value`来赋值和取值。

- 示例
    ```vue
    <template>
        <!-- 在模板中使用无需.value -->
        <a-table :dataSource="dataSource"></a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {    
        url: {  list: 'zzgl/ztZzgl/list'    }   
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource } = new BaseList<DemoItem>(options)
    /** 取值 */
    console.log(dataSource.value)
    /** 赋值 */
    dataSource.value = []
    </script>
    ```

### url
列表相关的请求接口地址。
- 类型
    ```ts
    const url: ref<{
        list?: string,
        delete?: string,
        add?: string,
        edit?: string
    }>
    ```
- 详细信息

    当前列表的相关的请求接口地址，在js中要通过`.value`来赋值和取值。

- 示例
    ```ts
    import BaseList from '@/hooks/baseList'
    const { url, loadData } = new BaseList({  disableAutoLoad: true  })
    url.value = { list: 'zzgl/ztZzgl/list' }
    loadData()
    ```
### columns
列描述数据对象。
- 类型
    ```ts
    import type { TableProps } from 'ant-design-vue'
    type Record<T> = T & { createTime?: string, createBy?: string, updateBy?: string, updateTime?: string, id?: number | string }
    const columns: { dataIndex?: keyof Record<T>, key?: keyof Record<T> }[] & TableProps['columns']
    ```
- 详细信息

    当前列表的列描述的响应式数据对象，在js中要通过`.value`来赋值和取值。类型继承自`ant-design-vue`的`TableProps`，对`dataIndex`和`key`做了进一步约束。

- 示例
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table
            :dataSource="dataSource"
            :columns="columns"
        >
        </a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, columns } = new BaseList<DemoItem>(options)
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

### queryParam
查询参数。
- 类型
    ```ts
    type Record<T> = T & { createTime?: string, createBy?: string, updateBy?: string, updateTime?: string, id?: number | string }
    const queryParam: ref<Partial<Record<T>>>
    ```
- 详细信息

    当前列表的查询参数的响应式变量。在js中要通过`.value`来赋值和取值。

- 示例
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table :dataSource="dataSource">
        </a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, queryParam } = new BaseList<DemoItem>(options)
    /** 限定条件为年龄18岁 */
    queryParam.value = { age: 18 }
    </script>
    ```

### isorter
排序规则。
- 类型
    ```ts
    type Record<T> = T & { createTime?: string, createBy?: string, updateBy?: string, updateTime?: string, id?: number | string }
    const isorter: ref<{ column: keyof Record<T>, order: 'asc' | 'desc' }>
    ```
- 详细信息

    当前列表的排序规则的响应式变量。在js中要通过`.value`来赋值和取值。
    - `column`是要排序的字段。默认为`'createTime'`。
    - `order`是排序的规则。赋值为`'asc'`时升序，`'desc'`是降序。默认为`'desc'`。

- 示例
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table :dataSource="dataSource"></a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, isorter } = new BaseList<DemoItem>(options)
    /** 列表按照年龄降序排序 */
    isorter.value = { column: 'age', order: 'desc' }
    </script>
    ```

### pagination
分页器。
- 类型
    ```ts
    const pagination: ref<{
        current: number,
        pageSize: number,
        total: number,
        pageSizeOptions: (number | string)[]
    }>
    ```
- 详细信息

    当前列表的分页器的响应式变量。在js中要通过`.value`来赋值和取值。
    - `current`：数字类型。当前页数。默认为`1`。
    - `pageSize`：数字类型。每页的条目数。默认为`10`。
    - `total`：数字类型。列表的总条目数。默认为`0`。
    - `pageSizeOptions`：数组类型。分页器可选的每页条目数。默认为`['10', '20', '30']`

- 示例

    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table :dataSource="dataSource" :pagination="pagination"></a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, pagination } = new BaseList<DemoItem>(options)
    /** 切换到第二页 */
    pagination.value.current = 2
    </script>
    ```
### loading
列表加载标识符。
- 类型
    ```ts
    const loading: ref<boolean>
    ```
- 详细信息
    当前列表的加载标识符的响应式变量。在js中要通过`.value`来赋值和取值。
- 示例

    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table :dataSource="dataSource" :loading="loading"></a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, loading } = new BaseList<DemoItem>(options)
    </script>
    ```
### selectedRowKeys
选中的行key数组。
- 类型
    ```ts
    const selectedRowKeys: ref<(string | number)[]>
    ```
- 示例
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table :dataSource="dataSource" rowKey="id" :row-selection="{ selectedRowKeys, onChange: handlerSelectionChange }"></a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, selectedRowKeys, handlerSelectionChange } = new BaseList<DemoItem>(options)
    </script>
    ```
### selectedRows
选中的行。
- 类型
    ```ts
    const selectedRows: ref<Record<T>[]>
    ```
- 示例
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table :dataSource="dataSource" rowKey="id" :row-selection="{ selectedRowKeys, onChange: handlerSelectionChange }"></a-table>
    </template>
    <script setup lang="ts">
    import { watch } from 'vue'
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, selectedRowKeys, selectedRows, handlerSelectionChange } = new BaseList<DemoItem>(options)
    /** 监听选中行的变化 */
    watch(selectedRows.value, (val) => {
        console.log(val)
    })
    </script>
    ```
### handlerTableChange()
表格change事件回调函数。
- 类型
    ```ts
    import type { TablePaginationConfig } from 'ant-design-vue'
    const handlerTableChange: (pagination: TablePaginationConfig, filters: { [key: string]: any[] }, sorter: unknown) => void
    ```
- 示例
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table
            :dataSource="dataSource"
            :columns="columns"
            :pagination="pagination"
            @change="handlerTableChange"
        >
        </a-table>
    </template>
    <script setup lang="ts">
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        },
        columns: [
            {
                title: 'id', dataIndex: 'id', sorter: true
            },
            {
                title: 'age', dataIndex: 'age', sorter: true
            }
        ]
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, pagination, handlerTableChange, columns } = new BaseList<DemoItem>(options)
    </script>
    ```

### handlerSelectionChange()
表格行选择change事件回调函数。
- 类型
    ```ts
    const handlerSelectionChange: (selectedRowKeys: (string | number)[], selectedRows: Record<T>[]) => void
    ```
- 示例
    ```vue
    <template>
        <!-- 将BaseList实例化后解构出的响应式变量和方法绑定到列表 -->
        <a-table :dataSource="dataSource" rowKey="id" :row-selection="{ selectedRowKeys, onChange: handlerSelectionChange }"></a-table>
    </template>
    <script setup lang="ts">
    import { watch } from 'vue'
    import BaseList, { BaseListHookOptions } from '@/hooks/baseList'
    /** 定义列表条目字段和类型 */
    interface DemoItem {
        age: number
        birthday: string
        dzb: string
        mz: string
        name: string
    }
    /** 定义列表类参数 */
    const options: BaseListHookOptions<DemoItem> = {
        url: {
            list: 'zzgl/ztZzgl/list'
        }
    }
    /** 实例化后解构出要使用的响应式变量和方法，并绑定到模板Html中 */
    const { dataSource, selectedRowKeys, selectedRows, handlerSelectionChange } = new BaseList<DemoItem>(options)
    </script>
    ```