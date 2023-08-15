export function kadanesAlgorithm(array: number[]) {
  let maxEndingSpot = array[0];
  let maxSoFar = array[0];
  for (let index = 1; index < array.length; index++) {
    const num = array[index];
    maxEndingSpot = Math.max(num, maxEndingSpot + num);
    maxSoFar = Math.max(maxSoFar, maxEndingSpot);
  }
  return maxSoFar;
}
