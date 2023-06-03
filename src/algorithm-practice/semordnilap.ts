export function semordnilap(words: string[]) {
  const response: [string, string][] = [];
  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    for (let j = i+1; j < words.length; j++) {
      const reversedWord = words[j].split("").reverse().join("")
      if (currentWord === reversedWord) {
        response.push([currentWord, words[j]]);
      }
    }
  }
  return response;
}