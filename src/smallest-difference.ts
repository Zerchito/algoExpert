export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne = arrayOne.sort((a, b) => a-b);
  arrayTwo = arrayTwo.sort((a, b) => a-b);
  let smallest = Number.MAX_SAFE_INTEGER;
  let smallestPair: number[] = []
  let indexOne = 0;
  let indexTwo = 0;
  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    const firstNum = arrayOne[indexOne];
    const secondNum = arrayTwo[indexTwo];
    let current = Number.MAX_SAFE_INTEGER;
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      indexOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      indexTwo++;
    } else {
      return [firstNum, secondNum]
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  
  return smallestPair;
}
