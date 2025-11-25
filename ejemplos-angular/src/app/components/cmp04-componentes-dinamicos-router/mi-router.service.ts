import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiRouterService {

  rutaCambiada$ = new BehaviorSubject<string>(window.location.pathname)

  constructor() { }

  // /una/ruta/cualquiera -> ['/una', 'ruta', 'cualquiera'] -> /una/ruta/cualquiera
  // /tareas/29 -> ['/tareas', tarea.id]
  // /tareas/29 -> `/tareas/${tarea.id}`

  navigate(segmentos: Array<string>) {
    const path = segmentos.join('/')
    this.navigateByUrl(path)
  }

  navigateByUrl(path: string) {
    window.history.pushState({}, '', path)
    this.rutaCambiada$.next(path)
  }
}
