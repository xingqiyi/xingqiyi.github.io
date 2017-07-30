# 订座订单超时后删除订单

* POST `/capi.php`
* c `27`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| reserve_id | string | 超时的订座订单id |

## 返回参数

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "id": "10319",
    "sid": "ddvq33qrrai09tj1pd2so9dng1",
    "reserve_id": 763
  }
}
```
