// #5 最小的K个数
// 给定一个数组，找出其中最小的K个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。如果K&gt;数组的长度，那么返回一个空的数组

const less = (a, b) => b - a
const greater = (a, b) => a - b
class Heap {
  constructor(data, compartor) {
    this.data = data
    this.compartor = compartor || greater
    this.heapify()
  }
  size() {
    return this.data.length
  }
  heapify() {
    if (this.size() < 2) {
      return
    }
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }
  peek() {
    if (!this.size()) return null
    return this.data[0]
  }
  offer(val) {
    this.data.push(val)
    this.bubbleUp(this.size()  - 1)
  }
  poll() {
    if (!this.size()) return null
    if (this.size() === 1) return this.data.pop()

    let res = this.data[0]
    this.data[0] = this.data.pop()
    if (this.size()) {
      this.bubbleDown(0)
    }
    return res
  }
  swap(i, j) {
    if (i === j) {
      return
    }
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  bubbleUp(index) {
    // 向上调整
    while (index) {
      // 获取父节点索引
      const parentIndex = (index - 1) >> 1
      // const parentIndex = Math.floor((index - 1) / 2)
      // const parentIndex = (index - 1) / 2 | 0
      if (this.compartor(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }
  bubbleDown(index) {
    let lastIndex = this.size() - 1
    while (index < lastIndex) {
      let leftIndex = index * 2 + 1
      let rightIndex = index * 2 + 2
      let findIndex = index
      if (leftIndex <= lastIndex && this.compartor(this.data[leftIndex], this.data[findIndex]) < 0) {
        findIndex = leftIndex
      }
      if (rightIndex <= lastIndex && this.compartor(this.data[rightIndex], this.data[findIndex]) < 0) {
        findIndex = rightIndex
      }
      if (index !== findIndex) {
        this.swap(index, findIndex)
        index = findIndex
      } else {
        break
      }
    }
  }
}

function GetLeastNumbers_Solution(input, k)
{
    if (k > input.length) return []
    // write code here
    var h = new Heap(input, greater)
    var ans = []
    while (k--) {
        ans.push(h.poll())
    }
    return ans
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],4 ))
console.log('end')
