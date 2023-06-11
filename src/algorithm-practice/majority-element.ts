export function majorityElement(array: number[]): number {
  let answer: number = 0;
  let counter = 0;
  for (let value of array) {
    if (counter === 0) {
      answer = value;
    }

    if (value === answer){
      counter++;
    } else {
      counter--;
    }
  }
  return answer;
}
