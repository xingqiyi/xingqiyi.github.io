# 获取创建角色时相关数据

* POST `/capi.php`
* c `136`

## v2.0 添加

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| sid | string | sessionid | 登录成功后返回 |
| id | string | 用户id | 登录成功后返回 |
| game_id | int | 游戏的id | 1 英雄联盟，2 守望先锋 |

## 返回参数
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| count | int | 未读消息总数 |  |
| data | object array | 游戏相关数据列表 |  |

## data
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| server_list | object array | 服务器列表 |  |

## server_list
| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| id | int | 服务器id |  |
| server_name | string | 服务器名称 |  |

## 返回实例

```JSON
{
  "status": 1,
  "info": "",
  "data": {   
    "count": 1,
    "data" : {
      "server_list" : [],
    }  
  }
}
```
