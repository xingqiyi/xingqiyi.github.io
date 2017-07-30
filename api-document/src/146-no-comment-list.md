# 获取待评论列表

* POST `/capi.php`
* c `146`

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
| barid | int | 网吧id |  |
| name | string | 网吧名称 |  |
| logo | string | 游戏角色所属游戏id |  |
| online_time | string | 上网时间 |  |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    {
      "barid" : 1,
      "name" : "沸腾网吧",
      "logo" : "http://img.wwwscn.com/logo/sys/netbar_logo.png",
      "online_time" : "2017-05-12 18:00:00",
    }
  ]
}
```
