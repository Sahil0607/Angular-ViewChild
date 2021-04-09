import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.css']
})
export class ViewchildChildComponent implements OnInit {
  public sum: number = 0;
  private name: string = 'Hello I am sahil';
  public selectedVal: string = '';

  // Access and update element using ViewChild()
  // We can access myName in ngOnInit() using {static: true}
  @ViewChild('myName') myName: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  sumMethod(num1, num2) {
    this.sum = num1 + num2;
    return this.sum;
  }

  getName(): string {
    return this.name;
  }

  onClick() {
    this.selectedVal = this.myName.nativeElement.value;
  }
}
