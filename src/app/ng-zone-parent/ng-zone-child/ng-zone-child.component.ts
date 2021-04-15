import { Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-zone-child',
  templateUrl: './ng-zone-child.component.html',
  styleUrls: ['./ng-zone-child.component.css']
})
export class NgZoneChildComponent implements OnInit {
  @Input() parentValue: number;
  public childValue: number = 0;

  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.runOutsideAngular();
  }

  runOutsideAngular() {
    let count = 0;
    // If we dont need to change anything in HTML then we can put the code in runOutsideAngular() method.
    this._ngZone.runOutsideAngular(() => {
      setInterval(() => {
        count++;
        if(count > 0) {
          this._ngZone.run(() => {
            this.childValue = Math.random();
          })
        } else {
          this.childValue = Math.random();
        }
      }, 1000);
    })
  }

}
