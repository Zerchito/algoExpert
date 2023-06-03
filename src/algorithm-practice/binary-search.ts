export function binarySearch(array: number[], target: number): number {
  return binaryhelper(array, target, 0, array.length - 1);
}

function binaryhelper(array: number[], target: number, leftPointer: number, rightPointer: number): number {
  if (leftPointer > rightPointer) {
    return -1
  }

  const middle = Math.round((leftPointer + rightPointer)/2);
  const potentialMatch = array[middle];

  if(target === potentialMatch){
    return middle;
  } else if (target < potentialMatch) {
    return binaryhelper(array, target, leftPointer, middle - 1);
  } else {
    return binaryhelper(array, target, middle + 1, rightPointer);
  }
  
}