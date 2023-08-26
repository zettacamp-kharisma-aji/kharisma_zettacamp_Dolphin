// Regular function dengan function declaration
function cariTotalHarga(a, b) {
  return a + b;
}
console.log(cariTotalHarga(5000, 3000));

// Regular function dengan function expression
// Arrow function dengan function expression

// ==========================================================================  //
console.log('=================================================');

let daftarBuku = [
  { namaBuku: 'Atomic Habiits', hargaBuku: 650000, discount: 20, tax: 11 },
  { namaBuku: 'Filosofi Teras', hargaBuku: 200000, discount: 0, tax: 11 },
];

function bookPurchasing() {
  for (let i = 0; i < daftarBuku.length; i++) {
    const _namaBuku = daftarBuku[i].namaBuku;
    const _hargaBuku = daftarBuku[i].hargaBuku;
    const _discount = daftarBuku[i].discount;
    const _tax = daftarBuku[i].tax;

    let amountDiscount = 0;

    // Mendapatkan nama buku
    const bookName = _namaBuku;
    console.log(`Nama buku = ${bookName}`);

    // Mendapatkan harga awal buku
    const bookPrice = _hargaBuku;
    console.log(`Harga awal buku = Rp ${bookPrice}`);

    // Besaran discount
    // mencari besar diskon jika diskon
    if (_discount > 0) {
      amountDiscount = (bookPrice * _discount) / 100;
      console.log(`Besar diskon = Rp ${amountDiscount}`);
      console.log(true);
    } else {
      // menampilkan string jika tidak diskon
      console.log(`Mohon maaf buku ini tidak diskon`);
      console.log(false);
    }

    // Menghitung harga setelah diskon
    const priceAfterDiscount = bookPrice - amountDiscount;
    console.log(`Harga setelah diskon = Rp ${priceAfterDiscount}`);

    // Menghitung pajak
    const amountTax = (priceAfterDiscount * _tax) / 100;
    console.log(`Besarnya pajak = Rp ${amountTax}`);

    // Menghitung harga setelah pajak
    const priceAfterDiscountAndTax = priceAfterDiscount + amountTax;
    console.log(`Harga setelah diskon dan pajak = Rp ${priceAfterDiscountAndTax}`);

    console.log('=================================================');
  }
}

bookPurchasing();
