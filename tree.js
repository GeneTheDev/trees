/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    function SumNodes(arr) {
      let sum = 0;
      let currentNode = 0;
      for (let i = 0; i < arr.length; i++) {
        if (i === currentNode) {
          sum += arr[i];
          currentNode = 2 * i + 1;
        }
      }
      return sum;
    }
    return SumNodes(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    function getEvenCount(list) {
      return list.filter((item) => typeof item === "number") && item % 2 === 0;
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvennsHelper(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;

        if (child.children.length > 0) {
          countEvennsHelper(child);
        }
      }
    }
    countEvennsHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
