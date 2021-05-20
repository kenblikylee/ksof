// 更好的散列函数
var djb2HashCode = function(key) {
  var hash = 5381
  for (var i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i)
  }
  return hash % 1013
}

module.exports = function HashTable() {
  var table = []
  this.put = function(key, value) {
    var position = djb2HashCode(key)
    console.log(`${position} - ${key}`)
    table[position] = value
  }
  this.get = function(key) {
    return table[djb2HashCode(key)]
  }
  this.remove = function(key) {
    table[djb2HashCode(key)] = undefined
  }
  this.print = function() {
    for (var i  = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ': ' + table[i])
      }
    }
  }
}
