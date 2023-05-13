export function nodeDepths(root: BinaryTree) {
  return nodeDepthsHelper(root, 0);
}

function nodeDepthsHelper(tree: BinaryTree | null, level: number ): number {
  if(!tree){
    return 0;
  }
  const sum = level + nodeDepthsHelper(tree.left, level+1) + nodeDepthsHelper(tree.right, level+1);
  return sum;
}

// This is the class of the input binary tree.
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
