export function oneEdit(stringOne: string, stringTwo: string) {
  const firstLength = stringOne.length;
  const secondLength =  stringTwo.length;
  const min = Math.min(firstLength, secondLength);
  if (firstLength - secondLength > 1) { return false; }
  for (let index = 0; index < min; index++) {
    if (stringOne[index] !== stringTwo[index]) {
      if(firstLength > secondLength) {
        return stringOne.slice(index + 1) === stringTwo.slice(index);
      } else if (secondLength > firstLength) {
        return stringOne.slice(index) === stringTwo.slice(index + 1);
      } else {
        return stringOne.slice(index + 1) === stringTwo.slice(index + 1);
      }
    }
  }
  return true;
}