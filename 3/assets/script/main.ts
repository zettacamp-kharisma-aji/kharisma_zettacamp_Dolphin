const inputSentence = document.getElementById('input_sentence')! as HTMLInputElement;
const inputStartNumber = document.getElementById('input_number_start')! as HTMLInputElement;
const inputEndNumber = document.getElementById('input_number_end')! as HTMLInputElement;
const btnAnalyze = document.getElementById('btn_analyze')! as HTMLButtonElement;
const result = document.getElementById('text_result')! as HTMLElement;
// const keterangan = document.getElementById('keterangan')! as HTMLElement;
// let expectedResult: string = 'Typescript';
// let rightAnswer: boolean = false;

function getCombination(initialSentence: string, startFormNumber: number, endToNumber: number): string {
  let newSentence: string = initialSentence.slice(startFormNumber, endToNumber);
  return newSentence;
}

btnAnalyze.addEventListener('click', function () {
  let hasil: string = getCombination(inputSentence.value, +inputStartNumber.value, +inputEndNumber.value);
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
