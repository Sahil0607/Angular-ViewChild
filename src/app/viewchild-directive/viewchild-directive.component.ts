import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DirectiveViewchildDirective } from './directive/directive-viewchild.directive';

@Component({
  selector: 'app-viewchild-directive',
  templateUrl: './viewchild-directive.component.html',
  styleUrls: ['./viewchild-directive.component.css']
})
export class ViewchildDirectiveComponent implements OnInit, AfterViewInit {
  extraFood: string;

  // Add directive in ViewChild. It will not using without adding directive in template
  @ViewChild(DirectiveViewchildDirective) directive: DirectiveViewchildDirective;
  set myDirective(directive: DirectiveViewchildDirective) {
    // Use directive property and set('Burger') in current component.
    this.extraFood = directive.food;
  };

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // We will wait for AfterViewInit to access our variable, as child component nad directives become available.
    console.log('Directive ', this.directive);
    // this.cd.detectChanges();
  }

  onClick() {
    this.directive.AddNewFood('Pasta');
  }

}
