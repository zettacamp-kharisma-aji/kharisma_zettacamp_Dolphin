import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cekProperti';
  description = 'Harap masukkan detail properti dengan benar';
  name = '';
  address = '';
  price = 0;
  linkPicture = '';

  listProperty: any = [
    {
      name: 'Rumah Wijaya',
      address: 'Jalan Soekarno Hatta',
      price: 250000000,
      isCheck: false,
      linkPicture:
        'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2019/05/Bentuk-Rumah-Minimalis-1.jpg',
    },
    {
      name: 'Rumah Mak Ratmi',
      address: 'Jalan Bahagia',
      price: 150000000,
      isCheck: false,
      linkPicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJdxQtijlZeX-tpRX-WwKL419B-Mb9e0KD9o7wtZE&s',
    },
    {
      name: 'Modern House',
      address: 'Jalan Soeratman 23',
      price: 100000000,
      isCheck: false,
      linkPicture:
        'https://asset.olympicfurniture.co.id/NEWS/2022/rumah%20kecil%20%20tapi%20nyaman%20minimalist.jpg',
    },
  ];
  inputData(
    inputName: string,
    inputAddress: string,
    inputPrice: number,
    inputLinkPicture: string
  ) {
    let isCheck: boolean = false;
    if (
      inputName != '' &&
      inputAddress != '' &&
      inputPrice != 0 &&
      inputLinkPicture != ''
    ) {
      this.listProperty.push({
        name: inputName,
        address: inputAddress,
        price: inputPrice,
        linkPicture: inputLinkPicture,
        isCheck: isCheck,
      });
      alert('Success add data');
    } else {
      alert('Data not completed');
    }
    this.name = '';
    this.address = '';
    this.price = 0;
    this.linkPicture = '';
  }

  checkProperty(index: number) {
    this.listProperty[index].isCheck = !this.listProperty[index].isCheck;
  }

  buyProperty(index: number) {
    alert(`Selamat kamu berhasil membeli ${this.listProperty[index].name}`);
    this.listProperty.splice(index, 1);
    console.log(this.listProperty);
  }
}
