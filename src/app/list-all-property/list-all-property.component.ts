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

  @Output() changeStatus: EventEmitter<number> = new EventEmitter();
  @Output() buyProperty: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onCheckProperty() {
    this.singleProperty.isCheck = !this.singleProperty.isCheck;
    this.changeStatus.emit(this.singleProperty);
  }

  onBuyProperty() {
    alert(`Selamat kamu berhasil membeli ${this.singleProperty.name}`);
    this.buyProperty.emit(this.singleProperty);
  }
}
