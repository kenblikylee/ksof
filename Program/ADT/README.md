# Javacript 数据结构与算法

## ES6 新特性

- let const
- 模版字面量
- 箭头函数
- 函数的参数默认值
- 声明展开和剩余参数
  - 数组解构
    - `var [x, y] = ['a', 'b']`
    - `[x, y] = [y, x]`
  - 对象解构
- class
  - extends
  - super
  - get set
- 其他
  - 列表迭代器、类型数组、Set、Map、WeakSet、WeakMap、模块、尾调用、Symbol ...

## 数组

- 创建和初始化
  - `var daysOfWeek = new Array()`
  - `var daysOfWeek = new Array(7)`
  - `var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')`
  - `var daysOfWeek = []`
  - `var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`
- 添加元素
  - 末尾添加
    - `nums[nums.length] = 10`
    - `nums.push(10)`, `nums.push(10, 11)`
  - 首位添加
    - `nums.unshift(-2)`, `nums.unshift(-4, -3)`
- 删除元素
  - 末尾删除
    - `nums.pop()`
  - 首位删除
    - `nums.shift()`
- 在任意位置添加和删除元素
  - 删除开始索引为5的3个元素: `nums.splice(5, 3)`
  - 在索引为5处插入3个元素: `nums.splice(5, 0, 1, 2, 3)`
- 数组常用方法参考
  - indexOf
  - lastIndexOf
  - forEach
  - every
  - some
  - filter
  - map
  - reduce
  - slice
  - sort
  - reverse
  - join
  - concat
  - toString
  - valueOf
- 数组合并
  - concat
- 迭代器方法
  - every
  - some
  - forEach
  - map filter
  - reduce
- 排序
  - reverse
  - sort
    - 字符串排序
      - 比较 ASCII 码
      - 忽略大小写：toLowerCase()
      - 带重音符: localCompare
- 搜索
  - indexOf
  - lastIndexOf
  - ES6
    - find
    - findIndex
  - ES7
    - includes
- 数组转字符串
  - toString
  - join
- 类型数组
  - 存储单一类型的数组
  - `let arr = new TypedArray(length)`
  - TypedArray
    - Int8Array
    - Uint8Array
    - Uint8ClampedArray
    - Int16Array
    - Uint16Array
    - Int32Array
    - Uint32Array
    - Float32Array
    - Float64Array
- ES6+ES7 新增方法
  - copyWhthin
  - entries
  - includes
  - find
  - findIndex
  - fill
  - from
  - keys
  - of
  - values

## 栈

闭包：
- http://www.w3schools.com/js/js_function_closures.asp

## 队列

Javascript 事件循环：
- Tasks & Microtasks Queue
- https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

## 链表


