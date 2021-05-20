const Dictionary = require('./dict')

var dict = new Dictionary()

dict.set('Gandalf', 'gandalf@email.com')
dict.set('John', 'johnsnow@email.com')
dict.set('Tyrion', 'tyrion@email.com')

console.log(dict.has('Gandalf'))
console.log(dict.size())
console.log(dict.get('Tyrion'))

dict.delete('John')
console.log(dict.values())
console.log(dict.getItems())

console.log()
