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

const bookPurchasing = (_detailBook = { bookName: 'Nama Buku', bookPrice: 0 }, _discount = 0, _tax = 0) => {
  let bookName = _detailBook.bookName;
  let bookPrice = _detailBook.bookPrice;
  let discount = _discount;
  let tax = _tax;
  let amountDiscount = 0;

  // Nama buku
  const namaBuku = bookName;
  console.log(`Nama buku : ${namaBuku}`);

  // Menampilkan harga buku
  const hargaAwalBuku = bookPrice;
  console.log(`Harga buku = Rp ${hargaAwalBuku}`);

  // Menghitung diskon buku jika ada
  if (discount > 0) {
    // mencari besar diskon jika diskon
    amountDiscount = (bookPrice * discount) / 100;
    console.log(`Besar diskon = Rp ${amountDiscount}`);
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
  console.log(`Besarnya pajak = Rp ${amountTax}`);

  //   Harga setelah diskon dan pajak
  const priceAfterDiscountAndTax = priceAfterDiscount + amountTax;
  console.log(`Besarnya harga setelah diskon dan pajak = Rp ${priceAfterDiscountAndTax}`);

  console.log('=================================================');
};

bookPurchasing((detailBook = { bookName: nameBook1, bookPrice: priceBook1 }), 20, 11);
bookPurchasing((detailBook = { bookName: nameBook2, bookPrice: priceBook2 }), (_discount = 0), (_tax = 11));
bookPurchasing((detailBook = { bookName: nameBook2, bookPrice: priceBook2 }), (_discount = 0));
bookPurchasing((detailBook = { bookName: nameBook2, bookPrice: priceBook2 }));
bookPurchasing();

// ==========================================================================  //
console.log('=================================================');
