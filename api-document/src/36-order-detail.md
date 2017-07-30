# 订单详情

* POST `/capi.php`
* c `36`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| order_type | int | 订单类型 | 1： 订座订单详情， 2： 充值或者其他订单详情（从我的订单界面取，或者直接写死） |
| order_id | int | 订单id | 订座订单的id或者游戏充值或其他的订单id |

## 订座订单详情

order_id = 1

### 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| client_code | string | 客户机编号 |
| phone | string | 订座的手机号 |
| reserve_time | int | 订座时的时间戳 |
| reserve_min | int | 订座时长 | 单位秒 |
| reserve_money | int | 订座所需支付押金 | 单位分 |
| barname | string | 网吧名 |

### 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "id": "4",
    "client_id": "19,22",
    "uid": "10040",
    "phone": "15871750893",
    "reserve_time": "1487387333",
    "reserve_min": "120",
    "reserve_money": "35",
    "barid": "1",
    "status": "0",
    "gotime": "0",
    "orderid": "708",
    "overtime": "0",
    "endtime": "0",
    "barname": "红牛网吧",
    "client_code": "a012,a015"
  }
}
```

## 充值或者其他

order_id = 2

### 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| extdes | string | 订单详细 | 游戏大区，账号等 |
| money | int | 消费金额 | 单位分 |
| addtime | int | 创建时间 |

### 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "id": "79",
    "orderid": "600",
    "userid": "10039",
    "money": "10000",
    "buynum": "100",
    "addtime": "1488870516",
    "endtime": "0",
    "haspay": "2",
    "status": "2",
    "goods_name": "腾讯-Q币①（5元起提交充值）",
    "extdes": ""
  }
}
```
