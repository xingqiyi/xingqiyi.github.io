# 发送手机短信

* POST `/capi.php`
* c `4`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| type | string | 短信类型 | login:登录验证 findpass:找回密码 reg:手机注册  bindphone:绑定手机 findpaypass:重置支付密码 cancelphone:取消手机绑定 |
| userid | string | 用户ID | 登录和找回密码,注册不需要 |
| ssid | string | sessionID | 登录和找回密码注册不需要 |
| phone | string | 手机号 | 登录,找回密码,绑定手机,注册需要 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| code | int | 状态码 | 1 表示成功 |
| message | string | 提示消息 |

## 返回实例

```JSON
{
  "data": [],
  "code": 1,
  "message": "操作成功"
}
```
