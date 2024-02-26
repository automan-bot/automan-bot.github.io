import * as ftp from "basic-ftp";
import path from "path";
const resolve = (p) => path.resolve(__dirname, p);
async function example() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  if (process.env.FTP_HOST && process.env.FTP_USER && process.env.FTP_PWD) {
    throw new Error("未设置服务器信息");
  }
  try {
    const mFtpOptions = {
      host: process.env.FTP_HOST,
      port: ((process.env.FTP_PORT && Number(process.env.FTP_PORT)) ||
        21) as number,
      user: process.env.FTP_USER,
      password: process.env.FTP_PWD,
      secure: false,
    };
    await client.access(mFtpOptions);
    await client.removeDir("/en");
    await client.removeDir("/media");
    await client.removeDir("/static");
    await client.removeDir("/zh-cn");
    await client.removeDir("/autobot");
    await client.removeDir("/autobot_doc");
    await client.removeDir("/autojs");
    console.log("清空后的目录：");
    console.log(await client.list());
    await client.cd("/");
    // await client.clearWorkingDir();
    console.log("开始上传");
    await client.uploadFromDir(resolve("autobot"));
    await client.uploadFromDir(resolve("autobot_doc"));
    await client.uploadFromDir(resolve("autojs"));
    console.log(await client.list());
  } catch (err) {
    console.log(err);
  }
  client.close();
}
example();
