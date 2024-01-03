#### 温馨提示
为了方便开发者尽快熟悉脚本，提供如下脚本仅供参考，`请遵守相关法律法规，禁止使用以下代码做违法事情`

## 打开微信滑动三次后退出

```js
async function main() {
  //启动微信
  await startApp(`com.tencent.mm/.ui.LauncherUI`)
  //等待3秒
  await timeout(3000)
  //滑动三次
  for(let i=0;i<3;i++){
    await swipe(0.5694444444444444, 0.6923076923076923, 0.575, 0.3564102564102564, 265)
    await timeout(1000)
  }
  //关闭微信
  await killApp(`com.tencent.mm`)
  await timeout(1000)
  //退出脚本
  exit()
}
main()
```

## 微信内给指定昵称的好友发消息

- ps `微信升级后`，`resourceId可能会发生变化`，你需要使用你手机上微信版本的resourceId

```js
const nickName="蛋蛋"
const msg="你好啊"
async function main() {
    //切换到adb输入法
    await execAdbShell(`shell settings put secure default_input_method com.android.autojs/.AdbIME`)
    //启动微信
    await killApp(`com.tencent.mm`)
    await startApp(`com.tencent.mm/.ui.LauncherUI`)
    //等待界面出现包含 昵称 的联系人
    await waitForText(nickName, {
        accurate: false,
        region:{x1:0,y1:0,x2:1,y2:1}
    })
    let texts=await findText(nickName, {
        accurate: false,
        region:{x1:0,y1:0,x2:1,y2:1}
    })
    //点击第一个联系人，跳出循环
    for(let item of texts){
        let {mx,my}=item.bounds
        await tap(mx, my)
        break
    }
    //等待输入框出现
    await waitForSelector(`*[resourceId="com.tencent.mm:id/b4a"]`, {
        region:{x1:0,y1:0,x2:1,y2:1}
    })
    //点击输入框
    let texts2=await querySelector(`*[resourceId="com.tencent.mm:id/b4a"]`, {
        region:{x1:0,y1:0,x2:1,y2:1}
    })
    for(let item of texts2){
        let {mx,my}=item.bounds
        await tap(mx, my)
        break
    }
    //输入信息
    await inputText(msg)
    //等待发送按钮出现
    await waitForSelector(`*[resourceId="com.tencent.mm:id/b8k"]`, {
        region:{x1:0,y1:0,x2:1,y2:1}
    })
    let texts3=await querySelector(`*[resourceId="com.tencent.mm:id/b8k"]`, {
        region:{x1:0,y1:0,x2:1,y2:1}
    })
    //点击发送
    for(let item of texts3){
        let {mx,my}=item.bounds
        await tap(mx, my)
        break
    }
    //返回聊天页面
    await inputKey(4)
    await inputKey(4)
    await timeout(2000)
    //退出微信
    await killApp(`com.tencent.mm`)
    exit()
}
main()
```

## 获取屏幕的xml文档，并保存到电脑D盘根目录

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

## 显示软件环境信息

```js
const process = require('process');
async function main(){
    try{
        const systemInfo={
            node: process.versions.node,
            platform: require('os').platform(),
            autojs_version: require('../../../package.json').version
        }
        console.log("系统信息",systemInfo)
    }catch(e){
        console.log(e.stack)
    }finally{
        exit()
    }
}
main()
```

## 使用Node示例

- 如果我们想要对外提供一个接口，调用接口然后执行我们的任务，那么你可以参考以下这个示例

```js
//这是上边启动微信，滑动三次的任务
async function startWeixinTask() {
    //启动微信
    await startApp(`com.tencent.mm/.ui.LauncherUI`)
    await timeout(5*1000)
    //滑动三次
    for(let i=0;i<3;i++){
        await swipe(0.5694444444444444, 0.6923076923076923, 0.575, 0.3564102564102564, 265)
        await timeout(1000)
    }
    //关闭微信
    await killApp(`com.tencent.mm`)
    await timeout(1000)
}
// 我们在这里创建http服务器
const http = require('http');
const server = http.createServer();
// 监听请求事件
server.on('request', async (request, res) => {
    startWeixinTask()
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end("sucess");
});
server.listen(8000);
```

当我们运行以上脚本，在浏览器访问 [http://localhost:8000/](http://localhost:8000/)，可以看到在对应手机上成功的执行了打开微信,滑动三次，并关闭


## 使用mysql存储数据

- 我们在做一些数据爬取时，使用mysql直接存储到数据库会更方便，软件已经内置了mysql库，可以参考使用
- mysql库的文档地址：[https://www.npmjs.com/package/mysql](https://www.npmjs.com/package/mysql)

```js

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'db_test',
  password : '123456',
  database : 'db_test'
});
 
connection.connect();

var query = connection.query('INSERT INTO user SET ?', {name:"张三"}, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0])
});

```

## 更多案例持续更新中...
