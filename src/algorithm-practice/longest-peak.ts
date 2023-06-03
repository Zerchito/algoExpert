export function longestPeak(array: number[]): number {
  let longestPeakLength = 0;
  let index = 1;
  while (index < array.length - 1) {
    const isPeak = array[index-1] < array[index] && array[index] > array[index + 1];
    if (!isPeak) {
      index++;
      continue;
    }
    let leftIndex = index - 2;
    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1] ) {
      leftIndex --;
    }
    let rightIndex = index + 2;
    while ( rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {
      rightIndex++;
    }
    let currentPeakLength = rightIndex - leftIndex - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    index = rightIndex;
  }
  return longestPeakLength;
}
