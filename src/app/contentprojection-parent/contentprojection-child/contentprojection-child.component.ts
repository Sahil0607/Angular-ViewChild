import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentprojection-child',
  templateUrl: './contentprojection-child.component.html',
  styleUrls: ['./contentprojection-child.component.css']
})
export class ContentprojectionChildComponent implements OnInit {
  @Input() header: string;
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
