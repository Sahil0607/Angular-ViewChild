import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveViewchild]'
})
export class DirectiveViewchildDirective {
  public food = 'Burger';
  
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    // Renderer2 allow us to manipulate elemnt of our app without touch dom directlt
    // Where we can add or remove class, content, element, attribute, style using Renderer2
    // Create new element or text and append them inside in other element.
    let pizza = renderer.createText('Pizza');
    renderer.appendChild(el.nativeElement, pizza); 
  }

  AddNewFood(food: string) {
    let pizza = this.renderer.createText(' ' + food);
    return this.renderer.appendChild(this.el.nativeElement, pizza); 
  }

  exmapleFun() {
    // Create new div element and create text node.
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world');

    // Place the text node inside our new div
    this.renderer.appendChild(div, text);
    // finally our div is added to the element renferenced by our directive
    this.renderer.appendChild(this.el.nativeElement, div);

    // It will look like this
    // <article>
    // <div>Hello world</div>
    // </article>
  }

  setRemoveAttribute() {
    this.renderer.setAttribute(this.el.nativeElement, 'area-hidden', 'true');
    this.renderer.removeAttribute(this.el.nativeElement, 'area-hidden', 'true');
  }

  addRemoveClass() {
    this.renderer.addClass(this.el.nativeElement, 'wild');
    this.renderer.removeClass(this.el.nativeElement, 'wild');
  }

  setRemoveStyle() {
    // Set style
    this.renderer.setStyle(this.el.nativeElement, 
      'border-left',
      '2px dashed olive'  
    );
    // remove style just use style name. Dont need to mention value
    this.renderer.removeStyle(this.el.nativeElement, 
      'border-left'
    );
  }

  setProperty() {
    // Set alt propert on image element
    this.renderer.setProperty(this.el.nativeElement, 'alt', 'Testy Food');

    // set value of input property
    this.renderer.setProperty(this.el.nativeElement, 'value', 'My name is sahil'); 
  }

}
