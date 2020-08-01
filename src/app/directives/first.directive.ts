// Директива
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[changeTextColor]',
})
export class FirstDirective {
  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', 'red');
    this.r.setStyle(this.el.nativeElement, 'font-size', 'xx-large');
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'font-size', 'medium');
  }

  @HostListener('click' /*, ['$event']*/) onClick(/*event: Event*/) {
    this.r.setStyle(this.el.nativeElement, 'font-size', 'small');
  }
}
