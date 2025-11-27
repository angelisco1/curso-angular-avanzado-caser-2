
import { inject, Injectable, signal, Type } from '@angular/core';
import { MIS_RUTAS } from './mi-router-provider';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MiRouterService {

  componentChanged = signal<Type<any> | undefined >(undefined);

  /*
  constructor(
    @Inject(MIS_RUTAS) public routes: Routes // Inyecta el valor asociado a 'MIS_RUTAS'
  ) {}
  */

  // Otra manera de inyectar el valor a routes
  public routes = inject(MIS_RUTAS);

  navigateByUrl(path: string) {
    window.history.pushState({}, '', path);
    this.updateComponent(path);
  }

  updateComponent(path: string): void {
    const routeFinded: Route | undefined = findRouteByPath(path, this.routes);
    this.componentChanged.set(routeFinded?.component);
  }

}

function findRouteByPath(path: string, routes: Route[]): Route | undefined {
    return routes.find(route => route.path === path);
}

/*
  * Ejemplo:
  *  segmentos = ['productos', 'detalle', '123'];
  *  path = /productos/detalle/123
  */
 /*
  navigate(segmentos: Array<string>) {
    const path = segmentos.join('/');
    this.navigateByUrl(path);
  }*/