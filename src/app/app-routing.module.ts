import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaConsentimientoEComponent } from './ruta-consentimiento/ruta-consentimientoE.component';
import { RutaConsentimientoPAComponent } from './ruta-consentimientoP/ruta-consentimientoPA.component';
import { RutaInicioComponent } from './rutas-principales/ruta-inicio/ruta-inicio.component';
import { RutaSecundariaComponent } from './rutas-secundarias/ruta-secundaria.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    component: RutaSecundariaComponent
  },
  {
    path: 'consentimientoestudiante',
    component: RutaConsentimientoEComponent
  },
  {
    path: 'consentimiento',
    component: RutaConsentimientoPAComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
