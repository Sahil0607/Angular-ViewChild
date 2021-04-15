import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-zone-parent',
  templateUrl: './ng-zone-parent.component.html',
  styleUrls: ['./ng-zone-parent.component.css']
})
export class NgZoneParentComponent implements OnInit {
  public number: number = 0;
  // An injectable service for executing work inside or outside of the Angular zone.
  // he most common use of this service is to optimize performance when starting a work consisting of one or more asynchronous tasks that don't require UI updates or error handling to be handled by Angular.
  // Such tasks can be kicked off via runOutsideAngular and if needed, these tasks can reenter the Angular zone via run.

  constructor() { }

  // run(): Running functions via run allows you to reenter Angular zone from a task that was executed outside of the Angular zone 
  // Any future tasks or microtasks scheduled from within this function will continue executing from within the Angular zone.
  // Use run to rerender the angular zone and do work that updated the app model.

  ngOnInit(): void {
    this.randomValue();
  }

  randomValue() {
    setInterval(() => {
      this.number = Math.random();
    }, 1000);
  }
}
