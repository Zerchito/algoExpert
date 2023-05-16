export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
  redShirtSpeeds = redShirtSpeeds.sort((a: number, b: number) => fastest? a-b: b-a);
  blueShirtSpeeds = blueShirtSpeeds.sort((a: number, b: number) => a-b);

  let totalSpeed = 0;
  for (let index = 0; index < redShirtSpeeds.length; index++) {
    const indexBlue = blueShirtSpeeds.length - 1 - index;
    const rider1 = redShirtSpeeds[index];
    const rider2 = blueShirtSpeeds[indexBlue];
    totalSpeed += Math.max(rider1, rider2);
  }
  return totalSpeed;
}
