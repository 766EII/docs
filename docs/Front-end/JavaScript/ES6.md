### 前言

包含了ES6及ES7、8、9以上的内容

## 声明变量

- let
  - 关键词：块级作用域、不存在变量提升

```javascript
// 变量不能重复声明 (var可以)
        let name = 'Alan'
        let name = 'andy' // name 变量被重复声明2次 会报错


// 块级作用域 （if else for while
        {
            let a = 10
        }


// 不存在变量提升
// var存在 相当于先做 var b; 因为没有赋值，所有打印出undefined
        console.log(b) 
        var b = 10

        console.log(c)
        let c = 10 // let不存在 会报错


// 不影响作用域链
        {
            let school = '北大';
            function f1() {
                console.log(school) // 能打印出school
            }
            f1() 
        }
```

- let 一个小案例

```javascript
div {
            width: 60px;
            height: 20px;
            border: 1px solid black;
            float:left;
            margin-right: 10px;
        }

<div></div>
<div></div>
<div></div>


// 案例 遍历并绑定事件
        var items = document.querySelectorAll('div')
        for(var i = 0;i<items.length;i++){
            items[i].onclick = function() {
            this.style.background = 'pink'
            // items[i].style.background = 'pink' 
            // 这里说下为啥不能用这一句
            // (var i = 0) 小括号声明的i的作用域是外面的，页面渲染好了以后 i = 3, 明显 item[3]没有这个元素
            // 我们可以(let i = o) 这样 i 就是一个块级作用域了 就能使用上面的代码了
            }
        }
```

- const
  
  - 关键词：块级作用域、声明常量
  
  - 常量：不能修改的量被称为常量

```javascript
// const 不能不赋值
        const a; // 会报错 因为没赋值

// 常量的值不能修改
        const a = 10
        a = 20; // 会报错、因为你修改了常量

// 块级作用域
        {
            const a = 10;
        }
        console.log(a) // 访问不到 a 


// 对于给数组和对象的元素修改，不算做对常量的修改、所以不会报错
// 所以数组和对象常用 const 声明好点
    const arr = ['pink','red','green','black']
    arr.push('yellow')
    console.log(arr)
```

:::details var let const 三者区别
 1、变量提升

    var有，let和const没有

2、块级作用域

   let、const有，var没有

:::

## 箭头函数

箭头函数允许我们用更短的语法定义函数。箭头函数可用于替代传统函数function() {}。

下面看看箭头函数和其他函数不同的几个特性

- this是静态的，this始终指向函数声明时所在作用域下的this的值

```javascript
function f1(){
            console.log(this.name)
        }

        let f2 = () => {
            console.log(this.name)
        }
        window.name = 'window'
        const obj = {
            name:'obj'
        }
        // 先直接调用
        f1() // window
        f2() // window

        // 修改this指向 都指向了 obj这个对象
        f1.call(obj) // obj
        f2.call(obj) // window
        // 可见尽管修改了this指向、箭头函数的this指向还是和原先的一样
```

- 不能作为构造函数实例化对象

```javascript
        let Star = () => {
            this.name = 'Alan',
            this.age = 19
        }
        const alan = new Star() // 报错
```

- 不能使用 arguments 变量
  
  - arguments 用来存储实参

```javascript
let f1 = () => {
    console.log(arguments)
}
console.log(f1(1,2,3))
```

- 箭头函数的缩写

```javascript
        // 1) 省略小括号,当形参有且只有一个的时候
        let f1 = n => {
            return n + n
        }
        console.log(f1(1))
        // 2) 省略大括号，当代码体只有一条语句的时候，
        // 此时 rerurn 也必须省略，而且执行结果就是函数的返回值
        let f2 = n => n * n
        console.log(f2(5))
```
