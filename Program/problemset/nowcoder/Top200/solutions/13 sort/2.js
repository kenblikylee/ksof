// #2 排序
// 给定一个数组，请你编写一个函数，返回该数组排序后的形式。

function swap(arr, x, y) {
  var tmp = arr[y]
  arr[y] = arr[x]
  arr[x] = tmp
}

// 解法1: 冒泡排序
function MySort1( arr ) {
  // write code here
  for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 1; j < arr.length; j++) {
          if (arr[j-1] > arr[j]) {
              swap(arr, j-1, j)
          }
      }
  }
  return arr
}

// 解法2: 选择排序
function MySort2( arr ) {
  // write code here
  for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i+1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            // swap
              [arr[i], arr[j]] = [arr[j], arr[i]]
          }
      }
  }
  return arr
}

// 解法3: 插入排序
function MySort3( arr ) {
  // write code here
  let len = arr.length
  for (var i = 1; i < len; i++) {
      var insertion = arr[i]
      var j = i
      while (j>0 && arr[j-1] > insertion) {
        arr[j] = arr[j-1]
        j--
      }
      arr[j] = insertion
  }
  return arr
}

// 解法4: 快速排序
function MySort( arr ) {
  // write code here
  function partition(arr, left, right) {
    var pivot = arr[Math.floor((left+right)/2)],
      i = left,
      j = right
    while (i <= j) {
      while (arr[i] < pivot) i++
      while (arr[j] > pivot) j--
      if (i <= j) {
        // swap i j
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      }
    }
    return i
  }
  function quickSort(arr, left, right) {
    if (arr.length > 1) {
      var index = partition(arr, left, right)
      if (left < index - 1) {
        quickSort(arr, left, index-1)
      }
      if (right > index) {
        quickSort(arr, index, right)
      }
    }
    return arr
  }
  return quickSort(arr, 0, arr.length - 1)
}

console.log(MySort([5,2,3,1,4]))

console.log(MySort([884688278,387052570,77481420,537616843,659978110,215386675,604354651,64838842,830623614,544526209,292446044,570872277,946770900,411203381,445747969,480363996,31693639,303753633,261627544,884642435,978672815,427529125,111935818,109686701,714012242,691252458,230964510,340316511,917959651,544069623,193715454,631219735,219297819,151485185,986263711,805374069,915272981,493886311,970466103,819959858,733048764,393354006,631784130,70309112,513023688,17092337,698504118,937296273,54807658,353487181,82447697,177571868,830140516,536343860,453463919,998857732,280992325,13701823,728999048,764532283,693597252,433183457,157540946,427514727,768122842,782703840,965184299,586696306,256184773,984427390,695760794,738644784,784607555,433518449,440403918,281397572,546931356,995773975,738026287,861262547,119093579,521612397,306242389,84356804,42607214,462370265,294497342,241316335,158982405,970050582,740856884,784337461,885254231,633020080,641532230,421701576,298738196,918973856,472147510,169670404]))

console.log('end')
