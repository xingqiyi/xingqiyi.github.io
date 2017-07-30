# 找回密码

* POST `/capi.php`
* c `11`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| phone | string | 手机号 |
| code | string | 验证码 |
| password | string | 新密码 | MD5(  NEW_CHECKKEY_PRE+ username + paypwd) |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| code | int | 状态 | 1表示操作成功 |
| message | string | 提示信息 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "data": [],
    "code": 1,
    "message": "操作成功"
  }
}
```
