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

export function symmetricalTree(tree: BinaryTree) {
  // Write your code here.
  return areMirroredTrees(tree.left, tree.right);
}

function areMirroredTrees(left: BinaryTree | null, right: BinaryTree | null): boolean {
  if(left && right && left.value === right.value) {
    return areMirroredTrees(left.left, right.right) && areMirroredTrees(left.right, right.left);
  }
  return left === right;
}