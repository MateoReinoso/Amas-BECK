import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutasPrincipales } from './constantes/rutas-principales';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.coomponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DividerModule } from "primeng/divider";
import { ButtonModule } from "primeng/button";
import { SplitterModule } from "primeng/splitter";
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { ReactiveFormsModule} from '@angular/forms' 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ...RutasPrincipales    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DividerModule,
    SplitterModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
