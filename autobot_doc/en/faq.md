## Do I need root privileges?

It's optional. You can run the server as root, in which case you don't need to enable USB debugging. The server can be run through Autobot in this scenario.

## Is it necessary to install the Autobot APK?

It's not mandatory, but recommended. Once the service is activated, the APK can be uninstalled, but starting it up again might be cumbersome.

## Why are some APIs not functioning properly?

Please ensure you've reviewed the preparation steps and verified whether the required options are enabled. For instance, in the "Preparation" section:

If certain software functionalities (or API calls) are not working as expected, check if the following options are enabled in the USB debugging interface. The menu options might vary across different phones, so look for similar ones:

- USB Debugging (Without this enabled, you won't be able to run the server via USB shell. If running with root shell, you can skip this.)
- USB Installation (Without this enabled, you can't install the APK through the webpage/interface.)
- USB Debugging (Security Settings) [Allow modifying permissions via USB debugging, simulate clicks] (Without this, scripts can't simulate clicks.)
- Enable Show Layout Bounds (Without this, software can't use layout inspection.)
- Enable Prevent Permission Monitoring (If this option exists, make sure it's checked.)

I've followed the steps and checked these permission settings, "but some APIs are still not functioning properly, what should I do?"

Note that there are detailed instructions in the HTTP API documentation. Certain interfaces might have restrictions based on Android versions.

Moreover, due to significant differences between Android versions, Autobot strives to adapt to various devices and Android versions. You could attempt upgrading your system or flashing a third-party ROM to address Android version issues.

## Why does the WebSocket connection terminate within 5 seconds after connecting successfully?

To prevent resource wastage, the server implements a 5-second read timeout. Without continuous heartbeat packet transmission (with an interval of no more than 5 seconds between two heartbeat packets), the WebSocket connection will be interrupted. This continuous transmission of heartbeat packets is essential to maintain the WebSocket connection's liveliness.
