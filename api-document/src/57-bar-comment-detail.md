# 评论详情

* POST `/capi.php`
* c `57`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| barid | int | 网吧id |
| page | int | 页码，默认为1 |

## 返回参数

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

### reply

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
    "data": [
        {
            "id": "10",
            "uid": "10430",
            "addtime": "1495613959",
            "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 3,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
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
                    "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                    "to_face": "",
                    "from_nickname": "小罗",
                    "to_nickname": ""
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
                    "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                    "to_face": "",
                    "from_nickname": "小罗",
                    "to_nickname": ""
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
                    "from_face": "http://192.168.2.196/Upload/face/sys/7.jpg",
                    "to_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                    "from_nickname": "了了我是我我普通来咯啊啊",
                    "to_nickname": "小罗"
                }
            ]
        },
        {
            "id": "11",
            "uid": "10430",
            "addtime": "1495614062",
            "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "12",
            "uid": "10430",
            "addtime": "1495614091",
            "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "13",
            "uid": "10430",
            "addtime": "1495614121",
            "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "14",
            "uid": "10430",
            "addtime": "1495614521",
            "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "15",
            "uid": "10430",
            "addtime": "1495614534",
            "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "16",
            "uid": "10430",
            "addtime": "1495614534",
            "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "17",
            "uid": "10430",
            "addtime": "1495614534",
            "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "18",
            "uid": "10430",
            "addtime": "1495614535",
            "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        },
        {
            "id": "19",
            "uid": "10430",
            "addtime": "1495614535",
            "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
            "images": "",
            "score": 4.5,
            "barid": "1",
            "reply_number": 0,
            "status": "1",
            "dealtime": "0",
            "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
            "nickname": "小罗",
            "replies": ""
        }
    ]
}
```
