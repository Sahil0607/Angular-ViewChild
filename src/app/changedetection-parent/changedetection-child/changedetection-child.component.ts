import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedetection-child',
  templateUrl: './changedetection-child.component.html',
  styleUrls: ['./changedetection-child.component.css'],
  // Angular has 2 change detection stretegy. OnPush and Default
  // OnPush mode will check once and Default mode check always
  changeDetection: ChangeDetectionStrategy.Default 
  // changeDetection: ChangeDetectionStrategy.OnPush  // button will not work. We mutate object directly
  // Use concat method instead of push in array. So we can update val. using immutable way in parent.
})
export class ChangedetectionChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() today: any[];

  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }

  // js premetive datatype are immutable(cannot altered) non-prepetive datatype (array, obj) are mutable(can altered).
  
  // If we will not use change detection strategy it will set Deault for us.
  // changes by trigger by event. cd can done in 2 phase. Application phase and cd phase.

  ngOnInit(): void {
    // we can stop default change strategy detection using detech() method and manually check for changes.
    console.log(this.today);
  }

  ngOnChanges() {
    // Detect changes only for once in this hook. so print val only first time. So use in ngDoCheck()
    // Another way we can run change detection once for current component and its children using detectChanges() method.
    this.cd.detectChanges();

    // If we want to reattech change change detector to cd tree then we use reattech() function.
    this.cd.reattach(); // reattech cd which is detect in ngOnChanges()
  }

  ngDoCheck() {
    // If we mutate(push method) object then we need to trigger markForCheck(), it will check input property will change or not.
    // this.cd.markForCheck();
    
    // It will change for all time changes instead of check only first time.
    this.cd.detectChanges();
  }

}
