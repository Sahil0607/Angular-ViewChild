import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentprojection-child',
  templateUrl: './contentprojection-child.component.html',
  styleUrls: ['./contentprojection-child.component.css']
})
export class ContentprojectionChildComponent implements OnInit {
  @Input() header: String;
  today = new Date().toDateString();

  constructor() { }

  ngOnInit(): void {}
   
  // Content Projection: Use when we need static panel and dynamics body in it.For proj. cont. <ng-content> in body
  // If we have similar design in project but content will be dynamic in that purpose we will use content projection.
  // If we have data such as string, number, arrey, obj we can pass with @Input() decorater, it will not use for html content.
  // when we have html content then we need to use <ng-content> in child component's template.
}
