## 1  windows android 每次  下载 gradle的问题

Exception in thread “main” java.net.ConnectException: Connection timed out: conn
ect

```
手动下载:
http://services.gradle.org/distributions/gradle-2.4-all.zip


修改改{MyProject-path}\android\gradle\wrapper\gradle-wrapper里的distributionUrl为本地路径：

distributionUrl=file:///D:/xingqiyi/RN/Shop-React-Native-master/android/gradle-2.4-all.zip

```







