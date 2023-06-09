export function zeroSumSubarray(nums: number[]) {
  const sums: any = { 0: 1 };
  let currentSum = 0;
  for (let num of nums) {
    currentSum += num;
    if (sums[currentSum]) {
      return true
    }
    sums[currentSum] = 1;
  }
  return false;
}
