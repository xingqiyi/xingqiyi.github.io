# 我的订单列表

* POST `/capi.php`
* c `35`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| page | int | 分页页码 |
| status | int | 订单类型 | 1：  订座订单数据 2： 游戏充值等其他订单数据 |

## 订座订单数据

### 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| reserve_id | string | 订座订单id |
| client_id | string | 订座客户机id |
| uid | string | 用户id |
| phone | string | 电话 |
| reserve_time | int | 订座时间 |
| reserve_min | int | 订座时长 | 单位：秒 |
| reserve_money | int | 预定金额 | 单位：分 |
| gotime | int | 预定到什么时间 |
| barid | int | 预定的网吧id |
| status | int | 预定状态 |
| paystatus | int | 支付状态 |
| endtime | int | 订单完成时间 |
| orderid | int | 订单id |
| r_orderid | int | 订单编号 |
| client_code | string | 预定的客户机编号 |
| paytime | int | 支付时间 |
| barname | string | 预定的网吧名称 |
| flag | int | 状态 | 1：预定成功，并以付款， 2：已预定，未支付  -1：订单测地完成  -5：订单彻底取消  0：订单正在取消  -4：订单超时 |
| order_type | int | 订单类别 | 1： 订座订单 2： 游戏等其他充值类型 |

### 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    {
      	"client_id" : 153
		"uid" : 10430
		"phone" : 15871770893
		"reserve_time" : 1495591650
		"reserve_min" : 3600
		"reserve_money" : 300
		"barid" : 119
		"status" : 1
		"paystatus" : 1
		"gotime" : 1495595278
		"orderid" : 2593
		"endtime" : 1495541994
		"r_orderid": g119_20170524100809815045
		"client_code" : a05
		"paytime" : 1495591689
		"barname" : 小罗测试
		"reserve_id" : 26
		"flag" :1
		"order_type" : 1
    }
  ]
}
```

## 游戏充值等其他订单

### 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| recharge_id | string | 游戏订单编号 |
| flag | int | 订单状态 | 1:订单完成 2： 订单完成中 3：订单未支付 -1：订单取消 |
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
