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
      //   console.log("EMPTY");
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    // console.log("NOT EMPTY");
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
}

const list = new LinkedList();
list.append("dog");
list.prepend("cat");
list.append("parrot");
list.prepend("hamster");
// list.append("snake");
// list.append("turtle");
list.print();
