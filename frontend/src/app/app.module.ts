import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { ConsertoMotosComponent } from './conserto-motos/conserto-motos.component';
import { TipoConsertosComponent } from './tipo-consertos/tipo-consertos.component';

@NgModule({
  declarations: [AppComponent, MecanicosComponent, ConsertoMotosComponent, TipoConsertosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
