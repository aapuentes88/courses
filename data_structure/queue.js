class Node {
  constructor(value) {
    this.value = value,
      this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null,
      this.last = null,
      this.length = 0
  }

  peek = () => {
    return this.first;
  }

  enqueue = (value) => {
    const n = new Node(value);

    if (this.length === 0) {
      this.first = n;
      this.last = n;
      //this.first.next = this.last;//no es necesario no me di cuenta    
    } else {
      this.last.next = n;
      this.last = n;
    }
    this.length++;
    return this;
  }

  dequeue = () => {

    if (!this.first) return null;
    let first = this.first;
    this.first = first.next;
    first.next = null;
    this.length--;
    if (first === this.last) this.last = this.first;
    return first;
  }

  empty = () => {
    return !this.length;
  }

}
const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

console.log(myQueue);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log("---------------------------------");

console.log(myQueue);
console.log("---------------------------------");

module.exports = { Queue };