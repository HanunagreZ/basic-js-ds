const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  constructor (array) {
    this.array = []
  }    
    
  push(element) {
    this.array.push(element)
    console.log(this.array)
  }

  pop() {
    let poping = this.array[this.array.length - 1]  
    this.array.pop()
    console.log(poping)
    return poping
  }

  peek() {
     let poping = this.array[this.array.length - 1]  
     console.log(poping)
     return poping
  }
}

module.exports = {
  Stack
};
