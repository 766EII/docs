# 导读

小程序的一些基础语法

## Mustache {{ }}

在页面.js里data定义的数据、在wxml里直接使用

```javascript
//index.wxml
<text>{{ message }}</text>
<text>{{ num }}</text>
<view data-num="{{ flag }}">在标签属性中使用</view>
// index.js
page({
    data:{
    message:'hello,world',
    num:77,
    flag:true
}
})
```

动态绑定（vue里要用 v-bind）

```javascript
//index.wxml
<img src="imgSrc" />

// index.js
page({
    data:{
    imgSrc:'xxx.xxx.xxx'
}
})
```

还可以进行一些运算、表达式

```javascript
//index.wxml
<text>{{ randomNum }}</text>
<text>{{ flag? 'hello'?'hi' }}</text>
// index.js
page({
    data:{
    //计算0~10的随机数
    randomNum:Math.random()*10,
    flag:true
}
})
```

:::details 表达式和语句注意区分

- 表达式
  
  - 数字运算
  
  - 字符串拼接
  
  - 三目运算符

- 语句
  
  - if for 这些语句

:::

## 事件渲染

- bindtap

在小程序不存在HTML中的onclick鼠标点击事件，通过bindtap来触发点击/触摸事件

```javascript
//index.wxml
<button bindtap="btnTap">点击/触摸</button>

<view bindtap="outMsg">
    <button>按钮</button>
</view>

// index.js
page({
    data:{

},
// 不用定义在 methods 里
btnTap(){
    console.log('点击了该按钮)
}
outMsg(e){
    // 这里区分下 e.target 和 e.currentTarget
    // 当我们点击按钮的时候，点击事件以冒泡的方式向外扩散，也会触发view和tap的事件处理函数
    // 此时，对于外层的view来说
    //e.target指向的是触发事件的源头组件；因此，e.target是内部的按钮组件
    //e.currentTarget指向的是当前正在触发的那个组件；因此，是当前的view组件
}
})
```

通过this.setData()方法，可以给data中的数值修改

(vue里面直接用this指向data然后修改data数值，小程序里不可以用this)

```javascript
//index.wxml
<text>{{ count }}</text>
<button bindtap="btnTap">+1</button>
<text>{{ msg }}</text>
// index.js
page({
    data:{
       count:0,
       msg:'hi~'
},
btnTap(){
// this.setData参数是对象
    this.setData({
    // 键：data里的名字
    // 值：就是要给data里的数据修改的新值，
    // 这里修改的值因为还在data里，所以得加this.data.count
    count:this.data.count + 1
    msg:'hellow'
})


}
})
```

事件传参，通过 data-* 自定义属性传参

（vue里直接 @click="btnTap(1)" 这样就给事件传了参数1,小程序里不可以)

```javascript
//index.wxml
// info参数名字
// 数值1是参数的
<button data-info="{{1}}"  bindtap="btnTap">传参</button>

// index.js
page({
   btnTap(e){
    // 通过e.target.dataset.参数名 获取参数
    // dataset是一个对象，包含了所有通过 data-*传递过来的参数
    console.log(e.target.dataset.info)
}
})
```

- bindinput

通过bindinput来相应文本框输入事件

```javascript
//index.wxml
<input type='text' bindinput="iptHandler">

// index.js
page({
    iptHandler(e){
    // e.detail.value 是变化过后，文本框最新的值
    console.log(e.detail.value)
}
})
```

## 条件渲染

```javascript
//index.wxml
// wx:if 通过删除DOM树上的元素来显示隐藏
<text wx:if="{{ true }}">显示</text>
<text wx:if="{{ false }}">隐藏</text>

<view wx:if="{{ false }}">1</view>
<view wx:elif="{{ false }}">2</view>
<view wx:else>3</view>

// hidden 通过css样式 display：none
<view hidden="{{ true }}">隐藏</view>

// index.js
page({
    data:{
    flag:true
}
})
```

结合容器来使用 wx:if

如果要一次性控制多个组件的展示与隐藏，可以使用将多个组件包裹起来，并在标签上使用wx:if属性来控制

并不是组件，只是一个包裹性质的容器，不会再页面中渲染

```javascript
<block wx:if="{{ true }}">
    <view>1</view>
    <view>2</view>
</block>
```

## 数组和对象循环

vue里的v-for="（index,item) in arr"，:key='唯一的值' 不能用索引号替代，小程序可以的用索引号替代

数组循环

```javascript
//index.wxml
<view wx:for="{{ arr }}" wx:key='item.id' {{item.name}}>
    // 默认情况下 索引号为 index 当前项为item,可手动修改
    <text>当前索引号:{{index}}</text>
    <text>id:{{item.id}}</text> <text>name:{{item.name}}</text>
</view>
//1、wx:for="{{ 数组或对象 }}" wx:for-item='当前循环项名称' wx:for-index="当前索引号名称"
//2、wx:key='唯一的值'用来提高列表渲染性能，没有id，可以用index替代
//注意点：wx:for的数组除了里层能访问，外层也能访问例如外层view内的{{item.name}}，作用不大

// index.js
page({
    data:{
      arr:[
            {id:1,name:'zs'},
            {id:2,name:'ls'}
          ]
}
})
```
