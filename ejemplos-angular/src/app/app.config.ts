import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { misRutas, routes } from './app.routes';
import { provideMisRutas } from './components/cmp04-componentes-dinamicos-router/mi-router.provider';
import { provideHttpClient } from '@angular/common/http';
import { MissingTranslationHandler, MissingTranslationHandlerParams, provideTranslateService, StrictTranslation } from '@ngx-translate/core'
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader'
import { Observable } from 'rxjs';


class NoTranslationHandler extends MissingTranslationHandler {
  override handle(params: MissingTranslationHandlerParams): StrictTranslation | Observable<StrictTranslation> {
    return params.translateService.get('sin_traduccion')
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideMisRutas(misRutas),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'es',
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: NoTranslationHandler
      }
    })
  ]
};
