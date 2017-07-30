# 自动登陆

* POST `/capi.php`
* c `16`

## 请求参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |
| userid | int | 用户id |
| autokey | string | 自动登陆表示 | 登陆成功后返回的 |
| device_id | string | 设备id |

## 返回参数

| 参数名 | 参数类型 | 参数说明 | 备注 |
| :---- | :----| :----| :---- |


## 返回实例

```JSON
{
    "status":1,
    "info":"",
    "data":{
        "haspaypass":0,
        "sid":"r9gj4drdiks8rm554do5lhsge3",
        "id":10585,
        "nickname":"疯癫的菇凉666",
        "username":"phone:13452018301",
        "qq":"",
        "email":"",
        "phone":"13452018301",
        "netcard":"510225123456789",
        "truename":"",
        "idcard":"",
        "device_id":"1234567",
        "ip":"192.168.2.196",
        "autoKey":"Da+RAr9jwx8e2DNzDCv\/HJyb5NIjr5KVaUy5GFSLmlOmymg6wC3s3RAlG\/7LJJpT9Q+bmxicihceVSOjQ2lv4D8q21Rw9gVY6P6rXfHkae1R7IFtcw2fYATS\/Kf87gbi",
        "atte_barid":"",
        "lastbarid_detail":"1"
    }
}
```