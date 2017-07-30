# 评论详情，单个评论

* POST `/capi.php`
* c `84`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| barid | int | 网吧id |
| comment_id | int | 评论id |
| page | int | 回复页码，默认1，每一页显示10条 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | string | 评论id |
| uid | int | 用户id |
| addtime | int | 评论时间 |
| content | string | 评论内容 |
| images | string | 图片 |
| score | int | 评分 | 
| barid | int | 网吧id | 
| reply_number | int | 回复个数 | 
| status | int | 评论状态，1：正常，2：被警告的评论，（目前没区别，可不用理会） | 
| dealtime | int | 评论处理时间 | 
| face | string | 评论人头像 | 
| nickname | string | 评论人昵称 | 
| replies | array | 回复 | 

## 返回实例

```JSON
{
    "status": 1,
    "info": "",
    "data": {
        "id": "1",
        "uid": "10430",
        "addtime": "1495610015",
        "content": "的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
        "images": "",
        "score": 4.5,
        "barid": "2",
        "reply_number": 8,
        "status": "1",
        "dealtime": "0",
        "face": "http://192.168.2.196/Upload/face/sys/6.jpg",
        "nickname": "小罗",
        "replies": [
            {
                "id": "33",
                "barid": "2",
                "addtime": "1495620172",
                "from_uid": "10430",
                "to_uid": "0",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "from_nickname": "小罗",
                "to_face": "",
                "to_nickname": ""
            },
            {
                "id": "34",
                "barid": "2",
                "addtime": "1495620172",
                "from_uid": "10430",
                "to_uid": "10444",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "from_nickname": "小罗",
                "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "to_nickname": "游客1704261735327682"
            },
            {
                "id": "35",
                "barid": "2",
                "addtime": "1495620172",
                "from_uid": "10430",
                "to_uid": "10444",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "from_nickname": "小罗",
                "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "to_nickname": "游客1704261735327682"
            },
            {
                "id": "36",
                "barid": "2",
                "addtime": "1495620173",
                "from_uid": "10430",
                "to_uid": "10444",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "from_nickname": "小罗",
                "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "to_nickname": "游客1704261735327682"
            },
            {
                "id": "37",
                "barid": "2",
                "addtime": "1495620173",
                "from_uid": "10430",
                "to_uid": "10444",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "from_nickname": "小罗",
                "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "to_nickname": "游客1704261735327682"
            },
            {
                "id": "38",
                "barid": "2",
                "addtime": "1495620173",
                "from_uid": "10430",
                "to_uid": "10444",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/6.jpg",
                "from_nickname": "小罗",
                "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "to_nickname": "游客1704261735327682"
            },
            {
                "id": "48",
                "barid": "2",
                "addtime": "1495683733",
                "from_uid": "10444",
                "to_uid": "10444",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "from_nickname": "游客1704261735327682",
                "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "to_nickname": "游客1704261735327682"
            },
            {
                "id": "49",
                "barid": "2",
                "addtime": "1495683758",
                "from_uid": "10444",
                "to_uid": "10444",
                "content": "这123456广泛大锅饭帮的,",
                "comment_id": "1",
                "to_reply_id": "1",
                "status": "1",
                "dealtime": "0",
                "from_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "from_nickname": "游客1704261735327682",
                "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
                "to_nickname": "游客1704261735327682"
            }
        ]
    }
}
```
