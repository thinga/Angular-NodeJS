import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  //posts = [
    //{title: 'First Post', content: 'This ist the first post content'},
    //{title: 'Second Post', content: 'This is the second post content'},
    //{title: 'Third Post', content: 'This is the third content '}
  //];

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService){

  }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) =>{
        this.posts = posts;
    });
  }
}
