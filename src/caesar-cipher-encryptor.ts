const NUMBER_OF_LETTERS = 26;

export function caesarCipherEncryptor(word: string, key: number): string {
  let response = '';
  const lettersLow = "abcdefghijklmnopqrstuvwxyz".split("");
  const lettersUpe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  key = key %  NUMBER_OF_LETTERS;

  for (let index = 0; index < word.length; index++) {
    const character: string = word[index];
    const collection: string[] = checkIfUpper(character) ? lettersUpe : lettersLow;

    let i = collection.indexOf(character);
    i = (i + key) % NUMBER_OF_LETTERS;
    response += collection[i];
  }
  
  return response;
}

function checkIfUpper(character: string): boolean {
  return character === character.toUpperCase()
}