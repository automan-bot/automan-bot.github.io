const ftp = require("basic-ftp");
const path = require("path");
const resolve = (p) => path.resolve(__dirname, p);
const removeDirs = [
  "/en",
  "/media",
  "/static",
  "/zh-",
  "/autobot",
  "/autobot_doc",
  "/autojs",
];
async function example() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    if (
      !(process.env.FTP_HOST && process.env.FTP_USER && process.env.FTP_PWD)
    ) {
      throw new Error("未设置服务器信息");
    }
    const mFtpOptions = {
      host: process.env.FTP_HOST,
      port: (process.env.FTP_PORT && Number(process.env.FTP_PORT)) || 21,
      user: process.env.FTP_USER,
      password: process.env.FTP_PWD,
      secure: false,
    };
    console.table(mFtpOptions);
    await client.access(mFtpOptions);
    for (let item of removeDirs) {
      try {
        await client.removeDir(item);
      } catch (e) {
        console.log(e);
      }
    }
    console.log("清空后的目录：");
    console.log(await client.list());
    await client.cd("/");
    // await client.clearWorkingDir();
    console.log("开始上传");
    await client.uploadFromDir(resolve("../autobot"));
    await client.uploadFromDir(resolve("../autobot_doc"));
    await client.uploadFromDir(resolve("../autojs"));
    console.log(await client.list());
  } catch (err) {
    console.log(err);
  }
  client.close();
}
example();
