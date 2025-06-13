class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
