const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(recivedData, currentNode = this.rootElement) {
    // Node=> node.data
    // Node=> node.left
    // Node=> node.right

    //!!!Recursive Function

    //must hanle situations:
    // tree is empty => create node
    // case tree already have Node(recivedData)[may need traverse tree]
    // if Node(recivedData) is lower or higher than the root element[need to traverse tree]

    if (!currentNode) {
      return (this.rootElement = new Node(recivedData));
    }

    // if exists
    if (currentNode.data === recivedData) {
      return (this.rootElement = currentNode);
    }

    // if try to add value lower than  node
    if (recivedData < currentNode.data) {
      currentNode.left = this.add(recivedData, currentNode.left);
    }

    // if try to add value higher than node

    if (recivedData > currentNode.data) {
      currentNode.right = this.add(recivedData, currentNode.right);
    }

    // console.log(currentNode);
    return (this.rootElement = currentNode);
  }

  has(recivedData, currentNode = this.rootElement) {
    // not found
    if (!!!currentNode) {
      return false;
    }

    //if found
    if (currentNode.data === recivedData) {
      return true;
    }

    //if less than
    if (recivedData < currentNode.data) {
      return this.has(currentNode.left, recivedData);
    } else {
      return this.has(currentNode.right, recivedData);
    }
  }

  find(recivedData, currentNode = this.rootElement) {
    //not find case
    if (!currentNode) {
      return null;
    }

    //if found

    if (currentNode.data === recivedData) {
      return currentNode;
    }

    if (recivedData < currentNode.data) {
      return this.find(recivedData, currentNode.left);
    } else {
      return this.find(recivedData, currentNode.right);
    }
  }

  remove(recivedData, currentNode = this.rootElement) {
    // if not exists
    if (!currentNode) {
      return (this.rootElement = null);
    }

    if (recivedData < currentNode.data) {
      currentNode.left = this.remove(recivedData, currentNode.left);
    } else if (recivedData > currentNode.data) {
      currentNode.right = this.remove(recivedData, currentNode.right);
    } else {
      if (!currentNode.left && !currentNode.right) {
        return (this.rootElement = null);
      }

      if (!currentNode.left) {
        currentNode = currentNode.right;
        return (this.rootElement = currentNode);
      }

      if (!currentNode.right) {
        currentNode = currentNode.left;
        return (this.rootElement = currentNode);
      }
    }

    //
  }

  min() {
    if (!this.rootElement) {
      return null;
    }

    let currentNode = this.rootElement;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.rootElement) {
      return null;
    }

    let currentNode = this.rootElement;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
  //
};
