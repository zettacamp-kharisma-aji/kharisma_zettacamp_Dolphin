import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-checked-property',
  templateUrl: './checked-property.component.html',
  styleUrls: ['./checked-property.component.css'],
})
export class CheckedPropertyComponent implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // alert('ngOnChanges');
  }
}
