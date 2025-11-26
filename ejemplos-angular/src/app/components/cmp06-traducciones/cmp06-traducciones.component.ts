import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cmp06-traducciones',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './cmp06-traducciones.component.html',
  styleUrl: './cmp06-traducciones.component.css'
})
export class Cmp06TraduccionesComponent {
  hola: string = 'hola_mundo'
  hola2: string = ''
  selectedLang: string = 'es'


  constructor(
    private translateService: TranslateService,
  ) {
    this.translateService.addLangs(['es', 'en', 'it'])
    this.translateService.use(this.selectedLang)
    // this.translateService.getFallbackLang()

    this.hola2 = this.translateService.instant('hola_mundo')
  }

  setLanguage(event: Event) {
    this.selectedLang = (event.target as HTMLSelectElement).value
    this.translateService.use(this.selectedLang)
    this.hola2 = this.translateService.instant('hola_mundo')
  }

}
