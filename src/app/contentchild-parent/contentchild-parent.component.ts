import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentchild-parent',
  templateUrl: './contentchild-parent.component.html',
  styleUrls: ['./contentchild-parent.component.css']
})
export class ContentchildParentComponent implements OnInit {
  myMessage: String;
  messages: any;
  constructor() { }

  ngOnInit(): void {
    this.myMessage = 'Hello this is content child';
    this.messages = this.getMessage();
  }

  getMessage() {
      return [
          'Hello India',
          'Which team is winning Super Bowl? ',
          'Have you checked Ignite UI ?',
          'Take your broken heart and make it to the art'
      ];
  }

}
