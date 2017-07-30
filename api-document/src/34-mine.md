# 我的界面

* POST `/capi.php`
* c `34`

# v2.0 新接口
* c `145`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| nickname | string | 昵称 |
| face | string | 头像 |头像url|
| yue | string | 余额 |
| msgstatus | int | 消息状态 |   0:  当前没有未读消息，1： 当前有未读消息	 |
| commentstatus | int | 我的点评 |   0:  当前没有新的回复或待点评，1： 当前有新的回复或待点评	 |
| orderstatus | int | 订单状态 | 0:  当前没有新的订单，1： 当前有未结束的订座订单	 |
| awardstatus | int | 获奖状态 | 0:  当前没有新的获奖信息，1： 当前有新的获奖信息	 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "id": "10033",
    "nickname": "fdsfds",
    "face": "http://192.168.2.196/Upload/face/sys/5.jpg",
    "yue":"22.5",

    "msgstatus": 0,
    "commentstatus": 0,
    "orderstatus": 1,
    "awardstatus": 1
  }
}
```
