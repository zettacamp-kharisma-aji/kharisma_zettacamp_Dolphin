import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsInputComponent } from './forms-input/forms-input.component';
import { ListAllPropertyComponent } from './list-all-property/list-all-property.component';
import { ListStatusPropertyComponent } from './list-status-property/list-status-property.component';
import { CheckedPropertyComponent } from './checked-property/checked-property.component';
import { UncheckedPropertyComponent } from './unchecked-property/unchecked-property.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsInputComponent,
    ListAllPropertyComponent,
    ListStatusPropertyComponent,
    CheckedPropertyComponent,
    UncheckedPropertyComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
