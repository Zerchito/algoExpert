export function numberOfWaysToTraverseGraph(width: number, height: number) {
  const distanceX = width - 1;
  const distanceY = height - 1;
  const numerator = factorial (distanceX + distanceY);
  const denominator = factorial(distanceX) * factorial(distanceY);
  return numerator / denominator;
}

function factorial (num: number) {
  let result = 1;
  while(num > 1){
    result *= num;
    num--;
  }
  return result;
}