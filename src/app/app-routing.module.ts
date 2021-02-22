import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiComponent } from './bi/bi.component';
import { LoginGuard } from './login.guard';
import { RutaBeckComponent } from './ruta-beck/ruta-beck.component';
import { RutaConsentimientoEComponent } from './ruta-consentimiento/ruta-consentimientoE.component';
import { RutaConsentimientoPAComponent } from './ruta-consentimientoP/ruta-consentimientoPA.component';
import { RutaEncuestaEComponent } from './ruta-encuestaE/ruta-encuestaE.component';
import { RutaEncuestaPAComponents } from './ruta-encuestaPA/ruta-encuestaPA.component';
import { RutaResultadosComponent } from './ruta-resultados/ruta-resultado.component';
import { RutaInicioComponent } from './rutas-principales/ruta-inicio/ruta-inicio.component';
import { RutaSecundariaComponent } from './rutas-secundarias/ruta-secundaria.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    component: RutaSecundariaComponent
  },
  {
    path: 'login',
    component: BiComponent
  },
  {
    path: 'consentimientoestudiante',
    component: RutaConsentimientoEComponent
  },
  {
    path: 'consentimiento',
    component: RutaConsentimientoPAComponent
  },
  {
    path: 'encuestaestudiante/:email',
    component: RutaEncuestaEComponent
  },
  {
    path: 'resultados',
    component: RutaResultadosComponent
  },
  {
    path: 'encuestapa',
    component: RutaEncuestaPAComponents
  },
  {
    path: 'beck',
    component: RutaBeckComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
