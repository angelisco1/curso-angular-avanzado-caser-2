import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionesService {

  constructor(
    private http: HttpClient,
  ) { }

  guardarSuscripcion(suscripcion: PushSubscription) {
    return this.http.post('https://proyecto-ejemplo-cd33f.firebaseio.com/curso-angular-avanzado-2/angel/notificaciones.json', suscripcion)
  }
}
