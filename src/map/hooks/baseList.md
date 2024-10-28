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
    const { dataSource, pagination, handlerTableChange, columns, handlerSelectionChange, selectedRowKeys } = new BaseList(options)
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

### cancelLoadData()
取消列表请求。

### getQueryParams()
获取构造后的请求参数。

### deleteRecord()
根据id删除对应的列表条目。

### editRecord()
根据id编辑对应的列表条目。

### addRecord()
新增列表条目。

## 实例属性

### dataSource
列表数据源。
### url
列表相关的请求接口地址。
### columns
列描述数据对象。
### queryParam
查询参数。
### isorter
排序规则。
### pagination
分页器。
### loading
列表加载标识符。
### selectedRowKeys
选中的行key数组。
### selectedRows
选中的行。
### handlerTableChange()
表格change事件回调函数。
### handlerPaginationChange()
表格分页器change事件回调函数。