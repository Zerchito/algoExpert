export function minHeightBst(array: number[]): BST | null {
  return minHeightBstHelper(array, 0, array.length - 1);
}

function minHeightBstHelper (array: number[], leftIndex: number, rightIndex: number): BST | null {
  if (leftIndex > rightIndex) {
    return null
  } 

  const midIndex = Math.floor((leftIndex + rightIndex) / 2);
  const bst = new BST(array[midIndex]);
  bst.left = minHeightBstHelper(array, leftIndex, midIndex - 1);
  bst.right = minHeightBstHelper(array, midIndex + 1, rightIndex);
  return bst;
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
