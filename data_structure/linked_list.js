class LinkedList {

  constructor(value, next = null) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  add = (value) => {
    const newElement = { value: value, next: null };
    this.tail.next = newElement;
    this.tail = newElement;
    this.length++;
  }

  prepend = (value) => {
    const newElement = { value: value, next: this.head };
    this.head = newElement;
    this.length++;
  }

  printList = () => {
    let count = 0;
    let element = this.head;
    while (count < this.length) {
      console.log(element);
      element = element.next;
      count++;
    }
  }

  insert = (index, value) => {
    const newElement = { value: value, next: null };
    if (index >= this.length)
      return this.add(newElement);

    let element = this.head;
    let count = 0;
    while (count < index - 1) {
      element = element.next;
      count++;
    }
    let nextElement = element.next;
    element.next = newElement;
    newElement.next = nextElement;
    this.length++;

  }

  remove = (index) => {

    if (index >= this.length)
      return null;

    let element = this.head;
    let count = 0;
    while (count < index - 1) {
      element = element.next;
      count++;
    }

    if (index === 0)
      this.head = element.next;
    element.next = element.next.next;
    this.length--;

  }

  //en el curso hay una solucion as eficiente, esta fue mia
  reverse = () => {
    const newHead = this.tail;
    let tmp = this.head;
    this.tail.next = this.head;

    while (tmp !== null) {
      tmp = tmp.next;
      if (tmp.next === this.tail) {
        this.tail.next = tmp;
        this.tail = tmp;
        tmp = this.head;
      }
      if (this.tail === this.head.next) {
        this.tail.next = this.head;
        this.tail = this.head;
        this.head = newHead;
        tmp = null;
        this.tail.next = tmp;

      }

    }

  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.prepend(3);
myLinkedList.add(5);
myLinkedList.add(6);
myLinkedList.add(7);
myLinkedList.printList();
myLinkedList.insert(1, 10);
//console.log(myLinkedList);
//console.log(myLinkedList.count());
console.log("-------------------------");
// myLinkedList.printList();
// myLinkedList.remove(1);
// console.log("-------------------------");
myLinkedList.printList();
console.log("-------------------------");
myLinkedList.reverse();
myLinkedList.printList();