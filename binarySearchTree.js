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

  lookup(value) { }
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

console.log(JSON.stringify(traverse(myBst.root)));
