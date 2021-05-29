// #6 求二叉树的层序遍历
// <p>  给定一个二叉树，返回该二叉树层序遍历的结果，（从左到右，一层一层地遍历）<br> 例如：<br> 给定的二叉树是{3,9,20,#,#,15,7},<br> <img alt="" src="https://uploadfiles.nowcoder.com/images/20210114/999991351_1610616074120/036DC34FF19FB24652AFFEB00A119A76" style="height: auto;width: 171.0px;"><br> 该二叉树层序遍历的结果是<br> [<br> <span> </span>[3],<br> <span> </span>[9,20],<br> <span> </span>[15,7]<br> ] </p> <div> </div>

function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}
function levelOrderTraverse(node, k = 0, callback) {
  if (!node) return
  callback(k, node.val)
  levelOrderTraverse(node.left, k+1, callback)
  levelOrderTraverse(node.right, k+1, callback)
}

function levelOrder(root) {
  var ans = []
  levelOrderTraverse(root, 0, (k, val) => {
    if (k === ans.length) {
      ans[k] = []
    }
    ans[k].push(val)
  })
  return ans
}