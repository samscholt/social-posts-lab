import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter();

  constructor() { }

  submitPost(subject : string, body: string) {
    if (subject && body) {
      this.submitted.emit({title: subject, thought: body});
    }
  }

  ngOnInit() {
  }

}
