import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unchecked-property',
  templateUrl: './unchecked-property.component.html',
  styleUrls: ['./unchecked-property.component.css'],
})
export class UncheckedPropertyComponent implements OnInit {
  @Input('statusSingleProperty') singleProperty:
    | {
        name: string;
        address: string;
        price: number;
        isCheck: boolean;
        linkPicture: string;
      }
    | any;

  constructor() {}

  ngOnInit(): void {}
}
