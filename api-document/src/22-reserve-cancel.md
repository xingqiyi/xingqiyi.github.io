# 取消订座订单

* POST `/capi.php`
* c `22`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| reserve_id | string | 订座订单id |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| reserve_id | string | 订座订单id |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "id": "10033",
    "sid": "rm5nuvcvtsv8on2bsovuso94r3",
    "reserve_id": "5"
  }
}
```
