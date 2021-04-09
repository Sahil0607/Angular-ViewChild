import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewchildrenChildComponent } from './viewchildren-child/viewchildren-child.component';

@Component({
  selector: 'app-viewchildren-parent',
  templateUrl: './viewchildren-parent.component.html',
  styleUrls: ['./viewchildren-parent.component.css']
})
export class ViewchildrenParentComponent implements OnInit, AfterViewInit {

  // using { static: true} we can access viewchild in ngOnInit()
  // We can use in afterViewInit if we omit { static: true}
  @ViewChild(ViewchildrenChildComponent, { static: true}) childComp:ViewchildrenChildComponent;

  // { static: true} is not avialable in ViewChildren(). So we can access in AfterViewInit.
  @ViewChildren(ViewchildrenChildComponent) childrenComp: QueryList<ViewchildrenChildComponent>;

  constructor() { }

  ngOnInit(): void {
    console.log('Today date', this.childComp.today);

    // update time after 1 second. Manipulate child component
    setInterval(() => {
      this.childComp.today = new Date();
    }, 1000);
  }

  ngAfterViewInit() {
    // For more readeble we need to convert in to array
    console.log('ViewChildren', this.childrenComp.toArray());

    // Convert in to array and access each child using forEach and modify it with current time.
    this.childrenComp.toArray().forEach(eachChild => {
      setInterval(() => {
        eachChild.today = new Date();
      }, 1000);
    });
  }

}
