export function transposeMatrix(matrix: number[][]): number[][] {
  const transposed: number[][] = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    transposed.push(newRow);
  }
  return transposed;
}
