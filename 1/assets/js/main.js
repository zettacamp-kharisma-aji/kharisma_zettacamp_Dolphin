let nameBook1 = 'Atomic Habits';
let nameBook2 = 'Filosofi Teras';

const priceBook1 = 650000;
const priceBook2 = 200000;

// Cek apakah nama buku sama atau tidak
console.log(nameBook1 === nameBook2 ? true : false);

// Mencari buku yang harganya lebih mahal
console.log(priceBook1 > priceBook2 ? `Buku ${nameBook1} lebih mahal` : `Buku ${nameBook2} lebih mahal`);

// Cari rata rata dari 2 buku
const averagePrice = (priceBook1 + priceBook2) / 2;
console.log(`Rp ${averagePrice}`);

// Mencari rata rata buku ke kategori mahal atau murah
const isBookExpensiveOrCheap = averagePrice > 500000 ? 'Expensive' : 'Cheap';
console.log(isBookExpensiveOrCheap);
