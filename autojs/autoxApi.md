# 自动化相关 API 已经支持 Autox.js

# autox.js Api

## 阅读须知

- 由于 autox.js 使用的 Rhino JS 引擎，对异步支持的并不好，所以在 autox.js 中，所有的 api 都是同步的方式进行，所以无需 async await

## addErrorListener(callback)

功能介绍：添加全局错误监听

- 参数：
  - callback 回调
- 示例：

```js
autobot.addErrorListener(function (errorMsg) {
  console.log(errorMsg);
});
```

## initWebSocket()

功能介绍：初始化 websocket，必须先调用此方法初始化后，才能收到剪切板，屏幕方向，屏幕画面监听回调

- 参数：
  - callback 回调
- 示例：

```js
//先添加监听
autobot.addClipTextChangeListener(function (clipText) {
  console.log("粘贴板发生改变，新的剪切板值为" + clipText);
});
//在初始化websocket连接
autobot.initWebSocket();
```

## resetWebSocket()

功能介绍：重置 websocket,会断开当前的 websocket 连接

- 参数：
- 示例：

```js
autobot.resetWebSocket();
```

## wsSend(data)

功能介绍：发送控制信息，可以参考[Autobot 文档部分-websocket 部分](https://doc.tntok.top/#/zh-cn/wsApi)

- 参数：
- 示例：

```js
//在屏幕x 100，y 100的坐标处按下
autobot.wsSend({
  action: 1,
  touch_event: 0,
  x: 100,
  y: 100,
});
//移动到屏幕x 120，y 120的坐标
autobot.wsSend({
  action: 1,
  touch_event: 2,
  x: 120,
  y: 120,
});
//在屏幕x 120，y 120的坐标处抬起
autobot.wsSend({
  action: 1,
  touch_event: 1,
  x: 120,
  y: 120,
});
```

## addClipTextChangeListener(callback)

功能介绍：重置 websocket,会断开当前的 websocket 连接

- 参数：
  - callback 回调
- 示例：

```js
autobot.resetWebSocket();
```

## addScreenOrentationChangeListener(callback)

功能介绍：添加屏幕方向发生改变的监听，方向发生改变，屏幕的宽高度会进行调换

- 参数：
  - callback 回调
- 示例：

```js
autobot.addScreenOrentationChangeListener(function (
  width,
  height,
  rotation,
  isLandscape
) {
  console.log(
    `屏幕宽度:${width}，屏幕高度${height}，屏幕方向${rotation}，是否横屏${isLandscape}`
  );
});
```

## addNotificationChangeListener(callback)

功能介绍：添加通知改变监听

- 参数：
  - callback 回调
  - 通知会携带更多参数，可以参考[AutoBot 文档-Websocket API-接收信息](https://doc.tntok.top/#/zh-cn/wsApi?id=%e6%8e%a5%e6%94%b6%e4%bf%a1%e6%81%af)
- 示例：

```js
autobot.addNotificationChangeListener(function (notoficationMsg) {
  console.log(notoficationMsg);
});
/*
    {
        "notification_package": "com.xxx.xxx",
        "notification_title": "通知标题",
        "notification_content": "hello",
        ...
    }
*/
```

## addScreenChangeListener(callback)

功能介绍：添加屏幕图像监听，需要配合 wsSend 发送屏幕控制帧

- 参数：
  - callback 回调
- 示例：

```js
autobot.addNotificationChangeListener(function (jpgFramBuffer) {
  console.log(jpgFramBuffer);
});
```

## changeDevice(host, isSSL)

功能介绍：修改服务的地址,默认为本机的地址

- 参数：
  - host ip，默认为`127.0.0.1`
  - isSSL，默认为 false
- 示例：

```js
autobot.addNotificationChangeListener(function (jpgFramBuffer) {
  console.log(jpgFramBuffer);
});
```

## hello()

功能介绍：可以判断服务器是否连通

- 参数：
  - 无
- 返回：
  - Boolean
- 示例：

```js
let isConnected = autobot.hello();
if (isConnected) {
  console.log("autobot服务已启动");
}
```

## version()

功能介绍：获取 autobot 版本

- 参数：
  - 无
- 返回：
  - String
- 示例：

```js
let version = autobot.version();
console.log(version); //12405
```

## getActiveInfo()

功能介绍：获取 autobot 服务信息，可以用来判断服务是否到期

- 参数：
  - 无
- 返回：
  - exptime 服务过期时间
  - validate 设备校验是否通过
- 示例：

```js
let activeInfo = autobot.getActiveInfo();
console.log(activeInfo);
```

## getDeviceId()

功能介绍：获取 Autobot 给设备分配的唯一 ID

- 参数：
  - 无
- 返回：
  - deviceId 设备 Id
- 示例：

```js
let deviceId = autobot.getDeviceId();
console.log(deviceId);
```

## screenInfo()

功能介绍：获取设备的屏幕信息

- 参数：
  - 无
- 返回：
  - width 屏幕宽度
  - height 屏幕高度
  - rotation 屏幕方向
  - isLandscape 是否横屏
- 示例：

```js
let screenInfo = autobot.screenInfo();
console.log(screenInfo);
```

## getSystemInfo()

功能介绍：返回设备的硬件信息系统信息（内存信息，屏幕信息及存储信息）

- 参数：
  - 无
- 返回：
  - systemInfo 设备的硬件，系统信息，可以参考[Autobot 文档-获取系统信息部分](https://doc.tntok.top/#/zh-cn/Api?id=%e8%8e%b7%e5%8f%96%e7%b3%bb%e7%bb%9f%e4%bf%a1%e6%81%af)
- 示例：

```js
let systemInfo = autobot.getSystemInfo();
console.log(systemInfo);
```

## screenJson()

功能介绍：以 JSON 树格式返回当前屏幕的布局信息

- 参数：
  - 无
- 返回：参考[Autobot 文档-屏幕树 json](https://doc.tntok.top/#/zh-cn/Api?id=%e5%b1%8f%e5%b9%95%e6%a0%91json)

- 示例：

```js
let screenJson = autobot.screenJson();
console.log(screenJson);
```

## screenXml()

功能介绍：以 xml 格式返回当前屏幕的布局信息

- 参数：
  - 无
- 返回：参考[Autobot 文档-屏幕树 xml](https://doc.tntok.top/#/zh-cn/Api?id=%e5%b1%8f%e5%b9%95%e6%a0%91xml)

- 示例：

```js
let screenXml = autobot.screenXml();
console.log(screenXml);
```

## screenShotBase64()

功能介绍：以 base64 字符串方式返回屏幕截图

- 参数：
  - 无
- 返回：base64 字符串格式图片

- 示例：

```js
let screenBase64Img = autobot.screenShotBase64();
console.log(screenBase64Img);
```

## screenShot()

功能介绍：以 arrayBuffer 格式返回屏幕截图

- 参数：
  - 无
- 返回：arrayBuffer jpg 格式图片

- 示例：

```js
let bufferImg = autobot.screenShot();
console.log(bufferImg);
```

## screenRotation()

功能介绍：返回当前屏幕的方向

- 参数：
  - 无
- 返回：

  - 0: 表示竖直方向（垂直向上），通常为纵向模式。
  - 1: 表示逆时针旋转 90 度，横向模式，屏幕顶部位于右侧。
  - 2: 表示旋转 180 度，通常为颠倒模式，屏幕顶部位于底部。
  - 3: 表示顺时针旋转 90 度，横向模式，屏幕顶部位于左侧。

- 示例：

```js
let screenRotation = autobot.screenRotation();
console.log(screenRotation);
```

## getAllContact(phoneNumber)

功能介绍：获取联系人

- 参数：
  - phoneNumber，默认为 \* 返回所有联系人，传指定号码获取指定联系人
- 返回：

- 示例：

```js
let contacts = autobot.getAllContact();
console.log(contacts);
```

## deleteContact(phoneNumber)

功能介绍：删除联系人

- 参数：
  - phoneNumber，默认为 \* 代表所哟联系人，传指定号码删除指定联系人
- 返回：
  Number 成功删除的条目数
- 示例：

```js
let delCount = autobot.deleteContact();
console.log(delCount);
```

## getClipText()

功能介绍：获取粘贴板数据

- 参数：
  - 无
- 返回：
  String 粘贴板内容
- 示例：

```js
let delCount = autobot.deleteContact();
console.log(delCount);
```

## clearText()

功能介绍：清除当前获取焦点的输入框内容

- 参数：
  - 无
- 返回：
  Boolean
- 示例：

```js
let isClear = autobot.clearText();
console.log(`清除text成功${isClear}`);
```

## startRecoreScreen(limit)

功能介绍：此接口会在设备后台启动录屏程序，limit 代表最长录制时长（为了防止用户开启录屏后忘记停止，导致手机存储爆满，android 自带的录屏时长默认为 180s，超过 180s 会自动中止），你可以修改此参数来达到更长时间的屏幕录制。
若需要中途定制可以调用结束录屏接口，录屏的存储位置为`/sdcard/screen.mp4`

- 参数：
  - limit 默认 180 秒 (录屏限制时长，单位秒)
- 返回：
- 示例：

```js
autobot.startRecoreScreen();
```

## stopRecoreScreen()

功能介绍：结束后台的录屏任务，录屏文件默认保存路径为`/sdcard/screen.mp4`

- 参数：
  - limit 默认 180 秒 (录屏限制时长，单位秒)
- 返回：
  - 无
- 示例：

```js
autobot.stopRecoreScreen();
```

## turnScreenOff()

功能介绍：让手机熄屏，但是远程屏幕控制不受影响

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
autobot.turnScreenOff();
```

## turnScreenOn()

功能介绍：让手机亮屏，手机屏幕锁屏状态下会点亮屏幕

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
autobot.turnScreenOn();
```

## getIp()

功能介绍：获取当前手机的 Ip 地址

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
let ips = autobot.getIp();
console.log("手机目前IP:" + ips);
```

## getAllSms(phoneNumber)

功能介绍：获取所有的短信

- 参数：
  - phoneNumber 默认为\* 获取所有的短信，传入指定号码可以获取指定号码的短信
- 返回：
  - 无
- 示例：

```js
let sms = autobot.getAllSms(10010);
console.log("10010短信:" + sms);
```

## deleteSms()

功能介绍：由于 android 系统限制，必须由短信 app 进行删除

## getDisplayName()

功能介绍：获取设备的自定义名称

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
let displayName = autobot.getDisplayName();
console.log("设备的自定义名称:" + displayName);
```

## setDisplayName(displayName)

功能介绍：设置设备的自定义名称

- 参数：
  - displayName 自定义的设备名称
- 返回：
  - 无
- 示例：

```js
autobot.setDisplayName("设备1");
```

## getTopActivity()

功能介绍：获取当前设备顶层 Activity

- 参数：
  - 无
- 返回：
  - packageName：包名
  - className：当前顶层 activity 的类名
  - main：当前包名的启动类（启动入口）
- 示例：

```js
let topActivityInfo = autobot.getTopActivity();
console.log(topActivityInfo);
```

## getStartActivity(packageName)

功能介绍：根据包名获取启动类

- 参数：
  - 无
- 返回：
  - packageName：包名
  - className：当前顶层 activity 的类名
  - main：当前包名的启动类（启动入口）
- 示例：

```js
let startActivityClass = autobot.getStartActivity("com.tencent.mm");
console.log(startActivityClass);
```

## startPackage(packageName)

功能介绍：根据包名启动应用程序

- 参数：
  - packageName：包名
- 返回：
  - 无
- 示例：

```js
autobot.startPackage("com.tencent.mm");
```

## stopPackage(packageName)

功能介绍：根据包名停止应用程序

- 参数：
  - packageName：包名
- 返回：
  - 无
- 示例：

```js
autobot.stopPackage("com.tencent.mm");
```

## clearPackage(packageName)

功能介绍：根据包名清除应用数据，危险操作

- 参数：
  - packageName：包名
- 返回：
  - 无
- 示例：

```js
autobot.clearPackage("com.tencent.mm");
```

## getAllPackage()

功能介绍：获取所有的应用列表

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
let allPackages = autobot.getAllPackage();
for (let package of allPackages) {
  console.log(package);
}
```

## getPackageInfo(packageName)

功能介绍：根据包名获取应用程序详情

- 参数：
  - packageName：包名
- 返回：
  - 无
- 示例：

```js
let packageInfo = autobot.getPackageInfo("com.tencent.mm");
console.log(packageInfo);
```

## stopMusic()

功能介绍：停止后台播放音乐

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
autobot.stopMusic();
```

## cancelAllNotifications()

功能介绍：清除通知栏功能，由于 android 的安全限制，高版本的 android 已经无法调用清理通知栏的功能

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
autobot.cancelAllNotifications();
```

## callPhone(phoneNumber)

功能介绍：根据电话号码，拨打电话

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
autobot.callPhone(10010);
```

## endCall()

功能介绍：挂断电话

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
autobot.endCall();
```

## uploadUrl()

功能介绍：上传文件地址

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
let uploadUrl = autobot.uploadUrl();
console.log("上传地址为：" + uploadUrl);
```

## inputText(text)

功能介绍：输入文本，支持中文

- 参数：
  - text 要输入的文本内容
- 返回：
  - 无
- 示例：

```js
autobot.inputText("hello world");
```

## inputChar(text)

功能介绍：以按键模拟的方式输入，支持 ACSII 码，在一些特定情况下如果无法通过输入字符串来进行输入（比如某些支付界面），可以尝试此 api

- 参数：
  - text 要输入的文本内容，仅支持 ACSII 码（如字母数字）
- 返回：
  - 无
- 示例：

```js
autobot.inputText("hello world");
```

## execCmd(shell,timeout)

功能介绍：执行 shell 命令

- 参数：
  - shell 要执行的命令，支持\n 换行符
  - timeout 命令执行超时时间
- 返回：
  - 无
- 示例：

```js
let result = autobot.execCmd("pm list packages");
console.log(result);
```

## pressKeyCode(keyCode)

功能介绍：模拟按键

- 参数：
  - keyCode 也可以参考 android sdk 的 KeyEvent.java 类
- 返回：
  - 无
- 示例：

```js
autobot.pressKeyCode(4);
```

## insertContact(name, phoneNumber)

功能介绍：向通讯录插入新联系人

- 参数：
  - name 姓名
  - phoneNumber 电话
- 返回：
  - 无
- 示例：

```js
autobot.insertContact("张三", "13312341234");
```

## click(x, y)

功能介绍：在屏幕的 x，y 坐标执行点击

- 参数：
  - x，y 支持绝对坐标，比如传入 x=300，y=500
  - x，y 支持百分比，比如传入 x=0.5，y=0.5，那么这个点就是屏幕的正中间
- 返回：
  - 无
- 示例：

```js
autobot.click(0.5, 0.5);
```

## longClick(x, y)

功能介绍：在屏幕的 x，y 坐标执行长按

- 参数：
  - x，y 支持绝对坐标，比如传入 x=300，y=500
  - x，y 支持百分比，比如传入 x=0.5，y=0.5，那么这个点就是屏幕的正中间
- 返回：
  - 无
- 示例：

```js
autobot.click(0.5, 0.5);
```

## press(x, y, duration)

功能介绍：在屏幕的 x，y 坐标长按 duration 毫秒

- 参数：
  - x，y 支持绝对坐标，比如传入 x=300，y=500
  - x，y 支持百分比，比如传入 x=0.5，y=0.5，那么这个点就是屏幕的正中间
  - duration 毫秒
- 返回：
  - 无
- 示例：

```js
autobot.press(0.5, 0.5, 1000);
```

## swipe(x1, y1, x2, y2, duration)

功能介绍：从屏幕的 x1，y2 经过 duration 毫秒 滑动到 x2,y2 坐标

- 参数：
  - x1，y1,x2,y2 支持绝对坐标，比如传入 x1=300，y2=500,x2=300，y2=800
  - x1，y1 支持百分比，比如传入 x1=0.5，y1=0.5，x1=0.5，y1=0.7
  - duration 毫秒
- 返回：
  - 无
- 示例：

```js
autobot.swipe(0.5, 0.5, 0.5, 0.8, 3000);
```

## delFile(path)

功能介绍：删除一个路径的文件或者文件夹

- 参数：
  - path 路径，比如`/sdcard/demo1`
- 返回：
  - 无
- 示例：

```js
autobot.delFile("/sdcard/demo1");
```

## listFile(path)

功能介绍：列出一个文件夹

- 参数：
  - path 路径，比如`/sdcard`
- 返回：
  - Array[FileObj]
    - isExecute：是否可执行
    - isFile：是否时文件，否则是文件夹
    - isRead：是否可读
    - isWrite：是否可写
    - lastModified：最后一次修改时间
    - name：文件名称
    - path：文件所在路径
- 示例：

```js
autobot.listFile("/sdcard");
```

## downloadUrl(path)

功能介绍：获取一个拼接好下载路径，直接访问就可以下载

- 参数：
  - path 路径，比如`/sdcard`
- 返回：
  - Array[FileObj]
    - isExecute：是否可执行
    - isFile：是否时文件，否则是文件夹
    - isRead：是否可读
    - isWrite：是否可写
    - lastModified：最后一次修改时间
    - name：文件名称
    - path：文件所在路径
- 示例：

```js
let downloadUrl = autobot.downloadUrl("/sdcard/download.txt");
console.log(`url:${downloadUrl},可以复制到浏览器进行下载`);
```

## sendSms(phoneNumber,content)

功能介绍：向一个号码发送短信，由于 android 系统的安全限制，若无法发送短信，通常会跳转到发送页面

- 参数：
  - phoneNumber 号码
  - content 短信内容
- 返回：
  - Boolean
- 示例：

```js
autobot.sendSms(10000, "hello");
```

## playMusic(musicUrl)

功能介绍：调用设备播放声音（注意：此接口在 android10 以下系统可能会失败），请谨慎使用

- 参数：
  - musicUrl 网络音乐 url
- 返回：
  - Boolean
- 示例：

```js
autobot.playMusic("https://www.runoob.com/try/demo_source/horse.ogg");
```

## startApp(packageName)

功能介绍：使用包名启动一个 app

- 参数：
  - packageName 应用包名
- 返回：
  - Boolean
- 示例：

```js
autobot.startApp("com.tencent.mm");
```

## installApk(apkPath)

功能介绍：安装一个 apk，由于 android 系统的安全限制，部分手机会进行二次确认

- 参数：
  - apkPath apk 路径
- 返回：
  - Boolean
- 示例：

```js
autobot.installApk("/sdcard/weibo.apk");
```

## unInstallApp(packageName)

功能介绍：根据包名卸载一个 android 应用程序

- 参数：
  - packageName 应用包名
- 返回：
  - Boolean
- 示例：

```js
autobot.unInstallApp("com.tencent.mm");
```

## killApp(packageName)

功能介绍：根据包名停止一个 android 应用程序

- 参数：
  - packageName 应用包名
- 返回：
  - Boolean
- 示例：

```js
autobot.killApp("com.tencent.mm");
```

# 下列 api 是为了兼容 autojs pc 自动生成的代码

## tap(x, y)

功能介绍：在屏幕的 x，y 坐标执行点击

- 参数：
  - x，y 支持绝对坐标，比如传入 x=300，y=500
  - x，y 支持百分比，比如传入 x=0.5，y=0.5，那么这个点就是屏幕的正中间
- 返回：
  - 无
- 示例：

```js
autobot.click(0.5, 0.5);
```

## inputKey(keyCode)

功能介绍：模拟按键

- 参数：
  - keyCode 也可以参考 android sdk 的 KeyEvent.java 类
- 返回：
  - 无
- 示例：

```js
autobot.inputKey(4);
```

## execAdbShell

功能介绍：执行 shell 命令

- 参数：
  - shell 要执行的命令，支持\n 换行符
  - timeout 命令执行超时时间
- 返回：
  - 无
- 示例：

```js
let result = autobot.execAdbShell("pm list packages");
console.log(result);
```

## timeout(millisecond)

功能介绍：休眠 millisecond 毫秒后，接着执行

- 参数：
  - millisecond 毫秒值
- 返回：
  - 无
- 示例：

```js
autobot.timeout(1000);
```

## timeout2(start,end)

功能介绍：随机休眠 X 秒，X 介于 start-end 之间

- 参数：
  - start 秒
  - end 秒
- 返回：
  - 无
- 示例：

```js
//随机休眠3-5秒
autobot.timeout2(3, 5);
```

## gesture(duration, [x1, y1], [x2, y2], ...)

功能介绍：模拟手势操作。例如 gesture(2000, [0, 0], [500, 500], [500, 1000])为模拟一个从(0, 0)到(500, 500)到(500, 100)的手势操作，时长为 2 秒

- 参数：
  - duration 手势持续时间
  - [x, y]... 手势滑动路径的一系列坐标（支持百分比和绝对坐标）
- 返回：
  - 无
- 示例：

```js
//在屏幕上模拟画出数字2的手势
autobot.gesture(
  2000,
  [0.34444444444444444, 0.28205128205128205],
  [0.3611111111111111, 0.28076923076923077],
  [0.4388888888888889, 0.28076923076923077],
  [0.4777777777777778, 0.2833333333333333],
  [0.49722222222222223, 0.28974358974358977],
  [0.5333333333333333, 0.3076923076923077],
  [0.5555555555555556, 0.33589743589743587],
  [0.5694444444444444, 0.3730769230769231],
  [0.5722222222222222, 0.4115384615384615],
  [0.5527777777777778, 0.4512820512820513],
  [0.5305555555555556, 0.48333333333333334],
  [0.4888888888888889, 0.5205128205128206],
  [0.4527777777777778, 0.5461538461538461],
  [0.41388888888888886, 0.5641025641025641],
  [0.36944444444444446, 0.5782051282051283],
  [0.30277777777777776, 0.5935897435897436],
  [0.25555555555555554, 0.6025641025641025],
  [0.24444444444444444, 0.6064102564102564],
  [0.225, 0.6089743589743589],
  [0.2388888888888889, 0.6089743589743589],
  [0.37222222222222223, 0.6089743589743589],
  [0.525, 0.6089743589743589],
  [0.5722222222222222, 0.6089743589743589],
  [0.6416666666666667, 0.6076923076923076],
  [0.6888888888888889, 0.6064102564102564],
  [0.7138888888888889, 0.6064102564102564],
  [0.7222222222222222, 0.6064102564102564],
  [0.7222222222222222, 0.6064102564102564]
);
```

## gestures([delay, duration, [x, y], [x, y], ...], [delay, duration, [x, y], [x, y], ...], ...)

功能介绍：同时模拟多个手势。每个手势的参数为[delay, duration, 手势路径点位], delay 为延迟多久(毫秒)才执行该手势；duration 为手势执行时长；坐标为手势经过的点的坐标。其中 delay 参数可以省略，默认为 0。

- 参数：
  - delay 延迟多少毫秒（ms）执行该手势
  - duration 手势持续时间
  - [x, y]... 手势滑动路径的一系列坐标（支持百分比和绝对坐标）
- 返回：
  - 无
- 示例：

```js
//双指捏合
autobot.gestures(
  [0, 500, [800, 300], [500, 1000]],
  [0, 500, [300, 1500], [500, 1000]]
);
```

## getScreenDocument()

功能介绍：返回当前屏幕的 dom 对象（本质是用 cheerio 加载屏幕 xml 后返回 dom 对象），可以直接使用 cheerio 语法查找对象。

- 参数：
  - 无
- 返回：
  - 无
- 示例：

```js
//获取屏幕的dom对象
let $ = autobot.getScreenDocument();

//获取dom text属性包含 设置 的dom
let result = $(`*[text*="设置"]`);

//获取第一个包含设置文本的dom元素在屏幕中的坐标
let result2 = $(`*[text*="设置"]`).eq(0).attr("bound");
//result2: 33-1215-287-1297 xml原始str，代表x1,y1,x2,y2
console.log(result2);
```

## querySelectorAll(selector, option = {})

功能介绍：根据 selector 查找元素

- 参数：
  - `selector` jquery 选择器，可以参考快速入门->[选择器查找高级](quickStart?id=选择器查找高级)
  - `option`={region}
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - [DOMObj{`bounds,text`,...},DOMObj,DOMObj]，未找到时返回空数组[]
  - bounds {mx,my,x1,y1, x2,y2} mx,my=中心点坐标，x1,y1 区域开始坐标，x2,y2 区域结束坐标
  - text 节点的文本
- 示例：

```js
//等待屏幕上出现 文本包含 设置
let isShowSetting = autobot.waitForSelector(`*[text*="设置"]`, {
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
if (isShowSetting) {
  console.log("出现了");
} else {
  console.log("没出现");
}
//点击第一个包含设置的文本
let texts = autobot.querySelectorAll(`*[text*="设置"]`, {
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
for (let item of texts) {
  let { mx, my } = item.bounds;
  autobot.tap(mx, my);
  break;
}
```

## querySelector(selector, option = {})

功能介绍：根据 selector 查找第一个符合条件的元素

- 参数：
  - `selector` jquery 选择器，可以参考快速入门->[选择器查找高级](quickStart?id=选择器查找高级)
  - `option`={region}
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - DOMObj{`bounds,text`,...}，未找到时返回 undefined
  - bounds {mx,my,x1,y1, x2,y2} mx,my=中心点坐标，x1,y1 区域开始坐标，x2,y2 区域结束坐标
  - text 节点的文本
- 示例：

```js
//点击第一个包含设置的文本
let text = autobot.querySelector(`*[text*="设置"]`, {
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
let { mx, my } = text.bounds;
autobot.tap(mx, my);
```

## waitForSelector(selector, option = {})

功能介绍：等待匹配的 selector 出现,一般和 querySelector 配合使用

- 参数：
  - `selector` jquery 选择器，可以参考快速入门->[选择器查找高级](quickStart?id=选择器查找高级)
  - `option`={region}
    - `retry`：默认值 10，内部会轮询 10 次，每次间隔 500ms，10 次都找不到的情况下，会返回 false
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - `boolean` true 代表成功匹配，false 代表没有匹配
- 示例：

```js
//等待屏幕上出现 文本包含 设置
let isShowSetting = autobot.waitForSelector(`*[text*="设置"]`, {
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
if (isShowSetting) {
  console.log("出现了");
} else {
  console.log("没出现");
}
```

## findTextAll(text,option = {})

功能介绍：根据文本查找所有包含此文本的 dom 元素

- 参数：
  - `text` 等待出现的文本，多个文本可以使用`$`符号分割
  - `option`={region}
    - `retry`：默认值 10，内部会轮询 10 次，每次间隔 500ms，10 次都找不到的情况下，会返回 false
    - `accurate`：是否精准匹配，比如我们在手机的设置页面查找设置两个字，精准匹配只会匹配到标题上的 设置；取消精准匹配后能匹配 设置、 应用设置、更多设置
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - [DOMObj{`bounds,text`,...},DOMObj,DOMObj]
    - bounds {mx,my,x1,y1, x2,y2} mx,my=中心点坐标，x1,y1 区域开始坐标，x2,y2 区域结束坐标
    - text 节点的文本
- 示例：

```js
let texts = autobot.findTextAll("设置", {
  accurate: false,
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
for (let item of texts) {
  console.log(item.text);
}
```

## findText(text,option = {})

功能介绍：根据文本查找第一个包含此文本的 dom 元素

- 参数：
  - `text` 等待出现的文本，多个文本可以使用`$`符号分割
  - `option`={region}
    - `retry`：默认值 10，内部会轮询 10 次，每次间隔 500ms，10 次都找不到的情况下，会返回 false
    - `accurate`：是否精准匹配，比如我们在手机的设置页面查找设置两个字，精准匹配只会匹配到标题上的 设置；取消精准匹配后能匹配 设置、 应用设置、更多设置
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - [DOMObj{`bounds,text`,...},DOMObj,DOMObj]
    - bounds {mx,my,x1,y1, x2,y2} mx,my=中心点坐标，x1,y1 区域开始坐标，x2,y2 区域结束坐标
    - text 节点的文本
- 示例：

```js
let text = autobot.findText("应用设置", {
  accurate: true,
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
if (text) {
  let { mx, my } = text.bounds;
  autobot.tap(mx, my);
}
```

## waitForText(text,option = {})

功能介绍：等待匹配的文本出现,一般和 findText 配合使用

- 参数：
  - `text` 等待出现的文本，多个文本可以使用`$`符号分割
  - `option`={region}
    - `retry`：默认值 10，内部会轮询 10 次，每次间隔 500ms，10 次都找不到的情况下，会返回 false
    - `accurate`：是否精准匹配，比如我们在手机的设置页面查找设置两个字，精准匹配只会匹配到标题上的 设置；取消精准匹配后能匹配 设置、 应用设置、更多设置
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - `boolean` true 代表成功匹配，false 代表没有匹配
- 示例：

```js
//等待屏幕上出现 文本包含 设置
let isShowSetting = autobot.waitForText(`设置`, {
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
if (isShowSetting) {
  console.log("屏幕上出现 设置 了");
} else {
  console.log("没有找到");
}
```

## captureScreen()

功能介绍：获取屏幕截图

- 参数：
  - 无
- 返回：
  - 返回一个 autox.js 内的[Image 对象](http://doc.autoxjs.com/#/images?id=image)
- 示例：

```js
let image = autobot.captureScreen();
image.saveTo("/sdcard/screen.jpg");
```

## findImage(base64Img,option={})

功能介绍：在大图片 img 中查找小图片 template 的位置（模块匹配），找到时返回位置坐标(Point)

- 参数：
  - `base64Img` 需要查找的图片 base64 编码
  - `option`={threshold,region}
    - `threshold`: 取值范围 0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
- 返回：
  - `array` [itemObj={`confidence`,`result`},itemObj,itemObj]
    - `confidence` 置信度
    - `result` {x,y,mx,my}分别代表匹配区域到的起始坐标，以及中心坐标
- 示例：

```js
//查找微信聊天列表页面的小铃铛，点击后返回
var result = autobot.findImage(
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIACcAKgMBEQACEQEDEQH/xAAeAAABAwQDAAAAAAAAAAAAAAAIAgcJAwQFBgABCv/EACgQAAICAQQCAgEEAwAAAAAAAAIDAQQFBgcREhMhCBQAIiMxMiQzcv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDyQCDGMWpSmtY0oUkFBLDdZP8A0VFAPJlYs8H4R6wE+M+7A/T2C4KtaW76k0+ts2qryNmpDjq2pOAbTbUk4ujbCWL7Cuq1U+uHevYFZlfjNjgw1vB4/cpN7dirpFOum6EHEWqqJwwrJ7EotnT8S7kB6JV+aKS4jw2HcNhQCSsGOWy0KHAS6gtuV+sf4ppJgGqZEirm7kS7jWc4I6j2MewQQLkYgVGJCxbkrcDAmZHg+eVzzAzDF8fuRx1jsPUi98An8C6p37uIspy+NsfUvYpqryLc1zsjU8TQ7WYSIGJuV2GF9+sQBtmC59SEiOiNSYLcRmZ1XhttNNj8mMbp/HjhauUmzjcXq/Gpr2jnUenKVinFe/m7AAB2FWlUVSwUQuyzsUiAgK3t3fw+v7+tn5yY1iQWsFmMhlsSmFiSi6t0rmsPPpqacSaVEBynq9kpN3Y4AHM1tV09vBtdkN3dNYOrpbXOjW0ae4On8TJVcHeqXmsXTv0cQAGqkbiqZBjeDEbHIyyQ8QwQCrEALbIL5BarJqFM/wALmFqZMhETMdC8sRE+pmQKOsQMcgr8DonLSuwTRseGad2LZ13yoopTWYLQAYGQbYN5VSUDCUEAt8+SC6iQFFv/AJ/LYTPbD5Ck968pjfjzt/IWa1gqcoyTLWaNeRr264Q9rwSquFhblgDpiAIiERmQ2K5QxfyixJ5bCIr4bf8AwmMoxkMSiK1LG7lU8auxKreMGGSLdR0lg8rw269ELJ5GtI2XSJeIMBsVQtM0X8jcJkzvJJGhbE3EtQFe2nP0rFkYo5FDDAlliyJkSahcqYtT9drohnQBbJZrIZKOIKtVgymeZZYFIw8/+Z/b6zPBT75GOI5Dn4FepUsZO3VxFeq+0zKPTTUmuvyttWLD1Va+PrgM9yt2zsSxIzAqlVWwTHLIVg0CN+UljH1Nd4HS67dZj9AbfaT0ZmGS9VVFTMY1FmzcpgzIHTY+a4364NhKjJTYKGiAykmgPmByWSxeXrZXCXUzcqLcypZoZKVtpWYJRpthYpQ1gsXKyEUHArsQRwZRC+ZCRra7Vuk989P7hpdUr4HevUu3DtL3/qo+vj9ZXMbDTwtiqutDWTl2BORjJMZUR5mPqTDXdWSkI1G17ePbaoZFNupcx2QtYq5TvBC7VO5j/Em0p6INjFdSkCgjgRYJRISUicAFeEBMRMWqsxMcxPln3E/xP9PwHE2f11jdtNxtNa3y2nlappYSy1jcO581hKG12Au/WbAlxkKD4SynB9F8G+SaBCAmDv3N1vj1l8hczeS2Ayt7UeVdcy+fydrdXVoLyeRa9hvteDGtxsLKa81gEG/YGSAoGUCHZ4b1ezfxFLbRW4EbUZd2TO19YdPt1trRjKpjIiyUOyBZOh43Tx2ld2scwoJYDZ6eMGgz+4ezCq6LWgdrNQ7d6xTNW7h9YYbXF6xbxbY5Myik4EqskUiAyLGAAj3iCLt+Bn9aZHSG9+jshrx01tHbq6Wq46jn5XRtTh9fV7A2BqZZ1qhXumGbUNC1OTi7UpJI71f61m7EPmuAp9MDHpmNcRx6MgZHWTj+0jyyJ6zPMjzETxxzET6/A//Z",
  {
    threshold: 0.8,
    region: { x1: 0, y1: 0, x2: 1, y2: 1 },
  }
);
console.log(result);
for (let item of result) {
  console.log(item);
  break;
}
```

## findColor(color, option = {})

功能介绍：寻找颜色 color。找到时返回找到的点 Point，找不到时返回 null

- 参数：
  - `color` 需要查找的颜色的值，如`#ff0000`
  - `option`={threshold,region}
    - `threshold`: 取值范围 0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
- 返回：
  - `Point` 位置坐标
    - `x` 水平位置
    - `y` 垂直位置
- 示例：

```js
//查找屏幕上是否出现了蓝色
var sColor = autobot.findColor("#7fd12e", {
  threshold: 4,
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
if (sColor) {
  console.log("屏幕上出现了微信图标绿色的点");
  let { x, y } = sColor;
  console.log(`屏幕上出现了微信图标绿色的点，第一个点坐标为:(${x},${y})`);
} else {
  console.log("屏幕上未出现微信图标绿色的点");
}
```

## findAllPointsForColor(color, option = {})

功能介绍：寻找颜色 color。找到时返回找到的点 Point，找不到时返回 null

- 参数：
  - `color` 需要查找的颜色的值，如`#ff0000`
  - `option`={threshold,region}
    - `threshold`: 取值范围 0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
- 返回：

  - [Point{x,y},....]
    - `Point` 位置坐标
      - `x` 水平位置
      - `y` 垂直位置

- 示例：

```js
//查找屏幕上是否出现了蓝色
var allPoint = autobot.findAllPointsForColor("#7fd12e", {
  threshold: 4,
  region: { x1: 0, y1: 0, x2: 1, y2: 1 },
});
console.log(allPoint.length);
```

## findMultiColors(firstColor, colors, option = {})

- `注意：`此功能由于百分比坐标换算会有精度问题，所以暂不支持百分比坐标，调用改 api 需要注意开发机和用户机的分辨率问题

- 功能介绍：

  1.在图片 img 中找到颜色 firstColor 的位置(x0, y0)

  2.对于数组 colors 的每个元素[x, y, color]，检查图片 img 在位置(x + x0, y + y0)上的像素是否是颜色 color，是的话返回(x0, y0)，否则继续寻找 firstColor 的位置，重新执行第 1 步

  3.整张图片都找不到时返回 null

- 参数：
  - `firstColor` 颜色值，如`#ff0000`
  - `colors` {Array} 表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
  - `option`={threshold,region}
    - `threshold`: 取值范围 0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是 720\*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标 360,640，结束坐标 720，1080，也就是屏幕的第右下区域
- 返回：
  - `Point` 位置坐标
    - `x` 水平位置
    - `y` 垂直位置
- 示例：

```js
//查找并点击微信图标，注意此接口不支持百分比坐标，因此有屏幕分辨率适配问题
var mColor = autobot.findMultiColors(
  "#75d02a",
  [
    [20, -10, "#0f6e2c"],
    [16, 29, "#e9efe1"],
    [-8, 17, "#70c625"],
    [9, -24, "#7fdc2c"],
  ],
  {
    threshold: 4,
    region: { x1: 0, y1: 0, x2: 1, y2: 1 },
  }
);
if (mColor) {
  let { x, y } = mColor;
  autobot.tap(x, y);
} else {
  toastLog("未找到颜色对应的点");
}
```

## exit()

功能介绍：立即停止脚本运行。注意这里是 autox.js 的退出，如果使用 `autobot.exit()`则会使 autobot 服务结束

- 参数：
  - 无

```js
function main() {
  exit();
}
main();
```
