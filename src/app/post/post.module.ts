import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostImageComponent } from './post-image/post-image.component';
import { ShareButtonComponent } from './share-button/share-button.component';

@NgModule({
  declarations: [
    PostComponent,
    PostDetailComponent,
    PostImageComponent,
    ShareButtonComponent,
  ],
  imports: [CommonModule],
  exports: [PostComponent],
})
export class PostModule {}
