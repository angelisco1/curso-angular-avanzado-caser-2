import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMiHost]',
  standalone: true
})
export class MiHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }

}
