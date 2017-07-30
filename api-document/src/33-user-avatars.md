# 用户的所有头像

* POST `/capi.php`
* c `33`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| data | string | 头像列表 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    "http://192.168.2.196/Upload/face/sys/0.jpg",
    "http://192.168.2.196/Upload/face/sys/1.jpg",
    "http://192.168.2.196/Upload/face/sys/2.jpg",
    "http://192.168.2.196/Upload/face/sys/3.jpg",
    "http://192.168.2.196/Upload/face/sys/4.jpg",
    "http://192.168.2.196/Upload/face/sys/5.jpg",
    "http://192.168.2.196/Upload/face/sys/6.jpg",
    "http://192.168.2.196/Upload/face/sys/7.jpg",
    "http://192.168.2.196/Upload/face/sys/8.jpg",
    "http://192.168.2.196/Upload/face/sys/9.jpg",
    "http://192.168.2.196/Upload/face/sys/10.jpg",
    "http://192.168.2.196/Upload/face/sys/11.jpg",
    "http://192.168.2.196/Upload/face/sys/12.jpg",
    "http://192.168.2.196/Upload/face/sys/13.jpg",
    "http://192.168.2.196/Upload/face/sys/14.jpg",
    "http://192.168.2.196/Upload/face/sys/15.jpg",
    "http://192.168.2.196/Upload/face/sys/16.jpg",
    "http://192.168.2.196/Upload/face/sys/17.jpg",
    "http://192.168.2.196/Upload/face/sys/18.jpg",
    "http://192.168.2.196/Upload/face/sys/19.jpg",
    "http://192.168.2.196/Upload/face/sys/20.jpg"
  ]
}
```
