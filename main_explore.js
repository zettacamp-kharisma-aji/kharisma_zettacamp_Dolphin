const dataDiri = { nama: 'Kharisma', umur: 24, asal: 'Purworejo', hobi: ['Sepak bola', 'Futsal', 'Riding'] };
dataDiri.nama = 'Kharisma Fajar';
console.log(dataDiri);

// ========================================== //
console.log(`===== data diri 2 =======`);
const dataDiri2 = { ...dataDiri, umur: 23 };
dataDiri2.nama = 'Arini Laila';
console.log(dataDiri2);

// ========================================== //
console.log(`===== Object.keys =======`);
//  Melihat keys dalam object = Object.keys
console.log(Object.keys(dataDiri));

// ========================================== //
console.log(`===== Object.values =======`);
// Melihat value dalam object = Object.values
console.log(Object.values(dataDiri));

// ========================================== //
console.log(`===== Object.entries =======`);
// Melihat pasangan key dan value = Object.entries
console.log(Object.entries(dataDiri));

// ========================================== //
console.log(`===== Object.defineProperty =======`);
// Menambahkan atau mengubah property = Object.defineProperty
const dataDiriWithZodiak = Object.defineProperty(dataDiri, 'zodiak', { value: 'Cancer', writable: true });
console.log(dataDiri.zodiak);
console.log(dataDiriWithZodiak);

// ========================================== //
console.log(`===== Object.assign =======`);
// Menambahkan object dengan mengcopy object yang ada = Object.assign
const makananKesukaan = { makananKesukaan: 'Sate' };
const dataDiri3 = Object.assign(dataDiri, makananKesukaan);
console.log(dataDiri3);

const iniTulisan = {};
const kata = { kata: 'aku' };
const iniTulisan2 = Object.assign(kata, makananKesukaan);
console.log(iniTulisan);

// ========================================== //
console.log(`===== Has Own =======`); // mencari apakah punya properti di variabel itu sendiri

var jenisMotor2 = { nama: 'Mio', vendor: 'Yamaha' };
console.log(Object.hasOwn(jenisMotor2, 'vendor')); // true
console.log(Object.hasOwn(jenisMotor2, 'tahun')); // false

// ========================================== //
console.log(`===== Has Own Property =======`); // mencari apakah punya properti di variabel itu sendiri dan turunannya
var jenisMotor = { nama: 'Mio', vendor: 'Yamaha' };
console.log(jenisMotor);
console.log(Object.hasOwnProperty(jenisMotor, 'tahun')); // false
jenisMotor.tahun = 2020;
console.log(jenisMotor);
console.log(jenisMotor.hasOwnProperty('tahun')); // true

// ========================================== //
console.log(`===== Object.is =======`); // membandingkan apakah sama atau tidak
var jenisMotor = { nama: 'Mio', vendor: 'Yamaha' };
var jenisMotor2 = { nama: 'Mio', vendor: 'Yamaha' };
console.log(Object.is('makan', 'makan')); //true
console.log(Object.is(jenisMotor, jenisMotor2)); //false

// ========================================== //
console.log(`===== Object.freeze =======`); // menghindari perubahan atau penghapusan properti
var motorAntik = { nama: 'Harley' };
Object.freeze(motorAntik);
motorAntik.nama = 'Harley Davidson';
console.log(motorAntik.nama);

// ========================================== //
console.log(`===== Object.isFrozen =======`); // mengecek apakah variabel freeze atau tidak
console.log(Object.isFrozen(motorAntik));

// ========================================== //
console.log(`===== Object.seal =======`); // value bisa diubah, tpi property tidak bisa dihapus
var namaMotor = { nama: 'Beat', tahun: 2020 };
Object.seal(namaMotor);
namaMotor.nama = 'Vario';
console.log(namaMotor.nama);
delete namaMotor.tahun;
console.log(namaMotor);

// ========================================== //
console.log(`===== Object.isSealed =======`); // mengecek apakah variabel seal atau tidak
console.log(Object.isSealed(namaMotor));

// ========================================== //
console.log(`===== Group By =======`);
var jenisMotor = [
  { nama: 'Mio', vendor: 'Yamaha' },
  { nama: 'Beat', vendor: 'Honda' },
  { nama: 'Smash', vendor: 'Suzuki' },
  { nama: 'Vario', vendor: 'Honda' },
  { nama: 'Jupiter', vendor: 'Yamaha' },
  { nama: 'Spin', vendor: 'Suzuki' },
  { nama: 'Scoopy', vendor: 'Honda' },
  { nama: 'Shogun', vendor: 'Suzuki' },
];
console.log(jenisMotor[1]);
// const cariVendor = Object.groupBy(jenisMotor, ({ vendor }) => vendor);
// console.log(cariVendor);
