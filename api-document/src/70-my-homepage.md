# 我的订单列表

* POST `/capi.php`
* c `70`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |

## 订座订单数据

### 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| yue | string | 余额 |
| newmsg | string | 新通知 |
| phone | string | 电话 |
| reserve_time | int | 订座时间 |
| gotime | int | 预定到什么时间 |
| orderid | int | 订单id |
| g_orderid | int | 订单编号 |
| endtime | int | 结束时间 |
| flag | int | 状态 | 1：预定成功，并以付款， 2：订单完成中  3：已预定未付款  4：订单彻底完成 |
| order_type | int | 订单类别 | 1： 订座订单 2： 游戏等其他充值类型 |

### 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    {
      "id": "9",
      "client_id": "15,16,18,20",
      "uid": "10033",
      "phone": "",
      "reserve_time": "1490791938",
      "reserve_min": "0",
      "reserve_money": "0",
      "barid": "1",
      "status": "2",
      "gotime": "0",
      "orderid": "0",
      "overtime": "0",
      "endtime": "0",
      "barname": "红牛网吧",
      "g_orderid": "",
      "haspay": "",
      "b_status": "",
      "flag": 3,
      "order_type": 1
    }
  ]
}
```

## 游戏充值等其他订单

### 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| recharge_id | string | 游戏订单编号 |
| flag | int | 订单状态 | 1:订单完成 2： 订单完成中 |
| extdes | string | 订单详细 | 游戏大区，账号等 |
| g_orderid | int | 订单编号 |
| endtime | int | 订单完成时间 |
| money | int | 订单消费金额 | 单位分 |
| buynum | int | 购买数量 |
| addtime | int | 订单创建时间 |
| order_type | int | 订单类型 | 1 订座订单，2 游戏充值或其他 |

### 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    {
      "flag": 2,
      "order_type": 2,
      "extdes": {
        "chargegame": "完美世界",
        "chargeregion": "完美世界",
        "chargeserver": "",
        "chargetype": ""
      },
      "status": "0",
      "haspay": "2",
      "g_orderid": "g1_20170326100028551428",
      "endtime": "1490493628",
      "account": "王企鹅期望",
      "money": "27000",
      "createtime": "1490493628",
      "buynum": "9"
    },
    {
      "flag": 2,
      "order_type": 2,
      "extdes": "",
      "status": "0",
      "haspay": "2",
      "g_orderid": "g0_20170328195726549368",
      "endtime": "1490702246",
      "account": "21346",
      "money": "1000",
      "createtime": "1490702246",
      "buynum": "10"
    }
  ]
}
```
