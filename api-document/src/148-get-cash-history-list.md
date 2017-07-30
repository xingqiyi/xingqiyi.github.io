# 获取获奖记录列表

* POST `/capi.php`
* c `148`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| bar_id | int | 网吧id |  |
| page | int | 页数 |  |

## 返回参数
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| data | object array | 获奖记录列表 |  |

## data
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | int | 获奖记录id |  |
| type_name | string | 活动名称 |  |
| product_name | string | 奖品名称 |  |
| addtime | string | 获奖时间 |  |
| status | string | 领取状态 |  |
| ex_code | string | 兑换码 |  |


## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    {
      "id" : 1,
      "type_name" : "红包",
      "product_name" : "7元网费",
      "addtime" : "2017-05-12 14:00",
      "status" : "已领取",
      "ex_code" : "6Z3SLH"
    }
  ]
}
```
