---
# 这是文章的标题
title: 打包及部署
order: 6
# 设置写作时间
date: 2024-06-19
# 一个页面可以有多个分类
category:
  - 开发文档
# 一个页面可以有多个标签
---
## Webpack 和 Vite
同样的，在项目的根目录下的`package.json`文件，其中的`"scripts"`属性一般也会包含编译打包的的脚本：
```json
{
  "name": "vue-antd-jeecg",
  "version": "3.4.3",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build:test": "vue-cli-service build --mode test",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}
```
以上述文件为例，该项目的启动脚本应为`"scripts"`属性中的`"serve"`，在 PowerShell 或终端中输入如下命令：
::: code-tabs
@tab 执行scripts中定义的serve脚本
```bash
npm run build
```
@tab 使用npx直接执行脚本
```bash
npx vue-cli-service build
```
:::
等待脚本执行完毕，PowerShell 或终端中输出如下与下方类似的信息：
```bash 
vite v5.3.1 building for production...
✓ 41 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/Home-Bx9V9zN2.css     0.48 kB │ gzip:  0.31 kB
dist/assets/index-BPvgi06w.css    0.92 kB │ gzip:  0.50 kB
dist/assets/Player-C7xff9iQ.js    0.22 kB │ gzip:  0.21 kB
dist/assets/Home-wRyz_nXv.js      0.86 kB │ gzip:  0.45 kB
dist/assets/index-Dt8aTw03.js   202.22 kB │ gzip: 66.13 kB
✓ built in 947ms
```
至此，打包就完成了，由上方的输出信息可以看出，打包生成的文件路径都在`dist`目录下，将`dist`目录下的文件放到服务器相应位置即可。
## Uni-App
Uni-App作为一款跨平台的框架，对应的每个平台都要单独打包。
### 打包至 Web 环境
1. 打开 uni-app 项目的页面，点 HBuilderX 右上角的发行按钮。
2. 点击网站-PC Web 或手机H5。
3. 在弹出的窗口输入网站标题，点击发行。
4. 打包完成后，会在 HBuilderX 下方的控制台显示编译成功并显示打包后的路径，一般为项目目录下的`unpackage\dist\build\web`文件夹中。
5. 将打包好的文件部署到服务器上。

### 打包到 Android 环境
假如你或者你的团队是初次打包到 Android 环境，那么你还需要先生成数字证书文件（.keystore文件）用于后续APK文件的签名，用于表明开发者的身份和APK的合法性。

> [!warning]
> 请确保妥善保管好 keystore 文件和密码，以防丢失。
>
> 如果你不清楚该项目是否已有现成的已生成的 keystore 文件，请联系你的项目管理员。

Android 系统使用包名`package name`来判定应用程序的同一性，但是由于包名可以由开发者自由设置，为了保护应用程序不被其他开发者开发的同包名应用覆盖，用于发布的 Android 应用程序需要加上开发者签名。签名是保证app不被第三方恶意替换。

在应用程序被升级的时候，Android 系统将会验证被升级的应用程序包与升级后的应用程序包是否使用了同样的开发者签名，如果一致，该应用程序可以被升级；如果不一致，那么将被视为非同一开发者开发的应用程序，用户需要先卸载已经安装的应用，然后再安装新应用。在卸载的过程中，应用在android系统中所保存的设置信息`SavedPreferences`将被删除，以保护应用本地保存的资料不被盗取。

> [!caution]
> keystore 文件和密码一旦泄露，可能会被恶意攻击者编写恶意软件用于诱骗安装到用户设备上，造成安全风险。

如果已有 keystore 文件，那么下方的生成 keystore 文件部分可以跳过：

Android证书的生成是自助和免费的，不需要审批或付费。

可以使用JRE环境中的keytool命令生成。以下是windows平台生成证书的方法：

#### 安装JRE环境（推荐使用JRE8环境，如已有可跳过）
可从Oracle官方下载jre安装包：https://www.oracle.com/java/technologies/downloads/#java8

下面以Windows平台，jre安装目录为“C:\Program Files\Java\jre1.8.0_201”为例，实际操作时请修改为自己安装目录

建议将JRE安装路径添加到系统环境变量，已配置可跳过此章节

打开命令行（cmd），输入以下命令：
```bash
d:  
set PATH=%PATH%;"C:\Program Files\Java\jre1.8.0_201\bin"
```

#### 生成签名证书
使用keytool -genkey命令生成证书：
```bash
keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore test.keystore
```
回车后会提示：
```bash
Enter keystore password:  //输入证书文件密码，输入完成回车  
Re-enter new password:   //再次输入证书文件密码，输入完成回车  
What is your first and last name?  
  [Unknown]:  //输入名字和姓氏，输入完成回车  
What is the name of your organizational unit?  
  [Unknown]:  //输入组织单位名称，输入完成回车  
What is the name of your organization?  
  [Unknown]:  //输入组织名称，输入完成回车  
What is the name of your City or Locality?  
  [Unknown]:  //输入城市或区域名称，输入完成回车  
What is the name of your State or Province?  
  [Unknown]:  //输入省/市/自治区名称，输入完成回车  
What is the two-letter country code for this unit?  
  [Unknown]:  //输入国家/地区代号（两个字母），中国为CN，输入完成回车  
Is CN=XX, OU=XX, O=XX, L=XX, ST=XX, C=XX correct?  
  [no]:  //确认上面输入的内容是否正确，输入y，回车  

Enter key password for <testalias>  
        (RETURN if same as keystore password):  //确认证书密码与证书文件密码一样（HBuilder|HBuilderX要求这两个密码一致），直接回车就可以
```
#### 查看证书信息
可以使用以下命令查看：
```bash
keytool -list -v -keystore test.keystore  
Enter keystore password: //输入密码，回车
```
会输出以下格式信息：
```bash
Keystore type: PKCS12    
Keystore provider: SUN    

Your keystore contains 1 entry    

Alias name: test    
Creation date: 2019-10-28    
Entry type: PrivateKeyEntry    
Certificate chain length: 1    
Certificate[1]:    
Owner: CN=Tester, OU=Test, O=Test, L=HD, ST=BJ, C=CN    
Issuer: CN=Tester, OU=Test, O=Test, L=HD, ST=BJ, C=CN    
Serial number: 7dd12840    
Valid from: Fri Jul 26 20:52:56 CST 2019 until: Sun Jul 02 20:52:56 CST 2119    
Certificate fingerprints:    
         MD5:  F9:F6:C8:1F:DB:AB:50:14:7D:6F:2C:4F:CE:E6:0A:A5    
         SHA1: BB:AC:E2:2F:97:3B:18:02:E7:D6:69:A3:7A:28:EF:D2:3F:A3:68:E7    
         SHA256: 24:11:7D:E7:36:12:BC:FE:AF:2A:6A:24:BD:04:4F:2E:33:E5:2D:41:96:5F:50:4D:74:17:7F:4F:E2:55:EB:26    
Signature algorithm name: SHA256withRSA    
Subject Public Key Algorithm: 2048-bit RSA key    
Version: 3
```
#### 使用证书进行打包
1. 打开 uni-app 项目的页面，点 HBuilderX 右上角的发行按钮。
2. 点击原生APP-云打包。
3. 在弹出的表单内勾选使用自有证书，并填写相关信息，如证书别名、证书私钥密码、证书文件地址（即keystore文件地址）等。
4. 勾选打正式包和传统打包，点击打包按钮。
5. 等待打包完成，打包完成后会在控制台生成如下信息：
```bash
项目 test [__UNI__B0001]打包成功：
类型: Android自有证书 下载地址: https://app.liuyingyong.cn/build/download/**** （注意该地址为临时下载地址，只能下载5次）
```
6. 下载生成的 APK 文件，部署到服务器上。

### 打包到 Wgt 包实现热更新
HBuilderX 自 1.6.5 起，uni-app 支持生成 App 资源升级包wgt，可以让用户在不重新安装APK的情况下实现对应用的热更新。

> [!warning] 
> 不支持资源升级包wgt的情况如下：
> - SDK 部分有调整，比如新增了 Maps 模块等，不可通过此方式升级，必须通过整包的方式升级。
> - 原生插件的增改，同样不能使用此方式。
> - 对于老的非自定义组件编译模式，这种模式已经被淘汰下线。但以防万一也需要说明下，老的非自定义组件编译模式，如果之前工程没有 nvue 文件，但更新中新增了 nvue 文件，不能使用此方式。因为非自定义组件编译模式如果没有nvue文件是不会打包weex引擎进去的，原生引擎无法动态添加。自定义组件模式默认就含着weex引擎，不管工程下有没有nvue文件。

#### 打包步骤
1. 打开 uni-app 项目的页面，点 HBuilderX 右上角的发行按钮。
2. 点击原生APP-制作应用wgt包。
3. 在弹出的弹窗内选择生成的wgt包的存放路径。
4. 点击确定按钮，开始打包。
5. 等待打包完成，打包完成后会在控制台生成如下信息：
```bash
[HBuilder] 12:00:00.000 项目 'test'导出成功，路径为：D:\workspace\test\unpackage\release\__UNI__B0001.wgt
```
6. 将生成的wgt文件部署到服务器上。

#### 热更新代码示例
在 Uni-App 中实现检测并自动下载安装热更新wgt包的代码示例：
```javascript
// 在 App.vue 的 onLaunch 中检测升级
// #ifdef APP-PLUS  
plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
  /* versionCode 版本号：100 ;version 版本名称 1.0.0 */
  uni.request({
    url: 'http://www.example.com/update/',
    success: (res) => {
      const { success, version, wgtUrl } = res.data
      if (!success || version <= widgetInfo.versionCode) {
        return
      }
      uni.downloadFile({
        url: wgtUrl,
        success: ({ tempFilePath, statusCode }) => {
          if (statusCode !== 200) {
            return
          }
          plus.runtime.install(
            tempFilePath,
            { force: false },
            () => {
              plus.runtime.restart()
            },
            () => {
              console.error('install fail...')
          })
        }
      })
    }
  })
})
//#endif
```

## 纯静态HTML项目
纯静态的项目无需打包，它本身就是现代化前端构建工具的打包产物。
