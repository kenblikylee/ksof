// #4 实现二叉树先序，中序和后序遍历
// <span>分别按照二叉树先序，中序和后序打印所有的节点。</span>

function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

function preOrderTraverse(node, callback) {
  function _pre(node, callback) {
    if (node !== null) {
      callback(node.val)
      _pre(node.left, callback)
      _pre(node.right, callback)
    }
  }
  _pre(node, callback)
}

function inOrderTraverse(node, callback) {
  function _in(node, callback) {
    if (node !== null) {
      _in(node.left, callback)
      callback(node.val)
      _in(node.right, callback)
    }
  }
  _in(node, callback)
}

function postOrderTraverse(node, callback) {
  function _post(node, callback) {
    if (node !== null) {
      _post(node.left, callback)
      _post(node.right, callback)
      callback(node.val)
    }
  }
  _post(node, callback)
}

function threeOrders( root ) {
  var ans = Array.of([], [], [])
  preOrderTraverse(root, v => ans[0].push(v))
  inOrderTraverse(root, v => ans[1].push(v))
  postOrderTraverse(root, v => ans[2].push(v))
  return ans
}

var testCase = new TreeNode(1)
testCase.left = new TreeNode(2)
testCase.right = new TreeNode(3)

console.log(threeOrders(testCase))

console.log('')
