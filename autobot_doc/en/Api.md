## Welcome page - Description：```txtYou can determine whether the server is connected``` - Request URL：`http://[ip]:18080/api/hello` - Request Method：`GET` - Request Parameters：    - none - Response example：```jsonhello```## Gets the current device ID - Description：```txtObtain the device ID``` - Request URL：`http://[ip]:18080/api/getDeviceId` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "xxxx-xxxx-xxxx-xxxx"
}```## Check whether you can listen for notifications - Description：```txt- Check if this device can listen for notifications, and if so, you can use websockets to listen for android's real-time notifications
- Real-time notifications require Android version 9.0 and above``` - Request URL：`http://[ip]:18080/api/checkNotification` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Obtain the current device IP - Description：```txtObtain all IP addresses on the corresponding device``` - Request URL：`http://[ip]:18080/api/getIp` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": [
		"192.168.1.100"
	]
}```## Gets the version number - Request URL：`http://[ip]:18080/api/version` - Request Method：`GET` - Request Parameters：    - none - Response example：```json12403```## Get screen information - Description：```txtCan be used to return the screen orientation, width, and height of the device``` - Request URL：`http://[ip]:18080/api/screenInfo` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
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
	}```## Screenshot - Description：```txtThis API can directly request and return a real-time screenshot of the screen``` - Request URL：`http://[ip]:18080/api/screenShot` - Request Method：`GET` - Request Parameters：    - none - Response example：    - none## Screenshot base64 - Description：```txtReturns the screenshot as a base64 string``` - Request URL：`http://[ip]:18080/api/screenShotBase64` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "data:image/jpeg;base64,/9j/xxxxxxxxx"
}```## Gets the screen orientation - Description：```txt- 0: Indicates vertical orientation (vertical up), usually portrait mode.
- 1: Represents 90 degrees counterclockwise rotation, landscape mode, the top of the screen is on the right side.
- 2: Represents a 180-degree rotation, usually in upside-down mode, with the top of the screen at the bottom.
- 3: Represents a 90-degree clockwise rotation, landscape mode, with the top of the screen on the left.``` - Request URL：`http://[ip]:18080/api/screenRotation` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "0"
}```## Screen tree XML - Description：```txtReturns the layout information of the current screen in XML format``` - Request URL：`http://[ip]:18080/api/screenXml` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><node index=\"4\" class=\"android.widget.FrameLayout\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/aod_mode_layout_horizontal\" text=\"\" bound=\"0,0,1080,2340\"><node index=\"5\" class=\"android.view.View\" clickable=\"false\" visibleToUser=\"true\" enabled=\"true\" resourceId=\"com.miui.aod:id/notification_animation_view\" text=\"\" bound=\"0,0,1080,2340\" /></node>"
}```## Screen tree JSON - Description：```txtReturns the layout information of the current screen in JSON format``` - Request URL：`http://[ip]:18080/api/screenJson` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
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
}```## Get all contacts - Request URL：`http://[ip]:18080/api/getAllContact` - Request Method：`GET` - Request Parameters：    - number：`13312341234` (Get all contacts when you don't pass or pass *, otherwise get the contact corresponding to this number) - Response example：```json{
	"code": 1,
	"data": [
		{
			"number": "13312341234",
			"name": "张三",
			"id": "2963r40-733F6CA69304"
		}
	]
}```## Delete a contact - Description：```txtIf the code is 1, the deletion is successful
The data field returns the number of successful deletions
Call this interface with caution``` - Request URL：`http://[ip]:18080/api/deleteContact` - Request Method：`GET` - Request Parameters：    - number：`13312341234` (Delete all contacts when not uploading or sending *, otherwise delete the contact corresponding to this number) - Response example：```json{
	"code": 1,
	"data": "0"
}```## Insert a contact - Description：```txtA data value of 1 indicates that the insertion is successful``` - Request URL：`http://[ip]:18080/api/insertContact` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"name":"李四","number":"13312341246"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Get all text messages - Description：```txtIf the number of SMS messages is too large, this interface will be slow;
It is recommended to send a mobile phone number to obtain SMS messages from a specified number, and to clean up SMS messages regularly``` - Request URL：`http://[ip]:18080/api/getAllSms` - Request Method：`GET` - Request Parameters：    - number：`10010` (Get all SMS messages when not transmitting or sending *, otherwise get SMS messages of the corresponding number) - Response example：```json{
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
}```## Delete text messages - Description：```txtDue to the limitations of the Android system, SMS must be deleted through the SMS app, so this interface is not applicable``` - Request URL：`http://[ip]:18080/api/deleteSms` - Request Method：`GET` - Request Parameters：    - number：`10010`  - Response example：    - none## Analog keys - Description：```txtvalue stands for keyCode
To query the corresponding keyCode, please refer to the adb usage documentation
You can also refer to the Android SDK's KeyEvent .java class``` - Request URL：`http://[ip]:18080/api/pressKeyCode` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":4}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## One-finger gesture - Description：```txtduration represents the length of time this gesture is performed, in milliseconds
Points are the sampling path of the gesture, and the more points, the smoother the gesture``` - Request URL：`http://[ip]:18080/api/gesture` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Multi-finger gestures - Description：```txtA multi-finger gesture is a collection of multiple single-finger gestures
delay represents this gesture, how many milliseconds after this set of multi-fingered gestures starts executing
deduration represents the length of time this gesture is performed, in milliseconds
Points are the sampling path of the gesture, and the more points, the smoother the gesture``` - Request URL：`http://[ip]:18080/api/gestures` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json[{
	"delay":0,
	"duration":200,
	"points":[{"x":168,"y":558},{"x":172,"y":562},{"x":276,"y":562},{"x":306,"y":560},{"x":348,"y":552},{"x":390,"y":548},{"x":442,"y":540},{"x":470,"y":540},{"x":500,"y":538},{"x":520,"y":538},{"x":548,"y":538},{"x":566,"y":538},{"x":596,"y":540}]
}]  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Enter characters - Description：```txtThe input characters only support ACSII codes, and they are entered by pressing the key to emulate
There are some specific situations where you can't try this API if you can't enter by entering a string``` - Request URL：`http://[ip]:18080/api/inputChar` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"hello world"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Enter a string - Description：```txtEnter a string that supports multiple languages``` - Request URL：`http://[ip]:18080/api/inputText` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"哈哈"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## List folders - Description：```txtThe incoming pair directory lists the contents under the corresponding file:
isExecute: Whether executable or not
isFile: Whether it is a file, otherwise it is a folder
isRead: Whether it is readable or not
isWrite: Whether it is writable or not
lastModified: The last modified time
name: The name of the file
path: The path where the file is located``` - Request URL：`http://[ip]:18080/api/listFile` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
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
}```## Upload the file - Description：```txt- Please use form-data to upload files, and path can specify the specific upload directory
- After successful upload, the file path after successful upload will be returned
- Note that the upload file must be uploaded in the /sdcard/ directory``` - Request URL：`http://[ip]:18080/api/upload` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "/sdcard/screen.mp4"
}```## Download the file - Description：```txt- The path parameter is the path of the file to be downloaded
- It is recommended that the path parameters be encoded with encodeURIComponent before being concatenated
- Prevents the path from containing special characters causing the download to fail``` - Request URL：`http://[ip]:18080/api/download` - Request Method：`GET` - Request Parameters：    - path：`/sdcard/tsconfig.json`  - Response example：    - none## Delete the folder - Description：```txtAll contents of folders and subdirectories will be deleted, so call this interface with caution``` - Request URL：`http://[ip]:18080/api/delFile` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "value":"/sdcard/tmp"
}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Execute shell commands - Description：```txtTo execute shell commands, you can use \nto execute multiple shell commands, and all execution results will be returned within one return``` - Request URL：`http://[ip]:18080/api/execCmd` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "timeout":1,
    "value":"pm list packages \n input keyevent 26"
}  ``` - Response example：```json{
	"code": 1,
	"data": "package:com.android.updater\n..."
}```## Sets the current device name - Description：```txtSet the name of the device, note that this does not change the system name of the device
In order to allow you to better distinguish devices when you have multiple devices during development``` - Request URL：`http://[ip]:18080/api/setDisplayName` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"设备001"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Gets the current device name - Description：```txt- Get the name of the device you set through the interface
- Note that this interface is not to get the device name of your real one
- Instead, when you have multiple devices, differentiate the devices by setting different names on them``` - Request URL：`http://[ip]:18080/api/getDisplayName` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "设备001"
}```## Get top-level activity information - Description：```txt- Get the information of the page at the front of the current mobile phone screen (including the application information)
- packageName: The package name
- className: The class name of the current top-level activity
- main: The startup class of the current package name (boot entry)
- For example, if we open Chrome, it will return the information corresponding to Chrome``` - Request URL：`http://[ip]:18080/api/getTopActivity` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": {
		"shortClassName": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"className": "org.chromium.chrome.browser.ChromeTabbedActivity",
		"main": "com.google.android.apps.chrome.Main",
		"packageName": "com.android.chrome"
	}
}```## Gets the startup class based on the package name - Description：```txtGets the startup class based on the package name``` - Request URL：`http://[ip]:18080/api/getStartActivity` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (Package name) - Response example：```json{
	"code": 1,
	"data": "com.google.android.apps.chrome.Main"
}```## Launch the app based on the package name - Description：```txtStart an application based on the package name, which must have an entry to be started
<intent-filter>
   <action android:name="android.intent.action.MAIN"/>
   <category android:name="android.intent.category.LAUNCHER"/>
</intent-filter>``` - Request URL：`http://[ip]:18080/api/startPackage` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (Package name) - Response example：```json{
	"code": 1,
	"data": "1"
}```## Stop the app based on the package name - Request URL：`http://[ip]:18080/api/stopPackage` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (Package name) - Response example：    - none## Clear app data based on package name - Description：```txtNote: Use caution when this method clears the app's data and is not recoverable``` - Request URL：`http://[ip]:18080/api/clearPackage` - Request Method：`GET` - Request Parameters：    - packageName：`com.android.chrome` (Package name) - Response example：```json{
	"code": 1,
	"data": "1"
}```## Get a list of all apps - Description：```txtGet all app package names``` - Request URL：`http://[ip]:18080/api/getAllPackage` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
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
}```## Play Music (Network Music) - Description：```txtCall the device to play a sound (Note: This interface may fail in Android 10 and below systems), please use it with caution``` - Request URL：`http://[ip]:18080/api/playMusic` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{"value":"https://www.runoob.com/try/demo_source/horse.ogg"}  ``` - Response example：```json{
	"code": 1,
	"data": "1"
}```## Stop playing music - Description：```txtWhen you use the function of playing network music, this interface can immediately customize the playback``` - Request URL：`http://[ip]:18080/api/stopMusic` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Clean up the notification bar feature - Description：```txtDue to Android's security restrictions, higher versions of Android have been unable to invoke the function of cleaning up the notification bar``` - Request URL：`http://[ip]:18080/api/cancelAllNotifications` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Dial number - Description：```txtDirectly use the corresponding number to initiate the call function, only the main card dialing is supported``` - Request URL：`http://[ip]:18080/api/callPhone` - Request Method：`GET` - Request Parameters：    - number：`10010`  - Response example：    - none## Hang up - Description：```txtHang up the call that is being made``` - Request URL：`http://[ip]:18080/api/endCall` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Send SMS - Description：```txtDue to the security restrictions of the Android system, if you cannot send SMS, you will usually be redirected to the send page``` - Request URL：`http://[ip]:18080/api/sendSms` - Request Method：`POST` - Request Header：`Content-Type:application/json;charset=UTF-8` - Request Parameters：```json{
    "phoneNumber":"13312341234",
    "value":"hello world"
}  ``` - Response example：    - none## Screen-off control - Description：```txtThis is not a lock screen, but so that the screen is in the off state, and the screen projection and control can be used normally.
To recover, send the power button and your phone will light up again.``` - Request URL：`http://[ip]:18080/api/turnScreenOff` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Get clipboard data - Description：```txtRead your phone's clipboard data``` - Request URL：`http://[ip]:18080/api/getClipText` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "hello"
}```## Start screen recording - Description：```txtThis interface will start the screen recording program in the background of the device, limit represents the longest recording time (in order to prevent the user from forgetting to stop after opening screen recording, resulting in the phone storage full, Android's own screen recording time is 180s by default, more than 180s will be automatically aborted), you can modify this parameter to achieve longer screen recording.
If you need to customize in the middle of the process, you can call the end screen recording interface, and the storage location of the screen recording is '/sdcard/screen.mp4'``` - Request URL：`http://[ip]:18080/api/startRecoreScreen` - Request Method：`GET` - Request Parameters：    - limit：`180` (Screen recording limit duration, in seconds) - Response example：```json{
	"code": 1,
	"data": "1"
}```## End screen recording - Description：```txtThis API is used for screen recording tasks after the end of the stage, and the default save path of the screen recording file is '/sdcard/screen.mp4'``` - Request URL：`http://[ip]:18080/api/stopRecoreScreen` - Request Method：`GET` - Request Parameters：    - none - Response example：```json{
	"code": 1,
	"data": "1"
}```## Exit Service - Description：```txtCalling this API will terminate the autobot's service, and if you need to re-enable the service, you need to reactivate the server``` - Request URL：`http://[ip]:18080/api/exit` - Request Method：`GET` - Request Parameters：    - none - Response example：    - none