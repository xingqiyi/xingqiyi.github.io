# React-Native 的 android 开发环境配置(windows)


## JS环境

### 1. Chocolatey
```
管理员打开 cmd
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```

#### 2. python
```
choco install python2
```

### 3. nodejs
```
choco install nodejs.install
```

### 4. npm 设置
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

### 5. yarn, rn命令行工具安装
```
npm install -g yarn react-native-cli
```

### 6. yarn 设置
```
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

### 7. 系统环境变量
```
npm:
C:\Users\admin\AppData\Roaming\npm

nodejs:
C:\Program Files\nodejs\
C:\Users\admin\AppData\Roaming\npm\node_modules

android sdk:
D:\Users\admin\AppData\Local\Android\sdk\tools
```

## Android 环境配置  参照

http://reactnative.cn/docs/0.46/getting-started.html#content

Android Studio 章节


## 代码编写


### 新建项目方式一

```
react-native init ProjectName
cd ProjectName
react-native run-android
```

### 新建项目方式二  expo

```
create-react-native-app AwesomeProject

cd AwesomeProject
npm start
```

- android 与 windows 同局域网
- android 机器上安装 app Expo
- 使用该app 扫码 上一笔步骤生成的二维码 即可










