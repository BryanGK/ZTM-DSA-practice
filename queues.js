class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return null;
    if (this.first === this.last) this.last = null;
    const value = this.first.value;
    this.first = this.first.next;
    this.length--;
    return value;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

// const myQueue = new Queue();
// console.log(myQueue.dequeue());
// console.log(myQueue.isEmpty());
// console.log(myQueue.enqueue(1));
// console.log(myQueue.enqueue(2));
// console.log(myQueue.enqueue(3));
// console.log(myQueue.enqueue(4));
// console.log(myQueue.peek());
// console.log(myQueue.dequeue());
// console.log(myQueue.peek());
// console.log(myQueue.enqueue(5));
// console.log(myQueue.isEmpty());


// implement a queue using stacks
class StackQueue {
  constructor() {
    this.first = [];
    this.last = []
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }
  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
}
