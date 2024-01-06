const { Stack } = require('./stack');

class QueueStack {
  constructor() {
    this.stack = new Stack();
  }

  peek = () => {
    return this.stack.bottom;
  }

  enqueue = (value) => {
    let top = this.stack.peek();
    this.stack.push(value);
    if (top) {
      top.next = this.stack.top;
      this.stack.top.next = null;
    }

    return this;
  }

  dequeue = () => {
    if (!this.stack.bottom) return null;
    let bottom = this.stack.bottom;
    this.stack.bottom = this.stack.bottom.next;
    if (bottom === this.stack.peek()) this.stack.top = this.stack.bottom;
    bottom.next = null;
    this.stack.length--;
    return bottom;
  }

}

const myQueueStack = new QueueStack();
myQueueStack.enqueue("Joy");
myQueueStack.enqueue("Matt");
myQueueStack.enqueue("Pavel");
myQueueStack.enqueue("Samir");

console.log(myQueueStack);

console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
console.log(myQueueStack.dequeue());
console.log("---------------------------------");

console.log(myQueueStack);
console.log("---------------------------------");