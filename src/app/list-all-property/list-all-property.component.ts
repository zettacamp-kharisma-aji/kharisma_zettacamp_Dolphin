import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-all-property',
  templateUrl: './list-all-property.component.html',
  styleUrls: ['./list-all-property.component.css'],
})
export class ListAllPropertyComponent implements OnInit {
  @Input('listAllProperty') singleProperty:
    | {
        name: string;
        address: string;
        price: number;
        isCheck: boolean;
        linkPicture: string;
      }
    | any;
  @Input('indexItem') index: any;
  constructor() {}

  ngOnInit(): void {}

  checkProperty(index: number) {
    this.singleProperty[index].isCheck = !this.singleProperty[index].isCheck;
  }

  buyProperty(index: number) {
    // alert(`Selamat kamu berhasil membeli ${this.listProperty[index].name}`);
    // this.listProperty.splice(index, 1);
    // console.log(this.listProperty);
  }
}
