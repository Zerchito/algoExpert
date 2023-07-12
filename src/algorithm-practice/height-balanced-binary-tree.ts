export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function heightBalancedBinaryTree(tree: BinaryTree) {
  // Write your code here.
  return calcHeight(tree) >= 0;
}

function calcHeight(tree: BinaryTree | null): number {
  if(!tree) {
    return 0;
  }
  const leftHeight = calcHeight(tree.left);
  const rightHeight = calcHeight(tree.right);
  if (leftHeight < 0 || rightHeight < 0 || Math.abs(leftHeight-rightHeight) > 1) {
    return -1
  }
  return 1 + Math.max(leftHeight, rightHeight);
}