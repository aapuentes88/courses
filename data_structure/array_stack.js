class ArrayStack {
  constructor() {
    this.arr = [];
  }

  peek = () => {
    return this.arr[this.arr.length - 1];
  }

  push = (value) => {
    this.arr.push(value);
    return this;
  }

  pop = () => {

    if (!this.arr.length) return [];
    const top = this.arr.pop()
    return top;
  }

}

const myArrStack = new ArrayStack();
myArrStack.push("google");
myArrStack.push("udemy");
myArrStack.push("youtube");
myArrStack.push("microsoft");

console.log(myArrStack);

console.log(myArrStack.pop());
console.log(myArrStack.pop());
console.log("---------------------------------");

console.log(myArrStack);
console.log("---------------------------------");