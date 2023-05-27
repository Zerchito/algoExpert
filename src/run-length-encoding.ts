export function runLengthEncoding(word: string) {
  let encoded = '';
  let currentCount = 1;
  for (let index = 1; index < word.length; index++) {
    const currentChar = word[index];
    const prevChar = word[index-1];

    if (currentChar !== prevChar || currentCount === 9){
      encoded = encoded + currentCount + prevChar;
      currentCount = 0;
    }
    currentCount++;
  }
  encoded = encoded + currentCount + word[word.length -1];
  return encoded;
}
