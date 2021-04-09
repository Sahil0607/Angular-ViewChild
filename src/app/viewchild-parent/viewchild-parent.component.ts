import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewchildChildComponent, {static: true}) viewchildChildComponent: ViewchildChildComponent;
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // If we use ViewchildChildComponent in ngOnInit(), we dont need to use this.cd.detectChanges();
    // Using {static: true} we can use viewChild in ngOnInit(). Default {static: false} so we can omit if we dot want to use.
    // console.log(this.viewchildChildComponent.sumMethod(12,23));
    // console.log(this.viewchildChildComponent.getName());
  }

ngAfterViewInit() {
  // We dont need to use viewchildChildComponent in ngAfterViewInit() if we use {static: true} in ViewChild
  console.log(this.viewchildChildComponent.sumMethod(12,23));
  console.log(this.viewchildChildComponent.getName());

  // Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
  // Resolve this error using detectChanges(). Do not use detectChanges() if we use viewChild in ngOnInit()
  this.cd.detectChanges();
}

updatedVal() {
  // Update child component value from parent component
  this.viewchildChildComponent.selectedVal = this.viewchildChildComponent.selectedVal + ' Patel'; 
}

}
