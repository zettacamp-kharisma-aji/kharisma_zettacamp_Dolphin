import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checked-property',
  templateUrl: './checked-property.component.html',
  styleUrls: ['./checked-property.component.css'],
})
export class CheckedPropertyComponent implements OnInit {
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
