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

class ChessNode {
  constructor(position) {
    this.position = position;
    this.parent = null;
    this.distance = null;
  }
}

const possibleMoves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
];

const SIZE = 8;
let queue = new Queue();
