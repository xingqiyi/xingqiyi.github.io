# 手机号登陆

* POST `/capi.php`
* c `6`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| phone | string | 手机号 |
| code | string | 验证码 | 手机短信里面的验证码 |
| from | string | 请求来源 | web;phone;client  默认为web |
| device_id | string | 设备id | 默认为空 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid |  |
| id | string | 用户id |
| nickname | string | 昵称 |
| qq | string | qq |
| email | string | email |
| phone | string | phone |
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
    "id": "10034",
    "nickname": "游客1702160930299431",
    "username": "phone-15871750881",
    "qq": "",
    "email": "",
    "phone": "15871750881",
    "netcard": "",
    "truename": "",
    "idcard": ""
  }
}
```
