export class UnionFind {

  parents: Record<number, number> = {};
  ranks: Record<number, number> = {};
    
  constructor() {
    // Write your code here.
  }

  createSet(value: number) {
    // Write your code here.
    this.parents[value] = value;
    this.ranks[value] = 0;
  }

  find(value: number): number | null {
    // Write your code here.
    if(this.parents[value] === undefined) { return null }
  
    let currentParent = this.parents[value];
    while(currentParent !== this.parents[currentParent]) {
      currentParent = this.parents[currentParent];
    }
    return currentParent;
  }

  union(valueOne: number, valueTwo: number): void {
    // Write your code here.
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) {
      return;
    }
    const valueOneRoot = this.find(valueOne);
    const valueTwoRoot = this.find(valueTwo);
    
    if (valueOneRoot === null || valueTwoRoot === null) {
      return;
    }
    
    if(this.ranks[valueOneRoot] >= this.ranks[valueTwoRoot]){
      this.parents[valueTwoRoot] = valueOneRoot;
      this.ranks[valueTwoRoot] += 1;
    } else {
      this.parents[valueOneRoot] = valueTwoRoot;
      this.ranks[valueTwoRoot] += 1;
    }
  }
}