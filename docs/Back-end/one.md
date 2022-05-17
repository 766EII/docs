# 一

axios 是一个专注于数据请求的一个库
基本使用

```
const result = axios({
    method: 'GET',
    url:'http://www.liulongbin.top:3006/api/getbooks',
    // url中的查询参数
    params:{},
    // 请求体参数
    data:{},

})
console.log(result) // 调用axios方法得到的是一个 promise 对象
result.then(function(books){
    console.log(books) // 这个是axios返回的数据是套了一层壳 详情见图1
    console.log(books.data) // 这个才是接口数据
})
```

发起GET请求

```
    axios({
      method:'GET',
      url:'http://www.liulongbin.top:3006/api/getbooks',
      params:{
       id:1
      }
    }).then(function(result){
    console.log(result.data)
    })

    axios.get('url地址',{
        params:{
         参数
        }
    })    
```

发起POSTt请求

## 二

```
axios({
    method:'POST',
    url:'http://www.liulongbin.top:3006/api/post',
    data:{
      name:'zs',
      age:18
    }
}).then(function(result){
console.log(result.data)
})

axios.get('url地址',{参数})     // 不和get一样还要写params 直接写参数就行
```

结合 async 和 await   作用： 可以不用  .then 方法了

```
document.querySelector('#btn').addEventListener('click',async function() {
// 如果调用某个方法的返回值是 promise 实例 则前面可以添加 await！
// await 只能用在被async "修饰"的方法中

    const result = await axios({
    method:'POST',
    url:'http://www.liulongbin.top:3006/api/post',
    data:{
      name:'zs',
      age:18
    }
})

console.log(result.data) 

})
```

结构赋值

## 三

```
document.querySelector('#btn').addEventListener('click',async function() {
    // 结构赋值的时候 使用 ： 进行重命名
    const {data: res} = await axios({
    method:'POST',
    url:'http://www.liulongbin.top:3006/api/post',
    data:{
      name:'zs',
      age:18
    }
})

console.log(res.data) 

})
```
