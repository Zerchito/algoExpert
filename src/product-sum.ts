type SpecialArray = Array<number | SpecialArray>;

export function productSum(array: SpecialArray) {
  return productSumMult(array, 1);
}

function productSumMult(array: SpecialArray, multiplier: number) {
  let sum = 0;
  for (let element of array) {
    if (Array.isArray(element) ) {
      sum += productSumMult(element, multiplier+1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
}