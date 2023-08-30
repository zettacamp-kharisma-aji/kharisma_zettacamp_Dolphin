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

// Mencari lagu berdasarkan artis
function grupByArtis() {
  const hasil = {};
  daftarLagu.forEach((lagu) => {
    if (hasil[lagu.artis]) {
      hasil[lagu.artis].push(lagu);
    } else {
      hasil[lagu.artis] = [lagu];
    }
  });
  return hasil;
}

// Mencari lagu berdasarkan genre
function grupByGenre() {
  const hasil = {};
  daftarLagu.forEach((lagu) => {
    if (hasil[lagu.genre]) {
      hasil[lagu.genre].push(lagu);
    } else {
      hasil[lagu.genre] = [lagu];
    }
  });
  return hasil;
}

// Membuat playlist
function playlist(detik) {
  let daftarPlaylist = [];
  let totalDurasi = 0;
  let durasiTerpanjang = 0;

  for (let i = 0; i < daftarPlaylist.length + 1; i++) {
    let randomAngka = Math.floor(Math.random() * daftarLagu.length);
    if (totalDurasi < detik - durasiTerpanjang) {
      if (durasiTerpanjang < daftarLagu[randomAngka].durasi) {
        durasiTerpanjang = daftarLagu[randomAngka].durasi;
      }
      totalDurasi += daftarLagu[randomAngka].durasi;
      daftarPlaylist.push(daftarLagu[randomAngka]);
    }
  }
  return { daftarPlaylist, totalDurasi };
}

console.log(`===== Grup lagu berdasarkan artis =====`);
console.log(grupByArtis());
console.log(`===== Grup lagu berdasarkan genre =====`);
console.log(grupByGenre());
console.log(`===== Buat Playlist =====`);
console.log(playlist(3600));
