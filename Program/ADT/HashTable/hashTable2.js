const LinkedList = require('../LinkedList/linkedList1')

// lose-lose 散列函数
var loseloseHashCode = function(key) {
  var hash = 0
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

// 冲突解决
// 1. 分离链接法
var ValuePair = function(key, value) {
  this.key = key
  this.value = value
  this.toString = function() {
    return `[${this.key}-${this.value}]`
  }
}

module.exports = function HashTable() {
  var table = []
  this.put = function(key, value) {
    var position = loseloseHashCode(key)
    if (table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
    console.log(`${position} - ${key}`)
  }
  this.get = function(key) {
    var position = loseloseHashCode(key)
    if (table[position] !== undefined) {
      var current = table[position].getHead()
      while(current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if (current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }
  this.remove = function(key) {
    var position = loseloseHashCode(key)
    if (table[position] !== undefined) {
      var current = table[position].getHead()
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element)
          if (table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if (current.element.key === key) {
        table[position].remove(current.element)
        if (table[position].isEmpty()) {
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }
  this.print = function() {
    for (var i  = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ': ' + table[i])
      }
    }
  }
}
