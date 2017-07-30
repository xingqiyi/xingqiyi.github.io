# 取消游戏订单

* POST `/capi.php`
* c `43`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| recharge_id | int | 游戏订单id |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| recharge_id | string | 游戏订单id |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "recharge_id": "2"
  }
}
```
