# 更新指定留言通知消息状态

* POST `/capi.php`
* c `138`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| comment_infom_id | int | 回复通知消息id |  |
| operation_id | int | 操作id | 1 更新，2 删除 |

## 返回参数

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": "操作成功"
}
```
