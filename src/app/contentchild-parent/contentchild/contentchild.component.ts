import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ContentchildChildComponent } from '../contentchild-child/contentchild-child.component';
import { ContentchildParentComponent } from '../contentchild-parent.component';

@Component({
  selector: 'app-contentchild',
  templateUrl: './contentchild.component.html',
  styleUrls: ['./contentchild.component.css']
})
export class ContentchildComponent implements OnInit, AfterContentInit {
  @ContentChild(ContentchildChildComponent, {static: true}) contentchildChildComponent: ContentchildChildComponent;
  
  // @ContentChildren(ContentchildChildComponent) contentchildrenChildComponent: QueryList<ContentchildChildComponent>;
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // ContentChild can use in OnInit() and dont need this.cd.detectChanges() for ngOnInit()
    this.contentchildChildComponent.message = 'Sahilll';
    console.log('contentchildChildComponent', this.contentchildChildComponent);
  }

  ngAfterContentInit() {

    // ContentChildren
    // console.log('contentchildrenChildComponent', this.contentchildrenChildComponent.toArray());
    // this.contentchildrenChildComponent.forEach((m) => m.message = 'Foo');

    // Used for changed content.
    this.cd.detectChanges();
  }

}
