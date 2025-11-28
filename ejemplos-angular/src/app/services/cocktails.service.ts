import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  URL: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  constructor(
    private http: HttpClient,
  ) { }

  getCocktailsByName(nombre: string) {
    return this.http.get(this.URL + nombre)
      .pipe(
        map((datos: any) => {
          if (Array.isArray(datos.drinks)) {
            return datos.drinks
          }
          return []
        })
      )
  }

}
