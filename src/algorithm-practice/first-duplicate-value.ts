export function firstDuplicateValue(array: number[]): number {
  const seen: { [key: number]: number } = {};
  for (let index = 0; index < array.length; index++) {
    const number = array[index];
    if (seen[number]) {
      return number;
    }
    seen[number] = 1;
  }
  return -1;
}
