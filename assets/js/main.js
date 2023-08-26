// Product Detail Modal
const detailProduk = document.querySelectorAll('.product_detail_modal'),
  detailBtn = document.querySelectorAll('.btn_beli'),
  closeBtn = document.querySelectorAll('.btn_detail_modal_close');

let produkDetail = function (lihatDetailProduk) {
  detailProduk[lihatDetailProduk].classList.add('active_product_detail_modal');
};

// Ketika detail button di klik
detailBtn.forEach((db, i) => {
  db.addEventListener('click', () => {
    produkDetail(i);
  });
});

// Ketika close modal di klik
closeBtn.forEach((dc) => {
  dc.addEventListener('click', () => {
    detailProduk.forEach((dp) => {
      dp.classList.remove('active_product_detail_modal');
    });
  });
});
