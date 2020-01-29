import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/IPost';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  postList = [{title: "Real, non-hard coded sample post", thought: "Hello world!"}];

  constructor() { }

  onSubmit(post : IPost) {
    this.postList.unshift(post);
  }

  onDelete(i : number) {
    this.postList.splice(i, 1);
  }

  ngOnInit() {
  }

}
