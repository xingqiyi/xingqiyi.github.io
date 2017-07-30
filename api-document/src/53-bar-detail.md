# 网吧详情

* POST `/capi.php`
* c `53`

## v2.0 更新

* [请求参数](#请求参数) 添加 `sid` `id`
* [返回参数](#返回参数) 添加 `followed` `score` `activities` `comment_number` `comments`

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
| barimg | string-array | 网吧编号 |
| logo | string | 网吧图标 |
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
| comment_number | int | 评论次数 |
| netbar_point | sting | 网吧评分 |
| comments | object array | 评论列表 | [详细说明](#comment) |

### activity

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| title | string | 优惠标题 |
| type | int | 优惠类型 | 1:惠,2:充,3:首 |

### comment

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | string | 评论id |
| uid | string | 用户id |
| avatar | string | 用户头像 |
| timestamp | int | 评论的时间戳 |
| content | string | 评论内容 |
| images | string array | 评论图片 |
| score | string | 评论评分 |
| reply_number | int | 回复数 |
| replies | object array | 回复列表 | [详细说明](#reply) |

#### reply

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | string | 回复id |
| time | string | 回复时间 |
| from_uid | string | 回复人id |
| from_name | string | 回复人名字 |
| from_avatar | string | 回复人头像 |
| to_uid | string | 被回复人id |
| to_name | string | 被回复人名字 |
| content | string | 回复内容 |

## 返回实例

```JSON
{
    "status": 1,
    "info": "",
    "data": {
        "barid": "1",
        "barcode": "42010200005",
        "name": "红牛网吧",
        "address": "光谷创意产业基地",
        "num": "100",
        "tel_bar": "027674211",
        "longitude": "114.409555",
        "latitude": "30.482552",
        "comment_number": "144",
        "l_charges": 3,
        "h_charges": 12,
        "netbar_point": 0,
        "barimg": [
            "http://192.168.2.196/Upload/barimg/20170519/591e58f8dee12.jpg",
            "http://192.168.2.196/Upload/barimg/20170519/591e58f906e69.jpg",
            "http://192.168.2.196/Upload/barimg/20170519/591e6ae131039.jpg"
        ],
        "activities": [
            {
                "type": "2",
                "content": "上午8:00-12:00包时段上网只要10元"
            },
            {
                "type": "2",
                "content": "上午8:00-12:00包浮点数"
            },
            {
                "type": "1",
                "content": "分为氛围"
            },
            {
                "type": "1",
                "content": "空间和客户就"
            }
        ],
        "followed": 0,
        "atte_list": [],
        "distance": "117m",
        "has_reserva": 0,
        "vip": 1,
        "unit_charges": "3-12",
        "logo": "http://192.168.2.196/Upload/logo/sys/netbar_logo.png",
        "comments": {
            "10": {
                "id": "10",
                "uid": "10430",
                "addtime": "1495613959",
                "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "replies": [
                    {
                        "id": "46",
                        "barid": "1",
                        "addtime": "1495679809",
                        "from_uid": "10430",
                        "to_uid": "0",
                        "content": "dffftTf",
                        "comment_id": "10",
                        "to_reply_id": "0",
                        "status": "1",
                        "dealtime": "0",
                        "group_id": "3",
                        "from_avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                        "from_name": "小罗",
                        "to_name": ""
                    },
                    {
                        "id": "47",
                        "barid": "1",
                        "addtime": "1495679816",
                        "from_uid": "10430",
                        "to_uid": "0",
                        "content": "dffftTf",
                        "comment_id": "10",
                        "to_reply_id": "0",
                        "status": "1",
                        "dealtime": "0",
                        "group_id": "2",
                        "from_avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                        "from_name": "小罗",
                        "to_name": ""
                    },
                    {
                        "id": "50",
                        "barid": "1",
                        "addtime": "1495692761",
                        "from_uid": "10195",
                        "to_uid": "10430",
                        "content": "我",
                        "comment_id": "10",
                        "to_reply_id": "47",
                        "status": "1",
                        "dealtime": "0",
                        "group_id": "1",
                        "from_avatar": "http://192.168.2.196/Upload/face/sys/7.jpg",
                        "from_name": "了了我是我我普通来咯啊啊",
                        "to_name": "小罗"
                    }
                ],
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg"
            },
            "11": {
                "id": "11",
                "uid": "10430",
                "addtime": "1495614062",
                "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "12": {
                "id": "12",
                "uid": "10430",
                "addtime": "1495614091",
                "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "13": {
                "id": "13",
                "uid": "10430",
                "addtime": "1495614121",
                "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "14": {
                "id": "14",
                "uid": "10430",
                "addtime": "1495614521",
                "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "15": {
                "id": "15",
                "uid": "10430",
                "addtime": "1495614534",
                "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "16": {
                "id": "16",
                "uid": "10430",
                "addtime": "1495614534",
                "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "17": {
                "id": "17",
                "uid": "10430",
                "addtime": "1495614534",
                "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "18": {
                "id": "18",
                "uid": "10430",
                "addtime": "1495614535",
                "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            },
            "19": {
                "id": "19",
                "uid": "10430",
                "addtime": "1495614535",
                "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
                "images": "",
                "score": 4.5,
                "barid": "1",
                "reply_number": "0",
                "status": "1",
                "dealtime": "0",
                "avatar": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "replies": []
            }
        }
    }
}
```
