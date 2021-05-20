const BST = require('./BinarySearchTree')
const AVL = require('./AVLTree')

var bst = new BST()
var avl = new AVL()

insert(bst)
insert(avl)

function insert(tree) {
  tree.insert(11)
  tree.insert(7)
  tree.insert(15)
  tree.insert(5)
  tree.insert(3)
  tree.insert(9)
  tree.insert(8)
  tree.insert(10)
  tree.insert(13)
  tree.insert(12)
  tree.insert(14)
  tree.insert(20)
  tree.insert(18)
  tree.insert(25)
}

function output(tree) {
  var out = []
  tree.preOrderTraverse(k => out.push(k))
  console.log('[' + out.toString() + ']')
}

console.log('')
console.log('BST 前序遍历')
output(bst)

console.log('')
console.log('AVL 前序遍历')
output(avl)

console.log('')

// console.log(tree.getRoot())
// tree.insert(6)
// console.log(tree.getRoot())

// console.log('')
// console.log('inOrderTraverse')
// tree.inOrderTraverse(console.log)

// console.log('')
// console.log('preOrderTraverse')
// tree.preOrderTraverse(console.log)

// console.log('')
// console.log('postOrderTraverse')
// tree.postOrderTraverse(console.log)

// console.log('')
// console.log('min', tree.min())
// console.log('max', tree.max())

// console.log('')
// console.log('search 10', tree.search(10))

// console.log('')
// console.log('after removing 15')
// tree.remove(15)
// tree.preOrderTraverse(console.log)
