export function insertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let j  = i;
    while (j >= 0 && array[j]< array[j - 1]) {
      const aux = array [j];
      array[j] = array[j-1];
      array[j-1] = aux;
      j--;
    }
  }
  return array;
}