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

export function binaryTreeDiameter(tree: BinaryTree) {
  let maxDiameter: number = 0;
  // closure that remembers maxDiameter value
  function binaryTreeDiameterHelper(subTree: BinaryTree | null): number {
    if (!subTree) {
      return 0
    }
    const left = binaryTreeDiameterHelper(subTree.left);
    const right = binaryTreeDiameterHelper(subTree.right);
    const currentDiameter = left + right;
    maxDiameter = Math.max(maxDiameter, currentDiameter);
    // pick the longest branch for parent tree
    return Math.max(left, right) + 1;
  }
  binaryTreeDiameterHelper(tree);
  return maxDiameter;
}
