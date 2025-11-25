import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { misRutas, routes } from './app.routes';
import { provideMisRutas } from './components/cmp04-componentes-dinamicos-router/mi-router.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes),
    provideMisRutas(misRutas)
  ]
};
