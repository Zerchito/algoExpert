export function arrayOfProducts(array: number[]) {
  const products = Array(array.length).fill(1);
  let leftRunningProduct = 1;
  for (let index = 0; index < array.length; index++) {
    products[index] = leftRunningProduct;
    leftRunningProduct *= array[index];
  }
  let rightRunningProduct = 1;
  for (let index = array.length -1; index >= 0; index--) {
    products[index] *= rightRunningProduct;
    rightRunningProduct *= array[index];
  }
  return products;
}
