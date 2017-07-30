# 网吧活动详情

* POST `/capi.php`
* c `55`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| barid | int | 网吧id |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| name | string | 网吧名 |
| score | string | 评分 |
| activities | object array | 优惠活动列表 | [详细说明](#activity) |

### activity

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| title | string | 优惠标题 |
| type | int | 优惠类型 | 1:惠,2:充,3:首 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "name": "红牛网吧",
    "followed": 0,
    "score": "5",
    "activities": [
      {
        "title": "上午8:00-12:00包时段上网只要10元！",
        "type": 1
      },
      {
        "title": "本网咖新用户可领取3-5元网费代金券！",
        "type": 2
      }
    ]
  }
}
```
