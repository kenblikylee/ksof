module.exports = (function() {
  const items = new WeakMap()
  return class Queue {
    constructor() {
      items.set(this, [])
    }
    enqueue(...elements) {
      items.get(this).push(...elements)
    }
    dequeue() {
      return items.get(this).shift()
    }
    front() {
      return items.get(this)[0]
    }
    isEmpty() {
      return items.get(this).length === 0
    }
    size() {
      return items.get(this).length
    }
    print() {
      console.log(items.get(this).toString())
    }
  }
})()
