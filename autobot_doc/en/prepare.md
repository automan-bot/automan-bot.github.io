# Activation Principle

The essence of the activation process is to run a server-side application in shell mode. Regular applications have limited permissions and cannot access system functions. Therefore, it's necessary to run the server-side in the `adb shell` or with root shell privileges.

## Android Device System Requirements

Prepare an Android device with system version `7-13` (devices below Android 7.0 can also be attempted).

## 1. Install the "autobot.apk" Client

Regardless of the activation method, it is recommended to install the Autobot application.

- [Click here to download the latest version of the APK](./download.md ":target=_blank")

## 2. Enable USB Debugging on the Device

- For most phones, you can enable USB debugging by going to `Settings -> About phone -> Tapping on Build number multiple times`.
- `Enabling USB debugging might vary depending on the phone model`. You can search online for how to enable USB debugging based on your device model.

`Note:`
If some functions (or API calls) of the software are not working properly, please check if the following options are enabled in the USB debugging settings. The menu options might be different for various phones, so look for similar options:

- USB Debugging (If not enabled, the server cannot be run via USB shell. If running as root shell, you can skip this part.)
- USB Installation (If not enabled, the APK cannot be installed via interface/page)
- USB Debugging (Allow debug mode via USB to modify permissions, simulate clicks) (If not enabled, scripts cannot simulate clicks)
- Enable View Attribute Inspection (If not enabled, the software cannot utilize layout division function)
- Enable Prohibited Permission Monitoring (If this option exists, be sure to check it)

## 3. Activate Through the Autobot Client

- Method 1: For Android 11 and above, after connecting to Wi-Fi, you can directly activate through the client without involving a computer. Follow the program's prompts to proceed.

  `Note:` Once paired successfully, you won't need to pair again. After enabling wireless debugging in the system settings, simply go back to the software and click start.

- Method 2: For Android 7-13 systems, you can manually enable Wi-Fi ADB by connecting a data cable. After enabling, click the start button on the software interface (this method doesn't require pairing and is a universal method, so you can try this when encountering any issues).

  The command to enable is (`Note:` This method requires configuring the adb environment variable. You can search online for how to do this.)

```shell
adb tcpip 5555
```

- TV/Tablet (Option to Enable ADB Only)

  Activation on these types of devices is also quite simple. Just enable ADB and click the system start button on the software interface. No pairing is required.

### Common Issues

- No response when clicking start after successfully pairing using Method 1?

  Please turn off USB debugging, then turn it on again. Restart the device and reconnect to Wi-Fi, then enable wireless debugging. Go back to the software interface and click start.

## Manual Activation

For manual activation and ROM integration, you can contact me privately for sharing information.

## Successful Service Startup

How to confirm if the service has been successfully activated?

- Confirmation through Autobot application

![Alt text](./media/prepare/autobot_status.png)

- Confirmation through IP address and port

  - Open the browser on your Android device and enter `http://127.0.0.1:18080`. The page should respond successfully.

    ![Alt text](./media/prepare/autobot_main.png)

  - On your computer, if the Android device is connected to Wi-Fi, you can access the device's IP address + port within the local network (you need to find your actual phone's IP address).

    Example: `http://192.168.7.119:18080`

    If you see the same interface as shown above, it indicates that the service has been successfully activated.

  `Note: You can check the device's IP by switching to the "My Devices" page in the application`

  ![Alt text](./media/prepare/autobot_me.png)
