const HashTable = require('./hashTable4')

var hash = new HashTable()

hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')

console.log('')
hash.print()

console.log('')
console.log(hash.get('Jonathan'))

console.log('')
// hash.remove('Jonathan')
hash.remove('Jamie')
// hash.remove('Sue')
hash.print()
// hash.remove('Gandalf')
// console.log('get Gandalf', hash.get('Gandalf'))
