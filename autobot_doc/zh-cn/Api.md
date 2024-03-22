## 欢迎页面 - 说明：```txt可以判断服务器是否连通``` - 请求url：`http://[ip]:18080/api/hello` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```jsonhello```## 获取当前设备ID - 说明：```txt获取设备ID``` - 请求url：`http://[ip]:18080/api/getDeviceId` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "xxxx-xxxx-xxxx-xxxx"
}```## 获取当前设备ip - 说明：```txt获取对应设备上的所有ip地址``` - 请求url：`http://[ip]:18080/api/getIp` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": [
		"192.168.1.100"
	]
}```## 获取版本号 - 请求url：`http://[ip]:18080/api/version` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json12403```## 获取屏幕信息 - 说明：```txt可以用来返回设备的屏幕方向，宽度和高度``` - 请求url：`http://[ip]:18080/api/screenInfo` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": {
		"rotation": 0,
		"width": 1080,
		"height": 2340
	}
}```## 获取系统信息 - 说明：```txt返回设备的硬件信息系统信息（内存信息，屏幕信息及存储信息）``` - 请求url：`http://[ip]:18080/api/getSystemInfo` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
		"clientVersion": 12403,
		"brand": "xxx",
		"id": "xxx.xxx.001",
		"display": "xxx.xxx.001 test-keys",
		"product": "xxx",
		"device": "umi",
		"board": "umi",
		"manufacturer": "xxx",
		"model": "xxxx",
		"sku": "unknown",
		"socManufacturer": "xxxx",
		"socModel": "SM8250",
		"abis": "[arm64-v8a, armeabi-v7a, armeabi]",
		"bootloader": "unknown",
		"hardware": "qcom",
		"serial": "unknown",
		"sdkInt": "33",
		"release": "13",
		"displayInfo": {
			"rotation": 0,
			"width": 1080,
			"height": 2340
		},
		"memoryInfo": {
			"total": 12158148608,
			"freeStr": "329.3M",
			"totalStr": "11.3G",
			"free": 345251840
		},
		"diskInfo": {
			"sdcardTotalStr": "226.3G",
			"phoneFreeStr": "184.5G",
			"sdcardTotal": 242964475904,
			"sdcardFree": 198065291264,
			"sdcardFreeStr": "184.5G",
			"phoneTotalStr": "226.3G",
			"phoneTotal": 242964475904,
			"phoneFree": 198065291264
		},
		"devicesInfo": {
			"meid": "xxxxxxxxxx",
			"pseudoID": "xxxxxxxxxx",
			"imei": "xxxxxxxxxx",
			"deviceId": "xxxxxxxxxx"
		}
	}```## 屏幕截图 - 说明：```txt此接口可以直接请求，返回屏幕的实时截图``` - 请求url：`http://[ip]:18080/api/screenShot` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：    - 无## 屏幕截图base64 - 说明：```txt以base64字符串方式返回屏幕截图``` - 请求url：`http://[ip]:18080/api/screenShotBase64` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "data:image/jpeg;base64,/9j/xxxxxxxxx"
}```## 获取屏幕方向 - 说明：```txt- 0: 表示竖直方向（垂直向上），通常为纵向模式。
- 1: 表示逆时针旋转 90 度，横向模式，屏幕顶部位于右侧。
- 2: 表示旋转 180 度，通常为颠倒模式，屏幕顶部位于底部。
- 3: 表示顺时针旋转 90 度，横向模式，屏幕顶部位于左侧。``` - 请求url：`http://[ip]:18080/api/screenRotation` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "0"
}```## 屏幕树xml - 说明：```txt以xml格式返回当前屏幕的布局信息``` - 请求url：`http://[ip]:18080/api/screenXml` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><node index=\"4\" class=\"android.widget.FrameLayout\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/aod_mode_layout_horizontal\" text=\"\" bound=\"0,0,1080,2340\"><node index=\"5\" class=\"android.view.View\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/notification_animation_view\" text=\"\" bound=\"0,0,1080,2340\" /></node>"
}```## 屏幕树json - 说明：```txt以JSON格式返回当前屏幕的布局信息``` - 请求url：`http://[ip]:18080/api/screenJson` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": {
		"index": 6,
		"class": "android.widget.FrameLayout",
		"clickable": false,
		"visibleToUser": true,
		"enabled": true,
		"checked": false,
		"resourceId": "com.miui.aod:id/aod_mode_layout_horizontal",
		"text": "",
		"bound": "0,0,1080,2340",
		"children": []
	}
}```## 获取所有联系人 - 请求url：`http://[ip]:18080/api/getAllContact` - 请求方式：`GET` - 请求参数：    - number：`*` (不传或者传*的时候获取所有联系人，否则获取此号码对应的联系人) - 返回示例：```json{
	"code": 1,
	"data": [
		{
			"number": "13312341234",
			"name": "张三",
			"id": "2963r40-733F6CA69304"
		}
	]
}```## 删除联系人 - 说明：```txtcode为1时说明删除成功
data字段返回删除成功的数量
请谨慎调用此接口``` - 请求url：`http://[ip]:18080/api/deleteContact` - 请求方式：`GET` - 请求参数：    - number：`13312341246` (不传或者传*的时候删除所有联系人，否则删除此号码对应的联系人) - 返回示例：```json{
	"code": 1,
	"data": "0"
}```## 插入联系人 - 说明：```txtdata为1说明插入成功``` - 请求url：`http://[ip]:18080/api/insertContact` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"name":"李四","number":"13312341246"}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 获取所有短信 - 说明：```txt如果短信条数过多，此接口会比较慢；
建议传手机号获取指定号码的短信，且要定期清理短信``` - 请求url：`http://[ip]:18080/api/getAllSms` - 请求方式：`GET` - 请求参数：    - number：`10010` (不传或者传*的时候获取所有短信，否则获取对应号码的短信) - 返回示例：```json{
	"code": 1,
	"data": [
		{
			"date": 1692346905559,
			"subid": "1",
			"number": "10010",
			"typeStr": "receive",
			"dateStr": "18 Aug 2023 08:21:45 GMT",
			"id": "88",
			"body": "尊敬的用户，您可以编辑免费短信发到10010查询和办理业务xxxxx",
			"type": 1
		}
    ]
}```## 模拟点击 - 说明：```txtx，y支持绝对坐标，比如传入x=300，y=500
x，y支持百分比，比如传入x=0.5，y=0.5，那么这个点就是屏幕的正中间``` - 请求url：`http://[ip]:18080/api/click` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"x":0.5,"y":0.5}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 模拟长按点击 - 说明：```txtx，y支持绝对坐标，比如传入x=300，y=500
x，y支持百分比，比如传入x=0.5，y=0.5，那么这个点就是屏幕的正中间``` - 请求url：`http://[ip]:18080/api/longClick` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"x":0.5,"y":0.5}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 模拟长按点击（指定时间） - 说明：```txt在屏幕的x,y坐标处执行长按，时长为duration毫秒
x，y支持绝对坐标，比如传入x=300，y=500
x，y支持百分比，比如传入x=0.5，y=0.5，那么这个点就是屏幕的正中间
duration持续时间，单位毫秒（ms）``` - 请求url：`http://[ip]:18080/api/press` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"x":0.5,"y":0.8,"duration":1000}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 模拟滑动 - 说明：```txt从屏幕的x1,y1经过duration毫秒滑动到x2,y2
x1,y1,x2,y2支持百分比坐标和绝对坐标，可以参考模拟点击
duration持续时间，单位毫秒（ms）``` - 请求url：`http://[ip]:18080/api/swipe` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"x1":0.2,"y1":0.8,"x2":0.2,"y2":0.2,"duration":500}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 模拟按键 - 说明：```txtvalue代表keyCode
查询对应的keyCode可以参考adb用法文档
也可以参考android sdk的KeyEvent.java类``` - 请求url：`http://[ip]:18080/api/pressKeyCode` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"value":4}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 单指手势 - 说明：```txtduration代表此手势的执行时长，单位为毫秒
points为手势的采样路径，点数越多手势越平滑``` - 请求url：`http://[ip]:18080/api/gesture` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 多指手势 - 说明：```txt多指手势是多个单指手势的集合
delay代表此手势此组多指手势开始执行后延迟多少毫秒开始执行
deduration代表此手势的执行时长，单位为毫秒
points为手势的采样路径，点数越多手势越平滑``` - 请求url：`http://[ip]:18080/api/gestures` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json[{
	"delay":0,
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}]  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 输入字符 - 说明：```txt输入字符仅支持ACSII码，而且是通过按键模拟的方式进行输入的
在一些特定情况下如果无法通过输入字符串来进行输入，可以尝试此api``` - 请求url：`http://[ip]:18080/api/inputChar` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"value":"hello world"}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 输入字符串 - 说明：```txt输入字符串，支持多种语言``` - 请求url：`http://[ip]:18080/api/inputText` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"value":"哈哈"}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 设置剪切板内容 - 说明：```txt设置剪切板内容``` - 请求url：`http://[ip]:18080/api/setClipText` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{
    "value":"hello world"
}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 获取剪切板数据 - 说明：```txt读取手机的剪切板内容``` - 请求url：`http://[ip]:18080/api/getClipText` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "hello"
}```## 列出文件夹 - 说明：```txt传入对目录可列出对应文件下的内容：
isExecute：是否可执行
isFile：是否时文件，否则是文件夹
isRead：是否可读
isWrite：是否可写
lastModified：最后一次修改时间
name：文件名称
path：文件所在路径``` - 请求url：`http://[ip]:18080/api/listFile` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{
    "value": "/sdcard"
}  ``` - 返回示例：```json{
	"code": 1,
	"data": [
		{
			"isExecute": true,
			"isFile": false,
			"isRead": true,
			"isWrite": true,
			"lastModified": 1691218932000,
			"name": "Android",
			"path": "/sdcard/Android",
			"size": 0
		},
        "...."
    ]
}```## 上传文件 - 说明：```txt- 上传文件请使用form-data方式提交，path可以指定具体上传的目录
- 上传成功后会返回上传成功后的文件路径
- 注意，上传文件必须上传在/sdcard/目录下``` - 请求url：`http://[ip]:18080/api/upload` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "/sdcard/screen.mp4"
}```## 下载文件 - 说明：```txt- path参数为需要下载的文件路径
- 建议路径参数使用encodeURIComponent编码后在进行拼接
- 防止路径包含特殊字符导致下载失败``` - 请求url：`http://[ip]:18080/api/download` - 请求方式：`GET` - 请求参数：    - path：`/sdcard/tsconfig.json`  - 返回示例：    - 无## 删除文件夹 - 说明：```txt会删除文件夹及子目录的所有内容，请谨慎调用此接口``` - 请求url：`http://[ip]:18080/api/delFile` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{
    "value":"/sdcard/tmp"
}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 执行shell命令 - 说明：```txt执行shell命令，可以使用\n执行多个shell命令，所有的执行结果将在一个返回内返回``` - 请求url：`http://[ip]:18080/api/execCmd` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{
    "timeout":1,
    "value":"reboot"
}  ``` - 返回示例：```json{
	"code": 1,
	"data": "package:com.android.updater\n..."
}```## 设置当前设备名称 - 说明：```txt设置设备的名称，注意这个并不会更改设备的系统名称
为了让你在开发时有多台设备时更好的区分设备``` - 请求url：`http://[ip]:18080/api/setDisplayName` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"value":"设备001"}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 清除输入框文本 - 说明：```txt输入字符仅支持ACSII码，而且是通过按键模拟的方式进行输入的
在一些特定情况下如果无法通过输入字符串来进行输入，可以尝试此api``` - 请求url：`http://[ip]:18080/api/clearText` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 获取当前设备名称 - 说明：```txt- 获取你通过接口设置的设备名称
- 注意此接口并不是获取你真是的设备名称
- 而是当你有多台设备时，通过对设备设置不同的名称来区分设备``` - 请求url：`http://[ip]:18080/api/getDisplayName` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "设备001"
}```## 获取顶层activity信息 - 说明：```txt- 获取当前手机屏幕最前端的页面信息（包括所属的应用信息）
- packageName：包名
- className：当前顶层activity的类名
- main：当前包名的启动类（启动入口）
- 比如我们打开chrome，会返回chrome对应的信息``` - 请求url：`http://[ip]:18080/api/getTopActivity` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": {
		"shortClassName": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"className": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"main": "com.google.android.apps.chrome.Main",
		"packageName": "com.android.chrome"
	}
}```## 根据包名获取启动类 - 说明：```txt根据包名获取启动类``` - 请求url：`http://[ip]:18080/api/getStartActivity` - 请求方式：`GET` - 请求参数：    - packageName：`com.android.chrome` (包名) - 返回示例：```json{
	"code": 1,
	"data": "com.google.android.apps.chrome.Main"
}```## 根据包名启动应用 - 说明：```txt根据包名启动应用程序，此应用程序必须有入口才能被启动
<intent-filter>
   <action android:name="android.intent.action.MAIN"/>
   <category android:name="android.intent.category.LAUNCHER"/>
</intent-filter>``` - 请求url：`http://[ip]:18080/api/startPackage` - 请求方式：`GET` - 请求参数：    - packageName：`com.android.chrome` (包名) - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 根据包名停止应用 - 请求url：`http://[ip]:18080/api/stopPackage` - 请求方式：`GET` - 请求参数：    - packageName：`com.android.chrome` (包名) - 返回示例：    - 无## 根据包名清除应用数据 - 说明：```txt注意：此方法会清除应用的数据，且不可恢复，请谨慎使用``` - 请求url：`http://[ip]:18080/api/clearPackage` - 请求方式：`GET` - 请求参数：    - packageName：`com.android.chrome` (包名) - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 获取所有应用列表 - 说明：```txt获取所有的应用包名``` - 请求url：`http://[ip]:18080/api/getAllPackage` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": [
		"com.google.android.dialer",
		"com.android.camera",
		"com.android.settings",
        "..."
	]
}```## 根据包名获取应用程序信息 - 说明：```txt根据包名返回应用程序的详细信息``` - 请求url：`http://[ip]:18080/api/getPackageInfo` - 请求方式：`GET` - 请求参数：    - packageName：`com.android.chrome`  - 返回示例：```json{
	"code": 1,
	"data": {
		"activities": [
			"...."
		],
		"applicationInfo": {
			"dataDir": "/data/user/0/com.android.chrome",
			"processName": "com.android.chrome",
			"targetSdkVersion": 34
		},
		"packageInfo": {
			"lastUpdateTime": 1690914769788,
			"packageName": "com.android.chrome",
			"versionCode": 579013821,
			"versionName": "115.0.5790.138"
		},
		"permissions": [
			"...."
		],
		"providers": [
			"...."
		],
		"reqFeatures": ["..."],
		"requestedPermissions": [
			"android.permission.ACCESS_COARSE_LOCATION",
			"android.permission.ACCESS_FINE_LOCATION",
			"android.permission.ACCESS_WIFI_STATE",
			"android.permission.ACCESS_NETWORK_STATE",
			"..."
		],
		"services": [
			"...."
		],
		"singnatures": ""
	}
}```## 播放音乐（网络音乐） - 说明：```txt调用设备播放声音（注意：此接口在android10以下系统可能会失败），请谨慎使用``` - 请求url：`http://[ip]:18080/api/playMusic` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{"value":"https://www.runoob.com/try/demo_source/horse.ogg"}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 停止播放音乐 - 说明：```txt当你使用播放网络音乐的功能时，此接口可以立即定制播放``` - 请求url：`http://[ip]:18080/api/stopMusic` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 拨打电话 - 说明：```txt直接使用对应号码发起拨打电话功能，只支持主卡拨``` - 请求url：`http://[ip]:18080/api/callPhone` - 请求方式：`GET` - 请求参数：    - number：`10010`  - 返回示例：    - 无## 挂断电话 - 说明：```txt挂断正在拨打的电话``` - 请求url：`http://[ip]:18080/api/endCall` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 发送短信 - 说明：```txt由于android系统的安全限制，若无法发送短信，通常会跳转到发送页面``` - 请求url：`http://[ip]:18080/api/sendSms` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{
    "phoneNumber":"13312341234",
    "value":"hello world"
}  ``` - 返回示例：    - 无## 熄屏控制 - 说明：```txt这个不是锁屏，而是让屏幕处于熄屏状态，投屏和控制等都可以正常使用。
若要恢复，请调用熄屏亮屏或者发送电源按键或按手机电源键，手机就会重新亮屏。``` - 请求url：`http://[ip]:18080/api/turnScreenOff` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 熄屏亮屏 - 说明：```txt让熄屏状态的手机亮屏，若手机是按电源键锁屏，那么会模拟执行电源按键，让设备亮屏``` - 请求url：`http://[ip]:18080/api/turnScreenOn` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 开始录屏 - 说明：```txt此接口会在设备后台启动录屏程序，limit代表最长录制时长（为了防止用户开启录屏后忘记停止，导致手机存储爆满，android自带的录屏时长默认为180s，超过180s会自动中止），你可以修改此参数来达到更长时间的屏幕录制。
若需要中途定制可以调用结束录屏接口，录屏的存储位置为`/sdcard/screen.mp4```` - 请求url：`http://[ip]:18080/api/startRecoreScreen` - 请求方式：`GET` - 请求参数：    - limit：`180` (录屏限制时长，单位秒) - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 结束录屏 - 说明：```txt此接口用于结束后台的录屏任务，录屏文件默认保存路径为`/sdcard/screen.mp4```` - 请求url：`http://[ip]:18080/api/stopRecoreScreen` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 执行AutoX.js脚本 - 说明：```txtaction: 默认传exec就行了
script：要运行的脚本内容
delay：延迟执行的毫秒数，默认为 0
interval：循环运行时两次运行之间的时间间隔，默认为 0
loopTimes：循环运行次数，默认为 1。0 为无限循环。``` - 请求url：`http://[ip]:18080/api/execScript` - 请求方式：`POST` - 请求header：`Content-Type:application/json;charset=UTF-8` - 请求参数：```json{
    "action":"exec",
    "script":"console.show(true);console.log(`hello world`);",
    "delay":0,
    "interval":3000,
    "loopTimes":2
}  ``` - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 退出所有AutoX.js脚本 - 说明：```txt停止所有正在运行的脚本。``` - 请求url：`http://[ip]:18080/api/stopAllScript` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：```json{
	"code": 1,
	"data": "1"
}```## 退出服务 - 说明：```txt调用此接口会终止autobot的服务，如果需要重新启用服务需要你重新操作激活服务端``` - 请求url：`http://[ip]:18080/api/exit` - 请求方式：`GET` - 请求参数：    - 无 - 返回示例：    - 无