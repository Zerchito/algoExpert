export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findKthLargestValueInBst(tree: BST | null, k: number, counter: {count: number} = { count: 0 }): number {
  if (!tree) return -1;
  const rightLargest = findKthLargestValueInBst(tree.right, k, counter);
  if(rightLargest !== -1) return rightLargest;
  counter.count++;
  if (k === counter.count) return tree.value;
  const leftLargest = findKthLargestValueInBst(tree.left, k, counter);
  if(leftLargest !== -1) return leftLargest;
  return -1;
}
