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
  // First occurence of template child element, without element we cannto access viewChild. Dont directly mess with any element.
  // Strongly recomend not access dom like this with viewchild angular has batterway to access such as string interpolation property binding.

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
    console.log(this.selectedVal);
  }
}
