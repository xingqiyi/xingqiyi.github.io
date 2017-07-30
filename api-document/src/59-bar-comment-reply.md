# 回复网吧评论

* POST `/capi.php`
* c `59`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| comment_id | int | 评论id |
| to_id(可选) | int | 评论对象id | 如果是直接回复评论可不传 |
| content | string | 评论内容 |

## 返回参数
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| barid | int | 网吧id |
| from_uid | int | 回复人uid |
| content | string | 回复内容 |
| addtime | int | 回复时间 |
| from_nickname | string | 回复人昵称 |
| from_face | string | 回复人头像 |
| to_uid | int | 回复评论的回复的id | 只有回复评论的回复的时候才存在 |
| to_nickname | string | 回复评论的回复的回复人昵称 | 只有回复评论的回复的时候才存在 |
| to_face | string | 回复评论的回复的回复人头像 | 只有回复评论的回复的时候才存在 |
| reply_id | int | 回复id |

## 返回实例

```JSON
{
    "status": 1,
    "info": "",
    "data": {
        "reply_id": "53",
        "barid": 2,
        "comment_id": 1,
        "content": "这123456广泛大锅饭帮的,",
        "from_uid": "10444",
        "addtime": 1495700461,
        "from_nickname": "游客1704261735327682",
        "from_face": "http://192.168.2.196/Upload/face/sys/1.jpg",
        "to_uid": 10444,
        "to_nickname": "游客1704261735327682",
        "to_face": "http://192.168.2.196/Upload/face/sys/1.jpg"
    }
}
```
