import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-status-property',
  templateUrl: './list-status-property.component.html',
  styleUrls: ['./list-status-property.component.css'],
})
export class ListStatusPropertyComponent implements OnInit {
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
