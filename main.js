function BookPurchasing(detailBook = { bookName, bookPrice }, discount, tax, stock, purchased) {
  // Mendapatkan nama buku
  const bookName = detailBook.bookName;

  // Mendapatkan harga awal buku
  const originalPrice = detailBook.bookPrice;

  // Mencari besar diskon
  let amountDiscount = 0;
  // mencari besar diskon jika diskon
  if (discount > 0) {
    amountDiscount = (originalPrice * discount) / 100;
  } else {
    //jika tidak diskon
    amountDiscount = 0;
  }

  // Mencari besar harga setelah diskon
  const priceAfterDiscount = originalPrice - amountDiscount;

  // Mencari besarnya pajak
  const amountTax = (priceAfterDiscount * tax) / 100;

  // Mencari harga setelah diskon dan pajak
  const amountAfterDiscountAndTax = priceAfterDiscount + amountTax;
  let finalPrice = 0;
  for (let i = 1; i <= purchased; i++) {
    if (i > stock) {
      console.log('tidak ada stok lagi');
      break;
    }
    let remainingStock = stock - i;
    finalPrice = amountAfterDiscountAndTax * i;
    console.log(`${bookName} beli sebanyak ${i} dengan harga ${finalPrice} sisa stok buku ${remainingStock}`);
  }
  return { bookName, finalPrice };
}

console.log(BookPurchasing((detailBook = { bookName: 'Filosofi Teras', bookPrice: 250000 }), 15, 11, 3, 5));
