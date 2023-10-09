import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './services/post.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
];
@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [PostService],
})
export class PostModule {}
