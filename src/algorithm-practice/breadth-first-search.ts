export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const nodesQueue: Node[] = [this];
    while(nodesQueue.length > 0) {
      const currentNode = nodesQueue.shift()
      if (currentNode) {
        array.push(currentNode.name);
        currentNode.children.forEach( (node: Node) => nodesQueue.push(node));
      }
    }
    return array;
  }
  
}