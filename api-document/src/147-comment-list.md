# 获取已评论列表

* POST `/capi.php`
* c `147`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| page | int | 页数 |  |

## 返回参数
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| data | object array | 待回复列表 |  |

## data
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | int | 评论id |  |
| bar_name | string | 网吧名称 |  |
| addtime | string | 评论时间 |  |
| score | float | 评分 |  |
| status | int | 评论状态 | 1 正常，2 被警告 |
| images | string array | 图片列表 |  |
| reply_number | int | 总回复数 |  |
| reply_list | object array | 回复列表 |  |

## reply_list
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | int | 回复id |  |
| addtime | string | 回复时间 |  |
| username | string | 回复者名称 |  |
| userid | int | 回复者id |  |
| content | string | 回复内容 |  |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    {
      "id" : 1,
      "bar_name" : "沸腾网吧",      
      "addtime" : "2017-05-12 18:00:00",
      "content" : "这家网吧真好",
      "images" : {"http://img.wwwscn.com/logo/sys/netbar_logo.png", "http://img.wwwscn.com/logo/sys/netbar_logo.png"},
      "status" : 1,
      "reply_number" : 0,
      "reply_list" : [
        {
          "id" : 1,
          "addtime" : "2017-05-12 18:00:00",
          "username" : "我是侠者",
          "userid" : 10524,
          "content" : "这个评论真水",

        }
      ],
    }
  ]
}
```
