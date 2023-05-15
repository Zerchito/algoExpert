export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  redShirtHeights = redShirtHeights.sort((a: number,b: number) => b-a );
  blueShirtHeights = blueShirtHeights.sort((a: number,b: number) => b-a );
  const shirtFirstRow = redShirtHeights[0] > blueShirtHeights[0] ? 'blue' : 'red';
  for (let index = 0; index < redShirtHeights.length ; index++) {
    const currentRedShirt = redShirtHeights[index];
    const currentBlueShirt = blueShirtHeights[index];
    if (shirtFirstRow === 'red') {
      if(currentRedShirt >= currentBlueShirt) {
        return false
      }
    } else {
      if(currentBlueShirt >= currentRedShirt) {
        return false
      }
    }
  }
  return true;
}
