## 函数定义方式

- 命名函数

```javascript
function f1() {
    // 逻辑
}
f1() // 调用
```

- 匿名函数

```javascript
var f1 = function() {
    // 逻辑
}
f1() // 调用
```

- 利用 new Function('参数1'，‘参数2’，‘函数体’)
  
  - 了解即可

```javascript
var f1 = new Function('a','b','console.log(a+b)')
f1(1,2) // 调用函数 传参 a b 接收
console.dir(f1) // 检查里面是否有 __proto__
console.log(f instanceof Object) // true
```

- 关系

<img :src="$withBase('/blog-picture/javascript/1-1.png')">


::: tip

由此得出：所有函数都是 new Function 的实例(对象)，且函数也属于对象

:::

---

## 函数调用方式（6种）

- 普通函数 

```javascript
f1()
f1.call()
```

- 对象里的方法

```javascript
var obj = {
    say:function() {
    console.log('hi~')
}
}
obj.say()
```

- 构造函数

```javascript
function Star(name,age){
    this.name = name;
    this.age = age;
    this.sing:function(str) {
    console.log(str)
}
}
var ldh = new Star('ldh',18);
ldh.sing('吻别')
```

- 绑定事件函数

```javascript
btn.onclick = function() {} // 点击按钮调用
```

- 定时器函数

```javascript
setInterval(function(){},1000) // 这个由定时器自己每隔1秒调用一次
```

- 立即执行函数

```javascript
(function(){
    console.log('hello,world')
})();
// 立即执行函数是自动调用
```

---

## 函数内this指向

> 这些this指向，是当我们调用这些函数时候确定的。调用方式不用，决定了this指向的不同

- 普通函数；指向window

```javascript
function f1() {
    console.log(this)
}
window.f1() // 被window调用，所以指向window，一般情况下我们可以省略window
```

- 对象的方法;指向对象

```javascript
var o = {
    say:function(){
    consoel.log(this)
     }
}
o.say() 
```

- 构造函数；指向实例，及原型对象里的this也指向这个实例

```javascript
function Star(name) {
    this.name = name
    this.sing = function() {
    console.log(this)
}
}
Star.prototype.say = function() {
    console.log(this)
}
var ldh = new Star('ldh')
ldh.sing()
ldh.say()
```

- 绑定事件函数；this 指向函数调用者，btn是函数调用者

```javascript
btn.onclick = function() {} // 点击按钮调用
```

- 定时器函数；this指向 window

```javascript
setInterval(function(){
    console.log(this)
},1000) // 这个由定时器自己每隔1秒调用一次
```

- 立即执行函数；this指向 window

```javascript
(function(){
    console.log(this)
})();
// 立即执行函数是自动调用
```

---

## 修改函数this指向

- call()
  
  - 作用：修改this指向，调用这个函数，传递参数
  
  - 参数：this指向谁，传实参

```javascript
function f1(a,b) {
    console.log(this)
    console.log(a+b)
}
var o = {
    name:'chen-weibiao'
}
// 让f1里的this指向对象 o
f1.call(o,1,2)


// call主要作用：实现继承
function Father(name,age) {
    // 父构造函数里的this指向父类实例
    this.name = name;
    this.age = age
}
function Son(name,age) {
    // 子构造函数this指向子类实例
    Father.call(this,name,age)
}
var son = new Son('chen-weibiao',18)
console.log(son)
```

- apply()
  
  - 作用：调用该函数，修改this指向，传实参（必须是数组[伪数组]）

```javascript
var o = {
        name:'chenweibiao'
    }

function f1(arr) {
    console.log(this)
    console.log(arr) // 打印出来的是字符串 pink
}    
f1.apply(o,['pink']) // 参数必须是数组

// apply主要应用：借助于数学内置对象求最大值
console.log(Math.max(1,2,3)) // 3

var arr = [1,2,3]
var max = Math.max(Math.arr) // 这里让this指向 Math
console.log(max) // 3
```

- bind()
  
  - 作用：修改this指向且不调用函数，传实参
  
  - 如果有的函数我们不需要立即调用，但是又想改变这个函数内部的this指向，此时用bind

```javascript
var o = {
    name:'andy'
}
function fn(a,b) {
    console.log(this)
    console.log(a+b)
}
// 让this指向对象 o 且不会调用fn函数
//返回值是原函数改变this只会产生的新函数
var f = fn.bind(o,1,2)
f()

// 案例：我们有一个按钮，当我们点击后，就禁用这个按钮，且3秒之后开启这个按钮
var btn = document.querySelector('button')
btn.onclick = function() {
    var that = this
    btn.disabled = true
    setTimeout(function(){
    // this.disabled = false  此时不能用this 因为定时器里的this指向window
    that.disabled = false // 让that指向外部的this 定时器里面就能调用到btn了
},3000)
}
// 上面使我们之前的做法。有点麻烦 可以使用 bind
btn.onclick = function() {
    btn.disabled = true
    setTimeout(function(){
    this.disabled = false
}.bind(this),3000) // 使用bind 让定时器的this指向外部的this；外部的this就是btn
}

// 拓展下：生成多个按钮
var btns = document.querySelectorAll('button'); // 获取到的是一个伪数组 可以log出来自己看
for(var i = 0;i < btns.length;i++) {
    btns.disabled = true;
    setTimeout(function(){
    btns.disabled = false
}.bind(this),3000)  
}
```

---

:::details 总结

- 相同点: 都可以改变this指向

- 区别点：
  
  - call和apply会调用函数，bind不会
  
  - call和bind传递参数的形式一样，apply传递参数形式是数组

- 应用场景
  
  - call用作继承
  
  - apply经常跟数组有关系，比如借助于数学对象实现数组求最大最小值
  
  - bind不调用函数，但是会改变this指向，比如改变定时器内部的this指向

:::

---

## 严格模式

采用具有限制性的JavaScript变体的一种方式，即在严格的条件下运行js代码，简单来说就是多了一些限制

- 消除了语法上的一些不合理、不严谨支出，减少了一些怪异行为

- 消除了代码运行的一些不安全支出，保证代码运行的安全

- 提高编译器的效率，增加运行速度

---

如何开启严格模式

```javascript
<script>
    'use strict'
   // 下面的js代码就会按照严格模式执行代码

</script>

<script>
   (function(){
    'use strict'
// 下面的代码按照严格模式执行
})() 

</script>

<script>
function f1(){
    'use strict'
// 下面代码按照严格模式执行
}
function f2(){
 // 下面代码按照普通模式执行 
}
</script>
```

- 限制
1. 变量名必须先声明在使用

```javascript
'use strict'  // 注：下列代码块均开启了严格模式
num = 10;
console.log(num)
// 报错，因为没有先生命变量
```

2. 不能随意删除已经声明好的变量

```javascript
var num = 10;
delete num; // 报错
```

3. 严格模式下全局作用域中函数中的this 是 undefined 不再是window(重要)

```javascript
function f1() {
    console.log(this) // undefined
}
f1()
```

4. 严格模式下，如果构造函数不加new调用，this指向的是undefined，如果给他赋值则会报错

```javascript
function Star() {
    this.sex = '男'
}

Star() // 报错 要加new调用
```

5. 定时器 this指向还是指向window

```javascript
setTimeout(function(){
    console.log(this) // window
},1000)
```

:::tip

值得一提的是：除了全局作用域下的函数this不在指向window，而是undefined，其他this指向没有变化

:::

6. 严格模式下函数里面的参数不允许有重名

```javascript
function(a,a){
    console.log(a + a) // 报错参数重名了
}
fn(1,2)
```

7. 严格模式下，不允许在非函数的代码块内声明函数

```javascript
if(true){
    function f1(){} // !!! 语法错误
    f1()
}


for(var i = 0; i < 5;i++) {
    function f1(){}  // !!! 语法错误
    f1()
}


function f1() {
    function f2(){} // 合理
    f2()
}
```

--- 

## 高阶函数

**高阶函数是**对其他函数进行操作的**函数**，它**接收函数作为参数**或**将函数作为返回值输出**

- 符合这两个条件其中之一就是高阶函数
  
  - 接收函数作为参数
  
  - return出一个函数

```javascript
function f1(a,b,callback) {
    callback&&callback()
}
f1(function f2() {}) 
// f1接收了一个函数参数，所以此时f1就是一个高阶函数


function f3() {
    return function f4() {}
}
f3() // f3 rerun出一个函数 此时f3就是一个高阶函数
```

---

## 闭包

#### 先了解一下变量作用域

- 变量根据作用域的不同分为两种，全局变量和局部变量
  
  - 函数内部可以使用全局变量
  
  - 函数外部不可以使用局部变量
  
  - 当函数执行完毕，本作用域内的局部变量会销毁

#### 闭包概念

- 闭包(closuer) 指有权访问另一个函数作用域中变量的函数

- 闭包也是一个函数

```javascript
function fn() {
    var num = 10;

    function fun() {
    console.log(num) // 我们fun 这个作用域访问了另外一个函数fn里面的局部变量 num
                     // 此时 fn就是一个闭包
}
 fun()
}
fn() 
```

- 闭包的主要作用：延伸了变量的作用范围

```javascript
// 我们fn外面的作用域 可以访问fn内部的局部变量
function fn() {
    var num = 10;

    function fun() 
    console.log(num)
}
return fun
}
var f = fn()
f()
// 类似于
// f = function fun() {
//    console.log(num)
// }
```

- 闭包应用

```javascript
<ul class="nav">
		<li>apple</li>
		<li>小米</li>
		<li>华为</li>
		<li>三星</li>
</ul>

// 点击li输出当前li的索引号
// 1、 先用之前的方法
var lis = document.querySelector('.nav').querySelectorAll('li')
for(var i = 0;i< lis.length;i++){
// ② 我们可以给li添加一个index属性 
// 这样页面渲染好后，打印出来的就是我们动态添加的属性
    lis[i].index = i
    lis[i].oncick = function() {
    // console.log(i)
	// ① 这边不能直接输出 i 因为我们的点击事件是异步任务，
    // 而我们的for循环是同步任务，所以当页面一渲染好，i就已经等于4了。所以我们无论点那个li打印的都是4
    console.log(this.index)
}
}
console.log(lis) // 可以看到每一个li里都有一个index属性

// 使用闭包(面试)
for(var i = 0;i < lis.length;i++){
// 利用for循环创建了4个立即执行函数
// 每一个立即执行函数里的i分别是0、1、2、3
// 此时这个立即执行函数就是闭包，也被成为小闭包
    (function(i){
    lis[i].onclick = function(){
    console.log(i)
}
})(i)

}

// 3秒后，打印出所有li的内容
for(var i = 0;i < lis.length;i++){
    (function(i){
    setTimeout((){
    console.log(lis[i].innerHTML)
},3000)
})(i)

}

// 计算打车价格
// 起步价13元（3公里内），超出3公里，多一公里收5元
// 如果道路拥挤则多收10元
var car = (function(){
    var start = 13; // 起步价
    var total = 0;  // 总价
    return {
    // 正常价格
    price(n) {
    if(n <= 3) {
    total = start;
}else {
    total = start + (n-3) * 5
}
return total
}
    // 拥堵价格
    yongdu(flag){
            // 判断是否真的拥堵 真 再加10元 假 total原封不动
    return flag ? total + 10: total 
}

}
})()
console.log(car.price(5))
console.log(car.yongdu(true)) // 这里要先调 price 调yongdu才生效

```

---

## 递归函数

如果一个函数内部可以调用其本身，那么这个函数就是递归函数

简单理解：**函数内部自己调用自己**

递归函数的作用和循环效果一样

由于递归很容易发生“栈溢出”错误，所以必须要加**退出条件**

```javascript
var num = 1;
function fn() {
    console.log('打印这话6次')
    if(num == 6){
    return; // 递归里面必须加退出条件
}
    num++;
    fn()  // 内部自己调用自己
}
fn();
```

```javascript
// 典型应用: 利用递归求阶乘 
function f1(n) {
    if( n == 1) {
    return 1
}
    return n * f1(n - 1)
}
console.log(f1(3)) // 6

```

---

## 浅拷贝和深拷贝

浅拷贝只拷贝一层，更深层次对象级别的值拷贝应用

```javascript
var obj = {
    id: 1,
    name: 'Alan',
    msg:{
    age:19
}
}
var o = {}

for(var k in obj){
   // k 是键 也就是属性名 
   // obj[k] 是值 也就是属性值
	console.log(k)
	console.log(obj[k])
	o[k] = obj[k]
// 类似于 o[name] = Alan
}
console.log(o)
// 浅拷贝的缺点是你只能拷贝简单的数据，复制的数据你拷贝不正确
// 虽然打印出来的o有 msg 这个复杂的数据类型 但他们的引用地址都一样
// 就是说你改变了o里msg的age属性 obj里msg的age属性也跟着变 这显然是不好的
o.msg.age = 20
console.log(o)
console.log(obj)
```

<img :src="$withBase('/blog-picture/javascript/1-2.png')">


::: tip 浅拷贝语法糖

```javascript
Object.assin(o,obj) // 拷贝对象，被拷贝的对象
```

:::





深拷贝拷贝多层，每一级别的数据都会拷贝

```javascript
var obj = {
        id:1,
        name:'andy',
        msg:{
          age:18
        },
        color:['pink', 'black']
  };
// 深拷贝 封装函数
 var o = {};
 function deepCopy (newobj, oldobj) {
      for (var k in oldobj) {
        // 判断我们的【属性值】value 属于哪种数据类型
        // 1.【获取属性值 oldobj[k]】
        var item = oldobj[k];
        // 2.获取到属性值后判断是那种类型 这里先判断一下这个值是不是数组类型
       // 为什么要先判断是不是数组？  因为数组也属于下面的Object 如果在对象下面 数组就当对象来解析了
        if (item instanceof Array) {
          newobj[k] = []; //newobj的值初始化为一个空数组
          deepCopy(newobj[k], item)  //利用递归 再走一遍上层的代码
        } else if (item instanceof Object) {
          // 3.判断这个值是否是对象
          newobj[k] = {};
          deepCopy(newobj[k], item);
        } else {
          // 4.如果都不是 那就是简单类型的 那就直接把值赋给newobj[k]  newobj的值
          newobj[k] = item;
        }
      }
  }
 deepCopy(o, obj);
 console.log(o);
```


<img :src="$withBase('/blog-picture/javascript/1-3.png')">


:::warning

这里要先判断数组，不能先判断对象,因为数组也是对象

:::
