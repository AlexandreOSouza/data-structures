class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  print() {
    let arr = [];
    let curr = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }

    let curr = this.head;
    let idx = 0;
    while (idx <= index - 1) {
      if (idx === index - 1) {
        let node = new Node(value);
        node.next = curr.next;
        curr.next = node;
        this.length++;
      } else {
        curr = curr.next;
      }
      idx++;
    }
  }

  remove(index) {
    let curr = this.head;

    let idx = 0;
    while (idx <= index - 1) {
      if (idx === index - 1) {
        let temp = curr.next;
        curr.next = temp.next;
        this.length--;
      } else {
        curr = curr.next;
      }
      idx++;
    }
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.prepend(5);

console.log(myLinkedList.print());

myLinkedList.insert(1, 7);
console.log(myLinkedList.print());

myLinkedList.insert(4, 25);

console.log(myLinkedList.print());

myLinkedList.insert(0, 1);

console.log(myLinkedList.print());

myLinkedList.remove(2);

console.log(myLinkedList.print());
