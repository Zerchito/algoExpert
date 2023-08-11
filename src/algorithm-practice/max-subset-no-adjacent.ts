export function maxSubsetSumNoAdjacent(array: number[]) {
  if(!array || array.length === 0) {
    return 0; 
  } else if(array.length === 1) {
    return array[0];  
  }
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let index = 2; index < array.length; index++) {
    const current = Math.max(first, second + array[index]);
    second = first;
    first = current;
  }
  
  return first;
}
