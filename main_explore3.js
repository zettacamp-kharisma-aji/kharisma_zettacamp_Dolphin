// if else if
function CekUmur(umur) {
  let inputUmur = umur;
  if (inputUmur < 18) {
    return 'Kamu masih anak kecil';
  } else if (inputUmur >= 18 && inputUmur <= 21) {
    return 'Umurmu berada diantara 18 dan 21';
  } else {
    return 'kamu sudah dewasa';
  }
}
console.log(CekUmur(23));

// =================================================== //
console.log('=================================================== ');

// switch
const makanan = 'Nasi Goreng';
switch (makanan) {
  case 'Bakso':
    console.log('Saya akan makan bakso');
    break;
  case 'Mie Ayam':
    console.log('Nanti pese Mie Ayam guys');
    break;
  case 'Nasi Goreng':
    console.log('saya akan pesan nasi goreng');
    break;
  default:
    console.log('Puasa aja udah');
    break;
}

// =================================================== //
console.log('=================================================== ');

// for
for (let i = 0; i < 5; i++) {
  console.log(`Ini barisan ke ${i}`);
}

// =================================================== //
console.log('=================================================== ');

//do while statement
let angka = 1;
do {
  angka += 2;
  console.log(`Ini angka ${angka}`);
} while (angka < 11);

// =================================================== //
console.log('=================================================== ');

// for of
const kumpulanNilai = [78, 89, 91, 88];
for (const nilai of kumpulanNilai) {
  console.log(nilai);
}
