class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.lLHead = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.lLHead === null) {
      this.lLHead = node;
      return this;
    }
    let currentNode = this.lLHead;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.lLHead === null) {
      this.lLHead = newNode;
      return this;
    }
    newNode.next = this.lLHead;
    this.lLHead = newNode;
    return this;
  }

  size() {
    if (this.lLHead === null) return 0;
    let sizeNumber = 1;
    let currentNode = this.lLHead;
    while (currentNode.next) {
      currentNode = currentNode.next;
      sizeNumber++;
    }
    return sizeNumber;
  }

  head() {
    return this.lLHead;
  }

  tail() {
    if (this.lLHead === null) return null;
    let currentNode = this.lLHead;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    if (this.lLHead === null) return null;
    let currentNode = this.lLHead;
    let currentIndex = 0;
    while (currentNode.next && currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentIndex !== index) return undefined;
    return currentNode;
  }

  pop() {
    if (this.lLHead === null) return null;
    let previousNode = null;
    let currentNode = this.lLHead;
    if (currentNode.next === null) {
      this.lLHead = null;
      return this;
    }
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    return this;
  }

  contains(value) {
    if (this.lLHead === null) return null;
    let currentNode = this.lLHead;
    let valueInList = currentNode.value === value;
    while (currentNode.next && !valueInList) {
      currentNode = currentNode.next;
      valueInList = currentNode.value === value;
    }
    return valueInList;
  }

  find(value) {
    if (this.lLHead === null) return null;
    let currentNode = this.lLHead;
    let valueInList = currentNode.value === value;
    let currentIndex = 0;
    while (currentNode.next && !valueInList) {
      currentNode = currentNode.next;
      valueInList = currentNode.value === value;
      currentIndex++;
    }
    if (valueInList) return currentIndex;
    return null;
  }

  toString() {
    if (this.lLHead === null) return "null";
    let currentNode = this.lLHead;
    let resultString = `( ${currentNode.value} )`;
    while (currentNode.next) {
      currentNode = currentNode.next;
      resultString += ` -> ( ${currentNode.value} )`;
    }
    resultString += ` -> null`;
    return resultString;
  }

  insertAt(value, index) {
    if (this.lLHead === null) return null;
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    let newNode = new Node(value);
    let currentNode = this.lLHead;
    let previousNode = null;
    let currentIndex = 0;
    while (currentNode.next && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentNode.next && currentIndex === index) {
      previousNode.next = newNode;
      newNode.next = currentNode;
      return this;
    }
    if (!currentNode.next && currentIndex === index) {
      currentNode.next = newNode;
      return this;
    }
  }

  removeAt(index) {
    if (this.lLHead === null) return null;
    if (index === 0) {
      this.lLHead = this.lLHead.next;
      return this;
    }
    let currentNode = this.lLHead;
    let previousNode = null;
    let currentIndex = 0;
    while (currentNode.next && currentIndex !== index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentNode.next && currentIndex === index) {
      previousNode.next = currentNode.next;
      return this;
    }
    if (!currentNode.next && currentIndex === index) {
      this.pop();
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
console.log(list.toString());
