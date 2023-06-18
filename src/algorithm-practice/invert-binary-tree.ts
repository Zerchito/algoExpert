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

export function invertBinaryTree(tree: BinaryTree | null) {
  if(!tree) return null
  const auxLeft = invertBinaryTree(tree.left)
  const auxRight = invertBinaryTree(tree.right)
  tree.left = auxRight;
  tree.right = auxLeft;
  return tree;
}
