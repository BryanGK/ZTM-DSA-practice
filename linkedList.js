class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  append(value) {
    const node = {
      value: value,
      next: null
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const node = {
      value: value,
      next: null
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    const node = {
      value: value,
      next: null
    }
    const leader = this.tranverseToNode(index - 1);
    leader.next = node;
    this.length++;
    return this.printList();
  }

  tranverseToNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index > this.length - 1 || index < 0) {
      return console.error(`Outside of range of array, max index ${this.length - 1}`)
    }
    const leader = this.tranverseToNode(index - 1);
    const removedNode = leader.next;
    leader.next = removedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    // let currentNode = this.head;
    // const valuesArray = [];
    // while (currentNode) {
    //   valuesArray.push(currentNode.value);
    //   currentNode = currentNode.next;
    // }
    // this.head = this.tail;
    // this.length = 1;
    // for (let i = valuesArray.length - 2; i >= 0; i--) {
    //   this.append(valuesArray[i]);
    // }
    // return this;
    if (!this.head.next) return this.head;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(22);
myLinkedList.append(88);
// myLinkedList.prepend(7);
// myLinkedList.prepend(8);
// myLinkedList.printList();
// myLinkedList.insert(0, 99);
// myLinkedList.insert(0, 220);
// myLinkedList.insert(10, 69);
// myLinkedList.insert(-10, 69);
// myLinkedList.remove(1);
// myLinkedList.remove(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
console.log(myLinkedList.length);
