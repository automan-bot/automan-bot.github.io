## 欢迎页面
	"code": 1,
	"data": "xxxx-xxxx-xxxx-xxxx"
}
- 实时通知需要android9.0版本以上
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": [
		"192.168.1.100"
	]
}
	"code": 1,
	"data": {
		"rotation": 0,
		"width": 1080,
		"height": 2340
	}
}
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
	}
	"code": 1,
	"data": "data:image/jpeg;base64,/9j/xxxxxxxxx"
}
- 1: 表示逆时针旋转 90 度，横向模式，屏幕顶部位于右侧。
- 2: 表示旋转 180 度，通常为颠倒模式，屏幕顶部位于底部。
- 3: 表示顺时针旋转 90 度，横向模式，屏幕顶部位于左侧。
	"code": 1,
	"data": "0"
}
	"code": 1,
	"data": "<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><node index=\"4\" class=\"android.widget.FrameLayout\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/aod_mode_layout_horizontal\" text=\"\" bound=\"0,0,1080,2340\"><node index=\"5\" class=\"android.view.View\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/notification_animation_view\" text=\"\" bound=\"0,0,1080,2340\" /></node>"
}
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
}
	"code": 1,
	"data": [
		{
			"number": "13312341234",
			"name": "张三",
			"id": "2963r40-733F6CA69304"
		}
	]
}
data字段返回删除成功的数量
请谨慎调用此接口
	"code": 1,
	"data": "0"
}
	"code": 1,
	"data": "1"
}
建议传手机号获取指定号码的短信，且要定期清理短信
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
}
查询对应的keyCode可以参考adb用法文档
也可以参考android sdk的KeyEvent.java类
	"code": 1,
	"data": "1"
}
points为手势的采样路径，点数越多手势越平滑
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}  
	"code": 1,
	"data": "1"
}
delay代表此手势此组多指手势开始执行后延迟多少毫秒开始执行
deduration代表此手势的执行时长，单位为毫秒
points为手势的采样路径，点数越多手势越平滑
	"delay":0,
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}]  
	"code": 1,
	"data": "1"
}
在一些特定情况下如果无法通过输入字符串来进行输入，可以尝试此api
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}
isExecute：是否可执行
isFile：是否时文件，否则是文件夹
isRead：是否可读
isWrite：是否可写
lastModified：最后一次修改时间
name：文件名称
path：文件所在路径
    "value": "/sdcard"
}  
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
}
- 上传成功后会返回上传成功后的文件路径
- 注意，上传文件必须上传在/sdcard/目录下
	"code": 1,
	"data": "/sdcard/screen.mp4"
}
- 建议路径参数使用encodeURIComponent编码后在进行拼接
- 防止路径包含特殊字符导致下载失败
    "value":"/sdcard/tmp"
}  
	"code": 1,
	"data": "1"
}
    "timeout":1,
    "value":"pm list packages \n input keyevent 26"
}  
	"code": 1,
	"data": "package:com.android.updater\n..."
}
为了让你在开发时有多台设备时更好的区分设备
	"code": 1,
	"data": "1"
}
- 注意此接口并不是获取你真是的设备名称
- 而是当你有多台设备时，通过对设备设置不同的名称来区分设备
	"code": 1,
	"data": "设备001"
}
- packageName：包名
- className：当前顶层activity的类名
- main：当前包名的启动类（启动入口）
- 比如我们打开chrome，会返回chrome对应的信息
	"code": 1,
	"data": {
		"shortClassName": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"className": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"main": "com.google.android.apps.chrome.Main",
		"packageName": "com.android.chrome"
	}
}
	"code": 1,
	"data": "com.google.android.apps.chrome.Main"
}
<intent-filter>
   <action android:name="android.intent.action.MAIN"/>
   <category android:name="android.intent.category.LAUNCHER"/>
</intent-filter>
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": [
		"com.google.android.dialer",
		"com.android.camera",
		"com.android.settings",
        "..."
	]
}
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
}
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}
    "phoneNumber":"13312341234",
    "value":"hello world"
}  
若要恢复，请发送电源按键，手机就会重新亮屏。
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "hello"
}
若需要中途定制可以调用结束录屏接口，录屏的存储位置为`/sdcard/screen.mp4`
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}