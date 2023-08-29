function BookPurchasing(detailBook = { bookName, bookPrice }, discount, tax, stock, purchased, long_credit) {
  const listWaktuPembayaran = [];
  const dataPembelian = { judulBuku: 'Untitled', hargaTotal: 0, pembayaranTerakhir: 0, besarCicilan: 0 };
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

  // mendapatkan harga cicilan
  const besarCicilan = finalPrice / long_credit;

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
    const detailPembayaran = {
      periodePembayaran: index + 1,
      tanggalPembayaran: waktuBayar,
      besarCicilan: besarCicilan,
      totalBayarSaatIni: besarCicilan * (index + 1),
    };
    listWaktuPembayaran.push(detailPembayaran);
  });

  // Mendapatkan array terakhir
  const pembayaranTerakhir = waktuPembayaranPerBulan[waktuPembayaranPerBulan.length - 1];

  // Mengisi data pembelian -> Judul Buku
  Object.defineProperty(dataPembelian, 'judulBuku', { value: bookName });

  // Mengisi data pembelian -> Total harga buku
  Object.defineProperty(dataPembelian, 'hargaTotal', { value: finalPrice });

  // Mengisi data pembelian -> Waktu pembayaran terakhir
  Object.defineProperty(dataPembelian, 'pembayaranTerakhir', { value: pembayaranTerakhir == undefined ? 'Tidak ada' : pembayaranTerakhir });

  // Mengisi data pembelian -> Besar cicilan per bulan
  Object.defineProperty(dataPembelian, 'besarCicilan', { value: besarCicilan == Infinity ? 'Tidak ada cicilan' : besarCicilan });

  console.log(listWaktuPembayaran);

  return { dataPembelian };
}

console.log(BookPurchasing((detailBook = { bookName: 'Filosofi Teras', bookPrice: 20000 }), 5, 11, 10, 5, 2));
