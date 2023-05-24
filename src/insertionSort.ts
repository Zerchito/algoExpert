export function insertionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const aux = array [i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}
