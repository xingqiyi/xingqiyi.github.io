# 删除订单

* POST `/capi.php`
* c `44`

## 说明

主要是不给用户显示，只有订单是已完成的状态才能删除

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| order_type | int | 订单类型 | 1： 在线订座  2：  游戏充值 |
| order_id | int | 订单id | 订座订单的id或者游戏充值或其他的订单id |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "id": 10367,
    "sid": "ddvq33qrrai09tj1pd2so9dng1",
    "order_type": "1",
    "order_id": 18
  }
}
```
