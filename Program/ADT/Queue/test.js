// const Queue = require('./queue1')
// const Queue = require('./queue2')

// let queue = new Queue()

// queue.enqueue('John')
// queue.enqueue('Jack')

// queue.enqueue('Camila')

// queue.print()
// console.log(queue.size())
// console.log(queue.isEmpty())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// queue.print()

// priorityQueue

const PriorityQueue = require('./priorityQueue')

let q = new PriorityQueue()

q.enqueue("John", 2)
q.enqueue("Jack", 1)
q.enqueue("Camila", 1)
q.print()
