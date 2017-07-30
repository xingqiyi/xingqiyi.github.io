# 网吧附近、智能排序、筛选

* POST `/capi.php`
* c `52`

## v2.0 更新说明

* [返回参数](#返回参数) 添加 `score` `phone_number` `tags`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| page | int | 传递第几页 | 默认显示第一页，从1开始算起 |
| citycode | string | 区域id |
| longitude | string | 经度 |
| latitude | string | 纬度 |
| distance | string | 距离 |
| sort_type(可选) | int | 智能排序 | 1：离我最近，2：评分最高，3：活动最多，4：热度最高，5：费用最低，6：费用最高 |
| price（可选） | int | 筛选里面的费用查询 | 只有一个确定值时 |
| price_type | int | 价格类型 | 1：以上，2：价格以下 |
| l_price（可选） | int | 筛选里面的费用查询 | 用于范围价格查询时的最低价格 |
| h_price | int | 筛选里面的费用查询 | 用于范围价格查询时的最高价格 |
| more_select（可选） | int | 筛选里面的更多查询 | 有多个时使用英文逗号分隔，只能是 is_new：新店 ，h_reservation：可在线订座，h_promotion：有促销，h_wat_bar：有水吧，h_park：有停车场，is_shop：营业中 （more_select = 'is_new' 或者 more_select = 'is_new,h_reservation'） |

备注（重要）：

* 当存在 price时，必须含有price_type,不能含有l_price与h_price
* 当存在l_price时，必须含有h_price,不能含有price与price_type

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
| score | string | 评分 |
| phone_number | string | 联系电话 |
| tags | string array | 标签 | 
| netbar_point | string | 网吧评分 | 

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "total_num": "35",
  "data": [
      {
            "name": "红牛网吧",
            "barcode": "42010200005",
            "netbar_point": 0,
            "barimg": [
                "http://192.168.2.196/Upload/barimg/20170519/591e58f8dee12.jpg",
                "http://192.168.2.196/Upload/barimg/20170519/591e58f906e69.jpg",
                "http://192.168.2.196/Upload/barimg/20170519/591e6ae131039.jpg"
            ],
            "comment_number": "144",
            "hot_level": "1",
            "address": "光谷创意产业基地",
            "charges": "1.5韩国海军",
            "logo": "http://192.168.2.196/Upload/logo/sys/netbar_logo.png",
            "l_charges": "100",
            "h_charges": "1200",
            "longitude": "114.409555",
            "latitude": "30.482552",
            "distance": "117m",
            "is_newshop": 0,
            "has_reserve": 1,
            "is_chain": 1,
            "has_active": 1,
            "unit_charges": "1-12",
            "barid": "1",
            "tags": [
                "在线订座",
                "连锁",
                "有优惠"
            ]
        },
        {
            "name": "光谷创意基地",
            "barcode": "42011100012",
            "netbar_point": 0,
            "barimg": "",
            "comment_number": "0",
            "hot_level": "99",
            "address": "光谷创意基地",
            "charges": "5",
            "logo": "http://192.168.2.196/Upload/logo/58f1e3027a7aa.jpg",
            "l_charges": "2",
            "h_charges": "3",
            "longitude": "114.409904",
            "latitude": "30.48583",
            "distance": "338m",
            "is_newshop": 0,
            "has_reserve": 1,
            "is_chain": 1,
            "has_active": 0,
            "unit_charges": "0.02-0.03",
            "barid": "23",
            "tags": [
                "在线订座",
                "连锁"
            ]
        },
  ]
}
```
