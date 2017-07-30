# 修改用户昵称

* POST `/capi.php`
* c `32`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| nickname | string | 新昵称 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| data | string | 提示信息 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": "操作成功"
}
```
