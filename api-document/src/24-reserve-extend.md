# 延长订座时间

* POST `/capi.php`
* c `24`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| reserve_id | string | 订座订单id |
| ext_time | string | 延长的时间 | 单位秒 |
| payid | string | 支付方式 | 11：支付宝 4： 微信 5：领航币 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| reserve_id | string | 订座订单id |
| orderid | string | 订单单号 |
| payid | int | 支付方式 | 5： 领航币  11： 支付宝  4： 微信 |
| url | string | 支付宝等跳转页面 |
| subject | string | 操作模块 |
| body | string | 支付说明 |
| price | string | 支付金额，单位分 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "res_id": "20",
    "orderid": "g1_20170330101551537200",
    "url": "http://127.0.0.1",
    "payid": "11",
    "subject": "在线订座",
    "body": "2017-03-30 10:15:51在线订座,消费:0.01元",
    "price": 1000
  }
}
```
