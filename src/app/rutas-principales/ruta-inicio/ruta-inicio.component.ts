import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../componentes/modal/modal.component'


@Component({
    selector: 'ruta-inicio',
    templateUrl: './ruta-inicio.component.html',
    styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent {
    constructor(
        private readonly _dialog: MatDialog
    ) { }

    abrirModal() {
        const opcionesModal: MatDialogConfig = {
            disableClose: true,
            height: '450px',
            width: '900px',
        }

        const modal = this._dialog.open(ModalComponent, opcionesModal)

        modal.afterClosed().subscribe((respuestaModal) => {
            console.log('respuesta modal: ', respuestaModal);
      
            if (respuestaModal) {
              console.log('no es undefined');
            } else {
              console.log(' es undefined');
            }
          });
    }
}