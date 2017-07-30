# 地区、网吧名搜索

* POST `/capi.php`
* c `51`

## v2.0 更新

* 

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| page | int | 传递第几页 | 默认显示第一页，从1开始算起 |
| citycode | string | 区域id |
| longitude | string | 经度 |
| latitude | string | 纬度 |
| name(可选) | string | 网吧名 | 如果没有传递 则默认是区域内网吧 |
| type(地图时传递) | int | 1:地图时使用 |
| distance(type=1时) | string | 距离，直接为数字，单位:千米 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| netbar_point | string | 网吧评分，主要用于星星 |
| barcode | string | 网吧编号 |
| hot_level | int | 网吧热度 | 99：普通，1：一级二度，2：二级二度 |
| regtime | int | 注册时间 |
| logo | string | 网吧logo图标 |
| barimg | string | 网吧图片 |
| address | string | 网吧地址 |
| name | string | 网吧名 |
| l_charges | string | 最低资费 | 如果是999999  则表示该网吧没有设置最低资费 |
| h_charges | string | 最高资费 | 如果是0， 则表示该网吧没有设置最高资费 |
| longitude | string | 经度 |
| latitude | string | 纬度 |
| distance | string | 距离 |
| unit_charges | string | 资费 |
| is_newshop | int | 是否新店，0:不是，1：是 |
| has_reserve | int | 是否开启在线订座 | 0：没有，1：开启 |
| is_chain | int | 是否连锁，0：不是，1：是 | 连锁下超过两家网吧为连锁 |
| has_active | int | 是否有优惠，0：没有，1：有 |
| barid | int | 网吧id |
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
            "netbar_point": 0,
            "comment_number": "144",
            "barcode": "42010200005",
            "address": "光谷创意产业基地",
            "hot_level": "1",
            "regtime": "0",
            "l_charges": "100",
            "h_charges": "1200",
            "logo": "http://192.168.2.196/Upload/logo/sys/netbar_logo.png",
            "barimg": [
                "http://192.168.2.196/Upload/barimg/20170519/591e58f8dee12.jpg",
                "http://192.168.2.196/Upload/barimg/20170519/591e58f906e69.jpg",
                "http://192.168.2.196/Upload/barimg/20170519/591e6ae131039.jpg"
            ],
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
            "netbar_point": 0,
            "comment_number": "0",
            "barcode": "42011100012",
            "address": "光谷创意基地",
            "hot_level": "99",
            "regtime": "1483496765",
            "l_charges": "2",
            "h_charges": "3",
            "logo": "http://192.168.2.196/Upload/logo/58f1e3027a7aa.jpg",
            "barimg": "",
            "longitude": "114.409904",
            "latitude": "30.48583",
            "distance": "338m",
            "is_newshop": 1,
            "has_reserve": 1,
            "is_chain": 1,
            "has_active": 0,
            "unit_charges": "0.02-0.03",
            "barid": "23",
            "tags": [
                "新店",
                "在线订座",
                "连锁"
            ]
        },
  ]
}
```
