export function selectionSort(array: number[]) {
  let currentIdx = 0;
  while (currentIdx < array.length -1) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    const aux = array[currentIdx];
    array[currentIdx] = array[smallestIdx];
    array[smallestIdx] = aux;
    currentIdx++;
  }
  return array;
}
