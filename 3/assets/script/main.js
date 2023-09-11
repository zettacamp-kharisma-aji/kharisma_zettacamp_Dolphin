var inputSentence = document.getElementById('input_sentence');
var inputStartNumber = document.getElementById('input_number_start');
var inputEndNumber = document.getElementById('input_number_end');
var btnAnalyze = document.getElementById('btn_analyze');
var result = document.getElementById('text_result');
var keterangan = document.getElementById('keterangan');
var expectedResult = 'Typescript';
var rightAnswer = false;
function getCombination(initialSentence, startFormNumber, endToNumber) {
    var newSentence = initialSentence.slice(startFormNumber, endToNumber);
    return newSentence;
}
btnAnalyze.addEventListener('click', function () {
    var hasil = getCombination(inputSentence.value, +inputStartNumber.value, +inputEndNumber.value);
    console.log(hasil);
    console.log(typeof hasil);
    //   Ganti teks hasil
    result.innerHTML = hasil;
    //   if ((hasil = expectedResult)) {
    //     rightAnswer = true;
    //   } else {
    //     rightAnswer = false;
    //   }
    //   if ((rightAnswer = true)) {
    //     keterangan.innerHTML = 'Benar';
    //   } else {
    //     keterangan.innerHTML = 'Salah';
    //   }
});
