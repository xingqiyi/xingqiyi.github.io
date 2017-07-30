# 绑定游戏角色

* POST `/capi.php`
* c `141`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| name | string | 游戏角色名称 |  |
| game_id | int | 游戏id |  |
| server_id | int | 服务器id |  |

## 返回参数

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": "操作成功"
}
```
