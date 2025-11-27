import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformesService {
  URL: string = 'https://proyecto-ejemplo-cd33f.firebaseio.com/curso-angular-avanzado-2/angel/informes.json'

  constructor(
    private http: HttpClient
  ) { }

  getInformes() {
    return this.http.get(this.URL)
      .pipe(
        map((datos: any) => {

          // {
          //   "-Of4B7ofseSCJv8mvXh_": {
          //     "contenido": "El contenido del informe",
          //     "titulo": "Un título"
          //   },
          //   "-Of4DyBQHYoIZuUQ5ZFa": {
          //     "contenido": "Contenido 1",
          //     "titulo": "Informe 1"
          //   }
          // }

          const listaInformes = []

          for (let id in datos) {
            const informe = {
              id,
              ...datos[id]
            }
            listaInformes.push(informe)
          }

          return listaInformes
        })
      )
  }

  createInforme(informe: any) {
    return this.http.post(this.URL, informe)
  }
}
