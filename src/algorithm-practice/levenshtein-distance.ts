export function levenshteinDistance(str1: string, str2: string) {
  str1 = ' ' + str1;
  str2 = ' ' + str2;
  const rowsLength = str2.length;
  const colsLenght = str1.length;
  const matrix = Array.from({ length: str2.length }, () => Array(str1.length));
  // fill first row
  for (let i = 0; i < Math.max(rowsLength, colsLenght); i++) {
    if (matrix[0].length > i) {
      matrix[0][i] = i;
    }
    if (matrix.length > i) {
      matrix[i][0] = i;
    }
  }

  for (let row = 1; row < rowsLength; row++) {
    for (let col = 1; col < colsLenght; col++) {
      if (str1[col] === str2[row]) {
        matrix[row][col] = matrix[row - 1][col - 1]; 
      } else {
        matrix[row][col] = Math.min(matrix[row - 1][col - 1], matrix[row - 1][col], matrix[row][col - 1]) + 1;
      }
    }
  }
  
  return matrix[rowsLength - 1][colsLenght - 1];
}
