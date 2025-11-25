import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from "@angular/core";
import { Routes } from "@angular/router";


export const MIS_RUTAS: InjectionToken<Routes> = new InjectionToken<Routes>('MIS_RUTAS')

export const provideMisRutas = (rutas: Routes): EnvironmentProviders => {
  return makeEnvironmentProviders([
    { provide: MIS_RUTAS, useValue: rutas }
  ])
}

// function provide(rutas: any) {
//   return makeEnvironmentProviders([
//     { provide: MIS_RUTAS, useValue: rutas }
//   ])
// }