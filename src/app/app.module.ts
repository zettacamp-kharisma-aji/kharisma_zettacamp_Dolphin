import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SidebarModule, PostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
