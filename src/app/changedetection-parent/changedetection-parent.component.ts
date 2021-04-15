import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedetection-parent',
  templateUrl: './changedetection-parent.component.html',
  styleUrls: ['./changedetection-parent.component.css']
})
export class ChangedetectionParentComponent implements OnInit {
  public date = [new Date().getTime()];
  constructor() { }

  ngOnInit(): void {}

  updateDate() {
    // Use this immutable approach for OnPush stretegy. Concate will create new array based on existing array.
    // so child component can detect changes.
    // New reference is created when we use concat method. 
    // this.date = this.date.concat(new Date().getTime());

    // Use for default stretagy method. It will use mutable way to update existing array.
    this.date.push(new Date().getTime());
  }

}
