class Node {
  constructor(value, next) {
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
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.print();
