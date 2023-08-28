function BookPurchasing(detailBook = { bookName, bookPrice }, discount, tax, stock, purchased, long_credit) {
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

  // Daftar bulan
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

  // Mendapatkan tanggal hari ini
  let waktuSekarang = new Date();
  const waktuPembayaranPerBulan = [];

  for (let i = 0; i < long_credit; i++) {
    const waktuPembayaran = new Date(waktuSekarang.getFullYear(), waktuSekarang.getMonth() + i, waktuSekarang.getDate() + 30);
    const tanggalWaktuPembayaran = waktuPembayaran.getDate();
    const bulanWaktuPembayaran = daftarBulan[waktuPembayaran.getMonth()];
    const tahunWaktuPembayaran = waktuPembayaran.getFullYear();
    waktuPembayaranPerBulan.push(`${tanggalWaktuPembayaran} ${bulanWaktuPembayaran} ${tahunWaktuPembayaran}`);
  }

  waktuPembayaranPerBulan.forEach((waktuBayar, index) => {
    console.log(`--------- Pembayaran ke ${index + 1} --------`);
    console.log(waktuBayar);
  });

  // Mendapatkan array terakhir
  // Cara 1 dengan length - 1
  // const pembayaranTerakhir = waktuPembayaranPerBulan[waktuPembayaranPerBulan.length - 1];
  // Cara 2 dengan 'at'
  // const pembayaranTerakhir = waktuPembayaranPerBulan.at(-1);
  // Cara 3 dengan 'pop'
  const pembayaranTerakhir = waktuPembayaranPerBulan.pop();

  return { bookName, finalPrice, pembayaranTerakhir };
}

console.log(BookPurchasing((detailBook = { bookName: 'Filosofi Teras', bookPrice: 250000 }), 15, 11, 3, 5, 7));
