import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
    selector: 'modal-component',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent{

    constructor(
        private readonly _router: Router
    ){}

    irCategorias(){
        return this._router.navigate(['/','categorias'])
    }

}