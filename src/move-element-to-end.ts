export function moveElementToEnd(array: number[], toMove: number) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    if (array[j] === toMove) {
      j--;
    } else if (array[i] === toMove) {
      const aux = array[j];
      array[j] = array[i];
      array[i] = aux;
      i++;
      j--;
    } else {
      i++;
    }
  }
  
  
  return array;
}
