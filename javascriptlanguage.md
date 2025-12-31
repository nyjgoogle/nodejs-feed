### 语言基础
```js
//严格模式
function doSomething(){
    "use strick"
    //函数体
}
```
控制语句只在执行多条语句时要求必须有代码块。


#### 变量
有3个关键字可以声明变量：var const let

在函数体中去掉了var 操作符，定义的变量就变成了全局变量。不推荐。

可以在一条语句中用逗号分隔每个变量。
```js
var message = "hi",
    found = false,
    age = 29;
```
var 声明的范围是函数作用域，let声明的范围是块做用域。
let 声明的变量不会再作用域中被提升。

全局声明：使用let再全局作用域中声明的变量不会成为window对象的属性（var声明的变量则会）。
```js
var name = "john";
console.log(window.name);//john
let age = 16;
console.log(window.age);//undefined














### 浏览器里直接能用的全局变量或方法
1. 窗口与环境本身(Window & Global)
window
self（Web Worker /iframe 统一用）
top / parent
globalThis
特点：不做业务，只描述我在哪个世界里
2. DOM入口（文档世界）
document
Document
HTMLElement
Node
Element
特点：命令是名词/类型名，首字母大写-> 构造器/接口。
3. 定时器 & 任务调度
setTimeout
setInterval
clearTimeout
requestAnimationFrame
queueMicrotask
特点：命名规律动词开头，表示注册一个未来行为。
4. 浏览器能力API（Web APIs)
存储：
    localStorage
    sessionStorage
    indexedDB
网络：
    fetch
    XMLHttpRequest
    WebSocket
多媒体
    Audio
    Video
    MediaDevices
    navigator.mediaDevices
硬件/系统
    navigator
    screen
    location
    history
特点：大多是名词和名词短语，代表浏览器帮你管的资源。
5. 用户交互 & UI
    alert
    confirm
    prompt
特点：古老、同步阻塞、


背后真正的规则是：Web IDL (Web Interface Definition Language)
1. 大写开头-> 构造器/接口
2. 小写开头->实例或工具函数
3. 名词-> 状态/资源 读属性，调方法。
4. 动词-> 行为/注册动作