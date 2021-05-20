const Set = require('./set')

// let set = new Set()

// set.add(1)
// set.add(2)
// set.add(3)
// console.log(set.size())
// console.log(set.sizeLegacy())
// console.log(set.values())
// console.log(set.valuesLegacy())
// set.print()
// set.remove(1)
// console.log(set.size())
// console.log(set.sizeLegacy())
// set.print()
// set.clear()
// console.log(set.size())
// console.log(set.sizeLegacy())
// set.print()
// console.log(set.has(1))

let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
setB.add(5)

let unionAB = setA.union(setB)
console.log(unionAB.values())

let intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values())

let differenceAB = setA.difference(setB)
console.log(differenceAB.values())

let setC = new Set()
setC.add(1)
setC.add(2)
setC.add(3)
setC.add(4)
setC.add(5)

console.log('setA is subset of setB', setA.subset(setB))
console.log('setA is subset of setC', setA.subset(setC))

console.log()
