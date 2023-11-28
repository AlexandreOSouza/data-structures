class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarysearchTree {
  constructor() {
    this.root = null;
  }

  treverse(currNode, newNode) {
    if (newNode.value > currNode.value && currNode.right === null) {
      currNode.right = newNode;
      return this;
    }

    if (newNode.value < currNode.value && currNode.left === null) {
      currNode.left = newNode;
      return this;
    }

    if (newNode.value > currNode.value) {
      this.treverse(currNode.right, newNode);
    } else {
      this.treverse(currNode.left, newNode);
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.treverse(this.root, newNode);
    }
  }
  lookup(value) {}
}

const tree = new BinarysearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(treverse(tree.root)));

function treverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : treverse(node.left);
  tree.right = node.right === null ? null : treverse(node.right);
  return tree;
}
