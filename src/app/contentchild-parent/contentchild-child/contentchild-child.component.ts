import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, Input, OnInit } from '@angular/core';
import { ContentchildParentComponent } from '../contentchild-parent.component';

@Component({
  selector: 'app-contentchild-child',
  templateUrl: './contentchild-child.component.html',
  styleUrls: ['./contentchild-child.component.css']
})
export class ContentchildChildComponent implements OnInit, AfterContentInit {
  @Input() message: string;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log('Message', this.message);
  }
}
