# 确认订座订单

* POST `/capi.php`
* c `21`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| reserve_id | string | 订座订单id |
| reserve_min | int | 需要预定多长时间 | 单位：秒 |
| phone | string | 预定的手机号 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| reserve_id | int | 订座订单id |
| reserve_min | int | 需要预定多长时间 | 单位：秒 |
| reserve_money | int | 押金 | 单位：分 |
| phone | string | 订座时留的手机号 |
| gotime | int | 预定到的时间时间时间戳 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "reserve_id": 5,
    "reserve_min": 7200,
    "reserve_money": 900,
    "phone": "15871790230",
    "gotime": 1490794086
  }
}
```
