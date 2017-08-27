

## 1

初始化  版本指定
react-native init AwesomeProject  --version 0.44.3





## 2 no bundle url present make sure

```
Edit <your_project_folder>/ios/<project_name>/AppDelegate.m and change the jsCodeLocation variable as follows:

jsCodeLocation =
    [NSURL URLWithString:@"http://127.0.0.1:8081/index.ios.bundle?platform=ios&dev=true"];
```



 ## 3

 在开发者菜单中选择"Debug JS Remotely"选项，
 即可以开始在Chrome中调试JavaScript代码。点击这个选项的同时会自动打开调试页面 http://localhost:8081/debugger-ui.




## 4 ios 真机 调试

RCTWebSocketExecutor.m
localhost 改 ip

AppDelegate.m   改为 ip
jsCodeLocation =   [NSURL URLWithString:@"http://192.168.1.255:8081/index.ios.bundle?platform=ios&dev=true"];



## 5
真机调试 设置 team 报错
Failed to create provisioning profile. The app ID

选择 ssr



## 6  真机调试时  打包时

Please unlock your device and reattach. (0xE80000E2).

解决方法是：打开手机设置->通用->还原->还原位置与隐私；
然后会有弹窗提示你是否信任此电脑，点击信任，重启Xcode之后，运行项目到手机上
解决办法来自于：iOS中项目运行到真机上提示设备被锁定解决方法Development cannot be enabled while your device is locked. ，谢谢





## 7  No devices are booted.

重启模拟器

Boot the respective simulator manually
Go to spotlight search and start to type simulator
When spotlight presents the search result, choose the simulator app and hit Enter
Go to simulator app's menu: Hardwire -> Device -> iOS 10.0 -> iPhone 6 and select it
Reset
Go to simulator app's menu: Simulator -> Reset Content and Settings...
Retry
Command react-native run-ios again



## 8 Print: Entry, ":CFBundleIdentifier", Does Not Exist
```
rm -rf ~/.rncache

```


## 9 模拟器 与真机直接的切换   打包时需改成真机

``` 
AppDelegate.m
#模拟器
 jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
#真机：
jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"index.ios" withExtension:@"jsbundle"];
```

## 10 

## 11 no dimension set for key window

```
删掉 ios/build 重运行
```


## 12 根目录文件不能叫 index.js   猜测应该是与 index.ios.js 冲突

## 13 打包
```
打包 需要在 ios   文件夹; android 需要新建assets 文件夹
 
 http://blog.csdn.net/sinat_34380438/article/details/76614309


```