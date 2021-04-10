import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { DateViewerComponent } from '../../date-viewer/date-viewer.component';

@Component({
  selector: 'app-ex-content-child-child',
  templateUrl: './ex-content-child-child.component.html',
  styleUrls: ['./ex-content-child-child.component.css']
})
export class ExContentChildChildComponent implements OnInit, AfterContentInit {
  @Input() header: String;
  today = new Date().toDateString();

  @ContentChild(DateViewerComponent, {static: true}) dateViewerComponent:DateViewerComponent;

  @ContentChildren(DateViewerComponent) allDateViewerComponent: QueryList<DateViewerComponent>;

  constructor() { }

  ngOnInit(): void {
    // We can change the value of dateViewerComponent
    console.log('dateViewerComponent', this.dateViewerComponent);
  }

  ngAfterContentInit() {
    // We can changes public property of DateViewerComponent
    // We can loop through(forEach loop) and manipulate DateViewerComponent.
   console.log('allDateViewerComponent', this.allDateViewerComponent.toArray()); 
  }

}
