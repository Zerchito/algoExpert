export function isPalindrome(word: string) {
  let index = 0;
  let backIndex = word.length -1;
  let isPal = true;
  while(index < backIndex) {
    if(word[index] !== word[backIndex]) {
      isPal = false;
      break;
    }
    index++;
    backIndex--;
  }
  return isPal;
}