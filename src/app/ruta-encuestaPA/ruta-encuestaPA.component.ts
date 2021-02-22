import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ruta-encuestaPA",
    templateUrl: "./ruta-encuestaPA.component.html",
    styleUrls: ["./ruta-encuestaPA.component.scss"]
})

export class RutaEncuestaPAComponents{
    constructor(private router: Router) { }

    irBeck() {
        this.router.navigate(['/', 'beck']);
    }
}