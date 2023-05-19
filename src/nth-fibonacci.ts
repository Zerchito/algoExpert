export function getNthFib(n: number) {
  let lastTwo = [0,1];
  let counter = 3;
  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter +=1;
  }
  return n > 1 ? lastTwo[1] : 0;
}