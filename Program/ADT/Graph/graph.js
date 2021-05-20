const Dictionary = require('../Dictionary/dict')
const Queue = require('../Queue/queue2')
const Stack = require('../Stack/stack5')

module.exports = function Graph() {
  var vertices = []
  var adjList = new Dictionary()

  var initializeColor = function() {
    var color = {}
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white'
    }
    return color
  }
  

  this.addVertex = function(v) {
    vertices.push(v)
    adjList.set(v, [])
  }
  this.addEdge = function(v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }
  this.toString = function() {
    var s = ''
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + '->'
      var neighbors = adjList.get(vertices[i])
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }

  // 广度优先搜索
  this.bfs = function(v, callback) {
    var color = initializeColor(),
      queue = new Queue()
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u)
      color[u] = 'grey'
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
      if (callback) {
        callback(u)
      }
    }
  }

  // 改进版广度优先搜索：求最短路径
  this.BFS = function(v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [],
      pred = []
    queue.enqueue(v)

    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0
      pred[vertices[i]] = null
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u)
      color[u] = 'grey'
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distance: d,
      predecessors: pred
    }
  }

  this.shortestPath = function(v) {
    var shortestPath = this.BFS(v),
      fromVertex = v
    for (var i = 0; i < vertices.length; i++) {
      var toVertex = vertices[i]
      if (toVertex === fromVertex) continue
      var path = new Stack()
      for (var v = toVertex; v !== fromVertex; v = shortestPath.predecessors[v]) {
        path.push(v)
      }
      path.push(fromVertex)
      var s = path.pop()
      while (!path.isEmpty()) {
        s += '-' + path.pop()
      }
      console.log(s)
    }
  }

  // 深度优先搜索
  var dfsVisit = function(u, color, callback) {
    color[u] = 'grey'
    if (callback) {
      callback(u)
    }
    var neighbors = adjList.get(u)
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i]
      if (color[w] === 'white') {
        dfsVisit(w, color, callback)
      }
    }
    color[u] = 'black'
  }
  this.dfs = function(callback) {
    var color = initializeColor()
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback)
      }
    }
  }
}
