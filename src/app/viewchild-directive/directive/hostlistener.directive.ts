import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('red');
  }

  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('green');
  }

  ChangeBgColor(color: string) {
    //Also use this concept
    // this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
