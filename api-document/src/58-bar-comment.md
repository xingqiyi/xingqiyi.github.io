# 评论网吧

* POST `/capi.php`
* c `58`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| barid | int | 网吧id |
| content | string | 评论内容 |
| images | string array | 评论图片 |
| score | string | 评论评分 |

## 返回参数
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| barid | int | 网吧id |
| score | string | 评分 |
| content | string | 评论内容 |
| addtime | int | 评论时间 |
| uid | int | 用户uid |
| nickname | string | 评论人昵称 |
| face | string | 评论人头像 |
| comment_id | int | 评论id |

## 返回实例

```JSON
{
    "status": 1,
    "info": "",
    "data": {
        "barid": 2,
        "score": "89.5",
        "content": "fdsfdsf的合法的fdfdsfds身份，不盒饭给fdsfdsf房贷首付的fdsfdsfsf,评论2",
        "addtime": 1495682825,
        "uid": "10444",
        "nickname": "游客1704261735327682",
        "face": "http://192.168.2.196/Upload/face/sys/1.jpg",
        "comment_id": "138"
    }
}
```
