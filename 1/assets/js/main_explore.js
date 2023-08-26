let book1 = 'Atomic Habits';
let book2 = 'Filosofi Teras';

const priceBook1 = 650000;
const priceBook2 = 200000;

// Cek apakah nama buku sama atau tidak
console.log(book1 === book2 ? true : false);

// Mencari buku yang harganya lebih mahal
console.log(priceBook1 > priceBook2 ? `Buku ${book1} lebih mahal` : `Buku ${book2} lebih mahal`);

// Cari rata rata dari 2 buku
const averagePrice = (priceBook1 + priceBook2) / 2;
console.log(`Rp ${averagePrice}`);

// Mencari rata rata buku ke kategori mahal atau murah
const isBookExpensiveOrCheap = averagePrice > 500000 ? 'Expensive' : 'Cheap';
console.log(isBookExpensiveOrCheap);

const priceList = [65000, 200000];
console.log(priceList);
priceList.push(350000);
console.log(priceList);
priceList[1] = 22222;
console.log(priceList);

// ==========================================================================  //
console.log('=================================================');

let daftarBuku = [
  { namaBuku: 'Atomic Habiits', hargaBuku: 650000 },
  { namaBuku: 'Filosofi Teras', hargaBuku: 200000 },
];

// Menambah item di daftar buku
daftarBuku.push({ namaBuku: 'Cyber and Network Security', hargaBuku: 400000 });
console.log(daftarBuku);

let daftarHargaBukuAkhir = [];

// Mencari harga rata-rata dari daftar buku yang ada
let totalHargaBuku = 0;

// Mendapatkan harga per buku
for (let i = 0; i < daftarBuku.length; i++) {
  let daftarHargaBuku = daftarBuku[i].hargaBuku;
  daftarHargaBukuAkhir.push(daftarHargaBuku);
}

// Mendapatkan total harga buku
for (let j = 0; j < daftarHargaBukuAkhir.length; j++) {
  totalHargaBuku += daftarHargaBukuAkhir[j];
}

// Mencari harga rata rata dari semua buku
let hargaRataRataBuku = totalHargaBuku / daftarBuku.length;
console.log(hargaRataRataBuku);

// ==========================================================================  //
console.log('=================================================');

console.log(10 !== '10'); //true
console.log(10 !== 10); //false
console.log(10 != '10'); //false

// Aritmatika
var a = 5;
var b = 3;

var penjumlahan = a + b;
var pengurangan = a - b;
var perkalian = a * b;
var perpangkatan = a ** b;
var pembagian = a / b;
var modulus = a % b;

console.log(penjumlahan);
console.log(pengurangan);
console.log(perkalian);
console.log(perpangkatan);
console.log(pembagian);
console.log(modulus);

// ternari
var ternary = a < 5 ? 'A lebih kecil dari 5' : 'A lebih besar dari 5';
console.log(ternary);

// ==========================================================================  //
console.log('=================================================');

// increment prefix dan sufix
var c = 10;
// Sufix
console.log('increment suffix c++');
console.log(c++);
console.log(c++);
console.log(c);

// Prefix
console.log('increment prefix ++d');
var d = 10;
console.log(++d);
console.log(++d);

// decrement prefix dan sufix
var e = 10;
// Sufix
console.log('decrement suffix e--');
console.log(e--);
console.log(e--);

// Prefix
var f = 10;
console.log('decrement prefix --f');
console.log(--f);
console.log(--f);

// ==========================================================================  //
console.log('=================================================');

// Perbandingan
console.log('Perbandingan');
console.log(10 == 10); // true
console.log(10 === '10'); // false meskipun value sama tapi tipe datanya berbeda
console.log(10 === 10); // true karena value dan tipe data sama
console.log(10 != 10); // false
console.log(10 !== '10'); // true
console.log(10 !== 8); // true
console.log(10 < 12); // true
console.log(10 > 12); // false
console.log(10 >= 12); // false
console.log(10 <= 12); // true

// ==========================================================================  //
console.log('=================================================');

var a = 100;

console.log('penggunaan &&');
console.log(a == 100 && a < 200); // true karena keduanya benar
console.log(a == 100 && a > 200); // false karena salah satunya salah
console.log(a == 150 && a > 200); // false karena semua salah

console.log('penggunaan ||');
console.log(a == 100 || a < 200); // true karena keduanya benar
console.log(a == 100 || a > 200); // true karena salah satunya benar
console.log(a == 150 || a > 200); // false karena semua salah

// ==========================================================================  //
console.log('=================================================');
