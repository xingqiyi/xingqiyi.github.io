# React-native  android


## 0 调试

>你可以通过摇晃设备或是选择iOS模拟器的"Hardware"菜单中的"Shake Gesture"选项来打开开发菜单。另外，如果是在iOS模拟器中运行，还可以按下Command⌘ + D 快捷键，Android模拟器对应的则是Command⌘ + M（windows上可能是F1或者F2）。

## 1  windows android 每次  下载 gradle的问题

Exception in thread “main” java.net.ConnectException: Connection timed out: conn
ect

> 手动下载:
http://services.gradle.org/distributions/gradle-2.4-all.zip

> 修改改 {MyProject-path}\android\gradle\wrapper\gradle-wrapper 里的 distributionUrl 为本地路径：
distributionUrl=file:///D:/xingqiyi/RN/Shop-React-Native-master/android/gradle-2.4-all.zip

## 2    failed to find Build Tools revision 25.0.2    android sdk 版本 问题

```css
见rn 初始化 步骤
Android Studio
Tools -> Android -> SDK Manager
```

## 3 react-native-starter   中  API_KEY not definded

```css
issue:
Let copy .env.sample to .env file and change the configuration variables
.env.sample 文件  改名为  .env
```


## 4  命令行翻墙
```css
set HTTP_proxy=http://127.0.0.1:62497
set HTTPS_proxy=http://127.0.0.1:62497
```



## 5   Error: EPERM: operation not permitted,

```
网络问题
```

## 6  很慢: Resolving dependencies ':app:_releaseApk'

```css
./android/build.gradle
change your jcenter() to mavenCentral() :


buildscript {
    repositories {
        // jcenter()
         mavenCentral()
    }

```


## 7 expected a component class, got [object Object]

```js
    组件大小写的问题
    JSX中 不能使用 div 等 html
```






