# 确认选座

* POST `/capi.php`
* c `25`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| client_id | string | 客户机编号id |
| barid | string | 需要订座的网吧id |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| reserve_id | int | 订座订单编号id |


## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "reserve_id ": "8"
  }
}
```
