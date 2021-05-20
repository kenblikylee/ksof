module.exports = class Stack {
  constructor() {
    this.items = []
  }
  push(...elements) {
    this.items.push(...elements)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length == 0
  }
  size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
  print() {
    console.log(this.items.toString())
  }
}