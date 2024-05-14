import path from "path";
import * as ftp from "basic-ftp";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolve = (p) => path.resolve(__dirname, p);
async function example() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  if (!(process.env.FTP_HOST && process.env.FTP_USER && process.env.FTP_PWD)) {
    throw new Error("FTP_HOST,FTP_USER,FTP_PWD is required");
  }
  try {
    const mFtpOptions = {
      host: process.env.FTP_HOST,
      port: (process.env.FTP_PORT && Number(process.env.FTP_PORT)) || 21,
      user: process.env.FTP_USER,
      password: process.env.FTP_PWD,
      secure: false,
    };
    await client.access(mFtpOptions);
    await client.cd("/yugege/db");
    await client.clearWorkingDir();
    const waitUplaodFile = resolve(`../repository.tar.gz`);
    if (fs.existsSync(waitUplaodFile)) {
      console.log("文件存在");
    } else {
      console.log("文件不存在");
    }
    //失败重试3次
    for (let i = 0; i < 3; i++) {
      try {
        await client.uploadFrom(resolve(`../repository.tar.gz`), `test.tar.gz`);
        break;
      } catch (e) {
        await client.clearWorkingDir();
      }
    }
    console.log(await client.list());
  } catch (err) {
    console.log(err);
  }
  client.close();
}

example();
