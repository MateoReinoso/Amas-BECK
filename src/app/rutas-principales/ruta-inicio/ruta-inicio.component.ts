import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent {
  constructor(
    private readonly _dialog: MatDialog,
    private readonly _router: Router
  ) { }

  irCategorias() {
    return this._router.navigate(['/', 'categorias'])
  }

  irLogin(){
    return this._router.navigate(['/', 'login'])
  }

}
