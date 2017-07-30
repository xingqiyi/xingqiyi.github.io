# 我的资料

* POST `/capi.php`
* c `91`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| face | string | 用户头像 |
| nickname | string | 用户昵称 |
| sex | int | 性别 | 1：男，2：女，0：保密 |
| phone | string | 用户绑定的手机号 |
| netcard | string | 上网卡号 |
| qq | string | qq号 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "face": http:\/\/192.168.2.196\/Upload\/face\/sys\/6.jpg,
    "nickname": 小罗,
    "sex": 1,
    "phone": "15871790230",
    "netcard": '',
	"qq": ''
  }
}
```
