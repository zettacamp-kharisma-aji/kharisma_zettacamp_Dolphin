import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'cekProperti';
  description = 'Harap masukkan detail properti dengan benar';

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

  onAddData(
    inputData:
      | {
          inputName: string;
          inputAddress: string;
          inputPrice: number;
          inputLinkPicture: string;
        }
      | any
  ) {
    let isCheck: boolean = false;
    if (
      inputData.inputName != '' &&
      inputData.inputAddress != '' &&
      inputData.inputPrice != 0 &&
      inputData.inputLinkPicture != ''
    ) {
      this.listProperty.push({
        name: inputData.inputName,
        address: inputData.inputAddress,
        price: inputData.inputPrice,
        linkPicture: inputData.inputLinkPicture,
        isCheck: isCheck,
      });
      alert('Success add data');
    } else {
      alert('Data not completed');
    }
  }

  onChangeStatus(
    indexNumber:
      | {
          index: number;
        }
      | any
  ) {
    this.listProperty[indexNumber].isCheck =
      !this.listProperty[indexNumber].isCheck;
  }

  onBuyProperty(
    indexNumber:
      | {
          index: number;
        }
      | any
  ) {}
}
