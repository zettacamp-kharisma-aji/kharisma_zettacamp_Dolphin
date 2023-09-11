let inputSentence: string = 'Learning Typescript is different than Javascript';
let startNumber: number = 9;
let endNumber: number = 19;

function getCombination(initialSentence: string, startFormNumber: number, endToNumber: number): string {
  let newSentence: string = initialSentence.slice(startFormNumber, endToNumber);
  return newSentence;
}

console.log(getCombination(inputSentence, startNumber, endNumber));
