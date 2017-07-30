# 重置支付密码

* POST `/capi.php`
* c `14`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| phone | string | 手机号 |
| code | string | 手机号验证码 |
| paypwd | string | 支付密码 | MD5(  NEW_CHECKKEY_PRE+ username + paypwd) |

## 返回参数

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": []
}
```
