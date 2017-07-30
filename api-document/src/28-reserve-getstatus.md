# 确定确定选座锁屏是否成功

* POST `/capi.php`
* c `28`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| reserve_id | string | 订座订单编号id |
| sendnum | string | 秒数，以1开始 |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| reserve_id | int | 订座订单编号id |
| price | int | 所有的客户机一小时多少前，单位分 |
| overtime_res | 锁屏成功后的超时时间，也是支付超时  |
| barname | string | 订座的网吧名 |
| reserve_time | string | 订座时间 |


## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {
    "reserve_id ": "8",
	"price ": "900",
	"overtime_res ": "600",
	"barname ": "小罗测试",
	"reserve_time ": "1495532635"
  }
}
```