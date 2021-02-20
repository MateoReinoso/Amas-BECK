import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ruta-secundaria",
    templateUrl: "./ruta-secundaria.component.html",
    styleUrls: ["./ruta-secundaria.component.scss"],
})
export class RutaSecundariaComponent {
    constructor(private readonly _router: Router) { }

    consentimientoEstudiante() {
        return this._router.navigate(['/', 'consentimientoestudiante'])
    }

    consentimientoDocenteAdministrativo() {
        return this._router.navigate(['/', 'consentimiento'])
    }
}
