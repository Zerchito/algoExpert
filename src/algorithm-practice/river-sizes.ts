export function riverSizes(matrix: number[][]) {
  const sizes: number[] = []
  const visited = fillMatrix(matrix.length, matrix[0].length, false);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visited[i][j]) {
        continue
      }
      traverseNode(i, j, matrix, visited, sizes)
    }
  }
  
  return sizes;
}

function traverseNode (i: number, j: number, matrix: number[][], visited: boolean[][], sizes: number[]) {
  let currentRiverSize = 0;
  // stack
  const nodesToExplore: number[][] = [[i, j]];
  while(nodesToExplore.length > 0) {
    const currentNode: number[] | undefined = nodesToExplore.pop();
    if (!currentNode){
      continue;
    }
    const i: number = currentNode[0];
    const j: number = currentNode[1];
    
    if (visited[i][j]) {
      continue
    }
    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue
    }
    currentRiverSize += 1;
    const unvisidedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)

    for (const neighbor of unvisidedNeighbors) {
      nodesToExplore.push(neighbor)
    }
  }
  if(currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
}

function getUnvisitedNeighbors(i: number, j: number, matrix: number[][], visited: boolean[][]): number[][] {
  const unvisitedNeighbors: number[][] = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }
  return unvisitedNeighbors;
  return unvisitedNeighbors;
}

function fillMatrix(rows: number, columns: number, value: boolean): boolean[][] {
  const matrix: boolean[][] = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(Array.from(Array(columns), () => value));
  }
  return matrix;
}