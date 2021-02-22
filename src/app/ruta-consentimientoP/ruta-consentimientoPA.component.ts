import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ruta-consentimientoP",
    templateUrl: "./ruta-consentimientoPA.component.html",
    styleUrls: ["./ruta-cosentimientoPA.component.scss"],
})

export class RutaConsentimientoPAComponent{
    constructor(private router:Router){}

    irEncuesta(){
        this.router.navigate(['/','encuestapa']);
    }
}