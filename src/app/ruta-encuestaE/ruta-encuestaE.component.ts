import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ruta-encuestaE",
    templateUrl: "./ruta-encuestaE.component.html",
    styleUrls: ["./ruta-encuestaE.component.scss"]
})

export class RutaEncuestaEComponent {
    constructor(private router: Router) { }

    irBeck() {
        this.router.navigate(['/', 'beck']);
    }
}