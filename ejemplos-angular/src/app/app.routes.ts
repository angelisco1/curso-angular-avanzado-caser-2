import { Routes } from '@angular/router';
import { InicioComponent } from './components/cmp04-componentes-dinamicos-router/inicio/inicio.component';
import { ListadoComponent } from './components/cmp04-componentes-dinamicos-router/listado/listado.component';

export const routes: Routes = [];


export const misRutas: Routes = [
  { path: '/inicio', component: InicioComponent },
  { path: '/listado', component: ListadoComponent },
];
