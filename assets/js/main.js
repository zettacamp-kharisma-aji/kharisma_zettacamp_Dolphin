let favBook1;
favBook1 = 'Atomic Habits';

const favBook2 = 'Sebuah Seni Untuk Bersikap Bodo Amat';

favBook1 = 'Network and Cyber Security';

// Update nilai favBook 2, namun hasilnya akan error
/*avBook2 = 'Filosofi Teras';

// Menggabungkan favBook1 dan favBook2
var myFavBook = favBook1 + ' ' + favBook2;
console.log(myFavBook);

var myFavBook2 = favBook1.concat(favBook2);
console.log(myFavBook2);*/

// ================ //

let book1 = 'Atomic Habits';
const book2 = [];

book1 = 'Network and Cyber Security';

// push nama buku ke book 2
book2.push('Filosofi Teras');

// Menggabungkan book 1 dan book 2
var myBook = book1 + ' ' + book2[0];
console.log(myBook);

var myBook2 = book1.concat(book2);
console.log(myBook2);

// ================= //
// Tipe data primitif
// 1. String
let nama = 'kharisma';

// 2. Number
let tanggalLahir = 23;

// 3. Boolean
let isSingle = true;

// 4. Symbol
let iniSimbol = Symbol('hellllo');

// 5. Null
let dataNull = null;

// 6. Undefined = Sudah deklarasi namun belum diberi nilai, hanya bisa di let dan var, const tidak bisa
let A;
var B;
// const C;

// ================= //

let iniData = 16;
iniData = 'Angka Enam Belas';
iniData = true;
console.log(iniData);

// ================= //

const namaDepan = 'Kharisma';
const namaBelakang = 'Fajar';

// console nama lengkap dengan template literal
console.log(`${namaDepan} ${namaBelakang}`);

// ================== //

let person1 = { nama: 'Kharisma Fajar', umur: 24, isSingle: true };
let person2 = { nama: 'Arini Laila', umur: 23, isSingle: true };
console.log(`Halo umur saya ${person1.umur}`);

let jumlahUmur = person1.umur + person2.umur;
console.log(jumlahUmur);
console.log(person1.isSingle);

let person = [
  {
    nama: 'Kharisma Fajar',
    umur: 24,
    isSingle: true,
  },
  { nama: 'Arini Laila', umur: 23, isSingle: true },
];

console.log(`${person[0].umur} tahun`);

let jumlahUmurnya = person[0].umur + person[1].umur;
console.log(`jumlah umurnya ${jumlahUmurnya} tahun`);

// ================== //

let jumlah1 = 12; //tipe data number
let jumlah2 = '12'; // tipe data string

let jumlahnya = jumlah1 + jumlah2;
console.log(jumlahnya); //1212

let jumlahSebenernya = jumlah1 + +jumlah2;
console.log(jumlahSebenernya); //24

console.log(jumlah1 + parseInt(jumlah2)); //24

// ================== //

let deretAngka = [12, 62, 84, 56, 19, 35];
console.log(deretAngka[1]);
console.log(deretAngka[1] + deretAngka[4]);

deretAngka.push(111);
console.log(deretAngka);

let tanggal = new Date('2023-08-22');
console.log(tanggal);

// ================== //

const daftarHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
const daftarBulan = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

// Mendapatkan urutan hari
let hariSekarang = tanggal.getDay(daftarHari);
// ubah urutan hari ke nama hari
let namaHari = daftarHari[hariSekarang - 1];

// Mendapatkan tanggal
let tanggalSekarang = tanggal.getDate();

// Mendapatkan urutan bulan
let bulanSekarang = tanggal.getMonth();
// ubah urutan bulan ke nama bulan
let namaBulan = daftarBulan[bulanSekarang];

// Mendapatkan tahun
let tahunSekarang = tanggal.getFullYear();

// Cetak tangggal
console.log(`Hari ini adalah hari ${namaHari}, tanggal ${tanggalSekarang} ${namaBulan} ${tahunSekarang}`);
