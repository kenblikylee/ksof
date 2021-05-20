var map = new Map()

map.set('Gandalf', 'gandalf@email.com')
map.set('John', 'johnsnow@email.com')
map.set('Tyrion', 'tyrion@email.com')

console.log(map.has('Gandalf'))
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.get('Tyrion'))

var weakMap = new WeakMap()
var ob1 = { name: 'Gandalf' }
var ob2 = { name: 'John' }
var ob3 = { name: 'Tyrion' }
weakMap.set(ob1, 'gandalf@email.com')
weakMap.set(ob2, 'johnsnow@email.com')
weakMap.set(ob3, 'tyrion@email.com')

console.log('')
console.log(weakMap.has(ob1))
console.log(weakMap.get(ob3))
console.log(weakMap.delete(ob2))

console.log()