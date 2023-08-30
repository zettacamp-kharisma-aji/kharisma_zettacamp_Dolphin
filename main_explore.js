const daftarLagu = [
  { artis: 'Guyon Waton', judulLagu: 'Sanes', genre: 'Dangdut', durasi: 301, tahun: 2023 },
  { artis: 'Guyon Waton', judulLagu: 'Kok Iso Yo', genre: 'Dangdut', durasi: 319, tahun: 2022 },
  { artis: 'Peterpan', judulLagu: 'Mimpi Yang Sempurna', genre: 'Pop', durasi: 202, tahun: 2003 },
  { artis: 'Noah', judulLagu: 'Separuh Aku', genre: 'Pop', durasi: 190, tahun: 2012 },
  { artis: 'Peterpan', judulLagu: 'Mungkin Nanti', genre: 'Pop', durasi: 256, tahun: 2004 },
  { artis: 'Radja', judulLagu: 'Cinderella', genre: 'Pop', durasi: 199, tahun: 2004 },
  { artis: 'Tulus', judulLagu: 'Hati Hati di Jalan', genre: 'Jazz', durasi: 241, tahun: 2022 },
  { artis: 'Tulus', judulLagu: 'Pamit', genre: 'Jazz', durasi: 211, tahun: 2016 },
];

function cariTahun(judulInput) {
  let tahun;
  daftarLagu.forEach((lagu) => {
    if (lagu.judulLagu.toLowerCase == judulInput.toLowerCase) {
      tahun = lagu.tahun;
    }
  });
  return tahun;
}

console.log(cariTahun('cinderella'));

function cariDurasiLagu(judulInput) {
  let durasi;
  daftarLagu.forEach((lagu) => {
    if (lagu.judulLagu.toLowerCase == judulInput.toLowerCase) {
      durasi = Math.floor(lagu.durasi / 60);
    }
  });
  return durasi;
}

console.log(cariDurasiLagu('cinderella'));
