import { Component } from '@angular/core';
import { MiRouterOutletComponent } from "./mi-router-outlet/mi-router-outlet.component";
import { MiRouterLinkDirective } from "./mi-router-link.directive";

@Component({
  selector: 'app-cmp04-componentes-dinamicos-router',
  standalone: true,
  imports: [
    MiRouterOutletComponent,
    MiRouterLinkDirective,
  ],
  templateUrl: './cmp04-componentes-dinamicos-router.component.html',
  styleUrl: './cmp04-componentes-dinamicos-router.component.css'
})
export class Cmp04ComponentesDinamicosRouterComponent {

}
