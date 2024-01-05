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

## stopPackage()

## clearPackage()

## getAllPackage()

## getPackageInfo()

## stopMusic()

## cancelAllNotifications()

## callPhone()

## endCall()

## uploadUrl()

## active()

## inputText()

## inputChar()

## execCmd()

## pressKeyCode()

## insertContact()

## click()

## longClick()

## press()

## swipe()

## emptyDir()

## delFile()

## listFile()

## downloadUrl()

## sendSms()

## playMusic()

## startApp()

## installApk()

## unInstallApp()

## killApp()

## tap

## inputKey

## execAdbShell

## timeout

## timeout2

## gesture

## gestures

## getScreenDocument

## querySelectorAll

## querySelector

## waitForSelector

## findTextAll

## findText

## waitForText

## captureScreen

## findImage

## findColor

## findAllPointsForColor

## findMultiColors

## exit
