export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  // Write your code here.
  let currentNode: LinkedList | null = linkedList;
  while(currentNode?.next) {
    let nextDisctinctNode: LinkedList | null = currentNode.next;
    while (nextDisctinctNode?.value === currentNode.value) {
      nextDisctinctNode = nextDisctinctNode.next;
    }
    currentNode.next = nextDisctinctNode;
    currentNode = nextDisctinctNode;
  }
  return linkedList;
}
