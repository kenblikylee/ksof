module.exports = function Queue() {
  let items = []
  this.enqueue = function (...elements) {
    items.push(...elements)
  }
  this.dequeue = function () {
    return items.shift()
  }
  this.front = function() {
    return items[0]
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.size = function() {
    return items.length
  }
  this.print = function() {
    console.log(items.toString())
  }
}
