class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = {
      value: value,
      next: null
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(value) {
    const node = {
      value: value,
      next: null
    }
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  printList() {
    const array = []
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value) {
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToNode(index - 1);
    // tranverse to location node leader
    newNode.next = leader.next;
    // make new node next point leader's next pointer
    leader.next = newNode;
    // make leader next point to new node
    this.length++;
    return this;
  }
  traverseToNode(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
  remove(index) {
    if (index > this.length - 1) index = this.length - 1;
    if (index < 0) index = 0;
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const leader = this.traverseToNode(index - 1);
    // traverse to leader node
    const removedNode = leader.next;
    // grab removed node pointer 
    leader.next = removedNode.next;
    // make the leaders next be pointed at removed nodes next
    this.length--;
    return this;
  }
  reverse() {
    if (!this.head.next === null) return this.head;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.reverse();
console.log(myLinkedList.printList());
// myLinkedList.prepend(1);
// myLinkedList.append(6);
// myLinkedList.append(99);
// myLinkedList.append(69);
// myLinkedList.prepend(8);
// console.log(myLinkedList.traverseToNode(4))
// myLinkedList.insert(5, 420);
// myLinkedList.remove(0);
// myLinkedList.remove(5);
// myLinkedList.remove(200);
console.log(myLinkedList);
