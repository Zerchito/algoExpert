export function bubbleSort(array: number[]) {
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for (let index = 0; index < array.length - 1; index ++) {
        if (array[index] > array[index + 1]) {
          swap(index, index + 1, array);
          isSorted = false;
        }
    }
  }
  return array;
}

function swap(i: number, j: number, array: number[]) {
  const  aux = array[i];
  array [i] = array[j];
  array[j] = aux;
}