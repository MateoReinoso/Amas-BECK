import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
   selector: "bi",
   templateUrl: "./bi.component.html",
   styleUrls: ["./bi.component.scss"]
})

export class BiComponent {
   constructor(private router: Router) { }
   resulados() {
      this.router.navigate(['/', 'resultados']);
   }
}