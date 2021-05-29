// #3 设计LRU缓存结构
// <div>  设计LRU缓存结构，该结构在构造时确定大小，假设大小为K，并有如下两个功能 </div> <div>  <ul>   <li>    set(key, value)：将记录(key, value)插入该结构      <li>    get(key)：返回key对应的value值     </ul> [要求] </div> <div>  <ol>   <li>    set和get方法的时间复杂度为O(1)      <li>    某个key的set或get操作一旦发生，认为这个key的记录成了最常使用的。      <li>    当缓存的大小超过K时，移除最不经常使用的记录，即set或get最久远的。     </ol>  <div>   若opt=1，接下来两个整数x, y，表示set(x, y)<br> 若opt=2，接下来一个整数x，表示get(x)，若x未出现过或已被移除，则返回-1<br> 对于每个操作2，输出一个答案<br>  </div> </div>

function DLinkedNode(key = 0, value = 0, prev = null, next = null) {
  this.key = key
  this.value = value
  this.prev = prev
  this.next = next
}

function LRUCache(capacity) {
  var cache = new Map()
  var head = new DLinkedNode()
  var tail = new DLinkedNode()
  head.next = tail
  tail.prev = head

  this.get = function (key) {
    if (!cache.has(key)) {
      return -1
    }
    var node = cache.get(key)
    moveToHead(node)
    return node.value
  }
  this.set = function (key, value) {
    if (!cache.has(key)) {
      var node = new DLinkedNode(key, value)
      cache.set(key, node)
      addToHead(node)
      if (cache.size > capacity) {
        var removed = removeTail()
        cache.delete(removed.key)
      }
    } else {
      var node = cache.get(key)
      node.value = value
      moveToHead(node)
    }
  }

  function addToHead(node) {
    node.prev = head
    node.next = head.next
    head.next.prev = node
    head.next = node
  }
  function removeNode(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }
  function moveToHead(node) {
    removeNode(node)
    addToHead(node)
  }

  function removeTail() {
    var node = tail.prev
    removeNode(node)
    return node
  }
}

function LRU( operators ,  K ) {
  // write code here
  var cache = new LRUCache(K)
  var ans = []
  operators.forEach(([opt, key, value]) => {
    if (opt === 1) cache.set(key, value)
    else if (opt === 2) ans.push(cache.get(key))
  })
  return ans
}

console.log(LRU(
  [[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]],3
))

console.log('')
