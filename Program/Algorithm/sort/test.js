const SortArrayList=  require('./sortArrayList')

function createNonSortedArray(size) {
  var array = new SortArrayList()
  for (var i = size; i > 0; i--) {
    array.insert(i)
  }
  return array
}

var array = createNonSortedArray(5)
console.log('origin list: ', array.toString())

// console.log('\nbubble sort:\n')
// array.bubbleSort()

// console.log('\nselection sort:\n')
// array.selectionSort()

// console.log('\ninsertion sort:\n')
// array.insertionSort()

// console.log('\nmerge sort:\n')
// array.mergeSort()

// console.log('\nquick sort:\n')
// array.quickSort()

// console.log('\nheap sort:')
// array.heapSort()

console.log('\nsearch 5: ', array.binarySearch(5))

console.log('')
