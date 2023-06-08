export function bestSeat(seats: number[]) {
  let bestSeat = -1;
  let maxSpace = 0;
  let left = 0;
  while (left < seats.length ) {
    let right = left + 1;
    while (right < seats.length && seats[right] == 0) {
      right++;
    }
    const availableSpace = right - left -1;
    if (availableSpace > maxSpace) {
      bestSeat = Math.floor((left + right) / 2);
      maxSpace = availableSpace;
    }
    left = right
  }
  return bestSeat;
}
