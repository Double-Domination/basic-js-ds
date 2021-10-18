const { ListNode } = require('../extensions/list-node.js');

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
module.exports = class Queue {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  getUnderlyingList() {
    return this.root;
  }

  enqueue(recivedValue) {
    if (this.size === 0) {
      this.root = new ListNode(recivedValue);
    } else {
      //iterate to last
      let current = this.root;

      while (current.next) {
        //change to next
        current = current.next;
      }

      //append
      current.next = new ListNode(recivedValue);
    }

    this.size += 1;
  }

  

  
  dequeue() {
    if (this.root) {
      let result;
      result = this.root.value;
      //go nexxt
      this.root = this.root.next;
      this.size -= 1;
      return result;
    }
  }
};
