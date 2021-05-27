// const data = require('./top200.json')
// const set = new Set()

// data.forEach(item => item.tags.forEach((t) => set.add(t)))

// let tags = Array.from(set)
// let leetcodeTags = [
//   "array",
//   "dynamic-programming",
//   "string",
//   "math",
//   "tree",
//   "depth-first-search",
//   "greedy",
//   "hash-table",
//   "binary-search",
//   "breadth-first-search",
//   "two-pointers",
//   "sort",
//   "backtracking",
//   "design",
//   "bit-manipulation",
//   "stack",
//   "graph",
//   "linked-list",
//   "heap",
//   "recursion",
//   "union-find",
//   "sliding-window",
//   "divide-and-conquer",
//   "trie",
//   "segment-tree",
//   "ordered-map",
//   "queue",
//   "geometry",
//   "line-sweep",
//   "minimax",
//   "binary-indexed-tree",
//   "brainteaser",
//   "topological-sort",
//   "binary-search-tree",
//   "random",
//   "memoization",
//   "rejection-sampling",
//   "reservoir-sampling"
// ]

let pairs = new Map()
pairs.set('链表', 'linked-list')
pairs.set('排序', 'sort')
pairs.set('模拟', '')
pairs.set('栈', 'stack')
pairs.set('树', 'tree')
pairs.set('哈希', 'hash-table')
pairs.set('堆', 'heap')
pairs.set('分治', 'divide-and-conquer')
pairs.set('bfs', 'breadth-first-search')
pairs.set('数组', 'array')
pairs.set('递归', 'recursion')
pairs.set('动态规划', 'dynamic-programming')
pairs.set('双指针', 'two-pointers')
pairs.set('字符串', 'string')
pairs.set('dfs', 'depth-first-search')
pairs.set('二分', 'binary-search')
pairs.set('搜索', 'binary-search-tree')
pairs.set('位运算', 'bit-manipulation')
pairs.set('数学', 'math')
pairs.set('回溯', 'backtracking')
pairs.set('贪心', 'greedy')
pairs.set('图', 'graph')

module.exports = pairs
