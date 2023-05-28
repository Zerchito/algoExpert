type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array = array.sort((a,b)=> a -b);
  const triplets: Triplet[] = [];
  for (let index = 0; index < array.length-2; index++) {
    let left = index + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[index] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[index], array[left], array[right]]);
        left++;
        right--;
      } else if(currentSum < targetSum) {
        left++;
      } else if(currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}
