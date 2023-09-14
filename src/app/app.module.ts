import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsInputComponent } from './forms-input/forms-input.component';
import { ListAllPropertyComponent } from './list-all-property/list-all-property.component';
import { ListStatusPropertyComponent } from './list-status-property/list-status-property.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsInputComponent,
    ListAllPropertyComponent,
    ListStatusPropertyComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
