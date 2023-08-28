let nama = ['Kharisma', 'Fajar', 'Rahma', 'Aji'];
// Menampilkan panjang array = 'length'
console.log(nama.length); // 4
// Menampilkan objek index terakhir dengan length
console.log(`${nama[nama.length - 1]} = array terakhir dengan length`);

// Mencari array berdasarkan nomor index = 'at'
console.log(nama.at(2)); // Rahma
console.log(nama.at(-1)); // Aji, index terakhir

// ====================================================== //
console.log('========================================');

// For Each
const jarakLari = [56, 45, 65, , , 34, 65, 12];
jarakLari.forEach((jarak) => {
  console.log(`jarak lari = ${jarak}`);
});

// ====================================================== //
console.log('========================================');

// Shift = menghilangkan di depan
var deretAngka = [3, 2, 5, 6];
console.log(`sebelum shift = ${deretAngka}`);

deretAngka.shift(2, 1);
console.log(`shift = ${deretAngka}`);

// ====================================================== //
console.log('========================================');

// Unshift = menambahkan di depan
var deretAngka = [3, 2, 5, 6];
console.log(`sebelum unshift = ${deretAngka}`);

deretAngka.unshift(1, 2);
console.log(`unshift = ${deretAngka}`);

// ====================================================== //
console.log('========================================');

// Push = menambahkan di akhir
var deretAngka = [3, 2, 5, 6];
console.log(`sebelum push = ${deretAngka}`);

deretAngka.push(1, 2);
console.log(`sebelum push = ${deretAngka}`);

// ====================================================== //
console.log('========================================');

// Map
var deretAngka = [1, 4, 9];
console.log(`${deretAngka} -> sebelum Map`);
var kaliTiga = deretAngka.map((num) => num * 3);
console.log(`${kaliTiga} -> hasil Map`);

// ====================================================== //
console.log('========================================');
console.log('index of');
// Index of
var daftarMakanan = ['Bakso', 'Mie Ayam', 'Sate', 'Bakso', 'Soto'];
console.log(daftarMakanan.indexOf('Mie Ayam')); // 1
console.log(daftarMakanan.indexOf('Bakso')); // 0
console.log(daftarMakanan.indexOf('Bakso', 2)); // 3
console.log(daftarMakanan.indexOf('Seafood')); // -1 karena tidak ada
// ====================================================== //

// ====================================================== //
console.log('========================================');
console.log('last index of');
var daftarMakanan = ['Bakso', 'Mie Ayam', 'Sate', 'Bakso', 'Soto'];
console.log(daftarMakanan.lastIndexOf('Bakso')); // 3

console.log('========================================');

// Includes
console.log('Includes');
var daftarMakanan = ['Bakso', 'Mie Ayam', 'Sate', 'Bakso', 'Soto'];
console.log(daftarMakanan.includes('Sate')); // true

// ====================================================== //
console.log('========================================');

// Sort
console.log('Sort');
var deretAngka = [1, 30, 4, 21];
console.log(deretAngka.sort());
var deretAngka = [1, 30, 4, 21, 100000];
console.log(deretAngka.sort());

// ====================================================== //
console.log('========================================');
// Reverse
console.log('Reverse');
console.log('Sebelum Reverse');
var deretAngka = [1, 2, 3, 4];
console.log(deretAngka);
console.log('Setelah reverse');
console.log(deretAngka.reverse());
