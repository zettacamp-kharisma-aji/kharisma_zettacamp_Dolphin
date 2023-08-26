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

// ==========================================================================  //
console.log('=================================================');

const bookPurchasing = (detailBook, discount, tax) => {
  let amountDiscount = 0;

  // Nama buku
  const namaBuku = detailBook.bookName;
  console.log(`Nama buku : ${namaBuku}`);

  // Menampilkan harga buku
  const hargaAwalBuku = detailBook.bookPrice;
  console.log(`Harga buku = Rp ${hargaAwalBuku}`);

  // Menghitung diskon buku jika ada
  if (discount > 0) {
    // mencari besar diskon jika diskon
    amountDiscount = (detailBook.bookPrice * discount) / 100;
    console.log(`Besar diskon = Rp ${amountDiscount} sebesar ${discount}%`);
    console.log(true);
  } else {
    // menampilkan string jika tidak diskon
    console.log(`Mohon maaf buku ini tidak diskon`);
    console.log(false);
  }

  // Menghitung harga setelah diskon
  const priceAfterDiscount = hargaAwalBuku - amountDiscount;
  console.log(`Harga setelah diskon = Rp ${priceAfterDiscount}`);

  // Menghitung besaran pajak
  const amountTax = (priceAfterDiscount * tax) / 100;
  console.log(`Besarnya pajak = Rp ${amountTax} sebesar ${tax}%`);

  //   Harga setelah diskon dan pajak
  const priceAfterDiscountAndTax = priceAfterDiscount + amountTax;
  console.log(`Besarnya harga setelah diskon dan pajak = Rp ${priceAfterDiscountAndTax}`);

  console.log('=================================================');
};

bookPurchasing({ bookName: nameBook1, bookPrice: priceBook1 }, 15, 11);
bookPurchasing({ bookName: nameBook2, bookPrice: priceBook2 }, 0, 11);
