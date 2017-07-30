# 注册账号

* POST `/capi.php`
* c `3`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| username | string | 用户名 |
| password | string | 密码 |
| repassword | string | 密码 |
| passtype | int | 加密方式 | 0;1  秘密是否加密1: 已经MD5后的密文 主要是给自己的应用使用的  0 : 使用 encrypt 方法加密 其中key 为 APP_KEY 前24位(合作方)(默认) |
| from | string | 请求来源 | web;phone;client  默认为web |
| device_id | string | 设备id | 默认为空 |

### passtype

```
password(密文passtype=1) = md5( check_pre + username +password(明文))
password(密文passtype=0) = encrypt(password(明文) , substr(APP_KEY,0,8))  
```

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| data | object | 用户数据 | [详细说明](#data) |
| code | int | 状态码 | 1 表示成功 |
| message | string | 提示消息 |

### data

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| userid | string | 用户id |
| nickname | string | 昵称 |
| ssid | string | session id |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "data": {
      "userid": "10033",
      "nickname": "游客1702160922171124",
      "ssid": "609755de78de2554955c17673faafd0b",
      "sstime": 1487208137
    },
    "code": 1,
    "message": "操作成功"
  }
}
```
