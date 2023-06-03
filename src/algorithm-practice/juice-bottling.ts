export function juiceBottling(prices: number[]) {
  const numSizes = prices.length;
  const maxProfit = Array.from({ length: numSizes }, () => 0);
  const dividingPoints = Array.from({ length: numSizes }, () => 0);

  for(let size = 0; size < prices.length; size++) {
      for( let i = 0; i <= size; i++ ){
         const possibleProfit = maxProfit[size - i] + prices[i];
          
          if(possibleProfit > maxProfit[size]) {
            maxProfit[size] = possibleProfit;
            dividingPoints[size] = i;
          }
      }
  }
  const solution = [];
  let currentDividingPoint = numSizes -1;
  while (currentDividingPoint > 0) {
    solution.push(dividingPoints[currentDividingPoint]);
    currentDividingPoint -= dividingPoints[currentDividingPoint]
  }
  return solution;
}
