// 闭包 http://www.w3schools.com/js/js_function_closures.asp
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
// A closure is a function having access to the parent scope, even after the parent function has closed.

module.exports = (function() {
  const items = new WeakMap()
  return class Stack {
    constructor() {
      items.set(this, [])
    }
    push(...elements) {
      items.get(this).push(...elements)
    }
    pop() {
      return items.get(this).pop()
    }
    peek() {
      let s = items.get(this)
      return s[s.length - 1]
    }
    isEmpty() {
      return items.get(this).length == 0
    }
    size() {
      return items.get(this).length
    }
    clear() {
      items.get(this) = []
    }
    print() {
      console.log(items.get(this).toString())
    }
  }
})()