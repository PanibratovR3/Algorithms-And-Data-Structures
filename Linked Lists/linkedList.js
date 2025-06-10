class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  print() {
    let currentNode = this.head;
    console.log(currentNode.value);
    while (currentNode.next) {
      currentNode = currentNode.next;
      console.log(currentNode.value);
    }
  }

  size() {
    if (this.head === null) return 0;
    let sizeNumber = 1;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      sizeNumber++;
    }
    return sizeNumber;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) return null;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    if (this.head === null) return null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode.next && currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentIndex !== index) return undefined;
    return currentNode;
  }

  pop() {
    if (this.head === null) return null;
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    return this;
  }

  contains(value) {
    if (this.head === null) return null;
    let currentNode = this.head;
    let valueInList = currentNode.value === value;
    while (currentNode.next && !valueInList) {
      currentNode = currentNode.next;
      valueInList = currentNode.value === value;
    }
    return valueInList;
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
// list.append("snake");
// list.append("turtle");
console.log(list.size());
console.log(list.getTail());
console.log(list.pop());
console.log(list.contains("fox"));
// list.print();
