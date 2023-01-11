import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { SesionComponent } from './sesion/sesion.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNoFoundComponent,
    SesionComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    PageNoFoundComponent,
    SesionComponent
  ]
})
export class PagesModule { }
