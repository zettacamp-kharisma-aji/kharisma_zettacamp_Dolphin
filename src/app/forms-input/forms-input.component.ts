import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forms-input',
  templateUrl: './forms-input.component.html',
  styleUrls: ['./forms-input.component.css'],
})
export class FormsInputComponent implements OnInit {
  @Output() addData = new EventEmitter<{
    inputName: string;
    inputAddress: string;
    inputPrice: number;
    inputLinkPicture: string;
  }>();
  name = '';
  address = '';
  price = 0;
  linkPicture = '';

  constructor() {}

  ngOnInit(): void {}

  inputData(
    inputName: string,
    inputAddress: string,
    inputPrice: number,
    inputLinkPicture: string
  ) {
    this.addData.emit({
      inputName: this.name,
      inputAddress: this.address,
      inputPrice: this.price,
      inputLinkPicture: this.linkPicture,
    });
    this.name = '';
    this.address = '';
    this.price = 0;
    this.linkPicture = '';
  }
}
