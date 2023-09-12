import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorMessageComponent } from './author-message/author-message.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { SidebarAdsComponent } from './sidebar-ads/sidebar-ads.component';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    AuthorMessageComponent,
    FeaturedPostComponent,
    SidebarAdsComponent,
    SidebarLinkComponent,
  ],
  imports: [CommonModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
