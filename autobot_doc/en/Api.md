## Welcome page
	"code": 1,
	"data": "xxxx-xxxx-xxxx-xxxx"
}
- Real-time notifications require Android version 9.0 and above
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
- 1: Represents 90 degrees counterclockwise rotation, landscape mode, the top of the screen is on the right side.
- 2: Represents a 180-degree rotation, usually in upside-down mode, with the top of the screen at the bottom.
- 3: Represents a 90-degree clockwise rotation, landscape mode, with the top of the screen on the left.
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
The data field returns the number of successful deletions
Call this interface with caution
	"code": 1,
	"data": "0"
}
	"code": 1,
	"data": "1"
}
It is recommended to send a mobile phone number to obtain SMS messages from a specified number, and to clean up SMS messages regularly
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
To query the corresponding keyCode, please refer to the adb usage documentation
You can also refer to the Android SDK's KeyEvent .java class
	"code": 1,
	"data": "1"
}
Points are the sampling path of the gesture, and the more points, the smoother the gesture
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}  
	"code": 1,
	"data": "1"
}
delay represents this gesture, how many milliseconds after this set of multi-fingered gestures starts executing
deduration represents the length of time this gesture is performed, in milliseconds
Points are the sampling path of the gesture, and the more points, the smoother the gesture
	"delay":0,
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}]  
	"code": 1,
	"data": "1"
}
There are some specific situations where you can't try this API if you can't enter by entering a string
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}
isExecute: Whether executable or not
isFile: Whether it is a file, otherwise it is a folder
isRead: Whether it is readable or not
isWrite: Whether it is writable or not
lastModified: The last modified time
name: The name of the file
path: The path where the file is located
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
- After successful upload, the file path after successful upload will be returned
- Note that the upload file must be uploaded in the /sdcard/ directory
	"code": 1,
	"data": "/sdcard/screen.mp4"
}
- It is recommended that the path parameters be encoded with encodeURIComponent before being concatenated
- Prevents the path from containing special characters causing the download to fail
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
In order to allow you to better distinguish devices when you have multiple devices during development
	"code": 1,
	"data": "1"
}
- Note that this interface is not to get the device name of your real one
- Instead, when you have multiple devices, differentiate the devices by setting different names on them
	"code": 1,
	"data": "设备001"
}
- packageName: The package name
- className: The class name of the current top-level activity
- main: The startup class of the current package name (boot entry)
- For example, if we open Chrome, it will return the information corresponding to Chrome
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
To recover, send the power button and your phone will light up again.
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "hello"
}
If you need to customize in the middle of the process, you can call the end screen recording interface, and the storage location of the screen recording is '/sdcard/screen.mp4'
	"code": 1,
	"data": "1"
}
	"code": 1,
	"data": "1"
}