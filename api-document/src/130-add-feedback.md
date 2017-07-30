# 提交意见反馈

* POST `/capi.php`
* c `130`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| content | string | 意见反馈内容 |  |
| contact | string | 联系方式 |  |
| type | int | 反馈意见的类型 1 为APP的意见反馈，2 为领航网吧系统的意见反馈 | APP固定返回为1 |

## 返回参数


## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": "操作成功"
}
```
