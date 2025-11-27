
import {
  Component,
  effect,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MiRouterService } from '../mi-router.service';
import { MiHostDirective } from '../mi-host.directive';
@Component({
  selector: 'app-mi-router-outlet',
  standalone: true,
  imports: [MiHostDirective],
  templateUrl: './mi-router-outlet.component.html',
  styleUrl: './mi-router-outlet.component.css',
})
export class MiRouterOutletComponent {
  @ViewChild(MiHostDirective) miHost!: MiHostDirective;

  constructor(private miRouter: MiRouterService) {
    effect(() => {
      addComponent(
        this.miRouter.componentChanged(),
        this.miHost.viewContainerRef
      );
    });
  }
}

function addComponent(
  component: Type<any> | undefined,
  viewContainerRef: ViewContainerRef
) {
  viewContainerRef.clear();
  if (component) {
    viewContainerRef.createComponent<any>(component);
  }
}