class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class ChessNode {
  constructor(position) {
    this.position = position;
    this.previousNode = null;
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

function isWithinBoard(x, y) {
  return x >= 0 && x < SIZE && y >= 0 && y < SIZE;
}

function notpreviousNode(x, y, previousNode) {
  return !(previousNode.position[0] === x && previousNode.position[1] === y);
}

function addNode(x, y, previousNode) {
  const node = new ChessNode([x, y]);
  node.previousNode = previousNode;
  node.distance = node.previousNode ? node.previousNode.distance + 1 : 0;
  queue.enqueue(node);
}

function knightMoves(start, end) {
  let x, y;
  if (queue.isEmpty()) {
    addNode(start[0], start[1], null);
  } else {
    let firstNode = queue.dequeue();

    if (firstNode.position[0] === end[0] && firstNode.position[1] === end[1]) {
      logPath(firstNode);
      queue = new Queue();
      return;
    }

    for (const move of possibleMoves) {
      x = firstNode.position[0] + move[0];
      y = firstNode.position[1] + move[1];

      if (isWithinBoard(x, y) && notpreviousNode(x, y, firstNode)) {
        addNode(x, y, firstNode);
      }
    }
  }
  knightMoves(start, end);
}

function logPath(finalNode) {
  let steps = finalNode.distance;
  let path = [];
  let node = finalNode;
  for (let i = 0; i < steps + 1; i++) {
    path.push(node.position);
    node = node.previousNode;
  }
  console.log(`Finished in ${steps}. The path is:`);
  path = path.reverse();
  print(path);
}

function print(path) {
  for (const edge of path) {
    console.log(edge);
  }
}

knightMoves([0, 0], [3, 3]);
