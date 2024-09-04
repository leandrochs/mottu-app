import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { ConsertoMotosComponent } from './conserto-motos/conserto-motos.component';
import { TipoConsertosComponent } from './tipo-consertos/tipo-consertos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mecanicos', component: MecanicosComponent },
  { path: 'conserto-motos', component: ConsertoMotosComponent },
  { path: 'tipo-consertos', component: TipoConsertosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
