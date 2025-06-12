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

testTree.prettyPrint(testTree.root);
