showBookData();
function showBookData() {
  let listBooks = JSON.parse(localStorage.getItem('bookData'));
  if (listBooks != null) {
    document.getElementById('tabel_body').innerHTML = '';
    listBooks.forEach((element) => {
      var btnEditId = 'btnedit' + element.id;
      var btnDeleteId = 'btndelete' + element.id;
      var tableRow =
        "<tr Id='" +
        element.id +
        "'   data-name='" +
        element.nama +
        "' data-stok='" +
        element.stok +
        "' data-pengarang='" +
        element.pengarang +
        "' data-description='" +
        element.deskripsi +
        "'>" +
        "<td class='td-data'>" +
        element.id +
        '</td>' +
        "<td class='td-data'>" +
        element.nama +
        '</td>' +
        "<td class='td-data'>" +
        element.stok +
        '</td>' +
        "<td class='td-data'>" +
        element.pengarang +
        '</td>' +
        "<td class='td-data'>" +
        element.deskripsi +
        '</td>' +
        "<td class='td-data'>" +
        "<button id='" +
        btnEditId +
        "' class='btn btn-info btn-xs btn-editcustomer' onclick='EditBook(" +
        element.id +
        ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" +
        btnDeleteId +
        "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteDataFromLocalStorage(" +
        element.id +
        ")'>Delete</button>" +
        '</td>' +
        '</tr>';
      document.getElementById('tabel_body').innerHTML += tableRow;
    });
  }
  document.getElementById('tambah_buku').onclick = function () {
    let AddRow =
      '<tr>' +
      "<td class='td-data'></td>" +
      "<td class='td-data'><input type='text' id='txtname' placeholder='book name..'></td>" +
      "<td class='td-data'><input type='number' id='txtstock' placeholder='stok..'></td>" +
      "<td class='td-data'><input type='text'id= 'txtauthor' placeholder='author'></td>" +
      "<td class='td-data'><input type='text'id= 'txtdesc' placeholder='deskripsi'></td>" +
      "<td class='td-data'>" +
      "<button id= 'btnaddBook' onclick='addBooktoObject()' class='btn btn-success'>Add</button></td>" +
      '</tr>';
    document.getElementById('tabel_body').innerHTML += AddRow;
  };
}

function number() {
  const ID = Date.now();
  return ID;
}

function addBooktoObject() {
  let bookid = number();
  let bookName = document.getElementById('txtname').value;
  if (!bookName) {
    alert('Judul buku belum diisi');
    return false;
  }

  let bookStock = document.getElementById('txtstock').value;
  if (bookStock < 0 || !bookStock) {
    alert('harap masukkan stok yang benar');
    return false;
  }

  let author = document.getElementById('txtauthor').value;
  if (!author) {
    alert('Harap masukkan nama pengarang');
    return false;
  }

  let description = document.getElementById('txtdesc').value;
  if (!description) {
    alert('Harap masukkan deskripsi buku');
    return false;
  }
  let bookObj = {
    id: bookid,
    nama: bookName,
    stok: bookStock,
    pengarang: author,
    deskripsi: description,
  };

  addDataToLocalStorage(bookObj);
  showBookData();
}

function addDataToLocalStorage(obj) {
  let booksData = new Array();
  let book = JSON.parse(localStorage.getItem('bookData'));
  if (book != null) {
    book.push(obj);
    localStorage.setItem('bookData', JSON.stringify(book));
  } else {
    booksData.push(obj);
    localStorage.setItem('bookData', JSON.stringify(booksData));
  }
}

function deleteDataFromLocalStorage(id) {
  let book = JSON.parse(localStorage.getItem('bookData'));
  if (book != null) {
    book.splice(book.findIndex((a) => a.id === id));
    localStorage.setItem('bookData', JSON.stringify(book));
  }
  showBookData();
}

function EditBook(bookid) {
  let userRow = document.getElementById(bookid);
  let data = userRow.querySelectorAll('.td-data');
  let id = data[0].innerHTML;
  let name = data[1].innerHTML;
  let stok = data[2].innerHTML;
  let pengarang = data[3].innerHTML;
  let deskripsi = data[4].innerHTML;

  data[0].innerHTML = '<input name="txtuserid"  disabled id="txtuserid" value="' + id + '"/>';
  data[1].innerHTML = '<input name="txtname" id="txtname" value="' + name + '"/>';
  data[2].innerHTML = '<input name="txtstock" id="txtstock" value="' + stok + '"/>';
  data[3].innerHTML = '<input name="txtauthor" id="txtauthor" value="' + pengarang + '"/>';
  data[4].innerHTML = '<input name="txtdesc" id="txtdesc" value="' + deskripsi + '"/>';
  data[5].innerHTML =
    "<button class='btn btn-primary btn-xs btn-updateCustomer' onclick='UpdateBooks(" +
    bookid +
    ")'>" +
    "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>" +
    "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancel(" +
    bookid +
    ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>";
}

function cancel(BookId) {
  let btnEditId = 'btnedit' + BookId.id;
  let btnDeleteId = 'btndelete' + BookId.id;
  let CustomerRow = document.getElementById(BookId);
  let data = CustomerRow.querySelectorAll('.td-data');

  let name = CustomerRow.getAttribute('data-name');
  let stok = CustomerRow.getAttribute('data-stok');
  let pengarang = CustomerRow.getAttribute('data-pengarang');
  let deskripsi = CustomerRow.getAttribute('data-description');

  data[0].innerHTML = BookId;
  data[1].innerHTML = name;
  data[2].innerHTML = stok;
  data[3].innerHTML = pengarang;
  data[4].innerHTML = deskripsi;

  let allBtn =
    "<button id='" +
    btnEditId +
    "' class='btn btn-info btn-xs btn-editcustomer' onclick='EditBook(" +
    BookId +
    ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
    "<button id='" +
    btnDeleteId +
    "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteDataFromLocalStorage(" +
    BookId +
    ")'>Delete</button>";
  data[5].innerHTML = allBtn;
}

function UpdateBooks(IDbook) {
  let userRow = document.getElementById(IDbook); //this gives tr of  whose button was clicked
  let data = userRow.querySelectorAll('.td-data');
  let name = data[1].querySelector('#txtname').value;
  let stok = data[2].querySelector('#txtstock').value;
  let pengarang = data[3].querySelector('#txtauthor').value;
  let deskripsi = data[4].querySelector('#txtdesc').value;
  let bookObj = {
    id: IDbook,
    nama: name,
    stok: stok,
    pengarang: pengarang,
    deskripsi: deskripsi,
  };
  updateDataToLocalStorage(bookObj);
  showBookData();
}

function updateDataToLocalStorage(bookObj) {
  var book = JSON.parse(localStorage.getItem('bookData'));
  if (book != null) {
    var books = book.filter((x) => x.id == bookObj.id).pop();
    if (books != null) {
      books.nama = bookObj.nama;
      books.stok = bookObj.stok;
      books.pengarang = bookObj.pengarang;
      books.deskripsi = bookObj.deskripsi;
    }
    localStorage.setItem('bookData', JSON.stringify(book));
  }
}
