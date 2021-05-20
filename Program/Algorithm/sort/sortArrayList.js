var swap = function(array, a, b) {
  var tmp = array[a]
  array[a] = array[b]
  array[b] = tmp
}

module.exports = function ArrayList() {
  var array = []
  this.insert = function(item) {
    array.push(item)
  }
  this.toString = function() {
    return array.join()
  }
  this.bubbleSort = function () {
    var length = array.length
    var count = 0
    for (var i = 0; i < length - 1; i++) {
      console.log(`round ${i}: `)
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          console.log(`swap ${array[j]} <-> ${array[j+1]}`)
          swap(array, j, j + 1)
          count++
        } else {
          console.log(`${array[j]} - ${array[j+1]}`)
        }
      }
      console.log(`sorted: `, this.toString(), '\n')
    }
    console.log(`\nswap count: ${count}`)
  }
  this.selectionSort = function () {
    var length = array.length,
      indexMin,
      count = 0
    for (var i = 0; i < length - 1; i++) {
      console.log(`round ${i}: `)
      indexMin = i
      for (var j = i + 1; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j
        }
      }
      if (i !== indexMin) {
        console.log(`swap ${array[indexMin]} <-> ${array[i]}`)
        swap(array, indexMin, i)
        count++
      }
      console.log(`sorted: `, this.toString(), '\n')
    }
    console.log(`\nswap count: ${count}`)
  }

  this.insertionSort = function() {
    var length = array.length,
      j, tmp
    for (var i = 1; i < length; i++) {
      j = i
      tmp = array[i]
      while (j > 0 && array[j - 1] > tmp) {
        array[j] = array[j - 1]
        j--
      }

      array[j] = tmp
      console.log(`round ${i}: `, this.toString())
    }
  }

  // 归并排序
  var mergeSortRec = function(array) {
    var length = array.length
    if (length === 1) {
      return array
    }
    var mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length)
    console.log('left: ', left.join())
    console.log('right: ', right.join())
    console.log('')
    return merge(mergeSortRec(left), mergeSortRec(right))
  }
  var merge = function(left, right) {
    var result = [],
      il = 0,
      ir = 0
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

    while (il < left.length) {
      result.push(left[il++])
    }

    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }
  this.mergeSort = function () {
    array =  mergeSortRec(array)
    console.log('\nsorted: ', this.toString())
  }

  // 快速排序
  var partition = function(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)],
      i = left,
      j = right
    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }
      while (array[j] > pivot) {
        j--
      }
      if (i <= j) {
        swap(array, i, j)
        i++
        j--
      }
    }
    return i
  }
  var quick = function(array, left, right) {
    var index
    console.log('left: ', left, ' right: ', right)
    console.log(array.join())
    if (array.length > 1) {
      index = partition(array, left, right)
      if (left < index - 1) {
        quick(array, left, index - 1)
      }
      if (index < right) {
        quick(array, index, right)
      }
    }
  }
  this.quickSort = function() {
    quick(array, 0, array.length - 1)
    console.log('\nsorted: ', this.toString())
  }

  // 堆排序
  var buildHeap = function(array) {
    var heapSize = array.length
    for (var i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, heapSize, i)
    }
  }
  var heapify = function (array, heapSize, i) {
    console.log('heapify', array, heapSize, i)
    var left = i * 2 + 1,
      right = i * 2 + 2,
      largest = i
    if (left < heapSize && array[left] > array[largest]) {
      largest = left
    }
    if (right < heapSize && array[right] > array[largest]) {
      largest = right
    }
    if (largest !== i) {
      swap(array, i, largest)
      heapify(array, heapSize, largest)
    }
  }
  this.heapSort = function() {
    var heapSize = array.length
    buildHeap(array)

    while (heapSize > 1) {
      heapSize--
      swap(array, 0, heapSize)
      heapify(array, heapSize, 0)
    }

    console.log('\nsorted: ', this.toString())
  }

  // 二分搜索
  this.binarySearch = function (item) {
    this.quickSort()

    var low = 0,
      high = array.length - 1,
      mid, element
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      element = array[mid]
      if (element < item) {
        low = mid + 1
      } else if (element > item) {
        high = mid - 1
      } else {
        return mid
      }
    }
    return -1
  }
}
