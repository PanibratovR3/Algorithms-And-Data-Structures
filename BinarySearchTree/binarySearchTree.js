class TreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const filteredArray = array.filter(
      (item, index) => array.indexOf(item) === index
    );
    const sortedArray = filteredArray.sort((a, b) => a - b);

    return this.buildTreeRecursively(sortedArray, 0, sortedArray.length - 1);
  }

  buildTreeRecursively(array, start, end) {
    if (start > end) return null;

    const midPoint = start + Math.floor((end - start) / 2);

    const node = new TreeNode(array[midPoint]);
    node.left = this.buildTreeRecursively(array, start, midPoint - 1);
    node.right = this.buildTreeRecursively(array, midPoint + 1, end);

    return node;
  }

  insert(value) {
    this.insertRecursively(this.root, value);
  }

  insertRecursively(root, value) {
    if (root === null) {
      return new TreeNode(value);
    }
    if (value < root.value) {
      root.left = this.insertRecursively(root.left, value);
    } else if (value > root.value) {
      root.right = this.insertRecursively(root.right, value);
    }

    return root;
  }

  delete(value) {
    this.deleteRecursively(this.root, value);
  }

  getSuccessor(currentNode) {
    currentNode = currentNode.right;
    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  deleteRecursively(root, value) {
    if (root === null) {
      return root;
    }

    if (root.value > value) {
      root.left = this.deleteRecursively(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteRecursively(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      }

      let successor = this.getSuccessor(root);
      root.value = successor.value;
      root.right = this.deleteRecursively(root.right, successor.value);
    }
    return root;
  }

  find(value) {
    return this.findRecursively(this.root, value);
  }

  findRecursively(root, value) {
    if (root === null) {
      return null;
    }
    if (root.value === value) {
      return root;
    }
    if (value < root.value) {
      return this.findRecursively(root.left, value);
    } else if (value > root.value) {
      return this.findRecursively(root.right, value);
    }
    return null;
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

const testTree = new BinarySearchTree([
  1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
]);

testTree.insert(10);
testTree.insert(17);
testTree.delete(3);
// testTree.delete(67);
testTree.prettyPrint(testTree.root);
console.log(testTree.find(10));
