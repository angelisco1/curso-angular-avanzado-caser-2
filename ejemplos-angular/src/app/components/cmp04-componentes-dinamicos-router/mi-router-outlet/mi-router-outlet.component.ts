import { Component, Inject, ViewChild } from '@angular/core';
import { MiHostDirective } from "../mi-host.directive";
import { MiRouterService } from '../mi-router.service';
import { MIS_RUTAS } from '../mi-router.provider';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-mi-router-outlet',
  standalone: true,
  imports: [MiHostDirective],
  templateUrl: './mi-router-outlet.component.html',
  styleUrl: './mi-router-outlet.component.css'
})
export class MiRouterOutletComponent {
  @ViewChild(MiHostDirective) miHost!: MiHostDirective

  constructor(
    private miRouter: MiRouterService,
    @Inject(MIS_RUTAS) private rutas: Routes,
  ) {}

  ngAfterViewInit() {
    console.log(this.rutas)

    const vcr = this.miHost.viewContainerRef

    this.miRouter.rutaCambiada$.subscribe((path) => {
      console.log('Vamos a cambiar a ' + path)

      vcr.clear()

      const rutaAPintar = this.rutas.find(ruta => ruta.path === path)
      // { path: '/listado', component: ListadoComponent}

      const componente = rutaAPintar?.component

      if (componente) {
        vcr.createComponent(componente)
      }

    })
  }

}
