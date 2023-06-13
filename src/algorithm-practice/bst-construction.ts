// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
     // Write your code here.
    if (value < this.value){
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BST(value);
      }
    } else {
      if(this.right){
         this.right.insert(value);
      } else {
        this.right = new BST(value);
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number): boolean {
    let current: BST | null = this;
    while(current){
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(num: number): BST | null {
    // Write your code here.
    if((this.value < num && !this.right) || (this.value > num && !this.left)) {
      return this;
    } else  if (this.value < num && this.right) {
      this.right = this.right.remove(num);
    } else if (this.value > num && this.left) {
      this.left = this.left.remove(num);
    } else {
      if (!this.left && !this.right) {
        return null;
      } else if (this.left && !this.right) {
        this.value = this.left.value;
        this.left = this.left.left;
        return this;
      } else if (this.right && !this.left) {
        this.value = this.right.value;
        this.right = this.right.right;
        return this;
      } else if (this.right) {
        const min =  this.right.getMinValue();
        this.value = min;
        this.right = this.right.remove(min);
        return this;
      }
    }
    return this;
  }

  getMinValue(): number{
    if (this.left === null) {
      return this.value  
    }
    return this.left.getMinValue();
  }
}

