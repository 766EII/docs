## 导读

这部分主要介绍 npm

## 包

Node.js中第三方模块又叫做包

包和内置模块之间的关系，类似于Jquery和浏览器内置API

## npm

通俗理解就是下载包的地方

#### 如何安装包

打开终端输入以下命令

```npm
npm install 包的完整名称
npm i 包的完整名称

```

使用@可以重新下载该包的别的版本，比如我们要下 moment包的2.22.2版本

```javascript
npm i moment@2.22.2
```

#### 第一次装包多了哪些文件.....?

初次装包完成后，在项目文件夹会多一个叫 **node_modules** 的文件夹和 **package-lock.json** 的配置文件

其中：

- node_modules 文件夹用来存放所有已安装到项目中的包，require() 导入第三方包时，就是从这个目录中查找并加载包

- package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息；例如包的名字、版本号、下载地址

:::details 当项目下载来后，没有这2个文件，可以手动新建

node_modules 可以通过 npm i 快速新建

package-lock.json 可以通过 npm init -y 快速新建

上述命令只能在英文目录下运行

:::

#### 卸载包

```javascript
// 使用 npm uninstall 具体包名 （此时 install不能省略
npm uninstall monent
```

#### package-lock.json下的2个节点

- dependencies
  
  - 用来记录你使用 npm install 命令安装了哪些包
  
  - 里面的包用在开发和项目上线之后

- devDependencies
  
  - 也是用来记录 npm install 安装了哪些包
  
  - 里面的包只有在开发阶段用到，上线之后就会被移除
  
  - 比如 webpack 包

可以使用以下命令来将包记录到 devDependencies

```javascript
npm i 包名 -D
// 以上是简写形式,等价于下面这段
npm install 包名 --save-dev
```

所以包分为2类

- 开发依赖包（记录到 devDependencies节点中的包。只在开发期间用到

- 核心依赖包 （记录到 dependencies节点中的包。在开发和上线都会用到

#### 淘宝NPM镜像服务器

因为npm是国外的服务器，所以我们国内下载速度有时候很慢；

这时候淘宝在国内搭建了一个服务器，专门把国外官方服务器上的包同步到国内服务器，然后在国内提供下包的服务。从而极大的提高了下包的速度。

扩展：

镜像是一种文件存储形式，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像

- 切换 npm 的下包镜像源

    下包镜像源指的就是下包的服务器地址

```javascript
// 1、 查看当前下包的镜像源
npm config get registry
// 2、将下包镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/
//3、检查镜像源是否切换成功
npm config get registry
```

#### nrm

为了方便的切换下吧的镜像源，我们可以安装 nrm 这个小工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源

```javascript
// 1、 安装 nrm
npm i nrm -g
// 2、查看所有可用的镜像源
nrm ls
// 3、将下包的镜像源切换为 淘宝镜像
nrm use taobao
```

#### 包的分类

全局包

在执行 npm i命令时，如果提供了 -g 参数，则会把包安装为全局包

全局包会被安装到 C:\users\用户目录\AppData\Roadming\npm\node_module

```javastacktrace
npm i 包名 -g  // 安装全局包
npm uninstall 包名 -d // 卸载全局包
```

是否安装为全局包，可以看包的官方文档里的使用说明

#### i5ting_toc

i5ting_toc 是一个可以把md文档转为 html的页面小工具

```javascript
// 1、将 i5ting_toc 安装为全局包
npm i i5ting_toc -g
// 调用 i5ting_toc,轻松实现 md 转html 功能
i5ting_toc -f 要转换的md文件路径 -o
```