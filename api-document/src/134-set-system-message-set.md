# 设置系统推送配置

* POST `/capi.php`
* c `134`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| type | string | 配置选项的英文名称 |  |
| value | int | 配置选项的值 |  |

## 返回参数

## data


## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": "操作成功"
}
```
