class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  // Write your code here.
  return findClosestValueHelper(tree, target, Number.MAX_VALUE);
}

function findClosestValueHelper(tree: BST|null, target: number, closest: number): number {
  if(!tree) {
    return closest;
  } 
  if(Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if(target < tree.value) {
    return findClosestValueHelper(tree.left, target, closest)
  }
  if(target > tree.value) {
    return findClosestValueHelper(tree.right, target, closest)
  }
  return closest;
}