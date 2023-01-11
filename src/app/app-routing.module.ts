import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './pages/sesion/sesion.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:SesionComponent},
  {path:'page', component:PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
