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

export function splitBinaryTree(tree: BinaryTree): number {
  // Write your code here.
  const desiredSubTreeSum = getTreeSum(tree)/2;
  if(hasDesiredSum(tree, desiredSubTreeSum)){
    return desiredSubTreeSum;
  }
  return 0;
}

function getTreeSum(tree: BinaryTree | null): number {
  if(tree === null){
    return 0;
  }
  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right);
}

function hasDesiredSum(tree: BinaryTree | null, desiredSum: number): boolean {
  if (tree === null) {
    return false;
  } 
  const treeSum = getTreeSum(tree);
  return treeSum === desiredSum || hasDesiredSum(tree.left, desiredSum) || hasDesiredSum(tree.right, desiredSum);
}