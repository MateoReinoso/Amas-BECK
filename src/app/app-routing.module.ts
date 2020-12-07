import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
