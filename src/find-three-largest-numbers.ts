export function findThreeLargestNumbers(array: number[]) {
  const result = [null, null, null];
  for (let num of array) {
    updateLargest(result, num)
  }
  return result;
}

function updateLargest(array: any[], num: number): void {
  if (!array[2] || array[2] < num) {
    shiftAndUpdate(array, num, 2)
  } else if (!array[1] || array[1] < num){
    shiftAndUpdate(array, num, 1)
  } else if(!array[0] || array[0] < num){
    shiftAndUpdate(array, num, 0)
  }
}

function shiftAndUpdate(array: number[], num: number, index: number): void {
  for (let i = 0; i <= index ; i++) {
    if(i === index){
      array[i] = num;
    } else {
      array [i] = array[i+1];
    }
  }
}