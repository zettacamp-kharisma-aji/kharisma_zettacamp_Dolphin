/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  // Your logic here
  // change to lowercase
  let inputWord = str.toLowerCase();
  for (let i = 0; i < inputWord.length; i++) {
    for (let j = i + 1; j < inputWord.length; j++) {
      if (inputWord[j] === inputWord[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasUniqueCharacters('abcdefg')); // Output: true
console.log(hasUniqueCharacters('hello')); // Output: false
console.log(hasUniqueCharacters('kakiku')); // Output: false
