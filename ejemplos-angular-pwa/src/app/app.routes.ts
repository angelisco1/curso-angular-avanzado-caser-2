import { Routes } from '@angular/router';
import { InformesComponent } from './pages/informes/informes.component';
import { NuevoInformeComponent } from './pages/nuevo-informe/nuevo-informe.component';

export const routes: Routes = [
  { path: '', component: InformesComponent },
  { path: 'nuevo-informe', component: NuevoInformeComponent }
];
