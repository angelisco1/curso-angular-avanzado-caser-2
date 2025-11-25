import { Directive, HostListener, Input } from '@angular/core';
import { MiRouterService } from './mi-router.service';

@Directive({
  selector: '[appMiRouterLink]',
  standalone: true
})
export class MiRouterLinkDirective {

  @Input('appMiRouterLink') path: string = '/'

  constructor(
    private miRouterService: MiRouterService,
  ) { }

  @HostListener('click') onClick() {
    this.miRouterService.navigateByUrl(this.path)
  }

}
