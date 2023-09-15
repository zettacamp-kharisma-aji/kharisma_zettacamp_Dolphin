import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-forms-input',
  templateUrl: './forms-input.component.html',
  styleUrls: ['./forms-input.component.css'],
})
export class FormsInputComponent implements OnInit, OnChanges {
  @Output() addData = new EventEmitter<{
    inputName: string;
    inputAddress: string;
    inputPrice: number;
    inputLinkPicture: string;
  }>();
  // name = '';
  // address = '';
  // price = 0;
  // linkPicture = '';

  @ViewChild('inputNameProperty') inputNameProperty!: ElementRef;
  @ViewChild('inputAddressProperty') inputAddressProperty!: ElementRef;
  @ViewChild('inputPriceProperty') inputPriceProperty!: ElementRef;
  @ViewChild('inputLinkProperty') inputLinkProperty!: ElementRef;

  constructor() {}

  inputData(
    inputName: string,
    inputAddress: string,
    inputPrice: number,
    inputLinkPicture: string
  ) {
    this.addData.emit({
      inputName: this.inputNameProperty.nativeElement.value,
      inputAddress: this.inputAddressProperty.nativeElement.value,
      inputPrice: this.inputPriceProperty.nativeElement.value,
      inputLinkPicture: this.inputLinkProperty.nativeElement.value,
    });
    this.inputNameProperty.nativeElement.value = '';
    this.inputAddressProperty.nativeElement.value = '';
    this.inputPriceProperty.nativeElement.valueAsNumber = 0;
    this.inputLinkProperty.nativeElement.value = '';
  }

  ngOnInit(): void {
    console.log('Ini input component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // alert('ngOnChanges lewat form');
  }
}
