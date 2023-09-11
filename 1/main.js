var inputSentence = 'Learning Typescript is different than Javascript';
var startNumber = 9;
var endNumber = 19;
function getCombination(initialSentence, startFormNumber, endToNumber) {
    var newSentence = initialSentence.slice(startFormNumber, endToNumber);
    return newSentence;
}
console.log(getCombination(inputSentence, startNumber, endNumber));
