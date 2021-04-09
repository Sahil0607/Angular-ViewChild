import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchildren-child',
  templateUrl: './viewchildren-child.component.html',
  styleUrls: ['./viewchildren-child.component.css']
})
export class ViewchildrenChildComponent implements OnInit {
  today: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
