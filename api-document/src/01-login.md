# 登录

* POST `/capi.php`
* c `1`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| username | string | 用户名 |
| key1 | string | 登录key | key1 = MD5(  NEW_CHECKKEY_PRE+ username + pass ) |
| from | string | 请求来源 | web;phone;client  默认为web |
| device_id | string | 设备id | 默认为空 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | session id |
| id | string | 用户ID |
| nickname | string | 昵称 |
| username | string | 用户名 |
| qq | string | qq |
| email | string | email |
| phone | string | 手机号 |
| netcard | string | 上网卡 |
| truename | string | 实名 |
| idcard | string | 身份证 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "sid": "anodstcp8rjtaebjhsoppvcm92",
    "id": "10030",
    "nickname": "游客1702151809256950",
    "username": "xiaoluobo",
    "qq": "",
    "email": "",
    "phone": "",
    "netcard": "",
    "truename": "",
    "idcard": ""
  }
}
```
