Array.prototype.myMap = function (callback) {
  // Write your code here.
  const output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(callback(this[index], index, this));
  }
  return output;
};

Array.prototype.myFilter = function (callback) {
  // Write your code here.
  const output = [];
  for (let index = 0; index < this.length; index++) {
    const result = callback(this[index], index, this);
    if (result === true) {
      output.push(this[index]);
    }
  }
  return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
  // Write your code here.
  let acumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    if (index === 0 && initialValue === undefined) {
       acumulator = this[0];
    } else {
      acumulator = callback(acumulator, this[index], index, this);
    }
  }
  return acumulator;
};
