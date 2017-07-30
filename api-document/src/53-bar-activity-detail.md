# 网吧活动详情

* POST `/capi.php`
* c `53`

## v2.0 更新

* [请求参数](#请求参数) 添加 `sid` `id`
* [返回参数](#返回参数) 添加 `followed` `score` `activities`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| barid | int | 网吧id |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| barid | string | 网吧id |
| barcode | string | 网吧编号 |
| barimg | string | 网吧图标 |
| address | string | 网吧地址 |
| name | string | 网吧名 |
| l_charges | string | 最低资费 | 如果是999999  则表示该网吧没有设置最低资费 |
| h_charges | string | 最高资费 | 如果是0， 则表示该网吧没有设置最高资费 |
| longitude | string | 经度 |
| latitude | string | 纬度 |
| distance | string | 距离 |
| unit_charges | string | 资费 |
| num | int | 机器台数 |
| tel_bar | string | 吧台电话 |
| vip | int | 是否为 vip 网吧 | 1,是vip网吧 |
| viptime | int | vip 到期时间戳 |
| followed | int | 是否已关注 | 0(默认):未关注，1:已关注 |
| score | string | 评分 |
| activities | object array | 优惠活动列表 | [详细说明](#activity) |

### activity

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | string | 优惠活动id |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "barcode": "42010200005",
    "l_charges": "3",
    "h_charges": "0",
    "longitude": "",
    "latitude": "",
    "name": "红牛网吧",
    "barimg": [
      ""
    ],
    "viptime": "1584866289",
    "address": "456546",
    "num": "100",
    "tel_bar": "027674211",
    "vip": 1,
    "barid": "1",
    "unit_charges": "3",
    "followed": 0,
    "score": "5"
  }
}
```
