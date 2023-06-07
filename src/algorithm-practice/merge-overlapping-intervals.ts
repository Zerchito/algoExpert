export function mergeOverlappingIntervals(array: number[][]) {
  const sortedIntervals = array.sort((a:number[], b: number[] ) => a[0] - b[0]);
  const mergeIntervals: number[][] = [];
  let currentInterval: number[] = sortedIntervals[0];
  for(const nextInterval of sortedIntervals) {
    const [currentStart, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = nextInterval;
    if (currentEnd >= nextStart) {
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      mergeIntervals.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  mergeIntervals.push(currentInterval);
  return mergeIntervals;
}