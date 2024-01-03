# 如何在脚本中使用API，增强脚本的功能

# 自动化相关API
## 阅读须知
- 所有示例代码中的带 await 前缀的必须用 async function xxx(){ await xxx}包含，否则无法运行
- 关于最新的es6，es7语法，你可以去[阮一峰 ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/async) 一书中学习js的最新语法
- 注意nodejs支持CommonJS语法，所以如果你要引用node模块，必须使用require，而不是使用 import

```js

// 错误的写法
import fs from 'fs'
import path from 'path'

// 正确的写法
const path = require('path')
const copyFile = util.promisify(require('fs').copyFile)

```

## startApp(p)

功能介绍：启动一个APP
- 参数：
    - p：包名和类名的形式，如微信：`com.tencent.mm/.ui.LauncherUI` 
- 示例：
```js
  //启动微信
  await startApp(`com.tencent.mm/.ui.LauncherUI`)
```

## killApp(packageName)

功能介绍：结束一个正在运行的APP
- 参数：
    - packageName：包名，如微信：`com.tencent.mm`
- 示例：
```js
    //关闭微信
    await killApp(`com.tencent.mm`)
```

## unInstallApp(packageName)

功能介绍：卸载一个APP
- 参数：
    - packageName：包名，如微信：`com.tencent.mm`
- 示例：
```js
    //卸载微信
    await unInstallApp(`com.tencent.mm`)
```

## installAPK(apkPath)

功能介绍：安装一个APP
- 参数：
    - apkPath：apk的路径，如`D:/weixin.apk`
- 示例：
```js
    //安装微信
    await installAPK(`D:/weixin.apk`)
```

## execAdbShell(shell)

功能介绍：执行一条adb shell命令(进入adb shell后可以执行的命令)
- [查看更多的adb用法](awesomeAdb.md)
- 参数：
    - shell：adb命令，如`input keyevent 3`
- 返回：
    - stdout：命令行输出
    - stderr：错误信息
- 示例：
```js
    const {stdout, stderr}= await execAdbShell(`input keyevent 3`)
    if(!stderr){
        console.log("执行成功")
    }
```

## tap(x, y) :id=tap

功能介绍：在屏幕x,y位置处执行点击
- 参数：
    - x 屏幕横坐标
    - y 屏幕纵坐标
- 注意：
  - x，y支持绝对坐标，比如传入x=300，y=500
  - x，y支持百分比，比如传入`x=0.5，y=0.5`，那么这个点就是屏幕的正中间
  - `点击和滑动的坐标都可以使用百分比，内部会自动的乘以屏幕宽和高，得出实际坐标`
- 示例：
```js
    //在屏幕正中间点击，推荐使用百分比，他的适配性较好
    await tap(0.5,0.5)
    //使用绝对坐标
    await tap(300,500)
    //混合用法，比如想在屏幕正中间，距离屏幕顶部500px处点击
    await tap(0.5,500)
```

## swipe(x1, y1, x2, y2, duration)

功能介绍：从屏幕的a点滑动到b点，滑动时间`duration`(ms)
- 参数：
    - `x1, y1`开始点坐标，支持绝对坐标和百分比坐标，可以参考[tap API](#tap)
    - `x2, y2`结束点坐标，同上支持绝对坐标和百分比坐标
    - `duration`滑动持续时间
- 示例：
```js
    //左滑
    await swipe(0.8638888888888889, 0.3782051282051282, 0.24166666666666667, 0.3923076923076923, 286)
    //混合使用，向上滑
    await swipe(0.5, 1000, 0.5, 200, 286)
    //从100，100滑动到300，300
    await swipe(100, 100, 300, 300, 286)
```

## gesture(duration, [x1, y1], [x2, y2], ...)

功能介绍：模拟手势操作。例如gesture(2000, [0, 0], [500, 500], [500, 1000])为模拟一个从(0, 0)到(500, 500)到(500, 100)的手势操作，时长为2秒

- 参数：
  - `duration`手势持续时间
  - `[x, y]...` 手势滑动路径的一系列坐标（支持百分比和绝对坐标）
- 示例：
```js
  //全面屏手势，返回到桌面
  await gesture(600,[0.4666666666666667,0.9987179487179487],[0.4638888888888889,0.9974358974358974],[0.4638888888888889,0.9897435897435898],[0.4638888888888889,0.9846153846153847],[0.4638888888888889,0.9794871794871794],[0.4638888888888889,0.9692307692307692],[0.4638888888888889,0.9576923076923077],[0.4666666666666667,0.941025641025641],[0.46944444444444444,0.9051282051282051],[0.48333333333333334,0.882051282051282],[0.5138888888888888,0.85],[0.5361111111111111,0.8166666666666667],[0.5666666666666667,0.7807692307692308],[0.5916666666666667,0.7525641025641026],[0.6166666666666667,0.7243589743589743],[0.6388888888888888,0.7012820512820512],[0.6638888888888889,0.676923076923077],[0.6944444444444444,0.6564102564102564],[0.7222222222222222,0.6410256410256411],[0.7527777777777778,0.6307692307692307],[0.7722222222222223,0.6282051282051282],[0.7944444444444444,0.6269230769230769],[0.85,0.6230769230769231],[0.85,0.6217948717948718])
  //在屏幕上模拟画出数字2的手势
  await gesture(2000,[0.34444444444444444,0.28205128205128205],[0.3611111111111111,0.28076923076923077],[0.4388888888888889,0.28076923076923077],[0.4777777777777778,0.2833333333333333],[0.49722222222222223,0.28974358974358977],[0.5333333333333333,0.3076923076923077],[0.5555555555555556,0.33589743589743587],[0.5694444444444444,0.3730769230769231],[0.5722222222222222,0.4115384615384615],[0.5527777777777778,0.4512820512820513],[0.5305555555555556,0.48333333333333334],[0.4888888888888889,0.5205128205128206],[0.4527777777777778,0.5461538461538461],[0.41388888888888886,0.5641025641025641],[0.36944444444444446,0.5782051282051283],[0.30277777777777776,0.5935897435897436],[0.25555555555555554,0.6025641025641025],[0.24444444444444444,0.6064102564102564],[0.225,0.6089743589743589],[0.2388888888888889,0.6089743589743589],[0.37222222222222223,0.6089743589743589],[0.525,0.6089743589743589],[0.5722222222222222,0.6089743589743589],[0.6416666666666667,0.6076923076923076],[0.6888888888888889,0.6064102564102564],[0.7138888888888889,0.6064102564102564],[0.7222222222222222,0.6064102564102564],[0.7222222222222222,0.6064102564102564])
```

## gestures([delay, duration, [x, y], [x, y], ...], [delay, duration, [x, y], [x, y], ...], ...)

功能介绍：同时模拟多个手势。每个手势的参数为[delay, duration, 手势路径点位], delay为延迟多久(毫秒)才执行该手势；duration为手势执行时长；坐标为手势经过的点的坐标。其中delay参数可以省略，默认为0。

- 参数：
  - `delay` 延迟多少毫秒（ms）执行该手势
  - `duration`手势持续时间
  - `[x, y]...` 手势滑动路径的一系列坐标（支持百分比和绝对坐标）
- 示例：
```js
  //三指下滑截屏（小米手机有效）
  await gestures(
          [0,500,[0.25277777777777777,0.16282051282051282],[0.24722222222222223,0.1782051282051282],[0.24444444444444444,0.23333333333333334],[0.2611111111111111,0.3038461538461538],[0.24166666666666667,0.37051282051282053],[0.23333333333333334,0.441025641025641],[0.2222222222222222,0.4782051282051282],[0.21666666666666667,0.4846153846153846],[0.21666666666666667,0.4846153846153846]],
          [0,500,[0.4888888888888889,0.14871794871794872],[0.48333333333333334,0.16666666666666666],[0.48333333333333334,0.2076923076923077],[0.4722222222222222,0.26794871794871794],[0.46111111111111114,0.3230769230769231],[0.44166666666666665,0.3923076923076923],[0.4361111111111111,0.4371794871794872],[0.4361111111111111,0.4576923076923077],[0.4388888888888889,0.46153846153846156]],
          [0,500,[0.7305555555555555,0.14487179487179488],[0.7333333333333333,0.16923076923076924],[0.7472222222222222,0.2141025641025641],[0.7444444444444445,0.2512820512820513],[0.7416666666666667,0.3128205128205128],[0.7361111111111112,0.38846153846153847],[0.7305555555555555,0.44487179487179485],[0.7277777777777777,0.45897435897435895],[0.7305555555555555,0.46153846153846156],[0.7305555555555555,0.4653846153846154]]
  )
  //双指捏合
  await gestures([0, 500, [800, 300], [500, 1000]],
        [0, 500, [300, 1500], [500, 1000]]);
```

## inputText(text)

功能介绍：当某个输入框获取焦点的时候，可以通过这个api输入文字
- 参数：
    - `text`需要输入的文本，比如`helloword`
- 注意：
    - ~~(3.0版本已经不需要)使用前需要把输入法切换到autojs adb Keyborad~~
    - 部分输入框用此方法可能不能输入，如某xx支付输入密码界面，可用[inputTextChar](#inputtextcharchars)代替
- 示例：
```js
  //在输入框内输入hello world
  await inputText(`helloworld`)
  //在输入框内输入中文
  await inputText(`你好，世界`)
```

## inputTextArr(textArr=[])

功能介绍：当某个输入框获取焦点的时候，随机的从数组内取一个text，进行输入。

比如我们想要给我们的客户发送消息，我们不想每个用户收到的信息一致，另外重复发送相同信息可能会被平台封禁。

当然你也可以使用inputText，编写自己的逻辑。

- 参数：
    - `textArr`需要输入的文本，比如`["你好","不错哦","支持你"]`
- 注意：
    - ~~(3.0版本已经不需要)使用前需要把输入法切换到autojs adb Keyborad~~
- 示例：

```js
  //使用随机消息发给客户
  let pinglunArr=["你好","不错哦","支持你"]
  for(let i=0;i<10;i++){
    await inputTextArr(pinglunArr)
  }
```

## inputTextChar(chars)

功能介绍：部分输入框可能无法使用inputText来进行输入（如xx支付密码输入界面），这个会把text转换成对应的按键编码进行输入，因此只能支持部分ASCII字符（不支持中文）
- 参数：
  - `chars`需要输入的ASCII文本，比如`1234abcd`
- 注意：
  - 不支持中文
- 示例：
```js
  //在输入框内输入hello world
  await inputTextChar(`1234abcd`)
```

## inputKey(keyCode)

功能介绍：大部分按键模拟我们都已经支持，在不支持的情况下或者一些特殊的按键Code，你可以调用这个方法发送
- 参数：
    - `keyCode`需要模拟的按键code，比如返回在android上keyCode为 `4`
- 示例：
```js
   //返回上一个页面
   await inputKey(4)
```

## getPackages()

功能介绍：获取手机已安装应用的包名列表
- 参数：
  - 无
- 返回：
  - array [packageName,packageName]
    - packageName 包名，如`com.tencent.mm`
- 示例：
```js
  let packages = await getPackages()
  const result= packages.some(item=>item=="com.tencent.mm")
  if(result){
      console.log("手机已安装微信")
  }else{
      console.log("手机未安装微信")
  }
```

## getTopApp()

功能介绍：获取手机顶层（获取焦点）的页面所属APP的信息
- 参数：
  - 无
- 返回：
  - object {  packageName, activity, startActivity }
  - packageName:应用包名
  - activity：页面所属的activity
  - topActivity：当前获取焦点界面的信息(包名+actity)
  - lanchActivity：当前获取焦点应用的启动信息（包名+actity）
- 示例：
```js
  //获取最顶层的app，并结束他的运行
  let topApp = await getTopApp()
  await killApp(topApp.packageName)
```

## getScreenXml2()

功能介绍：获取屏幕的xml并导出到电脑临时文件夹，返回xml的路径，你可以用来做分析
- 参数：
  - 无
- 返回：
  - xmlpath：xml路径
- 示例：
比如下边的获取xml后，导出到电脑D盘根目录
```js
  const path = require('path')
  const util = require('util')
  const copyFile = util.promisify(require('fs').copyFile)
  const outputDir="D:/"
  async function main(){
    try{
      let xmlPath=await getScreenXml2()
      const xmlOutputPath=path.join(outputDir,"ui.xml")
      console.log("xmlsrcPath:"+xmlPath)
      console.log("xmloutPath:"+xmlOutputPath)
      await copyFile(xmlPath, xmlOutputPath)
      console.log("导出成功")
    }catch(e){
      console.log(e.stack)
    }finally{
      exit()
    }
  }
  main()
```

## captureScreen(savePath)

功能介绍：屏幕截图
- 参数：
  - `savePath` 保存路径，比如:`D:/result.png`（参数为空时，会保存在系统临时目录）
- 返回：
  - string 返回截图保存后的路径
- 示例：
```js
  //截取屏幕，并且保存在电脑D盘根目录
  const savePath="D:/result.png"
  const result = await captureScreen(savePath)
  console.log(result)
```



## screenTextArr()

功能介绍：获取屏幕所有的文本集合
- 参数：
  - 无
- 返回：
  - array [text1,text2,text3]
- 示例：
```js
  //判断屏幕上又没出现 微信 字样
  const textArr = await screenTextArr()
  const result= textArr.some(item=>item=="微信")
  console.log(result)
```

## getScreenDocument()

功能介绍：返回当前屏幕的dom对象（本质是用cheerio加载屏幕xml后返回dom对象），可以直接使用jquery语法查找对象
- 参数：
  - 无
- 返回：
  - function(selector)
- 注意：
  - 这个方法返回的是比较原始的查找效果，并没有对返回结果做处理，如果你使用封装好的querySelector，findText会自动的帮你处理好text和bound
- 示例：
```js
  //获取屏幕的dom对象
  let $ = await getScreenDocument()

  //获取dom text属性包含 设置 的dom
  let result = $(`*[text*="设置"]`)

  //获取第一个包含设置文本的dom元素在屏幕中的坐标
  let result2 = $(`*[text*="设置"]`).eq(0).attr("bound")
  //result2: 33-1215-287-1297 xml原始str，代表x1,y1,x2,y2

  //这里为了方便，也给出一个转换方法，直接返回拆分好，并且含有中心坐标的返回值
  function getPosition(bound){
    bound = bound
            .split('-')
            .map((item) => parseInt(item))
    let [x1, y1, x2, y2] = bound
    let mx = x1 + ((x2 - x1) / 2)
    let my = y1 + ((y2 - y1) / 2)
    return {
      mx,
      my,
      x1,
      y1,
      x2,
      y2
    }
  }
```

## findImage(base64Img,option={})

功能介绍：在大图片img中查找小图片template的位置（模块匹配），找到时返回位置坐标(Point)
- 参数：
  - `base64Img` 需要查找的图片base64编码
  - `option`={threshold,region}
    - `threshold`: 取值范围0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
- 返回：
  - `array` [itemObj={`confidence`,`result`},itemObj,itemObj]
    - `confidence` 置信度
    - `result` {x,y,mx,my}分别代表匹配区域到的起始坐标，以及中心坐标
- 示例：
```js
  //查找微信聊天列表页面的小铃铛，点击后返回
  let images=await findImage("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAuACwDAREAAhEBAxEB/8QAHQAAAgEEAwAAAAAAAAAAAAAAAAgGAQMFCQIHCv/EACgQAAEEAQQCAgICAwAAAAAAAAMBAgQFBgAHERMSIQgUMkEVIjNRZP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD38aC2IwTsUgCiMNHlErxEaRiEAV4DjVzFVqPCYZAlZz5DKN43oj2uRAXfEfkbR5Xl1Rj7MXyOrpcpsb2pw7L5zIiU+SWGOMKWxDHGM7pkZFGF6xXyQMadU8E8Xr46BjNAaA0BoNee5+IRsQtspg4flGSl2jhZJX2m9+3GKzCjusYW9gBtf5Sqc4azW49aRZQJ9vAry9SsERvY1AvZGBi02V2Sz3b3Fqqiroz8WqxGs8KuMetZ4ZlRIsOgxbOusmSlkpNeWOB8hs5SvbIAjZAWHFwwOOzGU5FHvs42hzSxLdZDt2WrkVeRSPH7WR4jeAeanmTVbyhLOH0ujWJvJVK8gFenchl0DB6A0BoFz2z6ZG+PycY5BmE+z2rAVrkR43+O3kcJhPa5Fa5PJHjIxyKnKOaqL70EcuKe7+O92fLMPgSbjZu2lOkZth0JrizsJknenblOLRk/yVXm5S21SPhBsRxQo1q9gAtYHfVWSfKHMruingsqe02YxOZCmRSdkeQJ11/R6KnpHs8njc1yI8buwbmtcj00DaaA0GLvLeNQU1rdzGlfFqK+XZSGAZ2GeGGAhyNExPyI5o1RieuXKnK8aBE9id/9oKWJm2Y5tn1XWZfuTmE7I7Cq+heyH0tXHb9CgpynBVmEV8KCNz/IZiMYyQwXkrmPc4O9ifKv48GGQRdx6kgiMcwg31OQvY9j0VrmPa6mVrmuReFRUVFRVRU0C3UEzb7Bdybfe3ZK5DmGALBJUblYjTClss8ThWUgU5t5U106PHkmpBzo7ZZY4QoyM9swYCuG54o4bBqO7qckqK6+o58azqLWKKbAnRCNKCRHKnkxzXNVeHNXkZRu4IEzHiK1hGOY0MroKKnKcL759L69L/tOF59LoMd/D1CqqrV1vK/8MXn98qq9XK8/vQRGs2twOnym+zKBjkAWQZIGKC2mOH2jMOGxgxIOKRXR46q0Y+1QCYpVExXqqtTQTMVbXB7OmBCF3DcEvXEAPtC/8xE8Bt8xv4TyY/ya79ovrgIxhWAYzt7EtK/FIZa2ttbiXdvrUlGLAhS5yM+wKriPcoa+G97FKkWO1o0I9y/ig2sCaaA0BoDQGgNAaD//2Q==", {
    threshold: 0.8,
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  console.log(images)
  for(let item of images){
    let {mx,my}=item.result
    await tap(mx, my)
    await timeout2(2,5)
    break
  }
  //返回
  await inputKey(4)
```

## findColor(color, options)

功能介绍：寻找颜色color。找到时返回找到的点Point，找不到时返回null
- 参数：
  - `color` 需要查找的颜色的值，如`#ff0000`
  - `option`={threshold,region}
    - `threshold`: 取值范围0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
- 返回：
  - `Point` 位置坐标
    - `x` 水平位置
    - `y` 垂直位置
- 示例：
```js
  //查找屏幕上是否出现了蓝色
  var sColor=await findColor("#00ff00", {
    threshold: 4,
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  if(sColor){
      console.log("屏幕上出现了蓝色的点")
    let {x,y}=sColor
    console.log(`屏幕上出现了蓝色，第一个点坐标为:(${x},${y})`)
  }else{
    console.log("屏幕上未出现蓝色")
  }
```


## findAllPointsForColor (color, option = {})

功能介绍：寻找颜色color。找到时返回找到的点Point，找不到时返回null
- 参数：
  - `color` 需要查找的颜色的值，如`#ff0000`
  - `option`={threshold,region}
    - `threshold`: 取值范围0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
- 返回：
  - [Point{x,y},....]
    - `Point` 位置坐标
      - `x` 水平位置
      - `y` 垂直位置

- 示例：
```js
  //查找屏幕上是否出现了蓝色
  var sColor=await findAllPointsForColor("#00ff00", {
    threshold: 4,
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  if(sColor){
      console.log("屏幕上出现了蓝色的点")
    let {x,y}=sColor
    console.log(`屏幕上出现了蓝色，第一个点坐标为:(${x},${y})`)
  }else{
    console.log("屏幕上未出现蓝色")
  }
```

## findMultiColors (firstColor, colors, option = {})

- `注意：`此功能由于百分比坐标换算会有精度问题，所以暂不支持百分比坐标，调用改api需要注意开发机和用户机的分辨率问题

- 功能介绍：

  1.在图片img中找到颜色firstColor的位置(x0, y0)

  2.对于数组colors的每个元素[x, y, color]，检查图片img在位置(x + x0, y + y0)上的像素是否是颜色color，是的话返回(x0, y0)，否则继续寻找firstColor的位置，重新执行第1步

  3.整张图片都找不到时返回null

- 参数：
  - `firstColor` 颜色值，如`#ff0000`
  - `colors` {Array} 表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
  - `option`={threshold,region}
    - `threshold`: 取值范围0.1-1，建议`0.5-0.9`之间，越大代表匹配度越高，但是容易找不出来；`0.8`测试出来效果较好,实际使用时候可以通过这个调整匹配精准度
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
    - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
- 返回：
  - `Point` 位置坐标
    - `x` 水平位置
    - `y` 垂直位置


## waitForSelector(selector, option = {})

功能介绍：等待匹配的selector出现,一般和querySelector配合使用
- 参数：
  - `selector` jquery选择器，可以参考快速入门->[选择器查找高级](quickStart?id=选择器查找高级)
  - `option`={region}
    - `retry`：默认值10，内部会轮询10次，每次间隔500ms，10次都找不到的情况下，会返回false
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - `boolean` true代表成功匹配，false代表没有匹配
- 示例：
```js
  //等待屏幕上出现 文本包含 设置
  let isShowSetting=await waitForSelector(`*[text*="设置"]`, {
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  if(isShowSetting){
    console.log("出现了")
  }else{
    console.log("没出现")
  }
```

## querySelector(selector, option = {})

功能介绍：根据selector查找元素
- 参数：
  - `selector` jquery选择器，可以参考快速入门->[选择器查找高级](quickStart?id=选择器查找高级)
  - `option`={region}
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - [DOMObj{`bounds,text`,...},DOMObj,DOMObj]
  - bounds {mx,my,x1,y1, x2,y2} mx,my=中心点坐标，x1,y1区域开始坐标，x2,y2区域结束坐标
  - text 节点的文本
- 示例：
```js
  //等待屏幕上出现 文本包含 设置
  let isShowSetting=await waitForSelector(`*[text*="设置"]`, {
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  if(isShowSetting){
    console.log("出现了")
  }else{
    console.log("没出现")
  }
  //点击第一个包含设置的文本
  let texts=await querySelector(`*[text*="设置"]`, {
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  for(let item of texts){
    let {mx,my}=item.bounds
    await tap(mx, my)
    break
  }
```

## waitForText(text,option = {})

功能介绍：等待匹配的文本出现,一般和findText配合使用
- 参数：
  - `text` 等待出现的文本，多个文本可以使用`$`符号分割
  - `option`={region}
    - `retry`：默认值10，内部会轮询10次，每次间隔500ms，10次都找不到的情况下，会返回false
    - `accurate`：是否精准匹配，比如我们在手机的设置页面查找设置两个字，精准匹配只会匹配到标题上的 设置；取消精准匹配后能匹配 设置、 应用设置、更多设置 
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - `boolean` true代表成功匹配，false代表没有匹配
- 示例：
```js
  //等待屏幕上出现 文本包含 设置
  let isShowSetting=await waitForText(`设置`, {
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  if(isShowSetting){
    console.log("屏幕上出现 设置 了")
  }else{
    console.log("没有找到")
  }
```

## findText(text,option = {})

功能介绍：根据文本查找文本所在的dom元素，能返回段落文本和文本位置
- 参数：
  - `text` 等待出现的文本，多个文本可以使用`$`符号分割
  - `option`={region}
    - `retry`：默认值10，内部会轮询10次，每次间隔500ms，10次都找不到的情况下，会返回false
    - `accurate`：是否精准匹配，比如我们在手机的设置页面查找设置两个字，精准匹配只会匹配到标题上的 设置；取消精准匹配后能匹配 设置、 应用设置、更多设置
    - `region`：查找区域，默认全屏，{x1:0,y1:0,x2:1,y2:1}代表区域的开始坐标和结束坐标,以百分比的形式，取值范围(0-1)，会自动和屏幕分辨率换算
      - 例如你的屏幕是720*1280，那么{x1:0,y1:0,x2:1,y2:1}代表整个屏幕，{x1:0.5,y1:0.5,x2:1,y2:1}代表屏幕其实坐标360,640，结束坐标720，1080，也就是屏幕的第右下区域
      - 该设置可以根据图形化界面自动生成，你无需自己计算
- 返回：
  - [DOMObj{`bounds,text`,...},DOMObj,DOMObj]
    - bounds {mx,my,x1,y1, x2,y2} mx,my=中心点坐标，x1,y1区域开始坐标，x2,y2区域结束坐标
    - text 节点的文本
- 示例：
```js
  let texts=await findText("应用设置", {
    accurate: true,
    region:{x1:0,y1:0,x2:1,y2:1}
  })
  for(let item of texts){
    let {mx,my}=item.bounds
    await tap(mx, my)
  }
```

## setScreenOrentation(orentation)

功能介绍：设置屏幕的方向，在脚本运行中，可能会动态的改变屏幕方向。
比如点击了视频播放界面的全屏，会从竖屏切换到横屏，此时需要调用此api，设置屏幕方向，
当在横屏模式操作完成后，需要调用此api改变为竖屏方式

注意： 脚本中使用百分比坐标的的都会需要根据屏幕方向做坐标转换，因此若流程中出现屏幕方向改变，务必调用此api做切换

- 参数：
  - `orentation`
    - `0`：竖屏（默认值）
    - `1`：横屏
- 返回：
  - null
- 示例：

```js
//点击全屏按钮，屏幕从竖屏切换到横屏
await tap(100,100)

//设置屏幕方向为横屏
setScreenOrentation(1) 

//再次点击屏幕的全屏按钮，退出全屏
await tap(200,200)

//退出横屏模式
setScreenOrentation(0) 

```


## exit()

功能介绍：每个脚本都在单独的进程里运行，程序不会在你的脚本运行完成时自动停止进程，你需要在合适的位置使用这个方法可以退出脚本任务
- 参数：
  - 无
- 示例：
  - 例如我们想要实现打开微信的功能，在微信打开后，只需要调用一下 exit ,即可关闭这个进程了

```js
async function main(){
  
  exit()
}
main()
```


# 常用API

这里给大家提供常用的api用法，更全更深入的用法，大家可以自行到对应的官方文档查看

## 文件操作
文件操作API官方文档：

[NodeJS官网FS模块，https://nodejs.org/dist/latest-v16.x/docs/api/fs.html](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)

[fs-extra，https://www.npmjs.com/package/fs-extra](https://www.npmjs.com/package/fs-extra)

- fs-extra是对fs的扩展，包含fs的全部功能，我们这里直接用fs-extra包

```js
  //引入fs-extra
  const fs = require('fs-extra')
  
  //把一段文本写入文件
  fs.appendFileSync('path/to/filename.txt', 'hello world');
  
  //从文本文件读取数据
  let data=fs.readFileSync('path/to/filename.txt');
  
  //文件是否存在
  let isExists=fs.existsSync('path/to/file')
  
  //删除一个文件
  fs.unlinkSync('path/file.txt')
  
  //以流模式读取文件
  const readline = require('readline')
  const readStream=fs.createReadStream('path/to/filename.txt')
  const rl = readline.createInterface({
    input:readStream,
  })
  rl.on('line', (lineData) => {
    console.log(`接收到line：${lineData}`)
  })
  
  //以流模式写入文件
  const file = fs.createWriteStream('./filename.txt',{encoding:"utf8"});
  file.write('hello world ');
  file.end();
  
  //示例保存json
  const saveObj={
      name:'autojs pc',
      desc:'一个很厉害的自动化工具'
  }
  const saveObjStr=JSON.stringify(saveObj)
  fs.appendFileSync('path/to/filename.txt', saveObjStr);
  console.log("保存成功")
  
  //读取json，解析
  const dataStr=fs.readFileSync('path/to/filename.txt')
  const readObj=JSON.parse(dataStr)
  console.log("读取到的对象为：",readObj)
  
  //fs-extra 扩展方法
  
  //copy文件,文件夹
  await fs.copy('/tmp/myfile', '/tmp/mynewfile')
  await fs.copy('/tmp/mydir', '/tmp/mynewdir')

  //清空文件夹
  await fs.emptyDir('/tmp/some/dir')

  //确保目录存在，没有创建
  await fs.ensureDir('/tmp/some/dir')

  //确保文件存在，没有创建
  await fs.ensureDir('/tmp/some/file')

  //移动文件，目录
  await fs.move(src, dest)

  //删除文件，目录。目标不存在，不会报错
  await fs.remove('/tmp/myfile')

```

## 图片操作

### 使用Jimp

[Jimp官方文档，https://www.npmjs.com/package/jimp](https://www.npmjs.com/package/jimp)

```js
const Jimp = require('jimp');
async function main() {
    //读取一个图片
    let lenna=await Jimp.read('path/to/lenna.png')
    lenna.resize(256, 256) // 调整图片大小
          .quality(60) // 设置jpeg图片质量
          .greyscale() // 灰度处理
          .write('lena-small-bw.jpg')
}
main()
```

#### jimp 相关接口

```js
/* Resize */
image.contain( w, h[, alignBits || mode, mode] );    // scale the image to the given width and height, some parts of the image may be letter boxed
image.cover( w, h[, alignBits || mode, mode] );      // scale the image to the given width and height, some parts of the image may be clipped
image.resize( w, h[, mode] );     // resize the image. Jimp.AUTO can be passed as one of the values.
image.scale( f[, mode] );         // scale the image by the factor f
image.scaleToFit( w, h[, mode] ); // scale the image to the largest size that fits inside the given width and height
 
// An optional resize mode can be passed with all resize methods.
 
/* Crop */
image.autocrop([tolerance, frames]); // automatically crop same-color borders from image (if any), frames must be a Boolean
image.autocrop(options);          // automatically crop same-color borders from image (if any), options may contain tolerance, cropOnlyFrames, cropSymmetric, leaveBorder
image.crop( x, y, w, h );         // crop to the given region
 
/* Composing */
image.blit( src, x, y, [srcx, srcy, srcw, srch] );
                                  // blit the image with another Jimp image at x, y, optionally cropped.
image.composite( src, x, y, [{ mode, opacitySource, opacityDest }] );     // composites another Jimp image over this image at x, y
image.mask( src, x, y );          // masks the image with another Jimp image at x, y using average pixel value
image.convolute( kernel );        // applies a convolution kernel matrix to the image or a region
 
/* Flip and rotate */
image.flip( horz, vert );         // flip the image horizontally or vertically
image.mirror( horz, vert );       // an alias for flip
image.rotate( deg[, mode] );      // rotate the image clockwise by a number of degrees. Optionally, a resize mode can be passed. If `false` is passed as the second parameter, the image width and height will not be resized.
 
/* Colour */
image.brightness( val );          // adjust the brighness by a value -1 to +1
image.contrast( val );            // adjust the contrast by a value -1 to +1
image.dither565();                // ordered dithering of the image and reduce color space to 16-bits (RGB565)
image.greyscale();                // remove colour from the image
image.invert();                   // invert the image colours
image.normalize();                // normalize the channels in an image
 
/* Alpha channel */
image.hasAlpha();                     // determines if an image contains opaque pixels
image.fade( f );                  // an alternative to opacity, fades the image by a factor 0 - 1. 0 will haven no effect. 1 will turn the image
image.opacity( f );               // multiply the alpha channel by each pixel by the factor f, 0 - 1
image.opaque();                   // set the alpha channel on every pixel to fully opaque
image.background( hex );          // set the default new pixel colour (e.g. 0xFFFFFFFF or 0x00000000) for by some operations (e.g. image.contain and
 
/* Blurs */
image.gaussian( r );              // Gaussian blur the image by r pixels (VERY slow)
image.blur( r );                  // fast blur the image by r pixels
 
/* Effects */
image.posterize( n );             // apply a posterization effect with n level
image.sepia();                    // apply a sepia wash to the image
image.pixelate( size[, x, y, w, h ]);  // apply a pixelation effect to the image or a region
 
/* 3D */
image.displace( map, offset );    // displaces the image pixels based on the provided displacement map. Useful for making stereoscopic 3D images.
```

#### 更多api，建议[官方文档学习](https://www.npmjs.com/package/jimp)


### 使用opencv4nodejs

[opencv4nodejs官方文档，https://www.npmjs.com/package/opencv4nodejs](https://www.npmjs.com/package/opencv4nodejs)

`注意：` opencv4nodejs程序已经默认集成挂载，挂在在全局的`cv`变量上

```js

//读取图片
const img = cv.imread("path/to/image.png");

//灰度
const grayImg = img.bgrToGray();

//调整大小
const img2 = img.resize(100, 100);

//获取指定区域图像信息（如裁剪），从x,y,w,h
const region = img.getRegion(new cv.Rect(50, 50, 100, 100))

//保存图片
cv.imwrite("path/to/image.png", grayImg);

//显示图片
cv.imshow("show title",img)
cv.waitKey(3000);

//读取摄像头
const devicePort = 0;
const wCap = new cv.VideoCapture(devicePort);
//读取视频文件
const vCap = new cv.VideoCapture('./path/video.mp4');
let frameMat = vCap.read(); //可以循环读取
cv.imshow("frame",frameMat)
cv.waitKey(3000)

```

- 更多案例请参考[官方文档，https://www.npmjs.com/package/opencv4nodejs](https://www.npmjs.com/package/opencv4nodejs)

## 网络请求

[axios官方文档，https://www.npmjs.com/package/opencv4nodejs](https://www.npmjs.com/package/opencv4nodejs)

#### 参数
```js
//引入axios
const axios=require('axios')

async function test(){
  //发送请求
  const res=await axios({
    method: 'post', //get,post,put,delete..
    url: 'http://www.xxx.com/user/12345', //url
    //get 建议使用params提交数据
    params:{
      name:'zhangsan',
      age:12
    },
    //post 建议使用data提交数据
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    },
    //请求头，可以自己设置
    header:{
        "token":"..."
    }
  });
  console.log(res)
}
test()

```

#### 案例
```js
const axios=require('axios')

async function main() {
    
  //发送get请求，参数需要放在params里边
  const response=await axios({
    method: 'get',
    url: 'http://www.baidu.com', //请把地址换成你需要模拟请求的地址
    params:{
      name:'zhangsan',
      age:12
    }
  });
  
  console.log(response.data)
  
  //发送post请求，参数需要放在data中
  const response2=await axios({
    method: 'post',
    url: 'http://www.baidu.com',//请把地址换成你需要模拟请求的地址
    data:{
      name:'zhangsan',
      age:12
    }
  });
  console.log(response2.data)
}

main()

```
## 数据库操作

[mysql官方文档，https://www.npmjs.com/package/mysql](https://www.npmjs.com/package/mysql)

#### 简单示例

```js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'db_test',
  password : '123456',
  database : 'db_test'
});
 
connection.connect();

const query = connection.query('INSERT INTO user SET ?', {name:"张三"}, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0])
});

```
#### 案例
```js

const mysql = require('mysql');
//连接到mysql服务器
function connectMysql(){
  const connection = mysql.createConnection({
    host     : "127.0.0.1",
    port     : '3306',
    database : 'db_test',
    user     : 'db_test',
    password : '123456',
  });
  return new Promise((resolve,reject)=>{
    connection.connect(function(err) {
      if (err) {
        reject(err)
        return;
      }
      resolve(connection)
    });
  })
}

//执行sql语句，并且返回结果
function mysqlQuery(connection,sql,para={}){
  return new Promise((resolve,reject)=>{
    connection.query(sql,para,function (err, results, fields) {
      if (err) {
        reject(err)
        return;
      }
      resolve({results, fields})
    })
  })
}

async function test(){
  //连接mysql数据库
  const connection=await connectMysql();
  //插入数据
  const insertSql=`INSERT INTO user SET ?`
  await mysqlQuery(connection,insertSql,{name:"李四"})
  console.log("插入数据成功")
  //查询数据
  const querySql=`SELECT * FROM user`
  const {results,fields}=await mysqlQuery(connection,querySql)
  console.log(`查询到的数据为：`,JSON.stringify(results))
}
test()

```

## excel读取，写入

#### readExcel(excelPath,dataFilter)

功能介绍：读取excel
- 参数：
  - excelPath：excel文件的路径，如微信：`D:/test.xlsx`
  - dataFilter：数据过滤器，一般excel的头部是中文的列，我们在程序中建议使用英文的列信息，这个参数会自动做转换
- 示例：
```js
  //读取excel
  //excel文件路径
  const readExcelPath="D:/test.xlsx"
  //excel的中文列和转换后对象的key对应关系
  const dataFilter={
    "name":"姓名",
    "age":"年龄",
    "date":"日期"
  }
  //读取excel
  const {header,results}=readExcel(readExcelPath,dataFilter)
  console.log(`读取的excel数据为：`,results)
```

#### exportExcel({filename，dataFilter，list})

功能介绍：导出excel
- 参数：
  - filename：excel文件的路径，如微信：`D:/test.xlsx`
  - dataFilter：数据过滤器，一般excel的头部是中文的列，我们在程序中建议使用英文的列信息，这个参数会自动做转换
  - list：[] 要导出的数据
- 示例：
```js
  //写入对应关系
  const writeFilter={
    "name":"姓名",
    "age":"年龄",
  }
  //要写入的数据
  const list=[
    {
      name:"王二",
      age:12
    },
    {
      name:"李四",
      age:13
    }
  ]
  exportExcel({
    filename: "D:/test.xlsx",
    dataFilter: writeFilter,
    list: list,
  });
  console.log("导出成功")
  ```
