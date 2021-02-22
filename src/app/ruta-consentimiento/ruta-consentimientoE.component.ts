import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "ruta-consentimiento",
    templateUrl: "./ruta-consentimientoE.component.html",
    styleUrls: ["./ruta-consentimientoE.component.scss"]
})

export class RutaConsentimientoEComponent implements OnInit {

    email = '';

    constructor(private _router: Router, private route: ActivatedRoute){}

    ngOnInit() {
        this.email = this.route.snapshot.paramMap.get('email');
    }

    encuesta(email: number){
        this._router.navigate(['/encuestaestudiante', email]);
    }

}