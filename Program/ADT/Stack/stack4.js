const items = new WeakMap()

module.exports = class Stack {
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