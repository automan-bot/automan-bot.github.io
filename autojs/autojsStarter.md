# autojs_starter
一个为AutoJS PC版快速开发android自动化脚本的脚手架工具，适合前端开发者和NodeJS工程师使用

项目已经开源，你可以贡献脚本啦

github地址：[https://github.com/autojspc/autojs_starter](https://github.com/autojspc/autojs_starter)

## 为什么更推荐使用脚手架开发脚本？它解决了哪些问题？
- 本项目是弥补AutoJS PC版开发大型复杂脚本自带编辑器弱鸡问题
- 你可以选择使用vscode，webstrom等你拿手的IDE开发脚本，并且实时的把脚本发布在软件对应脚本目录
- 可以更好的进行团队协作和项目管理

## 使用说明

### 1.电脑安装nodejs环境
注意：`建议使用nodejs 10+版本进行开发`
- 如何安装nodejs环境，请自行百度
- 安装完成后在命令行检查nodejs是否安装成功，是否具有全局环境变量
```shell
node -v
npm -v
```

### 2.克隆本项目到你的电脑上

- 需要安装git，没有git环境的，可以直接下载zip包
```shell
git clone https://github.com/autojspc/autojs_starter.git
```

### 3.打开命令行切换到项目目录，安装依赖
- npm慢的使用cnpm，cnpm安装方法[http://npmmirror.com/](http://npmmirror.com/)

```shell
npm i 
//淘宝
cnpm i
```

### 4.项目命令详解
#### 进入开发模式（建议）
```shell
npm run dev
```
功能解释：

开发模式，src目录文件发生改变的时候，会实时的生成在项目/dist目录下，且会同步生成在autojs的脚本目录，autojs的脚本在你的电脑 用户文件夹/autojs目录下


#### 清空脚本：
```shell
npm run clean
```
功能解释：

清空项目/dist目录下的脚本

#### 生成脚本到项目/dist目录（只运行一次）

```shell
npm run build
```

#### 生成脚本到项目/dist目录和AutoJSPC版的脚本目录（只运行一次）

```shell
npm run publish
```

## 项目目录说明

src 为脚本目录
src/libs 可以公共代码，怎么使用公共代码，可以看示例
dist 脚本生成目录

build 编译代码脚本目录


## 注意事项（必看）
- 为了保证脚本的简单性可传播性，脚本不支持引用npm安装的包（重要）
- 如果需要使用一些第三方包，请下载对应包的编译版本，最好是一个js，放在libs目录
- 由于脚本运行在nodejs环境，不支持Bom和Dom等浏览器环境的对象
- 脚本为了便于区分模块，必须在二级目录下创建文件夹，写脚本（不支持src/xxx/main.js）
    - 正确：`src/示例脚本/使用公共代码/[main.js,app.json]`
    - 错误：`src/示例脚本/[main.js,app.json]`
- 脚本目录下的app.json,本项目你主要关注，name和desc属性即可，其他的不用动
- 如果你之前使用软件里边的编辑器编写脚本，建议你先把脚本保存到其他地方，然后清空软件脚本目录，在使用本脚手架工具，否则同名js将会覆盖
