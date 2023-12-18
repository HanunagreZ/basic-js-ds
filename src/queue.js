const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor (array) {
  this.array = []
}
  
getUnderlyingList() {
  let list = null;
  for (let i = 0; i < this.array.length; i++)
    list = {value: this.array[i], next: list};
    console.log(list)
  return list;
}

enqueue(value) {
  this.array.unshift(value)
  console.log(this.array)
}

dequeue() {
  let deq = this.array[this.array.length - 1]
  this.array.pop()
  console.log(deq)
  return deq
  // remove line with error and write your code here
}
}

module.exports = {
  Queue
};
