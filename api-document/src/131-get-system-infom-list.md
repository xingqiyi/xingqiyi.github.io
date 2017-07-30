# 获取系统通知消息列表

* POST `/capi.php`
* c `131`

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
| count | int | 未读消息总数 |  |
| data | object array | 系统通知消息列表 |  |

## data
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | int | 系统通知的id |  |
| type_id | int | 系统通知类型id |  |
| type_name | string | 系统通知类型名称 |  |
| title | string | 系统通知的标题 |  |
| content | string | 系统通知的内容 |  |
| time | string | 系统通知的发送时间 |  |

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
          "type_id" : 1,
          "type_name" : "意见反馈",
          "title" : "意见反馈有回复啦",
          "content" : "就这样吧",
          "time" : "2017-05-14 20:00:00"
      }
    ]
  }
}
```
