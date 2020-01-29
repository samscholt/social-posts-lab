import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {IPost} from '../interfaces/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  @Output() deleted = new EventEmitter();

  constructor() { }

  deletePost() {
    this.deleted.emit();
  }

  ngOnInit() {
  }

}
