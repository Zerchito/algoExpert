export function firstNonRepeatingCharacter(word: string) {
  const counters: { [key: string]: number } = {};
  for (let index = 0; index < word.length; index++) {
    const char = word[index];
    if (!counters[char]) {
      counters[char] = 0;
    }
    counters[char]++;
  }
  for (let index = 0; index < word.length; index++) {
    const char = word[index];
    if (counters[char] == 1) {
      return index;
    }
  }
  return -1;
}