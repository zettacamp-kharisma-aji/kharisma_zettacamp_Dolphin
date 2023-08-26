function bookPurchasing(detailBook = { bookName, bookPrice }, discount, tax) {
  // Nama buku
  const namaBuku = detailBook.bookName;
  console.log(`Nama buku : ${namaBuku}`);

  // Menampilkan harga awal buku
  const hargaAwalBuku = detailBook.bookPrice;
  console.log(`Harga buku = Rp ${hargaAwalBuku}`);

  // Menghitung diskon buku jika ada
  if (discount > 0) {
    // mencari besar diskon jika diskon
    amountDiscount = (hargaAwalBuku * discount) / 100;
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
}

let nameBook1 = 'Atomic Habits';
let nameBook2 = 'Filosofi Teras';

const priceBook1 = 650000;
const priceBook2 = 200000;

bookPurchasing({ bookName: nameBook1, bookPrice: priceBook1 }, 15, 11);
bookPurchasing({ bookName: nameBook2, bookPrice: priceBook2 }, 0, 11);
