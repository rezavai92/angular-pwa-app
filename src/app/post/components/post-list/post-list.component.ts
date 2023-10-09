import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/post/services/post.service';
import { IPost } from 'src/app/post/interfaces/Post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts!: IPost[];

  constructor(private postService: PostService) {}

  fetching = false;
  search = '';
  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts() {
    this.fetching = true;
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
      this.fetching = false;
    });
  }
}
