## Welcome page - Description：```txtYou can determine whether the server is connected``` - Request URL：`http://[ip]:18080/api/hello` - Request Method：`GET` - Request Parameters：    - none - Response example：```jsonhello```## Obtain the current device ID - Description：```txtObtain the device ID``` - Request URL：`http://[ip]:18080/api/getDeviceId` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "xxxx-xxxx-xxxx-xxxx"
}```## Obtain the IP address of the current device - Description：```txtObtain all IP addresses on the device``` - Request URL：`http://[ip]:18080/api/getIp` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": [
		"192.168.1.100"
	]
}```## Obtain the version number - Request URL：`http://[ip]:18080/api/version` - Request Method：`GET` - Request Parameters：    - none - Response example：```json12403```## Get screen information - Description：```txtCan be used to return the screen orientation, width, and height of the device``` - Request URL：`http://[ip]:18080/api/screenInfo` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": {
		"rotation": 0,
		"width": 1080,
		"height": 2340
	}
}```## Get system information - Description：```txtReturns the device's hardware information system information (memory information, screen information, and storage information)``` - Request URL：`http://[ip]:18080/api/getSystemInfo` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
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
	}```## Screenshots - Description：```txtThis API can be directly requested to return a real-time screenshot of the screen``` - Request URL：`http://[ip]:18080/api/screenShot` - Request Method：`GET` - Request Parameters：    - none - Response example：    - none## Screenshot base64 - Description：```txtReturns the screenshot as a base64 string``` - Request URL：`http://[ip]:18080/api/screenShotBase64` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "data:image/jpeg;base64,/9j/xxxxxxxxx"
}```## Get screen orientation - Description：```txt- 0: Indicates the vertical direction (vertical up), usually in portrait mode.
- 1: Indicates a 90-degree counterclockwise rotation in landscape mode, with the top of the screen on the right.
- 2: Rotates 180 degrees, usually in upside-down mode, with the top of the screen at the bottom.
- 3: Indicates a 90-degree clockwise rotation in landscape mode, with the top of the screen on the left.``` - Request URL：`http://[ip]:18080/api/screenRotation` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "0"
}```## Screen tree XML - Description：```txtReturns the layout information of the current screen in XML format``` - Request URL：`http://[ip]:18080/api/screenXml` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><node index=\"4\" class=\"android.widget.FrameLayout\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/aod_mode_layout_horizontal\" text=\"\" bound=\"0,0,1080,2340\"><node index=\"5\" class=\"android.view.View\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/notification_animation_view\" text=\"\" bound=\"0,0,1080,2340\" /></node>"
}```## Screen tree json - Description：```txtReturns the layout information of the current screen in JSON format``` - Request URL：`http://[ip]:18080/api/screenJson` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
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
}```## Get all your contacts - Request URL：`http://[ip]:18080/api/getAllContact` - Request Method：`GET` - Request Parameters：    - number：`*` (Get all contacts when you don't pass or pass *, otherwise get the contacts corresponding to this number) - Response example：```json{
	"code": 1,
	"data": [
		{
			"number": "13312341234",
			"name": "张三",
			"id": "2963r40-733F6CA69304"
		}
	]
}```## Delete the contact - Description：```txtIf the code is set to 1, the deletion is successful
The data field returns the number of deleted data
Call this API with caution``` - Request URL：`http://[ip]:18080/api/deleteContact` - Request Method：`GET` - Request Parameters：    - number：`13312341246` (Delete all contacts when you don't pass or pass *, otherwise delete the contacts corresponding to this number) - Response example：```json{
	"code": 1,
	"data": "0"
}```## Insert a contact - Description：```txtIf the data value is 1, the insertion is successful``` - Request URL：`http://[ip]:18080/api/insertContact` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"name":"李四","number":"13312341246"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Get all your text messages - Description：```txtIf the number of SMS messages is too large, this API will be slow.
It is recommended to send the mobile phone number to get the SMS of the specified number, and to clean the SMS regularly``` - Request URL：`http://[ip]:18080/api/getAllSms` - Request Method：`GET` - Request Parameters：    - number：`10010` (Get all SMS when you don't send or pass *, otherwise get SMS for the corresponding number) - Response example：```json{
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
}```## Simulate clicks - Description：```txtx,y supports absolute coordinates, for example, x=300 and y=500
x,y support percentage, for example, pass x=0.5,y=0.5, then this point is the middle of the screen``` - Request URL：`http://[ip]:18080/api/click` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"x":0.5,"y":0.5}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Simulate a long press to click - Description：```txtx,y supports absolute coordinates, for example, x=300 and y=500
x,y support percentage, for example, pass x=0.5,y=0.5, then this point is the middle of the screen``` - Request URL：`http://[ip]:18080/api/longClick` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"x":0.5,"y":0.5}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Simulate a long press tap (specified time) - Description：```txtPerform a long press at the x,y coordinates of the screen for a duration of milliseconds
x,y supports absolute coordinates, for example, x=300 and y=500
x,y support percentage, for example, pass x=0.5,y=0.5, then this point is the middle of the screen
duration, in milliseconds (ms)``` - Request URL：`http://[ip]:18080/api/press` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"x":0.5,"y":0.8,"duration":1000}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Simulate sliding - Description：```txtSwipe from x1,y1 to x2,y2 in milliseconds from the duration of the screen
x1, y1, x2, y2 support percentage coordinates and absolute coordinates, you can refer to the simulated click
duration, in milliseconds (ms)``` - Request URL：`http://[ip]:18080/api/swipe` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"x1":0.2,"y1":0.8,"x2":0.2,"y2":0.2,"duration":500}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Emulate keystrokes - Description：```txtvalue represents the keyCode
For details about how to query the corresponding keyCode, see the adb usage document
You can also refer to the KeyEvent.java class of the Android SDK``` - Request URL：`http://[ip]:18080/api/pressKeyCode` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":4}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## One-finger gestures - Description：```txtduration represents the execution duration of the gesture, in milliseconds
points is the sampling path of the gesture, and the more points there are, the smoother the gesture will be``` - Request URL：`http://[ip]:18080/api/gesture` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Multi-finger gestures - Description：```txtA multi-finger gesture is a collection of multiple one-finger gestures
delay represents the number of milliseconds after the execution of this group of multi-finger gestures starts to be delayed
deduration represents the execution duration of the gesture, in milliseconds
points is the sampling path of the gesture, and the more points there are, the smoother the gesture will be``` - Request URL：`http://[ip]:18080/api/gestures` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json[{
	"delay":0,
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}]  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Enter characters - Description：```txtThe input characters only support ACSII codes and are entered by means of key simulation
In some specific cases, you can try this API if you can't enter a string``` - Request URL：`http://[ip]:18080/api/inputChar` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"hello world"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Enter a string - Description：```txtInput strings, support multiple languages``` - Request URL：`http://[ip]:18080/api/inputText` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"哈哈"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Sets the clipboard contents - Description：```txtSets the clipboard contents``` - Request URL：`http://[ip]:18080/api/setClipText` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "value":"hello world"
}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Get clipboard data - Description：```txtRead the contents of your phone's clipboard``` - Request URL：`http://[ip]:18080/api/getClipText` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "hello"
}```## List the folders - Description：```txtThe incoming pair directory lists the contents of the corresponding file:
isExecute: whether it can be executed
isFile: Whether it is a file, otherwise it is a folder
isRead: whether it is readable
isWrite: whether it is writable
lastModified: the time when it was last modified
name: the name of the file
path: the path where the file is located``` - Request URL：`http://[ip]:18080/api/listFile` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "value": "/sdcard"
}  ``` - Response example：```json{
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
}```## Upload the file - Description：```txt- To upload a file, use form-data to submit the file, and the path can specify the specific directory to be uploaded
- After the upload is successful, the file path is returned
- Note that the uploaded file must be in the /sdcard/ directory``` - Request URL：`http://[ip]:18080/api/upload` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "/sdcard/screen.mp4"
}```## Download the file - Description：```txt- The path parameter is the path of the file to be downloaded
- It is recommended that the path parameters be encoded with encodeURIComponent and then concatenated
- Prevent the path from containing special characters that cause the download to fail``` - Request URL：`http://[ip]:18080/api/download` - Request Method：`GET` - Request Parameters：    - path：`/sdcard/tsconfig.json`  - Response example：    - none## Delete the folder - Description：```txtAll contents of folders and subdirectories will be deleted, so call this API with caution``` - Request URL：`http://[ip]:18080/api/delFile` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "value":"/sdcard/tmp"
}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Execute shell commands - Description：```txtTo execute shell commands, you can execute multiple shell commands with \n, and all the execution results will be returned in one return``` - Request URL：`http://[ip]:18080/api/execCmd` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "timeout":1,
    "value":"reboot"
}  ``` - Response example：```json{
	"code": 1,
	"data": "package:com.android.updater\n..."
}```## Set the current device name - Description：```txtSet the name of the device, note that this does not change the system name of the device
In order to allow you to better distinguish between devices when you have multiple devices during development``` - Request URL：`http://[ip]:18080/api/setDisplayName` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"设备001"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Clear the text in the input box - Description：```txtThe input characters only support ACSII codes and are entered by means of key simulation
In some specific cases, you can try this API if you can't enter a string``` - Request URL：`http://[ip]:18080/api/clearText` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Obtain the current device name - Description：```txt- Get the name of the device you set through the interface
- Note that this interface is not intended to get your real device name
- Instead, when you have multiple devices, distinguish them by setting different names for them``` - Request URL：`http://[ip]:18080/api/getDisplayName` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "设备001"
}```## Obtain top-level activity information - Description：```txt- Get the information about the page at the top of the current phone screen (including the application information it belongs to)
- packageName: the name of the package
- className: the class name of the current top-level activity
- main: the startup class of the current package name (startup entry)
- For example, when we open chrome, we will return the information corresponding to chrome``` - Request URL：`http://[ip]:18080/api/getTopActivity` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": {
		"shortClassName": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"className": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"main": "com.google.android.apps.chrome.Main",
		"packageName": "com.android.chrome"
	}
}```## Get the startup class based on the package name - Description：```txtGet the startup class based on the package name``` - Request URL：`http://[ip]:18080/api/getStartActivity` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (包名) - Response example：```json{
	"code": 1,
	"data": "com.google.android.apps.chrome.Main"
}```## Launch the app based on the package name - Description：```txtLaunch the application based on the package name, which must have an entry before it can be launched
<intent-filter>
   <action android:name="android.intent.action.MAIN"/>
   <category android:name="android.intent.category.LAUNCHER"/>
</intent-filter>``` - Request URL：`http://[ip]:18080/api/startPackage` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (包名) - Response example：```json{
	"code": 1,
	"data": "1"
}```## Stop the app based on the package name - Request URL：`http://[ip]:18080/api/stopPackage` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (包名) - Response example：    - none## Clear app data based on package name - Description：```txtNote: This method erases the app's data and is not recoverable, so use it with caution``` - Request URL：`http://[ip]:18080/api/clearPackage` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (包名) - Response example：```json{
	"code": 1,
	"data": "1"
}```## Get a list of all apps - Description：```txtGet all the app package names``` - Request URL：`http://[ip]:18080/api/getAllPackage` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": [
		"com.google.android.dialer",
		"com.android.camera",
		"com.android.settings",
        "..."
	]
}```## Get application information based on package name - Description：```txtReturns the details of the application based on the package name``` - Request URL：`http://[ip]:18080/api/getPackageInfo` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome`  - Response example：```json{
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
}```## Play music (web music) - Description：```txtCall the device to play a sound (Note: This interface may fail in the system below Android 10), please use it with caution``` - Request URL：`http://[ip]:18080/api/playMusic` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"https://www.runoob.com/try/demo_source/horse.ogg"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Stop playing music - Description：```txtWhen you use the function of playing network music, this interface can be customized for immediate playback``` - Request URL：`http://[ip]:18080/api/stopMusic` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Dial number - Description：```txtDirectly use the corresponding number to initiate the function of making a call, and only support the main card to dial``` - Request URL：`http://[ip]:18080/api/callPhone` - Request Method：`GET` - Request Parameters：    - number：`10010`  - Response example：    - none## Hang up - Description：```txtHang up the call that is being made``` - Request URL：`http://[ip]:18080/api/endCall` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Send a text message - Description：```txtDue to the security limitations of the Android system, if you cannot send SMS, you will usually be redirected to the sending page``` - Request URL：`http://[ip]:18080/api/sendSms` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "phoneNumber":"13312341234",
    "value":"hello world"
}  ``` - Response example：    - none## Screen-off control - Description：```txtThis is not a lock screen, but to keep the screen in a screen-off state, and the projection and control can be used normally.
To restore, call the screen off or send the power button or press the phone's power button, and the phone will turn on again.``` - Request URL：`http://[ip]:18080/api/turnScreenOff` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Turn the screen off and on - Description：```txtIf the phone is locked by pressing the power button, it will simulate the execution of the power button to make the device screen on``` - Request URL：`http://[ip]:18080/api/turnScreenOn` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Start the screen recording - Description：```txtThis interface will start the screen recording program in the background of the device, limit represents the maximum recording duration (in order to prevent users from forgetting to stop after turning on the screen recording, causing the phone storage to be full, the default screen recording time of Android is 180s, and it will automatically abort if it exceeds 180s), you can modify this parameter to achieve a longer screen recording.
If you need to customize in the middle of the process, you can call the end screen recording API, and the storage location of the screen recording is '/sdcard/screen.mp4'``` - Request URL：`http://[ip]:18080/api/startRecoreScreen` - Request Method：`GET` - Request Parameters：    - limit：`180` (The recording duration is limited in seconds) - Response example：```json{
	"code": 1,
	"data": "1"
}```## End the screen recording - Description：```txtThis API is used to end the end-end screen recording task, and the default path of the screen recording file is /sdcard/screen.mp4``` - Request URL：`http://[ip]:18080/api/stopRecoreScreen` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Execute AutoX.js script - Description：```txtaction: Just pass exec by default
script: The content of the script to run
delay: The number of milliseconds for delayed execution, default is 0
interval: The time interval between two runs when the loop is running, defaults to 0
loopTimes: the number of times the loop runs, which is 1 by default. 0 is an infinite loop.``` - Request URL：`http://[ip]:18080/api/execScript` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "action":"exec",
    "script":"console.show(true);console.log(`hello world`);",
    "delay":0,
    "interval":3000,
    "loopTimes":2
}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Quit all AutoX.js scripts - Description：```txtStop all running scripts.``` - Request URL：`http://[ip]:18080/api/stopAllScript` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Opting Out of Service - Description：```txtCalling this API will terminate the service of Autobot, and if you need to re-enable the service, you need to re-activate the server``` - Request URL：`http://[ip]:18080/api/exit` - Request Method：`GET` - Request Parameters：    - none - Response example：    - none