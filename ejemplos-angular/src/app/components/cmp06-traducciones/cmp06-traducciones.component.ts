import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cmp06-traducciones',
  standalone: true,
  imports: [
    TranslatePipe,
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './cmp06-traducciones.component.html',
  styleUrl: './cmp06-traducciones.component.css'
})
export class Cmp06TraduccionesComponent {
  hola: string = 'hola_mundo'
  hola2: string = ''
  selectedLang: string = 'es'

  precio: number = 19.95
  fecha: Date = new Date(2024, 10, 2)

  constructor(
    private translateService: TranslateService,
  ) {
    this.translateService.addLangs(['es', 'en', 'it'])
    this.translateService.use(this.selectedLang)
    // this.translateService.getFallbackLang()

    this.translateService.stream('hola_mundo')
      .subscribe((translation) => {
        this.hola2 = translation
      })
  }

  setLanguage(event: Event) {
    this.selectedLang = (event.target as HTMLSelectElement).value
    this.translateService.use(this.selectedLang)
  }

}
