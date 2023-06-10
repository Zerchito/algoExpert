export function missingNumbers(nums: number[]) {
  const expectedArray: number[] = Array.from({ length: nums.length + 2 }, (_, i) => i + 1);
  return expectedArray.filter(key => !nums.includes(key));
}
