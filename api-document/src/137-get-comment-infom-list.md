# 获取留言通知消息列表

* POST `/capi.php`
* c `137`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| page | string | 消息页数 |  |

## 返回参数
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| count | int | 未读消息总数 |  |
| data | object array | 回复通知消息列表 |  |

## data
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | int | 回复通知的id |  |
| reply_id | int | 被回复的评论id |  |
| bar_id | int | 网吧id | 当type为2的时候bar_id为0 |
| type_id | int | 回复通知类型 | 1 点评回复，2 竞技游资讯回复 |
| title | string | 回复通知的标题 |  |
| content | string | 回复通知的内容 |  |
| time | string | 回复通知的发送时间 |  |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {   
    "count": 1,
    "data" : [
      {
        "id" : 1,
        "reply_id" : 1,
        "bar_id" : 1,
        "type_id" : 1,
        "title" : "XXX回复你啦",
        "content" : "就这样吧",
        "time" : "2017-05-14 20:00:00",
      }
    ]
  }
}
```
