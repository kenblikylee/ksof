let _items = Symbol()

module.exports = class Stack {
  constructor() {
    this[_items] = []
  }
  push(...elements) {
    this[_items].push(...elements)
  }
  pop() {
    return this[_items].pop()
  }
  peek() {
    return this[_items][this[_items].length - 1]
  }
  isEmpty() {
    return this[_items].length == 0
  }
  size() {
    return this[_items].length
  }
  clear() {
    this[_items] = []
  }
  print() {
    console.log(this[_items].toString())
  }
}