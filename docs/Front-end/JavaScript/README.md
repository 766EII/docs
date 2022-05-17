## 数组方法

#### 遍历（迭代）方法

- forEach()
  
  - 单纯遍历数组用
  
  - 参数：每个数组元素、每个元素索引号、数组本身

```javascript
var arr = [1,2,3]
var sum = 0;
arr.forEach((value,index,array)=>{
    console.log(value)
    console.log(index)
    console.log(array)
    sum += value;
})
console.log(value)
// 用此方法可以做一个简易的累加.
// 返回值是 undefined 所以没有返回值
```

- filter()
  
  - 筛选数组
  
  - 有返回值且是一个新数组
  
  - 参数：每个数组元素、每个元素索引号、数组本身

```javascript
var arr = [1,3,5,6,8,11,10];
var newArr = arr.filter((value,index)=>{
    // 筛选出偶数
    return value % 2 == 0；
})
console.log(newArr)
// 有返回值、且是一个新数组
// 新数组中的元素是通过检查指定数组中符合条件的所有元素
```

- some() 
  
  - 查找数组中是否有满足条件的元素
  
  - 返回值是布尔值，如果查找到这个元素，返回true，没找到返回false
  
  - 找到后理解终止循环
  
  - 参数：每个数组元素、每个元素索引号、数组本身

```javascript
var arr = [1,3,7]
var flag = arr.some((value,index)=>{
    return value < 7
})

var arr1 = ['red','yellow','blue']
var flag1 = arr1.some((value,index)=>{
    return value === 'blue'
})
console.log(flag) // true
console.log(flag1) // true
// 返回值是布尔值
// 且找到满足的元素后，立即终止循环
```

::: tip

值得一提的是：

- filter：查找满足条件的元素，返回的是一个数组，而且是把所有满足添加的元素返回回来

- some：查找满足条件的元素是否存在，返回的是一个布尔值，如果查找到第一个满足条件的元素就会终止循环

:::

- filter() 和 some() 的区别

```javascript
var arr = ['red','blue','yellow','pink']
    arr.forEach((value,inde)=>{

        if(value === 'blue') {
            console.log('ok~')
            return true // 在 forEach中 return true 不会终止迭代
        }
        console.log(11)
    })

    arr.some((value,inde)=>{

        if(value === 'blue') {
            console.log('ok~')
            return true  // 在 some 中 return true 会终止迭代
            // 这里为啥 ruturn true：
            // return 出一个true 就表示我们找到了这个元素可以终止循环，
            // 要是false就表示没有找到该元素，还会继续循环下去
        }
        console.log(11)
    })
    // filter 和 forEach 一样 遇到 return true 不会终止迭代
    arr.filter((value,inde)=>{

        if(value === 'blue') {
            console.log('ok~')
            return true  
        }
        console.log(11)
    })
```

::: tip

值得总结的是：如果查询数组中唯一的元素，用 some 方法更合适

:::

---

## 字符串方法

#### es5新增

- str.trim()
  
  - 作用：去除字符串两端的空白，不会去除中间的空格（英文当中，中间的空白一般有作用
  
  - 有返回值，返回一个新字符串
  
  - 没有参数

```javascript
var str = '     hello,world and Alan    '
    console.log(str)
    var newStr = str.trim() // 有返回值 返回一个新字符串
    console.log(newStr)
```

> 案例 验证表单用户输入空格 不提示 可以去除用户输入的空格

```html
<body>
     <input ype="text" name=""> <button>提交</button>
     <div></div>
</body>


<script type="text/javascript">
    var ipt = document.querySelector('input')
    var btn = document.querySelector('button')
    var div = document.querySelector('div')

    btn.onclick = function() {
        // 有时候用户只输入空格，这样也能提交 
        // 我们可以去除空格，这样就能防止用户输入空格了
        var str = ipt.value.trim()
        if(str === '') {
            alert('请输入字符')
        }else {
            console.log(str)
            console.log(str.length)
            div.innerHTML = str
        }
    }
</script>
```

---

## 对象方法

#### es5新增方法

- Object.defineProperty()
  
  - 作用：修改和增加对象属性、是否重写属性
  
  - 参数：需要修改的对象，该对象里的值，以对象的形式书写

```javascript
var obj = {
        id: 1,
        name: 'apple',
        num: 7,
    }
    // 之前修改属性和增加属性的方法
    // obj.num = 7.7
    // obj.price = 99
    // console.log(obj)

    Object.defineProperty(obj,'num', {
        value: 77 // value 设置属性的值，有就修改，没有就增加
    });
    Object.defineProperty(obj,'price',{
        value: 999
        enumerable:true // 因为price 是通过defineProperty增加的，
                        // 所以自带不被遍历属性 可以改为true 就能遍历出来
    });

    Object.defineProperty(obj,'id',{
        // 是否重写，有些属性是不允许被重写的，比如id，id是唯一的
        writable:false // 可选值 true | false
    });

    Object.defineProperty(obj,'address',{
        value:'广州从化环市东路116号',
        // 是否被遍历出来，地址一般是隐私的，所以不需要被遍历。
        enumerable:false, // 可选值 true | false 默认false

        // 是否被删除 当属性为false时，不允许再次被修改特性
        // 就是你在声明一次 defineProperty方法 
        // 且修改address的configurable值为true 是不行的 会报错
        configurable:false // 可选值 true | false 默认false
    })

    // 遍历obj对象
    console.log(Object.keys(obj))            
    // 删除 obj属性
    delete obj.address
    console.log(obj)
```

- Object.keys( )
  
  - 用于获取对象自身所有属性
  
  - 返回一个由属性名组成的数组

```javascript
        var obj = {
			name:'xiaomi',
			age:12,
			price:'1222',
			id:1
		}
		var arr = Object.keys(obj)
		console.log(arr) // 一个数组，里面的值为属性名
        // 可以用forEach遍历出属性名，记住是属性名，没有属性值
		arr.forEach((value,index)=>{
			console.log(value)
		})
```