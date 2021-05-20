let setA = new Set()

setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)

let unionAB = new Set()
for (let x of setA) unionAB.add(x)
for (let x of setB) unionAB.add(x)
console.log('unionAB', unionAB)

let intersection = function(setA, setB) {
  let intersectionSet = new Set()
  for (let x of setA) {
    if (setB.has(x)) {
      intersectionSet.add(x)
    }
  }
  return intersectionSet
}
console.log('intersectionAB', intersection(setA, setB))

let difference = function(setA, setB) {
  let differenceSet = new Set()
  for (let x of setA) {
    if (!setB.has(x)) {
      differenceSet.add(x)
    }
  }
  return differenceSet
}
console.log('differenceAB', difference(setA, setB))

console.log()
