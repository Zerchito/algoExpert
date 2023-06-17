export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  const response = new BST(preOrderTraversalValues[0]);
  for (let index = 1; index < preOrderTraversalValues.length; index++) {
    insertData(response, preOrderTraversalValues[index]);
  }
  return response;
}

function insertData(tree: BST, value: number) {
  if(tree.value > value) {
    if(!tree.left) {
      tree.left = new BST(value);
    } else {
      insertData(tree.left, value);
    }
  } else {
    if(!tree.right) {
      tree.right = new BST(value);
    } else {
      insertData(tree.right, value);
    }
  }
}