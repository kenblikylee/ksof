var Node = function (key) {
  this.key = key
  this.left = null
  this.right = null
}

var insertNode = function (node, element) {
  if (node === null) {
    node = new Node(element)
  } else if (element < node.key) {
    node.left = insertNode(node.left, element)

    if (node.left !== null) {
      // 确认是否需要平衡
      if ((heightNode(node.left) - heightNode(node.right)) > 1) {
        // 旋转
        if (element < node.left.key) {
          node = rotationLL(node)
        } else {
          node = rotationLR(node)
        }
      }
    }
  } else {
    node.right = insertNode(node.right, element)

    if (node.right !== null) {
      // 确认是否需要平衡
      if ((heightNode(node.right) - heightNode(node.left)) > 1) {
        // 旋转
        if (element > node.right.key) {
          node = rotationRR(node)
        } else {
          node = rotationRL(node)
        }
      }
    }
  }
  return node
}

var heightNode = function (node) {
  if (node === null) {
    return -1
  } else {
    return Math.max(heightNode(node.left), heightNode(node.right)) + 1
  }
}

// RR 向左的单旋转
var rotationRR = function(node) {
  var tmp = node.right
  node.right = tmp.left
  tmp.left = node
  return tmp
}

// LL 向右的单旋转
var rotationLL = function(node) {
  var tmp = node.left
  node.left = tmp.right
  tmp.right = node
  return tmp
}

// LR 向右双旋转
var rotationLR = function(node) {
  node.left = rotationRR(node.left)
  return rotationLL(node)
}

// RL 向左的双旋转
var rotationRL = function(node) {
  node.right = rotationLL(node.right)
  return rotationRR(node)
}

module.exports = function AVLTree() {
  var root = null
  this.insert = function (key) {
    root = insertNode(root, key)
  }

  this.getRoot = function() {
    return root
  }

  var inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback)
  }

  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback)
  }

  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }

  var minNode = function (node) {
    if (node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }
  this.min = function () {
    return minNode(root)
  }

  var maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  this.max = function () {
    return maxNode(root)
  }

  var searchNode = function(node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }
  this.search = function(key) {
    return searchNode(root, key)
  }

  var findMinNode = function(node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  var removeNode = function(node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      // 叶子节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // 只有一个子节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 有两个子节点
      var aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }
  this.remove = function(key) {
    root = removeNode(root, key)
  }
}
