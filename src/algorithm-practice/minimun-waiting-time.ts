export function minimumWaitingTime(queries: number[]) {
  let totalWaitingTime = 0;
  const sortedQueries = queries.sort((a: number, b: number) => a-b);
  let index = 0;
  for (let query of sortedQueries) {
    index ++;
    const queriesLeft = sortedQueries.length - index;
    totalWaitingTime += query * queriesLeft;
  }
  return totalWaitingTime;
}