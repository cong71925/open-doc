---
# 这是文章的标题
title: 高级查询器
order: 5
# 设置写作时间
date: 2024-10-24
# 一个页面可以有多个分类
category:
  - 开发文档
  - 地图
# 一个页面可以有多个标签
---

## QueryType
高级查询类型。
- 类型
    ```ts
    enum QueryType {
        and = 'and',
        or = 'or'
    }
    ```
## FieldType
高级查询字段的字段类型。
- 类型
    ```ts
    enum FieldType {
        String = 'String',
        Int = 'int',
        DateTime = 'datetime',
        Date = 'date'
    }
    ```
## FieldRule
高级查询字段的的查询规则。
- 类型
    ```ts
    enum FieldRule {
        等于 = 'eq',
        不等于 = 'ne',
        大于 = 'gt',
        大于等于 = 'ge',
        小于 = 'lt',
        小于等于 = 'le',
        包含 = 'like',
        以xx开始 = 'right_like',
        以xx结尾 = 'left_like'
    }
    ```
## queryItem()
返回一种查询类型的查询项。
- 类型
    ```ts
    function queryItem <T>(field: string, value: T, type: FieldType, rule: FieldRule): { rule: FieldRule, type: FieldType, val: T, field: string }
    ```
## queryItems()
返回多个一种查询类型的查询项。
- 类型
    ```ts
    function queryItems <T>(field: string, value: T[], type: FieldType, rule: FieldRule): { rule: FieldRule, type: FieldType, val: T, field: string }[]
    ```
## getSuperQueryObj()
构造一个高级查询项。
- 类型
    ```ts
    function getSuperQueryObj <T>(queryType: QueryType, ...arr: QueryItem<T>[]): { superQueryParams: string, superQueryMatchType: QueryType }
    ```
- 详细信息

    第一个参数为高级查询类型，应使用枚举值`queryType`。

    剩余参数为查询项，应使用`queryItem()`。

    返回值是一个对象，里面有这些属性：

    - `superQueryParams`：高级查询参数字符串。
    - `superQueryMatchType`：高级查询类型。
- 示例
    ```ts
    import { useAxios } from '@/utils/axios'
    import { getSuperQueryObj, queryItem, FieldType, FieldRule, QueryType } from '@/utils/superQuery'
    const superQueryObj = getSuperQueryObj(
        QueryType.and, 
        queryItem('字段名', '字段值', FieldType.DateTime, FieldRule.大于等于), 
        queryItem('字段名', '字段值', FieldType.DateTime, FieldRule.小于)
    )

    /** 在请求接口时使用 */
    const axios = useAxios()
    axios({
        url: '/sys/sysRoleTree/queryUserTreeTagList',
        method: 'get',
        params: { ...superQueryObj }
    }).then((res) => {

    }).catch((err) => {

    })

    ```
## getSuperQuery()
构造一个高级查询项。
- 类型
    ```ts
    function getSuperQuery <T>(queryType: QueryType, ...arr: QueryItem<T>[]): string
    ```
- 详细信息

    第一个参数为高级查询类型，应使用枚举值`queryType`。

    剩余参数为查询项，应使用`queryItem()`。

    返回值是一个字符串，可拼接在接口请求的url后使用。

- 示例
    ```ts
    import { useAxios } from '@/utils/axios'
    import { getSuperQuery, queryItem, FieldType, FieldRule, QueryType } from '@/utils/superQuery'
    const superQueryStr = getSuperQuery(
        QueryType.and, 
        queryItem('字段名', '字段值', FieldType.DateTime, FieldRule.大于等于), 
        queryItem('字段名', '字段值', FieldType.DateTime, FieldRule.小于)
    )

    /** 在请求接口时使用 */
    const axios = useAxios()
    axios({
        url: `/sys/sysRoleTree/queryUserTreeTagList?${superQueryStr}`,
        method: 'get'
    }).then((res) => {

    }).catch((err) => {

    })

    ``` 
## getSuperQueryList()
嵌套复杂高级查询。
- 类型
    ```ts
    function getSuperQueryList (queryType: QueryType, ...arr: QueryObj[]): string
    ```
- 详细信息

    第一个参数为高级查询类型，应使用枚举值`queryType`。

    剩余参数为高级查询项，应使用`getSuperQueryObj()`。

    返回值是一个字符串，可拼接在接口请求的url后使用。

- 示例
    ```ts
    import { useAxios } from '@/utils/axios'
    import { getSuperQueryList, getSuperQueryObj, queryItem, FieldType, FieldRule, QueryType } from '@/utils/superQuery'

    const superQueryStr = getSuperQueryList(
        QueryType.or,
        getSuperQueryObj(
            QueryType.and, 
            queryItem('字段名1', '字段值', FieldType.DateTime, FieldRule.大于等于), 
            queryItem('字段名1', '字段值', FieldType.DateTime, FieldRule.小于)
        ),
        getSuperQueryObj(
            QueryType.and, 
            queryItem('字段名2', '字段值', FieldType.DateTime, FieldRule.大于等于), 
            queryItem('字段名2', '字段值', FieldType.DateTime, FieldRule.小于)
        )
    )

    /** 在请求接口时使用 */
    const axios = useAxios()
    axios({
        url: url: `/sys/sysRoleTree/queryUserTreeTagList?${superQueryStr}`,
        method: 'get'
    }).then((res) => {

    }).catch((err) => {

    })

    ```