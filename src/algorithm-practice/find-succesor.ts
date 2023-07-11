export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  // Write your code here.
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree, []);
  for (let index = 0; index < inOrderTraversalOrder.length; index++) {
    const currentNode = inOrderTraversalOrder[index];
    if (currentNode !== node) {
      continue;
    }
    if (index === inOrderTraversalOrder.length -1) {
      return null;
    }
    return inOrderTraversalOrder[index + 1];
  }
  
}

function getInOrderTraversalOrder(node: BinaryTree | null, order: BinaryTree[]): BinaryTree[] {
  if (!node) {
    return order;
  }
  getInOrderTraversalOrder(node.left, order);
  order.push(node);
  getInOrderTraversalOrder(node.right, order);
  return order;
}