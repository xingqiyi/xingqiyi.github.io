# 获取游戏角色列表

* POST `/capi.php`
* c `144`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| flag | boolean | 刷新标识 | 是否需要刷新 true 是，false 不是。默认为false |

## 返回参数
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| data | object array | 游戏角色列表 |  |

## data
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | int | 游戏角色id |  |
| role_name | string | 游戏角色名称 |  |
| role_server | string | 游戏角色所属服务器名称 |  |
| role_server_id | int | 游戏角色所属服务器id |  |
| role_level | string | 游戏角色等级名称 |  |
| role_game | string | 游戏角色所属游戏名称 |  |
| role_game_id | int | 游戏角色所属游戏id |  |
| is_true | int | 角色信息是否被认证 | 1 未认证，2 认证 |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": [
    {
      "id" : 1,
      "role_name" : "刀剑丶剑非刀",
      "role_server" : "艾欧尼亚",
      "role_server_id" : 1,
      "role_level" : "青铜V",
      "role_game" : "英雄联盟",
      "role_game_id" : 1,
      "is_true" : 0,
    }
  ]
}
```
