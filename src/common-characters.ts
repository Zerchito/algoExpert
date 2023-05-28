export function commonCharacters(strings: string[]) {
  const responses = [];
  const letterCounts: { [key: string]: number } = {};
  let min = 0;
  const numberOfWords = strings.length;
  for (let word of strings) {
    for (let index = 0; index < word.length; index++) {
      const char = word[index];
      if(!letterCounts[char]){
        letterCounts[char] = 0;
      }

      if(letterCounts[char] === min) {
        letterCounts[char]++;
      }

      if(letterCounts[char] === numberOfWords) {
        responses.push(char)
        letterCounts[char]++;
      }
    }
    min++;
  }
  return responses;
}