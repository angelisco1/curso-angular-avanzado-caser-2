import { Routes } from '@angular/router';
import { InicioComponent } from './components/cmp04-componentes-dinamicos-router/inicio/inicio.component';
import { ListadoComponent } from './components/cmp04-componentes-dinamicos-router/listado/listado.component';
// import { FormPagoComponent } from './components/cmp05-lazy-loading/form-pago/form-pago.component';

// Estas son las rutas que se usan para el cmp05-lazy-loading
export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'listado', component: ListadoComponent },
  // { path: 'pago', component: FormPagoComponent },
  { path: 'pago', loadComponent: () => import('./components/cmp05-lazy-loading/form-pago/form-pago.component').then(f => f.FormPagoComponent) },
];


// Funciones flecha
// () => {
//    return algo
// }
// () => algo





// Estas son las rutas que se usan para el cmp04-componentes-dinamicos-router
export const misRutas: Routes = [
  { path: '/inicio', component: InicioComponent },
  { path: '/listado', component: ListadoComponent },
];
