## Node是啥?

我们知道JavaScript的运行环境目前只能在浏览器，很单一，这个时候Node.js横空出世，让浏览器能在一个全新的平台运行，这个新平台就是Node.js

那JavaScript在浏览器和Node运行有啥区别?

- 浏览器是 JavaScript 的前端运行环境

- Node.js是 JavaScript 的后端运行环境

::: warning

Node.js中无法调用DOM和BOM等浏览器内置API

:::

## 安装Node.js

官网下载：[Node.js 中文网 (nodejs.cn)](http://nodejs.cn/)

:::tip

安装好Node后会自带 npm，npm有啥用后续再说 

:::

## 在Node环境中执行JavaScript代码

- **创建demo.js**

<img :src="$withBase('/blog-picture/Node/1-1.png')">

- **写入代码**

<img :src="$withBase('/blog-picture/Node/1-2.png')">

- **打开终端、运行代码**

<img :src="$withBase('/blog-picture/Node/1-3.png')">

- **输出结果**

<img :src="$withBase('/blog-picture/Node/1-4.png')">

## Node三大模块

- fs 模块
  
  - 作用：读取文件内容、写入文件内容

```javascript
// 模块先得导入、然后才能使用 
// require('') 导入模块
const fs = require('fs')

// fs.readFile()方法 读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用编码格式，一般默认指定utf8
// 参数3：回调函数，拿到读取失败和成功的结果
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    // 打印失败的结果
    // 如果读取成功，则err为null
    // 如果读取失败，则err为错误对象，dataStr的值为 undefined
    console.log(err)
    // dataStr 就是你读取文件夹的内容
    console.log(dataStr)
})

// 判断是否读取成功
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败'+ err.message)
    }
    console.log('读取文件成功,内容为'+dataStr)
})


// fs.writeFile()方法 写入文件
// 参数1：写入文件的存放路径
// 参数2：写入的内容
// 参数3：回调函数，拿到写入失败的结果
// 写入成功会覆盖原来的内容,所以在用这个方法的时候最好保证你的文档里没有内容
fs.writeFile('./files/2.txt','world',function(err){
    // 如果文件写入成功，err值为null
    // 如果文件写入失败，err的值唯一个错误对象
    console.log(err)
})

// 判断是否写入成功
fs.writeFile('./files/2.txt','hello，node.js',function(err){
    if(err){
        return console.log('文件写入失败'+ err.message)
    }
    console.log('文件写入成功')
})
```

- __dirname 表示当前文件所处的目录
  
  - 这个方法重要

```javascript
console.log(__dirname)
//能很好的解决路径问题。推荐使用

// 可以拿上面的代码做下演示
fs.writeFile(__dirname + '/files/2.txt','hello，node.js',function(err){
    if(err){
        return console.log('文件写入失败'+ err.message)
    }
    console.log('文件写入成功')
})
```

- path 模块
  
  - 作用：路径拼接、获取路径文件名

```javascript
// 导入path模块 
const path = require('path')

// path.join() 路径拼接，可以把多个路径片段拼接位完整的路径字符串
const pathStr = path.join('/a','/b','/c')
console.log(pathStr) // \a\b\c

// 应用：今后凡是涉及到路径拼接的操作，都要使用path.join（）方法进行处理;
// 不要直接使用+进行字符串拼接
fs.readFlie(__dirname+'/files/1.txt',.......)

fs.readFile(path.join(__dirname,'/files/1.txt'),......)


// path.basename() 获取路径中的文件名
const fpath = path.join(__dirname,'/files/1.txt')
const fullname = path.basename(fpath)
console.log(fullname) // 1.txt
const newName = path.basename(fpath,'.txt') // 如果不想要文件名的后缀就加第二个参数写上后缀
console.log(newName) // 1
```



- http 模块
  
  - 作用：创建基本web服务器

```javascript
// 导入 http 模块
const http = require('http')
// 2、创建 web服务器实例
const server = http.createServer()
// 3、 为服务器实例绑定 request 事件
server.on('request',function(req,res){
    console.log('someone visit our web server.')
})
// 4、启动服务器
server.listen(80,function(){
    console.log('server running at http://127.0.0.1:80')
})
```

这里说一下步骤：上面代码写完后就成功了创建了web服务器。当我们打开终端运行这些代码，将打印出 'server running at http://127.0.0.1:80', 我们可以点进127.0.0.1，就相当于访问了该服务器，服务器就会给你响应对应的内容，然后你的浏览器就会打开，此时浏览器是没内容的，但你的终端会打印出 ’someone visit our web server.‘ 

我们要返回给浏览器的内容就在代码第七行事件处理函数里面写

想要关闭该服务器，在你的终端  ** ctrl + c**

:::tip

http模块就相当于帮我们在本地创建了一台web服务器

:::

- req 请求对象
  
  - 只要服务器接收到了客户端的请求，就会通过调用 server.on为服务器绑定的request事件处理函数
  
  - 如果想在事件处理函数中，访问与客户端相关的数据和属性，可以通过如下方式

```javascript
// 3、 为服务器实例绑定 request 事件
server.on('request',function(req,res){
	// req.url 客户端请求的 url
	// req.method 客户端的 method
    const str = `你请求的url是${req.url},methods is ${req.methods}`
    console.log(str)
})
```

- res 响应对象
  
  - res 是响应对象，包含了与服务器相关的数据和属性
  
  - 在服务器的request事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下方式

```javascript
// 3、 为服务器实例绑定 request 事件
server.on('request',function(req,res){
	// 要发送到客户端的字符串
    const str = `Your request url is ${req.url},and methods is ${req.methods}`
    // res.end() 方法的作用:
    //想客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str) // 该内容就会打印在浏览器内
})
```

- 解决中文乱码问题  res.setHeader()
  
  - 一般不用设置，现在的性能很强大了,但还是了解下

```javascript
server.on('request',function(req,res){
	// 要发送到客户端的字符串
    const str = `你请求的url地址是${req.url},你请求的method类型是${req.methods}`
    // 调用 res.setHeader() 方法 设置 content-Type 响应头 解决中文乱码问题
    res.setHeader('content-Type','text/html;charset=utf-8')
    res.end(str)
})
```