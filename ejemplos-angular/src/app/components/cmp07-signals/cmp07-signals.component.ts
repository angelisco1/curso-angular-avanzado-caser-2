import { Component, computed, effect, signal } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-cmp07-signals',
  standalone: true,
  imports: [],
  templateUrl: './cmp07-signals.component.html',
  styleUrl: './cmp07-signals.component.css'
})
export class Cmp07SignalsComponent {

  filtro = signal<string>('')
  cocktails = signal<Array<any>>([])

  // totalCocktails = signal<number>(0)
  totalCocktails = computed(() => {
    return this.cocktails().length
  })

  constructor(
    private cocktailsService: CocktailsService,
  ) {

    effect(() => {
      this.cocktailsService.getCocktailsByName(this.filtro())
      .subscribe((datos) => {
        this.cocktails.set(datos)

        // this.totalCocktails.set(datos.length)
      })
    })

  }


  setFiltro(event: Event) {
    const nuevoFiltro = (event.target as HTMLInputElement).value
    console.log(nuevoFiltro)

    this.filtro.set(nuevoFiltro)

    // this.cocktailsService.getCocktailsByName(nuevoFiltro)
    //   .subscribe((datos) => {
    //     this.cocktails.set(datos)
    //   })
  }

}
