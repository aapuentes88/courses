class Node {
  constructor(value) {
    this.value = value,
      this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null,
      this.bottom = null,
      this.length = 0
  }

  peek = () => {
    return this.top;
  }

  push = (value) => {
    const n = new Node(value);

    if (this.length === 0) {
      this.top = n;
      this.bottom = n;
    } else {
      let holding = this.top;
      this.top = n;
      this.top.next = holding;
    }
    this.length++;
    return this;
  }

  pop = () => {

    if (!this.top) return null;

    let top = this.top;
    let newTop = top.next;
    this.top = newTop;
    this.length--;
    return top;
  }

}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("youtube");
myStack.push("microsoft");

console.log(myStack);

console.log(myStack.pop());
console.log(myStack.pop());
console.log("---------------------------------");

console.log(myStack);
console.log("---------------------------------");

module.exports = { Node, Stack };