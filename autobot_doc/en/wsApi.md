## Introduction

Websocket is a real-time bidirectional communication protocol with higher real-time capabilities. Therefore, for a smooth experience, we recommend you read this document thoroughly.

## What Can It Do?

- Screen casting control (real-time screen jpg image stream, real-time touch text input)
- Notification listening
- Clipboard monitoring

## WS Connection Address

```
ws://[ip]:18080/api/screen
```

## Sending Information

- Sending information is divided into
  - Sending input control information
    - Sending touch events
    - Sending input text events
    - Sending input character events
    - Sending input key events
  - Sending screen image control information
    - Modifying image scaling, frame rate, image quality
    - Start sending screen jpg frames
    - Stop sending screen frames
    - Passive retrieval of screen frames

### Sending Input Control Information

`Note: Currently, all sent information is in JSON format`

| Action | Description          | Remarks |
| ------ | -------------------- | ------- |
| 1      | Send Touch Events    |         |
| 2      | Send Input Text      |         |
| 3      | Send Input Character |         |
| 4      | Send Input Key       |         |

#### Sending Touch Events

| touch_event | Description |
| ----------- | ----------- |
| 0           | Down        |
| 2           | Move        |
| 1           | Up          |

`A standard touch event typically consists of sending a down event first, then multiple move events, and finally sending an up event.`

- Down Event

```
{
    "action": 1,
    "touch_event": 0,
    "x": 100,
    "y": 100,
}
```

- Move Event

```
{
    "action": 1,
    "touch_event": 2,
    "x": 120,
    "y": 120,
}
```

- Up Event

```
{
    "action": 1,
    "touch_event": 1,
    "x": 120,
    "y": 120,
}
```

#### Sending Input Text Event (Supports Multiple Languages)

```
{
    "action": 2,
    "value": "hello world你好",
}
```

#### Sending Input Character Event (Supports ASCII Characters)

```
{
    "action": 3,
    "value": "hello world",
}
```

Why Support ASCII Characters?

`For example, when entering numeric passwords on a locked screen, using the above text format may not allow input. In such cases, we can use ASCII characters. The underlying system will convert them into corresponding key codes for input.`

#### Sending Input Key Events

- The `value` represents the corresponding `keyCode`, which can be referenced from Android SDK's `KeyEvent.java`.
- For example, the key code for the space key 'SPACE' is 62, and the key code for the backspace key 'BACKSPACE' is 67.

```
{
    "action": 4,
    "value": 62,
}
```

### Sending Screen Image Control Information

| Action | Description                              | Remarks |
| ------ | ---------------------------------------- | ------- |
| 102    | Modify image zoom, framerate, quality    |         |
| 100    | Start sending screen jpg frames          |         |
| 101    | Stop sending screen frames               |         |
| 103    | Passive mode for receiving screen frames |         |

#### Modifying Image Zoom, Framerate, Quality

- Parameter Explanation

| Parameter | Description                                           | Default Value | Remarks                                                                                                                                                                                            |
| --------- | ----------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scale     | Image zoom, range 0.3-1.0                             | 1.0           | If the screen resolution is 1280x720 and scale is set to 0.5, the scaled image size will be 640x360.                                                                                               |
| quality   | Image quality, range 10-100                           | 50            | Quality of the compressed jpg image; a higher value results in a clearer image.                                                                                                                    |
| fps       | Interval for sending jpg frames, in ms (milliseconds) | 50            | Time in milliseconds between sending screen jpg frames to the client. The default is 50ms, which corresponds to an effective fps of 20fps. The actual fps can be influenced by network conditions. |

```json
{
  "action": 102,
  "scale": 1.0,
  "quality": 50,
  "fps": 50
}
```

#### Start Sending Screen JPG Frames

```json
{
  "action": 100
}
```

#### Stop Sending Screen Frames

```json
{
  "action": 101
}
```

#### Passive Mode for Receiving Screen Frames

Hint: In weak network conditions, there may be significant delay when the server pushes screen jpg streams to the client. Passive mode for receiving screen jpg frames means that when you send this event once, it will return a jpg image frame. This approach helps reduce image delay and improve real-time performance.

Note: As it's a passive mode of retrieval, the decision to send or stop is in the hands of the client. Therefore, you do not need to invoke "Start Sending Screen JPG Frames" and "Stop Sending Screen Frames."

```json
{
  "action": 103
}
```

## Receiving Information

- Text Information

| Action | Description                                             |
| ------ | ------------------------------------------------------- |
| 1      | Screen change information, notified on screen rotation  |
| 2      | Indicates reception of new notification information     |
| 3      | Indicates reception of new clipboard change information |

- Binary Information

  - Real-time jpg image stream of the screen

### Text Information

#### Screen Change Information

```json
{
  "action": 1,
  "value": {
    "height": 1920,
    "width": 1080,
    "rotation": 0
  }
}
```

#### Received New Notification

Notification information generally includes the package name of the sender, notification title, notification content, and additional details, all of which you can retrieve.

```json
{
  "action": 2,
  "value": {
    "notification_package": "com.xxx.xxx",
    "notification_title": "通知标题",
    "notification_content": "hello",
    "intent_packageName": "com.xxx.xxx",
    "intent_shortClassName": ".ui.LauncherUI",
    "intent_uri": "intent:#Intent;launchFlags=0x24000000;component=com.xxx.xxx/.ui.LauncherUI;i.talkerCount=1;S.nofification_type=new_msg_nofification;i.Intro_Bottle_unread_count=0;B.MainUI_FromFinderNotification=false;S.MainUI_User_Last_Msg_BgNotify_From=initIntent;i.MainUI_User_Last_Msg_Type=1;B.Intro_Is_Muti_Talker=false;S.Main_User=xxxxx;end",
    "notification_extras_source_bundle": {
      "android.title": "通知标题",
      "android.reduced.images": true,
      "android.subText": null,
      "android.showChronometer": false,
      "android.text": "hello",
      "android.progress": 0,
      "android.progressMax": 0,
      "android.showWhen": true,
      "android.infoText": null,
      "android.progressIndeterminate": false,
      "android.remoteInputHistory": null
    },
    "notification_intent_source_bundle": {
      "talkerCount": 1,
      "nofification_type": "new_msg_nofification",
      "Intro_Bottle_unread_count": 0,
      "MainUI_FromFinderNotification": false,
      "MainUI_User_Last_Msg_BgNotify_From": "initIntent",
      "MainUI_User_Last_Msg_Type": 1,
      "Intro_Is_Muti_Talker": false,
      "Main_User": "xxxxx"
    }
  }
}
```

#### Clipboard Content Changed

```json
{
  "action": 3,
  "value": "hello world"
}
```

### Binary Information

Currently, there is only one type of binary information, which is jpg frames. In a browser environment using WebSocket, you will receive blob data, while in Node.js, you will receive ArrayBuffer data.

After decoding, you will obtain the original screen image, for example:

![Alt text](./media/wsApi/screen_2023-08-22_10_51_22.jpg ":size=300")

## Experience Enhancement

- Upon successful ws connection, screen information will be sent to facilitate your preparation for screen control.

```
{
	"action": 1,
	"value": {
		"height": 1920,
		"width": 1080,
		"rotation": 0
	}
}
```

- In weak network conditions, you have the option to passively retrieve screen images.

## Frequently Asked Questions

- Why does the connection automatically terminate after `5 seconds` following a successful connection?

  The server implements a read timeout of `5 seconds` to prevent resource wastage. To keep the connection active, it's necessary to send a heartbeat packet to the server before the 5-second timeout is reached.

  ```
    setInterval(()=>{
        ws.send("")
    },3000)
  ```
