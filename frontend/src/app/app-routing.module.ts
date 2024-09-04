import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { ConsertoMotosComponent } from './conserto-motos/conserto-motos.component';
import { TipoConsertosComponent } from './tipo-consertos/tipo-consertos.component';

const routes: Routes = [
  { path: 'mecanicos', component: MecanicosComponent },
  { path: 'conserto-motos', component: ConsertoMotosComponent },
  { path: 'tipo-consertos', component: TipoConsertosComponent },
  { path: '', redirectTo: '/mecanicos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
