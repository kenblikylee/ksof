const Graph = require('./graph')

var g = new Graph()
var vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i])
}

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('C', 'D')
g.addEdge('C', 'G')
g.addEdge('D', 'G')
g.addEdge('D', 'H')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('E', 'I')

console.log(g.toString())

function printNode(value) {
  console.log(`Visited vertext: ` + value)
}

console.log('\n广度优先搜索')
g.bfs(vertices[0], printNode)

// 打印从 A 点到其他点的最短路径
console.log('\n广搜寻找最短路径')
g.shortestPath(vertices[0])

// 深度优先搜索
console.log('\n深度优先搜索')
g.dfs(printNode)

console.log('')
