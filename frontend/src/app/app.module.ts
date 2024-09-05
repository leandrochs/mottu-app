import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { ConsertoMotosComponent } from './conserto-motos/conserto-motos.component';
import { TipoConsertosComponent } from './tipo-consertos/tipo-consertos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, MecanicosComponent, ConsertoMotosComponent, TipoConsertosComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
