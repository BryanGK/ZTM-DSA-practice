class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    let prevNode = null;
    while (currentNode) {
      if (newNode.value < currentNode.value) {
        prevNode = currentNode;
        currentNode = currentNode.left;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    newNode.value < prevNode.value ? prevNode.left = newNode : prevNode.right = newNode;
    return this;
  }

  lookup(value) {
    if (!this.root) return null;
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      value < currentNode.value ? currentNode = currentNode.left : currentNode = currentNode.right;
    }
    return null;
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null :
    traverse(node.left);
  tree.right = node.right === null ? null :
    traverse(node.right);
  return tree;
}

const myBst = new BinarySearchTree();
console.log(myBst.insert(9));
console.log(myBst.insert(4));
myBst.insert(6);
myBst.insert(20);
myBst.insert(170);
myBst.insert(15);
myBst.insert(1);
myBst.insert(80);
myBst.insert(479);
myBst.insert(8356);

console.log(JSON.stringify(traverse(myBst.root)));
console.log(myBst.lookup(6));
console.log(myBst.lookup(170));
console.log(myBst.lookup(20));
