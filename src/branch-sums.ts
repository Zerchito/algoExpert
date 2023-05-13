class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function branchSums(root: BinaryTree): number[] {
  const sums: number[] = [];
  branchSumsHelper(root, 0, sums);
  return sums;
}

function branchSumsHelper(tree: BinaryTree | null, currentSum: number, sums: number[]): void{
  if (!tree) {
    return;
  }
  currentSum += tree.value;
  if (!tree.left && !tree.right) {
    sums.push(currentSum);
    return;
  }
  branchSumsHelper(tree.left, currentSum, sums)
  branchSumsHelper(tree.right, currentSum, sums)
}
