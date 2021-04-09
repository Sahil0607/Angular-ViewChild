import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildDirectiveChildComponent } from './viewchild-directive-child.component';

describe('ViewchildDirectiveChildComponent', () => {
  let component: ViewchildDirectiveChildComponent;
  let fixture: ComponentFixture<ViewchildDirectiveChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildDirectiveChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildDirectiveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
