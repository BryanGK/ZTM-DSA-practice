// implement a stack using linked lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode
      this.top.next = holdingPointer;
    }
    this.length++;
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) this.bottom = null;
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

// const myStack = new Stack();
// console.log(myStack.isEmpty());
// myStack.push('Google');
// myStack.push('Udemy');
// myStack.push('YouTube');
// myStack.push('LinkedIn');
// console.log(myStack.peek());
// console.log(myStack.isEmpty());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack);

// implement a stack using arrays

class ArrayStack {
  constructor() {
    this.stack = []
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    this.stack.push(value);
    return this;
  }
  pop() {
    if (this.stack.length < 1) {
      return 'Empty stack, nothing to remove';
    }
    this.stack.pop();
    return this;
  }
  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new ArrayStack();
console.log(myStack.pop());
console.log(myStack.isEmpty());
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.isEmpty());
myStack.pop();
console.log(myStack.peek());
