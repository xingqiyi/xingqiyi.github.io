# React-native  android


## 0 调试

>你可以通过摇晃设备或是选择iOS模拟器的"Hardware"菜单中的"Shake Gesture"选项来打开开发菜单。另外，如果是在iOS模拟器中运行，还可以按下Command⌘ + D 快捷键，Android模拟器对应的则是Command⌘ + M（windows上可能是F1或者F2）。

## 1  windows android 每次  下载 gradle的问题

Exception in thread “main” java.net.ConnectException: Connection timed out: conn
ect

> 手动下载:
http://services.gradle.org/distributions/gradle-2.4-all.zip

> 修改改 {MyProject-path}\android\gradle\wrapper\gradle-wrapper 里的 distributionUrl 为本地路径：
distributionUrl=file:///D:/xingqiyi/RN/gradle-2.4-all.zip



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


## 8 could not get batchedbridge make sure

https://stackoverflow.com/questions/34175416/how-to-use-offline-bundle-on-android-for-react-native-project

```css
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

```

- 1 when server start, open next terminal with same path as project path

- 2 copy and paste this command: Before you copy and paste command in command propmt, make assets folder in project respective path as: android/app/src/main/assets

  > paste this command in command prompt and run:

  > react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

- 3 Then in assets folder there will appear file as index.android.bundle

- 4 Finally, run command: react-native run-android(while building new offline apk you need not to start server, your offline js file will help you to build apk file.)

- 5 Final, apk now build is ready for running in different devices(run apk from app/src/build/debug.apk).

- 6 Sometimes newly made apk will run without showing images, If application runs without image , then copy and paste the specific image resource folder into android/app/src/main/assets/(image source folder)

- 7 Again rerun application and thus build apk is ready for running.


## 9 android 打包步骤

- 1 添加文件夹: \android\app\src\main\assets
- 2 运行 react-native run-android
- 3 运行 react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
- 4 运行 react-native run-android
- 5 \android\app\build\outputs\apk\app-debug.apk
- 6 如果图片异常,复制图片到 assets文件夹,rerun