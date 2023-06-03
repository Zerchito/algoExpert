export function generateDocument(characters: string, document: string) {
  const characterCounts: { [key: string]: number } = {};

  for (let index = 0; index < characters.length; index++) {
    const char = characters[index];
    if (!characterCounts[char]){
      characterCounts[char] = 0;
    }
    characterCounts[char]++;
  }

  for (let index = 0; index < document.length; index++) {
    const char = document[index];
    if(!characterCounts[char] || characterCounts[char] == 0){
      return false
    }
    characterCounts[char]--;
  }
  
  return true;
}
