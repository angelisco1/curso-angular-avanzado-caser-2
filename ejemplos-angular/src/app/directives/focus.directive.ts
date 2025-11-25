import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})
export class FocusDirective {
  // @HostBinding('autofocus') autofocus: boolean = true
  @HostBinding('style.backgroundColor') bgColor: string = 'white'

  constructor() { }

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'white'
  }
}
