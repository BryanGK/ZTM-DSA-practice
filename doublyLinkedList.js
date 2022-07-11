class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
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
    return console.log(array);
  }

  append(value) {
    const node = {
      value: value,
      prev: null,
      next: null
    };
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const node = {
      value: value,
      prev: null,
      next: null
    }
    node.next = this.head;
    this.head.prev = node;
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
      prev: null,
      next: null
    }
    const leader = this.tranverseToNode(index - 1);
    const follower = leader.next;
    leader.next = node;
    node.prev = leader;
    node.next = follower;
    follower.prev = node;
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
    const follower = removedNode.next;
    follower.prev = leader;
    leader.next = removedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(7);
myLinkedList.prepend(8);
myLinkedList.printList();
myLinkedList.insert(0, 99);
myLinkedList.insert(0, 220);
myLinkedList.insert(10, 69);
myLinkedList.insert(-10, 69);
myLinkedList.remove(1);
myLinkedList.remove(1);
console.log(myLinkedList);
console.log(myLinkedList.length);
