// This is an input class. Do not edit.
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

export function evaluateExpressionTree(tree: BinaryTree| null): number {
  let response = -1;
  if(!tree?.left && !tree?.right) {
    response = tree?.value ?? response;
  } else {
    const left: number = evaluateExpressionTree(tree?.left);
    const right: number = evaluateExpressionTree(tree?.right);
    
    switch(tree.value) {
      case -1: 
        response = left + right;
        break;
      case -2: 
        response = left - right;
        break;
      case -3: 
        response = Math.trunc(left / right);
        break;
      case -4: 
        response = left * right;
        break;
    }
  }  
  return response;
}

