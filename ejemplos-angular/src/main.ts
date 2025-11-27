import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es'
import localeEn from '@angular/common/locales/en'
import localeIt from '@angular/common/locales/it'

registerLocaleData(localeEs, 'es')
registerLocaleData(localeEn, 'en')
registerLocaleData(localeIt, 'it')

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
