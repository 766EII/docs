(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{438:function(s,a,n){"use strict";n.r(a);var t=n(61),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("blockquote",[n("p",[s._v("axios 是一个专注于数据请求的一个库")]),s._v(" "),n("blockquote",[n("p",[s._v("官网："),n("a",{attrs:{href:"https://www.axios-http.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Axios 中文文档 | Axios 中文网 | Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js (axios-http.cn)"),n("OutboundLink")],1)])])]),s._v(" "),n("h4",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language-npm line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm install axios\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const result = axios({\n    method: 'GET',\n    url:'http://www.liulongbin.top:3006/api/getbooks',\n    // url中的查询参数\n    params:{},\n    // 请求体参数\n    data:{},\n\n})\nconsole.log(result) // 调用axios方法得到的是一个 promise 对象\nresult.then(function(books){\n    console.log(books) // 这个是axios返回的数据是套了一层壳 详情见pic1\n    console.log(books.data) // 这个才是接口数据\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("img",{attrs:{src:s.$withBase("/blog-picture/axios/pic1.png")}}),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"发起get请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发起get请求"}},[s._v("#")]),s._v(" 发起GET请求")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    axios({\n      method:'GET',\n      url:'http://www.liulongbin.top:3006/api/getbooks',\n      params:{\n       id:1\n      }\n    }).then(function(result){\n    console.log(result.data)\n    })\n\n    axios.get('url地址',{\n        params:{\n         参数\n        }\n    })    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"发起post请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发起post请求"}},[s._v("#")]),s._v(" 发起POST请求")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("axios({\n    method:'POST',\n    url:'http://www.liulongbin.top:3006/api/post',\n    data:{\n      name:'zs',\n      age:18\n    }\n}).then(function(result){\nconsole.log(result.data)\n})\n\naxios.get('url地址',{参数})     // 不和get一样还要写params 直接写参数就行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"结合-async-和-await-作用-可以不用-then-方法了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结合-async-和-await-作用-可以不用-then-方法了"}},[s._v("#")]),s._v(" 结合 async 和 await   作用： 可以不用  .then 方法了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("document.querySelector('#btn').addEventListener('click',async function() {\n// 如果调用某个方法的返回值是 promise 实例 则前面可以添加 await！\n// await 只能用在被async \"修饰\"的方法中\n\n    const result = await axios({\n    method:'POST',\n    url:'http://www.liulongbin.top:3006/api/post',\n    data:{\n      name:'zs',\n      age:18\n    }\n})\n\nconsole.log(result.data) \n\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("结构赋值")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("document.querySelector('#btn').addEventListener('click',async function() {\n    // 结构赋值的时候 使用 ： 进行重命名\n    const {data: res} = await axios({\n    method:'POST',\n    url:'http://www.liulongbin.top:3006/api/post',\n    data:{\n      name:'zs',\n      age:18\n    }\n})\n\nconsole.log(res.data) \n\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);